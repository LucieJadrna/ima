"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),c=r,h=k["".concat(s,".").concat(c)]||k[c]||o[c]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(5773),r=(a(7294),a(3905));const i={id:"ima_core.DispatcherImpl",title:"Class: DispatcherImpl",sidebar_label:"@ima/core.DispatcherImpl",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/ima_core.DispatcherImpl",id:"api/classes/ima_core.DispatcherImpl",title:"Class: DispatcherImpl",description:"@ima/core.DispatcherImpl",source:"@site/../docs/api/classes/ima_core.DispatcherImpl.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.DispatcherImpl",permalink:"/api/classes/ima_core.DispatcherImpl",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.DispatcherImpl",title:"Class: DispatcherImpl",sidebar_label:"@ima/core.DispatcherImpl",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.Dispatcher",permalink:"/api/classes/ima_core.Dispatcher"},next:{title:"@ima/core.DynamicRoute",permalink:"/api/classes/ima_core.DynamicRoute"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_eventListeners",id:"_eventlisteners",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"_createNewEvent",id:"_createnewevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"_createNewListener",id:"_createnewlistener",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"_getListenersOf",id:"_getlistenersof",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"_getScopesOf",id:"_getscopesof",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"fire",id:"fire",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"listen",id:"listen",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"unlisten",id:"unlisten",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-10",level:4}],m={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".DispatcherImpl"),(0,r.kt)("p",null,"Default implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher")," interface."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DispatcherImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new DispatcherImpl"),"()"),(0,r.kt)("p",null,"Initializes the dispatcher."),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L32"},"packages/core/src/event/DispatcherImpl.ts:32")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_eventlisteners"},"_","eventListeners"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","eventListeners"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L23"},"packages/core/src/event/DispatcherImpl.ts:23")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"dependencies"},"$dependencies"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"$dependencies"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L25"},"packages/core/src/event/DispatcherImpl.ts:25")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_createnewevent"},"_","createNewEvent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_createNewEvent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Create new Map storage of listeners for the specified event."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L142"},"packages/core/src/event/DispatcherImpl.ts:142")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_createnewlistener"},"_","createNewListener"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_createNewListener"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Create new Set storage of scopes for the specified event and listener."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L153"},"packages/core/src/event/DispatcherImpl.ts:153")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_getlistenersof"},"_","getListenersOf"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_getListenersOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("p",null,"Retrieves the map of event listeners to scopes they are bound to."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">",">"),(0,r.kt)("p",null,"A map of event listeners to the\nscopes in which they should be executed. The returned map is an\nunmodifiable empty map if no listeners are registered for the\nevent."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L192"},"packages/core/src/event/DispatcherImpl.ts:192")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_getscopesof"},"_","getScopesOf"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_getScopesOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">"),(0,r.kt)("p",null,"Retrieves the scopes in which the specified event listener should be\nexecuted for the specified event."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">",">"),(0,r.kt)("p",null,"The scopes in which the specified listeners\nshould be executed in case of the specified event. The returned\nset is an unmodifiable empty set if no listeners are registered\nfor the event."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L173"},"packages/core/src/event/DispatcherImpl.ts:173")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"Deregisters all event listeners currently registered with this\ndispatcher."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher#clear"},"clear")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L46"},"packages/core/src/event/DispatcherImpl.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fire"},"fire"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fire"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"imaInternalEvent?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"Fires a new event of the specified name, carrying the provided data."),(0,r.kt)("p",null,"The method will synchronously execute all event listeners registered for\nthe specified event, passing the provided data to them as the first\nargument."),(0,r.kt)("p",null,"Note that this method does not prevent the event listeners to modify the\ndata in any way. The order in which the event listeners will be executed\nis unspecified and should not be relied upon."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to fire.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to pass to the event listeners.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"imaInternalEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The flag signalling whether        this is an internal IMA event. The fired event is treated as a        custom application event if this flag is not set.        The flag is used only for debugging and has no effect on the        propagation of the event.")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"This dispatcher."),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher#fire"},"fire")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L115"},"packages/core/src/event/DispatcherImpl.ts:115")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"listen"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scope?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"Registers the provided event listener to be executed when the specified\nevent is fired on this dispatcher."),(0,r.kt)("p",null,"When the specified event is fired, the event listener will be executed\nwith the data passed with the event as the first argument."),(0,r.kt)("p",null,"The order in which the event listeners will be executed is unspecified\nand should not be relied upon. Registering the same listener for the\nsame event and with the same scope multiple times has no effect."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to listen for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to register.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scope")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The object to which the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," keyword        will be bound in the event listener.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"This dispatcher."),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher#listen"},"listen")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L55"},"packages/core/src/event/DispatcherImpl.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unlisten"},"unlisten"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unlisten"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scope?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"Deregisters the provided event listener, so it will no longer be\nexecuted with the specified scope when the specified event is fired."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event for which the listener        should be deregistered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to deregister.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scope")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The object to which the ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," keyword        would be bound in the event listener.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.DispatcherImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"DispatcherImpl"))),(0,r.kt)("p",null,"This dispatcher."),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},"Dispatcher"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher#unlisten"},"unlisten")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/event/DispatcherImpl.ts#L80"},"packages/core/src/event/DispatcherImpl.ts:80")))}o.isMDXComponent=!0}}]);