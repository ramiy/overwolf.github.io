"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8419],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return o},MDXProvider:function(){return s},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(g,i(i({ref:t},o),{},{components:n})):a.createElement(g,i({ref:t},o))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<l;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),d=["components"],i={id:"profile",title:"overwolf.profile API"},m=void 0,o={unversionedId:"api/profile/profile",id:"api/profile/profile",title:"overwolf.profile API",description:"Use this API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)",source:"@site/pages/docs/api/profile/profile.mdx",sourceDirName:"api/profile",slug:"/api/profile/",permalink:"/api/profile/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/profile/profile.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1659364045,formattedLastUpdatedAt:"8/1/2022",frontMatter:{id:"profile",title:"overwolf.profile API",sidebar_position:0,sidebar_label:"Profile"},sidebar:"api",previous:{title:"Tray",permalink:"/api/os/tray"},next:{title:"Subscriptions",permalink:"/api/profile/subscriptions/"}},u={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getCurrentUser(callback)",id:"getcurrentusercallback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"refreshUserProfile(callback)",id:"refreshuserprofilecallback",level:2},{value:"Version added: 0.128",id:"version-added-0128",level:4},{value:"openLoginDialog()",id:"openlogindialog",level:2},{value:"Version added: 0.80",id:"version-added-080",level:4},{value:"onLoginStateChanged",id:"onloginstatechanged",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"GetCurrentUserResult Object",id:"getcurrentuserresult-object",level:2},{value:"Note: <em>userId</em> is not a unique identifier",id:"note-userid-is-not-a-unique-identifier",level:4},{value:"Example data: Success",id:"example-data-success",level:4},{value:"Example data: Failure",id:"example-data-failure",level:4},{value:"LoginStateChangedEvent Object",id:"loginstatechangedevent-object",level:2},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"ConnectionState enum",id:"connectionstate-enum",level:2}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Use this API to get Overwolf information for the current user of the app (e.g user name, user log-in event, etc.)"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Permissions required: profile")),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getcurrentusercallback"},"overwolf.profile.getCurrentUser()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#refreshuserprofilecallback"},"overwolf.profile.refreshUserProfile()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#openlogindialog"},"overwolf.profile.openLoginDialog()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onloginstatechanged"},"overwolf.profile.onLoginStateChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getcurrentuserresult-object"},"overwolf.profile.GetCurrentUserResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#loginstatechangedevent-object"},"overwolf.profile.LoginStateChangedEvent")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#connectionstate-enum"},"overwolf.profile.ConnectionState")," Enum")),(0,l.mdx)("h2",{id:"getcurrentusercallback"},"getCurrentUser(callback)"),(0,l.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Calls the given callback with the currently logged-in Overwolf user.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getcurrentuserresult-object"},"Result: GetCurrentUserResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A function called with the current user, or an error.")))),(0,l.mdx)("h2",{id:"refreshuserprofilecallback"},"refreshUserProfile(callback)"),(0,l.mdx)("h4",{id:"version-added-0128"},"Version added: 0.128"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fetches user profile from server, then invokes the callback with the currently logged-in Overwolf user.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getcurrentuserresult-object"},"Result: GetCurrentUserResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"A function called with the current user, or an error.")))),(0,l.mdx)("h2",{id:"openlogindialog"},"openLoginDialog()"),(0,l.mdx)("h4",{id:"version-added-080"},"Version added: 0.80"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Opens the login dialog.")),(0,l.mdx)("h2",{id:"onloginstatechanged"},"onLoginStateChanged"),(0,l.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when a user logged in or logged out, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#loginstatechangedevent-object"},"LoginStateChangedEvent")," Object")),(0,l.mdx)("h2",{id:"getcurrentuserresult-object"},"GetCurrentUserResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"status"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Reason"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"deprecated. For backward compatibility only")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"username"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"unique identifier. null for not logged-in users")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"userId"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"see ",(0,l.mdx)("a",{parentName:"td",href:"#note-userid-is-not-a-unique-identifier"},"note"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"machineId"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"partnerId"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"channel"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"parameters"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"installParams"),(0,l.mdx)("td",{parentName:"tr",align:null},"JSON"),(0,l.mdx)("td",{parentName:"tr",align:null},"see ",(0,l.mdx)("a",{parentName:"td",href:"/topics/best-practices/create-download-link#extract-referral-data-using-api"},"Creating Download Link"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"avatar"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"installerExtension"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"displayName"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"note-userid-is-not-a-unique-identifier"},"Note: ",(0,l.mdx)("em",{parentName:"h4"},"userId")," is not a unique identifier"),(0,l.mdx)("p",null,"The term ",(0,l.mdx)("inlineCode",{parentName:"p"},"userId")," might be a bit misleading: it's not a unique identifier for an Overwolf user.\nThe userId is unique for each OW client installation on the current machine, so it's more like \"clientID\".",(0,l.mdx)("br",{parentName:"p"}),"\n","We use it to identify not logged-in users on the machine."),(0,l.mdx)("p",null,"On a Windows computer, with multiple users - there might be multiple ",(0,l.mdx)("inlineCode",{parentName:"p"},"userIds")," but a single ",(0,l.mdx)("inlineCode",{parentName:"p"},"MachineId"),";"),(0,l.mdx)("p",null,"To uniquely identify logged-in users, you should use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"username")," (this field will be null for not logged-in user).  "),(0,l.mdx)("p",null,"Each user has to pick a unique OW username upon registering. Even If he logged in through Google, Discord, etc. - OW automatically generate a unique user name for him.",(0,l.mdx)("br",{parentName:"p"}),"\n","So at the bottom line, you can always count on the username to be a unique identifier for logged-in users. "),(0,l.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "success": true,\n   "error": "",\n   "username":"itaygl",\n   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",\n   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",\n   "partnerId":0,\n   "channel":"website",\n   "displayName": "itay gl", \n   "avatar": "https://lh5.googleusercontent.com/-vvsdlz7W2oM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reB9VADjY3FzaTDSA7-Adrsny38xg/mo/photo.jpg?sz=50",\n   "installParams":  "{source: "", medium: "", campaign: "", term: "", content: """,\n}\n')),(0,l.mdx)("h4",{id:"example-data-failure"},"Example data: Failure"),(0,l.mdx)("p",null,"If the user is not logged-in, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"success")," will be ",(0,l.mdx)("inlineCode",{parentName:"p"},"false"),", but you\u2019ll still get the rest of the available data (userId, machineId, etc.)"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{  \n   "success": false,\n   "error": "Not signed in",\n   "status":"error",\n    "reason":"Not signed in",\n   "username":null,\n   "userId":"OW_34153336-192b-44f6-aa0f-4a9b744c689d",\n   "machineId":"653000ad-001c-43e9-a5c9-e23db5ad370a",\n   "partnerId":0,\n   "channel":"website",\n   "parameters":{"no-ftue":null},\n   "installParams":null,\n   "avatar":""\n}\n')),(0,l.mdx)("h2",{id:"loginstatechangedevent-object"},"LoginStateChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"status"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"connectionState"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#connectionstate-enum"},"ConnectionState")," enum"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"username"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "connectionState": "Online",  // can be "Online", "Offline", "Connecting", etc.\n    "username": "..."   // when the status is other than "Offline", will be the currently connected username.\n}\n')),(0,l.mdx)("h2",{id:"connectionstate-enum"},"ConnectionState enum"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Option"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Unknown"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Offline"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Connecting"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Online"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Disconnecting"),(0,l.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);