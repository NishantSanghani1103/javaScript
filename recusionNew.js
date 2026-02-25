// function fact(n) {
//     if (n == 1) return 1
//     return fact(n - 1) * n
// }
// console.log(fact(5));

// function fibbo(n) {
//     if (n <= 1) return 1
//     return fibbo(n - 1) + fibbo(n - 2)
// }
// console.log(fibbo(5));

// function number(n) {
//     if (n == 5) {
//         console.log(n);
//         return
//     }
//     console.log(n);

//     number(n + 1)
// }
// number(1)

// binary search using normal function.

// function binarySearch() {
//     let ary = [5, 7, 9, 25, 98, 100]
//     let target = 5
//     let s = 0
//     let e = ary.length - 1
//     while (s <= e) {
//         let mid = Math.floor((s + e) / 2)
//         if (ary[mid] == target) {
//             return mid
//         }
//         else if (target < ary[mid]) {
//             e = mid - 1
//         }
//         else if (target > ary[mid]) {
//             s = mid + 1
//         }
//     }
// }
// console.log(binarySearch());

// binary search using recursion.

// let ary = [5, 7, 9, 25, 98, 100]
// let target = 98
// function binarySearch(ary, s, e) {
//     if (s >= e) return -1
//     let mid = Math.floor((s + e) / 2)
//     if (ary[mid] == target) {
//         return mid
//     }
//     else if (target < ary[mid]) {
//         return binarySearch(ary, s, mid - 1)
//     }
//     else if (target > ary[mid]) {
//         return binarySearch(ary, mid + 1, e)
//     }
// }
// console.log(binarySearch(ary, 0, ary.length - 1));

// sum of digits using noraml function.

// function sumOfDigits(n) {
//     let ans = 0
//     while (n != 0) {
//         let rem = n % 10
//         ans = ans + rem
//         n = Math.floor(n / 10)
//     }
//     return ans
// }
// console.log(sumOfDigits(123));

// sumOfDigits using Recusion.

// function sumOfDigits(n) {
//     if (n == 0) return 0
//     return Math.floor((n % 10)) + sumOfDigits(n / 10)
// }
// console.log(sumOfDigits(123));

// reverse number using recursion.

// function reverseNumber(n, rev = 0) {
//     if (n == 0) return rev
//     return reverseNumber(
//         Math.floor(n / 10),
//         rev * 10 + (n % 10)
//     )
// }
// console.log(reverseNumber(123));

// sum of the array element using recursion.

// let ary = [2, 5, 7]
// function sumOfArray(ary) {
//     if (ary.length == 0) return 0
//     return ary[0] + sumOfArray(ary.slice(1))
// }
// console.log(sumOfArray(ary));

// const tree = {
//     value: 1,
//     children: [
//         { value: 2, children: [] },
//         { value: 3, children: [] }
//     ]
// };
// function traverse(node) {
//     console.log(node.value);

//     for (let child of node.children) {
//         traverse(child);
//     }
// }
// traverse(tree);

// flateMap using recusrion.

// let ary = [1, [2, [3]]]
// function flatten(arr) {
//     let result = [];
//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             result = result.concat(flatten(item));
//         } else {
//             result.push(item);
//         }
//     }
//     return result;
// }

// console.log(flatten(ary));

// let ary = [2, 5, 8, 9, 1, 63, 87, 25]

// function max(ary) {
//     let max = ary[0]
//     for (let i = 0; i < ary.length; i++) {
//         if (ary[i] > max) {
//             max = ary[i]
//         }
//     }
//     return max
// }
// console.log(max(ary));

// maximum element from flaten array. using recursion.

// let ary = [1, [5, [3, 20]], 4]
// function maxFlatten(ary) {
//     let max = ary[0]
//     for (let v of ary) {
//         if (Array.isArray(v)) {
//             let innerMax = maxFlatten(v);
//             if (innerMax > max) {
//                 max = innerMax;
//             }
//         }
//         else {
//             if (v > max) {
//                 max = v
//             }
//         }
//     }
//     return max
// }
// console.log(maxFlatten(ary));

// let ary = [2, 59, 3, 8, 5, 63]
// let count = 0
// for (let i = 0; i < ary.length; i++) {
//     count++
// }
// console.log(count);

// let ary = [1, [2, [3, 4]], 5]

// function countElementFlatten(ary) {
//     let count = 0
//     for (const val of ary) {
//         if (Array.isArray(val)) {
//             count += countElementFlatten(val)
//         }
//         else {
//             count++
//         }
//     }
//     return count
// }
// console.log(countElementFlatten(ary));

