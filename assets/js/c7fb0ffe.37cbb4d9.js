"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8055],{9357:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/diagram-extensions-18900886a7c88b68d3d538a161a0170e.png"},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5773),r=(t(7294),t(3905));const s={title:"Extensions",description:"Basic features > Extensions as a companion to Controllers"},a=void 0,l={unversionedId:"basic-features/extensions",id:"basic-features/extensions",title:"Extensions",description:"Basic features > Extensions as a companion to Controllers",source:"@site/../docs/basic-features/extensions.md",sourceDirName:"basic-features",slug:"/basic-features/extensions",permalink:"/basic-features/extensions",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/extensions.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1719421347,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{title:"Extensions",description:"Basic features > Extensions as a companion to Controllers"},sidebar:"docs",previous:{title:"Async Routing",permalink:"/basic-features/routing/async-routing"},next:{title:"Object Container",permalink:"/basic-features/object-container"}},i={},c=[{value:"Why use extensions",id:"why-use-extensions",level:2},{value:"How to use extensions",id:"how-to-use-extensions",level:2},{value:"Passing partial state from controllers",id:"passing-partial-state-from-controllers",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(d,(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extensions provide means of extending the page controllers with additional\nmanaged state and logic."),(0,r.kt)("p",null,"An extension has access to the current route\nparameters, can specify the resources to load when the page is loading or\nbeing updated, may intercept event bus events and modify the state of the\npage just like an ordinary controller, except that the modifications are\nrestricted to the state fields which the extension explicitly specifies\nusing its ",(0,r.kt)("inlineCode",{parentName:"p"},"getAllowedStateKeys()")," method."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9357).Z,width:"881",height:"421"})),(0,r.kt)("h2",{id:"why-use-extensions"},"Why use extensions"),(0,r.kt)("p",null,"Best case to use extension is a component that\nrequires interception of controller lifecycle events and/or loading external\ndata."),(0,r.kt)("p",null,"Putting the component's logic inside the controller would be unwise for 3\nreasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Controller would contain code that is not as clear. For newcomers to\nyour project it'd seem strange why you're mixing e.g. ",(0,r.kt)("strong",{parentName:"li"},"HomeController"),"\nlogic with ",(0,r.kt)("strong",{parentName:"li"},"GalleryComponent")," logic."),(0,r.kt)("li",{parentName:"ol"},"Component file and its extension file should be kept together because nothing is\nbigger pain than searching for related code in the whole project structure."),(0,r.kt)("li",{parentName:"ol"},"Component can be used in multiple Views. That means you'd have to\ncopy &\xa0paste the same logic to multiple controllers.")),(0,r.kt)("h2",{id:"how-to-use-extensions"},"How to use extensions"),(0,r.kt)("p",null,"As mentioned above, the extension file should be next to a file of the component\nit's extending. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app/\n  \u251c\u2500 ...\n  \u251c\u2500 component\n  |   \u251c\u2500 ...\n  |   \u2514\u2500 gallery\n  |   |   \u251c\u2500 Gallery.jsx\n  |   |   \u251c\u2500 gallery.less\n  |   |   \u2514\u2500 GalleryExtension.js\n  |   \u2514\u2500 ...\n  \u2514\u2500 ...\n")),(0,r.kt)("p",null,"In the extension file should be plain ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," extending\n",(0,r.kt)("inlineCode",{parentName:"p"},"ima/extension/AbstractExtension")," with the same methods as you'd use in the controller. In addition you should implement ",(0,r.kt)("inlineCode",{parentName:"p"},"getAllowedStateKeys()")," method which returns array of keys the extension is allowed to change in controller's state."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," List and description of controller methods can be seen in ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle"},"Controller lifecycle"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/gallery/GalleryExtension.js\nimport { AbstractExtension } from '@ima/core';\n\nexport default class GalleryExtension extends AbstractExtension {\n  static get $dependencies() {\n    return [];\n  }\n\n  load() {\n    // Where the magic happens...\n  }\n}\n")),(0,r.kt)("p",null,"All extensions to be used on a page must be added to the current controller\nvia ",(0,r.kt)("inlineCode",{parentName:"p"},"$extensions")," getter. After that, the extensions will go\nthrough the same lifecycle as the controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController } from '@ima/core';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default class PostController extends AbstractController {\n  static get $dependencies() {\n    return [];\n  }\n\n  static get $extensions() {\n    return [GalleryExtension];\n  }\n\n  constructor() {\n    //If needed, extension instance can be retrieved using getExtension();\n    this._galleryExtension = this.getExtension(GalleryExtension);\n  }\n\n  ...\n}\n")),(0,r.kt)("p",null,"Extensions can be also defined within routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//routes.js\n\nimport PostController from 'app/page/post/PostController';\nimport PostView from 'app/page/post/PostView';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default (ns, oc, routesConfig, router) =>\n  router\n    .add('home', '/', PostController, PostView, {\n      extensions: [GalleryExtension],\n    });\n\n")),(0,r.kt)("p",null,"Extensions can be defined in global array of extensions.\nThis array can be registered in the OC as constant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\n//bind.js\nimport Extension1 from 'app/component/gallery/GalleryExtension';\nimport Extension2 from 'app/component/gallery/GalleryExtension2';\n...\nexport default (ns, oc, config) => {\n  oc.constant('$galleryExtensions', [Extension, Extension2]);\n}\n\n//PostController.js\nimport { AbstractController } from '@ima/core';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default class PostController extends AbstractController {\n\n  ...\n\n  static get $extensions() {\n    return ['...$galleryExtensions'];\n  }\n\n  ...\n}\n\n//Or in routes.js\n...\nrouter\n    .add('home', '/', PostController, PostView, {\n      extensions: ['...$galleryExtensions'],\n    });\n...\n")),(0,r.kt)("p",null,"Or just exported array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\n//GalleryExtensions.js\nimport Extension1 from 'app/component/gallery/GalleryExtension';\nimport Extension2 from 'app/component/gallery/GalleryExtension2';\n\nexport const GalleryExtensions = [Extension, Extension2];\n\n\n//PostController.js\nimport { AbstractController } from '@ima/core';\nimport { GalleryExtensions } from 'app/component/gallery/GalleryExtensions';\n\nexport default class PostController extends AbstractController {\n\n  ...\n\n  static get $extensions() {\n    return [...GalleryExtensions];\n  }\n\n  ...\n}\n")),(0,r.kt)("h2",{id:"passing-partial-state-from-controllers"},"Passing partial state from controllers"),(0,r.kt)("p",null,"During any lifecycle phase of the page the controller's lifecycle method is called first and then the same method is called on every extension registered in the controller. Order of the extensions is crucial and the same as in which the extensions were registered."),(0,r.kt)("p",null,"Since ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/IMA.js-core/releases/tag/0.16.0"},"v16")," you can access the state loaded in controller and preceding extensions (hence the cruciality of extensions order). Bear in mind that the accessed state may contain unresolved promises that need to be treated differently."),(0,r.kt)("p",null,"Addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," functionality in ",(0,r.kt)("strong",{parentName:"p"},"v17")," can lead to dramatic performance drop if not used well. Keep in mind that every ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," in Controller's or Extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method will delay execution of next ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method until the asynchronous operation finishes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/gallery/GalleryExtension.js\n\nload() {\n  const {\n    user: userPromise, // needs to be chained with .then()\n    userGroupName,\n  } = this.getState();\n\n  const galleryPromise = userPromise.then(user => {\n    // Calling this.getState() here would still give us unresolved promises.\n    return this._galleryService.loadByUserName(user.name);\n  });\n\n  return {\n    gallery: galleryPromise\n  };\n}\n")))}u.isMDXComponent=!0}}]);