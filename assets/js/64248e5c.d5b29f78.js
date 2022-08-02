"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return o}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){return function(a){var t=u(a.components);return n.createElement(e,l({},a,{components:t}))}},u=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},s=function(e){var a=u(e.components);return n.createElement(p.Provider,{value:a},e.children)},x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(t),s=r,c=o["".concat(m,".").concat(s)]||o[s]||x[s]||l;return t?n.createElement(c,d(d({ref:a},p),{},{components:t})):n.createElement(c,d({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=c;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var p=2;p<l;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38095:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n,r=t(87462),l=t(63366),m=(t(67294),t(3905)),d=["components"],i={id:"diablo-2-resurrected",title:"Diablo 2 Game events",hide_title:!0,sidebar_label:"Diablo 2"},p=void 0,o={unversionedId:"api/games/events/diablo-2-resurrected",id:"api/games/events/diablo-2-resurrected",title:"Diablo 2 Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/diablo-2-resurrected.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/diablo-2-resurrected",permalink:"/api/games/events/diablo-2-resurrected",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/diablo-2-resurrected.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1658067227,formattedLastUpdatedAt:"7/17/2022",frontMatter:{id:"diablo-2-resurrected",title:"Diablo 2 Game events",hide_title:!0,sidebar_label:"Diablo 2",sidebar_position:0},sidebar:"api",previous:{title:"Counter-Strike: Global Offensive",permalink:"/api/games/events/counter-strike-global-offensive"},next:{title:"Dota 2",permalink:"/api/games/events/dota-2"}},u={},s=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>player_level</em> note",id:"player_level-note",level:4},{value:"<em>player_class</em> note",id:"player_class-note",level:4},{value:"<em>player_experience</em> note",id:"player_experience-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"Events",id:"events",level:3},{value:"<em>act</em> note",id:"act-note",level:4},{value:"<em>item_x</em> note",id:"item_x-note",level:4},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>player_spawn</em> note",id:"player_spawn-note",level:4},{value:"<em>player_died</em> note",id:"player_died-note",level:4}],x=(n="GameInfo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),c={toc:s};function g(e){var a=e.components,t=(0,l.Z)(e,d);return(0,m.mdx)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for Diablo 2 Resurrected, Diablo 2 Resurrected API, SDK for Diablo 2 Resurrected, Diablo 2 Resurrected SDK"})),(0,m.mdx)(x,{gameID:21848,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Diablo 2 game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,m.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,m.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,m.mdx)("p",null,"Check ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,m.mdx)("h2",{id:"game_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,m.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_level"),(0,m.mdx)("td",{parentName:"tr",align:null},"me"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current level of the player"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_level-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_class"),(0,m.mdx)("td",{parentName:"tr",align:null},"me"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current class of the player"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_class-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_experience"),(0,m.mdx)("td",{parentName:"tr",align:null},"me"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current experience of the player"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_experience-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")))),(0,m.mdx)("h4",{id:"player_level-note"},(0,m.mdx)("em",{parentName:"h4"},"player_level")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_level","value":2}\n')),(0,m.mdx)("h4",{id:"player_class-note"},(0,m.mdx)("em",{parentName:"h4"},"player_class")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_class","value":"DRUID"}\n')),(0,m.mdx)("h4",{id:"player_experience-note"},(0,m.mdx)("em",{parentName:"h4"},"player_experience")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"game_info","category":"me","key":"player_experience","value":1101}\n')),(0,m.mdx)("h2",{id:"match_info"},(0,m.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,m.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"act"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current played act"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#act-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"item_x"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"List of owned items"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#item_x-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.1")))),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"In the beginning of each match"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"At the end of each match"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_spawn"),(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"In the beginning of each match and respawn after teadh"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_spawn-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"player_died"),(0,m.mdx)("td",{parentName:"tr",align:null}),(0,m.mdx)("td",{parentName:"tr",align:null},"Once the player died"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#player_died-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"204.0")))),(0,m.mdx)("h4",{id:"act-note"},(0,m.mdx)("em",{parentName:"h4"},"act")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"act","value":1}\n')),(0,m.mdx)("h4",{id:"item_x-note"},(0,m.mdx)("em",{parentName:"h4"},"item_x")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"item_19","value":"{"id":823142142,"name":"Cap","quality":"LOW","is_identified":"1","req_lvl":0,"req_str":0,"req_dex":0,"low_quality":"Cracked","body_loc":"NONE","inv_page":"INVENTORY","parent_id":0,"stats" : [{"idx" : "31","idx_name" : "armorclass","sub_idx" : "0","sub_idx_name" : "","value" : "3"},{"idx" : "73","idx_name" : "maxdurability","sub_idx" : "0","sub_idx_name" : "","value" : "3"}]}"}\n')),(0,m.mdx)("h4",{id:"match_start-note"},(0,m.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,m.mdx)("h4",{id:"match_end-note"},(0,m.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,m.mdx)("h4",{id:"player_spawn-note"},(0,m.mdx)("em",{parentName:"h4"},"player_spawn")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"player_spawn","data":""}]}\n')),(0,m.mdx)("h4",{id:"player_died-note"},(0,m.mdx)("em",{parentName:"h4"},"player_died")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"player_died","data":""}]}\n')))}g.isMDXComponent=!0}}]);