"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(5773),n=(a(7294),a(3905));const o={title:"Dynamic Routes",description:"Basic features > Routing > Dynamic Routes"},i=void 0,s={unversionedId:"basic-features/routing/dynamic-routes",id:"basic-features/routing/dynamic-routes",title:"Dynamic Routes",description:"Basic features > Routing > Dynamic Routes",source:"@site/../docs/basic-features/routing/dynamic-routes.md",sourceDirName:"basic-features/routing",slug:"/basic-features/routing/dynamic-routes",permalink:"/basic-features/routing/dynamic-routes",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/routing/dynamic-routes.md",tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 T\xed\u017eek",lastUpdatedAt:1692790725,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{title:"Dynamic Routes",description:"Basic features > Routing > Dynamic Routes"},sidebar:"docs",previous:{title:"Introduction",permalink:"/basic-features/routing/introduction"},next:{title:"Middlewares",permalink:"/basic-features/routing/middlewares"}},p={},u=[{value:"Creating Dynamic Routes",id:"creating-dynamic-routes",level:2},{value:"matcher",id:"matcher",level:3},{value:"extractParameters",id:"extractparameters",level:3},{value:"toPath",id:"topath",level:3}],c={toc:u},m="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dynamic routes allows you to take control of ",(0,n.kt)("strong",{parentName:"p"},"route matching"),", ",(0,n.kt)("strong",{parentName:"p"},"route parameters parsing")," and ",(0,n.kt)("strong",{parentName:"p"},"generation of router links"),"."),(0,n.kt)("p",null,"They are really powerful and can help you cover those edge cases that cannot be done using ",(0,n.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#setting-up-router"},"basic string route expressions"),"."),(0,n.kt)("p",null,"This can be achieved by defining ",(0,n.kt)("strong",{parentName:"p"},"custom route matcher")," in form of a ",(0,n.kt)("strong",{parentName:"p"},"regular expression")," and custom functions to parse router params from path and, the other way, from route params to path."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The power of dynamic routes comes at a cost. You have to be really sure to define your matchers and function overrides correctly, so you don't end up with false positive route matches. We advise to cover these matchers heavily with tests in order to prevent potential failures.")),(0,n.kt)("h2",{id:"creating-dynamic-routes"},"Creating Dynamic Routes"),(0,n.kt)("p",null,"Dynamic routes can be created just like the regular (static routes). The only thing that's different is the ",(0,n.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#pathexpression"},(0,n.kt)("inlineCode",{parentName:"a"},"pathExpression"))," positional argument, which is now object with three properties: ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toPath")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"extractParameters"),"."),(0,n.kt)("p",null,"The following example parses ",(0,n.kt)("inlineCode",{parentName:"p"},"/category/subcategory/post/124")," url formats with optional categories, and extract them along with the post ",(0,n.kt)("inlineCode",{parentName:"p"},"itemId"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./app/config/routes.js",title:"./app/config/routes.js"},"import { AbstractRoute } from '@ima/core';\n\nimport PostController from 'app/page/post/PostController';\nimport PostView from 'app/page/post/PostView';\n\nconst POST_MATCHER = /([\\w-]+)?\\/?([\\w-]+)?\\/post\\/(\\d+)/i;\n\nexport let init = (ns, oc, config) => {\n  const router = oc.get('$Router');\n\n  router.add(\n    'post',\n    {\n      matcher: POST_MATCHER,\n      extractParameters: (trimmedPath, ({ query, path })) => {\n        const [match, category, subcategory, itemId] =\n          POST_MATCHER.exec((trimmedPath)));\n\n        return {\n          category,\n          subcategory,\n          itemId,\n        };\n      },\n      toPath: params => {\n        const { category, subcategory, itemId, ...restParams } = params;\n        const query = new URLSearchParams(restParams).toString();\n\n        return [category, subcategory, itemId].filter(i => !!i).join('/') +\n          (query ? `?${query}` : '');\n      }\n    },\n    PostController,\n    PostView\n  );\n}\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Notice that in the ",(0,n.kt)("inlineCode",{parentName:"p"},"toPath")," function, we're appending other unused params to the final path as query params. This is to mimic the same functionality as the ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.StaticRoute"},(0,n.kt)("inlineCode",{parentName:"a"},"StaticRoutes"))," provide by default."),(0,n.kt)("p",{parentName:"admonition"},"To make this process easier you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"AbstractRoute.paramsToQuery()")," helper method, which filters and transforms object key-value pairs to query params string.")),(0,n.kt)("h3",{id:"matcher"},"matcher"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"RegExp"))),(0,n.kt)("p",null,"Regular expression used in route matching. The router tries to match ",(0,n.kt)("strong",{parentName:"p"},"path"),", ",(0,n.kt)("strong",{parentName:"p"},"stripped from trailing slashes"),", against this regular expression."),(0,n.kt)("h3",{id:"extractparameters"},"extractParameters"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"(trimmedPath: string, { query: RouteParams; path: string }) => RouteParams"))),(0,n.kt)("p",null,"Function used to extract route params from given path. It receives path trimmed from trailing slashes and query params as first argument."),(0,n.kt)("p",null,"For more control, you can use additional data in form of ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," which contain query params extracted from trimmed path and full path without any modifications."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When using ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.StaticRoute"},(0,n.kt)("inlineCode",{parentName:"a"},"StaticRoutes")),", query parameters are automatically merged with extracted route params. If you want to mimic this behavior, don't forget to merge ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," params into your final route params object.")),(0,n.kt)("h3",{id:"topath"},"toPath"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"(params: RouteParams) => string"))),(0,n.kt)("p",null,"Function used to create path from given params (including query params). It is used mainly in the ",(0,n.kt)("a",{parentName:"p",href:"/basic-features/routing/introduction#linking-between-routes"},"router link creation"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"It is a good practice to ",(0,n.kt)("strong",{parentName:"p"},"append any unused params as query params")," to the path (you can use the static ",(0,n.kt)("inlineCode",{parentName:"p"},"AbstractRoute.paramsToQuery()")," static helper to do that).")))}l.isMDXComponent=!0}}]);