(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(96)),c={title:"Add",sidebar_label:"Add",slug:"add"},d={unversionedId:"commands/add",id:"commands/add",isDocsHomePage:!1,title:"Add",description:"Adds a new control to a page.",source:"@site/docs/commands/add.md",slug:"/commands/add",permalink:"/docs/commands/add",editUrl:"https://github.com/pglet/website/edit/master/docs/commands/add.md",version:"current",sidebar_label:"Add",sidebar:"someSidebar",previous:{title:"About commands",permalink:"/docs/commands/about"},next:{title:"Set",permalink:"/docs/commands/set"}},i=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<code>control-type</code>",id:"control-type",children:[]},{value:"<code>id</code>",id:"id",children:[]},{value:"<code>to</code>",id:"to",children:[]},{value:"<code>at</code>",id:"at",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Adds a new control to a page."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"add <control-type>\n  [id=<string>]\n  [to=<string>]\n  [at=<int>]\n  property1=value\n  property2=value\n  ...\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"add")," command adds a new control to a page."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'add text to=header value="Welcome back!"\n')),Object(o.b)("p",null,"This command adds a new ",Object(o.b)("inlineCode",{parentName:"p"},"text")," control to a column with id ",Object(o.b)("inlineCode",{parentName:"p"},"header"),"."),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"control-type"},Object(o.b)("inlineCode",{parentName:"h3"},"control-type")),Object(o.b)("p",null,"The type of the control."),Object(o.b)("h3",{id:"id"},Object(o.b)("inlineCode",{parentName:"h3"},"id")),Object(o.b)("p",null,"Control ID. ID will be auto-generated if not specified. If you need to get generated ID replace ",Object(o.b)("inlineCode",{parentName:"p"},"add")," command with ",Object(o.b)("inlineCode",{parentName:"p"},"addr"),' which means "add with result", for example in Bash:'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# Add new row and get its ID\n"addr row" > $PAGE_PIPE\nread $rowID < $PAGE_PIPE\n\n# Add column to the row and get its ID\n"addr col to=$rowID" > $PAGE_PIPE\nread $colID < $PAGE_PIPE\n\n# Add text to a column and dismiss the result\n"add text to=$colID value=\'Hello, world\'" > $PAGE_PIPE\n')),Object(o.b)("h3",{id:"to"},Object(o.b)("inlineCode",{parentName:"h3"},"to")),Object(o.b)("p",null,"Parent control ID. If not specified the control is added to the bottom of the page."),Object(o.b)("h3",{id:"at"},Object(o.b)("inlineCode",{parentName:"h3"},"at")),Object(o.b)("p",null,"Insert control at the specified position in the children collection."))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||o;return n?a.a.createElement(m,d(d({ref:t},l),{},{components:n})):a.a.createElement(m,d({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);