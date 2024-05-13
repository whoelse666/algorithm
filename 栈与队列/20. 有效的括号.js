/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */
var isValid = function (s) {
  let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ]);
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      //找到则为右括号，需要找对应左括号
      // arr.length ==0 则第一位为右括号，不成立；
      // arr[arr.length - 1] !== map.get(s[i]) 和数组 arr 最后一个括号不成对，则不成立
      if (!arr.length || arr[arr.length - 1] !== map.get(s[i])) {
        return false;
      }
      // 找到对应括号则删除arr成对的的（也就是 arr 最后一位）
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return !arr.length;
};
