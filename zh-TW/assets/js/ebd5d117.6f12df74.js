"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8185],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||n;return r?o.createElement(m,l(l({ref:t},p),{},{components:r})):o.createElement(m,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const n={title:"How to collect AdGuard logs",sidebar_position:3},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/adguard-logs",id:"adguard-for-windows/solving-problems/adguard-logs",title:"How to collect AdGuard logs",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/adguard-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/adguard-logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/adguard-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/adguard-logs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to collect AdGuard logs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Certificate-related issues",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/connection-not-trusted"},next:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/zh-TW/adguard-for-windows/solving-problems/installation-logs"}},s={},d=[{value:"Trace logs",id:"trace-logs",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("p",null,"To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occurr with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the AdGuard settings. Go to the ",(0,a.kt)("em",{parentName:"p"},"General Settings")," section, scroll down to the end of the screen and switch the ",(0,a.kt)("em",{parentName:"p"},"Logging Level")," to ",(0,a.kt)("em",{parentName:"p"},"Debug"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png",alt:"Debug logging level *border"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reproduce the issue."),(0,a.kt)("p",{parentName:"li"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Export the recorded logs using the ",(0,a.kt)("em",{parentName:"p"},"Export Logs")," button."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,a.kt)("p",{parentName:"li"},"Save the archive to any folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Important"),": after exporting the logs, set the logging level back to ",(0,a.kt)("em",{parentName:"p"},"Standard"),". ",(0,a.kt)("em",{parentName:"p"},"Debug")," logging level will slow down the application.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send the archive to the AdGuard support service at ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),", describe the problem and don't forget to mention the time when you reproduced the issue."))),(0,a.kt)("h3",{id:"trace-logs"},"Trace logs"),(0,a.kt)("p",null,"Sometimes support team members may ask you to send ",(0,a.kt)("em",{parentName:"p"},"trace")," logs. Then you will need to do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing ",(0,a.kt)("em",{parentName:"p"},"Exit AdGuard"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png",alt:"Exit AdGuard *mobile"})),(0,a.kt)("p",{parentName:"li"},"Please don't leave the service running:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png",alt:"Stop AdGuard Service *mobile_border"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the console (type ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," in the start panel).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the app with the command ",(0,a.kt)("inlineCode",{parentName:"p"},'C:\\"Program Files (x86)"\\Adguard\\Adguard.exe /trace')," if you are using 64-bit Windows, and ",(0,a.kt)("inlineCode",{parentName:"p"},'C:\\"Program Files"\\Adguard\\Adguard.exe /trace')," in case if you use 32-bit one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reproduce the issue."),(0,a.kt)("p",{parentName:"li"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Export the recorded logs using the ",(0,a.kt)("em",{parentName:"p"},"Export Logs")," button."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,a.kt)("p",{parentName:"li"},"Don't worry if the log file is large. We need to know as much detail as possible to fix your problem."))))}c.isMDXComponent=!0}}]);