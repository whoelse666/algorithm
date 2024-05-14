/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  console.log("map", ...map.entries());

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(i => i[0]);
};

// function topKFrequent(nums, k) {
//     const countMap= new Map();
//     for (let num of nums) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }
//  console.log("...countMap.entries()", [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k));
//     return [...countMap.entries()]
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, k)
//         .map(i => i[0]);
// };
console.log("topKFrequent()", topKFrequent([3, 1, 1, 1, 2, 2], 2));
// console.log("topKFrequent()", topKFrequent([1, 2], 2));
