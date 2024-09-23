"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(5773),a=(n(7294),n(3905));const i={id:"ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",sidebar_label:"@ima/core.HttpAgentRequestOptions",custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/ima_core.HttpAgentRequestOptions",id:"api/interfaces/ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",description:"@ima/core.HttpAgentRequestOptions",source:"@site/../docs/api/interfaces/ima_core.HttpAgentRequestOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_core.HttpAgentRequestOptions",permalink:"/api/interfaces/ima_core.HttpAgentRequestOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.HttpAgentRequestOptions",title:"Interface: HttpAgentRequestOptions",sidebar_label:"@ima/core.HttpAgentRequestOptions",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.GlobalImaObject",permalink:"/api/interfaces/ima_core.GlobalImaObject"},next:{title:"@ima/core.ImaRequestInit",permalink:"/api/interfaces/ima_core.ImaRequestInit"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"abortController",id:"abortcontroller",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"cache",id:"cache",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"fetchOptions",id:"fetchoptions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"keepSensitiveHeaders",id:"keepsensitiveheaders",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"postProcessors",id:"postprocessors",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"repeatRequest",id:"repeatrequest",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"responseType",id:"responsetype",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"timeout",id:"timeout",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ttl",id:"ttl",level:3},{value:"Defined in",id:"defined-in-8",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".HttpAgentRequestOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"abortcontroller"},"abortController"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"abortController"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AbortController")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L40"},"packages/core/src/http/HttpAgent.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cache"},"cache"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"cache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L35"},"packages/core/src/http/HttpAgent.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fetchoptions"},"fetchOptions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fetchOptions"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.ImaRequestInit"},(0,a.kt)("inlineCode",{parentName:"a"},"ImaRequestInit"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L34"},"packages/core/src/http/HttpAgent.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keepsensitiveheaders"},"keepSensitiveHeaders"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"keepSensitiveHeaders"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L41"},"packages/core/src/http/HttpAgent.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"postprocessors"},"postProcessors"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"postProcessors"),": <B",">","(",(0,a.kt)("inlineCode",{parentName:"p"},"response"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"B"),">",") => ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#httpagentresponse"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpAgentResponse")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"B"),">","[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L37"},"packages/core/src/http/HttpAgent.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"repeatrequest"},"repeatRequest"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"repeatRequest"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L33"},"packages/core/src/http/HttpAgent.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"responsetype"},"responseType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"responseType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"json"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"blob"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"text"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"arrayBuffer"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"formData"')),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L36"},"packages/core/src/http/HttpAgent.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timeout"},"timeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"timeout"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L31"},"packages/core/src/http/HttpAgent.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ttl"},"ttl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ttl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/67e8e06/packages/core/src/http/HttpAgent.ts#L32"},"packages/core/src/http/HttpAgent.ts:32")))}u.isMDXComponent=!0}}]);