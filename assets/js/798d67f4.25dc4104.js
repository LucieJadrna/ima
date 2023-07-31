"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5265],{9922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-rendering-69394d1168548bc269a32e6893cc4fd4.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(5773),r=(n(7294),n(3905));const o={title:"Rendering process",description:"Basic features > Rendering process"},i=void 0,p={unversionedId:"basic-features/rendering-process",id:"basic-features/rendering-process",title:"Rendering process",description:"Basic features > Rendering process",source:"@site/../docs/basic-features/rendering-process.md",sourceDirName:"basic-features",slug:"/basic-features/rendering-process",permalink:"/basic-features/rendering-process",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/rendering-process.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1690792301,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"Rendering process",description:"Basic features > Rendering process"},sidebar:"docs",previous:{title:"Object Container",permalink:"/basic-features/object-container"},next:{title:"Handling scripts and styles",permalink:"/basic-features/handling-scripts-and-styles"}},s={},c=[{value:"DocumentView",id:"documentview",level:2},{value:"ViewAdapter",id:"viewadapter",level:2},{value:"React Context",id:"react-context",level:3},{value:"ManagedRootView",id:"managedrootview",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The rendering process goes through many points you can customize or take\nadvantage of. First thing IMA.js will want to render is a ",(0,r.kt)("strong",{parentName:"p"},"DocumentView"),"\nfollowed by ",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter")," and ",(0,r.kt)("strong",{parentName:"p"},"ManagedRootView"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9922).Z,width:"881",height:"421"})),(0,r.kt)("h2",{id:"documentview"},"DocumentView"),(0,r.kt)("p",null,"DocumentView is the root of your application's html markup and a mounting point\nfor all the views. It's only rendered at the server-side and then send to the\nclient with the application state inlined as a string. The application state is\nthen revived and your application re-rendered."),(0,r.kt)("p",null,"DocumentView component can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/component/document/DocumentView.jsx"),"\nand is registered in a file ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/settings.js")," in property\n",(0,r.kt)("inlineCode",{parentName:"p"},"$Page.$Render.documentView"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/settings.js\n\nimport DocumentView from 'app/component/document/DocumentView';\n\nexport default (ns, oc, config) => {\n  return {\n    prod: {\n      // ...\n      $Page: {\n        $Render: {\n          // ...\n          documentView: DocumentView\n        }\n      }\n    }\n  };\n}\n")),(0,r.kt)("p",null,"This configuration affects all pages across the\napplication. To change DocumentView for an individual route use option\n",(0,r.kt)("inlineCode",{parentName:"p"},"documentView")," when registering the route (See ",(0,r.kt)("a",{parentName:"p",href:"./routing/introduction#documentview"},"Route options"),"\nfor more information). This feature is extremely useful when creating pages\nthat are embedded in an iframe."),(0,r.kt)("p",null,"If you take a closer look at the contents of the DocumentView you'll see it\nconsists of 3 main HTML elements (",(0,r.kt)("inlineCode",{parentName:"p"},"div#page"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"script#revivalSettings")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"script#scripts"),"). For documentation about the MetaManager and how it's used in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta/>")," tags see the ",(0,r.kt)("a",{parentName:"p",href:"./seo-and-meta-manager"},"SEO & MetaManager")," page."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"div#page")," - This is the actual point where your application ",(0,r.kt)("strong",{parentName:"p"},"will mount")," with the help of\n",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter"),". The whole component tree (starting with the ViewAdapter) is\ncontained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," property and is embedded into the ",(0,r.kt)("inlineCode",{parentName:"p"},"div#page")," via\na React workaround ",(0,r.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML={{ __html: this.props.page }}"),".\nYou're completely free to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"#page")," ID of the div but IMA.js needs to know where\nthe mounting point is. Therefore there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"static get masterElementId()"),"\nmethod that should return the ID as a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"script#revivalSettings")," - Inside this ",(0,r.kt)("inlineCode",{parentName:"p"},"<script/>")," tag will be inlined the application state from the\nserver. The state is embedded into the script tag via the same workaround as\nthe component tree.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"script#scripts")," - This ",(0,r.kt)("inlineCode",{parentName:"p"},"<script/>")," tags takes care of loading all the bundles you've defined in\n",(0,r.kt)("a",{parentName:"p",href:"/introduction/configuration#build-and-environment-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"app/build.js")),". It also\ntests if a client browser is capable of running ES6 version of the bundle. For\nmore details check the ",(0,r.kt)("inlineCode",{parentName:"p"},"this.getAsyncScripts()")," method."))),(0,r.kt)("h2",{id:"viewadapter"},"ViewAdapter"),(0,r.kt)("p",null,"This component does exactly what it's named after. It serves as an adapter\nfor the current controller's ",(0,r.kt)("strong",{parentName:"p"},"View"),". The ViewAdapter receives 2 props:\n",(0,r.kt)("inlineCode",{parentName:"p"},"state")," object which holds the current page state and ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," component that\nshould be rendered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," as input props."),(0,r.kt)("p",null,"This component is also a great place for creating the React context by utilizing a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createContext()"),"."),(0,r.kt)("p",null,"If you want to customize the ViewAdapter you should extend the base\nViewAdapter from ",(0,r.kt)("inlineCode",{parentName:"p"},"ima/page/renderer/ViewAdapter")," and call superior\n",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom ViewAdapter")," can be applied the same way as DocumentView:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"app/config/setting.js")),(0,r.kt)("li",{parentName:"ol"},"On a specific route by specifying it in the ",(0,r.kt)("a",{parentName:"li",href:"./routing/introduction#options"},"route options"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/config/settings.js\n\nimport DocumentView from 'app/component/document/DocumentView';\nimport CustomViewAdapter from 'app/page/CustomViewAdapter';\n\nexport default (ns, oc, config) => {\n  return {\n    prod: {\n      // ...\n      $Page: {\n        $Render: {\n          // ...\n          documentView: DocumentView,\n          viewAdapter: CustomViewAdapter\n        }\n      }\n    }\n  };\n}\n")),(0,r.kt)("h3",{id:"react-context"},"React Context"),(0,r.kt)("p",null,"As we have mentioned above, ",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter")," is the place to define React Context. Since ",(0,r.kt)("strong",{parentName:"p"},"v17")," IMA.js uses new React Context API. The context value contains property ",(0,r.kt)("inlineCode",{parentName:"p"},"$Utils")," with all registered utils from ",(0,r.kt)("strong",{parentName:"p"},"ComponentUtils"),"."),(0,r.kt)("p",null,"Context is defined in separate file and its ",(0,r.kt)("strong",{parentName:"p"},"Provider")," is rendered in ",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter"),". Then the Context is used in ",(0,r.kt)("strong",{parentName:"p"},"AbstractComponent"),"\xa0in ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#classcontexttype"},(0,r.kt)("inlineCode",{parentName:"a"},"static get contextType()")),"."),(0,r.kt)("h2",{id:"managedrootview"},"ManagedRootView"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ManagedRootView")," is just another wrapper before rendering the actual\ncontroller view. Remember when we told you that the ",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter")," is\nrendering the actual View? We lied ",(0,r.kt)("inlineCode",{parentName:"p"},"\xaf\\_(\u30c4)_/\xaf"),"."),(0,r.kt)("p",null,"If you're wondering what is the ManagedRootView good for, it's for creating\ncomponents that persist through the life of SPA and are not unmounted when the\nController or View changes. Good example of this is a page that displays a map\non one side and page content on the other (",(0,r.kt)("a",{parentName:"p",href:"https://en.mapy.cz/"},"https://en.mapy.cz/"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.kiwi.com/en/search/"},"https://www.kiwi.com/en/search/"),", ",(0,r.kt)("a",{parentName:"p",href:"https://airbnb.com/"},"https://airbnb.com/"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/page/MapManagedRootView.js\n\nimport { BlankManagedRootView } from '@ima/core';\nimport PropTypes from 'prop-types';\nimport React from 'react';\nimport Map from 'app/component/map/Map';\nimport MapResult from 'app/component/map/MapResult';\n\nexport default class MapManagedRootView extends BlankManagedRootView {\n\n  // ...\n\n  render() {\n    // Obtain search results and map settings from page state.\n    const {\xa0searchResults, mapType } = this.props;\n\n    return (\n      <React.Fragment>\n        {super.render()}\n        <Map\n          type = { mapType }\n          centerOnResults = { true }>\n          { searchResults.map(result => (\n            <MapResult place = { result }/>\n          ))}\n        </Map>\n      </React.Fragment>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"MapManagedRootView")," can be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/config/setting.js"),"\n(property ",(0,r.kt)("inlineCode",{parentName:"p"},"managedRootView"),") or in ",(0,r.kt)("a",{parentName:"p",href:"./routing/introduction#managedrootview"},"route options")," the same\nway as ",(0,r.kt)("strong",{parentName:"p"},"DocumentView")," or ",(0,r.kt)("strong",{parentName:"p"},"ViewAdapter"),"."),(0,r.kt)("p",null,"As you may have notices ",(0,r.kt)("inlineCode",{parentName:"p"},"MapManagedRootView")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"BlankManagedRootView")," which is also the default ",(0,r.kt)("strong",{parentName:"p"},"ManagedRootView")," when you don't specify your own. ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," method of ",(0,r.kt)("strong",{parentName:"p"},"BlankManagedRootView")," simply renders View for current route with props containing current page state."),(0,r.kt)("p",null,"Now when you know how a big part of the rendering process goes it's time to\nhave a look subsequent ",(0,r.kt)("a",{parentName:"p",href:"./views-and-components"},"View and Component")," rendering."))}m.isMDXComponent=!0}}]);