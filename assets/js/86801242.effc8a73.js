"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4188],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return m},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){return function(t){var a=u(t.components);return n.createElement(e,i({},t,{components:a}))}},u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,f=s["".concat(o,".").concat(d)]||s[d]||c[d]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},51671:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:141,title:"Version 0.141",sidebar_label:"0.141",sidebar_position:141},p=void 0,m={unversionedId:"api/changelogs/2020/january/141",id:"api/changelogs/2020/january/141",title:"Version 0.141",description:'* Manifest flag enabletopisolation has been "moved up" in the hirarchy:',source:"@site/pages/docs/api/changelogs/2020/1-january/141.mdx",sourceDirName:"api/changelogs/2020/1-january",slug:"/api/changelogs/2020/january/141",permalink:"/api/changelogs/2020/january/141",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2020/1-january/141.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:141,frontMatter:{id:"141",title:"Version 0.141",sidebar_label:"0.141",sidebar_position:-141},sidebar:"api",previous:{title:"0.142",permalink:"/api/changelogs/2020/february/142"},next:{title:"0.139",permalink:"/api/changelogs/2019/december/139"}},s={},u=[],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Manifest flag ",(0,i.mdx)("a",{parentName:"li",href:"/api/manifest#enable_top_isolation"},"enable_top_isolation"),' has been "moved up" in the hirarchy:',(0,i.mdx)("br",{parentName:"li"}),'Now it\'s per app and not per windows - means, it\'s under the "data" node and not the "window" node.',(0,i.mdx)("br",{parentName:"li"}),"Note that it's backward compatible (means that if one of the app windows set this flag in the manifest - it will auto-merge to the entire app)."),(0,i.mdx)("li",{parentName:"ul"},"New function: ",(0,i.mdx)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},"overwolf.utils.OpenFilePicker"),".",(0,i.mdx)("br",{parentName:"li"}),"Now also accepts an initialPath parameter."),(0,i.mdx)("li",{parentName:"ul"},'Logs: now end with the extension "log" (instead of numbers).',(0,i.mdx)("br",{parentName:"li"}),"In addition, logs file names are now counted where the last number one is the newest file.  "),(0,i.mdx)("li",{parentName:"ul"},"New function: ",(0,i.mdx)("a",{parentName:"li",href:"/api/streaming#splitstreamid-callback"},"overwolf.streaming.split"),".",(0,i.mdx)("br",{parentName:"li"}),"Split video files."),(0,i.mdx)("li",{parentName:"ul"},"Implement the main features of the ",(0,i.mdx)("a",{parentName:"li",href:"/topics/using-plugins/simple-io-plugin"},"IO-Pluign")," inside the ",(0,i.mdx)("a",{parentName:"li",href:"/api/io"},"overwolf.io")," API: ",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#dirpath-callback"},"overwolf.io.dir()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#readbinaryfilepath-options-callback"},"overwolf.io.readBinaryFile()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#readtextfilepath-options-callback"},"overwolf.io.readTextFile()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#existpath-callback"},"overwolf.io.exist()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#listenonfileid-path-option-callback"},"overwolf.io.listenOnFile()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/io#stopfilelistenerid"},"overwolf.io.stopFileListener()")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/launchers/events/league-of-legends#docsNav"},"League of Legends Launcher Events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New ",(0,i.mdx)("a",{parentName:"li",href:"/status/launchers/league-of-legends"},"status page")," for LOL launcher."),(0,i.mdx)("li",{parentName:"ul"},"New update:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"is_garena_user"))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/hearthstone#docsNav"},"Hearthstone game events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New info updates:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Adventure Deck"),(0,i.mdx)("li",{parentName:"ul"},"adventure_loot_options"),(0,i.mdx)("li",{parentName:"ul"},"battlegrounds_rating"))))),(0,i.mdx)("li",{parentName:"ul"},"All game-events",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New update:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"gep_internal")))))))}c.isMDXComponent=!0}}]);