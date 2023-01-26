"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(8944);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},4518:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),l=n(7294),r=n(8944),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:b}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,s.U)(),[w,z]=(0,l.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=m){const e=f[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&z(e)}const P=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==w&&(O(t),z(a),null!=m&&v(m,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:P},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},2324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(5773),l=(n(7294),n(3905)),r=n(4518),i=n(1683);const o={title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin"},s=void 0,u={unversionedId:"cli/plugins/analyze-plugin",id:"cli/plugins/analyze-plugin",title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin",source:"@site/../docs/cli/plugins/analyze-plugin.md",sourceDirName:"cli/plugins",slug:"/cli/plugins/analyze-plugin",permalink:"/cli/plugins/analyze-plugin",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/cli/plugins/analyze-plugin.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1674737347,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin"},sidebar:"docs",previous:{title:"CLI Plugins API",permalink:"/cli/cli-plugins-api"},next:{title:"ScrambleCSS Plugin",permalink:"/cli/plugins/scramble-css-plugin"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"--analyze",id:"--analyze",level:3},{value:"Options",id:"options",level:2},{value:"open",id:"open",level:3},{value:"bundleStatsOptions",id:"bundlestatsoptions",level:3},{value:"bundleAnalyzerOptions",id:"bundleanalyzeroptions",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pre-configures ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com/package/bundle-stats-webpack-plugin"},"bundle-stats-webpack-plugin")," and ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," webpack plugins for fast and easy bundle analyzing."),(0,l.kt)("p",null,"This plugin provides easy way to ",(0,l.kt)("strong",{parentName:"p"},"analyze webpack bundle"),". Apart from pre-configuring the forementioned plugins, it also outputs ",(0,l.kt)("inlineCode",{parentName:"p"},"stats.json")," file which can be used in multiple other online webpack bundle analyzer tools. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alexkuz.github.io/webpack-chart/"},"Webpack Chart")," - interactive pie chart"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chrisbateman.github.io/webpack-visualizer/"},"Webpack Visualizer")," - visualize and analyze bundle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.jakoblind.no/optimize/"},"Bundle optimize helper")," - analyze and optimize bundle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://statoscope.tech/"},"Statoscope")," - detailed webpack stats analyzer")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The plugin also prints these links directly into the console when the build finishes, for easier access.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ima/cli-plugin-analyze -D\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ima/cli-plugin-analyze -D\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { AnalyzePlugin } = require('@ima/cli-plugin-analyze');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [new AnalyzePlugin()],\n};\n")),(0,l.kt)("h2",{id:"cli-arguments"},"CLI Arguments"),(0,l.kt)("h3",{id:"--analyze"},"--analyze"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"client |\xa0client.es | server"))),(0,l.kt)("p",null,"Run the ima build command with ",(0,l.kt)("inlineCode",{parentName:"p"},"--analyze")," argument and pick one of the three produced bundles you want to analyze. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"npx ima build --analyze=client"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new AnalyzePlugin(options: {\n  open?: boolean;\n  bundleStatsOptions?: BundleStatsWebpackPlugin.Options;\n  bundleAnalyzerOptions?: BundleAnalyzerPlugin.Options;\n});\n")),(0,l.kt)("h3",{id:"open"},"open"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,l.kt)("p",null,"Set to false if you don't want to automatically open the browser window with the html reports when the build finishes."),(0,l.kt)("h3",{id:"bundlestatsoptions"},"bundleStatsOptions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"object"))),(0,l.kt)("p",null,"Pass any option that the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleStatsWebpackPlugin")," accepts. These are then merged with some of our custom defaults."),(0,l.kt)("h3",{id:"bundleanalyzeroptions"},"bundleAnalyzerOptions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"object"))),(0,l.kt)("p",null,"Pass any option that the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleAnalyzerPlugin")," accepts. These are then merged with some of our custom defaults."))}m.isMDXComponent=!0}}]);