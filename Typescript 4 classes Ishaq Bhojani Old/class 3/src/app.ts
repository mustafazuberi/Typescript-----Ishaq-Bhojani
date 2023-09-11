import { Person } from "./types";

// type Person = {
//     name:string;
// }

// interface Person {
//   name: string;
// }
// let nadir: Person;
// nadir = { name: "Mustafa" };

class Human implements Person {
  constructor(public name: string) {}

  speak(sentence: string): string {
    console.log(sentence);
    return this.name;
  }
}

// ADVANCED TYPES

type Combined = string | number | boolean;
let abc: Combined = "sdad";







// // Intersection Type
// type Bird = {
//   name: string;
//   flyingSpeed: number;
// };
// type Animal = {
//   name: string;
//   runningSpeed: number;
// };
// type Creature = Bird & Animal;

// // when using interface
// // interface Creature extends Bird,Animal{}

// let xyz: Creature;
// xyz = {
//   name: "Hen",
//   flyingSpeed: 21,
//   runningSpeed: 321,
// };
















// Type guards
type Bird = {
  name: string;
  flyingSpeed: number;
};
type Animal = {
  name: string;
  runningSpeed: number;
};
type Creature = Bird | Animal;

function log(creature: Creature) {
  console.log(creature.name);
  if ("flyingSpeed" in creature) {
    console.log(creature.flyingSpeed);
  }
  if ("runningSpeed" in creature) {
    console.log(creature.runningSpeed);
  }
}
