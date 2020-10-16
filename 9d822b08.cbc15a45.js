(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(98)),i={title:"Text",sidebar_label:"Text",slug:"text"},c={unversionedId:"controls/text",id:"controls/text",isDocsHomePage:!1,title:"Text",description:"Represents a text paragraph.",source:"@site/docs/controls/text.md",slug:"/controls/text",permalink:"/docs/controls/text",editUrl:"https://github.com/pglet/website/edit/master/docs/controls/text.md",version:"current",sidebar_label:"Text",sidebar:"someSidebar",previous:{title:"Col",permalink:"/docs/controls/col"},next:{title:"Textbox",permalink:"/docs/controls/textbox"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>visible</code>",id:"visible",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Represents a text paragraph."),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"id"},Object(a.b)("inlineCode",{parentName:"h3"},"id")),Object(a.b)("p",null,"Control ID. Auto-generated if not specified explicitly."),Object(a.b)("h3",{id:"value"},Object(a.b)("inlineCode",{parentName:"h3"},"value")),Object(a.b)("p",null,"Text contents. Markdown is supported."),Object(a.b)("h3",{id:"visible"},Object(a.b)("inlineCode",{parentName:"h3"},"visible")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"true")," - the control is visible; ",Object(a.b)("inlineCode",{parentName:"p"},"false")," - control is hidden, but still takes up space in the layout."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Bash example to add text control with auto-generated ID to ",Object(a.b)("inlineCode",{parentName:"p"},"body")," container:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\'add text value="Hello, world" to="body"\' > $PAGE_PIPE\n')))}s.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);