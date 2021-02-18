(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{142:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),m=a,h=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return r?n.a.createElement(h,c(c({ref:t},p),{},{components:r})):n.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),l=(r(0),r(142)),o={slug:"pglet-0-2-2",title:"Pglet 0.2.2",author:"Feodor Fitsner",author_title:"Pglet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["release"]},c={permalink:"/blog/pglet-0-2-2",editUrl:"https://github.com/pglet/website/edit/master/blog/2021-02-17-pglet-0-2-2.md",source:"@site/blog/2021-02-17-pglet-0-2-2.md",description:"Pglet 0.2.2 adds the first chart control - VerticalBarChart:",date:"2021-02-17T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],title:"Pglet 0.2.2",readingTime:1.185,truncated:!1,nextItem:{title:"Pglet 0.2.0",permalink:"/blog/pglet-0-2-0"}},i=[{value:"Theming improvements",id:"theming-improvements",children:[]},{value:"Other fixes and improvements",id:"other-fixes-and-improvements",children:[]}],p={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Pglet 0.2.2 adds the first chart control - VerticalBarChart:"),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:"/img/blog/pglet-0-2-2/vertical-bar-chart-example.png",width:"70%"})),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://repl.it/@pglet/bash-vertical-bar-chart-example"}),"View live demo of VerticalBarChart control")),Object(l.b)("h2",{id:"theming-improvements"},"Theming improvements"),Object(l.b)("p",null,"All ",Object(l.b)("inlineCode",{parentName:"p"},"color"),'-like attributes in all controls can now accept Fluent UI theme slot colors and "shared" colors.'),Object(l.b)("p",null,"The list of theme colors can be found on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/theme-slots"}),"Fluent UI Theme Slots")," page."),Object(l.b)("p",null,"The list of shared colors can be found on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/shared"}),"Fluent UI Shared Colors")," page."),Object(l.b)("p",null,"For example, you can add an icon with ",Object(l.b)("inlineCode",{parentName:"p"},"themePrimary")," color:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"add icon name=shop color=themePrimary\n")),Object(l.b)("p",null,"Color is being searched in the following order:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Theme slot color"),Object(l.b)("li",{parentName:"ol"},"Shared color"),Object(l.b)("li",{parentName:"ol"},"Fallback to a ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.w3schools.com/colors/colors_names.asp"}),"named web color")," or color hex value.")),Object(l.b)("h2",{id:"other-fixes-and-improvements"},"Other fixes and improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/43"}),"#43")," Nav control: unify expanded/collapsed for groups and items"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/45"}),"#45"),' ChoiceGroup control: Add "iconColor" property to Option'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/46"}),"#46"),' Stack control: add "wrap" property'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/47"}),"#47")," Text control: Markdown mode"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/48"}),"#48")," Chart control: VerticalBarChart"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/49"}),"#49"),' Add "trim" attribute to "add" command'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/52"}),"#52")," All color attributes accept theme slot colors and shared colors"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/53"}),"#53")," New control: Image"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/54"}),"#54")," Link control: can contain child controls and other improvements"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues/55"}),"#55"),' Text control: new "border*" properties')),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/"}),"Give Pglet a try")," and let us know what you think! There are multiple feedback channels available:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues"}),"Submit an issue in Pglet repository")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://discord.gg/rWjf7xx"}),"Joing a chat in our Discord channel")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/pgletio"}),"Follow us on Twitter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hello@pglet.io"}),"Drop us email"))))}b.isMDXComponent=!0}}]);