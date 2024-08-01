"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=s,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),s=t(8944);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:t},n)}},6745:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(5773),s=t(7294),r=t(8944),l=t(2466),i=t(3620),o=t(1980),u=t(7392),c=t(12);function p(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=b({queryString:t,groupId:a}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=o??p;return d({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var g=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(p(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function C(e){const n=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},s.createElement(k,(0,a.Z)({},e,n)),s.createElement(v,(0,a.Z)({},e,n)))}function y(e){const n=(0,g.Z)();return s.createElement(C,(0,a.Z)({key:String(n)},e))}},7025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(5773),s=(t(7294),t(3905)),r=t(6745),l=t(1683);const i={title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},o=void 0,u={unversionedId:"cli/plugins/scramble-css-plugin",id:"cli/plugins/scramble-css-plugin",title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin",source:"@site/../docs/cli/plugins/scramble-css-plugin.md",sourceDirName:"cli/plugins",slug:"/cli/plugins/scramble-css-plugin",permalink:"/cli/plugins/scramble-css-plugin",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/plugins/scramble-css-plugin.md",tags:[],version:"current",lastUpdatedBy:"Jan Ku\u010dera",lastUpdatedAt:1722511261,formattedLastUpdatedAt:"Aug 1, 2024",frontMatter:{title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},sidebar:"docs",previous:{title:"Analyze Plugin",permalink:"/cli/plugins/analyze-plugin"},next:{title:"LESS Constants Plugin",permalink:"/cli/plugins/less-constants-plugin"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>$CssClasses</code> override and <code>hashtable.json</code>",id:"cssclasses-override-and-hashtablejson",level:3},{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"--scrambleCss",id:"--scramblecss",level:3},{value:"Options",id:"options",level:2},{value:"scrambleCssMinimizerOptions",id:"scramblecssminimizeroptions",level:3}],m={toc:p},d="wrapper";function b(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Implements CSS class minimizer and uglifier that can be reverse-compiled at runtime (you can access classes using their original name)."),(0,s.kt)("p",null,"It works by processing all CSS files using custom PostCSS plugin, that mangles (scrambles) and minimizes all classes, while also building translation table (",(0,s.kt)("inlineCode",{parentName:"p"},"hashtable.json"),") along the way."),(0,s.kt)("p",null,"The result is CSS file with mangled class names and companion hashtable that we use in our custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor to, translate existing classes used out components to the new scrambled ones."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"As mentioned above, for this feature to work ",(0,s.kt)("strong",{parentName:"p"},"you need to wrap all your ",(0,s.kt)("inlineCode",{parentName:"strong"},"classNames")," in ",(0,s.kt)("inlineCode",{parentName:"strong"},"cssClasses")," function.")," Otherwise you'll end up with scrambled classes in CSS file but original class names in your components."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useComponent } from '@ima/react-hooks';\n\nexport default function Card() {\n  const { cssClasses } = useComponent();\n\n  return (\n    // highlight-next-line\n    <div className={cssClasses('card')} />\n  );\n}\n")),(0,s.kt)("p",{parentName:"admonition"},"or in case of ",(0,s.kt)("strong",{parentName:"p"},"class components"),":"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AbstractPureComponent } from '@ima/react-page-renderer';\n\nexport default class Card extends AbstractPureComponent {\n  render() {\n    return (\n      // highlight-next-line\n      <div className={this.cssClasses('card')} />\n    );\n  }\n}\n"))),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ima/cli-plugin-scramble-css -D\n"))),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ima/cli-plugin-scramble-css --dev\n"))),(0,s.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @ima/cli-plugin-scramble-css -D\n")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { ScrambleCssPlugin } = require('@ima/cli-plugin-scramble-css');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [new ScrambleCssPlugin()],\n};\n")),(0,s.kt)("h3",{id:"cssclasses-override-and-hashtablejson"},(0,s.kt)("inlineCode",{parentName:"h3"},"$CssClasses")," override and ",(0,s.kt)("inlineCode",{parentName:"h3"},"hashtable.json")),(0,s.kt)("p",null,"We have to provide our custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor and pass it our generate ",(0,s.kt)("inlineCode",{parentName:"p"},"hashtable.json")," file. To do that, we're going to load it's contents in the app environment:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./server/config/environment.js",title:"./server/config/environment.js"},"const fs = require('fs');\nconst path = require('path');\n\nconst hashTablePath = path.resolve(\n  __dirname,\n  '../../build/static/css/hashTable.json'\n);\n\nmodule.exports = (() => {\n  return {\n    prod: {\n      $App: {\n        scrambleCss: {\n          hashTable: fs.existsSync(hashTablePath)\n            ? JSON.parse(fs.readFileSync(hashTablePath))\n            : null,\n        },\n      },\n      // ...\n    }\n  }\n});\n\n")),(0,s.kt)("p",null,"Finally, the hashtable is now available under ",(0,s.kt)("inlineCode",{parentName:"p"},"config.$App.scrambleCss.hashTable"),", so we're going to provide it to the plugin's custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor in the app ",(0,s.kt)("inlineCode",{parentName:"p"},"bind.js")," file, and we're done:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/config/bind.js",title:"./app/config/bind.js"},"import { scrambleCssClasses } from '@ima/cli-plugin-scramble-css/scrambleCssClasses';\n\nexport default (ns, oc, config) => {\n  oc.bind(\n    '$CssClasses',\n    scrambleCssClasses(config?.$App?.scrambleCss?.hashTable),\n    []\n  );\n};\n")),(0,s.kt)("h2",{id:"cli-arguments"},"CLI Arguments"),(0,s.kt)("h3",{id:"--scramblecss"},"--scrambleCss"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,s.kt)("p",null,"The scrambling is enabled by default for the ",(0,s.kt)("inlineCode",{parentName:"p"},"production")," environment. However you can explicitly enable/disable it using this CLI argument. This applies for both CLI commands."),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"new ScrambleCssPlugin(options: {\n  scrambleCssMinimizerOptions?: {\n    hashTableFilename?: string;\n    mainAssetFilter?: (filename: string) => boolean;\n  };\n});\n")),(0,s.kt)("h3",{id:"scramblecssminimizeroptions"},"scrambleCssMinimizerOptions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"object"))),(0,s.kt)("p",null,"These are passed directly into the ",(0,s.kt)("inlineCode",{parentName:"p"},"ScrambleCssMinimizer"),". You can define custom:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hashTableFilename")," - custom translation ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json")," filename. Defaults to: ",(0,s.kt)("strong",{parentName:"li"},"./build/static/css/hashTable.json"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"mainAssetFilter")," - should resolve to the ",(0,s.kt)("strong",{parentName:"li"},"main css file"),". The minimizer first processes the main.css file and generates the ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json")," ",(0,s.kt)("strong",{parentName:"li"},"translation table"),". If you then want to process other assets with existing hashtable, these should be filtered out in this function, since the minimizer minimizes them in ",(0,s.kt)("strong",{parentName:"li"},"second pass using existing")," ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json"),".")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You should be fine with the default options in almost any situation except some special use cases.")))}b.isMDXComponent=!0}}]);