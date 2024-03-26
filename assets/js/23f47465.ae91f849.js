"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(8944);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:n},t)}},6745:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5773),o=n(7294),l=n(8944),r=n(2466),i=n(3620),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=b({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},r,{className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},9340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(5773),o=(n(7294),n(3905)),l=n(6745),r=n(1683);const i={title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli"},s=void 0,p={unversionedId:"cli/cli",id:"cli/cli",title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli",source:"@site/../docs/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/cli/",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/cli.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1711463281,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{title:"Introduction to @ima/cli",description:"CLI > Introduction to @ima/cli"},sidebar:"docs",previous:{title:"Dynamic imports",permalink:"/advanced-features/dynamic-imports"},next:{title:"Compiler features",permalink:"/cli/compiler-features"}},u={},c=[{value:"Development",id:"development",level:2},{value:"Build",id:"build",level:2},{value:"CLI options",id:"cli-options",level:2},{value:"--version",id:"--version",level:3},{value:"--help",id:"--help",level:3},{value:"--clean",id:"--clean",level:3},{value:"--clearCache",id:"--clearcache",level:3},{value:"--verbose",id:"--verbose",level:3},{value:"--inspect",id:"--inspect",level:3},{value:"--ignoreWarnings",id:"--ignorewarnings",level:3},{value:"--open",id:"--open",level:3},{value:"--openUrl",id:"--openurl",level:3},{value:"--legacy",id:"--legacy",level:3},{value:"--forceLegacy",id:"--forcelegacy",level:3},{value:"--forceSPA",id:"--forcespa",level:3},{value:"--profile",id:"--profile",level:3},{value:"--writeToDisk",id:"--writetodisk",level:3},{value:"--reactRefresh",id:"--reactrefresh",level:3},{value:"--lazyServer",id:"--lazyserver",level:3},{value:"Dev server options",id:"dev-server-options",level:2},{value:"--port",id:"--port",level:3},{value:"--hostname",id:"--hostname",level:3},{value:"--publicUrl",id:"--publicurl",level:3}],d={toc:c},m="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"IMA.js CLI")," allows you to build and watch your application for changes during development. These features are handle by the only two currently supported commands ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,o.kt)("p",null,"You can always list available commands by running:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ima --help\n"))),(0,o.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ima --help\n"))),(0,o.kt)(r.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx ima --help\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," comes pre-installed with npm 5.2+ and higher.")),(0,o.kt)("p",null,"This should produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: ima <command>\n\nCommands:\n  ima build  Build an application for production\n  ima dev    Run application in development watch mode\n\nOptions:\n  --version  Show version number  [boolean]\n  --help     Show help  [boolean]\n")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev")," command starts the application in the ",(0,o.kt)("strong",{parentName:"p"},"development")," mode with HMR, error-overlay, source maps and other debugging tools enabled."),(0,o.kt)("p",null,"By default the application starts on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," with ",(0,o.kt)("a",{parentName:"p",href:"./advanced-features#dev-server"},"companion dev server")," running at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3101"},"http://localhost:3101"),". These can be further customized through the app ",(0,o.kt)("strong",{parentName:"p"},"environment")," settings and CLI arguments."),(0,o.kt)("p",null,"You can also run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev --help")," to list all available options that you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ima dev\n\nRun application in development watch mode\n\nOptions:\n  --version         Show version number  [boolean]\n  --help            Show help  [boolean]\n  --clean           Clean build folder before building the application  [boolean] [default: true]\n  --clearCache      Deletes node_modules/.cache directory to invalidate loaders cache  [boolean]\n  --verbose         Use default webpack CLI output instead of custom one  [boolean]\n  --inspect         Enable Node inspector mode  [boolean]\n  --ignoreWarnings  Webpack will no longer print warnings during compilation  [boolean]\n  --open            Opens browser window after server has been started  [boolean] [default: true]\n  --openUrl         Custom URL used when opening browser window  [string]\n  --legacy          Runs application in legacy mode  [boolean] [default: false]\n  --forceLegacy     Forces runner.js to execute legacy client code  [boolean] [default: false]\n  --forceSPA        Forces application to run in SPA mode  [boolean] [default: false]\n  --writeToDisk     Write static files to disk, instead of serving it from memory  [boolean] [default: false]\n  --reactRefresh    Enable/disable react fast refresh for React components [boolean] [default: true]\n  --lazyServer      Enable/disable lazy init of server app factory [boolean] [default: true]\n  --port            Dev server port (overrides ima.config.js settings)  [number]\n  --hostname        Dev server hostname (overrides ima.config.js settings)  [string]\n  --publicUrl       Dev server publicUrl (overrides ima.config.js settings)  [string]\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Any of the above mentioned options can be combined together in all different combinations and all options have specified default value. This means that in normal cases you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev")," without any additional arguments.")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"Builds the application in production mode with all optimizations enabled (compression, minification, etc.). The ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," command drops some options compared to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," command. While adding few build specific commands. ",(0,o.kt)("inlineCode",{parentName:"p"},"npx build --help")," produces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ima build\n\nBuild an application for production\n\nOptions:\n  --version         Show version number  [boolean]\n  --help            Show help  [boolean]\n  --clean           Clean build folder before building the application  [boolean] [default: true]\n  --clearCache      Deletes node_modules/.cache directory to invalidate loaders cache  [boolean]\n  --verbose         Use default webpack CLI output instead of custom one  [boolean]\n  --ignoreWarnings  Webpack will no longer print warnings during compilation  [boolean]\n  --profile         Turn on profiling support in production  [boolean] [default: false]\n")),(0,o.kt)("h2",{id:"cli-options"},"CLI options"),(0,o.kt)("p",null,"Most of the following options are available for both ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," commands, however some may be exclusive to only one of them. You can always use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," argument to show all available options for each command."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you run into any issues with the application build, you can always run the app with ",(0,o.kt)("inlineCode",{parentName:"p"},"npx ima dev --clearCache")," to make sure that all cache and tmp files are deleted before next build and see if this resolves your issues."),(0,o.kt)("p",{parentName:"admonition"},"Similarly you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," option to show more information during build that can aid you in ",(0,o.kt)("strong",{parentName:"p"},"debugging process")," in case anything happens.")),(0,o.kt)("h3",{id:"--version"},"--version"),(0,o.kt)("p",null,"Prints ",(0,o.kt)("inlineCode",{parentName:"p"},"@ima/cli")," version."),(0,o.kt)("h3",{id:"--help"},"--help"),(0,o.kt)("p",null,"Prints help dialog."),(0,o.kt)("h3",{id:"--clean"},"--clean"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Deletes ",(0,o.kt)("inlineCode",{parentName:"p"},"./build")," folder before running the application."),(0,o.kt)("h3",{id:"--clearcache"},"--clearCache"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Clears ",(0,o.kt)("inlineCode",{parentName:"p"},"./node_modules/.cache")," folder. This is used to store webpack filesystem cache and other webpack loader and plugins cache."),(0,o.kt)("h3",{id:"--verbose"},"--verbose"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Disables custom CLI logging style in favor of default webpack CLI verbose. This can be useful for debugging."),(0,o.kt)("h3",{id:"--inspect"},"--inspect"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Disable/enable node ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/debugging-getting-started"},"inspector")," mode."),(0,o.kt)("h3",{id:"--ignorewarnings"},"--ignoreWarnings"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Ignore reporting of webpack warning messages. The CLI automatically caches all existing warnings and shows just new warnings rebuilds in watch mode."),(0,o.kt)("h3",{id:"--open"},"--open"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Enable/disable auto opening of app URL in the browser window on startup."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you find this option annoying, you can completely ",(0,o.kt)("strong",{parentName:"p"},"disable this feature across all IMA.js applications")," by putting ",(0,o.kt)("inlineCode",{parentName:"p"},"IMA_CLI_OPEN=false")," in your environment.")),(0,o.kt)("h3",{id:"--openurl"},"--openUrl"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Allows you to customize URL which is opened when the server starts in development mode."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"IMA_CLI_OPEN_URL='http://ima.dev:3001'")," env variable to set this option."),(0,o.kt)("p",{parentName:"admonition"},"This is usefull when you have project-specific URLs. You can then set this environment variable in application's ",(0,o.kt)("inlineCode",{parentName:"p"},"ima.config.js")," and don't have to worry about using ",(0,o.kt)("inlineCode",{parentName:"p"},"--openUrl")," CLI argument everytime you're starting the application in dev mode.")),(0,o.kt)("h3",{id:"--legacy"},"--legacy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"By default the CLI only builds ",(0,o.kt)("inlineCode",{parentName:"p"},"es")," version of JS files in development mode. Use this option to enable ",(0,o.kt)("a",{parentName:"p",href:"./compiler-features#server-and-client-bundles"},"additional build of non es version"),"."),(0,o.kt)("h3",{id:"--forcelegacy"},"--forceLegacy"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Enables ",(0,o.kt)("inlineCode",{parentName:"p"},"legacy")," mode and forces runner.js to load legacy code even if targeted browser supports the latest client es version."),(0,o.kt)("h3",{id:"--forcespa"},"--forceSPA"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Forces the application to run in SPA mode."),(0,o.kt)("h3",{id:"--profile"},"--profile"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"Disables some optimizations to allow for better debugging while also trying to be as close to the production build as possible. Currently this option disables mangling of classes and functions, which produces more readable stack traces."),(0,o.kt)("h3",{id:"--writetodisk"},"--writeToDisk"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = false"))),(0,o.kt)("p",null,"By default the app ",(0,o.kt)("strong",{parentName:"p"},"client static files are served from memory")," in dev mode. Using this option you can force webpack to write these files and serve them from the disk."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This option can be useful in some cases where you need to take a look at the compile source code, where it's easier to browse these files locally, rather than on the static server.")),(0,o.kt)("h3",{id:"--reactrefresh"},"--reactRefresh"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Disable/enable ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"react fast refresh")," for React components."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Disable this option if you are watching and editing ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," files, this may result in less performant but more stable HMR experience.")),(0,o.kt)("h3",{id:"--lazyserver"},"--lazyServer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,o.kt)("p",null,"Disable/enable lazy init of server app factory."),(0,o.kt)("h2",{id:"dev-server-options"},"Dev server options"),(0,o.kt)("p",null,"Following options are used to customize the companion dev server location (only for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," command). These can be useful if you have some special dev environment, where you have an issue with the default configuration."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you provide ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),", you don't need to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicUrl"),", the CLI will create it automatically, unless the ",(0,o.kt)("inlineCode",{parentName:"p"},"publicUrl")," is completely different than the ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," provided.")),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"number"))),(0,o.kt)("p",null,"Dev server port."),(0,o.kt)("h3",{id:"--hostname"},"--hostname"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("p",null,"Dev server hostname, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("h3",{id:"--publicurl"},"--publicUrl"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"string"))),(0,o.kt)("p",null,"Dev server public url, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3101"),"."))}b.isMDXComponent=!0}}]);