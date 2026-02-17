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

// let ary = []
// const map = new Map()

// for (const val of hobbies) {
//     map.set(val.id, val.hobby)
// }
// console.log(map);
// let obj={};
// for (const val of users) {
//     const set = new Set()
//     const userHobbies = []
//     const uHby = val.hobbies.filter((value, index) => {
//         if (set.has(value)) {
//             return false
//         }
//         set.add(value)
//         return true
//     })
//     console.log(uHby);

//     for (const v of uHby) {
//         console.log(v);

//         if (map.has(v)) {
//             userHobbies.push({
//                 id:map.get(v)
//             })
//         }
//     }
//     console.log(userHobbies);

//     ary.push({
//         id: val.id,
//         name: val.name,
//         hobbies: userHobbies
//     });
//     // console.log(uHby);

// }
// console.log(ary);


// for (const val of users) {
//     for (const v of val.hobbies) {
//         if (map.has(v)) {

//             const obj = { id: val.id, name: val.name, hobbies: [{id:v}] }
//             ary.push(obj)
//         }
//     }
// }
// console.log(ary);

// console.log(map);


// or

// const map = new Map()
// for (const val of hobbies) {
//     map.set(val.id, val)
// }
// console.log(map);

// const changeHby = users.map((val, index) => {
//     return {
//         ...val,
//         hobbies: val.hobbies.map((value, indx) => {
//             return map.get(value)
//         })
//     }
// })
// console.log(changeHby);


// [
//     {
//         id: 1,
//         name: "Amit",
//         hobbies: [
//             { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" }
//         ]
//     },
//     ...
// ]


// Task 2 : -

// const courses = [
//     { id: "c1", title: "JavaScript", fee: 5000 },
//     { id: "c2", title: "React", fee: 7000 },
//     { id: "c3", title: "Node.js", fee: 6000 },
//     { id: "c4", title: "MongoDB", fee: 4000 }
// ];

// const students = [
//     { id: 1, name: "Amit", courses: ["c1", "c2", "c2"] },
//     { id: 2, name: "Neha", courses: ["c3"] },
//     { id: 3, name: "Virat", courses: ["c4", "c1", "c4"] },
//     { id: 4, name: "Kohli", courses: [] }
// ];

// const map = new Map()
// for (const value of courses) {
//     map.set(value.id, value)
// }
// console.log(map);

// const modified = students.map((value, index) => {
//     return {
//         ...value,
//         courses: value.courses.map((v) => map.get(v))
//     }
// })

// console.log(modified);


// const employees = [
//     { id: 1, name: "Alice", department: "HR", salary: 4000 },
//     { id: 2, name: "Bob", department: "IT", salary: 6000 },
//     { id: 3, name: "Charlie", department: "IT", salary: 5500 }
// ];

// // Q.1 Find total salary of IT department.

// const totalSalary = employees.filter((value, index) => value.department == "IT").reduce((acc, cuu) => acc += cuu.salary, 0)
// console.log(totalSalary);

// // Q.2 Add a new employee without mutating the original array.

// let obj = {
//     id: 4, name: "Nishant", department: "IT", salary: 6000
// }
// const addEmp = [...employees, obj]
// console.log(addEmp);


// const orders = [
//     { id: 1, customer: "John", total: 200 },
//     { id: 2, customer: "Jane", total: 500 },
//     { id: 3, customer: "John", total: 300 }
// ];

// Q.1 Calculate total spending per customer

// const grp = Map.groupBy(orders, (val) => val.customer)
// let obj = {}
// for (const [k, v] of grp.entries()) {
//     let t = v.reduce((acc, cuu) => acc += cuu.total, 0)
//     obj[k] = t

// }
// console.log(obj);

// or

// const totalPerUser = orders.reduce((acc, cuu) => {
//     acc[cuu.customer] = (acc[cuu.customer] || 0) + cuu.total
// },{})
// console.log(totalPerUser);

// Convert the array into an object where key = order id.

// const obj = orders.reduce((acc, cuu) => {

//     acc[cuu.id] = {
//         orderId: cuu.id,
//         ...cuu
//     }
//     return acc

// }, {})
// console.log(obj);


// const users = [
//     { id: 1, name: "John", posts: [{ id: 1, title: "Post 1" }] },
//     { id: 1, name: "John", posts: [{ id: 1, title: "Post 1" }] },

