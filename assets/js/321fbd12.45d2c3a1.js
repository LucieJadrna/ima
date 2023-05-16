"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(5773),r=(a(7294),a(3905));const i={id:"ima_core.PageStateManagerImpl",title:"Class: PageStateManagerImpl<S>",sidebar_label:"@ima/core.PageStateManagerImpl",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/ima_core.PageStateManagerImpl",id:"api/classes/ima_core.PageStateManagerImpl",title:"Class: PageStateManagerImpl<S>",description:"@ima/core.PageStateManagerImpl",source:"@site/../docs/api/classes/ima_core.PageStateManagerImpl.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageStateManagerImpl",permalink:"/api/classes/ima_core.PageStateManagerImpl",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageStateManagerImpl",title:"Class: PageStateManagerImpl<S>",sidebar_label:"@ima/core.PageStateManagerImpl",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageStateManagerDecorator",permalink:"/api/classes/ima_core.PageStateManagerDecorator"},next:{title:"@ima/core.PluginLoader",permalink:"/api/classes/ima_core.PluginLoader"}},s={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_cursor",id:"_cursor",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_dispatcher",id:"_dispatcher",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_ongoingTransaction",id:"_ongoingtransaction",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"_statePatchQueue",id:"_statepatchqueue",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"_states",id:"_states",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"onChange",id:"onchange",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"_callOnChangeCallback",id:"_callonchangecallback",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"_eraseExcessHistory",id:"_eraseexcesshistory",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"_pushToHistory",id:"_pushtohistory",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"beginTransaction",id:"begintransaction",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"cancelTransaction",id:"canceltransaction",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"commitTransaction",id:"committransaction",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getAllStates",id:"getallstates",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getState",id:"getstate",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"getTransactionStatePatches",id:"gettransactionstatepatches",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"setState",id:"setstate",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-18",level:4}],o={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageStateManagerImpl"),(0,r.kt)("p",null,"The implementation of the ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager")," interface."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,r.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},(0,r.kt)("inlineCode",{parentName:"a"},"PageStateManager")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageStateManagerImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PageStateManagerImpl"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"dispatcher"),")"),(0,r.kt)("p",null,"Initializes the page state manager."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,r.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dispatcher")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Dispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Dispatcher fires events to app.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L40"},"packages/core/src/page/state/PageStateManagerImpl.ts:40")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_cursor"},"_","cursor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","cursor"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L25"},"packages/core/src/page/state/PageStateManagerImpl.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_dispatcher"},"_","dispatcher"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","dispatcher"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L26"},"packages/core/src/page/state/PageStateManagerImpl.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_ongoingtransaction"},"_","ongoingTransaction"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","ongoingTransaction"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L27"},"packages/core/src/page/state/PageStateManagerImpl.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_statepatchqueue"},"_","statePatchQueue"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","statePatchQueue"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",")[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L28"},"packages/core/src/page/state/PageStateManagerImpl.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_states"},"_","states"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"_","states"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L29"},"packages/core/src/page/state/PageStateManagerImpl.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onchange"},"onChange"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"onChange"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#onchange"},"onChange")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L7"},"packages/core/src/page/state/PageStateManager.ts:7")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"dependencies"},"$dependencies"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"$dependencies"),"(): typeof ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher")),"[]"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"typeof ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Dispatcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Dispatcher")),"[]"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L31"},"packages/core/src/page/state/PageStateManagerImpl.ts:31")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"_callonchangecallback"},"_","callOnChangeCallback"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_callOnChangeCallback"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Call registered callback function on (@link onChange) with newState."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L175"},"packages/core/src/page/state/PageStateManagerImpl.ts:175")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_eraseexcesshistory"},"_","eraseExcessHistory"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_eraseExcessHistory"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Erase the oldest state from storage only if it exceed max\ndefined size of history."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L157"},"packages/core/src/page/state/PageStateManagerImpl.ts:157")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_pushtohistory"},"_","pushToHistory"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"_pushToHistory"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Push new state to history storage."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L167"},"packages/core/src/page/state/PageStateManagerImpl.ts:167")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"begintransaction"},"beginTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"beginTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Starts queueing state patches off the main state. While the transaction\nis active every ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," call has no effect on the current state."),(0,r.kt)("p",null,"Note that call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," after the transaction has begun will\nreturn state as it was before the transaction."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#begintransaction"},"beginTransaction")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L106"},"packages/core/src/page/state/PageStateManagerImpl.ts:106")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canceltransaction"},"cancelTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cancelTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Cancels ongoing transaction. Uncommitted state changes are lost."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#canceltransaction"},"cancelTransaction")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L148"},"packages/core/src/page/state/PageStateManagerImpl.ts:148")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears the state history."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#clear"},"clear")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L49"},"packages/core/src/page/state/PageStateManagerImpl.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"committransaction"},"commitTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"commitTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Applies queued state patches to the main state. All patches are squashed\nand applied with one ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," call."),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#committransaction"},"commitTransaction")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L123"},"packages/core/src/page/state/PageStateManagerImpl.ts:123")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallstates"},"getAllStates"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAllStates"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,r.kt)("p",null,"Returns the recorded history of page states. The states will be\nchronologically sorted from the oldest to the newest."),(0,r.kt)("p",null,"Note that the implementation may limit the size of the recorded history,\ntherefore the complete history may not be available."),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,r.kt)("p",null,"The recorded history of page states."),(0,r.kt)("h4",{id:"overrides-5"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#getallstates"},"getAllStates")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L92"},"packages/core/src/page/state/PageStateManagerImpl.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getstate"},"getState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"S")),(0,r.kt)("p",null,"Returns the current page state."),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"S")),(0,r.kt)("p",null,"The current page state."),(0,r.kt)("h4",{id:"overrides-6"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#getstate"},"getState")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L85"},"packages/core/src/page/state/PageStateManagerImpl.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettransactionstatepatches"},"getTransactionStatePatches"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTransactionStatePatches"),"(): (",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",")[]"),(0,r.kt)("p",null,"Returns queueing state patches off the main state from the begin of transaction."),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",")[]"),(0,r.kt)("p",null,"State patches from the begin of transaction."),(0,r.kt)("h4",{id:"overrides-7"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#gettransactionstatepatches"},"getTransactionStatePatches")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L99"},"packages/core/src/page/state/PageStateManagerImpl.ts:99")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setstate"},"setState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setState"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"patchState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets a new page state by applying the provided patch to the current\nstate."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"patchState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"K"),">")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"overrides-8"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#setstate"},"setState")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManagerImpl.ts#L59"},"packages/core/src/page/state/PageStateManagerImpl.ts:59")))}c.isMDXComponent=!0}}]);