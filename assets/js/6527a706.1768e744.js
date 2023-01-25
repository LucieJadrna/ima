"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(5773),o=(n(7294),n(3905));const a={title:"Data fetching",description:"Basic features > Data fetching with HttpAgent"},i=void 0,s={unversionedId:"basic-features/data-fetching",id:"basic-features/data-fetching",title:"Data fetching",description:"Basic features > Data fetching with HttpAgent",source:"@site/../docs/basic-features/data-fetching.md",sourceDirName:"basic-features",slug:"/basic-features/data-fetching",permalink:"/basic-features/data-fetching",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/data-fetching.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1674634121,formattedLastUpdatedAt:"Jan 25, 2023",frontMatter:{title:"Data fetching",description:"Basic features > Data fetching with HttpAgent"},sidebar:"docs",previous:{title:"Views & Components",permalink:"/basic-features/views-and-components"},next:{title:"Introduction",permalink:"/basic-features/routing/introduction"}},l={},c=[{value:"Cancellable requests",id:"cancellable-requests",level:2},{value:"options.abortController",id:"optionsabortcontroller",level:3},{value:"options.fetchOptions.signal",id:"optionsfetchoptionssignal",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HttpAgent")," allows you to isomorphically fetch data in IMA.js applications. It is a simple wrapper around native ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," with additional features like caching, proxy support and others."),(0,o.kt)("h2",{id:"cancellable-requests"},"Cancellable requests"),(0,o.kt)("p",null,"The HttpAgent has support for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},"AbortController")," to cancel requests in native way. There are ",(0,o.kt)("strong",{parentName:"p"},"two ways")," you can provide custom instance of AbortController to the HttpAgent, where each has it's own benefits."),(0,o.kt)("h3",{id:"optionsabortcontroller"},"options.abortController"),(0,o.kt)("p",null,"Using this approach has the added benefit of ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpAgent")," being able to additionally ",(0,o.kt)("strong",{parentName:"p"},"reuse")," this controller ",(0,o.kt)("strong",{parentName:"p"},"for cancelation of timeout requests"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const controller = new AbortController();\n\nhttpAgent.get('<uri>', '<data>', {\n  abortController: controller,\n});\n\n// Cancel the request\ncontroller.abort();\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you don't provide custom instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"AbortController")," the agent uses it's own instance internally to cancel running timeout requests.")),(0,o.kt)("h3",{id:"optionsfetchoptionssignal"},"options.fetchOptions.signal"),(0,o.kt)("p",null,"This approach is more similar to native fetch definition. However since currently you can only provide one ",(0,o.kt)("inlineCode",{parentName:"p"},"signal")," to fetch request and we don't have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"controller")," instance (from within the HttpAgent), we are unable to abort time out requests in this case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const controller = new AbortController();\n\nhttpAgent.get('<uri>', '<data>', {\n  fetchOptions: {\n    signal: controller.signal,\n  }\n});\n\n// Cancel the request\ncontroller.abort();\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The time out requests still throw the same timeout error, however they are not canceled (aborted). This is the only difference between the two forementioned methods.")))}u.isMDXComponent=!0}}]);