"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(5773),r=(n(7294),n(3905));const a={id:"ima_dev_utils.LoggerOptions",title:"Interface: LoggerOptions",sidebar_label:"@ima/dev-utils.LoggerOptions",custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/ima_dev_utils.LoggerOptions",id:"api/interfaces/ima_dev_utils.LoggerOptions",title:"Interface: LoggerOptions",description:"@ima/dev-utils.LoggerOptions",source:"@site/../docs/api/interfaces/ima_dev_utils.LoggerOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_dev_utils.LoggerOptions",permalink:"/api/interfaces/ima_dev_utils.LoggerOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_dev_utils.LoggerOptions",title:"Interface: LoggerOptions",sidebar_label:"@ima/dev-utils.LoggerOptions",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/dev-utils.FragmentLine",permalink:"/api/interfaces/ima_dev_utils.FragmentLine"},next:{title:"@ima/plugin-cli.Context",permalink:"/api/interfaces/ima_plugin_cli.Context"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"elapsed",id:"elapsed",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"newLine",id:"newline",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"trackTime",id:"tracktime",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_dev_utils"},"@ima/dev-utils"),".LoggerOptions"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"elapsed"},"elapsed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"elapsed"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns time utility function, which when called returns\nformatted elapsed time from it's creation."),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Callback to return formatted elapsed time."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L7"},"packages/dev-utils/src/logger.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"newline"},"newLine"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"newLine"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L6"},"packages/dev-utils/src/logger.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tracktime"},"trackTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"trackTime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L5"},"packages/dev-utils/src/logger.ts:5")))}u.isMDXComponent=!0}}]);