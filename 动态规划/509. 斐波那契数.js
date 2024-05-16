/**
 * @param {number} n
 * @return {number}
 */


var fib = function (n) {
  if (n < 2) {
    return n;
  }
 if (n < 2) {
   return n;
 }
 let dp = [0, 1, 0];
 for (let i = 2; i <= n; i++) {
   dp[2] = dp[0] + dp[1];
   dp[0] = dp[1];
   dp[1] = dp[2];
 }
 return dp[2];
};

console.log("fib(10)", fib(10));
