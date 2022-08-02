"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1955],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),m=function(e){return function(n){var a=p(n.components);return t.createElement(e,i({},n,{components:a}))}},p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?t.createElement(f,o(o({ref:n},d),{},{components:a})):t.createElement(f,o({ref:n},d))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},43764:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:191,title:"Version 0.191",sidebar_label:"0.191",sidebar_position:191},s=void 0,d={unversionedId:"api/changelogs/2022/february/191",id:"api/changelogs/2022/february/191",title:"Version 0.191",description:"* This patch includes a bunch of under the hood changes for some upcoming APIs.",source:"@site/pages/docs/api/changelogs/2022/2-february/191.mdx",sourceDirName:"api/changelogs/2022/2-february",slug:"/api/changelogs/2022/february/191",permalink:"/api/changelogs/2022/february/191",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2022/2-february/191.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:191,frontMatter:{id:"191",title:"Version 0.191",sidebar_label:"0.191",sidebar_position:-191},sidebar:"api",previous:{title:"0.194",permalink:"/api/changelogs/2022/march/194"},next:{title:"0.188",permalink:"/api/changelogs/2022/january/188"}},m={},p=[{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3},{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:p};function c(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This patch includes a bunch of under the hood changes for some upcoming APIs.")),(0,i.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{href:"https://www.npmjs.com/package/@overwolf/ow-cli/",target:"_blank"},"CLI")," - A new tool to help you manage your Overwolf app")),(0,i.mdx)("h3",{id:"game-events"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"/api/games/events/minecraft"},"Minecraft")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New info_update",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"counters - ping"),(0,i.mdx)("li",{parentName:"ul"},"player_X - list of active players in the game"))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"/api/games/events/rainbow-six-siege"},"Rainbow Six Siege")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add player_id in roster - ",(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege#roster"},"here"))))),(0,i.mdx)("div",null," "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/halo-infinite"},"Halo Infinite"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add new info updates",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"playlist"),(0,i.mdx)("li",{parentName:"ul"},"game_type"),(0,i.mdx)("li",{parentName:"ul"},"game_mode")))))),(0,i.mdx)("h3",{id:"docs"},"Docs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"No changes.")),(0,i.mdx)("h3",{id:"api"},"API"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/utils"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.utils.checkForClientUpdates()"))," - This new method can be used to check whether an Overwolf update is available.",(0,i.mdx)("br",{parentName:"li"}),"Example of the returned callback: ",(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre"},'  channel: "Developers"\n  currentVersion: "0.191.0.4"\n  hasUpdate: false\n  newVersion: null\n  success: true\n  updatesDisabled: false\n')),"   Please note that Overwolf will stop displaying the overlay in-game if it was updated while the game was running."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/windows"},(0,i.mdx)("inlineCode",{parentName:"a"},"overwolf.windows.getWindow()"))," - This methods returns\nthe WindowInfo object for any window that has been called with ",(0,i.mdx)("inlineCode",{parentName:"li"},"overwolf.windows.obtainDeclaredWindow"),". It's better to use this method instead of using\n",(0,i.mdx)("inlineCode",{parentName:"li"},"obtaintDeclaredWindow")," if the the window you are refering to has already\nbeen declared.")),(0,i.mdx)("h3",{id:"platform"},"Platform"),(0,i.mdx)("p",null,"New ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/manifest#auto_relaunch_on_crash"},(0,i.mdx)("inlineCode",{parentName:"a"},"auto_relaunch_on_crash")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Relaunches an app if it crashes."),(0,i.mdx)("li",{parentName:"ul"},"If the app crashes consecutively more than 5 times, we will stop trying to relaunch it."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/manifest#open_dev_tools"},(0,i.mdx)("inlineCode",{parentName:"a"},"open_dev_tools")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Used for debugging, automatically opens the dev tools when an app window opens. ")))),(0,i.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overwolf.media.videos.createVideoCompositionFiles()")," - Fixed a possible audio\nsyncing issue when composing more than 2 files."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overwolf.media.videos.createVideoComposition()")," - Fixed a possible error when\nhaving more than two segments."),(0,i.mdx)("li",{parentName:"ul"},'Reduced internal cache when checking for a possible app update when using\n"test" channels. This will hopefully reduce the time frame from the moment a developer updates\nthe "test" channel until the update reaches the users.'),(0,i.mdx)("li",{parentName:"ul"},"Fixed a descrepency in the storage paths when an app's display name was added."),(0,i.mdx)("li",{parentName:"ul"},"Fixed an issue where non-developers were able to load extensions as unpacked.")))}c.isMDXComponent=!0}}]);