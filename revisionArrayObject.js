// Q.1 :- Access & Print Properties

// const users = [
//     { id: 1, name: "Alice", age: 22 },
//     { id: 2, name: "Bob", age: 25 },
//     { id: 3, name: "Charlie", age: 30 }
// ];

// Add a New Object Add a new user { id: 4, name: "David", age: 28 } to the array without modifying the original array.

// const obj = { id: 4, name: "David", age: 28 }
// const res = [...users, obj]

// Update the age of the user with id: 2 to 26 without mutating the original array.

// const modifyAge = users.map((value, index) => {
//     value.id == 2 ? value.age = 26 : value
//     return value
// })
// console.log(modifyAge);

// Find an Object :- Write a function that returns the user object whose name is "Charlie".

// const uName = users.filter((value, index) => value.name == "Charlie")
// console.log(uName);

// Remove an Object Remove the user with id: 1 from the array.

// const removeObj = users.filter((value, index) => value.id != 1)
// console.log(removeObj);


// Q.2 :- Group By Property

// const products = [
//     { id: 1, name: "Laptop", category: "Electronics" },
//     { id: 2, name: "Shirt", category: "Clothing" },
//     { id: 3, name: "Phone", category: "Electronics" },
//     { id: 4, name: "Jeans", category: "Clothing" }
// ];

// const grp = Map.groupBy(products, (val) => val.category)
// const obj = {}
// for (const [k, v] of grp.entries()) {
//     obj[k] = v
// }
// console.log(obj);

// Q.3 :- Find the student who has the highest total score.

// const students = [
//     {
//         id: 1,
//         name: "Sam",
//         scores: { math: 80, science: 90 }
//     },
//     {
//         id: 2,
//         name: "Tom",
//         scores: { math: 70, science: 95 }
//     }
// ];
// const highestTotal = students.reduce((acc, cuu) => {
//     const total = Object.values(cuu.scores).reduce((acc, cuu) => acc += cuu, 0)
//     return total > acc ? total : acc
// }, 0)
// console.log(highestTotal);



// Q.4 

// [
//   { customer: "Alice", totalOrders: 2, totalSpent: 250 },
//   { customer: "Bob", totalOrders: 1, totalSpent: 300 }
// ]

// const orders = [
//     { id: 1, customer: "Alice", items: 3, total: 150 },
//     { id: 2, customer: "Bob", items: 5, total: 300 },
//     { id: 3, customer: "Alice", items: 2, total: 100 }
// ];
// const set = new Set()
// const res = orders.filter((value, index) => {
//     if (set.has(value.customer)) {
//         return false
//     }
//     set.add(value.customer)
//     return true
// }).map((val, ind) => {
//     const fR = orders.filter((v, i) => v.customer == val.customer)
//     return {
//         customer: val.customer,
//         totalOrder: fR.length,
//         totalSpent: fR.reduce((acc, cuu) => acc += cuu.total, 0)
//     }
// })
// console.log(res);

// expected op.

// [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Shirt" }
// ]


// const categories = [
//     {
//         name: "Electronics",
//         items: [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]
//     },
//     {
//         name: "Clothing",
//         items: [{ id: 3, name: "Shirt" }]
//     }
// ];


// const flaleMap = categories.flatMap((value, index) => value.items)
// console.log(flaleMap);

// const products = [
//     { name: "Laptop", category: "Electronics", price: 1000 },
//     { name: "Phone", category: "Electronics", price: 800 },
//     { name: "Shirt", category: "Clothing", price: 40 }
// ];
// const set = new Set()
// const res = products.filter((value, index) => {
//     if (set.has(value.category)) {
//         return false
//     }
//     set.add(value.category)
//     return true
// }).map((val, ind) => {
//     const ans = products.filter((v, i) => v.category == val.category).sort((a, b) => b.price - a.price)[0]
//     return ans
// })
// console.log(res);


