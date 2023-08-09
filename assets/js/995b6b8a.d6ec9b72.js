"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(5773),o=(n(7294),n(3905));const r={title:"Fetching Data",description:"Tutorial > Fetching Data"},s=void 0,i={unversionedId:"tutorial/fetching-data",id:"tutorial/fetching-data",title:"Fetching Data",description:"Tutorial > Fetching Data",source:"@site/../docs/tutorial/fetching-data.md",sourceDirName:"tutorial",slug:"/tutorial/fetching-data",permalink:"/tutorial/fetching-data",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/tutorial/fetching-data.md",tags:[],version:"current",lastUpdatedBy:"SVO404",lastUpdatedAt:1691570640,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{title:"Fetching Data",description:"Tutorial > Fetching Data"},sidebar:"tutorial",previous:{title:"Adding Some State",permalink:"/tutorial/adding-some-state"},next:{title:"Writing Posts",permalink:"/tutorial/writing-posts"}},l={},c=[{value:"Mocking REST API",id:"mocking-rest-api",level:2},{value:"Entity Class",id:"entity-class",level:3},{value:"Factory Class",id:"factory-class",level:3},{value:"Resource Class",id:"resource-class",level:3},{value:"Service class",id:"service-class",level:3},{value:"Dependency injection",id:"dependency-injection",level:2},{value:"Object container &amp; <code>bind.js</code>",id:"object-container--bindjs",level:3},{value:"Using PostServices in HomeController",id:"using-postservices-in-homecontroller",level:3},{value:"Server-side rendering",id:"server-side-rendering",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"./adding-some-state"},"last part")," of this series we tidied up our HomeView component and split our render method\ninto much smaller and manageable components thanks to react. In this part we're going to\nmock the data fetching from server and learn more about IMA.js object container."),(0,o.kt)("h2",{id:"mocking-rest-api"},"Mocking REST API"),(0,o.kt)("p",null,"We won't go into building a REST API server with an actual database storing the\nguestbook posts - that is beyond this tutorial and IMA.js. To give you the idea\nof fetching data from the server, we'll create a simpler alternative."),(0,o.kt)("p",null,"We'll start by creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/assets/static/api")," directory and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/assets/static/api/posts.json")," file with the following content (",(0,o.kt)("strong",{parentName:"p"},"copied from\nour home controller and modified"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 4,\n    "content": "Never mistake motion for action.",\n    "author": "Ernest Hemingway"\n  },\n  {\n    "id": 3,\n    "content": "Quality means doing it right when no one is looking.",\n    "author": "Henry Ford"\n  },\n  {\n    "id": 2,\n    "content": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",\n    "author": "Aristotle"\n  },\n  {\n    "id": 1,\n    "content": "Reality is merely an illusion, albeit a very persistent one.",\n    "author": "Albert Einstein"\n  }\n]\n')),(0,o.kt)("p",null,"Notice how we added the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field - as mentioned previously, in a real world\napplication, you should rely on the primary keys provided to you by your\nbackend instead of generating them yourself."),(0,o.kt)("p",null,"Now that we have our data ready, we just need some way to actually fetch it\nfrom the server. To do that, we'll introduce 4 new classes into our project:\nan ",(0,o.kt)("strong",{parentName:"p"},"entity")," class, a ",(0,o.kt)("strong",{parentName:"p"},"factory")," class, a ",(0,o.kt)("strong",{parentName:"p"},"resource")," class, and a ",(0,o.kt)("strong",{parentName:"p"},"service")," class."),(0,o.kt)("h3",{id:"entity-class"},"Entity Class"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"entity class")," represents a typed data holder for our data (which is useful\nfor debugging) and allows us to add various computed properties without having\nto modify our API backend."),(0,o.kt)("p",null,"Let's create the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/model")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app/model/post")," directories and then a new\nfile ",(0,o.kt)("inlineCode",{parentName:"p"},"app/model/post/PostEntity.js")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class PostEntity {\n  constructor(data) {\n    this.id = data.id;\n\n    this.content = data.content;\n\n    this.author = data.author;\n  }\n}\n")),(0,o.kt)("p",null,"We've just created a new class, exported it, and that's it, no more is currently\nrequired. Our new entity class extracts the data obtained from a data object\n(for example obtained from a deserialized JSON) and sets it to its fields."),(0,o.kt)("h3",{id:"factory-class"},"Factory Class"),(0,o.kt)("p",null,"So, with our entity class ready, let's take a look at the ",(0,o.kt)("strong",{parentName:"p"},"factory")," class. ",(0,o.kt)("strong",{parentName:"p"},"The\nfactory class will be used to create new entities from data objects and arrays\nof data objects")," - but in our case, the latter will suffice for now."),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"app/model/post/PostFactory.js")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PostEntity from './PostEntity';\n\nexport default class PostFactory {\n  static get $dependencies() {\n    return [];\n  }\n\n  createList(entities) {\n    return entities.map(entityData => new PostEntity(entityData));\n  }\n}\n")),(0,o.kt)("p",null,"Our new factory class has just one method named ",(0,o.kt)("inlineCode",{parentName:"p"},"createList()"),". The\nmethod takes an array of data objects and returns an array of post entities."),(0,o.kt)("h3",{id:"resource-class"},"Resource Class"),(0,o.kt)("p",null,"We have our entity and factory, now we need a resource class. ",(0,o.kt)("strong",{parentName:"p"},"The resource\nclass represents our single point of access to a single REST API resource"),"\n(or entity collection, if you will). The sole purpose of a resource class is to\nprovide a relatively low-level API for accessing the REST API resource. Create\na new ",(0,o.kt)("inlineCode",{parentName:"p"},"app/model/post/PostResource.js")," file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PostFactory from './PostFactory';\n\nexport default class PostResource {\n  static get $dependencies() {\n    return ['$Http', PostFactory];\n  }\n\n  constructor(http, factory) {\n    this._http = http;\n\n    this._factory = factory;\n  }\n\n  getEntityList() {\n    return this._http\n      .get('http://localhost:3001/static/api/posts.json', {})\n      .then(response => this._factory.createList(response.body));\n  }\n}\n")),(0,o.kt)("p",null,"We defined the ",(0,o.kt)("inlineCode",{parentName:"p"},"getEntityList()")," method in our resource class which we'll use\nto fetch the posts from the server. In a real-world application we would use\nconfiguration to set the URL to the resource instead of specifying it like\nthis, but that is beyond the scope of this tutorial."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_http.get()")," method returns a new promise that resolves to the response\nobject of a GET HTTP request sent to the specified URL, with the provided query\nparameters (the second parameter currently set to an empty object). The method\nalso automatically parses the JSON in our response body."),(0,o.kt)("p",null,"We then post-process the parsed response data using the Promise's ",(0,o.kt)("inlineCode",{parentName:"p"},"then"),"\ncallback which uses our factory to create an array of post entities."),(0,o.kt)("p",null,"You may have noticed that we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"factory")," parameters in our\nconstructor. This is how we provide the resource with the HTTP agent provided\nby IMA.js, and our post entity factory. We'll take a look at how to do this\nproperly in a moment."),(0,o.kt)("h3",{id:"service-class"},"Service class"),(0,o.kt)("p",null,"You now may be wondering what is the point of the service class.\nIt isn't that useful in our tutorial, but it would be essential in a bigger application.\nThe ",(0,o.kt)("strong",{parentName:"p"},"resource should handle only sending requests and\nprocessing responses")," without any high-level operations. The ",(0,o.kt)("strong",{parentName:"p"},"service class is\nthere to take care of the high-level stuff"),". For example, should we have a REST\nAPI that provides us with paged access to posts and we would want to fetch all\nposts since a specific one, this would be handled by the service. The service\nwould fetch the necessary pages from the REST API, construct the result and\nresolve to the constructed sequence of post entities."),(0,o.kt)("p",null,"In our case, however, the service will be very plain. Create a new\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/model/post/PostService.js")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PostResource from './PostResource';\n\nexport default class PostService {\n  static get $dependencies() {\n    return [PostResource];\n  }\n\n  constructor(resource) {\n    this._resource = resource;\n  }\n\n  getPosts() {\n    return this._resource.getEntityList();\n  }\n}\n")),(0,o.kt)("p",null,"Now that we have our entity, factory, resource and service, you may be thinking\nthat this is a little too much code for something so simple. Well, that depends\non many things. If you can expect mostly uniform data from your REST API with\nlittle modifications required, you may want to use a reflection-powered\nsolution that requires you only to specify a single configuration item (API\nroot URL) and to create entity classes. The solution shown here is more robust\nand flexible, allowing you to make slight adjustments to suit every resource\nyou are working with as required."),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"So how do we actually start using our post service? First we need to wire\neverything up, well we actually already did that. You may have noticed that in most of the\nclasses we used some weird static getter called ",(0,o.kt)("inlineCode",{parentName:"p"},"$dependencies"),", that's how IMA.js built\nin dependency injection works."),(0,o.kt)("p",null,"IMA.js uses internally the Object Container class to handle all dependencies (you can\n",(0,o.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"read more about it in the documentation"),"), but the basic usage is fairly easy.\nEvery class that wants to use DI has to define static getter which returns an array of instances\nwe want to inject to the constructor in the same order as defined in the array itself. Real\nworld example would then look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import HttpClient from 'http';\nimport PostFactory from './PostFactory';\n\nexport default class PostResource {\n  static get $dependencies() {\n    return [HttpClient, PostFactory];\n  }\n\n  constructor(http, factory) {\n    // http and factory contains instances of their respective classes\n    this._http = http;\n    this._factory = factory;\n  }\n}\n")),(0,o.kt)("p",null,"The only condition to have DI working as expected is, that if you want to use any class as a dependency,\n",(0,o.kt)("strong",{parentName:"p"},"it has to define static getter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"$dependencies"),". Even if it does not have any dependencies and returns\nempty array. Otherwise OC will not recognize this as valid class to inject and it won't work."),(0,o.kt)("h3",{id:"object-container--bindjs"},"Object container & ",(0,o.kt)("inlineCode",{parentName:"h3"},"bind.js")),(0,o.kt)("p",null,"Object container offers more functionality than just defining DI in the ",(0,o.kt)("inlineCode",{parentName:"p"},"$dependencies")," method.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"app/config/bind.js")," offers full access to our Object container in the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," method.\nThis allows you to do some pretty amazing stuff. You can create aliases for classes, constants,\ninject dependencies and more."),(0,o.kt)("p",null,"The object container serves mostly the following purposes -\nconfiguring class constructor dependencies, setting default implementing\nclasses of interfaces, creating aliases for classes, global registry of\nvalues and an instance factory and registry."),(0,o.kt)("p",null,"Just like an ordinary ",(0,o.kt)("strong",{parentName:"p"},"dependency injector"),", the Object Container is used to\nspecify the dependencies of our classes, create and retrieve shared instances\nand create new instances on demand."),(0,o.kt)("p",null,"The object container allows us to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Specify the dependencies")," of a class using the ",(0,o.kt)("inlineCode",{parentName:"li"},"inject()")," method or by\noverriding the ",(0,o.kt)("inlineCode",{parentName:"li"},"$dependencies()")," static getter on the class itself (the\ndependencies will be passed in the constructor)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create string aliases")," for our classes using the ",(0,o.kt)("inlineCode",{parentName:"li"},"bind()")," method (like the\n",(0,o.kt)("inlineCode",{parentName:"li"},"$Http")," alias we used to retrieve the HTTP agent provided by IMA.js)."),(0,o.kt)("li",{parentName:"ul"},"Create named ",(0,o.kt)("strong",{parentName:"li"},"object container-global constants")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"constant()")," method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Specify the default implementation")," of an ",(0,o.kt)("strong",{parentName:"li"},"interface")," using the ",(0,o.kt)("inlineCode",{parentName:"li"},"provide()"),"\nmethod (this allows us to specify the interface as a dependency and switch\nthe implementation everywhere in our application by changing a single\nconfiguration item).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We can only access the object container in this configuration file"),". After that\nit works behind the scenes, providing dependencies and managing our shared\ninstances as needed. You can find out more about its ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Bootstrap"},"API")," by studying the\n",(0,o.kt)("a",{parentName:"p",href:"/basic-features/object-container"},"documentation")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/seznam/ima/blob/master/packages/core/src/ObjectContainer.js"},"source code"),"."),(0,o.kt)("h3",{id:"using-postservices-in-homecontroller"},"Using PostServices in HomeController"),(0,o.kt)("p",null,"Let's take another look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"$Http")," alias among the dependencies of our post\nresource - as already mentioned, this is an instance of the HTTP agent (client)\nprovided by the IMA.js. All utilities and services provided by IMA.js are bound\nto the object container via aliases and have their aliases prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," to\nprevent accidental name collisions, but most can be used without having to use\naliases as dependency identifiers by specifying the classes and interfaces\nthemselves as dependencies."),(0,o.kt)("p",null,"Next we modify the dependencies of the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeController.js")," by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"PostService")," dependency using the static getter syntax. The resulting code looks\nas follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AbstractController } from '@ima/core';\nimport PostService from 'app/model/post/PostService';\n\nexport default class HomeController extends AbstractController {\n  static get $dependencies() {\n    return [PostService];\n  }\n\n  constructor(postService) {\n    super();\n\n    this._postService = postService;\n  }\n\n  ...\n}\n")),(0,o.kt)("p",null,"This will push an instance of our post service as the first argument to the\nconstructor of our home page controller. With the post service safely in our\n",(0,o.kt)("inlineCode",{parentName:"p"},"_postService")," field, we can use it to fetch the posts from the server in our ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"return {\n  posts: this._postService.getPosts()\n};\n")),(0,o.kt)("p",null,"Finally, we can make use of our new post entities in the home controller's view\n(",(0,o.kt)("inlineCode",{parentName:"p"},"app/page/home/HomeView.jsx"),"). Let's modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"_renderPosts()")," method to look\nlike this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"return this.props.posts.map(post => {\n  return <Post key={post.id} content={post.content} author={post.author} />;\n});\n")),(0,o.kt)("p",null,"Notice how we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"post.id")," as the react element key here. Now go ahead,\nrefresh the page and you'll see the posts still there,\nbut this time fetched from the server! Or are they?"),(0,o.kt)("h2",{id:"server-side-rendering"},"Server-side rendering"),(0,o.kt)("p",null,"If you open your browsers's developer tools, you may notice that the network log does\nnot show any request to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/static/api/posts.json"),"."),(0,o.kt)("p",null,'You may remember that IMA.js is an isomorphic JavaScript application stack.\nThis means that our application gets rendered at the server first, then it is\nsent to the client with a serialized state information, and then the\napplication is "reanimated" at the client-side using the state information.'),(0,o.kt)("p",null,"IMA.js caches the requests we make using the HTTP service at the server-side\nand sends the serialized cache to the client. The cache is then deserialized at\nthe client-side, so the request to\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/static/api/posts.json")," we do in our post resource will\nbe resolved from the cache, leading to no additional HTTP request being made."))}u.isMDXComponent=!0}}]);