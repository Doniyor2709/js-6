function reverseArray(array) {
  const length = array.length;

  for (let i = 0; i < length / 2; i++) {
    const temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }

  return array;
}

const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));