// ];

// Q.1 Get users who have at least one post.

// const atLeastOnePost = users.filter((value, index) => {
//     return value.posts.length >= 1
// })
// console.log(atLeastOnePost);

// Q.2 Flatten all posts into a single array.

// const postInArray = users.map((value, index) => {

//     return {
//         id: value.id,
//         title: value.posts.map((val) => val.title)
//     }
// })
// console.log(postInArray);


// or

// const postInArray = users.flatMap((value) => value.posts)
// console.log(postInArray);


// const cart = [
//     { id: 1, name: "Shirt", price: 20, quantity: 2 },
//     { id: 2, name: "Shoes", price: 50, quantity: 1 }
// ];

// // Update quantity of Shoes to 3.

// const shoesQty = cart.map((value, index) => {
//      value.name == "Shoes" ? value.quantity = 3 : value.quantity
//      return value
// })
// console.log(shoesQty);

// const transactions = [
//     { id: 1, type: "credit", amount: 1000 },
//     { id: 2, type: "debit", amount: 200 },
//     { id: 3, type: "credit", amount: 500 },
//     { id: 4, type: "debit", amount: 100 }
// ];
// const totalValue = transactions.reduce((acc, cuu) => {
//     cuu.type == "credit"
//         ?
//         acc.totalCredit = acc.totalCredit += cuu.amount
//         :
//         acc.totalDebit = acc.totalDebit += cuu.amount
//     acc.balance = acc.totalCredit - acc.totalDebit
//     return acc
// }, { totalCredit: 0, totalDebit: 0, balance: 0 })

// console.log(totalValue);

// const movies = [
//     { title: "Inception", year: 2010, rating: 8.8 },
//     { title: "Interstellar", year: 2014, rating: 8.6 },
//     { title: "Tenet", year: 2020, rating: 7.5 }
// ];

// const sortBYRating = movies.sort((a, b) => b.rating - a.rating)
// console.log(sortBYRating);

// const movieAfter2010 = movies.filter((value, index) => value.year > 2010)
// console.log(movieAfter2010);


// const movieTille = movies.map((value, index) => value.title)
// console.log(movieTille);

// const users = [
//     { name: "Alice", age: 25, country: "USA" },
//     { name: "Bob", age: 30, country: "UK" },
//     { name: "Charlie", age: 28, country: "Canada" }
// ];

// Add a new property isAdult: true to all users.

// const addNewProperty = users.map((value, index) => {
//     return {
//         ...value,
//         isAdult:true
//     }
// })
// console.log(addNewProperty);

// const tasks = [
//     { id: 1, task: "Wash dishes", completed: true },
//     { id: 2, task: "Do laundry", completed: false },
//     { id: 3, task: "Buy groceries", completed: false },
// ];

// Count how many tasks are completed.

// const taskCompleted = tasks.filter((value) => value.completed).length
// console.log(taskCompleted);

// const taskCompleted = tasks.reduce((acc, cuu) => {
//     cuu.completed
//         ?
//         acc += 1
//         :
//         acc
//         return acc
// }, 0)
// console.log(taskCompleted);

// Mark task with id = 2 as completed.

// const modifiedCompleted = tasks.map((value, index) => {
//     value.id == 2 ? value.completed = true : value

//     return value
// })
// console.log(modifiedCompleted);

// const users = [
//     { id: 1, name: "Alice", hobbies: ["reading", "swimming"] },
//     { id: 2, name: "Bob", hobbies: ["gaming", "cycling"] },
//     { id: 3, name: "Charlie", hobbies: [] }
// ];
// const addHobby = users.map((value, index) => {
//     value.id == 3
//         ?
//         value.hobbies.push("running")
//         :
//         value
//     return value
// })
// console.log(addHobby);

// const users = [
//     {
//         id: 1, name: "Alice",
//         orders: [
//             { id: 1, amount: 200 },
//             { id: 2, amount: 150 }
//         ]
//     },
//     {
//         id: 2, name: "Bob",
//         orders: [
//             { id: 3, amount: 50 }
//         ]
//     },
//     { id: 3, name: "Charlie", orders: [] }
// ];

// Get all users who have orders above 100.

// const orderFilter = users.filter((value, index) => {
//     return value.orders.some((val) => val.amount > 100)
// })  
// console.log(orderFilter);