// find how many leval of the nested array using recusrion.

// let ary = [1, [2, [3, [4]]], 5]
// function findDepthOfNestedArry(ary) {
//     let depth = 1
//     for (const v of ary) {
//         if (Array.isArray(v)) {
//             depth += findDepthOfNestedArry(v)
//         }
//         else {
//             depth
//         }
//     }
//     return depth
// }
// console.log(findDepthOfNestedArry(ary));

// find the total price using recusrion.

// let items = [
//     { name: "A", price: 10 },
//     {
//         name: "B",
//         children: [
//             { name: "C", price: 20 },
//             {
//                 name: "D",
//                 children: [
//                     { name: "E", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// function totalPrice(ary) {
//     let total = 0
//     for (const val of ary) {
//         if (val.price) {
//             total += val.price
//         }
//         if (val.children) {
//             total += totalPrice(val.children)
//         }
//     }
//     return total
// }
// console.log(totalPrice(items));

// count the total Object in array using recursion.

// let data = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             {
//                 id: 4,
//                 children: [
//                     { id: 5 }
//                 ]
//             }
//         ]
//     }
// ];

// function findTotalObject(ary) {
//     let total = 0
//     for (const val of ary) {
//         if (val.children) {
//             total += findTotalObject(val.children)
//         }
//         total++
//     }
//     return total

// }
// console.log(findTotalObject(data));

// find the value of the last id.

// let data = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             {
//                 id: 4,
//                 children: [
//                     { id: 5 }
//                 ]
//             }
//         ]
//     }
// ];

// function findNestedId(ary) {
//     let op = ary[0].id

//     for (const val of ary) {
//         op = val.id
//         if (val.children) {
//             op = findNestedId(val.children)
//         }
//     }
//     return op
// }
// console.log(findNestedId(data));

// let data = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             {
//                 id: 4,
//                 children: [
//                     { id: 5 }
//                 ]
//             }
//         ]
//     }
// ];

// expected op

// [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 }
// ]

// function flattenObjects(arr, result = []) {
//     for (let obj of arr) {
//         result.push({ id: obj.id });
//         if (obj.children) {
//             flattenObjects(obj.children, result);
//         }
//     }
//     return result;
// }
// console.log(flattenObjects(data));

// let data = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             {
//                 id: 4,
//                 children: [
//                     { id: 5 }
//                 ]
//             }
//         ]
//     }
// ];
// function addLevel(ary, level = 1) {
//     return ary.map((value, index) => {
//         let newObj = { ...value, level }
//         if (value.children) {
//             newObj.children = addLevel(value.children, level + 1)
//         }
//         return newObj
//     })
// }
// console.log(addLevel(data));

// let data = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             {
//                 id: 4,
//                 children: [
//                     { id: 5 }
//                 ]
//             },
//             {
//                 id: 6,
//                 children: [
//                     { id: 7 }
//                 ]
//             }
//         ]
//     }
// ];

// // find leaf node using recursion.

// function leafNode(ary, res = []) {
//     for (const val of ary) {
//         if (val.children) {
//             leafNode(val.children, res)
//         }
//         else{
//             res.push(val)
//         }
//     }
//     return res
// }
// console.log(leafNode(data));

// let data = {
//     a: 10,
//     b: {
//         c: 20,
//         d: {
//             e: 30,
//             f: 40
//         }
//     },
//     g: 50
// };

// function sumOfNumber(obj) {
//     let total = 0

//     for (const v in obj) {
//         let val = obj[v]
//         if (typeof (val) === "object") {
//             total += sumOfNumber(val)
//         }
//         else {
//             total += val
//         }

//     }
//     return total

// }
// console.log(sumOfNumber(data));

// let arr = [1, [2, [3, 4], 5], [6]];

// // count the element of the array.

// function countElement(ary) {
//     let count = 0
//     for (const val of ary) {
//         if (Array.isArray(val)) {
//             count += countElement(val)
//         }
//         else {
//             count++
//         }
//     }
//     return count
// }
// console.log(countElement(arr));

// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };

// // count total keys in nested object.

// function countKey(obj) {
//     let count = 0
//     for (const val in obj) {
//         count++
//         if (typeof (obj[val]) == "object") {
//             count += countKey(obj[val])
//         }
//     }
//     return count
// }
// console.log(countKey(obj));

