(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongzhigonggao/detail"],{"0622":function(t,n,e){"use strict";var a=e("7588"),r=e.n(a);r.a},"29cd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,a,r,s,o){try{var i=t[s](o),u=i.value}catch(c){return void e(c)}i.done?n(u):Promise.resolve(u).then(a,r)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var o=t.apply(n,e);function i(t){s(o,a,r,i,u,"next",t)}function u(t){s(o,a,r,i,u,"throw",t)}i(void 0)}))}}var i={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var n=this;return o(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.id=t.id,t.userid&&(n.userid=t.userid);case 2:case"end":return e.stop()}}),e)})))()},onShow:function(n){var e=this;return o(a.default.mark((function n(){var r,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.init(),r=t.getStorageSync("nowTable"),n.next=4,e.$api.session(r);case 4:s=n.sent,e.user=s.data,e.btnColor=e.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","tongzhigonggao"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(n,e,a,r,s){if(t.setStorageSync("crossTable","tongzhigonggao"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",r),""!=a&&!a.startsWith("[")){var o=t.getStorageSync("crossObj");for(var i in o)if(i==a&&o[i]==s)return void this.$utils.msg(r)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=this;return o(a.default.mark((function n(){var e;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.info("tongzhigonggao",t.id);case 2:e=n.sent,t.detail=e.data,t.detail.gonggaoneirong=t.detail.gonggaoneirong.replace(/img src/gi,'img style="width:100%;" src'),t.swiperList=t.detail.fengmian?t.detail.fengmian.split(","):[];case 6:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var n=this;return o(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.endSuccess(t.size,n.hasNext);case 1:case"end":return e.stop()}}),e)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$utils.jump("../discusstongzhigonggao/add-or-update?refid=".concat(t.id));case 1:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.detail.sfsh){n.next=3;break}return t.$utils.msg("请选择审核状态"),n.abrupt("return");case 3:if(t.detail.shhf){n.next=6;break}return t.$utils.msg("请填写审核回复"),n.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),n.next=10,t.$api.update("tongzhigonggao",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return n.stop()}}),n)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};n.default=i}).call(this,e("543d")["default"])},"6a54":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"9a21"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"c3ee"))}},r=function(){var t=this,n=t.$createElement;t._self._c},s=[]},"71e7":function(t,n,e){"use strict";e.r(n);var a=e("6a54"),r=e("fa86");for(var s in r)"default"!==s&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e("0622");var o,i=e("f0c5"),u=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=u.exports},7588:function(t,n,e){},f1a0:function(t,n,e){"use strict";(function(t){e("d53f");a(e("66fd"));var n=a(e("71e7"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},fa86:function(t,n,e){"use strict";e.r(n);var a=e("29cd"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=r.a}},[["f1a0","common/runtime","common/vendor"]]]);