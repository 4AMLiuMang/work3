var sdelay = 0;
function returnTop() {
    window.scrollBy(0, -5000);
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 50);
    }
}
