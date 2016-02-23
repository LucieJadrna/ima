export var init = (ns, oc, config) => { //jshint ignore:line

	//**************START VENDORS**************

	oc.constant('$Helper', ns.Vendor.$Helper);
	oc.constant('$Promise', Promise);

	//React
	oc.constant('$React', ns.Vendor.React);
	oc.constant('$ReactDOM', ns.Vendor.ReactDOM);
	oc.constant('$ReactDOMServer', ns.Vendor.ReactDOMServer);

	//SuperAgent
	oc.constant('$SuperAgent', ns.Vendor.SuperAgent);

	//*************END VENDORS*****************



	//*************START CONSTANTS*****************
	oc.constant('$Settings', config);
	oc.constant('$Env', config.$Env);
	oc.constant('$Protocol', config.$Protocol);
	oc.constant('$Secure', config.$Protocol === 'https:' ? true : false);

	oc.constant('$ROUTER_CONSTANTS', { ROUTE_NAMES: ns.Ima.Router.ROUTE_NAMES, EVENTS: ns.Ima.Router.EVENTS });
	oc.constant('$HTTP_STATUS_CODE', ns.Ima.Http.STATUS_CODE);

	//*************END CONSTANTS*****************



	//*************START Ima**************

	//Window helper
	if (typeof window !== 'undefined' && window !== null) {
		oc.provide(ns.Ima.Window.Window, ns.Ima.Window.ClientWindow);
	} else {
		oc.provide(ns.Ima.Window.Window, ns.Ima.Window.ServerWindow);
	}
	oc.bind('$Window', ns.Ima.Window.Window);

	//Ima Error
	oc.bind('$Error', ns.Ima.Error.GenericError);

	//Dictionary
	oc.provide(ns.Ima.Dictionary.Dictionary, ns.Ima.Dictionary.MessageFormatDictionary);
	oc.bind('$Dictionary', ns.Ima.Dictionary.Dictionary);

	//Request & Response
	oc.bind('$Request', ns.Ima.Router.Request);
	oc.bind('$Response', ns.Ima.Router.Response);

	//Storage
	oc.constant('$CookieTransformFunction', { encode: (s) => s, decode: (s) => s });
	oc.bind('$CookieStorage', ns.Ima.Storage.CookieStorage, ['$Window', '$Request', '$Response']);
	if (oc.get('$Window').hasSessionStorage()) {
		oc.bind('$SessionStorage', ns.Ima.Storage.SessionStorage);
	} else {
		oc.bind('$SessionStorage', ns.Ima.Storage.MapStorage);
	}
	oc.bind('$MapStorage', ns.Ima.Storage.MapStorage);
	oc.bind('$WeakMapStorage', ns.Ima.Storage.WeakMapStorage, [{
		entryTtl: 30 * 60 * 1000,
		maxEntries: 1000,
		gcInterval: 60 * 1000,
		gcEntryCountTreshold: 16
	}]);
	oc.bind('$SessionMapStorage', ns.Ima.Storage.SessionMapStorage, ['$MapStorage', '$SessionStorage']);

	// Dispatcher
	oc.provide(ns.Ima.Event.Dispatcher, ns.Ima.Event.DispatcherImpl);
	oc.bind('$Dispatcher', ns.Ima.Event.Dispatcher);

	// Custom Event Bus
	oc.provide(ns.Ima.Event.EventBus, ns.Ima.Event.EventBusImpl, ['$Window']);
	oc.bind('$EventBus', ns.Ima.Event.EventBus);

	//Cache
	oc.constant('$CacheEntry', ns.Ima.Cache.CacheEntry);

	if (oc.get('$Window').hasSessionStorage()) {
		oc.constant('$CacheStorage', oc.get('$SessionMapStorage'));
	} else {
		oc.constant('$CacheStorage', oc.get('$MapStorage'));
	}
	oc.bind('$CacheFactory', ns.Ima.Cache.CacheFactory, ['$CacheEntry']);
	oc.provide(ns.Ima.Cache.Cache, ns.Ima.Cache.CacheImpl, ['$CacheStorage', '$CacheFactory', '$Helper', config.$Cache]);
	oc.bind('$Cache', ns.Ima.Cache.Cache);

	//SEO
	oc.provide(ns.Ima.Meta.MetaManager, ns.Ima.Meta.MetaManagerImpl);
	oc.bind('$MetaManager', ns.Ima.Meta.MetaManager);
	oc.bind('$ControllerDecorator', ns.Ima.Controller.ControllerDecorator);
	oc.bind('$PageStateManagerDecorator', ns.Ima.Page.State.PageStateManagerDecorator);

	//Page
	oc.provide(ns.Ima.Page.State.PageStateManager, ns.Ima.Page.State.PageStateManagerImpl);
	oc.bind('$PageStateManager', ns.Ima.Page.State.PageStateManager);
	oc.bind('$PageFactory', ns.Ima.Page.PageFactory, [oc]);
	oc.constant('$PageRendererViewAdapter', ns.Ima.Page.Renderer.ViewAdapter);
	oc.bind('$PageRendererFactory', ns.Ima.Page.Renderer.PageRendererFactory, [oc, '$React', '$PageRendererViewAdapter']);

	if (oc.get('$Window').isClient()) {
		oc.provide(ns.Ima.Page.Renderer.PageRenderer, ns.Ima.Page.Renderer.ClientPageRenderer, ['$PageRendererFactory', '$Helper', '$ReactDOM', '$Settings', '$Window']);
	} else {
		oc.provide(ns.Ima.Page.Renderer.PageRenderer, ns.Ima.Page.Renderer.ServerPageRenderer, ['$PageRendererFactory', '$Helper', '$ReactDOMServer', '$Settings', '$Response', '$Cache']);
	}
	oc.bind('$PageRenderer', ns.Ima.Page.Renderer.PageRenderer);

	if (oc.get('$Window').isClient()) {
		oc.provide(ns.Ima.Page.Manager.PageManager, ns.Ima.Page.Manager.ClientPageManager, ['$PageFactory', '$PageRenderer', '$PageStateManager', '$Window', '$EventBus']);
	} else {
		oc.provide(ns.Ima.Page.Manager.PageManager, ns.Ima.Page.Manager.ServerPageManager, ['$PageFactory', '$PageRenderer', '$PageStateManager']);
	}
	oc.bind('$PageManager', ns.Ima.Page.Manager.PageManager);

	//Router
	oc.constant('$Route', ns.Ima.Router.Route);
	oc.bind('$RouteFactory', ns.Ima.Router.RouteFactory, ['$Route']);

	if (oc.get('$Window').isClient()) {
		oc.provide(ns.Ima.Router.Router, ns.Ima.Router.ClientRouter, ['$PageManager', '$RouteFactory', '$Dispatcher', '$ROUTER_CONSTANTS', '$Window']);
	} else {
		oc.provide(ns.Ima.Router.Router, ns.Ima.Router.ServerRouter, ['$PageManager', '$RouteFactory', '$Dispatcher', '$ROUTER_CONSTANTS', '$Request', '$Response']);
	}
	oc.bind('$Router', ns.Ima.Router.Router);

	//SuperAgent
	oc.bind('$HttpUrlTransformer', ns.Ima.Http.UrlTransformer);
	oc.bind('$SuperAgentProxy', ns.Ima.Http.SuperAgentProxy, ['$SuperAgent', '$HTTP_STATUS_CODE', '$HttpUrlTransformer', '$Window']);
	oc.provide(ns.Ima.Http.HttpAgent, ns.Ima.Http.HttpAgentImpl, ['$SuperAgentProxy', '$Cache', '$CookieStorage', config.$Http]);
	oc.bind('$Http', ns.Ima.Http.HttpAgent);

	//Dev tools
	oc.bind('$DevTool', ns.Ima.Debug.DevTool, ['$PageManager', '$PageStateManager', '$Window', '$Dispatcher', '$EventBus']);

	//*************END Ima****************

};
