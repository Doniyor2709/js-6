function getEvenArrayElements(array) {
  const results = [];

  for (let i = 0; i < array.length; i += 2) {
    results.push(array[i]);
  }

  return results;
}

const array = [2, 4, 6, 8, 10];
console.log(getEvenArrayElements(array));