"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4073],{7359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/static-view-null-12294c9d858733d2999a6cc712166ca3.png"},8065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/static-view-styling-our-form-0b8cf4b31368ef0ad49b2c44f2be15f0.png"},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(5773),o=(n(7294),n(3905));const i={title:"Static View",description:"Tutorial > Static View"},r=void 0,s={unversionedId:"tutorial/static-view",id:"tutorial/static-view",title:"Static View",description:"Tutorial > Static View",source:"@site/../docs/tutorial/static-view.md",sourceDirName:"tutorial",slug:"/tutorial/static-view",permalink:"/tutorial/static-view",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/tutorial/static-view.md",tags:[],version:"current",lastUpdatedBy:"jan.kucera",lastUpdatedAt:1706854330,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{title:"Static View",description:"Tutorial > Static View"},sidebar:"tutorial",previous:{title:"Introduction",permalink:"/tutorial/introduction"},next:{title:"Adding Some State",permalink:"/tutorial/adding-some-state"}},l={},p=[{value:"View Component",id:"view-component",level:2},{value:"Guestbook form &amp; SMACSS",id:"guestbook-form--smacss",level:3},{value:"Styling our form",id:"styling-our-form",level:3},{value:"Defining custom styles",id:"defining-custom-styles",level:4},{value:"Rendering the whole document",id:"rendering-the-whole-document",level:3},{value:"Notes on ES2015 modules and IMA.js namespaces",id:"notes-on-es2015-modules-and-imajs-namespaces",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./introduction"},"first part")," we went through introduction to IMA.js and initialized our first\napplication using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-ima-app")," command. In the second part of the tutorial\nwe'll actually do some coding and prepare basic Views for our guest book application."),(0,o.kt)("h2",{id:"view-component"},"View Component"),(0,o.kt)("p",null,"Open up the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeView.jsx")," file in your code editor. You will see a\nsingle ES2015 class named ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView"),", extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," class\n(which in turn extends the\n",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/component-api.html"},(0,o.kt)("inlineCode",{parentName:"a"},"React.Component")),"\nclass). You can read more about components and views in the ",(0,o.kt)("a",{parentName:"p",href:"/basic-features/views-and-components"},"documentation"),"."),(0,o.kt)("p",null,"Now let's replace the contents of the file with a blank view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PageContext, AbstractComponent } from '@ima/react-page-renderer';\nimport React from 'react';\n\nexport default class HomeView extends AbstractComponent {\n  static get contextType() {\n    return PageContext;\n  }\n\n  render() {\n    return null;\n  }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView")," class defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method. Notice that our current\n",(0,o.kt)("inlineCode",{parentName:"p"},"HomeView")," class does not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," method, as the default\none provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractComponent")," class will do in this case."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor()")," is the class constructor (an object initializer, if you\nwill) that sets the component's initial properties (",(0,o.kt)("inlineCode",{parentName:"p"},"props"),") and context. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object represents the properties set on our view component by the\ncode using it (",(0,o.kt)("em",{parentName:"p"},"the properties are set using the element attributes in JSX,\nyou can find our more about this\n",(0,o.kt)("a",{parentName:"em",href:"http://facebook.github.io/react/docs/getting-started.html"},"here")),'). The\ncontext is an object representing the "globals" for the React components in\nthe application. IMA.js uses the context to pass view utils to components,\nyou can find out more about it\n',(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/context.html"},"here"),"."),(0,o.kt)("p",null,"There's also static getter ",(0,o.kt)("inlineCode",{parentName:"p"},"contextType()")," which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"PageContext"),", that\nby default provides the component access to global ",(0,o.kt)("inlineCode",{parentName:"p"},"$Utils")," object in the component context.\nThis object is very useful as we can bind custom helper methods to it in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bind.js"),"file with the help of Object Container. But we'll talk about this a bit more\n",(0,o.kt)("a",{parentName:"p",href:"/tutorial/fetching-data#dependency-injection"},"later in this tutorial")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method creates and returns a React element that represents the\nview in the UI. Our ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," because our component does\nnot have a UI yet."),(0,o.kt)("p",null,"Now that we know our way around our component, let's replace the contents of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"return <div className=\"l-home container\">Hello {'World'}!</div>;\n")),(0,o.kt)("p",null,"The \"HTML\" code you see is actually an XML markup with JavaScript expressions\nembedded within curly braces. This markup is processed automatically by Babel's\nJSX transformer into ordinary JavaScript expressions creating React elements\n(React's virtual DOM allowing rendering at both the client and the server side).\nThis combination of JavaScript and XML is commonly referred to as JSX and you\ncan find out more about it\n",(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/react/docs/jsx-in-depth.html"},"here"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method must always return a React element (or a similar plain\nobject, or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"), so it can be properly rendered at both the client and\nserver. Never attempt to create an actual DOM element in your view - your\napplication will most likely break! This is because your code is run at the\nserver first, where no DOM is available, and polyfilling it, while possible,\nwould introduce a large overhead. Additionally, since the UI is rendered using\nReact which modifies the DOM at the client side, any changes to the DOM you would\nmanage to make would likely be lost with the next update of the page's UI."),(0,o.kt)("p",null,"If everything went well you should see the following page when you refresh your browser:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7359).Z,width:"2400",height:"913"})),(0,o.kt)("h3",{id:"guestbook-form--smacss"},"Guestbook form & SMACSS"),(0,o.kt)("p",null,"Let's modify the return value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method to look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n      <div className="l-home container">\n        <h1>Guestbook</h1>\n\n        <div className="posting-form card">\n          <form action="" method="post">\n            <h5 className="card-header">Add a post</h5>\n            <div className="card-body">\n              <div className="form-group">\n                <label htmlFor="postForm-name">Name:</label>\n                <input\n                  id="postForm-name"\n                  className="form-control"\n                  type="text"\n                  name="author"\n                  placeholder="Your name"\n                />\n              </div>\n              <div className="form-group">\n                <label htmlFor="postForm-content">Post:</label>\n                <textarea\n                  id="postForm-content"\n                  className="form-control"\n                  name="content"\n                  placeholder="What would you like to tell us?"\n                />\n              </div>\n            </div>\n            <div className="card-footer">\n              <button type="submit" className="btn btn btn-outline-primary">\n                Submit\n                <div className="ripple-wrapper" />\n              </button>\n            </div>\n          </form>\n        </div>\n        <hr />\n        <div className="posts">\n          <h2>Posts</h2>\n          <div className="post card card-default">\n            <div className="card-body">Never mistake motion for action.</div>\n            <div className="post-author card-footer">Ernest Hemingway</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              Quality means doing it right when no one is looking.\n            </div>\n            <div className="post-author card-footer">Henry Ford</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              We are what we repeatedly do. Excellence, then, is not an act, but\n              a habit.\n            </div>\n            <div className="post-author card-footer">Aristotle</div>\n          </div>\n          <div className="post card card-default">\n            <div className="card-body">\n              Reality is merely an illusion, albeit a very persistent one.\n            </div>\n            <div className="post-author card-footer">Albert Einstein</div>\n          </div>\n        </div>\n      </div>\n    );\n')),(0,o.kt)("p",null,"Whoa, that's a lot of code! But don't worry, it's just a form we'll use to\nwrite new posts and some example posts. Notice the CSS class we put on the root\nelement though, ",(0,o.kt)("inlineCode",{parentName:"p"},"l-home"),". It is considered a good practice to add such a CSS\nclass on the root element of every React component and/or controller view. The\nCSS class name should be the slugified version of the React component's /\ncontroller's name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeComponent")," would become\n",(0,o.kt)("inlineCode",{parentName:"p"},"my-awesome-component"),". Additionally, it is recommended to prefix the\ncontroller's name with ",(0,o.kt)("inlineCode",{parentName:"p"},"l-"),' (think "layout"), leading to ',(0,o.kt)("inlineCode",{parentName:"p"},"l-home")," for our\n",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," controller's view."),(0,o.kt)("p",null,"The main point of this practice is that it enables easy scoping of CSS rules\nthat should affect only the contents of the component and not the rest of the\npage, thus reducing the amount of possible conflicts in CSS declarations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"l-")," prefix used in the case of controller views is added to prevent\npossible collisions with components that might share the same name, and to\nallow easy inclusion of single page-specific overrides for the UI of your\ncomponents that will not affect the rest of the pages in your application."),(0,o.kt)("p",null,"In general, it is recommended to organize your CSS code according to the\n",(0,o.kt)("a",{parentName:"p",href:"http://smacss.com/"},"SMACSS")," recommendation (Scalable and Modular Architecture\nfor CSS). Feel free to read through the page if you are not familiar with\nSMACSS yet, it won't take you long."),(0,o.kt)("h3",{id:"styling-our-form"},"Styling our form"),(0,o.kt)("p",null,"So let's make our guestbook look a little better. To achieve this, we'll\nuse the Bootstrap library. To make things simple,\nwe will just use the CDN-hosted CSS file, since we don't need any of Bootstrap's JS components in our example anyway."),(0,o.kt)("p",null,"In a real application, we strongly recommend you manage these dependencies yourself (for example through npm packages),\nand consider using a custom build that includes only the necessary CSS/JS."),(0,o.kt)("p",null,"First we need to include a few files to our page. Open the document component\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/component/document/DocumentView.jsx")," (this is the UI component that renders the basic structure of the HTML document. You'll find more details about it in the ",(0,o.kt)("a",{parentName:"p",href:"#rendering-the-whole-document"},"Rendering the whole document")," section of this chapter).\nInsert the following code before the ",(0,o.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet" ...')," line to include\nthe Bootstrap CSS library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<link\n  rel="stylesheet"\n  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"\n  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"\n  crossOrigin="anonymous"\n/>\n')),(0,o.kt)("p",null,"This will save us a lot of effort with styling our UI."),(0,o.kt)("h4",{id:"defining-custom-styles"},"Defining custom styles"),(0,o.kt)("p",null,"Let's write some CSS to make our guestbook look even better. Open the\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/assets/less/setting.less")," file and add the following code to set up our\nlayout configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@post-author-alignment: right;\n")),(0,o.kt)("p",null,"Next open the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/assets/less/base.less")," file and add the following code below the existing one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"form {\n  margin-bottom: 0;\n}\n")),(0,o.kt)("p",null,"Now let's open the the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/homeView.less")," file and replace the\ncontents with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".l-home {\n    margin-top: 2rem;\n\n    .post-author {\n        text-align: @post-author-alignment;\n        font-style: italic;\n        font-size: 85%;\n    }\n\n    .card {\n        margin-bottom: 2rem;\n    }\n}\n")),(0,o.kt)("p",null,"Go ahead and check the results in the browser. It sure does look a little\nbetter (you may have to reload the page, or event restart the dev server\nby hitting ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and then re-running the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," command if your\nbrowser cannot access the newly installed resources). In the end of this section\nyou should see something like this when you refresh your page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8065).Z,width:"2400",height:"2400"})),(0,o.kt)("h3",{id:"rendering-the-whole-document"},"Rendering the whole document"),(0,o.kt)("p",null,"As you may have noticed, we didn't specify any ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," element in\nour controller view, and yet the page rendered in the browser has them. So how\ndid this little piece of magic happen?"),(0,o.kt)("p",null,"As you may recall from the beginning of this tutorial, the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/component"),"\ndirectory contains components that are used in the application UI. There is one\nspecial component - the document component\n(",(0,o.kt)("inlineCode",{parentName:"p"},"app/component/document/DocumentView.jsx"),"). The document component handles\nrendering the basic structure of the HTML document like the ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"<body>")," elements."),(0,o.kt)("p",null,"Finally, the document component must render three elements, ",(0,o.kt)("inlineCode",{parentName:"p"},'<div id="page">'),",\n",(0,o.kt)("inlineCode",{parentName:"p"},'<script id="revivalSettings">')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'<script id="scripts">'),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#page")," - is a place where current view is rendered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#revivalSettings")," - contains JavaScript code used to initialize the environment for your application at the client side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#scripts")," - contains the JavaScript logic of your application.")),(0,o.kt)("p",null,"The order is important as this will allow your users\nto see the whole of the page content before the application is fully loaded in\nthe browser (remember, the content is first rendered at the server side)."),(0,o.kt)("p",null,"The one thing the document component does not render and is handled by IMA.js\nitself is the ",(0,o.kt)("inlineCode",{parentName:"p"},"<!doctype html>")," doctype at the beginning of the rendered page -\nthis is due to the limitations of the React library, but you don't need to\nconcern yourself with this very much."),(0,o.kt)("p",null,"Note that the document component is only used at the server-side, as the\napplication only updates the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"#page")," element at the\nclient-side (and the page title and meta tags through the meta-manager, which\nwill not be covered by this tutorial, but you can learn more about its interface\nin the API ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/ima_core.MetaManager"},"/api/meta/meta-meta-manager"),")."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentView")," and whole rendering process of IMA.js\napplication, ",(0,o.kt)("a",{parentName:"p",href:"/basic-features/rendering-process"},"take a look at the documentation"),"."),(0,o.kt)("h3",{id:"notes-on-es2015-modules-and-imajs-namespaces"},"Notes on ES2015 modules and IMA.js namespaces"),(0,o.kt)("p",null,"Starting with version 15 of IMA.js namespaces were deprecated in favor of ES2015\nmodules. Mainly because ES modules are now more widespread and have better support\nin many IDEs thus don't pose such a problem when it comes to refactoring."),(0,o.kt)("p",null,"Previously almost all of the JavaScript files in your IMA.js application included\na snippet of code like this one near the beginning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import ns from 'ima/namespace';\n\nns.namespace('app.foo.bar');\n")),(0,o.kt)("p",null,"and ended with a line of code like this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"ns.app.foo.bar.Baz = Baz;\n")),(0,o.kt)("p",null,"The first snippet imports the object that represents the root namespace for the\nclasses, constants and values in the application, and then ensures that the\nnamespace to which the class / constant / value will be bound exists by calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"ns.namespace('namespace name goes here')"),". The second snippet binds the class,\nconstant or value created in the file to the namespace."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're using version 15 and above")," you can safely remove deprecated namespaces\nand replace them with ES2015 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,o.kt)("inlineCode",{parentName:"a"},"import")),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},(0,o.kt)("inlineCode",{parentName:"a"},"export")),"."))}m.isMDXComponent=!0}}]);