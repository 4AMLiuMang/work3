var myclick = document.getElementById("myclick");
var F2 = document.getElementById("F2");
var myimg = document.getElementById("myimg");
myclick.onclick = function () {
    var myclickdisplay = document.getElementById("inp").value;
    if (myclickdisplay == 0) {
        F2.style.display = "block"
        myimg.setAttribute("src", "img/map/2.png")
        inp.value = "1";
        console.log(myclickdisplay)
    } else {
        F2.style.display = "none"
        myimg.setAttribute("src", "img/map/1.png")
        inp.value = "0";
    }
};