"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(8944);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},4518:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(5773),r=t(7294),o=t(8944),i=t(2389),l=t(7392),s=t(7094),p=t(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:n,block:t,defaultValue:i,values:u,groupId:d,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,l.l)(k,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[N,j]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==N&&k.some((n=>n.value===e))&&j(e)}const x=e=>{const n=e.currentTarget,t=C.indexOf(n),a=k[t].value;a!==N&&(w(n),j(a),null!=d&&y(d,String(a)))},T=e=>{let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},g)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>C.push(e),onKeyDown:T,onClick:x},i,{className:(0,o.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===n})}),t??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},2500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(5773),r=(t(7294),t(3905)),o=t(4518),i=t(1683);const l={title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0"},s=void 0,p={unversionedId:"migration/migration-17.0.0",id:"migration/migration-17.0.0",title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0",source:"@site/../docs/migration/migration-17.0.0.md",sourceDirName:"migration",slug:"/migration/migration-17.0.0",permalink:"/migration/migration-17.0.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/migration/migration-17.0.0.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1672993145,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{title:"Migration 17.0.0",description:"Migration > Migration to version 17.0.0"},sidebar:"docs",previous:{title:"Migration 0.16.0",permalink:"/migration/migration-0.16.0"}},m={},c=[{value:"Imports",id:"imports",level:2},{value:"Context API",id:"context-api",level:2},{value:"Utils Registration",id:"utils-registration",level:2},{value:"IMA.js bundle for client/server",id:"imajs-bundle-for-clientserver",level:2},{value:"Language Key in Config",id:"language-key-in-config",level:2},{value:"Hot Reload",id:"hot-reload",level:2},{value:"IMA.js Plugins",id:"imajs-plugins",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"IMA.js brings few major breaking changes, notably in the renaming of all packages. We've tried to make this process as easy as possible\nthrough the provided jscodeshift transform scripts. For more information read below."),(0,r.kt)("h2",{id:"imports"},"Imports"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ima-")," packages (even plugins) has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/")," scoped packages and ",(0,r.kt)("inlineCode",{parentName:"p"},"ima")," core package has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core"),". The core package is now bundled with ",(0,r.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),", so you can no longer import a file from specific path (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"import GenericError from 'ima/error/GenericError'"),"), but you can import it directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"import { GenericError } from '@ima/core'"),")."),(0,r.kt)("p",null,"All of this can be done automatically for a whole project using following jscodeshift script."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/import-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/import-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n")))),(0,r.kt)("p",null,"Also replace pathes which contain ",(0,r.kt)("inlineCode",{parentName:"p"},"ima")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (setupFiles in jest) and ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js"),"."),(0,r.kt)("p",null,"Following packages have been renamed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ima-gulp-task-loader -> @ima/gulp-task-loader\nima-gulp-tasks -> @ima/gulp-tasks\nima-helpers -> @ima/helpers\nima-server -> @ima/server\n")),(0,r.kt)("p",null,"Following packages have been removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ima-examples\nima-skeleton\n")),(0,r.kt)("p",null,"And as a replacement, following package has been created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create-ima-app\n")),(0,r.kt)("p",null,"Also all plugins have been renamed from ",(0,r.kt)("inlineCode",{parentName:"p"},"ima-plugin-*")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/plugin-*"),"."),(0,r.kt)("h2",{id:"context-api"},"Context API"),(0,r.kt)("p",null,"IMA.js v17 no longer uses ",(0,r.kt)("inlineCode",{parentName:"p"},"prop-types")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"contextTypes")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," components. Instead, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"PageContext")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core"),". Also, ",(0,r.kt)("inlineCode",{parentName:"p"},"prop-types")," has been removed from ",(0,r.kt)("inlineCode",{parentName:"p"},"IMA.js")," dependencies, so if you need it for some reason, make sure it is installed as a project dependency."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"This is original IMA.js v16 code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import PropTypes from 'prop-types';\n\nexport default class MyComponent extends AbstractComponent {\n  static get contextTypes() {\n    return {\n      $Utils: PropTypes.object,\n      urlParams: PropTypes.object\n    };\n  }\n}\n")),(0,r.kt)("p",null,"This should be the new IMA.js v17 code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { PageContext } from '@ima/core';\n\nexport default class MyComponent extends AbstractComponent {\n  static get contextType() {\n    return PageContext;\n  }\n}\n")),(0,r.kt)("p",null,"All of this can be done automatically for a whole project using following jscodeshift script."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/context-api-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx jscodeshift -t node_modules/@ima/core/transform/context-api-v17.js --extensions jsx,js --ignore-config=.gitignore ./\n")))),(0,r.kt)("h2",{id:"utils-registration"},"Utils Registration"),(0,r.kt)("p",null,"There is a new way of defining component utils. You can no longer define ",(0,r.kt)("inlineCode",{parentName:"p"},"oc.constant('$Utils', {...})")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/conf/bind.js"),", you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"oc.get(ComponentUtils).register({...})")," instead. Also, following component utils are predefined by default, so you don't have to define them yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.get(ComponentUtils).register({\n  $CssClasses: '$CssClasses',\n  $Dictionary: Dictionary,\n  $Dispatcher: Dispatcher,\n  $EventBus: EventBus,\n  $Helper: '$Helper',\n  $Http: HttpAgent,\n  $PageStateManager: PageStateManager,\n  $Router: Router,\n  $Settings: '$Settings',\n  $Window: Window\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"Following definition of utils is no longer supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.constant('$Utils', {\n  $MyCustomHelper: oc.get(MyCustomHelper),\n  ...\n});\n")),(0,r.kt)("p",null,"And must be replaced with following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"oc.get(ComponentUtils).register({\n  $MyCustomHelper: MyCustomHelper,\n  ...\n});\n")),(0,r.kt)("h2",{id:"imajs-bundle-for-clientserver"},"IMA.js bundle for client/server"),(0,r.kt)("p",null,"IMA.js v17 comes bundled for server and client side. This means smaller bundle for clients. To benefit from this, you should update ",(0,r.kt)("inlineCode",{parentName:"p"},"vendors")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.js")," as following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let vendors = {\n- common: ['@ima/core'],\n+ common: [],\n\n- server: [],\n+ server: [{ '@ima/core': '@ima/core/dist/ima.server.cjs.js' }],\n\n- client: [],\n+ client: [{ '@ima/core': '@ima/core/dist/ima.client.cjs.js' }],\n\n  test: []\n};\n")),(0,r.kt)("h2",{id:"language-key-in-config"},"Language Key in Config"),(0,r.kt)("p",null,"Config key ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," (mostly used in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/*.js")," boot methods) has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"$Language"),". You can search whole project for ",(0,r.kt)("inlineCode",{parentName:"p"},"config.language")," and replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"config.$Language"),", but most likely, it will be used only in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/settings.js"),"."),(0,r.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,r.kt)("p",null,"Hot Reload has been rewritten and published as ima plugin. Old hot reloading will no longer work. You should delete ",(0,r.kt)("inlineCode",{parentName:"p"},"app/assets/js/hot.reload.js")," from your project, then install the plugin via ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save-dev @ima/plugin-websocket @ima/plugin-hot-reload")," and add following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// You can add this somewhere below the vendors variable initialization\nif (\n  process.env.NODE_ENV === 'dev' ||\n  process.env.NODE_ENV === 'development' ||\n  process.env.NODE_ENV === undefined\n) {\n  vendors.common.push('@ima/plugin-websocket');\n  vendors.common.push('@ima/plugin-hot-reload');\n}\n")),(0,r.kt)("h2",{id:"imajs-plugins"},"IMA.js Plugins"),(0,r.kt)("p",null,"All IMA.js plugins need to be updated to the latest version. Older versions won't work."))}d.isMDXComponent=!0}}]);