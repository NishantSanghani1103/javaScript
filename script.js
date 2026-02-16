// 1. hoisting

// let a = 10
// b()
// console.log(a);
// function b() {
//     let x = 1
//     console.log(x);
// }

// 2. scope

// function a(){
//     console.log(b);
// }
// var b=10
// a()



// function a() {
//     function c() {
//         console.log(b);
//     }
//     c()
// }
// var b = 10
// a()


// 3. SCOPE

// let a = 10;
// {
//     let a = 20;
//     console.log(a);

// }
// console.log(a);



// function test() {
//     console.log(x);
//     var x = 5;
// }
// test();


// clouser example

// function a() {
//     let b = 20
//     function c() {
//         console.log(b);
//     }
//     c()
// }
// a()

// laxical scope

// function counter() {
//     var count = 0
//     function Inner() {
//         count++
//         console.log(count);
//     }
//     Inner()
// }
// counter()


// clouser

// function a(){
//     var x=0
//     return function b(){
//         console.log(x);

//     }
// }
// let ans=a()
// ans()


// hoisting

// a()
// console.log(b);
// b()
// function a() {
//     console.log("hello");
// }
// var b = function () {
//     console.log("World");
// }

// function abc() {
//     var count = 1
//     document.getElementById("btn").addEventListener("click", function xyz() {
//         console.log("btn clicked", count++);
//     })
// }
// abc()

// timeOut

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }

// const fn = outer();
// console.log(fn());
// console.log(fn());

// let a = 10;

// (function () {
//   console.log(a);
//   let a = 20;
// })();

// setTimeout(() => console.log("A"), 0);

// Promise.resolve()
//   .then(() => console.log("B"))
//   .then(() => console.log("C"));

// console.log("D");

//  function outer() {
//      let x = 10;
//      return function inner() {
//        return x++;
//      }
//    }
//    const fn = outer();
//    console.log(fn());
//    console.log(fn());

// const ary = undefined
// // console.log(typeof (ary));



// console.log([] == false);

// function foo() {
//     return
//     {
//         name: "JS"
//     }
// }
// console.log(foo())



// 1. all returns all the resolved promise if any one is fail then return fail


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 Resolved")
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 resolve")
//     }, 3000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 Resolved")
//     }, 4000)
// })

// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })



// 2. allSettled return all the promises if it is reject then also return  or resolve no matter.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 Resolved")
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p2 rejected")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 Resolved")
//     }, 0)
// })

// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })


// 3. any return first success  promise .

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("p1 Resolved")
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 resolved")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 Resolved")
//     }, 3000)
// })

// Promise.any([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })


// 4. race return first promise no matter it is reject or resolve.

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 Resolved")
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 Resolved")
//     }, 5000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 Resolved")
//     }, 4000)
// })

// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log(res);
//     })


// 5. Promise.withResolvers();

// let { promise, resolve, reject } = Promise.withResolvers()

// setTimeout(() => {
//     let status = false
//     if (status) {
//         resolve("Promise Resolved...!!")
//     }
//     else {
//         reject("Promise Rejected...!!")
//     }
// }, 2000)
// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })


// clouser example are following:

// function outer() {
//     let ans;
//     return function inner() {
//         ans = 10 + 20
//         console.log(ans);
//     }
// }
// const clouser = outer()
// clouser()


// hoisting example

// console.log(a);
// getName()
// var a = 0
// function getName() {
//     console.log("Hello World");
// }



// const p1 = new Promise((resolve, reject) => {
//     resolve("hello world")
// })
// console.log(p1);



// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     // return displayName;
//     displayName()
// }

// makeFunc()

// function outer() {
//     var a = 10
//     return function inner() {
//         console.log(a);
//     }
// }
// const res = outer()
// res()


// promise chaining program are following

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1 resolved")
//     }, 2000)
//     console.log("Fatching Data 1....");
// })
// p1.then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log("Fatching Data2...");
//         setTimeout(() => {
//             reject("p2 rejected")
//         }, 2000)
//     }).then((res) => {
//         console.log(res);
//         return new Promise((resolve, reject) => {
//             console.log("Fatching Data3....");
//             setTimeout(() => {
//                 resolve("p3 Resolved")
//             }, 2000)
//         }).then((res) => {
//             console.log(res);
//         }).catch((error) => {
//             console.log(error);
//         })
//     })
// }).catch((error) => {
//     console.log(error);
// })

// OR

// function abc() {
//     return new Promise((resolve, reject) => {
//         console.log("Fatching Data From Promise 1...");
//         setTimeout(() => {
//             resolve("P1 Resolved...!!")
//         }, 2000)
//     })
// }
// function xyz() {
//     console.log("Fatching Data From Promise 2...");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("P2 Rejected...!!")
//         }, 2000)
//     })
// }
// (async () => {
//     try {
//         const res1 = await abc()
//         console.log(res1);
//         const res2 = await xyz()
//         console.log(res2);
//     } catch (error) {
//         console.log(error);
//     }
// })()


