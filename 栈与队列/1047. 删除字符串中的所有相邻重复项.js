/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicates = function (s) {
//   console.log("s", s);
//   if (!s) return "";
//   // let res = '';
//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === s[i - 1]) {
//       // console.log("`${s[i - 1]}${s[i]}`", `${s[i - 1]}${s[i]}`);
//       s = s.replace(`${s[i - 1]}${s[i]}`, "");
//       i -= 2;
//     }
//   }
//   return s;
// };


var removeDuplicates = function(s) {
 let stack = []
  for(const x of s){
    let len = stack.length
    if(len && stack[len-1]==x){
      stack.pop()
      continue
    }
    stack.push(x)
  }
  return stack.join("")
};
console.log('removeDuplicates("azxxzy")', removeDuplicates("azxxzy"));
