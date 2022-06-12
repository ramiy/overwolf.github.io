"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6222],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return i}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){return function(t){var n=c(t.components);return a.createElement(e,s({},t,{components:n}))}},c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=c(n),d=r,f=i["".concat(o,".").concat(d)]||i[d]||m[d]||s;return n?a.createElement(f,p(p({ref:t},u),{},{components:n})):a.createElement(f,p({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],p={id:"update-your-app-status",title:"Changing app status",sidebar_label:"Set app status"},l=void 0,u={unversionedId:"start/update-your-app-status",id:"start/update-your-app-status",title:"Changing app status",description:"Overwolf uses a three-state system to describe how well an app is currently working. This page describes how to update your app state through the Overwolf developers console.",source:"@site/pages/docs/start/update-your-app-status.mdx",sourceDirName:"start",slug:"/start/update-your-app-status",permalink:"/docs/start/update-your-app-status",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/update-your-app-status.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"update-your-app-status",title:"Changing app status",sidebar_label:"Set app status"},sidebar:"start",previous:{title:"Submit an app update",permalink:"/docs/start/submit-an-app-update"},next:{title:"Support Your Users",permalink:"/docs/start/support-your-users"}},i={},c=[{value:"Setting your app status",id:"setting-your-app-status",level:2},{value:"Possible app states",id:"possible-app-states",level:3},{value:"Get your app status",id:"get-your-app-status",level:2},{value:"Usage example",id:"usage-example",level:3},{value:"Response example",id:"response-example",level:3}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,o);return(0,s.mdx)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"Overwolf uses a three-state system to describe how well an app is currently working. This page describes how to update your app state through the Overwolf developers console."),(0,s.mdx)("h2",{id:"setting-your-app-status"},"Setting your app status"),(0,s.mdx)("p",null,"Using the dev console, you can set your app's state following these steps:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("a",{parentName:"p",href:"https://devconsole.overwolf.com"},"Login")," to the dev console, select ",(0,s.mdx)("inlineCode",{parentName:"p"},"applications")," in the left-hand side bar, and choose your app from the list.")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"After choosing your app, browse to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"App status")," tab and set the right status:"))),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"alt-text",src:n(39722).Z,width:"827",height:"593"})),(0,s.mdx)("h3",{id:"possible-app-states"},"Possible app states"),(0,s.mdx)("p",null,"There are three pre-defines states we call Green, Yellow and Red.",(0,s.mdx)("br",{parentName:"p"}),"\n","When you fetch the status later using an API call, each of the states will get a numeric value:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Green - Good to go! ",(0,s.mdx)("inlineCode",{parentName:"li"},'{"state":1}')),(0,s.mdx)("li",{parentName:"ul"},"Yellow - Some features unavailable. ",(0,s.mdx)("inlineCode",{parentName:"li"},'{"state":2}')),(0,s.mdx)("li",{parentName:"ul"},"Red - Critical issues, main app functionality is currently unavailable. ",(0,s.mdx)("inlineCode",{parentName:"li"},'{"state":3}'))),(0,s.mdx)("p",null,"For each state you can also set a text that will be available from the API as well describing the state."),(0,s.mdx)("h2",{id:"get-your-app-status"},"Get your app status"),(0,s.mdx)("p",null,"The second step is to fetch your app status from the dev console:"),(0,s.mdx)("p",null,"To query the Overwolf dev console, you should call the console API URL with your extension (app) ID:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"https://console-api.overwolf.com/v1/apps/[extensionId]/status")),(0,s.mdx)("h3",{id:"usage-example"},"Usage example"),(0,s.mdx)("p",null,'In this example we fetch the status of the "Game Summary" app: '),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"fetch('https://console-api.overwolf.com/v1/apps/nafihghfcpikebhfhdhljejkcifgbdahdhngepfb/status')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(myJson) {\n    console.log(JSON.stringify(myJson));\n  });\n")),(0,s.mdx)("h3",{id:"response-example"},"Response example"),(0,s.mdx)("p",null,"In case of successful request:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{"state":2,"updates_popup_active":false,"yellow_text":"hi there"}\n')),(0,s.mdx)("p",null,"As you can see, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"state")," field returns one of three values: (1=Green, 2=Yellow, 3=Red)."))}m.isMDXComponent=!0},39722:function(e,t,n){t.Z=n.p+"assets/images/dev-console-app-status-1-d2b90b31a2f10214bb49cbf3d0a91ea1.png"}}]);