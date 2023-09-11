"use strict";
// Type Casting
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const inp = document.getElementById('inp1')! as HTMLInputElement
// const inp = <HTMLInputElement> document.getElementById('inp1')!
// console.log(inp.value)
// GENERIGCS
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 1500);
});
promise.then((data) => data.split(""));
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
// const merged = merge({ name: "nadir" }, { age: 32 });
const merged = merge({ name: "nadir" }, { age: 32 });
console.log(merged.age);
// Decorators
function Logger(data) {
    return function (_) {
        console.log("Logging...", data);
    };
}
function FillHTML(template, id) {
    return function (_) {
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "nadir";
        console.log("called");
    }
};
Person = __decorate([
    Logger("data"),
    FillHTML("<b>loading...</b>", "app")
], Person);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw new Error("cannot add different types");
    }
}
// (add("dsa", "dasdsa") as string).split('')
console.log(add("dsa", "dasdsa"));
//# sourceMappingURL=app.js.map