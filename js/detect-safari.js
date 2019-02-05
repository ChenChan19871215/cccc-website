function switchContent() {
    var isSafari = 0;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') <= -1) {
            isSafari = 1;
        }
    }
    console.log(isSafari);
    if (!isSafari) {
        document.getElementById("apple-music-player").remove();
    } else {
        document.getElementById("apple-music-replacement").remove();
    }
}

window.onload = switchContent;
