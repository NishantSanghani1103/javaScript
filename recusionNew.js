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

let data = [
    { id: 1 },
    {
        id: 2,
        children: [
            { id: 3 },
            {
                id: 4,
                children: [
                    { id: 5 }
                ]
            }
        ]
    }
];

function addLevel(ary, level = 1) {
    return ary.map((value, index) => {
        let newObj = { ...value, level }
        if (value.children) {
            newObj.children = addLevel(value.children, level + 1)
        }
        return newObj
    })

}
console.log(addLevel(data));
