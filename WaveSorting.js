function WaveSorting(arr) {
  let thresh = Math.floor(arr.length / 2);


  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) - i >= thresh) return false;
  }

  return true;
}

console.log(WaveSorting([0, 1, 2, 4, 1, 4]));       // true
console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1]));    // false
console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2]));  // true