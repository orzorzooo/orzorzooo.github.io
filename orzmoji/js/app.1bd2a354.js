(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"33c5":function(t,e,n){"use strict";n("a193")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"hero is-medium is-danger is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v(" orz 表情產生器 ")]),n("h2",{staticClass:"subtitle"},[t._v(" 因為我要用這個圖來說話，所以作一個產生器比較方便! ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"field orz-field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",attrs:{type:"text",placeholder:"Text input"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])])])])])]),n("section",{staticClass:"hero is-danger p-5"}),n("div"),n("div",{staticClass:"orz-canvas"},[n("canvas",{ref:"emoji",staticClass:"box",attrs:{id:"emoji"},on:{click:t.generate}})])])},o=[];n("6597");function a(t){t.toBlob((function(t){var e=[new ClipboardItem({"image/png":t})];navigator.clipboard.write(e)}))}function s(t,e){var n=e,r=n.getContext("2d"),i=new Image;i.onload=function(){var e=i.width,o=i.height;r.canvas.width=e,r.canvas.height=o,r.drawImage(i,0,0,e,o),c(t,n),a(n)},i.src="emoji.jpg"}function c(t,e){var n=e,r=n.getContext("2d"),i=r.canvas.width,o=i/2,a=60;r.fillStyle="white",r.strokeStyle="black",r.lineWidth=10,r.lineCap="round",r.lineJoin="round",r.font="".concat(a,"pt Arial"),r.textAlign="center";var s=r.measureText(t).width,c=r.measureText(t).fontBoundingBoxAscent,l=10;while(s>i)a--,s=r.measureText(t).width,r.font="".concat(a,"pt Arial"),c=r.measureText(t).fontBoundingBoxAscent;r.strokeText(t,o,c+l),r.fillText(t,o,c+l)}var l={name:"App",data:function(){return{text:"讓我說話!"}},methods:{generate:function(){console.log("copy");var t=this.$refs.emoji,e=this.text;s(e,t)}},mounted:function(){this.$nextTick((function(){var t=this.text;s(t,this.$refs.emoji)}))},watch:{text:function(){var t=this.$refs.emoji,e=this.text;s(e,t)}}},u=l,d=(n("33c5"),n("2877")),f=Object(d["a"])(u,i,o,!1,null,null,null),p=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(p)}}).$mount("#app")},a193:function(t,e,n){}});
//# sourceMappingURL=app.1bd2a354.js.map