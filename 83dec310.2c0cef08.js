(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(96)),l={slug:"introducing-pglet",title:"Introducing Pglet",author:"Feodor Fitsner",author_title:"Pglet founder and developer",author_url:"https://github.com/FeodorFitsner",author_image_url:"https://avatars0.githubusercontent.com/u/5041459?s=400&v=4",tags:["internal apps","pglet","introduction","design"]},i={permalink:"/blog/introducing-pglet",editUrl:"https://github.com/pglet/website/edit/master/blog/2020-10-05-introducing-pglet.md",source:"@site/blog/2020-10-05-introducing-pglet.md",description:'Pglet (pronounced as "pagelet") empowers DevOps to easily add rich user interface into their internal apps and utilities without any knowledge of HTML, CSS and JavaScript.',date:"2020-10-05T00:00:00.000Z",tags:[{label:"internal apps",permalink:"/blog/tags/internal-apps"},{label:"pglet",permalink:"/blog/tags/pglet"},{label:"introduction",permalink:"/blog/tags/introduction"},{label:"design",permalink:"/blog/tags/design"}],title:"Introducing Pglet",readingTime:4.74,truncated:!1},s=[{value:"The problems of internal apps",id:"the-problems-of-internal-apps",children:[]},{value:"Pglet to the rescue",id:"pglet-to-the-rescue",children:[{value:"Highlights",id:"highlights",children:[]}]}],p={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{fontSize:"16pt"}},Object(o.b)("b",null,"Pglet"),' (pronounced as "',Object(o.b)("i",null,"pagelet"),'") empowers DevOps to easily add rich user interface into their internal apps and utilities without any knowledge of HTML, CSS and JavaScript.'),Object(o.b)("h2",{id:"the-problems-of-internal-apps"},"The problems of internal apps"),Object(o.b)("p",null,"Hi, I'm Feodor, the founder of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.appveyor.com"}),"AppVeyor")," - CI/CD service for software developers."),Object(o.b)("p",null,"At AppVeyor, as any other startup, we do a lot of ",Object(o.b)("strong",{parentName:"p"},"internal apps supporting the core business"),". Our users don't see those apps. These could be scripts for processing database data, monitoring dashboards, background apps for housekeeping, scheduled scripts for reporting, backend web apps for account management and billing."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Internal apps need User Interface")," (UI) to present progress/results and grab user input. The simplest form of UI is text console output. Console output can be easily produced from any program or script."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Text output has limitations"),". It could be hard to present complex structures like hierarhies or visualize the progress of multiple concurrent processes (e.g. copying files in parallel). There is no easy way to fill out the form. Plain text cannot be grouped into collapsible areas. ",Object(o.b)("strong",{parentName:"p"},"We need rich UI")," for our internal apps."),Object(o.b)("p",null,'Console output can be logged and studied later or you can sit in front of your computer and stare at log "tail". But we want to be mobile. ',Object(o.b)("strong",{parentName:"p"},"We want to control internal apps from anywhere"),' and any device. We want to share the progress of long-running process with colleagues or send a link to a realt-time dashboard to a manager. Maybe have "Approve" button in the middle of the script to proceed with irreversible actions. We want to collaborate on the results in a real-time. Does it mean we need to build another web app?'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Building web apps is hard"),". Our small team is mostly DevOps. We all do development, deployment and maintenance. ",Object(o.b)("strong",{parentName:"p"},"We are all good in doing backend coding in different languages"),": Bash, PowerShell, Python, C#, TypeScript. However, not every team member is a full-stack developer being able to create a web app. Frontend development is a completely different beast: HTTP, TLS, CGI, HTML, CSS, JavaScript, React, Vue, Angular, Svelte, WebPack and so on. Web development today has a steep learning curve."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Building secure web apps is even harder"),". Internal app works with sensitive company data (databases, keys, credentials, etc.) and presumably hosted in DMZ. You simply can't allow any developer being able to deploy web app with an access to internal resources and available to the whole world."),Object(o.b)("h2",{id:"pglet-to-the-rescue"},"Pglet to the rescue"),Object(o.b)("p",null,"Let's say you are the developer responsible for deployment and maintenance of backend services and database - DevOp. You mostly work with Golang and use Bash or Python for writing scripts and tools. Your team asked you to implement a simple real-time dashboard with some metrics from backend services. Dashboard should be accessible outside your org."),Object(o.b)("p",null,"Should you do a web app? You don't have much experience of writing web apps. Alright, you know the basics of HTML/CSS, you know how to use StackOverflow, but how do you start with the app? Should it be IIS + FastCGI or Flask, plain HTML + jQuery or React, or something else?"),Object(o.b)("p",{style:{fontSize:"16pt"}},"Pglet gives you a ",Object(o.b)("b",null,"page"),", a set of nice-looking ",Object(o.b)("b",null,"controls")," and the ",Object(o.b)("b",null,"API")," to arrange those controls on a page and query their state."),Object(o.b)("p",null,'Pglet is the tool that hosts virtual pages for you. Think of a page as a "canvas", a "hub", an "app" where both your programs and users collaborate. ',Object(o.b)("strong",{parentName:"p"},"Programs use an API to control page contents")," and listen to the events generated by users. ",Object(o.b)("strong",{parentName:"p"},"Users view page"),' in their browsers and continuosly receive real-time page updates. When in- API is just plain-text commands like "add column A", "add text B to column A", "get the value of textbox C", "wait until button D is clicked" - it\'s easy to format/parse strings in any programming language.'),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:"/img/blog/pglet-introduction/pglet-highlevel-design.png"})),Object(o.b)("p",null,"Bash-like pseudo-code for a simple app greeting user by the name could look like the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# create/connect to a page and return its "handle" (named pipe)\n$p = (pglet page connect "myapp")\n\n# display entry form\necho \'add row\' > $p\necho \'add col id=form to=row\' > $p\necho \'add textbox id=yourName to=form\' > $p\necho \'add button id=submit to=form\' > $p\n\n# listen for events coming from a page\nwhile read eventName eventTarget < "$p.events"\ndo\n  # user fills out the form and clicks "submit" button\n  if [[ "$eventTarget" == "submit" && "$eventName" == "click" ]]; then\n\n    # read textbox value\n    echo \'get yourName value\' > $p\n    read $yourName < $p\n\n    # replace forms contents with the greeting\n    echo \'clear form\' > $p\n    echo "add text value=\'Thank you, $yourName!\' to=form" > $p\n  fi\ndone\n')),Object(o.b)("p",null,'You can build a web app in Bash! No HTML, no templates, no spaghetti code. You don\'t need to care about the design of your internal app - you get fully-featured controls with "standard" look-n-feel. What you care about is the time you need to deliver the required functionality.'),Object(o.b)("h3",{id:"highlights"},"Highlights"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Imperatively program UI with commands."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Standard controls"),": layout, data, form. Skins supported."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Fast and simple API")," via named pipes - call from Bash, PowerShell and any other language."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Secure by design"),". Program makes calls to Pglet to update/query UI. Pglet doesn't have access and knows nothing about internal resources located behind the firewall. Pglet keeps no sensitive data such as connection strings, credentials or certificates."),Object(o.b)("li",{parentName:"ul"},"Two types of pages can be hosted:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Shared page"),": multiple programs/scripts can connect to the same page and multiple users can view/interact with the same page."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"App"),": a new session is created for every connected user; multiple programs/scripts can serve user sessions (load-balancing).")))))}c.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(g,i(i({ref:t},p),{},{components:n})):r.a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);