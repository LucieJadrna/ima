/* @if client **
export default class ServerRouter {};
/* @else */
import AbstractRouter from './AbstractRouter';
import Request from './Request';
import Response from './Response';
import RouteFactory from './RouteFactory';
import Dispatcher from '../event/Dispatcher';
import PageManager from '../page/manager/PageManager';

/**
 * The server-side implementation of the {@link Router} interface.
 */
export default class ServerRouter extends AbstractRouter {
  protected _request: Request;
  protected _response: Response;

  static get $dependencies() {
    return [PageManager, RouteFactory, Dispatcher, Request, Response];
  }

  /**
   * Initializes the router.
   *
   * @param {PageManager} pageManager The current page manager.
   * @param {RouteFactory} factory The router factory used to create routes.
   * @param {Dispatcher} dispatcher Dispatcher fires events to app.
   * @param {Request} request The current HTTP request.
   * @param {Response} response The current HTTP response.
   */
  constructor(
    pageManager: PageManager,
    factory: RouteFactory,
    dispatcher: Dispatcher,
    request: Request,
    response: Response
  ) {
    super(pageManager, factory, dispatcher);
    /**
     * The current HTTP request.
     *
     * @type {Request}
     */
    this._request = request;

    /**
     * The current HTTP response.
     *
     * @type {Response}
     */
    this._response = response;
  }

  /**
   * @inheritdoc
   */
  getPath() {
    return this._extractRoutePath(this._request.getPath());
  }

  /**
   * @inheritdoc
   */
  listen() {
    return this;
  }

  /**
   * @inheritdoc
   */
  unlisten() {
    return this;
  }

  /**
   * @inheritdoc
   */
  redirect(url = '/', options: { [key: string]: unknown }) {
    this._response.redirect(
      url,
      (options?.httpStatus as number) || 302,
      options?.headers as { [key: string]: string }
    );
  }
}
// @endif
