let arr = [];

function sum(n, A , B){

  let sum = A;

  for(let  i = 1; i <=n ; i++){
    arr [0] = A;
    arr [1] = B;
    sum +=arr[i];
    arr.push(sum);

  }
  return arr ;

}

let summa = sum (5, 2, 3);

console.log( summa );