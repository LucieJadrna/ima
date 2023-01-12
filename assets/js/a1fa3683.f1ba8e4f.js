"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(5773),a=(r(7294),r(3905));const o={title:"Middlewares",description:"Basic features > Routing > Middlewares"},i=void 0,l={unversionedId:"basic-features/routing/middlewares",id:"basic-features/routing/middlewares",title:"Middlewares",description:"Basic features > Routing > Middlewares",source:"@site/../docs/basic-features/routing/middlewares.md",sourceDirName:"basic-features/routing",slug:"/basic-features/routing/middlewares",permalink:"/basic-features/routing/middlewares",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/routing/middlewares.md",tags:[],version:"current",lastUpdatedBy:"Filip Satek",lastUpdatedAt:1673520109,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Middlewares",description:"Basic features > Routing > Middlewares"},sidebar:"docs",previous:{title:"Dynamic Routes",permalink:"/basic-features/routing/dynamic-routes"},next:{title:"Async Routing",permalink:"/basic-features/routing/async-routing"}},s={},c=[{value:"Middleware function arguments",id:"middleware-function-arguments",level:2},{value:"params",id:"params",level:3},{value:"locals",id:"locals",level:3},{value:"route",id:"route",level:4},{value:"action",id:"action",level:4},{value:"Execution order",id:"execution-order",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Middlewares are simple functions that run before/after route handlers. They can be used to restrict access to certain set of routes or act based on parsed route params."),(0,a.kt)("p",null,"There are two types of middleware ",(0,a.kt)("strong",{parentName:"p"},"global")," and ",(0,a.kt)("strong",{parentName:"p"},"local"),". As the names suggest the first one is defined globally on the router instance using ",(0,a.kt)("inlineCode",{parentName:"p"},"use()")," method and the second type is bound to specific route and is defined in the route ",(0,a.kt)("inlineCode",{parentName:"p"},"options.middlewares")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"// The imports are stripped for compactness.\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router\n    .use(async (params, locals) => {\n      console.log('Global middleware', params, locals, locals.route, locals.action);\n      locals.counter = 0;\n    });\n    .add('home', '/', HomeController, HomeView, {\n      middlewares: [\n        async (params, locals) => {\n          locals.counter++;\n        }\n      ]\n    })\n    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)\n    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Since you have access to the object container (",(0,a.kt)("inlineCode",{parentName:"p"},"oc"),"), you can basically do anything you want in the middlewares."),(0,a.kt)("p",{parentName:"admonition"},"You can easily define authentication middlewares or access-restricting middlewares since throwing an error from the middleware is handled the same way as any other error in the application.")),(0,a.kt)("h2",{id:"middleware-function-arguments"},"Middleware function arguments"),(0,a.kt)("p",null,"Each middleware can be async and receives exactly ",(0,a.kt)("strong",{parentName:"p"},"two arguments"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"locals"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," specifically allows you to modify route params while ",(0,a.kt)("inlineCode",{parentName:"p"},"locals")," is used to pass data between middlewares."),(0,a.kt)("h3",{id:"params"},"params"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object = {}"))),(0,a.kt)("p",null,"Contains route params extracted by the ",(0,a.kt)("strong",{parentName:"p"},"currently matched route handler"),". Can be empty if there was no route match before execution of concrete middleware."),(0,a.kt)("h3",{id:"locals"},"locals"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object"))),(0,a.kt)("p",null,"Object you can use to pass data between middlewares. It shares reference across all middlewares, so anything you define here, is available in following middleware functions. Additionally it always contains following keys:"),(0,a.kt)("h4",{id:"route"},"route"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"AbstractRoute"))),(0,a.kt)("p",null,"Instance of currently matched route."),(0,a.kt)("h4",{id:"action"},"action"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"object = {}"))),(0,a.kt)("p",null,"An action object describing what triggered this routing (can be empty)."),(0,a.kt)("h2",{id:"execution-order"},"Execution order"),(0,a.kt)("p",null,"Middleware functions are resolved ",(0,a.kt)("strong",{parentName:"p"},"from top to bottom sequentially"),". In case of the code above, when routing to ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," route, following things would have happened:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Global middlewares")," defined above currently matched route are executed (in this case we have only one global middleware, defined above all routes)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Params extraction")," from currently matched route handler (home) is executed."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Local route")," middlewares are executed (with newly extracted route params).")),(0,a.kt)("p",null,"In case of an ",(0,a.kt)("strong",{parentName:"p"},"error")," or not ",(0,a.kt)("strong",{parentName:"p"},"found page"),", the execution order is still ",(0,a.kt)("strong",{parentName:"p"},"the same"),", meaning the global and route middlewares are executed as with any other route."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"There's only one exception, since the ",(0,a.kt)("inlineCode",{parentName:"p"},"locals")," object is cleared to an empty object before route handling, if an error occurs during route handling and execution is internally passed to error handling (displaying error page), the locals object may retain values that were there for the previous route matching. However the ",(0,a.kt)("inlineCode",{parentName:"p"},"locals.route")," object will still be up to date and equal to currently routed route (error in this case).")))}u.isMDXComponent=!0}}]);