var i = 1;
var timer_id;
var temp = " ";
var marb;

function move() {
    var dark = "marble1.jpg";
    var light = "marble3.jpg";

    timer_id = setInterval(function () {
        var sectedlihght = document.querySelector('[src="' + light + '"]');
        if (sectedlihght.nextElementSibling) {
            sectedlihght.setAttribute("src", dark);
            sectedlihght.nextElementSibling.setAttribute("src", light);
        } else {
            sectedlihght.setAttribute("src", dark);
            document.querySelector("#marble").
            firstElementChild.setAttribute("src", light);
        }


    }, 1000);
}

function stop() {
    clearInterval(timer_id);
}
