"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(u,i(i({ref:t},d),{},{components:n})):o.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(5773),a=(n(7294),n(3905));const r={title:"Adding Some State",description:"Tutorial > Adding Some State"},i=void 0,s={unversionedId:"tutorial/adding-some-state",id:"tutorial/adding-some-state",title:"Adding Some State",description:"Tutorial > Adding Some State",source:"@site/../docs/tutorial/adding-some-state.md",sourceDirName:"tutorial",slug:"/tutorial/adding-some-state",permalink:"/tutorial/adding-some-state",draft:!1,editUrl:"https://github.com/seznam/ima/tree/docusaurus/docs/../docs/tutorial/adding-some-state.md",tags:[],version:"current",lastUpdatedBy:"Filipoliko",lastUpdatedAt:1675092622,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{title:"Adding Some State",description:"Tutorial > Adding Some State"},sidebar:"tutorial",previous:{title:"Static View",permalink:"/tutorial/static-view"},next:{title:"Fetching Data",permalink:"/tutorial/fetching-data"}},l={},p=[{value:"Controller &amp; error handling",id:"controller--error-handling",level:2},{value:"Fetching posts",id:"fetching-posts",level:2},{value:"Splitting the render method",id:"splitting-the-render-method",level:3},{value:"Creating new components",id:"creating-new-components",level:2},{value:"Notes on communication between controllers and views",id:"notes-on-communication-between-controllers-and-views",level:2},{value:"Passing state",id:"passing-state",level:3},{value:"Emitting events using the EventBus",id:"emitting-events-using-the-eventbus",level:3},{value:"Emitting events using the Dispatcher",id:"emitting-events-using-the-dispatcher",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/tutorial/static-view"},"previous section")," of the tutorial, we prepared basic markup and custom styling\nthanks to the ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/"},"Bootstrap CSS library"),".\nIn this section, we're going to add some functionality to our application."),(0,a.kt)("h2",{id:"controller--error-handling"},"Controller & error handling"),(0,a.kt)("p",null,"Our guestbook may look nice, but it is kind of boring since the posts are static\nand we cannot add new posts. So let's take care of this."),(0,a.kt)("p",null,"To begin, we'll render posts from data that we'll store as the state of our page\ncontroller. Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeController.js")," file and you'll see a class declaration."),(0,a.kt)("p",null,"You can notice that by default, our bootstrapped application includes some pre-defined\nmethods along with very long JSDoc comments. Feel free to read through these comments\nbut to make this tutorial simpler, we're going to replace contents of this file with following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController } from '@ima/core';\n\nexport default class HomeController extends AbstractController {\n  static get $dependencies() {\n    return [];\n  }\n\n  constructor() {\n    super();\n  }\n\n  load() {\n    return {};\n  }\n\n  setMetaParams(loadedResources, metaManager, router, dictionary, settings) {\n    metaManager.setTitle('Guestbook');\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractController")," class defines some methods which are executed\nin different parts of it's lifecycle, you can ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/controller-lifecycle"},"read more about this in the documentation"),"\nOne of the main methods you're going to use frequently is the ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method is called automatically\nby IMA.js when the controller is being initialized. It returns a hash object - a plain\nJavaScript object representing a map of keys and values - representing the initial\nstate of the page. The values in the returned object may be\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"promises")," or scalar values.\nThe IMA.js will wait for all promises to resolve before rendering the page,\nallowing us to fetch any data we may need from the server."),(0,a.kt)("p",null,"Once all promises are resolved, IMA.js sets the controller's view state to the\nhash object with promises replaced by the values the promises resolved to."),(0,a.kt)("p",null,"In case that a promise gets rejected, we may want to display a specific error\npage. It is recommended to reject the load promises using IMA.js'\n",(0,a.kt)("inlineCode",{parentName:"p"},"GenericError")," (located in the module ",(0,a.kt)("inlineCode",{parentName:"p"},"@ima/error/GenericError"),"), which\nallows you to specify the HTTP status code representing the error type,\nresulting in the appropriate error page being displayed. An example usage\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method is show below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"load() {\n  return {\n    ourPageData: fetchUsefulData(params).catch((error) => {\n      // Note: the fetchUsefulData() should already return a promise\n      // rejected by GenericError in case an error occurs, so we would not\n      // have to do this in our every controller using a function like\n      // this one.\n\n      if (error.name === 'NotFoundError') {\n        throw new GenericError('No such records exist', {\n          cause: error,\n          params: params,\n          status: 404 // The 404 HTTP status stands for \"Not Found\"\n        });\n      } else {\n        throw new GenericError('Cannot retrieve data', {\n          cause: error,\n          params: params,\n          status: 500 // The 500 HTTP status stands for \"Internal Server Error\"\n        });\n      }\n    })\n  };\n}\n")),(0,a.kt)("p",null,"Now you may be tempted to simply extend the native ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," class (or one of its\nsiblings). The problem with that is that all browsers do not generate stack\ntraces for custom errors extending the native ones (unless you are using a\nbrowser that has already implemented error sub-classing). The ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericError"),"\ntakes care of this for us and also allows you\nto create custom error classes by extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericError")," class while still\nhaving access to stack traces of your errors."),(0,a.kt)("h2",{id:"fetching-posts"},"Fetching posts"),(0,a.kt)("p",null,"But let's refocus on the ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method in our controller. For now, we'll\nspecify our data statically and take care of fetching the data from the server in\na later point in this tutorial. Replace the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method with\nthe following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"return {\n  posts: [\n    {\n      content: 'Never mistake motion for action.',\n      author: 'Ernest Hemingway'\n    },\n    {\n      content: 'Quality means doing it right when no one is looking.',\n      author: 'Henry Ford'\n    },\n    {\n      content:\n        'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',\n      author: 'Aristotle'\n    },\n    {\n      content:\n        'Reality is merely an illusion, albeit a very persistent one.',\n      author: 'Albert Einstein'\n    }\n  ]\n};\n")),(0,a.kt)("p",null,"As you may have noticed, we used JSON-compatible code in case of ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," - this\nwill come in handy later when we'll introduce fetching the data from the\nserver and move the structure to an external JSON file."),(0,a.kt)("h3",{id:"splitting-the-render-method"},"Splitting the render method"),(0,a.kt)("p",null,"Let's return to our view in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeView.jsx")," file. Replace the\n",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method with the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'render() {\n  return (\n    <div className="l-home container">\n      <h1>Guestbook</h1>\n      <div className="posting-form card">\n        <form action="" method="post">\n          <h5 className="card-header">Add a post</h5>\n          <div className="card-body">\n            <div className="form-group">\n              <label htmlFor="postForm-name">Name:</label>\n              <input\n                id="postForm-name"\n                className="form-control"\n                type="text"\n                name="author"\n                placeholder="Your name"\n              />\n            </div>\n            <div className="form-group">\n              <label htmlFor="postForm-content">Post:</label>\n              <textarea\n                id="postForm-content"\n                className="form-control"\n                name="content"\n                placeholder="What would you like to tell us?"\n              />\n            </div>\n          </div>\n          <div className="card-footer">\n            <button type="submit" className="btn btn btn-outline-primary">\n              Submit\n              <div className="ripple-wrapper" />\n            </button>\n          </div>\n        </form>\n      </div>\n      <hr />\n      <div className="posts">\n        <h2>Posts</h2>\n        {this._renderPosts()}\n      </div>\n    </div>\n  );\n}\n\n_renderPosts() {\n  const { posts } = this.props;\n\n  return posts.map((post, index) => (\n    <div className="post card card-default" key={index}>\n      <div className="card-body">{post.content}</div>\n      <div className="post-author card-footer">{post.author}</div>\n    </div>\n  ));\n}\n')),(0,a.kt)("p",null,"We have replaced the old sequence of\n",(0,a.kt)("inlineCode",{parentName:"p"},"<div className='post card card-default'>")," tags with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"{this._renderPosts()}")," expression, which tells React to insert the return\nvalue of our new ",(0,a.kt)("inlineCode",{parentName:"p"},"_renderPosts()")," method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"_renderPosts()")," method traverses the array of posts available as\n",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.posts")," (",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," refers to the page controller's state in\npage views) and creates a new array containing the rendered posts. Notice\nthat we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," in our view because we are\nreferencing external data, not the internal state of our view component."),(0,a.kt)("p",null,"The structure of the UI representing a post has had its static content\nreplaced with the ",(0,a.kt)("inlineCode",{parentName:"p"},"{post.content}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{post.author}")," expressions injecting\nthe content and the author of the post, and we have added a new ",(0,a.kt)("inlineCode",{parentName:"p"},"key={index}"),"\nattribute (technically, it is a React element property, but we'll use the XML\nterminology in this tutorial). The ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," attribute is required by React to help\nit identify parts of the DOM, therefore its value must be unique within the\ncontext and represent a relationship between the DOM fragment and the data.\nHere we set it to the index of the current post in the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," array."),(0,a.kt)("p",null,"In practice you should not use array indexes as keys because shifting or\nmodifying the contents of the array will result in using the same keys for\ndifferent items in each rendering, which will result in a strange and quirky\nbehavior, especially for components with their own state. It is best to use\nunique identifiers, such as the primary key of the record provided by the\ndatabase."),(0,a.kt)("p",null,"Since we do not have the posts stored in an actual database, we're going to\nhelp ourselves in a different way, but we'll address that later in this\ntutorial."),(0,a.kt)("h2",{id:"creating-new-components"},"Creating new components"),(0,a.kt)("p",null,"Now the view looks better, but it's still not perfect, because the view still\nfeels bulky. To fix that, we start by moving the post rendering to a new\ncomponent."),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/post")," directory and the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/post/Post.jsx"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/post/post.less")," files."),(0,a.kt)("p",null,"Put the following code into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Post.jsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { AbstractComponent } from \'@ima/react-page-renderer\';\nimport React from \'react\';\n\nexport default class Post extends AbstractComponent {\n  render() {\n    const { content, author } = this.props;\n\n    return (\n      <div className="post card card-default">\n        <div className="card-body">{content}</div>\n        <div className="post-author card-footer">{author}</div>\n      </div>\n    );\n  }\n}\n')),(0,a.kt)("p",null,"In this component we access the post content and author name in our ",(0,a.kt)("inlineCode",{parentName:"p"},"render()"),"\nmethod using the ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," object, which contains a hash object of\nproperties passed to the React component by whatever code is using it."),(0,a.kt)("p",null,"To use our new component, we need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"_renderPosts()")," method in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeView.jsx")," file to the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"return posts.map((post, index) => {\n  return <Post key={index} content={post.content} author={post.author} />;\n});\n")),(0,a.kt)("p",null,"...and import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," component by adding the following import to the\nbeginning of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Post from 'app/component/post/Post';\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": You can notice that so far we ",(0,a.kt)("strong",{parentName:"p"},"haven't used relative imports")," when importing\nour custom JS modules from inside of the app directory structure. This is\nbecause IMA.js adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory to the ",(0,a.kt)("strong",{parentName:"p"},"lookup path"),". This means that\nyou can refer to any file inside ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," directory through an absolute path,\nwhich makes most of the imports much cleaner.")),(0,a.kt)("p",null,"To finish the creation of the post component, we need to move the related\nstyles from ",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/homeView.less")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/post/post.less"),".\nMove the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"post.less")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".post-author {\n  text-align: @post-author-alignment;\n  font-style: italic;\n  font-size: 85%;\n}\n")),(0,a.kt)("p",null,'We can further improve our page view structure by refactoring-out the\n"new post" form to a separate component. Create the ',(0,a.kt)("inlineCode",{parentName:"p"},"app/component/postingForm"),"\ndirectory and the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/postingForm/PostingForm.jsx")," file. Then, put the\nfollowing code into the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/postingForm/PostingForm.jsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { AbstractComponent } from \'@ima/react-page-renderer\';\nimport React from \'react\';\n\nexport default class PostingForm extends AbstractComponent {\n  render() {\n    return (\n      <div className="posting-form card">\n        <form action="" method="post">\n          <h5 className="card-header">Add a post</h5>\n          <div className="card-body">\n            <div className="form-group">\n              <label htmlFor="postForm-name">Name:</label>\n              <input\n                id="postForm-name"\n                className="form-control"\n                type="text"\n                name="author"\n                placeholder="Your name"\n              />\n            </div>\n            <div className="form-group">\n              <label htmlFor="postForm-content">Post:</label>\n              <textarea\n                id="postForm-content"\n                className="form-control"\n                name="content"\n                placeholder="What would you like to tell us?"\n              />\n            </div>\n          </div>\n          <div className="card-footer">\n            <button type="submit" className="btn btn btn-outline-primary">\n              Submit\n              <div className="ripple-wrapper" />\n            </button>\n          </div>\n        </form>\n      </div>\n    );\n  }\n}\n')),(0,a.kt)("p",null,"Nothing new here, we just extracted the code from home controller's view and\nput it into a new React component."),(0,a.kt)("p",null,"Now update the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method in the home controller's view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <div className="l-home container">\n    <h1>Guestbook</h1>\n    <PostingForm />\n\n    <hr />\n\n    <div className="posts">\n      <h2>Posts</h2>\n      {this._renderPosts()}\n    </div>\n  </div>\n);\n')),(0,a.kt)("p",null,"To finish up, import the posting form component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import PostingForm from 'app/component/postingForm/PostingForm';\n")),(0,a.kt)("p",null,"So far we've been ",(0,a.kt)("strong",{parentName:"p"},"only refactoring our code and moving few bits around")," to make it cleaner.\nWhen you refresh the page, you should see the same page as you ended up with after the end of\nthe previous tutorial."),(0,a.kt)("p",null,"Now that our code looks much cleaner, we can look into fetching the guestbook\nposts from the server. However, if you'd like to linger a little longer and\nlearn more how the controller and view communicate by passing state, check out\nthe following optional section ",(0,a.kt)("a",{parentName:"p",href:"#notes-on-communication-between-controllers-and-views"},"Notes on communication between controllers and\nviews"),"."),(0,a.kt)("h2",{id:"notes-on-communication-between-controllers-and-views"},"Notes on communication between controllers and views"),(0,a.kt)("p",null,"There are three ways the controllers and views communicate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"By passing state from the controller to the view ","\u2013")," this is the most\ncommon way of passing information."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"By emitting DOM events")," from the view and listening for them in the controller\nor parent components (using the ",(0,a.kt)("inlineCode",{parentName:"li"},"EventBus"),") ","\u2013"," this is\nthe most common way of notifying the controller or a parent UI component of\nthe user's actions in the view."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},'By emitting "global" events')," in the controller and / or view and listening for\nthem in the controller and / or view (using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dispatcher"),")\n","\u2013"," this is used only in very specific situations, like when the UI\nneeds to be notified about an external event captured by the controller and\nupdating the state is not practical.")),(0,a.kt)("h3",{id:"passing-state"},"Passing state"),(0,a.kt)("p",null,"The controller creates the initial state of the page by returning a hash object\nof values and promises from its ",(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method. The IMA.js then waits for all\nthe promises to resolve at the server, pass the resulting values as properties\nto the page view component, and renders the page to send it to the client."),(0,a.kt)("p",null,'The situation is a little more complicated at the client-side however. When the\npage is being "re-animated" after being rendered at the server-side, the IMA.js\nuses the controller\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"load()")," method and the returned object in the same way,\nthough the promises are usually resolved immediately using the data in the\ncache sent to the client along with the rendered page."),(0,a.kt)("p",null,"When the user navigates between pages, however, the IMA.js does not wait for\nall promises to resolve before rendering the new view. The IMA.js registers\ncallbacks on all returned promises, and whenever one of the promises resolves,\nIMA.js pushes the currently resolved fragment of the page state to the view."),(0,a.kt)("p",null,"On one hand, this allows you to display content as it loads (providing it is\ndecoupled) while displaying loading indicators where the content is not\navailable yet. On the other hand, this does require you to add more logic to\nyour view, checking whether the data is available or not, and displaying\nloading indicators where the data is not available yet."),(0,a.kt)("h3",{id:"emitting-events-using-the-eventbus"},"Emitting events using the EventBus"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventBus")," API allows your UI components to emit custom DOM\nevents that naturally propagate through the DOM tree representing the tree of\nyour UI components."),(0,a.kt)("p",null,"This is usually used to notify the parent components of user interaction with\ncustom controls in your UI, or to notify the page controller itself."),(0,a.kt)("p",null,"The custom events may have any name and carry arbitrary data that are not\nrestricted to JSON-serializable values."),(0,a.kt)("p",null,"Furthermore, the controllers can easily listen for the events dispatched using\nthe EventBus (unless the propagation of the event is stopped by a component\nhalf the way) by declaring event listener methods."),(0,a.kt)("p",null,"An event listener method is a method of a controller named by the first-letter\ncapitalized event name with the ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," prefix, for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"formSubmitted"),"\nevent can be listened for by defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"onFormSubmitted()")," method on your\ncontroller."),(0,a.kt)("p",null,"The first argument passed into the controller's event listener method will be\nthe event data, not the event object itself, as manipulating the event object\nonce it reaches the controller is pointless."),(0,a.kt)("h3",{id:"emitting-events-using-the-dispatcher"},"Emitting events using the Dispatcher"),(0,a.kt)("p",null,"The obvious limitation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventBus")," API is that it only allows\nto create events that propagate up the tree of the UI components. The common\nway to propagate event in other directions, or to other parts of the UI, or\nfrom the controller to the UI is using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher")," API."),(0,a.kt)("p",null,"The Dispatcher allows any UI component and controller to register and\nderegister event listeners for arbitrarily named events and fire these events\nwith arbitrary data."),(0,a.kt)("p",null,"The events propagate directly to the registered event listeners with no way to\nstop their propagation."),(0,a.kt)("p",null,"Note that events distributed using the Dispatcher are useful only in very\nspecific use-cases, so the Dispatcher logs a warning to the console if there\nare no listeners registered for the fired event in order to notify you of\npossible typos in event names."),(0,a.kt)("p",null,"As always, you can learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"EventBus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher")," ",(0,a.kt)("a",{parentName:"p",href:"/basic-features/events"},"in the documentation")))}c.isMDXComponent=!0}}]);