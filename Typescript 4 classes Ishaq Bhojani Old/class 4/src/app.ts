// Type Casting

// const inp = document.getElementById('inp1')! as HTMLInputElement
// const inp = <HTMLInputElement> document.getElementById('inp1')!
// console.log(inp.value)

// GENERIGCS

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 1500);
});
promise.then((data) => data.split(""));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
// const merged = merge({ name: "nadir" }, { age: 32 });
const merged = merge({ name: "nadir" }, { age: 32 });
console.log(merged.age);

// Decorators

function Logger(data: string) {
  return function (_: Function) {
    console.log("Logging...", data);
  };
}

function FillHTML(template: string, id: string) {
  return function (_: Function) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.innerHTML = template;
    }
  };
}

@Logger("data")
@FillHTML("<b>loading...</b>", "app")
class Person {
  name = "nadir";

  constructor() {
    console.log("called");
  }
}

// FUNCTION OVERLOADING

type Combined = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combined, b: Combined) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("cannot add different types");
  }
}
// (add("dsa", "dasdsa") as string).split('')
console.log(add("dsa", "dasdsa"));
