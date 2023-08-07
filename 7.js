function getOddArrayElements(array) {
  const results = [];

  for (let i = array.length - 1; i >= 0; i -= 2) {
    results.push(array[i]);
  }

  return results;
}

const array = [1, 3, 5, 7, 9];
console.log(getOddArrayElements(array));