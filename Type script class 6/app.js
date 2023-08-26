var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// -------Type Casting-------
var input1 = document.getElementById("input1");
var num = +input1 * 4;
var input = document.getElementById("input");
var promiseFunc = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ name: "Mustafa", id: 321 });
        }, 1000);
    });
};
promiseFunc().then(function (res) {
    for (var key in res) {
        console.log("".concat(key, " : ").concat(res[key]));
    }
});
var merge = function (objA, objB) {
    return __assign(__assign({}, objA), objB);
};
var merged = merge({ name: "Mustafa Merge" }, { id: 32 });
console.log(merged);
