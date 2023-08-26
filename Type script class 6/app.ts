// -------Type Casting-------
const input1 = document.getElementById("input1")! as HTMLInputElement;
const num: number = +input1 * 4;

const input = <HTMLInputElement>document.getElementById("input")!;

// -----------Generics----------------
// Promise ka andar se jo bh return hoga woh wali chez generics kehlati h

interface User {
  name: string;
  id: number;
}

const promiseFunc: () => Promise<User> = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Mustafa", id: 321 });
    }, 1000);
  });
};
promiseFunc().then((res) => {
  for (let key in res) {
    console.log(`${key} : ${res[key]}`);
  }
});

const merge = <T extends object,U extends object>(objA: T, objB: U):T & U => {
  return { ...objA, ...objB };
};

const merged = merge({ name: "Mustafa Merge" }, { id: 32 });
console.log(merged)

