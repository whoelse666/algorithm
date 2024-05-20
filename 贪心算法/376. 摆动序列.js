/**
 * @param {number[]} nums
 * @return {number}
 */


var wiggleMaxLength = function (nums) {
  const len = nums.length;
  let l = 2;
  if (len <= 1) return len;
  if (len === 2 && nums[0] !== nums[1]) {
    return 2;
  } else if (len === 2 && nums[0] === nums[1]) {
    l = 1;
    return 1;
  }
  for (let i = 2; i < nums.length; i++) {
    if (nums.length <= 3 && nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2]) {
      nums.splice(i - 1, 1);
      i--;
      l--;
      continue;
    }
    if ((nums[i] - nums[i - 1] > 0 && nums[i - 1] - nums[i - 2] < 0) || (nums[i] - nums[i - 1] < 0 && nums[i - 1] - nums[i - 2] > 0)) {
      l++;
    } else {
      console.log("i-1", i - 1, nums[i - 1]);
      // arr.push(i - 1);
      nums.splice(i - 1, 1);
      i--;
    }
  }
  return l;
};
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
