(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),j=a,s=d["".concat(l,".").concat(j)]||d[j]||O[j]||c;return n?r.a.createElement(s,b(b({ref:t},o),{},{components:n})):r.a.createElement(s,b({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=j;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(115)),l={title:"Page",sidebar_label:"Page",slug:"page"},b={unversionedId:"reference/controls/page",id:"reference/controls/page",isDocsHomePage:!1,title:"Page",description:"Page is the top most container for all other controls.",source:"@site/docs/reference/controls/page.md",slug:"/reference/controls/page",permalink:"/docs/reference/controls/page",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/page.md",version:"current",sidebar_label:"Page",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/reference/controls"},next:{title:"Stack",permalink:"/docs/reference/controls/stack"}},i=[{value:"Properties",id:"properties",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Page is the top most container for all other controls.\nIt is is automatically added when a new page is created or app session started."),Object(c.b)("p",null,"Page control has a reserved ",Object(c.b)("inlineCode",{parentName:"p"},"page")," control ID. You cannot add Page control, however you can change its properties. Technically, the Page is a vertical ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"stack"}),"Stack")," control, so it has similar behavior and shares some properties."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"title")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"{page_name}\xa0-\xa0pglet")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A title of browser window.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"verticalFill")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines whether page contents takes 100% of the height of browser window.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"horizontalAlign")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"start")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines how to align page children horizontally: ",Object(c.b)("inlineCode",{parentName:"td"},"start"),", ",Object(c.b)("inlineCode",{parentName:"td"},"end"),", ",Object(c.b)("inlineCode",{parentName:"td"},"center"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(c.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(c.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"verticalAlign")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines how to align page children vertically: ",Object(c.b)("inlineCode",{parentName:"td"},"start"),", ",Object(c.b)("inlineCode",{parentName:"td"},"end"),", ",Object(c.b)("inlineCode",{parentName:"td"},"center"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(c.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(c.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"width")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"100%")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The width of a page container.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"padding")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"10px")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The padding of a page container.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"gap")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"10")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A gap between page child controls.")))))}p.isMDXComponent=!0}}]);