// const stud = {
//     name: "Nishant",
//     prinName: function () {
//         console.log(this.name);
//     }
// }
// const stud2 = {
//     name: "Sanghani"
// }
// stud.prinName.call(stud2)


// laxical scope example

// function outer() {
//     let a = 10
//     function Inner() {
//         function child() {
//             console.log(a);
//         }
//         child()
//     }
//     Inner()
// }
// outer()


//1.call/apply/bind method

// const student1 = {
//     name: "Nishant",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// const student2 = {
//     name: "Sanghani"
// }
// student1.printName.call(student2)


// const obj1 = {
//   fname: "Nishant",
//   lname: "Sanghani"
// }
// const obj2 = {
//   fname: "Virat",
//   lname: "kohli"
// }
// function details(age, city, state) {
//   console.log(this.fname + " " + this.lname + " Is " + age + " year old and from " + city + " Sate Of " + state);
// }
// details.call(obj1, 22, "amreli", "gujarat")
// details.apply(obj2, [55, "Delhi", "UP"])
// let bind = details.bind(obj1, 22, "bind", "rajkot")
// bind()

// for of example

// let tags = ["template strings", "javascript", "es6"];
// for (const x of tags) {
//     console.log(x);
// }

// string example

// var txt = "hello world"
// console.log(txt.at(0));


// var txt = "hello world"
// console.log(txt[0]);

// var txt = "hello world"
// console.log(txt.at(-1));

// let t1="hello"
// let t2="world"
// let t3=t1.concat(" ",t2)
// console.log(t3);


// let a = "5"
// let b = a.padStart(5, "0")
// let c = a.padEnd(5, "0")
// console.log(b);
// console.log(c);


// string to array

// let a = "hello,world"
// let ary = a.split(",")
// let ary = a.split(" ")
// let ary = a.split("")
// console.log(ary[1]);


// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("where");
// let lastIndex=text.lastIndexOf("locate")
// console.log(index,lastIndex);


// let text = "The rain in SPAIN stays mainly stays in the plain";
// let m = text.match("ain");
// let ml = text.matchAll("stays");
// let op = Array.from(ml);
// console.log(op);

// console.log(m);
// console.log(ml);

// let ary = []
// let arry = new Array()
// console.log(typeof(arry));

// let fruits = ["mango", "banana", "kiwi"]
// let txt = " "
// for (let index = 0; index < fruits.length; index++) {
//     txt += `${fruits[index]}`
// }
// console.log(txt);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let txt=fruits.join(",")
// console.log(txt);


// const fruits = ["Banana", "Orange"];
// const f1 = ["Apple", "Mango"]
// const fmerge=fruits.concat(f1)
// console.log(fmerge);

// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2, array3);
// console.log(myChildren);

// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter");
// console.log(myChildren);


// flate

// const ary = [[1, 2], [3, 4, [5, 6, 7, 8]], [5, 6]]
// // const ary = [[1, 2], [3, 4], [5, 6]]
// const singleAry = ary.flat(Infinity)
// // const singleAry=ary.flat()
// console.log(singleAry);

// flateMap

// const ary = [[1, 2], [3, 4, 5]]
// const mapAry = ary.flatMap((value) => value.map((x)=>x*10))
// console.log(mapAry);

// OR

// const ary = [[1, 2], [3, 4]]
// const flatMap = ary.flatMap(value => value.map((x) => x * 10))
// console.log(flatMap);

// slice() and splice()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2, 4);
// console.log(citrus);


// from()

// const ary = [1, 2, 5, 8]
// const myArry = Array.from(ary, (val) => val * 2)
// console.log(myArry);

// Reverse String

// const str = "nishant"
// const rev = str.split("")
// console.log(rev);
// const revAry = rev.reverse()
// console.log(revAry);
// const revStr = revAry.join("")
// console.log(revStr);
// let txt = ""
// for (let i = str.length; i >= 0; i--){
//   txt+=str.charAt(i)
// }
// console.log(txt);


// const ary=[5,10,28,18,20,25]
// const age=ary.find((value)=>value>=18)
// console.log(age);

// const ary=[5,10,28,18,20,25]
// const age=ary.findIndex((value)=>value>=18)
// console.log(age);

// const ary=[5,10,28,18,20,7]
// const age=ary.findLast((value)=>value>=18)
// console.log(age);

// const ary1 = [10, 5, 7, 20]
// const sortedAryAcending = ary1.toSorted((a, b) => a - b)
// console.log(sortedAryAcending);
// console.log(ary1);

// const sortingDecending = ary.sort((a, b) => b - a)
// console.log(sortingDecending);

// reduce

// const ary = [10, 5, "abc", 7, 20]
// const s = ary.reduce((sum, current) => {
//     if (!isNaN(current)) {
//         sum += current
//     }
//     else {
//         sum
//     }
//     return sum
// }, 0)
// console.log(s);

