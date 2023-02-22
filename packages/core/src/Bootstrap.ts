import * as helpers from '@ima/helpers';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

import { AppEnvironment, AppSettings, Settings } from './boot';
import { DictionaryConfig } from './dictionary/Dictionary';
import { Namespace, ns } from './Namespace';
import { BindingState, ObjectContainer } from './ObjectContainer';
import { Router } from './router/Router';
import { GlobalImaObject, UnknownParameters } from './types';

ns.namespace('ima.core');

export type InitBind = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['bind'],
  state: BindingState
) => void;

export type InitRoutes = (
  ns: Namespace,
  oc: ObjectContainer,
  routes: UnknownParameters | undefined,
  router: Router
) => void;

export type InitServices = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['services']
) => void;

export type InitSettings = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['settings']
) => AppSettings;

export type PluginInitBind = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['bind'],
  isDynamicallyLoaded: boolean,
  name?: string
) => void;

export type PluginInitServices = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['services'],
  isDynamicallyLoaded: boolean
) => void;

export type PluginInitSettings = (
  ns: Namespace,
  oc: ObjectContainer,
  config: BootConfig['settings'],
  isDynamicallyLoaded: boolean
) => AppSettings;

export interface PluginConfigFunctions {
  initServices?: PluginInitServices;
  initBind?: PluginInitBind;
  initSettings?: PluginInitSettings;
}

export interface AppConfigFunctions {
  initBindApp: InitBind;
  initRoutes: InitRoutes;
  initServicesApp: InitServices;
  initSettings: InitSettings;
}

export interface ImaConfigFunctions {
  initBindIma: InitBind;
  initServicesIma: InitServices;
}

export type BootSettings = Pick<GlobalImaObject, '$Debug' | '$Env' | '$Version' | '$App' | '$Protocol' | '$Language' | '$Host' | '$Path' | '$Root' | '$LanguagePartPath'>;
export interface BootServices {
  response: ExpressResponse | null;
  request: ExpressRequest | null;
  $IMA: Window['$IMA'];
  dictionary: DictionaryConfig;
  router: {
    $Protocol: GlobalImaObject['$Protocol'];
    $Host: GlobalImaObject['$Host'];
    $Path: GlobalImaObject['$Path'];
    $Root: GlobalImaObject['$Root'];
    $LanguagePartPath: GlobalImaObject['$LanguagePartPath'];
  };
}

export interface BootConfig extends ImaConfigFunctions, AppConfigFunctions {
  routes?: UnknownParameters;
  bind: Settings;
  plugins: { name: string; plugin: PluginConfigFunctions; }[];
  services: BootServices;
  settings: BootSettings;
}

/**
 * Application bootstrap used to initialize the environment and the application
 * itself.
 */
