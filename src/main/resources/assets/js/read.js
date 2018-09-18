
var checkAgain = document.getElementById("checkAgain"), navtop = document.getElementById("navtop"), text = document.getElementById("text"),
    gzh = document.getElementById("gzh");

function showShare() {
    gzh.style.display = "block";
    location.href = "#codeImg";
}

function closeShare() {
    gzh.style.display = "none";

}


//
text.addEventListener("click", function () {
    if (funcBox.classList.contains("hide")) {
        funcBox.classList.remove("hide");
        try {
            navtop.classList.remove("hide");
        } catch (e) { }
    }
    else {
        funcBox.classList.add("hide");
        try {
            navtop.classList.add("hide");
        } catch (e) { }
    }
})

text.addEventListener("touchmove", function () {
    funcBox.classList.add("hide");
    try {
        navtop.classList.add("hide");
    } catch (e) { }
})



//自动购买
var ifcheck = 0, hidNovelId, autopayCartoonId, chapterId, cIndex, sId;
autopayCartoonId = getCookie("autopayCartoonId") || '';
hidNovelId = document.getElementById("hidNovelId").value;
chapterId = document.getElementById("hidChapterId").value;
cIndex = document.getElementById("hidChapterIndex").value;
sId = document.getElementById("hidSId").value;
setAutopay(hidNovelId);

function setAutopay(id) {
    autopayCartoonIdArr = autopayCartoonId.split(',');
    if (autopayCartoonIdArr.indexOf(hidNovelId) >= 0) {
        ifcheck = 1;
    }
    else {
        ifcheck = 0;
    }
}


var qcno = $("#hidcno").val() == undefined ? "" : $("#hidcno").val();

var loadedId = []; //加载过的章节ID数组
var sendcheck = 0, maxindex = 0;