// every()

// const ary = [10, 20, 30]
// const vote=ary.every((value)=>value>=18)
// console.log(vote);

// keys()

// const fruits = [5, 7, 9, 22, 365, 8];
// const keys = fruits.entries();
// for (const [k,v] of keys) {
//     console.log(k,v);
// }


// const fruits = [5, 7, 9, 22, 365, 8];
// const f = fruits.entries()

// for (const v of f) {
//     console.log(v);

// }

// OR

// for (const [index, value] of f) {
//     console.log(index, value);
// }


// const obj = {
//     name: "nishant",
//     fulname: function () {
//         console.log(this);
//     }
// }

// const obj2 = {
//     name: "sanghani"
// }
// obj.fulname()
// obj.fulname.call(obj2)



// const person = {
//     name: "John",
//     greet: () => {
//         console.log(this.name);
//     }
// };
// person.greet()


// function showThis() {
//   return this;
// }
// console.log(showThis());

// using async/await function must be executed before previos function executed.

// const abc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("setTimeout")
//       resolve()
//     }, 2000)
//   })
// }
// const xyz = () => {
//   console.log("normal function called");

// }
// const promise = async () => {
//   await abc()
//   xyz()
// }
// promise()

// using promise then catch

// const abc = () => {
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise Resolved")
//       resolve()
//     }, 2000)
//   }).then(() => {
//     xyz()
//   }).catch(() => {
//     bcd()
//   })
// }
// const xyz = () => {
//   console.log("normal function");
// }
// const bcd = () => {
//   console.log("Not Resoled");

// }
// abc()

// obj example

// const obj = {
//   fnm: "Nishant",
//   lnm: "Sanghani",
//   age: 22,
//   details: function () {
//     return (`${this.fnm} ${this.lnm} Is ${this.age} Years Old`).toUpperCase();

//   }
// }
// console.log(obj.details());

// const abc = {
//   fnm: "Nishant",
//   lnm: "Sanghani",
//   age: 22,
// }
// let txt = " "
// for (let x in abc) {
//   txt += abc[x] + " "
// }
// console.log(txt);


// values

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myArray = Object.values(person);
// console.log(myArray);
// console.log(myArray.toString());


// entires

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myArray = Object.entries(person);
// console.log(myArray);
// // console.log(myArray.toString());
// let txt = ""
// for (let [key, value] of myArray) {
//   txt += `${key} : ${value} `
// }
// console.log(txt);

// JSON.stringify()

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myJson = JSON.stringify(person);
// console.log(myJson);

// console.log(a);
// abc()
// function abc(){
//   console.log("abs");

// }
// var a = 10


// const abc = () => {
//   setInterval(() => {
//     console.log("nishant");
//   }, 2000)
// }
// abc()


// let p1 = new Promise((resolve, reject) => {
//   let status = true
//   if (status) {
//     setTimeout(()=>{
//       resolve("promise Resolved")
//     },2000)
//   }
//   else {
//     reject("Promise Rejected")
//   }
// }).then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error);
// })



// const p = document.querySelector(".demo")
// let pq = new Promise((resolve, reject) => {
//   let status = false
//   p.innerText = "Waiting For 2 Sec";
//   if (status) {
//     setTimeout(() => {
//       resolve("Success")
//     }, 2000)
//   }
//   else {
//     setTimeout(() => {
//       reject("Error")
//     }, 2000)
//   }
// }).then((res) => {
//   p.innerText = res
// }).catch((error) => {
//   console.log(error);
//   p.innerText=error
// })


// const p = document.querySelector(".demo")
// const abc = () => {
//   return new Promise((resolve, reject) => {
//     let status = true
//     if (status) {
//       setTimeout(() => {
//         resolve("success")
//       }, 1000)
//     }
//     else {
//       setTimeout(() => {
//         reject("error")
//       }, 1000)
//     }
//   })
// }
// const res = async () => {
//   p.innerText = "waiting..."
//   try {
//     const ans = await abc()
//     p.innerText = ans
//   } catch (error) {
//     p.innerText = error
//   }
// }
// res()

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     let status = true
//     if (status) {
//       resolve("Promise Resolved...!!")
//     }
//     else {
//       reject("Promise Rejected...!!");
//     }
//   });
//   try {
//     const ans = await myPromise
//     console.log(ans);
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// myDisplay();


// let x = 5;
// try {
//   x = y + 1;
// } catch(err) {
//   console.log(err);

//   let text = err.name  + err.message;
//   console.log(text);

// }



// const abc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise Resolved")
//     }, 2000)
//   })
// }
// const xyz = () => {
//   console.log("xyz function");
// }
// async function res() {
//   const res = await abc()
//   console.log(res);
//   xyz()
// }
// res()



// const letter = new Set(["a", "b", "c", "d"])
// const val = letter.entries()
// console.log(val);

