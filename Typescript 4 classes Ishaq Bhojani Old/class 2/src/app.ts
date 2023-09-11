const addBtn = document.getElementById("btn")!;
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(add(+num1.value, +(+num2.value)));
});

let person: string = "Mustafa";
person = "Ayan";

const arr: string[] = ["Mustafa", "Apple", "Mango"];

const arr2: number[] = [1, 2, 3, 4, 5];
arr2.push(321);

// CLASSES
abstract class Student {
  private _skills: string[] = [];

  constructor(public userName: string, public rollNumber: number) {}

  abstract addSkill(skill: string): void;

  get skills() {
    return this._skills;
  }
}

class VStudent extends Student {
  private _canVolunteerIn: string[] = [];

  constructor(public userName: string, public readonly rollNumber: number) {
    super(userName, rollNumber);
  }

  addVSkill(skill: string) {
    this._canVolunteerIn.push(skill);
  }

  addSkill(skill: string): void {
    this.skills.push(skill);
  }

  get canVolunteerIn() {
    return this._canVolunteerIn;
  }

  set canVolunteerIn(skills: string[]) {
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
  static object: Human;
  private constructor(private name: string) {}

  static getObject(name: string) {
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
