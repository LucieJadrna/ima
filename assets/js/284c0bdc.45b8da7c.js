"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(5773),r=(n(7294),n(3905));const o={title:"Dictionary",description:"Basic features > Dictionary and language features"},i=void 0,s={unversionedId:"basic-features/dictionary",id:"basic-features/dictionary",title:"Dictionary",description:"Basic features > Dictionary and language features",source:"@site/../docs/basic-features/dictionary.md",sourceDirName:"basic-features",slug:"/basic-features/dictionary",permalink:"/basic-features/dictionary",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/dictionary.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1701432710,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"Dictionary",description:"Basic features > Dictionary and language features"},sidebar:"docs",previous:{title:"SEO & Meta Manager",permalink:"/basic-features/seo-and-meta-manager"},next:{title:"Error Handling",permalink:"/basic-features/error-handling"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"URL parser configuration",id:"url-parser-configuration",level:3},{value:"<code>:language</code> placeholder",id:"language-placeholder",level:4},{value:"Language files",id:"language-files",level:3},{value:"Usage",id:"usage",level:2},{value:"Messageformat library",id:"messageformat-library",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dictionary in IMA.js app serves many purposes. Simplest of them is keeping text strings out of component markup. More advanced one would be internationalization and in-text replacements."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"First we need to tell IMA.js where to look for dictionary files. Naming convention of the files is up to you, but it should be clear what language are the files meant for and ",(0,r.kt)("strong",{parentName:"p"},"glob\xa0pattern")," has to be able to match path to the files. IMA.js ",(0,r.kt)("strong",{parentName:"p"},"defaults to the following configuration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"languages: {\n  cs: ['./app/**/*CS.json'],\n  en: ['./app/**/*EN.json']\n}\n")),(0,r.kt)("p",null,"However you can easily override this settings in ",(0,r.kt)("a",{parentName:"p",href:"/cli/ima-config-js#languages"},"ima.config.js")," (an example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./ima.config.js"',title:'"./ima.config.js"'},"module.exports = {\n  languages: {\n    cs: [\n      './app/component/**/*CS.json',\n      './app/page/**/*CS.json'\n    ],\n    en: [\n      './app/component/**/*EN.json',\n      './app/page/**/*EN.json'\n    ],\n    de: [\n      './app/component/**/*DE.json',\n      './app/page/**/*DE.json'\n    ]\n  }\n}\n")),(0,r.kt)("h3",{id:"url-parser-configuration"},"URL parser configuration"),(0,r.kt)("p",null,"We also need to specify what language should be loaded. This is ",(0,r.kt)("strong",{parentName:"p"},"done dynamically depending on current URL"),". You can customize the URL patterns to language mapping in ",(0,r.kt)("strong",{parentName:"p"},"environment settings"),"."),(0,r.kt)("p",null,"The configuration consists of simple key-value pairs, that are used for configuring the languages used with specific hosts or starting paths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"key"))," - has to start with '//' instead of a protocol, and you can define the root path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))," - is a language to use when the key is matched by the current URL.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./server/config/environment.js"',title:'"./server/config/environment.js"'},"module.exports = (() => ({\n  prod: {\n    $Language: {\n      '//*:*/cs': 'cs', // https://ima-app.com/cs/custom-route\n      '//*:*/en': 'en', // https://ima-app.com/en/custom-route\n      '//*:*': 'cs', // https://ima-app.com/custom-route\n    },\n  }\n}))();\n")),(0,r.kt)("h4",{id:"language-placeholder"},(0,r.kt)("inlineCode",{parentName:"h4"},":language")," placeholder"),(0,r.kt)("p",null,"To make the language definition a bit easier for multilingua applications, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},":language")," placeholder in following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./server/config/environment.js"',title:'"./server/config/environment.js"'},"module.exports = (() => ({\n  prod: {\n    $Language: {\n      '//*:*/:language': ':language', // https://ima-app.com/[en|cs]/custom-route\n      '//*:*': 'cs', // https://ima-app.com/custom-route\n    },\n  }\n}))();\n")),(0,r.kt)("h3",{id:"language-files"},"Language files"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"http://messageformat.github.io/messageformat/"},"messageformat")," compiler, which processes our language files, expects .JSON files on the input. Contents of these files are objects, which can be nested into multiple levels. These levels are then represtend as a namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," to the value in the dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./pollVoteEN.json",title:"./pollVoteEN.json"},'{\n  "resultTitle": "Result of {name}:",\n  "result": {\n    "voted": "{count, plural, =0{Found no results} one{Found one result} other{Found # results} }",\n    "reader": "{gender, select, male{He said} female{She said} other{They said} }",\n  }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"File name is used as a namespace for strings it defines. String defined under key ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," in file ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadFormCS.json")," will be accessible under ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadForm.submit"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Every component and view extending ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractPureComponent")," has access to ",(0,r.kt)("inlineCode",{parentName:"p"},"localize")," method from within its instance. This method is alias to a ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method from the Dictionary instance and takes 2 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"key")," - namespace and name of the localization string -> if you have ",(0,r.kt)("inlineCode",{parentName:"li"},"resultTitle")," string in file ",(0,r.kt)("inlineCode",{parentName:"li"},"pollVoteEN.json")," the key to this string would be ",(0,r.kt)("inlineCode",{parentName:"li"},"pollVote.resultTitle"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"parameters")," - Optional object with replacements and parameters for ",(0,r.kt)("a",{parentName:"li",href:"http://messageformat.github.io/messageformat/"},"messageformat")," syntax. For more info about the syntax check out ",(0,r.kt)("a",{parentName:"li",href:"http://userguide.icu-project.org/formatparse/messages"},"ICU guide"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractPureComponent } from '@ima/react-page-renderer';\n\nclass PollVote extends AbstractPureComponent {\n  render() {\n    return (\n      <div>\n        {this.localize('pollVote.resultTitle')}\n        {this.localize('pollVote.result.voted', {count: 3})}\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"useComponent().localize")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocalize()")," hooks in functional components."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useComponent, useLocalize } from '@ima/react-page-renderer';\n\nfunction PollVote() {\n  // const { localize } = useComponent();\n  const localize = useLocalize();\n\n  return (\n    <div>\n      {localize('pollVote.resultTitle')}\n      {localize('pollVote.result.voted', {count: 3})}\n    </div>\n  );\n}\n"))),(0,r.kt)("h2",{id:"messageformat-library"},"Messageformat library"),(0,r.kt)("p",null,"For more information on the available selectors, formatters, and other details, please see ",(0,r.kt)("a",{parentName:"p",href:"http://messageformat.github.io/messageformat/guide/"},"Format guide"),"."),(0,r.kt)("p",null,"Dictionary is also registered in ",(0,r.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"Object Container")," and thus can be obtained in Controllers, Extensions and other classes constructed through OC."))}m.isMDXComponent=!0}}]);