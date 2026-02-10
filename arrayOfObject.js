
// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit" }, // duplicate
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Neha" } // duplicate
// ];

// using set

// 1. usign filter in set.

// const set = new Set()
// const res = users.filter((value, index) => {
//     if (set.has(value.id)) {
//         return false
//     }
//     set.add(value.id)
//     return true
// })

// console.log(res);

// usign for of loop in set.

// const newArry = []
// for (const value of users) {
//     if (!set.has(value.id)) {
//         set.add(value.id)
//         newArry.push(value)
//     }
// }
// // console.log(newArry);


// 2.USING MAP.

// const map = new Map()
// for (const v of users) {
//     map.set(v.id, v)
// }
// // console.log(map);
// for (const newMap of map.values()) {
//     console.log(newMap);
// }


// 3. using built in array function.


// const distinctArray = users.filter((value, index, array) => {
//     return index == array.findIndex((val) => val.id == value.id)
// })
// console.log(distinctArray);

// 4. using reduce.

// const reduceArray = users.reduce((acc, value, index, array) => {
//     index == array.findIndex((val) => val.id == value.id) ? acc.push(value) : acc
//     return acc
// }, [])
// console.log(reduceArray);


// const users = [
//     { name: "Amit", role: "admin" },
//     { name: "Neha", role: "user" },
//     { name: "Rahul", role: "admin" }
// ];

// const grp = Map.groupBy(users, (value) => value.role)

// OR

// const grp = Object.groupBy(users, (value) => value.role)
// console.log(grp);

// for (const v of grp.admin) {
//     console.log(v);
// }


// Count how many users exist per city and store in object.

// const users = [
//     { name: "Amit", city: "Delhi" },
//     { name: "Neha", city: "Mumbai" },
//     { name: "Rahul", city: "Delhi" }
// ];

// const group = Object.groupBy(users, (value) => value.city)
// const groupArry = Object.entries(group)
// const resObj = {}
// for (const [key, value] of groupArry) {
//     resObj[key] = value.length
// }
// console.log(resObj);



// Find the first user whose email is unique.

// const users = [
//     { email: "a@test.com" },
//     { email: "b@test.com" },
//     { email: "a@test.com" },
//     { email: "c@test.com" }
// ];
// const set = new Set()
// const firsNonRepetedValue = users.find((value, index) => {
//     return users.filter((val) => val.email == value.email).length == 1
// })
// console.log(firsNonRepetedValue);


// Sort users by age ascending, but keep users with missing age at the end.

// const users = [
//     { name: "Amit", age: 30 },
//     { name: "Neha" },
//     { name: "Rahul", age: 25 }
// ];

// const grp = users.sort((a, b) => a.age == null ? 1 : b.age == null ? -1 : a.age - b.age)
// console.log(grp);



// Merge two arrays of users and remove duplicates by id.

// const arr1 = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" }
// ];

// const arr2 = [
//     { id: 2, name: "Neha" },
//     { id: 3, name: "Rahul" }
// ];

// const mergeArray = [...arr1, ...arr2]

// console.log(mergeArray);

// Using Map.

// const map = new Map()

// for (const value of mergeArray) {
//     map.set(value.id, value)
// }
// console.log(map);
// for (const mapVal of map.values()) {
//     console.log(mapVal);

// }

// using set.

// const set = new Set()

// const uniqueArray = mergeArray.filter((value, index) => {
//     if (set.has(value.id))
//         return false
//     set.add(value.id)
//     return true
// })
// console.log(uniqueArray);

// using for of loop.

// const uniquArray = []

// for (const val of mergeArray) {
//     if (!set.has(val.id)) {
//         set.add(val.id)
//         uniquArray.push(val)
//     }
// }
// console.log(uniquArray);

// using forEach

// mergeArray.forEach((val, index) => {
//     if (!set.has(val.id)) {
//         set.add(val.id)
//         uniquArray.push(val)
//     }
// })
// console.log(uniquArray);


// Increase salary by 10% for users who are "developer" and have experience > 3 years.

// const users = [
//     { name: "Amit", role: "developer", exp: 4, salary: 50000 },
//     { name: "Neha", role: "tester", exp: 5, salary: 40000 },
//     { name: "Amit", role: "developer", exp: 15, salary: 30000 },
// ];

// const userGroup = Object.groupBy(users, (value) => value.role == "developer" && value.exp > 3 ? "Developer" : value.role).Developer.map((value, index) => {
//     value.salary = value.salary + (value.salary * 10 / 100)
//     return value

// })
// console.log(userGroup);


// Remove duplicates (keep last)

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit Updated" },
//     { id: 3, name: "Rahul" }
// ];

// const res = users.filter((value, index, array) => {
//     return index == array.findLastIndex((val) => val.id == value.id)
// })
// console.log(res);


// Find duplicates only

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit " },
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Neha" },
// ];

// const set = new Set()
// const newArry = []

// for (const v of users) {
//     if (set.has(v.id)) {
//         newArry.push(v)
//     }
//     set.add(v.id)
// }
// console.log(newArry);


