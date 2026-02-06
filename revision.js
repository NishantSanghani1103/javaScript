// let x = 1
// switch (x) {
//     case 1:
//         console.log("Sunday");
//         break
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Select Valid Week");
// }

// let { resolve, reject, promise } = Promise.withResolvers()

// setTimeout(() => {
//     let status = false
//     if (status) {
//         resolve("Promise Resolved")
//     }
//     else {
//         reject("Promise Rejected")
//     }
// }, 2000)
// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

// function abc(a, b) {
//     let ans = a + b
//     return function xyz() {
//         console.log(ans);
//     }
// }
// const res = abc(10, 20)
// res()


// const p1 = new Promise((resolve, reject) => {
//     console.log("P1 Data Fatching....");
//     setTimeout(() => {
//         resolve("P1 Resolved...!!")
//     }, 2000)
// })
// p1.then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching....");
//         setTimeout(() => {
//             resolve("P2 Resolved...!!")
//         }, 3000)
//     })
// })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve, reject) => {
//             console.log("P3 Data Fatching....");
//             setTimeout(() => {
//                 resolve("P3 Resolved...!!")
//             }, 4000)
//         })
//     })
//     .then((res) => {
//         console.log(res);

//     }).catch((errr) => {
//         console.log(errr);

//     })

// function abc() {
//     return new Promise((resolve, reject) => {
//         console.log("P1 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P1 Resolved....!!")
//         }, 2000)
//     })
// }
// function xyz() {
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P2 Resolved...!!")
//         }, 3000)
//     })
// }
// function zyw() {
//     return new Promise((resolve, reject) => {
//         console.log("P3 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P3 Resolved")
//         }, 4000)
//     })
// }
// (async () => {
//     try {
//         console.log(await abc());
//         console.log(await xyz());
//         console.log(await zyw());
//     } catch (error) {
//         console.log(error);
//     }
// })()

// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// function details(city, state) {
//     console.log(`My Name Is : ${this.fName} ${this.lName} From ${city} State Of ${state}`);
// }
// details.call(obj, "Dhari", "Gujarat")
// details.apply(obj, ["Dhari", "Gujarat"])
// const res = details.bind(obj, "Dhari", "Gujarat")
// res()


// function myFunction() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(myFunction(10, 2, 4, 5, 8));


// const str = "Nishant"
// console.log(str.at(8));


// console.log(str.charAt(0));
// console.log(str[2]);


// const str = "nishant kumar sharma";
// const res = str.split(" ").map((value) => value.at(0).toUpperCase()).join(".")
// console.log(res);

// const str = "apple banana kiwi";
// const res = str.split(" ").map((value) => value.slice(0, value.length - 1) + value.at(-1).toUpperCase()).join(" ")
// console.log(res);


// const str = "user_profile_image";
// const res = str.replaceAll("_", " ").split(" ").map((value) => value.at(0).toUpperCase() + value.slice(1)).join(" ")
// console.log(res);

// const email = "nishant@gmail.com";
// const res = email.split("@").map((value, index) => index == 0 ? value.at(0) + "*".repeat(value.length - 1) : value).join("@")
// console.log(res);


// const str = "hello world";
// const res = str.split(" ").map((value) => value.split('').reverse().join("")).join(" ")
// console.log(res);


// const str = "  hello   world   js  ";
// const res = str.trim().split(" ").filter((value) => value != "").join(" ")
// console.log(res);

// const str = "background-color-size"
// const res = str.split("-").map((value, index) => index == 0 ? value : value.at(0).toUpperCase() + value.slice(1)).join("")
// console.log(res);

// const str = "hello world"
// const res = str.split(" ").map((value) => value.at(0).toUpperCase() + value.slice(1, value.length - 1) + value.at(-1).toUpperCase()).join(" ")
// console.log(res);


// const str = "HeLLo WoRLd"
// const res = str.split(" ").map((value) => value.split("").map((value) => value.charCodeAt(value) >= 65 && value.charCodeAt(value) <= 90 ? value.toString(value).toLowerCase() : value.toUpperCase()).join("")).join(" ")
// console.log(res);


// const str = "javascript is awesome"
// const res = str.split("").filter((value) => value != ('a' || 'e' || 'i' || 'o' || 'u')).join("")
// console.log(res);

// const str = "abc"
// const res = str.split("").map((value)=>value.repeat(2)).join("")
// console.log(res);


// const str = "javascript"
// const res = str.split("").reduce((acc, cuu) => 'aeiou'.includes(cuu) ? acc + 1 : acc, 0)
// console.log(res);

// const str = "developer"
// const res = str.split(" ").map((value,index)=>value.slice(1,value.length-1)).join("")
// console.log(res);

