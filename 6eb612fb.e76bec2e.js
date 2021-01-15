(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(h,i(i({ref:t},s),{},{components:n})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(120)),l={slug:"launching-pglet",title:"Launching Pglet",author:"Feodor Fitsner",author_title:"Pglet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["pglet","launch","roadmap"]},i={permalink:"/blog/launching-pglet",editUrl:"https://github.com/pglet/website/edit/master/blog/2021-01-15-launching-pglet.md",source:"@site/blog/2021-01-15-launching-pglet.md",description:"Today we are officially launching Pglet!",date:"2021-01-15T00:00:00.000Z",tags:[{label:"pglet",permalink:"/blog/tags/pglet"},{label:"launch",permalink:"/blog/tags/launch"},{label:"roadmap",permalink:"/blog/tags/roadmap"}],title:"Launching Pglet",readingTime:3.12,truncated:!1,nextItem:{title:"Introducing Pglet",permalink:"/blog/introducing-pglet"}},c=[{value:"What we&#39;ve got",id:"what-weve-got",children:[]},{value:"The experience",id:"the-experience",children:[]},{value:"What&#39;s next",id:"whats-next",children:[{value:"Controls",id:"controls",children:[]},{value:"Pglet Service",id:"pglet-service",children:[]},{value:"More docs and examples",id:"more-docs-and-examples",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Today we are officially launching Pglet!"),Object(r.b)("p",null,"This is not a groundbreaking event shaking the World and it won't make any ripples on the Internet, but it's still very important milestone for us as it's a good chance to make functionality cut off and present Pglet to the public."),Object(r.b)("h2",{id:"what-weve-got"},"What we've got"),Object(r.b)("p",null,"You probably won't be able to do a real app with Pglet yet, but we believe it's quite the MVP in a Technical Preview state. The core Pglet functionality is there: pages can be created, controls can be added, modified and removed with live updates streamed to users via WebSockets, page control events triggered by users are broadcasted back to your program - the entire concept's working. We've got basic layout (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/stack"}),"Stack"),") and data entry controls (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/textbox"}),"Textbox"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/button"}),"Button"),", etc.) to do simple apps and dashboards, but ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web"}),"Fluent UI library"),", Pglet is based on, is huge and it's a lot more controls to do!"),Object(r.b)("p",null,"We've got Pglet client bindinds for 4 languages: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/python"}),"Python"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/bash"}),"Bash"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/powershell"}),"PowerShell")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/node"}),"Node.js"),". We chose these languages for MVP to have a good sense of what might be involved in supporting another language. These are scriping non-typed environments mostly, but probably the next binding we do would be Go or C#. Python bindings is the most complete implementation with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/python#control-classes"}),"classes")," for every control and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/python#event-handlers"}),"control event handlers"),"."),Object(r.b)("p",null,"We've got ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"Pglet Service")," which is a hosted Pglet server which you can use right away to bring your web experiences to the web. For technical preview it's just a basic deployment on GAE (will do a separate blog post about that), but quite enough to play with."),Object(r.b)("h2",{id:"the-experience"},"The experience"),Object(r.b)("p",null,"It's been really exciting to work on Pglet during the last 6 months and we learned a lot. Being a C# and mostly Windows developer for more than 15 years it was an absolute pleasure to develop in Go: clean and simple language syntax, goroutines and channels, everything async by design, explicit exceptions management - I'll probably do another post about that experience! Making Pglet UI in React with TypeScript was fun as well: both are fantastic technologies! There is also a challenge to support multiple platforms. Pglet works on Windows, Linux and macOS and you need to constantly think about the experience on all 3 platforms and do a triple amount of tests, CI workflows and other chore things."),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)("p",null,"For year 2021 our goal is being able to build and run full-blown backend apps in production. Therefore we are going to work in multiple directions:"),Object(r.b)("h3",{id:"controls"},"Controls"),Object(r.b)("p",null,"We are going to add more controls and improve existing ones. Pglet is still missing navigation controls like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/nav"}),"menus"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/commandbar"}),"toolbars")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/pivot"}),"tabs"),". ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/detailslist"}),"Grid")," is on top priority, for sure, and it's going to be the huge! Charts will be added as well, so you can build beautiful dashboards."),Object(r.b)("h3",{id:"pglet-service"},"Pglet Service"),Object(r.b)("p",null,"This year we are going to bring Pglet Service into production mode with a proper persistence, authentication and account/profile dashboards. All Pglet backend UI is going to be implemented with Pglet."),Object(r.b)("h3",{id:"more-docs-and-examples"},"More docs and examples"),Object(r.b)("p",null,"We'll be working on providing more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pglet/examples"}),"Pglet examples"),", we'll write deployment guides for standalone Pglet apps and self-hosted Pglet Server."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"At this stage we are actively looking for any feedback to understand if the project idea is moving in the right direction. We'd be happy to know what would be your requirements, what's missing in Pglet, what's nice or inconvenient, what could be implemented with higher priority."),Object(r.b)("p",null,"Feel free to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/"}),"give Pglet a try")," and let us know what you think! There are multiple feedback channels available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pglet/pglet/issues"}),"Submit an issue in Pglet repository")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://discord.gg/rWjf7xx"}),"Joing a chat in our Discord channel")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/pgletio"}),"Follow us on Twitter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:hello@pglet.io"}),"Drop us email"))))}p.isMDXComponent=!0}}]);