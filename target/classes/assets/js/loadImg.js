function ScrollloadImage() {
    var imgElements = document.getElementsByTagName("img");
    var temp = -1;
    var lazyImgArr = new Array();
    var j = 0;
    for (var i = 0; i < imgElements.length; i++) {
        if (imgElements[i].classList.contains("lazy")) {
            lazyImgArr[j++] = imgElements[i];
        }
    }
    var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    var bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (temp < scrollHeight) {
        for (var k = 0; k < lazyImgArr.length; k++) {
            var imgTop = lazyImgArr[k].offsetTop;
            if ((imgTop - scrollHeight) <= bodyHeight) {
                lazyImgArr[k].src = lazyImgArr[k].alt;
                lazyImgArr[k].classList.remove("lazy");
                lazyImgArr[k].classList.add("notlazy");
            }
        }
        temp = scrollHeight;
    }
}

function loadPicNow() {
    initPic();
    var imgElements = document.getElementsByTagName("img");
    var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    var bodyHeight = document.documentElement.clientHeight || document.body.scrollTop;
    for (var i = 0; i < imgElements.length; i++) {
        var imgTop = imgElements[i].offsetTop;
        if ((imgTop - scrollHeight) <= bodyHeight) {
            imgElements[i].classList.remove("lazy");
            imgElements[i].classList.add("notlazy");
            imgElements[i].src = imgElements[i].alt;
        }
    }
}

function initPic() {
    var imgElements = document.getElementsByTagName("img");
    for (var i = 0; i < imgElements.length; i++) {
        if (!imgElements[i].classList.contains("notlazy")) {
            imgElements[i].alt = imgElements[i].src;
            imgElements[i].src = '/assets/images/default.png';
            imgElements[i].classList.add("lazy");
        }
    }
}

loadPicNow();

window.onscroll = function () {
    ScrollloadImage();
}