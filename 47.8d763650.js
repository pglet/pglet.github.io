(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{110:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(23),o=n(21),u=n(120),c=n(118);var s=function(e){var t=e.metadata;return a.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(c.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(c.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},l=n(119),f=n(117);var d=function(){var e=Object(o.default)().siteConfig.title,t=Object(l.useActivePlugin)({failfast:!0}).pluginId,n=Object(f.useDocsPreferredVersion)(t).savePreferredVersionName,r=Object(l.useActiveVersion)(t),i=Object(l.useDocVersionSuggestions)(t),u=i.latestDocSuggestion,s=i.latestVersionSuggestion;if(!s)return a.a.createElement(a.a.Fragment,null);var d,v=null!=u?u:(d=s).docs.find((function(e){return e.id===d.mainDocId}));return a.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?a.a.createElement("div",null,"This is unreleased documentation for ",e," ",a.a.createElement("strong",null,r.label)," version."):a.a.createElement("div",null,"This is documentation for ",e," ",a.a.createElement("strong",null,r.label),", which is no longer actively maintained."),a.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",a.a.createElement("strong",null,a.a.createElement(c.a,{to:v.path,onClick:function(){return n(s.name)}},"latest version"))," ","(",s.label,")."))},v=n(144),m=n(116),g=n(70),p=n.n(g);t.default=function(e){var t,n=Object(o.default)().siteConfig,r=n.url,c=n.title,f=n.titleDelimiter,g=e.content,h=g.metadata,b=h.description,E=h.title,D=h.permalink,P=h.editUrl,_=h.lastUpdatedAt,O=h.lastUpdatedBy,V=g.frontMatter,y=V.image,j=V.keywords,A=V.hide_title,w=V.hide_table_of_contents,C=Object(l.useActivePlugin)({failfast:!0}).pluginId,N=Object(l.useVersions)(C),x=Object(l.useActiveVersion)(C),L=N.length>1,S=E?E+" "+f+" "+c:c,k=Object(u.a)(y,{absolute:!0});return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("title",null,S),a.a.createElement("meta",{property:"og:title",content:S}),b&&a.a.createElement("meta",{name:"description",content:b}),b&&a.a.createElement("meta",{property:"og:description",content:b}),j&&j.length&&a.a.createElement("meta",{name:"keywords",content:j.join(",")}),y&&a.a.createElement("meta",{property:"og:image",content:k}),y&&a.a.createElement("meta",{property:"twitter:image",content:k}),y&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),D&&a.a.createElement("meta",{property:"og:url",content:r+D}),D&&a.a.createElement("link",{rel:"canonical",href:r+D})),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:Object(m.a)("col",(t={},t[p.a.docItemCol]=!w,t))},a.a.createElement(d,null),a.a.createElement("div",{className:p.a.docItemContainer},a.a.createElement("article",null,L&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",x.label)),!A&&a.a.createElement("header",null,a.a.createElement("h1",{className:p.a.docTitle},E)),a.a.createElement("div",{className:"markdown"},a.a.createElement(g,null))),(P||_||O)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},P&&a.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},a.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},a.a.createElement("g",null,a.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||O)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",_&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),O&&" "),O&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,O)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(s,{metadata:h})))),!w&&g.rightToc&&a.a.createElement("div",{className:"col col--3"},a.a.createElement(v.a,{headings:g.rightToc}))))}},116:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(124);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(132);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var i=n(125);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var o=n(136);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return o.isSamePath}});var u=n(137);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return u.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return u.useDocsPreferredVersionByPluginId}});var c=n(126);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return c.DocsPreferredVersionContextProvider}})},118:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n(123),u=n(11),c=Object(r.createContext)({collectLink:function(){}}),s=n(120),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,v=e.to,m=e.href,g=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),E=Object(s.b)().withBaseUrl,D=Object(r.useContext)(c),P=v||m,_=Object(o.a)(P),O=null==P?void 0:P.replace("pathname://",""),V=void 0!==O?function(e){return e.startsWith("/")}(n=O)?E(n):n:void 0,y=Object(r.useRef)(!1),j=d?i.e:i.c,A=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&_&&window.docusaurus.prefetch(V),function(){A&&f&&f.disconnect()}}),[V,A,_]);var w=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,C=!V||!_||w;return V&&_&&!w&&!h&&D.collectLink(V),C?a.a.createElement("a",Object.assign({href:V},P&&!_&&{target:"_blank",rel:"noopener noreferrer"},b)):a.a.createElement(j,Object.assign({},b,{onMouseEnter:function(){y.current||(window.docusaurus.preload(V),y.current=!0)},innerRef:function(e){var t,n;A&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(V)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:V||""},d&&{isActive:p,activeClassName:g}))}},119:function(e,t,n){try{e.exports=n(133)}catch(r){e.exports={}}},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(21),a=n(123);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},121:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},123:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},124:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var a=r(n(21));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(119);t.isDocsPluginEnabled=!!r.useAllDocsData},126:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var u=i(n(0)),c=n(124),s=n(125),l=n(119),f=o(n(138));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var a={};return t.forEach((function(e){a[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),a}function v(){var e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=u.useMemo((function(){return Object.keys(e)}),[e]),r=u.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),a=r[0],i=r[1];return u.useEffect((function(){i(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[a,u.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),i((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[i])]}var m=u.createContext(null);function g(e){var t=e.children,n=v();return u.default.createElement(m.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?u.default.createElement(g,null,t):u.default.createElement(u.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=u.useContext(m);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(121),a=n(134),i=n(135);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var r=n(21);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(121);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),u=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:u,alternateDocVersions:u?(a=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),a=n(126),i=n(119),o=n(139);t.useDocsPreferredVersion=function(e){void 0===e&&(e=o.DEFAULT_PLUGIN_ID);var t=i.useDocsData(e),n=a.useDocsPreferredVersionContext(),u=n[0],c=n[1],s=u[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=i.useAllDocsData(),t=a.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],a=t[n].preferredVersionName;return a?r.versions.find((function(e){return e.name===a})):null}(n)})),r}},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},a={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},139:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(116);var o=function(e,t,n){var a=Object(r.useState)(void 0),i=a[0],o=a[1];Object(r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,u=!1,c=document.getElementsByClassName(e);a<c.length&&!u;){var s=c[a],l=s.href,f=decodeURIComponent(l.substring(l.indexOf("#")+1));r.id===f&&(i&&i.classList.remove(t),s.classList.add(t),o(s),u=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},u=n(52),c=n.n(u),s="table-of-contents__link";function l(e){var t=e.headings,n=e.isChild;return t.length?a.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(l,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return o(s,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(i.a)(c.a.tableOfContents,"thin-scrollbar")},a.a.createElement(l,{headings:t}))}}}]);