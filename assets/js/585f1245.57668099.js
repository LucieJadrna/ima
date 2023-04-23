"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9990],{6904:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/devtools-diagram-1a34adcfd0be597002625faa3335f582.png"},3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4705:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(5773),r=(o(7294),o(3905));const a={title:"Introduction",description:"Devtools > Introduction to the use of IMA.js developer tools"},i=void 0,s={unversionedId:"devtools/devtools-introduction",id:"devtools/devtools-introduction",title:"Introduction",description:"Devtools > Introduction to the use of IMA.js developer tools",source:"@site/../docs/devtools/devtools-introduction.md",sourceDirName:"devtools",slug:"/devtools/devtools-introduction",permalink:"/devtools/devtools-introduction",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/devtools/devtools-introduction.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1682271140,formattedLastUpdatedAt:"Apr 23, 2023",frontMatter:{title:"Introduction",description:"Devtools > Introduction to the use of IMA.js developer tools"},sidebar:"docs",previous:{title:"Existing plugins",permalink:"/plugins/available-plugins"},next:{title:"UI & Controls",permalink:"/devtools/devtools-ui"}},l={},p=[{value:"How it works?",id:"how-it-works",level:2},{value:"Devtools script",id:"devtools-script",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the introduction of IMA.js v17 we've implemented custom devtools that are available as a\n",(0,r.kt)("strong",{parentName:"p"},"Chrome extension"),". Main purpose of these devtools is to provide developers with easy access\nto debug and monitor IMA.js applications."),(0,r.kt)("p",null,"The devtools works similarly to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/krasimir/kuker"},"kuker extension"),".\nThis means that they display messages about method and event calls which are wrapped in a proxy like\nobject using custom script that gets injected to a page. You can then filter and look through received images\nwhich can help you debug how each component behaves in your application."),(0,r.kt)("p",null,"The extension ",(0,r.kt)("strong",{parentName:"p"},"requires no additional installation or dependencies")," in your IMA.js application. It will\nwork with any IMA.js application from v17 and above."),(0,r.kt)("p",null,"As of now it's only available to ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/imajs-developer-tools/jckgkffefmgcnbaimdmeoelgpjefpljh"},(0,r.kt)("strong",{parentName:"a"},"download"))," for ",(0,r.kt)("strong",{parentName:"p"},"Chrome")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/imajs-developer-tools/jckgkffefmgcnbaimdmeoelgpjefpljh"},(0,r.kt)("strong",{parentName:"a"},"Chrome web store")),"."),(0,r.kt)("h2",{id:"how-it-works"},"How it works?"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(6904).Z,width:"642",height:"317"})),(0,r.kt)("p",null,"After you download and enable an IMA.js devtools extension, on ",(0,r.kt)("strong",{parentName:"p"},"every page load")," the extension starts injecting\nvery small script (that won't affect any functionality of other pages), which checks for the presence of IMA.js application.\nThe result of detection is then sent to the extension's ",(0,r.kt)("strong",{parentName:"p"},"background")," script."),(0,r.kt)("p",null,"In case an IMA.js application is ",(0,r.kt)("strong",{parentName:"p"},"not detected"),", the extension doesn't really do anything else."),(0,r.kt)("p",null,"In case ",(0,r.kt)("strong",{parentName:"p"},"it is detected"),", additionally to sending the result of detection to extension's ",(0,r.kt)("strong",{parentName:"p"},"background")," script,\nthe detection script does three more things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It creates a special ",(0,r.kt)("inlineCode",{parentName:"li"},"$IMA.devtool.postMessage")," function on ",(0,r.kt)("inlineCode",{parentName:"li"},"window"),", which the devtool script uses to communicate\nwith chrome IMA.js devtool panel through ",(0,r.kt)("inlineCode",{parentName:"li"},"window.postMessage"),"."),(0,r.kt)("li",{parentName:"ol"},"Additionally, it modifies ",(0,r.kt)("inlineCode",{parentName:"li"},"$IMA.Runner"),", which let's us register new ",(0,r.kt)("inlineCode",{parentName:"li"},"preRun")," commands that are executed before\nthe original runners. This is used for the actual ",(0,r.kt)("a",{parentName:"li",href:"./devtools-introduction#devtools-script"},"devtools script"),"."),(0,r.kt)("li",{parentName:"ol"},"The background script, upon receiving the ",(0,r.kt)("inlineCode",{parentName:"li"},"ALIVE")," messages, creates initializes bi-directional communication bridge\nbetween ",(0,r.kt)("strong",{parentName:"li"},"content script")," (where we listen on messages sent through ",(0,r.kt)("inlineCode",{parentName:"li"},"$IMA.devtool.postMessage")," function) and IMA.js\ndevtool panel.")),(0,r.kt)("h3",{id:"devtools-script"},"Devtools script"),(0,r.kt)("p",null,"The devtools script is an essential part of this browser extension. As we've already mentioned, it is registered\nas a ",(0,r.kt)("inlineCode",{parentName:"p"},"preRun")," command for the IMA.js application and it's executed before an actual runner scripts."),(0,r.kt)("p",null,"The devtools script uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/to-aop"},"to-aop")," npm package (which uses ES6 Proxies) to\nwrap IMA.js app method calls in Proxy-like objects, which then before execution, send an information about it's\ncall, arguments and payload to the devtools panel. The panel then batch-processes these messages and displays them."),(0,r.kt)("p",null,"It can be customized through extension's ",(0,r.kt)("a",{parentName:"p",href:"./devtools-options"},"options"),", where you can define what exactly\nshould be wrapped using proxies and how it should be pre-processed before sending it to the user. In the\n",(0,r.kt)("a",{parentName:"p",href:"./devtools-ui"},"next section")," we're going to talk about the devtools UI and it's components."))}u.isMDXComponent=!0}}]);