let solutions = [];
var climbStairs = function (n) {
  if (solutions[n]) {
    return solutions[n]
  }
  if (n < 3) {
    solutions[n] = n;
    return n;
  }
  solutions[n] = (climbStairs(n - 2) + climbStairs(n - 1));
  return solutions[n]
};