// Flatten all orders into a single array of order objects.

// const orderFlatten = users.flatMap((value, index) => value.orders)
// console.log(orderFlatten);

// const orders = [
//     {
//         id: 1, customer: "Alice",
//         items: [
//             { product: "Laptop", qty: 1 },
//             { product: "Mouse", qty: 2 }
//         ]
//     },
//     {
//         id: 2, customer: "Bob",
//         items: [
//             { product: "Keyboard", qty: 1 }
//         ]
//     },
//     {
//         id: 3, customer: "Alice",
//         items: [
//             { product: "Monitor", qty: 2 }
//         ]
//     }
// ];

// const totalQtyPerUser = orders.reduce((acc, cuu) => {
//     acc[cuu.customer] = (acc[cuu.customer] || 0) + cuu.items.reduce((a, c) => a += c.qty, 0)
//     return acc
// }, {})

// or

// const grp = Map.groupBy(orders, (value) => value.customer)
// let obj = {}
// for (const [key, value] of grp.entries()) {
//     console.log(value);
//     let qty=0
//     for (const v of value) {
//         qty += v.items.reduce((acc, cuu) => acc + cuu.qty, 0)

//     }
//     obj[key] = qty
// }
// console.log(obj);



// const authors = [
//     { id: "a1", name: "Robert" },
//     { id: "a2", name: "Sophia" },
//     { id: "a3", name: "Daniel" }
// ];

// const books = [
//     { id: "b1", title: "JS Basics", price: 500, authorId: "a1" },
//     { id: "b2", title: "Advanced JS", price: 800, authorId: "a1" },
//     { id: "b3", title: "React Guide", price: 600, authorId: "a2" },
//     { id: "b4", title: "Node Mastery", price: 700, authorId: "a3" }
// ];


// Show all books written by Robert.

// const map = new Map()
// for (const value of authors) {
//     map.set(value.id, value)
// }
// console.log(map);

// console.log(map);
// const rebortBook = books.map((value, index) => {
//         return{
//             ...value,
//             authorId:map.get(value.authorId).id
//         }
// }).filter((val)=>val.authorId=="a1")
// console.log(rebortBook);

// or

// const robertAuthor = authors.find((value) => value.name == "Robert")
// console.log(robertAuthor);

// const filterByAuthorName = books.filter((val, ind) => val.authorId == robertAuthor.id)
// console.log(filterByAuthorName);

// const authors = [
//     { id: "a1", name: "Robert" },
//     { id: "a2", name: "Sophia" },
//     { id: "a3", name: "Daniel" }
// ];

// const books = [
//     { id: "b1", title: "JS Basics", price: 500, authorId: "a1" },
//     { id: "b2", title: "Advanced JS", price: 800, authorId: "a1" },
//     { id: "b3", title: "React Guide", price: 600, authorId: "a2" },
//     { id: "b4", title: "Node Mastery", price: 700, authorId: "a3" }
// ];

// Calculate total revenue per author (sum of their book prices).   

// const map = new Map()
// for (const value of authors) {
//     map.set(value.id, value)
// }
// console.log(map);
// const totalRevenuePerAuthor = books.map((value, index) => {
//     return {
//         ...value,
//         authorId: map.get(value.authorId).name
//     }
// }).reduce((acc, cuu) => {
//     acc[cuu.authorId] = (acc[cuu.authorId] || 0) + cuu.price
//     return acc
// }, {})
// console.log(totalRevenuePerAuthor);

// OR

// const totalRevenuePerAuthor = books.reduce((acc, book) => {
//     const author = authors.find(a => a.id === book.authorId);
//     acc[author.name] = (acc[author.name] || 0) + book.price;
//     return acc;
// }, {});

// console.log(totalRevenuePerAuthor);


// {
//   Robert: 1300,   // 500 + 800
//   Sophia: 600,
//   Daniel: 700
// }

//  Find the author who has written the most expensive book.

// const authors = [
//     { id: "a1", name: "Robert" },
//     { id: "a2", name: "Sophia" },
//     { id: "a3", name: "Daniel" }
// ];

// const books = [
//     { id: "b1", title: "JS Basics", price: 500, authorId: "a1" },
//     { id: "b2", title: "Advanced JS", price: 800, authorId: "a1" },
//     { id: "b3", title: "React Guide", price: 600, authorId: "a2" },
//     { id: "b4", title: "Node Mastery", price: 700, authorId: "a3" }
// ];


