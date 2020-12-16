(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(115)),l=n(120),o=n(121),b={title:"Button",sidebar_label:"Button",slug:"button"},i={unversionedId:"reference/controls/button",id:"reference/controls/button",isDocsHomePage:!1,title:"Button",description:"Button allows to trigger an action.",source:"@site/docs/reference/controls/button.md",slug:"/reference/controls/button",permalink:"/docs/reference/controls/button",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/button.md",version:"current",sidebar_label:"Button",sidebar:"someSidebar",previous:{title:"Textbox",permalink:"/docs/reference/controls/textbox"},next:{title:"Checkbox",permalink:"/docs/reference/controls/checkbox"}},u=[{value:"Properties",id:"properties",children:[]},{value:"Events",id:"events",children:[]},{value:"Examples",id:"examples",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Button allows to trigger an action."),Object(c.b)("p",null,"[IMAGE]"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"primary")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The button with a theme color background. Usually, there is only one primary button on a form.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"text")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text displayed on a button.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"disabled")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether the button is disabled.")))),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"click")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fires when a user clicks the button.")))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)(l.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"python",mdxType:"TabItem"},Object(c.b)("p",null,"Adding a button with event handler:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'btn_next = page.add(Button(text="Next", onclick=lambda e: print("Clicked!")))\n')),Object(c.b)("p",null,"or without lambda:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'btn_next = Button(text="Next", onclick=next_onclick)\n\ndef next_onclick(e):\n    page.disable(btn_next)\n    time.sleep(2) # simulate doing something\n    page.enable(btn_next)\n\npage.add(btn_next)\n'))),Object(c.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# TODO\n"))),Object(c.b)(o.a,{value:"powershell",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"# TODO\n"))),Object(c.b)(o.a,{value:"javascript",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// TODO\n")))))}p.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(m,o(o({ref:t},i),{},{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(118),l=n(116),o=n(51),b=n.n(o),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,O=Object(c.a)(),j=O.tabGroupChoices,f=O.setTabGroupChoices,g=Object(a.useState)(s),h=g[0],v=g[1];if(null!=d){var y=j[d];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=d&&f(d,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},121:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);