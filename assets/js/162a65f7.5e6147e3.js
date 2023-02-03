"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9728],{1467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-page-manager-e1a61acbae5ac5651fe727dd2c2a8c31.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(5773),r=(n(7294),n(3905));const o={title:"Page Manager",description:"Basic features > Page Manager and app rendering"},i=void 0,l={unversionedId:"basic-features/page-manager",id:"basic-features/page-manager",title:"Page Manager",description:"Basic features > Page Manager and app rendering",source:"@site/../docs/basic-features/page-manager.md",sourceDirName:"basic-features",slug:"/basic-features/page-manager",permalink:"/basic-features/page-manager",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/page-manager.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1675434982,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Page Manager",description:"Basic features > Page Manager and app rendering"},sidebar:"docs",previous:{title:"Handling scripts and styles",permalink:"/basic-features/handling-scripts-and-styles"},next:{title:"Events",permalink:"/basic-features/events"}},s={},d=[{value:"Managing process",id:"managing-process",level:2},{value:"Intervene into the process",id:"intervene-into-the-process",level:2},{value:"PageManagerHandlers",id:"pagemanagerhandlers",level:3},{value:"1. <code>init()</code> method",id:"1-init-method",level:4},{value:"2. <code>handlePreManagedState()</code> method",id:"2-handlepremanagedstate-method",level:4},{value:"3. <code>handlePostManagedState()</code> method",id:"3-handlepostmanagedstate-method",level:4},{value:"4. <code>destroy()</code> method",id:"4-destroy-method",level:4},{value:"Registering PageManagerHandlers",id:"registering-pagemanagerhandlers",level:2},{value:"PageNavigationHandler",id:"pagenavigationhandler",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Page Manager is an essential part of IMA.js. It's something like a puppeteer that manipulates with pages and views. Once a router matches URL to one of route's path the page manager takes care of the rest."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1467).Z,width:"881",height:"421"})),(0,r.kt)("h2",{id:"managing-process"},"Managing process"),(0,r.kt)("p",null,"If the new matched route has ",(0,r.kt)("a",{parentName:"p",href:"./routing/introduction#onlyupdate"},(0,r.kt)("inlineCode",{parentName:"a"},"onlyUpdate")," option")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the controller and view hasn't changed the route transition is dispatched only through ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#update-client"},(0,r.kt)("inlineCode",{parentName:"a"},"update")," method")," of the controller."),(0,r.kt)("p",null,"In every other case the manager goes through it's full process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unload previous controller and extensions")," - To make room for the new, manager has to get rid of the old controller and extensions. First calls ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#deactivate-client"},(0,r.kt)("inlineCode",{parentName:"a"},"deactivate")," method")," on every extension registered in the old controller and then the same method on the controller itself.\nSame process follows with ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#destroy-client"},(0,r.kt)("inlineCode",{parentName:"a"},"destroy")," method"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Clear state and unmount view")," - After unloading controller and extensions the page state is cleared and view (starting from ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process#managedrootview"},"ManagedRootView"),") is unmounted. However if the ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process#documentview"},"DocumentView"),", ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process#viewadapter"},"ViewAdapter")," and ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process#managedrootview"},"ManagedRootView")," are the same for the new route the view is cleared rather then unmounted. This way you can achieve component persistency.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Loading new controller and extensions")," - After the manager is done with clearing previous resource it initializes the new ones. First the ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#init-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"init")," method")," is called on controller then on every extension (Extensions may ",(0,r.kt)("a",{parentName:"p",href:"./extensions#how-to-use-extensions"},"be initialized")," during the controllers ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method call).\nWhen the initialization is complete manager starts loading resources via ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method of the controller and extensions. For detailed explanation see the ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load")," method documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rendering new view")," - After the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method has been called a view for the controller is rendered. It doesn't matter if all promises returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method have been resolved. The process of handling promises is described in the ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load")," method documentation"),".  Following rendering process is described on a page ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process"},"Rendering process")," and ",(0,r.kt)("a",{parentName:"p",href:"./views-and-components"},"View & Components"),"."))),(0,r.kt)("h2",{id:"intervene-into-the-process"},"Intervene into the process"),(0,r.kt)("p",null,"It's possible for you to intervene into the process before it starts and after it finished. One way is to listen to ",(0,r.kt)("a",{parentName:"p",href:"./events#built-in-events"},(0,r.kt)("inlineCode",{parentName:"a"},"BEFORE_HANDLE_ROUTE"))," and ",(0,r.kt)("a",{parentName:"p",href:"./events#built-in-events"},(0,r.kt)("inlineCode",{parentName:"a"},"AFTER_HANDLE_ROUTE"))," dispatcher events. However from inside event listeners you cannot intercept or modify the process. For this purpose we've introduced PageManagerHandlers in ",(0,r.kt)("a",{parentName:"p",href:"/migration/migration-0.16.0"},"v16")),(0,r.kt)("h3",{id:"pagemanagerhandlers"},"PageManagerHandlers"),(0,r.kt)("p",null,"PageManagerHandler is a simple class that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"ima/page/handler/PageHandler"),". It can obtain dependencies through ",(0,r.kt)("a",{parentName:"p",href:"./object-container#1-dependency-injection"},"dependency injection"),". Each handler should contain 4 methods:"),(0,r.kt)("h4",{id:"1-init-method"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"init()")," method"),(0,r.kt)("p",null,"For purpose of initializing."),(0,r.kt)("h4",{id:"2-handlepremanagedstate-method"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"handlePreManagedState()")," method"),(0,r.kt)("p",null,"This method is called before the page manager start taking any action. It receives 3 arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nextManagedPage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage")," holds information about current page, ",(0,r.kt)("inlineCode",{parentName:"p"},"nextManagedPage"),' about following page. Each of the "managed page" arguments has following shape:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  controller: ?(string|function(new: Controller)), // controller class\n  controllerInstance: ?Controller, // instantiated controller\n  decoratedController: ?Controller, // controller decorator created from controller instance\n  view: ?React.Component, // view class/component\n  viewInstance: ?React.Element, // instantiated view\n  route: ?Route, // matched route that leads to the controller\n  options: ?RouteOptions, // route options\n  params: ?Object<string, string>, // route parameters and their values\n  state: {\n    activated: boolean // if the page has been activated\n  }\n}\n")),(0,r.kt)("p",null,"and finally the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is an object describing what triggered the routing. If a ",(0,r.kt)("inlineCode",{parentName:"p"},"PopStateEvent")," triggered the routing the action object will look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type: 'popstate', event: PopStateEvent }")," otherwise the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," property will contain ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseEvent")," (e.g. clicked on a link) and ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property will have value ",(0,r.kt)("inlineCode",{parentName:"p"},"'redirect'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'click'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'error'"),"."),(0,r.kt)("h4",{id:"3-handlepostmanagedstate-method"},"3. ",(0,r.kt)("inlineCode",{parentName:"h4"},"handlePostManagedState()")," method"),(0,r.kt)("p",null,"This method is a counterpart to ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePreManagedState()")," method. It's called after page transition is finished. It receives similar arguments (",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"previousManagedPage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"previousManagedPage")," holds information about previous page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePreManagedState()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePostManagedState()")," methods can interrupt transition process by throwing an error. The thrown error should be instance of ",(0,r.kt)("a",{parentName:"p",href:"./error-handling"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericError"))," with a status code specified. That way the router can handle thrown error accordingly.")),(0,r.kt)("h4",{id:"4-destroy-method"},"4. ",(0,r.kt)("inlineCode",{parentName:"h4"},"destroy()")," method"),(0,r.kt)("p",null,"For purpose of destructing"),(0,r.kt)("h2",{id:"registering-pagemanagerhandlers"},"Registering PageManagerHandlers"),(0,r.kt)("p",null,"PageManagerHandlers have their own registry ",(0,r.kt)("strong",{parentName:"p"},"PageHandlerRegistry"),". Every handler you create should be registered as a dependency of this registry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\nimport { PageHandlerRegistry, Window } from '@ima/core';\nimport MyOwnHandler from 'app/handler/MyOwnHandler';\n\nexport let init = (ns, oc, config) => {\n  // ...\n\n  if (oc.get(Window).isClient()) { // register different handlers for client and server\n    oc.inject(PageHandlerRegistry, [MyOwnHandler]);\n  } else {\n    oc.inject(PageHandlerRegistry, []);\n  }\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:"),"\xa0Handlers are executed in series and each one waits for the previous one to complete its task.")),(0,r.kt)("h2",{id:"pagenavigationhandler"},"PageNavigationHandler"),(0,r.kt)("p",null,"With introduction of PageManagerHandlers in ",(0,r.kt)("a",{parentName:"p",href:"/migration/migration-0.16.0"},"v16")," we've moved some functionality to predefined handler ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/master/packages/core/src/page/handler/PageNavigationHandler.js"},(0,r.kt)("strong",{parentName:"a"},"PageNavigationHandler")),". This handler takes care of saving scroll position, restoring scroll position and settings browser's address bar URL. You're free to extend it, override it or whatever else you want."),(0,r.kt)("p",null,"PageNavigationHandler is registered by default, but when you register your own handlers you need to specify PageNavigationHandler as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { PageHandlerRegistry, PageNavigationHandler } from '@ima/core';\nimport MyOwnHandler from 'app/handler/MyOwnHandler';\n\nexport let init = (ns, oc, config) => {\n  // ...\n  oc.inject(PageHandlerRegistry, [PageNavigationHandler, MyOwnHandler]);\n};\n")))}c.isMDXComponent=!0}}]);