// for (const [index, value] of val) {
//   console.log(index,value);
// }

// const A = new Set(["b", "c", "d", "x"]);
// const B = new Set(["a", "b", "c", "y"]);

// const val = A.difference(B)
// console.log(val);

// const A = new Set([1, 2, 3]);
// const B = new Set([3, 4, 5, 1, 2]);
// const val = A.isSubsetOf(B)
// console.log(val);


// let person = {
//   firstname: "John",
//   lastname: "Doe",
// }
// let text = person.toString();
// console.log(text);


// const ary = [2, 4, 6, 8]
// for (const a in ary) {
//   console.log(a);

// }


// let a = 10
// function outer() {
//   function Inner() {
//     function child() {
//       function InnerChild() {
//         console.log(a);
//       }
//       InnerChild()
//     }
//     child()
//   }
//   Inner()
// }
// outer()



// const abc = () => {
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let status = true
//       if (status) {
//         resolve("promise Resolved")
//       }
//       else {
//         reject("promise Rejected")
//       }
//     }, 2000)
//   })
//   return p1
// }
// const n = () => {
//   console.log("Nishant Sanghani");
// }
// const res = async () => {
//   try {
//     const ans = await abc()
//     console.log(ans);
//     n()

//   } catch (error) {
//     console.log(error);
//   }
// }
// res()


// const res = async () => {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let status = false
//       if (status) {
//         resolve("Promise Resolved")
//       }
//       else {
//         reject("promise Rejected")
//       }
//     }, 2000)
//   })
//   try {
//     const res = await p
//     console.log(res);

//   } catch (error) {
//     console.log(error);
//   }
// }
// res()


// const promise = async () => {
//     const p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let status = false
//             if (status) {
//                 resolve("Promise Resolved")
//             }
//             else {
//                 reject("Promise Rejected")
//             }
//         }, 2000)
//     })
//     try {
//         const res = await p1
//         console.log(res);
//         abc()


//     } catch (error) {
//         console.log(error);

//     }
// }
// const abc = () => {
//     console.log("Normal Function");

// }
// promise()



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let status = true
//         if (status) {
//             resolve("Promise Resolved....!!")
//         }
//         else {
//             reject("Promise Rejected...!!")
//         }
//     }, 2000)
// }).then((res) => {
//     console.log(res);
//     abc()
// }).catch((error) => {
//     console.log(error);

// })


// function abc(x, y) {
//     let ans = 0
//     return function xyz() {
//         ans = x + y
//         console.log(ans);
//     }
// }
// const a = abc(10,20)
// a()



// console.log([] + {});
// const ary = [2, 4, 8, 10]
// let modify = ary.map((value) => value * 2)
// console.log(modify);

// ary.forEach((value, index) => {
//     console.log(value, index);

// })
// let status = {} ?? ""
// console.log(status);

// const res = `const fatchData = async () => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos"

//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }`
// res()
//     (async () => {
//         await fatchData()
//     })()
// console.log('Done');

// const fetchData = async() => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos"
//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }
// fetchData().then(() => {
//     console.log("done");
// })

// const fetchData = async() => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos"
//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }
// await fetchData()
// console.log("demo");


// const res = `const fatchData = async () => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos"

//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }`
// // const fn = new Function(res + "; return fatchData();")
// // fn()
// const ans = eval(res + "; fatchData()")

// const fetchData = async () => {
//     let apiUrl = `https://jsonplaceholder.typicode.com/todos`

//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }
// fetchData().then(() => {
//     console.log("Done");
// })

// const fetchData = async () => {
//     let apiUrl = `https://jsonplaceholder.typicode.com/todos`

//     let res = await fetch(apiUrl)

//     let data = await res.json()

//     console.log(data);
// }
// (async () => {
//     await fetchData()
//     console.log("done");
// })()

// const ans = `const fatchData=async()=>{
//         let apiUrl="https://jsonplaceholder.typicode.com/todos"

//         let res=await fetch(apiUrl)

//         let data=await res.json()

//         console.log(data)
//     }`
// const fn = new Function(ans + "; fatchData()")
// fn()


// const ans = `const fatchData=async()=>{
//         let apiUrl="https://jsonplaceholder.typicode.com/todos"

//         let res=await fetch(apiUrl)

//         let data=await res.json()

//         console.log(data)
//     }`;


// (async () => {
//    await eval(ans + "; fatchData()");
//     console.log("Done");

// })()


// const arr = [{ x: 1 }, { x: 2 }];

// const ans = arr.filter((value) => {
//     return value.x > 1
// })
// ans[0].x = 99
// console.log(arr[1].x);

// const fatchData = async () => {
//     let apiUrl = `https://jsonplaceholder.typicode.com/todos`
//     let res = await fetch(apiUrl)
//     let data = await res.json()
//     console.log(data);
// }
// (async () => {
//     await fatchData()
//     console.log("Done");
// })()

