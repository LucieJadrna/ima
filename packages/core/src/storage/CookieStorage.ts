import GenericError from '../error/GenericError';
import Request from '../router/Request';
import Response from '../router/Response';
import Window from '../window/Window';
import Storage from './Storage';

/**
 * Implementation note: This is the largest possible safe value that has been
 * tested, used to represent "infinity".
 */
const MAX_EXPIRE_DATE = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

/**
 * Separator used to separate cookie declarations in the `Cookie` HTTP
 * header or the return value of the `document.cookie` property.
 */
const COOKIE_SEPARATOR = '; ';

export type Options = {
  domain?: string;
  expires?: number | Date;
  httpOnly?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: string;
  secure?: boolean;
};

export type Cookie = {
  options: Options;
  value: string;
};

export type CookieValue = string | undefined;

/**
 * Storage of cookies, mirroring the cookies to the current request / response
 * at the server side and the `document.cookie` property at the client
 * side. The storage caches the cookies internally.
 */
export default class CookieStorage extends Storage<CookieValue> {
  /**
   * The window utility used to determine whether the IMA is being run
   * at the client or at the server.
   */
  private _window: Window;

  /**
   * The current HTTP request. This field is used at the server side.
   */
  private _request: Request;

  /**
   * The current HTTP response. This field is used at the server side.
   */
  private _response: Response;

  /**
   * The internal storage of entries.
   */
  private _storage: Map<string, Cookie> = new Map();

  /**
   * The overriding cookie attribute values.
   */
  private _options: Options = {
    path: '/',
    expires: undefined,
    maxAge: undefined,
    secure: false,
    httpOnly: false,
    domain: '',
    sameSite: 'Lax',
  };
  /**
   * Transform encode and decode functions for cookie value.
   */
  private _transformFunction: {
    encode: (value: string) => string;
    decode: (value: string) => string;
  } = {
    encode: value => value,
    decode: value => value,
  };

  static get $dependencies() {
    return [Window, Request, Response];
  }

  /**
   * Initializes the cookie storage.
   *
   * @param window The window utility.
   * @param request The current HTTP request.
   * @param response The current HTTP response.
   * @example
   *      cookie.set('cookie', 'value', { expires: 10 }); // cookie expires
   *                                                      // after 10s
   *      cookie.set('cookie'); // delete cookie
   *
   */
  constructor(window: Window, request: Request, response: Response) {
    super();

    this._window = window;
    this._request = request;
    this._response = response;
  }

  /**
   * @inheritDoc
   */
  init(options: Options = {}, transformFunction = {}): this {
    this._transformFunction = Object.assign(
      this._transformFunction,
      transformFunction
    );
    this._options = Object.assign(this._options, options);
    this._parse();

    return this;
  }

  /**
   * @inheritDoc
   */
  has(name: string): boolean {
    this._parse();

    return this._storage.has(name);
  }

  /**
   * @inheritDoc
   */
  get(name: string): CookieValue {
    this._parse();

    return this._storage.has(name) ? this._storage.get(name)!.value : undefined;
  }

  /**
   * @inheritDoc
   * @param name The key identifying the storage entry.
   * @param value The storage entry value.
   * @param options The cookie options. The `maxAge` is the maximum
   *        age in seconds of the cookie before it will be deleted, the
   *        `expires` is an alternative to that, specifying the moment
   *        at which the cookie will be discarded. The `domain` and
   *        `path` specify the cookie's domain and path. The
   *        `httpOnly` and `secure` flags set the flags of the
   *        same name of the cookie.
   */
  set(name: string, value: CookieValue, options: Options = {}): this {
    options = Object.assign({}, this._options, options);

    if (value === undefined) {
      // Deletes the cookie
      options.maxAge = 0;
      options.expires = this._getExpirationAsDate(-1);
    } else {
      this._recomputeCookieMaxAgeAndExpires(options);
    }

    value = this._sanitizeCookieValue(value + '');

    if (this._window.isClient()) {
      document.cookie = this._generateCookieString(name, value, options);
    } else {
      this._response.setCookie(name, value, options);
    }

    this._storage.set(name, { value, options });

    return this;
  }

  /**
   * Deletes the cookie identified by the specified name.
   *
   * @param name Name identifying the cookie.
   * @param options The cookie options. The `domain` and
   *        `path` specify the cookie's domain and path. The
   *        `httpOnly` and `secure` flags set the flags of the
   *        same name of the cookie.
   * @return This storage.
   */
  delete(name: string, options: Options = {}): this {
    if (this._storage.has(name)) {
      this.set(name, undefined, options);
      this._storage.delete(name);
    }

    return this;
  }

