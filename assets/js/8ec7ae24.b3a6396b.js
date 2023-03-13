"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9475],{819:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/introduction-run-dev-5cb35c917c7a6515bb1cc2d09a92821c.jpg"},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1683:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(8944);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},6745:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(5773),a=r(7294),o=r(8944),i=r(2466),l=r(3620),s=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:r,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},4190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(5773),a=(r(7294),r(3905)),o=r(6745),i=r(1683);const l={title:"Introduction",description:"Tutorial > Introduction"},s=void 0,u={unversionedId:"tutorial/introduction",id:"tutorial/introduction",title:"Introduction",description:"Tutorial > Introduction",source:"@site/../docs/tutorial/introduction.md",sourceDirName:"tutorial",slug:"/tutorial/introduction",permalink:"/tutorial/introduction",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/tutorial/introduction.md",tags:[],version:"current",lastUpdatedBy:"Filip Satek",lastUpdatedAt:1678713060,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Introduction",description:"Tutorial > Introduction"},sidebar:"tutorial",next:{title:"Static View",permalink:"/tutorial/static-view"}},p={},c=[{value:"Your first IMA.js application",id:"your-first-imajs-application",level:2},{value:"Setup",id:"setup",level:3},{value:"Dev server",id:"dev-server",level:3},{value:"ENOSPC error",id:"enospc-error",level:4},{value:"Directories and files in your application",id:"directories-and-files-in-your-application",level:3}],d={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial we will build our first IMA.js web application - a simple\nguest book which will list the posts left by other visitors and allow us to\nwrite new posts."),(0,a.kt)("h2",{id:"your-first-imajs-application"},"Your first IMA.js application"),(0,a.kt)("p",null,"Through the course of this tutorial, we will work with\n",(0,a.kt)("a",{parentName:"p",href:"http://git-scm.com/"},"git"),", ",(0,a.kt)("a",{parentName:"p",href:"http://gulpjs.com/"},"gulp"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla"},"ES2015 (ES6)"),",\n",(0,a.kt)("a",{parentName:"p",href:"http://lesscss.org/"},"Less CSS")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React"),". Feel free to familiarize yourself\nwith any of these tools upfront if you are not already. Don't worry though,\nwe'll take things slow and assume no prior knowledge of these tools in this\ntutorial."),(0,a.kt)("p",null,"We do, however, assume that you are familiar with\nJavaScript (ECMAScript 2015), the\n",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"MVC pattern"),",\nand the\n",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Single-page_application"},"Single-page application architecture (SPA)"),".\nKnowledge of an SPA framework such as ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," or\n",(0,a.kt)("a",{parentName:"p",href:"http://emberjs.com/"},"Ember")," is recommended, but not necessary."),(0,a.kt)("p",null,"We also assume that you have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," with NPM (the\ncurrent version is recommended) and a Git client installed on your computer."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First we need to bootstrap our new IMA.js application. Thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"create-ima-app"),"\nnpm package, available since IMA.js v17, this process is fairly simple."),(0,a.kt)("p",null,'To initialize new project, run following command and choose the "Empty" (Hello World) template:'),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app imajs-tutorial\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app imajs-tutorial\n")))),(0,a.kt)("p",null,"This will bootstrap the IMA.js directory structure and install all dependencies. To\nlearn more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"create-ima-app")," package, take a look at its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app"},"github repository"),"."),(0,a.kt)("p",null,"To finish our setup, we will start a development server that will allow us to\nsee our application in action. To do that, cd ",(0,a.kt)("em",{parentName:"p"},"into the imajs-tutorial directory")," and run following command:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")))),(0,a.kt)("p",null,'As you can already see from the command line, if everything went well, you can view the basic "hello world"\napplication by opening ',(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/"},(0,a.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/"))," in your browser."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(819).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"dev-server"},"Dev server"),(0,a.kt)("p",null,"By running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," you start your application in development mode with a dev server."),(0,a.kt)("p",null,"The dev server will keep running in the background, watching for any changes made to\nthe project files and reload the app, allowing us the see the\nresult in the browser without having to restart the application."),(0,a.kt)("p",null,"If you'll happen to not see the changes you've made through this tutorial in\nyour browser, check whether the dev server did not crash or freeze (or didn't\npick up some new files). Should that happen, you can kill the server by\npressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and restart it by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),". If you see an\nerror after you restarted the dev server, check your source code. The error\nshould hint what to look for and where to find the source of the trouble."),(0,a.kt)("p",null,"Additionally, if you want to, you may install the\nReact DevTools (",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"Chrome"),", ",(0,a.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"},"Firefox"),")\nto inspect your view in the browser dev tools."),(0,a.kt)("h4",{id:"enospc-error"},"ENOSPC error"),(0,a.kt)("p",null,"Finally, you may encounter the ",(0,a.kt)("inlineCode",{parentName:"p"},"ENOSPC")," error when working with a large project\nusing a ","*","nix OS. This can be fixed using the following code snippet ran from a\nterminal\n(",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc"},"source of the snippet here"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")),(0,a.kt)("h3",{id:"directories-and-files-in-your-application"},"Directories and files in your application"),(0,a.kt)("p",null,"All files that are specific to our application are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),",\ndirectory. The ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"  tool with information\nabout the dependencies of our application, ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpConfig.js")," configures our gulp tasks (such as LESS file processing), and, finally,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," loads the tasks we can run using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gulp")," tool."),(0,a.kt)("p",null,"You may have also noticed the ",(0,a.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," directories ",(0,a.kt)("em",{parentName:"p"},"(some of these folders may not be visible until they are generated in the first call of ",(0,a.kt)("inlineCode",{parentName:"em"},"npm run dev")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"npm run build"),")"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc")," directory contains the documentation for IMA.js APIs and our application\nrendered to HTML."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"server")," contains the application logic of the HTTP\nserver serving our application."),(0,a.kt)("li",{parentName:"ul"},"Finally, the ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," directory is used as an\noutput directory for the built application and its resources.")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"/introduction/getting-started#application-structure"},"Application Structure"),"\nsection in the documentation."))}h.isMDXComponent=!0}}]);