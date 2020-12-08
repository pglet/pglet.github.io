(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},104:function(e,t,n){"use strict";var a=n(0),r=n(103);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(104),o=n(98),c=n(49),i=n.n(c),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=Object(l.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,g=Object(a.useState)(c),O=g[0],v=g[1],h=Object(a.useState)(!1),j=h[0],y=h[1];if(null!=p){var w=f[p];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&v(w)}var T=function(e){v(e),null!=p&&m(p,e)},N=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},P=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",P)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),x(e)},onFocus:function(){return T(t)},onClick:function(){T(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(96)),o=n(111),c=n(112),i={id:"getting-started",title:"Getting started",slug:"/"},u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"What is pglet",source:"@site/docs/getting-started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/pglet/website/edit/master/docs/getting-started.md",version:"current",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/installation"}},s=[{value:"What is pglet",id:"what-is-pglet",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Hello, world!",id:"hello-world",children:[]},{value:"Make it web",id:"make-it-web",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"what-is-pglet"},"What is pglet"),Object(l.b)("p",null,"Pglet is ..."),Object(l.b)("p",null,"tool for local and web apps"),Object(l.b)("p",null,"Prototypes and throw-away apps, tools, reports, dashboards, etc."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Rich, fast, responsive UI available from anywhere"),Object(l.b)("li",{parentName:"ul"},"Use any language you know"),Object(l.b)("li",{parentName:"ul"},"Knowledge of web technologies is not required"),Object(l.b)("li",{parentName:"ul"},"Fast local development"),Object(l.b)("li",{parentName:"ul"},"Secure by design")),Object(l.b)("p",null,"How is it different from ...?"),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)(o.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip install pglet\n"))),Object(l.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'. ~/pglet.sh\nPGLET_PUBLIC=false pglet_page\n\n#echo "$PGLET_CONNECTION_ID"\n\nfunction hello() {\n    echo "Hello!"\n}\n\npglet_send "add text value=\'Hello, world!\'"\npglet_send "add button id=ok text=OK"\npglet_dispatch_events "ok click hello"\n'))),Object(l.b)(c.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"Install-Module pglet -Force\n"))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const pglet = require("pglet");\n')))),Object(l.b)("h2",{id:"hello-world"},"Hello, world!"),Object(l.b)(o.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import pglet\n\npglet.page("myapp")\n'))),Object(l.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'. ~/pglet.sh\nPGLET_PUBLIC=false pglet_page\n\n#echo "$PGLET_CONNECTION_ID"\n\nfunction hello() {\n    echo "Hello!"\n}\n\npglet_send "add text value=\'Hello, world!\'"\npglet_send "add button id=ok text=OK"\npglet_dispatch_events "ok click hello"\n'))),Object(l.b)(c.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"command2-test arg1 arg2 ...\n"))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const pglet = require("pglet");\n')))),Object(l.b)("p",null,"Screenshot:"),Object(l.b)("p",null,"[TBD]"),Object(l.b)("h2",{id:"make-it-web"},"Make it web"),Object(l.b)("p",null,"[TBD]"))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||l;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);