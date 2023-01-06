"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(8944);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},4518:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),o=n(7294),l=n(8944),r=n(2389),i=n(7392),p=n(7094),s=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:r,values:d,groupId:m,className:h}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,p.U)(),[w,N]=(0,o.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==w&&(T(t),N(a),null!=m&&y(m,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:D},r,{className:(0,l.Z)("tabs__item",u,r?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},9340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(5773),o=(n(7294),n(3905)),l=n(4518),r=n(1683);const i={title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli"},p=void 0,s={unversionedId:"cli/cli",id:"cli/cli",title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli",source:"@site/../docs/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/cli/",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/cli.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1673012244,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli"},sidebar:"docs",previous:{title:"Dynamic imports",permalink:"/advanced-features/dynamic-imports"},next:{title:"Compiler features",permalink:"/cli/compiler-features"}},c={},u=[{value:"Development",id:"development",level:2},{value:"Build",id:"build",level:2},{value:"CLI options",id:"cli-options",level:2},{value:"--version",id:"--version",level:3},{value:"--help",id:"--help",level:3},{value:"--clean",id:"--clean",level:3},{value:"--clearCache",id:"--clearcache",level:3},{value:"--verbose",id:"--verbose",level:3},{value:"--ignoreWarnings",id:"--ignorewarnings",level:3},{value:"--open",id:"--open",level:3},{value:"--legacy",id:"--legacy",level:3},{value:"--forceLegacy",id:"--forcelegacy",level:3},{value:"--forceSPA",id:"--forcespa",level:3},{value:"--profile",id:"--profile",level:3},{value:"--writeToDisk",id:"--writetodisk",level:3},{value:"--reactRefresh",id:"--reactrefresh",level:3},{value:"--lazyServer",id:"--lazyserver",level:3},{value:"Dev server options",id:"dev-server-options",level:2},{value:"--port",id:"--port",level:3},{value:"--hostname",id:"--hostname",level:3},{value:"--publicUrl",id:"--publicurl",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"IMA.js CLI")," allows you to build and watch your application for changes during development. These features are handle by the only two currently supported commands ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,o.kt)("p",null,"You can always list available commands by running:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ima --help\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ima --help\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," comes pre-installed with npm 5.2+ and higher.")),(0,o.kt)("p",null,"This should produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: ima <command>\n\nCommands:\n  ima build  Build an application for production\n  ima dev    Run application in development watch mode\n\nOptions:\n  --version  Show version number  [boolean]\n  --help     Show help  [boolean]\n")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev")," command starts the application in the ",(0,o.kt)("strong",{parentName:"p"},"development")," mode with HMR, error-overlay, source maps and other debugging tools enabled."),(0,o.kt)("p",null,"By default the application starts on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," with ",(0,o.kt)("a",{parentName:"p",href:"./advanced-features#dev-server"},"companion dev server")," running at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3101"},"http://localhost:3101"),". These can be further customized through the app ",(0,o.kt)("strong",{parentName:"p"},"environment")," settings and CLI arguments."),(0,o.kt)("p",null,"You can also run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev --help")," to list all available options that you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ima dev\n\nRun application in development watch mode\n\nOptions:\n  --version         Show version number  [boolean]\n  --help            Show help  [boolean]\n  --clean           Clean build folder before building the application  [boolean] [default: true]\n  --clearCache      Deletes node_modules/.cache directory to invalidate loaders cache  [boolean]\n  --verbose         Use default webpack CLI output instead of custom one  [boolean]\n  --ignoreWarnings  Webpack will no longer print warnings during compilation  [boolean]\n  --open            Opens browser window after server has been started  [boolean] [default: true]\n  --legacy          Runs application in legacy mode  [boolean] [default: false]\n  --forceLegacy     Forces runner.js to execute legacy client code  [boolean] [default: false]\n  --forceSPA        Forces application to run in SPA mode  [boolean] [default: false]\n  --writeToDisk     Write static files to disk, instead of serving it from memory  [boolean] [default: false]\n  --reactRefresh    Enable/disable react fast refresh for React components [boolean] [default: true]\n  --lazyServer      Enable/disable lazy init of server app factory [boolean] [default: true]\n  --port            Dev server port (overrides ima.config.js settings)  [number]\n  --hostname        Dev server hostname (overrides ima.config.js settings)  [string]\n  --publicUrl       Dev server publicUrl (overrides ima.config.js settings)  [string]\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Any of the above mentioned options can be combined together in all different combinations and all options have specified default value. This means that in normal cases you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev")," without any additional arguments.")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"Builds the application in production mode with all optimizations enabled (compression, minification, etc.). The ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," command drops some options compared to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," command. While adding few build specific commands. ",(0,o.kt)("inlineCode",{parentName:"p"},"npx build --help")," produces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ima build\n\nBuild an application for production\n\nOptions:\n  --version         Show version number  [boolean]\n  --help            Show help  [boolean]\n  --clean           Clean build folder before building the application  [boolean] [default: true]\n  --clearCache      Deletes node_modules/.cache directory to invalidate loaders cache  [boolean]\n  --verbose         Use default webpack CLI output instead of custom one  [boolean]\n  --ignoreWarnings  Webpack will no longer print warnings during compilation  [boolean]\n  --profile         Turn on profiling support in production  [boolean] [default: false]\n")),(0,o.kt)("h2",{id:"cli-options"},"CLI options"),(0,o.kt)("p",null,"Most of the following options are available for both ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," commands, however some may be exclusive to only one of them. You can always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," argument to show all available options for each command."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you run into any issues with the application build, you can always run the app with ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev --clearCache")," to make sure that all cache and tmp files are deleted before next build and see if this resolves your issues."),(0,o.kt)("p",{parentName:"admonition"},"Similarly you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," option to show more information during build that can aid you in ",(0,o.kt)("strong",{parentName:"p"},"debugging process")," in case anything happens.")),(0,o.kt)("h3",{id:"--version"},"--version"),(0,o.kt)("p",null,"Prints ",(0,o.kt)("inlineCode",{parentName:"p"},"@ima/cli")," version."),(0,o.kt)("h3",{id:"--help"},"--help"),(0,o.kt)("p",null,"Prints help dialog."),(0,o.kt)("h3",{id:"--clean"},"--clean"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Deletes ",(0,o.kt)("inlineCode",{parentName:"p"},"./build")," folder before running the application."),(0,o.kt)("h3",{id:"--clearcache"},"--clearCache"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Clears ",(0,o.kt)("inlineCode",{parentName:"p"},"./node_modules/.cache")," folder. This is used to store webpack filesystem cache and other webpack loader and plugins cache."),(0,o.kt)("h3",{id:"--verbose"},"--verbose"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Disables custom CLI logging style in favor of default webpack CLI verbose. This can be usefull for debugging."),(0,o.kt)("h3",{id:"--ignorewarnings"},"--ignoreWarnings"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Ignore reporting of webpack warning messages. The CLI automatically caches all existing warnings and shows just new warnings rebuilds in watch mode."),(0,o.kt)("h3",{id:"--open"},"--open"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Enable/disable auto opening of app URL in the browser window on startup."),(0,o.kt)("h3",{id:"--legacy"},"--legacy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"By default the CLI only builds ",(0,o.kt)("inlineCode",{parentName:"p"},"es")," version of JS files in development mode. Use this option to enable ",(0,o.kt)("a",{parentName:"p",href:"./compiler-features#server-and-client-bundles"},"additional build of non es version"),"."),(0,o.kt)("h3",{id:"--forcelegacy"},"--forceLegacy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Enables ",(0,o.kt)("inlineCode",{parentName:"p"},"legacy")," mode and forces runner.js to load legacy code even if targeted browser supports the latest client es version."),(0,o.kt)("h3",{id:"--forcespa"},"--forceSPA"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Forces the application to run in SPA mode."),(0,o.kt)("h3",{id:"--profile"},"--profile"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Disables some optimizations to allow for better debugging while also trying to be as close to the production build as possible. Currently this option disables mangling of classes and functions, which produces more readable stack traces."),(0,o.kt)("h3",{id:"--writetodisk"},"--writeToDisk"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"By default the app ",(0,o.kt)("strong",{parentName:"p"},"client static files are served from memory")," in dev mode. Using this option you can force webpack to write these files and serve them from the disk."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This option can be usefull in some cases where you need to take a look at the compile source code, where it's easier to browse these files locally, rather than on the static server.")),(0,o.kt)("h3",{id:"--reactrefresh"},"--reactRefresh"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Disable/enable ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"react fast refresh")," for React components."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Disable this option if you are watching and editing ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," files, this may result in less performant but more stable HMR experience.")),(0,o.kt)("h3",{id:"--lazyserver"},"--lazyServer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Disable/enable lazy init of server app factory."),(0,o.kt)("h2",{id:"dev-server-options"},"Dev server options"),(0,o.kt)("p",null,"Following options are used to customize the companion dev server location (only for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," command). These can be useful if you have some special dev environment, where you have an issue with the default configuration."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you provide ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),", you don't need to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicUrl"),", the CLI will create it automatically, unless the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicUrl")," is completely different than the ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," provided.")),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"number"))),(0,o.kt)("p",null,"Dev server port."),(0,o.kt)("h3",{id:"--hostname"},"--hostname"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("p",null,"Dev server hostname, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("h3",{id:"--publicurl"},"--publicUrl"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("p",null,"Dev server public url, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3101"),"."))}m.isMDXComponent=!0}}]);