// let users = [
//     { id: 1 },
//     {
//         id: 2,
//         children: [
//             { id: 3 },
//             { id: 4 }
//         ]
//     }
// ];

// // find the total user.

// function totalUser(ary) {
//     let total = 0
//     for (const val of ary) {
//         total++
//         if (val.children) {
//             total += totalUser(val.children)
//         }
//     }
//     return total
// }
// console.log(totalUser(users));

// let data = {
//     a: 10,
//     b: [20, 30],
//     c: {
//         d: [40, { e: 50 }]
//     },
//     h: 50,
// };

// sum of all the number

// function sumOfNumber(obj) {
//     let sum = 0
//     for (const v in obj) {
//         let value = obj[v]
//         // console.log(value);
//         if (typeof value == "number") {
//             sum += value
//         }
//         else if (Array.isArray(value) && typeof value == "number") {
//                 sum += value.reduce((acc, cuu) => acc += cuu, 0)
//         }
//         else if (typeof value === "object") {
//             sum += sumOfNumber(value)
//         }
//     }
//     return sum
// }
// console.log(sumOfNumber(data));

// let complex = {
//     name: "John",
//     skills: ["JS", "React"],
//     projects: [
//         {
//             title: "App",
//             tech: ["Node", "MongoDB"]
//         }
//     ]
// };

// store all the string value in the array.

// function arryString(obj, result = []) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (Array.isArray(value)) {
//             for (const items of value) {
//                 if (typeof items == "string")
//                     result.push(items)
//                 if (typeof items == "object") {
//                     arryString(items, result)
//                 }
//             }
//         }
//         else {
//             result.push(value)
//         }
//     }
//     return result
// }
// console.log(arryString(complex));

// let data = {
//     a: 5,
//     b: [10, { c: 25 }, [30]],
//     d: {
//         e: 100,
//         f: [3, 7]
//     }
// };

// // find the maximum number

// function findMaxNumber(obj, max = 0) {
//     for (const val in obj) {
//         let value = obj[val]
//         // console.log(value);
//         if (typeof value == "number") {
//             if (value > max) {
//                 max = value
//             }
//         }
//         else if (Array.isArray(value)) {
//             for (const v of value) {
//                 // console.log(v);

//                 if (typeof v == "number") {
//                     if (v > max) {
//                         max = v
//                     }
//                     // console.log(max);
//                 }
//                 else {
//                     max = findMaxNumber(v, max)
//                 }
//             }
//         }
//         else if (typeof value == "object") {
//             max = findMaxNumber(value, max)
//         }

//     }
//     return max
// }
// console.log(findMaxNumber(data));

// let data = {
//     a: true,
//     b: [false, true, { c: false }],
//     d: {
//         e: false,
//         f: [false, true]
//     }
// };

// // count boolean true value.

// function countTrueValue(obj) {
//     let count = 0
//     for (const val in obj) {
//         let value = obj[val]

//         if (value == true) {
//             count++
//         }
//         else if (Array.isArray(value)) {
//             for (const items of value) {
//                 if (items == true) {
//                     count++
//                 }
//                 else if (typeof value == "object") {
//                     count += countTrueValue(items)
//                 }
//             }
//         }
//         else {
//             count += countTrueValue(value)
//         }
//     }
//     return count
// }
// console.log(countTrueValue(data));

// let data = {
//     a: 10,
//     b: [20, { c: 30 }],
//     d: {
//         e: 40, f: [50, 60, 4]
//     }
// };

// // replace all the value with 0. Deep clone=
// let deep = JSON.parse(JSON.stringify(data))

// function replaceWith0(obj, zero = 0) {

//     for (const v in obj) {
//         let value = obj[v]
//         if (typeof value == "number")
//             obj[v] = zero
//         else if (Array.isArray(value)) {
//             zero = replaceWith0(value)
//         }
//         else {
//             zero = replaceWith0(value)
//         }
//     }
//     return obj
// }
// console.log(replaceWith0(deep));
// console.log(data);

// const data = [
//     {
//         type: "folder",
//         name: "src",
//         children: [
//             {
//                 type: "file",
//                 name: "index.js"
//             },
//             {
//                 type: "folder",
//                 name: "components",
//                 children: [
//                     { type: "file", name: "App.js" }
//                 ]
//             }
//         ]
//     }
// ];

// // if type=="file" then return that object in array.

// function fileReturn(ary, result = []) {
//     for (const value of ary) {
//         if (value.type == "file") {
//             result.push(value)
//         }
//         if (value.children) {
//             fileReturn(value.children, result)
//         }
//     }
//     return result
// }
// console.log(fileReturn(data));

