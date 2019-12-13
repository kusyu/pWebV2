var text = ["Rebekah", "a student", "a budding designer", "a budding programmer", "an animal lover", "in lowkey need of an internship"];
var i = 1;
var textChange = document.getElementById("changing");
setInterval(change, 2500);


function change() {
    textChange.classList.add("hide");
    setTimeout(function () {
        textChange.innerHTML = text[i];
        textChange.classList.remove("hide");
        i++;
        if (i >= text.length) {
            i = 0;
        }
    }, 500);
}
