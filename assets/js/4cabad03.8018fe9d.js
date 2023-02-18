"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||r;return t?i.createElement(d,o(o({ref:n},u),{},{components:t})):i.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(5773),a=(t(7294),t(3905));const r={title:"Plugins API",description:"Plugins > Plugins API"},o=void 0,s={unversionedId:"plugins/plugin-api",id:"plugins/plugin-api",title:"Plugins API",description:"Plugins > Plugins API",source:"@site/../docs/plugins/plugin-api.md",sourceDirName:"plugins",slug:"/plugins/plugin-api",permalink:"/plugins/plugin-api",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/plugins/plugin-api.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1676730241,formattedLastUpdatedAt:"Feb 18, 2023",frontMatter:{title:"Plugins API",description:"Plugins > Plugins API"},sidebar:"docs",previous:{title:"LESS Constants Plugin",permalink:"/cli/plugins/less-constants-plugin"},next:{title:"Existing plugins",permalink:"/plugins/available-plugins"}},l={},p=[{value:"Plugin registration",id:"plugin-registration",level:2},{value:"Plugin bootstrap functions",id:"plugin-bootstrap-functions",level:3},{value:"initBind",id:"initbind",level:4},{value:"initServices",id:"initservices",level:4},{value:"initSettings",id:"initsettings",level:4},{value:"Examples",id:"examples",level:3},{value:"Dynamically imported plugins and tree shaking",id:"dynamically-imported-plugins-and-tree-shaking",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"IMA.js development stack offers ",(0,a.kt)("strong",{parentName:"p"},"built-in support for plugins"),". Writing plugins for IMA.js is really\nsimple. It basically comes to creating an ordinary npm package and using ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginLoader.register")," method to hook into IMA.js application environment using certain functions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In situations where you don't need to hook into IMA.js app environment from within your plugin (you're for example just exporting some interface), you don't need call this registration method as it servers no purpose.")),(0,a.kt)("h2",{id:"plugin-registration"},"Plugin registration"),(0,a.kt)("p",null,"As mentioned above, the plugin registration is done from within your ",(0,a.kt)("strong",{parentName:"p"},"npm package entry point")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginLoader.register")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { pluginLoader } from '@ima/core';\nimport Service from './service';\n\npluginLoader.register('my-ima-plugin', ns => {\n  ns.set('my.ima.plugin.Service', Service);\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method expects 2 arguments, first is ",(0,a.kt)("strong",{parentName:"p"},"name of your plugin")," (this is used strictly for debugging purposes, however it is required) and ",(0,a.kt)("strong",{parentName:"p"},"callback registration function")," which receives ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_core#ns"},(0,a.kt)("inlineCode",{parentName:"a"},"Namespace"))," as one and only argument, that you can use to specify to which namespace this plugin should be bound."),(0,a.kt)("h3",{id:"plugin-bootstrap-functions"},"Plugin bootstrap functions"),(0,a.kt)("p",null,"The registration function can additionally ",(0,a.kt)("strong",{parentName:"p"},"return an object with additional callback functions"),". These allow you to further bootstrap your plugin. All are however optional, meaning you can define any combination of these or don't return anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { pluginLoader } from '@ima/core';\n\npluginLoader.register('my-ima-plugin', ns => {\n  return {\n    initBind: (ns, oc, config) => {},\n    initServices: (ns, oc, config) => {},\n    initSettings: (ns, oc, config) => {}\n  }\n});\n")),(0,a.kt)("h4",{id:"initbind"},"initBind"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"initBind(ns: Namespace, oc: ObjectContainer, config: Config['bind'], isDynamicallyLoaded = false)"))),(0,a.kt)("p",null,"This function has the same interface as a function exported in ",(0,a.kt)("inlineCode",{parentName:"p"},"bind.js")," of your IMA.js application and also serves the same purpose. This is the place where you would want to initialize your custom constants and bindings and assign them to the ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},(0,a.kt)("inlineCode",{parentName:"a"},"ObjectContainer")),"."),(0,a.kt)("h4",{id:"initservices"},"initServices"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"initServices(ns: Namespace, oc: ObjectContainer, config: Config['services'], isDynamicallyLoaded = false)"))),(0,a.kt)("p",null,"Similarly to ",(0,a.kt)("inlineCode",{parentName:"p"},"initBind"),", this is equivalent to a function exported by ",(0,a.kt)("inlineCode",{parentName:"p"},"services.js")," file in your application."),(0,a.kt)("h4",{id:"initsettings"},"initSettings"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"initSettings(ns: Namespace, oc: ObjectContainer, config: Config['settings'], isDynamicallyLoaded = false)"))),(0,a.kt)("p",null,"You can probably already see the pattern here. This function should return an object with settings, with the same structure as function in ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.js")," file does."),(0,a.kt)("p",null,"These settings are then ",(0,a.kt)("strong",{parentName:"p"},"merged with your application settings")," a possible conflicts are overridden with the application settings. This allows you to ",(0,a.kt)("strong",{parentName:"p"},"define defaults for your plugin"),", which can be easily overridden in your application."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Putting it all together, your main file in your npm package could look something like this (borrowing contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," from our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins/blob/master/packages/plugin-useragent/README.md"},"@ima/plugin-useragent"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { pluginLoader } from '@ima/core';\nimport PlatformJS from 'platform';\n\nimport UserAgent from './AbstractUserAgent.js';\nimport ClientUserAgent from './ClientUserAgent.js';\nimport ServerUserAgent from './ServerUserAgent.js';\n\npluginLoader.register('@ima/plugin-useragent', () => {\n  return {\n    initBind: (ns, oc) => {\n      if (oc.get('$Window').isClient()) {\n        oc.provide(UserAgent, ClientUserAgent, [PlatformJS, '$Window']);\n      } else {\n        oc.provide(UserAgent, ServerUserAgent, [PlatformJS, '$Request']);\n      }\n    },\n    initServices: (ns, oc) => {\n      oc.get(UserAgent).init();\n    },\n  };\n});\n\nexport { ClientUserAgent, ServerUserAgent, UserAgent, PlatformJS };\n")),(0,a.kt)("h2",{id:"dynamically-imported-plugins-and-tree-shaking"},"Dynamically imported plugins and tree shaking"),(0,a.kt)("p",null,"When the plugin is imported dynamically and initialized lazily, you receive ",(0,a.kt)("inlineCode",{parentName:"p"},"isDynamicallyLoaded = true")," as the last argument in the registration bootstrap functions. This can help you in certain situations where you need to know when the plugin was initialized."),(0,a.kt)("p",null,"The bootstrap process works the same way as with plugins initialized upon application startup, meaning all plugin settings are still overwritten with possible overrides in the application settings. There's however one caveat with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectContainer")," that you need to pay attention to."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("strong",{parentName:"p"},"string syntax")," to get certain settings in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$dependencies")," field:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"static get $dependencies() {\n  return ['$Settings.myPlugin.repeatCount'];\n};\n\nconstructor(repeatCount) {\n  this.repeatCount = repeatCount;\n}\n\nfn() {\n  this.repeatXTimes(this.repeatCount);\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"This w",(0,a.kt)("strong",{parentName:"p"},"on't be updated")," with possible plugin defaults when it get's loaded. In order to prevent this issue, you need to access whole settings object which will get updated values:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"static get $dependencies() {\n  return ['$Settings'];\n};\n\nmyFUnction(settings) {\n  this.settings = settings;\n}\n\nfn() {\n  this.repeatXTimes(settings?.myPlugin?.repeatCount);\n}\n"))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As you can see, creating IMA.js plugin is very easy. You can always check our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins/tree/master"},"IMA.js-plugins")," monorepo to take a look at many other already\nexisting plugins and how they're implemented, which we describe more in detail ",(0,a.kt)("a",{parentName:"p",href:"./available-plugins"},"in the documentation"),"."))}g.isMDXComponent=!0}}]);