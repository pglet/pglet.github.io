(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},O=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(n),u=r,j=O["".concat(l,".").concat(u)]||O[u]||d[u]||b;return n?a.a.createElement(j,c(c({ref:t},i),{},{components:n})):a.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),b=(n(0),n(108)),l={title:"Textbox",sidebar_label:"Textbox",slug:"textbox"},c={unversionedId:"reference/controls/textbox",id:"reference/controls/textbox",isDocsHomePage:!1,title:"Textbox",description:"Represents a textbox element with optional label, hint and validation messages.",source:"@site/docs/reference/controls/textbox.md",slug:"/reference/controls/textbox",permalink:"/docs/reference/controls/textbox",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/textbox.md",version:"current",sidebar_label:"Textbox",sidebar:"someSidebar",previous:{title:"Text",permalink:"/docs/reference/controls/text"},next:{title:"Button",permalink:"/docs/reference/controls/button"}},o=[{value:"Properties",id:"properties",children:[]}],i={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Represents a textbox element with optional label, hint and validation messages."),Object(b.b)("p",null,"[IMAGE]"),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"label")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"placeholder")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"errorMessage")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"description")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"multiline")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"password")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0}}]);