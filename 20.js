function createPairs(arr) {
  const length = arr.length;
  const b = [];

  for (let i = 0; i < length; i++) {
    if (i + 1 < length) {
      b.push([arr[i], arr[i + 1]]);
    }
  }

  return b;
}

const arr = [1, 2, 3, 4, 5];
const b = createPairs(arr);
console.log(b); // [[1, 2], [2, 3], [3, 4], [4, 5]]




