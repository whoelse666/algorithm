// 动态规划思路
function lengthOfLIS(nums) {
 let dp = Array(nums.length).fill(1);
 let result = 1;
 for (let i = 1; i < nums.length; i++) {
   for (let j = 0; j < i; j++) {
     if (nums[i] > nums[j]) {
      // 判断 0 -> i 之间dp[i]  的 dp[j] 取最大的
       dp[i] = Math.max(dp[i], dp[j] + 1);
     }
   }
   result = Math.max(result, dp[i]);
 }
console.log(dp,result)
 return result;
}


// 动态规划思路 + 二分;
var lengthOfLIS = function (nums) {
  let f = [nums[0]];
  const binarySearch = (x) => {
    let left = 0,
      right = f.length;
    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (f[mid] < x) left = mid + 1;
      else right = mid;
    }
    return left;
  };
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > f[f.length - 1]) {
      f.push(nums[i]);
    } else {
      f[binarySearch(nums[i])] = nums[i];
    }
  }
  return f.length;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);