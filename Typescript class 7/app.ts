// decorators

function Logger(message: string) {
  //decorator Factory
  return function (constructor: Function) {
    console.log("LOGGING...");
    console.log(message);
  };
}

function FillHTML(template: string, element: string) {
  return function (constructor: any) {
    const p = new constructor();
    const elem = document.getElementById(element);
    if (elem) {
      elem.innerHTML = template;
      elem.querySelector("h1")!.innerText = p.name;
    }
  };
}

@Logger("Calling From Person...")
@FillHTML("<h1>Hello</h1>", "app")
class Person {
  name = "Mustafa";

  constructor() {}
}

// ----------------Function Overloading--------

type Combined = string | number;

function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: Combined, y: Combined) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x + y;
  } else {
    throw new Error("Typed did'nt match");
  }
}

const value = add("Hello", "World");
const value2 = add(3,3)
value2.toFixed(2)
console.log(value.split(""));
