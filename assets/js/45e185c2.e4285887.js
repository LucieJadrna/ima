"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8140],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(o,".").concat(c)]||m[c]||g[c]||l;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(5773),r=(a(7294),a(3905));const l={id:"ima_core.PageHandler",title:"Class: PageHandler",sidebar_label:"@ima/core.PageHandler",custom_edit_url:null},i=void 0,d={unversionedId:"api/classes/ima_core.PageHandler",id:"api/classes/ima_core.PageHandler",title:"Class: PageHandler",description:"@ima/core.PageHandler",source:"@site/../docs/api/classes/ima_core.PageHandler.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageHandler",permalink:"/api/classes/ima_core.PageHandler",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageHandler",title:"Class: PageHandler",sidebar_label:"@ima/core.PageHandler",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageFactory",permalink:"/api/classes/ima_core.PageFactory"},next:{title:"@ima/core.PageHandlerRegistry",permalink:"/api/classes/ima_core.PageHandlerRegistry"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy",id:"destroy",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"handlePostManagedState",id:"handlepostmanagedstate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"handlePreManagedState",id:"handlepremanagedstate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageHandler"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageHandler"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageHandlerRegistry"},(0,r.kt)("inlineCode",{parentName:"a"},"PageHandlerRegistry"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageNavigationHandler"},(0,r.kt)("inlineCode",{parentName:"a"},"PageNavigationHandler"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PageHandler"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"destroy"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Finalization callback, called when the page manager is being discarded.\nThis usually happens when the page is hot-reloaded at the client side."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/ba1e256/packages/core/src/page/handler/PageHandler.ts#L52"},"packages/core/src/page/handler/PageHandler.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepostmanagedstate"},"handlePostManagedState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"handlePostManagedState"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"previousManagedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Called after a PageManager finishes transition from previous page to\na new one."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"managedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The currently managed page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"previousManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data of the page that was previously managed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PageAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An action object describing what triggered the routing.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/ba1e256/packages/core/src/page/handler/PageHandler.ts#L40"},"packages/core/src/page/handler/PageHandler.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepremanagedstate"},"handlePreManagedState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"handlePreManagedState"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"managedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nextManagedPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Called before a PageManager starts to transition from previous page to\na new one."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"managedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The currently managed page - soon-to-be previously managed page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nextManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ManagedPage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data of the page that's about to be managed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PageAction")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An action object describing what triggered the routing.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/ba1e256/packages/core/src/page/handler/PageHandler.ts#L23"},"packages/core/src/page/handler/PageHandler.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"init"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Initializes the page handler."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/ba1e256/packages/core/src/page/handler/PageHandler.ts#L9"},"packages/core/src/page/handler/PageHandler.ts:9")))}g.isMDXComponent=!0}}]);