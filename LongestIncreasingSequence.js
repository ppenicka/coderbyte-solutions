function LongestIncreasingSequence(arr) {
  let lengths = [1];

  for (let i = 1; i < arr.length; i++) {
    lengths[i] = 1;

    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lengths[j] + 1 > lengths[i]) {
        lengths[i] = lengths[j] + 1;
      }
    }
  }

  return Math.max(...lengths);
}

console.log(LongestIncreasingSequence([4, 3, 5, 1, 6]));  // 3
console.log(LongestIncreasingSequence([9, 9, 4, 2]));     // 1
console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));  // 7
console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79]));  // 4
console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79, 45, 33, 12, 45, 67, 89]));  // 6