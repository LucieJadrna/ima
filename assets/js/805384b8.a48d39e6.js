"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),o=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:a,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var i=n(5773),a=(n(7294),n(3905));const l={id:"ima_plugin_cli.ImaPluginConfig",title:"Interface: ImaPluginConfig",sidebar_label:"@ima/plugin-cli.ImaPluginConfig",custom_edit_url:null},r=void 0,p={unversionedId:"api/interfaces/ima_plugin_cli.ImaPluginConfig",id:"api/interfaces/ima_plugin_cli.ImaPluginConfig",title:"Interface: ImaPluginConfig",description:"@ima/plugin-cli.ImaPluginConfig",source:"@site/../docs/api/interfaces/ima_plugin_cli.ImaPluginConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_plugin_cli.ImaPluginConfig",permalink:"/api/interfaces/ima_plugin_cli.ImaPluginConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_plugin_cli.ImaPluginConfig",title:"Interface: ImaPluginConfig",sidebar_label:"@ima/plugin-cli.ImaPluginConfig",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/plugin-cli.Context",permalink:"/api/interfaces/ima_plugin_cli.Context"},next:{title:"@ima/plugin-cli.PipeContext",permalink:"/api/interfaces/ima_plugin_cli.PipeContext"}},u={},o=[{value:"Properties",id:"properties",level:2},{value:"additionalWatchPaths",id:"additionalwatchpaths",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"exclude",id:"exclude",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"inputDir",id:"inputdir",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"jsxRuntime",id:"jsxruntime",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"output",id:"output",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"plugins",id:"plugins",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"sourceMaps",id:"sourcemaps",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"transformers",id:"transformers",level:3},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:o},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli"},"@ima/plugin-cli"),".ImaPluginConfig"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"additionalwatchpaths"},"additionalWatchPaths"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"additionalWatchPaths"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L66"},"types.ts:66")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"exclude"},"exclude"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"exclude"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AnymatchMatcher")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L61"},"types.ts:61")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputdir"},"inputDir"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputDir"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L58"},"types.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"jsxruntime"},"jsxRuntime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"jsxRuntime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"automatic"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"classic"')),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L63"},"types.ts:63")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"output"},"output"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"output"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ImaPluginOutputConfig"),"[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L59"},"types.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"plugins"},"plugins"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"plugins"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_plugin_cli#plugin"},(0,a.kt)("inlineCode",{parentName:"a"},"Plugin")),"[]"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L62"},"types.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourcemaps"},"sourceMaps"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sourceMaps"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L65"},"types.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"JscTarget")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L60"},"types.ts:60")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transformers"},"transformers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"transformers"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"TransformerDefinition"),"[] ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"..."')),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/plugin-cli/src/types.ts#L64"},"types.ts:64")))}c.isMDXComponent=!0}}]);