webpackJsonp(["category"],{"+qWx":function(e,t){e.exports=vendor},"7GHf":function(e,t,n){"use strict";var a=n("+6Bu"),r=n.n(a),i=n("U7vG"),o=n.n(i),s=n("XagN"),c=(n.n(s),function(e){var t=e.title,n=e.children,a=r()(e,["title","children"]);return o.a.createElement("div",{className:"m-head f-cb"},o.a.createElement("h2",null,t||""),o.a.createElement("a",{className:"f-fr",href:"/","data-log":a["data-log"]},"首页"),n||"")});t.a=c},"8nng":function(e,t,n){"use strict";var a=n("+6Bu"),r=n.n(a),i=n("Zrlr"),o=n.n(i),s=n("wxAW"),c=n.n(s),l=n("tBL+"),u=n("vPHJ"),d=function(){function e(t){var n=this;o()(this,e),this._handleDocClick=function(e){var t=n._getTargetElement(e);if(t){var a=t.dataset.log;if(a&&(n.capture(a),"A"===t.tagName.toUpperCase())){var r=t.href;if(!r||0===r.indexOf("javascript")||"_blank"===t.getAttribute("target"))return;e.preventDefault(),setTimeout(function(){window.location.href=t.href},200)}}},this._logToBackend=function(e){if(location.href.indexOf("pay.kuxuanbook")>-1){var t=Object(u.h)(),n=(t.targetUrl,t.shareUrl,r()(t,["targetUrl","shareUrl"]));Object(l.b)(JSON.parse(e),n)}else Object(l.a)(JSON.parse(e))},this.capture=function(e){n._logToBackend(e)},this._handleDocClick=this._handleDocClick.bind(this),this._addEventListeners()}return c()(e,[{key:"_addEventListeners",value:function(){document.addEventListener("click",this._handleDocClick,!0)}},{key:"_getTargetElement",value:function(e){for(var t=e.target;t;){if(t.dataset&&t.dataset.log)return t;t=t.parentNode}return null}}]),e}();new d},BEQ0:function(e,t,n){e.exports=n("+qWx")(3)},"BK/k":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n("VkW9"),r=n.n(a),i=new r.a,o=i.get("XSRF-TOKEN")},"D/cR":function(e,t,n){"use strict";function a(e){var t=[];for(var n in e)!function(n){Array.isArray(e[n])?e[n].forEach(function(e){t.push(n+"[]="+e)}):t.push(n+"="+e[n])}(n);return t.join("&")}t.c=a,n.d(t,"a",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return h});var r=n("Xxa5"),i=n.n(r),o=n("exGp"),s=n.n(o),c=n("rplX"),l=(n.n(c),n("BK/k")),u=function(){var e=s()(i.a.mark(function e(t){var n,r,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(s),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"GET",credentials:"same-origin"});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return o=void 0,e.prev=8,e.next=11,r.json();case 11:o=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==o.success){e.next=21;break}throw new Error(o.msg||"请求失败");case 21:return-401===o.code&&location.reload(),e.abrupt("return",o);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=s()(i.a.mark(function e(t){var n,r,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(c),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","X-XSRF-TOKEN":l.b},body:a(s)});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return o=void 0,e.prev=8,e.next=11,r.json();case 11:o=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==o.success){e.next=21;break}throw new Error(o.msg||"请求失败");case 21:return-401===o.code&&location.reload(),e.abrupt("return",o);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=s()(i.a.mark(function e(t){var n,r,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(s),n.length>0&&(t+="?"+n),e.next=4,fetch(t,{method:"GET",credentials:"same-origin",mode:"cors"});case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error("网络错误:"+r.status);case 7:return o=void 0,e.prev=8,e.next=11,r.json();case 11:o=e.sent,e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(8),new Error("服务器错误");case 17:if(!1!==o.success){e.next=21;break}throw new Error(o.msg||"请求失败");case 21:return-401===o.code&&location.reload(),e.abrupt("return",o);case 23:case"end":return e.stop()}},e,this,[[8,14]])}));return function(t){return e.apply(this,arguments)}}()},HJfm:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"f",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return c});var a={FIRST_ENTER:"firstEnter",ACTIVITY:"activity",SIGN:"sign",GUIDE:"guide"},r={BOOK_NOT_FOUND:"bookNotFound",REQUEST_ERROR:"requestError",CUSTOM_ERROR:"customError"},i={WX_JSAPI:"WX_JSAPI",WX_NATIVE:"WX_NATIVE",ALIPAY:"ALIPAY"},o={TEST:"test",PRE:"pre",ONLINE:"online"},s={FEEDBACK:0,COMPLAINT:1},c={SIGN_MODAL:"1",SIGN_BOTTOM:"2",READER_RMD:"3",READER_BANNER:"4"}},IvSR:function(e,t,n){"use strict";var a={onObj:{},oneObj:{},on:function(e,t){void 0===this.onObj[e]&&(this.onObj[e]=[]),this.onObj[e].push(t)},one:function(e,t){void 0===this.oneObj[e]&&(this.oneObj[e]=[]),this.oneObj[e].push(t)},off:function(e){this.onObj[e]=[],this.oneObj[e]=[]},trigger:function(){var e=void 0,t=void 0;if(0==arguments.length)return!1;if(e=arguments[0],t=[].concat(Array.prototype.slice.call(arguments,1)),void 0!==this.onObj[e]&&this.onObj[e].length>0)for(var n in this.onObj[e])this.onObj[e][n].apply(null,t);if(void 0!==this.oneObj[e]&&this.oneObj[e].length>0){for(var a in this.oneObj[e])this.oneObj[e][a].apply(null,t),this.oneObj[e][a]=void 0;this.oneObj[e]=[]}}};t.a=a},JAi0:function(e,t){},NHKQ:function(e,t,n){n.p=window.cdn||"/dist/"},NLTj:function(e,t,n){"use strict";var a=n("Zx67"),r=n.n(a),i=n("Zrlr"),o=n.n(i),s=n("wxAW"),c=n.n(s),l=n("zwoO"),u=n.n(l),d=n("Pf15"),h=n.n(d),f=n("U7vG"),v=n.n(f),p=n("3Mnf"),m=(n.n(p),function(e){function t(e){o()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this));return n.state={currentIndex:e.initIndex||0,action:e.initAction||""},n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.state.action;e&&e()}},{key:"componentWillReceiveProps",value:function(e){void 0!=e.currentIndex&&this.setState({currentIndex:e.currentIndex})}},{key:"switchTab",value:function(e,t,n){this.setState({currentIndex:e},t&&t())}},{key:"checkTitleIndex",value:function(e){return e===this.state.currentIndex?"tabtitle crt":"tabtitle"}},{key:"checkPanelIndex",value:function(e){return e===this.state.currentIndex?"tabpanel active":"tabpanel"}},{key:"render",value:function(){var e=this;this.props.tabName;return v.a.createElement("div",{id:"tabs"},v.a.createElement("ul",{className:"m-tabtitle crt-"+this.state.currentIndex,id:"J_appTab"},this.props.children.map(function(t,n){return v.a.createElement("li",{key:t.props.title,onClick:e.switchTab.bind(e,n,t.props.action),className:e.checkTitleIndex.bind(e,n)(),"data-log":t.props["data-log"]},t.props.title,v.a.createElement("b",null))})),v.a.createElement("div",{className:"m-tabpanel"},this.props.children.map(function(t,n){return v.a.createElement("div",{key:"tabpanel_"+t.props.title,className:e.checkPanelIndex.bind(e,n)()},t.props.children)})))}}]),t}(f.Component));t.a=m},O27J:function(e,t,n){e.exports=n("+qWx")(76)},U7vG:function(e,t,n){e.exports=n("+qWx")(77)},Xy3v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),r=n.n(a),i=n("O27J"),o=(n.n(i),n("rp3d")),s=(n("8nng"),n("NHKQ")),c=(n.n(s),n("1lB/"));n.n(c);Object(i.render)(r.a.createElement(o.a,null),document.getElementById("root"))},YCIw:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var a=n("Zx67"),r=n.n(a),i=n("Zrlr"),o=n.n(i),s=n("wxAW"),c=n.n(s),l=n("zwoO"),u=n.n(l),d=n("Pf15"),h=n.n(d),f=n("U7vG"),v=n.n(f),p=n("D/cR"),m=n("BK/k"),g=function(e){return function(t){function n(e){return o()(this,n),u()(this,(n.__proto__||r()(n)).call(this,e))}return h()(n,t),c()(n,[{key:"componentDidMount",value:function(){if(!m.a.get("N_userAccess")){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59);m.a.set("N_userAccess",!0,{expires:t,path:"/"}),this.countUserAccess()}}},{key:"countUserAccess",value:function(){Object(p.d)("/countUserAccess.do")}},{key:"render",value:function(){return v.a.createElement("div",{className:"g-wrap",style:{padding:"0"}},v.a.createElement(e,this.props))}}]),n}(f.Component)}},"cX+X":function(e,t){},cvfO:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var a,r,i=n("Dd8w"),o=n.n(i),s=n("woOf"),c=n.n(s),l=n("Zx67"),u=n.n(l),d=n("Zrlr"),h=n.n(d),f=n("wxAW"),v=n.n(f),p=n("zwoO"),m=n.n(p),g=n("Pf15"),b=n.n(g),k=n("U7vG"),y=n.n(k),w=n("vPHJ"),E=n("0nzA"),O=(n.n(E),r=a=function(e){function t(e){h()(this,t);var n=m()(this,(t.__proto__||u()(t)).call(this,e));return n.state=c()({},e),n.handleScroll=n.handleScroll.bind(n),n}return b()(t,e),v()(t,[{key:"handleScroll",value:function(){var e=this.container,t=this.state,n=t.hasMore,a=t.loadMore,r=t.offset,i=t.threshold,o=t.isLoading;n&&!o&&e&&window.pageYOffset>e.offsetHeight+Object(w.i)(e)-window.innerHeight-r-i&&this.setState({isLoading:!0},function(){return a()})}},{key:"renderFirstPage",value:function(){var e=this.container,t=this.state,n=t.hasMore,a=t.loadMore,r=t.isLoading;n&&!r&&e&&e.offsetHeight+Object(w.i)(e)<window.innerHeight&&this.setState({isLoading:!0},function(){return a()})}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(o()({},e),function(){return t.renderFirstPage()})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.isLoading,n=this.props.children;return y.a.createElement("div",{ref:function(t){return e.container=t},className:"m-container"},n,t?y.a.createElement("p",{className:"m-addmore"},"加载中",y.a.createElement("i",{className:"one"}),y.a.createElement("i",{className:"two"}),y.a.createElement("i",{className:"three"})):"")}}]),t}(k.Component),a.defaultProps={hasMore:!1,loadMore:function(){},offset:0,threshold:10,isLoading:!1},r)},qart:function(e,t){},rp3d:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),i=n("Dd8w"),o=n.n(i),s=n("woOf"),c=n.n(s),l=n("Zx67"),u=n.n(l),d=n("Zrlr"),h=n.n(d),f=n("wxAW"),v=n.n(f),p=n("zwoO"),m=n.n(p),g=n("Pf15"),b=n.n(g),k=n("U7vG"),y=n.n(k),w=n("D/cR"),E=n("tBL+"),O=n("vPHJ"),x=n("YCIw"),N=n("cvfO"),j=n("7GHf"),_=n("NLTj"),L=n("bOdI"),S=n.n(L),T=n("+6Bu"),I=n.n(T),D=n("IvSR"),U=(n("cX+X"),function(e){function t(e){h()(this,t);var n=m()(this,(t.__proto__||u()(t)).call(this));n.initData=null;var a=e.channel,r=e.initData;if(a===r.channel){var i=(r.channel,I()(r,["channel"]));n.initData=i}return n.hasFetchHeader=!1,n.state={selectList:{},listMap:{},isFold:!0,showMask:!1,visible:e.visible},n.logConfig={publish:{category:"c6-5"},male:{serial:"c6-7",wordCount:"c6-8",category:"c6-9"},female:{serial:"c6-7",wordCount:"c6-8",category:"c6-9"}},n}return b()(t,e),v()(t,[{key:"handleSelectChange",value:function(e,t,n){var a,r={};r[e]=t.value,D.a.trigger("selectChange",r);var i=o()({},this.state.selectList);i[e]=o()({},i[e],{activeValue:t.value,activeName:t.desc}),this.setState({selectList:i});var s=this.props.channel;Object(E.a)({dot:this.logConfig[s][e],message:(a={pos:n},S()(a,e,t.value),S()(a,"desc",t.desc),S()(a,"channel",s),a)})}},{key:"handleFold",value:function(){this.setState({isFold:!0,showMask:!1})}},{key:"handleUnfold",value:function(){var e=this.props.channel;Object(E.a)({dot:"c6-4",message:{channel:e}}),this.setState({isFold:!1,showMask:!0})}},{key:"checkTagIndex",value:function(e,t){var n=t?"tag crt":"tag";return n%4==3?n+" ll":n}},{key:"renderSelectTags",value:function(){var e=this,t=this.state.selectList,n=[];for(var a in t)!function(a){var r=t[a];n.push(y.a.createElement("li",{key:a,className:"f-cb"},y.a.createElement("span",{className:"select-label"},r.desc),y.a.createElement("span",{className:"select-tags f-fl"},r.list.map(function(t,n){return y.a.createElement("a",{key:a+t.value,className:e.checkTagIndex.bind(e,n,parseInt(t.value)===parseInt(r.activeValue))(),href:"javascript:;",onClick:e.handleSelectChange.bind(e,a,t,n)},t.desc)}))))}(a);return n}},{key:"renderFoldSelectTags",value:function(){var e=this.state.selectList,t=[];for(var n in e){var a=e[n];t.push(a.activeName),t.push(y.a.createElement("span",{className:"split"},"|"))}return t.pop(),y.a.createElement("p",null,t)}},{key:"composeWithInitData",value:function(e){var t=this.initData;for(var n in t)if(e[n]&&e[n].activeValue!==t[n]){e[n].activeValue=t[n];for(var a=e[n].list,r=0;r<a.length;r++)if(a[r].value===parseInt(t[n])){e[n].activeName=a[r].desc;break}}return e}},{key:"fetchHeader",value:function(e){var t=this;this.hasFetchHeader=!0;var n=this.props.fetchUrl;Object(w.a)(n,{channel:e}).then(function(e){if(e.params){var n={},a={};e.params.map(function(e,t){n[e.type]={desc:e.desc,activeValue:"0",activeName:"全部",list:e.list},a[e.type]=c()({},n[e.type])}),t.initData&&(a=t.composeWithInitData(a),t.initData=null),t.setState({resetList:n,selectList:a})}})}},{key:"reset",value:function(){var e=this.state.resetList,t={};for(var n in e)t[n]=c()({},e[n]);this.setState({selectList:t})}},{key:"componentWillReceiveProps",value:function(e){var t=e.visible,n=this.hasFetchHeader;this.setState({visible:t}),t&&!n&&this.fetchHeader(e.channel)}},{key:"componentDidMount",value:function(){var e=this;this.state.visible&&this.fetchHeader(this.props.channel),D.a.on("reset_"+this.props.channel,function(){return e.reset()})}},{key:"render",value:function(){var e=this.state,t=e.isFold,n=e.showMask,a=e.visible;return y.a.createElement("div",{className:"m-select-panel",style:a?{}:{display:"none"}},n?y.a.createElement("div",{className:"m-mask"}):"",y.a.createElement("div",{className:"unfold-panel",style:t?{display:"none"}:{}},y.a.createElement("ul",null,this.renderSelectTags()),y.a.createElement("a",{className:"btn-fold f-fr",href:"javascript:;",onClick:this.handleFold.bind(this)},y.a.createElement("span",null))),y.a.createElement("div",{className:"fold-panel",style:t?{}:{display:"none"}},y.a.createElement("a",{className:"btn-unfold",href:"javascript:;",onClick:this.handleUnfold.bind(this)},this.renderFoldSelectTags(),y.a.createElement("span",{className:"icon-unfold"}))))}}]),t}(k.Component)),A=U,C=(n("JAi0"),function(e){var t=e.bookItem,n=I()(e,["bookItem"]);return y.a.createElement("div",{className:"m-bookItemCategory"},y.a.createElement("a",{className:"link f-cb",href:"/book/reader.do?sourceUuid="+t.sourceUuid,"data-log":n["data-log"]},y.a.createElement("img",{className:"bookCover f-fl",src:t.cover+"?imageView&thumbnail=150y210",srcSet:t.cover+"?imageView&thumbnail=150y210 2x,"+t.cover+"?imageView&thumbnail=225y315 3x"}),y.a.createElement("div",{className:"bookDesc"},y.a.createElement("h3",null,t.title),y.a.createElement("div",{className:"detail"},y.a.createElement("span",{className:"author"},t.author),y.a.createElement("span",{className:"readCount"},"/",t.wordCount,"字")),y.a.createElement("p",{className:"desc"},Object(O.b)(t.description||"")))))}),M=C;n("qart");n.d(t,"a",function(){return R});var P,R=Object(x.a)(P=function(e){function t(e){h()(this,t);var n=m()(this,(t.__proto__||u()(t)).call(this,e));n.initData=Object(O.h)();var a=n.initData||{},r=a.channel,i=a.serial,o=a.wordCount,s=a.category,c=r||"male",l={};return l="publish"===c?{category:s||"0"}:{serial:i||"0",wordCount:o||"0",category:s||"0"},n.state={channel:c,selectParams:l,page:1,pageSize:20,bookList:[],hasMore:!1,isLoading:!0},n.tabOrderMap={female:0,male:1,publish:2},n.initFetchUrl(e),n}return b()(t,e),v()(t,[{key:"initFetchUrl",value:function(e){"free"==(e.type||"all")?(this.fetchBookUrl="/free/books.json",this.fetchHeaderUrl="/free/header.json"):(this.fetchBookUrl="/category/books.json",this.fetchHeaderUrl="/category/header.json")}},{key:"handleSelectChange",value:function(e){var t=this,n=c()({},this.state.selectParams,e);this.setState({selectParams:n,page:1,bookList:[],hasMore:!1},function(){return t.fetchBooks()})}},{key:"switchType",value:function(e){var t=this;D.a.trigger("reset_"+e);var n={};n="publish"==e?{category:"0"}:{serial:"0",wordCount:"0",category:"0"},this.setState({channel:e,selectParams:n,page:1,bookList:[],hasMore:!1,isLoading:!0},function(){return t.fetchBooks()})}},{key:"fetchBooks",value:function(){var e=this,t=o()({channel:this.state.channel},this.state.selectParams,{page:this.state.page,pageSize:this.state.pageSize});Object(w.a)(this.fetchBookUrl,t).then(function(n){if(n.books&&n.books.length>0){var a=e.state.bookList;e.setState({bookList:a.concat(n.books),page:t.page+1,hasMore:!0,isLoading:!1})}else e.setState({hasMore:!1,isLoading:!1})})}},{key:"loadMore",value:function(){this.fetchBooks()}},{key:"renderBookList",value:function(){var e=this.state,t=e.channel;return(e.bookList||[]).map(function(e,n){return y.a.createElement(M,{key:e.sourceUuid+n,bookItem:e,"data-log":r()({dot:"c6-6",message:{pos:n,channel:t,sourceUuid:e.sourceUuid}})})})}},{key:"componentDidMount",value:function(){var e=this;Object(E.a)({dot:"c6-1"}),this.fetchBooks(),D.a.on("selectChange",function(t){return e.handleSelectChange(t)})}},{key:"render",value:function(){var e=this.initData,t=this.state,n=t.channel,a=t.bookList,i=t.hasMore,o=t.isLoading;return y.a.createElement("div",{className:"g-wrap",id:"categoryApp"},y.a.createElement("div",{className:"m-header-fixed"},y.a.createElement(j.a,{"data-log":r()({dot:"c6-2"})}),y.a.createElement(_.a,{initIndex:this.tabOrderMap[n]},y.a.createElement("div",{title:"女生",action:this.switchType.bind(this,"female"),"data-log":r()({dot:"c6-3",message:{channel:"female"}})},y.a.createElement(A,{channel:"female",fetchUrl:this.fetchHeaderUrl,initData:e,visible:"female"==n})),y.a.createElement("div",{title:"男生",action:this.switchType.bind(this,"male"),"data-log":r()({dot:"c6-3",message:{channel:"male"}})},y.a.createElement(A,{channel:"male",fetchUrl:this.fetchHeaderUrl,initData:e,visible:"male"==n})),y.a.createElement("div",{title:"出版",action:this.switchType.bind(this,"publish"),"data-log":r()({dot:"c6-3",message:{channel:"publish"}})},y.a.createElement(A,{channel:"publish",fetchUrl:this.fetchHeaderUrl,initData:e,visible:"publish"==n})))),y.a.createElement("div",{className:"m-bookList"},y.a.createElement(N.a,{hasMore:i,loadMore:this.loadMore.bind(this),isLoading:o},y.a.createElement("ul",{className:"m-booklist-content"},this.renderBookList(a)))))}}]),t}(k.Component))||P},"tBL+":function(e,t,n){"use strict";function a(e,t){var n=e.dot,a=e.message,r={dot:n};a&&(r.message=u()(a)),Object(d.a)("/statistics/log/upload.json",r).then(function(e){t&&t()})}function r(e){var t=e.dot,n=e.message,a={dot:t};n&&(a.message=u()(n));var r=new XMLHttpRequest;r.open("get","/statistics/log/upload.json?"+Object(d.c)(a),!1),r.send(null)}function i(e,t,n){var a=e.dot,r=e.message,i=c()({dot:a},t);r&&(i.message=u()(r));var o=Object(h.c)();Object(d.b)(o+"/statistics/log/cors/logUpload.json",i).then(function(e){n&&n()})}function o(e,t,n){var a=e.dot,r=e.message,i=c()({dot:a},t);r&&(i.message=u()(r)),Object(d.b)("/statistics/log/cors/logUpload.json",i).then(function(e){n&&n()})}n.d(t,"a",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o});var s=n("Dd8w"),c=n.n(s),l=n("mvHQ"),u=n.n(l),d=n("D/cR"),h=n("vPHJ")},vPHJ:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"h",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"i",function(){return u}),n.d(t,"g",function(){return d}),n.d(t,"d",function(){return h}),n.d(t,"c",function(){return f});var a=n("HJfm"),r=function(e){return e&&e.replace(/[\n\r]+/g," ").replace(/\t/g," ").replace(/\<p\>/gi,"").replace(/\<\/p\>/gi,"")},i=function(){var e=window.location.search,t=new RegExp("([^?=&]+)(=([^&]*))?","g"),n={};return e&&e.replace(t,function(e,t,a,r){n[t]=r}),n};Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n=this.length>>>0;if((t|=0)<0)t=Math.max(n-t,0);else if(t>=n)return-1;if(void 0===e){do{if(t in this&&void 0===this[t])return t}while(++t!==n)}else do{if(this[t]===e)return t}while(++t!==n);return-1});var o=function(e){document.title=e;var t=document.createElement("iframe");t.style.display="none";var n=function e(){setTimeout(function(){t.removeEventListener("load",e),setTimeout(function(){document.body.removeChild(t)},0)},0)};t.addEventListener("load",n),document.body.appendChild(t)},s=window.navigator.userAgent.toLowerCase(),c=/ipad|iphone|ipod/.test(s)&&!window.MSStream,l=function(e){var t=e.split("/");return e.indexOf("://")>-1?t[0]+"//"+t[2]:t[0]},u=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t?(n+=t.offsetTop,e(t.offsetParent,n)):n},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=+new Date,a=window.pageYOffset,r=e-a,i=requestAnimationFrame(function e(){var o=t-Math.max(0,n+t-+new Date);window.scrollTo(0,o*r/t+a),i=requestAnimationFrame(e),o==t&&cancelAnimationFrame(i)})},h=function(){return location.host.indexOf("yuedu.163.com")>-1?a.d.TEST:location.host.indexOf("pre.kuxuanbook.com")>-1?a.d.PRE:a.d.ONLINE},f=function(){var e="";return location.host.indexOf("pay.kuxuanbook")>-1?(e=location.host.indexOf("yuedu.163.com")>-1?"//www.kuxuanbook.yuedu.163.com":"//www.kuxuanbook.com",location.host.indexOf("prepay.kuxuanbook.com")>-1&&(e="//pre.kuxuanbook.com")):(e=location.host.indexOf("yuedu.163.com")>-1?"//pay.kuxuanbook.yuedu.163.com":"//pay.kuxuanbook.com",location.host.indexOf("pre.kuxuanbook.com")>-1&&(e="//prepay.kuxuanbook.com")),e}}},["Xy3v"]);