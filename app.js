// masala 1
function getAverageAge(arr) {
  let ages = 0;
  for (let i = 0; i < arr.length; i++) {
    ages += arr[i].age;
  }

  return ages / arr.length;
}

const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAge(people));

// masala 2
function getAverageAg(arr, age) {
  const obj = [];
  for (let m = 0; m < arr.length; m++) {
    arr[m].age > age ? (arr[m].isMarried = true) : (arr[m].isMarried = false);
    obj.push(arr[m]);
  }

  return obj;
}

const peoples = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getAverageAg(peoples, 25));

// masala 3
function getNameMaxMinA(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j].age > max.age) {
      max = arr[j];
    }
    if (arr[j].age < min.age) {
      min = arr[j];
    }
  }

  return [max.name, min.name];
}

const peopls = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

console.log(getNameMaxMinA(peopls));

// misol 4
const obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
const keyobj = {};

for (let i in obj) {
  const value = obj[i];
  if (!keyobj[value]) {
    keyobj[value] = [];
  }
  keyobj[value].push(i);
}

console.log(keyobj);

// misol 5
const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };

const obJ3 = {};

for (let key in obj1) {
  if (!obj2[key]) {
    obJ3[key] = obj1[key];
  }
}

for (let key in obj2) {
  if (!obj1[key]) {
    obJ3[key] = obj2[key];
  }
}

console.log(obJ3);

// Uy ishi
// misol 1
const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", " python", " c++", " nodejs"],
  friends: ["Jamshid", " Abbos", " Jalol", " Mar'uf"],
};
function wrapper(qer) {
  return `
  firstName: ${qer.firstName}
  lastName: ${qer.lastName}
  age: ${qer.age}
  languages: ${qer.languages}
  friends: ${qer.friends}`;
}

console.log(wrapper(me));

// misol 2
function daraja2(n) {
  const we = {};
  for (let p = 1; p <= n; p++) {
    we[p] = p * p;
  }
  return we;
}

let n = 10;
console.log(daraja2(n));

// misol 4
const ism = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
const Obj = {};
for (let i = 0; i < ism.length; i++) {
  Obj[ism[i]] = ism[i].length;
}

console.log(Obj);
