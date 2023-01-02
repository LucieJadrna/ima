"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2468],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),p=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return a.createElement(o.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return t?a.createElement(f,i(i({ref:r},m),{},{components:t})):a.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9547:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(5773),n=(t(7294),t(3905));const l={id:"ima_core.UrlTransformer",title:"Class: UrlTransformer",sidebar_label:"@ima/core.UrlTransformer",custom_edit_url:null},i=void 0,s={unversionedId:"api/classes/ima_core.UrlTransformer",id:"api/classes/ima_core.UrlTransformer",title:"Class: UrlTransformer",description:"@ima/core.UrlTransformer",source:"@site/../docs/api/classes/ima_core.UrlTransformer.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.UrlTransformer",permalink:"/api/classes/ima_core.UrlTransformer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.UrlTransformer",title:"Class: UrlTransformer",sidebar_label:"@ima/core.UrlTransformer",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.Storage",permalink:"/api/classes/ima_core.Storage"},next:{title:"@ima/core.WeakMapStorage",permalink:"/api/classes/ima_core.WeakMapStorage"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_rules",id:"_rules",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"addRule",id:"addrule",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"transform",id:"transform",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".UrlTransformer"),(0,n.kt)("p",null,"Utility for transforming URLs according to the configured replacement rules."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new UrlTransformer"),"()"),(0,n.kt)("p",null,"Initializes the URL transformer."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L16"},"packages/core/src/http/UrlTransformer.ts:16")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_rules"},"_","rules"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"_","rules"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_core#stringparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"StringParameters"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L7"},"packages/core/src/http/UrlTransformer.ts:7")),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"dependencies"},"$dependencies"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"$dependencies"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"never"),"[]"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L9"},"packages/core/src/http/UrlTransformer.ts:9")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"addrule"},"addRule"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addRule"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"pattern"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"replacement"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.UrlTransformer"},(0,n.kt)("inlineCode",{parentName:"a"},"UrlTransformer"))),(0,n.kt)("p",null,"Adds the provided replacement rule to the rules used by this URL\ntransformer."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pattern")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Regexp patter to look for (must be escaped as if for use in the Regexp constructor).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"replacement")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The replacement of the matched patter in any matched URL.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.UrlTransformer"},(0,n.kt)("inlineCode",{parentName:"a"},"UrlTransformer"))),(0,n.kt)("p",null,"This transformer."),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L30"},"packages/core/src/http/UrlTransformer.ts:30")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clear"},"clear"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.UrlTransformer"},(0,n.kt)("inlineCode",{parentName:"a"},"UrlTransformer"))),(0,n.kt)("p",null,"Clears all rules."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.UrlTransformer"},(0,n.kt)("inlineCode",{parentName:"a"},"UrlTransformer"))),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L39"},"packages/core/src/http/UrlTransformer.ts:39")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transform"},"transform"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"transform"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"url"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Applies all rules registered with this URL transformer to the provided\nURL and returns the result. The rules will be applied in the order they\nwere registered."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL for transformation.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Transformed URL."),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/a6a2c39/packages/core/src/http/UrlTransformer.ts#L53"},"packages/core/src/http/UrlTransformer.ts:53")))}d.isMDXComponent=!0}}]);