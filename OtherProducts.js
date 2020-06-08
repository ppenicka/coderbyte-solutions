function OtherProducts(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product *= arr[j];
      }
    }

    result[i] = product;
  }

  return result.join('-');
}

console.log(OtherProducts([1, 2, 3, 4, 5]));     // 120-60-40-30-24
console.log(OtherProducts([1,4,3]));             // 12-3-4
console.log(OtherProducts([3,1,2,6]));           // 12-36-18-6