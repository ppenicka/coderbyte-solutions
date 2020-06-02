function MeanMode (arr) {
  let sum = 0;
  let occurrences = {};
  let max = 1;
  let maxKey = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (!occurrences.hasOwnProperty(arr[i].toString())) {
      occurrences[arr[i].toString()] = 1;
    } else {
      occurrences[arr[i].toString()] += 1;
      if (occurrences[arr[i].toString()] > max) {
        max = occurrences[arr[i].toString()];
        maxKey = arr[i].toString();
      }
    }
  }

  const mean = sum / arr.length;
  const mode = parseInt(maxKey);

  return (mean === mode) ? 1 : 0;
}

console.log(MeanMode([1, 2, 3]));
console.log(MeanMode([4, 4, 4, 6, 2]));