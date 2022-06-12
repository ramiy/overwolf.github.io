"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7773],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return y},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,s(s({ref:t},l),{},{components:n})):a.createElement(g,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],c={id:"app-analytics",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics"},l=void 0,p={unversionedId:"topics/app-analytics",id:"topics/app-analytics",title:"Using Analytics in your app",description:"One of the most effective ways to improve your app and learn more about your users is implementing solid analytics that provide you with usage statistics. Stats support your product decision making by providing real-world user usage data, including showing how users actually interact with each part of your product. Analytics also underline where users drop off and lose interest, what product abilities are completely ignored and much more.",source:"@site/pages/docs/topics/app-analytics.mdx",sourceDirName:"topics",slug:"/topics/app-analytics",permalink:"/docs/topics/app-analytics",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/app-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"app-analytics",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics"},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/topics/cli"},next:{title:"Login with Twitch",permalink:"/docs/topics/login-with-twitch"}},d={},u=[{value:"Google Analytics: Basic Implementation",id:"google-analytics-basic-implementation",level:2},{value:"Update your manifest.json",id:"update-your-manifestjson",level:3},{value:"Create a Google Analytics account and generate a new property",id:"create-a-google-analytics-account-and-generate-a-new-property",level:3},{value:"Update your pages",id:"update-your-pages",level:3},{value:"Update your tracking code",id:"update-your-tracking-code",level:3},{value:"More info",id:"more-info",level:2}],m=(a="ImageBoxModal",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),g={toc:u};function y(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"One of the most effective ways to improve your app and learn more about your users is implementing solid analytics that provide you with usage statistics. Stats support your product decision making by providing real-world user usage data, including showing how users actually interact with each part of your product. Analytics also underline where users drop off and lose interest, what product abilities are completely ignored and much more."),(0,i.mdx)("p",null,"We recommend using a web analytics service to collect app data, measure user engagement and improve monetization. Our preference is the industry standard ",(0,i.mdx)("a",{parentName:"p",href:"https://marketingplatform.google.com/about/analytics/features/"},"Google Analytics"),"."),(0,i.mdx)("p",null,"Please take the time you need to implement any chosen analytics service thoroughly and test it to make sure it's working as intended."),(0,i.mdx)("h2",{id:"google-analytics-basic-implementation"},"Google Analytics: Basic Implementation"),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The below information is regarding the implementation of Google Analytics' ",(0,i.mdx)("strong",{parentName:"p"},'"analytics.js"'),". The newer, more up-to-date implementation of ",(0,i.mdx)("strong",{parentName:"p"},'"gtag.js"')," ",(0,i.mdx)("em",{parentName:"p"},"does not work")," in Overwolf apps at the moment. Keep this in mind when searching for implementation documentation elsewhere."))),(0,i.mdx)("h3",{id:"update-your-manifestjson"},"Update your manifest.json"),(0,i.mdx)("p",null,"Open up the external connections necessary for communicating with the Google service:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"data":{  \n   "externally_connectable":{  \n      "matches":[  \n         "https://*.google-analytics.com",\n         "http://www.google-analytics.com"\n      ]\n   }\n}\n')),(0,i.mdx)("h3",{id:"create-a-google-analytics-account-and-generate-a-new-property"},"Create a Google Analytics account and generate a new property"),(0,i.mdx)("p",null,'Select "Website" as your tracked object, enter your website name, website URL and select your preferred reporting time zone.'),(0,i.mdx)(m,{mdxType:"ImageBoxModal"},(0,i.mdx)("img",{src:n(32954).Z,alt:"Create a new property"})),(0,i.mdx)("h3",{id:"update-your-pages"},"Update your pages"),(0,i.mdx)("p",null,"Let's assume that you want to track events in your index page. In your /index.html, add a reference to the tracking script in a separate file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  ...\n  <script src="js/index.js"><\/script>\n  ...\n</head>\n<body>\n  ...\n</body>\n</html>\n')),(0,i.mdx)("h3",{id:"update-your-tracking-code"},"Update your tracking code"),(0,i.mdx)("p",null,"Add the tracking JavaScript, for example at js/index.js, with the Universal Analytics code. Note the \u201chttps\u201d at the start of the script address."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// Standard Google Universal Analytics code\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()\n   {\n      (i[r].q=i[r].q||[]).push(arguments)\n   },\n   i[r].l=1*new Date();a=s.createElement(o),\n   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n   // Note: https protocol here\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-XXXXX-YY', 'auto');\n\n// Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200\nga('set', 'checkProtocolTask', function(){}); \nga('require', 'displayfeatures');\nga('send', 'pageview', '/index.html');\n")),(0,i.mdx)("p",null,"If that all went well, you should see page tracking appear in Google Analytics, like so:"),(0,i.mdx)("img",{src:"https://overwolf.github.io/docs//assets/app-analytics/GA-sample.jpg",alt:"process",width:"900"}),(0,i.mdx)("h2",{id:"more-info"},"More info"),(0,i.mdx)("p",null,"Find more information on best practices and more guides for implementing google analytics ",(0,i.mdx)("a",{parentName:"p",href:"https://analytics.google.com/analytics/academy/"},"here.")))}y.isMDXComponent=!0},32954:function(e,t,n){t.Z=n.p+"assets/images/GA1-b911787130f57c2bf8402dec3f517e6b.jpg"}}]);