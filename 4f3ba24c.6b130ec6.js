(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=r,u=d["".concat(l,".").concat(O)]||d[O]||s[O]||c;return n?a.a.createElement(u,i(i({ref:t},b),{},{components:n})):a.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(115)),l={title:"Stack",sidebar_label:"Stack",slug:"stack"},i={unversionedId:"reference/controls/stack",id:"reference/controls/stack",isDocsHomePage:!1,title:"Stack",description:"Stack is a container-type control that allows to define the layout of its children controls.",source:"@site/docs/reference/controls/stack.md",slug:"/reference/controls/stack",permalink:"/docs/reference/controls/stack",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/stack.md",version:"current",sidebar_label:"Stack",sidebar:"someSidebar",previous:{title:"Page",permalink:"/docs/reference/controls/page"},next:{title:"Text",permalink:"/docs/reference/controls/text"}},o=[{value:"Properties",id:"properties",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Stack is a container-type control that allows to define the layout of its children controls."),Object(c.b)("p",null,"Although the Stack control has a number of different properties, there are three in particular that define the overall layout that the component has:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Direction"),": Refers to whether the stacking of children components is horizontal or vertical. By default the Stack control is vertical, but can be turned horizontal by adding ",Object(c.b)("inlineCode",{parentName:"li"},"horizontal")," property when using the control."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Alignment"),": Refers to how the children controls are aligned inside the container. This is controlled via ",Object(c.b)("inlineCode",{parentName:"li"},"verticalAlign")," and ",Object(c.b)("inlineCode",{parentName:"li"},"horizontalAlign")," properties."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Spacing"),": Refers to the space that exists between children controls inside the Stack. This is controlled via ",Object(c.b)("inlineCode",{parentName:"li"},"gap")," property.")),Object(c.b)("p",null,"Stacks can be nested inside one another in order to be able to configure the layout of the application as desired."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"horizontal")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Defines whether to render Stack children horizontally.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"verticalFill")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Defines whether the Stack should take up 100% of the height of its parent.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"horizontalAlign")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Defines how to align stack children horizontally: ",Object(c.b)("inlineCode",{parentName:"td"},"start"),", ",Object(c.b)("inlineCode",{parentName:"td"},"end"),", ",Object(c.b)("inlineCode",{parentName:"td"},"center"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(c.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(c.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"verticalAlign")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Defines how to align stack children vertically: ",Object(c.b)("inlineCode",{parentName:"td"},"start"),", ",Object(c.b)("inlineCode",{parentName:"td"},"end"),", ",Object(c.b)("inlineCode",{parentName:"td"},"center"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(c.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(c.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(c.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"gap")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A gap between stack child controls.")))))}p.isMDXComponent=!0}}]);