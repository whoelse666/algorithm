/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // if (bills[0] !== 5 || bills[1] === 20) {
  //   return false;
  // }
  let five = 0,
    ten = 0;

  for (bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
 return   true 
};
lemonadeChange([5, 5, 5, 10, 20]);
