(this["webpackJsonporder-survey-view"]=this["webpackJsonporder-survey-view"]||[]).push([[0],{44:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eiNxw.bcdec8a1.woff2"},45:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50eiNxw.d06ba2bd.woff2"},46:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30eg.705bcc4d.woff2"},47:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk40eiNxw.cb75e1e9.woff2"},48:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk50eiNxw.8ff5e4b9.woff2"},49:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFn8kEk30eg.57d63787.woff2"},50:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k40eiNxw.58638245.woff2"},51:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k50eiNxw.0718f464.woff2"},52:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFkpl0k30eg.1d982ad1.woff2"},53:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k40eiNxw.480af29f.woff2"},54:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k50eiNxw.f18574cb.woff2"},55:function(a,e,n){a.exports=n.p+"static/media/7Aulp_0qiz-aVz7u3PJLcUMYOFlOl0k30eg.73541670.woff2"},64:function(a,e,n){a.exports=n(73)},72:function(a,e,n){a.exports=n.p+"static/media/Muli-VariableFont_wght.e8efee92.ttf"},73:function(a,e,n){"use strict";n.r(e);var t=n(0),o=n.n(t),i=n(8),r=n.n(i),l=n(38),c=n(39),d=n(22),s=n(58),f=n(57),m=n(4),u=n(116),U=n(105),F=n(109),p=n(31),h=function(a){return{root:{width:"100%",maxWidth:"40rem",textAlign:"center",padding:"0rem 1.35rem 0rem 1.35rem",margin:"auto"},headerText:{"text-align":"left","padding-top":"2.5rem","padding-bottom":"0.2rem"},headerSplitLine:{"min-height":"0.0856rem",width:"100%","background-color":"#979797",margin:"auto",padding:0},orderValidateForm:{display:"unset"},positionRelative:{position:"relative"},buttonProgress:{color:p.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}},g=new Headers;g.append("Pragma","no-cache"),g.append("Cache-Control","no-store, no-cache, must-revalidate"),g.append("Expires",0);var w={method:"GET",headers:g},A=n(110),O=n(111),M=n(115),z=n(112),y=function(a){Object(s.a)(n,a);var e=Object(f.a)(n);function n(a){var t;Object(l.a)(this,n),t=e.call(this,a);var o=new URLSearchParams(window.location.search).get("region");return t.state={amazonOrderIsValid:null,amazonOrderId:null,amazonOrderIdError:!1,amazonOrderIdModified:!1,amazonRegion:o,amazonOrderIsValidating:!1},t._onValidateOrderClicked=t._onValidateOrderClicked.bind(Object(d.a)(t)),t._onAmazonOrderIdChange=t._onAmazonOrderIdChange.bind(Object(d.a)(t)),t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"_onValidateOrderClicked",value:function(a){var e=this,n=this.state,t=n.amazonOrderId,o=n.amazonRegion;if(t&&t.length>2){var i="/tryfindorder?id=".concat(t,"&region=").concat(o);this.setState({amazonOrderIsValidating:!0}),fetch(i,w).then((function(a){return a.json()})).then((function(a){var n=a.orderExists;e.setState({amazonOrderIsValid:n,amazonOrderIdModified:!1,amazonOrderIsValidating:!1})})).catch((function(a){return console.log(a)}))}}},{key:"_onAmazonOrderIdChange",value:function(a){var e=a.target.value,n=e&&e.length>2;this.setState((function(a){return{amazonOrderId:e,amazonOrderIdError:!n,amazonOrderIdModified:!0}}))}},{key:"render",value:function(){var a=this.props.classes,e=this.state,n=e.amazonOrderIsValidating,t=e.amazonOrderIdModified,i=e.amazonOrderIsValid,r=e.amazonOrderId,l=e.amazonOrderIdError,c="";return null==i||l||t||n||(c=i?o.a.createElement(U.a,{color:"success",variant:"h6"},"Order ",r," is found and valid!"):o.a.createElement(U.a,{color:"error",variant:"h6"},"Order ",r," is invalid!")),o.a.createElement(F.a,{className:a.root},o.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},o.a.createElement("header",{className:a.headerText},o.a.createElement(U.a,{variant:"h5"},"Please, provide Amazon order id to verify")),o.a.createElement("div",{className:a.headerSplitLine}),o.a.createElement(A.a,{className:a.orderValidateForm,container:!0,direction:"column",justify:"flex-start",alignItems:"center",spacing:3},o.a.createElement(A.a,{item:!0},n?o.a.createElement(O.a,null):"",c),o.a.createElement(A.a,{item:!0},o.a.createElement(M.a,Object.assign({},l?{error:"error"}:{},{value:this.state.amazonOrderId,onChange:this._onAmazonOrderIdChange,id:"txfAmazonOrderId",label:"Fill Order #"}))),o.a.createElement(A.a,{item:!0,className:a.positionRelative},o.a.createElement(u.a,{onClick:this._onValidateOrderClicked,variant:"contained",color:"primary",disabled:n},o.a.createElement(U.a,{variant:"caption"},"Validate Order")),n&&o.a.createElement(z.a,{size:24,className:a.buttonProgress})))))}}]),n}(t.Component),E=Object(m.a)(h)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(113),C=n(114),b=(n(72),n(56)),V=n(44),x=n.n(V),k=n(45),_=n.n(k),D=n(46),B=n.n(D),I=n(47),S=n.n(I),P=n(48),R=n.n(P),L=n(49),W=n.n(L),N=n(50),J=n.n(N),q=n(51),Y=n.n(q),j=n(52),T=n.n(j),G=n(53),H=n.n(G),$=n(54),K=n.n($),Q=n(55),X=n.n(Q),Z=[{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(x.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(_.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:400,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(B.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(S.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(R.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:500,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(W.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(J.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(Y.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:700,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(T.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(H.a,") format('woff2')\n    "),unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(K.a,") format('woff2')\n    "),unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"},{fontFamily:"Muli",fontStyle:"normal",fontWeight:800,fontDisplay:"swap",src:"\n      local('Muli'),\n      local('Muli-VariableFont_wght'),\n      url(".concat(X.a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"}],aa=Object(b.a)({palette:{success:{main:p.a[800]}},typography:{fontFamily:"'Muli', sans-serif",body1:{},h6:{}},overrides:{MuiCssBaseline:{"@global":{"@font-face":Z,html:{fontSize:"2.2vmin","@media (min-width:600px)":{},"@media (min-width:960px)":{},"@media (min-width:1280px)":{},"@media (max-width:1920px)":{},"@media (min-width:1920px)":{},"@media (orientation: portrait)":{fontSize:"1.75vmin"},"@media (max-aspect-ratio: 5/8)":{fontSize:"3.75vmin"}},strong:{fontWeight:800}}}}});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.a,{theme:aa},o.a.createElement(C.a,null),o.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.6c8c6f88.chunk.js.map