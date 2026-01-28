const set = new Set(["a", "b", "c"])
const map = new Map([
    ["apples", 800],
    ["banana", 200],
    ["mango", 1000]
])
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

const details = [
    {
        name: "Ns",
        age: 21
    },
    {
        name: "virat",
        age: 35
    },
    {
        name: "kohli",
        age: 21
    },
    {
        name: "Krunal",
        age: 33
    },
    {
        name: "karan",
        age: 35
    }
]
const ageGroup = Map.groupBy(details, d => d.age)
console.log(ageGroup);



