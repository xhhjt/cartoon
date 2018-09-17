var sliderContainer=document.getElementById('sliderItem');
var sliderItem= document.getElementById('sliderItem').getElementsByTagName('li');
var imglen=j=sliderItem.length;
var posEm=document.getElementById('slideNav').getElementsByTagName('em');
var slideMotion,deltaoffset,startx,nowx,distance;
var ifmove=false;
var nowImg=0,distance=0;
var slidetime=0;
var w=moveDist=document.body.clientWidth;
var h=w/2>=180?180:136;

var mdown=function(event){clearInterval(slideMotion);var touch=event.touches[0];startx=touch.pageX;ifmove=true;deltaoffset=sliderContainer.offsetLeft;}
var mmove=function(event){ event.preventDefault(); if(ifmove){var touch=event.touches[0];nowx=touch.pageX; distance=nowx-startx;sliderContainer.style.MozTransitionDuration = sliderContainer.style.webkitTransitionDuration =sliderContainer.style.TransitionDuration = '0ms';sliderContainer.style.MozTransform = sliderContainer.style.webkitTransform = sliderContainer.style.Transform = 'translate3d(' + (- nowImg * moveDist+distance) + 'px,0,0)';}}
var mup=function(event){ ifmove=false; if(distance>60){nowImg= nowImg-- > 0?nowImg:0;SlideImg(nowImg, imglen);} else if(distance<-60){nowImg=nowImg++<imglen-1?nowImg:0;SlideImg(nowImg, imglen); } else{sliderContainer.style.MozTransitionDuration = sliderContainer.style.webkitTransitionDuration =sliderContainer.style.TransitionDuration = '50ms';sliderContainer.style.MozTransform = sliderContainer.style.webkitTransform = sliderContainer.style.Transform = 'translate3d(' + (- nowImg* moveDist) + 'px,0,0)';
}slideMotion=setInterval(function(){SlideImg(nowImg=nowImg++<imglen-1?nowImg:0 , imglen);},3000); }

var SlideImg=function(curImg,imgNum){for(k=0;k<imgNum;k++){sliderItem[k].style.display='block';posEm[k].className=' ';}posEm[curImg].className='on';sliderContainer.style.MozTransitionDuration = sliderContainer.style.webkitTransitionDuration =sliderContainer.style.TransitionDuration = '500ms';sliderContainer.style.MozTransform = sliderContainer.style.webkitTransform = sliderContainer.style.Transform = 'translate3d(' + (- curImg * moveDist) + 'px,0,0)';distance=0;}

window.onload=function(){sliderContainer.style.height=h+"px";while(j--){newEm=document.createElement("em");document.getElementById('slideNav').appendChild(newEm);sliderItem[j].style.width=w+'px';sliderItem[j].style.height=h+'px';
}sliderContainer.style.width=sliderItem.length*document.body.clientWidth+'px';
    posEm[0].className='on';slideMotion=setInterval(function(){SlideImg(nowImg=nowImg++<imglen-1?nowImg:0 , imglen);},3000);sliderContainer.addEventListener("touchstart",mdown,false);sliderContainer.addEventListener("touchmove",mmove,false);sliderContainer.addEventListener("touchend",mup,false);
}


window.onresize=function(){j=imglen;while(j--){sliderItem[j].style.width=document.body.clientWidth+'px';
}moveDist=document.body.clientWidth;sliderContainer.style.width=sliderItem.length*document.body.clientWidth+'px';}


function getRTime(str){
    var EndTime= new Date(str);
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();

    var d=Math.floor(t/1000/60/60/24);
    var h=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);
    var s=Math.floor(t/1000%60);
    var t_h=h+d*24;

    try{
        document.getElementById("h").innerHTML = t_h<10?"0"+t_h:t_h;
        document.getElementById("m").innerHTML = m<10?"0"+m:m ;
        document.getElementById("s").innerHTML = s<10?"0"+s:s ;
    }
    catch(e){}
}
setInterval(function(){getRTime('2017/4/4 00:00:00')},1000);