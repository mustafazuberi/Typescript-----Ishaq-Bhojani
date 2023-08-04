var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("btn");
var add = function (val1, val2) {
    return val1 + val2;
};
button.addEventListener("click", function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal));
});
