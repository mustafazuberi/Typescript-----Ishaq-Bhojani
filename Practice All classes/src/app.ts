// --------------------------------Class 1 --------------------------------
const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;
const btn: HTMLElement = document.getElementById("btn")!;

const add = (val1: number, val2: number) => {
  return val1 + val2;
};

btn.addEventListener("click", () => {
  console.log(add(+input1.value, +input1.value));
});

let userName: string | number = "Mustafa";
userName = 12;

let userName2: string = "Mustafa";

const arrOfNames: string[] = ["Mustafa", "name2"];

// --------------------------------Class 2 --------------------------------

type Person = {
  personName: string;
  rollNo: number;
  hobbies: string[];
  email?: string;
};

let person: Person = {
  personName: "Mustafa",
  rollNo: 12,
  hobbies: ["cricket", "football", "music"],
};

const persons: Person[] = [];

for (var i = 0; i < 10; i++) {
  const randomObject: Person = {
    personName: "Mustafa" + (i + 1),
    rollNo: 12 + i + 1,
    hobbies: ["hobies"],
  };
  persons.push(randomObject);
}

console.log(persons);

type Add = (x: number, y: number, c: (x: string) => void) => number;

const addNums: Add = function (
  val1: number,
  val2: number,
  c: (x: string) => void
): number {
  c("hello");
  return val1 + val2;
};

const c = (toprint: string): void => {
  console.log(toprint);
};
const addNumsAnswer = addNums(2, 3, c);
console.log(addNumsAnswer);

type Calc = "add" | "substract";
type AddOrSubt = (val1: number, val2: number, calc: Calc) => number;

const addOrSubt: AddOrSubt = (val1, val2, calc) => {
  if (calc === "add") {
    return val1 + val2;
  } else if (calc === "substract") {
    return val1 - val2;
  }
  return 0;
};

console.log(addOrSubt(10, 5, "add"));
console.log(addOrSubt(10, 5, "substract"));

// --------------------------------Class 3 --------------------------------

// -------------Tuples (jab fix lenght off arrray chahye ho tw tuples use krty hain )
let gender: [string, string] = ["Male", "Female"];
// gender[2] = 'dsada'       // yaha problem krega yay qk hum ne define kya hua ha ke 2 sa zyada values nahi hosakti
// gender.push('dasdasd')      // but  ya yaha problem nahi krega qk ya typescript ka bug h

// --------------------------------Class 4 --------------------------------
class Student {
  public stName: string;
  private rollNo: number;
  constructor(stName: string, rollNo: number) {
    this.stName = stName;
    this.rollNo = rollNo;
  }
}
const st = new Student("Mustafa ct1", 12);
console.log(st);
console.log(st.stName);

// --------

class Developer {
  private readonly skills: string[] = [];
  constructor(public stName: string, public readonly rollNo: number) {}

  addSkill(skill: string) {
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

abstract class Product {
  constructor(
    private _id: number,
    private _username: string,
    private _price: number
  ) {}

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

  abstract getDiscountRates(): number;
}

class ClothingProduct extends Product {
  constructor(
    _id: number,
    _username: string,
    _price: number,
    private _brand: string,
    public model: number
  ) {
    super(_id, _username, _price);
  }
  get brand() {
    return this._brand;
  }

  getDiscountRates(): number {
    return this.price * 0.4;
  }
}

const shirt1 = new ClothingProduct(1, "Mustafa CP", 45, "Calvin", 2020);
console.log(shirt1.username);
console.log(shirt1.brand);
console.log(shirt1.getDiscountRates());

// ------------------Singeltons------------------
class Utility {
  static instance: Utility = { UtilityName: "Mustagfa ki utility" };
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Utility();
    }
    return this.instance;
  }
}

const util1 = Utility.getInstance();
const util2 = Utility.getInstance();
console.log(util1);
console.log(util2);

// ----------------------CLass 5 ---------------------
// Union types
type Animal = {
  name: string;
  runningSpeed: number;
};

type Bird = {
  name: string;
  flyingSpeed: number;
};

type Creature = Animal | Bird;

const tiger: Creature = { name: "tiger", runningSpeed: 321 };

// ----------------------------------------Intersection Types----------------------------------------

type Animal2 = {
  name: string;
  runningSpeed: number;
};

type Bird2 = {
  name: string;
  flyingSpeed: number;
};

type Creature2 = Animal2 & Bird2;

const tiger2: Creature2 = {
  name: "tiger",
  runningSpeed: 321,
  flyingSpeed: 2332,
};

// Inter faces

// ----------------------Interfaces----------------

interface AnimalInterface {
  name: string;
  runningSpeed: number;
  eat(food: string): string;
}
interface BirdInterface {
  name: string;
  flyingSpeed: number;
}

interface Creature3 extends BirdInterface, BirdInterface {}

const tiger3: Creature = {
  name: "tiger",
  runningSpeed: 3232,
  flyingSpeed: 342,
};

class TigerClass implements AnimalInterface {
  constructor(public name: string, public runningSpeed: number) {}

  eat(food: string): string {
    return food + " kha le ...";
  }
}

const tigerInter = new TigerClass("Mustafa", 2314);
console.log(tigerInter);
console.log(tigerInter.eat("Lassi"));

// Type Guards

type Animaltg = {
  name: string;
  runningSpeed: number;
};
type Birdtg = {
  name: string;
  flyingSpeed: number;
};

type Creaturetg = Animaltg | Birdtg;

function log(creature: Creaturetg) {
  if ("runningSpeed" in creature) {
    // Type Guards
    console.log(creature.runningSpeed);
  }
}

// Class 6

// Type Casting
const input = <HTMLInputElement>document.getElementById("input1")!;

// Generics ----
interface User {
  id: number;
  name: string;
}

const promiseFunc: () => Promise<User> = (): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 321, name: "Mustafa" });
    }, 1000);
  });
};

promiseFunc().then((res) => {
  console.log(res);
});