// const outer = () => {
//     console.log(arguments);
// }
// outer("Nishant", "Sanghani")

// function outer() {
//     let a = 10
//     function inner() {
//         console.log(a);
//     }
//     a = 20
//     return inner
// }
// const ans = outer()
// ans()


// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// globalThis.num = 10
// console.log(num);

// const res = (a, b, c) => {
//     console.log(this.num + a + b + c);

// }
// res(10,20,30)


// const obj = {
//     name: "Nishant",
//     print() {
//         const abc = () => {
//             let that = this
//             function xyz() {
//                 console.log(that);
//             }
//             xyz()
//         }
//         abc()
//     }
// }
// obj.print()


// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani",
//     fullName(city, state) {
//         console.log(`My Name Is ${this.fName} ${this.lName} My City Is ${city} State Of ${state}`);
//     }
// }
// const obj2 = {
//     fName: "Virat",
//     lName: "Kohli",
// }
// const res = obj.fullName.apply(obj2, ["Dhari", "Gujarat"])


// SHALLOW COPY / DEEP COPY


// const original = {
//     name: 'Alice',
//     details: {
//         age: {
//             city: {
//                 state: "gujarat"
//             }
//         }
//     }
// };
// const shallowCopy = { ...original }
// shallowCopy.details.age.city.state = "Mp"
// shallowCopy.name = "Nishant"
// console.log(shallowCopy);
// console.log(original);

// const deepCopy = structuredClone(original)
// OR
// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.details.age.city.state = "Mp"
// console.log(original);
// console.log(deepCopy);

// const letter = new Set(["a", "b", "c", "d"])
// const res = letter.has("a")
// console.log(res);

// const letters = new Set(["a", "b", "c"]);
// const myIterator = letters.entries();
// const iterator = letters.keys()
// const i1 = letters.values()
// for (const x of i1) {
//     console.log(x);
// }
// for (const x of iterator) {
//     console.log(x);
// }
// for (const [v, k] of myIterator) {
//     console.log(v, k);
// }

// const set = new WeakSet()
// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// set.add(obj)
// const ans = set.has(obj)
// console.log(ans);

// const set = new WeakSet()
// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// set.add(obj)
// set.delete(obj)
// const ans = set.has(obj)  // it will gives a false
// console.log(ans);

// let set = new WeakSet()
// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// set.add(obj)
// set = null
// const ans = set.has(obj)
// console.log(ans);


// DATES

// const d = new Date()

// const d1 = new Date("2022-03-25");

// const d2 = new Date(2004, 2, 12, 10, 10, 20, 0)

// const d3 = new Date(2025, 2, 33);

// const d4 = new Date(98,11)

// console.log(d);
// console.log(d1);
// console.log(d2);
// console.log(d3);
// console.log(d4);

// let msec = Date.parse("2012-03-12");

// const d = new Date(msec);

// console.log(d);

// const d = new Date(2004, 2, 12, 10, 10, 50)
// console.log(d);

// console.log(d.getFullYear());
// console.log(d.getUTCFullYear());

// console.log(d.getMonth());
// console.log(d.getUTCMonth());

// console.log(d.getDay());
// console.log(d.getUTCDay());  // gives a same

// console.log(d.getDate());
// console.log(d.getUTCDate());  // both same

// console.log(d.getHours());
// console.log(d.getUTCHours());  // -5

// console.log(d.getMinutes());
// console.log(d.getUTCMinutes());  // -30

// console.log(d.getSeconds());
// console.log(d.getUTCSeconds());  // second is same UTC and normal.

// console.log(d.getMilliseconds());
// console.log(d.getUTCMilliseconds());  // same in UTC and normal

// console.log(d.getTime());

// const now = Date.now()
// console.log(now);  // Returns millisecond from jan 1 1970

// const normalTime = new Date()
// console.log(normalTime);
// console.log(normalTime.toUTCString());

// console.log(normalTime.getTimezoneOffset() / 60); // difference between utc and local timing. gives in minutes.


// const d1 = new Date()
// d1.setFullYear(2020)
// d1.setHours(5)
// d1.setDate(d1.getDate())
// d1.setHours(8)
// console.log(d1.toISOString());
// console.log(d1.toUTCString());

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d1 = new Date("2021-03-25");
// let month = months[d1.getMonth()];
// console.log(month);

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d2 = new Date()
// console.log(days[d2.getDay()]);


// MAP

// const f = new Map()

// f.set("apples", 500)
// f.set("banana", 1500)
// f.set("kiwi", 2500)

//  OR

const f = new Map([
    ["apples", 500],
    ["banana", 1500],
    ["banana", 1500],
    ["banana", 1500],
    ["kiwi", 2500]
])
// f.set("apples", 100)
// f.set("pineapple", 20)
// f.delete("apples")
// f.clear()
// console.log(f.has("banana"));

// console.log(f);
// f.forEach((value, key) => console.log(
//     value + key))

