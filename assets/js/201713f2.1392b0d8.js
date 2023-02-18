"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1683:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(8944);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:r},t)}},6745:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(5773),a=r(7294),l=r(8944),i=r(2466),o=r(3620),s=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=v({queryString:r,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==o&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},1564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(5773),a=(r(7294),r(3905)),l=r(6745),i=r(1683);const o={title:"Migration 18.0.0",description:"Migration > Migration to version 18.0.0"},s=void 0,u={unversionedId:"migration/migration-18.0.0",id:"migration/migration-18.0.0",title:"Migration 18.0.0",description:"Migration > Migration to version 18.0.0",source:"@site/../docs/migration/migration-18.0.0.md",sourceDirName:"migration",slug:"/migration/migration-18.0.0",permalink:"/migration/migration-18.0.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/migration/migration-18.0.0.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1676730241,formattedLastUpdatedAt:"Feb 18, 2023",frontMatter:{title:"Migration 18.0.0",description:"Migration > Migration to version 18.0.0"},sidebar:"docs",previous:{title:"Migration 17.0.0",permalink:"/migration/migration-17.0.0"},next:{title:"How to Contribute",permalink:"/contributing/how-to-contribute"}},p={},c=[{value:"Update requirements",id:"update-requirements",level:2},{value:"Moved from gulp to webpack",id:"moved-from-gulp-to-webpack",level:2},{value:"Change scripts in package.json",id:"change-scripts-in-packagejson",level:3},{value:"Update settings.js",id:"update-settingsjs",level:3},{value:"Remove gulp specific things",id:"remove-gulp-specific-things",level:3},{value:"Removed build.js, optionally add ima.config.js file to root",id:"removed-buildjs-optionally-add-imaconfigjs-file-to-root",level:3},{value:"Moved from babel to swc",id:"moved-from-babel-to-swc",level:2},{value:"New React-page-renderer",id:"new-react-page-renderer",level:2},{value:"Update EventBus",id:"update-eventbus",level:3},{value:"Update DocumentView",id:"update-documentview",level:2},{value:"Update Server",id:"update-server",level:2},{value:"Split server.js -&gt; server.js and app.js",id:"split-serverjs---serverjs-and-appjs",level:3},{value:"Server changes",id:"server-changes",level:3},{value:"Move environment.js file",id:"move-environmentjs-file",level:3},{value:"Templates",id:"templates",level:3},{value:"Update DocumentView",id:"update-documentview-1",level:3},{value:"Assets =&gt; app/public",id:"assets--apppublic",level:2},{value:"Styles",id:"styles",level:2},{value:"Tests",id:"tests",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"Deleted packages",id:"deleted-packages",level:2},{value:"IMA.js Plugins",id:"imajs-plugins",level:2}],d={toc:c},m="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"IMA.js brings few major breaking changes. For more information read below."),(0,a.kt)("h2",{id:"update-requirements"},"Update requirements"),(0,a.kt)("p",null,"IMA.js v18 requires node >= 18, npm >= 8 and react 18."),(0,a.kt)("h2",{id:"moved-from-gulp-to-webpack"},"Moved from gulp to webpack"),(0,a.kt)("p",null,"You can remove gulp things. There is new @ima/cli plugin for helping with webpack.\nFrom now, you have to import everything you want to be present in your bundle (that's how webpack works)."),(0,a.kt)("h3",{id:"change-scripts-in-packagejson"},"Change scripts in package.json"),(0,a.kt)("p",null,"There is new @ima/cli used in scripts instead of gulp."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\n "scripts": {\n    "test": "jest",\n    "lint": "eslint \'./**/*.{js,jsx,ts,tsx}\'",\n    "dev": "ima dev",\n    "build": "NODE_ENV=production ima build",\n    "start": "NODE_ENV=production node server/server.js"\n},\n...\n')),(0,a.kt)("p",null,"Remove ",(0,a.kt)("inlineCode",{parentName:"p"},'"main": "build/server.js"')," from ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," too. (Server is not anymore in build/server.js.)"),(0,a.kt)("h3",{id:"update-settingsjs"},"Update settings.js"),(0,a.kt)("p",null,"Remove scripts and esScripts from $Page.$Render (IMA process this things now by manifest and contentVariables)."),(0,a.kt)("h3",{id:"remove-gulp-specific-things"},"Remove gulp specific things"),(0,a.kt)("p",null,"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ima/gulp-task-loader"),(0,a.kt)("li",{parentName:"ul"},"@ima/gulp-tasks")),(0,a.kt)("p",null,"Files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gulpfile.js"),(0,a.kt)("li",{parentName:"ul"},"gulpConfig.js")),(0,a.kt)("h3",{id:"removed-buildjs-optionally-add-imaconfigjs-file-to-root"},"Removed build.js, optionally add ima.config.js file to root"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"look at ",(0,a.kt)("a",{parentName:"li",href:"../cli/ima-config-js"},"ima.config.js")," "),(0,a.kt)("li",{parentName:"ul"},"definition of languages moved from ",(0,a.kt)("inlineCode",{parentName:"li"},"build.js")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"ima.config.js")),(0,a.kt)("li",{parentName:"ul"},"definition of less file pathes is not needed - see section Styles below")),(0,a.kt)("h2",{id:"moved-from-babel-to-swc"},"Moved from babel to swc"),(0,a.kt)("p",null,"You can remove @babel dependencies (except for eslint specific). "),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/jest")," devDependency for tests."),(0,a.kt)("h2",{id:"new-react-page-renderer"},"New React-page-renderer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React-page-renderer moved to new package @ima/react-page-renderer ")),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ima/react-page-renderer\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn i @ima/react-page-renderer\n# couldn't auto-convert command\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use codemod ",(0,a.kt)("inlineCode",{parentName:"p"},"npx @cns/web-plugins-codemods")," -> ima18: react page renderer imports")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update DocumentView - use AbstractPureComponent from @ima/react-page-renderer instead of AbstractDocumentView"))),(0,a.kt)("h3",{id:"update-eventbus"},"Update EventBus"),(0,a.kt)("p",null,"You have to add target as the second argument for EventBus fire, listen/unlisten."),(0,a.kt)("h2",{id:"update-documentview"},"Update DocumentView"),(0,a.kt)("p",null,"Rewrite your DocumentView similar like in create-ima-app."),(0,a.kt)("h2",{id:"update-server"},"Update Server"),(0,a.kt)("p",null,"You have to add dependency to ",(0,a.kt)("inlineCode",{parentName:"p"},"error-to-json")," on your own. It was removed from @ima/server."),(0,a.kt)("p",null,"Replace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let errorToJSON = require('error-to-json');\n")),(0,a.kt)("p",null,"by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const errorToJSON = require('error-to-json').default;\n")),(0,a.kt)("h3",{id:"split-serverjs---serverjs-and-appjs"},"Split server.js -> server.js and app.js"),(0,a.kt)("p",null,"This change is optionally, but we use it in our create-ima-app."),(0,a.kt)("h3",{id:"server-changes"},"Server changes"),(0,a.kt)("p",null,"Remove:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nrequire('@ima/core/polyfill/imaLoader.js');\nrequire('@ima/core/polyfill/imaRunner.js');\n")),(0,a.kt)("p",null,"Replace this part:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let imaServer = require('@ima/server');\n\nlet clientApp = imaServer.clientApp;\nlet urlParser = imaServer.urlParser;\nlet environment = imaServer.environment;\nlet logger = imaServer.logger;\nlet cache = imaServer.cache;\n")),(0,a.kt)("p",null,"by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const imaServer = require('@ima/server')();\nconst { serverApp, urlParser, environment, logger, cache, memStaticProxy } =\n  imaServer;\n\nrequire('@ima/react-page-renderer/hook/server')(imaServer);\n")),(0,a.kt)("p",null,"Replace clientApp.requestHandler by serverApp.requestHandlerMiddleware."),(0,a.kt)("p",null,"Remove staticErrorPage and replace errorHandler function by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function renderError(error, req, res, next) {\n  serverApp\n    .errorHandlerMiddleware(error, req, res, next)\n    .then(response => {\n      logger.error(response.error);\n    })\n    .catch(next);\n}\n")),(0,a.kt)("h3",{id:"move-environmentjs-file"},"Move environment.js file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File ",(0,a.kt)("inlineCode",{parentName:"li"},"app/environment.js")," was moved to location ",(0,a.kt)("inlineCode",{parentName:"li"},"/server/config/environment.js"),"\nThere was removed ",(0,a.kt)("strong",{parentName:"li"},"test")," env.")),(0,a.kt)("h3",{id:"templates"},"Templates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"400, 500, spa templates are in ",(0,a.kt)("inlineCode",{parentName:"li"},"server/template")," (look at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/template/server/template"},"create-ima-app"),")")),(0,a.kt)("h3",{id:"update-documentview-1"},"Update DocumentView"),(0,a.kt)("p",null,"You can remove getAsyncScripts method and body content replace with:\n(You have to add $Page.$Render.masterElementId property to settings.js)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"}," <div\n  id={this.utils.$Settings.$Page.$Render.masterElementId}\n  dangerouslySetInnerHTML={{ __html: this.props.page }}\n/>\n    {'#{revivalCache}'}\n    {'#{revivalSettings}'}\n    {'#{runner}'}\n")),(0,a.kt)("p",null,"Instead of app css loading use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  {'#{styles}'}\n")),(0,a.kt)("h2",{id:"assets--apppublic"},"Assets => app/public"),(0,a.kt)("p",null,"Everything from folder app/public is moved to build folder into static folder."),(0,a.kt)("h2",{id:"styles"},"Styles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove files mark as ",(0,a.kt)("inlineCode",{parentName:"li"},"FAKE FILE FOR GULP LESS")),(0,a.kt)("li",{parentName:"ul"},"Move less files from ",(0,a.kt)("inlineCode",{parentName:"li"},"assets/less")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"app/less")),(0,a.kt)("li",{parentName:"ul"},'You have to move definition of less files pathes from build.js to "imports" - you have two options:',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"import less files per component"),(0,a.kt)("li",{parentName:"ul"},"import root less file e.g. in main.js and use glob pattern to import other less files similar like it was in build.js"))),(0,a.kt)("li",{parentName:"ul"},"app/less/globals.less - this file is prepending to every less file so that you can import here variables, mixins, etc."),(0,a.kt)("li",{parentName:"ul"},"strictMaths is enabled")),(0,a.kt)("h2",{id:"tests"},"Tests"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/jest")," dependency.\nAdd ",(0,a.kt)("inlineCode",{parentName:"p"},"identity-obj-proxy")," for css/less in jest.\nReplace ",(0,a.kt)("inlineCode",{parentName:"p"},"enzyme-adapter-react-16")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@cfaester/enzyme-adapter-react-18"),"."),(0,a.kt)("h2",{id:"other-changes"},"Other changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepared for typescript")),(0,a.kt)("h2",{id:"deleted-packages"},"Deleted packages"),(0,a.kt)("p",null,"You can remove following packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@ima/react-hooks - functionality moved to @ima/react-page-renderer"),(0,a.kt)("li",{parentName:"ul"},"@ima/plugin-less-constants moved to @ima/cli-plugin-less-constants"),(0,a.kt)("li",{parentName:"ul"},"@ima/plugin-hot-reload"),(0,a.kt)("li",{parentName:"ul"},"@ima/plugin-websocket"),(0,a.kt)("li",{parentName:"ul"},"@ima/gulp-task-loader"),(0,a.kt)("li",{parentName:"ul"},"@ima/gulp-tasks")),(0,a.kt)("h2",{id:"imajs-plugins"},"IMA.js Plugins"),(0,a.kt)("p",null,"All IMA.js plugins need to be updated to the latest version. Older versions won't work."))}v.isMDXComponent=!0}}]);