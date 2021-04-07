const isEven = (number) => number % 2 === 0

const sumEvenFib = function (upperBound) {
  let [cumulant, fib1, fib2, fibRes] = [2, 1, 2, 0]

  while (fibRes <= upperBound) {
    fibRes = fib2 + fib1;
    [fib2, fib1] = [fibRes, fib2];

    if (isEven(fibRes)) cumulant += fibRes;
  }
  return cumulant;
}
