// const set = new Set(["a", "b", "c"])
// const map = new Map([
//     ["apples", 800],
//     ["banana", 200],
//     ["mango", 1000]
// ])
// set.add("d")  // for add
// console.log("Size Of Set Is : " + set.size);

// const setKeys = set.keys()
// console.log(setKeys);


// set.delete("c")

// console.log("set items is....!!");
// for (const x of set.keys()) {
//     console.log(x);
// }



// console.log(map);
// console.log("Size Of Map Is : " + map.size);

// map.set("apples", 150)             // FOR ADD or Modify
// console.log("Map Items Is....!!");
// for (const [mapKey, mapValues] of map.entries()) {
//     console.log(mapKey + " : " + mapValues);
// }

// const n1 = new Set([6, 7, 1, 2, 3])
// const n2 = new Set([6, 7, 8])

// const union = n1.symmetricDifference(n2)
// console.log(union);

// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// const weakSet = new WeakSet()
// weakSet.add(obj)
// let ans = weakSet.has(obj)
// console.log(ans);
// weakSet.delete(obj)
// console.log(ans);

// console.log(weakSet);

// const details = [
//     {
//         name: "Ns",
//         age: 21
//     },
//     {
//         name: "virat",
//         age: 35
//     },
//     {
//         name: "kohli",
//         age: 21
//     },
//     {
//         name: "Krunal",
//         age: 17
//     },
//     {
//         name: "karan",
//         age: 35
//     }
// ]
// const ageGroup = Object.groupBy(details, d => d.age > 18 ? "Adult" : "Minor")
// console.log(ageGroup);

// for (const key in ageGroup) {
//     console.log(key, ageGroup[key]);
// }


// const map = new Map([
//     ["apples", 800],
//     ["banana", 200],
//     ["mango", 1000]
// ])
// map.set("apples", 700)
// map.set("kiwi", 2000)
// map.delete("mango")
// console.log(map.get("apples"));
// console.log();
// for (const [key, value] of map) {
//     console.log(`${key} = ${value}`);
// }
// console.log("entries....");
// console.log();

// for (const [key, value] of map.entries()) {
//     console.log(`${key} = ${value}`);
// }
// // map.clear()
// console.log(map.has("kiwi"));

// console.log("Map Size Is : " + map.size);

// map.forEach((value, key) => {
//     console.log(value, key);
// })

// console.log(map.values());
// for (const value of map.values()) {
//     console.log(value);

// }

// console.log(map.keys());

// for (const key of map.keys()) {
//     console.log(key);
// }



// const apples = { name: 'Apples' };
// const bananas = { name: 'Bananas' };
// const oranges = { name: 'Oranges' };

// const map = new Map()

// map.set(apples, 500)
// map.set(bananas, 800)
// map.set(oranges, 300)
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);

// }
// console.log(map.get(apples));


// const set = new Set([1, 2, 3, 4, 5])
// const set1 = new Set([5, 6, 7, 8, 9])
    // set.add(6)
    // set.delete(6)
    // console.log(set);
    // console.log(set.has(6));

// for (const elements of set.keys()) {
//     console.log(elements);

// }

let p = {
    name: "Nishant",
    surname: "Sanghani"
}

// WeakSet

// const ws = new WeakSet()
// ws.add(p)
// console.log(ws.has(p));

// p = null
// console.log(ws.has(p));
// console.log(p);

// WeakMap

// const wp = new WeakMap()
// wp.set(p, "person")
// console.log(wp.has(p));

// console.log(wp.get(p));

// p = null

// const wm = new WeakMap();

// let user = { name: "Nishant" };
// wm.set(user, { loggedIn: true });

// console.log(wm.get(user));

// "use strict";
// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
//     language: "English",
// }
// Object.preventExtensions(obj)

// try {
//     obj.age = 25
//     console.log(obj);
// } catch (error) {
//     console.log(error);
// }

// function abc(a, b) {
//     console.log(arguments.length);

// }
// abc(1,2)




// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';




// a[c] = 456;

// console.log(a[b]);


// const array = {
//     fName: "Nishant",
//     lName: "Sanghani",
//     age: 22,
//     get fullName() {
//         console.log(this.fName + this.lName);
//     },
//     set lan(value) {
//         this.language = value
//     }
// }
// array.fullName
// array.lan = "English"
// console.log(array);


// let obj = {
//     name: "Nishant",
//     age: 22,
//     city: "Amreli"
// }
// let wm = new WeakMap()
// wm.set(obj, "secret")
// console.log(wm);
// const val = wm.get(obj)
// console.log(val);

// console.log(wm.has(obj));
// obj = null
// console.log(wm.has(obj));

// const person = {
//     fName: "Nishant",
//     lName: "Sanghani",
//     details: {
//         address: {
//             city: "Amreli"
//         }
//     }
// }

// const person2 = {}

// Object.assign(person2, person)
// console.log(person2);
// person2.lName = "Dhari"
// console.log(person);

// console.log(person);


// const obj = {
//     name: "Nishant",
//     address: {
//         city: "Amreli"
//     }
// }
// const obj2 = {}
// Object.assign(obj2, obj)

// obj2.address.city = "Ahmedabad"
// console.log(obj.address.city)
// console.log(obj);



// let obj = {
//     name: "Nishant",
//     age: 22,
//     city: "Amreli",
//     get details() {
//         console.log(this.name + " " + this.age + " " + this.city);
//     },
//     set cty(val) {
//         this.city = val
//     }

// }
// obj.details
// obj.cty = "Dhari"
// console.log(obj);


// const d = new Date()
// console.log(d);
// console.log(d.toString());
// const d1 = new Date("October 13, 2014 11:13:00")
// console.log(d1);
// const d2 = new Date("2022-03-25");
// console.log(d2);
// const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log();
// console.log(d.getDate());
// console.log(d.getUTCDate());

// console.log(d.getDay());
// console.log(d.getUTCDay());

// console.log(d.getHours());
// console.log(d.getUTCHours());

// console.log(d.getFullYear());
// console.log(d.getUTCFullYear());

// console.log(d.getMilliseconds());
// console.log(d.getUTCMilliseconds());

// console.log(d.getMinutes());
// console.log(d.getUTCMinutes());

// console.log(d.getMonth());
// console.log(d.getUTCMonth());

// console.log(d.getTimezoneOffset());

// console.log(d);


// console.log(d.setDate(25));
// console.log(d.setFullYear(2027));
// console.log(d.setHours(22));
// console.log(d.setMinutes(30));
// console.log(d.setSeconds(30));
// console.log(d.setMonth(2));
// console.log(d.setTime());

// console.log(d.toString());
// console.log(d.toUTCString());

// const d2 = new Date()
// console.log(d2.toString());

// console.log(d2.getMilliseconds());
// console.log(d2.setTime);
// console.log(d2);


// Object.defineProperty(obj, "city", {
//     value: "Dhari"
// })

// console.log(obj);

// console.log(Object.getPrototypeOf(obj));


// const person = {
//     firstName: "John",
//     sayHello: function () {
//         return () => this.firstName;
//     }
// };

// let hello = person.sayHello();
// console.log(hello());