  /**
   * @inheritDoc
   */
  clear(): this {
    for (const cookieName of this.keys()) {
      this.delete(cookieName);
    }

    this._storage.clear();

    return this;
  }

  /**
   * @inheritDoc
   */
  keys(): Iterable<string> {
    this._parse();

    return this._storage.keys();
  }

  /**
   * @inheritDoc
   */
  size(): number {
    this._parse();

    return this._storage.size;
  }

  /**
   * Returns all cookies in this storage serialized to a string compatible
   * with the `Cookie` HTTP header.
   *
   * @return All cookies in this storage serialized to a string
   *         compatible with the `Cookie` HTTP header.
   */
  getCookiesStringForCookieHeader(): string {
    const cookieStrings = [];

    for (const cookieName of this.keys()) {
      const cookieItem = this._storage.get(cookieName);

      cookieStrings.push(
        this._generateCookieString(cookieName, cookieItem!.value, {})
      );
    }

    return cookieStrings.join(COOKIE_SEPARATOR);
  }

  /**
   * Parses cookies from the provided `Set-Cookie` HTTP header value.
   *
   * The parsed cookies will be set to the internal storage, and the current
   * HTTP response (via the `Set-Cookie` HTTP header) if at the server
   * side, or the browser (via the `document.cookie` property).
   *
   * @param setCookieHeader The value of the `Set-Cookie` HTTP
   *        header.
   */
  parseFromSetCookieHeader(setCookieHeader: string): void {
    const cookie = this._extractCookie(setCookieHeader);

    if (typeof cookie.name === 'string') {
      this.set(cookie.name, cookie.value, cookie.options);
    }
  }

  /**
   * Parses cookies from a cookie string and sets the parsed cookies to the
   * internal storage.
   *
   * The method obtains the cookie string from the request's `Cookie`
   * HTTP header when used at the server side, and the `document.cookie`
   * property at the client side.
   */
  _parse(): void {
    const cookiesString = this._window.isClient()
      ? document.cookie
      : this._request.getCookieHeader();

    const cookiesArray = cookiesString
      ? cookiesString.split(COOKIE_SEPARATOR)
      : [];

    const cookiesNames: string[] = [];

    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = this._extractCookie(cookiesArray[i]);
      if (typeof cookie.name === 'string') {
        // if cookie already exists in storage get its old options
        let oldCookieOptions = {};

        if (this._storage.has(cookie.name)) {
          oldCookieOptions = this._storage.get(cookie.name)!.options;
        }

        cookie.options = Object.assign(
          {},
          this._options, // default options
          oldCookieOptions, // old cookie options (if any)
          cookie.options // new cookie options (if any)
        );

        cookiesNames.push(cookie.name);

        // add new cookie or update existing one
        this._storage.set(cookie.name, {
          value: this._sanitizeCookieValue(cookie.value),
          options: cookie.options,
        });
      }
    }

