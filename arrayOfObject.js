
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



// const users = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 25 }
// ];
// const ary = []
// for (const val of users) {
//     ary.push(val.name)
// }
// console.log(ary);

// const name = users.filter((value) => value.name == "Bob")
// console.log(name);

// const ageCount = users.reduce((acc, cuu) => {
//     acc = acc + cuu.age
//     return acc
// }, 0)
// console.log(ageCount);

// const sortAge = users.sort((a, b) => a.age - b.age)
// console.log(sortAge);

// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Shirt", category: "Clothing" },
//     { name: "Phone", category: "Electronics" }
// ];

// const group = Object.groupBy(products, (val) => val.category)
// console.log(group);



// const items = [
//     { id: 1, name: "Pen" },
//     { id: 2, name: "Pencil" },
//     { id: 1, name: "Pen" }
// ];
// const set = new Set()
// const unique = items.filter((value, index) => {
//     if (set.has(value.id)) {
//         return false
//     }
//     set.add(value.id)
//     return true
// })
// console.log(unique);
// console.log(items);


// const users = [
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 25 }
// ];

// const alinceAgeUpdate = users.map((val, index, arr) => {
//     return val.name == "Alice"
//         ?
//         { ...val, age: 30 }
//         :
//         val

// })
// console.log(alinceAgeUpdate);


// const updatedUsers = users.map(user =>
//     user.name === "Alice"
//         ? { ...user, age: 30 }
//         : { ...user }
// );

// console.log(updatedUsers);

// const employees = [
//     { name: "A", salary: 5000 },
//     { name: "B", salary: 7000 },
//     { name: "C", salary: 6000 }
// ];

// const sort = employees.sort((a, b) => a.salary - b.salary)[1]
// console.log(sort);

// const orders = [
//     { id: 1, amount: 250, status: "completed" },
//     { id: 2, amount: 100, status: "pending" },
//     { id: 3, amount: 400, status: "completed" }
// ];

// const filter = orders.filter((val) => val.status == "completed").reduce((total, cuu) => total + cuu.amount, 0)
// console.log(filter);

// const totalCompletedAmount = orders.reduce((total, order) => {
//   return order.status === "completed"
//     ? total + order.amount
//     : total;
// }, 0);

// console.log(totalCompletedAmount);

// const tasks = [
//     { user: "Alice", completed: true },
//     { user: "Bob", completed: false },
//     { user: "Alice", completed: true },
//     { user: "Bob", completed: true }
// ];


// const grp = Map.groupBy(tasks, (val) => val.completed)
// console.log(grp);

// const students = [
//     { name: "John", marks: [80, 90, 70] },
//     { name: "Jane", marks: [60, 75, 85] }
// ];
// const map = new Map()
// for (const val of students) {
//     const total = val.marks.reduce((total, v) => total + v, 0)
//     const avg = (total / val.marks.length).toFixed(2)
//     map.set(val.name, {
//         name: val.name,
//         average: avg
//     })
// }
// console.log(map);

// const products = [
//     { name: "Laptop", price: 50000, quantity: 2 },
//     { name: "Phone", price: 20000, quantity: 3 }
// ];
// const map = new Map()

// for (const val of products) {
//     const total = val.price * val.quantity
//     map.set(val.name, {
//         name: val.name,
//         totalPrice: total
//     })

// }
// console.log(map);


// const employees = [
//     { name: "A", salary: 5000 },
//     { name: "B", salary: 7000 }
// ];

// const map = new Map()
// for (const val of employees) {
//     const sal = val.salary + (val.salary * 10) / 100
//     map.set(val.name, {
//         name: val.name,
//         salary: sal
//     })
// }
// console.log(map);


// const order = [
//     { orderId: 101, customer: "Alice", amount: 250, status: "Delivered" },
//     { orderId: 102, customer: "Bob", amount: 450, status: "Pending" },
//     { orderId: 103, customer: "Alice", amount: 150, status: "Delivered" },
//     { orderId: 104, customer: "Charlie", amount: 3000, status: "Cancelled" },
// ]

// const ans = order.reduce((acc, cuu) => {
//     acc[cuu.customer] = (acc[cuu.customer || 0]) + cuu.amount
//     return acc
// })
// console.log(ans);

// const map = new Map()
// for (const v of order) {
//     if (map.has(v.customer)) {
//         const existing = map.get(v.customer);
//         existing.amount += v.amount;
//     }
//     else {
//         map.set(v.customer, {
//             amount: v.amount
//         })
//     }
// }
// console.log(map);

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];

// const orders = [
//     { userId: 1, amount: 250 },
//     { userId: 2, amount: 300 }
// ];
// const ary = []
// const map = new Map()
// for (const userValue of users) {
//     for (const orderValue of orders) {
//         if (userValue.id == orderValue.userId) {
//             ary.push({
//                 ...userValue,
//                 amount: orderValue.amount
//             })

//             //or

//             // map.set(userValue.id, {
//             //     id: userValue.id,
//             //     name: userValue.name,
//             //     amount: orderValue.amount
//             // })
//         }
//     }
// }
// console.log(ary);

