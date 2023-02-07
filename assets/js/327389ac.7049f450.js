"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2950],{6117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/diagram-page-state-5512b3a2b5f48555cf76c83172bf4788.png"},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(5773),r=(a(7294),a(3905));const o={title:"Page State",description:"Basic features > Page State and it's usage"},s=void 0,i={unversionedId:"basic-features/page-state",id:"basic-features/page-state",title:"Page State",description:"Basic features > Page State and it's usage",source:"@site/../docs/basic-features/page-state.md",sourceDirName:"basic-features",slug:"/basic-features/page-state",permalink:"/basic-features/page-state",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/page-state.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1675795058,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{title:"Page State",description:"Basic features > Page State and it's usage"},sidebar:"docs",previous:{title:"Events",permalink:"/basic-features/events"},next:{title:"SEO & Meta Manager",permalink:"/basic-features/seo-and-meta-manager"}},l={},c=[{value:"Get &amp;\xa0Set",id:"get-set",level:2},{value:"Initial page state",id:"initial-page-state",level:2},{value:"Partial state",id:"partial-state",level:2},{value:"State transactions",id:"state-transactions",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Core of each application is the data the app is working with. The data needs to be managed in some manner and user needs to be able to manipulate with the data during application run. IMA.js adopted a React style of state management."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6117).Z,width:"881",height:"421"})),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"PageStateManager")," class is used for managing ",(0,r.kt)("strong",{parentName:"p"},"page state")," and is in tight cooperation with ",(0,r.kt)("strong",{parentName:"p"},"PageManager"),".\nPageManager need state manager to collect initial state from Controller and registered extension, and to be informed about every state change that happens inside Controller or Extension."),(0,r.kt)("h2",{id:"get-set"},"Get &\xa0Set"),(0,r.kt)("p",null,"As we've mentioned before, IMA.js state management is inspired by React. In every Controller and Extension you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState(patchObject)")," method that will update page state and trigger new rendering of a View. Counterpart to ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"getState"),". This method returns current state that is shared among controller and all its registered extensions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/home/HomeController.js\n\nonVisibilityToggle() {\n  const {\xa0visibility } = this.getState();\n\n  this.setState({ visibility: !visibility });\n}\n")),(0,r.kt)("h2",{id:"initial-page-state"},"Initial page state"),(0,r.kt)("p",null,"First additions to page state are set when ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method of a Controller and Extensions returns an object of resources. These resources may be plain data or (un)resolved promises. Promises are handled differently on server vs. client. This behavior is described in Controller's ",(0,r.kt)("a",{parentName:"p",href:"./controller-lifecycle#load-serverclient"},(0,r.kt)("inlineCode",{parentName:"a"},"load")," method documentation"),"."),(0,r.kt)("h2",{id:"partial-state"},"Partial state"),(0,r.kt)("p",null,"Since Extensions also have a word in loading resources it may be necessary to share resources between Controller and Extensions. Here comes partial state into play. It allows you to call ",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," method in ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," method of an Extension. Received state consists of states collected from loaded Controller and Extensions loaded prior to the current Extension. Extensions are loaded in the same order as they were registered in a Controller."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Promises in received state may not be resolved. Therefore you need to chain promises or use ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If you'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," execution will not be parallel relative to other promises.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/page/home/HomeController.js\nexport default class HomeController extends AbstractController {\n\n  load() {\n    const userPromise = this._userService.load(this.params.userId);\n\n    return {\n      user: userPromise\n    };\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/poll/PollExtension.js\nexport default class PollExtension extends AbstractExtension {\n  getAllowedStateKeys() {\n    return ['pollVotes'];\n  }\n\n  load() {\n    const { user: userPromise } = this.getState();\n    const pollVotesPromise = userPromise.then(\n      user => this._pollService.getVotes(user.id)\n    );\n\n    return {\n      pollVotes: pollVotesPromise\n    };\n  }\n}\n")),(0,r.kt)("h2",{id:"state-transactions"},"State transactions"),(0,r.kt)("p",null,"State transactions, similarly to SQL transactions, provide a way to queue state patches and then commit them as a one to the original state."),(0,r.kt)("p",null,"They're here for use cases where you'd in you workflow call ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," method multiple times or you'd have to collect state patches in a separate variable (this is hard to do across multiple methods)."),(0,r.kt)("p",null,"Transaction is initiated with ",(0,r.kt)("inlineCode",{parentName:"p"},"beginStateTransaction()")," in Controller/Extension. After that\nevery setState call is queued and doesn't change the state or re-render anything. If there\nis another transaction initiated before you commit you'll lost your patches."),(0,r.kt)("p",null,"If you want to see what changes are in queue from the begin of transaction call ",(0,r.kt)("inlineCode",{parentName:"p"},"getTransactionStatePatches()")," method."),(0,r.kt)("p",null,"To finish the transaction you have to call ",(0,r.kt)("inlineCode",{parentName:"p"},"commitStateTransaction()")," method. It will squash\nall the patches made during the transaction into a one and apply it to the original state.\nTherefore your application will re-render only once and you'll also receive ",(0,r.kt)("a",{parentName:"p",href:"./events#stateeventsbefore_change_state"},"state events")," only once."),(0,r.kt)("p",null,"Another way to finish the transaction is to cancel it via ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelStateTransaction()")," method."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getState")," method after the transaction has begun will return state as it was before the transaction eg. the returned state doesn't include changes from the transaction period until the transaction is committed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async onFormSubmit({ content, deleteRevisions = false }) {\n  const { article } = this.getState();\n\n  this.beginStateTransaction();\n\n  const result = await this._http.put(/* ... */);\n\n  if (deleteRevisions) {\n    await this.deleteArticleRevisions();\n  }\n\n  this.setState({ article: Object.assign({}, article, {\xa0content }) });\n  this.commitStateTransaction();\n}\n\nasync deleteArticleRevisions() {\n  const { article, revisions } = this.getState();\n\n  await this._http.delete(/* ... */);\n\n  this.setState({ revisions: [] });\n}\n")),(0,r.kt)("p",null,"In the example above, after the form is submitted with ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteRevisions = true"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Two ",(0,r.kt)("inlineCode",{parentName:"li"},"setState")," calls are made"),(0,r.kt)("li",{parentName:"ul"},"Only one render is triggered after the ",(0,r.kt)("inlineCode",{parentName:"li"},"commitStateTransaction")," call")))}u.isMDXComponent=!0}}]);