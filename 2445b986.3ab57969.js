(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,O=s["".concat(c,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(O,b(b({ref:t},o),{},{components:a})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},116:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,a){"use strict";var n=a(0),r=a(119);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(118),c=a(116),b=a(51),i=a.n(b),o=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,b=e.children,s=e.defaultValue,d=e.values,u=e.groupId,O=e.className,m=Object(l.a)(),j=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(n.useState)(s),N=f[0],h=f[1];if(null!=u){var v=j[u];null!=v&&v!==N&&d.some((function(e){return e.value===v}))&&h(v)}var y=function(e){h(e),null!=u&&g(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},O)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},121:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(115)),c=a(120),b=a(121),i={title:"Page",sidebar_label:"Page",slug:"page"},o={unversionedId:"reference/controls/page",id:"reference/controls/page",isDocsHomePage:!1,title:"Page",description:"Page is the top most container for all other controls.",source:"@site/docs/reference/controls/page.md",slug:"/reference/controls/page",permalink:"/docs/reference/controls/page",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/controls/page.md",version:"current",sidebar_label:"Page",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/reference/controls"},next:{title:"Stack",permalink:"/docs/reference/controls/stack"}},p=[{value:"Properties",id:"properties",children:[]},{value:"Examples",id:"examples",children:[]}],s={rightToc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Page is the top most container for all other controls.\nIt is is automatically added when a new page is created or app session started."),Object(l.b)("p",null,"Page control has a reserved ",Object(l.b)("inlineCode",{parentName:"p"},"page")," control ID. You cannot add Page control, however you can change its properties. Technically, the Page is a vertical ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"stack"}),"Stack")," control, so it has similar behavior and shares some properties."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"title")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{page_name}\xa0-\xa0pglet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A title of browser window.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"verticalFill")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines whether page contents takes 100% of the height of browser window.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"horizontalAlign")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"start")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines how to align page children horizontally: ",Object(l.b)("inlineCode",{parentName:"td"},"start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(l.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(l.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"verticalAlign")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines how to align page children vertically: ",Object(l.b)("inlineCode",{parentName:"td"},"start"),", ",Object(l.b)("inlineCode",{parentName:"td"},"end"),", ",Object(l.b)("inlineCode",{parentName:"td"},"center"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-between"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-around"),", ",Object(l.b)("inlineCode",{parentName:"td"},"space-evenly"),", ",Object(l.b)("inlineCode",{parentName:"td"},"baseline")," or ",Object(l.b)("inlineCode",{parentName:"td"},"stretch"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"width")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"100%")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The width of a page container.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"padding")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"10px")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The padding of a page container.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"gap")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"10")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A gap between page child controls.")))),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(c.a,{groupId:"languages",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"JavaScript",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"python",mdxType:"TabItem"},Object(l.b)("p",null,"Creating a new page with a random name and connecting to it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import pglet\n\npage = pglet.page()\n")),Object(l.b)("p",null,"Create a new app with name ",Object(l.b)("inlineCode",{parentName:"p"},"app1")," and wait for connections. ",Object(l.b)("inlineCode",{parentName:"p"},"web=True")," makes app UI displaying at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.pglet.io"}),"pglet.io"),".\n",Object(l.b)("inlineCode",{parentName:"p"},"main")," function is an entry point for a new user session. When a new user connects we just greem them with ",Object(l.b)("inlineCode",{parentName:"p"},"Hello, world!")," message:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'def main(page):\n  page.add(Text(value="Hello, world!"))\n\npglet.app("app1", web=True, target=main)\n')),Object(l.b)("p",null,"To update page title:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'page.update(Page(title="My App!"))\n'))),Object(l.b)(b.a,{value:"bash",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# TODO\n"))),Object(l.b)(b.a,{value:"powershell",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"# TODO\n"))),Object(l.b)(b.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// TODO\n")))))}d.isMDXComponent=!0}}]);