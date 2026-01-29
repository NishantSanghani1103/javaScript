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


const set = new Set([1, 2, 3, 4, 5])
const set1 = new Set([5, 6, 7, 8, 9])
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




let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}
let x = person;
x = null

console.log(person);



// x.age = 10;
// console.log(person);




