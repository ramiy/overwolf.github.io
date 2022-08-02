"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3002],{3905:function(e,o,r){r.r(o),r.d(o,{MDXContext:function(){return s},MDXProvider:function(){return f},mdx:function(){return v},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var a=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function l(){return l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function m(e,o){if(null==e)return{};var r,a,t=function(e,o){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),p=function(e){return function(o){var r=d(o.components);return a.createElement(e,l({},o,{components:r}))}},d=function(e){var o=a.useContext(s),r=o;return e&&(r="function"==typeof e?e(o):n(n({},o),e)),r},f=function(e){var o=d(e.components);return a.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},c=a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=d(r),f=t,c=p["".concat(i,".").concat(f)]||p[f]||u[f]||l;return r?a.createElement(c,n(n({ref:o},s),{},{components:r})):a.createElement(c,n({ref:o},s))}));function v(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var n={};for(var m in o)hasOwnProperty.call(o,m)&&(n[m]=o[m]);n.originalType=e,n.mdxType="string"==typeof e?e:t,i[1]=n;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52334:function(e,o,r){r.r(o),r.d(o,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return n},metadata:function(){return s},toc:function(){return d}});var a=r(87462),t=r(63366),l=(r(67294),r(3905)),i=["components"],n={id:"api",title:"Overwolf API Overview",sidebar_label:"Overview",sidebar_position:-3},m=void 0,s={unversionedId:"api/api",id:"api/api",title:"Overwolf API Overview",description:"Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries.",source:"@site/pages/docs/api/api.mdx",sourceDirName:"api",slug:"/api/",permalink:"/api/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/api.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1659364045,formattedLastUpdatedAt:"8/1/2022",sidebarPosition:-3,frontMatter:{id:"api",title:"Overwolf API Overview",sidebar_label:"Overview",sidebar_position:-3},sidebar:"api",next:{title:"Changelogs",permalink:"/api/changelogs/"}},p={},d=[{value:"API&#39;s Reference",id:"apis-reference",level:2},{value:"overwolf.benchmarking",id:"overwolfbenchmarking",level:2},{value:"overwolf.campaigns",id:"overwolfcampaigns",level:2},{value:"overwolf.cryptography",id:"overwolfcryptography",level:2},{value:"overwolf.extensions",id:"overwolfextensions",level:2},{value:"overwolf.games",id:"overwolfgames",level:2},{value:"overwolf.games.events",id:"overwolfgamesevents",level:2},{value:"overwolf.games.tracked",id:"overwolfgamestracked",level:2},{value:"overwolf.io",id:"overwolfio",level:2},{value:"overwolf.log",id:"overwolflog",level:2},{value:"overwolf.logitech",id:"overwolflogitech",level:2},{value:"overwolf.media",id:"overwolfmedia",level:2},{value:"overwolf.notifications",id:"overwolfnotifications",level:2},{value:"overwolf.os",id:"overwolfos",level:2},{value:"overwolf.profile",id:"overwolfprofile",level:2},{value:"overwolf.profile.subscriptions",id:"overwolfprofilesubscriptions",level:2},{value:"overwolf.settings",id:"overwolfsettings",level:2},{value:"overwolf.social",id:"overwolfsocial",level:2},{value:"overwolf.streaming",id:"overwolfstreaming",level:2},{value:"overwolf.tobii",id:"overwolftobii",level:2},{value:"overwolf.utils",id:"overwolfutils",level:2},{value:"overwolf.web",id:"overwolfweb",level:2},{value:"overwolf.windows",id:"overwolfwindows",level:2}],f={toc:d};function u(e){var o=e.components,r=(0,t.Z)(e,i);return(0,l.mdx)("wrapper",(0,a.Z)({},f,r,{components:o,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries."),(0,l.mdx)("h2",{id:"apis-reference"},"API's Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfdeprecated/benchmarking"},"overwolf.benchmarking")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfcampaigns"},"overwolf.campaigns")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfcryptography"},"overwolf.cryptography")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfextensions"},"overwolf.extensions")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfgames"},"overwolf.games")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfgamesevents"},"overwolf.games.events")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfgamestracked"},"overwolf.games.tracked")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfio"},"overwolf.io")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolflog"},"overwolf.log")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolflogitech"},"overwolf.logitech")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfmedia"},"overwolf.media")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfnotifications"},"overwolf.notifications")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfos"},"overwolf.os")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfprofile"},"overwolf.profile")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfprofilesubscriptions"},"overwolf.profile.subscriptions")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfsettings"},"overwolf.settings")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfsocial"},"overwolf.social")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfstreaming"},"overwolf.streaming")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolftobii"},"overwolf.tobii")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfutils"},"overwolf.utils")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfweb"},"overwolf.web")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#overwolfwindows"},"overwolf.windows"))),(0,l.mdx)("h2",{id:"overwolfbenchmarking"},"overwolf.benchmarking"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/deprecated/benchmarking"},"overwolf.benchmarking")," API to query system stats and benchmarks.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Get hardware information."),(0,l.mdx)("li",{parentName:"ul"},"Get FPS performance information.")),(0,l.mdx)("h2",{id:"overwolfcampaigns"},"overwolf.campaigns"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/campaigns/crossapp"},"overwolf.campaigns")," API to get info about active campagins.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Get info about active campagins."),(0,l.mdx)("li",{parentName:"ul"},"Allows crossapp-promotions: One app can promote another app and then get an indication for a successful conversion.")),(0,l.mdx)("h2",{id:"overwolfcryptography"},"overwolf.cryptography"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/cryptography"},"overwolf.cryptography")," API to encrypt and decrypt ciphertext.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Secure app data and variables."),(0,l.mdx)("li",{parentName:"ul"},"Encrypt localStorage variables that store auth-tokens when using OAuth.")),(0,l.mdx)("h2",{id:"overwolfextensions"},"overwolf.extensions"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/extensions"},"overwolf.extensions")," API to operate or retrieve details on a specific Overwolf app.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Launch another app."),(0,l.mdx)("li",{parentName:"ul"},"Get the running state of an Overwolf app."),(0,l.mdx)("li",{parentName:"ul"},"Get the manifest.json data of an app.")),(0,l.mdx)("h2",{id:"overwolfgames"},"overwolf.games"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/games"},"overwolf.games")," API to receive basic game information.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Your app wants to know whether an Overwolf supported game was launched or closed"),(0,l.mdx)("li",{parentName:"ul"},"Get the currently running game's name, Overwolf ID, screen resolution and more information")),(0,l.mdx)("h2",{id:"overwolfgamesevents"},"overwolf.games.events"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/games/events"},"overwolf.games.events")," API to get notified when certain interesting events happens while playing in a certain game. This could be a death, a kill, an item purchase or anything else we're able to log from that game (see the Available Game Events list for more ideas).")),(0,l.mdx)("h2",{id:"overwolfgamestracked"},"overwolf.games.tracked"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/games/tracked"},"overwolf.games.tracked")," API to receive basic game information for games that are defined as unsupported in the gameslist.\nThe usage of this API requires you to use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"tracked")," property under the ",(0,l.mdx)("a",{parentName:"p",href:"api/manifest#launch_event_settings-array"},"launch_events")," property in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"manifest.json")," ")),(0,l.mdx)("h2",{id:"overwolfio"},"overwolf.io"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/io"},"overwolf.io")," API to check whether a certain file exists or in order to write content in a file. For more I/O functionalities, please use our ",(0,l.mdx)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin"),".")),(0,l.mdx)("h2",{id:"overwolflog"},"overwolf.log"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/deprecated/obsolete/log"},"overwolf.log")," API to write different messages including info, warnings, errors, critical errors and others to the common log.")),(0,l.mdx)("h2",{id:"overwolflogitech"},"overwolf.logitech"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/logitech"},"overwolf.logitech")," as an interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Light the user's LED keyboard in a certain pattern when an interesting event has happened in-game by using the overwolf.game.events API and the overwolf.logitech API together.")),(0,l.mdx)("h2",{id:"overwolfmedia"},"overwolf.media"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/media"},"overwolf.media")," API to capture a screenshot or create a GIF of the game currently played.")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Use the ",(0,l.mdx)("a",{parentName:"li",href:"api/media/audio"},"overwolf.media.audio")," API to play an audio file."),(0,l.mdx)("li",{parentName:"ul"},"Use the ",(0,l.mdx)("a",{parentName:"li",href:"api/media/replays"},"overwolf.media.replays")," API to capture a short video replay of the game currently played."),(0,l.mdx)("li",{parentName:"ul"},"Use the ",(0,l.mdx)("a",{parentName:"li",href:"api/media/videos"},"overwolf.media.videos")," API to create a video composition, delete video files, or get the information of video files that were created by this app.")),(0,l.mdx)("h2",{id:"overwolfnotifications"},"overwolf.notifications"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/notifications"},"overwolf.notifications")," API for sending windows OS toast notifications.")),(0,l.mdx)("h2",{id:"overwolfos"},"overwolf.os"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/os"},"overwolf.os")," API for Operating System related functions.")),(0,l.mdx)("h2",{id:"overwolfprofile"},"overwolf.profile"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/profile"},"overwolf.profile")," API to get Overwolf account information for the current user, this includes user name, log-in events and more.")),(0,l.mdx)("h2",{id:"overwolfprofilesubscriptions"},"overwolf.profile.subscriptions"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("a",{parentName:"p",href:"api/profile/subscriptions"},"overwolf.profile.subscriptions")," Provides functions and events to help with user profile subscription management.")),(0,l.mdx)("h2",{id:"overwolfsettings"},"overwolf.settings"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/settings"},"overwolf.settings")," API to view and modify one of the following Overwolf preferences:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Set hotkeys, register a function for a hotkey, or retrieve an existing hotkey key combination"),(0,l.mdx)("li",{parentName:"ul"},"Retrieve the currently selected Overwolf client language"),(0,l.mdx)("li",{parentName:"ul"},"Video recording location, capture settings, quality settings etc.")),(0,l.mdx)("h2",{id:"overwolfsocial"},"overwolf.social"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("a",{parentName:"p",href:"api/social"},"overwolf.social")," provides access to social networks we support:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"api/social/youtube"},"overwolf.social.youtube")," Provides access to the YouTube social provider."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"api/social/discord"},"overwolf.social.discord")," Provides access to the Discord social provider."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"api/social/gfycat"},"overwolf.social.gfycat")," Provides access to the Gfycat social provider."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"api/social/twitter"},"overwolf.social.twitter")," Provides access to the Twitter social provider."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"api/social/reddit"},"overwolf.social.reddit")," Provides access to the Reddit social provider.")),(0,l.mdx)("h2",{id:"overwolfstreaming"},"overwolf.streaming"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/streaming"},"overwolf.streaming")," API to capture a video of the current game, or stream the current game directly to ",(0,l.mdx)("a",{parentName:"p",href:"https://www.twitch.tv/"},"Twitch.tv"))),(0,l.mdx)("h2",{id:"overwolftobii"},"overwolf.tobii"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("a",{parentName:"p",href:"api/deprecated/tobii"},"overwolf.tobii")," provides an API for Overwolf Tobii.")),(0,l.mdx)("h2",{id:"overwolfutils"},"overwolf.utils"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/utils"},"overwolf.utils")," API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Getting a string that is currently placed in the clipboard"),(0,l.mdx)("li",{parentName:"ul"},"Getting the user's system information including OS, monitors, CPU, GPU, input devices etc."),(0,l.mdx)("li",{parentName:"ul"},"Opening a URL in a new browser window"),(0,l.mdx)("li",{parentName:"ul"},"Sending keystrokes to the running game")),(0,l.mdx)("h2",{id:"overwolfweb"},"overwolf.web"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/web"},"overwolf.web")," API to open a local HTTP web-server.")),(0,l.mdx)("h2",{id:"overwolfwindows"},"overwolf.windows"),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Use the ",(0,l.mdx)("a",{parentName:"p",href:"api/windows"},"overwolf.windows")," API to to create, modify or interact with your app's windows.")),(0,l.mdx)("p",null,"Common use cases:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Open a new app window"),(0,l.mdx)("li",{parentName:"ul"},"Change window location or size"),(0,l.mdx)("li",{parentName:"ul"},"Get information about a specific app window - id, name, width, height, location and more."),(0,l.mdx)("li",{parentName:"ul"},"Minimize or maximize a window"),(0,l.mdx)("li",{parentName:"ul"},"Facilitate communications between windows")))}u.isMDXComponent=!0}}]);