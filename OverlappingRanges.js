function OverlappingRanges(arr) {

  const range1 = [...Array(arr[1] + 1 - arr[0]).keys()].map(item => item + arr[0]);
  const range2 = [...Array(arr[3] + 1 - arr[2]).keys()].map(item => item + arr[2]);

  let set = new Set([...range1, ...range2]);

  const overlap = [...set].filter(item => (range1.indexOf(item) !== -1 && range2.indexOf(item) !== -1))

  return overlap.length >= arr[4];
}

console.log(OverlappingRanges([4, 10, 2, 6, 3])); // true
console.log(OverlappingRanges([5,11,1,5,1]));     // true
console.log(OverlappingRanges([1,8,2,4,4]));      // false