"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3483],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:168,title:"Version 0.168",sidebar_label:"0.168",sidebar_position:168},s=void 0,p={unversionedId:"api/changelogs/2021/april/168",id:"api/changelogs/2021/april/168",title:"Version 0.168",description:"Note that iterations 167 to 168 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/2021/4-april/168.mdx",sourceDirName:"api/changelogs/2021/4-april",slug:"/api/changelogs/2021/april/168",permalink:"/api/changelogs/2021/april/168",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2021/4-april/168.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:168,frontMatter:{id:"168",title:"Version 0.168",sidebar_label:"0.168",sidebar_position:-168},sidebar:"api",previous:{title:"0.170",permalink:"/api/changelogs/2021/may/170"},next:{title:"0.169",permalink:"/api/changelogs/2021/april/169"}},m={},u=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Note that iterations 167 to 168 were combined into a single iteration.  "),(0,i.mdx)("h3",{id:"api"},"API"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You can now detect if the ",(0,i.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice"},"Windows 10 Hardware-Accelerated GPU Scheduling")," feature is enabled by calling ",(0,i.mdx)("a",{parentName:"li",href:"/api/utils"},"overwolf.utils.getSystemInformation()"),". The callback object contains the ",(0,i.mdx)("strong",{parentName:"li"},"HAGSEnabled")," property that can be true or false.  Note that the user can set the HA feature on or off therough the client settings."),(0,i.mdx)("li",{parentName:"ul"},"Close overwolf when closing an app: apps can now add the new 'Shutdown' permissions to it's manifest, then call ",(0,i.mdx)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"overwolf.settings.setExtensionSettings()"),' with "exit_overwolf_on_exit: true".',(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Note: This option shouldn\u2019t be used without Overwolf\u2019s permission"),"."))),(0,i.mdx)("li",{parentName:"ul"},"Social API: ",(0,i.mdx)("a",{parentName:"li",href:"/api/social/youtube#performlogoutcallback"},"overwolf.social.youtube.performLogin()")," now opens in default browser and using pubsub to update client."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-callback"},"overwolf.util.openFilePicker()"),": now returns both url and path to file.",(0,i.mdx)("br",{parentName:"li"}),"**Important: note that this function signature is not backwards compatible: the ",(0,i.mdx)("inlineCode",{parentName:"li"},"url")," property in the callback now returns the path in fs:// format and not in an absolute path. (the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"file")," property returns the absolute path)."),(0,i.mdx)("li",{parentName:"ul"},"url-scheme: added 'overwolfstore' url-scheme - use 'overwolfstore://app/:uid/reviews/:commentId' to open a specific comment.",(0,i.mdx)("br",{parentName:"li"}),"This originally intended to be used as a link in emails users would get if a dev replied to their comment."),(0,i.mdx)("li",{parentName:"ul"},"Some news for you on the video capture front. We added support for alternative recording resolutions. More info in our ",(0,i.mdx)("a",{parentName:"li",href:"/topics/best-practices/video-capture#recording-resolutions"},"Video capture best practices")," guide.")),(0,i.mdx)("h3",{id:"platform"},"Platform"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"General partner reports on redash - now you can export your reports to CSV."),(0,i.mdx)("li",{parentName:"ul"},"OW browser redirects: allow to open tab and redirect back to extension when origin URL is at 'externally_connectable' and to tab was open from the same extension. See more details in our ",(0,i.mdx)("a",{parentName:"li",href:"/topics/integrations/login-with-twitch"},"OAuth integration guide"),"."),(0,i.mdx)("li",{parentName:"ul"},"App UTM params: Until now, UTM params tagged with the installer were saved to the OW database only for new OW installations.\nNow, they are saved to the DB in an app context, also for existing installations. (should be sent with 'InstalledApp' analytic). ",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The parameters will be passed as command-line arguments in case overwolf is installed - more info about UTM params on our ",(0,i.mdx)("a",{parentName:"li",href:"/topics/best-practices/create-download-link"},"Referral ID Guide"),"."),(0,i.mdx)("li",{parentName:"ul"},"In addition, for security and privacy reasons, the app sees only its context. Meaning, Your app will not be able to read other app's UTM params. You will get empty strings.")))),(0,i.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Subscriptions",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Added support for dark theme subscription plan page"),(0,i.mdx)("li",{parentName:"ul"},"Added the option to edit the Xsolla payment page background image"),(0,i.mdx)("li",{parentName:"ul"},"Added filters and improved sorting for your subscribers list"),(0,i.mdx)("li",{parentName:"ul"},"Bug fixes"))),(0,i.mdx)("li",{parentName:"ul"},"Release management",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Improved UX ")))),(0,i.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"DirectX 11 games should no longer be minimized while ",(0,i.mdx)("inlineCode",{parentName:"li"},"overwolf.windows.restore()")," is being used consecutively.")),(0,i.mdx)("h3",{id:"game-events"},"Game events"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/valorant"},"VALORANT"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"New supported game mode - Escalation"),(0,i.mdx)("li",{parentName:"ul"},"Fix to support the new patch"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/teamfight-tactics"},"Teamfight Tactics"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Fix to support the new patch"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/fortnite"},"Fortnite"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Support for the new season"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege"},"Rainbow Six: Siege"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Support for the new season"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/counter-strike-global-offensive"},"CS:GO"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Change & update to ",(0,i.mdx)("inlineCode",{parentName:"li"},"kill_feed")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/api/games/events/fortnite"},"Fortnite"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Improved plugin code.")))))}c.isMDXComponent=!0}}]);