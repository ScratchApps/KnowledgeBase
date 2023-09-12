"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3398],{4137:(e,n,o)=>{o.d(n,{Zo:()=>v,kt:()=>k});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},v=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,v=i(e,["components","mdxType","originalType","parentName"]),d=p(o),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return o?t.createElement(m,l(l({ref:n},v),{},{components:o})):t.createElement(m,l({ref:n},v))}));function k(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5839:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=o(7462),a=(o(7294),o(4137));const r={title:"Pr\u016fvodce n\xedzko\xfarov\u0148ov\xfdch nastaven\xed",sidebar_position:5},l=void 0,i={unversionedId:"adguard-for-ios/solving-problems/low-level-settings",id:"adguard-for-ios/solving-problems/low-level-settings",title:"Pr\u016fvodce n\xedzko\xfarov\u0148ov\xfdch nastaven\xed",description:"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/low-level-settings",permalink:"/KnowledgeBase/cs/adguard-for-ios/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Pr\u016fvodce n\xedzko\xfarov\u0148ov\xfdch nastaven\xed",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Jak blokovat reklamy YouTube v Safari",permalink:"/KnowledgeBase/cs/adguard-for-ios/solving-problems/block-youtube-ads"},next:{title:"P\u0159ehled funkc\xed",permalink:"/KnowledgeBase/cs/adguard-browser-extension/overview"}},s={},p=[{value:"Jak dos\xe1hnout n\xedzko\xfarov\u0148ov\xfdch nastaven\xed",id:"jak-dos\xe1hnout-n\xedzko\xfarov\u0148ov\xfdch-nastaven\xed",level:2},{value:"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed",id:"n\xedzko\xfarov\u0148ov\xe1-nastaven\xed",level:2},{value:"Re\u017eim Tunel",id:"re\u017eim-tunel",level:3},{value:"Re\u017eim blokov\xe1n\xed",id:"re\u017eim-blokov\xe1n\xed",level:3},{value:"Blokov\xe1n\xed IPv6",id:"blokov\xe1n\xed-ipv6",level:3},{value:"Blokovan\xe1 odezva TTL",id:"blokovan\xe1-odezva-ttl",level:3},{value:"Bootstrap servery",id:"bootstrap-servery",level:3},{value:"Z\xe1lo\u017en\xed server",id:"z\xe1lo\u017en\xed-server",level:3},{value:"Doba obnoven\xed aplikace na pozad\xed",id:"doba-obnoven\xed-aplikace-na-pozad\xed",level:3}],v={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},v,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,a.kt)("h2",{id:"jak-dos\xe1hnout-n\xedzko\xfarov\u0148ov\xfdch-nastaven\xed"},"Jak dos\xe1hnout n\xedzko\xfarov\u0148ov\xfdch nastaven\xed"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Zm\u011bna ",(0,a.kt)("em",{parentName:"p"},"N\xedzko\xfarov\u0148ov\xfdch nastaven\xed")," m\u016f\u017ee zp\u016fsobit probl\xe9my s v\xfdkonem AdGuardu, m\u016f\u017ee p\u0159eru\u0161it internetov\xe9 p\u0159ipojen\xed nebo ohrozit va\u0161i bezpe\u010dnost a soukrom\xed. Tuto \u010d\xe1st byste m\u011bli otev\u0159\xedt pouze v p\u0159\xedpad\u011b, \u017ee jste si jisti t\xedm, co d\u011bl\xe1te, nebo pokud se v\xe1s na to zeptal n\xe1\u0161 t\xfdm podpory.")),(0,a.kt)("p",null,"Chcete-li p\u0159ej\xedt na ",(0,a.kt)("em",{parentName:"p"},"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed"),", klepn\u011bte na ikonu ozuben\xe9ho kola v prav\xe9m doln\xedm rohu obrazovky a otev\u0159ete ",(0,a.kt)("em",{parentName:"p"},"Nastaven\xed"),". Vyberte sekci ",(0,a.kt)("em",{parentName:"p"},"Obecn\xe9")," a pot\xe9 p\u0159epn\u011bte p\u0159ep\xedna\u010d ",(0,a.kt)("em",{parentName:"p"},"Pokro\u010dil\xfd re\u017eim"),", pot\xe9 se n\xed\u017ee zobraz\xed sekce ",(0,a.kt)("em",{parentName:"p"},"Pokro\u010dil\xe1 nastaven\xed"),". Klepnut\xedm na ",(0,a.kt)("em",{parentName:"p"},"Pokro\u010dil\xe1 nastaven\xed")," p\u0159ejd\u011bte do \u010d\xe1sti ",(0,a.kt)("em",{parentName:"p"},"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed"),"."),(0,a.kt)("h2",{id:"n\xedzko\xfarov\u0148ov\xe1-nastaven\xed"},"N\xedzko\xfarov\u0148ov\xe1 nastaven\xed"),(0,a.kt)("h3",{id:"re\u017eim-tunel"},"Re\u017eim Tunel"),(0,a.kt)("p",null,"Existuj\xed dva hlavn\xed re\u017eimy tunelu: ",(0,a.kt)("em",{parentName:"p"},"D\u011blen\xfd")," a ",(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd"),". Re\u017eim ",(0,a.kt)("em",{parentName:"p"},"D\u011blen\xfd tunel"),' poskytuje kompatibilitu aplikac\xed AdGuard a takzvan\xfdch "Osobn\xedch VPN". V re\u017eimu ',(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd tunel")," nem\u016f\u017ee \u017e\xe1dn\xe1 jin\xe1 VPN pracovat sou\u010dasn\u011b s AdGuardem."),(0,a.kt)("p",null,"Existuje specifick\xe1 funkce re\u017eimu ",(0,a.kt)("em",{parentName:"p"},"D\u011blen\xfd tunel"),': pokud proxy server DNS nefunguje dob\u0159e, nap\u0159\xedklad pokud se odpov\u011b\u010f ze serveru AdGuard DNS nevr\xe1tila v\u010das, syst\xe9m iOS jej "zneplatn\xed" a p\u0159esm\u011bruje provoz p\u0159es server DNS zadan\xfd v nastaven\xed syst\xe9mu iOS. V tuto chv\xedli nejsou blokov\xe1ny \u017e\xe1dn\xe9 reklamy a provoz DNS nen\xed \u0161ifrov\xe1n.'),(0,a.kt)("p",null,"V re\u017eimu ",(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd tunel")," se pou\u017e\xedv\xe1 pouze server DNS zadan\xfd v nastaven\xed AdGuardu. Pokud neodpov\xedd\xe1, internet jednodu\u0161e nefunguje. Zapnut\xfd re\u017eim ",(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd tunel")," m\u016f\u017ee zp\u016fsobit nespr\xe1vn\xfd v\xfdkon n\u011bkter\xfdch program\u016f (nap\u0159\xedklad FaceTime) a v\xe9st k probl\xe9m\u016fm s aktualizacemi aplikac\xed."),(0,a.kt)("p",null,"Ve v\xfdchoz\xedm nastaven\xed pou\u017e\xedv\xe1 AdGuard re\u017eim ",(0,a.kt)("em",{parentName:"p"},"D\u011blen\xfd tunel")," jako nejstabiln\u011bj\u0161\xed mo\u017enost."),(0,a.kt)("p",null,"K dispozici je tak\xe9 dal\u0161\xed re\u017eim nazvan\xfd ",(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd tunel (bez ikony VPN)"),". Tento re\u017eim je naprosto stejn\xfd jako re\u017eim ",(0,a.kt)("em",{parentName:"p"},"\xdapln\xfd tunel"),", ale je nastaven tak, \u017ee se v syst\xe9mov\xe9m \u0159\xe1dku nezobrazuje ikona VPN."),(0,a.kt)("h3",{id:"re\u017eim-blokov\xe1n\xed"},"Re\u017eim blokov\xe1n\xed"),(0,a.kt)("p",null,"V tomto modulu m\u016f\u017eete vybrat zp\u016fsob, jak\xfdm bude AdGuard reagovat na dotazy DNS, kter\xe9 maj\xed b\xfdt blokov\xe1ny: REFUSED \u2014 odezva s k\xf3dem REFUSED NXDOMAIN \u2014 odezva s k\xf3dem NXDOMAIN Unspecified IP \u2014 odezva s nulovou IP adresou Custom IP \u2014 odezva s ru\u010dn\u011b nastavenou IP adresou"),(0,a.kt)("h3",{id:"blokov\xe1n\xed-ipv6"},"Blokov\xe1n\xed IPv6"),(0,a.kt)("p",null,"Posunut\xedm p\u0159ep\xedna\u010de doprava zapnete blokov\xe1n\xed dotaz\u016f IPv6 (po\u017eadavky AAAA)."),(0,a.kt)("h3",{id:"blokovan\xe1-odezva-ttl"},"Blokovan\xe1 odezva TTL"),(0,a.kt)("p",null,"Zde m\u016f\u017eete zadat hodnotu TTL (time to live), kter\xe1 bude vr\xe1cena jako odpov\u011b\u010f na zablokovan\xfd po\u017eadavek."),(0,a.kt)("h3",{id:"bootstrap-servery"},"Bootstrap servery"),(0,a.kt)("p",null,"Pro DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC je vy\u017eadov\xe1n bootstrap server pro z\xedsk\xe1n\xed IP adresy hlavn\xedho serveru DNS. Pokud nen\xed zad\xe1n, pou\u017eije se jako bootstrap server DNS server z nastaven\xed syst\xe9mu iOS."),(0,a.kt)("h3",{id:"z\xe1lo\u017en\xed-server"},"Z\xe1lo\u017en\xed server"),(0,a.kt)("p",null,"Zde m\u016f\u017eete zadat alternativn\xed server, na kter\xfd bude po\u017eadavek p\u0159esm\u011brov\xe1n, pokud hlavn\xed server neodpov\xed. Pokud nen\xed zad\xe1n, pou\u017eije se jako z\xe1lo\u017en\xed server syst\xe9mov\xfd DNS server. Je tak\xe9 mo\u017en\xe9 zadat ",(0,a.kt)("inlineCode",{parentName:"p"},"\u017e\xe1dn\xfd"),", v tomto p\u0159\xedpad\u011b nebude nastaven \u017e\xe1dn\xfd z\xe1lo\u017en\xed server a bude pou\u017eit pouze hlavn\xed DNS server."),(0,a.kt)("h3",{id:"doba-obnoven\xed-aplikace-na-pozad\xed"},"Doba obnoven\xed aplikace na pozad\xed"),(0,a.kt)("p",null,"Zde m\u016f\u017eete vybrat frekvenci, s jakou bude aplikace na pozad\xed kontrolovat aktualizace filtr\u016f. V\u0161imn\u011bte si, \u017ee kontroly aktualizac\xed nebudou prov\xe1d\u011bny \u010dast\u011bji ne\u017e v zadan\xe9 period\u011b, ale p\u0159esn\xe9 intervaly nemus\xed b\xfdt dodr\u017eeny."))}u.isMDXComponent=!0}}]);