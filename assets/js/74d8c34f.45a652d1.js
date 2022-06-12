"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4713],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return i},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var n=a(67294);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,m=function(e,t){if(null==e)return{};var a,n,m={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(m[a]=e[a]);return m}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var i=n.createContext({}),p=function(e){return function(t){var a=u(t.components);return n.createElement(e,l({},t,{components:a}))}},u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,m=e.mdxType,l=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=u(a),s=m,c=p["".concat(r,".").concat(s)]||p[s]||x[s]||l;return a?n.createElement(c,o(o({ref:t},i),{},{components:a})):n.createElement(c,o({ref:t},i))}));function g(e,t){var a=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:m,r[1]=o;for(var i=2;i<l;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},69277:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return x},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var n=a(87462),m=a(63366),l=(a(67294),a(3905)),r=["components"],o={id:"overwolf-games-events-valheim",title:"Valheim",sidebar_label:"Valheim"},d=void 0,i={unversionedId:"api/overwolf-games-events-valheim",id:"api/overwolf-games-events-valheim",title:"Valheim",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/overwolf-games-events-valheim.mdx",sourceDirName:"api",slug:"/api/overwolf-games-events-valheim",permalink:"/docs/api/overwolf-games-events-valheim",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/overwolf-games-events-valheim.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"overwolf-games-events-valheim",title:"Valheim",sidebar_label:"Valheim"},sidebar:"api",previous:{title:"Teamfight Tactics",permalink:"/docs/api/overwolf-games-events-tft"},next:{title:"Valorant",permalink:"/docs/api/overwolf-games-events-valorant"}},p={},u=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<em>player_name</em> note",id:"player_name-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<em>state</em> note",id:"state-note",level:4},{value:"<em>time</em> note",id:"time-note",level:4},{value:"<em>inventory</em> note",id:"inventory-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>location</em> note",id:"location-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>damage</em> note",id:"damage-note",level:4},{value:"<em>kill</em> note",id:"kill-note",level:4}],s={toc:u};function x(e){var t=e.components,a=(0,m.Z)(e,r);return(0,l.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Please read the ",(0,l.mdx)("a",{parentName:"p",href:"overwolf-games-events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Game ID")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"21668"))),(0,l.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Valheim game events sample app"))),(0,l.mdx)("h2",{id:"available-features"},"Available Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#kill"},"kill"))),(0,l.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,l.mdx)("p",null,"It is highly recommended to communicate errors and warnings to your app users. "),(0,l.mdx)("p",null,"Check ",(0,l.mdx)("a",{parentName:"p",href:"../status/all"},"here")," the game events status. OR -  easily check the game events status from your app, ",(0,l.mdx)("a",{parentName:"p",href:"../topics/howto-check-events-status-from-app"},"using our API"),"."),(0,l.mdx)("h2",{id:"gep_internal"},(0,l.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,l.mdx)("h4",{id:"gep_internal-note"},(0,l.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.mdx)("h2",{id:"game_info"},(0,l.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,l.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"scene"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The current game scene."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"player_name"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of local Player"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#player-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"death"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Total number of deaths"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"state"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"In progress / Not in progress"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#state-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"time"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Current time of day"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#time-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"171.1")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"inventory"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"Names and amounts of items in inventory slots."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#inventory-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,l.mdx)("h4",{id:"scene-note"},(0,l.mdx)("em",{parentName:"h4"},"scene")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"scene":"MainMenu"}},"feature":"game_info"}\n{"game_info":{"scene":"SelectCharacter"}},"feature":"game_info"}\n{"game_info":{"scene":"WorldList"}},"feature":"game_info"}\n{"game_info":{"scene":"ServerList"}},"feature":"game_info"}\n{"game_info":{"scene":"Loading"}},"feature":"game_info"}\n')),(0,l.mdx)("h4",{id:"player_name-note"},(0,l.mdx)("em",{parentName:"h4"},"player_name")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"player_name":"Shargaas"}},"feature":"game_info"}\n')),(0,l.mdx)("h4",{id:"death-note"},(0,l.mdx)("em",{parentName:"h4"},"death")," note"),(0,l.mdx)("p",null,"This info is updated on the start of a match. The number of deaths is saved across multiple sessions."),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"death":"14"}},"feature":"game_info"}\n')),(0,l.mdx)("h4",{id:"state-note"},(0,l.mdx)("em",{parentName:"h4"},"state")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"game_info":{"state":"in_progress"}},"feature":"game_info"}\n{"game_info":{"state":"ended"}},"feature":"game_info"}\n')),(0,l.mdx)("h4",{id:"time-note"},(0,l.mdx)("em",{parentName:"h4"},"time")," note"),(0,l.mdx)("p",null,"Possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"DAY"),(0,l.mdx)("li",{parentName:"ul"},"AFTERNOON"),(0,l.mdx)("li",{parentName:"ul"},"NIGHT")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"time":"{"day":"11","day_time":"0.610754","part":"AFTERNOON"}"}},"feature":"game_info"}\n')),(0,l.mdx)("h4",{id:"inventory-note"},(0,l.mdx)("em",{parentName:"h4"},"inventory")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"inventory":"{"slot_0":{"name":"tem_axe_blackmetal","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_1":{"name":"tem_bow_draugrfang","type":"Bow","count":"1","max_count":"1"},"slot_2":{"name":"tem_mace_needle","type":"OneHandedWeapon","count":"1","max_count":"1"},"slot_3":{"name":"tem_shield_blackmetal","type":"Shield","count":"1","max_count":"1"},"slot_4":{"name":"tem_sledge_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_5":{"name":"tem_hammer","type":"Tool","count":"1","max_count":"1"},"slot_6":{"name":"tem_pickaxe_iron","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_7":{"name":"tem_hoe","type":"Tool","count":"1","max_count":"1"},"slot_8":{"name":"tem_chest_pcuirass","type":"Chest","count":"1","max_count":"1"},"slot_9":{"name":"tem_arrow_needle","type":"Ammo","count":"100","max_count":"100"},"slot_10":{"name":"tem_arrow_needle","type":"Ammo","count":"8","max_count":"100"},"slot_11":{"name":"tem_fishingbait","type":"Ammo","count":"37","max_count":"100"},"slot_12":{"name":"tem_fishingrod","type":"TwoHandedWeapon","count":"1","max_count":"1"},"slot_13":{},"slot_14":{},"slot_15":{},"slot_16":{"name":"tem_cape_lox","type":"Shoulder","count":"1","max_count":"1"},"slot_17":{"name":"tem_loxpie","type":"Consumable","count":"5","max_count":"10"},"slot_18":{"name":"tem_fishwraps","type":"Consumable","count":"2","max_count":"10"},"slot_19":{"name":"tem_bloodpudding","type":"Consumable","count":"5","max_count":"10"},"slot_20":{"name":"tem_mead_hp_minor","type":"Consumable","count":"9","max_count":"10"},"slot_21":{},"slot_22":{},"slot_23":{},"slot_24":{"name":"tem_helmet_padded","type":"Helmet","count":"1","max_count":"1"},"slot_25":{"name":"tem_legs_pgreaves","type":"Legs","count":"1","max_count":"1"},"slot_26":{"name":"tem_beltstrength","type":"Utility","count":"1","max_count":"1"},"slot_27":{"name":"tem_bread","type":"Consumable","count":"7","max_count":"20"},"slot_28":{"name":"tem_arrow_frost","type":"Ammo","count":"35","max_count":"100"},"slot_29":{"name":"tem_thistle","type":"Material","count":"6","max_count":"50"},"slot_30":{"name":"tem_necktail","type":"Material","count":"1","max_count":"50"},"slot_31":{"name":"tem_bonefragments","type":"Material","count":"1","max_count":"50"}}"}},"feature":"game_info"}\n')),(0,l.mdx)("h3",{id:"events"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"respawn"),(0,l.mdx)("td",{parentName:"tr",align:null},"null"),(0,l.mdx)("td",{parentName:"tr",align:null},"Entering a game / Dying."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#respawn-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"169.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"location"),(0,l.mdx)("td",{parentName:"tr",align:null},"XYZ numerics"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local player's location changes."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,l.mdx)("h4",{id:"match_start-note"},(0,l.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"respawn","data":""}\n')),(0,l.mdx)("h4",{id:"location-note"},(0,l.mdx)("em",{parentName:"h4"},"location")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"location","data":"{"x":"-563.196045","y":"78.863182","z":"353.648682"}"}]}\n')),(0,l.mdx)("h2",{id:"kill"},(0,l.mdx)("inlineCode",{parentName:"h2"},"kill")),(0,l.mdx)("h3",{id:"events-1"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"damage"),(0,l.mdx)("td",{parentName:"tr",align:null},"Numeric damage value performed."),(0,l.mdx)("td",{parentName:"tr",align:null},"Damage is done"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#damage-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"171.1")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"kill"),(0,l.mdx)("td",{parentName:"tr",align:null},"Type of enemy killed."),(0,l.mdx)("td",{parentName:"tr",align:null},"Enemy dies."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"171.1")))),(0,l.mdx)("h4",{id:"damage-note"},(0,l.mdx)("em",{parentName:"h4"},"damage")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"damage","data":"{"damage":"45.066856","current_hp":"0.000000","max_hp":"40.000000","enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')),(0,l.mdx)("h4",{id:"kill-note"},(0,l.mdx)("em",{parentName:"h4"},"kill")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":"{"enemy_name":"skeleton","enemy_category":"Undead"}"}]}\n')))}x.isMDXComponent=!0}}]);