"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_react_page_renderer.useComponentType",title:"Interface: useComponentType",sidebar_label:"@ima/react-page-renderer.useComponentType",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/ima_react_page_renderer.useComponentType",id:"api/interfaces/ima_react_page_renderer.useComponentType",title:"Interface: useComponentType",description:"@ima/react-page-renderer.useComponentType",source:"@site/../docs/api/interfaces/ima_react_page_renderer.useComponentType.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ima_react_page_renderer.useComponentType",permalink:"/api/interfaces/ima_react_page_renderer.useComponentType",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_react_page_renderer.useComponentType",title:"Interface: useComponentType",sidebar_label:"@ima/react-page-renderer.useComponentType",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/react-page-renderer.ViewAdapterProps",permalink:"/api/interfaces/ima_react_page_renderer.ViewAdapterProps"},next:{title:"@ima/react-page-renderer.useDispatcherType",permalink:"/api/interfaces/ima_react_page_renderer.useDispatcherType"}},o={},d=[{value:"Properties",id:"properties",level:2},{value:"cssClasses",id:"cssclasses",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"fire",id:"fire",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"link",id:"link",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"listen",id:"listen",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"localize",id:"localize",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"unlisten",id:"unlisten",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"utils",id:"utils",level:3},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_react_page_renderer"},"@ima/react-page-renderer"),".useComponentType"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cssclasses"},"cssClasses"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cssClasses"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"classRules"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Argument"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentType"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"classRules"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Generate a string of CSS classes from the properties of the passed-in\nobject that resolve to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"classRules")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Argument")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CSS classes in a string separated by whitespace, or a map of CSS class names to boolean values. The CSS class name will be included in the result only if the value is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"component?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ComponentType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The component requiring the composition of the CSS class names, if it has the ",(0,r.kt)("inlineCode",{parentName:"td"},"className")," property set and requires its inclusion this time.")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"String of CSS classes that had their property resolved\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L9"},"packages/react-page-renderer/src/hooks/component.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fire"},"fire"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fire"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBusOptions"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"Fires a new custom event of the specified name, carrying the provided\ndata."),(0,r.kt)("p",null,"Note that this method does not prevent the event listeners to modify the\ndata in any way. The order in which the event listeners will be executed\nis unspecified and should not be relied upon."),(0,r.kt)("p",null,"Note that the default options are\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ bubbles: true, cancelable: true }"),", which is different from the\ndefault values used in the native custom events\n(",(0,r.kt)("inlineCode",{parentName:"p"},"{ bubbles: false, cancelable: false }"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Thrown if the provided event target cannot be used to\nfire the event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event"},"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the event will be dispatched (e.g. element/document/window).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to fire.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to pass to the event listeners.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventBusOptions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The override of the default options passed to the constructor of the custom event fired by this event bus. The default options passed to the custom event constructor are ",(0,r.kt)("inlineCode",{parentName:"td"},"{ bubbles: true, cancelable: true }"),".")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"This custom event bus."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L12"},"packages/react-page-renderer/src/hooks/component.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"link"},"link"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"link"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"routeName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteParams"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"routeName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Generates an absolute URL (including protocol, domain, etc) for the\nspecified route by substituting the route's parameter placeholders with\nthe provided parameter values."),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"routeName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique name of the route, identifying the route to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RouteParams")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parameter values for the route's parameter placeholders. Extraneous parameters will be added as URL query.")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"An absolute URL for the specified route and parameters."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L11"},"packages/react-page-renderer/src/hooks/component.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"listen"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBusListener"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"Registers the provided event listener to be executed when the specific\ncustom event is fired by the same implementation of the event bus and\npasses through the specified event target."),(0,r.kt)("p",null,"When the specified event is fired, the event listener will be executed\nwith the event passed as the first argument."),(0,r.kt)("p",null,"The order in which the event listeners will be executed is unspecified\nand should not be relied upon."),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the listener should listen for the specified event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event to listen for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventBusListener")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to register.")))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L13"},"packages/react-page-renderer/src/hooks/component.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localize"},"localize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"localize"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectParameters"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Retrieves the localization phrase identified by the specified key,\nevaluates the phrase's placeholder expressions using the provided\nparameters and returns the result."),(0,r.kt)("h5",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"never")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The key identifying the localization phrase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"parameters?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectParameters")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The map of parameter names to the parameter values to use. Defaults to an empty plain object.")))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The specified localization phrase with its placeholders\nevaluated using the provided parameters."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L10"},"packages/react-page-renderer/src/hooks/component.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unlisten"},"unlisten"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"unlisten"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBusListener"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"eventTarget"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"Removes the provided event listener from the set of event listeners\nexecuted when the specified custom event fired by the same\nimplementation passes through the specified event target."),(0,r.kt)("p",null,"The method has no effect if the listener is not registered for the\nspecified event at the specified event target."),(0,r.kt)("h5",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventTarget")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event target at which the listener is listening for the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the event listened for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EventBusListener")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The event listener to deregister.")))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")),(0,r.kt)("p",null,"This event bus."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L14"},"packages/react-page-renderer/src/hooks/component.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"utils"},"utils"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"utils"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Utils")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/1f98a2a/packages/react-page-renderer/src/hooks/component.ts#L8"},"packages/react-page-renderer/src/hooks/component.ts:8")))}k.isMDXComponent=!0}}]);