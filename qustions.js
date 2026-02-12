// const userInfo = { name: "Harshil", age: 22 };
// const preferences = { theme: "dark", lang: "en" }

// const info=userInfo
// console.log(info);

// const res = ary.map((value) => value.toUpperCase())
// console.log(res);
// console.log(ary[-1]);

// const ary = ["read", ["write"], [["read"]]]
// delete ary[1]
// console.log(ary);
// console.log(ary.length);
// const res = ary.copyWithin(1, 0, 1)
// console.log(res);
// const res = ary.flat(Infinity)
// console.log(res);

// const product = [
//     { name: "watch", price: 1000, qty: 7 },
//     { name: "tshirt", price: 500, qty: 5 }
// ]
// const result = product.sort((a, b) => a.price * a.qty - b.price * b.qty)
// console.log(result);

// const num = [2, 4, 6, 8, 10]
// const ress = num.reduce((acc, cuu) => acc < cuu ? acc : cuu)
// console.log(ress);

// const pName = product.flatMap((value) => value.name)
// console.log(pName);

// const nm = "nishant"
// const ans = [...nm].reduce((acc, ch) => ch + acc, "")
// console.log(ans);

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit" }, // duplicate
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Neha" } // duplicate
// ];





// const distinctArray = users.filter((value, index, array) => {
//     return index == array.findIndex((val) => val.id == value.id)
// })


// const users = [
//     { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
//     { id: 2, name: "Virat", hobbies: ["dancing", "gaming"] },
//     { id: 3, name: "Kohli", hobbies: ["reading", "playing"] },   // duplicate
//     { id: 4, name: "Sachin", hobbies: ["singing", "reading"] },
//     { id: 5, name: "Rahul", hobbies: ["dancing", "playing", "singing"] }    // duplicate   // duplicate
// ];
// const map = new Map()
// for (const val of users) {
//     for (const hby of val.hobbies) {
//         if (!map.has(hby)) {
//             map.set(hby, {
//                 hobbies: hby,
//                 user: []
//             })
//         }
//         map.get(hby).user.push({ ...val });
//     }
// }
// for (const val of map.values()) {
//     console.log(val);
// }




const hobbies = [
    { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" },
    { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b1", hobby: "writting" },
    { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b12", hobby: "listining" },
    { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b3", hobby: "coading" }
]
const users = [
    { id: 1, name: "Amit", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", ""] },
    { id: 2, name: "Neha", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b1", ""] },
    { id: 3, name: "Virat", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b12", "1b451981-2f77-43e7-b9e1-8c4d5c3d69b12"] },
    { id: 4, name: "Kohli", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b3", ""] },
];
let ary = []
const map = new Map()
for (const val of hobbies) {
    map.set(val.id, val.hobby)
}
for (const val of users) {
    for (const v of val.hobbies) {
        if (map.has(v)) {
            
            const obj = { id: val.id, name: val.name, hobbies: [{id:v}] }
            ary.push(obj)
        }
    }
}
console.log(ary);

console.log(map);




// const output = [
//     {
//         id: 1, name: "Amit",
//         hobbies: [
//             { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" }
//         ]
//     },
// ]


