"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9475],{819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/introduction-run-dev-5cb35c917c7a6515bb1cc2d09a92821c.jpg"},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(8944);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4518:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),r=n(7294),o=n(8944),i=n(2389),l=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,p.U)(),[w,N]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(C(t),N(a),null!=m&&g(m,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:j},i,{className:(0,o.Z)("tabs__item",c,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(5773),r=(n(7294),n(3905)),o=n(4518),i=n(1683);const l={title:"Introduction",description:"Tutorial > Introduction"},p=void 0,s={unversionedId:"tutorial/introduction",id:"tutorial/introduction",title:"Introduction",description:"Tutorial > Introduction",source:"@site/../docs/tutorial/introduction.md",sourceDirName:"tutorial",slug:"/tutorial/introduction",permalink:"/tutorial/introduction",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/tutorial/introduction.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1675092622,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{title:"Introduction",description:"Tutorial > Introduction"},sidebar:"tutorial",next:{title:"Static View",permalink:"/tutorial/static-view"}},u={},c=[{value:"Your first IMA.js application",id:"your-first-imajs-application",level:2},{value:"Setup",id:"setup",level:3},{value:"Dev server",id:"dev-server",level:3},{value:"ENOSPC error",id:"enospc-error",level:4},{value:"Directories and files in your application",id:"directories-and-files-in-your-application",level:3}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial we will build our first IMA.js web application - a simple\nguest book which will list the posts left by other visitors and allow us to\nwrite new posts."),(0,r.kt)("h2",{id:"your-first-imajs-application"},"Your first IMA.js application"),(0,r.kt)("p",null,"Through the course of this tutorial, we will work with\n",(0,r.kt)("a",{parentName:"p",href:"http://git-scm.com/"},"git"),", ",(0,r.kt)("a",{parentName:"p",href:"http://gulpjs.com/"},"gulp"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla"},"ES2015 (ES6)"),",\n",(0,r.kt)("a",{parentName:"p",href:"http://lesscss.org/"},"Less CSS")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React"),". Feel free to familiarize yourself\nwith any of these tools upfront if you are not already. Don't worry though,\nwe'll take things slow and assume no prior knowledge of these tools in this\ntutorial."),(0,r.kt)("p",null,"We do, however, assume that you are familiar with\nJavaScript (ECMAScript 2015), the\n",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"MVC pattern"),",\nand the\n",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Single-page_application"},"Single-page application architecture (SPA)"),".\nKnowledge of an SPA framework such as ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," or\n",(0,r.kt)("a",{parentName:"p",href:"http://emberjs.com/"},"Ember")," is recommended, but not necessary."),(0,r.kt)("p",null,"We also assume that you have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," with NPM (the\ncurrent version is recommended) and a Git client installed on your computer."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"First we need to bootstrap our new IMA.js application. Thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"create-ima-app"),"\nnpm package, available since IMA.js v17, this process is fairly simple."),(0,r.kt)("p",null,'To initialize new project, run following command and choose the "Empty" (Hello World) template:'),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app imajs-tutorial\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app imajs-tutorial\n")))),(0,r.kt)("p",null,"This will bootstrap the IMA.js directory structure and install all dependencies. To\nlearn more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"create-ima-app")," package, take a look at its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app"},"github repository"),"."),(0,r.kt)("p",null,"To finish our setup, we will start a development server that will allow us to\nsee our application in action. To do that, cd ",(0,r.kt)("em",{parentName:"p"},"into the imajs-tutorial directory")," and run following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")))),(0,r.kt)("p",null,'As you can already see from the command line, if everything went well, you can view the basic "hello world"\napplication by opening ',(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/"))," in your browser."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(819).Z,width:"1920",height:"1080"})),(0,r.kt)("h3",{id:"dev-server"},"Dev server"),(0,r.kt)("p",null,"By running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," you start your application in development mode with a dev server."),(0,r.kt)("p",null,"The dev server will keep running in the background, watching for any changes made to\nthe project files and reload the app, allowing us the see the\nresult in the browser without having to restart the application."),(0,r.kt)("p",null,"If you'll happen to not see the changes you've made through this tutorial in\nyour browser, check whether the dev server did not crash or freeze (or didn't\npick up some new files). Should that happen, you can kill the server by\npressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and restart it by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),". If you see an\nerror after you restarted the dev server, check your source code. The error\nshould hint what to look for and where to find the source of the trouble."),(0,r.kt)("p",null,"Additionally, if you want to, you may install the\nReact DevTools (",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"Chrome"),", ",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"},"Firefox"),")\nto inspect your view in the browser dev tools."),(0,r.kt)("h4",{id:"enospc-error"},"ENOSPC error"),(0,r.kt)("p",null,"Finally, you may encounter the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENOSPC")," error when working with a large project\nusing a ","*","nix OS. This can be fixed using the following code snippet ran from a\nterminal\n(",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc"},"source of the snippet here"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")),(0,r.kt)("h3",{id:"directories-and-files-in-your-application"},"Directories and files in your application"),(0,r.kt)("p",null,"All files that are specific to our application are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),",\ndirectory. The ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"  tool with information\nabout the dependencies of our application, ",(0,r.kt)("inlineCode",{parentName:"p"},"gulpConfig.js")," configures our gulp tasks (such as LESS file processing), and, finally,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," loads the tasks we can run using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gulp")," tool."),(0,r.kt)("p",null,"You may have also noticed the ",(0,r.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," directories ",(0,r.kt)("em",{parentName:"p"},"(some of these folders may not be visible until they are generated in the first call of ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run dev")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run build"),")"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"doc")," directory contains the documentation for IMA.js APIs and our application\nrendered to HTML."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"server")," contains the application logic of the HTTP\nserver serving our application."),(0,r.kt)("li",{parentName:"ul"},"Finally, the ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," directory is used as an\noutput directory for the built application and its resources.")),(0,r.kt)("p",null,"For more information see the ",(0,r.kt)("a",{parentName:"p",href:"/introduction/getting-started#application-structure"},"Application Structure"),"\nsection in the documentation."))}m.isMDXComponent=!0}}]);