function ArrayAdditionI (arr) {
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);

  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    let sum = 0;
    let bitMask = i.toString(2);

    while (bitMask.length < arr.length) {
      bitMask = '0' + bitMask;
    }

    for (let j = 0; j < bitMask.length; j++) {
      if (bitMask[j] === "1") {
        sum += arr[j];
      }
    }

    if (sum === max) return true;
  }

  return false;
}


// keep this function call here
console.log(ArrayAdditionI([5, 7, 16, 1, 2]));  // false
console.log(ArrayAdditionI([3, 5, -1, 8, 12])); // true
console.log(ArrayAdditionI([54,49,1,0,7,4])); // true
console.log(ArrayAdditionI([3,4,5,7])); // true