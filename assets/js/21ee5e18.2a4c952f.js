"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5371],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(5773),i=(t(7294),t(3905));const a={title:"Object Container",description:"Basic features > Object Container and IMA.js dependency injection"},o=void 0,s={unversionedId:"basic-features/object-container",id:"basic-features/object-container",title:"Object Container",description:"Basic features > Object Container and IMA.js dependency injection",source:"@site/../docs/basic-features/object-container.md",sourceDirName:"basic-features",slug:"/basic-features/object-container",permalink:"/basic-features/object-container",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/object-container.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1674737347,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"Object Container",description:"Basic features > Object Container and IMA.js dependency injection"},sidebar:"docs",previous:{title:"Extensions",permalink:"/basic-features/extensions"},next:{title:"Rendering process",permalink:"/basic-features/rendering-process"}},c={},p=[{value:"Automatic registration with Object Container",id:"automatic-registration-with-object-container",level:2},{value:"Manually registering dependencies",id:"manually-registering-dependencies",level:2},{value:"1. <code>bind()</code>",id:"1-bind",level:3},{value:"2. <code>constant()</code>",id:"2-constant",level:3},{value:"3. <code>inject()</code>",id:"3-inject",level:3},{value:"4. <code>provide()</code>",id:"4-provide",level:3},{value:"Obtaining dependencies",id:"obtaining-dependencies",level:2},{value:"1. Dependency Injection",id:"1-dependency-injection",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:4},{value:"Spread dependencies",id:"spread-dependencies",level:4},{value:"2. <code>get()</code>",id:"2-get",level:3},{value:"3. <code>create()</code>",id:"3-create",level:3},{value:"Other methods",id:"other-methods",level:2}],l={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Object Container (OC)")," is an enhanced dependency injector with support for aliases and constants. It is sophisticated and registers everything it comes across but only if it actually matters."),(0,i.kt)("p",null,"By registering controllers and views the OC can simply follow your dependency tree and register everything you might possibly need. Below is a diagram of simple dependency tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"app/config/routes.js\n\u251c\u2500 OrderController\n|   \u251c\u2500 OrderService / OrderEntity\n|   |   \u2514\u2500 RestClient\n|   |     \u251c\u2500 $HttpAgent\n|   |     \u251c\u2500 $Cache\n|   |     \u2514\u2500 LinkGenerator\n|   |       \u2514\u2500 $Router\n|   \u2514\u2500 UserService / UserEntity\n|     \u2514\u2500 RestClient\n|       \u251c\u2500 $HttpAgent\n|       \u251c\u2500 $Cache\n|       \u2514\u2500 LinkGenerator\n|         \u2514\u2500 $Router\n\u2514\u2500 UserController\n  \u251c\u2500 ...\n  \u2514\u2500 ...\n")),(0,i.kt)("h2",{id:"automatic-registration-with-object-container"},"Automatic registration with Object Container"),(0,i.kt)("p",null,"Every class that defines static property ",(0,i.kt)("inlineCode",{parentName:"p"},"$dependencies")," which exports array of dependencies is automatically registered to ",(0,i.kt)("inlineCode",{parentName:"p"},"oc")," and instanced when it is used (this can happen lazily upon first usage)."),(0,i.kt)("h2",{id:"manually-registering-dependencies"},"Manually registering dependencies"),(0,i.kt)("p",null,"Since the OC cannot discover everything and doesn't know about interfaces you can register your dependencies in a file ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/bind.js"),".\nThis file contains a function that receives the namespace register\n",(0,i.kt)("em",{parentName:"p"},"(deprecated)"),", OC instance and a config object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\nexport let init = (ns, oc, config) => {\n  // Register stuff here\n}\n")),(0,i.kt)("p",null,"OC handles ",(0,i.kt)("em",{parentName:"p"},"instances")," of registered dependencies. When registering a class, be aware that its static methods and properties won't be available through OC."),(0,i.kt)("p",null,"Below is list of methods that the OC provides to register your dependencies."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Every method returns the OC itself so you can chain them together.")),(0,i.kt)("h3",{id:"1-bind"},"1. ",(0,i.kt)("inlineCode",{parentName:"h3"},"bind()")),(0,i.kt)("p",null,"Binds the specified class or factory function and dependencies to the\nspecified alias.\nThis allows to create new instances of the class or the\nfunction by referencing the alias. Same goes for specifying the class of\nthe function as a dependency."),(0,i.kt)("p",null,"Also note that the same class or function may be bound to several\naliases and each may use different dependencies."),(0,i.kt)("p",null,"The alias will use the current dependencies bound to the class if no\ndependencies are provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\n//\n// Binding custom router implementation and\n// UserAgent class from IMA.js user-agent plugin\n\nimport { UserAgent } from '@ima/plugin-useragent';\nimport { CustomRouter } from 'app/your-custom-overrides/Router';\n\nexport let init = (ns, oc, config) => {\n  // Simple alias\n  oc.bind('UserAgent', UserAgent);\n\n  // Alias with dependencies\n  // Override of the IMA.js router implementation\n  oc.bind('$Router', CustomRouter, [\n      '$PageManager', '$RouteFactory', '$Dispatcher', Window\n  ]);\n\n  // ...\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The dollar-sign ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," at the beginning of an alias marks IMA.js\ninternal component.")),(0,i.kt)("h3",{id:"2-constant"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"constant()")),(0,i.kt)("p",null,"Defines a new constant registered within the OC. Note that\nthis is the only way of passing ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," values to constructors\nbecause the OC treats strings as class, interface, alias\nor constant names. Once the constant is defined it cannot be redefined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\n//\n// Assigning API root URL to a constant that can be later used as a dependency\n// (for example in IMA.js RestAPI client)\n\nexport let init = (ns, oc, config) => {\n  oc.constant('REST_API_ROOT_URL', config.api.url);\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\xa0Constants are not limited to primitive values but can also\ntake objects.")),(0,i.kt)("h3",{id:"3-inject"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"inject()")),(0,i.kt)("p",null,"Configures the object loader with the specified default dependencies for\nthe specified class."),(0,i.kt)("p",null,"New instances of the class created by the OC will receive the provided\ndependencies into constructor unless custom dependencies are provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\n//\n// Injecting the rest client.\n// Notice how we used the REST_API_ROOT_URL constant\n\nimport Cache from 'ima/cache/Cache';\nimport HttpAgent from 'ima/http/HttpAgent';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\nimport LinkGenerator from 'app/rest-client-impl/LinkGenerator';\n\nexport let init = (ns, oc, config) => {\n  oc.inject(SimpleRestClient, [\n    HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n  ]);\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," For more information about the IMA.js REST Client see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jurca/IMA-plugin-rest-client"},"IMA-plugin-rest-client")," repository.")),(0,i.kt)("h3",{id:"4-provide"},"4. ",(0,i.kt)("inlineCode",{parentName:"h3"},"provide()")),(0,i.kt)("p",null,"Configures the default implementation of the specified interface.\nWhen the interface is requested from the OC the default implementation\nis provided."),(0,i.kt)("p",null,"The implementation constructor will obtain the provided default\ndependencies or the dependencies provided to the ",(0,i.kt)("a",{parentName:"p",href:"#3-create"},(0,i.kt)("inlineCode",{parentName:"a"},"create()"))," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\n//\n//\n\nimport { AbstractRestClient } from 'ima-plugin-rest-client';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\n\nexport let init = (ns, oc, config) => {\n  oc.provide(AbstractRestClient, SimpleRestClient);\n\n  // We didn't specify any dependencies on purpose\n  // they were set in the previous example.\n  // Otherwise it would be like this:\n\n  oc.provide(\n    AbstractRestClient,\n    SimpleRestClient,\n    [\n      HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n    ]\n  );\n}\n")),(0,i.kt)("h2",{id:"obtaining-dependencies"},"Obtaining dependencies"),(0,i.kt)("p",null,"In IMA.js application you can obtain dependencies using many different methods, where each one can be useful in different situation and environment."),(0,i.kt)("h3",{id:"1-dependency-injection"},"1. Dependency Injection"),(0,i.kt)("p",null,"Apart from defining dependencies manually in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/bind.js")," can every class (discovered by the OC) define a static getter ",(0,i.kt)("inlineCode",{parentName:"p"},"$dependencies"),". This getter should return list of dependencies specified by a class constructor or a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," alias."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/order/OrderController.js\n//\n// OrderController is discovered by the OC\n// because it's registered in app/config/routes.js\n\nimport { AbstractController } from '@ima/core';\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return [\n      OrderService,\n      UserService,\n      '$Router'\n    ];\n  }\n\n  // ...\n")),(0,i.kt)("p",null,"Once you've defined the dependencies the constructor of the class will receive their instances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"  constructor(orderService, userService, $router) {\n    super();\n\n    this._orderService = orderService;\n    this._userService = userService;\n    this._$router = $router;\n  }\n\n  // ...\n\n")),(0,i.kt)("h4",{id:"optional-dependencies"},"Optional dependencies"),(0,i.kt)("p",null,"Dependencies can also be defined as optional.\nIf those dependencies are present in the OC, the constructor of the class will receive their instances.\nOtherwise it will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,"To use optional dependency, prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," is added before the string alias or the dependency is wrapped in array, with option specifying if it's optional or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/order/OrderController.js\n//\n// OrderController using optional dependencies\n\nimport { AbstractController } from '@ima/core';\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return [\n      [OrderService, { optional: true }],\n      [UserService, { optional: false }],\n      '?$Settings.api.serverApiUrl'\n    ];\n  }\n\n  // ...\n")),(0,i.kt)("h4",{id:"spread-dependencies"},"Spread dependencies"),(0,i.kt)("p",null,"Dependencies can be added to array registered in the OC. These dependencies can be then spread to the class constructor using spread operator ",(0,i.kt)("inlineCode",{parentName:"p"},"..."),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\n//\n// Creating array of dependencies\n\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport let init = (ns, oc, config) => {\n  oc.constant('$spreadDependencies', [OrderService, UserService]);\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/order/OrderController.js\n//\n// OrderController using spread dependencies\n\nimport { AbstractController } from '@ima/core';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return ['...$spreadDependencies'];\n  }\n\n  constructor(orderService, userService) {\n    super();\n\n    this._orderService = orderService;\n    this._userService = userService;\n  }\n\n  // ...\n")),(0,i.kt)("p",null,"Spread and optional dependencies can be combined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\nstatic get $dependencies() {\n  return ['...?$spreadDependencies'];\n}\n// ...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\nstatic get $dependencies() {\n  return [['...$spreadDependencies', { optional: true }]];\n}\n// ...\n")),(0,i.kt)("h3",{id:"2-get"},"2. ",(0,i.kt)("inlineCode",{parentName:"h3"},"get()")),(0,i.kt)("p",null,"Retrieves the ",(0,i.kt)("strong",{parentName:"p"},"shared instance")," or value of the specified constant, alias,\nclass or factory function, interface, or fully qualified namespace path\n(the method checks these in this order in case of a name clash)."),(0,i.kt)("p",null,"The instance or value is created lazily the first time it is requested."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"oc.get('REST_API_ROOT_URL');\noc.get('UserAgent');\noc.get(AbstractRestClient); // This returns instance of `SimpleRestClient` as we defined in the previous example\n")),(0,i.kt)("h3",{id:"3-create"},"3. ",(0,i.kt)("inlineCode",{parentName:"h3"},"create()")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("strong",{parentName:"p"},"new instance")," of the class or retrieves the value generated by\nthe factory function identified by the provided name, class, interface,\nor factory function, passing in the provided dependencies."),(0,i.kt)("p",null,"The method uses the dependencies specified when the class, interface or\nfactory function has been registered with the object container if no\ncustom dependencies are provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Cache, HttpAgent } from '@ima/core';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\nimport LinkGenerator from 'app/rest-client-impl/LinkGenerator';\n\noc.create('UserAgent');\noc.create(\n  SimpleRestClient,\n  [\n    HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n  ]\n);\n")),(0,i.kt)("p",null,"The last two method are not used as much as the first one but can be\nuseful inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/bind.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"app/config/routes.js")),(0,i.kt)("h2",{id:"other-methods"},"Other methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"has()")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the specified object, class or resource is registered\nwithin the OC.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"if (oc.has('UserAgent') && oc.get('UserAgent').isMobile()) {\n  // Register conditional stuff here...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getConstructorOf()")," returns the class constructor function of the specified class or alias.")))}d.isMDXComponent=!0}}]);