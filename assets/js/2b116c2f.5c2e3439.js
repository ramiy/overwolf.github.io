"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1220],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"sdk-introduction",title:"Overwolf SDK introduction",sidebar_label:"SDK Introduction"},l=void 0,p={unversionedId:"start/sdk-introduction",id:"start/sdk-introduction",title:"Overwolf SDK introduction",description:"Overwolf's SDK unlocks in-game app development, and the documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf\u2019s diverse APIs. To get you started, here are some important basics:",source:"@site/pages/docs/start/sdk-introduction.mdx",sourceDirName:"start",slug:"/start/sdk-introduction",permalink:"/docs/start/sdk-introduction",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/sdk-introduction.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"sdk-introduction",title:"Overwolf SDK introduction",sidebar_label:"SDK Introduction"},sidebar:"start",previous:{title:"App Creation process",permalink:"/docs/start/app-creation-process"},next:{title:"Using our dev tools",permalink:"/docs/start/using-dev-tools"}},d={},u=[{value:"Get whitelisted as a developer",id:"get-whitelisted-as-a-developer",level:2},{value:"App architecture",id:"app-architecture",level:2},{value:"Manifest file",id:"manifest-file",level:3},{value:"HTML/JS source files",id:"htmljs-source-files",level:3},{value:"Assets",id:"assets",level:3},{value:"OPK package",id:"opk-package",level:3},{value:"Safety &amp; Security",id:"safety--security",level:2},{value:"API",id:"api",level:2},{value:"Overwolf Plugins",id:"overwolf-plugins",level:2},{value:"Real world sample app",id:"real-world-sample-app",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Overwolf's SDK unlocks in-game app development, and the documents listed in the left-hand side navigation bar have all the information you need to create apps using Overwolf\u2019s diverse ",(0,o.mdx)("a",{parentName:"p",href:"../api/overwolf-api-overview"},"APIs"),". To get you started, here are some important basics:"),(0,o.mdx)("h2",{id:"get-whitelisted-as-a-developer"},"Get whitelisted as a developer"),(0,o.mdx)("p",null,"Only whitelisted Overwolf developer accounts can load or install apps that are not available on the Overwolf store, including unreleased beta versions. If you are not whitelisted, you will not be able to run or install such apps, which means that testing your work in progress will be difficult. Therefore, start by ",(0,o.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/start/submit-app-proposal#legal"},"submitting your app proposal")," in order to get whitelisted."),(0,o.mdx)("h2",{id:"app-architecture"},"App architecture"),(0,o.mdx)("p",null,"An Overwolf app's code has three main parts:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"A manifest file (manifest.json), detailing the properties of the app. More info ",(0,o.mdx)("a",{parentName:"li",href:"#manifest-file"},"here"),"."),(0,o.mdx)("li",{parentName:"ol"},"HTML / javascript source files. More info ",(0,o.mdx)("a",{parentName:"li",href:"#htmljs-source-files"},"here"),"."),(0,o.mdx)("li",{parentName:"ol"},"Visuals and images such as icons and buttons. More info ",(0,o.mdx)("a",{parentName:"li",href:"#assets"},"here"),".")),(0,o.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Only JS frameworks are supported")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"For example vue.js, angular.js, react, backbone.js and similar ones.",(0,o.mdx)("br",{parentName:"p"}),"\n","However, full-blown desktop application solutions such as electron.js, AppJS and similar ones are not supported.  "),(0,o.mdx)("p",{parentName:"div"},"For Vue.JS developers - we strongly advise against using UI libraries like Vuetify, Bueify, etc., as we've seen issues in non-native windows where different controls might not respond to clicks.  "),(0,o.mdx)("p",{parentName:"div"},"If you know what you're doing and are looking for a workaround, find the control's outer element, have it listen to onmousedown, and simulate a click()."))),(0,o.mdx)("p",null,"To build Overwolf apps, you first need to download the Overwolf client.\nYou can find the latest developer client version ",(0,o.mdx)("a",{parentName:"p",href:"https://download.overwolf.com/install/Download?Channel=developers"},"Here"),"."),(0,o.mdx)("h3",{id:"manifest-file"},"Manifest file"),(0,o.mdx)("p",null,"This mandatory file describes the different aspects of your app, and has to be present in your app's root folder for it to function.\nIts goal is to define your app's general behaviour, the features it will be using, and any other \"meta-data\" Overwolf will need to run your app exactly the way you want it to."),(0,o.mdx)("p",null,"You can read more in the ",(0,o.mdx)("a",{parentName:"p",href:"../api/manifest-json"},"Manifest.json")," section and learn what more you can do to make your app even more awesome."),(0,o.mdx)("p",null,"An example of a basic manifest file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version":1,\n    "type":"WebApp",\n    "meta":{\n        "name":"Demo App",\n        "version":"1.0.0",\n        "minimum-overwolf-version":"0.77.10",\n        "author":"Developer Name",\n        "icon":"IconMouseOver.png",\n        "icon_gray":"IconMouseNormal.png",\n        "launcher_icon": "desktop-icon.ico",\n        "description":"Demo App"\n    },\n    "data": {\n        "start_window":"MainWindow",\n        "windows":{\n            "MainWindow":{\n                    "file":"index.html",\n                    "transparent": false,\n                    "resizable": true,\n                    "use_os_windowing": true,\n                    "size": {\n                        "width":700,\n                        "height":400\n                        },\n                    "min_size": {\n                        "width":400,\n                        "height":400\n                    }\n                }\n        }\n    }\n}\n')),(0,o.mdx)("h3",{id:"htmljs-source-files"},"HTML/JS source files"),(0,o.mdx)("p",null,"In the sample manifest above, the app contains a single window. The source file of this window is ",(0,o.mdx)("inlineCode",{parentName:"p"},"index.html"),". Attached is an example HTML  window source file that could be referred to in the manifest:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Basic sample app</h1>\n<p>This is an Overwolf app window.</p>\n\n</body>\n</html>\n")),(0,o.mdx)("h3",{id:"assets"},"Assets"),(0,o.mdx)("p",null,"Your app can use images and assets like in any other web app. However, there are several mandatory assets that every Overwolf app needs. In the sample manifest above, all mandatory icons have been configured: ",(0,o.mdx)("a",{parentName:"p",href:"../api/manifest-json#meta-mouse-over"},"icon"),", ",(0,o.mdx)("a",{parentName:"p",href:"../api/manifest-json#meta-gray_icon"},"icon_gray")," and ",(0,o.mdx)("a",{parentName:"p",href:"../api/manifest-json#meta-launcher_icon"},"launcher_icon"),"."),(0,o.mdx)("h3",{id:"opk-package"},"OPK package"),(0,o.mdx)("p",null,"After you finish building your app, you need to pack everything; the manifest, source files, and assets into a single Overwolf app installer, called an ",(0,o.mdx)("inlineCode",{parentName:"p"},"OPK")," package."),(0,o.mdx)("p",null,"An OPK package is actually a ZIP package:  To create it, just ZIP all of your files together, and then manually change the file extension from ZIP to OPK. Double clicking an OPK will install the package in the Overwolf app."),(0,o.mdx)("p",null,"We remind you that only ",(0,o.mdx)("a",{parentName:"p",href:"#whitelist-as-a-developer"},"whitelisted")," developers can install OPKs that were not downloaded from the store."),(0,o.mdx)("h2",{id:"safety--security"},"Safety & Security"),(0,o.mdx)("p",null,"Protecting our community of gamers is a top priority, and we work hard to ensure developers don\u2019t mess around. A few measures help us with that:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Each app goes through a full review process."),(0,o.mdx)("li",{parentName:"ol"},"Each app is hosted separately in its own web browser, and each web browser runs as a separate process."),(0,o.mdx)("li",{parentName:"ol"},"Each app is being run from a different virtual directory.")),(0,o.mdx)("p",null,"These measures support security, separation and encapsulation: An app does not have access to the user\u2019s local files, an app cannot directly interfere with other apps, and if an app crashes or breaks, it doesn\u2019t affect the rest of the system."),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("p",null,"You can build some awesome things with web technologies. Our way to make apps even better is using in-game real time information and events to fuel app functions. With ",(0,o.mdx)("a",{parentName:"p",href:"../api/overwolf-api-overview"},"our JavaScript API")," you can unlock features that read and interact with in-game events."),(0,o.mdx)("p",null,"Some ideas for in-game events you can use - from basics like kills, deaths, victories and similar key events, through taking a screenshot or recording a video of the game, changing window size, analyzing in-game stats to display tips and more. We are constantly developing new tools and features that you can use to build your dream app, if there's a feature you cannot find, suggest it!"),(0,o.mdx)("h2",{id:"overwolf-plugins"},"Overwolf Plugins"),(0,o.mdx)("p",null,"You can add even more features to your app by using one of our ",(0,o.mdx)("a",{parentName:"p",href:"../topics/plugins-overview"},"plugins"),", like the ",(0,o.mdx)("a",{parentName:"p",href:"../topics/simple-io-plugin"},"simple I/O plugin")," for reading files from the local disk. You can even create your own plugin: "),(0,o.mdx)("p",null,"Use existing C/C++/C# code, wrap it inside an Overwolf Plugin DLL file and interact with it in your Overwolf app."),(0,o.mdx)("p",null,"For more details, you can review the ",(0,o.mdx)("a",{parentName:"p",href:"../topics/plugins-overview"},"Overwolf Plugins")," section."),(0,o.mdx)("h2",{id:"real-world-sample-app"},"Real world sample app"),(0,o.mdx)("p",null,"To learn how to build an app that actually pulls in-game events, pops notifications, displays in-game overlays and more - please check out our ",(0,o.mdx)("a",{parentName:"p",href:"sample-app-overview"},"sample app showcasing"),"."))}c.isMDXComponent=!0}}]);