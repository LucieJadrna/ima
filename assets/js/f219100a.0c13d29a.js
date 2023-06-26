"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",sidebar_label:"@ima/core.HttpAgentRequestOptions",custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/ima_core.HttpAgentRequestOptions",id:"api/interfaces/ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",description:"@ima/core.HttpAgentRequestOptions",source:"@site/../docs/api/interfaces/ima_core.HttpAgentRequestOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_core.HttpAgentRequestOptions",permalink:"/api/interfaces/ima_core.HttpAgentRequestOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",sidebar_label:"@ima/core.HttpAgentRequestOptions",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.GlobalImaObject",permalink:"/api/interfaces/ima_core.GlobalImaObject"},next:{title:"@ima/core.ImaRequestInit",permalink:"/api/interfaces/ima_core.ImaRequestInit"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"abortController",id:"abortcontroller",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"cache",id:"cache",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"fetchOptions",id:"fetchoptions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"keepSensitiveHeaders",id:"keepsensitiveheaders",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"postProcessors",id:"postprocessors",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"repeatRequest",id:"repeatrequest",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"timeout",id:"timeout",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"ttl",id:"ttl",level:3},{value:"Defined in",id:"defined-in-7",level:4}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".HttpAgentRequestOptions"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"abortcontroller"},"abortController"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"abortController"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortController")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L39"},"packages/core/src/http/HttpAgent.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cache"},"cache"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cache"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L35"},"packages/core/src/http/HttpAgent.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetchoptions"},"fetchOptions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fetchOptions"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.ImaRequestInit"},(0,r.kt)("inlineCode",{parentName:"a"},"ImaRequestInit"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L34"},"packages/core/src/http/HttpAgent.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"keepsensitiveheaders"},"keepSensitiveHeaders"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"keepSensitiveHeaders"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L40"},"packages/core/src/http/HttpAgent.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postprocessors"},"postProcessors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"postProcessors"),": <B",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">",") => ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"B"),">","[]"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L36"},"packages/core/src/http/HttpAgent.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"repeatrequest"},"repeatRequest"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"repeatRequest"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L33"},"packages/core/src/http/HttpAgent.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timeout"},"timeout"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"timeout"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L31"},"packages/core/src/http/HttpAgent.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ttl"},"ttl"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ttl"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/afb70aa/packages/core/src/http/HttpAgent.ts#L32"},"packages/core/src/http/HttpAgent.ts:32")))}d.isMDXComponent=!0}}]);