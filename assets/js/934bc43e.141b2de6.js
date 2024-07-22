"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3353],{8731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagram-controller-64b259a163b3fe8df2ec36327342a103.png"},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(5773),r=(a(7294),a(3905));const i={title:"Controller lifecycle",description:"Basic features > Controller lifecycle and it's API"},o=void 0,l={unversionedId:"basic-features/controller-lifecycle",id:"basic-features/controller-lifecycle",title:"Controller lifecycle",description:"Basic features > Controller lifecycle and it's API",source:"@site/../docs/basic-features/controller-lifecycle.md",sourceDirName:"basic-features",slug:"/basic-features/controller-lifecycle",permalink:"/basic-features/controller-lifecycle",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/controller-lifecycle.md",tags:[],version:"current",lastUpdatedBy:"crysadrak",lastUpdatedAt:1721644299,formattedLastUpdatedAt:"Jul 22, 2024",frontMatter:{title:"Controller lifecycle",description:"Basic features > Controller lifecycle and it's API"},sidebar:"docs",previous:{title:"Configuration options",permalink:"/introduction/configuration"},next:{title:"Views & Components",permalink:"/basic-features/views-and-components"}},s={},c=[{value:"<code>init()</code> <em>@server/client</em>",id:"init-serverclient",level:2},{value:"<code>load()</code> <em>@server/client</em>",id:"load-serverclient",level:2},{value:"<code>setMetaParams()</code> <em>@server/client</em>",id:"setmetaparams-serverclient",level:2},{value:"<code>activate()</code> <em>@client</em>",id:"activate-client",level:2},{value:"<code>update()</code> <em>@client</em>",id:"update-client",level:2},{value:"<code>deactivate()</code> <em>@client</em>",id:"deactivate-client",level:2},{value:"<code>destroy()</code> <em>@client</em>",id:"destroy-client",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"IMA.js ",(0,r.kt)("strong",{parentName:"p"},"AbstractController")," provides a few methods you can implement in order to catch various lifecycle events and react to them. Each method description has ",(0,r.kt)("em",{parentName:"p"},"@server")," or ",(0,r.kt)("em",{parentName:"p"},"@client"),"\xa0notation next to them symbolizing where the method is executed."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8731).Z,width:"881",height:"421"})),(0,r.kt)("h2",{id:"init-serverclient"},(0,r.kt)("inlineCode",{parentName:"h2"},"init()")," ",(0,r.kt)("em",{parentName:"h2"},"@server/client")),(0,r.kt)("p",null,"This is the first method that gets called in the lifecycle chain. Init method is substitution for native ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor()")," method. Route parameters are already set when this method is called."),(0,r.kt)("h2",{id:"load-serverclient"},(0,r.kt)("inlineCode",{parentName:"h2"},"load()")," ",(0,r.kt)("em",{parentName:"h2"},"@server/client")),(0,r.kt)("p",null,"Callback the controller uses to load all resources it needs to render a view."),(0,r.kt)("p",null,"The method must return a plain flat object that will be used to set the state of the controller. The field names of the object identify the resources being fetched and prepared, each value must be either the resource (e.g. view configuration or a value retrieved synchronously) or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," that will resolve to the resource."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"s are handled differently when rendering on the server side or the client side."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the ",(0,r.kt)("strong",{parentName:"p"},"server side"),", the IMA will wait for all the promises to resolve, then replace the promises with the resolved values and sets the resulting object as the controller's state. Even though promises are resolved in parallel it's a good practice to keep their number on minimum because their resolution is blocking sending the response to the client.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the ",(0,r.kt)("strong",{parentName:"p"},"client side"),", the IMA.js will first set the controller's state to\nan object containing only the fields of the returned object that were\n",(0,r.kt)("strong",{parentName:"p"},"not promises"),". IMA will then update the controller's state every time a\npromise of the returned object resolves."))),(0,r.kt)("p",null,"Any returned promise that gets ",(0,r.kt)("strong",{parentName:"p"},"rejected")," will redirect the application to\nthe error page. The error page that will be used depends on the status\ncode of the error."),(0,r.kt)("p",null,"Since ",(0,r.kt)("strong",{parentName:"p"},"v17")," you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," instead of promises. This means the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method will have ",(0,r.kt)("strong",{parentName:"p"},"async")," prefix and resources will be loaded synchronously using ",(0,r.kt)("strong",{parentName:"p"},"await")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async load() {\n  const user = await this._userService.getById(this.params.userId);\n  const comments = await this._commentService.list({ userId: user.id });\n\n  return {\n    user,\n    comments\n  };\n}\n")),(0,r.kt)("p",null,"This functionality has its pros and cons. Main contradiction would be synchronous loading and thus response time increase. A lot of requests can happen independently on each other and save some of the response time. In this case it's better to combine promises and ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," to achieve best performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async load() {\n  const userPromise = this._userService.getById(this.params.userId); // load parallel to article and comments\n  const article = await this._articleService.get(this.params.articleUrl);\n  let comments = [];\n\n  if (article.commentsCount && article.commentsAllowed) {\n    comments = await this._commentService.list({\xa0articleId: article.id });\n  }\n\n  return { article, comments, user: userPromise };\n}\n")),(0,r.kt)("p",null,"A benefit to using ",(0,r.kt)("strong",{parentName:"p"},"async/await")," is simplicity and better handling of data. Imagine you have a request that loads 2 resources and you want to add these resources to page state. When using promises this would be impossible as promises must return single value and we're returning the promise itself not the resolved value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async load() {\n  const checkoutData = await this._checkoutService.getByCookie();\n  const { items, payment, shipping } = checkoutData;\n\n  return {\n    cartItems: items,\n    paymentDetails: payment,\n    shippingDetail: shipping\n  };\n}\n")),(0,r.kt)("h2",{id:"setmetaparams-serverclient"},(0,r.kt)("inlineCode",{parentName:"h2"},"setMetaParams()")," ",(0,r.kt)("em",{parentName:"h2"},"@server/client")),(0,r.kt)("p",null,"Callback used to configure the meta attribute manager. The method is\ncalled after the the controller's state has been patched with the all\nloaded resources from the ",(0,r.kt)("a",{parentName:"p",href:"#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load()"))," method and the view has been rendered."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setMetaParams()")," method receives following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loadedResources")," - A plain object representing a map of resource names to resources loaded by the ",(0,r.kt)("a",{parentName:"li",href:"#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load()"))," method. This is the same object as the one passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"setState()")," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"metaManager")," - Meta attributes manager instance to configure (See ",(0,r.kt)("a",{parentName:"li",href:"./seo-and-meta-manager"},"SEO & MetaManager")," page)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"router")," - The current application router."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dictionary")," - The current localization dictionary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"settings")," - The application settings for the current application environment.")),(0,r.kt)("h2",{id:"activate-client"},(0,r.kt)("inlineCode",{parentName:"h2"},"activate()")," ",(0,r.kt)("em",{parentName:"h2"},"@client")),(0,r.kt)("p",null,"Callback for activating the controller when the ",(0,r.kt)("strong",{parentName:"p"},"route updated")," to one of those that are associated with the controller or the controller is ",(0,r.kt)("strong",{parentName:"p"},"revived")," at the client side."),(0,r.kt)("p",null,"This method is the last method invoked during controller initialization. ",(0,r.kt)("inlineCode",{parentName:"p"},"activate()")," is called after all the promises returned from the ",(0,r.kt)("a",{parentName:"p",href:"#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load()"))," method have been resolved and the controller has configured the meta manager."),(0,r.kt)("p",null,"When reviving the state from the ",(0,r.kt)("strong",{parentName:"p"},"server side"),"\xa0all promises are resolved and meta values set, therefore the controller state is fully complete."),(0,r.kt)("p",null,"This method is a good place to register any React and DOM event listeners. The controller may start receiving event bus event after this method completes."),(0,r.kt)("h2",{id:"update-client"},(0,r.kt)("inlineCode",{parentName:"h2"},"update()")," ",(0,r.kt)("em",{parentName:"h2"},"@client")),(0,r.kt)("p",null,"Callback for updating the controller after a route update. This method\nis invoked if the current ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#onlyupdate"},"route has the ",(0,r.kt)("inlineCode",{parentName:"a"},"onlyUpdate = true")," flag set")," and the current controller and view match those used by the previously active route, or, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyUpdate")," option of the current route is a callback and returned ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"The method must return an object with the same semantics as the result\nof the ",(0,r.kt)("a",{parentName:"p",href:"#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load()"))," method. The controller's state will only be\npatched by the returned object instead of replacing it completely."),(0,r.kt)("p",null,"The other controller lifecycle callbacks (",(0,r.kt)("a",{parentName:"p",href:"#init--serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"init()")),", ",(0,r.kt)("a",{parentName:"p",href:"#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load()")),", ",(0,r.kt)("a",{parentName:"p",href:"#activate--client"},(0,r.kt)("inlineCode",{parentName:"a"},"activate()")),", ",(0,r.kt)("a",{parentName:"p",href:"#deactivate--client"},(0,r.kt)("inlineCode",{parentName:"a"},"deactivate()")),", ",(0,r.kt)("a",{parentName:"p",href:"#destroy--client"},(0,r.kt)("inlineCode",{parentName:"a"},"destroy()")),") are not call in case this method is used."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update()")," method receives argument ",(0,r.kt)("strong",{parentName:"p"},"prevParams"),"; an object containing previous route parameters."),(0,r.kt)("h2",{id:"deactivate-client"},(0,r.kt)("inlineCode",{parentName:"h2"},"deactivate()")," ",(0,r.kt)("em",{parentName:"h2"},"@client")),(0,r.kt)("p",null,"Callback for deactivating the controller. This is the first\nmethod invoked during controller deinitialization. This usually happens\nwhen the user navigates to a different URL."),(0,r.kt)("p",null,"This method is the lifecycle counterpart of the ",(0,r.kt)("a",{parentName:"p",href:"#activate--client"},(0,r.kt)("inlineCode",{parentName:"a"},"activate()"))," method. When the ",(0,r.kt)("a",{parentName:"p",href:"#activate--client"},(0,r.kt)("inlineCode",{parentName:"a"},"activate()"))," method has not been called ",(0,r.kt)("inlineCode",{parentName:"p"},"deactivate()")," won't be called either."),(0,r.kt)("p",null,"The controller should deregister listeners and release all\nresources obtained in the ",(0,r.kt)("a",{parentName:"p",href:"#activate--client"},(0,r.kt)("inlineCode",{parentName:"a"},"activate()"))," method."),(0,r.kt)("h2",{id:"destroy-client"},(0,r.kt)("inlineCode",{parentName:"h2"},"destroy()")," ",(0,r.kt)("em",{parentName:"h2"},"@client")),(0,r.kt)("p",null,"Finalization callback, called when the controller is being discarded by the application. This usually happens when the user navigates to a different URL."),(0,r.kt)("p",null,"This method is the lifecycle counterpart of the ",(0,r.kt)("a",{parentName:"p",href:"#init--serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"init()"))," method."),(0,r.kt)("p",null,"The controller should release all resources obtained in the ",(0,r.kt)("a",{parentName:"p",href:"#init--serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"init()"))," method. The controller must release any resources that might not be released automatically when the controller's instance\nis destroyed by the garbage collector."))}m.isMDXComponent=!0}}]);