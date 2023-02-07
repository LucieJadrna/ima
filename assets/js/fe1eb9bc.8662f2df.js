"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=t(5773),a=(t(7294),t(3905));const r={title:"Configuration options",description:"Introduction > IMA.js application configuration options"},o=void 0,p={unversionedId:"introduction/configuration",id:"introduction/configuration",title:"Configuration options",description:"Introduction > IMA.js application configuration options",source:"@site/../docs/introduction/configuration.md",sourceDirName:"introduction",slug:"/introduction/configuration",permalink:"/introduction/configuration",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/introduction/configuration.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1675795058,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{title:"Configuration options",description:"Introduction > IMA.js application configuration options"},sidebar:"docs",previous:{title:"Getting Started with IMA.js",permalink:"/introduction/getting-started"},next:{title:"Controller lifecycle",permalink:"/basic-features/controller-lifecycle"}},l={},s=[{value:"Build and environment configuration",id:"build-and-environment-configuration",level:2},{value:"Application configuration",id:"application-configuration",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"IMA.js offers many ways to configure and customize your application to your needs.\nHere's a list describing all possible configuration files and what they do."),(0,a.kt)("h2",{id:"build-and-environment-configuration"},"Build and environment configuration"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Environment configuration is resolved on server and passed to the client settings under ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," param.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gulpConfig.js")," contains configuration for the gulp tasks we use to build and\nrun your application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/main.js")," is the bootstrap of your application. You don't need to concern\nyourself with this file usually.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/build.js")," specifies which JavaScript, JSX, Less CSS and language files\nyour application consists of and should be included in your built\napplication."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let js = ['./app/!(assets|gulp)/**/!(*Spec).{js,jsx}'];\n\nlet less = [\n  './app/assets/less/**/*.less',\n  './app/component/**/*.less',\n  './app/page/**/*.less'\n];\n\nlet languages = {\n  en: ['./app/**/*EN.json']\n};\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Files can be specified by a filename expansion as you can see\nabove.")),(0,a.kt)("p",{parentName:"li"},"The file also specifies the 3rd party vendor libraries to link as ES2015\nmodules in your application, separated into three groups: common (shared),\nserver-side and client-side."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let vendors = {\n  common: ['ima'],\n\n  server: [],\n\n  client: []\n};\n")),(0,a.kt)("p",{parentName:"li"},"Last thing configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/build.js")," file is a list of compiled\nJavaScript and CSS files that should be specified in the main html markup."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let bundle = {\n  js: ['...'],\n  es: ['...'],\n  css: ['...']\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/environment.js")," configures the server-side environment. Note that the\n",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," environment configuration automatically inherits values from\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," environment (except for the ",(0,a.kt)("inlineCode",{parentName:"p"},"$Language")," which has to be configured\nindividually). This configuration is well described in the comments so see\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/master/packages/create-ima-app/examples/hello/environment.js"},"the file"),"\nfor full reference."))),(0,a.kt)("h2",{id:"application-configuration"},"Application configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/config/services.js")," by default this file specifies how the fatal\napplication errors should be handled at the client side. Also provides a way\nto configure other application-wide settings or 3rd party libraries\n(analytics, etc.).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/config/routes.js")," configures your router, mapping routes to the\ncontrollers and views in your application. For more information see the\n",(0,a.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction"},"Routing")," page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app/config/settings.js")," configures your application and IMA.js services. You\ncan freely extend the configuration as you like except for the properties\nprefixed by dollar sign ",(0,a.kt)("inlineCode",{parentName:"p"},"$"),".\nNote that, again, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," environment configuration\nautomatically inherits values from the ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"and finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/config/bind.js")," configures the\n",(0,a.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object container"),"."))),(0,a.kt)("p",null,"All of these files are necessary and must remain in their locations."))}d.isMDXComponent=!0}}]);