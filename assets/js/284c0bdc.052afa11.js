"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(5773),r=(n(7294),n(3905));const o={title:"Dictionary",description:"Basic features > Dictionary and language features"},i=void 0,s={unversionedId:"basic-features/dictionary",id:"basic-features/dictionary",title:"Dictionary",description:"Basic features > Dictionary and language features",source:"@site/../docs/basic-features/dictionary.md",sourceDirName:"basic-features",slug:"/basic-features/dictionary",permalink:"/basic-features/dictionary",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/basic-features/dictionary.md",tags:[],version:"current",lastUpdatedBy:"Miroslav Jancarik",lastUpdatedAt:1673012144,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{title:"Dictionary",description:"Basic features > Dictionary and language features"},sidebar:"docs",previous:{title:"SEO & Meta Manager",permalink:"/basic-features/seo-and-meta-manager"},next:{title:"Error Handling",permalink:"/basic-features/error-handling"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dictionary in IMA.js app serves many purposes. Simplest of them is keeping text strings out of component markup. More advanced one would be internationalisation and in-text replacements."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"First we need to tell IMA.js where to look for dictionary files. Naming convention of the files is up to you, but it should be clear what language are the files meant for and ",(0,r.kt)("strong",{parentName:"p"},"glob\xa0pattern")," has to be able to match path to the files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// ima.config.js\n\n//default value in IMA.js \nlanguages: {\n    cs: ['./app/**/*CS.json'], \n    en: ['./app/**/*EN.json']\n}\n\n//you can override languages property in your project in ima.config.js file like this:\n\nlanguages: {\n    cs: [\n        './app/component/**/*CS.json',\n        './app/page/**/*CS.json'\n    ], \n    en: [\n        './app/component/**/*EN.json',\n        './app/page/**/*EN.json'\n    ],\n    de: [\n        './app/component/**/*DE.json',\n        './app/page/**/*DE.json'\n    ]\n}\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": File name is used as a namespace for strings it defines. String defined under key ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," in file ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadFormCS.json")," will be accessible under ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadForm.submit"),".")),(0,r.kt)("p",null,"We also need to specify what language is the app using. This is done dynamically depending on current URL. You can customize URL to language mapping in environment settings. Key-value pairs are used for configuring the languages used with specific hosts or starting paths."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key")," has to start with '//' instead of a protocol, and you can define the root path. Optional parameter \":language\" could be defined at the end to display language in the URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value"),' is a language to use when the key is matched by the current URL. If the ":language" parameter is used, the language specified in this value is used as the default language when the path part specifying the language is not present in the current URL.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/environment.js\nmodule.exports = (() => {\n  return {\n    prod: {\n      $Language: {\n        '//*:*': 'cs'\n      }\n    // ...\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Every component and view extending ",(0,r.kt)("strong",{parentName:"p"},"AbstractComponent")," has access to method ",(0,r.kt)("inlineCode",{parentName:"p"},"localize")," from within its instance. This method is alias to a ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method from the Dictionary instance and takes 2 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"key")," - namespace and name of the localization string. If you have ",(0,r.kt)("inlineCode",{parentName:"li"},"submitAnswer")," string in file ",(0,r.kt)("inlineCode",{parentName:"li"},"pollVoteEN.json")," the key to this string would be ",(0,r.kt)("inlineCode",{parentName:"li"},"pollVote.submitAnswer"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paramaters")," - Optional object with replacements and parameters for ",(0,r.kt)("strong",{parentName:"li"},"format-message")," syntax. For more info about the syntax check out ",(0,r.kt)("a",{parentName:"li",href:"http://userguide.icu-project.org/formatparse/messages"},"ICU guide"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// app/component/poll/PollVote.jsx\n\n_renderSubmitButton() {\n  return (\n    <button\n      class={this.cssClasses('poll__submit-btn')}\n      onClick={event => this.onSubmit(event)}>\n      {this.localize('pollVote.submitAnswer')}\n    </button>\n  );\n}\n\n_renderResult() {\n  return (\n    <div\n      class={this.cssClasses('poll__result')}>\n      {this.localize('pollVote.resultTitle', {name: 'Quiz'})}\n      {this.localize('pollVote.voted', {count: 3})}\n    </div>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// app/component/poll/pollVoteEN.json\n\n{\n  "submitAnswer": "Send",\n  "resultTitle": "Result of {name}:",\n  "voted": "{count, plural, =0{Found no results} one{Found one result} other{Found # results} }",\n  "reader": "{gender, select, male{He said} female{She said} other{They said} }",\n}\n')),(0,r.kt)("p",null,"For more information on the available selectors, formatters, and other details, please see ",(0,r.kt)("a",{parentName:"p",href:"http://messageformat.github.io/messageformat/guide/"},"Format guide"),"."),(0,r.kt)("p",null,"Dictionary is also registered in ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container")," and thus can be obtained in Controllers, Extensions and other classes constructed through OC."))}c.isMDXComponent=!0}}]);