// Find the author who has written the most expensive book.

// const maxPrice = books.sort((a, b) => b.price - a.price)[0]
// const findAuthor = authors.find((value) => value.id == maxPrice.authorId)?.name
// console.log(findAuthor);

// console.log(maxPrice);

// [
//   { author: "Robert", totalBooks: 2, totalRevenue: 1300 },
//   ...
// ]

// const modifiedBooks = authors.map((value, index) => {
//     const authorBooks = books.filter(book => book.authorId === value.id);
//     // console.log(authorBooks);
//     return {
//         author: value.name,
//         totalBooks: authorBooks.length,
//         totalRevenue: authorBooks.reduce((acc, cuu) => acc += cuu.price, 0)
//     }

// })
// console.log(modifiedBooks);

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

// Calculate total spending per customer.
// let obj = {}
// const spendingPerCust = customers.reduce((acc, cuu) => {
//     const cust = orders.filter((val, idx) => val.customerId == cuu.id)
//     console.log(cust);
//     total = cust.reduce((acc, cuu) => acc += cuu.amount, 0)
//     console.log(total);

//     acc[cuu.name] = total
//     return acc
// }, {})
// console.log(spendingPerCust);

// Find customers who never placed an order.

// const customers = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Sneha" },
//     { id: 3, name: "Arjun" },
//     { id: 4, name: "Arjun" }
// ];

// const orders = [
//     { id: 101, customerId: 1, amount: 2000 },
//     { id: 102, customerId: 1, amount: 3000 },
//     { id: 103, customerId: 2, amount: 1500 }
// ];


// const orderNotPlaced = customers.filter((value, index) => {

//     return orders.every((val) => val.customerId != value.id)
// })
// console.log(orderNotPlaced);


// Find the highest spending customer.


// const customers = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Sneha" },
//     { id: 3, name: "Arjun" },
//     { id: 4, name: "Arjun" }
// ];

// const orders = [
//     { id: 101, customerId: 1, amount: 2000 },
//     { id: 102, customerId: 1, amount: 3000 },
//     { id: 103, customerId: 2, amount: 1500 }
// ];

// const map = customers.map((value, index) => {
//     const filtered = orders.filter((val, ind) => val.customerId == value.id)
//     console.log(filtered);
//     return {
//         id: value.id,
//         name: value.name,
//         totalOrder:filtered.length,
//         totalSpending: filtered.reduce((acc, cuu) => acc += cuu.amount, 0)
//     }
// })
// // .sort((a,b)=>b.totalSpending-a.totalSpending)[0]
// console.log(map);


// const employees = [
//     { id: 1, name: "Aman", projects: ["p1", "p2"] },
//     { id: 2, name: "Riya", projects: ["p2"] },
//     { id: 3, name: "Kabir", projects: [] }
// ];

// const projects = [
//     { id: "p1", name: "Website", budget: 50000 },
//     { id: "p2", name: "Mobile App", budget: 80000 }
// ];

// Get project names assigned to each employee.

// const map = new Map()
// for (const value of projects) {
//     map.set(value.id, value.name)
// }
// const project = employees.map((value, index) => {
//     return {
//         ...value,
//         projects: value.projects.map((val)=>map.get(val))
//     }
// })
// console.log(project);

const employees = [
    { id: 1, name: "Aman", projects: ["p1", "p2"] },
    { id: 2, name: "Riya", projects: ["p2"] },
    { id: 3, name: "Kabir", projects: [] }
];

const projects = [
    { id: "p1", name: "Website", budget: 50000 },
    { id: "p2", name: "Mobile App", budget: 80000 }
];
const map = new Map()
for (const v of projects) {
    map.set(v.id, {
        name: v.name,
        budget: v.budget
    })
}
console.log(map);

const modified = employees.map((value, index) => {
    return {
        ...value,
        projects:value.projects.map((val)=>map.get(val))
    }
})
console.log(modified);

// Calculate total project budget handled by each employee

// [
//   { id: 1, name: "Aman", totalBudget: 130000 },  // 50000 + 80000
//   { id: 2, name: "Riya", totalBudget: 80000 },
//   { id: 3, name: "Kabir", totalBudget: 0 }
// ]

