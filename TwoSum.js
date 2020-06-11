function TwoSum (arr) {
  let results = [];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] + arr[j] === arr[0] && i < j) results.push(`${arr[i]},${arr[j]}`);
    }
  }

  return results.length > 0 ? results.join(' ') : -1;
}

console.log(TwoSum([7, 3, 5, 2, -4, 8, 11]));                         // 5,2 -4,11
console.log(TwoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]));   // 6,11 10,7 15,2
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12]));                      // 6,1 4,3