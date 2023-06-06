"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1683:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(8944);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},6745:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(5773),r=a(7294),o=a(8944),l=a(2466),i=a(3620),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},2648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(5773),r=(a(7294),a(3905)),o=a(6745),l=a(1683);const i={title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},s=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js",source:"@site/../docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/introduction/getting-started",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/introduction/getting-started.md",tags:[],version:"current",lastUpdatedBy:"lastuvka",lastUpdatedAt:1686038340,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},sidebar:"docs",next:{title:"Configuration options",permalink:"/introduction/configuration"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Available commands",id:"available-commands",level:3},{value:"Why should I use <code>create-ima-app</code> command?",id:"why-should-i-use-create-ima-app-command",level:3},{value:"Application structure",id:"application-structure",level:2},{value:"Production use",id:"production-use",level:2},{value:"Building for SPA deployment",id:"building-for-spa-deployment",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"IMA.js")," is an application development stack for developing isomorphic applications written in pure JavaScript and React.\nIt helps you develop fully isomorphic JavaScript applications that behave consistently in many different environments with ease\nusing the provided tools and several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins"},"plugins")," we already have available."),(0,r.kt)("p",null,"IMA.js development stack consists of many different components. Here's a summary of few of the main ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"React")," for UI, which you should ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"learn before")," you dive head-first into IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://expressjs.com/"},"Express.js")," as the web server, but you don't need to know express to use IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rollupjs.org/"},"Rollup")," and ",(0,r.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp")," with various other tools which are used for building the application."),(0,r.kt)("li",{parentName:"ul"},"And various little utilities you don't need to concern yourself with :).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IMA.js is divided into the ",(0,r.kt)("strong",{parentName:"p"},"core library"),", which you'll use to build your\napplication, and the ",(0,r.kt)("strong",{parentName:"p"},"application server")," build on top of Express.js, that brings\nyour application to life.")),(0,r.kt)("p",null,"You can find the core and server library along with many other IMA.js related packages in our monorepo at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima"},"https://github.com/seznam/ima"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install and run your new IMA.js application, you can use our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"create-ima-app"))," npm package.\nStart by running following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/npx"},"npx")," comes with npm 5.2+ and higher, ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/facebook/create-react-app#creating-an-app"},"see instructions for older npm versions"),")"))),(0,r.kt)("p",null,"This will bootstrap your new application and install all dependencies. The provided wizard will\nalso let you choose the template you wish to start with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"empty")," - Hello World [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello"},"Source code"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feed")," - TODO List [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/feed"},"Source code"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"todos")," - Twitter-Like Feed [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/todos"},"Source code"),"]")),(0,r.kt)("p",null,"After the installation succeeds, run following commands to start your application:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nnpm run dev\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nyarn dev\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\npnpm run dev\n")))),(0,r.kt)("p",null,"Before going ahead, now that your application is running, you can either continue reading this documentation,\nwhich describes many different parts of IMA.js in detail, take a direct look at the\n",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Bootstrap"},"API")," or ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/introduction"},(0,r.kt)("strong",{parentName:"a"},"start with our tutorial")),"."),(0,r.kt)("h3",{id:"available-commands"},"Available commands"),(0,r.kt)("p",null,"Once you've initialized your new IMA.js project, following commands become available to you through npm."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," - Starts development server in ES6 mode on ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),". This will also start gulp tasks in watch mode, so any changes you make to the source code are automatically re-builded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev --legacy-compat-mode")," - Starts development server in legacy mode for older browsers, where the code is transpiled to ES5 (IE11)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run test")," - Starts jest test runners."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," - Runs eslint on your application source files. We've prepared pre-configured .eslintrc.js file which follows our IMA.js coding styles, but feel free to adjust this to your needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," - Builds your application. For more information ",(0,r.kt)("em",{parentName:"li"},"(see ",(0,r.kt)("a",{parentName:"em",href:"#production-use"},"Production use"),")"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build:spa")," - Builds SPA version of your application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," - Starts IMA.js server.")),(0,r.kt)("h3",{id:"why-should-i-use-create-ima-app-command"},"Why should I use ",(0,r.kt)("inlineCode",{parentName:"h3"},"create-ima-app")," command?"),(0,r.kt)("p",null,"Developing IMA.js application is fairly easy, but the initial setup process can be quite tiresome.\nThis tool aims to streamline this process, save your time and provide you with buildable\napplication with opinionated defaults that can be easily customized to your needs."),(0,r.kt)("h2",{id:"application-structure"},"Application structure"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-ima-app my-app")," command will create following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-app\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 less\n\u2502   \u2502   \u2514\u2500\u2500 static\n\u2502   \u251c\u2500\u2500 build.js\n\u2502   \u251c\u2500\u2500 component\n\u2502   \u2502   \u2514\u2500\u2500 document\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 bind.js\n\u2502   \u2502   \u251c\u2500\u2500 routes.js\n\u2502   \u2502   \u251c\u2500\u2500 services.js\n\u2502   \u2502   \u2514\u2500\u2500 settings.js\n\u2502   \u251c\u2500\u2500 environment.js\n\u2502   \u251c\u2500\u2500 main.js\n\u2502   \u2514\u2500\u2500 page\n\u2502       \u251c\u2500\u2500 AbstractPageController.js\n\u2502       \u251c\u2500\u2500 error\n\u2502       \u251c\u2500\u2500 home\n\u2502       \u2514\u2500\u2500 notFound\n\u251c\u2500\u2500 gulpConfig.js\n\u251c\u2500\u2500 gulpfile.js\n\u251c\u2500\u2500 jest.config.json\n\u251c\u2500\u2500 jest.setup.js\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 server\n    \u2514\u2500\u2500 server.js\n")),(0,r.kt)("p",null,"So let's take a closer look at the ",(0,r.kt)("strong",{parentName:"p"},"contents of the application"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," - main application folder where all the source code is located.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets")," - files that are preprocessed and copied to our built application,\nusually as static resources.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"less")," - Less CSS files defining common rules, overrides, macros, mixins\nand the basic UI layout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")," - any files that do not need preprocessing (3rd party JS files,\nimages, ...).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"html")," - this folder contains ",(0,r.kt)("strong",{parentName:"li"},"two main files"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spa.html")," - this is a template for SPA applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error.html")," - an error page showed in production."))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component")," - our React components for use in the view. Components are\ncovered in ",(0,r.kt)("a",{parentName:"li",href:"/tutorial/adding-some-state"},"part 3 of our tutorial"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"environment.js")," - configuration files. For more information see\n",(0,r.kt)("a",{parentName:"li",href:"./configuration"},"Configuration")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page")," - controllers, main views and page-specific Less CSS files for pages\nin our application. Usage of these is configured via routing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - the page shown when the application encounters an error that\nprevents it from working properly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"home")," - the index (home) page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"notFound")," - the page shown when the user navigates to a page that is not\ndefined in our application.")))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directories are ",(0,r.kt)("strong",{parentName:"p"},"expected")," by the IMA.js\napplication stack, the remaining directories can be renamed or moved and you\nare free to organize your files in any way you like (but you will have to\nupdate the configuration accordingly)."),(0,r.kt)("h2",{id:"production-use"},"Production use"),(0,r.kt)("p",null,"If you want to deploy your IMA.js application to production, the installation is\nsimilar to the dev environment. ",(0,r.kt)("strong",{parentName:"p"},"To install the IMA.js application"),", start by cloning your application git\nrepository on your production server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone [your-application-git-repository]\n")),(0,r.kt)("p",null,"Switch to the cloned directory and run the following commands to set-up your\napplication - same as in the development mode - and build it:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn build\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\npnpm run build\n")))),(0,r.kt)("p",null,"Now after building your IMA.js application your server is ready to run it. You can start your application using the following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run start\n")))),(0,r.kt)("p",null,"Your application is now running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),"\n(unless configured otherwise)."),(0,r.kt)("h3",{id:"building-for-spa-deployment"},"Building for SPA deployment"),(0,r.kt)("p",null,"It is also possible to deploy your IMA.js application as an SPA (single-page\napplication). To do that, run the following command to build your application:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:spa\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build:spa\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run build:spa\n")))),(0,r.kt)("p",null,"Your built application will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory, ready to deploy\nto a HTTP server."))}h.isMDXComponent=!0}}]);