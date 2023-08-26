"use strict";
// --------------------------------Class 1 --------------------------------
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn = document.getElementById("btn");
const add = (val1, val2) => {
    return val1 + val2;
};
btn.addEventListener("click", () => {
    console.log(add(+input1.value, +input1.value));
});
let userName = "Mustafa";
userName = 12;
let userName2 = "Mustafa";
const arrOfNames = ["Mustafa", "name2"];
let person = {
    personName: "Mustafa",
    rollNo: 12,
    hobbies: ["cricket", "football", "music"],
};
const persons = [];
for (var i = 0; i < 10; i++) {
    const randomObject = {
        personName: "Mustafa" + (i + 1),
        rollNo: 12 + i + 1,
        hobbies: ["hobies"],
    };
    persons.push(randomObject);
}
console.log(persons);
const addNums = function (val1, val2, c) {
    c("hello");
    return val1 + val2;
};
const c = (toprint) => {
    console.log(toprint);
};
const addNumsAnswer = addNums(2, 3, c);
console.log(addNumsAnswer);
const addOrSubt = (val1, val2, calc) => {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "substract") {
        return val1 - val2;
    }
    return 0;
};
console.log(addOrSubt(10, 5, "add"));
console.log(addOrSubt(10, 5, "substract"));
// --------------------------------Class 3 --------------------------------
// -------------Tuples (jab fix lenght off arrray chahye ho tw tuples use krty hain )
let gender = ["Male", "Female"];
// gender[2] = 'dsada'       // yaha problem krega yay qk hum ne define kya hua ha ke 2 sa zyada values nahi hosakti
// gender.push('dasdasd')      // but  ya yaha problem nahi krega qk ya typescript ka bug h
// --------------------------------Class 4 --------------------------------
class Student {
    constructor(stName, rollNo) {
        this.stName = stName;
        this.rollNo = rollNo;
    }
}
const st = new Student("Mustafa ct1", 12);
console.log(st);
console.log(st.stName);
// --------
class Developer {
    constructor(stName, rollNo) {
        this.stName = stName;
        this.rollNo = rollNo;
        this.skills = [];
    }
    addSkill(skill) {
        if (!skill) {
            throw new Error("Cannot Push undefined skill");
        }
        this.skills.push(skill);
    }
    get devSkills() {
        return this.skills;
    }
}
const dev = new Developer("Mustafa", 2);
dev.addSkill("react");
dev.addSkill("HTML");
dev.addSkill("JS");
dev.addSkill("CSS");
console.log(dev.devSkills);
class Product {
    constructor(_id, _username, _price) {
        this._id = _id;
        this._username = _username;
        this._price = _price;
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get price() {
        return this._price;
    }
    set username(newName) {
        if (!newName) {
            throw new Error("Cannot set name undefined");
        }
        this._username = newName;
    }
}
class ClothingProduct extends Product {
    constructor(_id, _username, _price, _brand, model) {
        super(_id, _username, _price);
        this._brand = _brand;
        this.model = model;
    }
    get brand() {
        return this._brand;
    }
    getDiscountRates() {
        return this.price * 0.4;
    }
}
const shirt1 = new ClothingProduct(1, "Mustafa CP", 45, "Calvin", 2020);
console.log(shirt1.username);
console.log(shirt1.brand);
console.log(shirt1.getDiscountRates());
// ------------------Singeltons------------------
class Utility {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Utility();
        }
        return this.instance;
    }
}
Utility.instance = { UtilityName: "Mustagfa ki utility" };
const util1 = Utility.getInstance();
const util2 = Utility.getInstance();
console.log(util1);
console.log(util2);
const tiger = { name: "tiger", runningSpeed: 321 };
const tiger2 = {
    name: "tiger",
    runningSpeed: 321,
    flyingSpeed: 2332,
};
const tiger3 = {
    name: "tiger",
    runningSpeed: 3232,
    flyingSpeed: 342,
};
class TigerClass {
    constructor(name, runningSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
    }
    eat(food) {
        return food + ' kha le ...';
    }
}
const tigerInter = new TigerClass('Mustafa', 2314);
console.log(tigerInter);
console.log(tigerInter.eat('Lassi'));
function log(creature) {
    if ('runningSpeed' in creature) { // Type Guards
        console.log(creature.runningSpeed);
    }
}
