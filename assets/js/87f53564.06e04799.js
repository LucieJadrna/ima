"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2060],{2569:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cli-error-overlay-421cb5292785f513c7c5e4c4de5cd999.jpg"},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(5773),a=(n(7294),n(3905));const r={title:"Additional features",description:"CLI > Advanced CLI techniques and other features"},o=void 0,l={unversionedId:"cli/additional-features",id:"cli/additional-features",title:"Additional features",description:"CLI > Advanced CLI techniques and other features",source:"@site/../docs/cli/additional-features.md",sourceDirName:"cli",slug:"/cli/additional-features",permalink:"/cli/additional-features",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/additional-features.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1679908290,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{title:"Additional features",description:"CLI > Advanced CLI techniques and other features"},sidebar:"docs",previous:{title:"ima.config.js",permalink:"/cli/ima-config-js"},next:{title:"CLI Plugins API",permalink:"/cli/cli-plugins-api"}},s={},p=[{value:"Polyfills",id:"polyfills",level:2},{value:"Static files in <code>public</code> folder",id:"static-files-in-public-folder",level:3},{value:"Importing polyfills at top of the <code>main.js</code> file",id:"importing-polyfills-at-top-of-the-mainjs-file",level:3},{value:"Optional <code>polyfill.js</code> and <code>polyfill.es.js</code> entry points",id:"optional-polyfilljs-and-polyfillesjs-entry-points",level:3},{value:"IMA.js Runtime",id:"imajs-runtime",level:2},{value:"<code>runner.ejs</code>",id:"runnerejs",level:3},{value:"Extending default script",id:"extending-default-script",level:4},{value:"GenerateRuntimePlugin",id:"generateruntimeplugin",level:3},{value:"Dev server",id:"dev-server",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes multiple additional features that are either directly provided by the CLI or indirectly with the help of additional development packages ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/hmr-client"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/error-overlay"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/dev-utils"),"."),(0,a.kt)("h2",{id:"polyfills"},"Polyfills"),(0,a.kt)("p",null,"Sometimes you may need to include additional custom polyfills to fully support your application in multiple environments. There are multiple ways to achieve this."),(0,a.kt)("h3",{id:"static-files-in-public-folder"},"Static files in ",(0,a.kt)("inlineCode",{parentName:"h3"},"public")," folder"),(0,a.kt)("p",null,"The easies way, is to put your polyfill files directly into the ",(0,a.kt)("a",{parentName:"p",href:"/cli/compiler-features#apppublic-folder"},"app/public")," folder and load them either by extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"$Source")," configuration in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/create-ima-app/template/server/config/environment.js#L29"},"app environment")," or customizing the application's ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentView.jsx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"spa.html")," templates with custom script tags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/document/DocumentView.jsx",title:"./app/document/DocumentView.jsx"},"{/* ... */}\n<body>\n  <script src='/static/public/custom-polyfill.js' />\n  <div\n    id={this.constructor.masterElementId}\n    dangerouslySetInnerHTML={{ __html: this.props.page }}\n  />\n  <script\n    id='revivalSettings'\n    dangerouslySetInnerHTML={{ __html: this.props.revivalSettings }}\n  />\n</body>\n{/* ... */}\n")),(0,a.kt)("h3",{id:"importing-polyfills-at-top-of-the-mainjs-file"},"Importing polyfills at top of the ",(0,a.kt)("inlineCode",{parentName:"h3"},"main.js")," file"),(0,a.kt)("p",null,"Additionally you can import (or put) polyfills at the top of the ",(0,a.kt)("inlineCode",{parentName:"p"},"./app/main.js")," entry point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/main.js",title:"./app/main.js"},"import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n\nimport './less/app.less';\n\nimport * as ima from '@ima/core';\nimport initBindApp from 'app/config/bind';\n//...\n")),(0,a.kt)("h3",{id:"optional-polyfilljs-and-polyfillesjs-entry-points"},"Optional ",(0,a.kt)("inlineCode",{parentName:"h3"},"polyfill.js")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"polyfill.es.js")," entry points"),(0,a.kt)("p",null,"Lastly there are special ",(0,a.kt)("inlineCode",{parentName:"p"},"polyfill.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"polyfill.es.js")," files that you can create in the root of the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory. These, when bundled through webpack are available as separate JS files and are not part of the final ",(0,a.kt)("inlineCode",{parentName:"p"},"app.bundle.js")," file."),(0,a.kt)("p",null,"As with the previous option, you can either import the polyfills from the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," packages, or use their source code directly, by copying it into this file."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Both files are ",(0,a.kt)("strong",{parentName:"p"},"optional"),", this means that you can use, either one of those or don't use them at all. Similarly to the first option, don't forget to add the newly generated polyfill.js files somewhere in the source, so they are loaded on app startup.")),(0,a.kt)("h2",{id:"imajs-runtime"},"IMA.js Runtime"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/cli/compiler-features#server-and-client-bundles"},"Compiler features")," section, we mentioned that the CLI is compiling 3 separate bundles, mainly two distinct client bundles, where each targets certain ",(0,a.kt)("inlineCode",{parentName:"p"},"ECMAScript")," version. This approach has 2 main advantages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We're still able to support pretty much ",(0,a.kt)("strong",{parentName:"li"},"every currently supported browser version")," (in case of the ",(0,a.kt)("inlineCode",{parentName:"li"},"es2018")," version)."),(0,a.kt)("li",{parentName:"ol"},"We're also serving the latest native version to the modern browsers that support's it (",(0,a.kt)("inlineCode",{parentName:"li"},"es2022")," version). This ",(0,a.kt)("strong",{parentName:"li"},"bundle is also much smaller")," since it contains very low amount of ",(0,a.kt)("inlineCode",{parentName:"li"},"core-js")," polyfills and should have ",(0,a.kt)("strong",{parentName:"li"},"better performance"),", because native implementations of existing APIs are usually faster than provided polyfills.")),(0,a.kt)("p",null,"You can customize source files for both versions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$Source")," option of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/create-ima-app/template/server/config/environment.js#L29"},"app environment")," configuration file. This sources definition is then used by the IMA.js Runner, which then ",(0,a.kt)("strong",{parentName:"p"},"chooses")," (",(0,a.kt)("em",{parentName:"p"},"on the client side before app init"),") ",(0,a.kt)("strong",{parentName:"p"},"the most suitable version")," for the current browser environment and ",(0,a.kt)("strong",{parentName:"p"},"injects associated scripts into the DOM"),"."),(0,a.kt)("p",null,"This is done by executing few small scripts, where each script target's certain ECMAScript feature. Based on these results, the runner injects the best version of client bundle suitable for that concrete browser environment. It also makes sure to wait until all scripts have loaded before executing the webpack runtime."),(0,a.kt)("p",null,"This makes sure that all external scripts that the app depends on (",(0,a.kt)("em",{parentName:"p"},"languages"),") are loaded correctly before it's execution and allows them to be loaded ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," to ",(0,a.kt)("strong",{parentName:"p"},"improve page load times"),"."),(0,a.kt)("h3",{id:"runnerejs"},(0,a.kt)("inlineCode",{parentName:"h3"},"runner.ejs")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/core/polyfill/runner.ejs"},"IMA.js runner")," is simple snippet of JS code, that is injected into the page automatically within the app ",(0,a.kt)("inlineCode",{parentName:"p"},"revivalSettings"),". It can be completely customizable by defining the runner overrides on the client window before it is injected into the DOM. It will then merge any existing overrides to the original runner before it's execution."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The runner script is intentionally written in es5 compatible syntax to make sure, that it can be executed on any environment and report using ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnsupported")," callback, when current browser can't even interpret the ",(0,a.kt)("inlineCode",{parentName:"p"},"es2018")," version of the bundle. In this case the application then runs in ",(0,a.kt)("strong",{parentName:"p"},"MPA")," mode")),(0,a.kt)("h4",{id:"extending-default-script"},"Extending default script"),(0,a.kt)("p",null,"As mentioned before the runner script is fully extensible. For example to implement custom ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnsupported()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onError()")," callbacks, you'd do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/document/DocumentView.jsx",title:"./app/document/DocumentView.jsx"},"<body>\n  {/* ... */}\n  <script>\n    window.$IMA = window.$IMA || {};\n    window.$IMA.$Runner = {\n      /**\n       * Optional onError handler. It is triggered in case the runtime\n       * code fails to run the application.\n       */\n      onError: function (error) {\n        throw new Error(error);\n      },\n\n      /**\n       * Optional onUnsupported handler. It is triggered in case tests\n       * for es and legacy version fails, which means that the APP runtime\n       * code is never executed.\n       */\n      onUnsupported: function() {\n        // Hit analytics with unsupported browser info\n      },\n    }\n  <\/script>\n  <script\n    id='revivalSettings'\n    dangerouslySetInnerHTML={{ __html: this.props.revivalSettings }}\n  />\n</body>\n{/* ... */}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't forget to apply the same changes to the ",(0,a.kt)("inlineCode",{parentName:"strong"},"spa.html")),", otherwise only SSR rendered pages will contain this override."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since you will usually never want to change anything on the IMA.js Runner (apart from the previously mentioned callbacks), we won't go much deeper into it's the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/core/polyfill/runner.ejs"},"source code"),". You can always ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/core/polyfill/runner.ejs"},"check it here")," and use it as a reference for custom overrides."),(0,a.kt)("p",{parentName:"admonition"},"However simply keeping your ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/*")," dependencies up to will make sure, that you always receive the latest version of the runner script, which may evolve overtime.")),(0,a.kt)("h3",{id:"generateruntimeplugin"},"GenerateRuntimePlugin"),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," runtime is unique for every built, usually quite small, have to be loaded synchronously (",(0,a.kt)("em",{parentName:"p"},"which can impact the page load performance"),") and you would need to manually handle loading it's source code to the DOM, we have created ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/cli/src/webpack/plugins/GenerateRunnerPlugin/index.ts"},"GenerateRuntimePlugin")," to solve these issues."),(0,a.kt)("p",null,"This plugin takes care of automatically generating the runtime consisting of the IMA.js runner code and webpack runtime (for both client bundles), which is then ",(0,a.kt)("strong",{parentName:"p"},"injected directly into the SPA template or SSR rendered html page"),". This means that you really don't have to worry about the existence of IMA.js runtime (while it's good to know that it does exist), since the framework handles all the hard work for you."),(0,a.kt)("p",null,"It also comes with some performance benefits, since inlining these small scripts directly into the HTML removes the need to load additional 2 scripts synchronously, after browser parses the initial DOM."),(0,a.kt)("h2",{id:"dev-server"},"Dev server"),(0,a.kt)("p",null,"When you run your app using ",(0,a.kt)("inlineCode",{parentName:"p"},"npx ima dev")," command, apart from building your application in development mode with HMR and all other dev features enabled, the CLI also starts companion express server - the dev server."),(0,a.kt)("p",null,"By default it runs on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3101")," (this can be customized through ",(0,a.kt)("a",{parentName:"p",href:"/cli/ima-config-js#devserver"},"ima.config.js")," or ",(0,a.kt)("a",{parentName:"p",href:"/cli/#dev-server-options"},"CLI options"),") and defines middlewares that are used mainly by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/error-overlay")," (to properly display parsed error code snippets). Additionally it uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-hot-middleware"},"webpack-hot-middleware")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-dev-middleware"},"webpack-dev-middleware")," to ",(0,a.kt)("strong",{parentName:"p"},"enable support for HMR"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2569).Z,width:"2002",height:"1582"})),(0,a.kt)("p",null,"Using separate small server to host these middleware doesn't force us to define them directly on the app server, which could essentially produce some errors in certain situations."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Usually you don't have to think about the dev server during development and can simply pretend that it doesn't exist, since it is handled entirely by the CLI scripts. You can always have a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/cli/src/dev-server/devServer.ts"},"look at the source code")," to learn more.")))}m.isMDXComponent=!0}}]);