// for (const key of f.values()) {
//     console.log(key);
// }

// const array = [
//     {
//         name: "Nishant",
//         age: 22
//     },
//     {
//         name: "Tushar",
//         age: 22
//     },
//     {
//         name: "Karan",
//         age: 50
//     },
//     {
//         name: "virat",
//         age: 35
//     }
// ]

// const group = Object.groupBy(array, a => a.age)
// console.log(group);

// const array = [
//     {
//         name: "Nishant",
//         age: 22
//     },
//     {
//         name: "Tushar",
//         age: 22
//     },
//     {
//         name: "Karan",
//         age: 50
//     },
//     {
//         name: "virat",
//         age: 35
//     }
// ]
// const res = Map.groupBy(array, o => o.age > 35)
// console.log(res);

// const map = new WeakMap()
// const obj = {
//     fname: "John",
//     lname: "Doe"
// }

// const res = map.set(obj, "secret")
// console.log(res.get(obj));
// const ans = res.has(obj)
// res.delete(obj)
// console.log(res);

// console.log(ans);

// const d = new Date(2025, 11, 31, 10, 15, 30)
// console.log("Local Time Is : " + d); // Wed Dec 31 2025 13:00:00 GMT+0530 (India Standard Time)

// // to METHODS

// console.log("UTC Time Is : " + d.toUTCString()); // Wed, 31 Dec 2025 07:30:00 GMT

// console.log(d.toISOString()); // 2025-12-31T07:30:00.000Z
// console.log(d.toJSON());   // 2025-12-31T07:30:00.000Z
// console.log(d.toString());  // Wed Dec 31 2025 13:00:00 GMT+0530 (India Standard Time)
// console.log(d.toLocaleString());  // 31/12/2025, 13:00:00
// console.log(d.toDateString()); // Wed Dec 31 2025
// console.log(d.toLocaleDateString()); // 31/12/2025
// console.log(d.toLocaleTimeString()); // 13:00:00
// console.log(d.toTimeString());  //13:00:00 GMT+0530 (India Standard Time)


// get METHODS

// console.log(d.getDate());
// console.log(d.getUTCDate());

// console.log(d.getDay());
// console.log(d.getUTCDay());

// console.log(d.getFullYear());
// console.log(d.getUTCFullYear());

// console.log(d.getHours());
// console.log(d.getUTCHours());

// console.log(d.getMilliseconds());
// console.log(d.getUTCMilliseconds());

// console.log(d.getTime());

// console.log(d.getMinutes());
// console.log(d.getUTCMinutes());

// console.log(d.getMonth());
// console.log(d.getUTCMonth());

// console.log(d.getSeconds());
// console.log(d.getUTCSeconds());


// console.log(d.getTimezoneOffset());

// d.getVarDate


// set methods

// const d1 = new Date()
// console.log(d1);
// console.log(d1.toUTCString());
// d1.setDate(31)
// d1.setFullYear(2024)
// d1.setHours(12)
// d1.setMinutes(30)
// d1.setSeconds(50)
// d1.setMonth(11)


// console.log(d1.getTime());


// Object Methods:-

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50, eyeColor: "blue"
// }
// Object.freeze(person)
// person.firstName = "Nishant"
// console.log(person);

// const ary = [2, 45, 8, 62, 3]

// console.log(Object.isFrozen(ary));

// ary.push(5)
// console.log(ary);


// const x = person
// Object.assign(x, person)
// const x = Object.create(person)
// console.log(x);  // it will gives a blanck object {}
// console.log(x.lastName);
// x.age = 10;
// console.log(person);




// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];
// const res=Object.fromEntries(fruits)
// console.log(res);
// const obj = Object.entries(fruits)
// console.log(obj);
// for (const [key, value] of obj) {
//     console.log(key, value);

// }

// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
//     get print() {
//         console.log(this.firstName + this.lastName);
//     }
// }
// obj.print


// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
//     language: "English",
//     set lan(lan) {
//         this.language = lan.toUpperCase()
//     }
// }
// obj.lan = "Hindi"
// console.log(obj);


// const obj = {
//     counter: 0
// }
// Object.defineProperty(obj, "add", {
//     set(value) {
//         this.counter += value
//     }
// })
// Object.defineProperty(obj, "increment", {
//     get() {
//         this.counter++
//     }
// })
// Object.defineProperty(obj, "decrement", {
//     get() {
//         this.counter--
//     }
// })
// Object.defineProperty(obj, "reset", {
//     get() {
//         this.counter = 0
//     }
// })
// Object.defineProperty(obj, "language", {
//     value: "English"
// })

// obj.add = 5
// console.log(obj);
// obj.increment
// console.log(obj);
// obj.decrement
// console.log(obj);
// obj.reset
// console.log(obj);

// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
//     language: "English",
// }
// Object.preventExtensions(obj)
// console.log(Object.isExtensible(obj));

// console.log(obj);

