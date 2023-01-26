"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4489],{6065:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/diagram-router-683726941d228a587bbf7ffda06d3c45.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(5773),a=(n(7294),n(3905));const o={title:"Introduction",description:"Basic features > Routing >\xa0Introduction"},i=void 0,l={unversionedId:"basic-features/routing/introduction",id:"basic-features/routing/introduction",title:"Introduction",description:"Basic features > Routing >\xa0Introduction",source:"@site/../docs/basic-features/routing/introduction.md",sourceDirName:"basic-features/routing",slug:"/basic-features/routing/introduction",permalink:"/basic-features/routing/introduction",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/routing/introduction.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1674737347,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Introduction",description:"Basic features > Routing >\xa0Introduction"},sidebar:"docs",previous:{title:"Data fetching",permalink:"/basic-features/data-fetching"},next:{title:"Dynamic Routes",permalink:"/basic-features/routing/dynamic-routes"}},s={},p=[{value:"Setting up Router",id:"setting-up-router",level:2},{value:"name",id:"name",level:3},{value:"pathExpression",id:"pathexpression",level:3},{value:"controller",id:"controller",level:3},{value:"view",id:"view",level:3},{value:"options",id:"options",level:3},{value:"onlyUpdate",id:"onlyupdate",level:4},{value:"autoScroll",id:"autoscroll",level:4},{value:"allowSPA",id:"allowspa",level:4},{value:"documentView",id:"documentview",level:4},{value:"managedRootView",id:"managedrootview",level:4},{value:"viewAdapter",id:"viewadapter",level:4},{value:"middlewares",id:"middlewares",level:4},{value:"Route params substitutions",id:"route-params-substitutions",level:2},{value:"Optional parameters",id:"optional-parameters",level:3},{value:"Linking between routes",id:"linking-between-routes",level:2},{value:"Generating links outside of app components",id:"generating-links-outside-of-app-components",level:3},{value:"Error and NotFound route names",id:"error-and-notfound-route-names",level:2},{value:"Redirects",id:"redirects",level:2},{value:"Method signature",id:"method-signature",level:3},{value:"url",id:"url",level:3},{value:"options",id:"options-1",level:3},{value:"httpStatus",id:"httpstatus",level:4},{value:"headers",id:"headers",level:4}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Routing is an essential part of every application that displays multiple pages. It allows to develop each part of an application separately and add new parts instantly. As it happens to be in MVC frameworks, each route targets specific controller which takes control over what happens next after a route is matched."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6065).Z,width:"881",height:"421"})),(0,a.kt)("h2",{id:"setting-up-router"},"Setting up Router"),(0,a.kt)("p",null,"All routes in IMA.js are registered inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," function in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/config/routes.js"),". Same ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," function can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/config/bind.js"),". See ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container")," documentation for more information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"oc.get()")," function."),(0,a.kt)("p",null,"Usually you should be oke with simple string defined ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.StaticRoute"},"StaticRoutes")," (the ones defined below), but the router also has support for more advanced and powerful ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DynamicRoute"},"DynamicRoutes"),". For more information about these see the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/dynamic-routes"},"next section"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { RouteNames } from '@ima/core';\n\nimport HomeController from 'app/page/home/HomeController';\nimport HomeView from 'app/page/home/HomeView';\n\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .add('home', '/', HomeController, HomeView)\n    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)\n    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);\n}\n")),(0,a.kt)("p",null,"The router ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," method has following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"add(name, pathExpression, controller, view, options = undefined);\n")),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)("p",null,"This argument represents ",(0,a.kt)("strong",{parentName:"p"},"unique route name"),". You can use this name when ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#linking-between-routes"},"linking between routes")," or getting the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," instance using ",(0,a.kt)("inlineCode",{parentName:"p"},"getRouteHandler()")," method."),(0,a.kt)("h3",{id:"pathexpression"},"pathExpression"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"string |\xa0object"))),(0,a.kt)("p",null,"This can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," for ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/dynamic-routes"},"dynamic routes")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," representing route path. The pathExpression supports **",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#route-params-substitutions"},"parameter substitutions")),(0,a.kt)("h3",{id:"controller"},"controller"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"string | function"))),(0,a.kt)("p",null,"Route assigned ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/basic-features/controller-lifecycle"},"Controller"))," class (can be a string alias, referring to the controller registered in the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container"),"). It goes through its full ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/controller-lifecycle"},"lifecycle")," and renders the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/views-and-components"},"View"),"."),(0,a.kt)("h3",{id:"view"},"view"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"string | function"))),(0,a.kt)("p",null,"Route assigned ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/basic-features/views-and-components"},"View"))," class (also can be a string alias, referring to the view registered in the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container"),"). Rendered by the route controller."),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object = undefined"))),(0,a.kt)("p",null,"These are optional, however it accepts object with following properties and their respective defaults:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  onlyUpdate: false,\n  autoScroll: true,\n  allowSPA: true,\n  documentView: null,\n  managedRootView: null,\n  viewAdapter: null,\n  middlewares: []\n}\n")),(0,a.kt)("h4",{id:"onlyupdate"},"onlyUpdate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"boolean | function = false"))),(0,a.kt)("p",null,"When only the parameters of the current route change an ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/controller-lifecycle#update-client"},(0,a.kt)("inlineCode",{parentName:"a"},"update")," method")," of the active controller will be invoked instead of re-instantiating the controller and view. The ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method receives ",(0,a.kt)("inlineCode",{parentName:"p"},"prevParams")," object containing - as the name suggests - previous route parameters."),(0,a.kt)("p",null,"If you provide function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onlyUpdate")," option; it receives 2 arguments (instances of previous ",(0,a.kt)("strong",{parentName:"p"},"controller")," and ",(0,a.kt)("strong",{parentName:"p"},"view"),") and it should return ",(0,a.kt)("strong",{parentName:"p"},"boolean"),"."),(0,a.kt)("h4",{id:"autoscroll"},"autoScroll"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,a.kt)("p",null,"Determines whether the page should be ",(0,a.kt)("strong",{parentName:"p"},"scrolled to the top")," when the navigation occurs."),(0,a.kt)("h4",{id:"allowspa"},"allowSPA"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,a.kt)("p",null,"Can be used to make the route to be always served from the server and never using the SPA (when disabled) even if the server is overloaded."),(0,a.kt)("p",null,"This is useful for routes that use different document views (specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"documentView")," option), for example for rendering the content of iframes."),(0,a.kt)("h4",{id:"documentview"},"documentView"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"AbstractDocumentView = null"))),(0,a.kt)("p",null,"Custom ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/rendering-process#documentview"},"DocumentView"),", should extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractDocumentView")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/core"),"."),(0,a.kt)("h4",{id:"managedrootview"},"managedRootView"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"function = null"))),(0,a.kt)("p",null,"Custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ManagedRootView")," component, for more information see ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/rendering-process#managedrootview"},"rendering process"),"."),(0,a.kt)("h4",{id:"viewadapter"},"viewAdapter"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"function = null"))),(0,a.kt)("p",null,"Custom ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewAdapter")," component, for more information see ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/rendering-process#viewadapter"},"rendering process"),"."),(0,a.kt)("h4",{id:"middlewares"},"middlewares"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"function[] = []"))),(0,a.kt)("p",null,"Array of route-specific middlewares. See the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/middlewares"},"middlewares")," section for more information."),(0,a.kt)("h2",{id:"route-params-substitutions"},"Route params substitutions"),(0,a.kt)("p",null,"The parameter name can contain only letters ",(0,a.kt)("inlineCode",{parentName:"p"},"a-zA-Z"),", numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"0-9"),", underscores ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," and hyphens ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and is preceded by colon ",(0,a.kt)("inlineCode",{parentName:"p"},":"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"router.add(\n  'order-detail',\n  // highlight-next-line\n  '/user/:userId/orders/:orderId',\n  OrderController,\n  OrderView\n);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"orderId")," parameters are then accessible in ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderController")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"this.params"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController } from '@ima/core';\n\nclass OrderController extends AbstractController {\n  load() {\n    // highlight-next-line\n    const userPromise = this._userService.get(this.params.userId);\n    // highlight-next-line\n    const orderPromise = this._orderService.get(this.params.orderId);\n\n    return {\n      user: userPromise,\n      order: orderPromise\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"optional-parameters"},"Optional parameters"),(0,a.kt)("p",null,"Parameters can also be marked as ",(0,a.kt)("strong",{parentName:"p"},"optional")," by placing question mark ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," after the colon ",(0,a.kt)("inlineCode",{parentName:"p"},":"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"router.add(\n  'user-detail',\n  // highlight-next-line\n  '/profile/:?userId',\n  UserController,\n  UserView\n);\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Optional parameters can be ",(0,a.kt)("strong",{parentName:"p"},"placed only after the last slash"),". Doing otherwise can cause unexpected behavior.")),(0,a.kt)("h2",{id:"linking-between-routes"},"Linking between routes"),(0,a.kt)("p",null,"URLs to routes can be generated via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Router.link()")," public method. These can be then used in ordinary anchor tags and IMA.js makes sure, ",(0,a.kt)("strong",{parentName:"p"},"to handle the site routing in SPA mode"),", rather than doing redirect/reload of the whole page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AbstractComponent } from '@ima/react-page-renderer';\n\nclass OrderView extends AbstractComponent {\n  render() {\n    const { user, order } = this.props;\n\n    const orderLink = this.link('order-detail', {\n      userId: user.id,\n      orderId: order.id\n    });\n\n    return <a href={orderLink}>View order</a>\n  }\n}\n")),(0,a.kt)("p",null,"This is done by listening to window ",(0,a.kt)("inlineCode",{parentName:"p"},"popstate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"click")," events and reacting accordingly (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"listen")," method of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/core/src/router/ClientRouter.js#L113"},"ClientRouter"),", which is called by IMA.js on client during app init). If the handled URL is not valid registered app route, it is handled normally (e.g you are redirected to the target URL)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"this.link")," helper method in IMA.js abstract component or the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLink")," hook from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/react-hooks"},"@ima/react-hooks")," plugin in your components and views to generate router links.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"this.link()")," is only alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils.$Router.link"),", where  ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils")," is taken from ",(0,a.kt)("inlineCode",{parentName:"p"},"this.context.$Utils"),"."),(0,a.kt)("p",{parentName:"admonition"},"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$Utils")," objects, take a look at the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/rendering-process#react-context"},"React Context")," in the documentation.")),(0,a.kt)("h3",{id:"generating-links-outside-of-app-components"},"Generating links outside of app components"),(0,a.kt)("p",null,"Linking in ",(0,a.kt)("strong",{parentName:"p"},"Controllers"),", ",(0,a.kt)("strong",{parentName:"p"},"Extensions"),", ",(0,a.kt)("strong",{parentName:"p"},"Helpers")," and other ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container")," classes requires you to import ",(0,a.kt)("inlineCode",{parentName:"p"},"Router")," using ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container#1-dependency-injection"},"dependency injection"),". To do that you can either use ",(0,a.kt)("inlineCode",{parentName:"p"},"Router")," class in the dependency array, or ",(0,a.kt)("inlineCode",{parentName:"p"},"$Router")," string alias:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController } from '@ima/core';\n\nexport default class DetailController extends AbstractController {\n  static get $dependencies() {\n    return ['$Router'];\n  }\n\n  constructor(router) {\n    this._router = router;\n  }\n\n  load() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Then you get ",(0,a.kt)("inlineCode",{parentName:"p"},"Router")," instance as the constructor's first argument, which gives you access to it's ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," public method (and many others), that you can use to generate your desired route URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"load() {\n  const detailLink = this._router.link('order-detail', {\n    userId: user.id,\n    orderId: order.id\n  });\n\n  return { detailLink };\n}\n")),(0,a.kt)("h2",{id:"error-and-notfound-route-names"},"Error and NotFound route names"),(0,a.kt)("p",null,"There are two special route names that ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/core")," exports: ",(0,a.kt)("inlineCode",{parentName:"p"},"RouteNames.ERROR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RouteNames.NOT_FOUND"),". You can use these constants to provide custom views and controllers for error handling pages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { RouteNames } from '@ima/core';\n\nimport { ErrorController, ErrorView } from 'app/page/error';\nimport { NotFoundController, NotFoundView } from 'app/page/not-found';\n\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .add('home', '/', HomeController, HomeView)\n    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)\n    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);\n}\n")),(0,a.kt)("h2",{id:"redirects"},"Redirects"),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," method mentioned above (which handles URL generation for given routes), you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Router.redirect()")," method to ",(0,a.kt)("strong",{parentName:"p"},"redirect directly to the targeted URL"),"."),(0,a.kt)("p",null,"This URL can be either existing app route or external URL. As with links, in this case you also get SPA routing, in case of redirection to different IMA.js app route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController, Router } from '@ima/core';\n\nexport default class DetailController extends AbstractController {\n  static get $dependencies() {\n    return [\n      Router // We're using class descriptor in this case for DI\n    ];\n  }\n\n  constructor(router) {\n    this._router = router;\n  }\n\n  init() {\n      // highlight-next-line\n    this._router.redirect(\n      // highlight-next-line\n      this._router.link('order-detail', {\n      // highlight-next-line\n        userId: user.id,\n      // highlight-next-line\n        orderId: order.id\n      // highlight-next-line\n      });\n      // highlight-next-line\n    );\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"On client side, redirections are handled by simply changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.location.href"),", while on server you're using the express native ",(0,a.kt)("inlineCode",{parentName:"p"},"res.redirect")," method.")),(0,a.kt)("h3",{id:"method-signature"},"Method signature"),(0,a.kt)("p",null,"The redirect method has following signature, while the options object is ",(0,a.kt)("strong",{parentName:"p"},"available only on server side"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"redirect(\n  url = '',\n  options = {} // Available only on server side\n)\n")),(0,a.kt)("h3",{id:"url"},"url"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)("p",null,"Target redirect URL."),(0,a.kt)("h3",{id:"options-1"},"options"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object = {}"))),(0,a.kt)("p",null,"Additional options, used to customize redirect server response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  httpStatus: 302,\n  headers: undefined,\n}\n")),(0,a.kt)("h4",{id:"httpstatus"},"httpStatus"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"number = 302"))),(0,a.kt)("p",null,"Custom redirect http status code."),(0,a.kt)("h4",{id:"headers"},"headers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object = undefined"))),(0,a.kt)("p",null,"Custom response headers."))}d.isMDXComponent=!0}}]);