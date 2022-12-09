"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6289],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,o(o({ref:r},c),{},{components:n})):t.createElement(f,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5332:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=n(5773),a=(n(7294),n(3905));const i={id:"ima_core.RendererTypes",title:"Enumeration: RendererTypes",sidebar_label:"@ima/core.RendererTypes",custom_edit_url:null},o=void 0,p={unversionedId:"api/enums/ima_core.RendererTypes",id:"api/enums/ima_core.RendererTypes",title:"Enumeration: RendererTypes",description:"@ima/core.RendererTypes",source:"@site/../docs/api/enums/ima_core.RendererTypes.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.RendererTypes",permalink:"/api/enums/ima_core.RendererTypes",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.RendererTypes",title:"Enumeration: RendererTypes",sidebar_label:"@ima/core.RendererTypes",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.RendererEvents",permalink:"/api/enums/ima_core.RendererEvents"},next:{title:"@ima/core.RouteNames",permalink:"/api/enums/ima_core.RouteNames"}},s={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"HYDRATE",id:"hydrate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"RENDER",id:"render",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"UNMOUNT",id:"unmount",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".RendererTypes"),(0,a.kt)("p",null,"Events constants, which is firing to app."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"hydrate"},"HYDRATE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"HYDRATE")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.type.hydrate"')),(0,a.kt)("p",null,"The HYDRATE type is set if mounting use React.hydrate method."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/page/renderer/Types.ts#L12"},"packages/core/src/page/renderer/Types.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"render"},"RENDER"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"RENDER")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.type.render"')),(0,a.kt)("p",null,"The RENDER type is set if mounting use React.render method."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/page/renderer/Types.ts#L8"},"packages/core/src/page/renderer/Types.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unmount"},"UNMOUNT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UNMOUNT")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageRenderer.type.unmount"')),(0,a.kt)("p",null,"The UNMOUNT type is set if unmounting use React.unmountComponentAtNode method."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/page/renderer/Types.ts#L16"},"packages/core/src/page/renderer/Types.ts:16")))}u.isMDXComponent=!0}}]);