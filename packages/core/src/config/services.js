export const initServices = (ns, oc, config) => {
  oc.get('$Dictionary').init(config.dictionary);
  oc.get('$Dispatcher').clear();

  if (!oc.get('$Window').isClient()) {
    oc.get('$Request').init(config.request);
    oc.get('$Response').init(
      config.response,
      oc.get('$CookieTransformFunction')
    );
    oc.get('$CookieStorage').clear();
    oc.get('$SessionStorage').clear();
    oc.get('$CacheStorage').clear();
  }

  oc.get('$CookieStorage').init(
    { secure: oc.get('$Secure') },
    oc.get('$CookieTransformFunction')
  );

  oc.get('$SessionStorage').init();
  oc.get('$CacheStorage').init();
  oc.get('$Router').init(config.router);
  oc.get('$PageManager').init();
  oc.get('$PageStateManager').clear();
  oc.get('$HttpUrlTransformer').clear();

  /**
   * HMR event handler to destroy existing application
   * before creating new one.
   */
  if ($Debug && typeof window !== 'undefined') {
    window.__IMA_HMR?.emitter?.once('destroy', async () => {
      oc.get('$Dispatcher').clear();
      oc.get('$Router').unlisten();
      // FIXME this actually doesn't do anything without arguments. Not sure if there's currently a way to clear all EventBus events.
      // oc.get('$EventBus').unlistenAll();
      oc.get('$PageRenderer').unmount();
      await oc.get('$PageManager').destroy();
    });
  }

  /**
   * HMR event handler to handle HMR ima app updates
   */
  if ($Debug && typeof window !== 'undefined') {
    window.__IMA_HMR?.emitter?.on('update', ({ type }) => {
      if (type === 'languages') {
        oc.get('$Dictionary').init({
          ...config.dictionary,
          dictionary: window.$IMA.i18n,
        });

        oc.get('$Router').route(window.location.pathname);
      }
    });
  }
};
