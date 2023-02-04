"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1683:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(8944);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4518:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(5773),r=a(7294),i=a(8944),o=a(2389),l=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:d,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,l.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.U)(),[N,w]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,a=j.indexOf(t),n=g[a].value;n!==N&&(T(t),w(n),null!=d&&v(d,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]??j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]??j[j.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:C,onClick:I},o,{className:(0,i.Z)("tabs__item",m,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},2648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(5773),r=(a(7294),a(3905)),i=a(4518),o=a(1683);const l={title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},s=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js",source:"@site/../docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/introduction/getting-started",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/introduction/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1675546308,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"Getting Started with IMA.js",description:"Introduction > Resources to get started learning and using IMA.js"},sidebar:"docs",next:{title:"Configuration options",permalink:"/introduction/configuration"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Available commands",id:"available-commands",level:3},{value:"Why should I use <code>create-ima-app</code> command?",id:"why-should-i-use-create-ima-app-command",level:3},{value:"Application structure",id:"application-structure",level:2},{value:"Production use",id:"production-use",level:2},{value:"Building for SPA deployment",id:"building-for-spa-deployment",level:3}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"IMA.js")," is an application development stack for developing isomorphic applications written in pure JavaScript and React.\nIt helps you develop fully isomorphic JavaScript applications that behave consistently in many different environments with ease\nusing the provided tools and several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-plugins"},"plugins")," we already have available."),(0,r.kt)("p",null,"IMA.js development stack consists of many different components. Here's a summary of few of the main ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"React")," for UI, which you should ",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"learn before")," you dive head-first into IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://expressjs.com/"},"Express.js")," as the web server, but you don't need to know express to use IMA.js."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rollupjs.org/"},"Rollup")," and ",(0,r.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp")," with various other tools which are used for building the application."),(0,r.kt)("li",{parentName:"ul"},"And various little utilities you don't need to concern yourself with :).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IMA.js is divided into the ",(0,r.kt)("strong",{parentName:"p"},"core library"),", which you'll use to build your\napplication, and the ",(0,r.kt)("strong",{parentName:"p"},"application server")," build on top of Express.js, that brings\nyour application to life.")),(0,r.kt)("p",null,"You can find the core and server library along with many other IMA.js related packages in our monorepo at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima"},"https://github.com/seznam/ima"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install and run your new IMA.js application, you can use our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"create-ima-app"))," npm package.\nStart by running following command:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-ima-app my-app\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/npx"},"npx")," comes with npm 5.2+ and higher, ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/facebook/create-react-app#creating-an-app"},"see instructions for older npm versions"),")"))),(0,r.kt)("p",null,"This will bootstrap your new application and install all dependencies. The provided wizard will\nalso let you choose the template you wish to start with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"empty")," - Hello World [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/hello"},"Source code"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feed")," - TODO List [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/feed"},"Source code"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"todos")," - Twitter-Like Feed [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seznam/ima/tree/master/packages/create-ima-app/examples/todos"},"Source code"),"]")),(0,r.kt)("p",null,"After the installation succeeds, run following commands to start your application:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nnpm run dev\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\nyarn dev\n")))),(0,r.kt)("p",null,"Before going ahead, now that your application is running, you can either continue reading this documentation,\nwhich describes many different parts of IMA.js in detail, take a direct look at the\n",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Bootstrap"},"API")," or ",(0,r.kt)("a",{parentName:"p",href:"/tutorial/introduction"},(0,r.kt)("strong",{parentName:"a"},"start with our tutorial")),"."),(0,r.kt)("h3",{id:"available-commands"},"Available commands"),(0,r.kt)("p",null,"Once you've initialized your new IMA.js project, following commands become available to you through npm."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," - Starts development server in ES6 mode on ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),". This will also start gulp tasks in watch mode, so any changes you make to the source code are automatically re-builded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev --legacy-compat-mode")," - Starts development server in legacy mode for older browsers, where the code is transpiled to ES5 (IE11)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run test")," - Starts jest test runners."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," - Runs eslint on your application source files. We've prepared pre-configured .eslintrc.js file which follows our IMA.js coding styles, but feel free to adjust this to your needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," - Builds your application. For more information ",(0,r.kt)("em",{parentName:"li"},"(see ",(0,r.kt)("a",{parentName:"em",href:"#production-use"},"Production use"),")"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build:spa")," - Builds SPA version of your application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")," - Starts IMA.js server.")),(0,r.kt)("h3",{id:"why-should-i-use-create-ima-app-command"},"Why should I use ",(0,r.kt)("inlineCode",{parentName:"h3"},"create-ima-app")," command?"),(0,r.kt)("p",null,"Developing IMA.js application is fairly easy, but the initial setup process can be quite tiresome.\nThis tool aims to streamline this process, save your time and provide you with buildable\napplication with opinionated defaults that can be easily customized to your needs."),(0,r.kt)("h2",{id:"application-structure"},"Application structure"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-ima-app my-app")," command will create following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-app\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 less\n\u2502   \u2502   \u2514\u2500\u2500 static\n\u2502   \u251c\u2500\u2500 build.js\n\u2502   \u251c\u2500\u2500 component\n\u2502   \u2502   \u2514\u2500\u2500 document\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u251c\u2500\u2500 bind.js\n\u2502   \u2502   \u251c\u2500\u2500 routes.js\n\u2502   \u2502   \u251c\u2500\u2500 services.js\n\u2502   \u2502   \u2514\u2500\u2500 settings.js\n\u2502   \u251c\u2500\u2500 environment.js\n\u2502   \u251c\u2500\u2500 main.js\n\u2502   \u2514\u2500\u2500 page\n\u2502       \u251c\u2500\u2500 AbstractPageController.js\n\u2502       \u251c\u2500\u2500 error\n\u2502       \u251c\u2500\u2500 home\n\u2502       \u2514\u2500\u2500 notFound\n\u251c\u2500\u2500 gulpConfig.js\n\u251c\u2500\u2500 gulpfile.js\n\u251c\u2500\u2500 jest.config.json\n\u251c\u2500\u2500 jest.setup.js\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 server\n    \u2514\u2500\u2500 server.js\n")),(0,r.kt)("p",null,"So let's take a closer look at the ",(0,r.kt)("strong",{parentName:"p"},"contents of the application"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," - main application folder where all the source code is located.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assets")," - files that are preprocessed and copied to our built application,\nusually as static resources.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"less")," - Less CSS files defining common rules, overrides, macros, mixins\nand the basic UI layout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")," - any files that do not need preprocessing (3rd party JS files,\nimages, ...).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"html")," - this folder contains ",(0,r.kt)("strong",{parentName:"li"},"two main files"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spa.html")," - this is a template for SPA applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error.html")," - an error page showed in production."))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"component")," - our React components for use in the view. Components are\ncovered in ",(0,r.kt)("a",{parentName:"li",href:"/tutorial/adding-some-state"},"part 3 of our tutorial"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"environment.js")," - configuration files. For more information see\n",(0,r.kt)("a",{parentName:"li",href:"./configuration"},"Configuration")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page")," - controllers, main views and page-specific Less CSS files for pages\nin our application. Usage of these is configured via routing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - the page shown when the application encounters an error that\nprevents it from working properly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"home")," - the index (home) page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"notFound")," - the page shown when the user navigates to a page that is not\ndefined in our application.")))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directories are ",(0,r.kt)("strong",{parentName:"p"},"expected")," by the IMA.js\napplication stack, the remaining directories can be renamed or moved and you\nare free to organize your files in any way you like (but you will have to\nupdate the configuration accordingly)."),(0,r.kt)("h2",{id:"production-use"},"Production use"),(0,r.kt)("p",null,"If you want to deploy your IMA.js application to production, the installation is\nsimilar to the dev environment. ",(0,r.kt)("strong",{parentName:"p"},"To install the IMA.js application"),", start by cloning your application git\nrepository on your production server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone [your-application-git-repository]\n")),(0,r.kt)("p",null,"Switch to the cloned directory and run the following commands to set-up your\napplication - same as in the development mode - and build it:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\nyarn build\n")))),(0,r.kt)("p",null,"Now after building your IMA.js application your server is ready to run it. You can start your application using the following command:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")))),(0,r.kt)("p",null,"Your application is now running at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3001/")),"\n(unless configured otherwise)."),(0,r.kt)("h3",{id:"building-for-spa-deployment"},"Building for SPA deployment"),(0,r.kt)("p",null,"It is also possible to deploy your IMA.js application as an SPA (single-page\napplication). To do that, run the following command to build your application:"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:spa\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build:spa\n")))),(0,r.kt)("p",null,"Your built application will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory, ready to deploy\nto a HTTP server."))}d.isMDXComponent=!0}}]);