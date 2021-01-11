(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),l=(n(0),n(116)),r=n(121),i=n(122),c={title:"Python tutorial",sidebar_label:"Python",slug:"python"},p={unversionedId:"tutorials/python",id:"tutorials/python",isDocsHomePage:!1,title:"Python tutorial",description:"Python 3.7 or higher is required to use Pglet library.",source:"@site/docs/tutorials/python.md",slug:"/tutorials/python",permalink:"/docs/tutorials/python",editUrl:"https://github.com/pglet/website/edit/master/docs/tutorials/python.md",version:"current",sidebar_label:"Python",sidebar:"someSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Bash tutorial",permalink:"/docs/tutorials/bash"}},b=[{value:"Installing <code>pglet</code> module",id:"installing-pglet-module",children:[]},{value:"Creating a page",id:"creating-a-page",children:[]},{value:"Getting user input",id:"getting-user-input",children:[]},{value:"Handling events",id:"handling-events",children:[{value:"Event loop",id:"event-loop",children:[]},{value:"Event handlers",id:"event-handlers",children:[]}]},{value:"Multi-user apps",id:"multi-user-apps",children:[]},{value:"Getting apps and pages to the Web",id:"getting-apps-and-pages-to-the-web",children:[]},{value:"<code>pglet</code> module reference",id:"pglet-module-reference",children:[{value:"<code>page</code> function",id:"page-function",children:[]},{value:"<code>app</code> function",id:"app-function",children:[]},{value:"<code>Connection</code> class",id:"connection-class",children:[]},{value:"<code>Event</code> class",id:"event-class",children:[]},{value:"Control classes",id:"control-classes",children:[]}]}],s={toc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Python 3.7 or higher is required to use Pglet library."),Object(l.b)("h2",{id:"installing-pglet-module"},"Installing ",Object(l.b)("inlineCode",{parentName:"h2"},"pglet")," module"),Object(l.b)("p",null,"Before installing ",Object(l.b)("inlineCode",{parentName:"p"},"pglet")," module make sure you have the latest versions of package management utilities:"),Object(l.b)(r.a,{groupId:"os",defaultValue:"macos",values:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python3 -m pip install --upgrade pip setuptools wheel\n"))),Object(l.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip install --upgrade pip setuptools wheel\n"))),Object(l.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python3 -m pip install --upgrade pip setuptools wheel\n")))),Object(l.b)("p",null,"To install ",Object(l.b)("inlineCode",{parentName:"p"},"pglet")," module run the following command:"),Object(l.b)(r.a,{groupId:"os",defaultValue:"macos",values:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python3 -m pip install pglet\n"))),Object(l.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pip install pglet\n"))),Object(l.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python3 -m pip install pglet\n")))),Object(l.b)("h2",{id:"creating-a-page"},"Creating a page"),Object(l.b)("p",null,"Pglet allows you creating ",Object(l.b)("strong",{parentName:"p"},"shared")," and ",Object(l.b)("strong",{parentName:"p"},"app")," pages."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Shared page")," is like a singleton: many programs can connect and author the same page and all web users connecting to a page see and interact with the same content. Shared pages are useful for developing local tools, web dashboards, progress reports, distributed processes visualization, etc. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"App page"),' creates for each web user a new session with its own content. In your program you define a "handler" method which is invoked for every new session. App pages are used for creating multi-user web apps.'),Object(l.b)("p",null,'OK, this is a minimal "Hello world" Pglet page running in a local mode:'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="hello.py"',title:'"hello.py"'}),'# import pglet main module and Text control\nimport pglet\nfrom pglet import Text\n\n# Create a new page with a random name and open a connection to it\np = pglet.page("hello")\n\n# Add Text control to a page\np.add(Text(value="Hello, world!"))\n')),Object(l.b)("p",null,"When you run this app a new browser window should popup with the greeting:"),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("img",{src:"/img/docs/quickstart-hello-world.png"})),Object(l.b)("p",null,"A Python app won't wait for any input and should exit. Now, if you run the same ",Object(l.b)("inlineCode",{parentName:"p"},"greeter.py"),' script for the second time another "Hello, world!" message will be added to the page. This is because the page is stateful. Its contents can be updated at any time by any number of scripts, multiple scripts can connect and update the same page simultanously.'),Object(l.b)("p",null,"If you need a clean page on every start of the program use connection's ",Object(l.b)("inlineCode",{parentName:"p"},"clean()")," method:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'p.clean()\np.add(Text(value="Hello, world!"))\n')),Object(l.b)("h2",{id:"getting-user-input"},"Getting user input"),Object(l.b)("p",null,"Pglet provides a number of controls for building forms: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/textbox"}),"Textbox"),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/checkbox"}),"Checkbox"),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/dropdown"}),"Dropdown"),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/button"}),"Button"),"."),Object(l.b)("p",null,"Let's ask a user for a name:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="greeter.py"',title:'"greeter.py"'}),'import pglet\nfrom pglet import Textbox, Button\n\np = pglet.page("greeter")\n\np.clean()\np.add(Textbox(label="Your name", description="Please provide your full name"))\np.add(Button(text="Say hello", primary=True))\n')),Object(l.b)("h2",{id:"handling-events"},"Handling events"),Object(l.b)("p",null,'When you click "Say hello" button on the form above nothing will happen in our program though ',Object(l.b)("inlineCode",{parentName:"p"},"Button"),' control itself emits "click" event each time it\'s pressed/clicked. The event is just not handled.'),Object(l.b)("p",null,"There are two ways to handle control events:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Event loop"),Object(l.b)("li",{parentName:"ul"},"Control-specific event handlers")),Object(l.b)("h3",{id:"event-loop"},"Event loop"),Object(l.b)("p",null,"Once the form is rendered use connection's ",Object(l.b)("inlineCode",{parentName:"p"},"wait_event()")," blocking method in a loop to receive all page events triggered by a user:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="greeter.py"',title:'"greeter.py"'}),'import pglet\nfrom pglet import Textbox, Button, Text\n\np = pglet.page("greeter")\n\np.clean()\ntxt_name = p.add(Textbox(label="Your name", description="Please provide your full name"))\nbtn_hello = p.add(Button(text="Say hello", primary=True))\n\nwhile True:\n    e = p.wait_event()\n    if e.target == btn_hello.id and e.name == \'click\':\n        name = p.get_value(txt_name)\n        p.clean()\n        p.add(Text(value=f\'Hello, {name}!\'))\n        break\n')),Object(l.b)("p",null,"Notice how references to the added textbox and button are saved, so we can refer to the controls later."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"wait_event()")," returns ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#event-class"}),"Event")," object and we are interested in ",Object(l.b)("inlineCode",{parentName:"p"},"click")," events coming from the button (",Object(l.b)("inlineCode",{parentName:"p"},"e.target")," is control ID). Next, we use connection's ",Object(l.b)("inlineCode",{parentName:"p"},"get_value()")," method to read ",Object(l.b)("inlineCode",{parentName:"p"},"value")," property of textbox control, clean the page, output greeting and leave the program."),Object(l.b)("h3",{id:"event-handlers"},"Event handlers"),Object(l.b)("p",null,"Event loop approach is simple and straightforward, but can become bulky if there is a lot of events to handle. In Python programs Pglet controls can have event handlers which are just functions. Control Python classes use ",Object(l.b)("inlineCode",{parentName:"p"},"on")," prefix for naming event handlers. For example, if ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/controls/button"}),"Button")," control has ",Object(l.b)("inlineCode",{parentName:"p"},"click")," event then in Python handler's name is ",Object(l.b)("inlineCode",{parentName:"p"},"onclick"),"."),Object(l.b)("p",null,"Let's re-write the greeter app to use event handler instead of event loop:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="greeter.py"',title:'"greeter.py"'}),'import sys\nimport pglet\nfrom pglet import Textbox, Button, Text\n\np = pglet.page("greeter")\np.clean()\n\ndef say_hello_click(e):\n    name = p.get_value(txt_name)\n    p.clean()\n    p.add(Text(value=f\'Hello, {name}!\'))\n    sys.exit()\n\ntxt_name = p.add(Textbox(label="Your name", description="Please provide your full name"))\np.add(Button(text="Say hello", primary=True, onclick=say_hello_click))\n\n# wait until browser window is closed or page reloaded\np.wait_close()\n')),Object(l.b)("h2",{id:"multi-user-apps"},"Multi-user apps"),Object(l.b)("p",null,"In multi-user Pglet apps every user has a unique session with its own page contents. To start an app page you use ",Object(l.b)("inlineCode",{parentName:"p"},"pglet.app()")," method which takes a reference to a session handler function. The handler function is called on a separate thread for every new user connected. The program stays blocked on ",Object(l.b)("inlineCode",{parentName:"p"},"pglet.app()")," while constantly waiting for new user connections."),Object(l.b)("p",null,"One of the aspects of multi-user apps you should care about is state management: session-specific variables and control references at minimum."),Object(l.b)("p",null,"In the example below we are going to use Python class to encapsulate user session state and logic. This could be a minimal Pglet multi-user app in Python:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="hello-app.py"',title:'"hello-app.py"'}),'import pglet\nfrom pglet import Text\n\nclass HelloWorldApp:\n    def __init__(self, p):\n        self.p = p\n        self.main()\n    \n    def main(self):\n        self.p.add(Text(value=f"Hello to session {self.p.conn_id}!"))\n\npglet.app("hello-app", target=HelloWorldApp)\n')),Object(l.b)("p",null,"We pass a reference to a ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorldApp")," class constructor as a ",Object(l.b)("inlineCode",{parentName:"p"},"target")," in ",Object(l.b)("inlineCode",{parentName:"p"},"pglet.app")," call. Every time a new user visits app URL ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorldApp")," constructor is called with connection ",Object(l.b)("inlineCode",{parentName:"p"},"p")," as a parameter and a new class instance created. In the constructor we save a reference to ",Object(l.b)("inlineCode",{parentName:"p"},"p")," for further work with session-specific page content and call ",Object(l.b)("inlineCode",{parentName:"p"},"main()")," method to output initial screen."),Object(l.b)("p",null,"Now, a multi-user version of greeter app could look like the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="greeter-app.py"',title:'"greeter-app.py"'}),'import pglet\nfrom pglet import Textbox, Button, Text\n\nclass GreeterApp:\n    def __init__(self, p):\n        self.p = p\n        self.main()\n    \n    def main(self):\n        self.txt_name = self.p.add(Textbox(label="Your name", description="Please provide your full name"))\n        self.p.add(Button(text="Say hello", primary=True, onclick=self.say_hello_click))\n\n    def say_hello_click(self, e):\n        name = self.p.get_value(self.txt_name)\n        self.p.clean()\n        self.p.add(Text(value=f\'Hello, {name}!\'))\n\npglet.app("greeter-app", target=GreeterApp)\n')),Object(l.b)("h2",{id:"getting-apps-and-pages-to-the-web"},"Getting apps and pages to the Web"),Object(l.b)("p",null,"Up until this moment you've been running all tutotial samples on your computer with a local Pglet server instance running in the background."),Object(l.b)("p",null,"With literarily no changes to the code Pglet allows to make your program accessible from the web. This could be an admin app for managing backend services, or a dashboard with server metrics, or an application prototype you are sharing with your colleagues or clients."),Object(l.b)("p",null,'In contrast to a classic deployment you are not packaging your program and it\'s not going anywhere. It continues to run on the same computer where it was built or cloned while UI is "streamed" to ',Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"Pglet service")," and available via ",Object(l.b)("inlineCode",{parentName:"p"},"https://app.pglet.io/public/{your-app-name}")," URL."),Object(l.b)("p",null,"So, to make your greeter app available on the web add ",Object(l.b)("inlineCode",{parentName:"p"},"web=True")," parameter to either ",Object(l.b)("inlineCode",{parentName:"p"},"pglet.page()")," or ",Object(l.b)("inlineCode",{parentName:"p"},"pglet.app()")," call:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'pglet.app("greeter-app", target=GreeterApp, web=True)\n')),Object(l.b)("p",null,'As it\'s going to a public service the page name must be unique. One way is to prepend page name with "account" or "namespace", for example:'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'pglet.app("john/greeter-app", target=GreeterApp, web=True)\n')),Object(l.b)("p",null,"or just omit page name, so it will be randomly generated. Look at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pglet-service"}),"this article")," to understand how page naming works."),Object(l.b)("h2",{id:"pglet-module-reference"},Object(l.b)("inlineCode",{parentName:"h2"},"pglet")," module reference"),Object(l.b)("h3",{id:"page-function"},Object(l.b)("inlineCode",{parentName:"h3"},"page")," function"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pglet.page(name='', web=False, private=False, server='', token='', no_window=False)")),Object(l.b)("p",null,"Creates a shared page if not exists and returns a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#connection-class"}),"connection")," to it."),Object(l.b)("p",null,"The following example creates a new page with random name and connects to it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import pglet\nfrom pglet import Text\n\npage = pglet.page()\npage.add(Text(value="Hello, world!"))\n')),Object(l.b)("h3",{id:"app-function"},Object(l.b)("inlineCode",{parentName:"h3"},"app")," function"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pglet.app(name='', web=False, private=False, server='', token='', target=None, no_window=False)")),Object(l.b)("p",null,"Creates an app page with a session handler function defined by ",Object(l.b)("inlineCode",{parentName:"p"},"target")," parameter and starts waiting for new user connections.\nHandler function is called for every new session with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#connection-class"}),"connection")," passed into handler."),Object(l.b)("p",null,"In the following example ",Object(l.b)("inlineCode",{parentName:"p"},"main")," function is called for every new user session and ",Object(l.b)("inlineCode",{parentName:"p"},"page")," argument is an instance of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#connection-class"}),Object(l.b)("inlineCode",{parentName:"a"},"Connection"))," class."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def main(page):\n  page.add(Text(value="Hello, world!"))\n\npglet.app("app1", web=True, target=main)\n')),Object(l.b)("h3",{id:"connection-class"},Object(l.b)("inlineCode",{parentName:"h3"},"Connection")," class"),Object(l.b)("p",null,"Represents a connection to a page or session. ",Object(l.b)("inlineCode",{parentName:"p"},"Connection")," provides methods for adding, modifying, querying and removing controls on a web page."),Object(l.b)("h4",{id:"addcontrols-tonone-atnone-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"add(*controls, to=None, at=None, fire_and_forget=False)")),Object(l.b)("p",null,"Add one or more controls to a page."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"controls")," is one or more instances of ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#control-classes"}),"Control class"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"to")," is ID of the parent control. If ",Object(l.b)("inlineCode",{parentName:"li"},"to")," is not specified a control is added to a ",Object(l.b)("inlineCode",{parentName:"li"},"page"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"at")," allows inserting control into parent's children collection at specific index. If ",Object(l.b)("inlineCode",{parentName:"li"},"at")," is not specified a control is appended to children collection."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fire_and_forget")," ignores the result of operation.")),Object(l.b)("p",null,"For example, inserting a text control at the top of stack control with ",Object(l.b)("inlineCode",{parentName:"p"},"body")," ID:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'page.add(Text(value="1st line"), to="body", at=0)\n')),Object(l.b)("h4",{id:"updatecontrols-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"update(*controls, fire_and_forget=False)")),Object(l.b)("p",null,"Update one or more controls."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"controls")," is one or more instances of ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#control-classes"}),"Control class"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fire_and_forget")," ignores the result of operation.")),Object(l.b)("p",null,"For example, adding and then updating a text control:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# add Text control\ntxt = Text(value="One!")\npage.add(txt)\n\n# update control\ntxt.value = "Two!"\npage.update(txt)\n')),Object(l.b)("h4",{id:"set_valueid_or_control-value-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"set_value(id_or_control, value, fire_and_forget=False)")),Object(l.b)("p",null,"Shortcut method to update ",Object(l.b)("inlineCode",{parentName:"p"},"value")," property of any control."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id_or_control")," is either control ID or an instances of ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#control-classes"}),"Control class"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value")," is a new value to set."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fire_and_forget")," ignores the result of operation.")),Object(l.b)("p",null,"For example, updating the current value of progress bar with ID ",Object(l.b)("inlineCode",{parentName:"p"},"prog1")," to 50%:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"page.set_value('prog1', 50)\n")),Object(l.b)("h4",{id:"get_valueid_or_control"},Object(l.b)("inlineCode",{parentName:"h4"},"get_value(id_or_control)")),Object(l.b)("p",null,"Shortcut method to read ",Object(l.b)("inlineCode",{parentName:"p"},"value")," property of any control."),Object(l.b)("p",null,"For example, reading the value entered into ",Object(l.b)("inlineCode",{parentName:"p"},"first_name")," textbox:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"first_name = page.get_value('first_name')\n")),Object(l.b)("h4",{id:"append_valueid_or_control-value-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"append_value(id_or_control, value, fire_and_forget=False)")),Object(l.b)("p",null,"Appends a string to ",Object(l.b)("inlineCode",{parentName:"p"},"value")," property of any control."),Object(l.b)("p",null,"For example, appending a new line to a multiline textbox with ID ",Object(l.b)("inlineCode",{parentName:"p"},"notes"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'page.append("notes", "\\nLine2")\n')),Object(l.b)("h4",{id:"showid_or_controls-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"show(*id_or_controls, fire_and_forget=False)")),Object(l.b)("p",null,"Shortcut method to set control's ",Object(l.b)("inlineCode",{parentName:"p"},"visible")," property to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("h4",{id:"hideid_or_controls-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"hide(*id_or_controls, fire_and_forget=False)")),Object(l.b)("p",null,"Shortcut method to set control's ",Object(l.b)("inlineCode",{parentName:"p"},"visible")," property to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("h4",{id:"disableid_or_controls-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"disable(*id_or_controls, fire_and_forget=False)")),Object(l.b)("p",null,"Shortcut method to set control's ",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," property to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),". By default, all controls are enabled.\n",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," property is recursive meaning you can disable parent control to disable all its children."),Object(l.b)("p",null,"For example, you may have a stack with two buttons and then while performing some operation you may disable both buttons by disabling a stack:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'footer = Stack(horizontal=True, controls=[\n  Button(text="OK", primary=True),\n  Button(text="Cancel")\n])\npage.add(footer)\n\n# on click to OK\npage.disable(footer) # disable stack and all its buttons\n')),Object(l.b)("h4",{id:"enableid_or_controls-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"enable(*id_or_controls, fire_and_forget=False)")),Object(l.b)("p",null,"Shortcut method to set control's ",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," property to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",{id:"cleanid_or_controls-atnone-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"clean(*id_or_controls, at=None, fire_and_forget=False)")),Object(l.b)("p",null,"Cleans children collection of a control, but leaves control itself."),Object(l.b)("p",null,"For example, to clean the contents of the entire page:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"page.clean()\n")),Object(l.b)("h4",{id:"removeid_or_controls-atnone-fire_and_forgetfalse"},Object(l.b)("inlineCode",{parentName:"h4"},"remove(*id_or_controls, at=None, fire_and_forget=False)")),Object(l.b)("p",null,"Removes a control and all its children."),Object(l.b)("h4",{id:"sendcommand"},Object(l.b)("inlineCode",{parentName:"h4"},"send(command)")),Object(l.b)("p",null,"Sends a raw command to Pglet server via ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/protocol"}),"Pglet protocol"),".\nThis method is useful when something is not yet implemented in Python library."),Object(l.b)("p",null,"For example, to update ",Object(l.b)("inlineCode",{parentName:"p"},"errorMessage")," property of textbox with ID ",Object(l.b)("inlineCode",{parentName:"p"},"number"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"page.send(\"set number errorMessage='Some error message'\")\n")),Object(l.b)("h4",{id:"wait_event"},Object(l.b)("inlineCode",{parentName:"h4"},"wait_event()")),Object(l.b)("p",null,"Blocks until an event triggered by a user arrives. The method returns an instance of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#event-class"}),"Event")," class."),Object(l.b)("p",null,"For example, reading events in a loop until any button clicked:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"while True:\n    e = page.wait_event()\n    if e.name == 'click':\n        break\n")),Object(l.b)("h4",{id:"wait_close"},Object(l.b)("inlineCode",{parentName:"h4"},"wait_close()")),Object(l.b)("p",null,"Blocks until browser window is closed or page reloaded."),Object(l.b)("h3",{id:"event-class"},Object(l.b)("inlineCode",{parentName:"h3"},"Event")," class"),Object(l.b)("p",null,"Describes the details of event returned by ",Object(l.b)("inlineCode",{parentName:"p"},"wait_event()")," method and has the following properties:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"target")," - ID of control triggered event."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"name"),' - event name, for example "click".'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data")," - additional data attached to the event. Button control has ",Object(l.b)("inlineCode",{parentName:"li"},"data")," property which supplies additional event data.")),Object(l.b)("h3",{id:"control-classes"},"Control classes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/page"}),Object(l.b)("inlineCode",{parentName:"a"},"Page"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/stack"}),Object(l.b)("inlineCode",{parentName:"a"},"Stack"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/text"}),Object(l.b)("inlineCode",{parentName:"a"},"Text"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/textbox"}),Object(l.b)("inlineCode",{parentName:"a"},"Textbox"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/button"}),Object(l.b)("inlineCode",{parentName:"a"},"Button"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/checkbox"}),Object(l.b)("inlineCode",{parentName:"a"},"Checkbox"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/dropdown"}),Object(l.b)("inlineCode",{parentName:"a"},"Dropdown"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/progress"}),Object(l.b)("inlineCode",{parentName:"a"},"Progress"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/controls/spinner"}),Object(l.b)("inlineCode",{parentName:"a"},"Spinner")))))}d.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||l;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},118:function(e,t,n){"use strict";var a=n(0),o=n(119);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},121:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(118),r=n(117),i=n(53),c=n.n(i),p=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,s=e.values,d=e.groupId,u=e.className,m=Object(l.a)(),g=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(i),h=j[0],f=j[1],N=a.Children.toArray(e.children);if(null!=d){var v=g[d];null!=v&&v!==h&&s.some((function(e){return e.value===v}))&&f(v)}var y=function(e){f(e),null!=d&&O(d,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},s.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},122:function(e,t,n){"use strict";var a=n(3),o=n(0),l=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);