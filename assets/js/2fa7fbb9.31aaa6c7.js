"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(8944);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},n)}},6745:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(5773),r=t(7294),o=t(8944),i=t(2466),l=t(3620),s=t(1980),p=t(7392),u=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,p]=g({queryString:t,groupId:a}),[c,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),k=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var k=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=p[t].value;a!==l&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(h,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function j(e){const n=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},2500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(5773),r=(t(7294),t(3905)),o=t(6745),i=t(1683);const l={title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0"},s=void 0,p={unversionedId:"migration/migration-17.0.0",id:"migration/migration-17.0.0",title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0",source:"@site/../docs/migration/migration-17.0.0.md",sourceDirName:"migration",slug:"/migration/migration-17.0.0",permalink:"/migration/migration-17.0.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/migration/migration-17.0.0.md",tags:[],version:"current",lastUpdatedBy:"Pavel Sommer",lastUpdatedAt:1710848039,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0"},sidebar:"docs",previous:{title:"Migration 0.16.0",permalink:"/migration/migration-0.16.0"},next:{title:"Migration 18.0.0",permalink:"/migration/migration-18.0.0"}},u={},c=[{value:"Imports",id:"imports",level:2},{value:"Context API",id:"context-api",level:2},{value:"Utils Registration",id:"utils-registration",level:2},{value:"IMA.js bundle for client/server",id:"imajs-bundle-for-clientserver",level:2},{value:"Language Key in Config",id:"language-key-in-config",level:2},{value:"Hot Reload",id:"hot-reload",level:2},{value:"IMA.js Plugins",id:"imajs-plugins",level:2}],m={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"IMA.js brings few major breaking changes, notably in the renaming of all packages. We've tried to make this process as easy as possible\nthrough the provided jscodeshift transform scripts. For more information read below."),(0,r.kt)("h2",{id:"imports"},"Imports"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ima-")," packages (even plugins) has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/")," scoped packages and ",(0,r.kt)("inlineCode",{parentName:"p"},"ima")," core package has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core"),". The core package is now bundled with ",(0,r.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),", so you can no longer import a file from specific path (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"import GenericError from 'ima/error/GenericError'"),"), but you can import it directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"import { GenericError } from '@ima/core'"),")."),(0,r.kt)("p",null,"All of this can be done automatically for a whole project using following jscodeshift script."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/import-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/import-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/import-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n")))),(0,r.kt)("p",null,"Also replace paths which contain ",(0,r.kt)("inlineCode",{parentName:"p"},"ima")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (setupFiles in jest) and ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),"."),(0,r.kt)("p",null,"Following packages have been renamed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ima-gulp-task-loader -> @ima/gulp-task-loader\nima-gulp-tasks -> @ima/gulp-tasks\nima-helpers -> @ima/helpers\nima-server -> @ima/server\n")),(0,r.kt)("p",null,"Following packages have been removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ima-examples\nima-skeleton\n")),(0,r.kt)("p",null,"And as a replacement, following package has been created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create-ima-app\n")),(0,r.kt)("p",null,"Also all plugins have been renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},"ima-plugin-*")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/plugin-*"),"."),(0,r.kt)("h2",{id:"context-api"},"Context API"),(0,r.kt)("p",null,"IMA.js v17 no longer uses ",(0,r.kt)("inlineCode",{parentName:"p"},"prop-types")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"contextTypes")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," components. Instead, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"PageContext")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core"),". Also, ",(0,r.kt)("inlineCode",{parentName:"p"},"prop-types")," has been removed from ",(0,r.kt)("inlineCode",{parentName:"p"},"IMA.js")," dependencies, so if you need it for some reason, make sure it is installed as a project dependency."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This is original IMA.js v16 code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import PropTypes from 'prop-types';\n\nexport default class MyComponent extends AbstractComponent {\n  static get contextTypes() {\n    return {\n      $Utils: PropTypes.object,\n      urlParams: PropTypes.object\n    };\n  }\n}\n")),(0,r.kt)("p",null,"This should be the new IMA.js v17 code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { PageContext } from '@ima/core';\n\nexport default class MyComponent extends AbstractComponent {\n  static get contextType() {\n    return PageContext;\n  }\n}\n")),(0,r.kt)("p",null,"All of this can be done automatically for a whole project using following jscodeshift script."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/context-api-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/context-api-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/context-api-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n")))),(0,r.kt)("h2",{id:"utils-registration"},"Utils Registration"),(0,r.kt)("p",null,"There is a new way of defining component utils. You can no longer define ",(0,r.kt)("inlineCode",{parentName:"p"},"oc.constant('$Utils', {...})")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/conf/bind.js"),", you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"oc.get(ComponentUtils).register({...})")," instead. Also, following component utils are predefined by default, so you don't have to define them yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.get(ComponentUtils).register({\n  $CssClasses: '$CssClasses',\n  $Dictionary: Dictionary,\n  $Dispatcher: Dispatcher,\n  $EventBus: EventBus,\n  $Helper: '$Helper',\n  $Http: HttpAgent,\n  $PageStateManager: PageStateManager,\n  $Router: Router,\n  $Settings: '$Settings',\n  $Window: Window\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"Following definition of utils is no longer supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.constant('$Utils', {\n  $MyCustomHelper: oc.get(MyCustomHelper),\n  ...\n});\n")),(0,r.kt)("p",null,"And must be replaced with following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.get(ComponentUtils).register({\n  $MyCustomHelper: MyCustomHelper,\n  ...\n});\n")),(0,r.kt)("h2",{id:"imajs-bundle-for-clientserver"},"IMA.js bundle for client/server"),(0,r.kt)("p",null,"IMA.js v17 comes bundled for server and client side. This means smaller bundle for clients. To benefit from this, you should update ",(0,r.kt)("inlineCode",{parentName:"p"},"vendors")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.js")," as following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let vendors = {\n- common: ['@ima/core'],\n+ common: [],\n\n- server: [],\n+ server: [{ '@ima/core': '@ima/core/dist/ima.server.cjs.js' }],\n\n- client: [],\n+ client: [{ '@ima/core': '@ima/core/dist/ima.client.cjs.js' }],\n\n  test: []\n};\n")),(0,r.kt)("h2",{id:"language-key-in-config"},"Language Key in Config"),(0,r.kt)("p",null,"Config key ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," (mostly used in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/*.js")," boot methods) has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"$Language"),". You can search whole project for ",(0,r.kt)("inlineCode",{parentName:"p"},"config.language")," and replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"config.$Language"),", but most likely, it will be used only in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/settings.js"),"."),(0,r.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",null,"Hot Reload has been rewritten and published as ima plugin. Old hot reloading will no longer work. You should delete ",(0,r.kt)("inlineCode",{parentName:"p"},"app/assets/js/hot.reload.js")," from your project, then install the plugin via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save-dev @ima/plugin-websocket @ima/plugin-hot-reload")," and add following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// You can add this somewhere below the vendors variable initialization\nif (\n  process.env.NODE_ENV === 'dev' ||\n  process.env.NODE_ENV === 'development' ||\n  process.env.NODE_ENV === undefined\n) {\n  vendors.common.push('@ima/plugin-websocket');\n  vendors.common.push('@ima/plugin-hot-reload');\n}\n")),(0,r.kt)("h2",{id:"imajs-plugins"},"IMA.js Plugins"),(0,r.kt)("p",null,"All IMA.js plugins need to be updated to the latest version. Older versions won't work."))}g.isMDXComponent=!0}}]);