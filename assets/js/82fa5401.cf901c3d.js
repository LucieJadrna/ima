"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(5773),a=(n(7294),n(3905));const r={title:"Migration 0.14.0",description:"Migration > Migration to version 0.14.0"},o=void 0,l={unversionedId:"migration/migration-0.14.0",id:"migration/migration-0.14.0",title:"Migration 0.14.0",description:"Migration > Migration to version 0.14.0",source:"@site/../docs/migration/migration-0.14.0.md",sourceDirName:"migration",slug:"/migration/migration-0.14.0",permalink:"/migration/migration-0.14.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/migration/migration-0.14.0.md",tags:[],version:"current",lastUpdatedBy:"Filip Satek",lastUpdatedAt:1673520109,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Migration 0.14.0",description:"Migration > Migration to version 0.14.0"},sidebar:"docs",previous:{title:"Options",permalink:"/devtools/devtools-options"},next:{title:"Migration 0.15.0",permalink:"/migration/migration-0.15.0"}},p={},s=[],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to upgrade your project to use IMA.js 0.14.0, please follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update your ",(0,a.kt)("inlineCode",{parentName:"li"},"gulpfile.js")," to require the default configuration from the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima-gulp-tasks")," package in the gulpfile.js (see the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-skeleton/blob/master/gulpConfig.js"},"example configuration"),")."),(0,a.kt)("li",{parentName:"ul"},"If you are using custom ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," tasks, remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"Es6toEs5:ima")," task from those."),(0,a.kt)("li",{parentName:"ul"},"Update your own custom gulp tasks to be compatible with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gulpjs/gulp/tree/4.0"},"gulp 4")),(0,a.kt)("li",{parentName:"ul"},"Remove references to the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima.client.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.js")," file and the ",(0,a.kt)("inlineCode",{parentName:"li"},"bundle")," section in the ",(0,a.kt)("inlineCode",{parentName:"li"},"build.js")," file."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima")," package to the ",(0,a.kt)("inlineCode",{parentName:"li"},"common")," group in the ",(0,a.kt)("inlineCode",{parentName:"li"},"vendors")," section in the ",(0,a.kt)("inlineCode",{parentName:"li"},"build.js")," file."),(0,a.kt)("li",{parentName:"ul"},"Update your ",(0,a.kt)("inlineCode",{parentName:"li"},"main.js")," file, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima.onLoad")," method ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/main.js#L17"},"returns a promise instead of accepting a callack"),"."),(0,a.kt)("li",{parentName:"ul"},"Update your ",(0,a.kt)("inlineCode",{parentName:"li"},"ima-server")," installation according to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello"},"Hello World example"),"."),(0,a.kt)("li",{parentName:"ul"},"Plugins can no longer use namespaces, please update your ",(0,a.kt)("inlineCode",{parentName:"li"},"bind.js")," file if you were using namespace references to IMA plugins."),(0,a.kt)("li",{parentName:"ul"},"Import the ",(0,a.kt)("inlineCode",{parentName:"li"},"RouteNames")," constants from ",(0,a.kt)("inlineCode",{parentName:"li"},"ima/router/RouteNames")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"router.js")," configuration file."),(0,a.kt)("li",{parentName:"ul"},"Components may now declare the ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultProps")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"propTypes")," static properties as getters."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"$ROUTER_CONSTANTS")," alias no longer exists (import the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima/router/RouteNames")," file)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"$HTTP_STATUS_CODE")," alias no longer exists (import the ",(0,a.kt)("inlineCode",{parentName:"li"},"ima/http/StatusCode")," file)."),(0,a.kt)("li",{parentName:"ul"},"Removed the ",(0,a.kt)("inlineCode",{parentName:"li"},"$Promise"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$CacheEntry"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$PageRendererViewAdapter"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"$Route")," (switched to imports internally)."),(0,a.kt)("li",{parentName:"ul"},"The loose mode of the ",(0,a.kt)("a",{parentName:"li",href:"http://babeljs.io/docs/plugins/preset-es2015/"},"ES2015 babel preset")," is no longer enabled."),(0,a.kt)("li",{parentName:"ul"},"Upgrade to node.js 7 or newer (older version ",(0,a.kt)("em",{parentName:"li"},"might")," work but are no longer supported)."),(0,a.kt)("li",{parentName:"ul"},"Switch to default exports in your ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/config"},"configuration files"),"."),(0,a.kt)("li",{parentName:"ul"},"Remove the './node_modules/ima-babel6-polyfill/index.js' reference from the polyfills list in gulpConfig.js (if overridden; this has been fixed by babel)."),(0,a.kt)("li",{parentName:"ul"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"main.less")," file reference in the ",(0,a.kt)("inlineCode",{parentName:"li"},"build.js")," file (unless it exists in the project)."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"$CssClasses")," property to object in the ",(0,a.kt)("inlineCode",{parentName:"li"},"$Utils")," OC alias.")))}u.isMDXComponent=!0}}]);