(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(138)),c={title:"Pglet protocol",sidebar_label:"Overview",slug:"/reference/protocol"},i={unversionedId:"reference/protocol/overview",id:"reference/protocol/overview",isDocsHomePage:!1,title:"Pglet protocol",description:"Pglet is a language-agnostic UI server which can be run locally, self-hosted in your local network or used as a hosted service.",source:"@site/docs/reference/protocol/overview.md",slug:"/reference/protocol",permalink:"/docs/reference/protocol",editUrl:"https://github.com/pglet/website/edit/master/docs/reference/protocol/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Grid",permalink:"/docs/reference/controls/grid"},next:{title:"Add command",permalink:"/docs/reference/protocol/commands/add"}},l=[{value:"Communication channel",id:"communication-channel",children:[]},{value:"Command messages",id:"command-messages",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pglet is a language-agnostic UI server which can be run locally, self-hosted in your local network or used as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"hosted service"),"."),Object(o.b)("p",null,"One of the design goals of Pglet was comfort progress updates from CI/CD workflows, internal tools and scheduled jobs written in Bash and PowerShell, so the protocol had to be simple and fast."),Object(o.b)("p",null,"The protocol is text-based and was partially inspired by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/protocol"}),"Redis protocol"),"."),Object(o.b)("h2",{id:"communication-channel"},"Communication channel"),Object(o.b)("p",null,"Pglet client is used to establish a communication channel with Pglet service. Client is a part of ",Object(o.b)("inlineCode",{parentName:"p"},"pglet")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"pglet.exe")," on Windows) executable which is automatically downloaded by a client library you use or can be downloaded manually from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pglet/pglet/releases"}),"releases"),"."),Object(o.b)("p",null,"For every new connection to a page (",Object(o.b)("inlineCode",{parentName:"p"},"pglet page <name>"),") or a new app session (",Object(o.b)("inlineCode",{parentName:"p"},"pglet app <name>"),") Pglet client creates two ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://man7.org/linux/man-pages/man7/fifo.7.html"}),"FIFO named pipes")," on macOS/Linux or two ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/win32/ipc/named-pipes"}),"named pipes")," on Windows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Command pipe")," - bi-directional pipe for sending command requests and receiving responses."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Event pipe")," - read-only pipe with a constant stream of events (click, change, etc.) generated by a user.")),Object(o.b)("p",null,"Pglet client returns the name/path of command pipe and to get the name of event pipe append ",Object(o.b)("inlineCode",{parentName:"p"},".events")," to a command pipe name."),Object(o.b)("h2",{id:"command-messages"},"Command messages"),Object(o.b)("h3",{id:"request"},"Request"),Object(o.b)("p",null,"Each request to a command pipe represents a single- or multi-line command in the format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<command> [value_1] [value_2] ... [property_1=value] [property_2=value] ...\n")),Object(o.b)("p",null,"For example, command adding a new ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," control to a page:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'add text value="Hello, world!"\n')),Object(o.b)("p",null,"or adding multiple controls at once to a stack named ",Object(o.b)("inlineCode",{parentName:"p"},"footer"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"add to=footer\n  textbox id=firstName\n  button id=cancel text=Cancel\n")),Object(o.b)("p",null,"Properties parsing is quite relaxed. If the value doesn't have spaces you can ommit quotes, for example ",Object(o.b)("inlineCode",{parentName:"p"},"text=Hello"),". Both single and double quotes can be used to enclose the value with spaces, for example: ",Object(o.b)("inlineCode",{parentName:"p"},'value="World\'s best coffee"'),", or ",Object(o.b)("inlineCode",{parentName:"p"},"value='\"quoted\" text'"),". The following escape symbols are supported: ",Object(o.b)("inlineCode",{parentName:"p"},"\\n"),", ",Object(o.b)("inlineCode",{parentName:"p"},"\\t"),", ",Object(o.b)("inlineCode",{parentName:"p"},'\\"'),", ",Object(o.b)("inlineCode",{parentName:"p"},"\\'"),"."),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("p",null,"Successful response has the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<number_of_additional_result_lines> [value]\nresult_line_1\nresult_line_2\n...\n")),Object(o.b)("p",null,"For example, the result of ",Object(o.b)("inlineCode",{parentName:"p"},"get firstName value")," command reading the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property of ",Object(o.b)("inlineCode",{parentName:"p"},"firstName")," textbox might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"0 John Smith\n")),Object(o.b)("p",null,"If you are reading the value of ",Object(o.b)("inlineCode",{parentName:"p"},"multiline=true")," textbox then the result will look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"2 First line\nSecond line\nThird line\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"2"),' means "result has 2 more lines".'),Object(o.b)("p",null,"The response of commands non-returning any values is just ",Object(o.b)("inlineCode",{parentName:"p"},"0 "),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Certain commands may not have a response at all. These are fire-and-forget commands with the names ending on "f": ',Object(o.b)("inlineCode",{parentName:"p"},"addf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"setf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"appendf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"cleanf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"removef"),". Fire-and-forget commands are handy when you are quickly doing a lot of control modifications and don't care about the results, for example, updaing progress bar in a loop."))),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("p",null,"Read event pipe to wait and receive events fired by users interacting with a web page."),Object(o.b)("p",null,"Each event message is a single line in the format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<event_target> <event_name> [event_data]\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"<event_target>")," is ID of a control generated the event, ",Object(o.b)("inlineCode",{parentName:"p"},"<event_name>")," is event name, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"click"),", ",Object(o.b)("inlineCode",{parentName:"p"},"change")," and ",Object(o.b)("inlineCode",{parentName:"p"},"[event_data]")," is optional event data attached to a control with ",Object(o.b)("inlineCode",{parentName:"p"},"data")," property (usually, used with buttons)."),Object(o.b)("p",null,"For example, a serie of event might look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"firstName change John\nagreeTOS change true\nok click\ncancel click\n...\n")))}s.isMDXComponent=!0}}]);