webpackJsonp(["hongbao"],{"+qWx":function(e,t){e.exports=vendor},"7GHf":function(e,t,n){"use strict";var a=n("+6Bu"),r=n.n(a),o=n("U7vG"),i=n.n(o),c=n("XagN"),s=(n.n(c),function(e){var t=e.title,n=e.children,a=r()(e,["title","children"]);return i.a.createElement("div",{className:"m-head f-cb"},i.a.createElement("h2",null,t||""),i.a.createElement("a",{className:"f-fr",href:"/index","data-log":a["data-log"]},"首页"),n||"")});t.a=s},"8nng":function(e,t,n){"use strict";var a=n("+6Bu"),r=n.n(a),o=n("Zrlr"),i=n.n(o),c=n("wxAW"),s=n.n(c),u=n("tBL+"),l=n("vPHJ"),d=function(){function e(t){var n=this;i()(this,e),this._handleDocClick=function(e){var t=n._getTargetElement(e);if(t){var a=t.dataset.log;if(a&&(n.capture(a),"A"===t.tagName.toUpperCase())){var r=t.href;if(!r||0===r.indexOf("javascript")||"_blank"===t.getAttribute("target"))return;e.preventDefault(),setTimeout(function(){window.location.href=t.href},200)}}},this._logToBackend=function(e){if(location.href.indexOf("pay.kuxuanbook")>-1){var t=Object(l.h)(),n=(t.targetUrl,t.shareUrl,r()(t,["targetUrl","shareUrl"]));Object(u.b)(JSON.parse(e),n)}else Object(u.a)(JSON.parse(e))},this.capture=function(e){n._logToBackend(e)},this._handleDocClick=this._handleDocClick.bind(this),this._addEventListeners()}return s()(e,[{key:"_addEventListeners",value:function(){document.addEventListener("click",this._handleDocClick,!0)}},{key:"_getTargetElement",value:function(e){for(var t=e.target;t;){if(t.dataset&&t.dataset.log)return t;t=t.parentNode}return null}}]),e}();new d},BEQ0:function(e,t,n){e.exports=n("+qWx")(3)},"BK/k":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n("VkW9"),r=n.n(a),o=new r.a,i=o.get("XSRF-TOKEN")},"D/cR":function(e,t,n){"use strict";function a(e){var t=[];for(var n in e)!function(n){Array.isArray(e[n])?e[n].forEach(function(e){t.push(n+"[]="+e)}):t.push(n+"="+e[n])}(n);return t.join("&")}t.c=a,n.d(t,"a",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return f});var r=n("Xxa5"),o=n.n(r),i=n("exGp"),c=n.n(i),s=n("rplX"),u=(n.n(s),n("BK/k")),l=function(){var e=c()(o.a.mark(function e(t){var n,r,i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(c),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"GET",credentials:"same-origin"});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return i=void 0,e.prev=8,e.next=11,r.json();case 11:i=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==i.success){e.next=21;break}throw new Error(i.msg||"请求失败");case 21:return-401===i.code&&location.reload(),e.abrupt("return",i);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=c()(o.a.mark(function e(t){var n,r,i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(s),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-XSRF-TOKEN":u.b},body:a(c)});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return i=void 0,e.prev=8,e.next=11,r.json();case 11:i=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==i.success){e.next=21;break}throw new Error(i.msg||"请求失败");case 21:return-401===i.code&&location.reload(),e.abrupt("return",i);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=c()(o.a.mark(function e(t){var n,r,i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(c),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"GET",credentials:"same-origin",mode:"cors"});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return i=void 0,e.prev=8,e.next=11,r.json();case 11:i=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==i.success){e.next=21;break}throw new Error(i.msg||"请求失败");case 21:return-401===i.code&&location.reload(),e.abrupt("return",i);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}()},EtYT:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("O57f"),r={getDays:function(e){return Math.floor(e/864e5)},getHours:function(e){return Math.floor(e/36e5)%24},getMinutes:function(e){return Math.floor(e/6e4)%60},getSeconds:function(e){return Math.floor(e/1e3)%60},getMilliSeconds:function(e){return e%1e3},format:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";if(!isNaN(parseInt(e))){var n=new Date(parseInt(e));return n.getFullYear()+t+a.a.padLeft(n.getMonth()+1,2)+t+a.a.padLeft(n.getDate(),2)}},formatMonth:function(e){if(!isNaN(parseInt(e)))return e=parseInt(e),e%12==0?e/12+"年":e+"个月"}}},HJfm:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s});var a={FIRST_ENTER:"firstEnter",ACTIVITY:"activity",SIGN:"sign",GUIDE:"guide"},r={BOOK_NOT_FOUND:"bookNotFound",REQUEST_ERROR:"requestError",CUSTOM_ERROR:"customError"},o={WX_JSAPI:"WX_JSAPI",WX_NATIVE:"WX_NATIVE",ALIPAY:"ALIPAY"},i={TEST:"test",PRE:"pre",ONLINE:"online"},c={FEEDBACK:0,COMPLAINT:1},s={SIGN_MODAL:"1",SIGN_BOTTOM:"2",READER_RMD:"3",READER_BANNER:"4"}},NHKQ:function(e,t,n){n.p=window.cdn||"/dist/"},O27J:function(e,t,n){e.exports=n("+qWx")(76)},O57f:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={padLeft:function(e,t){var n=(""+e).length;return Array(t>n?t-n+1||0:0).join(0)+e}}},U7vG:function(e,t,n){e.exports=n("+qWx")(77)},YCIw:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n("Zx67"),r=n.n(a),o=n("Zrlr"),i=n.n(o),c=n("wxAW"),s=n.n(c),u=n("zwoO"),l=n.n(u),d=n("Pf15"),f=n.n(d),h=n("U7vG"),p=n.n(h),g=n("D/cR"),m=n("BK/k"),v=function(e){return function(t){function n(e){return i()(this,n),l()(this,(n.__proto__||r()(n)).call(this,e))}return f()(n,t),s()(n,[{key:"componentDidMount",value:function(){if(!m.a.get("N_userAccess")){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59);m.a.set("N_userAccess",!0,{expires:t,path:"/"}),this.countUserAccess()}}},{key:"countUserAccess",value:function(){Object(g.d)("/countUserAccess.do")}},{key:"render",value:function(){return p.a.createElement("div",{className:"g-wrap",style:{padding:"0"}},p.a.createElement(e,this.props))}}]),n}(h.Component)}},cvfO:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var a,r,o=n("Dd8w"),i=n.n(o),c=n("woOf"),s=n.n(c),u=n("Zx67"),l=n.n(u),d=n("Zrlr"),f=n.n(d),h=n("wxAW"),p=n.n(h),g=n("zwoO"),m=n.n(g),v=n("Pf15"),b=n.n(v),w=n("U7vG"),E=n.n(w),x=n("vPHJ"),k=n("0nzA"),O=(n.n(k),r=a=function(e){function t(e){f()(this,t);var n=m()(this,(t.__proto__||l()(t)).call(this,e));return n.state=s()({},e),n.handleScroll=n.handleScroll.bind(n),n}return b()(t,e),p()(t,[{key:"handleScroll",value:function(){var e=this.container,t=this.state,n=t.hasMore,a=t.loadMore,r=t.offset,o=t.threshold,i=t.isLoading;n&&!i&&e&&window.pageYOffset>e.offsetHeight+Object(x.i)(e)-window.innerHeight-r-o&&this.setState({isLoading:!0},function(){return a()})}},{key:"renderFirstPage",value:function(){var e=this.container,t=this.state,n=t.hasMore,a=t.loadMore,r=t.isLoading;n&&!r&&e&&e.offsetHeight+Object(x.i)(e)<window.innerHeight&&this.setState({isLoading:!0},function(){return a()})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(i()({},e),function(){return t.renderFirstPage()})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.isLoading,n=this.props.children;return E.a.createElement("div",{ref:function(t){return e.container=t},className:"m-container"},n,t?E.a.createElement("p",{className:"m-addmore"},"加载中",E.a.createElement("i",{className:"one"}),E.a.createElement("i",{className:"two"}),E.a.createElement("i",{className:"three"})):"")}}]),t}(w.Component),a.defaultProps={hasMore:!1,loadMore:function(){},offset:0,threshold:10,isLoading:!1},r)},hMie:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("U7vG"),o=n.n(r),i=n("O27J"),c=n("Zx67"),s=n.n(c),u=n("Zrlr"),l=n.n(u),d=n("wxAW"),f=n.n(d),h=n("zwoO"),p=n.n(h),g=n("Pf15"),m=n.n(g),v=n("D/cR"),b=n("YCIw"),w=n("cvfO"),E=n("7GHf"),x=n("O57f"),k=n("EtYT"),O=(n("pAOM"),Object(b.a)(a=function(e){function t(){l()(this,t);var e=p()(this,(t.__proto__||s()(t)).call(this));return e.state={remainingNum:0,hongbaoList:[],expireHongbaoList:[],hasMore:!1,isLoading:!0,page:1,hasHongbao:!0},e.pageSize=20,e.hongbaoTypeMap={0:"充值红包",1:"签到红包",2:"补偿红包"},e}return m()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.fetchHongbaoOverview();this.fetchHongbaoList(),this.fetchExpireHongbaoList()}},{key:"fetchHongbaoOverview",value:function(){var e=this;Object(v.a)("/hongbao/overview.json").then(function(t){var n=t.code,a=t.payLoad;0===n&&a&&e.setState({remainingNum:a.remainingNum,hasHongbao:a.allTotal>0})})}},{key:"fetchHongbaoList",value:function(){var e=this;Object(v.a)("/hongbao/valid.json").then(function(t){0===t.code&&e.setState({hongbaoList:t.payLoad})})}},{key:"fetchExpireHongbaoList",value:function(){var e=this,t={page:this.state.page,pageSize:this.pageSize};Object(v.a)("/hongbao/expire.json",t).then(function(n){if(0===n.code){var a=e.state.expireHongbaoList,r=n.payLoad.length==e.pageSize;e.setState({expireHongbaoList:a.concat(n.payLoad),hasMore:r,isLoading:!1,page:t.page+1})}else e.setState({hasMore:!1,isLoading:!1})}).catch(function(t){e.setState({hasMore:!1,isLoading:!1})})}},{key:"loadMore",value:function(){this.fetchExpireHongbaoList()}},{key:"formatTime",value:function(e){if(!isNaN(parseInt(e))){var t=new Date,n=new Date(parseInt(e));if(t.getFullYear()==n.getFullYear()){var a=x.a.padLeft(n.getHours(),2)+":"+x.a.padLeft(n.getMinutes(),2);return t.getMonth()==n.getMonth()&&t.getDate()==n.getDate()?a:x.a.padLeft(n.getMonth()+1,2)+"-"+x.a.padLeft(n.getDate(),2)+"  "+a}return k.a.format(e,"-")}}},{key:"renderHongbao",value:function(e){var t=this;return(e||[]).map(function(e){var n=e.endtime,a=e.amount,r=e.balance,i=e.relatedType,c=e.expireDays;return o.a.createElement("tr",null,o.a.createElement("td",{width:"32%"},-1==c?o.a.createElement("span",{className:"t-center"},"-"):t.formatTime(n)),o.a.createElement("td",null,o.a.createElement("em",null,"+",a),a>r&&o.a.createElement("span",{className:"used"},"已用",0==r?"完":a-r)),o.a.createElement("td",{className:"last",width:"28%"},-1==c?"充值红包永久":""+(t.hongbaoTypeMap[i]||"")+c+"天"))})}},{key:"render",value:function(){var e=this.state,t=e.remainingNum,n=e.hasMore,a=e.isLoading,r=e.hongbaoList,i=e.expireHongbaoList;return e.hasHongbao?o.a.createElement("div",{className:"g-wrap",id:"hongbaoApp"},o.a.createElement(E.a,null),o.a.createElement("div",{className:"m-header"},o.a.createElement("h3",null,t||0),o.a.createElement("p",null,"红包剩余")),o.a.createElement("div",{className:"m-content"},r.length>0&&o.a.createElement("div",{className:"m-hongbaoList"},o.a.createElement("h3",null,"红包过期时间"),o.a.createElement("table",null,this.renderHongbao(r))),i.length>0&&o.a.createElement(w.a,{hasMore:n,loadMore:this.loadMore.bind(this),isLoading:a},o.a.createElement("div",{className:"m-hongbaoList"},o.a.createElement("h3",null,"已过期红包"),o.a.createElement("table",null,this.renderHongbao(i)))))):o.a.createElement("div",{className:"g-wrap bg-white",id:"hongbaoApp"},o.a.createElement(E.a,null),o.a.createElement("div",{className:"m-empty-panel"},o.a.createElement("p",null,"你还没用获得红包哦~"),o.a.createElement("a",{href:"/pay.do"},"充值获取？")))}}]),t}(r.Component))||a);n("8nng"),n("NHKQ"),n("1lB/");Object(i.render)(o.a.createElement(O,null),document.getElementById("root"))},pAOM:function(e,t){},"tBL+":function(e,t,n){"use strict";function a(e,t){var n=e.dot,a=e.message,r={dot:n};a&&(r.message=l()(a)),Object(d.a)("/statistics/log/upload.json",r).then(function(e){t&&t()})}function r(e){var t=e.dot,n=e.message,a={dot:t};n&&(a.message=l()(n));var r=new XMLHttpRequest;r.open("get","/statistics/log/upload.json?"+Object(d.c)(a),!1),r.send(null)}function o(e,t,n){var a=e.dot,r=e.message,o=s()({dot:a},t);r&&(o.message=l()(r));var i=Object(f.c)();Object(d.b)(i+"/statistics/log/cors/logUpload.json",o).then(function(e){n&&n()})}function i(e,t,n){var a=e.dot,r=e.message,o=s()({dot:a},t);r&&(o.message=l()(r)),Object(d.b)("/statistics/log/cors/logUpload.json",o).then(function(e){n&&n()})}n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i});var c=n("Dd8w"),s=n.n(c),u=n("mvHQ"),l=n.n(u),d=n("D/cR"),f=n("vPHJ")},vPHJ:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"h",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"f",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"i",function(){return l}),n.d(t,"g",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"c",function(){return h});var a=n("HJfm"),r=function(e){return e&&e.replace(/[\n\r]+/g," ").replace(/\t/g," ").replace(/\<p\>/gi,"").replace(/\<\/p\>/gi,"")},o=function(){var e=window.location.search,t=new RegExp("([^?=&]+)(=([^&]*))?","g"),n={};return e&&e.replace(t,function(e,t,a,r){n[t]=r}),n};Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n=this.length>>>0;if((t|=0)<0)t=Math.max(n-t,0);else if(t>=n)return-1;if(void 0===e){do{if(t in this&&void 0===this[t])return t}while(++t!==n)}else do{if(this[t]===e)return t}while(++t!==n);return-1});var i=function(e){document.title=e;var t=document.createElement("iframe");t.style.display="none";var n=function e(){setTimeout(function(){t.removeEventListener("load",e),setTimeout(function(){document.body.removeChild(t)},0)},0)};t.addEventListener("load",n),document.body.appendChild(t)},c=window.navigator.userAgent.toLowerCase(),s=/ipad|iphone|ipod/.test(c)&&!window.MSStream,u=function(e){var t=e.split("/");return e.indexOf("://")>-1?t[0]+"//"+t[2]:t[0]},l=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t?(n+=t.offsetTop,e(t.offsetParent,n)):n},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=+new Date,a=window.pageYOffset,r=e-a,o=requestAnimationFrame(function e(){var i=t-Math.max(0,n+t-+new Date);window.scrollTo(0,i*r/t+a),o=requestAnimationFrame(e),i==t&&cancelAnimationFrame(o)})},f=function(){return location.host.indexOf("yuedu.163.com")>-1?a.d.TEST:location.host.indexOf("pre.kuxuanbook.com")>-1?a.d.PRE:a.d.ONLINE},h=function(){var e="";return location.host.indexOf("pay.kuxuanbook")>-1?(e=location.host.indexOf("yuedu.163.com")>-1?"//www.kuxuanbook.yuedu.163.com":"//www.kuxuanbook.com",location.host.indexOf("prepay.kuxuanbook.com")>-1&&(e="//pre.kuxuanbook.com")):(e=location.host.indexOf("yuedu.163.com")>-1?"//pay.kuxuanbook.yuedu.163.com":"//pay.kuxuanbook.com",location.host.indexOf("pre.kuxuanbook.com")>-1&&(e="//prepay.kuxuanbook.com")),e}}},["hMie"]);