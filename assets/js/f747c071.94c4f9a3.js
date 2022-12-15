"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[461],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4775:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(5773),a=(t(7294),t(3905));const o={title:"Error Handling",description:"Basic features > Errors"},i=void 0,s={unversionedId:"basic-features/error-handling",id:"basic-features/error-handling",title:"Error Handling",description:"Basic features > Errors",source:"@site/../docs/basic-features/error-handling.md",sourceDirName:"basic-features",slug:"/basic-features/error-handling",permalink:"/basic-features/error-handling",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/error-handling.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1671109039,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{title:"Error Handling",description:"Basic features > Errors"},sidebar:"docs",previous:{title:"Dictionary",permalink:"/basic-features/dictionary"},next:{title:"Dynamic imports",permalink:"/advanced-features/dynamic-imports"}},c={},l=[{value:"GenericError",id:"genericerror",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This sections focuses on client and server-side error handling during development and in production."),(0,a.kt)("h2",{id:"genericerror"},"GenericError"),(0,a.kt)("p",null,"Represents custom error class that poses a structure for http errors. This ",(0,a.kt)("strong",{parentName:"p"},"should be preferred way")," of throwing custom errors as it adds an ability to define http status code with additional custom params. To create such error you need to import ",(0,a.kt)("strong",{parentName:"p"},"GenericError")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/core")," and instantiate it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GenericError } from '@ima/core';\n\nthrow new GenericError(\n  'Something went wrong.',\n  { status: 500, custom: 'param' } // error parameters\n);\n")),(0,a.kt)("p",null,"GenericError instance has 2 methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getParams()")," - Returns params argument (2nd argument) provided to the constructor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getHttpStatus()")," - Returns ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," property from the params.")))}u.isMDXComponent=!0}}]);