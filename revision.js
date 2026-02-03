// let x = 1
// switch (x) {
//     case 1:
//         console.log("Sunday");
//         break
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Select Valid Week");
// }

// let { resolve, reject, promise } = Promise.withResolvers()

// setTimeout(() => {
//     let status = false
//     if (status) {
//         resolve("Promise Resolved")
//     }
//     else {
//         reject("Promise Rejected")
//     }
// }, 2000)
// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

// function abc(a, b) {
//     let ans = a + b
//     return function xyz() {
//         console.log(ans);
//     }
// }
// const res = abc(10, 20)
// res()


// const p1 = new Promise((resolve, reject) => {
//     console.log("P1 Data Fatching....");
//     setTimeout(() => {
//         resolve("P1 Resolved...!!")
//     }, 2000)
// })
// p1.then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching....");
//         setTimeout(() => {
//             resolve("P2 Resolved...!!")
//         }, 3000)
//     })
// })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve, reject) => {
//             console.log("P3 Data Fatching....");
//             setTimeout(() => {
//                 resolve("P3 Resolved...!!")
//             }, 4000)
//         })
//     })
//     .then((res) => {
//         console.log(res);

//     }).catch((errr) => {
//         console.log(errr);

//     })

// function abc() {
//     return new Promise((resolve, reject) => {
//         console.log("P1 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P1 Resolved....!!")
//         }, 2000)
//     })
// }
// function xyz() {
//     return new Promise((resolve, reject) => {
//         console.log("P2 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P2 Resolved...!!")
//         }, 3000)
//     })
// }
// function zyw() {
//     return new Promise((resolve, reject) => {
//         console.log("P3 Data Fatching...!!");
//         setTimeout(() => {
//             resolve("P3 Resolved")
//         }, 4000)
//     })
// }
// (async () => {
//     try {
//         console.log(await abc());
//         console.log(await xyz());
//         console.log(await zyw());
//     } catch (error) {
//         console.log(error);
//     }
// })()

// const obj = {
//     fName: "Nishant",
//     lName: "Sanghani"
// }
// function details(city, state) {
//     console.log(`My Name Is : ${this.fName} ${this.lName} From ${city} State Of ${state}`);
// }
// details.call(obj, "Dhari", "Gujarat")
// details.apply(obj, ["Dhari", "Gujarat"])
// const res = details.bind(obj, "Dhari", "Gujarat")
// res()


// function myFunction() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(myFunction(10, 2, 4, 5, 8));


// const str = "Nishant"
// console.log(str.at(8));


// console.log(str.charAt(0));
// console.log(str[2]);


// const str = "nishant kumar sharma";
// const res = str.split(" ").map((value) => value.at(0).toUpperCase()).join(".")
// console.log(res);

// const str = "apple banana kiwi";
// const res = str.split(" ").map((value) => value.slice(0, value.length - 1) + value.at(-1).toUpperCase()).join(" ")
// console.log(res);


// const str = "user_profile_image";
// const res = str.replaceAll("_", " ").split(" ").map((value) => value.at(0).toUpperCase() + value.slice(1)).join(" ")
// console.log(res);

// const email = "nishant@gmail.com";
// const res = email.split("@").map((value, index) => index == 0 ? value.at(0) + "*".repeat(value.length - 1) : value).join("@")
// console.log(res);


// const str = "hello world";
// const res = str.split(" ").map((value) => value.split('').reverse().join("")).join(" ")
// console.log(res);


// const str = "  hello   world   js  ";
// const res = str.trim().split(" ").filter((value) => value != "").join(" ")
// console.log(res);

// const str = "background-color-size"
// const res = str.split("-").map((value, index) => index == 0 ? value : value.at(0).toUpperCase() + value.slice(1)).join("")
// console.log(res);

// const str = "hello world"
// const res = str.split(" ").map((value) => value.at(0).toUpperCase() + value.slice(1, value.length - 1) + value.at(-1).toUpperCase()).join(" ")
// console.log(res);


// const str = "HeLLo WoRLd"
// const res = str.split(" ").map((value) => value.split("").map((value) => value.charCodeAt(value) >= 65 && value.charCodeAt(value) <= 90 ? value.toString(value).toLowerCase() : value.toUpperCase()).join("")).join(" ")
// console.log(res);


// const str = "javascript is awesome"
// const res = str.split("").filter((value) => value != ('a' || 'e' || 'i' || 'o' || 'u')).join("")
// console.log(res);

// const str = "abc"
// const res = str.split("").map((value)=>value.repeat(2)).join("")
// console.log(res);


// const str = "javascript"
// const res = str.split("").reduce((acc, cuu) => 'aeiou'.includes(cuu) ? acc + 1 : acc, 0)
// console.log(res);

// const str = "developer"
// const res = str.split(" ").map((value,index)=>value.slice(1,value.length-1)).join("")
// console.log(res);

// const str = "i love  javascript programming"
// const res = str.split(" ").reduce((acc, curr) => curr.length > acc.length ? curr : acc, "")
// console.log(res);



















