(this["webpackJsonpreact-globe-test"]=this["webpackJsonpreact-globe-test"]||[]).push([[0],{3:function(e,t){e.exports=Cesium},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),i=n.n(a),o=(n(65),n(6)),s=n.n(o),l=n(24),u=(n(35),n(12)),d=(n(67),n(43)),b=n.n(d),j=n(7),f="SAVE_USER_NAME",p="SKIP_INTRO",h="CHANGE_NAME",y="PICK_COORDINATES",O="NO_NEARBY_CITIES",g="NEARBY_CITIES_FETCH_SUCCEEDED",x="NEARBY_CITIES_FETCH_FAILED",m="GET_SINGLE_CITY_DATA",v="SINGLE_CITY_DATA_FETCH_SUCCEEDED",C="SINGLE_CITY_DATA_FETCH_FAILED",w="RESET_SINGLE_CITY",k="EXTENDED_CITY_DATA_FETCH_SUCCEDEED",E="EXTENDED_CITY_DATA_FETCH_FAILED",_="SAVE_RECENT_LOCATIONS",N="DELETE_SINGLE_RECENT_LOCATION",T="CLEAR_RECENTS_LIST",S="SET_WIDGET_PAGE_CATEGORY",D=n(11),I=function(e,t){Object(r.useEffect)((function(){var n=function(n){e.current&&n.target&&!e.current.contains(n.target)&&e.current!==n.target&&t()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])},A=(n(71),"/nomado/"),L="/nomado/dart",R="/nomado/city/:id",B="/nomado/recentlist",F="/nomado/widget",M=function(e,t,n){return{type:v,payload:{cityName:e,cityCoords:t,cityLink:n}}},W=["scores","costs","salaries","crime","education","tolerance","weather","outdoors","startup"],G=["\ud83d\ude03","\ud83d\udcb8","\ud83d\udcb9","\ud83e\uddb9\u200d\u2642\ufe0f","\ud83c\udfeb","\ud83c\udf08","\ud83c\udf1e","\ud83d\uddfb","\ud83d\udcbb"],H=n(1),Y=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useRef)(null),i=Object(j.b)(),o=Object(j.c)((function(e){return e.widgetPage.category}));return I(a,(function(){return c(!1)})),Object(H.jsxs)("div",{ref:a,style:{margin:"2em"},children:[Object(H.jsxs)("div",{style:{cursor:"pointer",margin:"0px 1em"},onClick:function(){c((function(e){return!e}))},children:["category: ",o,n?"\ud83d\udd3c":"\ud83d\udd3d"]}),Object(H.jsx)("ul",{style:{display:n?"":"none",position:"absolute",zIndex:3,height:"fit-content",top:"4em",right:0,color:"black",backgroundColor:"white",padding:"0.5em",borderRadius:"5px",width:"fit-content",listStyleType:"none",left:0,margin:"auto",border:"1px black solid"},children:W.map((function(e){return Object(H.jsx)("li",{className:"dropdown-item",onClick:function(){return i(function(e){return{type:S,payload:e}}(e))},children:e})}))})]})},z=function(){var e=Object(j.c)((function(e){return e.splashScreen.userName})),t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1],i=Object(r.useRef)(null),o=Object(D.g)(),s=Object(j.b)();return I(i,(function(){return a(!1)})),Object(H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"90%"},children:[o.location.pathname!==A&&Object(H.jsx)("h1",{style:{color:"white",cursor:"pointer"},onClick:function(){o.push(A),s({type:w})},children:"Home"}),Object(H.jsx)("div",{children:Object(H.jsx)(Y,{})}),Object(H.jsxs)("div",{ref:i,className:"nav-item",children:[Object(H.jsx)("img",{className:"avatar",src:"https://avatars.dicebear.com/api/identicon/".concat(e,".svg"),alt:""}),Object(H.jsxs)("div",{style:{cursor:"pointer",margin:"0px 1em"},onClick:function(){a((function(e){return!e}))},children:[e,c?"\ud83d\udd3c":"\ud83d\udd3d"]}),Object(H.jsxs)("ul",{style:{display:c?"":"none"},className:"dropdown-menu",children:[Object(H.jsx)("li",{className:"dropdown-item",onClick:function(){return o.push(B)},children:"show recently viewed locations"}),Object(H.jsx)("li",{className:"dropdown-item",onClick:function(){return s({type:h})},children:"change name"})]})]})]})},P=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(u.a)(a,2),o=i[0],s=i[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),h=d[0],y=d[1],O=Object(r.useRef)(null),g=Object(r.useRef)(null),x=Object(r.useRef)(null),m=Object(j.c)((function(e){return e.splashScreen.skippedIntro})),v=Object(r.useState)(m),C=Object(u.a)(v,2),w=C[0],k=C[1],E=Object(j.b)();Object(r.useEffect)((function(){m||N()}),[m]);var _=function(){var e=x.current;e.style.height="8vh",e.style.boxShadow="3px 3px 8px #cbced1,-3px -3px 8px #ffffff";var t=g.current;t.style.opacity="0",t.style.marginTop="-20px",setTimeout((function(){return k(!0)}),2e3)},N=function(){var e=x.current;e.style.height="100vh",e.style.boxShadow="",setTimeout((function(){k(!1),s(!0)}),100)},T={strings:["Welcome digital nomad","what do they call you?"],typeSpeed:50,backSpeed:50,attr:"placeholder",bindInputFocusEvents:!0,onComplete:function(){c(!0),O.current&&O.current.focus(),setTimeout((function(){s(!0)}),3e3)}};return Object(r.useEffect)((function(){O.current&&new b.a(O.current,T).start()}),[]),Object(H.jsx)("div",{className:w?"navbar":"wrapper",ref:x,children:w?Object(H.jsx)(z,{}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{style:{transition:"2s",display:"flex",width:"15em"},children:[Object(H.jsx)("input",{className:"name-input",ref:O,style:{borderBottom:n?"1px white solid":""},value:h,onChange:function(e){return y(e.target.value)}}),h.length>0&&Object(H.jsx)("button",{className:"styled-button",onClick:function(){E({type:f,payload:h}),_()},children:"ok"})]}),Object(H.jsx)("div",{className:"skipWrapper",ref:g,style:{marginTop:o?"77px":"100px"},children:o&&Object(H.jsx)("button",{className:"styled-button",onClick:function(){_(),E({type:p})},children:"skip"})})]})})},U=n(45),J=n(3),V=function(e){return{type:y,payload:e}},Z=function(e,t,n){return{type:g,payload:{cityNames:e,cityCoords:t,cityLinks:n}}},K=function(){var e=Object(r.useRef)(null),t=Object(j.c)((function(e){return e.globe.fetchedNearCities.cityCoords})),n=Object(j.c)((function(e){return e.globe.fetchedNearCities.cityNames})),c=Object(j.c)((function(e){return e.globe.fetchedNearCities.cityLinks})),a=Object(j.c)((function(e){return e.singleCity})),i=Object(j.b)(),o=Object(r.useState)(),s=Object(u.a)(o,2),l=s[0],d=s[1];Object(r.useEffect)((function(){d(e.current.cesiumElement)}),[]);var b=Object(D.g)(),f=function e(t,n){l&&l.camera.flyTo({destination:J.Cartesian3.fromDegrees(t,0,2e7),easingFunction:function(e){return e},duration:n,complete:function(){return e(t-90,n)}})};switch(b.location.pathname){case L:f(-90,.2);break;case A:f(-180,10)}return Object(r.useEffect)((function(){if(new RegExp("".concat(R.split(":")[0],"\\d+")).test(b.location.pathname)&&l){if(1===(null===t||void 0===t?void 0:t.length)){l.camera.flyTo({destination:J.Cartesian3.fromDegrees(t[0].long,t[0].lat,2e4)});var e=c[0].split(":").pop();a.id!==e&&b.push(R.replace(":id",e))}if((null===t||void 0===t?void 0:t.length)>1){var n=t.reduce((function(e,t){return e.long+t.long}))/t.length,r=t.reduce((function(e,t){return e.lat+t.lat}))/t.length;l.camera.flyTo({destination:J.Cartesian3.fromDegrees(n,r,4e4)})}}}),[t,l]),Object(H.jsx)(U.a,{ref:e,full:!0,onClick:function(t){var r,c,a;i({type:"START_SIGHTSEEING"});var o=e.current.cesiumElement,s=o.scene,l=null!==(r=null===(c=(a=o.camera).pickEllipsoid)||void 0===c?void 0:c.call(a,t.position,s.globe.ellipsoid))&&void 0!==r?r:null;if(l){var u=J.Cartographic.fromCartesian(l);i(V({long:J.Math.toDegrees(u.longitude),lat:J.Math.toDegrees(u.latitude)}));var d=J.Cartesian3.fromRadians(u.longitude,u.latitude,0===n.length?2e7:2e4);o.camera.flyTo({destination:d,easingFunction:function(e){return e},duration:1})}}})},X=n(4),q=n(46),Q=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var t=window.matchMedia(e);t.matches!==c&&a(t.matches);var n=function(){return a(t.matches)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[c,e]),c},$=(n(36),function(e){var t=e.options,n=Object(r.useState)(0),c=Object(u.a)(n,2),a=c[0],i=c[1];return Object(H.jsx)("div",{className:"card-wrapper",children:Object(H.jsxs)("div",{style:{maxWidth:"40em",maxHeight:"30em",backgroundColor:"white",borderRadius:"20px"},children:[Object(H.jsx)("div",{style:{display:"flex"},children:t.map((function(e,n){var r=n===a?"selected-tab":n===a-1?"tab-before":n===a+1?"tab-after":0===n?"left-edge-tab":n===t.length-1?"right-edge-tab":"further-tab";return Object(H.jsx)("div",{onClick:function(){return i(n)},style:{width:"max-content",textAlign:"center"},children:Object(H.jsx)("h1",{className:r,children:e.shortTitle})},n)}))}),t[a].body]})})}),ee=function(){var e=Object(D.g)(),t=function(e){var t=e.title,n=e.paragraph,r=e.emoji,c=e.address,a=Object(D.g)();return Object(H.jsx)("div",{onClick:function(){a.push(c)},children:Object(H.jsx)(q.a,{className:"tilt-parallax",perspective:1e3,glareBorderRadius:"10px",glareEnable:!0,glareMaxOpacity:.9,glareColor:"lightblue",glarePosition:"all",scale:1.1,children:Object(H.jsxs)("div",{style:{maxHeight:"30em",maxWidth:"20em",backgroundColor:"white",borderRadius:"20px"},children:[Object(H.jsx)("h1",{style:{transform:"translateZ(30px)"},children:t}),Object(H.jsx)("p",{style:{transform:"translateZ(30px)"},children:n}),Object(H.jsx)("p",{style:{transform:"translateZ(30px)",fontSize:"5rem"},children:r})]})})})},n=function(t){var n=t.option;return Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(H.jsx)("h1",{children:n.title}),Object(H.jsx)("p",{style:{width:"95%",textAlign:"center"},children:n.paragraph}),Object(H.jsx)("p",{onClick:function(){return e.push(n.address)},className:"tab-button",children:n.emoji})]})},r=[{shortTitle:"Dart throw\ud83c\udfaf",title:"Try your luck",paragraph:"throw a dart at the globe to select destination of your next journey",emoji:"\ud83c\udfaf",address:L},{shortTitle:"Widget\ud83d\udd0d",title:"Search by Widget",paragraph:"search for details a holiday destination by browsing through the Teleport widget",emoji:"\ud83d\udd0d",address:F}],c=Q("(max-width: 833px)");return Object(H.jsx)(H.Fragment,{children:c?Object(H.jsx)($,{options:r.map((function(e){return Object(X.a)(Object(X.a)({},e),{},{body:Object(H.jsx)(n,{option:e})})}))}):Object(H.jsxs)("div",{className:"card-wrapper",children:[Object(H.jsx)(t,{title:"Try your luck",paragraph:"throw a dart at the globe to select destination of your next journey",emoji:"\ud83c\udfaf",address:L}),Object(H.jsx)(t,{title:"Search by Widget",paragraph:"search for details a holiday destination by browsing through the Teleport widget",emoji:"\ud83d\udd0d",address:F})]})})},te=n(20),ne=Object(te.a)((function(e){return e.globe.fetchedNearCities.cityNames}),(function(e){return e.globe.fetchedNearCities.cityCoords}),(function(e){return e.globe.fetchedNearCities.cityLinks}),(function(e,t,n){return 1===e.length||1===t.length||1===n.length?{name:e[0],coords:t[0],link:n[0]}:0!==e.length&&0!==t.length&&1!==n.length})),re=(n(76),function(){var e=Object(D.g)(),t=Object(j.c)(ne),n=Object(j.b)();return Object(r.useEffect)((function(){n({type:"START_SPINNING"})}),[]),Object(r.useEffect)((function(){if("boolean"!==typeof t){var n=t.link.split(":").pop().split("/")[0];e.push(R.replace(":id",n))}}),[t]),Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("div",{className:"dart-top-label",children:" click on globe to throw a dart"})})}),ce=n(59),ae=(Object(te.a)((function(e){var t,n,r,c,a,i;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r||null===(c=r["city:urban_area"])||void 0===c||null===(a=c._embedded)||void 0===a||null===(i=a["ua:images"])||void 0===i?void 0:i.photos)&&void 0!==t&&t}),(function(e){return!!e&&e.map((function(e){return[e.image.mobile,e.image.web]})).flat()})),Object(te.a)((function(e){var t,n,r,c,a,i;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r||null===(c=r["city:urban_area"])||void 0===c||null===(a=c._embedded)||void 0===a||null===(i=a["ua:salaries"])||void 0===i?void 0:i.salaries)&&void 0!==t&&t}),(function(e){return e})),Object(te.a)((function(e){var t,n,r,c,a;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r||null===(c=r["city:urban_area"])||void 0===c||null===(a=c._embedded)||void 0===a?void 0:a["ua:scores"])&&void 0!==t&&t}),(function(e){return!!e&&{categories:e.categories,summary:e.summary,teleport_city_score:e.teleport_city_score}})),Object(te.a)((function(e){var t,n,r;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r?void 0:r["city:urban_area"])&&void 0!==t&&t}),(function(e){return e})),Object(te.a)((function(e){var t,n,r,c,a,i;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r||null===(c=r["city:urban_area"])||void 0===c||null===(a=c._embedded)||void 0===a||null===(i=a["ua:details"])||void 0===i?void 0:i.categories)&&void 0!==t&&t}),(function(e){return e})),Object(te.a)((function(e){var t,n,r,c;return null!==(t=null===(n=e.singleCity.extendedCityData.data)||void 0===n||null===(r=n._embedded)||void 0===r||null===(c=r["city:urban_area"])||void 0===c?void 0:c.slug)&&void 0!==t&&t}),(function(e){return e}))),ie=(n(42),function(e){var t=e.options,n=Object(r.useState)(0),c=Object(u.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(!0),s=Object(u.a)(o,2),l=s[0],d=s[1],b=Object(r.useState)(!1),j=Object(u.a)(b,2);j[0],j[1];return Object(H.jsx)("div",{style:{display:"flex",zIndex:1,alignItems:"stretch",justifyContent:"center",color:"black",bottom:"0em",position:"absolute",alignContent:"center",flexWrap:"wrap",flexDirection:"row",right:0,left:0},children:Object(H.jsxs)("div",{style:{maxHeight:"80vh",backgroundColor:"white",borderTopRightRadius:"20px",borderTopLeftRadius:"20px",width:"100vw"},children:[Object(H.jsxs)("div",{style:{display:"flex"},children:[t.map((function(e,n){var r=n===a?"selected-tab":n===a-1?"tab-before":n===a+1?"tab-after":0===n?"left-edge-tab":n===t.length-1?"right-edge-tab":"further-tab";return Object(H.jsx)("div",{onClick:function(){return i(n)},style:{width:"max-content",textAlign:"center"},children:Object(H.jsx)("h1",{className:r,children:e.shortTitle})},n)})),Object(H.jsx)("div",{style:{cursor:"pointer",margin:"0.5em 1em",right:0,marginLeft:"auto"},onClick:function(){d((function(e){return!e}))},children:l?"\ud83d\udd3d":"\ud83d\udd3c"})]}),l&&t[a].body]})})}),oe=function(e){var t=e.category,n=e.urbanArea;return Object(H.jsx)("iframe",{style:{height:"40vh",width:"100%"},src:"https://teleport.org/cities/".concat(n,"/widget/").concat(t,"/?currency=USD&citySwitcher=false"),title:"widget"})},se=function(){var e,t,n,r,c,a,i,o,s=Object(j.c)((function(e){return e.singleCity.extendedCityData.data})),l=null===(e=s._embedded)||void 0===e?void 0:e["city:alternate-names"].alternate_names;return Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(H.jsx)("h1",{children:s.full_name}),Object(H.jsxs)("div",{children:[Object(H.jsxs)("p",{style:{textAlign:"center"},children:["city population: ",s.population]}),Object(H.jsxs)("p",{style:{textAlign:"center"},children:["country population: ",null!==(t=null===(n=s._embedded)||void 0===n?void 0:n["city:country"].population)&&void 0!==t?t:""]})]}),Object(H.jsxs)("p",{style:{textAlign:"center"},children:["currency: ",null!==(r=null===(c=s._embedded)||void 0===c||null===(a=c["city:country"])||void 0===a?void 0:a.currency_code)&&void 0!==r?r:""]}),(null===l||void 0===l?void 0:l.length)>1&&Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center"},children:["alternative names:",Object(H.jsx)("div",{style:{maxHeight:"4em",overflowY:"auto"},children:l.map((function(e){return Object(H.jsx)("p",{style:{margin:"0em"},children:e.name},e.name)}))})]}),Object(H.jsxs)("p",{style:{textAlign:"center"},children:["timezone: ",null!==(i=null===(o=s._embedded)||void 0===o?void 0:o["city:timezone"].iana_name)&&void 0!==i?i:""]})]})},le=function(e){var t=e.id,n=Object(j.c)((function(e){return e.singleCity.fetchedBasicCityData.cityName})),c=Object(j.c)((function(e){return e.singleCity.id})),a=Object(j.c)((function(e){return e.globe.fetchedNearCities.cityLinks})),i=Q("(max-width: 833px)"),o=Object(j.c)((function(e){return e.singleCity.fetchedBasicCityData.cityCoords})),s=Object(j.c)((function(e){return e.globe.coords})),l=Object(j.c)(ae),u=Object(j.b)();Object(r.useEffect)((function(){var e,n,r;c!==t&&u(function(e){return{type:m,payload:e}}(t));var i=null!==(e=null===(n=a[0])||void 0===n||null===(r=n.split(":"))||void 0===r?void 0:r.pop())&&void 0!==e?e:"";t!==i&&(o.long===s.long&&o.lat===s.lat||u(V({long:o.long,lat:o.lat})))}),[t,o]);var d=[{shortTitle:"Basic Info\ud83c\udf10",body:Object(H.jsx)(se,{})}];return l&&d.push.apply(d,Object(ce.a)(W.map((function(e,t){return{shortTitle:e.replace(e[0],e[0].toUpperCase()).concat(G[t]),body:Object(H.jsx)(oe,{category:e,urbanArea:l})}})))),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{style:{fontSize:"xx-large",position:i?"absolute":"relative",width:i?"100%":"",margin:"0"},className:"dart-top-label",children:n}),Object(H.jsx)(ie,{options:d})]})},ue=function(){var e=Object(j.c)((function(e){return e.widgetPage.category}));return Object(H.jsx)("iframe",{style:{position:"absolute",zIndex:1,top:"8vh",height:"100vh",width:"100%",right:0,left:0,margin:"auto"},src:"https://teleport.org/cities/berlin/widget/".concat(e,"/?currency=USD"),title:"widget"})},de=function(e){return{type:_,payload:e}},be=function(){var e=Object(D.g)(),t=Object(j.c)((function(e){return e.recentLocations.list})),n=Object(j.b)();return Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column",zIndex:1,alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw",color:"white",position:"absolute"},children:[Object(H.jsx)("ol",{children:t.map((function(t){return Object(H.jsxs)("li",{children:[Object(H.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.push(R.replace(":id",t.id))},children:t.fetchedBasicCityData.cityName})," - ",t.userName," ",Object(H.jsx)("span",{style:{cursor:"pointer"},onClick:function(){var e;n((e=t.id,{type:N,payload:e}))},children:"\ud83d\uddd1"})]},t.id)}))}),Object(H.jsx)("button",{className:"styled-button",onClick:function(){return n({type:T})},children:"clear list"})]})};var je=Object(D.h)((function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(P,{}),Object(H.jsxs)(D.d,{children:[Object(H.jsx)(D.b,{exact:!0,path:L,component:re}),Object(H.jsx)(D.b,{exact:!0,path:F,component:ue}),Object(H.jsx)(D.b,{exact:!0,path:R,component:function(e){var t=e.match;return Object(H.jsx)(le,{id:t.params.id})}}),Object(H.jsx)(D.b,{exact:!0,path:B,component:be}),Object(H.jsx)(D.b,{exact:!0,path:A,component:ee}),Object(H.jsx)(D.a,{to:A})]}),Object(H.jsx)(K,{})]})})),fe=n(51),pe=n(37),he=n(47),ye=n(19),Oe=n(60),ge=n(48),xe=n(39),me=n(49),ve=n.n(me),Ce={isLoading:!1,errMess:"",cityNames:[],cityCoords:[],cityLinks:[]},we=n(9),ke=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.teleport.org/api/locations/".concat(t.lat,",").concat(t.long,"/?embed=location%3Anearest-cities%2Flocation%3Anearest-city")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=s.a.mark(_e);function _e(e){var t,n,r,c=arguments;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(a.prev=0,t=c.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=c[r];return a.next=4,we.b.apply(void 0,[e].concat(n));case 4:a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:case"end":return a.stop()}}),Ee,null,[[0,6]])}var Ne=_e,Te=s.a.mark(Ie),Se=s.a.mark(Ae),De=s.a.mark(Le);function Ie(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.e)(y,Ne,Ae);case 2:case"end":return e.stop()}}),Te)}function Ae(){var e,t,n,r,c,a;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(we.d)((function(e){return e.globe.coords}));case 2:return e=i.sent,i.next=5,Object(we.b)(ke,e);case 5:if(t=i.sent,n=[],r=[],c=[],!t){i.next=21;break}if(null===(a=t._embedded["location:nearest-cities"])||void 0===a||a.forEach((function(e){c.push(e._links["location:nearest-city"].href),n.push(e._links["location:nearest-city"].name);var t=e._embedded["location:nearest-city"].location.latlon;r.push({long:t.longitude,lat:t.latitude})})),0!==n.length&&0!==r.length){i.next=15;break}return i.next=14,Object(we.c)({type:O});case 14:return i.abrupt("return");case 15:return i.next=17,Object(we.c)(Z(n,r,c));case 17:return i.next=19,Object(we.b)(Le,n,r,c);case 19:i.next=23;break;case 21:return i.next=23,Object(we.c)({type:x});case 23:case"end":return i.stop()}}),Se)}function Le(e,t,n){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(1!==e.length&&1!==t.length&&1!==n.length){r.next=3;break}return r.next=3,Object(we.c)(M(e[0],t[0],n[0]));case 3:case"end":return r.stop()}}),De)}var Re=Ie,Be=s.a.mark(Me),Fe=s.a.mark(We);function Me(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.e)(v,We);case 2:case"end":return e.stop()}}),Be)}function We(){var e,t,n,r;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(we.d)((function(e){return e.recentLocations.list}));case 2:return e=c.sent,c.next=5,Object(we.d)((function(e){return e.splashScreen.userName}));case 5:return t=c.sent,c.next=8,Object(we.d)((function(e){return e.singleCity}));case 8:if(n=c.sent,r=JSON.parse(JSON.stringify(e)),e.find((function(e){return e.id===n.id}))&&(r=e.filter((function(e){return e.id!==n.id}))),e.length>=40&&(r=e.slice(0,-1)),r.unshift(Object(X.a)(Object(X.a)({},n),{},{userName:t})),n.fetchedBasicCityData.cityLink.split(":").pop().split("/")[0]!==n.id){c.next=17;break}return c.next=17,Object(we.c)(de(r));case 17:return c.abrupt("return");case 18:case"end":return c.stop()}}),Fe)}var Ge=Me,He=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",n&&(r+=n),e.abrupt("return",fetch("https://api.teleport.org/api/cities/geonameid:".concat(t,"/").concat(r)).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ye=s.a.mark(Je),ze=s.a.mark(Ve),Pe=s.a.mark(Ze),Ue=s.a.mark(Ke);function Je(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.f)(m,Ne,Ve);case 2:case"end":return e.stop()}}),Ye)}function Ve(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(we.d)((function(e){return e.singleCity.id}));case 2:return e=n.sent,n.next=5,Object(we.b)(He,e);case 5:if(t=n.sent,console.log(t),!t){n.next=12;break}return n.next=10,Object(we.a)([Object(we.b)(Ze,t),Object(we.b)(Ke,t)]);case 10:n.next=14;break;case 12:return n.next=14,Object(we.c)({type:C});case 14:case"end":return n.stop()}}),ze)}function Ze(e){var t,n,r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(we.d)((function(e){return e.singleCity.fetchedBasicCityData.cityLink}));case 2:return t=a.sent,a.next=5,Object(we.d)((function(e){return e.singleCity.fetchedBasicCityData.cityName}));case 5:return n=a.sent,a.next=8,Object(we.d)((function(e){return e.singleCity.fetchedBasicCityData.cityCoords}));case 8:if(r=a.sent,!(t.length<1||n.length<1)&&r.long&&r.lat){a.next=13;break}return c=e.location.latlon,a.next=13,Object(we.c)(M(e.name,{long:c.longitude,lat:c.latitude},e._links.self.href));case 13:case"end":return a.stop()}}),Pe)}function Ke(e){var t,n,r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(we.d)((function(e){return e.singleCity.id}));case 2:return t=a.sent,n=Object.keys(e._links).filter((function(e){return e.includes("city")})),r="",n&&n.length>0&&n.forEach((function(e,t){r+=0===t?"?embed=":"&embed=",e.includes("urban_area")?r+="city:urban_area/ua:images&embed=city:urban_area/ua:salaries&embed=city:urban_area/ua:scores&embed=city:urban_area/ua:details":r+=e})),a.next=8,Object(we.b)(He,t,r);case 8:if(!(c=a.sent)){a.next=14;break}return a.next=12,Object(we.c)({type:k,payload:c});case 12:a.next=16;break;case 14:return a.next=16,Object(we.c)({type:E});case 16:case"end":return a.stop()}}),Ue)}var Xe=Je,qe=s.a.mark(Qe);function Qe(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.a)([Re(),Xe(),Ge()]);case 2:case"end":return e.stop()}}),qe)}var $e={isLoading:!1,errMess:"",cityName:"",cityCoords:{},cityLink:""},et={isLoading:!1,errMess:"",data:{}},tt={key:"root",storage:ve.a,debug:!0},nt=Object(ye.combineReducers)({splashScreen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userName:"",skippedIntro:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(X.a)(Object(X.a)({},e),{},{userName:t.payload,skippedIntro:!0});case p:return Object(X.a)(Object(X.a)({},e),{},{skippedIntro:!0});case h:return Object(X.a)(Object(X.a)({},e),{},{skippedIntro:!1});default:return e}},globe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{coords:{long:0,lat:0},fetchedNearCities:Ce},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(X.a)(Object(X.a)({},e),{},{coords:t.payload});case O:return Object(X.a)(Object(X.a)({},e),{},{fetchedNearCities:Ce});case x:return Object(X.a)(Object(X.a)({},e),{},{fetchedNearCities:Object(X.a)(Object(X.a)({},Ce),{},{errMess:"failed to fetch"})});case g:return Object(X.a)(Object(X.a)({},e),{},{fetchedNearCities:Object(X.a)(Object(X.a)({},Ce),{},{cityNames:t.payload.cityNames,cityCoords:t.payload.cityCoords,cityLinks:t.payload.cityLinks})});case w:return Object(X.a)(Object(X.a)({},e),{},{fetchedNearCities:Ce});default:return e}},singleCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:"",fetchedBasicCityData:$e,extendedCityData:et},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n,r,c,a,i=null!==(n=null===(r=e.fetchedBasicCityData.cityLink.split(":").pop())||void 0===r||null===(c=r.split)||void 0===c||null===(a=c.call(r,"/"))||void 0===a?void 0:a[0])&&void 0!==n?n:"";return Object(X.a)(Object(X.a)({},e),{},{id:t.payload,fetchedBasicCityData:i===t.payload?e.fetchedBasicCityData:Object(X.a)(Object(X.a)({},$e),{},{isloading:!0})});case v:return Object(X.a)(Object(X.a)({},e),{},{fetchedBasicCityData:Object(X.a)(Object(X.a)({},$e),{},{cityName:t.payload.cityName,cityCoords:t.payload.cityCoords,cityLink:t.payload.cityLink})});case C:return Object(X.a)(Object(X.a)({},e),{},{sfetchedBasicCityData:Object(X.a)(Object(X.a)({},$e),{},{errMess:"failed to fetch basic city info"})});case w:return Object(X.a)(Object(X.a)({},e),{},{id:"",fetchedBasicCityData:$e,extendedCityData:et});case k:return Object(X.a)(Object(X.a)({},e),{},{extendedCityData:Object(X.a)(Object(X.a)({},et),{},{data:t.payload})});case E:return Object(X.a)(Object(X.a)({},e),{},{extendedCityData:Object(X.a)(Object(X.a)({},et),{},{errMess:"could not fetch extended data"})});default:return e}},recentLocations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{list:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(X.a)(Object(X.a)({},e),{},{list:t.payload});case N:return Object(X.a)(Object(X.a)({},e),{},{list:e.list.filter((function(e){return e.id!==t.payload}))});case T:return Object(X.a)(Object(X.a)({},e),{},{list:[]});default:return e}},widgetPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{category:"startup"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(X.a)(Object(X.a)({},e),{},{category:t.payload});default:return e}}}),rt=Object(xe.a)(tt,nt),ct=Object(Oe.a)(),at=n(50),it=function(e){var t=e.error,n=e.resetErrorBoundary;return Object(H.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(H.jsxs)("div",{role:"alert",children:[Object(H.jsx)("h1",{style:{textAlign:"center"},children:"Something Went Wrong \ud83d\ude15"}),Object(H.jsx)("pre",{style:{color:"red"},children:t.message}),Object(H.jsx)("button",{onClick:function(){n(),caches&&caches.keys().then((function(e){var t,n=Object(at.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;caches.delete(r)}}catch(c){n.e(c)}finally{n.f()}})),document.location.href="/"},children:"try again"})]})})},ot=function(){var e=Object(ge.composeWithDevTools)({trace:!0,traceLimit:25}),t=Object(ye.createStore)(rt,e(Object(ye.applyMiddleware)(ct))),n=Object(xe.b)(t);return ct.run(Qe),window.Cypress&&(window.store=t),{store:t,persistor:n}}(),st=ot.store,lt=ot.persistor;var ut=function(){return Object(H.jsx)(fe.ErrorBoundary,{FallbackComponent:it,onReset:Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lt.purge();case 2:case"end":return e.stop()}}),e)}))),children:Object(H.jsx)(j.a,{store:st,children:Object(H.jsx)(he.a,{loading:null,persistor:lt,children:Object(H.jsx)(pe.a,{children:Object(H.jsx)(je,{})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},bt=(n(79),function(){return Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)("div",{className:"spinner",children:[Object(H.jsx)("div",{}),Object(H.jsx)("div",{})]})})}),jt=n(40),ft=n(53),pt=n(55),ht=n(82);jt.a.use(ft.a).use(pt.a).use(ht.a).init({fallbackLng:"en",debug:!1,detection:{order:["querystring","cookie","header"],lookupCookie:"lang",lookupQuerystring:"lang",caches:["cookie"]},interpolation:{escapeValue:!1}});jt.a;i.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(r.Suspense,{fallback:Object(H.jsx)(bt,{}),children:Object(H.jsx)(ut,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),dt()}},[[80,1,2]]]);
//# sourceMappingURL=main.fd0ec541.chunk.js.map