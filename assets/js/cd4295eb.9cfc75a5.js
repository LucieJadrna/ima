"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(5773),i=(n(7294),n(3905));const o={title:"ima.config.js",description:"CLI > Customizing the build through ima.config.js"},r=void 0,s={unversionedId:"cli/ima.config.js",id:"cli/ima.config.js",title:"ima.config.js",description:"CLI > Customizing the build through ima.config.js",source:"@site/../docs/cli/ima.config.js.md",sourceDirName:"cli",slug:"/cli/ima.config.js",permalink:"/cli/ima.config.js",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/ima.config.js.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1670576681,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{title:"ima.config.js",description:"CLI > Customizing the build through ima.config.js"},sidebar:"docs",previous:{title:"Compiler features",permalink:"/cli/compiler-features"},next:{title:"Additional features",permalink:"/cli/additional-features"}},l={},p=[{value:"Configuration options",id:"configuration-options",level:2},{value:"webpack",id:"webpack",level:3},{value:"swc",id:"swc",level:3},{value:"swcVendor",id:"swcvendor",level:3},{value:"postcss",id:"postcss",level:3},{value:"languages",id:"languages",level:3},{value:"jsxRuntime",id:"jsxruntime",level:3},{value:"webpackAliases",id:"webpackaliases",level:3},{value:"sourceMaps",id:"sourcemaps",level:3},{value:"devServer",id:"devserver",level:3},{value:"publicPath",id:"publicpath",level:3},{value:"compress",id:"compress",level:3},{value:"imageInlineSizeLimit",id:"imageinlinesizelimit",level:3},{value:"disableLegacyBuild",id:"disablelegacybuild",level:3},{value:"transformVendorPaths",id:"transformvendorpaths",level:3},{value:"watchOptions",id:"watchoptions",level:3},{value:"experiments",id:"experiments",level:3},{value:"plugins",id:"plugins",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To additionally customize the build configuration of IMA.js, you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file in the root of your project (next to package.json)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," is regular JavaScript module that is loaded during the build configuration initialization (in Node.js environment) and ",(0,i.kt)("strong",{parentName:"p"},"it is not included in the final application bundle"),"."),(0,i.kt)("p",null,"An example of ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file can look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const postcssUnmq = require('postcss-unmq');\nconst { AnalyzePlugin } = require('@ima/cli');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  publicPath: '/public/',\n  watchOptions: {\n    ignored: /(node_modules|build|.husky|_templates|.git)\\/(?!@ima).*/\n  },\n  plugins: [\n    new AnalyzePlugin()\n  ],\n  webpack: async (config, ctx) => {\n    // Enable webpack infrastructure logging\n    if (ctx.command === 'dev') {\n      config.infrastructureLogging = 'info';\n    }\n\n    return config;\n  },\n  postcss: (config, ctx) => {\n    config.postcssOptions.plugins.push(postcssUnmq({ width: 540 }));\n\n    return config;\n  },\n  languages: {\n    cs: [\n      './node_modules/@ima/**/*CS.json',\n      './app/**/*CS.json'\n    ],\n    en: [\n      './node_modules/@ima/**/*EN.json',\n      './app/**/*EN.json'\n    ]\n  }\n};\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," jsdoc annotation to enable ts-types code completions.")),(0,i.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file should export an object with any combination of the following configuration options."),(0,i.kt)("h3",{id:"webpack"},"webpack"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"async function(config, ctx, imaConfig): config"))),(0,i.kt)("p",null,"This is the most advanced and versatile configuration option, allowing you to change the generated webpack configuration directly before it's passed to the compiler. This function is executed last in the whole configuration pipeline, meaning that all default configurations and CLI plugin configurations are already merged into the config value. This allows you to completely customize the final config form."),(0,i.kt)("p",null,"The function receives ",(0,i.kt)("strong",{parentName:"p"},"3 arguments")," and has to always return (mutated) config object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," - webpack configuration object (just like the one you usually define in webpack.config.js)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctx")," - current configuration context. As we mentioned in the ",(0,i.kt)("a",{parentName:"li",href:"./compiler-features#server-and-client-bundles"},"compiler features"),", the app builds 3 different bundles. Using ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.name")," you can find out which configuration you are currently editting. There are many additional values that help you identify current build state. You can use these to further customize the config only in some cases or for certain bundles. For more information take a look at the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/blob/packages/cli/src/types.ts#L47"},"argument type"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"imaConfig")," - loaded ",(0,i.kt)("inlineCode",{parentName:"li"},"ima.config.js")," file, with defaults.")),(0,i.kt)("p",null,"The following example turns on minification for server bundle for build command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  webpack: async (config, ctx) => {\n    if (ctx.command === 'build' && ctx.name === 'server') {\n      config.optimization.minimize = true;\n    }\n\n    return config;\n  },\n};\n")),(0,i.kt)("h3",{id:"swc"},"swc"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"async function(swcLoaderOptions, ctx): swcLoaderOptions"))),(0,i.kt)("p",null,"Similarly to ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack"),", this function is executed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"swc-loader")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/packages/cli/src/webpack/config.ts#L401"},"default options")," and it's result is then passed to the loader itself. This allows you to customize the swc compiler options in easier and more direct way than you'd have to do when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," option."),(0,i.kt)("p",null,"For example, to ",(0,i.kt)("strong",{parentName:"p"},"enable support")," for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#stage-3-proposals"},"ECMAScript proposals core-js feature"),", you would do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  swc: async (swcLoaderOptions, ctx) => {\n    swcLoaderOptions.env.shippedProposals = true;\n\n    return swcLoaderOptions;\n  },\n};\n")),(0,i.kt)("h3",{id:"swcvendor"},"swcVendor"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"async function(swcLoaderOptions, ctx): swcLoaderOptions"))),(0,i.kt)("p",null,"Works same as the aforementioned ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima.config.js#swc"},(0,i.kt)("inlineCode",{parentName:"a"},"swc"))," options, except this config is applied to vendor files that match regular expressions defined in the ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima.config.js#transformvendorpaths"},(0,i.kt)("inlineCode",{parentName:"a"},"transformVendorPaths"))," settings."),(0,i.kt)("h3",{id:"postcss"},"postcss"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"async function(postCssLoaderOptions, ctx): postCssLoaderOptions"))),(0,i.kt)("p",null,"Lastly, this function is used to customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"postcss-loader")," options. Among the rest you can easily define ",(0,i.kt)("strong",{parentName:"p"},"custom PostCSS plugins")," or completely overwrite the ",(0,i.kt)("a",{parentName:"p",href:"/cli/compiler-features#postcss"},"default set"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const postcssUnmq = require('postcss-unmq');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  swc: async (postCssLoaderOptions, ctx) => {\n    postCssLoaderOptions.postcssOptions.plugins.push(\n      postcssUnmq({ width: 540 })\n    );\n\n    return postCssLoaderOptions;\n  },\n};\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The webpack configuration intentionally ignores any ",(0,i.kt)("strong",{parentName:"p"},".postcssrc")," configuration files to prevent potential conflicts with multiple config files.")),(0,i.kt)("h3",{id:"languages"},"languages"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"object"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"i18n")," language files configuration. The ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," option expects an object with key/value pairs, where key represents the language and value an array of ",(0,i.kt)("a",{parentName:"p",href:"http://messageformat.github.io/messageformat/"},"messageformat")," compliant JSON files. For more information about localization, see the ",(0,i.kt)("a",{parentName:"p",href:"../basic-features/dictionary"},"dictionary")," section."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Globs")," are fully supported and resolved through ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/globby"},"globby")," npm package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  languages: {\n    cs: [\n      './node_modules/@ima/**/*CS.json',\n      './node_modules/@cns/**/*CS.json',\n      './app/**/*CS.json'\n    ],\n    en: [\n      './node_modules/@ima/**/*EN.json',\n      './node_modules/@cns/**/*EN.json',\n      './app/**/*EN.json'\n    ]\n  }\n}\n")),(0,i.kt)("h3",{id:"jsxruntime"},"jsxRuntime"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"'classic' | 'automatic' = 'automatic'"))),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"jsxRuntime")," option to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"automatic")," mode for jsx transformations. For more information see ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"Introducing the New JSX Transform"),"."),(0,i.kt)("h3",{id:"webpackaliases"},"webpackAliases"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"object"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"webpackAliases")," options is passed directly to the webpack ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolvealias"},"resolve.alias")," configuration. You can use this to define additional path aliases to the already existing ",(0,i.kt)("inlineCode",{parentName:"p"},"app/*")," alias, which points to the ",(0,i.kt)("inlineCode",{parentName:"p"},"./app")," directory."),(0,i.kt)("p",null,"To have the ability to use absolute paths, which are resolved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/pages")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Home from 'components/home/Home';\nimport DetailView from 'pages/detail/DetailView';\n")),(0,i.kt)("p",null,"The  ",(0,i.kt)("inlineCode",{parentName:"p"},"webpackAliases")," option configuration could look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const path = require('path');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  webpackAliases: {\n    'components': path.resolve('./app/components'),\n    'pages': path.resolve('./app/pages'),\n  };\n};\n")),(0,i.kt)("h3",{id:"sourcemaps"},"sourceMaps"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"boolean |\xa0string = false"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceMaps")," option enables source maps in the production build. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"'source-map'")," or any other string value compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/devtool/#devtool"},"webpack devtool")," option."),(0,i.kt)("h3",{id:"devserver"},"devServer"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"object"))),(0,i.kt)("p",null,"Similarly to the ",(0,i.kt)("a",{parentName:"p",href:"./cli#dev-server-options"},"CLI options"),", you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"devServer")," option to override defaults for our ",(0,i.kt)("a",{parentName:"p",href:"/cli/advanced-features#dev-server"},"companion dev server"),"."),(0,i.kt)("p",null,"The only thing that's configurable through the ima.config.js ",(0,i.kt)("strong",{parentName:"p"},"only"),", is the ",(0,i.kt)("inlineCode",{parentName:"p"},"writeToDiskFilter")," function. This allows you to force the dev server to write certain files to disk, even if you're serving them from ",(0,i.kt)("a",{parentName:"p",href:"/cli/#%E2%80%93writetodisk"},"memory in the watch mode"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./ima.config.js",title:"./ima.config.js"},"/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  devServer: {\n    port: 3101;\n    hostname: 'localhost';\n    publicUrl: 'http://localhost:3101';\n    writeToDiskFilter: (filePath) => false;\n  };\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The CLI arguments always take precedence over any other configurations.")),(0,i.kt)("h3",{id:"publicpath"},"publicPath"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"string = '/'"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publicPath")," option is used to specify base path for all asses within the application. (see more at ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/"},"webpack public path"),")."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use this option for example in cases of asset upload to CDN, when the CDN URL is known beforehand (the public path can't be changed after the app is already built)."),(0,i.kt)("p",{parentName:"admonition"},"If you want to serve your static files on different route (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"/static"),"), customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"staticFolder")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"./server/config/environment.js")," file and change ",(0,i.kt)("inlineCode",{parentName:"p"},"publicPath")," option accordinly:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./server/config/environment.js",title:"./server/config/environment.js"},"module.exports = (() => {\n  return {\n    prod: {\n      $Server: {\n        /**\n         * The built static files are served on the\n         * http://localhost:3001/pro/static base url\n         */\n        staticFolder: '/pro/static',\n      }\n    }\n  }\n});\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./ima.config.js",title:"./ima.config.js"},"/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  /**\n   * We already serve from static folder, so it is included in the\n   * final baseURL and we just need to add the `pro` prefix.\n   */\n  publicPath: '/pro/',\n};\n"))),(0,i.kt)("h3",{id:"compress"},"compress"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,i.kt)("p",null,"Enables brotli and gzip compression for production assets (in build command). Set to false to disable this feature."),(0,i.kt)("h3",{id:"imageinlinesizelimit"},"imageInlineSizeLimit"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"number = 8192"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imageInlineSizeLimit")," configuration option is already described in the ",(0,i.kt)("a",{parentName:"p",href:"./compiler-features#images"},"compiler features")," section. Essentially it's a image size threshold for it's automatic inlining as a base64 string."),(0,i.kt)("h3",{id:"disablelegacybuild"},"disableLegacyBuild"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,i.kt)("p",null,"Set to true to disable building of the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," bundle (older ECMAScript target)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't forget")," to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," sources from the ",(0,i.kt)("inlineCode",{parentName:"p"},"$Source")," option in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/create-ima-app/template/server/config/environment.js#31"},"app environment")," config"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The application will now only execute the modern version of the client bundle (",(0,i.kt)("inlineCode",{parentName:"p"},"client.es"),"), meaning that the it will only work on the latest versions of modern browsers."),(0,i.kt)("p",{parentName:"admonition"},"This can be usefull if you're building an app, where you are able to set constrains for the supported browsers (e.g. internal admin page).")),(0,i.kt)("h3",{id:"transformvendorpaths"},"transformVendorPaths"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"`{ include?: RegExp[]; exclude?: RegExp[]; }")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is an advanced feature.")),(0,i.kt)("p",null,"Using this option you can include/exclude array of regular expressions that are matched agains file paths of processed vendor files ",(0,i.kt)("em",{parentName:"p"},"(= imported files from node_modules)"),". These files are then processed through ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima.config.js#swcvendor"},(0,i.kt)("inlineCode",{parentName:"a"},"swc-loader"))," that makes sure to compile their syntax to currently supported target ",(0,i.kt)("em",{parentName:"p"},"(ES9)"),". This transformation is executed only for the ",(0,i.kt)("strong",{parentName:"p"},"legacy client bundle"),"."),(0,i.kt)("p",null,"By default the CLI always matches all files under the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ima")," namespace, since we release our plugins in latest ECMA syntax and they need to be compiled down to older syntaxes with proper core-js polyfills."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you use any ",(0,i.kt)("strong",{parentName:"p"},"3rd party")," libraries that you are not sure if they support your currently supported browser environments, add their package names as regular expressions to this array and they will be compiled using swc-loader with proper polyfill injections from the core-js package.")),(0,i.kt)("h3",{id:"watchoptions"},"watchOptions"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"object"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions")," is an object, passed to the webpack watch compiler. You can customize ",(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions.ignored")," files settings or ",(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions.aggregateTimeout")," if you have any issues with the default values."),(0,i.kt)("p",null,"For more information visit the ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/watch/#watchoptions"},"webpack documentation"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have any issues with webpack compilation launching multiple times per one file save, try to increase the ",(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions.aggregateTimeout")," number and see if it helps.")),(0,i.kt)("h3",{id:"experiments"},"experiments"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"object"))),(0,i.kt)("p",null,"This is a place where you can enable IMA.js configuration experiments. Don't confuse this with the webpack experiments field, this is used only for our potential future configuration updates or changes, which may be enabled by default in the future (much like webpack does)."),(0,i.kt)("p",null,"Currently there's only one running experiment option ",(0,i.kt)("inlineCode",{parentName:"p"},"experiments.css"),", that uses webpack native CSS support which completely replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"css-loader")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-css-extract-plugin")," libraries."),(0,i.kt)("h3",{id:"plugins"},"plugins"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"ImaCliPlugin[]"))),(0,i.kt)("p",null,"Array of IMA.js CLI plugin instances. For more information about CLI plugins, see ",(0,i.kt)("a",{parentName:"p",href:"/cli/plugins-api"},"Plugins API")," section."))}m.isMDXComponent=!0}}]);