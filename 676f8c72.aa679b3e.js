(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(107)),a={title:"Row",sidebar_label:"Row",slug:"row"},c={unversionedId:"controls/row",id:"controls/row",isDocsHomePage:!1,title:"Row",description:"Represents a row in the grid layout. Row can only contain columns.",source:"@site/docs/controls/row.md",slug:"/controls/row",permalink:"/docs/controls/row",editUrl:"https://github.com/pglet/website/edit/master/docs/controls/row.md",version:"current",sidebar_label:"Row",sidebar:"someSidebar",previous:{title:"About",permalink:"/docs/controls/about"},next:{title:"Col",permalink:"/docs/controls/col"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>visible</code>",id:"visible",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Represents a ",Object(i.b)("strong",{parentName:"p"},"row")," in the grid layout. Row can only contain ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/controls/col"}),"columns"),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"id"},Object(i.b)("inlineCode",{parentName:"h3"},"id")),Object(i.b)("p",null,"Control ID. Auto-generated if not specified explicitly."),Object(i.b)("h3",{id:"visible"},Object(i.b)("inlineCode",{parentName:"h3"},"visible")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"true")," - the control is visible; ",Object(i.b)("inlineCode",{parentName:"p"},"false")," - control is hidden, but still takes up space in the layout."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,"Bash example to add a new row with ",Object(i.b)("inlineCode",{parentName:"p"},"header")," ID:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"'add row id=\"header\"' > $PAGE_PIPE\n")))}s.isMDXComponent=!0}}]);