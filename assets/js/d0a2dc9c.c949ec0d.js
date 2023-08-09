"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=o(a),c=r,h=g["".concat(p,".").concat(c)]||g[c]||m[c]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(5773),r=(a(7294),a(3905));const i={title:"Existing plugins",description:"Plugins > List of existing plugins"},s=void 0,l={unversionedId:"plugins/available-plugins",id:"plugins/available-plugins",title:"Existing plugins",description:"Plugins > List of existing plugins",source:"@site/../docs/plugins/available-plugins.md",sourceDirName:"plugins",slug:"/plugins/available-plugins",permalink:"/plugins/available-plugins",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/plugins/available-plugins.md",tags:[],version:"current",lastUpdatedBy:"SVO404",lastUpdatedAt:1691570640,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{title:"Existing plugins",description:"Plugins > List of existing plugins"},sidebar:"docs",previous:{title:"Plugins API",permalink:"/plugins/plugin-api"},next:{title:"Introduction",permalink:"/devtools/devtools-introduction"}},p={},o=[{value:"IMA.js-plugins",id:"imajs-plugins",level:2}],u={toc:o},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've already described a way to ",(0,r.kt)("a",{parentName:"p",href:"/plugins/plugin-api#plugin-registration"},"create your own IMA.js plugins"),"\nthrough a very simple interface. Now we would like to talk about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins"},"IMA.js-plugins")," monorepo that already ",(0,r.kt)("strong",{parentName:"p"},"contains variety of plugins")," that covers many of the common use cases."),(0,r.kt)("h2",{id:"imajs-plugins"},"IMA.js-plugins"),(0,r.kt)("p",null,"Each plugin in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins"},"this repository")," is thoroughly tested and maintained, so it always works with the most up to date IMA.js version. We, here at ",(0,r.kt)("a",{parentName:"p",href:"https://www.seznam.cz/"},"Seznam.cz")," use it daily in production on many of our projects, so don't worry about using them safely in the production environment."),(0,r.kt)("p",null,"Without further ado, let's quickly describe in this compact list ",(0,r.kt)("strong",{parentName:"p"},"what each plugin does and when you would want to use them"),":"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This list is updated manually, so there can be situations where it doesn't match on 100% what is currently present in the monorepository itself.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic"},(0,r.kt)("strong",{parentName:"a"},"plugin-analytic"))," - Abstract analytic plugin for the IMA.js application. Serves as a base for other analytic plugins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic-fb-pixel"},(0,r.kt)("strong",{parentName:"a"},"plugin-analytic-fb-pixel"))," - Facebook Pixel analytics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic-google"},(0,r.kt)("strong",{parentName:"a"},"plugin-analytic-google"))," - UA and GA4 google analytics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-halson-rest-client"},(0,r.kt)("strong",{parentName:"a"},"plugin-halson-rest-client"))," - HAL+JSON REST API client for IMA applications, based on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-rest-client"},"@ima/plugin-rest-client"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/cli-plugin-less-constants"},(0,r.kt)("strong",{parentName:"a"},"plugin-less-constants"))," - Adds preprocessor which converts theme values defined in the JS file, to their LESS variable counterparts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-logger"},(0,r.kt)("strong",{parentName:"a"},"plugin-logger"))," - A logging tool for IMA.js framework."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-resource-loader"},(0,r.kt)("strong",{parentName:"a"},"plugin-resource-loader"))," - Plugin for loading scripts and styles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-rest-client"},(0,r.kt)("strong",{parentName:"a"},"plugin-rest-client"))," - Generic REST API client plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-script-loader"},(0,r.kt)("strong",{parentName:"a"},"plugin-script-loader"))," - Plugin for loading 3rd party scripts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-shared-cache"},(0,r.kt)("strong",{parentName:"a"},"plugin-shared-cache"))," - A utility for creating caches that are shared between requests by all IMA.js application instances within the same node.js process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-managed-component"},(0,r.kt)("strong",{parentName:"a"},"plugin-managed-component"))," - Provides an extension to ",(0,r.kt)("inlineCode",{parentName:"li"},"AbstractComponent")," with additional utility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-select"},(0,r.kt)("strong",{parentName:"a"},"plugin-select"))," - Plugin to select extra props from page state to your component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-self-xss"},(0,r.kt)("strong",{parentName:"a"},"plugin-self-xss"))," - This plugin is trying to mitigate Self-XSS security attack by sending simple message into console."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-style-loader"},(0,r.kt)("strong",{parentName:"a"},"plugin-style-loader"))," - This is the plugin for loading 3rd party styles for the IMA.js application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-useragent"},(0,r.kt)("strong",{parentName:"a"},"plugin-useragent"))," - Parses useragent from client and server requests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-xhr"},(0,r.kt)("strong",{parentName:"a"},"plugin-xhr"))," - Helper plugin simplifying the usage of the XMLHttpRequest API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-local-storage"},(0,r.kt)("strong",{parentName:"a"},"plugin-local-storage"))," - ",(0,r.kt)("inlineCode",{parentName:"li"},"localstorage")," implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage")," interface for IMA.js applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-testing-integration"},(0,r.kt)("strong",{parentName:"a"},"plugin-testing-integration"))," - This is a plugin for integration testing of any IMA.js based application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-websocket"},(0,r.kt)("strong",{parentName:"a"},"plugin-websocket"))," - Allows creating socket server and connected clients can send broadcast message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-merkur"},(0,r.kt)("strong",{parentName:"a"},"plugin-merkur"))," - For easier integrations of ",(0,r.kt)("a",{parentName:"li",href:"https://merkur.js.org/"},"merkur")," widget to ima application.")))}m.isMDXComponent=!0}}]);