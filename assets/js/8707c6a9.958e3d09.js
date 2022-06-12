"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1512],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"technical-checklist",title:"Technical checklist",sidebar_label:"Technical checklist"},l=void 0,s={unversionedId:"start/technical-checklist",id:"start/technical-checklist",title:"Technical checklist",description:"Technical Hunter",source:"@site/pages/docs/start/technical-checklist.mdx",sourceDirName:"start",slug:"/start/technical-checklist",permalink:"/docs/start/technical-checklist",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/technical-checklist.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"technical-checklist",title:"Technical checklist",sidebar_label:"Technical checklist"},sidebar:"start",previous:{title:"App testing basics",permalink:"/docs/start/how-to-test-your-app"},next:{title:"Product checklist",permalink:"/docs/start/product-checklist"}},p={},u=[{value:"Technical Hunter",id:"technical-hunter",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"technical-hunter"},"Technical Hunter"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Your Main (index) window is used as a hidden controller that opens other windows.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Window management is done according to our best practices (",(0,o.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/topics/using-overwolf-windows#general-tips-for-using-windows"},"Read more here"),").")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"No in-game full screen windows are used.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"All windows launch in up to 30ms (",(0,o.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/topics/launch-time-performance"},"Read more here"),").")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Your app should have error notifications for network downtime, API issues and server errors. (",(0,o.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/topics/user-flow-and-error-handling"},"Read more here"),").")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"App follows local/server assets best practices. (",(0,o.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/topics/launch-time-performance"},"Read more here"),").")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Avoid the use of non-100% transparency in your window design, calculating pixel values may cause a performance drop.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The app passed Overwolf's performance test. It works smoothly and does not cause lags in game. Moreover, the app has 0% GPU/CPU/memory usage when idle."))),(0,o.mdx)("p",null,"*Note: this checklist previously awarded extra percentages for the revshare, but it was discontinued as of Jan 1st, 2021."))}m.isMDXComponent=!0}}]);