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
// console.log(typeof (ary));



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
//         resolve("p1 Resolved")
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
//         reject("p1 Rejected")
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
// })
// p1.then((res) => {
//     console.log("Fatching Data 1....");
//     console.log(res);
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p2 resolved")
//         }, 2000)
//     })
//     p2.then((res) => {
//         console.log("Fatching Data2...");
//         console.log(res);
//         const p3 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("p3 Resolved")
//             }, 2000)
//         }).then((res) => {
//             console.log("Fatching Data3....");
//             console.log(res);
//         }).catch((error) => {
//             console.log(error);
//         })
//     })
// }).catch((error) => {
//     console.log(error);
// })

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
// console.log(typeof (ary));

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

const ary = [[1, 2], [3, 4,[5,6,7,8]], [5, 6]]
// const ary = [[1, 2], [3, 4], [5, 6]]
const singleAry=ary.flat(Infinity)
// const singleAry=ary.flat()
console.log(singleAry);

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

// const ary = [10, 5, 7, 20]
// const sortedAryAcending = ary.sort((a, b) => a - b)
// console.log(sortedAryAcending);
// const sortingDecending = ary.sort((a, b) => b - a)
// console.log(sortingDecending);

// reduce

// const ary = [10, 5, 7, 20]
// const s = ary.reduce((sum, current) => {
//     return sum += current
// }, 0)
// console.log(s);

// every()

// const ary = [10, 20, 30]
// const vote=ary.every((value)=>value>=18)
// console.log(vote);

// keys()

// const fruits = [5,7,9,22,365,8];
// const keys = fruits.keys();
// for(const v of keys){
//     console.log(v);
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






