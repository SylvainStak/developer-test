(this["webpackJsonpdeveloper-test"]=this["webpackJsonpdeveloper-test"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(29),r=a.n(i),s=(a(77),a(66)),o=a(22),l=a(12),j=a(152),d=a(63),h=Object(n.createContext)({}),p={appUri:"/developer-test",typeColors:{normal:"#AAB09F",fighting:"#CB5F48",flying:"#7DA6DE",poison:"#B468B7",ground:"#CC9F4F",rock:"#B2A061",bug:"#94BC4A",ghost:"#846AB6",steel:"#89A1B0",fire:"#EA7A3C",water:"#539AE2",grass:"#71C558",electric:"#E5C531",psychic:"#E5709B",ice:"#70CBD4",dragon:"#6A7BAF",dark:"#736C75",fairy:"#E397D1",unknown:"#c8ccd1",shadow:"#191a37"}},b=a(37),m=a.n(b),x=a(135),g=a(137),u=a(138),O=a(140),f=a(139),k=a(141),v=a(2),C=Object(x.a)({card:{width:200,margin:10,backgroundColor:"lightyellow"},media:{height:140,backgroundSize:100},name:{textAlign:"center",color:"#3477eb",fontWeight:"bold"},link:{textDecoration:"none"}});var N=function(e){var t=C();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(g.a,{className:t.card,children:Object(v.jsx)(o.b,{to:"".concat(p.appUri,"/info/").concat(e.name),className:t.link,children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(f.a,{className:t.media,image:"".concat(p.appUri,"/pokemon/").concat(e.name,".png")}),Object(v.jsx)(O.a,{children:Object(v.jsx)(k.a,{className:t.name,gutterBottom:!0,variant:"h5",component:"h2",children:e.name})})]})})})})},w=a(154),y=a(142),A=Object(x.a)({card:{width:200,margin:10},media:{height:140,backgroundSize:60},pokemonList:{display:"flex",flexWrap:"wrap",justifyContent:"center"},container:{backgroundColor:"white",paddingTop:"5rem"}});var F=function(){var e=A(),t=Object(w.a)("pokemons",(function(){return m()("https://pokeapi.co/api/v2/pokemon/?limit=151")}),{staleTime:1e5,cacheTime:1e5}),a=t.isLoading,c=t.error,i=t.data,r=Object(n.useContext)(h).filter;return Object(v.jsxs)("div",{className:e.container,children:[c&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),a?Object(v.jsx)(y.a,{}):Object(v.jsx)("div",{className:e.pokemonList,children:function(){var e=i.data.results.filter((function(e){return e.name.includes(r)}));return e.length>0?e.map((function(e,t){return Object(v.jsx)(N,{id:t+1,name:e.name,info:e.url},t+1)})):Object(v.jsx)("div",{children:'No results for "'.concat(r,'"')})}()})]})},S=a(42),B=a(8),L=a(143),T=a(144),U=a(153),W=a(64),E=a.n(W),D=Object(x.a)((function(e){return{root:{flexGrow:1},title:Object(S.a)({color:"white",marginRight:e.spacing(2),"&:hover":{color:"lightgray"}},e.breakpoints.up("sm"),{display:"inline-block"}),linkContainer:{flexGrow:1,textDecoration:"none"},search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var I=function(){var e=D(),t=Object(n.useContext)(h).setFilter;return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(L.a,{position:"fixed",children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:p.appUri,children:Object(v.jsx)("h3",{className:e.title,children:"PokeAPI"})})}),Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:"".concat(p.appUri,"/test1"),children:Object(v.jsx)("h3",{className:e.title,children:"Test1"})})}),Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:"".concat(p.appUri,"/test2"),children:Object(v.jsx)("h3",{className:e.title,children:"Test2"})})}),Object(v.jsxs)("div",{className:e.search,children:[Object(v.jsx)("div",{className:e.searchIcon,children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(U.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return t(e.target.value.toLowerCase())}})]})]})})})};var P=function(){return Object(v.jsx)("p",{children:"This is the test N 1"})};var R=function(){return Object(v.jsx)("p",{children:"This is the test N 2"})},z=a(155),_=a(149),G=a(151),J=a(146),M=a(148),V=a(150),q=a(145),H=a(68),K=a(147),Q=a(65),X=a.n(Q),Y=Object(x.a)({infoContainer:{backgroundColor:"white",paddingTop:"5rem"},image:{display:"block",margin:"0 auto",width:"200px",height:"200px"},name:{textAlign:"center",color:"#333"},types:{justifyContent:"center",display:"flex"},typeChips:{margin:"1rem"},baseStatsContainer:{textAlign:"center"},baseStatsLabel:{fontWeight:"bold",marginLeft:"3rem"},tableContainer:{width:"400px",margin:"0 auto",backgroundColor:"#333",marginTop:"2rem"},colorWhite:{color:"white"},link:{textDecoration:"none",textAlign:"center",marginLeft:"2rem"},backArrow:{marginRight:"1rem"}});var Z=function(e){var t=e.match,a=Y(),n=Object(w.a)(t.params.pokemonName,(function(){return m()("https://pokeapi.co/api/v2/pokemon/".concat(t.params.pokemonName))}),{staleTime:1e5,cacheTime:1e5}),c=n.isLoading,i=n.error,r=n.data;return Object(v.jsxs)(v.Fragment,{children:[i&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),c?Object(v.jsx)(y.a,{}):Object(v.jsxs)("div",{className:a.infoContainer,children:[Object(v.jsx)(o.b,{to:p.appUri,className:a.link,children:Object(v.jsxs)(K.a,{variant:"contained",color:"default",children:[Object(v.jsx)(X.a,{fontSize:"small",className:a.backArrow})," back to pokedex"]})}),Object(v.jsxs)("p",{className:a.baseStatsContainer,children:[Object(v.jsx)("span",{className:a.baseStatsLabel,children:"Weight:"})," ",r.data.weight,Object(v.jsx)("span",{className:a.baseStatsLabel,children:"Base Experience:"})," ",r.data.base_experience]}),Object(v.jsx)("img",{src:r.data.sprites.other.dream_world.front_default,className:a.image}),Object(v.jsx)("h1",{className:a.name,children:r.data.name.toUpperCase()}),console.log(r),Object(v.jsx)("div",{className:a.types,children:r.data.types.map((function(e){return Object(v.jsx)(z.a,{label:e.type.name,color:"primary",className:a.typeChips,style:{backgroundColor:p.typeColors[e.type.name]}})}))}),Object(v.jsx)(M.a,{component:H.a,className:a.tableContainer,children:Object(v.jsxs)(_.a,{className:a.table,size:"small","aria-label":"a dense table",children:[Object(v.jsx)(V.a,{children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(J.a,{className:a.colorWhite,children:"Stat Name"}),Object(v.jsx)(J.a,{align:"right",className:a.colorWhite,children:"Stat Value"}),Object(v.jsx)(J.a,{align:"right",className:a.colorWhite,children:"Effort"})]})}),Object(v.jsx)(G.a,{children:r.data.stats.map((function(e){return Object(v.jsxs)(q.a,{children:[Object(v.jsx)(J.a,{component:"th",scope:"row",className:a.colorWhite,children:e.stat.name}),Object(v.jsx)(J.a,{align:"right",className:a.colorWhite,children:e.base_stat}),Object(v.jsx)(J.a,{align:"right",className:a.colorWhite,children:e.effort})]},e.name)}))})]})})]})]})};var $=function(){var e=new j.a,t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.a,{client:e,children:Object(v.jsx)(h.Provider,{value:{filter:c,setFilter:i},children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(I,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",exact:!0,component:F}),Object(v.jsx)(l.a,{path:"".concat(p.appUri),exact:!0,component:F}),Object(v.jsx)(l.a,{path:"".concat(p.appUri,"/test1"),exact:!0,component:P}),Object(v.jsx)(l.a,{path:"".concat(p.appUri,"/test2"),exact:!0,component:R}),Object(v.jsx)(l.a,{path:"".concat(p.appUri,"/info/:pokemonName"),exact:!0,component:Z})]})]})})})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,157)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root")),ee()},77:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.67c3dfa0.chunk.js.map