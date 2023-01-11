"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5275],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(4137));const a={title:"Known compatibility issues with Android apps",sidebar_position:14},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/compatibility-issues",id:"adguard-for-android/solving-problems/compatibility-issues",title:"Known compatibility issues with Android apps",description:"VPN apps",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/compatibility-issues.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/compatibility-issues",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/compatibility-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/compatibility-issues.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Known compatibility issues with Android apps",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Problems caused by multiple user profiles",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/multiple-profiles-issue"},next:{title:"How to use Samsung Pay with AdGuard in South Korea",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"}},l={},p=[{value:"VPN apps",id:"vpn-apps",level:3},{value:"Private DNS",id:"private-dns",level:3},{value:"Unsupported browsers",id:"unsupported-browsers",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"vpn-apps"},"VPN apps"),(0,n.kt)("p",null,"Other VPN apps are incompatible with AdGuard running in the Local VPN filtering mode since you cannot have two active VPNs at the same time. To solve this problem we suggest you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"use ",(0,n.kt)("a",{parentName:"li",href:"https://adguard-vpn.com/welcome.html"},"AdGuard VPN")," \u2014 it has Integrated mode that allows two apps to operate seamlessly"),(0,n.kt)("li",{parentName:"ul"},"use AdGuard in Local HTTP Proxy mode. ",(0,n.kt)("em",{parentName:"li"},"Please note that 'manual' HTTP Proxy mode is not supported on devices since Android 10")),(0,n.kt)("li",{parentName:"ul"},"if you use a third-party VPN app, figure out whether it supports SOCKS4/SOCKS5 mode. If it does, you can configure your VPN app to work as outbound proxy and set up local outbound proxy with params from the third-party app. For instance, AdGuard can be automatically configured with 'Orbot: Proxy with Tor'")),(0,n.kt)("h3",{id:"private-dns"},"Private DNS"),(0,n.kt)("p",null,"The Private DNS feature was introduced in Android Pie. Before version Q, Private DNS didn't break AdGuard DNS filtering logic and the DNS forwarding through AdGuard worked normally. But starting from version Q, the presence of Private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android ",(0,n.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html"},"devs blog")," for more details."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a ",(0,n.kt)("inlineCode",{parentName:"p"},"$network")," rule. For instance, if the system uses Google DNS by default, we can add rules ",(0,n.kt)("inlineCode",{parentName:"p"},"|8.8.4.4^$network")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"|8.8.8.8^$network")," to block Google DNS.")),(0,n.kt)("h3",{id:"unsupported-browsers"},"Unsupported browsers"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"UC Browsers"),": UC Browser, UC Browser for x86, UC Mini, UC Browser HD")),(0,n.kt)("p",null,"To be able to filter HTTPS traffic, AdGuard requires the user to install a certificate into the device's trusted user certificates. Unfortunately, UC-family browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Requires root access"),". To solve this problem, move the certificate to the system certificates store."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Opera mini"),": Opera mini, Opera mini with Yandex")),(0,n.kt)("p",null,"Opera mini drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,"There is no solution at this moment."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Dolphin Browser"),": Dolphin Browser, Dolphin Browser Express")),(0,n.kt)("p",null,"AdGuard cannot filter its traffic when operating in ",(0,n.kt)("strong",{parentName:"p"},"Manual proxy mode")," because this browser ignores system proxy settings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,"Use ",(0,n.kt)("em",{parentName:"p"},"Local VPN")," filtering mode."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Puffin Browser"),": Puffin Browser, Puffin Browser Pro")),(0,n.kt)("p",null,"Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,"There is no solution at this moment."))}u.isMDXComponent=!0}}]);