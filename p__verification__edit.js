(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"5uHY":function(e,s,a){"use strict";a.r(s);a("h7lp");var t=a("bf48"),r=(a("R9oj"),a("ECub")),j=(a("+L6B"),a("2/Rp")),n=(a("14J3"),a("BMrR")),l=(a("jCWc"),a("kPKH")),c=(a("y8nQ"),a("Vl3Y")),i=(a("iQDF"),a("+eQT")),m=(a("5NDa"),a("5rEg")),o=(a("giR+"),a("fyUT")),u=a("WmNS"),d=a.n(u),p=a("9og8"),b=(a("miYZ"),a("tsqr")),h=a("tJVT"),k=a("q1tI"),y=a.n(k),g=a("WHYC"),v=a("9kvl"),f=a("sy1d"),O=[],z=[],x={};s["default"]=()=>{var e=Object(k["useState"])(O),s=Object(h["a"])(e,2),a=s[0],u=s[1],E=Object(k["useState"])(x),w=Object(h["a"])(E,2),D=w[0],Y=w[1],V=Object(k["useState"])(z),C=Object(h["a"])(V,2),J=C[0],I=C[1],Q=Object(g["l"])(),R=Q.id,S=/^\d+$/;S.test(R)||v["f"].push("/404"),Object(k["useEffect"])(()=>{R>0&&Object(f["a"])("/verification/getInfo/".concat(R)).then(e=>{200===e.code?(Y(e.data),u(JSON.parse(e.data.params)),Object(f["a"])("/template/getInfoById/".concat(e.data.template_id)).then(e=>{200===e.code?I(JSON.parse(e.data.params)):b["b"].error("\u670d\u52a1\u5f02\u5e38\uff01")})):b["b"].error("\u670d\u52a1\u5f02\u5e38\uff01")})},[]);var B=function(){var e=Object(p["a"])(d.a.mark((function e(s){var a,t,r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={name:s.react_umi_name,describe:s.react_umi_describe,templateId:R,params:"{}"},delete s.react_umi_name,delete s.react_umi_describe,t=[],Object.keys(s).forEach(e=>{"object"===typeof s[e]&&(s[e]=s[e].format("YYYY-MM-DD")),t.push({key:e,value:s[e]})}),a.params=JSON.stringify(t),e.next=8,Object(f["a"])("/verification/edit/".concat(R),{method:"PUT",data:a});case 8:r=e.sent,200===r.code?(b["b"].success("\u7f16\u8f91\u9274\u5b9a\u65e5\u5fd7\u6210\u529f"),v["f"].push("/verification")):b["b"].error("\u7f16\u8f91\u9274\u5b9a\u65e5\u5fd7\u5931\u8d25\uff01");case 10:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),U=e=>{switch(e.type){case"number":return y.a.createElement(o["a"],{style:{width:"100%"}});case"text_area":return y.a.createElement(m["a"].TextArea,{style:{height:100},placeholder:"\u8bf7\u8f93\u5165".concat(e.name)});case"date":return y.a.createElement(i["a"],{placeholder:"\u8bf7\u9009\u62e9".concat(e.name)});default:return y.a.createElement(m["a"],{placeholder:"\u8bf7\u8f93\u5165".concat(e.name)})}},M=(e,s)=>{var a=[];return e.map((e,t)=>{s.map((s,r)=>{if(e.key===s.key){var j=y.a.createElement(c["a"].Item,{key:t,label:s.name,name:e.key,initialValue:e.value,rules:[{required:1===s.isNull,message:"\u8bf7\u8f93\u5165".concat(s.name,"!")}]},U(s));"text_area"===s.type?a.push(y.a.createElement(l["a"],{xs:24,sm:24,md:24,lg:24,xl:24,key:t},j)):a.push(y.a.createElement(l["a"],{xs:24,sm:12,md:8,lg:8,xl:6,key:t},j))}})}),a},W=(e,s,a)=>y.a.createElement(c["a"],{onFinish:B},y.a.createElement(c["a"].Item,{label:"\u540d\u79f0",name:"react_umi_name",initialValue:e.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9274\u5b9a\u540d\u79f0!"}]},y.a.createElement(m["a"],{size:"large",placeholder:"\u9274\u5b9a\u540d\u79f0"})),y.a.createElement(c["a"].Item,{label:"\u5907\u6ce8",name:"react_umi_describe",initialValue:e.describe,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5907\u6ce8!"}]},y.a.createElement(m["a"].TextArea,{style:{height:100},placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})),y.a.createElement(n["a"],{gutter:24},M(s,a)),y.a.createElement(c["a"].Item,null,y.a.createElement(j["default"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")));return y.a.createElement(t["a"],{onBack:()=>{window.history.back()},title:"\u8fd4\u56de"},"{}"!==JSON.stringify(D)?W(D,a,J):y.a.createElement(r["a"],{description:!1}))}},RnhZ:function(e,s,a){var t={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(e){var s=j(e);return a(s)}function j(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=j,e.exports=r,r.id="RnhZ"}}]);