// const ary = [2, 5, 8, 9, 2, 0, 68]
// // Object.freeze(ary)
// // console.log(Object.isFrozen(ary));
// Object.preventExtensions(ary)
// console.log(Object.isExtensible());

// ary.push(10)
// console.log(ary);

// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
//     language: "English",
// }

// Object.seal(obj)

// console.log(obj);

// const ary = [2, 5, 8, 9, 2, 0, 68]
// Object.seal(ary)
// ary.unshift(56)
// console.log(ary);



// const obj = {
//     firstName: "Nishant",
//     lastName: "Sanghani",
// }
// Object.defineProperties(obj, {
//     language: { value: "English" },
//     age: { value: 22 }
// })
// console.log(obj);

// const desc = Object.getOwnPropertyDescriptor(obj, "language")
// const desc1 = Object.getOwnPropertyDescriptors(obj)
// const desc2 = Object.getOwnPropertyNames(obj)
// console.log(desc);
// console.log(desc1);
// console.log(desc2);



// const apples = { name: 'Apples' };
// const bananas = { name: 'Bananas' };
// const oranges = { name: 'Oranges' };

// const map = new Map()

// map.set(apples, 500)
// console.log(map);



// for (const [key, value] of map) {
//     console.log(key, value);

// }
// console.log(map.get(apples));





// const person = { name: 'Lydia' };

// Object.defineProperty(person, 'age', { value: 21 });
// console.log(Object.keys(person));

// console.log(person);







// const obj = {
//     name: "nishant",
//     age: 22,
//     details: {
//         address: {
//             city: "Rajkot"
//         }
//     }
// }

// const res = structuredClone(obj)
// res.details.address.city = "Amreli"
// console.log(obj);


// const d = Date.UTC(2026, 1, 1)
// console.log(d);

// const dob = new Date()
// console.log(dob.toLocaleString('en-US', { timeZone: 'America/New_York' }));
// console.log(dob.toISOString());

// console.log(dob.toISOString().split("T")[0]);

// console.log(dob.getTime());
// console.log(Date.parse("January 26 2025"));





// console.log(d.getFullYear() - dob.getFullYear());
// console.log(dob.getFullYear());


// const obj = {};
// console.log(obj);
// console.log(obj);
// console.log(obj["1"]);




// const obj = {
//     name: "JS",
//     getName() {
//         return this.name;
//     }
// };

// const fn = obj.getName;
// console.log(fn());

// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy);

// copy.a = 5;
// console.log(copy);

// console.log(obj.a);

// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// setTimeout(obj.getA, 0);


// const parent = { a: 1 };
// const child = Object.create(parent);
// child.a = 2;
// delete child.a;
// console.log(child.a);


// const obj = {
//     a: 1,
//     getA() {
//         return this.a;
//     }
// };

// const fn = obj.getA;
// console.log(fn.call(null));



// const obj = {
//     a: 1
// };

// (function (o) {
//     o = { a: 2 };
// })(obj);

// console.log(obj.a);

// function Person(name) {
//     this.name = name;
//     return { name: "Override" };
// }
// const p1 = new Person("Alex");
// console.log(p1.name);

// class Test {
//     a = 10;
//     show = () => {
//         console.log(this.a);
//     };
// }
// const t = new Test();
// const fn = t.show;
// fn();


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


// let text = "Visit W3Schools";
// let n = text.search(/w3schools/i);
// console.log(n);

// let text = "Visit W3Schools";
// let n = text.match(/W3Schools/i);
// console.log(n);

// let text = "Visit Microsoft!";
// let result = text.replace(/microsoft/i, "w3Schools")
// console.log(result);

// let text = "Black, white, Green,Red,  Blue, yellow.";
// let n=text.match(/red|green|blue|white/i)
// console.log(n);

// let text = "Nishant"
// let res = text.match(/n/gi)
// console.log(res);

// let text = "Nishant ,1062#ee"
// let res = text.match(/\d/g)
// console.log(res);


// let text = "Give 100%!";
// let res = text.match(/\w/g)
// console.log(res);

// let text = "1, 100 or 1000?";
// let res = text.match(/10?/g)
// console.log(res);

// let text = "W3Schools Tutorial";
// let res = text.match(/^w3schools/i)
// console.log(res);


// let txt = "More than 89630 times"
// let res=txt.match(/[0-9]/g)
// console.log(res);


// let text = "Line$Line.";
// let res=text.match(/line./sgi)
// console.log(res);



// let text = "abc def ghi";
// let res = text.match(/\w+/gy)
// console.log(res);

// let txt = "abc def ghi"
// let ptn = /abc (?=def)/
// let res = ptn.test(txt)
// console.log(res);

// let txt = "abc def ghi"
// let ptn = /abc (?!def)/
// let res = ptn.test(txt)
// console.log(res);

// let txt = "abc def ghi"
// let ptn = /(?<=abc) def/  // looksbackword / behind
// let res = ptn.test(txt)
// console.log(res);

