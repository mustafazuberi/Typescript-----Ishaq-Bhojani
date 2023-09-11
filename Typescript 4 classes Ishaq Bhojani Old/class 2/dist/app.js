"use strict";
const addBtn = document.getElementById("btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(add(+num1.value, +(+num2.value)));
});
let person = "Mustafa";
person = "Ayan";
const arr = ["Mustafa", "Apple", "Mango"];
const arr2 = [1, 2, 3, 4, 5];
arr2.push(321);
// CLASSES
class Student {
    constructor(userName, rollNumber) {
        this.userName = userName;
        this.rollNumber = rollNumber;
        this._skills = [];
    }
    get skills() {
        return this._skills;
    }
}
class VStudent extends Student {
    constructor(userName, rollNumber) {
        super(userName, rollNumber);
        this.userName = userName;
        this.rollNumber = rollNumber;
        this._canVolunteerIn = [];
    }
    addVSkill(skill) {
        this._canVolunteerIn.push(skill);
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
    get canVolunteerIn() {
        return this._canVolunteerIn;
    }
    set canVolunteerIn(skills) {
        for (let skill in skills) {
            if (!skill) {
                return;
            }
        }
        this._canVolunteerIn = skills;
    }
}
const student2 = new VStudent("Mustafa", 3231);
console.log(student2);
// student2.rollNumber = 'dsa'
student2.addVSkill("vskill 1 ");
student2.addSkill("Javascript");
console.log(student2.skills);
console.log(student2.canVolunteerIn);
student2.canVolunteerIn = ["Attendance", "teaching"];
// console.log(student1.getSkills());
// SINGELTONS
class Human {
    constructor(name) {
        this.name = name;
    }
    static getObject(name) {
        if (Human.object) {
            return Human.object;
        }
        this.object = new Human(name);
        return this.object;
    }
}
const rehan = Human.getObject("rehan");
const nadir = Human.getObject("nadir");
console.log(rehan, nadir);
//# sourceMappingURL=app.js.map