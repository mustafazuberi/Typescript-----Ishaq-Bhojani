// var input1 = document.getElementById("input1")! as HTMLInputElement;
// // yaha ! jabhi likha ha Q-K  hum TS ko bta rehy hain ke ya variable undefined nahi rehga aisi Id mojudd ha or ya value aigi

// var input2 = document.getElementById("input2")! as HTMLInputElement;
// var button = document.getElementById("btn")!;

// var add = (val1: number, val2: number) => {
//   return val1 + val2;
// };

// button.addEventListener("click", () => {
//   const firstVal = input1.value;
//   const secondVal = input2.value;
//   console.log(add(+firstVal, +secondVal));
// });

// // Basic Types

// //1) String : string => "apple" , "orange"
// //2) Number : number => 1 0  -87 4.5
// //3) Boolean : boolean => true false

// let person = "Mustafa";
// person = "Qadir";

// const arr: string[] = ["Mustafa", "Ishaq", "Ali"];
// arr.push("Pineapple");

// const arr2: number[] = [1, 2, 3, 4];
// arr2.push(21);

// // Array of number me hum ksi or type ke value push nahi kra sakty na hee rakh sakty hain
// // Or agar hum type nahi btaingy tw woh first time wali values ko dekh kar type rakh degi

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

const add = function (val1: number, val2: number, calc: Calc) : number  {
  if (calc === "add") {
    return val1 + val2;
  } else if (calc === "substract") {
    return val1 - val2;
  }
  return 0
};

console.log(add(10, 5, "add"));
console.log(add(10, 5, "substract"));







// -------------Tuples (jab fix lenght off arrray chahye ho tw tuples use krty hain )
let gender: [string,string] = ['Male','Female']
// gender[2] = 'dsada'       // yaha problem krega yay qk hum ne define kya hua ha ke 2 sa zyada values nahi hosakti
// gender.push('dasdasd')      // but  ya yaha problem nahi krega qk ya typescript ka bug h 