function GetContent(tp, isBuy, islook) {


    if (sendcheck == 1) {
        return false;
    }

    var requestIndex = cIndex;

    closeShare();

    alertBox.innerHTML = "";
    alertBox.style.display = "none";


    if (tp == 1) {

        requestIndex = requestIndex - 1;
        if (cIndex == 1) {

            alertBox.innerHTML = "已至第一话";
            alertBox.style.display = "block";
            setTimeout(function () {
                alertBox.style.display = "none";
            }, 1200);
            return;
        }
    } else if (tp == 2) {
        requestIndex = requestIndex + 1;
        if (cIndex == maxindex) {

            alertBox.innerHTML = "已至最后一话";
            alertBox.style.display = "block";

            setTimeout(function () {
                alertBox.style.display = "none";
            }, 1200);

            return;
        }
    }


    sendcheck = 1;


    if (loadedId.indexOf(requestIndex) == -1) {//如果requestID没有请求过

        var data = { "chapterId": chapterId, "typeId": tp, "cIndex": cIndex, "ifCheck": ifcheck, "cartoonId": hidNovelId, "isBuy": isBuy, "sId": sId, "islook": islook };

        $.ajax({ //异步数据加载
            type: "POST",
            url: "/Cartoon/GetContent",
            dataType: "json",
            data: data,
            beforeSend: function () {
                alertBox.innerHTML = "加载中..";
                alertBox.style.display = "block";
            },
            success: function (msg) {

                alertBox.style.display = "none";

                //  console.log(msg);

                if (parseInt(msg.code) < 100) {

                    chapterId = msg.chapterid;
                    cIndex = msg.index;
                    maxindex = msg.max;

                    var action = "Read";
                    if (islook == 1) {
                        action = "look";
                    } else if (islook == 2) {
                        action = "channellook";
                    }


                    if (parseInt(islook) != 2) {

                        window.history.pushState({}, 0, '/Cartoon/' + action + '?cno=' + qcno + '&cartoonId=' + hidNovelId + '&chapterId=' + chapterId);
                    }

                    $("#chaptername").html(msg.name);

                }

                if (msg.code == "0") {

                    loadedId.push(cIndex);
                    loadedId.sort();
                    if (loadedId.length > 3) {
                        if (tp == 1) {
                            loadedId.pop();
                        } else if (tp == 2) {
                            loadedId.shift();
                        }
                    }

                    var h = "";

                    var im = JSON.parse(msg.imglist);

                    var tw = parseInt($("#showimgcontent").width());


                    $.each(im, function (i, o) {
                        var ih = tw / (parseFloat(o.w) / parseFloat(o.h));

                        var e = "/images/cartoon.jpg?t=1";
                        if (hidNovelId == 52 && (cIndex == 24 || cIndex == 23 || cIndex == 25)) {
                            o.u = o.u + "?t=2";
                        }
                        h += "<img data-original='" + o.u + "' src='" + e + "' style='width:" + tw + "px;height:" + ih + "px' onerror='this.src=\"" + e + "\"' >";
                    })

                    $(".showcontentitem").hide();
                    $("#showimgcontent").append("<div id='showcontentitem" + cIndex + "' class='showcontentitem' data-cid='" +
                        chapterId + "' data-cname='" + msg.name + "'>"
                        + h + "</div");


                    $("#showcontentitem" + cIndex + " img").lazyload({
                        skip_invisible: false,
                        delay: 0,
                        threshold: 30
                    });

                    location.href = "#text";

                }

                if (islook == 1 || islook == 2) {
                    if (msg.code == "0") {
                        $("#menuBox").show();
                    } else
                    if (msg.code == "1" || msg.code == "2" || msg.code == "3") {
                        showShare();
                        $("#menuBox").hide();
                        $("#funcBox").hide();

                    } else {

                        alertBox.innerHTML = msg.message;
                        alertBox.style.display = "block";
                    }

                } else {

                    if (msg.code == "0") {

                        //加载内容
                        $("#needLogin").hide();
                        $("#needPay").hide();
                        $("#needCoinPay").hide();


                    } else if (msg.code == "1") {
                        var btnh = $("#rechargebtn").attr("href");
                        $("#rechargebtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#loginbtn").attr("href");
                        $("#loginbtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#taskbtn").attr("href");
                        $("#taskbtn").attr("href", btnh + "?back=" + msg.url);


                        $("#username").html($("#hidUserName").val());
                        $("#needLogin").show();
                        location.href = "#needLogin";

                    } else if (msg.code == "2") {
                        var btnh = $("#rechargebtn").attr("href");
                        $("#rechargebtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#loginbtn").attr("href");
                        $("#loginbtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#taskbtn").attr("href");
                        $("#taskbtn").attr("href", btnh + "?back=" + msg.url);


                        $("#username").html($("#hidUserName").val());
                        $("#needLogin").show();
                        location.href = "#needLogin";

                    } else if (msg.code == "3") { //登录
                        var btnh = $("#rechargebtn").attr("href");
                        $("#rechargebtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#loginbtn").attr("href");
                        $("#loginbtn").attr("href", btnh + "?back=" + msg.url);

                        btnh = $("#taskbtn").attr("href");
                        $("#taskbtn").attr("href", btnh + "?back=" + msg.url);


                        $("#username").html($("#hidUserName").val());
                        $("#needLogin").show();

                        location.href = "#needLogin";

                    } else if (msg.code == "101") {
                        alertBox.innerHTML = msg.message;
                        alertBox.style.display = "block";
                        location.href = msg.url;
                    } else {

                        alertBox.innerHTML = msg.message;
                        alertBox.style.display = "block";
                        //location.href(msg.url);
                    }

                }
            },
            complete: function () {
                sendcheck = 0;
            },
            error: function () {
                alertBox.innerHTML = "网络异常，请刷新";
                alertBox.style.display = "block";
            }
        });
    } else {

        var action = "Read";
        if (islook == 1) {
            action = "look";
        } else if (islook == 2) {
            action = "channellook";
        }



        $("#needLogin").hide();
        $("#needPay").hide();
        $("#needCoinPay").hide();

        cIndex = requestIndex;
        chapterId = $("#showcontentitem" + requestIndex).data("cid");

        if (parseInt(islook) != 2) {

            window.history.pushState({}, 0, '/Cartoon/' + action + '?cno=' + qcno + '&cartoonId=' + hidNovelId + '&chapterId=' + chapterId);
        }

        $("#chaptername").html($("#showcontentitem" + requestIndex).data("cname"));

        $(".showcontentitem").hide();
        $("#showcontentitem" + requestIndex).show();
        location.href = "#text";

        var data = { "chapterId": chapterId, "cartoonId": hidNovelId, "sId": sId };

        $.ajax({ //异步数据加载
            type: "POST",
            url: "/Cartoon/TopDown",
            dataType: "json",
            data: data,
            beforeSend: function () {

            },
            success: function (msg) {

            },
            complete: function () {
                sendcheck = 0;
            },
        });
    }
}

$("#text").scroll(function () {

    console.log(1011)
    var oDiv = document.getElementById('showimgcontent');

    var aLi = oDiv.children[0].children;

    for (var i = 0, l = aLi.length; i < l; i++) {
        var oLi = aLi[i];
        var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
        var h = getH(oLi);
        if (h < t) {
            setTimeout("setImg(" + i + ")", 100);
        }
    }
});


function getH(obj) {
    var h = 0;
    while (obj) {
        h += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return h;
}

function setImg(index) {
    var oDiv = document.getElementById('showimgcontent');

    var aLi = oDiv.children[0].children;

    var that = $(aLi[index]);
    that.attr("src", that.data("src"))

}