// console.log(Array.from(map));


// add object into Array

// const products = [
//     { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
//     { id: 2, name: "Shirt", price: 40, category: "Clothing" },
//     { id: 3, name: "Phone", price: 800, category: "Electronics" },
//     { id: 4, name: "Shoes", price: 60, category: "Clothing" }
// ];

// const obj = { id: 5, name: "Watch", price: 200, category: "Accessories" }

// const set = new Set()



// for (const val of products) {
//     if (!set.has(val.id)) {
//         set.add(val)
//     }
//     set.add(obj)

// }
// console.log(set);




// const orders = [
//     {
//         id: 1,
//         customer: "Alice",
//         items: [
//             { name: "Laptop", price: 1000 },
//             { name: "Mouse", price: 50 }
//         ]
//     },
//     {
//         id: 2,
//         customer: "Bob",
//         items: [
//             { name: "Phone", price: 800 },
//             { name: "Charger", price: 20 },
//         ]
//     }
// ];


// const map = new Map()
// for (const val of orders) {
//     const total = val.items.reduce((acc, cuu) => acc + cuu.price, 0)

//     map.set(val.id, {
//         id: val.id,
//         customer: val.customer,
//         items: val.items.map((val) => (val)),
//         total: total
//     })
// }
// console.log(Array.from(map));

// const items = [
//     { name: "Phone", price: 800 },
//     { name: "Charger", price: 20 }
// ]
// const res = items.map((val) => val)
// console.log(res);


// const set = new Set()
// for (const val of orders) {
//     val.items.forEach((value, index) => {
//         set.add(value.name)
//     })
// }
// console.log(Array.from(set));

// const max = orders.flatMap((value) => value.items).reduce((acc, cuu) => acc += cuu.price > acc ? cuu : acc, 0)
// console.log(max);





//  1. Intermediate: Transformation & Logic

// Task 1:- Add a new property isExpensive: true to every product that costs more than 200.

// const products = [
//     { name: 'Laptop', price: 1000, category: 'Electronics' },
//     { name: 'Shirt', price: 50, category: 'Apparel' },
//     { name: 'Phone', price: 500, category: 'Electronics' }
// ];
// const addProperty = products.map((value, index) => {
//     return value.price > 200
//         ?
//         { ...value, isExpensive: true }
//         :
//         value

// })
// console.log(addProperty);

// Task 2 :- Sort the products by price in descending order (highest to lowest).

// const products = [
//     { name: 'Laptop', price: 1000, category: 'Electronics' },
//     { name: 'Shirt', price: 50, category: 'Apparel' },
//     { name: 'Phone', price: 500, category: 'Electronics' }
// ];
// const highestToLowest = products.sort((a, b) => b.price - a.price)
// console.log(highestToLowest);


// 2.  Formatting & Quick Lookups

// Task 1:- Create an array of strings formatted like "Student John has not graduated" or "Student Jane has graduated" using the map() method.


// const students = [
//     { name: 'John', scores: [80, 90, 85], graduated: false },
//     { name: 'Jane', scores: [95, 92, 88], graduated: true },
//     { name: 'Doe', scores: [70, 75, 80], graduated: false }
// ];

// const graduated = students.map((value, index) => {
//     return value.graduated
//         ?
//         `${value.name} has Graduated`
//         :
//         `${value.name} not Graduated`
// })
// console.log(graduated);

// Task 2:- Find the first student who has not graduated using find().

// const students = [
//     { name: 'John', scores: [80, 90, 85], graduated: true },
//     { name: 'Jane', scores: [95, 92, 88], graduated: false },
//     { name: 'Doe', scores: [70, 75, 80], graduated: false }
// ];

// const firstNotGraduated = students.find((value, index) => !value.graduated)
// console.log(firstNotGraduated);


// Task 3 :- Use the some() method to check if any student has a score exactly equal to 100.

// const students = [
//     { name: 'John', scores: [80, 90, 85], graduated: false },
//     { name: 'Jane', scores: [95, 92], graduated: true },
//     { name: 'Doe', scores: [70, 75, 80], graduated: false }
// ];

// const scoresMoreThan100 = students.some((value) => value.scores.includes(100))
// console.log(scoresMoreThan100);


// Intermediate: Data Aggregation

// Task:- 1 Use reduce() to calculate the final balance (deposits add to the total, withdrawals subtract).

// const transactions = [
//     { id: 't1', amount: 50, type: 'deposit' },
//     { id: 't2', amount: 20, type: 'withdrawal' },
//     { id: 't3', amount: 100, type: 'deposit' },
//     { id: 't4', amount: 30, type: 'withdrawal' }
// ];

// const res = transactions.reduce((acc, cuu) => {
//     cuu.type == "deposit"
//         ?
//         acc += cuu.amount
//         :
//         acc -= cuu.amount
//     return acc
// }, 0)
// console.log(res);



// Q.1  The Filter Challenge

// const products = [
//     { id: 1, name: "Laptop", price: 1000, inStock: true },
//     { id: 2, name: "Phone", price: 500, inStock: false },
//     { id: 3, name: "Watch", price: 200, inStock: true },
//     { id: 4, name: "Tablet", price: 800, inStock: true }
// ];

