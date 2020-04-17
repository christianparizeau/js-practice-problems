/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const string = x.toString();
  let reversedNum;
  if (string[0] === '-') {
    reversedNum = (string[0] + string.substring(1, string.length).split('').reverse().join(''))
  } else {
    reversedNum = string.split('').reverse().join('')
  }
  reversedNum = parseInt(reversedNum);
  return (reversedNum < -Math.pow(2, 31) || reversedNum > (Math.pow(2, 31) - 1) ? 0 : reversedNum)
};
