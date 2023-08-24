// var input1 = document.getElementById("input1")! as HTMLInputElement;
// // yaha ! jabhi likha ha Q-K  hum TS ko bta rehy hain ke ya variable undefined nahi rehga aisi Id mojudd ha or ya value aigi
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// -------------Tuples (jab fix lenght off arrray chahye ho tw tuples use krty hain )
var gender = ["Male", "Female"];
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
var Student = /** @class */ (function () {
    function Student(stName, rollNo) {
        this.stName = stName;
        this.rollNo = rollNo;
        this.skills = [];
    }
    Student.prototype.addSkill = function (skill) {
        this.skills.push(skill);
    };
    return Student;
}());
var student1 = new Student("Yasir", 1234);
console.log(student1.stName);
student1.addSkill("javascript");
console.log(student1);
var Product = /** @class */ (function () {
    function Product(_id, _username, _price) {
        this._id = _id;
        this._username = _username;
        this._price = _price;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (newName) {
            if (!newName) {
                throw new Error("Name cannot be empty");
            }
            this._username = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(id, username, price, _color, _size) {
        var _this = _super.call(this, id, username, price) || this;
        _this._color = _color;
        _this._size = _size;
        return _this;
    }
    return ClothingProduct;
}(Product));
var ElectronicProduct = /** @class */ (function (_super) {
    __extends(ElectronicProduct, _super);
    function ElectronicProduct(id, username, price, _brand, _model) {
        var _this = _super.call(this, id, username, price) || this;
        _this._brand = _brand;
        _this._model = _model;
        return _this;
    }
    return ElectronicProduct;
}(Product));
// const product1 = new Product(1, "Mustafa", 90000);
// console.log(product1);
// console.log(product1.id);
// console.log(product1.price);
// console.log(product1.username);
// product1.username = "setting new name";
// console.log(product1.username);
var tShirt = new ClothingProduct(1, "Mustafa", 90000, "Red", "M");
console.log(tShirt);
var fridge = new ElectronicProduct(1, "Mustafa", 90000, "Dawlance", 2020);
console.log(tShirt);