// Task 1. Create a new array containing only the products that are in stock and cost more than 300.

// const filterProduct = products.filter((value, index) => {
//     if (value.price > 300 && value.inStock) {
//         return true
//     }
//     return false

// })

// console.log(filterProduct);


// Task 2. Create an array of strings that only contains the names of all products.

// const onlyName = products.map((value) => value.name)
// console.log(onlyName);


// Task 3. You just got a shipment! Update the "Phone" object so that inStock becomes true.

// const phoneStatus = products.map((value, index) => {
//     return value.name == "Phone"
//         ?
//         { ...value, inStock: true }
//         :
//         { ...value }
// })
// console.log(phoneStatus);


// Task 4. Create a new array of objects where each object has the user's name and their averageMark (calculated from the marks array).

// const users = [
//     { id: 101, name: "Alice", age: 25, role: "admin", marks: [80, 90, 85] },
//     { id: 102, name: "Bob", age: 17, role: "guest", marks: [60, 70, 65] },
//     { id: 103, name: "Charlie", age: 30, role: "admin", marks: [95, 98, 92] },
//     { id: 104, name: "Daisy", age: 22, role: "editor", marks: [70, 72, 75] }
// ];
// const avgMarks = users.map((value, index) => {
//     let { marks } = value
//     const total = marks.reduce((acc, cuu) => (acc + cuu), 0)
//     const avg = Math.floor((total / marks.length));
//     delete value.marks
//     return { ...value, avgMarks: avg }
// })
// console.log(avgMarks);

// Task 5. Use .reduce() to create an object that counts how many users have each role.

// const users = [
//     { id: 101, name: "Alice", age: 25, role: "admin", marks: [80, 90, 85] },
//     { id: 102, name: "Bob", age: 17, role: "guest", marks: [60, 70, 65] },
//     { id: 103, name: "Charlie", age: 30, role: "admin", marks: [95, 98, 92] },
//     { id: 104, name: "Daisy", age: 22, role: "editor", marks: [70, 72, 75] }
// ];

// const countRoleOfUser = users.reduce((acc, value, index) => {
//     acc[value.role] = (acc[value.role] || 0) + 1;
//     return acc
// }, {})
// console.log(countRoleOfUser);

// or

// let obj = {}
// const grpObj = Object.groupBy(users, (val) => val.role)
// for (const [k, v] of Object.entries(grpObj)) {
//     obj[k] = v.length
// }
// console.log(obj);

// Task 6.Sort the users by age in descending order (oldest to youngest).

// const userAge = users.sort((a, b) => b.ag - a.age).map((value) => `${value.name} (${value.age})`).join(",")
// console.log(userAge);



// Q :- 2 

// Task Update

// const products = [
//     { id: "p1", name: "Laptop", price: 50000 },
//     { id: "p2", name: "Mobile", price: 20000 },
//     { id: "p3", name: "Keyboard", price: 1000 },
//     { id: "p4", name: "Mouse", price: 500 }
// ];

// const orders = [
//     { orderId: 1, customer: "Amit", products: ["p1", "p2", "p2"] },
//     { orderId: 2, customer: "Neha", products: ["p3"] },
//     { orderId: 3, customer: "Virat", products: ["p2", "p4", "p4"] }
// ];

// const map = new Map()
// for (const val of products) {
//     map.set(val.id, val)
// }
// const updatedData = orders.map((value, index) => {
//     const set = new Set()
//     let total = 0
//     let qty = 1
//     const filteredData = value.products.filter((val, ind) => {
//         if (set.has(val)) {
//             qty = qty + 1
//             return false
//         }
//         set.add(val)
//         return true
//     })
//     const fData = filteredData.map((v, i) => {
//         return map.get(v)
//     })
//     return {
//         ...value,
//         products: fData,
//         totalPrice: fData.reduce((acc, cuu) => acc += cuu.price, 0)
//     }
// })
// console.log(updatedData);


// another task

const courses = [
    { id: "c1", title: "JavaScript", fee: 5000 },
    { id: "c2", title: "React", fee: 7000 },
    { id: "c3", title: "Node.js", fee: 6000 },
    { id: "c4", title: "MongoDB", fee: 4000 }
];

const students = [
    { id: 1, name: "Amit", courses: ["c1", "c2", "c2"] },
    { id: 2, name: "Neha", courses: ["c3"] },
    { id: 3, name: "Virat", courses: ["c4", "c1", "c4"] },
    { id: 4, name: "Kohli", courses: [] }
];

const map = new Map()
for (const val of courses) {
    map.set(val.id, val)
}
console.log(map);

const courseChange = students.map((value, index) => {
    const set = new Set()
    let count = 1
    const filteredData = value.courses.filter((val, ind) => {
        if (set.has(val)) {
            count++
            return false
        }
        set.add(val)
        return true
    })
    return{
        ...value,
        courses:value.courses.map((v)=>map.get(v))
    }
})
console.log(courseChange);