// const str = "i love  javascript programming"
// const res = str.split(" ").reduce((acc, curr) => curr.length > acc.length ? curr : acc, "")
// console.log(res);


// function person(fName, lName, age) {
//     this.fName = fName
//     this.lName = lName
//     this.age = age
// }
// const p = new person("Nishant", "Sanghani", 22)
// console.log(p.fName);
// p.city="dhari"
// console.log(p);

// const user = {
//     name: "Alex",
// };

// Object.freeze(user);
// user.name = "John";
// console.log(user.name);

// const obj = {
//     a: 1,
//     b: {
//         c: 2
//     }
// };
// const copy = { ...obj };
// copy.b.c = 10;
// console.log(obj.b.c);

// const obj = {
//     a: 10,
//     getA() {
//         return this.a;
//     }
// };

// const obj2 = {
//     a: 20,
// };

// obj2.getA = obj.getA;

// console.log(obj2.getA());

// const obj = {
//     a: 1
// };

// Object.defineProperty(obj, "b", {
//     value: 2,
//     writable: false
// });

// obj.b = 10;
// console.log(obj.b);

// const obj = {
//     a: 1,
//     b: 2,
// };

// for (let key in obj) {
//     if (key === "a") {
//         delete obj.b;
//     }
//     console.log(key);
// }


// const obj = {
//     a: 1,
//     getA: () => this.a
// };

// console.log(obj.getA());


// const obj = {
//     a: 1,
//     b: 2,
// };

// const newObj = Object.create(obj);
// newObj.b = 3;

// console.log(newObj.a, newObj.b);


// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy);

// copy.a = 5;
// console.log(copy);

// console.log(obj.a);

// const obj = { a: 1 };
// Object.preventExtensions(obj);
// obj.b = 2;
// console.log(obj.b);

// const obj = { a: 1 };
// Object.seal(obj);
// obj.a = 10;
// delete obj.a;
// console.log(obj.a);

// const obj = { a: 1 };
// console.log("a" in obj);

// const obj = { a: 1 };
// const keys = Object.keys(obj);

// obj.b = 2;
// console.log(keys.length);

// const obj = {
//     a: 1,
//     b: this.a
// };

// console.log(obj.b);


// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// setTimeout(obj.getA, 0);

// const obj = {
//     a: 1,
//     b: {
//         c: 2
//     }
// };

// const copy = JSON.parse(JSON.stringify(obj));
// copy.b.c = 10;

// console.log(obj.b.c);

// const obj = {};
// Object.defineProperty(obj, "a", {
//     value: 1,
//     enumerable: false
// });

// console.log(Object.keys(obj));


// const obj = {
//     a: 1
// };

// for (let key in obj) {
//     obj.b = 2;
//     console.log(key);
// }

// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// const getA = obj.getA.bind({ a: 10 });
// console.log(getA());

// const obj = {};
// Object.defineProperty(obj, "a", {
//     value: 1,
//     writable: false,
//     configurable: false
// });

// Object.defineProperty(obj, "a", {
//     value: 2
// });

// console.log(obj.a);

// const obj = {
//     a: 1
// };

// Object.freeze(obj);
// obj.a = 5;

// console.log(obj.a);


// const obj = { a: 1 };
// const { a = 10, b = 20 } = obj;

// console.log(a, b);


// const obj = {};
// obj.__proto__.a = 1;

// const newObj = {};
// console.log(newObj.a);

// const obj = {
//     a: 1,
//     b: 2
// };

// Object.defineProperty(obj, "c", {
//     value: 3
// });

// console.log(obj.c, obj.propertyIsEnumerable("c"));

// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };
// const obj2 = {
//     a: 2,
//     getA: obj.getA
// };

// console.log(obj2.getA());

// const obj = {
//     a: 1,
//     getA() {
//         return (
//             () => this.a
//         )()
//     }
// };

// console.log(obj.getA());


// const obj = {
//     a: 1
// };

// Object.defineProperty(obj, "a", {
//     get() {
//         return this._a || 10;
//     },
// });

// console.log(obj.a);


// let obj = { a: 1 };
// const map = new Map();

// map.set(obj, "value");
// console.log(map);

// obj = null;

// console.log(map.size);


// const obj = {
//     a: 1
// };

// Object.defineProperty(obj, "b", {
//     value: 2,
//     enumerable: true
// });

// console.log(JSON.stringify(obj));



// let a = { x: 1 };
// let b = { x: 1 };
// console.log(a === b);


// const obj = { a: 1 };
// const { a: x = 10, b = 20 } = obj;
// console.log(x, b);



// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a++;
// console.log(obj.a);


// const obj = { a: 1 };
// for (const key in obj) {
//   obj[key] = 2;
// }
// console.log(obj.a);

