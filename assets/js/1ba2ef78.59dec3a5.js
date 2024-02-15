"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(5773),r=(n(7294),n(3905));const a={title:"Async Routing",description:"Basic features > Routing > Async Routing"},i=void 0,s={unversionedId:"basic-features/routing/async-routing",id:"basic-features/routing/async-routing",title:"Async Routing",description:"Basic features > Routing > Async Routing",source:"@site/../docs/basic-features/routing/async-routing.md",sourceDirName:"basic-features/routing",slug:"/basic-features/routing/async-routing",permalink:"/basic-features/routing/async-routing",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/routing/async-routing.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1707988142,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Async Routing",description:"Basic features > Routing > Async Routing"},sidebar:"docs",previous:{title:"Middlewares",permalink:"/basic-features/routing/middlewares"},next:{title:"Extensions",permalink:"/basic-features/extensions"}},l={},p=[{value:"Merging view and controller imports into one",id:"merging-view-and-controller-imports-into-one",level:2},{value:"Preloading routeHandlers",id:"preloading-routehandlers",level:2},{value:"Prefetching/Preloading modules",id:"prefetchingpreloading-modules",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Async routing allows you to split views and controllers into separate bundles and load them dynamically. This can be useful for some specific routes, that are not visited regularly and contain large amounts of unique code."),(0,r.kt)("p",null,"To take advantage of this feature, you simply wrap your ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#controller"},(0,r.kt)("inlineCode",{parentName:"a"},"controller"))," and ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#view"},(0,r.kt)("inlineCode",{parentName:"a"},"view"))," arguments into ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function which calls a dynamic import():"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { RouteNames } from '@ima/core';\n\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .add(\n      'home',\n      '/',\n      async() => import('app/page/home/HomeController'),\n      async() => import('app/page/home/HomeView')\n    )\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using ",(0,r.kt)("strong",{parentName:"p"},"default exports"),", you don't have to explicitly set the import promise to the default export, the router does this by default."),(0,r.kt)("p",{parentName:"admonition"},"However when using named exports you need to let the router know, where is the controller/view located in the resolved promise:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async() => import('app/page/home/HomeView').then(module => module.HomeView);\n"))),(0,r.kt)("h2",{id:"merging-view-and-controller-imports-into-one"},"Merging view and controller imports into one"),(0,r.kt)("p",null,"Since the method above produces 2 separate JS chunk files (can depend on the actual environment). If you have really small controller and view files, you can help webpack in creating only one small chunk file which usually loads faster."),(0,r.kt)("p",null,"This can be done by exporting view and controller from the same file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/page/home/index.js",title:"./app/page/home/index.js"},"export { default as HomeView } from './HomeView';\nexport { default as HomeController } from './HomeController';\n")),(0,r.kt)("p",null,"And then merging those two dynamic imports into one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { RouteNames } from '@ima/core';\n\nconst homeModules = async () => import('app/page/home');\n\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .add(\n      'home',\n      '/',\n      // highlight-next-line\n      async () => homeModules().then(module => module.HomeController),\n      // highlight-next-line\n      async () => homeModules().then(module => module.HomeView)\n    )\n}\n")),(0,r.kt)("h2",{id:"preloading-routehandlers"},"Preloading routeHandlers"),(0,r.kt)("p",null,"Each route handler exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"preload()")," method, which can be used to programmatically trigger preload of the dynamic imports for specific route."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use this in situations when the browser is idle and you want to preload some specific route handlers that the user will probably go next. This speeds up the responsiveness of your application dramatically.")),(0,r.kt)("p",null,"To call the ",(0,r.kt)("inlineCode",{parentName:"p"},"preload()")," method, ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#generating-links-outside-of-app-components"},"you first need to get access")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Router")," instance (we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"useComponentUtils")," hook in this example) and then you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getRouteHandler()")," method to get specific route handler instance. After that just call ",(0,r.kt)("inlineCode",{parentName:"p"},"preload()")," on this handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { useComponentUtils } from '@ima/react-hooks';\n\nexport default function Card() {\n  const { $Router } = useComponentUtils();\n  const homeRouteHandler = $Router.getRouteHandler('home');\n\n  useEffect(() => {\n    // highlight-next-line\n    homeRouteHandler.preload();\n  }, [])\n\n  return (\n    <a href={$Router.link('home')}>Home</a>\n  );\n}\n")),(0,r.kt)("p",null,"The method returns a promise, which resolves to tuple of ",(0,r.kt)("inlineCode",{parentName:"p"},"[controller, view]")," instances."),(0,r.kt)("h3",{id:"prefetchingpreloading-modules"},"Prefetching/Preloading modules"),(0,r.kt)("p",null,"As with the ",(0,r.kt)("a",{parentName:"p",href:"/advanced-features/dynamic-imports"},"dynamic imports"),", you can also use ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules"},"webpack directives")," for prefetching and preloading. Simply use the inline commend as it is mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules"},"webpack documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"// ...\nasync() => import(/* webpackPrefetch: true */ 'app/page/home/HomeController'),\nasync() => import(/* webpackPreload: true */ 'app/page/home/HomeView')\n// ...\n")))}m.isMDXComponent=!0}}]);