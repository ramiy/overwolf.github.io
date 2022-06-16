"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8948],{22690:function(e,a,t){t.d(a,{Z:function(){return h}});var s=t(74165),n=t(67855),r=t(15861),o=t(67294);function g(e){var a=e.className,t=e.path,s=e.imgSrc,n=e.text;return o.createElement("li",{className:a},o.createElement("a",{href:t},o.createElement("img",{src:s}),n))}var l=function(e){var a=function(e){return e.map((function(e){var a="game ";switch(e.state){case 1:a+="good";break;case 2:a+="medium";break;case 3:a+="bad"}return o.createElement(g,{key:e.id,className:a,path:e.path,imgSrc:e.iconUrl,text:e.name})}))}(e.gameListData);return a.sort((function(e,a){return e.props.text<a.props.text?-1:1})),o.createElement("article",{className:"hentry"},o.createElement("div",{className:"gep-games-list"},o.createElement("ul",{className:"list"},a),o.createElement("ul",{className:"legend"},o.createElement("li",{className:"good"},"Good to go"),o.createElement("li",{className:"medium"},"Some game events may be unavailable"),o.createElement("li",{className:"bad"},"Game events are currently unavailable"))))},i=t(94578);function m(e){var a=e.className,t=e.imgSrc,s=e.name,n=e.href;return o.createElement("h3",{className:"game-title "+a},o.createElement("img",{src:t}),s,o.createElement("a",{href:""+n,title:"full API docs"},"Go to the API docs page"))}function c(e){return o.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault()}},o.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:function(e){!function(e){var a=e.target,t=document.querySelectorAll(".game-data ul li"),s=a.value.toLowerCase();0===s.length?t.forEach((function(e){return e.removeAttribute("style")})):t.forEach((function(e){e.textContent.toLowerCase().includes(s)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),o.createElement("button",{type:"submit",className:"search-submit",title:"Search"},o.createElement("img",{src:"../../img/search.svg"})))}function u(e){var a=e.title,t=e.events;return o.createElement("div",{className:"game-data"},o.createElement("h4",null,a),o.createElement("ul",null,t))}function p(e){return o.createElement("div",{className:"game-events-info"},o.createElement(u,{title:"Events",events:e.events}),o.createElement(u,{title:"Info updates",events:e.updates}))}var d=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={status:a.gameStatusData,gamesMetadata:a.gamesMetaData,id:a.gameID,apiLink:a.docsPath},t}(0,i.Z)(a,e);var t=a.prototype;return t.stateToCss=function(e){var a="";switch(e){case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a},t.getEventsByType=function(e){var a=this.state.status.features;if(!a||0===a.length)return o.createElement("li",{className:"coming-soon"},"Coming soon");for(var t,s=0,r=[],g=(0,n.Z)(a);!(t=g()).done;)for(var l,i=t.value,m=(0,n.Z)(i.keys);!(l=m()).done;){var c=l.value;c.type==e&&r.push(o.createElement("li",{className:this.stateToCss(c.state),key:s++},c.name))}return r},t.render=function(){var e=this.getEventsByType(0),a=this.getEventsByType(1),t=this.stateToCss(this.state.status.state),s=this.state.gamesMetadata[this.state.id].iconLargeUrl,n=this.state.gamesMetadata[this.state.id].name;return o.createElement("article",{className:"hentry"},o.createElement("div",{className:"entry-content"},o.createElement("div",{className:"gep-game"},o.createElement(m,{className:t,name:n,imgSrc:s,href:this.state.apiLink}),o.createElement(c,{href:n}),o.createElement(p,{events:e,updates:a}))))},a}(o.Component),f={10878:{id:10878,path:"#",iconUrl:"../../img/games-logos/battlerite.png",iconLargeUrl:"../../img/games-logos/large/battlerite.png",name:"Battlerite"},6365:{id:6365,path:"../status/world-of-tanks",iconUrl:"../../img/games-logos/wot.png",iconLargeUrl:"../../img/games-logos/large/wot.png",name:"World Of Tanks"},10826:{id:10826,path:"../status/rainbow-six-siege",iconUrl:"../../img/games-logos/rainbow_six_siege.png",iconLargeUrl:"../../img/games-logos/large/rainbow_six_siege.png",name:"Rainbow Six: Siege"},10798:{id:10798,path:"../status/rocket-league",iconUrl:"../../img/games-logos/rocket_league.png",iconLargeUrl:"../../img/games-logos/large/rocket_league.png",name:"Rocket League"},10906:{id:10906,path:"../status/pubg",iconUrl:"../../img/games-logos/pubg.png",iconLargeUrl:"../../img/games-logos/large/pubg.png",name:"PUBG"},5426:{id:5426,path:"../status/lol",iconUrl:"../../img/games-logos/lol.png",iconLargeUrl:"../../img/games-logos/large/lol.png",name:"League of Legends"},9898:{id:9898,path:"../status/hearthstone",iconUrl:"../../img/games-logos/hearthstone.png",iconLargeUrl:"../../img/games-logos/large/hearthstone.png",name:"Hearthstone"},21216:{id:21216,path:"../status/fortnite",iconUrl:"../../img/games-logos/fortnite.png",iconLargeUrl:"../../img/games-logos/large/fortnite.png",name:"Fortnite"},7314:{id:7314,path:"../status/dota2",iconUrl:"../../img/games-logos/dota2.png",iconLargeUrl:"../../img/games-logos/large/dota2.png",name:"Dota 2"},7764:{id:7764,path:"../status/csgo",iconUrl:"../../img/games-logos/cs_go.png",iconLargeUrl:"../../img/games-logos/large/cs_go.png",name:"CS: GO"},21566:{id:21566,path:"../status/apex",iconUrl:"../../img/games-logos/apex.png",iconLargeUrl:"../../img/games-logos/large/apex.png",name:"Apex Legends"},21570:{id:21570,path:"../status/teamfight-tactics",iconUrl:"../../img/games-logos/tft.png",iconLargeUrl:"../../img/games-logos/large/tft.png",name:"Teamfight Tactics"},10746:{id:10746,path:"../status/world-of-warships",iconUrl:"../../img/games-logos/wow.png",iconLargeUrl:"../../img/games-logos/large/wow.png",name:"World of Warships"},10624:{id:10624,path:"../status/heroes-of-the-storm",iconUrl:"../../img/games-logos/hots.png",iconLargeUrl:"../../img/games-logos/large/hots.png",name:"Heroes of the Storm"},21308:{id:21308,path:"../status/mtga",iconUrl:"../../img/games-logos/mtg.png",iconLargeUrl:"../../img/games-logos/large/mtg.png",name:"MTG Arena"},21586:{id:21586,path:"../status/underlords",iconUrl:"../../img/games-logos/dota_underlords.png",iconLargeUrl:"../../img/games-logos/large/dota_underlords.png",name:"Dota Underlords"},5855:{id:5855,path:"../status/sc2",iconUrl:"../../img/games-logos/sc2.png",iconLargeUrl:"../../img/games-logos/large/sc2.png",name:"StarCraft II"},10902:{id:10902,path:"../status/lol-launcher",iconUrl:"../../img/games-logos/lol-launcher.png",iconLargeUrl:"../../img/games-logos/large/lol-launcher.png",name:"League of Legends Launcher"},7212:{id:7212,path:"../status/path-of-exile",iconUrl:"../../img/games-logos/path-of-exile.png",iconLargeUrl:"../../img/games-logos/large/path-of-exile.png",name:"Path of Exile"},21620:{id:21620,path:"../status/lor",iconUrl:"../../img/games-logos/lor.png",iconLargeUrl:"../../img/games-logos/large/lor.png",name:"Legends of Runeterra"},765:{id:765,path:"../status/world-of-warcraft",iconUrl:"../../img/games-logos/warcraft.png",iconLargeUrl:"../../img/games-logos/large/warcraft.png",name:"World of Warcraft"},21634:{id:21634,path:"../status/escape-from-tarkov",iconUrl:"../../img/games-logos/tarkov.png",iconLargeUrl:"../../img/games-logos/large/tarkov.png",name:"Escape From Tarkov"},21640:{id:21640,path:"../status/valorant",iconUrl:"../../img/games-logos/valorant.png",iconLargeUrl:"../../img/games-logos/large/valorant.png",name:"Valorant"},10844:{id:10844,path:"../status/overwatch",iconUrl:"../../img/games-logos/overwatch.png",iconLargeUrl:"../../img/games-logos/large/overwatch.png",name:"Overwatch"},8032:{id:8032,path:"../status/minecraft",iconUrl:"../../img/games-logos/minecraft.png",iconLargeUrl:"../../img/games-logos/large/minecraft.png",name:"Minecraft"},8954:{id:8954,path:"../status/warframe",iconUrl:"../../img/games-logos/warframe.png",iconLargeUrl:"../../img/games-logos/large/warframe.png",name:"Warframe"},21626:{id:21626,path:"../status/warzone",iconUrl:"../../img/games-logos/warzone.png",iconLargeUrl:"../../img/games-logos/large/warzone.png",name:"Call of Duty: Warzone"},6350:{id:6350,path:"../status/ff-xiv",iconUrl:"../../img/games-logos/ff-xiv.png",iconLargeUrl:"../../img/games-logos/large/ff-xiv.png",name:"Final Fantasy XIV"},21668:{id:21668,path:"../status/valheim",iconUrl:"../../img/games-logos/valheim.png",iconLargeUrl:"../../img/games-logos/large/valheim.png",name:"Valheim"},21404:{id:21404,path:"../status/splitgate",iconUrl:"../../img/games-logos/splitgate.png",iconLargeUrl:"../../img/games-logos/large/splitgate.png",name:"Splitgate: Arena Warfare"},21666:{id:21666,path:"../status/fm2021",iconUrl:"../../img/games-logos/fm2021.png",iconLargeUrl:"../../img/games-logos/large/fm2021.png",name:"Football Manager 2021"},21856:{id:21856,path:"../status/fm2022",iconUrl:"../../img/games-logos/fm2022.png",iconLargeUrl:"../../img/games-logos/large/fm2022.png",name:"Football Manager 2022"},21816:{id:21816,path:"../status/new-world",iconUrl:"../../img/games-logos/new-world.png",iconLargeUrl:"../../img/games-logos/large/new-world.png",name:"New World"},21672:{id:21672,path:"../status/eternal-return",iconUrl:"../../img/games-logos/eternal-return.png",iconLargeUrl:"../../img/games-logos/large/eternal-return.png",name:"Eternal Return"},21854:{id:21854,path:"../status/halo-infinite",iconUrl:"../../img/games-logos/halo-infinite.png",iconLargeUrl:"../../img/games-logos/large/halo-infinite.png",name:"Halo Infinite"},21328:{id:21328,path:"../status/hunt-showdown",iconUrl:"../../img/games-logos/hunt-showdown.png",iconLargeUrl:"../../img/games-logos/large/hunt-showdown.png",name:"Hunt Showdown"},21876:{id:21876,path:"../status/vanguard",iconUrl:"../../img/games-logos/vanguard.png",iconLargeUrl:"../../img/games-logos/large/vanguard.png",name:"Call of Duty: Vanguard"}};var h=function(e){var a=e.allGames,t=e.specificGame,g=e.gameID,i=e.docsPath,m=(0,o.useState)(null),c=m[0],u=m[1],p=(0,o.useState)(null),h=p[0],v=p[1];return(0,o.useEffect)((function(){if(a){function e(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/all_prod.json").then((function(e){return e.json()})).then((function(e){for(var a,t=[],s=(0,n.Z)(e);!(a=s()).done;){var r=a.value;0!=r.state&&(f[r.game_id]&&(f[r.game_id].state=r.state,t.push(f[r.game_id])))}u(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}if(t){function l(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+g+"_prod.json").then((function(e){return e.json()})).then((function(e){return v(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l()}}),[]),o.createElement(o.Fragment,null,a&&null!=c&&o.createElement(l,{gameListData:c}),t&&null!=h&&o.createElement(d,{gamesMetaData:f,gameStatusData:h,gameID:g,docsPath:i}))}},19097:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var s=t(87462),n=t(63366),r=(t(67294),t(3905)),o=t(22690),g=["components"],l={id:"escape-from-tarkov",title:"Game events status",sidebar_label:"Escape From Tarkov"},i=void 0,m={unversionedId:"status/escape-from-tarkov",id:"status/escape-from-tarkov",title:"Game events status",description:"",source:"@site/pages/docs/status/escape-from-tarkov.mdx",sourceDirName:"status",slug:"/status/escape-from-tarkov",permalink:"/docs/status/escape-from-tarkov",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/escape-from-tarkov.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"escape-from-tarkov",title:"Game events status",sidebar_label:"Escape From Tarkov"},sidebar:"service",previous:{title:"Dota Underlords",permalink:"/docs/status/underlords"},next:{title:"Eternal Return",permalink:"/docs/status/eternal-return"}},c={},u=[],p={toc:u};function d(e){var a=e.components,t=(0,n.Z)(e,g);return(0,r.mdx)("wrapper",(0,s.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(o.Z,{specificGame:!0,gameID:21634,docsPath:"../api/overwolf-games-events-escape-from-tarkov",mdxType:"EventsData"}))}d.isMDXComponent=!0}}]);