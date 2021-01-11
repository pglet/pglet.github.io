(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),s=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?l.a.createElement(m,c(c({ref:t},p),{},{components:n})):l.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),o=(n(0),n(116)),r={title:"Bash tutorial",sidebar_label:"Bash",slug:"bash"},c={unversionedId:"tutorials/bash",id:"tutorials/bash",isDocsHomePage:!1,title:"Bash tutorial",description:"Requirements:",source:"@site/docs/tutorials/bash.md",slug:"/tutorials/bash",permalink:"/docs/tutorials/bash",editUrl:"https://github.com/pglet/website/edit/master/docs/tutorials/bash.md",version:"current",sidebar_label:"Bash",sidebar:"someSidebar",previous:{title:"Python tutorial",permalink:"/docs/tutorials/python"},next:{title:"PowerShell tutorial",permalink:"/docs/tutorials/powershell"}},i=[{value:"Installing <code>pglet.sh</code>",id:"installing-pgletsh",children:[]},{value:"Creating a page",id:"creating-a-page",children:[]},{value:"Getting user input",id:"getting-user-input",children:[]},{value:"Handling events",id:"handling-events",children:[{value:"Event loop",id:"event-loop",children:[]}]},{value:"Multi-user apps",id:"multi-user-apps",children:[]},{value:"Getting apps and pages to the Web",id:"getting-apps-and-pages-to-the-web",children:[]},{value:"<code>pglet</code> module reference",id:"pglet-module-reference",children:[{value:"<code>Connect-PgletApp</code> cmdlet",id:"connect-pgletapp-cmdlet",children:[]},{value:"<code>Connect-PgletPage</code> cmdlet",id:"connect-pgletpage-cmdlet",children:[]},{value:"<code>Invoke-Pglet</code> cmdlet",id:"invoke-pglet-cmdlet",children:[]},{value:"<code>Wait-PgletEvent</code> cmdlet",id:"wait-pgletevent-cmdlet",children:[]}]}],p={toc:i};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bash, Zsh on Linux or macOS. Windows is not supported.")),Object(o.b)("h2",{id:"installing-pgletsh"},"Installing ",Object(o.b)("inlineCode",{parentName:"h2"},"pglet.sh")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," script contains Bash functions to work with Pglet and therefore must be dot-sourced in every script using Pglet."),Object(o.b)("p",null,"To download ",Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://pglet.io/pglet.sh\n")),Object(o.b)("h2",{id:"creating-a-page"},"Creating a page"),Object(o.b)("p",null,"Pglet allows you creating ",Object(o.b)("strong",{parentName:"p"},"shared")," and ",Object(o.b)("strong",{parentName:"p"},"app")," pages."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Shared page")," is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"App page"),' creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.'),Object(o.b)("p",null,'OK, this is a minimal "Hello world" Pglet page running in a local mode:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="hello.sh"',title:'"hello.sh"'}),". pglet.sh\n\npglet_page\npglet_send \"add text value='Hello, world!'\"\n")),Object(o.b)("p",null,"When you run this script a new browser window should popup with the greeting:"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:"/img/docs/quickstart-hello-world.png"})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet_page")," function creates a page, if it doesn't exist, with ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," name and opens connection. An opened connection ID is stored in a ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_CONNECTION_ID")," variable."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet_send")," cmdlet sends ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol#command-messages"}),"commands")," to open Pglet connection. You use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/add"}),"add"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/set"}),"set"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/get"}),"get"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/clean"}),"clean")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/remove"}),"remove")," commands to update and query page contents."),Object(o.b)("p",null,"An app won't wait for any input and should exit. Now, if you run the same ",Object(o.b)("inlineCode",{parentName:"p"},"hello.sh"),' script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.'),Object(o.b)("p",null,"If you need a clean page on every start of the program use ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'{4} title="hello.sh"',"{4}":!0,title:'"hello.sh"'}),'. pglet.sh\n\npglet_page\npglet_send "clean"\npglet_send "add text value=\'Hello, world!\'"\n')),Object(o.b)("h2",{id:"getting-user-input"},"Getting user input"),Object(o.b)("p",null,"Pglet provides a number of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls"}),"controls")," for building forms: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/textbox"}),"Textbox"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/checkbox"}),"Checkbox"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/dropdown"}),"Dropdown"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/button"}),"Button"),"."),Object(o.b)("p",null,"Let's ask a user for a name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="greeter.ps1"',title:'"greeter.ps1"'}),'Import-Module pglet\n\nConnect-PgletPage "greeter"\n\nInvoke-Pglet "clean"\nInvoke-Pglet "add textbox label=\'Your name\' description=\'Please provide your full name\'"\nInvoke-Pglet "add button primary text=\'Say hello\'"\n')),Object(o.b)("h2",{id:"handling-events"},"Handling events"),Object(o.b)("p",null,'When you click "Say hello" button on the form above nothing will happen in our program though ',Object(o.b)("inlineCode",{parentName:"p"},"Button"),' control itself emits "click" event each time it\'s pressed/clicked. The event is just not handled.'),Object(o.b)("p",null,"In PowerShell you use event loop to handle control events."),Object(o.b)("h3",{id:"event-loop"},"Event loop"),Object(o.b)("p",null,"Once the form is rendered use ",Object(o.b)("inlineCode",{parentName:"p"},"Wait-PgletEvent")," cmdlet in a loop to receive all page events triggered by a user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="greeter.ps1"',title:'"greeter.ps1"'}),'Import-Module pglet\n\nConnect-PgletPage "greeter"\n\nInvoke-Pglet "clean"\n$txt_name = Invoke-Pglet "add textbox label=\'Your name\' description=\'Please provide your full name\'"\n$btn_hello = Invoke-Pglet "add button primary text=\'Say hello\'"\n\nwhile($true) {\n  $e = Wait-PgletEvent\n  if ($e.Target -eq $btn_hello -and $e.Name -eq \'click\') {\n    $name = Invoke-Pglet "get $txt_name value"\n    Invoke-Pglet "clean page"\n    Invoke-Pglet "add text value=\'Hello, $name!\'"\n    return\n  }\n}\n')),Object(o.b)("p",null,"Notice how IDs of the added textbox and button are saved, so we can refer to these controls later."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Wait-PgletEvent")," returns ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#event-class"}),"Event")," object and we are interested in ",Object(o.b)("inlineCode",{parentName:"p"},"click")," events coming from the button (",Object(o.b)("inlineCode",{parentName:"p"},"e.Target")," is control's ID). Next, we use ",Object(o.b)("inlineCode",{parentName:"p"},"get")," command to read ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property of textbox control, ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," the page, output greeting and leave the program."),Object(o.b)("h2",{id:"multi-user-apps"},"Multi-user apps"),Object(o.b)("p",null,"In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use ",Object(o.b)("inlineCode",{parentName:"p"},"Connect-PgletApp")," cmdlet which takes a ",Object(o.b)("inlineCode",{parentName:"p"},"ScriptBlock")," with a session handler code. The handler script is called in a separate PowerShell Runspace for every new user connected. The program stays blocked on ",Object(o.b)("inlineCode",{parentName:"p"},"Connect-PgletApp")," while constantly waiting for new user connections."),Object(o.b)("p",null,"Below is a minimal Pglet multi-user app in PowerShell:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="hello-app.ps1"',title:'"hello-app.ps1"'}),"Import-Module pglet\n\nConnect-PgletApp -Name 'greeter-app' -ScriptBlock {\n    Invoke-Pglet \"add text value='Hello to connection $PGLET_CONNECTION_ID!'\"\n}\n")),Object(o.b)("p",null,"Now, a multi-user version of greeter app could look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="greeter-app.ps1"',title:'"greeter-app.ps1"'}),"Import-Module pglet\n\nConnect-PgletApp -Name 'greeter-app' -ScriptBlock {\n  $txt_name = Invoke-Pglet \"add textbox label='Your name' description='Please provide your full name'\"\n  $btn_hello = Invoke-Pglet \"add button primary text='Say hello'\"\n  \n  while($true) {\n    $e = Wait-PgletEvent\n    if ($e.Target -eq $btn_hello -and $e.Name -eq 'click') {\n      $name = Invoke-Pglet \"get $txt_name value\"\n      Invoke-Pglet \"clean page\"\n      Invoke-Pglet \"add text value='Hello, $name!'\"\n      return\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"getting-apps-and-pages-to-the-web"},"Getting apps and pages to the Web"),Object(o.b)("p",null,"Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background."),Object(o.b)("p",null,"With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients."),Object(o.b)("p",null,'In contrast to a classic deployment you are not packaging your program and it\'s not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"Pglet service")," and available via ",Object(o.b)("inlineCode",{parentName:"p"},"https://app.pglet.io/public/{your-app-name}")," URL."),Object(o.b)("p",null,"So, to make your greeter app available on the web add ",Object(o.b)("inlineCode",{parentName:"p"},"-Web")," parameter to either 'Connect-PgletPage",Object(o.b)("inlineCode",{parentName:"p"},"or"),"Connect-PgletApp` call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-powershell"}),"Connect-PgletApp -Name 'greeter-app' -Web -ScriptBlock { <# ... #> }\n")),Object(o.b)("p",null,'As it\'s going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Connect-PgletApp -Name 'john/greeter-app' -Web -ScriptBlock { <# ... #> }\n")),Object(o.b)("p",null,"or just omit page name, so it will be randomly generated. Look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"this article")," to understand how page naming works."),Object(o.b)("h2",{id:"pglet-module-reference"},Object(o.b)("inlineCode",{parentName:"h2"},"pglet")," module reference"),Object(o.b)("h3",{id:"connect-pgletapp-cmdlet"},Object(o.b)("inlineCode",{parentName:"h3"},"Connect-PgletApp")," cmdlet"),Object(o.b)("p",null,"Creates an application page if not exists and opens a new connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Name")," (optional) - the name of Pglet app. Random name will be generated if this parameter left blank."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ScriptBlock")," - a handler script block for a new user session."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Web")," (switch) - makes the app available as public at pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server")," (optional) - connects to the app on a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Token")," (optional) - authentication token for pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NoWindow")," (switch) - do not open browser window.")),Object(o.b)("h3",{id:"connect-pgletpage-cmdlet"},Object(o.b)("inlineCode",{parentName:"h3"},"Connect-PgletPage")," cmdlet"),Object(o.b)("p",null,"Creates a shared page if not exists and opens a new connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Name")," (optional) - the name of Pglet page. Random name will be generated if this parameter left blank."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Web")," (switch) - makes the page available as public at pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server")," (optional) - connects to the page on a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Token")," (optional) - authentication token for pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NoWindow")," (switch) - do not open browser window.")),Object(o.b)("h3",{id:"invoke-pglet-cmdlet"},Object(o.b)("inlineCode",{parentName:"h3"},"Invoke-Pglet")," cmdlet"),Object(o.b)("p",null,"Sends ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol#command-messages"}),"commands")," to a Pglet connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Command")," - command text."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Page")," (optional) - connection ID to send command to. The last opened connection is used if not specified.")),Object(o.b)("h3",{id:"wait-pgletevent-cmdlet"},Object(o.b)("inlineCode",{parentName:"h3"},"Wait-PgletEvent")," cmdlet"),Object(o.b)("p",null,"Blocks until a user generated event is received."),Object(o.b)("p",null,"Returns an object describing the event with the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Target")," - ID of control triggered event."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Name"),' - event name, for example "click".'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Data")," - additional data attached to the event. Button control has ",Object(o.b)("inlineCode",{parentName:"li"},"data")," property which supplies additional event data.")))}s.isMDXComponent=!0}}]);