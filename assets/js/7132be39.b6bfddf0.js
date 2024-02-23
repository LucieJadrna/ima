"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(8944);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},6745:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(5773),r=n(7294),o=n(8944),i=n(2466),l=n(3620),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var g=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(5773),r=(n(7294),n(3905)),o=n(6745),i=n(1683);const l={title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},s=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js",source:"@site/../docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/introduction/getting-started",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/introduction/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1708696846,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},sidebar:"docs",next:{title:"Configuration options",permalink:"/introduction/configuration"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Available commands",id:"available-commands",level:3},{value:"Why should I use <code>create-ima-app</code> command?",id:"why-should-i-use-create-ima-app-command",level:3},{value:"Application structure",id:"application-structure",level:2},{value:"Production use",id:"production-use",level:2}],m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"IMA.js")," is an application development stack for developing isomorphic applications written in pure JavaScript and React.\nIt helps you develop fully isomorphic JavaScript applications that behave consistently in many different environments with ease\nusing the provided tools and several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins"},"plugins")," we already have available."),(0,r.kt)("p",null,"IMA.js development stack consists of many different components. Here's a summary of few of the main ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"React")," for UI, which you should ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"learn before")," you dive head-first into IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://expressjs.com/"},"Express.js")," as the web server, but you don't need to know express to use IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/"},"Webpack"),", ",(0,r.kt)("a",{parentName:"li",href:"https://rollupjs.org/"},"Rollup")," and ",(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite")," with various other tools which are used for building the application."),(0,r.kt)("li",{parentName:"ul"},"And various little utilities you don't need to concern yourself with :).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IMA.js is divided into the ",(0,r.kt)("strong",{parentName:"p"},"core library"),", which you'll use to build your\napplication, and the ",(0,r.kt)("strong",{parentName:"p"},"application server")," build on top of Express.js, that brings\nyour application to life.")),(0,r.kt)("p",null,"You can find the core and server library along with many other IMA.js related packages in our monorepo at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima"},"https://github.com/seznam/ima"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install and run your new IMA.js application, you can use our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"create-ima-app"))," npm package.\nStart by running following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/npx"},"npx")," comes with npm 5.2+ and higher, ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/facebook/create-react-app#creating-an-app"},"see instructions for older npm versions"),")"))),(0,r.kt)("p",null,"This will bootstrap your new application and install all dependencies. "),(0,r.kt)("p",null,"After the installation succeeds, run following commands to start your application:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nnpm run dev\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nyarn dev\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\npnpm run dev\n")))),(0,r.kt)("p",null,"Before going ahead, now that your application is running, you can either continue reading this documentation,\nwhich describes many different parts of IMA.js in detail, take a direct look at the\n",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Bootstrap"},"API")," or ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/introduction"},(0,r.kt)("strong",{parentName:"a"},"start with our tutorial")),"."),(0,r.kt)("h3",{id:"available-commands"},"Available commands"),(0,r.kt)("p",null,"Once you've initialized your new IMA.js project, following commands become available to you through npm."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," - Starts development server in ES13 mode on ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),". This will also start task in watch mode, so any changes you make to the source code are automatically re-builded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run test")," - Starts jest test runners."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," - Runs eslint on your application source files. We've prepared pre-configured .eslintrc.js file which follows our IMA.js coding styles, but feel free to adjust this to your needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," - Builds your application. For more information ",(0,r.kt)("em",{parentName:"li"},"(see ",(0,r.kt)("a",{parentName:"em",href:"#production-use"},"Production use"),")"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," - Starts IMA.js server.")),(0,r.kt)("p",null,"The new IMA ",(0,r.kt)("a",{parentName:"p",href:"https://imajs.io/cli/"},"cli")," brings more configuration for your application."),(0,r.kt)("h3",{id:"why-should-i-use-create-ima-app-command"},"Why should I use ",(0,r.kt)("inlineCode",{parentName:"h3"},"create-ima-app")," command?"),(0,r.kt)("p",null,"Developing IMA.js application is fairly easy, but the initial setup process can be quite tiresome.\nThis tool aims to streamline this process, save your time and provide you with buildable\napplication with opinionated defaults that can be easily customized to your needs."),(0,r.kt)("h2",{id:"application-structure"},"Application structure"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-ima-app my-app")," command will create following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-app\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 component\n\u2502   \u2502   \u2514\u2500\u2500 card\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 bind.js\n\u2502   \u2502   \u251c\u2500\u2500 routes.js\n\u2502   \u2502   \u251c\u2500\u2500 services.js\n\u2502   \u2502   \u2514\u2500\u2500 settings.js\n\u2502   \u251c\u2500\u2500 document\n\u2502   \u2502   \u2514\u2500\u2500 DocumentView.jsx\n\u2502   \u251c\u2500\u2500 less\n\u2502   \u2502   \u251c\u2500\u2500 global.less\n\u2502   \u2502   \u2514\u2500\u2500 app.less\n\u2502   \u251c\u2500\u2500 page\n\u2502   \u2502   \u251c\u2500\u2500 AbstractPageController.js\n\u2502   \u2502   \u251c\u2500\u2500 error\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u2514\u2500\u2500 notFound\n\u2502   \u251c\u2500\u2500 public\n\u2502   \u2502   \u251c\u2500\u2500 cards.json\n\u2502   \u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500\u2500 main.js\n\u2514\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u2514\u2500\u2500 environment.js\n\u2502   \u251c\u2500\u2500 template\n\u2502   \u2502   \u251c\u2500\u2500 400.ejs\n\u2502   \u2502   \u251c\u2500\u2500 500.ejs\n\u2502   \u2502   \u2514\u2500\u2500 spa.ejs\n\u2502   \u2514\u2500\u2500 app.js\n\u2502   \u2514\u2500\u2500 server.js\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 ima.config.js\n\u251c\u2500\u2500 jest.config.json\n\u251c\u2500\u2500 jest.setup.js\n\u251c\u2500\u2500 jsConfig.json\n\u251c\u2500\u2500 package-lock.json\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"So let's take a closer look at the ",(0,r.kt)("strong",{parentName:"p"},"contents of the application"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," - main application folder where all application source code is located.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component")," - our React components for use in the view. Components are\ncovered in ",(0,r.kt)("a",{parentName:"li",href:"/tutorial/adding-some-state"},"part 3 of our tutorial"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"environment.js")," - configuration files. For more information see\n",(0,r.kt)("a",{parentName:"li",href:"./configuration"},"Configuration")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"less")," - Less CSS files defining common rules, overrides, macros, mixins\nand the basic UI layout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page")," - controllers, main views and page-specific Less CSS files for pages\nin our application. Usage of these is configured via routing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - the page shown when the application encounters an error that\nprevents it from working properly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"home")," - the index (home) page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"notFound")," - the page shown when the user navigates to a page that is not\ndefined in our application."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public")," - files that are preprocessed and copied to ",(0,r.kt)("inlineCode",{parentName:"li"},"built/static/public/")," for our build application,\nusually as static resources.")))),(0,r.kt)("h2",{id:"production-use"},"Production use"),(0,r.kt)("p",null,"If you want to deploy your IMA.js application to production, the installation is\nsimilar to the dev environment. ",(0,r.kt)("strong",{parentName:"p"},"To install the IMA.js application"),", start by cloning your application git\nrepository on your production server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone [your-application-git-repository]\n")),(0,r.kt)("p",null,"Switch to the cloned directory and run the following commands to set-up your\napplication - same as in the development mode - and build it:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn build\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\npnpm run build\n")))),(0,r.kt)("p",null,"Now after building your IMA.js application your server is ready to run it. You can start your application using the following command:"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run start\n")))),(0,r.kt)("p",null,"Your application is now running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),"\n(unless configured otherwise)."))}h.isMDXComponent=!0}}]);