// const obj = { a: 1 };
// console.log(obj.toString());




// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// const fn = obj.getA;
// console.log(fn());


// const obj = {
//     a: 1,
//     b: this.a
// };

// console.log(obj.b);

// const obj = {};
// obj[{}] = "value";
// console.log(obj);

// const obj = { a: 1 };
// delete obj.a;
// console.log("a" in obj);

// const arr = [1, 2, 3];
// console.log(arr.length);
// arr.length = 1;
// console.log(arr);



// function Person(name) {
//   this.name = name;
// }

// Person.prototype.name = "Prototype";

// const p = new Person("JS");
// delete p.name;

// console.log(p.name);

// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// setTimeout(obj.getA, 0);

// let x = 1;

// function foo() {
//     console.log(x);
//     let x = 2;
// }

// foo();


// const obj = {
//   a: 1,
//   getA() {
//     return (() => this.a)();
//   }
// };

// console.log(obj.getA());

// const obj = {};
// obj.__proto__.a = 1;

// const newObj = {};
// console.log(newObj.a);




// const obj = { a: 1 };
// const map = new Map();

// map.set(obj, "value");
// obj.a = 2;

// console.log(map.get(obj));


// let a = {};
// let b = a;
// a = null;
// console.log(b);





// const obj = {
//     a: 1,
//     b: {
//         c: 2
//     }
// };

// Object.freeze(obj);
// obj.b.c = 10;

// console.log(obj.b.c);

// console.log("5" - - "2");

// console.log([1, 2] == "1,2");


// function foo() {
//     x = 1;
// }

// foo();
// console.log(x);



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// Array.prototype.push.apply(arr1, arr2);

// console.log(arr1);


// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.firstName}`);
//     }
// }
// const john = new Person('John');
// setTimeout(john.greet, 1000);
// setTimeout(john.greet.bind(john), 2000);


// const user = {
//     name: "Raj",
//     location: {
//         city: "NY",
//         state: "NY",
//     },
// }
// const copy = Object.assign({}, user)
// copy.location.city = "Albany"
// console.log("original: ", user.location)
// console.log("copy:", copy.location)

// let arr = [1, 2, 10, 9, 8, -6, 7];
// arr.length = 5;
// console.log(arr);

// const userDetails = {
//     firstName: "Surbhi",
//     lastName: "Dighe",
//     age: 20,
//     address: {
//         city: "Hyderabad",
//         country: "India",
//     },
// };
// let cloneUserDetails = { ...userDetails };
// userDetails.age = 22;
// console.log(userDetails);

// userDetails.address.city = "Banglore";
// console.log(cloneUserDetails.age);
// console.log(cloneUserDetails.address.city);

// function modify(obj) {
//     obj.name = "Updated";
// }
// let person = { name: "Original" };
// modify(person);
// function reassign(obj) {
//     obj = { name: "New Object" };
// }
// reassign(person);
// console.log(person.name);


// const value = {
//     number: 10
// }
// const x = { ...value }
// x.number = x.number * 2
// console.log(x.number);

// let a = {
//     x: 1,
//     y: {
//         alpha: 10,
//         beta: 20
//     }
// };
// let b = { ...a };
// b.x = 10
// b.y.alpha = 1001;
// console.log(a.x);
// console.log(a.y.alpha);

// let x = ["a", "b", "c"];
// let y = ["a", "b", "c"];
// let z = y;

// console.log(x == y);
// console.log(z == y);
// console.log(z == x);


// const obj = {
//     a: 1,
//     b: { c: 2 }
// };
// const copy = Object.assign({}, obj);
// copy.a = 10;
// copy.b.c = 20;
// console.log(obj.a);
// console.log(obj.b.c);

// const obj = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// };

// const copy = { ...obj };
// copy.a.b.c = 100;

// console.log(obj.a.b.c);


// const obj = {
//     arr: [1, 2, 3]
// };

// const copy = { ...obj };
// copy.arr.push(4);

// console.log(obj.arr.length);

// const obj = {
//     a: 1,
//     b: { c: 2 }
// };

// const copy = JSON.parse(JSON.stringify(obj));
// copy.b.c = 10;

// console.log(obj.b.c);

// const obj = {
//     a: 1,
//     b: {
//         c: { d: 2 }
//     }
// };

// const copy = Object.assign({}, obj);
// copy.a = 99;

// console.log(obj.a);


// const obj = {
//     a: 1,
//     b: {
//         c: 2
//     }
// };

// const copy = { ...obj };
// copy.b = { c: 100 };

// console.log(obj.b.c);


// const obj = {
//   items: [
//     { x: 1 },
//     { x: 2 }
//   ]
// };

// const copy = { ...obj };
// copy.items[0].x = 100;

// console.log(obj.items[0].x);

