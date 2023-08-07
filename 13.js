function getOddMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getOddMin(arr));