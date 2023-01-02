"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,m=c["".concat(p,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(5773),r=(n(7294),n(3905));const i={title:"Events",description:"Basic features > EventBus and Dispatcher"},o=void 0,s={unversionedId:"basic-features/events",id:"basic-features/events",title:"Events",description:"Basic features > EventBus and Dispatcher",source:"@site/../docs/basic-features/events.md",sourceDirName:"basic-features",slug:"/basic-features/events",permalink:"/basic-features/events",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/events.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1672662377,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Events",description:"Basic features > EventBus and Dispatcher"},sidebar:"docs",previous:{title:"Page Manager",permalink:"/basic-features/page-manager"},next:{title:"Page State",permalink:"/basic-features/page-state"}},p={},l=[{value:"EventBus",id:"eventbus",level:2},{value:"Firing EventBus events",id:"firing-eventbus-events",level:3},{value:"Listening to EventBus events",id:"listening-to-eventbus-events",level:3},{value:"Dispatcher",id:"dispatcher",level:2},{value:"Firing and listening to Dispatcher events",id:"firing-and-listening-to-dispatcher-events",level:3},{value:"Built-in events",id:"built-in-events",level:2},{value:"RouterEvents.<code>BEFORE_HANDLE_ROUTE</code>",id:"routereventsbefore_handle_route",level:3},{value:"RouterEvents.<code>AFTER_HANDLE_ROUTE</code>",id:"routereventsafter_handle_route",level:3},{value:"StateEvents.<code>BEFORE_CHANGE_STATE</code>",id:"stateeventsbefore_change_state",level:3},{value:"StateEvents.<code>AFTER_CHANGE_STATE</code>",id:"stateeventsafter_change_state",level:3},{value:"RendererEvents.<code>MOUNTED</code>",id:"renderereventsmounted",level:3},{value:"RendererEvents.<code>UPDATED</code>",id:"renderereventsupdated",level:3},{value:"RendererEvents.<code>UNMOUNTED</code>",id:"renderereventsunmounted",level:3},{value:"RendererEvents.<code>ERROR</code>",id:"renderereventserror",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Major part of development in JavaScript relies on ",(0,r.kt)("strong",{parentName:"p"},"events"),". It's easy solution to\nnotify distant instances or React elements scattered across the DOM tree."),(0,r.kt)("p",null,"To ease the pain that comes with events, I",(0,r.kt)("strong",{parentName:"p"},"MA.js provides a two utilities that\ntake care of firing and receiving events"),". Each one with a different style."),(0,r.kt)("h2",{id:"eventbus"},"EventBus"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ima/event/EventBus")," allows your UI components to emit custom DOM events\nthat naturally propagate through the DOM tree representing the tree of your UI\ncomponents."),(0,r.kt)("p",null,"This is used to notify the parent components of user interaction with\ncustom controls in your UI, or to notify the page Controller itself."),(0,r.kt)("p",null,"The custom events may have any name and carry arbitrary data that are not\nrestricted to JSON-serializable values."),(0,r.kt)("h3",{id:"firing-eventbus-events"},"Firing EventBus events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")," can be used in View and Components via ",(0,r.kt)("inlineCode",{parentName:"p"},"fire()")," method that is\ninherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"ima/page/AbstractComponent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/expandable/ExpandLink.jsx\n\nonClick(event) {\n  const { expandableId } = this.props;\n  this.fire('expand', { expandableId }); // this will be stopped by ExpandableWrapper\n}\n\nrender() {\n  return (\n  <button onClick = { event => this.onClick(event) }>\n    {\xa0this.props.children }\n  </button>\n  );\n}\n")),(0,r.kt)("h3",{id:"listening-to-eventbus-events"},"Listening to EventBus events"),(0,r.kt)("p",null,"The opposite for the ",(0,r.kt)("inlineCode",{parentName:"p"},"fire()")," method is ",(0,r.kt)("inlineCode",{parentName:"p"},"listen()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unlisten()"),". First\nargument for the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unlisten()")," method is an element the listener\nwill be bound to. It can be either DOM element or a React Component that is\nmounted in the DOM tree."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/expandable/ExpandableWrapper.jsx\n\nconstructor() {\n  this._expandListener = this._expandWrapper.bind(this);\n}\n\ncomponentDidMount() {\n  this.listen(this, 'expand', this._expandListener);\n}\n\ncomponentWillUnmount() {\n  this.unlisten(this, 'expand', this._expandListener);\n}\n\n_expandWrapper(event) {\n  if (event.data.expandableId !== this.expandableId) {\n  return; // this expand event is not meant for us.\n  }\n\n  // Do to propagate the event further.\n  event.stopPropagation();\n\n  // Do the expand!\n}\n\nrender() {\n  return (\n  <div className = 'expandWrapper'>\n    // ... ExpandLink can be nested any level deep. Otherwise we could use simple props callback\n    <ExpandLink expandableId = { this.expandableId }>\n    See more\n    </ExpandLink>\n  </div>\n  );\n}\n")),(0,r.kt)("p",null,"Furthermore, the Controllers can easily listen for the events dispatched using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")," ",(0,r.kt)("em",{parentName:"p"},"(unless the propagation of the event is stopped by a component\nhalf the way)")," by declaring event listener methods."),(0,r.kt)("p",null,"An event listener method is a method of a controller named by the ",(0,r.kt)("strong",{parentName:"p"},"first-letter\ncapitalized event name with the ",(0,r.kt)("inlineCode",{parentName:"strong"},"on")," prefix"),", for example the ",(0,r.kt)("inlineCode",{parentName:"p"},"formSubmitted"),"\nevent can be listened for by defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFormSubmitted()")," method on your\ncontroller."),(0,r.kt)("p",null,"The first argument passed into the controller's event listener method will be\nthe event data, ",(0,r.kt)("strong",{parentName:"p"},"not the event object itself"),", as manipulating the event object\nonce it reaches the controller is pointless."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/article/ArticleController.js\n\nonExpand({\xa0expandableId }) {\n  // Event never reaches this point because we issued\n  // event.stopPropagation() in ExpandableWrapper.jsx\n}\n")),(0,r.kt)("h2",{id:"dispatcher"},"Dispatcher"),(0,r.kt)("p",null,"The obvious limitation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ima/event/EventBus")," API is that it only allows\nto create events that propagate up the tree of the UI components. The common\nway to propagate event in other directions, or to other parts of the UI, or\nfrom the controller to the UI is using the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/event/Dispatcher")," API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accessing Dispatcher in Controllers")," is easy with ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/object-container#1-dependency-injection"},"Dependency Injection"),".\n",(0,r.kt)("strong",{parentName:"p"},"To access Dispatcher from Views and Components")," you should register it in ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/views-and-components#utilities-shared-across-views-and-components"},"ComponentUtils"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/bind.js\nimport { Dispatcher } from '@ima/core';\n\nexport let init = (ns, oc, config) => {\n  const ComponentUtils = oc.get('$ComponentUtils');\n\n  ComponentUtils.register({\n  $Dispatcher: Dispatcher\n  });\n}\n")),(0,r.kt)("h3",{id:"firing-and-listening-to-dispatcher-events"},"Firing and listening to Dispatcher events"),(0,r.kt)("p",null,"The Dispatcher allows any UI component and controller to register and deregister\nevent listeners for arbitrarily named events using ",(0,r.kt)("inlineCode",{parentName:"p"},"listen()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unlisten()"),"\nmethods and fire these events with arbitrary data using ",(0,r.kt)("inlineCode",{parentName:"p"},"fire()")," method."),(0,r.kt)("p",null,"Events propagate directly to the registered event listeners with no way to stop\ntheir propagation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/image/Image.jsx\n\nonImageClick(event) {\n  event.preventDefault();\n\n  const {\xa0image } = this.props;\n  this.utils.$Dispatcher.fire('showLightbox', { image });\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/lightbox/Lightbox.jsx\n\ncomponentDidMount() {\n  this.utils.$Dispatcher.listen('showLightbox', this.onLightboxShow, this);\n}\n\ncomponentWillUnmount() {\n  this.utils.$Dispatcher.unlisten('showLightbox', this.onLightboxShow, this);\n}\n\nonLightboxShow(data) {\n  // ...\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Lightbox component can be mounted anywhere in the DOM tree and it\nwill still receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"showLightbox")," event when it's fired.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," A great place to\nmount components like Lightbox is ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/rendering-process#managedrootview"},"ManagedRootView"),".")),(0,r.kt)("p",null,"Note that events distributed using the Dispatcher are useful only in very\nspecific use-cases, so the Dispatcher logs a warning to the console if there\nare no listeners registered for the fired event in order to notify you of\npossible typos in event names."),(0,r.kt)("h2",{id:"built-in-events"},"Built-in events"),(0,r.kt)("p",null,"IMA.js fires a few events that let you know that something has happened under\nthe hood. You can listen to these events using ",(0,r.kt)("strong",{parentName:"p"},"Dispatcher"),"'s listen method."),(0,r.kt)("h3",{id:"routereventsbefore_handle_route"},"RouterEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"BEFORE_HANDLE_ROUTE")),(0,r.kt)("p",null,"This event is fired after the router matches new url to a registered route and\nbefore the page change starts. The data passed with the event look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  // the new Route instance\n  route,\n  // new URL parameters\n  params,\n  // the path portion of the new URL (a route definition is matched against this)\n  path,\n  // route options extended of options provided to the function\n  // that triggered the routing\n  options,\n  // an action object describing what triggered the routing\n  // if a PopStateEvent triggered the routing the action object will\n  // look like this { type: 'popstate', event: PopStateEvent }\n  // otherwise the event will be MouseEvent (e.g. clicked on a link)\n  // and type will be either 'redirect', 'click' or 'error'.\n  action\n}\n")),(0,r.kt)("h3",{id:"routereventsafter_handle_route"},"RouterEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"AFTER_HANDLE_ROUTE")),(0,r.kt)("p",null,"This event is contrary to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE_HANDLE_ROUTE"),". It's fired with the same\ndata but after the page was changed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"AFTER_HANDLE_ROUTE")," event will be fired regardless if promises\nloaded be the new Controller are resolved.")),(0,r.kt)("h3",{id:"stateeventsbefore_change_state"},"StateEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"BEFORE_CHANGE_STATE")),(0,r.kt)("p",null,"An event fired before the page state changes. The handler of this event receives\nfollowing data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  // The state object derived from the oldState and patchState\n  newState,\n  // The current state\n  oldState,\n  // The data that were passed to the `setState` method\n  patchState\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You can mutate the ",(0,r.kt)("inlineCode",{parentName:"p"},"newState")," object if you wish. Mutating\n",(0,r.kt)("inlineCode",{parentName:"p"},"oldState")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"patchState")," will have no effect.")),(0,r.kt)("h3",{id:"stateeventsafter_change_state"},"StateEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"AFTER_CHANGE_STATE")),(0,r.kt)("p",null,"An event fired after the page state changes. The data passed with this event\ncontain only the ",(0,r.kt)("inlineCode",{parentName:"p"},"newState")," object."),(0,r.kt)("h3",{id:"renderereventsmounted"},"RendererEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"MOUNTED")),(0,r.kt)("p",null,"PageRenderer fires this event after current page view is mounted to the DOM. Event's data contain ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type: String }")," Where type can be one of constants located in ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core/page/renderer/Types"),"."),(0,r.kt)("h3",{id:"renderereventsupdated"},"RendererEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"UPDATED")),(0,r.kt)("p",null,"PageRenderer fires this event after current state is updated in the DOM. Event's data contain ",(0,r.kt)("inlineCode",{parentName:"p"},"{ state: Object<string, *>}"),"."),(0,r.kt)("h3",{id:"renderereventsunmounted"},"RendererEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"UNMOUNTED")),(0,r.kt)("p",null,"PageRenderer fires this event after current view is unmounted from the DOM. Event's data contain ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type: String }")," Where type can be one of constants located in ",(0,r.kt)("inlineCode",{parentName:"p"},"@ima/core/page/renderer/Types"),"."),(0,r.kt)("h3",{id:"renderereventserror"},"RendererEvents.",(0,r.kt)("inlineCode",{parentName:"h3"},"ERROR")),(0,r.kt)("p",null,"PageRenderer fires this event when there is no _viewContainer in _renderToDOM method. Event's data contain ",(0,r.kt)("inlineCode",{parentName:"p"},"{ message: string }"),"."))}c.isMDXComponent=!0}}]);