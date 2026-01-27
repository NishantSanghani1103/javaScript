// function demo() {
//     console.log(arguments[0]);
// }
// demo("Nishant", "Sanghani")

// const print = () => {
//   console.log(arguments)
// }

// print("hello", 400, false)

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print() {
//         const print2 = () => {
//             console.log(this)
//         }
//         print2()
//     }
// }

// obj.print()

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: () => {
//         console.log(this)
//     }
// }

// obj.print()


// const obj = {
//   name: 'deeecode',
//   age: 200,
//   print: function() {
//     function print2() {
//       console.log(this)
//     }
//     print2()
//   }
// }

// obj.print()


// console.log(this);

// console.log(this);
// const global=()=> {
//   console.log(this)
// }
// global()

// function global() {
//     console.log(this)
//     const obj = {
//         name: "Object",
//         print: function () {
//             console.log(this)
//         },
//     }

//     obj.print()
// }
// global()


// const obj = {
//   name: "Object",
//   print: function() {
//     console.log(this)
//   },
// }

// const printer = obj.print

// printer()


// const obj = {
//   name: "Object",
//   print: function() {
//     console.log(this)

//     function print2() {
//       console.log(this)
//     }

//     print2()
//   },
// }
// obj.print()

// let obj = {
//     name: "Object",
//     print: function () {
//         const that = this
//         function print2() {
//             console.log(that);
//         }
//         print2()
//     },
// }
// obj.print()


// let obj = {
//     name: "Demo",
//     print: function () {
//         function print2(age, city) {
//             console.log(this + "age is : " + age + "From" + city)
//         }
//         print2.call(this.name, "80", "Rajkot")
//     },
// }
// obj.print()

// let obj = {
//     name: "Demo",
//     print: function () {
//         function print2(age, city) {
//             console.log(this + "age is : " + age + "From" + city)
//         }
//         print2.apply(this.name, ["80", "Amreli"])
//     },
// }
// obj.print()

// let obj = {
//     name: "Demo",
//     print: function () {
//         function print2(age, city) {
//             console.log(this + "age is : " + age + "From" + city)
//         }
//         const ans = print2.bind(this.name, "80", "Amreli")
//         ans()
//     },
// }
// obj.print()

// const me = {
//     name: "Dillion",
//     age: 56,
//     print: function () {
//         function printName() {
//             console.log(this.name)
//         }
//         printName()
//         function printAge() {
//             console.log(this.age)
//         }
//         printAge()
//     },
// }
// me.print()


// let obj = {
//     name: "Object",
//     print: () => {
//         console.log(this);
//         function print2() {
//             console.log(this);
//         }
//         print2()
//     },
// }

// obj.print()


// const person = {
//     name: "Nishant",
//     print: () => {
//         console.log(this);
//     }
// }
// person.print()

// const obj = {
//     count: 10,
//     doSomethingLater() {
//         console.log(this);
//         setTimeout(function () {
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     },
// };

// obj.doSomethingLater();

// const obj = {
//     count: 10,
//     doSomethingLater() {
//         setTimeout(() => {
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     },
// };

// obj.doSomethingLater();


// function abc(a, b) {
//     b = typeof b != "undefined" ? b : 1
//     return a * b
// }
// console.log(abc(5, 8));

// const a = function () {
//     console.log("Hello!");
// }


// class Animal {
//     constructor(name, leg) {
//         this.name = name
//         this.leg = leg
//     }
//     res() {
//         console.log(`Animal Name Is ${this.name} Which Have ${this.leg} Legs`);
//     }
// }
// const obj = new Animal("Dog", 4)
// obj.res()
