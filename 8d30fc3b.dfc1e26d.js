(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),o=(n(0),n(142)),c={title:"Bash tutorial",sidebar_label:"Bash",slug:"bash"},r={unversionedId:"tutorials/bash",id:"tutorials/bash",isDocsHomePage:!1,title:"Bash tutorial",description:"Bash can be used to build standalone web apps and dashboards or add web UI to existing scripts, jobs.",source:"@site/docs/tutorials/bash.md",slug:"/tutorials/bash",permalink:"/docs/tutorials/bash",editUrl:"https://github.com/pglet/website/edit/master/docs/tutorials/bash.md",version:"current",sidebar_label:"Bash",sidebar:"someSidebar",previous:{title:"Python tutorial",permalink:"/docs/tutorials/python"},next:{title:"PowerShell tutorial",permalink:"/docs/tutorials/powershell"}},p=[{value:"Installing <code>pglet.sh</code>",id:"installing-pgletsh",children:[]},{value:"Creating a page",id:"creating-a-page",children:[]},{value:"Getting user input",id:"getting-user-input",children:[]},{value:"Handling events",id:"handling-events",children:[{value:"Event loop",id:"event-loop",children:[]}]},{value:"Multi-user apps",id:"multi-user-apps",children:[]},{value:"Getting apps and pages to the Web",id:"getting-apps-and-pages-to-the-web",children:[]},{value:"Escaping command parameters",id:"escaping-command-parameters",children:[]},{value:"<code>pglet.sh</code> reference",id:"pgletsh-reference",children:[{value:"<code>pglet_page</code>",id:"pglet_page",children:[]},{value:"<code>pglet_app</code>",id:"pglet_app",children:[]},{value:"<code>pglet_send</code>",id:"pglet_send",children:[]},{value:"<code>pglet_wait_event</code>",id:"pglet_wait_event",children:[]},{value:"<code>pglet_add</code>",id:"pglet_add",children:[]},{value:"<code>pglet_set</code>",id:"pglet_set",children:[]},{value:"<code>pglet_set_value</code>",id:"pglet_set_value",children:[]},{value:"<code>pglet_get_value</code>",id:"pglet_get_value",children:[]},{value:"<code>pglet_show</code>",id:"pglet_show",children:[]},{value:"<code>pglet_hide</code>",id:"pglet_hide",children:[]},{value:"<code>pglet_enable</code>",id:"pglet_enable",children:[]},{value:"<code>pglet_disable</code>",id:"pglet_disable",children:[]},{value:"<code>pglet_clean</code>",id:"pglet_clean",children:[]},{value:"<code>pglet_remove</code>",id:"pglet_remove",children:[]},{value:"<code>escape_sq_str</code>",id:"escape_sq_str",children:[]},{value:"<code>escape_dq_str</code>",id:"escape_dq_str",children:[]},{value:"<code>escape_sq_cmd</code>",id:"escape_sq_cmd",children:[]},{value:"<code>escape_dq_cmd</code>",id:"escape_dq_cmd",children:[]}]}],i={toc:p};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bash can be used to build standalone web apps and dashboards or add web UI to existing scripts, jobs."),Object(o.b)("p",null,"Requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bash, Zsh on Linux or macOS. Windows is not supported.")),Object(o.b)("h2",{id:"installing-pgletsh"},"Installing ",Object(o.b)("inlineCode",{parentName:"h2"},"pglet.sh")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," script contains Bash functions to work with Pglet and could be dot-sourced in your scripts using Pglet."),Object(o.b)("p",null,"To download ",Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://pglet.io/pglet.sh\n")),Object(o.b)("p",null,"During the first run of ",Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," Pglet binary will be downloaded to ",Object(o.b)("inlineCode",{parentName:"p"},"$HOME/.pglet/bin")," directory."),Object(o.b)("p",null,"If you want to install Pglet binary into a custom directory you can define ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_INSTALL_DIR")," environment variable. For example to install Pglet binary to ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin")," directory run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"PGLET_INSTALL_DIR=/usr/local/bin sudo bash pglet.sh\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Custom installation directory must be in ",Object(o.b)("inlineCode",{parentName:"p"},"$PATH"),"."))),Object(o.b)("h2",{id:"creating-a-page"},"Creating a page"),Object(o.b)("p",null,"Pglet allows you creating ",Object(o.b)("strong",{parentName:"p"},"shared")," and ",Object(o.b)("strong",{parentName:"p"},"app")," pages."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Shared page")," is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"App page"),' creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.'),Object(o.b)("p",null,'OK, this is a minimal "Hello world" Pglet page running in a local mode:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="hello.sh"',title:'"hello.sh"'}),". pglet.sh\n\npglet_page\npglet_send \"add text value='Hello, world!'\"\n")),Object(o.b)("p",null,"When you run this script a new browser window should popup with the greeting:"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:"/img/docs/quickstart-hello-world.png"})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet_page")," function creates a page, if it doesn't exist, with ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," name and opens connection. An opened connection ID is stored in a ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_CONNECTION_ID")," variable."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet_send")," cmdlet sends ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol#command-messages"}),"commands")," to open Pglet connection. You use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/add"}),"add"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/set"}),"set"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/get"}),"get"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/clean"}),"clean")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol/commands/remove"}),"remove")," commands to update and query page contents."),Object(o.b)("p",null,"An app won't wait for any input and should exit. Now, if you run the same ",Object(o.b)("inlineCode",{parentName:"p"},"hello.sh"),' script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.'),Object(o.b)("p",null,"If you need a clean page on every start of the program use ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'{4} title="hello.sh"',"{4}":!0,title:'"hello.sh"'}),'. pglet.sh\n\npglet_page\npglet_send "clean"\npglet_send "add text value=\'Hello, world!\'"\n')),Object(o.b)("h2",{id:"getting-user-input"},"Getting user input"),Object(o.b)("p",null,"Pglet provides a number of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls"}),"controls")," for building forms: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/textbox"}),"Textbox"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/checkbox"}),"Checkbox"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/dropdown"}),"Dropdown"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/button"}),"Button"),"."),Object(o.b)("p",null,"Let's ask a user for a name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="greeter.sh"',title:'"greeter.sh"'}),'. pglet.sh\n\npglet_page "index"\n\npglet_send "clean"\npglet_send "add textbox label=\'Your name\' description=\'Please provide your full name\'"\npglet_send "add button primary text=\'Say hello\'"\n')),Object(o.b)("h2",{id:"handling-events"},"Handling events"),Object(o.b)("p",null,'When you click "Say hello" button on the form above nothing will happen in our program though ',Object(o.b)("inlineCode",{parentName:"p"},"Button"),' control itself emits "click" event each time it\'s pressed/clicked. The event is just not handled.'),Object(o.b)("p",null,"In Bash you use event loop to handle control events."),Object(o.b)("h3",{id:"event-loop"},"Event loop"),Object(o.b)("p",null,"Once the form is rendered use ",Object(o.b)("inlineCode",{parentName:"p"},"pglet_wait_event")," function in a loop to receive all page events triggered by a user:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="greeter.sh"',title:'"greeter.sh"'}),'. pglet.sh\n\npglet_page "index"\n\npglet_send "clean"\ntxt_name=`pglet_send "add textbox label=\'Your name\' description=\'Please provide your full name\'"`\nbtn_hello=`pglet_send "add button primary text=\'Say hello\'"`\n\nwhile true\ndo\n    pglet_wait_event\n    if [[ "$PGLET_EVENT_TARGET" == $btn_hello && "$PGLET_EVENT_NAME" == "click" ]]; then\n        name=`pglet_send "get $txt_name value"`\n        pglet_send "clean page"\n        pglet_send "add text value=\'Hello, $name!\'"\n        pglet_send "add text value=\'Close browser window to exit the program...\'"\n        break\n    fi\ndone\n')),Object(o.b)("p",null,"Notice how IDs of the added textbox and button are saved, so we can refer to these controls later."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet_wait_event")," stores event details into ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_EVENT_TARGET"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_EVENT_NAME")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_EVENT_DATA")," variables. We are interested in ",Object(o.b)("inlineCode",{parentName:"p"},"click")," events coming from the button (",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_EVENT_TARGET")," is control's ID). Next, we use ",Object(o.b)("inlineCode",{parentName:"p"},"get")," command to read ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property of textbox control, ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," the page, output greeting and leave the program."),Object(o.b)("h2",{id:"multi-user-apps"},"Multi-user apps"),Object(o.b)("p",null,"In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use ",Object(o.b)("inlineCode",{parentName:"p"},"pglet_app")," function which takes a reference to a session handling function. The handler function is called in a new sub-shell for every new user connected. The program stays blocked on ",Object(o.b)("inlineCode",{parentName:"p"},"pglet_app")," while constantly waiting for new user connections."),Object(o.b)("p",null,"Below is a minimal Pglet multi-user app in Bash:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="hello-app.sh"',title:'"hello-app.sh"'}),'. pglet.sh\n\nfunction main() {\n  pglet_send "clean"\n  pglet_send "add text value=\'Hello, world!\'"\n}\n\npglet_app "hello-app" main\n')),Object(o.b)("p",null,"Now, a multi-user version of greeter app could look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="greeter-app.sh"',title:'"greeter-app.sh"'}),'. pglet.sh\n\nfunction main() {\n    pglet_send "clean"\n    txt_name=`pglet_send "add textbox label=\'Your name\' description=\'Please provide your full name\'"`\n    btn_hello=`pglet_send "add button primary text=\'Say hello\'"`\n\n    while true\n    do\n        pglet_wait_event\n        if [[ "$PGLET_EVENT_TARGET" == $btn_hello && "$PGLET_EVENT_NAME" == "click" ]]; then\n            name=`pglet_send "get $txt_name value"`\n            pglet_send "clean page"\n            pglet_send "add text value=\'Hello, $name!\'"\n            break\n        fi\n    done\n}\n\npglet_app "greeter-app" main\n')),Object(o.b)("h2",{id:"getting-apps-and-pages-to-the-web"},"Getting apps and pages to the Web"),Object(o.b)("p",null,"Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background."),Object(o.b)("p",null,"With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients."),Object(o.b)("p",null,'In contrast to a classic deployment you are not packaging your program and it\'s not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"Pglet service")," and available via ",Object(o.b)("inlineCode",{parentName:"p"},"https://app.pglet.io/public/{your-app-name}")," URL."),Object(o.b)("p",null,"So, to make your greeter app available on the web add ",Object(o.b)("inlineCode",{parentName:"p"},"PGLET_WEB=true")," variable before either 'pglet_page",Object(o.b)("inlineCode",{parentName:"p"},"or"),"pglet_app` call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'PGLET_WEB=true pglet_app "greeter-app" main\n')),Object(o.b)("p",null,'As it\'s going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'PGLET_WEB=true pglet_app "john/greeter-app" main\n')),Object(o.b)("p",null,"or just omit page name, so it will be randomly generated. Look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"this article")," to understand how page naming works."),Object(o.b)("h2",{id:"escaping-command-parameters"},"Escaping command parameters"),Object(o.b)("p",null,"Pglet command must be written in a single line, therefore new line symbols (",Object(o.b)("inlineCode",{parentName:"p"},"CR"),") must be replaced with ",Object(o.b)("inlineCode",{parentName:"p"},"\\n"),". If a command argument value contains spaces it must be surrounded with single or double quotes."),Object(o.b)("p",null,"For example, you want to add a new ",Object(o.b)("inlineCode",{parentName:"p"},"text")," control with the following contents having new lines, single and double quotes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Line 1\nLine\'s 2\nLine "3"\n')),Object(o.b)("p",null,"Command should look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_add "text pre value=\\"Line 1\\nLine\'s 2\\nLine \\\\\\"3\\\\\\"\\""\n')),Object(o.b)("p",null,"Notice, new lines ",Object(o.b)("inlineCode",{parentName:"p"},"{CR}")," are replaced with ",Object(o.b)("inlineCode",{parentName:"p"},"\\n"),", double quotes ",Object(o.b)("inlineCode",{parentName:"p"},'"')," replaced with ",Object(o.b)("inlineCode",{parentName:"p"},'\\"'),"."),Object(o.b)("p",null,"The value in double quotes can have unescaped single quotes inside and vice versa, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"text value='something in \"double quotes\"'\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"text value=\"let's try a single 'quotes' inside\"\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pglet.sh")," includes helper functions to help you with strings escaping:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#escape_sq_str"}),Object(o.b)("inlineCode",{parentName:"a"},"escape_sq_str()"))," - takes string in ",Object(o.b)("inlineCode",{parentName:"li"},"$1")," argument and escapes new lines and single quotes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#escape_dq_str"}),Object(o.b)("inlineCode",{parentName:"a"},"escape_dq_str()"))," - takes string in ",Object(o.b)("inlineCode",{parentName:"li"},"$1")," argument and escapes new lines and double quotes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#escape_sq_cmd"}),Object(o.b)("inlineCode",{parentName:"a"},"escape_sq_cmd()"))," - takes command with arguments, runs it and escapes new lines and single quotes in command result."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#escape_dq_cmd"}),Object(o.b)("inlineCode",{parentName:"a"},"escape_dq_cmd()"))," - takes command with arguments, runs it and escapes new lines and double quotes in command result.")),Object(o.b)("p",null,"Example 1:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function main() {\n  local t=$(escape_sq_cmd curl http://echo.jsontest.com/key/value/one/two)\n  pglet_send "add text pre value=\'$t\'"\n}\npglet_app "index" "main"\n')),Object(o.b)("p",null,"Example 2:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'function main() {\n  local t2=$(escape_dq_str $(curl -s http://echo.jsontest.com/key/value/one/two | jq \'.one\'))\n  pglet_add "text pre value=\\"$t2\\""\n}\npglet_app "index" "main"\n')),Object(o.b)("h2",{id:"pgletsh-reference"},Object(o.b)("inlineCode",{parentName:"h2"},"pglet.sh")," reference"),Object(o.b)("h3",{id:"pglet_page"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_page")),Object(o.b)("p",null,"Creates a shared page if not exists and opens a new connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$1")," (optional) - the name of Pglet page. Random name will be generated if this parameter left blank.")),Object(o.b)("p",null,"Variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_WEB=true")," - makes the app available as public at pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_SERVER=<url>")," - connects to the app on a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_TOKEN=<token>")," - authentication token for pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_NO_WINDOW=true")," - do not open browser window.")),Object(o.b)("h3",{id:"pglet_app"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_app")),Object(o.b)("p",null,"Creates an application page if not exists and opens a new connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$1")," (optional) - the name of Pglet page. Random name will be generated if this parameter left blank."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$2")," - session handler function.")),Object(o.b)("p",null,"Variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_WEB=true")," - makes the app available as public at pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_SERVER=<url>")," - connects to the app on a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_TOKEN=<token>")," - authentication token for pglet.io service or a self-hosted Pglet server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_NO_WINDOW=true")," - do not open browser window.")),Object(o.b)("h3",{id:"pglet_send"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_send")),Object(o.b)("p",null,"Sends ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol#command-messages"}),"commands")," to a Pglet connection."),Object(o.b)("p",null,"Parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$1")," - command text or connection ID."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"$2")," (optional) - command text (if connection ID is specified in ",Object(o.b)("inlineCode",{parentName:"li"},"$1"),").")),Object(o.b)("p",null,"For example, setting page title:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pglet_send \"set page title='My app'\"\n")),Object(o.b)("h3",{id:"pglet_wait_event"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_wait_event")),Object(o.b)("p",null,"Blocks until a user generated event is received."),Object(o.b)("p",null,"Stores event details into the following variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_EVENT_TARGET")," - ID of control triggered event."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_EVENT_NAME"),' - event name, for example "click".'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PGLET_EVENT_DATA")," - additional data attached to the event. Button control has ",Object(o.b)("inlineCode",{parentName:"li"},"data")," property which supplies additional event data.")),Object(o.b)("h3",{id:"pglet_add"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_add")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"add")," command, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_add "button text=OK"\n')),Object(o.b)("h3",{id:"pglet_set"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_set")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"set")," command, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pglet_set \"page title='My app'\"\n")),Object(o.b)("h3",{id:"pglet_set_value"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_set_value")),Object(o.b)("p",null,"Updates ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property of a control, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_set_value "progress1" "10"\n')),Object(o.b)("h3",{id:"pglet_get_value"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_get_value")),Object(o.b)("p",null,"Reads ",Object(o.b)("inlineCode",{parentName:"p"},"value")," property of a control, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'name=`pglet_get_value "txt_name"`\n')),Object(o.b)("h3",{id:"pglet_show"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_show")),Object(o.b)("p",null,"Sets ",Object(o.b)("inlineCode",{parentName:"p"},"visible")," property of a control to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_show "stack_buttons"\n')),Object(o.b)("h3",{id:"pglet_hide"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_hide")),Object(o.b)("p",null,"Sets ",Object(o.b)("inlineCode",{parentName:"p"},"visible")," property of a control to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_hide "stack_buttons"\n')),Object(o.b)("h3",{id:"pglet_enable"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_enable")),Object(o.b)("p",null,"Sets ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," property of a control to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_enable "stack_buttons"\n')),Object(o.b)("h3",{id:"pglet_disable"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_disable")),Object(o.b)("p",null,"Sets ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," property of a control to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'pglet_disable "stack_buttons"\n')),Object(o.b)("h3",{id:"pglet_clean"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_clean")),Object(o.b)("p",null,"Cleans children collection of a control, but leaves control itself."),Object(o.b)("p",null,"For example, to clean the contents of the entire page:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pglet_clean page\n")),Object(o.b)("h3",{id:"pglet_remove"},Object(o.b)("inlineCode",{parentName:"h3"},"pglet_remove")),Object(o.b)("p",null,"Removes a control and all its children, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pglet_remove footer\n")),Object(o.b)("h3",{id:"escape_sq_str"},Object(o.b)("inlineCode",{parentName:"h3"},"escape_sq_str")),Object(o.b)("p",null,"Takes string in ",Object(o.b)("inlineCode",{parentName:"p"},"$1")," argument and escapes new lines and single quotes."),Object(o.b)("p",null,"For example, running the following script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'s=\'{\n   "one": "two",\n   "key": "value"\n}\'\nescape_sq_str "$s"\n')),Object(o.b)("p",null,"will output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\\n "one": "two",\\n "key": "value"\\n}\n')),Object(o.b)("h3",{id:"escape_dq_str"},Object(o.b)("inlineCode",{parentName:"h3"},"escape_dq_str")),Object(o.b)("p",null,"Takes string in ",Object(o.b)("inlineCode",{parentName:"p"},"$1")," argument and escapes new lines and double quotes."),Object(o.b)("p",null,"For example, running the following script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'s=\'{\n   "one": "two",\n   "key": "value"\n}\'\nescape_dq_str "$s"\n')),Object(o.b)("p",null,"will output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\\n \\"one\\": \\"two\\",\\n \\"key\\": \\"value\\"\\n}\n')),Object(o.b)("h3",{id:"escape_sq_cmd"},Object(o.b)("inlineCode",{parentName:"h3"},"escape_sq_cmd")),Object(o.b)("p",null,"Executes command ",Object(o.b)("inlineCode",{parentName:"p"},"$@")," and then escapes new lines and single quotes in the command result."),Object(o.b)("p",null,"For example, running the following script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"escape_sq_cmd curl -s http://echo.jsontest.com/key/value/one/two\n")),Object(o.b)("p",null,"will output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\\n "one": "two",\\n "key": "value"\\n}\n')),Object(o.b)("h3",{id:"escape_dq_cmd"},Object(o.b)("inlineCode",{parentName:"h3"},"escape_dq_cmd")),Object(o.b)("p",null,"Executes command ",Object(o.b)("inlineCode",{parentName:"p"},"$@")," and then escapes new lines and double quotes in the command result."),Object(o.b)("p",null,"For example, running the following script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"escape_dq_cmd curl -s http://echo.jsontest.com/key/value/one/two\n")),Object(o.b)("p",null,"will output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\\n \\"one\\": \\"two\\",\\n \\"key\\": \\"value\\"\\n}\n')))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),b=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=b(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?l.a.createElement(m,r(r({ref:t},i),{},{components:n})):l.a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var i=2;i<o;i++)c[i]=n[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);