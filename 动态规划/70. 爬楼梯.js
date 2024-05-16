/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let dp = [0, 1, 2, 0];
  for (let i = 3; i <= n; i++) {
    dp[3] = dp[2] + dp[1];
    dp[1] = dp[2];
    dp[2] = dp[3];
  }
  return dp[3];
};
// 3 =   111   12   21
// 4 =   1111  112  121  211
// 5 =   11111 1112 1211 2111 122 212 221
