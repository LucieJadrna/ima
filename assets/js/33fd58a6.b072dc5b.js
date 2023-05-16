"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(5773),r=(n(7294),n(3905));const s={title:"Migration 0.15.0",description:"Migration > Migration to version 0.15.0"},i=void 0,o={unversionedId:"migration/migration-0.15.0",id:"migration/migration-0.15.0",title:"Migration 0.15.0",description:"Migration > Migration to version 0.15.0",source:"@site/../docs/migration/migration-0.15.0.md",sourceDirName:"migration",slug:"/migration/migration-0.15.0",permalink:"/migration/migration-0.15.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/migration/migration-0.15.0.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1684237218,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Migration 0.15.0",description:"Migration > Migration to version 0.15.0"},sidebar:"docs",previous:{title:"Migration 0.14.0",permalink:"/migration/migration-0.14.0"},next:{title:"Migration 0.16.0",permalink:"/migration/migration-0.16.0"}},l={},p=[{value:"Build",id:"build",level:2},{value:"Karma removed instead of that added Jest",id:"karma-removed-instead-of-that-added-jest",level:3},{value:"Server",id:"server",level:2},{value:"DocumentView",id:"documentview",level:2},{value:"SPA",id:"spa",level:2},{value:"Removed namespaces",id:"removed-namespaces",level:2},{value:"Others",id:"others",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to upgrade to IMA.js 0.15.0, start ba adding these new dependencies to package.json:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"prop-types": "15.6.0",\n"react": "16.2.0",\n"react-dom": "16.2.0",\n"express-http-proxy": "^1.0.7"\n')),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"If you are overriding polyfills or shims (for example using some custom polyfills) you need to change polyfills or shims structure in gulpConfig.js . Now it has to be structure for js, es and fetch polyfills.\nIf you are't overriding polyfills or shims, you can skip this step."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"shim: {\n  js: {\n    name: 'shim.js',\n    src: ['./node_modules/ima/polyfill/collectionEnumeration.js'],\n    dest: {\n    client: './build/static/js/'\n    }\n  },\n  es: {\n    name: 'shim.es.js',\n    src: [],\n    dest: {\n    client: './build/static/js/',\n    server: './build/ima/'\n    }\n  }\n\n\npolyfill: {\n  js: {\n    name: 'polyfill.js',\n    src: [\n    './node_modules/babel-polyfill/dist/polyfill.min.js',\n    './node_modules/custom-event-polyfill/custom-event-polyfill.js'\n    ],\n    dest: {\n    client: './build/static/js/'\n    }\n  },\n  es: {\n    name: 'polyfill.es.js',\n    src: ['./node_modules/custom-event-polyfill/custom-event-polyfill.js'],\n    dest: {\n    client: './build/static/js/'\n    }\n  },\n  fetch: {\n    name: 'fetch-polyfill.js',\n    src: [\n    './node_modules/core-js/client/shim.min.js',\n    './node_modules/whatwg-fetch/fetch.js'\n    ],\n    dest: {\n    client: './build/static/js/'\n    }\n  },\n  ima: {\n    name: 'ima-polyfill.js',\n    src: [\n    './node_modules/ima/polyfill/imaLoader.js',\n    './node_modules/ima/polyfill/imaRunner.js'\n    ],\n    dest: {\n    client: './build/static/js/'\n    }\n  }\n  }\n\n")),(0,r.kt)("p",null,"In build.js add new property 'es' to bundle object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"es: [\n  './build/static/js/polyfill.es.js',\n  './build/static/js/shim.es.js',\n  './build/static/js/vendor.client.es.js',\n  './build/static/js/app.client.es.js'\n]\n")),(0,r.kt)("p",null,"Add to your settings.js ",(0,r.kt)("strong",{parentName:"p"},"prod"),".$Page.$Render new property esScripts like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"esScripts: [\n  '/static/js/locale/' + config.$Language + '.js' + versionStamp,\n  '/static/js/app.bundle.es.min.js' + versionStamp\n]\n")),(0,r.kt)("p",null,"Add to your settings.js ",(0,r.kt)("strong",{parentName:"p"},"dev"),".$Page.$Render new property esScripts like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"esScripts: [\n  '/static/js/polyfill.es.js' + versionStamp,\n  '/static/js/shim.es.js' + versionStamp,\n  '/static/js/vendor.client.es.js' + versionStamp,\n  `/static/js/locale/${config.$Language}.js${versionStamp}`,\n  '/static/js/app.client.es.js' + versionStamp,\n  '/static/js/hot.reload.js' + versionStamp\n]\n")),(0,r.kt)("h3",{id:"karma-removed-instead-of-that-added-jest"},"Karma removed instead of that added Jest"),(0,r.kt)("p",null,"If you are overriding gulpfile.js you need to make following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove from gulpConfig.tasks.dev task ",(0,r.kt)("inlineCode",{parentName:"li"},"test:unit:karma:dev")),(0,r.kt)("li",{parentName:"ul"},"remove from gulpConfig.tasks.dev and gulpConfig.tasks.build task ",(0,r.kt)("inlineCode",{parentName:"li"},"Es6ToEs5:vendor:client:test")),(0,r.kt)("li",{parentName:"ul"},"remove from function buildExample task ",(0,r.kt)("inlineCode",{parentName:"li"},"Es6ToEs5:vendor:client:test"))),(0,r.kt)("p",null,"If you are overriding gulpConfig.tasks.build in gulpConfig.js you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle:es:app")," into bundles section."),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("p",null,"In server.js"),(0,r.kt)("p",null,"Add at the top into import sections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"require('ima/polyfill/imaLoader.js');\nrequire('ima/polyfill/imaRunner.js');\n")),(0,r.kt)("p",null,"add proxy into middlewares imports section"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let proxy = require('express-http-proxy');\n")),(0,r.kt)("p",null,"change line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},".use(environment.$Proxy.path + '/', proxy)\n")),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},".use(environment.$Proxy.path + '/', proxy(environment.$Proxy.server))\n")),(0,r.kt)("h2",{id:"documentview"},"DocumentView"),(0,r.kt)("p",null,"In DocumentView.jsx we united sync and async scripts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove ",(0,r.kt)("inlineCode",{parentName:"li"},"getSyncScripts")," function."),(0,r.kt)("li",{parentName:"ul"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"getAsyncScripts")," function to")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"getAsyncScripts() {\n  let scriptResources = `<script>\n  function checkAsyncAwait () {\n    try {\n      new Function('(async () => ({}))()');\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n  $IMA.Runner = $IMA.Runner || {};\n  if (Object.values && checkAsyncAwait()) {\n    $IMA.Runner.scripts = [\n      ${this.utils.$Settings.$Page.$Render.esScripts\n  .map(script => `'${script}'`)\n  .join()}\n      ];\n  } else {\n    $IMA.Runner.scripts = [\n      ${this.utils.$Settings.$Page.$Render.scripts\n  .map(script => `'${script}'`)\n  .join()}\n      ];\n  }\n\n  if (!window.fetch) {\n    $IMA.Runner.scripts.unshift('${this.utils.$Settings.$Static\n  .js}/fetch-polyfill.js');\n  }\n\n  $IMA.Runner.scripts.forEach(function(source) {\n    var script = document.createElement('script');\n    script.async = $IMA.$Env !== 'dev';\n    script.onload = $IMA.Runner.load;\n    script.src = source;\n\n    document.getElementById('scripts').appendChild(script);\n  });\n  <\/script>`;\n\n  return scriptResources;\n}\n")),(0,r.kt)("p",null,"replace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"{this.utils.$Settings.$Env === 'dev' ?\n  <div id='scripts'>{this.getSyncScripts()}</div>\n:\n  <div id='scripts' dangerouslySetInnerHTML={\n    { __html: this.getAsyncScripts() }\n  }/>\n}\n")),(0,r.kt)("p",null,"with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<div id='scripts' dangerouslySetInnerHTML={\n  { __html: this.getAsyncScripts() }\n}/>\n")),(0,r.kt)("h2",{id:"spa"},"SPA"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"app/assets/static/html/spa.html")," add ima-polyfill."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/assets/static/html/spa.html#L42"},"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/assets/static/html/spa.html#L42")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/assets/static/html/spa.html#L47"},"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello/assets/static/html/spa.html#L47"))),(0,r.kt)("h2",{id:"removed-namespaces"},"Removed namespaces"),(0,r.kt)("p",null,"If you extends some view from ns.ima.page.AbstractComponent, you need to add this import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import AbstractComponent from 'ima/page/AbstractComponent';\n")),(0,r.kt)("p",null,"and use AbstractComponent instead of ns.ima.page.AbstractComponent."),(0,r.kt)("p",null,"If you extends some view from ns.ima.controller.AbstractController, you need to add this import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import AbstractController from 'ima/controller/AbstractController';\n")),(0,r.kt)("p",null,"and use AbstractController instead of ns.ima.controller.AbstractController."),(0,r.kt)("p",null,"In settings.js import your DocumentView like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import DocumentView from 'app/component/document/DocumentView';\n")),(0,r.kt)("p",null,"Now you need to replace your documentView namespace with React component"),(0,r.kt)("p",null,"so for this step replace your configuration.prod.$Page.$Render.documentView to DocumentView."),(0,r.kt)("h2",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IMA.js is now using React 16 where is no longer supported ",(0,r.kt)("inlineCode",{parentName:"li"},"react-addons-perf")," package in case you were using it."),(0,r.kt)("li",{parentName:"ul"},"There was added a fetchOptions property to the IMA.js' http. You can add this property into your settings.js file\nto the ",(0,r.kt)("inlineCode",{parentName:"li"},"$Http.defaultRequestOptions")," object. The property represents the second and optional parameter of the fetch method\n",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch")," - an options object containing\nsettings that you want to apply to the Fetch API ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API")," request."),(0,r.kt)("li",{parentName:"ul"},"There is a breaking change in the IMA.js' router. Now there is defined an order where mandatory parameters have to be before optional parameters."),(0,r.kt)("li",{parentName:"ul"},"There are no longer available Request and Response at the client side.")))}u.isMDXComponent=!0}}]);