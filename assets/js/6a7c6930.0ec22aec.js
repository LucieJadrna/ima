"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(5773),i=(n(7294),n(3905));const a={title:"How to Contribute",description:"Contributing > How to Contribute"},o=void 0,s={unversionedId:"contributing/how-to-contribute",id:"contributing/how-to-contribute",title:"How to Contribute",description:"Contributing > How to Contribute",source:"@site/../docs/contributing/how-to-contribute.md",sourceDirName:"contributing",slug:"/contributing/how-to-contribute",permalink:"/contributing/how-to-contribute",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/contributing/how-to-contribute.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1711463281,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{title:"How to Contribute",description:"Contributing > How to Contribute"},sidebar:"docs",previous:{title:"Migration 19.0.0",permalink:"/migration/migration-19.0.0"}},l={},c=[{value:"Changesets",id:"changesets",level:2},{value:"Semantic Versioning",id:"semantic-versioning",level:2},{value:"Open Development",id:"open-development",level:2},{value:"Branch Organization",id:"branch-organization",level:2},{value:"Development Workflow",id:"development-workflow",level:2},{value:"License",id:"license",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contribute to this project via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/pulls"},"Pull Requests"),"."),(0,i.kt)("h2",{id:"changesets"},"Changesets"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"changesets")," for the release management. Adding a changeset file to a Pull Request is required in most cases as it triggers the release of the affected packages. If your changes don't affect any package (documentation/tests update, or change in the repository workflow), then you can skip adding a changeset file."),(0,i.kt)("p",null,"Read on how to add a changeset in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md"},"official changesets documentation"),". In our repositories, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run changeset")," alias to open the changeset prompt."),(0,i.kt)("h2",{id:"semantic-versioning"},"Semantic Versioning"),(0,i.kt)("p",null,"IMA.js follows ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic versioning"),". We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes."),(0,i.kt)("p",null,"Every significant change is documented in the changelog file of the related package."),(0,i.kt)("h2",{id:"open-development"},"Open Development"),(0,i.kt)("p",null,"All work on IMA.js happens directly on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima"},"GitHub"),". Both core team members and external contributors send pull requests which go through the same review process."),(0,i.kt)("h2",{id:"branch-organization"},"Branch Organization"),(0,i.kt)("p",null,"There are 2 main branches, ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"."),(0,i.kt)("p",null,"Branch ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," contains the current stable version. You should target your Pull Request here, if your changes are adding a new feature, fixing a bug, or any other change that does not require a major bump. New version from this branch will be published to the official npm registry under the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,i.kt)("p",null,"Branch ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," contains the next major release candidate version. You should target your Pull Request here, if you are introducing a breaking change, or extending a functionality existing only in this branch. New version from this branch will be published to the official npm registry under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rc")," tag."),(0,i.kt)("h2",{id:"development-workflow"},"Development Workflow"),(0,i.kt)("p",null,"After cloning ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima"},"IMA.js repository"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci")," (check ",(0,i.kt)("inlineCode",{parentName:"p"},".nvmrc")," file for supported Node.js version) to fetch its dependencies. Then, you can run several commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run lint")," checks the code style."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run lint -- --fix")," fixes the code style issues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run stylelint")," checks the css/less code style."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run stylelint -- --fix")," fixes the css/less code style issues."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test")," runs only tests affected by your changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test -- --watch")," runs an interactive test watcher."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test <pattern>")," runs tests with matching filenames."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test:all")," runs the complete test suite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test:size")," runs size check to avoid introduction of large bundles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")," creates a build folder within all the packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run changeset")," opens the changesets prompt.")),(0,i.kt)("p",null,"We recommend running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," (or its variations above) to make sure you don\u2019t introduce any regressions as you work on your change."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"By contributing to IMA.js, you agree that your contributions will be licensed under its MIT license."))}m.isMDXComponent=!0}}]);