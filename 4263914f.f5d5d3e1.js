(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(116)),l={title:"Overview",sidebar_label:"Overview",slug:"/reference/controls"},c={unversionedId:"reference/controls/overview",id:"reference/controls/overview",isDocsHomePage:!1,title:"Overview",description:"Pglet UI is built of controls. Most controls are composed from multiple HTML elements, have finished functionality and sane defaults to make UI development as quick and pleasant as possible. For example, Textbox control is not just `` in terms of HTML, but it has an attached label, description, validation message and a help tip.",source:"@site/docs/reference/controls/overview.md",slug:"/reference/controls",permalink:"/docs/reference/controls",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Pglet.io service beta limits",permalink:"/docs/pglet-io-beta"},next:{title:"Page",permalink:"/docs/reference/controls/page"}},i=[{value:"Control ID",id:"control-id",children:[{value:"Unique ID",id:"unique-id",children:[]}]},{value:"Common properties",id:"common-properties",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pglet UI is built of controls. Most controls are composed from multiple HTML elements, have finished functionality and sane defaults to make UI development as quick and pleasant as possible. For example, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"controls/textbox"}),"Textbox")," control is not just ",Object(o.b)("inlineCode",{parentName:"p"},'<input type="text">')," in terms of HTML, but it has an attached label, description, validation message and a help tip."),Object(o.b)("p",null,"Controls are organized into hierarchy, or a tree, where each control has a parent (except ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"controls/page"}),"Page"),") and container controls like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"controls/stack"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"controls/dropdown"}),"Dropdown")," can contain child controls, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Page\n \u251c\u2500 Textbox\n \u251c\u2500 Dropdown\n \u2502   \u251c\u2500 Option\n \u2502   \u2514\u2500 Option\n \u2514\u2500 Stack\n     \u251c\u2500 Button\n     \u2514\u2500 Button\n")),Object(o.b)("h2",{id:"control-id"},"Control ID"),Object(o.b)("p",null,"Every control on a page has an ",Object(o.b)("strong",{parentName:"p"},"ID"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"id")," is not specified when adding a control it will be auto-generated.\nAuto-generated IDs have format of ",Object(o.b)("inlineCode",{parentName:"p"},"_{number}"),", for example ",Object(o.b)("inlineCode",{parentName:"p"},"_1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"_2"),". ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/add"}),"Add")," command always returns the ID of a control which can be saved for future reference."),Object(o.b)("p",null,"User-defined IDs can contain alphanumerics (",Object(o.b)("inlineCode",{parentName:"p"},"A-Za-z0-9"),"), dash (",Object(o.b)("inlineCode",{parentName:"p"},"-"),") and underscore (",Object(o.b)("inlineCode",{parentName:"p"},"_"),"). However, user-defined ID should not start from ",Object(o.b)("inlineCode",{parentName:"p"},"_")," and cannot contain ",Object(o.b)("inlineCode",{parentName:"p"},":")," which is used to separate parts of an unique ID."),Object(o.b)("h3",{id:"unique-id"},"Unique ID"),Object(o.b)("p",null,"To guarantee the uniqueness of user-defined IDs across the page Pglet automatically prefixes them with parent ID when adding control to a page. Only user-defined IDs will be used as parts of unique ID."),Object(o.b)("p",null,"For example, you may want to add a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"controls/button"}),"Button")," with ",Object(o.b)("inlineCode",{parentName:"p"},"id=ok")," into two stacks: one with an auto-generated ID ",Object(o.b)("inlineCode",{parentName:"p"},"_1")," and another one with user-defined ",Object(o.b)("inlineCode",{parentName:"p"},"id=footer"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nStack id=_1\n \u2514\u2500 Button id=ok\nStack id=footer\n \u2514\u2500 Button id=footer:ok\n")),Object(o.b)("p",null,"Once controls added to a page the ID of a second button will be prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"footer:")," and thus it will be referenced later as ",Object(o.b)("inlineCode",{parentName:"p"},"footer:ok"),", for example as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol#events"}),"event target"),"."),Object(o.b)("h2",{id:"common-properties"},"Common properties"),Object(o.b)("p",null,"All Pglet controls have the following properties:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Auto-generated or user-defined control ID.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"visible")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"true")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines whether control is visible.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"disabled")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"false")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines whether control and all its children (if any) are disabled.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"width")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Width of the control, for example ",Object(o.b)("inlineCode",{parentName:"td"},"100px"),", ",Object(o.b)("inlineCode",{parentName:"td"},"50%"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"height")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Height of the control.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"padding")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Padding of the control.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"margin")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Margin of the control.")))))}p.isMDXComponent=!0}}]);