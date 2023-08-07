function separateTruthyFalsy(array) {
  const truthyArray = [];
  const falsyArray = [];

  for (const element of array) {
    if (Boolean(element)) {
      truthyArray.push(element);
    } else {
      falsyArray.push(element);
    }
  }

  return [truthyArray, falsyArray];
}

const array = [10, false, "", "Abdulaziz", null];
const [truthyArray, falsyArray] = separateTruthyFalsy(array);

console.log(truthyArray);
console.log(falsyArray);