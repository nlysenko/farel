(this.webpackJsonpfarel=this.webpackJsonpfarel||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"header":{"act":"What are we doing?","using":"Using","works":"How it works?","blog":"Blog","contacts":"Contacts"}}')},43:function(e){e.exports=JSON.parse('{"header":{"act":"\u0427\u0442\u043e \u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c?","using":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435","works":"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?","blog":"\u0411\u043b\u043e\u0433","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}}')},68:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(6),a=n.n(r),c=n(13),s=n(19),l="APPLY_THEME",d={name:"Dark",mainColor:"rgb(63, 63, 63)",mainTextColor:"rgb(255, 255, 255)",togglerLangBgColor:"rgb(0, 175, 206)",activeLinkBrColor:"rgb(0, 175, 206)",togglerBgColor:"rgb(255, 191, 0)",togglerActiveBgColor:"rgb(255, 207, 64)",menuBgColor:"rgb(255, 220, 115)",brRadius:0},b={name:"Light",mainColor:"rgb(236, 245, 253)",mainTextColor:"rgb(54, 54, 54)",togglerLangBgColor:"rgb(82, 159, 50)",activeLinkBrColor:"rgb(82, 159, 50)",togglerBgColor:"rgb(211, 207, 197)",togglerActiveBgColor:"rgb(222, 222, 222)",menuBgColor:"rgb(236, 232, 226)",brRadius:5},u={theme:d},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object.assign({},{theme:t.payload});default:return e}},m=Object(s.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=n(11),j=n(3),f=n(9),x=n.p+"static/media/logo-farel.585339c8.webp",p=n(1),O=Object(j.b)({wrapper:{flexGrow:1},logo:{display:"block",width:75,height:56,cursor:"pointer"},farel:{width:"100%"}}),v=function(){var e=O();return Object(p.jsx)("div",{className:e.wrapper,children:Object(p.jsx)("i",{className:e.logo,onClick:function(){f.animateScroll.scrollToTop()},children:Object(p.jsx)("img",{className:e.farel,src:x,alt:"farel"})})})},C=n(71),k=Object(j.b)({navbar:{display:"flex"},navbarList:{display:"flex",width:"100%",justifyContent:"space-between"},navItem:{height:25,"&:last-child":{paddingLeft:10}},navLink:{fontSize:15,paddingBottom:5,color:function(e){return e.theme.mainTextColor},transition:"0.5s","&:hover":{cursor:"pointer"}},active:{borderBottom:["1px","solid"],borderColor:function(e){return e.theme.activeLinkBrColor}}}),w=function(){var e=Object(C.a)().t,t=Object(j.c)(),n=k({theme:t});return Object(p.jsx)("nav",{className:n.navbar,children:Object(p.jsxs)("ul",{className:n.navbarList,children:[Object(p.jsx)("li",{className:n.navItem,children:Object(p.jsx)(f.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"top",children:e("header.act")})}),Object(p.jsx)("li",{className:n.navItem,children:Object(p.jsx)(f.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"using",children:e("header.using")})}),Object(p.jsx)("li",{className:n.navItem,children:Object(p.jsx)(f.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.works")})}),Object(p.jsx)("li",{className:n.navItem,children:Object(p.jsx)(f.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.blog")})}),Object(p.jsx)("li",{className:n.navItem,children:Object(p.jsx)(f.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.contacts")})})]})})},N=n(21),y=n(8),L=n(70),S=n(39),B=n.n(S),E=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(o.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},I="60px",T="20px",A="30px",R="60px",z="350ms",M={top:"5px",width:I,maxHeight:T,color:"transparent"},_={top:A,width:R,maxHeight:"60px",color:"black"},D=Object(j.b)({container:{position:"relative"},toggler:{position:"relative",zIndex:"2",width:I,height:T,backgroundColor:function(e){return e.theme.togglerBgColor},border:"none",borderRadius:function(e){return e.theme.brRadius},outline:"none",cursor:"pointer",transition:"background-color 350ms"},togglerActive:{backgroundColor:function(e){return e.theme.togglerActiveBgColor}},menu:{position:"absolute",top:A,zIndex:"1",boxSizing:"border-box",width:R,overflow:"hidden",backgroundColor:function(e){return e.theme.menuBgColor},borderRadius:function(e){return e.theme.brRadius}},list:{padding:"0",listStyleType:"none"},listItem:{textAlign:"center",cursor:"pointer",padding:3,"&:hover":{backgroundColor:function(e){return e.theme.togglerActiveBgColor}}},listItemActive:{fontWeight:"bold"},balloonEnter:Object(y.a)(Object(y.a)({},M),{},{backgroundColor:function(e){return e.theme.togglerBgColor}}),balloonEnterActive:Object(y.a)(Object(y.a)({},_),{},{backgroundColor:function(e){return e.theme.menuBgColor},transition:"all ".concat(z)}),balloonExit:Object(y.a)(Object(y.a)({},_),{},{backgroundColor:function(e){return e.theme.menuBgColor}}),balloonExitActive:Object(y.a)(Object(y.a)({},M),{},{backgroundColor:function(e){return e.theme.togglerBgColor},transition:"all ".concat(z)})}),W={toggleTheme:function(e){return{type:l,payload:e}}},G=Object(c.b)((function(e){return{currentThemeName:e.theme.name}}),W)((function(e){var t=e.toggleTheme,n=e.currentThemeName,i=Object(o.useState)(!1),r=Object(h.a)(i,2),a=r[0],c=r[1],s=function(){c(!a)},l=function(e){n!==e.name&&(t(e),s()),s()},u=Object(o.useRef)();E(u,(function(){a&&c(!1)}));var g=Object(j.c)(),m=Object(o.useRef)(null),f=D({theme:g});return Object(p.jsxs)("div",{className:f.container,children:[Object(p.jsx)("button",{className:B()(f.toggler,Object(N.a)({},f.togglerActive,a)),ref:u,onClick:s,children:"Theme"}),Object(p.jsx)(L.a,{in:a,timeout:350,unmountOnExit:!0,nodeRef:m,classNames:{enter:f.balloonEnter,enterActive:f.balloonEnterActive,exit:f.balloonExit,exitActive:f.balloonExitActive},children:function(e){return Object(p.jsx)("div",{className:f.menu,ref:m,children:Object(p.jsxs)("ul",{className:f.list,children:[Object(p.jsx)("li",{className:"".concat(f.listItem," ").concat("Dark"===n?f.listItemActive:""),onClick:function(){return l(d)},children:"Dark"}),Object(p.jsx)("li",{className:"".concat(f.listItem," ").concat("Light"===n?f.listItemActive:""),onClick:function(){return l(b)},children:"Light"})]})})}})]})})),H=Object(j.b)({submenu:{display:"flex",justifyContent:"space-around"},radioGroup:{display:"flex"},lang:{width:25,height:25,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",borderRadius:function(e){return e.theme.brRadius},"&:last-child":{marginLeft:14}},active:{backgroundColor:function(e){return e.theme.togglerLangBgColor},transition:".5s"},hiden:{display:"none"},name:{fontSize:15,color:function(e){return e.theme.mainTextColor},transition:".5s"},title:{fontSize:12},themeSwitcher:{marginLeft:14},themeSwitcherInner:{display:"flex",flexDirection:"column"}}),V=function(e){var t=Object(C.a)().i18n,n=Object(j.c)(),i=Object(o.useState)(t.language),r=Object(h.a)(i,2),a=r[0],c=r[1],s=function(e){var n=e.target.value;t.changeLanguage(n),c(n)},l=H({theme:n});return Object(p.jsxs)("div",{className:l.submenu,children:[Object(p.jsxs)("div",{className:l.radioGroup,children:[Object(p.jsxs)("label",{className:"".concat(l.lang," ").concat("en"===a?l.active:""),htmlFor:"en",children:[Object(p.jsx)("span",{className:l.name,children:"EN"}),Object(p.jsx)("input",{className:l.hiden,type:"radio",name:"lang",id:"en",value:"en",checked:"en"===a,onChange:s})]}),Object(p.jsxs)("label",{className:"".concat(l.lang," ").concat("ru"===a?l.active:""),htmlFor:"ru",children:[Object(p.jsx)("span",{className:l.name,children:"RU"}),Object(p.jsx)("input",{className:l.hiden,type:"radio",name:"lang",id:"ru",value:"ru",checked:"ru"===a,onChange:s})]})]}),Object(p.jsx)("div",{className:l.themeSwitcher,children:Object(p.jsx)(G,{})})]})},J={colorBlack:"rgb(0,0,0)",colorWhite:"rgb(255, 255, 255)",mainColor:"rgb(63, 63, 63)",lightGrayColor:"rgb(154, 228, 220)",togglerLangBgColor:"rgb(0, 175, 206)",sectionHeaderColor:"rgb(54, 54, 54)",infoTextColor:"rgb(108, 108, 108)",cornerBgColor:"rgb(114, 114, 114)"}.lightGrayColor,U=Object(j.b)({icon:{display:"none",width:30,height:25,cursor:"pointer",transition:"0.5s","&:hover>span":{backgroundColor:J},"@media (max-width: 790px)":{display:"flex",flexDirection:"column"}},active:{transform:"rotate(90deg)",transition:"0.5s"},line:{display:"block",width:"100%",height:5,backgroundColor:function(e){return e.theme.mainTextColor},borderRadius:function(e){return e.theme.brRadius},"&:nth-child(2)":{margin:[5,0]}}}),X=function(e){var t=e.toggleMobileMenu,n=Object(j.c)(),o=U({theme:n});return Object(p.jsxs)("i",{className:o.icon,onClick:t,children:[Object(p.jsx)("span",{className:o.line}),Object(p.jsx)("span",{className:o.line}),Object(p.jsx)("span",{className:o.line})]})},F=Object(j.b)({header:{position:"fixed",top:0,left:0,right:0,zIndex:100,height:60,backgroundColor:function(e){return e.theme.mainColor},transition:"0.5s"},container:{maxWidth:930,height:"100%",display:"flex",alignItems:"center",padding:[0,15],margin:[0,"auto"]},navbarWrapper:{flexGrow:5,padding:[0,20],"@media (max-width: 790px)":{display:"none"}},subMenuWrapper:{flexGrow:1,"@media (max-width: 790px)":{display:"none"}}}),P=function(e){var t=e.toggleMobileMenu,n=Object(j.c)(),o=F({theme:n});return Object(p.jsx)("header",{className:o.header,children:Object(p.jsxs)("div",{className:o.container,children:[Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:o.navbarWrapper,children:Object(p.jsx)(w,{})}),Object(p.jsx)("div",{className:o.subMenuWrapper,children:Object(p.jsx)(V,{})}),Object(p.jsx)(X,{toggleMobileMenu:t})]})})},q=Object(j.b)({container:{height:2e3,maxWidth:930,padding:[0,15],margin:[0,"auto"]}}),Y=function(){var e=q();return Object(p.jsx)("section",{className:e.topSection,id:"top",children:Object(p.jsx)("div",{className:e.container})})},K=(Object(j.b)({usingSection:{height:2e3}}),Object(j.b)({main:{paddingTop:60}})),Q=function(){var e=K();return Object(p.jsx)("main",{className:e.main,children:Object(p.jsx)(Y,{})})},Z=Object(j.b)({menu:{position:"fixed",top:0,left:-200,zIndex:300,backgroundColor:function(e){return e.theme.mainColor},width:200,height:400,transition:"0.5s",display:"none",overflow:"scroll",borderBottomRightRadius:function(e){return e.theme.brRadius},"@media (max-width: 790px)":{display:"block"}},menuIsActive:{left:0,transition:"0.5s"}}),$=function(e){var t=e.mobileMenuIsVisible,n=Object(j.c)(),o=Z({theme:n});return Object(p.jsx)("div",{className:"".concat(o.menu," ").concat(t?o.menuIsActive:"")})},ee=Object(j.b)({"@global":{"*":{margin:0,padding:0,boxSizing:"inherit"},html:{boxSizing:"border-box","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},a:{color:"#fff",textDecoration:"none"},body:{color:"#000",backgroundColor:"#fff",fontSize:16,fontFamily:"OpenSans-Light"},ul:{listStyle:"none"},input:{font:"inherit"}},overlay:{position:"fixed",zIndex:200,top:0,left:0,right:0,bottom:0,backgroundColor:"#000",opacity:.3,display:"none","@media (max-width: 790px)":{display:"block"}}}),te=Object(c.b)((function(e){return{theme:e.theme}}))((function(e){var t=e.theme,n=Object(o.useState)(!1),i=Object(h.a)(n,2),r=i[0],a=i[1],c=Object(o.useState)(!1),s=Object(h.a)(c,2),l=s[0],d=s[1],b=function(){a(!r)};Object(o.useEffect)((function(){function e(){d(window.innerWidth<790)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(o.useEffect)((function(){document.body.style.overflow=r&&l?"hidden":"visible"}),[r,l]);var u=ee();return Object(p.jsxs)(j.a,{theme:t,children:[!(!r||!l)&&Object(p.jsx)("div",{className:u.overlay,onClick:b}),Object(p.jsx)($,{mobileMenuIsVisible:r}),Object(p.jsxs)("div",{children:[Object(p.jsx)(P,{toggleMobileMenu:b}),Object(p.jsx)(Q,{})]})]})})),ne=n(30),oe=n(40),ie=n(44),re=n(16),ae={en:{translation:n(42)},ru:{translation:n(43)}};ne.a.use(oe.a).use(ie.a).use(re.e).init({fallbackLng:window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"en",debug:!0,resources:ae,detection:{order:["queryString","cookie"],cache:["cookie"]},interpolation:{escapeValue:!1}});ne.a;a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)(c.a,{store:m,children:Object(p.jsx)(te,{})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c983dae9.chunk.js.map