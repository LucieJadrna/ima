"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(8944);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},4518:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(5773),i=n(7294),l=n(8944),r=n(2389),s=n(7392),o=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:r,values:m,groupId:d,className:g}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[y,C]=(0,i.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&k.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==y&&(S(t),C(a),null!=d&&N(d,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:x,onClick:j},r,{className:(0,l.Z)("tabs__item",c,r?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},9429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(5773),i=(n(7294),n(3905)),l=n(4518),r=n(1683);const s={title:"LESS Constants Plugin",description:"CLI > CLI Plugins and their API > LESS Constants Plugin"},o=void 0,p={unversionedId:"cli/plugins/less-constants-plugin",id:"cli/plugins/less-constants-plugin",title:"LESS Constants Plugin",description:"CLI > CLI Plugins and their API > LESS Constants Plugin",source:"@site/../docs/cli/plugins/less-constants-plugin.md",sourceDirName:"cli/plugins",slug:"/cli/plugins/less-constants-plugin",permalink:"/cli/plugins/less-constants-plugin",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/plugins/less-constants-plugin.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1674199772,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{title:"LESS Constants Plugin",description:"CLI > CLI Plugins and their API > LESS Constants Plugin"},sidebar:"docs",previous:{title:"ScrambleCSS Plugin",permalink:"/cli/plugins/scramble-css-plugin"},next:{title:"Plugins API",permalink:"/plugins/plugin-api"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Create theme.js file with constants definitions",id:"create-themejs-file-with-constants-definitions",level:3},{value:"Import generated <code>constants.less</code> in globals",id:"import-generated-constantsless-in-globals",level:3},{value:"Usage in JavaScript",id:"usage-in-javascript",level:3},{value:"Options",id:"options",level:2},{value:"entry",id:"entry",level:3},{value:"output",id:"output",level:3},{value:"Units",id:"units",level:2},{value:"Custom units",id:"custom-units",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Adds preprocessor which converts theme values defined in the JS file, to their ",(0,i.kt)("strong",{parentName:"p"},"LESS variable counterparts"),"."),(0,i.kt)("p",null,"Can be used to share theme variables between JS and LESS files or even multiple npm packages to allow for easier overrides."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ima/cli-plugin-less-constants -D\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ima/cli-plugin-less-constants -D\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"First create new plugin instance in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ima.config.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { LessConstantsPlugin } = require('@ima/cli-plugin-less-constants');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [\n    new LessConstantsPlugin({\n      entry: './app/config/theme.js'\n    })\n  ],\n};\n")),(0,i.kt)("h3",{id:"create-themejs-file-with-constants-definitions"},"Create theme.js file with constants definitions"),(0,i.kt)("p",null,"Then export your LESS JS constants from the provided entry file, using the available ",(0,i.kt)("a",{parentName:"p",href:"/cli/plugins/less-constants-plugin#units"},(0,i.kt)("inlineCode",{parentName:"a"},"units")," helper functions"),", imported from the CLI plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/config/theme.js",title:"./app/config/theme.js"},"import { units, media } from '@ima/cli-plugin-less-constants/units';\n\nexport default {\n  bodyfontSize: units.rem(1),\n  headerHeight: units.px(120),\n  bodyWidth: units.vw(100),\n  greaterThanMobile: media.maxWidthMedia(360, 'screen'),\n  zIndexes: units.lessMap({\n    header: 100,\n    footer: 200,\n    body: 1,\n  }),\n};\n")),(0,i.kt)("p",null,"This produces the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less",metastring:"title=./build/less-constants/constants.less",title:"./build/less-constants/constants.less"},'@bodyfont-size: 1rem;\n@header-height: 120px;\n@body-width: 100vw;\n@greater-than-mobile: ~"screen and (max-width: 360)";\n@z-indexes: {\n  header: 100;\n  footer: 200;\n  body: 1;\n}\n')),(0,i.kt)("h3",{id:"import-generated-constantsless-in-globals"},"Import generated ",(0,i.kt)("inlineCode",{parentName:"h3"},"constants.less")," in globals"),(0,i.kt)("p",null,"Finally don't forget to import the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/less-constants/constants.less")," file in your ",(0,i.kt)("inlineCode",{parentName:"p"},"./app/less/globals.less")," to have the variables available in all LESS files automatically without explicit import."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/less/globals.less",title:"./app/less/globals.less"},'@import "../../build/less-constants/constants.less";\n')),(0,i.kt)("h3",{id:"usage-in-javascript"},"Usage in JavaScript"),(0,i.kt)("p",null,"Since every unit returns ",(0,i.kt)("a",{parentName:"p",href:"/cli/plugins/less-constants-plugin#units"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit"))," object, you can always access it's value through the ",(0,i.kt)("inlineCode",{parentName:"p"},".valueOf()")," method or use the CSS interpreted value by calling ",(0,i.kt)("inlineCode",{parentName:"p"},".toString()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { headerHeight } from 'app/config/theme.js';\n\nexport default function ThemeComponent({ children, title, href }) {\n  return (\n    <div>\n      Header height has an absolute value of: {headerHeight.valueOf()} {/* 120 */},\n      while it's CSS value is: {headerHeight.toString()} {/* 120px */}\n    </div>\n  );\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The constants are generated only in the ",(0,i.kt)("a",{parentName:"p",href:"../plugins-api.md#plugins-api"},(0,i.kt)("inlineCode",{parentName:"a"},"preProcess"))," which ",(0,i.kt)("strong",{parentName:"p"},"runs just ones before the compilation"),". So make sure to restart the built manually, when you add any new constants, to allow for the regeneration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"constants.less")," file.")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new LessConstantsPlugin(options: {\n  entry: string;\n  output?: string;\n});\n")),(0,i.kt)("h3",{id:"entry"},"entry"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("p",null,"Path to the LESS constants JS file."),(0,i.kt)("h3",{id:"output"},"output"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("p",null,"Optional custom output path, defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/less-constants/constants.less"),"."),(0,i.kt)("h2",{id:"units"},"Units"),(0,i.kt)("p",null,"The plugin provides unit functions for almost every unit available + some other helpers. Each helper returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," object with following interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Unit {\n  valueOf: () => string;\n  toString: () => string;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Numeric values")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"em"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ex"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ch"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rem"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rlh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vw"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vmin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vmax"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"svw"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"svh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lvw"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lvh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dvw"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dvh"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Q"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inches"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pt"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"px"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"percent"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Color values")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"hex"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rgb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rgba"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hsl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hsla"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Media queries")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"maxWidthMedia"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minWidthMedia"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minAndMaxWidthMedia"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maxHeightMedia"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minHeightMedia"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LESS map helper")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"lessMap"),' can be used to group together similar values in an "object-like" value.')),(0,i.kt)("h3",{id:"custom-units"},"Custom units"),(0,i.kt)("p",null,"If you're missing any additional helpers, you can always define your own, either custom ones (as long as they adhere to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," interface) or you can use the following helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { asUnit } from '@ima/cli-plugin-less-constants/units';\n\nfunction asUnit(\n  unit: string,\n  parts: (string | number)[],\n  template = '${parts}${unit}'\n): Unit {\n  return {\n    __propertyDeclaration: true,\n\n    valueOf(): string {\n      return parts.length === 1 ? parts[0].toString() : this.toString();\n    },\n\n    toString(): string {\n      return template\n        .replace('${parts}', parts.join(','))\n        .replace('${unit}', unit);\n    },\n  };\n}\n")))}d.isMDXComponent=!0}}]);