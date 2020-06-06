function ChangingSequence(arr) {

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i] ||
        arr[i - 1] < arr[i] && arr[i + 1] < arr[i])
        return i;
  }

  return -1;
}

console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1])); // 3
console.log(ChangingSequence([-4, -2, 9, 10]));       // -1
console.log(ChangingSequence([5, 4, 3, 2, 10, 11]));  // 3