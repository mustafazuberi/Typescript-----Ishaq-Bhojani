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
var names = ["Mustafa", "Ayan", "Ishaq", "Sameer"];
var person = {
    name: "Mustafa",
    rollNo: 405,
    hobbies: ["video games"],
};
var persons = [];
for (var i = 0; i < names.length; i++) {
    var randomObj = {
        name: names[i],
        rollNo: person.rollNo + 1,
        hobbies: person.hobbies,
    };
    persons.push(randomObj);
}
console.log(persons);
var add = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "substract") {
        return val1 - val2;
    }
    return 0;
};
console.log(add(10, 5, "add"));
console.log(add(10, 5, "substract"));
var add2 = function (val1, val2, cb) {
    return val1 + val2;
};
var cbFunc = function (tp) {
    console.log(tp);
};
add2(2, 3, cbFunc);