// let txt = "abc def ghi"
// let ptn = /(?<!abc) def/  // looksbackword not / behind not
// let res = ptn.test(txt)
// console.log(res);



// const d = new Date("January 25,2025")
// console.log(d);
// const d1 = Date.now()
// const d3 = Date.parse("2026-02-08")
// // console.log(d3);

// console.log(Math.floor(Math.floor(Math.floor((d1 - d3) / 1000) / 60) / 60));

// const users = [
//     { name: "Amit", role: "developer", exp: 4, salary: 50000 },
//     { name: "Neha", role: "tester", exp: 5, salary: 40000 }
// ];

// const userGroup = Object.groupBy(users, (value) => value.role == "developer" && value.exp > 3)
// console.log(userGroup);

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
//             { name: "Charger", price: 20 }
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
//     { id: 1, name: "Amit", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", "1b451981-2f77-43e7-b9e1-8c4d5c3d69b3"] },
//     { id: 2, name: "Neha", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b1"] },
//     { id: 3, name: "Virat", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b12"] },
//     { id: 4, name: "Kohli", hobbies: ["1b451981-2f77-43e7-b9e1-8c4d5c3d69b3"] },
// ];

// let ary = []
// const map = new Map()
// for (const val of hobbies) {
//     map.set(val.id, val)
// }
// console.log(map);
// let obj = {};
// for (const val of users) {
//     const userHobbies = []
//     for (const v of val.hobbies) {
//         // console.log(v);
//         if (map.has(v)) {
//             userHobbies.push({
//                 id: map.get(v).id,
//                 hobbies:map.get(v).hobby
//             })
//         }
//     }
//     // console.log(userHobbies);
//     ary.push({
//         id: val.id,
//         name: val.name,
//         hobbies: userHobbies
//     });
//     // console.log(uHby);

// }
// console.log(ary);


// OR

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
//     const filteredData = value.products.filter((val, ind) => {
//         if (set.has(val)) {
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
// for (const val of courses) {
//     map.set(val.id, val)
// }
// console.log(map);

// const courseChange = students.map((value, index) => {
//     const set = new Set()
//     let count = 1
//     const filteredData = value.courses.filter((val, ind) => {
//         if (set.has(val)) {
//             count++
//             return false
//         }
//         set.add(val)
//         return true
//     })
//    console.log(filteredData);
//     const course = filteredData.map((v) => {
//         return {
//             ...map.get(v),
//             count: count
//         }
//     })
//     return {
//         ...value,
//         courses: course,
//         totalPrice: course.reduce((acc, cuu) => acc += cuu.fee, 0),
//     }
// })
// console.log(courseChange);



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
//     const set = new Set()
//     const filterdData = value.courses.filter((value, ind) => {
//         if (set.has(value)) {
//             return false
//         }
//         set.add(value)
//         return true
//     })
//     const courseUpdate = filterdData.map((v) => map.get(v))
//     return {
//         ...value,
//         courses: courseUpdate,
//         totalFees: courseUpdate.reduce((acc, cuu) => acc += cuu.fee,0)
//     }
// })

// console.log(modified);

// const orders = [
//     { id: 1, customer: "John", total: 200 },
//     { id: 2, customer: "Jane", total: 500 },
//     { id: 3, customer: "John", total: 300 }
// ];

// // Q.1 Calculate total spending per customer
// const grp = Map.groupBy(orders, (val) => val.customer)
// console.log(grp);
// let obj = {}
// for (const [k, v] of grp.entries()) {
//     let t = v.reduce((acc, cuu) => acc += cuu.total, 0)
//     obj[k] = t

// }
// console.log(obj);

// const users = [
//     { id: 1, name: "John", posts: [{ id: 1, title: "Post 1" }] },
//     { id: 2, name: "Jane", posts: [] },
//       { id: 2, name: "Jane", posts: [] }
// ];

// // Q.1 Get users who have at least one post.

// const atLeastOnePost = users.filter((value, index) => {
//     return value.posts.length >= 1
// })
// console.log(atLeastOnePost);

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
//     { id: 3, name: "Charlie", orders: [{ id: 4, amount: 250 }] }
// ];

// Get all users who have orders above 100.

// const orderFilter = users.filter((value, index) => {
//     return value.orders.some((val) => val.amount > 100)
// })  
// console.log(orderFilter);

// const orderFlatten = users.flatMap((value, index) => value.orders)
// console.log(orderFlatten);


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
    const { projects, ...rest } = value
    return {
        ...rest,
        totalBudget: value.projects.map((val) => map.get(val)).reduce((acc, cuu) => acc += cuu.budget, 0)
    }
})
console.log(modified);


// [
//   { id: 1, name: "Aman", totalBudget: 130000 },  // 50000 + 80000
//   { id: 2, name: "Riya", totalBudget: 80000 },
//   { id: 3, name: "Kabir", totalBudget: 0 }
// ]