// const tasks = [
//   { title: "Task A", priority: "High" },
//   { title: "Task B", priority: "Low" },
//   { title: "Task C", priority: "Medium" }
// ];

// const priorityOrder = {
//   High: 1,
//   Medium: 2,
//   Low: 3
// };

// tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

// console.log(tasks);

// [
//   { id: 1, name: "Alice", total: 250 },
//   { id: 2, name: "Bob", total: 400 }
// ]

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];
// const orders = [
//     { id: 1, total: 250 },
//     { id: 2, total: 400 }
// ];
// const res = users.map((value, index) => {
//     const filter = orders.filter((val, ind) => val.id == value.id).reduce((acc, cuu) => acc += cuu.total, 0)
//     return {
//         id: value.id,
//         name: value.name,
//         total: filter
//     }
// })
// console.log(res);

// Update age of user with id: 1 to 23 without mutating original state.

// const state = {
//     users: [
//         {
//             id: 1,
//             profile: {
//                 name: "Alice",
//                 age: 22
//             }
//         }
//     ]
// };
// const res = JSON.parse(JSON.stringify(state))
// res.users.map((value, index) => value.profile.age = 23)
// console.log(state);
// console.log(res);

// Return all users that have duplicate emails.

// const users = [
//     { id: 1, email: "a@mail.com" },
//     { id: 2, email: "b@mail.com" },
//     { id: 3, email: "a@mail.com" }
// ];
// const set = new Set()
// const res = users.filter((value, index) => {
//     if (set.has(value.email)) {
//         return true
//     }
//     return false
// })
// console.log(res);

// Split into two arrays:

// const numbers = [
//     { value: 10 },
//     { value: 25 },
//     { value: 5 },
//     { value: 30 }
// ];
// let ary = []
// let res = numbers.filter((value, index) => {
//     if(value.value>=20){
//         return true
//     }
//     else{
//         ary.push(value)
//         return false
//     }
// })
// console.log(ary);

// console.log(res);


const transactions = [
    { id: 1, amount: 100 },
    { id: 2, amount: -20 },
    { id: 3, amount: 50 }
];

// expected op

// [
//   { id: 1, amount: 100, balance: 100 },
//   { id: 2, amount: -20, balance: 80 },
//   { id: 3, amount: 50, balance: 130 }
// ]

// const res = transactions.map((value, index) => {
//     const t = transactions.slice(0, index + 1)
//         .reduce((acc, cuu) => acc += cuu.amount,0)
//     // console.log(t);
//     return {
//         ...value,
//         balance: t
//     }
// })
// console.log(res);

// const orders = [
//     { status: "pending" },
//     { status: "completed" },
//     { status: "pending" }
// ];

/* {
  pending: 2,
  completed: 1
}*/


// const res = orders.reduce((acc, cuu) => {
//     acc[cuu.status] = (acc[cuu.status] || 0) + 1
//     return acc
// }, {})
// console.log(res);


// const state = {
//     users: [
//         {
//             id: 1,
//             posts: [
//                 { id: 101, title: "Post A" },
//                 { id: 102, title: "Post B" }
//             ]
//         }
//     ]
// };

// // Remove post with id: 101 immutably.

// const res = structuredClone(state)
// res.users.map((value) => {
//     const r = value.posts.filter((val) => val.id != 101)
//     return {
//         ...value,
//         posts: r
//     }
// })

// console.log(res);


// const orders = [
//     { userId: 1, amount: 200 },
//     { userId: 2, amount: 300 },
//     { userId: 1, amount: 150 },
//     { userId: 3, amount: 400 }
// ];
// const set = new Set()

// const filter = orders.filter((val, ind) => {
//     if (set.has(val.userId)) {
//         return false
//     }
//     set.add(val.userId)
//     return true
// }).map((value, index) => {
//     const ans = orders.filter((v, i) => v.userId == value.userId).reduce((acc, cuu) => acc += cuu.amount, 0)
//     return {
//         userId: value.userId,
//         total: ans
//     }

