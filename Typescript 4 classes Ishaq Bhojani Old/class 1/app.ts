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
console.log(arr);

const arr2: number[] = [1, 2, 3, 4, 5];
arr2.push(321);


