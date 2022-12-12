"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=s,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(b,r(r({ref:n},u),{},{components:t})):a.createElement(b,r({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1683:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),s=t(8944);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,r),hidden:t},n)}},4518:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(5773),s=t(7294),l=t(8944),r=t(2389),i=t(7392),o=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var n;const{lazy:t,block:r,defaultValue:m,values:d,groupId:b,className:h}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,i.l)(f,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:y}=(0,o.U)(),[N,w]=(0,s.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=b){const e=C[b];null!=e&&e!==N&&f.some((n=>n.value===e))&&w(e)}const T=e=>{const n=e.currentTarget,t=S.indexOf(n),a=f[t].value;a!==N&&(j(n),w(a),null!=b&&y(b,String(a)))},P=e=>{var n;let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}null==(n=t)||n.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:n,label:t,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>S.push(e),onKeyDown:P,onClick:T},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,s.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function d(e){const n=(0,r.Z)();return s.createElement(m,(0,a.Z)({key:String(n)},e))}},7025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(5773),s=(t(7294),t(3905)),l=t(4518),r=t(1683);const i={title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},o=void 0,c={unversionedId:"cli/plugins/scramble-css-plugin",id:"cli/plugins/scramble-css-plugin",title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin",source:"@site/../docs/cli/plugins/scramble-css-plugin.md",sourceDirName:"cli/plugins",slug:"/cli/plugins/scramble-css-plugin",permalink:"/cli/plugins/scramble-css-plugin",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/plugins/scramble-css-plugin.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1670836312,formattedLastUpdatedAt:"Dec 12, 2022",frontMatter:{title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},sidebar:"docs",previous:{title:"Analyze Plugin",permalink:"/cli/plugins/analyze-plugin"},next:{title:"LESS Constants Plugin",permalink:"/cli/plugins/less-constants-plugin"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>$CssClasses</code> override and <code>hashtable.json</code>",id:"cssclasses-override-and-hashtablejson",level:3},{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"--scrambleCss",id:"--scramblecss",level:3},{value:"Options",id:"options",level:2},{value:"scrambleCssMinimizerOptions",id:"scramblecssminimizeroptions",level:3}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Implements CSS class minimizer and uglifier that can be reverse-compiled at runtime (you can access classes using their original name)."),(0,s.kt)("p",null,"It works by processing all CSS files using custom PostCSS plugin, that mangles (scrambles) and minimizes all classes, while also building translation table (",(0,s.kt)("inlineCode",{parentName:"p"},"hashtable.json"),") along the way."),(0,s.kt)("p",null,"The result is CSS file with mangled class names and companion hashtable that we use in our custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor to, translate existing classes used out components to the new scrambled ones."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"As mentioned above, for this feature to work ",(0,s.kt)("strong",{parentName:"p"},"you need to wrap all your ",(0,s.kt)("inlineCode",{parentName:"strong"},"classNames")," in ",(0,s.kt)("inlineCode",{parentName:"strong"},"cssClasses")," function.")," Otherwise you'll end up with scrambled classes in CSS file but original class names in your components."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useComponent } from '@ima/react-hooks';\n\nexport default function Card() {\n  const { cssClasses } = useComponent();\n\n  return (\n    // highlight-next-line\n    <div className={cssClasses('card')} />\n  );\n}\n")),(0,s.kt)("p",{parentName:"admonition"},"or in case of ",(0,s.kt)("strong",{parentName:"p"},"class components"),":"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AbstractPureComponent } from '@ima/react-page-renderer';\n\nexport default class Card extends AbstractPureComponent {\n  render() {\n    return (\n      // highlight-next-line\n      <div className={this.cssClasses('card')} />\n    );\n  }\n}\n"))),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ima/cli-plugin-scramble-css -D\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ima/cli-plugin-scramble-css -D\n")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { ScrambleCssPlugin } = require('@ima/cli-plugin-scramble-css');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [new ScrambleCssPlugin()],\n};\n")),(0,s.kt)("h3",{id:"cssclasses-override-and-hashtablejson"},(0,s.kt)("inlineCode",{parentName:"h3"},"$CssClasses")," override and ",(0,s.kt)("inlineCode",{parentName:"h3"},"hashtable.json")),(0,s.kt)("p",null,"We have to provide our custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor and pass it our generate ",(0,s.kt)("inlineCode",{parentName:"p"},"hashtable.json")," file. To do that, we're going to load it's contents in the app environment:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./server/config/environment.js",title:"./server/config/environment.js"},"const fs = require('fs');\nconst path = require('path');\n\nconst hashTablePath = path.resolve(\n  __dirname,\n  '../../build/static/css/hashTable.json'\n);\n\nmodule.exports = (() => {\n  return {\n    prod: {\n      $App: {\n        scrambleCss: {\n          hashTable: fs.existsSync(hashTablePath)\n            ? JSON.parse(fs.readFileSync(hashTablePath))\n            : null,\n        },\n      },\n      // ...\n    }\n  }\n});\n\n")),(0,s.kt)("p",null,"Finally, the hashtable is now available under ",(0,s.kt)("inlineCode",{parentName:"p"},"config.$App.scrambleCss.hashTable"),", so we're going to provide it to the plugin's custom ",(0,s.kt)("inlineCode",{parentName:"p"},"$CssClasses")," processor in the app ",(0,s.kt)("inlineCode",{parentName:"p"},"bind.js")," file, and we're done:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/config/bind.js",title:"./app/config/bind.js"},"import { scrambleCssClasses } from '@ima/cli-plugin-scramble-css/scrambleCssClasses';\n\nexport default (ns, oc, config) => {\n  oc.bind(\n    '$CssClasses',\n    scrambleCssClasses(config?.$App?.scrambleCss?.hashTable),\n    []\n  );\n};\n")),(0,s.kt)("h2",{id:"cli-arguments"},"CLI Arguments"),(0,s.kt)("h3",{id:"--scramblecss"},"--scrambleCss"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,s.kt)("p",null,"The scrambling is enabled by default for the ",(0,s.kt)("inlineCode",{parentName:"p"},"production")," environment. However you can explicitly enable/disable it using this CLI argument. This applies for both CLI commands."),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"new ScrambleCssPlugin(options: {\n  scrambleCssMinimizerOptions?: {\n    hashTableFilename?: string;\n    mainAssetFilter?: (filename: string) => boolean;\n  };\n});\n")),(0,s.kt)("h3",{id:"scramblecssminimizeroptions"},"scrambleCssMinimizerOptions"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"object"))),(0,s.kt)("p",null,"These are passed directly into the ",(0,s.kt)("inlineCode",{parentName:"p"},"ScrambleCssMinimizer"),". You can define custom:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hashTableFilename")," - custom translation ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json")," filename. Defaults to: ",(0,s.kt)("strong",{parentName:"li"},"./build/static/css/hashTable.json"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"mainAssetFilter")," - should resolve to the ",(0,s.kt)("strong",{parentName:"li"},"main css file"),". The minimizer first processes the main.css file and generates the ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json")," ",(0,s.kt)("strong",{parentName:"li"},"translation table"),". If you then want to process other assets with existing hashtable, these should be filtered out in this function, since the minimizer minimizes them in ",(0,s.kt)("strong",{parentName:"li"},"second pass using existing")," ",(0,s.kt)("inlineCode",{parentName:"li"},"hashtable.json"),".")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You should be fine with the default options in almost any situation except some special use cases.")))}d.isMDXComponent=!0}}]);