// let data = {
//     a: {
//         b: {
//             c: {
//                 d: 60
//             }
//         }
//     }
// };

// // find the path of the value.

// function findPath(obj, result = []) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (typeof value == "object") {
//             result.push(val)
//             findPath(value, result)
//         }
//         else if (typeof value == "number") {
//             result.push(val)
//         }
//     }
//     return result
// }
// console.log(findPath(data));

// let data = {
//     a: null,
//     b: [1, null, { c: null, d: 5 }],
//     e: {
//         f: null
//     },
//     g: null
// };

// // remove all the null values

// function removeNull(obj) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (value == null) {
//             delete obj[val]
//         }
//         else if (Array.isArray(value)) {
//             for (let i = 0; i < value.length; i++) {
//                 if (value[i] == null) {
//                     value.splice(i, 1)
//                 }
//                 else if (typeof value == "object") {
//                     removeNull(value)
//                 }
//             }
//         }
//         else if (typeof value == "object") {
//             removeNull(value)
//         }
//     }
//     return obj
// }
// console.log(removeNull(data));

// let data = {
//     a: 1,
//     b: [2, { c: 3 }, [4, 5]],
//     d: {
//         e: 6
//     }
// };

// store all the value in one array.

// function flltenToAry(obj, result = []) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (typeof value == "number") {
//             result.push(value)
//         }
//         else if (Array.isArray(value)) {
//             flltenToAry(value, result)
//         }
//         else if (typeof value == "object") {
//             flltenToAry(value, result)
//         }
//     }
//     return result
// }
// console.log(flltenToAry(data));

// let data = {
//     name: "john",
//     skills: ["js", "react"],
//     projects: [
//         { title: "app" }
//     ]
// };

// function upperCaseValue(obj) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (typeof value == "string") {
//             obj[val] = value.toUpperCase()
//         }
//         else {
//             obj[val] = upperCaseValue(value)
//         }
//     }
//     return obj
// }
// console.log(upperCaseValue(data));

// let data = {
//     a: 1,
//     b: [2, 3, { c: 4 }],
//     d: { e: 6 }
// };

// // find all even number.

// function evenNumber(obj, result = []) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (typeof value == "number") {
//             if (value % 2 == 0) {
//                 result.push(value)
//             }
//         }
//         else {
//             evenNumber(value, result)
//         }
//     }
//     return result
// }
// console.log(evenNumber(data));

// let data = {
//     a: 1,
//     b: {
//         a: 2,
//         d: [{ a: 60 }],
//         c: {
//             a: 3
//         }
//     }
// };

// // count how many time key "a" occure.

// function keyCount(obj) {
//     let count = 0
//     for (const key in obj) {
//         let value = obj[key]
//         if (key == "a") {
//             count++
//         }
//         else if (typeof value == "object") {
//             count += keyCount(value)
//         }
//     }
//     return count
// }
// console.log(keyCount(data));

// let data = {
//     a: [1, 2, 2, 3],
//     b: {
//         c: [3, 4, 4]
//     }
// };

// // remove duplicates value from the array.

// function removeDuplicate(obj) {
//     for (const val in obj) {
//         let value = obj[val]
//         if (Array.isArray(value)) {
//             let res = value.filter((val, ind) => {
//                 return value.indexOf(val) === ind
//             })
//             obj[val] = res
//         }
//         else if (typeof value == "object") {
//             removeDuplicate(value)
//         }
//     }
//     return obj
// }
// console.log(removeDuplicate(data));

// let data = {
//     a: "hi",
//     b: ["hello world", { c: "javascript" }]
// };

// // return longest string from array

// function longestString(obj, len = "") {
//     for (const val in obj) {
//         let value = obj[val]
//         if (value.length > len.length) {
//             len = value
//         }
//         else if (Array.isArray(value)) {
//             len = longestString(value, len)
//         }
//         else if (typeof value == "object") {
//             len = longestString(value, len)
//         }
//     }
//     return len
// }
// console.log(longestString(data));

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { a: 1, b: { c: 3 } };

// // return tru if both obj are same

// function checkSame(obj) {
//     let ans = obj2
//     // console.log(ans);

//     for (const val in obj) {
//         let value = obj[val]
//         console.log(value);
//         for (const val2 in ans) {
//             let value2=ans[val2]
//             console.log(value2);

//         }

//     }
// }
// console.log(checkSame(obj1));

// let arr = [1, [2, [3, 4]]];

