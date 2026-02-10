// const p1 = new Promise((resolve, reject) => {
//     console.log("P1 Data Fatching...!!");
//     setTimeout(() => {
//         resolve("P1 Resolved...!!")
//     }, 2000)
// }).then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching...!!");
//         setTimeout(() => {
//             reject("P2 Rejected...!!")
//         }, 2000)
//     })
// }).then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log("P3 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P3 Resolved...!!")
//         }, 2000)
//     })
// }).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

// function abc() {
//     return new Promise((resolve, reject) => {
//         console.log("P1 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P1 Resolved...!!")
//         }, 2000)
//     })
// }
// function xyz() {
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching...!!");
//         setTimeout(() => {
//             reject("P2 Rejected...!!")
//         }, 2000)
//     })
// }
// function pqr() {
//     return new Promise((resolve, reject) => {
//         console.log("P3 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P3 Resolved...!!")
//         }, 2000)
//     })
// }
// (async () => {
//     try {
//         let r1 = await abc()
//         console.log(r1);

//         let r2 = await xyz()
//         console.log(r2);

//         let r3 = await pqr()
//         console.log(r3);


//     } catch (error) {
//         console.log(error);

//     }
// })()

// function abc(a, b) {
//     let ans = 0
//     return function xyz() {
//         ans = a + b
//         console.log(ans);
//     }
// }
// const res = abc(10, 15)
// res()


// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// function details(city, state) {
//     console.log(`My Name Is ${this.fName} ${this.lName} From ${city} State Of ${state}`);
// }
// details.call(obj, "Dhari", "Gujarat")
// details.apply(obj, ["Dhari", "Gujarat"])
// const res = details.bind(obj, "Dhari", "Gujarat")
// res()


// const d = new Date("January 25,2025")
// console.log(d);

// const a1 = [1, 2, 5, 7, 9, 0]
// const s = a1.reduce((acc, curr) => acc += curr, 0)
// console.log(s);
// const a2 = [7, 9, 6, 3, 0]


// function abc( lName,fName = "Nishant") {
//     console.log(fName, lName);
// }
// abc("sanghani")

// class Abc {
//     constructor(name) {
//         this.name = name
//     }
//     static getName(instance) {
//         console.log(instance.name);
//     }
// }
// const obj = new Abc("nishant")
// Abc.getName(obj)



// const str = "Nishant Sanghani"
// const res = str.replace(" ", "").split("").slice(1, str.length - 2).join("")
// console.log(res);

// const str = "abc"
// const res = str.split("").map((value) => 'aeiou'.includes(value) ? value.toUpperCase() : value).join("")
// console.log(res);

// const str = "javascript is powerful"
// const res = str.split(" ").map((value) => value.split("").reduce((acc, cuu) => cuu + acc, ""))
// console.log(res);


// const ary = ["apple", "sky", "orange", "why"];
// // expected shape: "aeoe"

// const str = "learn javascript fast"
// const res = str.split(" ").map((value) => value.at(0).toUpperCase() + value.slice(1)).join(" ")
// console.log(res);


// const str = "programming"
// const res = [...new Set(str)].join("")
// console.log(res);

//or

// const res = [...str].filter((Value, index, arr) => arr.indexOf(Value) == index)
// console.log(res);



// const arr = ["madam", "racecar", "hello", "level"];
// // expected shape: ["madam", "racecar", "level"]
// const res = arr.filter((value) => value.split("").reverse().join("")==value)
// console.log(res);

// const arr = ["cat", ["dog", "ant"], ["apple", ["bat"]]];
// const res = arr.flat(Infinity).filter((value) => value.includes("a"))
// console.log(res);

// const str = "JS array string methods"
// const res = str.split(" ").reverse().join(" ")
// console.log(res);


// const str = "practice makes javascript perfect";
// const res = str.split(" ").reduce((acc, cuu) => cuu.length > acc.length ? cuu : acc, "")
// console.log(res);



// const str = "javascript is awesome";
// const res = str.split("").filter((value) => !"aeiou".includes(value)).join("")
// console.log(res);

// const str = "learn javascript by practicing daily ndsdsdssds";
// // expected shape: number
// const res = str.split(" ").reduce((acc, cuu) => cuu.length > 4 ? acc = acc + 1 : acc, 0)
// console.log(res);


// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit" },   // duplicate
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Neha" }    // duplicate
// ];

// const res = users.filter((value, index, arr) => {

//     return index === arr.findIndex(val => val.id == value.id)

// })
// console.log(res);



// for(const val of set.)

// for (const [k, v] of s.entries()) {
//     console.log(k, v);
//     // if(s.)

// }

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit" }, // duplicate
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Neha" } // duplicate
// ];


// const res = users.filter((value, index, arr) => {
//     console.log(index);
//     return index == arr.findIndex((val) => val.id == value.id)

// })
// console.log(res);

// const set = new Set()
// const newUser = users.filter((value, index) => {
//     if (set.has(value.id)) {
//         return false
//     }
//     set.add(value.id)
//     return true

// })
// console.log(newUser);


// const map = new Map()

// map.set(users)
// console.log(map);
// const res = users




// const map = new Map()
// const s = new Set()
// console.log(s);
// const newSet = users.filter((value, index) => {
//     if (s.has(value.id)) {
//         return false
//     }
//     s.add(value.id)
//     return true

// })
// console.log(newSet);


// const newMap = users.filter((value, index) => {
//     if (map.has(value.id)) {
//         return false
//     }
//     map.set(value.id)
//     return true
// })
// console.log(newMap);

// for (const [key, val] of map.entries()) {

// }

// const newMap = users.filter((value, index) => {
//     if (map.has(value.id)) {
//         return false
//     }
//     map.set(value.id)
//     return true
// })
// console.log(newMap);


// users.map((value, index) => {
//     if (value.id == )
// })

// const users = [
//     { id: 1, name: "Amit", active: true },
//     { id: 2, name: "Neha", active: false },
//     { id: 3, name: "Rahul", active: true }
// ];

// const activeUser = users.filter((value, index) => {
//     return value.active == true
// })
// console.log(activeUser);

// const logs = [{
//         userId: 1,
//         name: "Amit",
//         loginTime: "09:00",
//         activities: ["login", "view"]
//     },
//     {
//         userId: 2,
//         name: "Neha",
//         loginTime: "09:10",
//         activities: ["login"]
//     },
//     {
//         userId: 1,
//         name: "Amit",
//         loginTime: "08:50",
//         activities: ["login", "purchase"]
//     },
//     {
//         userId: 2,
//         name: "Neha",
//         loginTime: "09:30",
//         activities: ["view"]
//     }
// ];

// const newLogs = logs.filter((value, index, array) => {
//     return index == array.findIndex((val) => val.userId == value.userId)
// }).map((value, index, array) => array.sort((a, b) => a.loginTime - b.loginTime))
// console.log(newLogs);


const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Neha" },
    { id: 1, name: "Amit" }, // duplicate
    { id: 3, name: "Rahul" },
    { id: 2, name: "Neha" } // duplicate
];

const set = new Set()










