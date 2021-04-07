// Problem statement:
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n. As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

// Pseudocode:

// 1. Find whether number is abundant
// 2. Ceate list of all abundant numbers to iterate over.
// 3. Create checkIfSumOfAbundants method, which checks whether given number from 1 to 28123 can be wrriten as a sum of two abundant numbers
// List created in step 2 will be sorted, which means checIfSumofAbundants method should use two-pointer technique to find out whether
// number is abundant. In JS this reduced run-time from 22s to ~0.2ms
// 4. Loop through numbers 12 to 28123, calling method described in step 3 on each iteration, add number if checkIfSumOfAbundants returns true.

const isAbundant = (number) => {
  let divisorSum = 0;
  const abundantNum = false;
  const upperBound = Math.ceil(Math.sqrt(number))
  if (upperBound ** 2 === number) divisorSum += upperBound

  for (let i = 2; i < upperBound; i++) {
    const [secondDivisor, remainderIsZero] = [number / i, number % i === 0];
    if (remainderIsZero) {
      if (i !== secondDivisor) divisorSum += (i + secondDivisor);
    }
    if (divisorSum > number) return !abundantNum;
  }
  return abundantNum;
}

const abundantList = () => {
  const list = [];
  for (let i = 12; i < 28124; i++) {
    if (isAbundant(i)) list.push(i);
  }
  return list;
}

const checkIfSumOfAbundants = (target, listOfNums) => {
  let leftPointer = 0;
  let rightPointer = listOfNums.length - 1;
  const abundant = true;
  while (leftPointer <= rightPointer) {
    const result = listOfNums[leftPointer] + listOfNums[rightPointer];
    if (result === target) return !abundant;
    if (result < target) leftPointer++;
    if (result > target) rightPointer--;
  }
  return abundant
}

const sumOfNonAbundantNums = () => {
  let cumulant = 0;
  const listOfAbundantNums = abundantList();
  for (let i = 0; i < 28124; i++) {
    if (checkIfSumOfAbundants(i, listOfAbundantNums)) cumulant += i;
  }
  return cumulant
}

console.time('SumNonAbundant()');
console.log(sumOfNonAbundantNums());
console.timeEnd('SumNonAbundant()');
