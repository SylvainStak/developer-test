(this["webpackJsonpdeveloper-test"]=this["webpackJsonpdeveloper-test"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(31),i=a.n(r),s=(a(91),a(51)),o=a(23),l=a(12),j=a(154),m=a(66),h=Object(c.createContext)({}),d={appUri:"/developer-test",capitalizeName:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},reactQueryTimings:{pokemonList:{staleTime:1e5,cacheTime:1e5},pokemonDetail:{staleTime:1e5,cacheTime:1e5},berryList:{staleTime:1e5,cacheTime:1e5},berryDetail:{staleTime:1e5,cacheTime:1e5}},typeColors:{normal:"#AAB09F",fighting:"#CB5F48",flying:"#7DA6DE",poison:"#B468B7",ground:"#CC9F4F",rock:"#B2A061",bug:"#94BC4A",ghost:"#846AB6",steel:"#89A1B0",fire:"#EA7A3C",water:"#539AE2",grass:"#71C558",electric:"#E5C531",psychic:"#E5709B",ice:"#70CBD4",dragon:"#6A7BAF",dark:"#736C75",fairy:"#E397D1",unknown:"#c8ccd1",shadow:"#191a37"}},b=a(156),p=a(136),x=a(26),g=a.n(x),O=a(138),u=a(139),f=a(141),N=a(140),y=a(142),v=a(1),k=Object(p.a)({card:{width:180,margin:10,backgroundColor:"lightyellow"},media:{height:140,backgroundSize:100},name:{textAlign:"center",color:"#3477eb",fontWeight:"bold"},link:{textDecoration:"none"}});var w=function(e){var t=k();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(O.a,{className:t.card,children:Object(v.jsx)(o.b,{to:"".concat(d.appUri,"/info/").concat(e.name),className:t.link,children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(N.a,{className:t.media,image:"".concat(d.appUri,"/pokemon/").concat(e.name,".png")}),Object(v.jsx)(f.a,{children:Object(v.jsx)(y.a,{className:t.name,gutterBottom:!0,variant:"h5",component:"h2",children:d.capitalizeName(e.name)})})]})})})})},C=a(143),T=Object(p.a)({pokemonList:{display:"flex",flexWrap:"wrap",justifyContent:"center"},container:{backgroundColor:"white",paddingTop:"5rem"},loader:{marginLeft:"50%"}});var L=function(){var e=T(),t=Object(c.useContext)(h).filter,a=Object(b.a)("pokemons",(function(){return g()("https://pokeapi.co/api/v2/pokemon/?limit=151")}),{staleTime:d.reactQueryTimings.pokemonList.staleTime,cacheTime:d.reactQueryTimings.pokemonList.cacheTime}),n=a.isLoading,r=a.error,i=a.data;return Object(v.jsxs)("div",{className:e.container,children:[r&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),n?Object(v.jsx)(C.a,{className:e.loader}):Object(v.jsx)("div",{className:e.pokemonList,children:function(){var e=i.data.results.filter((function(e){return e.name.includes(t)}));return e.length>0?e.map((function(e,t){return Object(v.jsx)(w,{id:t+1,name:e.name,info:e.url},t+1)})):Object(v.jsx)("div",{children:'No results for "'.concat(t,'"')})}()})]})},W=a(145),S=a(144),A=a(146),F=Object(p.a)({footerContainer:{marginTop:"calc(5% + 60px)",bottom:0},linksContainer:{display:"flex",justifyContent:"center"},link:{marginLeft:"1rem"}});var B=function(){var e=F();return Object(v.jsx)(S.a,{position:"static",color:"primary",className:e.footerContainer,children:Object(v.jsx)(W.a,{maxWidth:"md",children:Object(v.jsx)(A.a,{className:e.linksContainer,children:Object(v.jsx)(y.a,{variant:"body1",color:"inherit",children:"\xa9 2021 Sylvain Afonso Developer Test"})})})})},D=a(44),_=a(9),U=a(155),z=a(67),I=a.n(z),E=Object(p.a)((function(e){return{root:{flexGrow:1},title:Object(D.a)({color:"white",marginRight:e.spacing(2),"&:hover":{color:"lightgray"}},e.breakpoints.up("sm"),{display:"inline-block"}),linkContainer:{flexGrow:1,textDecoration:"none"},search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var Q=function(){var e=E(),t=Object(c.useContext)(h).setFilter;return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(S.a,{position:"fixed",children:Object(v.jsxs)(A.a,{children:[Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:d.appUri,children:Object(v.jsx)("h3",{className:e.title,children:"PokeAPI"})})}),Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:"".concat(d.appUri,"/berries"),children:Object(v.jsx)("h3",{className:e.title,children:"Berries"})})}),Object(v.jsx)("div",{className:e.linkContainer,children:Object(v.jsx)(o.b,{to:"".concat(d.appUri,"/test2"),children:Object(v.jsx)("h3",{className:e.title,children:"Test2"})})}),Object(v.jsxs)("div",{className:e.search,children:[Object(v.jsx)("div",{className:e.searchIcon,children:Object(v.jsx)(I.a,{})}),Object(v.jsx)(U.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return t(e.target.value.toLowerCase())}})]})]})})})},R=Object(p.a)({card:{width:130,margin:10,backgroundColor:"lightyellow"},media:{height:140,backgroundSize:100},name:{textAlign:"center",color:"#3477eb",fontWeight:"bold"},link:{textDecoration:"none"}});var P=function(e){var t=R(),a=Object(c.useContext)(h).setBerryInfo;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(O.a,{className:t.card,onClick:function(){return a(e.berryName||"")},children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(N.a,{className:t.media,image:"".concat(d.appUri,"/berries/").concat(e.berryName,"-berry.png")}),Object(v.jsx)(f.a,{children:Object(v.jsx)(y.a,{className:t.name,gutterBottom:!0,variant:"h5",component:"h2",children:d.capitalizeName(e.berryName)})})]})})})},G=a(148),J=a(152),M=a(151),V=a(147),H=a(149),q=a(150),K=a(70),X=Object(p.a)({noResults:{textAlign:"center"},tableContainer:{width:"350px",margin:"0 auto",backgroundColor:"#333",marginTop:"2rem"},colorWhite:{color:"white"},berryTitle:{textAlign:"center"},loader:{paddingTop:"5rem",marginLeft:"50%"}});var Y=function(){var e=X(),t=Object(c.useContext)(h).berryInfo,a=Object(b.a)(t||"default",(function(){return g()("https://pokeapi.co/api/v2/berry/".concat(t))}),{staleTime:d.reactQueryTimings.berryDetail.staleTime,cacheTime:d.reactQueryTimings.berryDetail.cacheTime}),n=a.isLoading,r=a.error,i=a.data;return Object(v.jsxs)(v.Fragment,{children:[r&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),n&&Object(v.jsx)(C.a,{className:e.loader}),!t&&Object(v.jsx)("h3",{className:e.noResults,children:"Click on a berry to show information"}),Object(v.jsx)(W.a,{fixed:!0,children:t&&!n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:e.berryTitle,children:Object(v.jsxs)("em",{children:[d.capitalizeName(t)," Berry"]})}),Object(v.jsx)(V.a,{component:K.a,className:e.tableContainer,children:Object(v.jsxs)(G.a,{size:"small","aria-label":"a dense table",children:[Object(v.jsx)(H.a,{children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{className:e.colorWhite,children:"Stat Name"},"stat-name"),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:"Stat Value"},"stat-value")]})}),Object(v.jsxs)(J.a,{children:[Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Growth Time"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.growth_time})]},"growth_time"),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Max Harvest"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.max_harvest})]},"max_harvest"),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Natural Gift Power"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.natural_gift_power})]},"natural_gift_power"),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Size"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.size})]},"size"),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Smoothness"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.smoothness})]},"smoothness"),Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:e.colorWhite,children:"Soil Dryness"}),Object(v.jsx)(M.a,{align:"right",className:e.colorWhite,children:i.data.soil_dryness})]},"soil_dryness")]})]})})]})})]})},Z=Object(p.a)({berryList:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"},container:{backgroundColor:"white",paddingTop:"5rem"},loader:{marginLeft:"50%"}});var $=function(){var e=Z(),t=Object(c.useContext)(h).filter,a=Object(b.a)("berries",(function(){return g()("https://pokeapi.co/api/v2/berry?limit=64")}),{staleTime:d.reactQueryTimings.berryList.staleTime,cacheTime:d.reactQueryTimings.berryList.cacheTime}),n=a.isLoading,r=a.error,i=a.data;return Object(v.jsxs)("div",{className:e.container,children:[r&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),n?Object(v.jsx)(C.a,{className:e.loader}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Y,{}),Object(v.jsx)("div",{className:e.berryList,children:function(){var e=i.data.results.filter((function(e){return e.name.includes(t)}));return e.length>0?e.map((function(e,t){return Object(v.jsx)(P,{id:t+1,berryName:e.name,info:e.url},t+1)})):Object(v.jsx)("div",{children:'No results for "'.concat(t,'"')})}()})]})]})};var ee=function(){return Object(v.jsx)("p",{children:"This is the test N 2"})},te=a(157),ae=a(153),ce=a(68),ne=a.n(ce),re=Object(p.a)({infoContainer:{backgroundColor:"white",paddingTop:"5rem"},image:{display:"block",margin:"0 auto",width:"200px",height:"200px"},name:{textAlign:"center",color:"#333"},types:{justifyContent:"center",display:"flex"},typeChips:{margin:"1rem"},baseStatsContainer:{textAlign:"center"},baseStatsLabel:{fontWeight:"bold",marginLeft:"3rem"},tableContainer:{width:"350px",margin:"0 auto",backgroundColor:"#333",marginTop:"2rem"},colorWhite:{color:"white"},link:{textDecoration:"none",textAlign:"center",marginLeft:"2rem"},backArrow:{marginRight:"1rem"},loader:{paddingTop:"5rem",marginLeft:"50%"}});var ie=function(e){var t=e.match,a=re(),c=Object(b.a)(t.params.pokemonName,(function(){return g()("https://pokeapi.co/api/v2/pokemon/".concat(t.params.pokemonName))}),{staleTime:d.reactQueryTimings.pokemonDetail.staleTime,cacheTime:d.reactQueryTimings.pokemonDetail.cacheTime}),n=c.isLoading,r=c.error,i=c.data;return Object(v.jsxs)(v.Fragment,{children:[r&&Object(v.jsx)("div",{children:"Something went wrong ... try reloading (F5)"}),n?Object(v.jsx)(C.a,{className:a.loader}):Object(v.jsxs)("div",{className:a.infoContainer,children:[Object(v.jsx)(o.b,{to:d.appUri,className:a.link,children:Object(v.jsxs)(ae.a,{variant:"contained",color:"default",children:[Object(v.jsx)(ne.a,{fontSize:"small",className:a.backArrow})," back to pokedex"]})}),Object(v.jsxs)("p",{className:a.baseStatsContainer,children:[Object(v.jsx)("span",{className:a.baseStatsLabel,children:"Weight:"},"weight")," ",i.data.weight,Object(v.jsx)("span",{className:a.baseStatsLabel,children:"Base Experience:"},"base_experience")," ",i.data.base_experience]}),Object(v.jsx)("img",{src:i.data.sprites.other.dream_world.front_default,className:a.image,alt:"pokemon front side"}),Object(v.jsx)("h1",{className:a.name,children:i.data.name.toUpperCase()}),Object(v.jsx)("div",{className:a.types,children:i.data.types.map((function(e){return Object(v.jsx)(te.a,{label:e.type.name,color:"primary",className:a.typeChips,style:{backgroundColor:d.typeColors[e.type.name]}},e.type.name)}))}),Object(v.jsx)(V.a,{component:K.a,className:a.tableContainer,children:Object(v.jsxs)(G.a,{className:a.table,size:"small","aria-label":"a dense table",children:[Object(v.jsx)(H.a,{children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{className:a.colorWhite,children:"Stat Name"},"stat-name"),Object(v.jsx)(M.a,{align:"right",className:a.colorWhite,children:"Stat Value"},"stat-value"),Object(v.jsx)(M.a,{align:"right",className:a.colorWhite,children:"Effort"},"stat-effort")]})}),Object(v.jsx)(J.a,{children:i.data.stats.map((function(e,t){return Object(v.jsxs)(q.a,{children:[Object(v.jsx)(M.a,{component:"th",scope:"row",className:a.colorWhite,children:e.stat.name},"".concat(e.name,"-stat-").concat(t)),Object(v.jsx)(M.a,{align:"right",className:a.colorWhite,children:e.base_stat},"".concat(e.name,"-value-").concat(t)),Object(v.jsx)(M.a,{align:"right",className:a.colorWhite,children:e.effort},"".concat(e.name,"-effort-").concat(t))]},e.name)}))})]})})]})]})};var se=function(){var e=new j.a,t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),b=Object(s.a)(i,2),p=b[0],x=b[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(m.a,{client:e,children:Object(v.jsx)(h.Provider,{value:{filter:n,setFilter:r,berryInfo:p,setBerryInfo:x},children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(Q,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",exact:!0,component:L}),Object(v.jsx)(l.a,{path:"".concat(d.appUri),exact:!0,component:L}),Object(v.jsx)(l.a,{path:"".concat(d.appUri,"/berries"),exact:!0,component:$}),Object(v.jsx)(l.a,{path:"".concat(d.appUri,"/test2"),exact:!0,component:ee}),Object(v.jsx)(l.a,{path:"".concat(d.appUri,"/info/:pokemonName"),exact:!0,component:ie})]}),Object(v.jsx)(B,{})]})})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,159)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(se,{})}),document.getElementById("root")),oe()},91:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.f531032e.chunk.js.map