// })
// console.log(filter);

// const customers = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Sneha", city: "Mumbai" },
//     { id: 3, name: "Arjun", city: "Delhi" }
// ];

// const orders = [
//     { id: "o1", customerId: 1, amount: 500, status: "delivered" },
//     { id: "o2", customerId: 2, amount: 700, status: "pending" },
//     { id: "o3", customerId: 1, amount: 300, status: "delivered" },
//     { id: "o4", customerId: 3, amount: 900, status: "cancelled" }
// ];

// // expected op

// // [
// //   { id: "o1", customer: "Rahul", amount: 500, status: "delivered" },
// //   { id: "o2", customer: "Sneha", amount: 700, status: "pending" },
// //   { id: "o3", customer: "Rahul", amount: 300, status: "delivered" },
// //   { id: "o4", customer: "Arjun", amount: 900, status: "cancelled" }
// // ]

// const map = new Map()
// for (const v of customers) {
//     map.set(v.id, v.name)
// }
// const res = orders.map((value, index) => {
//     let { customerId:c1, ...rest } = value
//     return {
//         ...rest,
//         customer: map.get(value.customerId)
//     }

// })
// console.log(res);

// const customers = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Sneha", city: "Mumbai" },
//     { id: 3, name: "Arjun", city: "Delhi" }
// ];

// const orders = [
//     { id: "o1", customerId: 1, amount: 500, status: "delivered" },
//     { id: "o2", customerId: 2, amount: 700, status: "pending" },
//     { id: "o3", customerId: 1, amount: 300, status: "delivered" },
//     { id: "o4", customerId: 3, amount: 900, status: "cancelled" },

// ];

// [
//   { customer: "Rahul", totalSpent: 800 },
//   { customer: "Sneha", totalSpent: 700 },
//   { customer: "Arjun", totalSpent: 900 }
// ]

// const map = new Map()
// for (const v of customers) {
//     map.set(v.id, v.name)
// }
// const set = new Set()
// const res = orders.filter((value, index) => {
//     if (set.has(value.customerId)) {
//         return false
//     }
//     set.add(value.customerId)
//     return true
// }).map((val, index) => {
//     const ans = orders.filter((v, i) => v.customerId == val.customerId).reduce((acc, cuu) => acc + cuu.amount, 0)
//     console.log(ans);
//     return {
//         customer: map.get(val.customerId),
//         totalSpent: ans
//     }
// })
// console.log(res);



// const customers = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Sneha", city: "Mumbai" },
//     { id: 3, name: "Arjun", city: "Delhi" }
// ];

// const orders = [
//     { id: "o1", customerId: 1, amount: 500, status: "delivered" },
//     { id: "o2", customerId: 2, amount: 700, status: "pending" },
//     { id: "o3", customerId: 1, amount: 300, status: "delivered" },
//     { id: "o4", customerId: 3, amount: 900, status: "cancelled" },
//     { id: "o5", customerId: 10, amount: 400, status: "pending" }
// ];

// // expected op.

// // [
// //   { id: "o5", customerId: 10, amount: 400, status: "pending" }
// // ]


// const map = new Map()
// for (const v of customers) {
//     map.set(v.id, v.name)
// }
// // console.log(map);

// const filter = orders.filter((value, index) => {
//     if (!map.has(value.customerId)) {
//         return true
//     }
//     return false
// })
// console.log(filter);


// Find Customers Who Ordered More Than Once

// const customers = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Sneha", city: "Mumbai" },
//     { id: 3, name: "Arjun", city: "Delhi" }
// ];

// const orders = [
//     { id: "o1", customerId: 1, amount: 500, status: "delivered" },
//     { id: "o2", customerId: 2, amount: 700, status: "pending" },
//     { id: "o3", customerId: 1, amount: 300, status: "delivered" },
//     { id: "o4", customerId: 3, amount: 900, status: "cancelled" },
// ];

