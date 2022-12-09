"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),o=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return n?i.createElement(u,r(r({ref:t},d),{},{components:n})):i.createElement(u,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var i=n(5773),a=(n(7294),n(3905));const l={id:"ima_cli.ImaCliArgs",title:"Interface: ImaCliArgs",sidebar_label:"@ima/cli.ImaCliArgs",custom_edit_url:null},r=void 0,p={unversionedId:"api/interfaces/ima_cli.ImaCliArgs",id:"api/interfaces/ima_cli.ImaCliArgs",title:"Interface: ImaCliArgs",description:"@ima/cli.ImaCliArgs",source:"@site/../docs/api/interfaces/ima_cli.ImaCliArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_cli.ImaCliArgs",permalink:"/api/interfaces/ima_cli.ImaCliArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_cli.ImaCliArgs",title:"Interface: ImaCliArgs",sidebar_label:"@ima/cli.ImaCliArgs",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/react-page-renderer.ViewAdapter",permalink:"/api/classes/ima_react_page_renderer.ViewAdapter"},next:{title:"@ima/cli.ImaCliPlugin",permalink:"/api/interfaces/ima_cli.ImaCliPlugin"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"clean",id:"clean",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"clearCache",id:"clearcache",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"command",id:"command",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"environment",id:"environment",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"forceLegacy",id:"forcelegacy",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"forceSPA",id:"forcespa",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"hostname",id:"hostname",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"ignoreWarnings",id:"ignorewarnings",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"lazyServer",id:"lazyserver",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"legacy",id:"legacy",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"open",id:"open",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"port",id:"port",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"profile",id:"profile",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"publicUrl",id:"publicurl",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"reactRefresh",id:"reactrefresh",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"rootDir",id:"rootdir",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"writeToDisk",id:"writetodisk",level:3},{value:"Defined in",id:"defined-in-17",level:4}],d={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_cli"},"@ima/cli"),".ImaCliArgs"),(0,a.kt)("p",null,"Arguments generated from ima CLI commands."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ImaCliArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/ima_cli.ImaConfigurationContext"},(0,a.kt)("inlineCode",{parentName:"a"},"ImaConfigurationContext"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"clean"},"clean"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"clean"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L28"},"packages/cli/src/types.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"clearcache"},"clearCache"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"clearCache"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L29"},"packages/cli/src/types.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"command"},"command"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"command"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/ima_cli#imaclicommand"},(0,a.kt)("inlineCode",{parentName:"a"},"ImaCliCommand"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L27"},"packages/cli/src/types.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"environment"},"environment"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"environment"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L39"},"packages/cli/src/types.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"forcelegacy"},"forceLegacy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"forceLegacy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L42"},"packages/cli/src/types.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"forcespa"},"forceSPA"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"forceSPA"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L34"},"packages/cli/src/types.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hostname"},"hostname"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"hostname"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L37"},"packages/cli/src/types.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ignorewarnings"},"ignoreWarnings"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ignoreWarnings"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L31"},"packages/cli/src/types.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lazyserver"},"lazyServer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"lazyServer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L43"},"packages/cli/src/types.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"legacy"},"legacy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"legacy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L33"},"packages/cli/src/types.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"open"},"open"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"open"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L32"},"packages/cli/src/types.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"port"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L36"},"packages/cli/src/types.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"profile"},"profile"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"profile"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L35"},"packages/cli/src/types.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publicurl"},"publicUrl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"publicUrl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L38"},"packages/cli/src/types.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reactrefresh"},"reactRefresh"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"reactRefresh"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L41"},"packages/cli/src/types.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rootdir"},"rootDir"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rootDir"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L26"},"packages/cli/src/types.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"verbose"},"verbose"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"verbose"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L30"},"packages/cli/src/types.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"writetodisk"},"writeToDisk"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"writeToDisk"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/cli/src/types.ts#L40"},"packages/cli/src/types.ts:40")))}c.isMDXComponent=!0}}]);