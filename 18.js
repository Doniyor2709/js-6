function findSameValueIndices(arr) {
  let seen = {};
  let sameValueIndices = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]] === undefined) {
      seen[arr[i]] = [i];
    } else {
      sameValueIndices.push([seen[arr[i]][0], i]);
      seen[arr[i]] = i;
    }
  }

  return sameValueIndices;
}

const arr = [1, 2, 3, 1, 4, 5];
console.log(findSameValueIndices(arr));