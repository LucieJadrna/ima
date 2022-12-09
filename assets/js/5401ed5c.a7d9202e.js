"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(a),u=n,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||i;return a?r.createElement(c,l(l({ref:t},m),{},{components:a})):r.createElement(c,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(5773),n=(a(7294),a(3905));const i={id:"ima_dev_utils",title:"Module: @ima/dev-utils",sidebar_label:"@ima/dev-utils",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/modules/ima_dev_utils",id:"api/modules/ima_dev_utils",title:"Module: @ima/dev-utils",description:"Classes",source:"@site/../docs/api/modules/ima_dev_utils.md",sourceDirName:"api/modules",slug:"/api/modules/ima_dev_utils",permalink:"/api/modules/ima_dev_utils",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ima_dev_utils",title:"Module: @ima/dev-utils",sidebar_label:"@ima/dev-utils",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core",permalink:"/api/modules/ima_core"},next:{title:"@ima/plugin-cli",permalink:"/api/modules/ima_plugin_cli"}},d={},o=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"ParsedErrorData",id:"parsederrordata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables",level:2},{value:"COMPILE_ERROR_NEEDLES_RE",id:"compile_error_needles_re",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"RE_SOURCE_MAPPING_URL",id:"re_source_mapping_url",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"RE_VALID_FRAME_CHROME",id:"re_valid_frame_chrome",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"RE_VALID_FRAME_FIREFOX",id:"re_valid_frame_firefox",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"logger",id:"logger",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Functions",id:"functions",level:2},{value:"createLogger",id:"createlogger",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"createSourceFragment",id:"createsourcefragment",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"extractSourceMappingUrl",id:"extractsourcemappingurl",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"formatError",id:"formaterror",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getSource",id:"getsource",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"parseCompileError",id:"parsecompileerror",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"parseError",id:"parseerror",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"printTime",id:"printtime",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"resolveErrorType",id:"resolveerrortype",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"time",id:"time",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Returns",id:"returns-10",level:5},{value:"Defined in",id:"defined-in-15",level:4}],m={toc:o};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/classes/ima_dev_utils.Logger"},"Logger"))),(0,n.kt)("h2",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/interfaces/ima_dev_utils.CompileError"},"CompileError")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/interfaces/ima_dev_utils.FragmentLine"},"FragmentLine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/interfaces/ima_dev_utils.LoggerOptions"},"LoggerOptions"))),(0,n.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,n.kt)("h3",{id:"parsederrordata"},"ParsedErrorData"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"ParsedErrorData"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"column?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileUri?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"functionName?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"line?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"message?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stack?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/cliUtils.ts#L13"},"packages/dev-utils/src/cliUtils.ts:13")),(0,n.kt)("h2",{id:"variables"},"Variables"),(0,n.kt)("h3",{id:"compile_error_needles_re"},"COMPILE","_","ERROR","_","NEEDLES","_","RE"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"COMPILE","_","ERROR","_","NEEDLES","_","RE"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RegExp"),"[]"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/compileErrorParser/index.ts#L11"},"packages/dev-utils/src/compileErrorParser/index.ts:11")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"re_source_mapping_url"},"RE","_","SOURCE","_","MAPPING","_","URL"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"RE","_","SOURCE","_","MAPPING","_","URL"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,n.kt)("p",null,"Used to extract source mapping url injected at the end\nof a file with generated source maps (in separate file)."),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/helpers.ts#L10"},"packages/dev-utils/src/helpers.ts:10")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"re_valid_frame_chrome"},"RE","_","VALID","_","FRAME","_","CHROME"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"RE","_","VALID","_","FRAME","_","CHROME"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/helpers.ts#L2"},"packages/dev-utils/src/helpers.ts:2")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"re_valid_frame_firefox"},"RE","_","VALID","_","FRAME","_","FIREFOX"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"RE","_","VALID","_","FRAME","_","FIREFOX"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RegExp")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/helpers.ts#L3"},"packages/dev-utils/src/helpers.ts:3")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"logger"},"logger"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"logger"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_dev_utils.Logger"},(0,n.kt)("inlineCode",{parentName:"a"},"Logger"))),(0,n.kt)("p",null,"Create global logger instance"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L172"},"packages/dev-utils/src/logger.ts:172")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"createlogger"},"createLogger"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createLogger"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_dev_utils.Logger"},(0,n.kt)("inlineCode",{parentName:"a"},"Logger"))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_dev_utils.Logger"},(0,n.kt)("inlineCode",{parentName:"a"},"Logger"))),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L175"},"packages/dev-utils/src/logger.ts:175")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createsourcefragment"},"createSourceFragment"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createSourceFragment"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"line"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"contextLines?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_dev_utils.FragmentLine"},(0,n.kt)("inlineCode",{parentName:"a"},"FragmentLine")),"[]"),(0,n.kt)("p",null,"Create fragment of code lines around input line (above and below), created\ncreated from provided source code."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"line")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source code line number, around which        you want to created source fragment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source file's source code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"contextLines?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of lines to generate,        below and after watched line.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_dev_utils.FragmentLine"},(0,n.kt)("inlineCode",{parentName:"a"},"FragmentLine")),"[]"),(0,n.kt)("p",null,"Array of source code lines."),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/sourceFragment.ts#L18"},"packages/dev-utils/src/sourceFragment.ts:18")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"extractsourcemappingurl"},"extractSourceMappingUrl"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"extractSourceMappingUrl"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"fileUri"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fileContents"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("p",null,"Extracts sourceMappingURL from the provided file contents.\nBased on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/blob/main/packages/react-error-overlay/src/utils/getSourceMap.js#L79"},"https://github.com/facebook/create-react-app/blob/main/packages/react-error-overlay/src/utils/getSourceMap.js#L79"),"."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileUri")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The uri of the source file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileContents")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source file file contents.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/sourceMapUtils.ts#L11"},"packages/dev-utils/src/sourceMapUtils.ts:11")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"formaterror"},"formatError"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"formatError"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"parsedErrorData"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"rootDir?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"uniqueTracker?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"Formats provided error object into readable format including\nthe errored source code fragment with line highlight. Works\nwith runtime and compile errors while trying to show all\nrelevant information that can be extracted from provided object."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"parsedErrorData")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/modules/ima_dev_utils#parsederrordata"},(0,n.kt)("inlineCode",{parentName:"a"},"ParsedErrorData"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parsed error data object  obtained from parseError function (or provided directly).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"rootDir?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional root directory used to print  absolute URLs as relative to the current rootDir.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"uniqueTracker?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array of error identifiers to  track uniques, if the error matches identifier already included  in this array, this function returns empty string.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,n.kt)("p",null,"Formatted error output."),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/cliUtils.ts#L178"},"packages/dev-utils/src/cliUtils.ts:178")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsource"},"getSource"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getSource"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"fileUri?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"line?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"column?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,n.kt)("p",null,"Get source fragment from provided source metadata.\nOptionally it tries to parse original content if\nsource maps are available."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fileUri?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"source file uri.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"line?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"errored line number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"column")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"errored column number.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,n.kt)("p",null,"Formatted error lines."),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/cliUtils.ts#L33"},"packages/dev-utils/src/cliUtils.ts:33")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"parsecompileerror"},"parseCompileError"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"parseCompileError"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"error"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_dev_utils.CompileError"},(0,n.kt)("inlineCode",{parentName:"a"},"CompileError"))," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("p",null,"Tries to parse error location from an error. Which can be\neither webpack stats error or simple Error object."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"StatsError")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Error")),(0,n.kt)("td",{parentName:"tr",align:"left"},"webpack stats object or error instance.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_dev_utils.CompileError"},(0,n.kt)("inlineCode",{parentName:"a"},"CompileError"))," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("p",null,"Parsed compile error."),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/compileErrorParser/index.ts#L33"},"packages/dev-utils/src/compileErrorParser/index.ts:33")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"parseerror"},"parseError"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"parseError"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"type?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_dev_utils#parsederrordata"},(0,n.kt)("inlineCode",{parentName:"a"},"ParsedErrorData")),">"),(0,n.kt)("p",null,"Formats provided error object into readable format including\nthe errored source code fragment with line highlight. Works\nwith runtime and compile errors while trying to show all\nrelevant information that can be extracted from provided object."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"StatsError")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Error")),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"type?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"compile"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"runtime"')),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error type (affects error parsing).")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_dev_utils#parsederrordata"},(0,n.kt)("inlineCode",{parentName:"a"},"ParsedErrorData")),">"),(0,n.kt)("p",null,"Formatted error output."),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/cliUtils.ts#L124"},"packages/dev-utils/src/cliUtils.ts:124")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"printtime"},"printTime"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"printTime"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Prints current time in HH:MM:SS format."),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L26"},"packages/dev-utils/src/logger.ts:26")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resolveerrortype"},"resolveErrorType"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"resolveErrorType"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"error"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},'"compile"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"runtime"')),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"StatsError")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"Error"))))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'"compile"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},'"runtime"')),(0,n.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/compileErrorParser/index.ts#L16"},"packages/dev-utils/src/compileErrorParser/index.ts:16")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"time"),"(): () => ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Returns time utility function, which when called returns\nformatted elapsed time from it's creation."),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fn")),(0,n.kt)("p",null,"Callback to return formatted elapsed time."),(0,n.kt)("p",null,"\u25b8 (): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h5",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/15bd764/packages/dev-utils/src/logger.ts#L16"},"packages/dev-utils/src/logger.ts:16")))}s.isMDXComponent=!0}}]);