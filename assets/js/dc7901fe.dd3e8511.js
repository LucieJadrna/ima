"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(a),c=n,u=m["".concat(s,".").concat(c)]||m[c]||k[c]||i;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(5773),n=(a(7294),a(3905));const i={id:"ima_core.WeakMapStorage",title:"Class: WeakMapStorage<V>",sidebar_label:"@ima/core.WeakMapStorage",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/ima_core.WeakMapStorage",id:"api/classes/ima_core.WeakMapStorage",title:"Class: WeakMapStorage<V>",description:"@ima/core.WeakMapStorage",source:"@site/../docs/api/classes/ima_core.WeakMapStorage.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.WeakMapStorage",permalink:"/api/classes/ima_core.WeakMapStorage",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.WeakMapStorage",title:"Class: WeakMapStorage<V>",sidebar_label:"@ima/core.WeakMapStorage",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.UrlTransformer",permalink:"/api/classes/ima_core.UrlTransformer"},next:{title:"@ima/core.Window",permalink:"/api/classes/ima_core.Window"}},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_entryTtl",id:"_entryttl",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_storage",id:"_storage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"_discardExpiredEntries",id:"_discardexpiredentries",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"has",id:"has",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"keys",id:"keys",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"size",id:"size",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-11",level:4}],d={toc:o};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".WeakMapStorage"),(0,n.kt)("p",null,"A specialization of the ",(0,n.kt)("inlineCode",{parentName:"p"},"link MapStorage")," storage mimicking the native\n",(0,n.kt)("inlineCode",{parentName:"p"},"WeakMap")," using its internal garbage collector used once the size of\nthe storage reaches the configured threshold."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},(0,n.kt)("inlineCode",{parentName:"a"},"Storage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"WeakMapStorage"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new WeakMapStorage"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"config"),")"),(0,n.kt)("p",null,"Initializes the storage."),(0,n.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"config")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Weak map storage configuration. The        fields have the following meaning:        - entryTtl The time-to-live of a storage entry in milliseconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"config.entryTtl")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L26"},"packages/core/src/storage/WeakMapStorage.ts:26")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_entryttl"},"_","entryTtl"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_","entryTtl"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The time-to-live of a storage entry in milliseconds."),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L12"},"packages/core/src/storage/WeakMapStorage.ts:12")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"_storage"},"_","storage"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_","storage"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"WeakRef"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">",">"),(0,n.kt)("p",null,"The internal storage of entries."),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L17"},"packages/core/src/storage/WeakMapStorage.ts:17")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_discardexpiredentries"},"_","discardExpiredEntries"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"_discardExpiredEntries"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Deletes all expired entries from this storage."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L101"},"packages/core/src/storage/WeakMapStorage.ts:101")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clear"},"clear"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"Clears the storage of all entries."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"This storage."),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#clear"},"clear")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L74"},"packages/core/src/storage/WeakMapStorage.ts:74")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"delete"},"delete"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"delete"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"Deletes the entry identified by the specified key from this storage."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The key identifying the storage entry.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"This storage."),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#delete"},"delete")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L67"},"packages/core/src/storage/WeakMapStorage.ts:67")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"get"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"V")),(0,n.kt)("p",null,"Retrieves the value of the entry identified by the specified . The\nmethod returns ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if the entry does not exists."),(0,n.kt)("p",null,"Entries set to the ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," value can be tested for existence\nusing the ",(0,n.kt)("inlineCode",{parentName:"p"},"link has")," method."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The key identifying the storage entry.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"V")),(0,n.kt)("p",null,"The value of the storage entry."),(0,n.kt)("h4",{id:"overrides-3"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#get"},"get")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L44"},"packages/core/src/storage/WeakMapStorage.ts:44")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"has"},"has"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"has"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the entry identified by the specified key exists\nin this storage."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The key identifying the storage entry.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the storage entry exists."),(0,n.kt)("h4",{id:"overrides-4"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#has"},"has")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L35"},"packages/core/src/storage/WeakMapStorage.ts:35")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"init"},"init"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"init"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"This method is used to finalize the initialization of the storage after\nthe dependencies provided through the constructor have been prepared for\nuse."),(0,n.kt)("p",null,"This method must be invoked only once and it must be the first method\ninvoked on this instance."),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"This storage."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#init"},"init")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/Storage.ts#L19"},"packages/core/src/storage/Storage.ts:19")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"keys"},"keys"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"keys"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"Returns an iterator for traversing the keys in this storage. The order\nin which the keys are traversed is undefined."),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Iterable"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"An iterator for traversing the keys in this\nstorage. The iterator also implements the iterable protocol,\nreturning itself as its own iterator, allowing it to be used in\na ",(0,n.kt)("inlineCode",{parentName:"p"},"for..of")," loop."),(0,n.kt)("h4",{id:"overrides-5"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#keys"},"keys")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L83"},"packages/core/src/storage/WeakMapStorage.ts:83")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"set"},"set"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"set"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"Sets the storage entry identified by the specified key to the provided\nvalue. The method creates the entry if it does not exist already."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The key identifying the storage entry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The storage entry value.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.WeakMapStorage"},(0,n.kt)("inlineCode",{parentName:"a"},"WeakMapStorage")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("p",null,"This storage."),(0,n.kt)("h4",{id:"overrides-6"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#set"},"set")),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L57"},"packages/core/src/storage/WeakMapStorage.ts:57")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"size"},"size"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"size"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Returns the number of entries in this storage."),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The number of entries in this storage."),(0,n.kt)("h4",{id:"overrides-7"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage"},"Storage"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Storage#size"},"size")),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1108d49/packages/core/src/storage/WeakMapStorage.ts#L92"},"packages/core/src/storage/WeakMapStorage.ts:92")))}k.isMDXComponent=!0}}]);