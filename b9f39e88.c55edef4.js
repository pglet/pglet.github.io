(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||c;return t?a.a.createElement(b,i(i({ref:n},s),{},{components:t})):a.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(115)),o={title:"Clean",sidebar_label:"Clean",slug:"clean"},i={unversionedId:"reference/commands/clean",id:"reference/commands/clean",isDocsHomePage:!1,title:"Clean",description:"Removes all children of the control without deleting the control itself.",source:"@site/docs/reference/commands/clean.md",slug:"/reference/commands/clean",permalink:"/docs/reference/commands/clean",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/commands/clean.md",version:"current",sidebar_label:"Clean",sidebar:"someSidebar",previous:{title:"Get",permalink:"/docs/reference/commands/get"},next:{title:"Remove",permalink:"/docs/reference/commands/remove"}},l=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Parameters",id:"parameters",children:[{value:"id",id:"id",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Removes all children of the control without deleting the control itself."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"clean <control-id>\n")),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"clean")," command removes all children of the control, but leaves control itself intact."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"clean body\n")),Object(c.b)("p",null,"This command removes the contents of ",Object(c.b)("inlineCode",{parentName:"p"},"body")," column."),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("h3",{id:"id"},"id"))}p.isMDXComponent=!0}}]);