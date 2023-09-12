"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5299],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const o={title:"How to automate AdGuard for Android",sidebar_position:3},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/tasker",id:"adguard-for-android/solving-problems/tasker",title:"How to automate AdGuard for Android",description:"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, download the AdGuard app",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/tasker.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/tasker",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/tasker",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/tasker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to automate AdGuard for Android",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to collect debug logs",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/log"},next:{title:"How to get system logs",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/logcat"}},l={},d=[{value:"AdGuard interface",id:"adguard-interface",level:2},{value:"Security concerns",id:"security-concerns",level:3},{value:"Available actions",id:"available-actions",level:3},{value:"Execution without notification",id:"execution-without-notification",level:3},{value:"Example",id:"example",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,r.kt)("p",null,"Many people choose Android because they like customizing settings and want to control their device completely. And it's totally normal if some of AdGuard users are not satisfied with its default behavior. Let's say, you want protection to stop when a certain app is launched, and then restart it again when the app is closed. This is a job for the Tasker app."),(0,r.kt)("h2",{id:"adguard-interface"},"AdGuard interface"),(0,r.kt)("p",null,"There are a lot of tasker apps out there, for example ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess"},"Tasker"),", ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess"},"AutomateIt")," etc. AdGuard provides an interface that allows these apps to setup various automation rules."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg",alt:"Automation *mobile_border"})),(0,r.kt)("p",null,'Thanks to this interface, any app can send a special message (called "intent") that contains the name of the action and some additional data, if needed. AdGuard will look at this intent and perform the required actions.'),(0,r.kt)("h3",{id:"security-concerns"},"Security concerns"),(0,r.kt)("p",null,"Wouldn't it be a bit dangerous, you might ask \u2014 to let some random apps manage what AdGuard does? It would, and that's why a password is sent along with the intent. This password will be generated by AdGuard automatically, but you can, of course, change it at any time."),(0,r.kt)("h3",{id:"available-actions"},"Available actions"),(0,r.kt)("p",null,"So, ready to get your hands dirty? Here are actions that, when included in the intent, will be understood by AdGuard:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"start")," starts the protection, no extra data is needed;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stop")," stops the protection, no extra data required;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pause")," pauses the protection. The difference between this and ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," is that a notification will appear that restarts the protection when you tap it. No extra data required;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update")," checks for available filter and app updates, no additional data is needed;"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dns_filtering")," turns DNS filtering on and off. Requires an extra flag:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enable:true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enable:false")," enables or disables DNS filtering, accordingly."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dns_server")," switches between DNS servers, you need to include additional data:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:adguard dns")," switches to AdGuard DNS server;"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The full list of supported provider names can be found inside AdGuard DNS settings under the "Custom DNS settings".')),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:custom")," switches to the previously added server named ",(0,r.kt)("inlineCode",{parentName:"p"},"custom"),";"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:tls://dns.adguard.com")," creates a new server and switches to it if the previously added servers and providers don't contain a server with the same address. Otherwise, it switches to the respective server. You can add server addresses as IP ( regular DNS), ",(0,r.kt)("inlineCode",{parentName:"p"},"sdns://\u2026")," (DNSCrypt or DNS-over-HTTPS), ",(0,r.kt)("inlineCode",{parentName:"p"},"https://\u2026")," (DNS-over-HTTPS) or  ",(0,r.kt)("inlineCode",{parentName:"p"},"tls://...")," (DNS-over-TLS);"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:1.1.1.1, tls://1.1.1.1")," creates a server with comma separated addresses and switches to it. When adding a server via ",(0,r.kt)("inlineCode",{parentName:"p"},"server:1.1.1.1, tls://1.1.1.1"),", the previously added server is removed."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"server:system")," resets DNS settings to default system DNS servers."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_state")," enables/disables the outbound proxy.  Requires an extra flag:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"enable:true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enable:false")," activates or deactivates the outbound proxy, accordingly."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_default")," sets the proxy from the list of previously added ones as default or creates a new one if server has not been added before."),(0,r.kt)("p",null,"You need to specify additional data:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[name]")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," is the name of the outbound proxy from the list."),(0,r.kt)("p",null,"Or you can configure server parameters manually:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[type=\u2026&host=\u2026&port=\u2026&username=\u2026&password=\u2026&udp=\u2026&trust=\u2026]"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_remove")," removes the proxy server from the list of previously added ones."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[name]")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"[name]")," is the name of the outbound proxy from the list."),(0,r.kt)("p",null,"Or you  can configure remove parameters manually:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server:[type=\u2026&host=\u2026&port=\u2026&username=\u2026&password=\u2026&udp=\u2026&trust=\u2026]"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compulsory parameters"),":")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[type]")," \u2014 proxy server type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP;"),(0,r.kt)("li",{parentName:"ul"},"SOCKS4;"),(0,r.kt)("li",{parentName:"ul"},"SOCKS5;"),(0,r.kt)("li",{parentName:"ul"},"HTTPS_CONNECT.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[host]")," \u2014 outbound proxy domain or IP address;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[port]")," \u2014 outbound proxy port (integer number from 1 to 65535);"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional parameters"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[login and password]")," \u2014 only if proxy requires it. This data is ignored when setting up ",(0,r.kt)("strong",{parentName:"p"},"SOCKS4"),";"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[udp]")," applied only on ",(0,r.kt)("strong",{parentName:"p"},"SOCKS5")," server type and include option ",(0,r.kt)("strong",{parentName:"p"},"UDP through SOCKS5"),". It is necessary to set ",(0,r.kt)("strong",{parentName:"p"},"true or false")," value;"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[trust]")," applies for ",(0,r.kt)("strong",{parentName:"p"},"HTTPS_CONNECT")," server type only and include option ",(0,r.kt)("strong",{parentName:"p"},"Trust any certificates"),". It is necessary to set ",(0,r.kt)("strong",{parentName:"p"},"true or false")," value."))),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"setting by name"),": server:MyServer"),(0,r.kt)("p",{parentName:"admonition"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"manually settings"),": server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't forget to include the password as an extra and mention package name and class! You need to do so for every intent!")),(0,r.kt)("p",null,"Extra: ",(0,r.kt)("inlineCode",{parentName:"p"},"password:*******")),(0,r.kt)("p",null,"Package name: ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android")),(0,r.kt)("p",null,"Class: ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receiver.AutomationReceiver")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before v4.0 the class was called ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receivers.AutomationReceiver")," but then we changed its name to ",(0,r.kt)("inlineCode",{parentName:"p"},"com.adguard.android.receiver.AutomationReceiver"),". If you used this feature, please pay attention and use the new name.")),(0,r.kt)("h3",{id:"execution-without-notification"},"Execution without notification"),(0,r.kt)("p",null,"To perform a task without showing a toast, add an additional EXTRA ",(0,r.kt)("inlineCode",{parentName:"p"},"quiet: true")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png",alt:"Automation *mobile"})))}u.isMDXComponent=!0}}]);