export class Bootstrap {
  protected _oc: ObjectContainer;
  protected _config: BootConfig;
  /**
   * Initializes the bootstrap.
   *
   * @param oc The application's object container to use
   *        for managing dependencies.
   */
  constructor(oc: ObjectContainer) {
    /**
     * The object container used to manage dependencies.
     */
    this._oc = oc;

    /**
     * Application configuration.
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._config = {};
  }

  /**
   * Initializes the application by running the bootstrap sequence. The
   * sequence initializes the components of the application in the following
   * order:
   * - application settings
   * - constants, service providers and class dependencies configuration
   * - services
   * - UI components
   * - routing
   *
   * @param config The application environment
   *        configuration for the current environment.
   */
  run(config: BootConfig) {
    this._config = config;

    this._initSettings();
    this._bindDependencies();
    this._initServices();
    this._initRoutes();
  }

  /**
   * Initializes dynamically loaded plugin. This is explicitly called from
   * within the Plugin Loader instance.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */
  initPlugin(name: string, plugin?: PluginConfigFunctions) {
    if (!plugin) {
      return;
    }

    this._initPluginSettings(name, plugin);
    this._bindPluginDependencies(name, plugin);
    this._initPluginServices(plugin);
  }

  /**
   * Initializes the application settings. The method loads the settings for
   * all environments and then picks the settings for the current environment.
   *
   * The method also handles using the values in the production environment
   * as default values for configuration items in other environments.
   */
  _initSettings() {
    const currentApplicationSettings = {};
    const plugins = this._config.plugins.concat([
      {
        name: BindingState.App,
        plugin: this._config as unknown as PluginConfigFunctions,
      },
    ]);

    plugins
      .filter(({ plugin }) => typeof plugin.initSettings === 'function')
      .forEach(({ name, plugin }) => {
        const allPluginSettings = plugin.initSettings!(
          ns,
          this._oc,
          this._config.settings,
          false // Indicating static bootstraping
        );

        helpers.assignRecursivelyWithTracking(name)(
          currentApplicationSettings,
          helpers.resolveEnvironmentSetting(
            allPluginSettings,
            this._config.settings.$Env
          )
        );
      });

    this._config.bind = Object.assign(
      this._config.bind || {},
      currentApplicationSettings,
      this._config.settings
    );
  }

  /**
   * Initializes dynamically loaded plugin settings (if the init
   * function is provided). The settings are merged into the application
   * the same way as with non-dynamic import, meaning the app setting overrides
   * are prioritized over the default plugin settings.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */
  _initPluginSettings(name: string, plugin: PluginConfigFunctions) {
    if (typeof plugin?.initSettings !== 'function') {
      return;
    }

    const newApplicationSettings = {};
    const allPluginSettings = plugin.initSettings(
      ns,
      this._oc,
      this._config.settings,
      true // Indicating static dynamic bootstraping
    );

    helpers.assignRecursivelyWithTracking(name)(
      newApplicationSettings,
      helpers.resolveEnvironmentSetting(
        allPluginSettings,
        this._config.settings.$Env
      )
    );

    helpers.assignRecursivelyWithTracking(BindingState.App)(
      newApplicationSettings,
      this._config.bind
    );

    Object.assign(this._config.bind, newApplicationSettings);
  }

  /**
   * Binds the constants, service providers and class dependencies to the
   * object container.
   */
  _bindDependencies() {
    this._oc.setBindingState(BindingState.IMA);
    this._config.initBindIma(ns, this._oc, this._config.bind, BindingState.IMA);

    this._config.plugins
      .filter(({ plugin }) => typeof plugin.initBind === 'function')
      .forEach(({ name, plugin }) => {
        this._oc.setBindingState(BindingState.Plugin, name);
        plugin.initBind!(ns, this._oc, this._config.bind, false);
      });

    this._oc.setBindingState(BindingState.App);
    this._config.initBindApp(ns, this._oc, this._config.bind, BindingState.App);
  }

  /**
   * Binds the constants, service providers and class dependencies to the
   * object container for dynamically imported plugins.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */
  _bindPluginDependencies(name: string, plugin: PluginConfigFunctions) {
    if (typeof plugin.initBind !== 'function') {
      return;
    }

    this._oc.setBindingState(BindingState.Plugin, name);

    plugin.initBind(ns, this._oc, this._config.bind, true, name);

    this._oc.setBindingState(BindingState.App);
  }

  /**
   * Initializes the routes.
   */
  _initRoutes() {
    const router = this._oc.get(Router) as Router;
    this._config.initRoutes(ns, this._oc, this._config.routes, router);
  }

  /**
   * Initializes the basic application services.
   */
  _initServices() {
    this._config.initServicesIma(ns, this._oc, this._config.services);

    this._config.plugins
      .filter(({ plugin }) => typeof plugin.initServices === 'function')
      .forEach(({ plugin }) => {
        plugin.initServices!(ns, this._oc, this._config.services, false);
      });

    this._config.initServicesApp(ns, this._oc, this._config.services);
  }

  /**
   * Service initialization for the dynamically loaded plugins.
   *
   * @param plugin Plugin interface (object with init functions).
   */
  _initPluginServices(plugin: PluginConfigFunctions) {
    if (typeof plugin.initServices !== 'function') {
      return;
    }

    plugin.initServices(ns, this._oc, this._config.services, true);
  }
}

ns.ima.core.Bootstrap = Bootstrap;
