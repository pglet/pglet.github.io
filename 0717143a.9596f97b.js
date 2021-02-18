(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,h=s["".concat(o,".").concat(u)]||s[u]||m[u]||l;return a?n.a.createElement(h,i(i({ref:t},b),{},{components:a})):n.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),l=(a(0),a(142)),o={slug:"pglet-0-2-0",title:"Pglet 0.2.0",author:"Feodor Fitsner",author_title:"Pglet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},i={permalink:"/blog/pglet-0-2-0",editUrl:"https://github.com/pglet/website/edit/master/blog/2021-02-05-pglet-0-2-0.md",source:"@site/blog/2021-02-05-pglet-0-2-0.md",description:"We've just released Pglet 0.2.0!",date:"2021-02-05T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],title:"Pglet 0.2.0",readingTime:1.905,truncated:!1,prevItem:{title:"Pglet 0.2.2",permalink:"/blog/pglet-0-2-2"},nextItem:{title:"Launching Pglet",permalink:"/blog/launching-pglet"}},p=[{value:"New features",id:"new-features",children:[{value:"ARM support",id:"arm-support",children:[]},{value:"Docker image",id:"docker-image",children:[]},{value:"Theming",id:"theming",children:[]}]},{value:"New controls",id:"new-controls",children:[]},{value:"Improved controls",id:"improved-controls",children:[]},{value:"Other fixes and improvements",id:"other-fixes-and-improvements",children:[]}],b={toc:p};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"We've just released Pglet 0.2.0!"),Object(l.b)("p",null,"A ton of new controls were added such as navigation menu, toolbar, grid, tabs, dialog and panel. Now we feel confident Pglet allows to fully unleash your creativity and build a user interface of any complexity!"),Object(l.b)("h2",{id:"new-features"},"New features"),Object(l.b)("h3",{id:"arm-support"},"ARM support"),Object(l.b)("p",null,"This release adds binaries for Linux ARM and Apple Silicon M1 - Go 1.16 made that possible. Now you can add remote web UI to your Raspberry PI apps or control what's going on in any IoT device."),Object(l.b)("h3",{id:"docker-image"},"Docker image"),Object(l.b)("p",null,"Docker image ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/pglet/server"}),Object(l.b)("inlineCode",{parentName:"a"},"pglet/server"))," with self-hosted Pglet Server is now available - run it on a VPS server or drop into your Kubernetes cluster."),Object(l.b)("h3",{id:"theming"},"Theming"),Object(l.b)("p",null,"Theming in Pglet takes similar approach as in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://aka.ms/themedesigner"}),"Fluent UI Theme Designer")," - you choose primary, text, background colors and the theme is auto-magically generated from those colors. To change page theme in Pglet set ",Object(l.b)("inlineCode",{parentName:"p"},"page")," control properties: ",Object(l.b)("inlineCode",{parentName:"p"},"themePrimaryColor"),", ",Object(l.b)("inlineCode",{parentName:"p"},"themeTextColor"),", ",Object(l.b)("inlineCode",{parentName:"p"},"themeBackgroundColor"),". ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://repl.it/@pglet/bash-theme-example"}),"Check out Theme demo"),"!"),Object(l.b)("h2",{id:"new-controls"},"New controls"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nav - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-nav-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Toolbar - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-toolbar-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Tabs - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-tabs-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Grid - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-grid-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Dialog - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-dialogs-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Panel - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-panel-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Message - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-messages-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Toggle - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-toggle-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Slider - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-slider-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"ChoiceGroup - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-choicegroup-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Searchbox - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-searchbox-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"SpinButton - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-spinbuttons-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Link - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-link-example"}),"demo")),Object(l.b)("li",{parentName:"ul"},"Icon - ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://repl.it/@pglet/bash-icon-example"}),"demo"))),Object(l.b)("h2",{id:"improved-controls"},"Improved controls"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Button")," - additional types of Button control were implemented: compound buttons, icon buttons, toolbar, action and link buttons, buttons with context menus and split buttons. ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://repl.it/@pglet/bash-buttons-example"}),"Check out Buttons demo"),"!"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Text")," - You can now control the styling of Text control such as color and background as well as border properties and text alignment within it (vertical alignment in center works too!). ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://repl.it/@pglet/bash-text-example"}),"Check out Text demo"),"!"),Object(l.b)("h2",{id:"other-fixes-and-improvements"},"Other fixes and improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Controls are based on Fluent UI 8."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"replace")," command."),Object(l.b)("li",{parentName:"ul"},"Event ticker to avoid hanging event loops."),Object(l.b)("li",{parentName:"ul"},"Pglet Server now does not allow remote host clients by default. Remote hosts clients can be enabled with ",Object(l.b)("inlineCode",{parentName:"li"},"ALLOW_REMOTE_HOST_CLIENTS=true")," environment variable. ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/r/pglet/server"}),"Pglet Server Docker image")," set this variable by default.")),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/"}),"Give Pglet a try")," and let us know what you think! There are multiple feedback channels available:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues"}),"Submit an issue in Pglet repository")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.gg/rWjf7xx"}),"Joing a chat in our Discord channel")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/pgletio"}),"Follow us on Twitter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:hello@pglet.io"}),"Drop us email"))))}c.isMDXComponent=!0}}]);