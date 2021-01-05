(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,b=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return r?o.a.createElement(b,i(i({ref:t},p),{},{components:r})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),a=(r(0),r(116)),c={title:"Get command",sidebar_label:"Get",slug:"get"},i={unversionedId:"reference/protocol/commands/get",id:"reference/protocol/commands/get",isDocsHomePage:!1,title:"Get command",description:"Get the value of control property.",source:"@site/docs/reference/protocol/commands/get.md",slug:"/reference/protocol/commands/get",permalink:"/docs/reference/protocol/commands/get",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/protocol/commands/get.md",version:"current",sidebar_label:"Get",sidebar:"someSidebar",previous:{title:"Set command",permalink:"/docs/reference/protocol/commands/set"},next:{title:"Clean command",permalink:"/docs/reference/protocol/commands/clean"}},l=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Parameters",id:"parameters",children:[{value:"control-id",id:"control-id",children:[]},{value:"property",id:"property",children:[]}]}],p={toc:l};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Get the value of control property."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"get <control-id> <property>\n")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get")," command returns the value of control property."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"'get form:firstName value' > $PAGE_PIPE\nread $firstName < $PAGE_PIPE\n")),Object(a.b)("p",null,"This command reads ",Object(a.b)("inlineCode",{parentName:"p"},"value")," property of ",Object(a.b)("inlineCode",{parentName:"p"},"textbox")," control with ",Object(a.b)("inlineCode",{parentName:"p"},"form:firstName")," ID."),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("h3",{id:"control-id"},"control-id"),Object(a.b)("p",null,"Control ID to read property of."),Object(a.b)("h3",{id:"property"},"property"),Object(a.b)("p",null,"The name of the property to read."))}m.isMDXComponent=!0}}]);