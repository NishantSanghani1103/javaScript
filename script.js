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
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     };
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
//         reject("p2 reject")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3 Resolved")
//     }, 0)
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
//         resolve("p2 rejected")
//     }, 1000)
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


//1.call method

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
// console.log(ary[0]);


// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("where");
// let lastIndex=text.lastIndexOf("locate")
// console.log(index,lastIndex);


// let text = "The rain in SPAIN stays mainly stays in the plain";
// let m = text.match("ain");
// let ml = text.matchAll("stays");
// let op = Array.from(ml);
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

// const ary = [[1, 2], [3, 4], [5, 6]]
// const singleAry=ary.flat()
// console.log(singleAry);

// flateMap

// const ary = [1, 2, 3, 4, 5]
// const mapAry = ary.flatMap((value) => value * 10)
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

// const ary=[5,10,28,18,20,25]
// const age=ary.find((value)=>value>=18)
// console.log(age);

// const ary=[5,10,28,18,20,25]
// const age=ary.findIndex((value)=>value>=18)
// console.log(age);

// const ary=[5,10,28,18,20,7]
// const age=ary.findLastIndex((value)=>value>=18)
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


function showThis() {
  return this;
}
console.log(showThis());



















