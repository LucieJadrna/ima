"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3108],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(5773),a=(r(7294),r(3905));const i={id:"ima_core.RendererEvents",title:"Enumeration: RendererEvents",sidebar_label:"@ima/core.RendererEvents",custom_edit_url:null},o=void 0,d={unversionedId:"api/enums/ima_core.RendererEvents",id:"api/enums/ima_core.RendererEvents",title:"Enumeration: RendererEvents",description:"@ima/core.RendererEvents",source:"@site/../docs/api/enums/ima_core.RendererEvents.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.RendererEvents",permalink:"/api/enums/ima_core.RendererEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.RendererEvents",title:"Enumeration: RendererEvents",sidebar_label:"@ima/core.RendererEvents",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.HttpStatusCode",permalink:"/api/enums/ima_core.HttpStatusCode"},next:{title:"@ima/core.RendererTypes",permalink:"/api/enums/ima_core.RendererTypes"}},p={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ERROR",id:"error",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"HYDRATE_ERROR",id:"hydrate_error",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"MOUNTED",id:"mounted",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"UNMOUNTED",id:"unmounted",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"UPDATED",id:"updated",level:3},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:l},u="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".RendererEvents"),(0,a.kt)("p",null,"Events constants, which is firing to app."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"error"},"ERROR"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ERROR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.error"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.error")," when there is\nno _viewContainer in _renderToDOM method. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{message: string}"),"."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/renderer/RendererEvents.ts#L31"},"packages/core/src/page/renderer/RendererEvents.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hydrate_error"},"HYDRATE","_","ERROR"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"HYDRATE","_","ERROR")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.hydrateError"')),(0,a.kt)("p",null,"Fired when problem occurs during hydratation."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/renderer/RendererEvents.ts#L36"},"packages/core/src/page/renderer/RendererEvents.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mounted"},"MOUNTED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MOUNTED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.mounted"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.mounted")," after\ncurrent page view is mounted to the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{type: string}"),"."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/renderer/RendererEvents.ts#L10"},"packages/core/src/page/renderer/RendererEvents.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unmounted"},"UNMOUNTED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UNMOUNTED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.unmounted"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.unmounted")," after current view is\nunmounted from the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{type: string}"),"."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/renderer/RendererEvents.ts#L24"},"packages/core/src/page/renderer/RendererEvents.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updated"},"UPDATED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UPDATED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.updated"')),(0,a.kt)("p",null,"PageRenderer fires event ",(0,a.kt)("inlineCode",{parentName:"p"},"$IMA.$PageRenderer.updated")," after\ncurrent state is updated in the DOM. Event's data contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"{state: Object<string, *>}"),"."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/bbf80a3/packages/core/src/page/renderer/RendererEvents.ts#L17"},"packages/core/src/page/renderer/RendererEvents.ts:17")))}c.isMDXComponent=!0}}]);