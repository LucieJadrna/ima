"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[9696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(5773),a=(n(7294),n(3905));const r={title:"Writing Posts",description:"Tutorial > Writing Posts"},s=void 0,i={unversionedId:"tutorial/writing-posts",id:"tutorial/writing-posts",title:"Writing Posts",description:"Tutorial > Writing Posts",source:"@site/../docs/tutorial/writing-posts.md",sourceDirName:"tutorial",slug:"/tutorial/writing-posts",permalink:"/tutorial/writing-posts",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/tutorial/writing-posts.md",tags:[],version:"current",lastUpdatedBy:"Jan \u0160ime\u010dek",lastUpdatedAt:1710848689,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Writing Posts",description:"Tutorial > Writing Posts"},sidebar:"tutorial",previous:{title:"Fetching Data",permalink:"/tutorial/fetching-data"},next:{title:"Final Polish",permalink:"/tutorial/final-polish"}},p={},l=[{value:"Processing input from user",id:"processing-input-from-user",level:2},{value:"Updating the form",id:"updating-the-form",level:3},{value:"Firing EventBus events",id:"firing-eventbus-events",level:3},{value:"Capturing EventBus events",id:"capturing-eventbus-events",level:3},{value:"Updating our post service classes",id:"updating-our-post-service-classes",level:4},{value:"Defining the <code>onPostSubmitted</code> method",id:"defining-the-onpostsubmitted-method",level:4},{value:"Updating the API",id:"updating-the-api",level:3}],h={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/tutorial/fetching-data"},"previous part")," we created our classes and services to handle data fetching from server.\nWe also learned something about the vital parts of IMA.js - ",(0,a.kt)("strong",{parentName:"p"},"object container")," and ",(0,a.kt)("strong",{parentName:"p"},"server-side rendering"),".\nIn this smaller section of the tutorial, we're going to be processing input from user and\nsending those data to the server."),(0,a.kt)("h2",{id:"processing-input-from-user"},"Processing input from user"),(0,a.kt)("p",null,"To write new posts, we need to address several issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notifying the controller")," that the user submitted the new post."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sending the post")," to our server via HTTP (remember, we don't have\nan actual REST API backend, so we're going to mock this)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Waiting for our post")," to be saved."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Showing the updated")," list of posts.")),(0,a.kt)("p",null,"We want the controller to handle submitting posts to the guest book in our\napplication instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"postingForm")," component to ",(0,a.kt)("strong",{parentName:"p"},'maintain a single\n"source of truth"')," in our application. This should be the case for all\ninformation that is related to the page as a whole. ",(0,a.kt)("strong",{parentName:"p"},"Local information")," (for\nexample starting music playback when the user clicks the play button of some\nplayer component) may remain stored within the component itself, as it is not\nnecessarily important to the overall state of the page."),(0,a.kt)("p",null,"We'll use another IMA.js service to notify the controller that the user\nsubmitted a new post - the ",(0,a.kt)("strong",{parentName:"p"},"EventBus"),". In case you did not read ",(0,a.kt)("a",{parentName:"p",href:"/tutorial/adding-some-state#notes-on-communication-between-controllers-and-views"},"the details\nabout communication between the controller and the view"),"\n, the EventBus is an internal event system, built on top of DOM events, used for communication like this."),(0,a.kt)("h3",{id:"updating-the-form"},"Updating the form"),(0,a.kt)("p",null,"First update the ",(0,a.kt)("inlineCode",{parentName:"p"},"<form ...")," markup in the view of our ",(0,a.kt)("inlineCode",{parentName:"p"},"PostingForm")," component\n(",(0,a.kt)("inlineCode",{parentName:"p"},"app/component/postingForm/PostingForm.jsx"),") by adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"onSubmit")," event\nlistener:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<form action="" method="post" onSubmit={e => this._onSubmit(e)}>\n')),(0,a.kt)("p",null,"Then we need to hook our inputs to ",(0,a.kt)("inlineCode",{parentName:"p"},"_onChange()")," handler which will set the contents of\nthose input to the state of our ",(0,a.kt)("inlineCode",{parentName:"p"},"PostingForm")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<input\n  id="postForm-name"\n  className="form-control"\n  type="text"\n  name="author"\n  value={this.state.author}\n  onChange={e => this._onChange(e)}\n  placeholder="Your name"\n/>\n...\n<textarea\n  id="postForm-content"\n  className="form-control"\n  name="content"\n  value={this.state.content}\n  onChange={e => this._onChange(e)}\n  placeholder="What would you like to tell us?"\n/>\n')),(0,a.kt)("p",null,"We can't forget to define the default state for these two keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(props, context) {\n  super(props, context);\n\n  this.state = {\n    author: '',\n    content: ''\n  };\n}\n")),(0,a.kt)("p",null,"This adds some internal state to our form component, which we'll maintain\nseparately from the main page state maintained by the home page controller."),(0,a.kt)("p",null,"Now we need to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"_onChange()")," handler. We're going to use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute of input and textarea fields so both can be handled by defining only one method.\nBut feel free to define ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," handlers for each input separately, if that suits you better.\nOur ",(0,a.kt)("inlineCode",{parentName:"p"},"_onChange()")," handler will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"_onChange(event) {\n  this.setState({\n    [event.target.name]: event.target.value\n  });\n}\n")),(0,a.kt)("p",null,"The only thing that remains is to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"_onSubmit()")," in our component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"_onSubmit(event) {\n  event.preventDefault();\n\n  this.fire('postSubmitted', {\n    author: this.state.author,\n    content: this.state.content\n  });\n\n  // Reset the state after submitting\n  this.setState({\n    author: '',\n    content: ''\n  });\n}\n")),(0,a.kt)("h3",{id:"firing-eventbus-events"},"Firing EventBus events"),(0,a.kt)("p",null,"We can ",(0,a.kt)("strong",{parentName:"p"},"fire EventBus events")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"this.fire()")," method that is available\nto us by extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractComponent"),". So in this example\nwe fire the ",(0,a.kt)("inlineCode",{parentName:"p"},"postSubmitted")," event through EventBus with the form data as\nthe event data, clear the form, and finally we prevent the browser from\nsubmitting the form to the server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"this.fire()")," method is a ",(0,a.kt)("strong",{parentName:"p"},"short-hand")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils.$EventBus.fire(this, ...)"),"\ncall, which fires the custom DOM event using the EventBus. The ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils"),"\nproperty is set to the view utils - various objects, data and services that\nare useful for rendering the UI - and is obtained from the React context.\nThe value returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"this.utils")," is configurable in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"app/config/bind.js")," configuration file and is represented by the constant\n",(0,a.kt)("inlineCode",{parentName:"p"},"$Utils"),"."),(0,a.kt)("h3",{id:"capturing-eventbus-events"},"Capturing EventBus events"),(0,a.kt)("p",null,"Now we need a way to capture the event in our home page controller, so open up\nthe home controller (the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeController.js")," file) and add the\nfollowing method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"onPostSubmitted(eventData) {\n  // TODO\n}\n")),(0,a.kt)("p",null,"The IMA.js will automatically invoke this method when the ",(0,a.kt)("inlineCode",{parentName:"p"},"postSubmitted")," event\nbus event occurs. For details on how this mechanism works, please refer to the\n",(0,a.kt)("a",{parentName:"p",href:"/tutorial/adding-some-state#emitting-events-using-the-eventbus"},"Emitting events using the EventBus"),"\nsection of the third chapter of this tutorial."),(0,a.kt)("p",null,"Notice that our ",(0,a.kt)("inlineCode",{parentName:"p"},"onPostSubmitted()")," event listener is a public method. This is\nbecause it represents the (event) interface for the view components."),(0,a.kt)("h4",{id:"updating-our-post-service-classes"},"Updating our post service classes"),(0,a.kt)("p",null,"Before we fill our ",(0,a.kt)("inlineCode",{parentName:"p"},"onPostSubmitted()")," event listener with content however,\nwe need to update our post model classes first. Open the post factory class (",(0,a.kt)("inlineCode",{parentName:"p"},"app/model/post/PostFactory.js"),")\nand add the following method for creating a single post:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"createEntity(entityData) {\n  return new PostEntity(entityData);\n}\n")),(0,a.kt)("p",null,"Since we don't like to repeat ourselves, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"createList()")," method as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"return entities.map(entityData => this.createEntity(entityData));\n")),(0,a.kt)("p",null,"Now add the following method for creating new posts to the post resource\n(",(0,a.kt)("inlineCode",{parentName:"p"},"app/model/post/PostResource.js"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"createPost(postData) {\n  return this._http\n    .post('http://localhost:3001/static/api/posts.json', postData)\n    .then(response => this._factory.createEntity(response.body));\n}\n")),(0,a.kt)("p",null,"This method accepts a plain object containing the new post data and submits\nthem to the server using an HTTP POST request. The ",(0,a.kt)("inlineCode",{parentName:"p"},"_http.post()")," method sends\nthe HTTP POST request and returns a promise that resolves to the server's\nresponse with the response body parsed as JSON. We then use the server's\nresponse to create a post entity representing the saved post."),(0,a.kt)("p",null,"Next we need to create a method for creating posts in our post service\n(",(0,a.kt)("inlineCode",{parentName:"p"},"app/model/post/PostService.js"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"createPost(postData) {\n  postData.id = null;\n  return this._resource.createPost(postData);\n}\n")),(0,a.kt)("p",null,"This method sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," as it is expected for posts that were\nnot created yet (the post IDs should be generated by our backend) and uses the\npost resource to create the post. The method returns a promise that resolves to\nthe post entity representing the created post."),(0,a.kt)("h4",{id:"defining-the-onpostsubmitted-method"},"Defining the ",(0,a.kt)("inlineCode",{parentName:"h4"},"onPostSubmitted")," method"),(0,a.kt)("p",null,"With that in place, we can now fill in the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"onPostSubmitted()"),"\nevent listener in the home page controller (",(0,a.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeController.js"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"this._postService\n  .createPost(eventData)\n  .then(() => this._postService.getPosts())\n  .then(posts => this.setState({ posts }));\n")),(0,a.kt)("p",null,"This snippet calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPost()")," method with our event data, waits for the\npost to be created, then requests the current list of posts from the post\nservice and updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," field in the view's state using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," method updated only the fields of the\nstate that are present in the provided state object without modifying the rest,\nand notifies the view about the new state so that the view is re-rendered."),(0,a.kt)("h3",{id:"updating-the-api"},"Updating the API"),(0,a.kt)("p",null,"Now that everything is wired up, we can start submitting new posts, right?\nWell, not so fast. Remember, we do not have an actual REST API backend, so the\nHTTP POST request will fail and no new post will be created."),(0,a.kt)("p",null,"Since we don't want to implement an actual backend, we will work around this\nissue by implementing a ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Mock_object"},"mock")," ",(0,a.kt)("strong",{parentName:"p"},"HTTP agent")," that fetches the posts from the server and then acts as if sending\nsubsequent requests to the server while managing our state (the created posts)\nlocally and creating responses on spot without any actual communication with\nthe server. This approach is useful for both tests and our simple tutorial."),(0,a.kt)("p",null,"To create our HTTP mock create the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/mock")," directory and the\n",(0,a.kt)("inlineCode",{parentName:"p"},"app/mock/MockHttpAgent.js")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { HttpAgentImpl } from '@ima/core';\n\nconst GET_DELAY = 70; // milliseconds\nconst POST_DELAY = 90; // milliseconds\n\nexport default class MockHttpAgent extends HttpAgentImpl {\n  static get $dependencies() {\n    return ['$HttpAgentProxy', '$Cache', '$CookieStorage', '$Settings.$Http'];\n  }\n\n  constructor(proxy, cache, cookie, config) {\n    super(proxy, cache, cookie, config);\n\n    this._posts = null;\n  }\n\n  get(url, data, options = {}) {\n    if (!this._posts) {\n      return super.get(url, data, options).then(response => {\n        this._posts = response.body;\n\n        return {\n          body: this._posts.map(post => Object.assign({}, post))\n        };\n      });\n    }\n\n    return new Promise(resolve => {\n      setTimeout(() => {\n        resolve({\n          body: this._posts.map(post => Object.assign({}, post))\n        });\n      }, GET_DELAY);\n    });\n  }\n\n  post(url, data, options = {}) {\n    if (!this._posts) {\n      return this.get(url, {}).then(() => this.post(url, data));\n    }\n\n    return new Promise(resolve => {\n      setTimeout(() => {\n        let clone = Object.assign({}, data);\n\n        clone.id = this._posts[0].id + 1;\n        this._posts.unshift(clone);\n\n        resolve({\n          body: Object.assign({}, clone)\n        });\n      }, POST_DELAY);\n    });\n  }\n}\n")),(0,a.kt)("p",null,"Let's take this class apart and take a look at what it does. We extend the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ima/http/HttpAgent")," class which is the HTTP agent provided by IMA.js, so\nwe need to obtain its dependencies in our constructor\n(",(0,a.kt)("inlineCode",{parentName:"p"},"proxy, cache, cookie, config"),") and pass them to the super-constructor."),(0,a.kt)("p",null,"Next we set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"_posts")," field that we'll use to keep track of all posts and few REST API methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"get()")," method")," checks whether we already have the posts fetched from the\nserver, and, if we don't, it uses the super-implementation to fetch them and\nstore them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"_posts")," field. If the posts have already been fetched, the\nmethod returns a promise that resolves to a clone of the posts after the\nconfigured delay.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"post()")," method")," checks whether we already have the posts fetched from the\nserver, and, if we don't, it fetches them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," method and then\ncalls itself again. If we already have the posts fetched, the method clones the\ndata passed to it in parameters, generates an ID, stores the new record as the\nfirst element of the ",(0,a.kt)("inlineCode",{parentName:"p"},"_posts")," array while shifting the rest of the posts and\nresolves the returned promise after the configured delay to the stored post."))),(0,a.kt)("p",null,"We included the delays in our ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post()")," methods to simulate the\nlatency imposed by a real networking. Also notice how we always clone the data\nwe receive before storing them internally and return only clones of our\ninternal posts storage. This is to emulate the server behavior reliably, so\nthat new posts won't modify previously returned post arrays and later\nmodifications of data passed to or received from our mock server won't modify\nthe internal state or data returned by other calls to our methods."),(0,a.kt)("p",null,"To wire up our HTTP mock into our application, we need to update the dependencies of the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/model/post/PostResource.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import PostFactory from './PostFactory';\nimport MockHttpAgent from 'app/mock/MockHttpAgent';\n\nexport default class PostResource {\n  static get $dependencies() {\n    return [MockHttpAgent, PostFactory];\n  }\n\n  ...\n}\n")),(0,a.kt)("p",null,"Go ahead and check the result in the browser, you will now be able to write new\nposts to our guestbook (which will disappear once you reload the page, since we\nkeep the posts only in our HTTP mock)."))}u.isMDXComponent=!0}}]);