// const map = new Map()
// const set = new Set()
// for (const v of customers) {
//     map.set(v.id, v.name)
// }
// const ans = orders.filter((value, index) => {
//     if (set.has(value.customerId)) {
//         return true
//     }
//     set.add(value.customerId)
//     return false

// }).map((val, ind) => {
//     return map.get(val.customerId)
// })
// console.log(ans);



// const res = customers.map((value, index) => {

//     const total = orders
//         .filter(order => order.customerId === value.id)
//         .reduce((sum, order) => sum + order.amount, 0);
//     console.log(total);
//     return { city: value.city, total };
// });
// console.log(res);

// const ans = res.reduce((acc, item) => {
//     acc[item.city] = (acc[item.city] || 0) + item.total;
//     return acc;
// }, {});
// console.log(ans);


// const movies = [
//     { id: "m1", title: "Inception", genre: "Sci-Fi", year: 2010 },
//     { id: "m2", title: "Interstellar", genre: "Sci-Fi", year: 2014 },
//     { id: "m3", title: "Joker", genre: "Drama", year: 2019 }
// ];

// const reviews = [
//     { id: 1, movieId: "m1", rating: 5, user: "Amit" },
//     { id: 2, movieId: "m1", rating: 4, user: "Neha" },
//     { id: 3, movieId: "m2", rating: 5, user: "Rahul" },
//     { id: 4, movieId: "m3", rating: 3, user: "Sneha" },
//     { id: 5, movieId: "m2", rating: 4, user: "Amit" }
// ];

// const ans = movies.map((value, index) => {
//     const filter = reviews.filter((val, ind) => {
//         return val.movieId == value.id
//     }).reduce((acc, cuu, i, a) => acc += cuu.rating / a.length, 0)
//     return {
//         title: value.title,
//         avgRating: filter
//     }
// }).sort((a, b) => b.avgRating - a.avgRating)[0]
// console.log(ans);

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

// Increase salary by 10% for users who are "developer" and have experience > 3 years.

// const users = [
//     { name: "Amit", role: "developer", exp: 4, salary: 50000 },
//     { name: "Neha", role: "tester", exp: 5, salary: 40000 },
//     { name: "Amit", role: "developer", exp: 15, salary: 30000 },
// ];

// const filter = users.filter((value, index) => value.role == "developer" && value.exp > 3).map((val, ind) => {
//     val.salary += (val.salary * 10) / 100
//     return val
// })
// console.log(filter);

// console.log(users);


//  Create a new array of objects where each object has the user's name and their averageMark (calculated from the marks array).

// const users = [
//     { id: 101, name: "Alice", age: 25, role: "admin", marks: [80, 90, 85] },
//     { id: 102, name: "Bob", age: 17, role: "guest", marks: [60, 70, 65] },
//     { id: 103, name: "Charlie", age: 30, role: "admin", marks: [95, 98, 92] },
//     { id: 104, name: "Daisy", age: 22, role: "editor", marks: [70, 72, 75] }
// ];

// const newArray = users.map((value, index) => {
//     const avgMarks = value.marks.reduce((acc, cuu, ind, ar) => acc + cuu / ar.length, 0).toFixed(2)
//     // console.log(avgMarks);
//     return {
//         name: value.name,
//         avgMarks
//     }
// })
// console.log(newArray);

// const products = [
//     { id: "p1", name: "Laptop", price: 50000 },
//     { id: "p2", name: "Mobile", price: 20000 },
//     { id: "p3", name: "Keyboard", price: 1000 },
//     { id: "p4", name: "Mouse", price: 500 }
// ];
// const orders = [
//     { orderId: 1, customer: "Amit", products: ["p1", "p2", "p2"] },
//     { orderId: 2, customer: "Neha", products: ["p3"] },
//     { orderId: 3, customer: "Virat", products: ["p2", "p4"] }
// ];