// const obj = {
//     a: 1,
//     b: { c: 2 }
// };

// Object.freeze(obj);
// obj.b.c = 50;

// console.log(obj.b.c);

// const obj = {
//   a: {
//     b: 1
//   }
// };

// Object.freeze(obj);
// Object.freeze(obj.a);
// obj.a.b = 100;

// console.log(obj.a.b);

// const obj = {
//     a: 1,
//     b: { c: 2 }
// };

// const copy1 = { ...obj };
// const copy2 = { ...obj };

// copy1.b.c = 999;

// console.log(copy2.b.c);

// const ary = [
//     { name: "Nishant", age: 22, branch: "MCA" },
//     { name: "Sachin", age: 40, branch: "MBA" },
//     { name: "Virat", age: 30, branch: "BBA" }
// ]

// const res = ary.map((value) => value.name.toUpperCase())
// console.log(res);

// const res = ary.reduce((acc, curr) => acc += curr.age, 0)
// console.log(res);


//

// let obj1 = {
//     val: 1
// };
// let obj2 = obj1;
// obj2.val = 99;
// console.log(obj1.val);

// let obj = { a: 1, b: { c: 2 } };
// let copy = { ...obj };
// copy.a = 10;
// copy.b.c = 20;
// console.log(obj.a, obj.b.c);


// let obj = { a: 1, b: { c: 2 } };
// let copy = structuredClone(obj);
// copy.b.c = 100;
// console.log(obj.b.c);

// let obj = { a: 1 };
// let copy = obj;
// copy = { a: 99 };
// console.log(obj.a);


// let arr = [1, { x: 2 }];
// let arr2 = [...arr];
// arr2[0] = 10;
// arr2[1].x = 99;
// console.log(arr[0], arr[1].x);

// function update(x) { x = 100; }
// let num = 50;
// update(num);
// console.log(num);

// function update(obj) {
//     obj.a = 100;
// }
// let data = {
//     a: 1
// };
// update(data);
// console.log(data.a);

// const obj = {
//     a: 1,
//     b: { c: 2 }
// };

// const copy1 = { ...obj };
// const copy2 = { ...obj };

// copy1.b.c = 999;

// console.log(copy2.b.c);

// const obj = {
//     items: [
//         { x: 1 },
//         { x: 2 }
//     ]
// };

// const copy = { ...obj };
// copy.items[0].x = 100;

// console.log(obj.items[0].x);

// const obj = {
//     n: "nishant",
//     a: {
//         b: {
//             c: 1
//         }
//     }
// };

// const copy = obj;
// obj.n = 100;
// console.log(copy.n);

// let person = { name: "Nishant" }
// const member = [person]
// // console.log(member);
// person.name = "sanghani"
// console.log(member);


// const value = {
//     number: 10
// }
// const x = { ...value }
// x.number = x.number * 2
// console.log(x.number);


// console.log(multiply(5, 10));
// var multiply = function (a, b) { return a * b };


// const obj = {
//     a: 10,
//     test() {
//         setTimeout(function () {
//             console.log(this.a);
//         }, 100);
//     }
// };
// obj.test();

// const obj1 = {
//     a: 10,
//     test() {
//         console.log(this.a);
//     }
// };

// const obj2 = { a: 20 };
// obj2.test = obj1.test;
// obj2.test();



// var a = 5;
// const obj = {
//     a: 10,
//     test() {
//         console.log(this.a);
//         (() => {
//             console.log(this.a);
//         })();
//     }
// };
// obj.test();



// const obj = {
//     a: 10,
//     test() {
//         return function () {
//             console.log(this.a);
//         };
//     }
// };
// obj.test()();

// const obj = {
//     a: 10,
//     test() {
//         return () => {
//             console.log(this.a);
//         };
//     }
// };
// obj.test()();


// const person = {
//     firstName: "John",
//     sayHello: function () {
//         return () => this.firstName;
//     }
// };

// let hello = person.sayHello();
// hello();






// (function () {
//     f = second = 10
// })()
// console.log(second);
// console.log(f);

// console.log("a");
// async function abc() {
//     console.log("b");
//     let res = await Promise.resolve("c")
//     console.log(res);

// }
// (async () => {
//     await abc()
//     console.log("d");
// })()


// function abc(name, email, login) {
//     this.name = name
//     this.email = email
//     this.login = login
// }
// const res = new abc("Nishant", "nishantsanghani09@gmail.com", true)
// console.log(res);

// class Car {
//     constructor(brand, model) {
//         this.brand = brand
//         this.model = model
//     }
//     get brand() {
//         return this._brand
//     }
//     set brand(val) {
//         this._brand = val
//     }
// }
// const obj = new Car("Toyota", "Fortuner")
// console.log(obj.brand);\









