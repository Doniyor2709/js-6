function printAlternateArrayElements(array) {
  const length = array.length;

  for (let i = 0; i < length; i += 2) {
    console.log(array[i]);
  }

  for (let i = length - 1; i >= 0; i -= 2) {
    console.log(array[i]);
  }
}

const array = [1, 2, 3, 4, 5];
console.log(printAlternateArrayElements(array));