declare module '@ima/helpers' {
  export function allPromiseHash(hash: {
    [key: string]: unknown | Promise<unknown>;
  }): Promise<unknown>;
  export function clone<T>(
    val: T,
    circular?: boolean,
    depth?: number,
    prototype?: unknown,
    includeNonEnumerable?: boolean
  ): T;
  export function assignRecursively(target, ...sources);
  export function assignRecursivelyWithTracking(referrer);
  export function resolveEnvironmentSetting(setting, currentEnv);
}
