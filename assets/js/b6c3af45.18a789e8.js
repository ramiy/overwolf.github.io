"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3749],{3905:function(A,e,t){t.r(e),t.d(e,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(){return a=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A},a.apply(this,arguments)}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},a=Object.keys(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=r.createContext({}),u=function(A){return function(e){var t=p(e.components);return r.createElement(A,a({},e,{components:t}))}},p=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},d=function(A){var e=p(A.components);return r.createElement(l.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,o=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(o,".").concat(d)]||u[d]||c[d]||a;return t?r.createElement(m,s(s({ref:e},l),{},{components:t})):r.createElement(m,s({ref:e},l))}));function f(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=A,s.mdxType="string"==typeof A?A:n,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63973:function(A,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"submit-your-app-to-the-store",title:"Submitting your app to the appstore",sidebar_label:"App submission basics"},i=void 0,l={unversionedId:"start/submit-your-app-to-the-store",id:"start/submit-your-app-to-the-store",title:"Submitting your app to the appstore",description:"So, you\u2019re done developing your app and it's time to submit it for review to go live on the in-game Appstore. First thing's first - Congratulations!",source:"@site/pages/docs/start/submit-your-app-to-the-store.mdx",sourceDirName:"start",slug:"/start/submit-your-app-to-the-store",permalink:"/docs/start/submit-your-app-to-the-store",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/submit-your-app-to-the-store.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1655031291,formattedLastUpdatedAt:"6/12/2022",frontMatter:{id:"submit-your-app-to-the-store",title:"Submitting your app to the appstore",sidebar_label:"App submission basics"},sidebar:"start",previous:{title:"Community alphas",permalink:"/docs/start/community-alphas"},next:{title:"Custom Installer",permalink:"/docs/start/custom-installer-for-your-app"}},u={},p=[{value:"Support page",id:"support-page",level:2},{value:"How to Submit an App",id:"how-to-submit-an-app",level:2},{value:"OPK package overview",id:"opk-package-overview",level:3},{value:"How to create an OPK package",id:"how-to-create-an-opk-package",level:3},{value:"OPK structure",id:"opk-structure",level:3},{value:"manifest.json file",id:"manifestjson-file",level:4},{value:"App Icons",id:"app-icons",level:4},{value:"The &quot;Files&quot; folder",id:"the-files-folder",level:4},{value:"Prepare your store assets",id:"prepare-your-store-assets",level:2},{value:"1. Tile.jpg",id:"1-tilejpg",level:3},{value:"2. Icon.png",id:"2-iconpng",level:3},{value:"3. ScreenshotX.jpg",id:"3-screenshotxjpg",level:3},{value:"4. Store description",id:"4-store-description",level:3},{value:"Amazon Web Services benefits",id:"amazon-web-services-benefits",level:2}],d={toc:p};function c(A){var e=A.components,s=(0,n.Z)(A,o);return(0,a.mdx)("wrapper",(0,r.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"So, you\u2019re done developing your app and it's time to submit it for review to go live on the in-game Appstore. First thing's first - Congratulations!"),(0,a.mdx)("p",null,"In this page we'll detail how you can submit your app and set yourself up for approval."),(0,a.mdx)("h2",{id:"support-page"},"Support page"),(0,a.mdx)("p",null,"Before your new app can go live, we recommend create a customer support page for it. We've put together advice and instructions on building support pages for your app ",(0,a.mdx)("a",{parentName:"p",href:"add-a-knowledge-base-to-app"},"here"),"."),(0,a.mdx)("h2",{id:"how-to-submit-an-app"},"How to Submit an App"),(0,a.mdx)("p",null,"Please take the time to ",(0,a.mdx)("a",{parentName:"p",href:"../api/validate-your-manifest"},"validate your manifest")," before submitting your app for review.",(0,a.mdx)("br",{parentName:"p"}),"\n","In addition, compress all of the images/assets to reduce the final app size. You can use ",(0,a.mdx)("a",{parentName:"p",href:"https://tinypng.com/"},"https://tinypng.com/")," free service to compress the images."),(0,a.mdx)("h3",{id:"opk-package-overview"},"OPK package overview"),(0,a.mdx)("p",null,"To get started, you first need an OPK file with the app's version you wish to Submit."),(0,a.mdx)("p",null,"OPK files are Overwolf's app installation package, which includes ",(0,a.mdx)("a",{parentName:"p",href:"#opk-structure"},"your app's files"),": the manifest, source files, and other assets. All files are packed in a package that has the OPK file extension: "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"+---- manifest.json\n+---- IconMouseNormal.png\n+---- IconMouseOver.png\n+---- launcher_icon.ico\n+---- WindowIcon.png\n+---- index.html\n+---- Files\n+---- css\n+---- assets\n")),(0,a.mdx)("p",null,"Double-clicking an OPK will install the package."),(0,a.mdx)("h3",{id:"how-to-create-an-opk-package"},"How to create an OPK package"),(0,a.mdx)("p",null,"To create it, ZIP all your files together (make sure to use normal compression rate and not the highest rate), then manually change the file extension from ZIP to OPK.",(0,a.mdx)("br",{parentName:"p"}),"\n","Make sure to pack the manifest and all the files and folder in the root of the package, like this:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"welcome-screen",src:t(69701).Z,width:"969",height:"698"})),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Note:"),' Make sure to use "Normal" compression rate and not the highest rate.'),(0,a.mdx)("h3",{id:"opk-structure"},"OPK structure"),(0,a.mdx)("p",null,"As mentioned above, the OPK package should contain all the app's files and assets:"),(0,a.mdx)("h4",{id:"manifestjson-file"},"manifest.json file"),(0,a.mdx)("p",null,"  Your app's ",(0,a.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/api/manifest-json#docsNav"},"manifest.json")," file."),(0,a.mdx)("h4",{id:"app-icons"},"App Icons"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"IconMouseNormal.png",(0,a.mdx)("br",{parentName:"li"}),"A ",(0,a.mdx)("strong",{parentName:"li"},"gray-scale")," icon for the default state of your app button when it is unselected. File should be smaller than 30KB and sized 256X256 pixels with at least 72 PPI.")),(0,a.mdx)("div",{className:"center-text"},(0,a.mdx)("p",null,"  ",(0,a.mdx)("img",{src:t(17635).Z,width:"256",height:"256"}))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"IconMouseOver.png",(0,a.mdx)("br",{parentName:"li"}),"A colored icon for the same button mentioned above when it is selected or mouse-overed. Similarly, file should be smaller than 30KB and sized 256X256 pixels with at least 72 PPI.")),(0,a.mdx)("div",{className:"center-text"},(0,a.mdx)("p",null,"  ",(0,a.mdx)("img",{src:t(29665).Z,width:"256",height:"256"}))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"launcher_icon.ico"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Add the ",(0,a.mdx)("a",{parentName:"li",href:"https://overwolf.github.io/docs/api/manifest-json#meta-launcher_icon"},'"launcher_icon"')," property to your app's manifest.json file.  "),(0,a.mdx)("li",{parentName:"ul"},"Add the icon asset to your app\u2019s folder.  "),(0,a.mdx)("li",{parentName:"ul"},"The launcher icon should look like the app's dock icon to prevent confusion.  "),(0,a.mdx)("li",{parentName:"ul"},"The launcher icon is a 256\xd7256 transparent .png converted into an .ico file in the following resolutions: 16\xd716, 32\xd732, 48\xd748, 256\xd7256.",(0,a.mdx)("br",{parentName:"li"}),"In order to create multi-layer .ico file, you can use third-party software like the free online service ",(0,a.mdx)("a",{parentName:"li",href:"https://convertico.com"},"convertico")," or other.",(0,a.mdx)("br",{parentName:"li"}),'In the "Choose icon layer sizes" section please choose the above sizes (16\xd716, 32\xd732, 48\xd748, 256\xd7256).'),(0,a.mdx)("li",{parentName:"ul"},"The launcher icon should weigh less than 150Kb."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Contact us if you want to update your installer icon")," with the ICO file (the installer is the EXE bundle icon that the users downloads from the OW app store)."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"WindowIcon.png  "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"A colored icon for the window task bar icon \\ window header. If not defined, the ",(0,a.mdx)("strong",{parentName:"li"},"IconMouseOver")," will be taken.",(0,a.mdx)("br",{parentName:"li"}),"The difference between the two icons, is that this taskbar icon should be squared, while the other icons are rounded, to fit the OW deck.",(0,a.mdx)("br",{parentName:"li"}),"Similarly, file should be smaller than 30KB and sized 256X256 pixels with at least 72 PPI.")))),(0,a.mdx)("h4",{id:"the-files-folder"},'The "Files" folder'),(0,a.mdx)("p",null,"A folder containing your app's code. "),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Make sure your manifest pathing is correct."),(0,a.mdx)("li",{parentName:"ul"},"The structure and content of this folder are not defined, as it depends on your personal preferences.")),(0,a.mdx)("h2",{id:"prepare-your-store-assets"},"Prepare your store assets"),(0,a.mdx)("p",null,"After submitting your OPK to the store for the first time, you will get access to the OW dev console.",(0,a.mdx)("br",{parentName:"p"}),"\n","Through the console, you will be able to upload a new app version and ",(0,a.mdx)("a",{parentName:"p",href:"../topics/update-store-listing"},"update your store listing page"),", with all the app info, like screenshots, description, etc. These assets, of course, should be prepared in front."),(0,a.mdx)("p",null,"Here is the list of the required store assets:"),(0,a.mdx)("h3",{id:"1-tilejpg"},"1. Tile.jpg"),(0,a.mdx)("p",null,"The Appstore tile asset for your app, it should be a JPG format image sized 258X198 at 72PPI."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:t(42747).Z,width:"258",height:"198"})),(0,a.mdx)("h3",{id:"2-iconpng"},"2. Icon.png"),(0,a.mdx)("p",null,"This is the icon used to represent your app in the Overwolf appstore. It must be in PNG format and sized 55X55 pixels.\nPlease make sure your chosen icon looks great on both dark and bright backgrounds."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:t(16686).Z,width:"256",height:"256"})),(0,a.mdx)("h3",{id:"3-screenshotxjpg"},"3. ScreenshotX.jpg"),(0,a.mdx)("p",null,"Include at least one screenshot of your app which will be shown in the app\u2019s page when reached through the Appstore. Providing more than one attractive screenshots increases your app\u2019s chances of getting noticed and winning hearts. For each image file change X to a number (1-5). "),(0,a.mdx)("p",null,"Screenshots must be in JPG format, sized 1200x750 pixels, and a max of 100Kb for each."),(0,a.mdx)("p",null,"Please choose screenshots that remain clear and where features can be spotted at this resolution.",(0,a.mdx)("br",{parentName:"p"}),"\n","You may include up to 5 screenshots per app."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:t(51310).Z,width:"1920",height:"937"})),(0,a.mdx)("h3",{id:"4-store-description"},"4. Store description"),(0,a.mdx)("p",null,"The full Appstore description of your app, this description will appear when users click on your app's store tile. This description can be edited using the markdown format. The maximum length for an appstore description is 2000 characters including spaces.",(0,a.mdx)("br",{parentName:"p"}),"\n","The store tile description is included in the app's ",(0,a.mdx)("a",{parentName:"p",href:"https://overwolf.github.io/docs/api/manifest-json"},"manifest.json")),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:t(54010).Z,width:"1920",height:"937"})),(0,a.mdx)("h2",{id:"amazon-web-services-benefits"},"Amazon Web Services benefits"),(0,a.mdx)("p",null,"Once your app has been successfully published, you will become eligible for some epic AWS benefits:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"$10,000 in AWS Promotional Credit, valid for 2 Years.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"1 full year of AWS Business Support, worth up to $5,000.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Access to the AWS Technical and Business Essentials training, both web-based and instructor-led, worth about $600 per course.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"80 credits for Self-Paced Labs, valued around $80."))),(0,a.mdx)("p",null,"To apply for these benefits, please send us an email (",(0,a.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com"),") and we will send you all the details!"))}c.isMDXComponent=!0},69701:function(A,e,t){e.Z=t.p+"assets/images/opk-df6d334e331a77b32a1fb85348f1b250.gif"},16686:function(A,e){e.Z="data:image/png;base64,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"},17635:function(A,e){e.Z="data:image/png;base64,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"},29665:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEnVJREFUeNrsnU92GzcShyE/7kc+wVDb2YQ+wDxRJ7B8gpDb2cQ8gawTmN7MVpwTRDmBWm8O4PZmtuobhDfINJzqpMWQbDQaf7u/7z0+JbZFsgHUD1WFAqAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADlzQBNPk3//936r+cSf/e/+vf/5jR6sgADAdw58f/FWFECAAMD3DVwgBAgAYPkKAAACGjxAgAIDhIwQIAGD4CAECABg+QoAAQGKGv6x/fK5fi8hfpaxfm1oICnoFAYAwhq9n/GViX60QjwAhQABgQoaPECAAgOEjBAgAYPgIAQIAGD5CgAAAho8QIACQqOFX9Wsj/62XE+cIAQIA4Qx/IYYXw/D/UsATsaBIC4CuIygZFQjAFAx/Loa2CvzRezG0Xcf3W4kwXQb+fjsRpopRggBg+G4N/0v92tbGtTf8rtr4P9avnxACBAAmYvgIAQIA+Rt+YzwbW8M/IQSfIz4LQoAAYPixjWXMz4YAQM7G8SgzfhXwWbVHcIsQIAAYfjzDL1TEtfTIxUsIgQNmNMFgYsyEUQ2/QT6/iCQEWnB1buIDQxABiMlzQAGoxNV/TKkBWkJwq8JWFT4z/BCA2JSBDD/547dEmB4DVhVSPUgOIIk8wG+e3tqoei/hdlkpj1WFdbswfgfyhiZIcibShn9fv65yPnRTvvuVPMs+8TYnBIBBLvrCkeEPqt5LUAT0c3yqvYGtcltVWDHsHAhA3TG6Uwp2Yw3imxqeCNwph9V7iQuBi6rCbwy7QeGZnrCW2gP4e/36Wv+B7qBC/Z5ZRRDCoQ1/MuvZIgTrerzpsCBW/cRkDb5+XctP7YVtZxKfreQPbpuZ7EAQHim4cE7Q6r0EhaBqCUGsqsIxG/xc2rRt8Ifh5v2F/GP9D382iLnaHgKC8Gdjf5LZrA83nIbzR/vpAfrU89e01/SJ1ntl8O0Zft7xKx/0su1M1Fiv3T52qPBcPIWVfCCCAJCPwb/yPptisvYqwOaEq9BXEH4RQdhPqD/+xpCkzT0b/KXY53sLgz90/ZuzIP8UAD2Dt+IxGw4FoTzwEMYsCAvskTb3ZPDNDO/qeV8lnF/VAdR/sa0/uFEYFx2kXx8nIAhL7JE2T9Tg22i727b/4Fgh0Lp+vXhS7ENBaMKFIuOOs81eV9jwsLbQbZ/axqie37/t0ofwaNaHf3Bx4ot9Uv2z2oPVqeUdFBl1ol496S0C1LH/pR1t9lPoZNaHzAy+PcuH5OiqycWZL/s1cpyVvCBYLl81rtgNZv+qLZ8sjeIm8fERy+DblHUbvTv2F+f2AmwsB7fLGE+/7uqG/K72Kr0qRduEKVWWx9tkadkH7xIx+Ha1XUqFTZtTf3HR8UCfm5g9MaKXLddt86Dsy1g/5By7empPk2K0U+zq9lxHNnj98zLBptUby6wFQD+QDgXmiY+foIIwUBj39fd7i8kfbddfBxiR98rATAy+TaW9o3MrbhcGD20b58Z+8LYgVI4GgIvz8c8q8sQF4GFg2+6U2/sQ5gcu/WVmTdqZH7kwbAirTHdigrAekixyeMzVFWXTZw3uxUFfDzo+LcLZhj4wWiExPRBknYnLcwrdke/FK+jr8unB8KOjwbDD+E8j1ai7gV6A7qeH+n20WP9HDKFvSPg+c+PfqyNr/tYeQEsVf864UU4uhRyEO43Lt/AgeMz+YbyAYwZRKsNl5fo7vGQuAMZJZuMzAeUNi4wbZSGDq2v2uPPk7WwxfjMvQLeV47dtymw7QzgZIzkbf9FnhanvoaBr5f5wx5AsuxrPYw7iHvM25l75K5UuBo6RUbj+VgIg6pzzQL42eD4fA+/DxLZHD/UCdFv5KPGtDLyw65yFs6+X+caic7Yq30o2E3V3/Wxrzle0EoGy72zmqG9z9QDKw51+XgSgFQrkyNwgD+Dyuqldzuf6JyACuu1ctt/ziON/K5t8Y9kxZcahQKg8QJTy1BGKwNqhCIw1/r+39TIHbUnNdLmk0zAHlqRqvFf7OdytmcXORAf7UjpLsB1UIsZA5zWubH956NVgOc5wJkZj6wXsJeYPUeqb+4pMX09gM/CZC0djYxSuvxMBkIKKbW4CIDX9PvIAZaiYX1y+Se0pkLa1Tah2xf+XGQrAduhZCC4uB71X+a0K+MoDLCIYxNS2Fdu28djifyd5uDcOBuFeSmx1fPVBPIIq8cbrqgcoLV3NS9k/ENoFrKZg+dK2NrmZvUGSLPX1/0psS9vYW21zLmpLnN0OLF/mUV6bgRcXxPYAmhnDZgfkIqRHpNu9bmstAk8T0ABfs3+KHkClAly8M/M4MPUX3skrtb3V3/MAHQpqe+PvtXK7dm3S1kXrss0xYztLf8sg/m8m0KA3bc0CDtK2IKwTOF1l2RE/F5YGFWUg6dNwZAssHkAe8X8St3HPYvWkPHApcU2MAxWvzwmAzKq+vAvoH/9bz9IGmfJQ8X9yB9vOUungI4KwVH6PVDbNA9h89kLlvXWa+N8N7Rk+yfEwS7W3pcGK1gzQCMJ7R262yXs8Ww6OJQIQRbBP9WGosC27265mufR+SxA+ubpHTYtKR0fZ5gF+wF6dY9umRdcYGGjw7Vk+u7BvluNIOFhyPLxYUecP5i5m6gF5gCX2moYHYDAT93nf6iCOzz7PMxvDyBhQg2CS/LHJA+iCoDlHgLlB+tNmlcjEDb/uMPj2DD+6/pwF6LwnachgjdijBsHEsIfkAXaYb/Lxf/u9o6zFHxG7ZqzOfe/UDOEB6AIVLQIrecDgbtS5GgT93x1LMuQBxhv/L1TkpbmO8NX7Nu2LQA95bp910okU6aBfLX618xhyD9/V5ort5M8DGHD2wdtEx1M7PD31XEEOlAmVA9io0+W/C3l9lAZKailFau1LiwGY497yVLFpyzIV47dYwt6rQFu9ZwGNSKvZz4adrV/NteBt7yCWIBQ2g9BgmRHMjMe5+x/I4G2L2NahxCvkXoDHumEKiwZpGrMRhBgx27OyO45qqSgIGspyQJ+FMniXZexFyKvjQy8Dai/gqxq28ee2aeS64UNtqLA1YhKBw/khcJ/1NfilcreRrffFHlkJgFz+qFcFPjt6y8sjguB8GWdAHmCJ/UbxAJzG/wG3st+HXnoMXgikLy+oG/S9J+PQHbNSr5ccC0eCYJMHoCBouOH5KgAyNXj9cx7gcQubiz2yEwBhI6GAb+ZHBMG2BsE2D6BFAwGww3Yl5bmnwduWkru2CTUJAdCxeqQTbOZixO0lx8JQEGxnlbPnDkBn2zmP/11tJnPs+kc5H+BNrCfWJ9io+KcJN/UHennyoSsPYPl9qQcI6wGYxP8P0ucfE+ifUmxBTUoAYro9JzDJSZSe3hfctV1uF4BGtYGoApDYxSImR3pbrS0P3HM+SQa0WdcFILZHi/tgG7tQ7E0CjaBzAVUmM45tZxEGhGuzYmAfh6JSCVywG10AJF5LJRToujCkshSra+w5SJtVBkuuqfTFJoW9Cil4AEpKH1PIlPu6OBQPIEybFZn0xWPIct/kBUBI4bbbuRSBuM4DmLwv/Bmn67ayaa9nT+/rkuDlvlkIQEKhAHkA4v/Ru/4pegDNbbdF5K9BHoD43xdFqOvjsxSAREIBk1mCPECe8X9MDyAp178huVOBZcfgFxXvosu5wQaeb56EJdbzfnL0XjtHG59s2qrrAtDY8f+XFDeFJXksuFx06eoGINsBuHOdBzA4gNQagyKmkwLgSGydlLQOeI6U4/+o5b65hQDtUCDVPEBpGab4HIQPkfvLVQLXpo32BsJ6PdGxnKcASIfqQRXDbfKVB/ByQlA9a36OnGNwWdJq00apxv967G5SuQk4Nw/g++Eh9euq/s8rUdFdIEGYy5bRc9jUAyw9GL9+z48Ru0l7Qi5LWm3aqGv9/zJQ/F/JGNVj9UqP3RiHfGSfAzgiBE3D7qRDdWfeKvdnsh0OxEfHHsB3YXG1DiwDO7brv3b8PDaGGiv+b59J+ZjjyU+5Xg6qG3orL1+HNJ49yEMONdlbfFaXsPThTsXNbLs+wTb1+D/UIbQIgEW+oDwQhLaH4DMP0PcY6IULAaif8Tay66+U++RWiuv/7Rm+VCNjpkZISxDacfKypyAsDNz1ZwsBuHZg/Cm4/j5OsLVpG5P4f2Fh8MUULnWZqQkgHVm0BkRbDBYD3PVYJwQ9qLiHWlSe1rVt2qYc+J5J302JALgXg+bugEcDQejKAxRyW1HfGdy6IKh1VHbM2cn5QRa2BUAGs/Q1Bo8A9BGEeUsQTGbZQtldd1Zafl/tdt+MsCtsZn8TEdR9uFOOL4tBAMYrCJVqLTkaxqB9By9Xhrlpk2eD/lzTtKd5QxMMxsYVX9JswTwAOMNFrl9cdrC9TyGeq7/Lbxa/9nbq8Wer/bSb/quFt3YR8fs2YaL++Uuqm31GGwK0dgwevekn8JlrNnmABTPYq7ZIevaXuotjieIyV+MfQw5AbxZ6OhhI32/7kex82zvwOWBs8gBLBGCQ+//s2eCXyqx2ZJNzw2ctALIMt1WnK+KaTrxrCcIvyn0Zp37fvnvqOSJsWFsUjg2+KSfvc3P1NvdioYvcR47EY/qm4XnPX3Va122RB9A17G+x/e9tp+P/XoVNQ+N/B/tHqvr1Lvc8zsVIBtDyIBSwYX/gIVQ9v8OThSv7boz15RaG2PeqeN0/Nz0/Z34www+tpLwZQ6nwWDYD6VBAJ/1uB7zNpfz+rQyY6sBD6BKEUtklAictAMryBuAeBt/M8HOH3/lxLPsExlQH4Po0YT1gVur3uvsXg8sqbZJS5AH8bADSffUifbdybPxJnu47eQGQWMxnx3QJgM2MwFHhfpYAlx6/73pM9RujqgSUtX9frlnXQaF7C3d+YXD02Jjj/0sLASgNDNCXZ1WkcqcfAhAuFOgzU+EFxJ/9fbXpqFz/0QqAJOt83Lt+abBlNYmDQjPC5tm74n/dRz68qvsx7iQc5WYgOYm1jDBgbTyAKScCfRQA+RDUMvXTfRGA46FAFnkAQoDk4//RbikerQBIgY3rUMBkdunrBVzKmvWkaJ1s5Dr+d+0B3I+5WGvU5wHILi2XcZtJHmBMF4emFv93XQDqOv6vct7pN3kB8OS++cgDTPGEIB9XgC0THzsIQAQvQA8alwmcrjxAZeF16O3LD1OoCdDPqJ9V9b/ToDLIwruM/7dTOBZ8KkeC6VyAqzjORx5As1K/lxx/HLHx62d7kWd1Pfu79AB85I+S5EJNiNZRTs2OsLnlW12dm43qz9ED/GHgANyMZQaS2vyhNxjrEtzdmc+Yi7hYxfrq9U7QyRzVNqlTgc8cAd53i6j+tzvHHkAbbShPssNxk2sBirSvNvxbB2/nMv4ftPUbD2C8HoLpqTC7ruOm6/d6UW52oenB+iW3bLQc2vqTcpOVr+Sa+HOf99ARWrQNvmS0T9ADMPAQDi8ZXbYEYWGRB1g5+FragPSRZj+KN/CYuOHfyqw/d/i2NvF/2TL4gtGNB+Aqf3AtLu2N5zzAOWNYp+a2irv/oPzUNJjE/08S2nHlFwKQTDjx1eNH6Cz1NvZAF2HU2f07jx/zDrcdAchRBHofdmmRH9icmx09P99K3H2vz8jhqf7gajC/fPH8/trwdAHRk+3turbejRyCGuKa8i8MIzyAnL2ApRq+Bm7KTjyCvadnuZRnWQV4llHVQiAACEETJ/ueMbXx37vev5779wcEIAURyG4GHZMHAwjAFMMCq2pCx1V8uPsIAER2q42rCR1X8eHuIwCQSFhQqTPVhJ6q+HD3EQAwDAu0N7AM8HHa1f6jmtBzFd+xz77H3UcA4LgQrJT/4pqGZs/7XYDPilq0BAhAbmGBNsqxHA6ylVkfdx8BgB5CsBBvYJnpIxQy61PHjwBAJmEB7v6EYC9ABoghXSm3h5v6dPevMH48AJhWWIC7jwDABMMC3H1CAJhoWIC7jwcACXgDcxWukKdx99dTPk0XAYAUhcB3KW+lMjiYFBCAKYuArzP6kjiDEBAACBsW4O4jADDBsAB3HwGAiYYFuPsIAEwwLMDdRwBggmEB7j4CABMNCxTuPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkxv8FGAB2lkc9q8mw8wAAAABJRU5ErkJggg=="},51310:function(A,e,t){e.Z=t.p+"assets/images/SubScreenshot1-69894fc402bf9e0bbfdcddb1fc6d8127.png"},54010:function(A,e,t){e.Z=t.p+"assets/images/Subdescription-e8d06a6f3a5342fb0e21a8aec24f26aa.png"},42747:function(A,e,t){e.Z=t.p+"assets/images/tile-e8369b5d8c76bb75eb15e2a34846c45b.jpg"}}]);