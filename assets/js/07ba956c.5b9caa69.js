"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4763],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return o},MDXProvider:function(){return x},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){return function(t){var a=u(t.components);return n.createElement(e,r({},t,{components:a}))}},u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},x=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(a),x=l,s=p["".concat(d,".").concat(x)]||p[x]||c[x]||r;return a?n.createElement(s,m(m({ref:t},o),{},{components:a})):n.createElement(s,m({ref:t},o))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=s;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:l,d[1]=m;for(var o=2;o<r;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},76325:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),d=["components"],m={id:"arx",title:"overwolf.logitech.arx API"},i=void 0,o={unversionedId:"api/logitech/arx",id:"api/logitech/arx",title:"overwolf.logitech.arx API",description:"An API for Logitech Arx Control features.",source:"@site/pages/docs/api/logitech/arx.mdx",sourceDirName:"api/logitech",slug:"/api/logitech/arx",permalink:"/api/logitech/arx",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/logitech/arx.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1659364045,formattedLastUpdatedAt:"8/1/2022",frontMatter:{id:"arx",title:"overwolf.logitech.arx API",sidebar_position:0,sidebar_label:"Arx"},sidebar:"api",previous:{title:"Logitech",permalink:"/api/logitech/"},next:{title:"Led",permalink:"/api/logitech/led"}},p={},u=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"init(identifier, friendlyName, callback)",id:"initidentifier-friendlyname-callback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"publishApp(indexFilename, callback)",id:"publishappindexfilename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"addFileAs(fileUrl, fileName, mimeType, callback)",id:"addfileasfileurl-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"addContentAs(base64Content, fileName, callback)",id:"addcontentasbase64content-filename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4},{value:"addContentAs(content, fileName, mimeType, callback)",id:"addcontentascontent-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-4",level:4},{value:"addUtf8StringAs(stringContent, fileName, mimeType, callback)",id:"addutf8stringasstringcontent-filename-mimetype-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-5",level:4},{value:"addImageFromBitmap(bitmap, width, height, fileName, callback)",id:"addimagefrombitmapbitmap-width-height-filename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-6",level:4},{value:"setIndex(fileName, callback)",id:"setindexfilename-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-7",level:4},{value:"setTagPropertyById(tagId, prop, newValue, callback)",id:"settagpropertybyidtagid-prop-newvalue-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-8",level:4},{value:"setTagsPropertyByClass(tagsClass, prop, newValue, callback)",id:"settagspropertybyclasstagsclass-prop-newvalue-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-9",level:4},{value:"setTagContentById(tagId, newContent, callback)",id:"settagcontentbyidtagid-newcontent-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-10",level:4},{value:"setTagsContentByClass(tagsClass, newContent, callback)",id:"settagscontentbyclasstagsclass-newcontent-callback",level:2},{value:"Version added: 0.93",id:"version-added-093-11",level:4},{value:"shutdown()",id:"shutdown",level:2},{value:"Version added: 0.93",id:"version-added-093-12",level:4},{value:"onEvent",id:"onevent",level:2},{value:"Version added: 0.93",id:"version-added-093-13",level:4},{value:"onError",id:"onerror",level:2},{value:"Version added: 0.93",id:"version-added-093-14",level:4},{value:"Logitech.Arx.Event.Data Object",id:"logitecharxeventdata-object",level:2},{value:"Version added: 0.93",id:"version-added-093-15",level:4}],x={toc:u};function c(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.mdx)("wrapper",(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"An API for Logitech Arx Control features."),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#initidentifier-friendlyname-callback"},"overwolf.logitech.arx.init()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#publishappindexfilename-callback"},"overwolf.logitech.arx.publishApp()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#addfileasfileurl-filename-mimetype-callback"},"overwolf.logitech.arx.addFileAs()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#addcontentasbase64content-filename-callback"},"overwolf.logitech.arx.addContentAs()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#addcontentascontent-filename-mimetype-callback"},"overwolf.logitech.arx.addContentAs()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#addutf8stringasstringcontent-filename-mimetype-callback"},"overwolf.logitech.arx.addUtf8StringAs()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#addimagefrombitmapbitmap-width-height-filename-callback"},"overwolf.logitech.arx.addImageFromBitmap()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#setindexfilename-callback"},"overwolf.logitech.arx.setIndex()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#settagpropertybyidtagid-prop-newvalue-callback"},"overwolf.logitech.arx.setTagPropertyById()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#settagspropertybyclasstagsclass-prop-newvalue-callback"},"overwolf.logitech.arx.setTagsPropertyByClass()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#settagcontentbyidtagid-newcontent-callback"},"overwolf.logitech.arx.setTagContentById()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#settagscontentbyclasstagsclass-newcontent-callback"},"overwolf.logitech.arx.setTagsContentByClass()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#shutdown"},"overwolf.logitech.arx.shutdown()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onevent"},"overwolf.logitech.arx.onEvent")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onerror"},"overwolf.logitech.arx.onError"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#logitecharxeventdata-object"},"Logitech.Arx.Event.Data")," Object.")),(0,r.mdx)("h2",{id:"initidentifier-friendlyname-callback"},"init(identifier, friendlyName, callback)"),(0,r.mdx)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Initializes the Arx API.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"identifier"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID for the app that will be discovered by LGS")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"friendlyName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Friendly display name")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"publishappindexfilename-callback"},"publishApp(indexFilename, callback)"),(0,r.mdx)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Publishes an entire app according to the folder set in the manifest file and/or optional sets in an index file.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"indexFilename"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional file to use as index")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"addfileasfileurl-filename-mimetype-callback"},"addFileAs(fileUrl, fileName, mimeType, callback)"),(0,r.mdx)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Adds a file using an overwolf-extension:// or overwolf-media:// url.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileUrl"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Overwolf url to add")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"mimeType"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional mime type")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"addcontentasbase64content-filename-callback"},"addContentAs(base64Content, fileName, callback)"),(0,r.mdx)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Adds content from a base64 string.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"base64Content"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Base64 string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"addcontentascontent-filename-mimetype-callback"},"addContentAs(content, fileName, mimeType, callback)"),(0,r.mdx)("h4",{id:"version-added-093-4"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Adds content from a byte array.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"content"),(0,r.mdx)("td",{parentName:"tr",align:null},"Byte[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"Base64 string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"mimeType"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional mime type")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"addutf8stringasstringcontent-filename-mimetype-callback"},"addUtf8StringAs(stringContent, fileName, mimeType, callback)"),(0,r.mdx)("h4",{id:"version-added-093-5"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Adds content from a UTF8 string.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"stringContent"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"UTF8 string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"mimeType"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Optional mime type")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"addimagefrombitmapbitmap-width-height-filename-callback"},"addImageFromBitmap(bitmap, width, height, fileName, callback)"),(0,r.mdx)("h4",{id:"version-added-093-6"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Add an image from a bitmap.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"bitmap"),(0,r.mdx)("td",{parentName:"tr",align:null},"Byte[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"A byte array representing a bitmap")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"width"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"Width of the bitmap")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"height"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"Height of the bitmap")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"setindexfilename-callback"},"setIndex(fileName, callback)"),(0,r.mdx)("h4",{id:"version-added-093-7"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Sets the index file of the website.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File to use as index")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"settagpropertybyidtagid-prop-newvalue-callback"},"setTagPropertyById(tagId, prop, newValue, callback)"),(0,r.mdx)("h4",{id:"version-added-093-8"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Sets a property of a tag by ID.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"tagId"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID of the tag to set the property to")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"prop"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of the property to change")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"newValue"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"New value")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"fileName"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"File name to add as")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"settagspropertybyclasstagsclass-prop-newvalue-callback"},"setTagsPropertyByClass(tagsClass, prop, newValue, callback)"),(0,r.mdx)("h4",{id:"version-added-093-9"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Sets a property of a tag by class.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"tagsClass"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Class of the tag(s) to set the property to")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"prop"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of the property to change")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"newValue"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"New value")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"settagcontentbyidtagid-newcontent-callback"},"setTagContentById(tagId, newContent, callback)"),(0,r.mdx)("h4",{id:"version-added-093-10"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Sets the content of a tag by ID.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"tagId"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID of the tag to set the content to")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"newContent"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"New content")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"settagscontentbyclasstagsclass-newcontent-callback"},"setTagsContentByClass(tagsClass, newContent, callback)"),(0,r.mdx)("h4",{id:"version-added-093-11"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Sets the content of a tag by ID.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"tagsClass"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Class of the tag(s) to set the content to")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"newContent"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"New content")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"function"),(0,r.mdx)("td",{parentName:"tr",align:null},"Callback with the result of the request")))),(0,r.mdx)("h2",{id:"shutdown"},"shutdown()"),(0,r.mdx)("h4",{id:"version-added-093-12"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Shuts down the API.")),(0,r.mdx)("h2",{id:"onevent"},"onEvent"),(0,r.mdx)("h4",{id:"version-added-093-13"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"An Arx event sent with a ","[Logitech.Arx.Event.Data]"," object.")),(0,r.mdx)("h2",{id:"onerror"},"onError"),(0,r.mdx)("h4",{id:"version-added-093-14"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Triggered when an error occurs, sent with an error code.")),(0,r.mdx)("h2",{id:"logitecharxeventdata-object"},"Logitech.Arx.Event.Data Object"),(0,r.mdx)("h4",{id:"version-added-093-15"},"Version added: 0.93"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Describes an Arx event.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"Type code of the event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eventTypeString"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Type name of the event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eventValue"),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"Value code of the event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eventValueString"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Value string on the event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eventArg"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Argument of the event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"context"),(0,r.mdx)("td",{parentName:"tr",align:null},"IntPtr"),(0,r.mdx)("td",{parentName:"tr",align:null},"Context of the event")))))}c.isMDXComponent=!0}}]);