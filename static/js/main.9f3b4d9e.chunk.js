(this["webpackJsonpvoc-frontend"]=this["webpackJsonpvoc-frontend"]||[]).push([[0],{64:function(e,n,a){},65:function(e,n,a){},78:function(e,n,a){"use strict";a.r(n);var c=a(0),t=a.n(c),i=a(11),r=a.n(i),s=(a(64),a.p,a(65),a(2));var l,o=a(18),b=a(43),d=a(44),j=a(97),h=a(99),m=a(100),f=a(101),p=a(103),x=a(102),O=a(104),u=a(52),g=a.n(u),v=d.a.div(l||(l=Object(b.a)(["\n  font-family: sans-serif;\n  max-width: 100%;\n  \n  margin-top: 4rem;\n  min-height: 600px;\n  overflow: auto;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;  \n  \n\n  h2 {\n    font-size: 1.3rem;\n    color: rgb(112,112,112);\n  }\n\n  .separator {\n    height: 1px;\n    width: 100%;\n    background-color: #e8e7e8;\n    margin-top: 0.5rem;\n  }\n\n.flip-card, .no-flip-card{\n  margin: 1rem;\n  width: 200px;\n  height: 230px;\n\n  .flip-card-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.5s;\n    transform-style: preserve-3d;\n\n    /* Position the front and back side */\n    .flip-card-front, .flip-card-back {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      -webkit-backface-visibility: hidden; \n      backface-visibility: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      .back-content {\n        width: 100%;\n        height: 90%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n\n        p {\n          font-size: 5rem;\n          color: rgb(112,112,112);\n        }\n\n        .rome {\n          font-size: 1.5rem;\n          position: absolute;\n          bottom: 0;\n        }\n      }\n\n      p {\n        font-size: 5rem;\n        color: rgb(112,112,112);\n      }\n\n    }\n\n    /* Style the back side */\n    .flip-card-back {\n      transform: rotateY(180deg);\n    }\n  }\n}\n\n  .flip-card:hover .flip-card-inner {\n    transform: rotateY(180deg);\n  }\n \n"]))),y=function(){var e=Object(c.useState)("All Sounds"),n=Object(o.a)(e,2),a=n[0],t=n[1],i=Object(c.useState)(1),r=Object(o.a)(i,2),l=r[0],b=r[1],d=Object(c.useState)(0),u=Object(o.a)(d,2),y=u[0],k=u[1],S=Object(c.useState)(0),w=Object(o.a)(S,2),C=w[0],N=w[1],F=Object(c.useState)(!1),M=Object(o.a)(F,2),z=M[0],P=M[1],T=Object(c.useState)(!1),B=Object(o.a)(T,2),L=B[0],A=B[1],D=[{a:"\u3042",b:"a",c:"\u30a2"},{a:"\u3044",b:"i",c:"\u30a4"},{a:"\u3046",b:"u",c:"\u30a6"},{a:"\u3048",b:"e",c:"\u30a8"},{a:"\u304a",b:"o",c:"\u30aa"},{a:"\u304b",b:"ka",c:"\u30ab"},{a:"\u304d",b:"ki",c:"\u30ad"},{a:"\u304f",b:"ku",c:"\u30af"},{a:"\u3051",b:"ke",c:"\u30b1"},{a:"\u3053",b:"ko",c:"\u30b3"},{a:"\u3055",b:"sa",c:"\u30b5"},{a:"\u3057",b:"shi",c:"\u30b7"},{a:"\u3059",b:"su",c:"\u30b9"},{a:"\u305b",b:"se",c:"\u30bb"},{a:"\u305d",b:"so",c:"\u30bd"},{a:"\u305f",b:"ta",c:"\u30bf"},{a:"\u3061",b:"chi",c:"\u30c1"},{a:"\u3064",b:"tsu",c:"\u30c4"},{a:"\u3066",b:"te",c:"\u30c6"},{a:"\u3068",b:"to",c:"\u30c8"},{a:"\u306a",b:"na",c:"\u30ca"},{a:"\u306b",b:"ni",c:"\u30cb"},{a:"\u306c",b:"nu",c:"\u30cc"},{a:"\u306d",b:"ne",c:"\u30cd"},{a:"\u306e",b:"no",c:"\u30ce"},{a:"\u306f",b:"ha",c:"\u30cf"},{a:"\u3072",b:"hi",c:"\u30d2"},{a:"\u3075",b:"fu",c:"\u30d5"},{a:"\u3078",b:"he",c:"\u30d8"},{a:"\u307b",b:"ho",c:"\u30db"},{a:"\u307e",b:"ma",c:"\u30de"},{a:"\u307f",b:"mi",c:"\u30df"},{a:"\u3080",b:"mu",c:"\u30e0"},{a:"\u3081",b:"me",c:"\u30e1"},{a:"\u3082",b:"mo",c:"\u30e2"},{a:"\u3084",b:"ya",c:"\u30aa"},{a:"\u3086",b:"yu",c:"\u30e6"},{a:"\u3088",b:"yo",c:"\u30e8"},{a:"\u3089",b:"ra",c:"\u30e9"},{a:"\u308a",b:"ri",c:"\u30ea"},{a:"\u308b",b:"ru",c:"\u30eb"},{a:"\u308c",b:"re",c:"\u30ec"},{a:"\u308d",b:"ro",c:"\u30ed"},{a:"\u308f",b:"wa",c:"\u30ef"},{a:"\u3092",b:"wo",c:"\u30f2"},{a:"\u3093",b:"n",c:"\u30f3"}],I=[["\u3042","\u304a"],["\u306c","\u3081"],["\u306d","\u308c","\u308f"],["\u306f","\u307b"],["\u308d","\u308b"],["\u30a2","\u30de"],["\u30b7","\u30c4"],["\u30a6","\u30ef"],["\u30f3","\u30bd"]];return Object(s.jsxs)("div",{children:[Object(s.jsxs)(m.a,{style:{padding:"1rem",display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(s.jsx)(g.a,{}),Object(s.jsx)(f.a,{variant:"h6",style:{flexGrow:1,marginLeft:"2rem"},children:"Japanese 50 Sounds"})]}),Object(s.jsxs)(v,{children:[Object(s.jsxs)(p.a,{value:C,indicatorColor:"primary",textColor:"primary",onChange:function(e,n){N(n),t(e.target.innerHTML)},"aria-label":"disabled tabs example",style:{marginBottom:"2rem"},children:[Object(s.jsx)(x.a,{label:"All Sounds"}),Object(s.jsx)(x.a,{label:"One Sound"}),Object(s.jsx)(x.a,{label:"Similar Combo"})]}),Object(s.jsxs)("div",{style:{marginBottom:"2rem"},children:[Object(s.jsx)(O.a,{title:"show romanization in card back side","aria-label":"add",children:Object(s.jsx)(h.a,{disabled:"Similar Combo"===a,color:"primary",style:{marginRight:"2rem"},variant:"outlined",onClick:function(){return P(!z)},children:z?"Hide Pinyin":"Show Pinyin"})}),Object(s.jsx)(O.a,{title:"reverse the card","aria-label":"add",children:Object(s.jsx)(h.a,{disabled:"Similar Combo"===a,color:"primary",variant:"outlined",onClick:function(){return A(!L)},children:"Reverse"})})]}),"All Sounds"===a?Object(s.jsx)("div",{style:{display:"flex",width:"90%",flexWrap:"wrap",justifyContent:"center"},children:D.map((function(e){return Object(s.jsx)("div",{className:"flip-card",children:Object(s.jsxs)("div",{className:"flip-card-inner",children:[Object(s.jsx)(j.a,{className:"flip-card-front",children:L?Object(s.jsx)("p",{children:e.a}):Object(s.jsx)("p",{children:e.c})}),Object(s.jsx)(j.a,{className:"flip-card-back",children:Object(s.jsxs)("div",{className:"back-content",children:[L?Object(s.jsx)("p",{children:e.c}):Object(s.jsx)("p",{children:e.a}),z&&Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{className:"rome",children:["(",e.b,")"]})})]})})]})})}))}):"One Sound"===a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flip-card",children:Object(s.jsxs)("div",{className:"flip-card-inner",children:[Object(s.jsx)(j.a,{className:"front flip-card-front",children:L?Object(s.jsx)("p",{children:D[l].a}):Object(s.jsx)("p",{children:D[l].c})}),Object(s.jsx)(j.a,{className:"back flip-card-back",children:Object(s.jsxs)("div",{className:"back-content",children:[L?Object(s.jsx)("p",{children:D[l].c}):Object(s.jsx)("p",{children:D[l].a}),z&&Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{className:"rome",children:["(",D[l].b,")"]})})]})})]})}),Object(s.jsx)(h.a,{style:{marginTop:"1rem"},variant:"contained",color:"primary",onClick:function(){return function(){var e=Math.floor(46*Math.random());b(e)}()},children:"Change"})]}):"Similar Combo"===a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:I[y].map((function(e){return Object(s.jsx)("div",{className:"no-flip-card",children:Object(s.jsx)("div",{className:"flip-card-inner",children:Object(s.jsx)(j.a,{className:"front flip-card-front",children:Object(s.jsx)("p",{children:e})})})})}))}),Object(s.jsx)(h.a,{style:{marginTop:"1rem"},variant:"contained",color:"primary",onClick:function(){return function(){var e=Math.floor(9*Math.random());console.log("num",e),k(e)}()},children:"Change"})]}):void 0]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(n){var a=n.getCLS,c=n.getFID,t=n.getFCP,i=n.getLCP,r=n.getTTFB;a(e),c(e),t(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),k()}},[[78,1,2]]]);
//# sourceMappingURL=main.9f3b4d9e.chunk.js.map