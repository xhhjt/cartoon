function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//璇诲彇cookies
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


var loginTimes,fontSize,viewMode;
loginTimes=getCookie("loginTimes")||0;
//fontSize=getCookie("fontSize")||18;
//viewMode=getCookie("viewMode")||'daymodeText';
//showAddBox=getCookie("showAddBox")|| 0;
