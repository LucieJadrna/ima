"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1621],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(5773),r=(a(7294),a(3905));const i={title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager"},o=void 0,l={unversionedId:"basic-features/seo-and-meta-manager",id:"basic-features/seo-and-meta-manager",title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager",source:"@site/../docs/basic-features/seo-and-meta-manager.md",sourceDirName:"basic-features",slug:"/basic-features/seo-and-meta-manager",permalink:"/basic-features/seo-and-meta-manager",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/seo-and-meta-manager.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1683008067,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"SEO & Meta Manager",description:"Basic features > SEO & Meta Manager"},sidebar:"docs",previous:{title:"Page State",permalink:"/basic-features/page-state"},next:{title:"Dictionary",permalink:"/basic-features/dictionary"}},s={},m=[{value:"Managing meta tags",id:"managing-meta-tags",level:2},{value:"setTitle()",id:"settitle",level:3},{value:"setMetaName()",id:"setmetaname",level:3},{value:"setMetaProperty()",id:"setmetaproperty",level:3},{value:"setLink()",id:"setlink",level:3},{value:"Meta value getters",id:"meta-value-getters",level:2},{value:"Rendering meta tags",id:"rendering-meta-tags",level:2},{value:"Rendering on server using the <code>#{meta}</code> content variable",id:"rendering-on-server-using-the-meta-content-variable",level:3},{value:"Rendering on client using <code>PageMetaHandler</code>",id:"rendering-on-client-using-pagemetahandler",level:3},{value:"Global meta tags",id:"global-meta-tags",level:3}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you've read the ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle"},"Controller lifecycle")," page you've\nprobably come along the ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/controller-lifecycle#setmetaparams-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"setMetaParams")),"\nmethod. This method is dedicated to set meta information for a specific\npage and you are provided with everything you need ",(0,r.kt)("em",{parentName:"p"},"(current state, MetaManager,\nrouter, dictionary and settings)"),"."),(0,r.kt)("p",null,"Meta manager offers many methods to work with document meta data. From ",(0,r.kt)("inlineCode",{parentName:"p"},"#{meta}")," content variable, to methods for managing ",(0,r.kt)("strong",{parentName:"p"},"title")," and other ",(0,r.kt)("strong",{parentName:"p"},"meta")," tags collections."),(0,r.kt)("h2",{id:"managing-meta-tags"},"Managing meta tags"),(0,r.kt)("p",null,"As mentioned above, all meta management is done in ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetaParams")," method in ",(0,r.kt)("strong",{parentName:"p"},"route controller"),". Using ",(0,r.kt)("inlineCode",{parentName:"p"},"metaManager")," and provied setters for ",(0,r.kt)("strong",{parentName:"p"},"title"),", ",(0,r.kt)("strong",{parentName:"p"},"meta name"),", ",(0,r.kt)("strong",{parentName:"p"},"meta properties")," and ",(0,r.kt)("strong",{parentName:"p"},"link")," collections, you can manage contents of your meta tags easily with the help of additional arguments that provide everything you need (current state, MetaManager, router, dictionary and settings)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=./app/page/order/OrderController.js",title:"./app/page/order/OrderController.js"},"setMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n  const { order } = loadedResources;\n\n  metaManager.setTitle(`Order #${order.id} - ${settings.general.appTitle}`);\n  metaManager.setMetaName(\n    'description',\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n  );\n\n  metaManager.setMetaProperty('og:image', order.thumbnailUrl);\n\n  const orderDetailLink = router.link('order-detail', {\n    orderId: order.id\n  });\n\n  metaManager.setLink('canonical', orderDetailLink);\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values are filtered out when rendering meta tags. If you still want to render meta tags with empty values, use empty strings ",(0,r.kt)("inlineCode",{parentName:"p"},"''"),".")),(0,r.kt)("h3",{id:"settitle"},"setTitle()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(title: string) => MetaManager"))),(0,r.kt)("p",null,"Use to set document title."),(0,r.kt)("h3",{id:"setmetaname"},"setMetaName()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(name: string, content: MetaValue, attr?: MetaAttributes) => MetaManager"))),(0,r.kt)("p",null,"Sets the information to be used in ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta name="..." content="..." />'),"."),(0,r.kt)("h3",{id:"setmetaproperty"},"setMetaProperty()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(name: string, property: MetaValue, attr?: MetaAttributes) => MetaManager"))),(0,r.kt)("p",null,"These methods are similar to the two above except that these are used for ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta property="..." content="..." />'),"."),(0,r.kt)("h3",{id:"setlink"},"setLink()"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(relation: string, href: MetaValue, attr?: MetaAttributes) => MetaManager"))),(0,r.kt)("p",null,"Adds information to the MetaManager to be later used in ",(0,r.kt)("inlineCode",{parentName:"p"},'<link rel="..." href="..." />')," tag."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All 3 methods defined above also supports additional optional attributes. This is an object of key-value pairs representing additional meta tag attributes that are used in certain situations."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nmetaManager.setMetaProperty('og:image', order.thumbnailUrl, {\n  size: 'large',\n  authorUrl: 'https://mysite.com'\n});\n\n"))),(0,r.kt)("h2",{id:"meta-value-getters"},"Meta value getters"),(0,r.kt)("p",null,"Each setter has corresponding getter returning and object with key-value pairs representing the meta tag values. Additionally you can use key and value iterator methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTitle()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getMetaName()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"getMetaNames()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"getMetaNamesIterator()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getMetaProperty()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setMetaProperties()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setMetaPropertiesIterator()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getLink()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"getLinks()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"getLinksIterator()"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since the getter methods return object with key-value attributes where their names correspond to the html tag attribute name, you can use following shortcuts to render (these include optional attributes):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<meta\n  property=\"og:image\"\n  {...this.props.metaManager.getMetaProperty('og:image')}\n/>\n<meta\n  link=\"canonical\"\n  {...this.props.metaManager.getLink('canonical')}\n/>\n"))),(0,r.kt)("h2",{id:"rendering-meta-tags"},"Rendering meta tags"),(0,r.kt)("p",null,"Meta tags are handled differently on server an client, see following sections for more information on this matter."),(0,r.kt)("h3",{id:"rendering-on-server-using-the-meta-content-variable"},"Rendering on server using the ",(0,r.kt)("inlineCode",{parentName:"h3"},"#{meta}")," content variable"),(0,r.kt)("p",null,"While you can manually render meta tags in the document view using ",(0,r.kt)("inlineCode",{parentName:"p"},"metaManger")," and any of the provided getter methods or iterators, we also render these tags automatically into ",(0,r.kt)("inlineCode",{parentName:"p"},"#{meta}")," content variable."),(0,r.kt)("p",null,"You can then use this content variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentView")," to easily render whole meta collection (including ",(0,r.kt)("strong",{parentName:"p"},"document title"),") matching meta information set for current controller in ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetaParams")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/document/DocumentView.jsx",title:"./app/document/DocumentView.jsx"},"<head>\n  // highlight-next-line\n  {'#{meta}'}\n  {'#{styles}'}\n  {'#{revivalSettings}'}\n  {'#{runner}'}\n</head>\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While you can also use this content variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"spa.ejs"),", it will always be empty, since client rendering is handled separately. See the ",(0,r.kt)("a",{parentName:"p",href:"#rendering-on-client-using-pagemetahandler"},"next section")," for more information.")),(0,r.kt)("h3",{id:"rendering-on-client-using-pagemetahandler"},"Rendering on client using ",(0,r.kt)("inlineCode",{parentName:"h3"},"PageMetaHandler")),(0,r.kt)("p",null,"You may have noticed that the server-side rendered meta tags have ",(0,r.kt)("inlineCode",{parentName:"p"},"data-ima-meta")," data attribute. This ",(0,r.kt)("strong",{parentName:"p"},"serves as an identification for meta tags that are handled by IMA.js")," (both on server and client). These also correspond to the values you have set using ",(0,r.kt)("inlineCode",{parentName:"p"},"metaManager")," setters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta data-ima-meta name="twitter:title" content="IMA.js">\n')),(0,r.kt)("p",null,"While navigating between pages in SPA, the meta tags are",(0,r.kt)("strong",{parentName:"p"}," updated automatically")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"PageMetaHandler"),". This manager always ",(0,r.kt)("strong",{parentName:"p"},"removes old meta tags")," identified by the data attribute, before rendering new ones. And since ",(0,r.kt)("inlineCode",{parentName:"p"},"metaManager")," clears it's meta collection between routes, this means that each page renders only those tags that are set in ",(0,r.kt)("inlineCode",{parentName:"p"},"metaManager")," in current page controller using ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetaParams")," method."),(0,r.kt)("h3",{id:"global-meta-tags"},"Global meta tags"),(0,r.kt)("p",null,'Now that you know how IMA.js handles meta tag updates between routes, you may ask yourself a question "how to handle global meta tags like ',(0,r.kt)("inlineCode",{parentName:"p"},"viewport"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"charset"),' etc.?"'),(0,r.kt)("p",null,"The solution is pretty simple - just define them in ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spa.ejs")," templates, tags that don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"data-ima-meta")," attribute are not touched at all by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PageMetaHandler"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=./app/document/DocumentView.jsx",title:"./app/document/DocumentView.jsx"},"<head>\n  // highlight-next-line\n  <meta charSet='utf-8' />\n  // highlight-next-line\n  <meta httpEquiv='X-UA-Compatible' content='IE=edge' />\n  // highlight-next-line\n  <meta name='viewport' content='width=device-width, initial-scale=1' />\n</head>\n")),(0,r.kt)("p",null,"Alternative solution is to always set these values in every page controller you have. For this you can use helpers or create custom ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractController"),"."))}u.isMDXComponent=!0}}]);