/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];
  let res = -Infinity,
    count = 0;
  for (let i = 1; i < nums.length; i++) {
    count += nums[i];
    if (count > res) {
      res = count;
    }
    if (count < 0) {
      count = 0;
    }
  }

  return res;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
