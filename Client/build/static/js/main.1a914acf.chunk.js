(this["webpackJsonporder-survey-view"]=this["webpackJsonporder-survey-view"]||[]).push([[0],{42:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eiNxw.bcdec8a1.woff2"},43:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50eiNxw.d06ba2bd.woff2"},44:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30eg.705bcc4d.woff2"},45:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk40eiNxw.cb75e1e9.woff2"},46:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk50eiNxw.8ff5e4b9.woff2"},47:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk30eg.57d63787.woff2"},48:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k40eiNxw.58638245.woff2"},49:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k50eiNxw.0718f464.woff2"},50:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k30eg.1d982ad1.woff2"},51:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k40eiNxw.480af29f.woff2"},52:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k50eiNxw.f18574cb.woff2"},53:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k30eg.73541670.woff2"},60:function(a,e,n){a.exports=n(69)},68:function(a,e,n){a.exports=n.p+"static/media/Muli-VariableFont_wght.e8efee92.ttf"},69:function(a,e,n){"use strict";n.r(e);var t=n(0),o=n.n(t),i=n(7),r=n.n(i),l=n(36),c=n(37),f=n(21),d=n(56),u=n(55),m=n(4),U=n(112),s=n(103),F=n(107),p=function(a){return{root:{width:"100%",maxWidth:"40rem",textAlign:"center",padding:"0rem 1.35rem 0rem 1.35rem",margin:"auto"},headerText:{"text-align":"left","padding-top":"2.5rem","padding-bottom":"0.2rem"},headerSplitLine:{"min-height":"0.0856rem",width:"100%","background-color":"#979797",margin:"auto",padding:0}}},h=new Headers;h.append("Pragma","no-cache"),h.append("Cache-Control","no-store, no-cache, must-revalidate"),h.append("Expires",0);var g={method:"GET",headers:h},w=n(108),A=n(111),M=function(a){Object(d.a)(n,a);var e=Object(u.a)(n);function n(a){var t;Object(l.a)(this,n),t=e.call(this,a);var o=new URLSearchParams(window.location.search).get("region");return t.state={amazonOrderIsValid:null,amazonOrderId:null,amazonOrderIdError:!1,amazonOrderIdModified:!1,amazonRegion:o},t._onValidateOrderClicked=t._onValidateOrderClicked.bind(Object(f.a)(t)),t._onAmazonOrderIdChange=t._onAmazonOrderIdChange.bind(Object(f.a)(t)),t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"_onValidateOrderClicked",value:function(a){var e=this,n=this.state,t=n.amazonOrderId,o=n.amazonRegion;if(t&&t.length>2){var i="/tryfindorder?id=".concat(t,"&region=").concat(o);fetch(i,g).then((function(a){return a.json()})).then((function(a){var n=a.orderExists;e.setState({amazonOrderIsValid:n,amazonOrderIdModified:!1})})).catch((function(a){return console.log(a)}))}}},{key:"_onAmazonOrderIdChange",value:function(a){var e=a.target.value,n=e&&e.length>2;this.setState((function(a){return{amazonOrderId:e,amazonOrderIdError:!n,amazonOrderIdModified:!0}}))}},{key:"render",value:function(){var a=this.props.classes,e=this.state,n=e.amazonOrderIdModified,t=e.amazonOrderIsValid,i=e.amazonOrderId,r=e.amazonOrderIdError,l="";return null==t||r||n||(l=t?o.a.createElement(s.a,{color:"success",variant:"h6"},"Order ",i," is found and valid!"):o.a.createElement(s.a,{color:"error",variant:"h6"},"Order ",i," is invalid!")),o.a.createElement(F.a,{className:a.root},o.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},o.a.createElement(F.a,null,o.a.createElement("header",{className:a.headerText},o.a.createElement(s.a,{variant:"h5"},"Please, provide Amazon order id to verify")),o.a.createElement("div",{className:a.headerSplitLine})),o.a.createElement(F.a,null,o.a.createElement(w.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",spacing:3},o.a.createElement(w.a,{item:!0},l),o.a.createElement(w.a,{item:!0},o.a.createElement(A.a,Object.assign({},r?{error:"error"}:{},{value:this.state.amazonOrderId,onChange:this._onAmazonOrderIdChange,id:"txfAmazonOrderId",label:"Fill Order #"}))),o.a.createElement(w.a,{item:!0},o.a.createElement(U.a,{onClick:this._onValidateOrderClicked,variant:"contained",color:"primary"},o.a.createElement(s.a,{variant:"caption"},"Validate Order")))))))}}]),n}(t.Component),O=Object(m.a)(p)(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(109),y=n(110),z=(n(68),n(54)),C=n(42),v=n.n(C),b=n(43),x=n.n(b),k=n(44),V=n.n(k),_=n(45),D=n.n(_),B=n(46),I=n.n(B),S=n(47),W=n.n(S),L=n(48),P=n.n(L),R=n(49),J=n.n(R),q=n(50),N=n.n(q),Y=n(51),j=n.n(Y),T=n(52),G=n.n(T),H=n(53),$=n.n(H),K=[{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(v.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(x.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(V.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(D.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(I.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(W.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(P.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(J.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(N.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(j.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(G.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat($.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"}],Q=Object(z.a)({typography:{fontFamily:"'Muli', sans-serif",body1:{},h6:{}},overrides:{MuiCssBaseline:{"@global":{"@font-face":K,html:{fontSize:"2.2vmin","@media (min-width:600px)":{},"@media (min-width:960px)":{},"@media (min-width:1280px)":{},"@media (max-width:1920px)":{},"@media (min-width:1920px)":{},"@media (orientation: portrait)":{fontSize:"1.75vmin"},"@media (max-aspect-ratio: 5/8)":{fontSize:"3.75vmin"}},strong:{fontWeight:800}}}}});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E.a,{theme:Q},o.a.createElement(y.a,null),o.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.1a914acf.chunk.js.map