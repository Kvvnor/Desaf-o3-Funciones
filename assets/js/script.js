function pintar (ele, color) {
    ele.style.backgroundColor = color;
}

const ele = document.querySelector("#ele1");
ele.style.backgroundColor = "green";

ele.addEventListener("click", function () {
    pintar(ele, "yellow");

});
    