/**
 * @param {number[]} cost
 * @return {number}
 */

const cost = [1, 9, 5, 1, 8, 5];
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[dp.length - 1];
};
var minCostClimbingStairs1 = function (cost) {
  let r1 = 0,
    r2 = 0,
    res = 0;
  // 因为要到顶楼所以 i<= cost.length
  //  图解： https://code-thinking-1253855093.file.myqcloud.com/pics/20221026175104.png
  for (let i = 2; i <= cost.length; i++) {
    console.log("-----", r2, r1, res);
    // 这里 r2 相当于 dp[i-1]   r1 相当于 dp[i-2]
    res = Math.min(r2 + cost[i - 1], r1 + cost[i - 2]);

    console.log("+++++", cost[i - 1], cost[i - 2]);
    console.log(i, "res", r2 + cost[i - 1], r1 + cost[i - 2], res);
    r1 = r2;
    r2 = res;
  }
  return res;
};

console.log("minCostClimbingStairs1(cost)", minCostClimbingStairs1(cost));
