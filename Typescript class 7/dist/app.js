"use strict";
// decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(message) {
    //decorator Factory
    return function (constructor) {
        console.log("LOGGING...");
        console.log(message);
    };
}
function FillHTML(template, element) {
    return function (constructor) {
        const p = new constructor();
        const elem = document.getElementById(element);
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1").innerText = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Mustafa";
    }
};
Person = __decorate([
    Logger("Calling From Person..."),
    FillHTML("<h1>Hello</h1>", "app")
], Person);
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Typed did'nt match");
    }
}
const value = add("Hello", "World");
const value2 = add(3, 3);
value2.toFixed(2);
console.log(value.split(""));
