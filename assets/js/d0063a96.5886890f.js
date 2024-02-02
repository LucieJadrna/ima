"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(5773),i=(a(7294),a(3905));const o={title:"Compiler features",description:"CLI > Compiler features"},s=void 0,r={unversionedId:"cli/compiler-features",id:"cli/compiler-features",title:"Compiler features",description:"CLI > Compiler features",source:"@site/../docs/cli/compiler-features.md",sourceDirName:"cli",slug:"/cli/compiler-features",permalink:"/cli/compiler-features",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/compiler-features.md",tags:[],version:"current",lastUpdatedBy:"jan.kucera",lastUpdatedAt:1706854330,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{title:"Compiler features",description:"CLI > Compiler features"},sidebar:"docs",previous:{title:"Introduction to @ima/cli",permalink:"/cli/"},next:{title:"ima.config.js",permalink:"/cli/ima-config-js"}},l={},p=[{value:"Server and client bundles",id:"server-and-client-bundles",level:2},{value:"Filesystem Cache",id:"filesystem-cache",level:2},{value:"JavaScript/React",id:"javascriptreact",level:2},{value:"React",id:"react",level:3},{value:"Typescript",id:"typescript",level:2},{value:"CSS/LESS",id:"cssless",level:2},{value:"CSS Modules",id:"css-modules",level:3},{value:"globals.less",id:"globalsless",level:3},{value:"Glob less imports",id:"glob-less-imports",level:3},{value:"PostCSS",id:"postcss",level:3},{value:"Assets",id:"assets",level:2},{value:"Images",id:"images",level:3},{value:"Text files",id:"text-files",level:3},{value:"<code>./app/public</code> folder",id:"apppublic-folder",level:3},{value:"Compression",id:"compression",level:2},{value:"Languages",id:"languages",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The IMA.js CLI uses ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," behind the scenes to ",(0,i.kt)("strong",{parentName:"p"},"compile"),", ",(0,i.kt)("strong",{parentName:"p"},"minify")," and ",(0,i.kt)("strong",{parentName:"p"},"run")," the application in ",(0,i.kt)("strong",{parentName:"p"},"dev mode"),". It comes pre-configured with some options, plugins and loaders, which are described in the following sections."),(0,i.kt)("h2",{id:"server-and-client-bundles"},"Server and client bundles"),(0,i.kt)("p",null,"The CLI creates 3 separate bundles (",(0,i.kt)("em",{parentName:"p"},"2 in dev mode for performance reasons"),") with their own configurations. One ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," bundle (used in express for SSR) and two client bundles - ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client.es"),", where one targets the ",(0,i.kt)("inlineCode",{parentName:"p"},"es2018")," and the other ",(0,i.kt)("inlineCode",{parentName:"p"},"es2022")," version of the javascript."),(0,i.kt)("p",null,"This can be further customized using the ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#disablelegacybuild"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"disableLegacyBuilt")," option in ",(0,i.kt)("inlineCode",{parentName:"strong"},"ima.config.js"))),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To make the CLI build ",(0,i.kt)("strong",{parentName:"p"},"both es versions")," in dev mode, run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx ima dev --legacy")," option."),(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/hot-module-replacement/"},"hot module replacement (HMR)")," is configured to work only with the latest es version (manual browser reload is required to see any changes on the legacy version).")),(0,i.kt)("h2",{id:"filesystem-cache"},"Filesystem Cache"),(0,i.kt)("p",null,"The webpack ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/cache/#cache"},"filesystem cache")," feature is enabled by default to improve consecutive build times in development and production mode."),(0,i.kt)("p",null,"The CLI automatically generates cache key based on used set of CLI options, which somehow affect the produced output. Not all options affect cache key generation, however you may notice that sometimes the build speeds can behave as if there is no filesystem cache. To see which options affect the cache key generation, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/cli/src/webpack/utils.ts#L154"},"take a look at the ",(0,i.kt)("inlineCode",{parentName:"a"},"createCacheKey()")," function"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that each command and bundle maintains it's own set of coexisting cache. To clear the cache, use ",(0,i.kt)("inlineCode",{parentName:"p"},"--clearCache")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," commands.")),(0,i.kt)("h2",{id:"javascriptreact"},"JavaScript/React"),(0,i.kt)("p",null,"To bundle JS files we opted to use ",(0,i.kt)("a",{parentName:"p",href:"https://swc.rs/"},"swc"),", a Rust-based JavaScript compiler. This decision was based on our results from testing and measuring build times, where we saw 2-3 times the speed benefit (depending on the application size) of using swc over babel compiler."),(0,i.kt)("p",null,"By default the application ",(0,i.kt)("strong",{parentName:"p"},"compiles both"),", the ",(0,i.kt)("strong",{parentName:"p"},"application files")," (sourced from ",(0,i.kt)("inlineCode",{parentName:"p"},"./app")," folder) and ",(0,i.kt)("strong",{parentName:"p"},"vendor files")," (sourced from ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_modules")," directory) to make sure that it can run in targeted environments without any issues."),(0,i.kt)("p",null,'The swc compiler is configured to leverage the power of "env" functionality (preset-env in babel), in combination with ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to ",(0,i.kt)("strong",{parentName:"p"},"automatically polyfill missing APIs")," that are used throughout the codebase, that the targeted environment doesn't support."),(0,i.kt)("p",null,"This configuration can be easily customized using ",(0,i.kt)("a",{parentName:"p",href:"./ima.config.js#swc"},"swc option in ima.config.js"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This means that you can write your code ",(0,i.kt)("strong",{parentName:"p"},"using the latest and greatest from the ECMAscript language")," and the swc makes sure to compile these features down to the latest supported syntax or automatically inject core-js polyfills.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that overuse of these may result in larger JS bundles due to the need to inject more core-js polyfills. Also browser APIs like for example ",(0,i.kt)("inlineCode",{parentName:"p"},"AbortController")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," are not handled by the core-js and must be included manually. ",(0,i.kt)("a",{parentName:"p",href:"./advanced-features#polyfilljs"},"See polyfills in advanced features section"),".")),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,"In dev we use the development version of react library (for better debugging) and ",(0,i.kt)("inlineCode",{parentName:"p"},"react-refresh")," for HMR. This is switched to production for production builds. By default the compiler is configured to work with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"automatic")," JSX runtime, so there's no need to import ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," library at top of every jsx file. This can be changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," in ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#jsxruntime"},"ima.config.js"),"."),(0,i.kt)("h2",{id:"typescript"},"Typescript"),(0,i.kt)("p",null,"From IMA.js v18 we've introduced ",(0,i.kt)("strong",{parentName:"p"},"support for Typescript in your application code"),". To enable it, simply install ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," dependency and create ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root of your project."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information and additional tips about TypeScript usage in IMA.js applications, ",(0,i.kt)("a",{parentName:"p",href:"/basic-features/typescript"},(0,i.kt)("strong",{parentName:"a"},"see the TypeScript section")),".")),(0,i.kt)("h2",{id:"cssless"},"CSS/LESS"),(0,i.kt)("p",null,"There's built in support for CSS and LESS preprocessor. Both of these have the same featureset. To use any CSS you have to import the files anywhere in your application. These imports are then combined and extracted to single ",(0,i.kt)("inlineCode",{parentName:"p"},"app.css")," file."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"./app/main.js")," is a good place to use for global CSS files, since it is an entry point to IMA.js application and these imports will be included at top of the built ",(0,i.kt)("inlineCode",{parentName:"p"},"app.css")," file.")),(0,i.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,i.kt)("p",null,"Both loaders fully support ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," for files with ",(0,i.kt)("inlineCode",{parentName:"p"},"*.modules.css")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*.modules.less")," postfixes, with ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," as default scoping."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less",metastring:"title=./app/page/home/home.module.less",title:"./app/page/home/home.module.less"},":global {\n  :root: {\n    --bg-color: #fff;\n  }\n}\n\n.home {\n  background: var(--bg-color);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/page/home/Home.jsx",title:"./app/page/home/Home.jsx"},"import styles from './home.module.less';\n\nfunction Home() {\n  return\n    <div className={styles.home}>HomePage</div>\n  );\n}\n")),(0,i.kt)("h3",{id:"globalsless"},"globals.less"),(0,i.kt)("p",null,"This file is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/less/globals.less")," and it is automatically imported on top of every other processed LESS file. It allows you to easily share globals across less files."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use this file to import other ",(0,i.kt)("strong",{parentName:"p"},"mixins")," and ",(0,i.kt)("strong",{parentName:"p"},"global variables")," which are then available in all other *.less files automatically, without the need to import them explicitly."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-less",metastring:"title=./app/less/globals.less",title:"./app/less/globals.less"},"@import './mixins/*.less';\n\n@global-red: red;\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-less",metastring:"title=./app/less/app.less",title:"./app/less/app.less"},"body {\n  // No direct import of 'globals.less' is needed.\n  background: @global-red;\n}\n"))),(0,i.kt)("h3",{id:"glob-less-imports"},"Glob less imports"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"less-loader")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/just-boris/less-plugin-glob"},"less-plugin-glob")," by default in it's configuration. This means that glob imports are fully supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less",metastring:"title=./app/less/app.less",title:"./app/less/app.less"},'@import \'./mixins/*.less\';\n\n/* Non-relative imports are resolved through node resolver. */\n@import "@ima/**/atoms/**/*.less";\n@import "@ima/**/molecules/**/*.less";\n@import "@ima/**/organisms/**/*.less";\n')),(0,i.kt)("h3",{id:"postcss"},"PostCSS"),(0,i.kt)("p",null,"IMA.js has built-in support for ",(0,i.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," during CSS/LESS compilation."),(0,i.kt)("p",null,"Out of the box without any additional configuration, it comes pre-configured with following plugins:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/luisrudge/postcss-flexbugs-fixes#readme"},"postcss-flexbugs-fixes")," - tries to fix all known flexbox issues."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env"},"postcss-preset-env")," - converts modern CSS back into something the old browsers can understand (back to IE11). It comes with: ",(0,i.kt)("inlineCode",{parentName:"li"},"autoprefixer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stage 3")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"custom-properties: false")," features.")),(0,i.kt)("p",null,"All these features can be easily customized using ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss")," option in ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js/#postcss"},"ima.config.js"),"."),(0,i.kt)("h2",{id:"assets"},"Assets"),(0,i.kt)("p",null,"All other assets are either ",(0,i.kt)("strong",{parentName:"p"},"inlined")," as ",(0,i.kt)("strong",{parentName:"p"},"base64 encoded string")," or copied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/static/media")," folder, where default import represents assets's public URL."),(0,i.kt)("h3",{id:"images"},"Images"),(0,i.kt)("p",null,"Images (bmp, gif, jpeg, png, webp, svg) are automatically inlined if their size is below ",(0,i.kt)("inlineCode",{parentName:"p"},"imageInlineSizeLimit"),", which can be configured in ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#imageinlinesizelimit"},"ima.config.js"),", with default value of ",(0,i.kt)("strong",{parentName:"p"},"8Kb"),". Images exceeding this size limit are copied to the static media folder and import return's their public URL."),(0,i.kt)("p",null,"To enforce either one of the two modes, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"?external")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"?inline")," query parameter in the import path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This always converts the image to base64 encoded string and inlines it.\nimport InlineImage from './image.png?inline';\n\n// This always returns image public URL, no matter it's size\nimport ImageURL from './image.png?external';\n")),(0,i.kt)("h3",{id:"text-files"},"Text files"),(0,i.kt)("p",null,"When you import one of these text files - csv, txt, html, you receive their contents. Similarly to the images, you can enforce getting their public URL by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"?external")," query parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Returns file contents in the default import\nimport IndexSource from './index.html';\n\n// Returns the file public URL\nimport IndexURL from './index.html?external';\n")),(0,i.kt)("h3",{id:"apppublic-folder"},(0,i.kt)("inlineCode",{parentName:"h3"},"./app/public")," folder"),(0,i.kt)("p",null,"Everything in this folder is copied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/static/public")," and available through the express static files route (",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/static/public/"),")."),(0,i.kt)("h2",{id:"compression"},"Compression"),(0,i.kt)("p",null,"When you built the application bundle, all static assets are additionally compressed using ",(0,i.kt)("inlineCode",{parentName:"p"},"brotli")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gzip")," compression (with ",(0,i.kt)("inlineCode",{parentName:"p"},".br")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".gz")," extensions respectively). To customize this behavior, take a look at ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#compress"},"ima.config.js")," configuration section."),(0,i.kt)("h2",{id:"languages"},"Languages"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#languages"},"language files")," are compile using ",(0,i.kt)("a",{parentName:"p",href:"http://messageformat.github.io/messageformat/"},"messageformat")," library."))}d.isMDXComponent=!0}}]);