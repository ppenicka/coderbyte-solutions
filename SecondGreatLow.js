function SecondGreatLow(arr) {
  let unq = new Set(arr);
  arr = [...unq].sort((a,b) => (a - b));

  if (arr.length === 1) return arr[0] + ' ' + arr[0];
  return arr[1] + ' ' + arr[arr.length - 2];
}

// keep this function call here
console.log(SecondGreatLow([100, 200, 3, 400, 400, 5, 1])); // 3 200
console.log(SecondGreatLow([78, 90, 100, 1, 2])); // 2 90
console.log(SecondGreatLow([80, 80])); // 80 80