"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(5773),a=(n(7294),n(3905));const i={id:"ima_core.ComponentUtils",title:"Class: ComponentUtils",sidebar_label:"@ima/core.ComponentUtils",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/ima_core.ComponentUtils",id:"api/classes/ima_core.ComponentUtils",title:"Class: ComponentUtils",description:"@ima/core.ComponentUtils",source:"@site/../docs/api/classes/ima_core.ComponentUtils.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.ComponentUtils",permalink:"/api/classes/ima_core.ComponentUtils",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.ComponentUtils",title:"Class: ComponentUtils",sidebar_label:"@ima/core.ComponentUtils",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.ClientWindow",permalink:"/api/classes/ima_core.ClientWindow"},next:{title:"@ima/core.Controller",permalink:"/api/classes/ima_core.Controller"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_oc",id:"_oc",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_utilities",id:"_utilities",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_utilityClasses",id:"_utilityclasses",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"_utilityReferrers",id:"_utilityreferrers",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"_createUtilityInstance",id:"_createutilityinstance",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getReferrers",id:"getreferrers",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getUtils",id:"getutils",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"register",id:"register",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".ComponentUtils"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ComponentUtils"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"oc"),")"),(0,a.kt)("p",null,"Initializes the registry used for managing component utils."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"oc")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/classes/ima_core.ObjectContainer"},(0,a.kt)("inlineCode",{parentName:"a"},"ObjectContainer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The application's dependency injector - the object container.")))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L34"},"packages/core/src/page/renderer/ComponentUtils.ts:34")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"_oc"},"_","oc"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_","oc"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/ima_core.ObjectContainer"},(0,a.kt)("inlineCode",{parentName:"a"},"ObjectContainer"))),(0,a.kt)("p",null,"The application's dependency injector - the object container."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L11"},"packages/core/src/page/renderer/ComponentUtils.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_utilities"},"_","utilities"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"_","utilities"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,a.kt)("p",null,"Map of instantiated utilities"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L21"},"packages/core/src/page/renderer/ComponentUtils.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_utilityclasses"},"_","utilityClasses"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_","utilityClasses"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Map of registered utilities."),(0,a.kt)("h4",{id:"index-signature"},"Index signature"),(0,a.kt)("p",null,"\u25aa ","[key: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"p"},"UnknownConstructable")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"FactoryFunction")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L15"},"packages/core/src/page/renderer/ComponentUtils.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"_utilityreferrers"},"_","utilityReferrers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"_","utilityReferrers"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#stringparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"StringParameters"))," = ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")),(0,a.kt)("p",null,"Map of referrers to utilities"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L26"},"packages/core/src/page/renderer/ComponentUtils.ts:26")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"_createutilityinstance"},"_","createUtilityInstance"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"_createUtilityInstance"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"alias"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"utilityClass"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"alias")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"utilityClass")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"UnknownConstructable")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"FactoryFunction"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L113"},"packages/core/src/page/renderer/ComponentUtils.ts:113")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getreferrers"},"getReferrers"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getReferrers"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#stringparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"StringParameters"))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#stringparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"StringParameters"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L109"},"packages/core/src/page/renderer/ComponentUtils.ts:109")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getutils"},"getUtils"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getUtils"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,a.kt)("p",null,"Returns object containing all registered utilities"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#unknownparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"UnknownParameters"))),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L89"},"packages/core/src/page/renderer/ComponentUtils.ts:89")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"register"},"register"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"register"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentUtilityClass?"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"referrer?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Registers single utility class or multiple classes in alias->class mapping."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"UnknownConstructable")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"FactoryFunction")," ","|"," { ",(0,a.kt)("inlineCode",{parentName:"td"},"[key: string]"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"UnknownConstructable")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"FactoryFunction"),";  }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"componentUtilityClass?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"UnknownConstructable")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"FactoryFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"referrer?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/d06b33f/packages/core/src/page/renderer/ComponentUtils.ts#L41"},"packages/core/src/page/renderer/ComponentUtils.ts:41")))}m.isMDXComponent=!0}}]);