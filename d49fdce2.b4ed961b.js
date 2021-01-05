(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(116)),o=n(121),l=n(122),b={title:"Checkbox",sidebar_label:"Checkbox",slug:"checkbox"},i={unversionedId:"reference/controls/checkbox",id:"reference/controls/checkbox",isDocsHomePage:!1,title:"Checkbox",description:"Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).",source:"@site/docs/reference/controls/checkbox.md",slug:"/reference/controls/checkbox",permalink:"/docs/reference/controls/checkbox",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/checkbox.md",version:"current",sidebar_label:"Checkbox",sidebar:"someSidebar",previous:{title:"Button",permalink:"/docs/reference/controls/button"},next:{title:"Dropdown",permalink:"/docs/reference/controls/dropdown"}},u=[{value:"Properties",id:"properties",children:[]},{value:"Events",id:"events",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off)."),Object(c.b)("p",null,"[IMAGE]"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"value")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Current value of the checkbox.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"label")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Label to display next to the checkbox.")))),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"change")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fires when the value of checkbox is changed.")))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)(o.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"python",mdxType:"TabItem"},Object(c.b)("p",null,"Adding a new checkbox:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'chk_agree = page.add(Checkbox(label="I agree to the terms of services"))\n')),Object(c.b)("p",null,"To verify if the checkbox is checked:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"checked = page.get_value(chk_agree)\nif checked == 'true':\n    print(\"Yes, checked!\")\n"))),Object(c.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# TODO\n"))),Object(c.b)(l.a,{value:"powershell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"# TODO\n"))),Object(c.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// TODO\n")))))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},121:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(118),o=n(117),l=n(53),b=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=Object(c.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(l),h=j[0],v=j[1],g=a.Children.toArray(e.children);if(null!=p){var y=O[p];null!=y&&y!==h&&s.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=p&&f(p,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},122:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);