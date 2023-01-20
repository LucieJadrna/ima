"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,d=c["".concat(o,".").concat(m)]||c[m]||g[m]||l;return t?i.createElement(d,s(s({ref:n},u),{},{components:t})):i.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[c]="string"==typeof e?e:a,s[1]=r;for(var p=2;p<l;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(7294),a=t(8944);const l="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:t},n)}},4518:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(5773),a=t(7294),l=t(8944),s=t(2389),r=t(7392),o=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function g(e){const{lazy:n,block:t,defaultValue:s,values:g,groupId:m,className:d}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=g??f.map((e=>{let{props:{value:n,label:t,attributes:i}}=e;return{value:n,label:t,attributes:i}})),b=(0,r.l)(h,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[v,C]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=m){const e=y[m];null!=e&&e!==v&&h.some((n=>n.value===e))&&C(e)}const I=e=>{const n=e.currentTarget,t=N.indexOf(n),i=h[t].value;i!==v&&(P(n),C(i),null!=m&&w(m,String(i)))},x=e=>{let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},h.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>N.push(e),onKeyDown:x,onClick:I},s,{className:(0,l.Z)("tabs__item",c,s?.className,{"tabs__item--active":v===n})}),t??n)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,s.Z)();return a.createElement(g,(0,i.Z)({key:String(n)},e))}},9220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=t(5773),a=(t(7294),t(3905)),l=t(4518),s=t(1683);const r={title:"CLI Plugins API",description:"CLI > CLI Plugins and their API"},o=void 0,p={unversionedId:"cli/cli-plugins-api",id:"cli/cli-plugins-api",title:"CLI Plugins API",description:"CLI > CLI Plugins and their API",source:"@site/../docs/cli/cli-plugins-api.md",sourceDirName:"cli",slug:"/cli/cli-plugins-api",permalink:"/cli/cli-plugins-api",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/cli-plugins-api.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1674199772,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"CLI Plugins API",description:"CLI > CLI Plugins and their API"},sidebar:"docs",previous:{title:"Additional features",permalink:"/cli/additional-features"},next:{title:"Analyze Plugin",permalink:"/cli/plugins/analyze-plugin"}},u={},c=[{value:"CLI Plugins API",id:"cli-plugins-api",level:2},{value:"Creating a CLI plugin",id:"creating-a-cli-plugin",level:2},{value:"Extending the webpack config",id:"extending-the-webpack-config",level:3},{value:"Custom CLI arguments",id:"custom-cli-arguments",level:3},{value:"Accessing CLI arguments",id:"accessing-cli-arguments",level:3},{value:"Final results",id:"final-results",level:3},{value:"Using TypeScript",id:"using-typescript",level:3},{value:"Existing CLI plugins",id:"existing-cli-plugins",level:2}],g={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The CLI comes with built-in support for plugins. Plugins are used to ",(0,a.kt)("strong",{parentName:"p"},"extend")," or ",(0,a.kt)("strong",{parentName:"p"},"modify")," existing webpack config very easily or even run some pre/post processing scripts during the build process."),(0,a.kt)("p",null,"The CLI plugin is usually a class or an object implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"ImaCliPlugin")," interface. This instance is then added to the ",(0,a.kt)("a",{parentName:"p",href:"/cli/ima-config-js#plugins"},"plugins")," array field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ima.config.js"),", which registers the plugin to the build process. Additionally to extending the webpack config, you have ability to provide additional custom CLI arguments."),(0,a.kt)("h2",{id:"cli-plugins-api"},"CLI Plugins API"),(0,a.kt)("p",null,"Each plugin has to comply with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/cli/src/types.ts#L56"},"following interface"),". Even though almost v everything method is not required and marked as optional, your plugin should implement at least one of the following methods in order to be of any use. Otherwise it would still work but the plugin would not do anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Interface for ima/cli plugins that can be defined in plugins field in ima.conf.js. These can be used\n * to extend functionality of default CLI with custom cli arguments and webpack config overrides.\n */\nexport interface ImaCliPlugin {\n  /**\n   * Plugin name, used mainly for better debugging messages.\n   */\n  readonly name: string;\n\n  /**\n   * Optional additional CLI arguments to extend the set of existing ones.\n   */\n  readonly cliArgs?: Partial<Record<ImaCliCommand, CommandBuilder>>;\n\n  /**\n   * Optional plugin hook to do some pre processing right after the cli args are processed\n   * and the imaConfig is loaded, before the webpack config creation and compiler run.\n   */\n  preProcess?(args: ImaCliArgs, imaConfig: ImaConfig): Promise<void>;\n\n  /**\n   * Webpack callback function used by plugins to customize/extend ima webpack config before it's run.\n   */\n  webpack?(\n    config: Configuration,\n    ctx: ImaConfigurationContext,\n    imaConfig: ImaConfig\n  ): Promise<Configuration>;\n\n  /**\n   * Optional plugin hook to do some custom processing after the compilation has finished.\n   * Attention! This hook runs only for build command.\n   */\n  postProcess?(args: ImaCliArgs, imaConfig: ImaConfig): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"creating-a-cli-plugin"},"Creating a CLI plugin"),(0,a.kt)("p",null,"In this section we're going to create custom plugin, which generates assets manifest json file. To achieve this we'll use ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/webpack-manifest-plugin/"},"WebpackManifestPlugin")," and extend our webpack config. We'll also define some additional CLI arguments that will enable us to overwrite certain settings on demand."),(0,a.kt)("p",null,"First we're going to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-manifest-plugin"),":"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install webpack-manifest-plugin -D\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add webpack-manifest-plugin -D\n")))),(0,a.kt)("p",null,"Then we need to define base class for our new CLI plugin. To make things easier we're going to work directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ima.config.js")," but in reality you'd be better of creating separate npm package for easier sharing between multiple IMA.js projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"class CliManifestPlugin {\n  name = 'CliManifestPlugin';\n\n  webpack(config, ctx, imaConfig) {}\n}\n\nmodule.exports = {\n  plugins: [new CliManifestPlugin()],\n};\n")),(0,a.kt)("h3",{id:"extending-the-webpack-config"},"Extending the webpack config"),(0,a.kt)("p",null,"Now we're going to initialize our manifest plugin. But we only want to do this when we are building the final bundle using the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," command. For that we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx: ImaContext")," variable, which contains multiple flags and values describing current build context. One of those values is ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.command")," which can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("p",null,"We are also going to make sure that we can provide options to our CLI plugin that are in this case passed directly to the webpack plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  //...\n  #options = {};\n\n  constructor(options) {\n    this.#options = options;\n  }\n\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(new WebpackManifestPlugin(this.#options));\n    }\n\n    return config;\n  }\n  //...\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Feel free to print the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," object into the console and examine it's properties."),(0,a.kt)("p",{parentName:"admonition"},"Similarly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," you can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"imaConfig")," parameter, which contains loaded ",(0,a.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file. You can use this feature to have some additional custom plugin-specific definitions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file too, or use existing settings for some additional functionality.")),(0,a.kt)("p",null,"We're now going to use these options and pass ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shellscape/webpack-manifest-plugin#seed"},"seed")," argument to the plugin. The ",(0,a.kt)("inlineCode",{parentName:"p"},"seed")," object is used to share data between multiple manifest plugin instances (in our case multiple webpack compilations). This makes sure that the final ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file contains paths to all generated assets and is not overwritten by each finished webpack compilation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"//...\n// highlight-next-line\nconst manifestSeed = {};\n\nmodule.exports = {\n  // highlight-next-line\n  plugins: [new CliManifestPlugin({ seed: manifestSeed })],\n};\n")),(0,a.kt)("h3",{id:"custom-cli-arguments"},"Custom CLI arguments"),(0,a.kt)("p",null,"There may be times you'd like to customize or enable/disable certain features on demand using CLI arguments. To demonstrate this we're going to define ",(0,a.kt)("inlineCode",{parentName:"p"},"manifestBasePath")," CIL argument which will overwrite the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shellscape/webpack-manifest-plugin#basepath"},"basePath")," plugin option."),(0,a.kt)("p",null,"You can define CLI arguments for each command separately, in our case, since the plugin does something only in ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," command, we're gonna do the same for the CLI arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"class CliManifestPlugin {\n  //...\n  cliArgs = {\n    dev: undefined, // Dev args will go here\n    build: {\n      manifestBasePath: {\n        desc: 'Overwrite basePath default value',\n        type: 'string',\n      },\n    },\n  };\n  //...\n}\n")),(0,a.kt)("p",null,"The argument definition is passed directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"yargs")," parser, so anything that ",(0,a.kt)("a",{parentName:"p",href:"https://yargs.js.org/docs/#api-reference-optionskey-opt"},"yargs options")," accept can be passed here. If you've done everything correctly you should even see the new argument in the command ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx ima build --help\n\nima build\n\nBuild an application for production\n\nOptions:\n// highlight-next-line\n  --manifestBasePath  Overwrite basePath default value  [string]\n")),(0,a.kt)("h3",{id:"accessing-cli-arguments"},"Accessing CLI arguments"),(0,a.kt)("p",null,"CLI argument ",(0,a.kt)("strong",{parentName:"p"},"values are merged into the ",(0,a.kt)("inlineCode",{parentName:"strong"},"ctx")," parameter"),", so you can access them here. In our case we would like to extend the plugin options with the CLI override:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  //...\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(\n        new WebpackManifestPlugin({\n          ...this.#options,\n          // highlight-next-line\n          basePath: ctx.manifestBasePath ?? '',\n        })\n      );\n    }\n\n    return config;\n  }\n  //...\n}\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx ima build --manifestBasePath=path/prefix")," should be reflected in the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./build")," directory."),(0,a.kt)("h3",{id:"final-results"},"Final results"),(0,a.kt)("p",null,"Below is the entire content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file we've been building so far that you can use as a reference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  #options = {};\n\n  name = 'CliManifestPlugin';\n\n  cliArgs = {\n    dev: undefined, // Dev args will go here\n    build: {\n      manifestBasePath: {\n        desc: 'Overwrite basePath default value',\n        type: 'string',\n      },\n    },\n  };\n\n  constructor(options) {\n    this.#options = options;\n  }\n\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(\n        new WebpackManifestPlugin({\n          ...this.#options,\n          basePath: ctx.manifestBasePath ?? '',\n        })\n      );\n    }\n\n    return config;\n  }\n}\n\nconst manifestSeed = {};\n\nmodule.exports = {\n  plugins: [new CliManifestPlugin({ seed: manifestSeed })],\n};\n")),(0,a.kt)("h3",{id:"using-typescript"},"Using TypeScript"),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/cli")," is written in TypeScript, there are ",(0,a.kt)("a",{parentName:"p",href:"./plugins-api.md#plugins-api"},"TypeScript definitions")," you can use while defining your plugin. All types and interfaces are available as exports from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/cli")," package while you can always have a look at our existing plugins, which are also written in TypeScript for an inspiration."),(0,a.kt)("h2",{id:"existing-cli-plugins"},"Existing CLI plugins"),(0,a.kt)("p",null,"Currently we maintain ",(0,a.kt)("strong",{parentName:"p"},"3 distinct CLI plugins")," that we actively use in our applications. These enables us to extend the feature set of the IMA.js CLI with additional functionality, which is not really suited to be available by default in the original CLI config, since their use is very situational. However you can almost certainly benefit from using these in your application."),(0,a.kt)("p",null,"Most of these plugins also provide additional functionality that can be used outside of the CLI plugin definition, but it is essential for it to work properly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/plugins/analyze-plugin"},(0,a.kt)("strong",{parentName:"a"},"AnalyzePlugin"))," - Pre-configures ",(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/package/bundle-stats-webpack-plugin"},"bundle-stats-webpack-plugin")," and ",(0,a.kt)("a",{parentName:"li",href:"https://npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," webpack plugins for fast and easy bundle analyzing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/plugins/scramble-css-plugin"},(0,a.kt)("strong",{parentName:"a"},"ScrambleCSSPlugin"))," - Implements CSS class minimizer and uglifier that can be reverse-compiled at runtime (you can access classes using their original name)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli/plugins/less-constants-plugin"},(0,a.kt)("strong",{parentName:"a"},"LessConstantsPlugin"))," - Adds preprocessor which converts theme values defined in the JS file, to their LESS variable counterparts.")))}m.isMDXComponent=!0}}]);