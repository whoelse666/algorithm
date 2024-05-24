/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一：动态规划
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }

  let up = (down = 1);
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }
  return Math.max(up, down);
};

/* 考虑三种情况：
情况一：上下坡中有平坡
情况二：数组首尾两端
情况三：单调坡中有平坡
#
 */
//贪心算法
var wiggleMaxLength = function (nums) {
  const len = nums.length;
  if (len <= 1) return len;

  let prevdiff = nums[1] - nums[0];
  let l = prevdiff !== 0 ? 2 : 1;
  for (let i = 2; i < len; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
      l++;
      prevdiff = diff;
    }
  }
  return l;
};

// wiggleMaxLength([1, 7, 4, 9, 2, 5]);
wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]);
