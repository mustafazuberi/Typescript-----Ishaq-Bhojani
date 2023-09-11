// -------------------------------------------------------------------------------------
const names: string[] = ["Mustafa", "Ayan", "Ishaq", "Sameer"];

type Person = {
  name: string;
  rollNo: number;
  hobbies: string[];
  email?: "";
};

let person: Person = {
  name: "Mustafa",
  rollNo: 405,
  hobbies: ["video games"],
};

const persons: Person[] = [];

for (var i = 0; i < names.length; i++) {
  const randomObj: Person = {
    name: names[i],
    rollNo: person.rollNo + 1,
    hobbies: person.hobbies,
  };

  persons.push(randomObj);
}

console.log(persons);

// const add = function (
//   val1: number,
//   val2: number,
//   c: (x: string) => void
// ): number {
//   c('hello')
//   return val1 + val2;
// };

// let func: (x: number, y: number, c: (x: string) => void) => number;

// func = add

type Calc = "add" | "substract";
type Add = (val1: number, val2: number, calc: Calc) => number;

const add = function (val1: number, val2: number, calc: Calc): number {
  if (calc === "add") {
    return val1 + val2;
  } else if (calc === "substract") {
    return val1 - val2;
  }
  return 0;
};

console.log(add(10, 5, "add"));
console.log(add(10, 5, "substract"));

// -------------Tuples (jab fix lenght off arrray chahye ho tw tuples use krty hain )
let gender: [string, string] = ["Male", "Female"];
// gender[2] = 'dsada'       // yaha problem krega yay qk hum ne define kya hua ha ke 2 sa zyada values nahi hosakti
// gender.push('dasdasd')      // but  ya yaha problem nahi krega qk ya typescript ka bug h

// class Student {
//   public stName : string;
//   private rollNo : number;
//   constructor (stName : string , rollNo : number){
//     this.stName = stName
//     this.rollNo = rollNo
//   }
// }

// const student1 = new Student("Yasir",1234)
// console.log(student1)
// console.log(student1.stName)

class Student {
  private readonly skills: string[] = [];
  constructor(public stName: string, public readonly rollNo: number) {}

  addSkill(skill: string) {
    this.skills.push(skill);
  }
}

const student1 = new Student("Yasir", 1234);
console.log(student1.stName);
student1.addSkill("javascript");
console.log(student1);





















class Product {
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

  set username(newName: string) {
    if (!newName) {
      throw new Error("Name cannot be empty");
    }
    this._username = newName;
  }
}

class ClothingProduct extends Product {
  constructor(
    id: number,
    username: string,
    price: number,
    private _color: string,
    private _size: "S" | "M" | "L" | "XL"
  ) {
    super(id, username, price);
  }
}

class ElectronicProduct extends Product {
  constructor(
    id: number,
    username: string,
    price: number,
    private _brand: string,
    private _model: number
  ) {
    super(id, username, price);
  }
}

// const product1 = new Product(1, "Mustafa", 90000);
// console.log(product1);
// console.log(product1.id);
// console.log(product1.price);
// console.log(product1.username);
// product1.username = "setting new name";

// console.log(product1.username);

const tShirt = new ClothingProduct(1, "Mustafa", 90000, "Red", "M");
console.log(tShirt);

const fridge = new ElectronicProduct(1, "Mustafa", 90000, "Dawlance", 2020);
console.log(tShirt);

// Is class ke 2 instance hogeye Qk is se 2 instance bne hain

// Agar hum chahatey hain ke Is ka multiple instance naa create hoo
// 2 hum Iske constructor ko private kr denge or HUm agar class ki value lekni hogi
// tw static methods banainge ----- Ye methods hamari class se connected hote hain lekin hamare instance se
// disconnected hain

// -------------------------Singeltons----------------

class Utility {
  static instance: Utility;
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Utility();
    }
    return this.instance;
  }
}
const util1 = Utility.getInstance();

// Is se hamesha ek hee instance create hoga 2nd pr bh phli dfa create hone wala hee return hojaiga

// Aese agar humkarein ke apne object ki type 2 me se koi ek de sakein tw ise Union Types kehte hain
// --------------Union Types--------------
// type Animal = {
//   name: string;
//   runningSpeed: number;
// };

// type Bird = {
//   name: string;
//   flyingSpeed: number;
// };

// type Creature = Animal | Bird;

// const tiger: Creature = { name: "tiger", runningSpeed: 321 };

// ----------------------------------------Intersection Types----------------------------------------

// type Animal2 = {
//   name: string;
//   runningSpeed: number;
// };

// type Bird2 = {
//   name: string;
//   flyingSpeed: number;
// };

// type Creature2 = Animal2 & Bird2;

// const tiger2: Creature2 = {
//   name: "tiger",
//   runningSpeed: 321,
//   flyingSpeed: 2332,
// };

// ----------------------Interfaces----------------

// interface Animal {
//   name: string;
//   runningSpeed: number;
// }
// interface Bird {
//   name: string;
//   flyingSpeed: number;
// }

// interface Creature extends Animal, Bird {}

// const tiger: Creature = { name: "tiger", runningSpeed: 3232, flyingSpeed: 342 };

// interface Animal {
//   name: string;
//   runningSpeed: number;
//   eat(food: string): string;
// }

// class Tiger implements Animal {
//   constructor(public name: string, public runningSpeed: number) {}

//   eat(food: string): string {
//     return food;
//   }
// }




// Type Guards 

type Animal = {
  name: string;
  runningSpeed: number;
}
type Bird = {
  name: string;
  flyingSpeed: number;
}

type Creature = Animal | Bird 

function log(creature : Creature){
  if('runningSpeed' in creature){ // Type Guards
    console.log(creature.runningSpeed)
  }
}


