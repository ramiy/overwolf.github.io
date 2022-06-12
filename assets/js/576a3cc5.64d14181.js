"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4405],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return i},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){return function(t){var a=p(t.components);return n.createElement(e,l({},t,{components:a}))}},p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,x=s["".concat(d,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(x,o(o({ref:t},i),{},{components:a})):n.createElement(x,o({ref:t},i))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=x;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var i=2;i<l;i++)d[i]=a[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},49982:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),d=["components"],o={id:"overwolf-extensions-sharedData",title:"overwolf.extensions.sharedData API",sidebar_label:"overwolf.extensions.sharedData"},m=void 0,i={unversionedId:"api/overwolf-extensions-sharedData",id:"api/overwolf-extensions-sharedData",title:"overwolf.extensions.sharedData API",description:"A set of APIs to allow independent extensions to communicate with each other.",source:"@site/pages/docs/api/overwolf-extensions-sharedData.mdx",sourceDirName:"api",slug:"/api/overwolf-extensions-sharedData",permalink:"/docs/api/overwolf-extensions-sharedData",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/overwolf-extensions-sharedData.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-extensions-sharedData",title:"overwolf.extensions.sharedData API",sidebar_label:"overwolf.extensions.sharedData"},sidebar:"api",previous:{title:"overwolf.extensions.current",permalink:"/docs/api/overwolf-extensions-current"},next:{title:"overwolf.extensions.io",permalink:"/docs/api/overwolf-extensions-io"}},s={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"set(string appId, object value, callback)",id:"setstring-appid-object-value-callback",level:2},{value:"Version added: 0.137",id:"version-added-0137",level:4},{value:"get(SharedDataParams param, callback)",id:"getshareddataparams-param-callback",level:2},{value:"Version added: 0.137",id:"version-added-0137-1",level:4},{value:"Usage examples",id:"usage-examples",level:4},{value:"onChanged",id:"onchanged",level:2},{value:"Version added: 0.137",id:"version-added-0137-2",level:4},{value:"SharedDataParams Object",id:"shareddataparams-object",level:2},{value:"Version added: 0.137",id:"version-added-0137-3",level:4},{value:"GetResult Object",id:"getresult-object",level:2},{value:"onChangedEvent Object",id:"onchangedevent-object",level:2},{value:"Event Data Example: Success",id:"event-data-example-success",level:4}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"A set of APIs to allow independent extensions to communicate with each other."),(0,l.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#setstring-appid-object-value-callback"},"overwolf.extensions.sharedData.set()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getshareddataparams-param-callback"},"overwolf.extensions.sharedData.get()"))),(0,l.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onchanged"},"overwolf.extensionss.sharedData.OnChanged"))),(0,l.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#shareddataparams-object"},"overwolf.extensions.sharedData.SharedDataParams")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#getresult-object"},"GetResult")," Object"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#onchangedevent-object"},"onChangedEvent")," Object")),(0,l.mdx)("h2",{id:"setstring-appid-object-value-callback"},"set(string appId, object value, callback)"),(0,l.mdx)("h4",{id:"version-added-0137"},"Version added: 0.137"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Used by the owner app to set data for the consumer app, by appId.")),(0,l.mdx)("p",null,"This function is one part of the service providing app to communicate with the consumer apps.\nfor instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"appId"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"The requested app id")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"value"),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getresult-object"},"Result: GetResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"a status indicating success or failure")))),(0,l.mdx)("h2",{id:"getshareddataparams-param-callback"},"get(SharedDataParams param, callback)"),(0,l.mdx)("h4",{id:"version-added-0137-1"},"Version added: 0.137"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Used by the consumer app to get data set by the owner app.")),(0,l.mdx)("p",null,"This function is one part of the service providing app to communicate with the consumer apps.\nfor instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"param"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#shareddataparams-object"},"SharedDataParams")," object"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("a",{parentName:"td",href:"#getresult-object"},"Result: GetResult"),") => void"),(0,l.mdx)("td",{parentName:"tr",align:null},"a status indicating success or failure")))),(0,l.mdx)("h4",{id:"usage-examples"},"Usage examples"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'overwolf.extensions.sharedData.get(\n    {origin:"nafihghfcpikebhfhdhljejkcifgbdahdhngepfb"},\n    data => {\n        // Process game enable state\n        // See result callback format below\n    }\n);\n\noverwolf.extensions.shareddata.get({},console.log) //retrun all data set to my self\n\n\noverwolf.extensions.shareddata.get({origin:"*"},console.log) //return all data was set to my self\n\n\noverwolf.extensions.shareddata.get({target:"fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm"},console.info) //retrun data i set to "fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm" (extension id)\n')),(0,l.mdx)("h2",{id:"onchanged"},"onChanged"),(0,l.mdx)("h4",{id:"version-added-0137-2"},"Version added: 0.137"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Fired when the hosting app state changes, with the following structure: ",(0,l.mdx)("a",{parentName:"p",href:"#onchangedevent-object"},"onChangedEvent")," Object")),(0,l.mdx)("h2",{id:"shareddataparams-object"},"SharedDataParams Object"),(0,l.mdx)("h4",{id:"version-added-0137-3"},"Version added: 0.137"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Container that represent a shared data parameters.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"origin"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"target"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h2",{id:"getresult-object"},"GetResult Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"success")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"error")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'Inherited from the "Result" Object')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"data"),(0,l.mdx)("td",{parentName:"tr",align:null},"<","Dictionary> string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dictionary","<",'T>: An object that maps strings to values of type "T"')))),(0,l.mdx)("h2",{id:"onchangedevent-object"},"onChangedEvent Object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"origin"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"target"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"data"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "origin": string (uid),\n    "target": string (uid),\n    "data": string\n}\n')))}c.isMDXComponent=!0}}]);