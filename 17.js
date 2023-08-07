function findLargestAdjacentSum(arr) {
  let largestSum = arr[0] + arr[1];
  let largestAdjacentIndices = [0, 1];

  for (let i = 1; i < arr.length - 1; i++) {
    const currentSum = arr[i] + arr[i + 1];

    if (currentSum > largestSum) {
      largestSum = currentSum;
      largestAdjacentIndices = [i, i + 1];
    }
  }

  return largestAdjacentIndices;
}

const arr = [1, 5, 2, 8, 10, 2];
console.log(findLargestAdjacentSum(arr));