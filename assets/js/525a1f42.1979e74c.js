"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,g=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(5773),r=(a(7294),a(3905));const i={id:"ima_core.PageStateManager",title:"Class: PageStateManager<S>",sidebar_label:"@ima/core.PageStateManager",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/ima_core.PageStateManager",id:"api/classes/ima_core.PageStateManager",title:"Class: PageStateManager<S>",description:"@ima/core.PageStateManager",source:"@site/../docs/api/classes/ima_core.PageStateManager.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PageStateManager",permalink:"/api/classes/ima_core.PageStateManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PageStateManager",title:"Class: PageStateManager<S>",sidebar_label:"@ima/core.PageStateManager",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageRenderer",permalink:"/api/classes/ima_core.PageRenderer"},next:{title:"@ima/core.PageStateManagerDecorator",permalink:"/api/classes/ima_core.PageStateManagerDecorator"}},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Properties",id:"properties",level:2},{value:"onChange",id:"onchange",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"beginTransaction",id:"begintransaction",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"cancelTransaction",id:"canceltransaction",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"commitTransaction",id:"committransaction",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getAllStates",id:"getallstates",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getState",id:"getstate",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getTransactionStatePatches",id:"gettransactionstatepatches",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"setState",id:"setstate",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:o},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PageStateManager"),(0,r.kt)("p",null,"Manager of the current page state and state history."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,r.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageStateManager"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManagerDecorator"},(0,r.kt)("inlineCode",{parentName:"a"},"PageStateManagerDecorator"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManagerImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"PageStateManagerImpl"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManagerDecorator"},(0,r.kt)("inlineCode",{parentName:"a"},"PageStateManagerDecorator"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.PageStateManagerImpl"},(0,r.kt)("inlineCode",{parentName:"a"},"PageStateManagerImpl"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PageStateManager"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),">","()"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/modules/ima_core#pagestate"},(0,r.kt)("inlineCode",{parentName:"a"},"PageState"))," = {}")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"onchange"},"onChange"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"onChange"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"newState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"S"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L7"},"packages/core/src/page/state/PageStateManager.ts:7")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"begintransaction"},"beginTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"beginTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Starts queueing state patches off the main state. While the transaction\nis active every ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," call has no effect on the current state."),(0,r.kt)("p",null,"Note that call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," after the transaction has begun will\nreturn state as it was before the transaction."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L64"},"packages/core/src/page/state/PageStateManager.ts:64")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canceltransaction"},"cancelTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cancelTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Cancels ongoing transaction. Uncommitted state changes are lost."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L79"},"packages/core/src/page/state/PageStateManager.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears the state history."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L12"},"packages/core/src/page/state/PageStateManager.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"committransaction"},"commitTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"commitTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Applies queued state patches to the main state. All patches are squashed\nand applied with one ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," call."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L72"},"packages/core/src/page/state/PageStateManager.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallstates"},"getAllStates"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAllStates"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,r.kt)("p",null,"Returns the recorded history of page states. The states will be\nchronologically sorted from the oldest to the newest."),(0,r.kt)("p",null,"Note that the implementation may limit the size of the recorded history,\ntherefore the complete history may not be available."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"S"),"[]"),(0,r.kt)("p",null,"The recorded history of page states."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L44"},"packages/core/src/page/state/PageStateManager.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getstate"},"getState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getState"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"S")),(0,r.kt)("p",null,"Returns the current page state."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"S")),(0,r.kt)("p",null,"The current page state."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L31"},"packages/core/src/page/state/PageStateManager.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettransactionstatepatches"},"getTransactionStatePatches"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTransactionStatePatches"),"(): (",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",")[]"),(0,r.kt)("p",null,"Returns queueing state patches off the main state from the begin of transaction."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",")[]"),(0,r.kt)("p",null,"State patches from the begin of transaction."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L53"},"packages/core/src/page/state/PageStateManager.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setstate"},"setState"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setState"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"patchState"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sets a new page state by applying the provided patch to the current\nstate."),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"patchState")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"S")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"S"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"K"),">")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/state/PageStateManager.ts#L22"},"packages/core/src/page/state/PageStateManager.ts:22")))}m.isMDXComponent=!0}}]);