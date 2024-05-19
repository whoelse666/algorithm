/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let res = 0;
  g.sort((a, b) => b - a); // 大-> 小
  s.sort((a, b) => b - a); // 大-> 小
  let sIndex = 0;
  for (let i = 0; i < g.length; i++) {
    if (s[sIndex] >= 0 && s[sIndex] >= g[i]) {
      res++;
      sIndex++;
    }
  }
  return res;
};

var res = findContentChildren([1, 2, 3], [1, 1]);
console.log("res", res);
