"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4871],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,k=d["".concat(o,".").concat(m)]||d[m]||g[m]||i;return t?r.createElement(k,l(l({ref:a},c),{},{components:t})):r.createElement(k,l({ref:a},c))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4641:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(5773),n=(t(7294),t(3905));const i={id:"ima_core.PageStateManagerDecorator",title:"Class: PageStateManagerDecorator",sidebar_label:"@ima/core.PageStateManagerDecorator",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/ima_core.PageStateManagerDecorator",id:"api/classes/ima_core.PageStateManagerDecorator",title:"Class: PageStateManagerDecorator",description:"@ima/core.PageStateManagerDecorator",source:"@site/../docs/api/classes/ima_core.PageStateManagerDecorator.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageStateManagerDecorator",permalink:"/api/classes/ima_core.PageStateManagerDecorator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageStateManagerDecorator",title:"Class: PageStateManagerDecorator",sidebar_label:"@ima/core.PageStateManagerDecorator",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageStateManager",permalink:"/api/classes/ima_core.PageStateManager"},next:{title:"@ima/core.PageStateManagerImpl",permalink:"/api/classes/ima_core.PageStateManagerImpl"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_allowedStateKeys",id:"_allowedstatekeys",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_pageStateManager",id:"_pagestatemanager",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"onChange",id:"onchange",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"beginTransaction",id:"begintransaction",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"cancelTransaction",id:"canceltransaction",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"commitTransaction",id:"committransaction",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getAllStates",id:"getallstates",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getState",id:"getstate",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getTransactionStatePatches",id:"gettransactionstatepatches",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"setState",id:"setstate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-11",level:4}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageStateManagerDecorator"),(0,n.kt)("p",null,"Decorator for page state manager, which add logic for limiting Extension\ncompetence."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},(0,n.kt)("inlineCode",{parentName:"a"},"PageStateManager"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"PageStateManagerDecorator"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new PageStateManagerDecorator"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"pageStateManager"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"allowedStateKeys"),")"),(0,n.kt)("p",null,"Initializes the page state manager decorator."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pageStateManager")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/ima_core.PageStateManager"},(0,n.kt)("inlineCode",{parentName:"a"},"PageStateManager")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"allowedStateKeys")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L25"},"packages/core/src/page/state/PageStateManagerDecorator.ts:25")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_allowedstatekeys"},"_","allowedStateKeys"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_","allowedStateKeys"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,"Array of access keys for state."),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L17"},"packages/core/src/page/state/PageStateManagerDecorator.ts:17")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"_pagestatemanager"},"_","pageStateManager"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_","pageStateManager"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},(0,n.kt)("inlineCode",{parentName:"a"},"PageStateManager"))),(0,n.kt)("p",null,"The current page state manager."),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L13"},"packages/core/src/page/state/PageStateManagerDecorator.ts:13")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"onchange"},"onChange"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"onChange"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"newState"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"newState"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"newState")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")))))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#onchange"},"onChange")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManager.ts#L9"},"packages/core/src/page/state/PageStateManager.ts:9")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"begintransaction"},"beginTransaction"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"beginTransaction"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Starts queueing state patches off the main state. While the transaction\nis active every ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," call has no effect on the current state."),(0,n.kt)("p",null,"Note that call to ",(0,n.kt)("inlineCode",{parentName:"p"},"getState")," after the transaction has begun will\nreturn state as it was before the transaction."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#begintransaction"},"beginTransaction")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L89"},"packages/core/src/page/state/PageStateManagerDecorator.ts:89")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"canceltransaction"},"cancelTransaction"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"cancelTransaction"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Cancels ongoing transaction. Uncommited state changes are lost."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#canceltransaction"},"cancelTransaction")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L103"},"packages/core/src/page/state/PageStateManagerDecorator.ts:103")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clear"},"clear"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Clears the state history."),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-3"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#clear"},"clear")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L39"},"packages/core/src/page/state/PageStateManagerDecorator.ts:39")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"committransaction"},"commitTransaction"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"commitTransaction"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Applies queued state patches to the main state. All patches are squashed\nand applied with one ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," call."),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-4"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#committransaction"},"commitTransaction")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L96"},"packages/core/src/page/state/PageStateManagerDecorator.ts:96")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getallstates"},"getAllStates"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getAllStates"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")),"[]"),(0,n.kt)("p",null,"Returns the recorded history of page states. The states will be\nchronologically sorted from the oldest to the newest."),(0,n.kt)("p",null,"Note that the implementation may limit the size of the recorded history,\ntherefore the complete history may not be available."),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")),"[]"),(0,n.kt)("p",null,"The recorded history of page states."),(0,n.kt)("h4",{id:"overrides-5"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#getallstates"},"getAllStates")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L75"},"packages/core/src/page/state/PageStateManagerDecorator.ts:75")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstate"},"getState"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,n.kt)("p",null,"Returns the current page state."),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,n.kt)("p",null,"The current page state."),(0,n.kt)("h4",{id:"overrides-6"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#getstate"},"getState")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L68"},"packages/core/src/page/state/PageStateManagerDecorator.ts:68")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gettransactionstatepatches"},"getTransactionStatePatches"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getTransactionStatePatches"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")),"[]"),(0,n.kt)("p",null,"Returns queueing state patches off the main state from the begin of transaction."),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters")),"[]"),(0,n.kt)("p",null,"State patches from the begin of transaction."),(0,n.kt)("h4",{id:"overrides-7"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#gettransactionstatepatches"},"getTransactionStatePatches")),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L82"},"packages/core/src/page/state/PageStateManagerDecorator.ts:82")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setstate"},"setState"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setState"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"statePatch"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Sets a new page state by applying the provided patch to the current\nstate."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"statePatch")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_core#unknownparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The patch of the current state.")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-8"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager"},"PageStateManager"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManager#setstate"},"setState")),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/95a57c7/packages/core/src/page/state/PageStateManagerDecorator.ts#L46"},"packages/core/src/page/state/PageStateManagerDecorator.ts:46")))}d.isMDXComponent=!0}}]);