    // remove cookies from storage, which were not parsed
    for (const storageCookieName of this._storage.keys()) {
      const index = cookiesNames.indexOf(storageCookieName);
      if (index === -1) {
        this._storage.delete(storageCookieName);
      }
    }
  }

  /**
   * Creates a copy of the provided word (or text) that has its first
   * character converted to lower case.
   *
   * @param word The word (or any text) that should have its first
   *        character converted to lower case.
   * @return A copy of the provided string with its first character
   *         converted to lower case.
   */
  _firstLetterToLowerCase(word: string): string {
    return word.charAt(0).toLowerCase() + word.substring(1);
  }

  /**
   * Generates a string representing the specified cookied, usable either
   * with the `document.cookie` property or the `Set-Cookie` HTTP
   * header.
   *
   * (Note that the `Cookie` HTTP header uses a slightly different
   * syntax.)
   *
   * @param name The cookie name.
   * @param value The cookie value, will be
   *        converted to string.
   * @param options Cookie attributes. Only the attributes listed in the
   *        type annotation of this field are supported. For documentation
   *        and full list of cookie attributes see
   *        http://tools.ietf.org/html/rfc2965#page-5
   * @return A string representing the cookie. Setting this string
   *         to the `document.cookie` property will set the cookie to
   *         the browser's cookie storage.
   */
  _generateCookieString(
    name: string,
    value: boolean | number | string,
    options: Options
  ): string {
    let cookieString =
      name + '=' + this._transformFunction.encode(value as string);

    cookieString += options.domain ? ';Domain=' + options.domain : '';
    cookieString += options.path ? ';Path=' + options.path : '';
    cookieString += options.expires
      ? ';Expires=' + (options.expires as Date).toUTCString()
      : '';
    cookieString += options.maxAge ? ';Max-Age=' + options.maxAge : '';
    cookieString += options.httpOnly ? ';HttpOnly' : '';
    cookieString += options.secure ? ';Secure' : '';
    cookieString += options.sameSite ? ';SameSite=' + options.sameSite : '';

    return cookieString;
  }

  /**
   * Converts the provided cookie expiration to a `Date` instance.
   *
   * @param expiration Cookie expiration in seconds
   *        from now, or as a string compatible with the `Date`
   *        constructor.
   * @return Cookie expiration as a `Date` instance.
   */
  _getExpirationAsDate(expiration: number | string | Date): Date {
    if (expiration instanceof Date) {
      return expiration;
    }

    if (typeof expiration === 'number') {
      return expiration === Infinity
        ? MAX_EXPIRE_DATE
        : new Date(Date.now() + expiration * 1000);
    }

    return expiration ? new Date(expiration) : MAX_EXPIRE_DATE;
  }

  /**
   * Extract cookie name, value and options from cookie string.
   *
   * @param cookieString The value of the `Set-Cookie` HTTP
   *        header.
   */
  // TODO type
  _extractCookie(cookieString: string) {
    const cookieOptions: Options = {};
    let cookieName;
    let cookieValue;

    const cookiePairs = cookieString.split(COOKIE_SEPARATOR.trim());

    cookiePairs.forEach((pair, index) => {
      const [name, value] = this._extractNameAndValue(pair, index);
      if (index === 0) {
        cookieName = name;
        cookieValue = value;
      } else {
        Object.assign(cookieOptions, { [name as string]: value });
      }
    });

    return {
      name: cookieName,
      value: cookieValue,
      options: cookieOptions,
    };
  }

  /**
   * Extract name and value for defined pair and pair index.
   */
  // TODO type
  _extractNameAndValue(pair: string, pairIndex: number) {
    const separatorIndexEqual = pair.indexOf('=');
    let name = '';
    let value = null;

    if (pairIndex === 0 && separatorIndexEqual < 0) {
      return [null, null];
    }

    if (separatorIndexEqual < 0) {
      name = pair.trim();
      value = true;
    } else {
      name = pair.substring(0, separatorIndexEqual).trim();

      value = this._transformFunction.decode(
        pair.substring(separatorIndexEqual + 1).trim()
      );

      // erase quoted values
      if ('"' === value[0]) {
        value = value.slice(1, -1);
      }

      if (name === 'Expires') {
        value = this._getExpirationAsDate(value);
      }

      if (name === 'Max-Age') {
        name = 'maxAge';
        value = parseInt(value as string, 10);
      }
    }

    if (pairIndex !== 0) {
      name = this._firstLetterToLowerCase(name);
    }

    return [name, value];
  }

  /**
   * Sanitize cookie value by rules in
   * (@see http://tools.ietf.org/html/rfc6265#section-4r.1.1). Erase all
   * invalid characters from cookie value.
   *
   * @param value Cookie value
   * @return Sanitized value
   */
  _sanitizeCookieValue(value?: string): string {
    let sanitizedValue = '';

    if (!value) {
      return sanitizedValue;
    }

    for (let keyChar = 0; keyChar < value.length; keyChar++) {
      const charCode = value.charCodeAt(keyChar);
      const char = value[keyChar];

      const isValid =
        charCode >= 33 &&
        charCode <= 126 &&
        char !== '"' &&
        char !== ';' &&
        char !== '\\';
      if (isValid) {
        sanitizedValue += char;
      } else {
        if ($Debug) {
          throw new GenericError(
            `Invalid char ${char} code ${charCode} in ${value}. ` +
              `Dropping the invalid character from the cookie's ` +
              `value.`,
            { value, charCode, char }
          );
        }
      }
    }

    return sanitizedValue;
  }

  /**
   * Recomputes cookie's attributes maxAge and expires between each other.
   *
   * @param options Cookie attributes. Only the attributes listed in the
   *        type annotation of this field are supported. For documentation
   *        and full list of cookie attributes see
   *        http://tools.ietf.org/html/rfc2965#page-5
   */
  _recomputeCookieMaxAgeAndExpires(options: Options): void {
    if (options.maxAge || options.expires) {
      options.expires = this._getExpirationAsDate(
        (options.maxAge || options.expires) as number | string | Date
      );
    }

    if (!options.maxAge && options.expires) {
      options.maxAge = Math.floor(
        (options.expires.valueOf() - Date.now()) / 1000
      );
    }
  }
}
