"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1106],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"Possible DNS leaks",sidebar_position:9},s=void 0,i={unversionedId:"adguard-for-windows/solving-problems/dns-leaks",id:"adguard-for-windows/solving-problems/dns-leaks",title:"Possible DNS leaks",description:"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dns-leaks.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dns-leaks",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Possible DNS leaks",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to create a dump file",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/dump-file"},next:{title:"Known issues of AdGuard for Windows",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/known-issues"}},l={},d=[{value:"Bootstrap DNS address",id:"bootstrap-dns-address",level:2},{value:"Fallback DNS server",id:"fallback-dns-server",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"AdGuard for Windows allows users to specify a DNS server address to resolve queries instead of system DNS server, which is provided by your ISP if not overridden in the system settings. Using a non-default DNS server can safeguard your DNS traffic from the ISP\u2019s interception. Moreover, by choosing an encrypted and/or filtering DNS server, you get another layer of protection against bad actors and annoying ads."),(0,n.kt)("p",null,"Many AdGuard for Windows users appreciate the DNS protection feature. But some of them encounter the following issue: a check on a website like ",(0,n.kt)("a",{parentName:"p",href:"https://ipleak.net/"},"https://ipleak.net/")," shows that requests are handled by default DNS server instead of the selected one. In this article we will tell you why this happens and how to avoid it."),(0,n.kt)("h2",{id:"bootstrap-dns-address"},"Bootstrap DNS address"),(0,n.kt)("p",null,"The DNS server addresses could be written as IPs or as domain names. In the case of IP addresses there are no difficulties: AdGuard forwards the DNS request directly to the server specified in the DNS protection module. However, encrypted DNS server addresses, like DoT or DoH, are most often written as domain names. In this case, to first resolve the encrypted DNS server address, AdGuard sends a DNS query to the bootstrap address, which is by default a system DNS server. This connection is what check services perceive as a leak."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To eliminate this leak:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go to the ",(0,n.kt)("em",{parentName:"li"},"Advanced settings")),(0,n.kt)("li",{parentName:"ul"},"scroll down to the ",(0,n.kt)("em",{parentName:"li"},"List of custom bootstrap addresses")," section"),(0,n.kt)("li",{parentName:"ul"},"enter the custom bootstrap address in IP address format (you may use ",(0,n.kt)("a",{parentName:"li",href:"https://adguard-dns.io/kb/general/dns-providers/"},"the list of known DNS providers"),")"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("em",{parentName:"li"},"Save"))),(0,n.kt)("h2",{id:"fallback-dns-server"},"Fallback DNS server"),(0,n.kt)("p",null,"It could happen that AdGuard cannot reach the specified server because of a weak internet connection, an expiration of timeout set by default or some server related issues. In this case, it will connect to the fallback server, which is by default a system DNS server. This connection will also be considered by the check service as a leak."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To eliminate this leak:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go to the ",(0,n.kt)("em",{parentName:"li"},"Advanced settings")),(0,n.kt)("li",{parentName:"ul"},"scroll down to the ",(0,n.kt)("em",{parentName:"li"},"Fallback servers")," section"),(0,n.kt)("li",{parentName:"ul"},"check the ",(0,n.kt)("em",{parentName:"li"},"Use custom servers")," option"),(0,n.kt)("li",{parentName:"ul"},"then find the ",(0,n.kt)("em",{parentName:"li"},"List of custom fallback servers")," section and enter custom fallback servers one per line")),(0,n.kt)("p",null,"or"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go to the ",(0,n.kt)("em",{parentName:"li"},"Advanced settings")),(0,n.kt)("li",{parentName:"ul"},"scroll down to the ",(0,n.kt)("em",{parentName:"li"},"Fallback servers")," section"),(0,n.kt)("li",{parentName:"ul"},"check the ",(0,n.kt)("em",{parentName:"li"},"Don\u2019t use fallback servers")," option")),(0,n.kt)("p",null,"or"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"go to the ",(0,n.kt)("em",{parentName:"li"},"Advanced settings")),(0,n.kt)("li",{parentName:"ul"},"scroll down to the ",(0,n.kt)("em",{parentName:"li"},"DNS server timeout period")," section"),(0,n.kt)("li",{parentName:"ul"},"enter an arbitrary large number")))}u.isMDXComponent=!0}}]);