// const uniqueValue = users.filter((value, index, array) => {
//     return index != array.findIndex((val) => val.id == value.id)
// })
// console.log(uniqueValue);


// const users = [
//     { name: "Amit", age: 22 },
//     { name: "Neha", age: 16 },
//     { name: "Rahul", age: 30 }
// ];

// const res = users.filter((value, index) => value.age > 18).reduce((acc, cuu) => {
//     acc[cuu.name] = cuu.age
//     return acc
// }, {})

// console.log(res);

// const users = [
//     { id: 1, name: "Amit" },
//     { name: "Neha" }
// ];
// const res = users.every((value) => value.id != null)
// console.log(res);


// find the intercection

// const arr1 = [
//     { id: 1 },
//     { id: 2 }
// ];

// const arr2 = [
//     { id: 2 },
//     { id: 3 }
// ];

// const inter = arr1.filter((value) => {
//     return arr2.some((val) => val.id == value.id)
// })
// console.log(inter);


// find the difference

// const arr1 = [
//     { id: 1 },
//     { id: 2 },
//     { id: 5 }
// ];

// const arr2 = [
//     { id: 2 },
//     { id: 3 }
// ];

// const difference = arr1.filter((value) => {
//     return arr2.every((val) => val.id != value.id)
// })

// console.log(difference);

// const users = [
//     { id: 1, name: "Amit" },
//     { name: "Neha" }
// ];

// const val = users.every((value) => value.id != null)
// console.log(val);


// const users = [
//     { name: "Amit", age: 22 },
//     { name: "Neha", age: 16 },
//     { name: "Rahul", age: 30 }
// ];

// const res = users.filter((value, index, array) => value.age > 18)
// console.log(res);


// exprected : { Delhi: 2, Mumbai: 1 }

// const users = [
//     { name: "Amit", city: "Delhi" },
//     { name: "Neha", city: "Mumbai" },
//     { name: "Rahul", city: "Delhi" }
// ];

// const grp = Map.groupBy(users, (value) => value.city)
// // console.log(grp);
// let obj = {}
// for (const [k, v] of grp) {
//     obj[k] = v.length
// }
// console.log(obj);


// const users = [
//     { name: "Amit", dept: "IT", salary: 50000 },
//     { name: "Neha", dept: "HR", salary: 40000 }
// ];

// const salery = users.filter((value) => value.dept == "IT").map((value) => {
//     (value.salary + value.salary * 10) / 100
//     return value
// })
// console.log(salery);



// const users = [
//     { name: "Amit", email: "a@test.com" },
//     { name: "Neha" },
//     { name: "Rahul", email: "" }
// ];

// const missingUser = users.filter((value, index) => value.email == null)
// console.log(missingUser);

// const users = [
//     { name: "Amit", email: "a@test.com" },
//     { name: "Neha" },
//     { name: "Rahul", email: "" },
//     { name: "Priya", age: 25 }
// ];

// const missingValue = users.filter((value) => (value.email == null || value.email === "") &&
//     (value.age == null || value.age === ""))
// console.log(missingValue);




// const users = [
//     { email: "a@test.com" },
//     { email: "b@test.com" },
//     { email: "a@test.com" },
//     { email: "c@test.com" }
// ];
// const set = new Set()
// const unique = users.filter((value, index, array) => {

//     if (set.has(value.email)) {
//         return set
//     }
//     set.add(value.email)
//     return true
// })
// console.log(unique);


// const users = [
//     { name: "Amit", skills: ["JS", "React"] },
//     { name: "Neha", skills: ["JS", "Node"] },
//     { name: "Rahul", skills: ["React", "Node"] }
// ];
// const set = new Set()
// const map = new Map()
// for (const value of users) {
//     for (const v of value.skills) {
//         set.add(v)
//         map.set(value.name, v)
//     }
// }
// const skill = [...set];
// console.log(map);

// console.log(skill);


// Return the first user whose email is unique.

// const users = [
//     { email: "a@test.com" },
//     { email: "b@test.com" },
//     { email: "a@test.com" },
//     { email: "c@test.com" }
// ];

// ans = users.find((value, index) => {
//     return users.filter((val) => val.email == value.email).length == 1
// })
// console.log(ans);

// Remove duplicates(keep last occurrence)

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Neha" },
//     { id: 1, name: "Amit Updated" },
//     { id: 3, name: "Rahul" }
// ];

// const res = users.filter((value, index, arrry) => {
//     return index != arrry.findLastIndex((val) => val.id == value.id)
// })
// console.log(res.sort((a, b) => a.id - b.id));

// Count by property

// const users = [
//     { name: "Amit", city: "Delhi" },
//     { name: "Neha", city: "Mumbai" },
//     { name: "Rahul", city: "Delhi" },
//     { name: "Priya", city: "Delhi" }
// ];
// const grp = Map.groupBy(users, (val) => val.city)
// // console.log(grp);
// const obj = {}
// for (const [key, val] of grp.entries()) {
//     obj[key] = val.length;
// }

// console.log(obj);