// const ans = orders.map((value, index) => {
//     const ans = products.filter((val, ind) => {
//         return value.products.includes(val.id)
//     })
//     return {
//         ...value,
//         products: ans,
//         totalPrice:ans.reduce((acc, cuu) => acc += cuu.price, 0)
//     }
// })
//  console.log(ans);


// const students = [
//     { id: 1, name: "Arjun", courses: ["c1", "c2"] },
//     { id: 2, name: "Meera", courses: ["c2", "c3"] },
//     { id: 3, name: "Zoya", courses: [] }
// ];

// const courses = [
//     { id: "c1", title: "Mathematics", credits: 3, fee: 15000 },
//     { id: "c2", title: "Physics", credits: 4, fee: 20000 },
//     { id: "c3", title: "Chemistry", credits: 2, fee: 10000 }
// ];

// [
//   { id: 1, name: "Arjun", totalCredits: 7, totalFee: 35000, courseCount: 2 },
//   { id: 2, name: "Meera", totalCredits: 6, totalFee: 30000, courseCount: 2 },
//   { id: 3, name: "Zoya", totalCredits: 0, totalFee: 0, courseCount: 0 }
// ]

// const newArray = students.map((value, index) => {
//     const crFilter = courses.filter((val, ind) => {
//         return value.courses.includes(val.id)
//     })
//     return {
//         id: value.id,
//         name: value.name,
//         totalCredits: crFilter.reduce((acc, cuu) => acc += cuu.credits, 0),
//         totalFees: crFilter.reduce((acc, cuu) => acc += cuu.fee, 0),
//         courseCount: crFilter.length
//     }
// })
// console.log(newArray);

// const employees = [
//     { id: 1, name: "Dev", tasks: ["t1", "t2"] },
//     { id: 2, name: "Sara", tasks: ["t3"] },
//     { id: 3, name: "Imran", tasks: [] }
// ];

// const tasks = [
//     { id: "t1", hours: 5, completed: true },
//     { id: "t2", hours: 3, completed: false },
//     { id: "t3", hours: 8, completed: true }
// ];

// expected op

// [
//   { id: 1, name: "Dev", totalHours: 8, completedTasks: 1 },
//   { id: 2, name: "Sara", totalHours: 8, completedTasks: 1 },
//   { id: 3, name: "Imran", totalHours: 0, completedTasks: 0 }
// ]

// const newAry = employees.map((value, index) => {
//     const filter = tasks.filter((val, ind) => {
//         return value.tasks.includes(val.id)
//     })
//     return {
//         id: value.id,
//         name: value.name,
//         totalHour: filter.reduce((acc, cuu) => acc += cuu.hours, 0),
//         completedTask: filter.filter((v, i) => v.completed).length
//     }
// })
// console.log(newAry);


// const hobbies = [
//     { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" },
//     { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b1", hobby: "writting" },
//     { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b12", hobby: "listining" },
//     { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b3", hobby: "coading" }
// ]

// const users = [
//     { id: 1, name: "Amit", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", "1b451981-2f77-43e7-b9e1-8c4d5c3d69b12"] },
//     { id: 2, name: "Neha", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b1"] },
//     { id: 3, name: "Virat", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b12", "1b451981-2f77-43e7-b9e1-8c4d5c3d69b12"] },
//     { id: 4, name: "Kohli", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b3"] },
// ];

// const newAry = users.map((value, index) => {
//     const hbyFilter = hobbies.filter((val, ind) => value.hobbies.includes(val.id)).map((v, i) => v.hobby)
//     console.log(hbyFilter);
//     return {
//         ...value,
//         hobbies: hbyFilter
//     }
// })
// console.log(newAry);


