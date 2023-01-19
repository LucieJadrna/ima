"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(5773),o=(r(7294),r(3905));const a={id:"ima_core.RouteNames",title:"Enumeration: RouteNames",sidebar_label:"@ima/core.RouteNames",custom_edit_url:null},i=void 0,u={unversionedId:"api/enums/ima_core.RouteNames",id:"api/enums/ima_core.RouteNames",title:"Enumeration: RouteNames",description:"@ima/core.RouteNames",source:"@site/../docs/api/enums/ima_core.RouteNames.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.RouteNames",permalink:"/api/enums/ima_core.RouteNames",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.RouteNames",title:"Enumeration: RouteNames",sidebar_label:"@ima/core.RouteNames",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.RendererTypes",permalink:"/api/enums/ima_core.RendererTypes"},next:{title:"@ima/core.RouterEvents",permalink:"/api/enums/ima_core.RouterEvents"}},s={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ERROR",id:"error",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"NOT_FOUND",id:"not_found",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".RouteNames"),(0,o.kt)("p",null,"HTTP status code constants, representing the HTTP status codes recognized\nand processed by this proxy."),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("h3",{id:"error"},"ERROR"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"ERROR")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"error"')),(0,o.kt)("p",null,"The internal route name used for the error page (the 5XX HTTP status\ncode error page)."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1c41e2d/packages/core/src/router/RouteNames.ts#L16"},"packages/core/src/router/RouteNames.ts:16")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"not_found"},"NOT","_","FOUND"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"NOT","_","FOUND")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"notFound"')),(0,o.kt)("p",null,'The internal route name used for the "not found" error page (the 4XX\nHTTP status code error page).'),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1c41e2d/packages/core/src/router/RouteNames.ts#L10"},"packages/core/src/router/RouteNames.ts:10")))}m.isMDXComponent=!0}}]);