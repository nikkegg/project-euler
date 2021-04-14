// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const isDivisible = (target, divisor) => target % divisor === 0;

const sumMultiples = function (target, divisor1, divisor2) {
  let cumulant = 0;

  for (let num = 0; num < target; num++) {
    const divisibleByEither = isDivisible(num, divisor1) || isDivisible(num, divisor2);
    if (divisibleByEither) cumulant += num;
  }
  return cumulant;
}
