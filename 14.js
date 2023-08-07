function getEvenMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEvenMax(arr));