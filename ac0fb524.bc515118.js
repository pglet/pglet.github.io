(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,O=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},117:function(e,t,n){"use strict";var a=n(0),r=n(118);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},118:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(117),o=n(116),c=n(51),b=n.n(c),i=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,d=e.defaultValue,u=e.values,s=e.groupId,O=e.className,m=Object(l.a)(),j=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(a.useState)(d),h=g[0],v=g[1];if(null!=s){var y=j[s];null!=y&&y!==h&&u.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=s&&f(s,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},O)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},121:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(115)),o=n(120),c=n(121),b={title:"Dropdown",sidebar_label:"Dropdown",slug:"dropdown"},i={unversionedId:"reference/controls/dropdown",id:"reference/controls/dropdown",isDocsHomePage:!1,title:"Dropdown",description:"A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms.",source:"@site/docs/reference/controls/dropdown.md",slug:"/reference/controls/dropdown",permalink:"/docs/reference/controls/dropdown",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/dropdown.md",version:"current",sidebar_label:"Dropdown",sidebar:"someSidebar",previous:{title:"Checkbox",permalink:"/docs/reference/controls/checkbox"},next:{title:"Progress",permalink:"/docs/reference/controls/progress"}},p=[{value:"Dropdown properties",id:"dropdown-properties",children:[]},{value:"Option control",id:"option-control",children:[]},{value:"Events",id:"events",children:[]},{value:"Examples",id:"examples",children:[]}],d={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A dropdown is a list in which the selected item is always visible while other items are visible on demand by clicking a dropdown button. Dropdowns are typically used for forms."),Object(l.b)("p",null,"[IMAGE]"),Object(l.b)("h2",{id:"dropdown-properties"},"Dropdown properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"value")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Current value of the dropdown.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"label")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Label to display above the control.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"placeholder")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The short hint displayed in the dropdown before the user selects a value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"errorMessage")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Static error message displayed below the dropdown.")))),Object(l.b)("h2",{id:"option-control"},"Option control"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Option")," represents an item within dropdown list."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"key")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Option's key.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"text")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Option's display text.")))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"change")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fires when the value of dropdown is changed.")))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"python",mdxType:"TabItem"},Object(l.b)("p",null,"Adding a new dropdown with a couple of options defined as tuples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'dd1 = page.add(Dropdown(label="Favorite color:", options=[\n    ("r", "Red"),\n    ("g", "Green"),\n    ("b", "Blue")\n]))\n')),Object(l.b)("p",null,"or as ",Object(l.b)("inlineCode",{parentName:"p"},"Option")," controls:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'dd1 = page.add(Dropdown(label="Favorite color:", options=[\n    Option("r", "Red"),\n    Option("g", "Green"),\n    Option("b", "Blue")\n]))\n')),Object(l.b)("p",null,"Get the key of selected option:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"favorite_color = page.get_value(dd1)\n"))),Object(l.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# TODO\n"))),Object(l.b)(c.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"# TODO\n"))),Object(l.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// TODO\n")))))}u.isMDXComponent=!0}}]);