const isDivisible = (target, divisor) => target % divisor === 0;

const sumMultiples = function (target, divisor1, divisor2) {
  let cumulant = 0;

  for (let num = 0; num < target; num++) {
    if (isDivisible(num, divisor1) || isDivisible(num, divisor2)) {
      cumulant += num;
    }
  }
  return cumulant;
}
