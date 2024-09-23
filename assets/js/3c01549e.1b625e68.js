"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,d=p["".concat(o,".").concat(m)]||p[m]||g[m]||r;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(8944);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:t},n)}},6745:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(5773),i=t(7294),r=t(8944),l=t(2466),s=t(3620),o=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function g(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=g(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=d({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=o??p;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var h=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),g=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(p(n),o(a))},m=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:g},l,{className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},i.createElement(k,(0,a.Z)({},e,n)),i.createElement(y,(0,a.Z)({},e,n)))}function v(e){const n=(0,h.Z)();return i.createElement(w,(0,a.Z)({key:String(n)},e))}},9220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=t(5773),i=(t(7294),t(3905)),r=t(6745),l=t(1683);const s={title:"CLI Plugins API",description:"CLI > CLI Plugins and their API"},o=void 0,u={unversionedId:"cli/cli-plugins-api",id:"cli/cli-plugins-api",title:"CLI Plugins API",description:"CLI > CLI Plugins and their API",source:"@site/../docs/cli/cli-plugins-api.md",sourceDirName:"cli",slug:"/cli/cli-plugins-api",permalink:"/cli/cli-plugins-api",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/cli-plugins-api.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1727086867,formattedLastUpdatedAt:"Sep 23, 2024",frontMatter:{title:"CLI Plugins API",description:"CLI > CLI Plugins and their API"},sidebar:"docs",previous:{title:"Additional features",permalink:"/cli/additional-features"},next:{title:"Analyze Plugin",permalink:"/cli/plugins/analyze-plugin"}},c={},p=[{value:"CLI Plugins API",id:"cli-plugins-api",level:2},{value:"Creating a CLI plugin",id:"creating-a-cli-plugin",level:2},{value:"Extending the webpack config",id:"extending-the-webpack-config",level:3},{value:"Custom CLI arguments",id:"custom-cli-arguments",level:3},{value:"Accessing CLI arguments",id:"accessing-cli-arguments",level:3},{value:"Final results",id:"final-results",level:3},{value:"Using TypeScript",id:"using-typescript",level:3},{value:"Existing CLI plugins",id:"existing-cli-plugins",level:2}],g={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The CLI comes with built-in support for plugins. Plugins are used to ",(0,i.kt)("strong",{parentName:"p"},"extend")," or ",(0,i.kt)("strong",{parentName:"p"},"modify")," existing webpack config very easily or even run some pre/post processing scripts during the build process."),(0,i.kt)("p",null,"The CLI plugin is usually a class or an object implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"ImaCliPlugin")," interface. This instance is then added to the ",(0,i.kt)("a",{parentName:"p",href:"/cli/ima-config-js#plugins"},"plugins")," array field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js"),", which registers the plugin to the build process. Additionally to extending the webpack config, you have ability to provide additional custom CLI arguments."),(0,i.kt)("h2",{id:"cli-plugins-api"},"CLI Plugins API"),(0,i.kt)("p",null,"Each plugin has to comply with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/next/packages/cli/src/types.ts#L56"},"following interface"),". Even though almost v everything method is not required and marked as optional, your plugin should implement at least one of the following methods in order to be of any use. Otherwise it would still work but the plugin would not do anything."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Interface for ima/cli plugins that can be defined in plugins field in ima.conf.js. These can be used\n * to extend functionality of default CLI with custom cli arguments and webpack config overrides.\n */\nexport interface ImaCliPlugin {\n  /**\n   * Plugin name, used mainly for better debugging messages.\n   */\n  readonly name: string;\n\n  /**\n   * Optional additional CLI arguments to extend the set of existing ones.\n   */\n  readonly cliArgs?: Partial<Record<ImaCliCommand, CommandBuilder>>;\n\n  /**\n   * Optional plugin hook to do some pre processing right after the cli args are processed\n   * and the imaConfig is loaded, before the webpack config creation and compiler run.\n   */\n  preProcess?(args: ImaCliArgs, imaConfig: ImaConfig): Promise<void>;\n\n  /**\n   * Called right before creating webpack configurations after preProcess call.\n   * This hook lets you customize configuration contexts for each webpack config\n   * that will be generated. This is usefull when you need to overrite configuration\n   * contexts for values that are not editable anywhere else (like output folders).\n   */\n  prepareConfigurations?(\n    configurations: ImaConfigurationContext[],\n    imaConfig: ImaConfig,\n    args: ImaCliArgs\n  ): Promise<ImaConfigurationContext[]>;\n\n  /**\n   * Webpack callback function used by plugins to customize/extend ima webpack config before it's run.\n   */\n  webpack?(\n    config: Configuration,\n    ctx: ImaConfigurationContext,\n    imaConfig: ImaConfig\n  ): Promise<Configuration>;\n\n  /**\n   * Optional plugin hook to do some custom processing after the compilation has finished.\n   * Attention! This hook runs only for build command.\n   */\n  postProcess?(args: ImaCliArgs, imaConfig: ImaConfig): Promise<void>;\n}\n")),(0,i.kt)("h2",{id:"creating-a-cli-plugin"},"Creating a CLI plugin"),(0,i.kt)("p",null,"In this section we're going to create custom plugin, which generates assets manifest json file. To achieve this we'll use ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/webpack-manifest-plugin/"},"WebpackManifestPlugin")," and extend our webpack config. We'll also define some additional CLI arguments that will enable us to overwrite certain settings on demand."),(0,i.kt)("p",null,"First we're going to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-manifest-plugin"),":"),(0,i.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install webpack-manifest-plugin -D\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add webpack-manifest-plugin --dev\n"))),(0,i.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add webpack-manifest-plugin -D\n")))),(0,i.kt)("p",null,"Then we need to define base class for our new CLI plugin. To make things easier we're going to work directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," but in reality you'd be better of creating separate npm package for easier sharing between multiple IMA.js projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"class CliManifestPlugin {\n  name = 'CliManifestPlugin';\n\n  webpack(config, ctx, imaConfig) {}\n}\n\nmodule.exports = {\n  plugins: [new CliManifestPlugin()],\n};\n")),(0,i.kt)("h3",{id:"extending-the-webpack-config"},"Extending the webpack config"),(0,i.kt)("p",null,"Now we're going to initialize our manifest plugin. But we only want to do this when we are building the final bundle using the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," command. For that we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx: ImaContext")," variable, which contains multiple flags and values describing current build context. One of those values is ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx.command")," which can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,i.kt)("p",null,"We are also going to make sure that we can provide options to our CLI plugin that are in this case passed directly to the webpack plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  //...\n  #options = {};\n\n  constructor(options) {\n    this.#options = options;\n  }\n\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(new WebpackManifestPlugin(this.#options));\n    }\n\n    return config;\n  }\n  //...\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Feel free to print the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," object into the console and examine it's properties."),(0,i.kt)("p",{parentName:"admonition"},"Similarly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"imaConfig")," parameter, which contains loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file. You can use this feature to have some additional custom plugin-specific definitions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file too, or use existing settings for some additional functionality.")),(0,i.kt)("p",null,"We're now going to use these options and pass ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shellscape/webpack-manifest-plugin#seed"},"seed")," argument to the plugin. The ",(0,i.kt)("inlineCode",{parentName:"p"},"seed")," object is used to share data between multiple manifest plugin instances (in our case multiple webpack compilations). This makes sure that the final ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file contains paths to all generated assets and is not overwritten by each finished webpack compilation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"//...\n// highlight-next-line\nconst manifestSeed = {};\n\nmodule.exports = {\n  // highlight-next-line\n  plugins: [new CliManifestPlugin({ seed: manifestSeed })],\n};\n")),(0,i.kt)("h3",{id:"custom-cli-arguments"},"Custom CLI arguments"),(0,i.kt)("p",null,"There may be times you'd like to customize or enable/disable certain features on demand using CLI arguments. To demonstrate this we're going to define ",(0,i.kt)("inlineCode",{parentName:"p"},"manifestBasePath")," CIL argument which will overwrite the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shellscape/webpack-manifest-plugin#basepath"},"basePath")," plugin option."),(0,i.kt)("p",null,"You can define CLI arguments for each command separately, in our case, since the plugin does something only in ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," command, we're gonna do the same for the CLI arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"class CliManifestPlugin {\n  //...\n  cliArgs = {\n    dev: undefined, // Dev args will go here\n    build: {\n      manifestBasePath: {\n        desc: 'Overwrite basePath default value',\n        type: 'string',\n      },\n    },\n  };\n  //...\n}\n")),(0,i.kt)("p",null,"The argument definition is passed directly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"yargs")," parser, so anything that ",(0,i.kt)("a",{parentName:"p",href:"https://yargs.js.org/docs/#api-reference-optionskey-opt"},"yargs options")," accept can be passed here. If you've done everything correctly you should even see the new argument in the command ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npx ima build --help\n\nima build\n\nBuild an application for production\n\nOptions:\n// highlight-next-line\n  --manifestBasePath  Overwrite basePath default value  [string]\n")),(0,i.kt)("h3",{id:"accessing-cli-arguments"},"Accessing CLI arguments"),(0,i.kt)("p",null,"CLI argument ",(0,i.kt)("strong",{parentName:"p"},"values are merged into the ",(0,i.kt)("inlineCode",{parentName:"strong"},"ctx")," parameter"),", so you can access them here. In our case we would like to extend the plugin options with the CLI override:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  //...\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(\n        new WebpackManifestPlugin({\n          ...this.#options,\n          // highlight-next-line\n          basePath: ctx.manifestBasePath ?? '',\n        })\n      );\n    }\n\n    return config;\n  }\n  //...\n}\n")),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx ima build --manifestBasePath=path/prefix")," should be reflected in the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./build")," directory."),(0,i.kt)("h3",{id:"final-results"},"Final results"),(0,i.kt)("p",null,"Below is the entire content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file we've been building so far that you can use as a reference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { WebpackManifestPlugin } = require('webpack-manifest-plugin');\n\nclass CliManifestPlugin {\n  #options = {};\n\n  name = 'CliManifestPlugin';\n\n  cliArgs = {\n    dev: undefined, // Dev args will go here\n    build: {\n      manifestBasePath: {\n        desc: 'Overwrite basePath default value',\n        type: 'string',\n      },\n    },\n  };\n\n  constructor(options) {\n    this.#options = options;\n  }\n\n  webpack(config, ctx, imaConfig) {\n    if (ctx.command === 'build') {\n      config.plugins.push(\n        new WebpackManifestPlugin({\n          ...this.#options,\n          basePath: ctx.manifestBasePath ?? '',\n        })\n      );\n    }\n\n    return config;\n  }\n}\n\nconst manifestSeed = {};\n\nmodule.exports = {\n  plugins: [new CliManifestPlugin({ seed: manifestSeed })],\n};\n")),(0,i.kt)("h3",{id:"using-typescript"},"Using TypeScript"),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ima/cli")," is written in TypeScript, there are ",(0,i.kt)("a",{parentName:"p",href:"/cli/cli-plugins-api#plugins-api"},"TypeScript definitions")," you can use while defining your plugin. All types and interfaces are available as exports from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ima/cli")," package while you can always have a look at our existing plugins, which are also written in TypeScript for an inspiration."),(0,i.kt)("h2",{id:"existing-cli-plugins"},"Existing CLI plugins"),(0,i.kt)("p",null,"Currently we maintain ",(0,i.kt)("strong",{parentName:"p"},"3 distinct CLI plugins")," that we actively use in our applications. These enables us to extend the feature set of the IMA.js CLI with additional functionality, which is not really suited to be available by default in the original CLI config, since their use is very situational. However you can almost certainly benefit from using these in your application."),(0,i.kt)("p",null,"Most of these plugins also provide additional functionality that can be used outside of the CLI plugin definition, but it is essential for it to work properly."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/plugins/analyze-plugin"},(0,i.kt)("strong",{parentName:"a"},"AnalyzePlugin"))," - Pre-configures ",(0,i.kt)("a",{parentName:"li",href:"https://npmjs.com/package/bundle-stats-webpack-plugin"},"bundle-stats-webpack-plugin")," and ",(0,i.kt)("a",{parentName:"li",href:"https://npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," webpack plugins for fast and easy bundle analyzing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/plugins/scramble-css-plugin"},(0,i.kt)("strong",{parentName:"a"},"ScrambleCSSPlugin"))," - Implements CSS class minimizer and uglifier that can be reverse-compiled at runtime (you can access classes using their original name)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli/plugins/less-constants-plugin"},(0,i.kt)("strong",{parentName:"a"},"LessConstantsPlugin"))," - Adds preprocessor which converts theme values defined in the JS file, to their LESS variable counterparts.")))}d.isMDXComponent=!0}}]);