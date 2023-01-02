"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(5773),n=(a(7294),a(3905));const i={id:"ima_core.PageRenderer",title:"Class: PageRenderer",sidebar_label:"@ima/core.PageRenderer",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/ima_core.PageRenderer",id:"api/classes/ima_core.PageRenderer",title:"Class: PageRenderer",description:"@ima/core.PageRenderer",source:"@site/../docs/api/classes/ima_core.PageRenderer.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageRenderer",permalink:"/api/classes/ima_core.PageRenderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageRenderer",title:"Class: PageRenderer",sidebar_label:"@ima/core.PageRenderer",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageNavigationHandler",permalink:"/api/classes/ima_core.PageNavigationHandler"},next:{title:"@ima/core.PageStateManager",permalink:"/api/classes/ima_core.PageStateManager"}},p={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"mount",id:"mount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"setState",id:"setstate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"unmount",id:"unmount",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageRenderer"),(0,n.kt)("p",null,"The page renderer is a utility for rendering the page at either the\nclient-side or the server-side, handling the differences in the environment."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new PageRenderer"),"()"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"mount"},"mount"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"mount"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"controller"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"view"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pageResources"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"routeOptions"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#pagedata"},(0,n.kt)("inlineCode",{parentName:"a"},"PageData")),">"),(0,n.kt)("p",null,"Renders the page using the provided controller and view. The actual\nbehavior of this method differs at the client-side and the at\nserver-side in the following way:"),(0,n.kt)("p",null,"At the server, the method first waits for all the resources to load, and\nthen renders the page to a string containing HTML markup to send to the\nclient."),(0,n.kt)("p",null,"At the client, the method uses the already available resources to render\nthe page into DOM, re-using the DOM created from the HTML markup send by\nthe server if possible. After this the method will re-render the page\nevery time another resource being loaded finishes its loading and\nbecomes available."),(0,n.kt)("p",null,"Note that the method renders the page at the client-side only after all\nresources have been loaded if this is the first time this method is\ninvoked at the client."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"controller")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Controller"},(0,n.kt)("inlineCode",{parentName:"a"},"Controller"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current page controller.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"view")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The page's view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pageResources")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownpromiseparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownPromiseParameters"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The resources for the view loaded by the controller.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"routeOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#routeoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"RouteOptions"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current route options.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#pagedata"},(0,n.kt)("inlineCode",{parentName:"a"},"PageData")),">"),(0,n.kt)("p",null,"A promise that will resolve to information about the\nrendered page. The ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," will contain the HTTP status\ncode to send to the client (at the server side) or determine the\ntype of error page to navigate to (at the client side)."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/page/renderer/PageRenderer.ts#L42"},"packages/core/src/page/renderer/PageRenderer.ts:42")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setstate"},"setState"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setState"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("p",null,"Sets the provided state to the currently rendered view."),(0,n.kt)("p",null,"This method has no effect at the server-side."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The state to set to the currently rendered view.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/page/renderer/PageRenderer.ts#L99"},"packages/core/src/page/renderer/PageRenderer.ts:99")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"unmount"},"unmount"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"unmount"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Unmounts the view from the DOM."),(0,n.kt)("p",null,"This method has no effect at the server-side."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/page/renderer/PageRenderer.ts#L87"},"packages/core/src/page/renderer/PageRenderer.ts:87")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"controller"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"view"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"resourcesUpdate"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"routeOptions"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#pagedata"},(0,n.kt)("inlineCode",{parentName:"a"},"PageData")),">"),(0,n.kt)("p",null,"Handles update of the current route that does not replace the current\ncontroller and view."),(0,n.kt)("p",null,"The method will use the already available resource to update the\ncontroller's state and the view immediately. After that, the method will\nupdate the controller's state and view with every resource that becomes\nresolved."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"controller")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Controller"},(0,n.kt)("inlineCode",{parentName:"a"},"Controller"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current page controller.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"view")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The page's view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"resourcesUpdate")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownpromiseparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownPromiseParameters"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The resources that represent the update the of current state according to the current route and its parameters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"routeOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#routeoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"RouteOptions"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current route options.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#pagedata"},(0,n.kt)("inlineCode",{parentName:"a"},"PageData")),">"),(0,n.kt)("p",null,"A promise that will resolve to information about the\nrendered page. The ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," will contain the HTTP status\ncode to send to the client (at the server side) or determine the\ntype of error page to navigate to (at the client side).\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"content")," field will contain the rendered markup of\nthe page at the server-side, or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," at the client-side."),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/page/renderer/PageRenderer.ts#L73"},"packages/core/src/page/renderer/PageRenderer.ts:73")))}m.isMDXComponent=!0}}]);