function ThreeSum (arr) {
  const sum = arr[0];
  const numbers = arr.slice(1);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        if (i !== j && i !== k && j !== k &&
          numbers[i] + numbers[j] + numbers[k] === sum)
          return true;
      }
    }
  }

  return false;
}

console.log(ThreeSum([8, 2, 1, 4, 10, 5, -1, -1]));           // true
console.log(ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2])); // true
console.log(ThreeSum([12, 3, 1, -5, -4, 7]));                 // false