"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(5773),r=(a(7294),a(3905));const o={title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager"},i=void 0,s={unversionedId:"basic-features/seo-and-meta-manager",id:"basic-features/seo-and-meta-manager",title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager",source:"@site/../docs/basic-features/seo-and-meta-manager.md",sourceDirName:"basic-features",slug:"/basic-features/seo-and-meta-manager",permalink:"/basic-features/seo-and-meta-manager",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/seo-and-meta-manager.md",tags:[],version:"current",lastUpdatedBy:"Ji\u0159\xed Fencl",lastUpdatedAt:1680244252,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager"},sidebar:"docs",previous:{title:"Page State",permalink:"/basic-features/page-state"},next:{title:"Dictionary",permalink:"/basic-features/dictionary"}},l={},p=[{value:"Setting and obtaining information from the MetaManager",id:"setting-and-obtaining-information-from-the-metamanager",level:2},{value:"Managing document title - <code>setTitle()</code>, <code>getTitle()</code>",id:"managing-document-title---settitle-gettitle",level:3},{value:"Configuring meta tags - <code>setMetaName()</code>, <code>getMetaName()</code>, <code>getMetaNames()</code>",id:"configuring-meta-tags---setmetaname-getmetaname-getmetanames",level:3},{value:"Configuring meta properties - <code>setMetaProperty()</code>, <code>getMetaProperty()</code>, <code>setMetaProperties()</code>",id:"configuring-meta-properties---setmetaproperty-getmetaproperty-setmetaproperties",level:3},{value:"Configuring links - <code>setLink()</code>, <code>getLink()</code>, <code>getLinks()</code>",id:"configuring-links---setlink-getlink-getlinks",level:3},{value:"Automatically displaying all information",id:"automatically-displaying-all-information",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you've read the ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle"},"Controller lifecycle")," page you've\nprobably come along the ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/controller-lifecycle#setmetaparams-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"setMetaParams")),"\nmethod. This method is dedicated to set meta information for a specific\npage and you are provided with everything you need ",(0,r.kt)("em",{parentName:"p"},"(current state, MetaManager,\nrouter, dictionary and settings)"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MetaManager")," is then used in ",(0,r.kt)("a",{parentName:"p",href:"./rendering-process#documentview"},"DocumentView")," to\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"<title/>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta/>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<link/>")," tags."),(0,r.kt)("h2",{id:"setting-and-obtaining-information-from-the-metamanager"},"Setting and obtaining information from the MetaManager"),(0,r.kt)("p",null,"Meta manager offers many methods to work with document meta data, we're going to describe each one in\nfew following sections."),(0,r.kt)("h3",{id:"managing-document-title---settitle-gettitle"},"Managing document title - ",(0,r.kt)("inlineCode",{parentName:"h3"},"setTitle()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getTitle()")),(0,r.kt)("p",null,"Sets the page title..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/order/OrderController.js\n\nsetMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n  const { order } = loadedResources;\n  const title = `Order #${order.id} - ${settings.general.appTitle}`\n  metaManager.setTitle(title);\n}\n")),(0,r.kt)("p",null,"...and displays it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/document/DocumentView.jsx\n\nrender() {\n  return (\n    <html>\n      <head>\n        <title>{this.props.metaManager.getTitle()}</title>\n      </head>\n      <body>\n        {/* ... */}\n      </body>\n    </html>\n  );\n}\n")),(0,r.kt)("h3",{id:"configuring-meta-tags---setmetaname-getmetaname-getmetanames"},"Configuring meta tags - ",(0,r.kt)("inlineCode",{parentName:"h3"},"setMetaName()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getMetaName()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getMetaNames()")),(0,r.kt)("p",null,"Sets the information to be used in ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta name="..." content="..."/>'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/BaseController.js\n\nsetMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n  metaManager.setMetaName(\n    'description',\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/document/DocumentView.jsx\n\n<meta name=\"description\" content={this.props.metaManager.getMetaName('description')} />\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta/>")," tag should match the 1st\nargument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetaName()")," method otherwise the contents won't be updated."),(0,r.kt)("h3",{id:"configuring-meta-properties---setmetaproperty-getmetaproperty-setmetaproperties"},"Configuring meta properties - ",(0,r.kt)("inlineCode",{parentName:"h3"},"setMetaProperty()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getMetaProperty()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"setMetaProperties()")),(0,r.kt)("p",null,"These methods are similar to the two above except that these are used for\n",(0,r.kt)("inlineCode",{parentName:"p"},'<meta property="..." content="..."/>'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/ArticleController.js\n\nsetMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n  const { article } = loadedResources;\n  metaManager.setMetaProperty('og:image', article.thumbnailUrl);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/document/DocumentView.jsx\n\n<meta property=\"og:image\" content={this.props.metaManager.getMetaProperty('og:image')} />\n")),(0,r.kt)("p",null,"Again, the ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta>")," tag should match the 1st\nargument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetaProperty()")," method otherwise the contents won't be updated."),(0,r.kt)("h3",{id:"configuring-links---setlink-getlink-getlinks"},"Configuring links - ",(0,r.kt)("inlineCode",{parentName:"h3"},"setLink()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getLink()"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"getLinks()")),(0,r.kt)("p",null,"Adds information to the MetaManager to be later used in\n",(0,r.kt)("inlineCode",{parentName:"p"},'<link rel="..." href="..." />')," tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/order/OrderController.js\n\nsetMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n  const { order } = loadedResources;\n  const orderDetailLink = router.link('order-detail', {\n    orderId: order.id,\n    sortItems: null // doesn't have to be here, just explicitly null-ing query params\n  });\n\n  metaManager.setLink('canonical', orderDetailLink);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/document/DocumentView.jsx\n\n<link rel=\"canonical\" href={this.props.metaManager.getLink('canonical')} />\n")),(0,r.kt)("h2",{id:"automatically-displaying-all-information"},"Automatically displaying all information"),(0,r.kt)("p",null,"If you don't want to bother with displaying each ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta/>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<link/>")," tag\nseparately use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMetaNames()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getMetaProperties()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getLinks()"),"\nmethods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// app/component/document/DocumentView.jsx`\n\n// in the beginning of render() method\nconst {\xa0metaManager } = this.props;\n\n// ...\n<head>\n  {metaManager.getMetaNames().map(name => (\n    <meta key={name} name={name} content={metaManager.getMetaName(name)} />\n  ))}\n  {metaManager.getMetaProperties().map(property => (\n    <meta key={property} property={property} content={metaManager.getMetaProperty(property)} />\n  ))}\n  {metaManager.getLinks().map(relation => (\n    <link key={relation} rel={relation} href={metaManager.getLink(relation)} />\n  ))}\n</head>\n")))}d.isMDXComponent=!0}}]);