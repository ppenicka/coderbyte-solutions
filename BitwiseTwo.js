function BitwiseTwo(strArr) {
  let result = '';

  for (let i = 0; i < strArr[0].length; i++) {
    const bit = parseInt(strArr[0][i], 2) && parseInt(strArr[1][i], 2);
    result += bit ? 1 : 0;
  }

  return result;
}

console.log(BitwiseTwo(["10111", "01101"]));  // "00101"
console.log(BitwiseTwo(["100", "000"]));      // "000"
console.log(BitwiseTwo(["10100", "11100"]));  // "10100"