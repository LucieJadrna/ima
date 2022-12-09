"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_core.StateEvents",title:"Enumeration: StateEvents",sidebar_label:"@ima/core.StateEvents",custom_edit_url:null},o=void 0,s={unversionedId:"api/enums/ima_core.StateEvents",id:"api/enums/ima_core.StateEvents",title:"Enumeration: StateEvents",description:"@ima/core.StateEvents",source:"@site/../docs/api/enums/ima_core.StateEvents.md",sourceDirName:"api/enums",slug:"/api/enums/ima_core.StateEvents",permalink:"/api/enums/ima_core.StateEvents",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.StateEvents",title:"Enumeration: StateEvents",sidebar_label:"@ima/core.StateEvents",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.RouterEvents",permalink:"/api/enums/ima_core.RouterEvents"},next:{title:"@ima/core.StatusCode",permalink:"/api/enums/ima_core.StatusCode"}},c={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"AFTER_CHANGE_STATE",id:"after_change_state",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"BEFORE_CHANGE_STATE",id:"before_change_state",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".StateEvents"),(0,r.kt)("p",null,"Events constants, which is firing to app."),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"after_change_state"},"AFTER","_","CHANGE","_","STATE"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"AFTER","_","CHANGE","_","STATE")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageStateManager.afterChangeState"')),(0,r.kt)("p",null,"PateStateManager fire event ",(0,r.kt)("inlineCode",{parentName:"p"},"$IMA.$PageStateManager.afterChangeState")," after state\nis patched. Event's data contain ",(0,r.kt)("inlineCode",{parentName:"p"},"{newState: Object<string, *>}"),"."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/page/state/Events.ts#L17"},"packages/core/src/page/state/Events.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"before_change_state"},"BEFORE","_","CHANGE","_","STATE"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"BEFORE","_","CHANGE","_","STATE")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"$IMA.$PageStateManager.beforeChangeState"')),(0,r.kt)("p",null,"PateStateManager fire event ",(0,r.kt)("inlineCode",{parentName:"p"},"$IMA.$PageStateManager.beforeChangeState")," before\nstate is patched. Event's data contain\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ oldState: Object<string, *>, newState: Object<string, *>,\npathState:  Object<string, *> }"),"."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/core/src/page/state/Events.ts#L11"},"packages/core/src/page/state/Events.ts:11")))}u.isMDXComponent=!0}}]);