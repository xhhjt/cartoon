!function(a){a.fn.touchSlider=function(c){c.supportsCssTransitions=function(a){var c,d,b=["Webkit","Moz","Ms"];for(c=0,d=b.length;d>c;c++)if("undefined"!=typeof a[b[c]+"Transition"])return!0;return!1}(document.createElement("div").style),c=jQuery.extend({roll:!0,flexible:!1,btn_prev:null,btn_next:null,paging:null,speed:75,view:1,range:.15,page:1,transition:!1,initComplete:null,counter:null,multi:!1},c);var d=[];return d=a.extend({},a.fn.touchSlider.defaults,c),this.each(function(){a.fn.extend(this,b);var c=this;this.opts=d,this._view=this.opts.view,this._speed=this.opts.speed,this._tg=a(this),this._list=this._tg.children().children(),this._width=parseInt(this._tg.css("width")),this._item_w=parseInt(this._list.css("width")),this._len=this._list.length,this._range=this.opts.range*this._width,this._pos=[],this._start=[],this._startX=0,this._startY=0,this._left=0,this._top=0,this._drag=!1,this._scroll=!1,this._btn_prev,this._btn_next,this.init(),a(this).bind("touchstart",this.touchstart).bind("touchmove",this.touchmove).bind("touchend",this.touchend).bind("dragstart",this.touchstart).bind("drag",this.touchmove).bind("dragend",this.touchend),a(window).bind("orientationchange resize",function(){c.resize(c)})})};var b={init:function(){var c,d,b=this;for(a(this).children().css({width:this._width+"px",overflow:"visible"}),this.opts.flexible&&(this._item_w=this._width/this._view),this.opts.roll&&(this._len=Math.ceil(this._len/this._view)*this._view),c=this.opts.page>1&&this.opts.page<=this._len?(this.opts.page-1)*this._item_w:0,d=0;d<this._len;++d)this._pos[d]=this._item_w*d-c,this._start[d]=this._pos[d],this._list.eq(d).css({"float":"none",display:"block",position:"absolute",top:"0",left:this._pos[d]+"px",width:this._item_w+"px"}),this.opts.supportsCssTransitions&&this.opts.transition&&this._list.eq(d).css({"-moz-transition":"0ms","-moz-transform":"","-ms-transition":"0ms","-ms-transform":"","-webkit-transition":"0ms","-webkit-transform":"",transition:"0ms",transform:""});timer=setInterval(function(){return b.animate(-1,!0),!1},5e3),a(this).bind("touchstart",function(){clearInterval(timer)}).bind("touchend",function(){timer=setInterval(function(){b.animate(-1,!0)},5e3)}),this.opts.paging&&a(this._list).each(function(a){var d=b.opts.paging.eq(a);d.bind("click",function(c){return b.go_page(a,c),!1})}),this.counter(),this.initComplete()},initComplete:function(){"function"==typeof this.opts.initComplete&&this.opts.initComplete(this)},resize:function(a){var b,c;if(a.opts.flexible)for(b=a._item_w,a._width=parseInt(a._tg.css("width")),a._item_w=a._width/a._view,a._range=a.opts.range*a._width,c=0;c<a._len;++c)a._pos[c]=a._pos[c]/b*a._item_w,a._start[c]=a._start[c]/b*a._item_w,a._list.eq(c).css({left:a._pos[c]+"px",width:a._item_w+"px"}),this.opts.supportsCssTransitions&&this.opts.transition&&a._list.eq(c).css({"-moz-transition":"0ms","-moz-transform":"","-ms-transition":"0ms","-ms-transform":"","-webkit-transition":"0ms","-webkit-transform":"",transition:"0ms",transform:""});this.counter()},touchstart:function(a){if("touchstart"==a.type&&a.originalEvent.touches.length<=1||"dragstart"==a.type){this._startX=a.pageX||a.originalEvent.touches[0].pageX,this._startY=a.pageY||a.originalEvent.touches[0].pageY,this._scroll=!1,this._start=[];for(var b=0;b<this._len;++b)this._start[b]=this._pos[b]}},touchmove:function(a){var b,c,d,e,f;if("touchmove"==a.type&&a.originalEvent.touches.length<=1||"drag"==a.type)for(this._left=(a.pageX||a.originalEvent.touches[0].pageX)-this._startX,this._top=(a.pageY||a.originalEvent.touches[0].pageY)-this._startY,b=this._left<0?-1*this._left:this._left,c=this._top<0?-1*this._top:this._top,c>b||this._scroll?(this._left=0,this._drag=!1,this._scroll=!0):(a.preventDefault(),this._drag=!0,this._scroll=!1,this.position(a)),d=0;d<this._len;++d)e=this._start[d]+this._left,this.opts.supportsCssTransitions&&this.opts.transition?(f="translate3d("+e+"px,0,0)",this._list.eq(d).css({left:"","-moz-transition":"0ms","-moz-transform":f,"-ms-transition":"0ms","-ms-transform":f,"-webkit-transition":"0ms","-webkit-transform":f,transition:"0ms",transform:f})):this._list.eq(d).css("left",e+"px"),this._pos[d]=e},touchend:function(a){if("touchend"==a.type&&a.originalEvent.touches.length<=1||"dragend"==a.type){if(this._scroll)return this._drag=!1,this._scroll=!1,!1;this.animate(this.direction()),this._drag=!1,this._scroll=!1}},position:function(b){var d,e,f,g,h,c=this._view*this._item_w;if(-1==b||1==b){for(this._startX=0,this._start=[],d=0;d<this._len;++d)this._start[d]=this._pos[d];this._left=b*c}else this._left>c&&(this._left=c),this._left<-c&&(this._left=-c);if(this.opts.roll){for(e=[],d=0;d<this._len;++d)e[d]=this._pos[d];if(e.sort(function(a,b){return a-b}),f=e[this._len-this._view],g=a.inArray(e[0],this._pos),h=a.inArray(f,this._pos),this._view<=1&&(f=this._len-1),this.opts.multi){if(1==b&&e[0]>=0||this._drag&&e[0]>=100)for(d=0;d<this._view;++d,++g,++h)this._start[h]=this._start[g]-c,this._list.eq(h).css("left",this._start[h]+"px");else if(-1==b&&e[0]<=0||this._drag&&e[0]<=-100)for(d=0;d<this._view;++d,++g,++h)this._start[g]=this._start[h]+c,this._list.eq(g).css("left",this._start[g]+"px")}else if(1==b&&e[0]>=0||this._drag&&e[0]>0)for(d=0;d<this._view;++d,++g,++h)this._start[h]=this._start[g]-c,this._list.eq(h).css("left",this._start[h]+"px");else if(-1==b&&e[f]<=0||this._drag&&e[f]<=0)for(d=0;d<this._view;++d,++g,++h)this._start[g]=this._start[h]+c,this._list.eq(g).css("left",this._start[g]+"px")}else this.limit_chk()&&(this._left=this._left/2)},animate:function(b,c){var d,e,f;(this._drag||!this._scroll||c)&&(d=this,e=this._speed,c&&this.position(b),f=b*this._item_w*this._view,(0==this._left||!this.opts.roll&&this.limit_chk())&&(f=0),this._list.each(function(b){var h,i;d._pos[b]=d._start[b]+f,d.opts.supportsCssTransitions&&d.opts.transition?(h=e+"ms",i="translate3d("+d._pos[b]+"px,0,0)",c&&(h="0ms"),a(this).css({left:"","-moz-transition":h,"-moz-transform":i,"-ms-transition":h,"-ms-transform":i,"-webkit-transition":h,"-webkit-transform":i,transition:h,transform:i})):(a(this).stop(),a(this).animate({left:d._pos[b]+"px"},e))}),this.counter())},direction:function(){var a=0;return this._left<-this._range?a=-1:this._left>this._range&&(a=1),(!this._drag||this._scroll)&&(a=0),a},limit_chk:function(){var a=parseInt((this._len-1)/this._view)*this._view;return 0==this._start[0]&&this._left>0||0==this._start[a]&&this._left<0},go_page:function(b){for(var d=a.inArray(0,this._pos)/this._view+1,e=d-(b+1);0!=e;)0>e?(this.animate(-1,!0),e++):e>0&&(this.animate(1,!0),e--)},counter:function(){if("function"==typeof this.opts.counter){var b={total:Math.ceil(this._len/this._view),current:a.inArray(0,this._pos)/this._view+1};this.opts.counter(b)}}}}(jQuery),$(document).ready(function(){$(".main_visual").prev(".nav").css("position","absolute"),$dragBln=!1,$(".main_image").touchSlider({flexible:!0,speed:200,paging:$(".flicking_con a"),counter:function(a){$(".flicking_con a").removeClass("on").eq(a.current-1).addClass("on"),$(".flicking_conTit span").removeClass("on").eq(a.current-1).addClass("on")}}),focusSize.height=.640625*$(".main_visual img").width(),focusSize.focusImgWid($(".main_visual img")),focusSize.divSize()});var focusSize={width:0,height:0,focusImgWid:function(a){a.css("width","100%")},divSize:function(){var a=$(".main_visual img");focusSize.width=a.width(),focusSize.height=.640625*a.width(),$(".main_visual").height(focusSize.height),$(".main_image").height(focusSize.height),$(".main_image ul").height(focusSize.height),$(".main_image li").height(focusSize.height),$(".main_image li a").height(focusSize.height)}};$(window).on("orientationchange",function(){0==window.orientation||180==window.orientation?focusSize.divSize():focusSize.divSize()});