// // reverse array without flatten.

// function reveArray(ary, result = []) {
//     for (let i = ary.length - 1; i >= 0; i--) {
//         if (Array.isArray(ary[i])) {
//             result.push(reveArray(ary[i]))
//         }
//         else {
//             result.push(ary[i])
//         }
//     }
//     return result
// }
// console.log(reveArray(arr));

// let ary = [1, 2, 3, 4]

// sum of the arry using recursion.

// function sumOfAry(ary) {
//     if (ary.length == 0) {
//         return 0
//     }
//     return ary[0] + sumOfAry(ary.slice(1))
// }
// console.log(sumOfAry(ary));

// let ary = [1, 5, [3, 20], 4]

// // sum of nested arry

// function sumNested(ary) {
//     let total = 0
//     for (const v of ary) {
//         if (Array.isArray(v)) {
//             total += sumNested(v)
//         }
//         else {
//             total += v
//         }
//     }
//     return total
// }
// console.log(sumNested(ary));

// let ary = [5, 7, 9, 100, 30, 8]

// function findMax(ary, max = 0) {
//     if (ary.length == 0) {
//         return max
//     }
//     if (ary[0] > max) {
//         max = ary[0]
//     }
//     let inner = findMax(ary.slice(1), max)
//     if (inner > max) {
//         max = inner
//     }
//     return max
// }
// console.log(findMax(ary));

// let ary = [1, [[[630]]], [3, 20, [98]], 4]

// // find max value from the nested array.

// function findMaxNested(ary, max = 0) {
//     for (const val of ary) {
//         if (Array.isArray(val)) {
//             max = findMaxNested(val, max)
//         }
//         else {
//             if (val > max) {
//                 max = val
//             }
//         }
//     }
//     return max
// }
// console.log(findMaxNested(ary));

// const obj = {
//     a: 1,
//     b: { a: 2, c: { a: 3 } }
// };

// // count how many time of key occure.

// function keyCount(obj, target) {
//     let count = 0
//     for (const val in obj) {
//         let value = obj[val]
//         if (typeof value == "object") {
//             count += keyCount(value, target)
//         }
//         if (val == target) {
//             count++
//         }
//     }
//     return count
// }
// console.log(keyCount(obj, "a"));

// let obj = {
//     a: 1,
//     b: [2, { c: 3, d: [4, 5] }],
//     e: 9,
//     g: [10, 65, { i: 10 }]
// }
// function countNumbers(obj) {
//     let count = 0
//     for (const v in obj) {
//         let value = obj[v]
//         if (typeof value == "object") {
//             count += countNumbers(value)
//         }
//         else {
//             count++
//         }
//     }
//     return count
// }
// console.log(countNumbers(obj));

// find how many leval of the nested array using recusrion.

// let ary = [1, [2, [[3, [4]]]], [5]]

// function flattenCount(ary) {
//     let level = 1
//     for (const val of ary) {
//         if (Array.isArray(val)) {
//             level += flattenCount(val)
//         }
//     }
//     return level
// }
// console.log(flattenCount(ary));

// let str = "nishant"

// function reveString(str, res = "") {
//     if (str.length == 0) {
//         return ""
//     }
//     res += reveString(str.slice(1), res) + str[0]

//     return res
// }
// console.log(reveString(str));

// let ans = 0
// while (num != 0) {
//     let rem = num % 10
//     ans = ans + rem
//     num = Math.floor(num / 10)
// }
// console.log(ans);

// let num = 123412

// sum of the digits using recursion.

// function sumOfDigits(n) {
//     let ans = 0
//     if (n == 0) {
//         return n
//     }
//     let rem = n % 10
//     ans = ans + rem
//     ans += sumOfDigits(Math.floor(n / 10))
//     return ans
// }
// console.log(sumOfDigits(num));

// const orders = [
//     {
//         id: 1,
//         customer: "John",
//         items: [
//             { name: "Laptop", price: 1000 },
//             { name: "Mouse", price: 50 },
//             { name: "Mouse", price: 50 }
//         ]
//     },
//     {
//         id: 2,
//         customer: "Alice",
//         items: [
//             { name: "Phone", price: 800 },
//             { name: "Headphones", price: 20 }
//         ]
//     }
// ];

// // find the total price using recusion.

// function totalPrice(ary) {
//     let total = 0
//     for (const val of ary) {
//         if (val.items) {
//             total += totalPrice(val.items)
//         }
//         else {
//             total += val.price
//         }
//     }
//     return total
// }
// console.log(totalPrice(orders));

