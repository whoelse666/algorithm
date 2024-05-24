/**
 * @param {number[]} nums
 * @return {number}
 */

// 贪心算法
// const findLengthOfLCIS = nums => {
//   if (nums.length <= 1) return nums.length;
//   let len = 1,
//     max = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1]) {
//       len++;
//     } else {
//       len = 1;
//     }
//     max = Math.max(max, len);
//   }
//   return max;
// };

// 动态规划
const findLengthOfLCIS = nums => {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      dp[i + 1] = dp[i] + 1;
    }
  }

  return Math.max(...dp);
};

findLengthOfLCIS([1, 3, 5, 4, 7]);
