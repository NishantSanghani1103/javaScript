const nums = [1, 3, 5, 6]
const target = 5
let left = 0, right = nums.length - 1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
        console.log(mid);
        return
    }
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
}
console.log(left);
 
