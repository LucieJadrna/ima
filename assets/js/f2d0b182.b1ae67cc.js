"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(5773),i=(n(7294),n(3905));const r={title:"Migration 0.16.0",description:"Migration > Migration to version 0.16.0"},l=void 0,o={unversionedId:"migration/migration-0.16.0",id:"migration/migration-0.16.0",title:"Migration 0.16.0",description:"Migration > Migration to version 0.16.0",source:"@site/../docs/migration/migration-0.16.0.md",sourceDirName:"migration",slug:"/migration/migration-0.16.0",permalink:"/migration/migration-0.16.0",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/migration/migration-0.16.0.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1707988142,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Migration 0.16.0",description:"Migration > Migration to version 0.16.0"},sidebar:"docs",previous:{title:"Migration 0.15.0",permalink:"/migration/migration-0.15.0"},next:{title:"Migration 17.0.0",permalink:"/migration/migration-17.0.0"}},p={},s=[{value:"Changes in dependencies",id:"changes-in-dependencies",level:2},{value:"Migration guide",id:"migration-guide",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"New Features",id:"new-features",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Upgrading from version 15 should be pretty straightforward and your application should work with no to minimal changes required."),(0,i.kt)("h2",{id:"changes-in-dependencies"},"Changes in dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"babel-eslint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"8.2.2"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"10.0.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enzyme"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"3.7.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3.8.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enzyme-adapter-react-16"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1.1.1"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.7.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"4.19.1"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"5.11.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint-config-prettier"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"2.9.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3.3.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint-plugin-jasmine"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"2.9.3"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"2.10.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint-plugin-jest"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"21.15.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"22.1.2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint-plugin-prettier"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"2.6.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3.0.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"eslint-plugin-react"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"7.7.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"7.12.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ima-gulp-tasks"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"0.15.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"^0.16.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"jest"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"22.4.3"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"23.6.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"express-http-proxy"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1.1.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.5.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"helmet"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"3.12.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3.15.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ima"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"0.15.1"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.16.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ima-server"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"0.15.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0.16.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"method-override"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"2.3.10"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"3.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"multer"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1.3.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"1.4.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"react"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"16.2.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16.7.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"react-dom"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"16.2.0"),"\xa0","\xa0","\u2192","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"16.7.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enzyme-to-json"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"^3.3.5")," ",(0,i.kt)("em",{parentName:"li"},"(new)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},(0,i.kt)("strong",{parentName:"del"},"jest-serializer-enzyme"))," ",(0,i.kt)("em",{parentName:"li"},"(removed)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},(0,i.kt)("strong",{parentName:"del"},"react-test-renderer"))," ",(0,i.kt)("em",{parentName:"li"},"(removed)"))),(0,i.kt)("h2",{id:"migration-guide"},"Migration guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use of ",(0,i.kt)("strong",{parentName:"li"},"regular expressions")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"serveSPA.blacklist"),". If you've been using array of strings, you need to change the syntax to use regular expressions instead:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"/* app/environment.js */\n{\n  ...\n- blackList: ['Googlebot', 'SeznamBot'],\n+ blackList: userAgent => (new RegExp('Googlebot|SeznamBot', 'g')).test(userAgent),\n  ...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new mandatory parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"action")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"route()")," method in ",(0,i.kt)("strong",{parentName:"li"},"Router")," of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"{ type: string, event: Event|null, url: string|null }"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," attribute can take one of these values: ",(0,i.kt)("inlineCode",{parentName:"li"},"const { REDIRECT, CLICK, POP_STATE, ERROR } = ActionTypes"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/* ima/Router/ClientRouter.js */\nroute(\n  path,\n  options = {},\n  { event = null, type = ActionTypes.REDIRECT, url = null } = {}\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Http options withCredentials is set to false by default. You must check your HTTP CORS requests and you must set withCredentials to true for sending Cookie header.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New serializer settings in Jest"),", to configure it first add path to a newly created file ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.setup.js")," (located in the root directory) into ",(0,i.kt)("inlineCode",{parentName:"p"},"setupFiles")," array in ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.json"),". After that add new ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshotSerializers")," field with ",(0,i.kt)("inlineCode",{parentName:"p"},'["enzyme-to-json/serializer"]')," value, that handles module loading, which converts Enzyme wrappers into format compatible with Jest snapshots."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'/* jest.config.json */\n"setupFiles": [\n  "ima/test.js",\n  "ima/polyfill/imaLoader.js",\n  "ima/polyfill/imaRunner.js",\n+ "<rootDir>/jest.setup.js"\n],\n+ snapshotSerializers": ["enzyme-to-json/serializer"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/* jest.setup.js */\nconst enzyme = require('enzyme');\nconst Adapter = require('enzyme-adapter-react-16');\n\nenzyme.configure({ adapter: new Adapter() });\n")),(0,i.kt)("h2",{id:"other-changes"},"Other changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IMA.js-helpers")," - removed ",(0,i.kt)("inlineCode",{parentName:"li"},"throttle")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"debounce")," functions. You can replace ",(0,i.kt)("inlineCode",{parentName:"li"},"throttle")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"throttle")," method available in ",(0,i.kt)("strong",{parentName:"li"},"UIComponentHelper")," in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-ui-atoms/blob/master/src/Visibility.js#L91"},"IMA.js-ui-atoms")," package. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/seznam/IMA.js-helpers/commit/73843d03cd46e79b6d3bd2f03df71d74fe89466c"},"73843d0")),(0,i.kt)("li",{parentName:"ul"},"Updated to ",(0,i.kt)("strong",{parentName:"li"},"React 16.7"),", which along with new context API and other features introduced deprecation of ",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillMount"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"componentWillUpdate")," lifecycle methods."),(0,i.kt)("li",{parentName:"ul"},"Upgraded to ",(0,i.kt)("strong",{parentName:"li"},"Babel 7")," and latest ",(0,i.kt)("strong",{parentName:"li"},"ESLint 5"),", which may result on some changes specific to your application.")),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most notable new feature is the introduction of ",(0,i.kt)("strong",{parentName:"li"},"PageManagerHandlers")," which adds the possibility to customize actions like saving and restoring scroll positions, setting browser's address bar URL etc. For more information visit the ",(0,i.kt)("a",{parentName:"li",href:"/basic-features/page-manager#intervene-into-the-process"},"documentation"),".")))}u.isMDXComponent=!0}}]);