// const comments = [
//     {
//         id: 1,
//         text: "First comment",
//         replies: [
//             {
//                 id: 2,
//                 text: "Reply 1",
//                 replies: [
//                     { id: 3, text: "Reply 1.1", replies: [] }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 4,
//         text: "Second comment",
//         replies: []
//     }
// ];

// // Count Total Comments (Including Replies)

// function totalComment(ary) {
//     let total = 0
//     for (const val of ary) {
//         total++
//         if (val.replies && val.replies.length > 0) {
//             total += totalComment(val.replies)
//         }
//     }
//     return total
// }
// console.log(totalComment(comments));

// const categories = [
//     {
//         id: 1,
//         name: "Electronics",
//         children: [
//             {
//                 id: 2,
//                 name: "Laptops",
//                 children: []
//             },
//             {
//                 id: 3,
//                 name: "Phones",
//                 children: [
//                     {
//                         id: 4,
//                         name: "Android",
//                         children: []
//                     }
//                 ]
//             }
//         ]
//     }
// ];

// return object for the specific category.

// function findCategory(ary, categoryName) {
//     let ans = {}
//     for (const val of ary) {
//         if (val.name == categoryName) {
//             return val
//         }
//         if (val.children && val.children.length > 0) {
//             let res = findCategory(val.children, categoryName)
//             if (res) {
//                 return res
//             }
//         }
//     }

// }
// console.log(findCategory(categories, "Android"));

// const employees = [
//     {
//         id: 1,
//         name: "CEO",
//         subordinates: [
//             {
//                 id: 2,
//                 name: "Manager 1",
//                 subordinates: [
//                     { id: 4, name: "Developer", subordinates: [] }
//                 ]
//             },
//             {
//                 id: 3,
//                 name: "Manager 2",
//                 subordinates: []
//             }
//         ]
//     }
// ]

// // Print All Employee Names

// function empNames(ary) {
//     for (const val of ary) {
//         console.log(val.name);
//         if (val.subordinates && val.subordinates.length > 0) {
//             empNames(val.subordinates)
//         }
//     }
// }
// empNames(employees)

// const orders = [
//   {
//     id: 1,
//     customer: "John",
//     items: [
//       { name: "Laptop", price: 1000 },
//       { name: "Mouse", price: 50 },
//     ],
//   },
//   {
//     id: 2,
//     customer: "Alice",
//     items: [
//       { name: "Phone", price: 800 },
//       { name: "Headphones", price: 200 },
//     ],
//   },
//   {
//     id: 3,
//     customer: "Bob",
//     items: [
//       { name: "Monitor", price: 300 },
//       { name: "Keyboard", price: 100 },
//       { name: "Mousepad", price: 20 },
//     ],
//   },
// ];

// // Flatten all product names into an array

// function flattenProduct(ary, result = []) {
//   for (const val of ary) {
//     if (val.items && val.items.length > 0) {
//       flattenProduct(val.items, result);
//     } else {
//       result.push(val);
//     }
//   }
//   return result;
// }
// console.log(flattenProduct(orders));

// // Most expensive product

// function mostExpensiveProduct(ary, expensive = 0) {
//     for (const val of ary) {
//         if (val.items) {
//             expensive = mostExpensiveProduct(val.items, expensive)
//         }
//         else {
//             if (val.price > expensive) {
//                 expensive = val.price
//             }

//         }
//     }
//     return expensive

// }
// console.log(mostExpensiveProduct(orders));

const comments = [
    {
        id: 1,
        text: "First comment",
        replies: [
            {
                id: 2,
                text: "Reply 1",
                replies: [{ id: 3, text: "Reply 1.1", replies: [] }],
            },
            { id: 4, text: "Reply 2", replies: [] },
        ],
    },
    {
        id: 5,
        text: "Second comment",
        replies: [],
    },
];

// Delete a comment by ID

function deleteComment(ary, id) {
    for (const val of ary) {
        if (val.id == id) {
            delete val.id
        }
        if (val.replies && val.replies.length > 0) {
            deleteComment(val.replies,id)
        }
    }
    return ary
}
console.log(deleteComment(comments, 3));


// Flatten all comment texts into an array

// function flattenComment(ary, result = []) {
//     for (const value of ary) {
//         result.push(value.text)
//         if (value.replies && value.replies.length > 0) {
//             result = flattenComment(value.replies, result)
//         }
//     }
//     return result
// }
// console.log(flattenComment(comments));