// const employees = [
//     { id: 1, name: "Amit", departmentId: "d1", salary: 60000 },
//     { id: 2, name: "Neha", departmentId: "d2", salary: 60000 },
//     { id: 3, name: "Rahul", departmentId: "d1", salary: 70000 },
// ];
// const departments = [
//     { id: "d1", name: "Engineering" },
//     { id: "d2", name: "HR" },
// ];
// const newAry = departments.map((value, index) => {
//     const filterdDept = employees.filter((val, ind) => val.departmentId == value.id)
//     // console.log(filterdDept);
//     const avgSalary = filterdDept.reduce((acc, cuu) => acc += cuu.salary / filterdDept.length, 0)
//     // console.log(avgSalary);
//     return {
//         id: value.id,
//         name: value.name,
//         avgSalary
//     }
// })
// console.log(newAry);

// const users = [
//     { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
//     { id: 2, name: "Virat", hobbies: ["dancing", "gaming"] },
//     { id: 3, name: "Kohli", hobbies: ["reading", "playing"] },   // duplicate
//     { id: 4, name: "Sachin", hobbies: ["singing", "reading"] },
//     { id: 5, name: "Rahul", hobbies: ["dancing", "playing", "singing"] }    // duplicate   // duplicate
// ];
// const map = new Map()
// for (const value of users) {
//     for (const hby of value.hobbies) {
//         if (!map.has(hby)) {
//             map.set(hby, {
//                 hobbies: hby,
//                 user: []
//             })
//         }
//         else{
//             map.get(hby).user.push({...value})
//         }

//     }
// }
// console.log(map);


// const orders = [
//     { id: 1, customer: "John", total: 200 },
//     { id: 2, customer: "Jane", total: 500 },
//     { id: 3, customer: "John", total: 300 }
// ];

// Q.1 Calculate total spending per customer

// const newAry = orders.reduce((acc, cuu) => {
//     if (!acc[cuu.customer]) {
//         acc[cuu.customer] = 0
//     }
//     acc[cuu.customer] += cuu.total
//     return acc
// }, {})
// console.log(newAry);

// const authors = [
//     { id: "a1", name: "Robert" },
//     { id: "a2", name: "Sophia" },
//     { id: "a3", name: "Daniel" }
// ];

const books = [
    { id: "b1", title: "JS Basics", price: 500, authorId: "a1" },
    { id: "b2", title: "Advanced JS", price: 800, authorId: "a1" },
    { id: "b3", title: "React Guide", price: 600, authorId: "a2" },
    { id: "b4", title: "Node Mastery", price: 700, authorId: "a3" }
];



// // Show all books written by Robert.

// const map = new Map()

// for (const v of authors) {
//     map.set(v.id, v.name)
// }
// const res = books.map((value, index) => {
//     return {
//         ...value,
//         author: map.get(value.authorId)
//     }
// }).filter((val, ind) => val.authorId == 'a1')
// console.log(res);

// const customers = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Sneha" },
//     { id: 3, name: "Arjun" }
// ];

// const orders = [
//     { id: 101, customerId: 1, amount: 2000 },
//     { id: 102, customerId: 1, amount: 3000 },
//     { id: 103, customerId: 2, amount: 1500 }
// ];

// // Calculate total spending per customer.

// const ans = customers.map((value, index) => {
//     const filter = orders.filter((val, ind) => val.customerId == value.id).reduce((acc, cuu) => acc += cuu.amount, 0)
//     return {
//         name: value.name,
//         totalSpent: filter
//     }
// })
// console.log(ans);


// const employees = [
//     { id: 1, name: "Aman", projects: ["p1", "p2"] },
//     { id: 2, name: "Riya", projects: ["p2"] },
//     { id: 3, name: "Kabir", projects: [] }
// ];
// const projects = [
//     { id: "p1", name: "Website", budget: 50000 },
//     { id: "p2", name: "Mobile App", budget: 80000 }
// ];
// const res = employees.map((value, index) => {
//     let { projects: p, ...rest } = value
//     console.log(p);
    
//     const prjct = projects.filter((val, ind) => value.projects.includes(val.id)).reduce((acc, cuu) => acc += cuu.budget, 0)
//     return {
//         ...rest,
//         Budgets: prjct
//     }
// })
// console.log(res);
