function BasicRomanNumerals(str) {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "I") arr[i] = 1;
    if (arr[i] === "V") arr[i] = 5;
    if (arr[i] === "X") arr[i] = 10;
    if (arr[i] === "L") arr[i] = 50;
    if (arr[i] === "C") arr[i] = 100;
    if (arr[i] === "D") arr[i] = 500;
    if (arr[i] === "M") arr[i] = 1000;
  }

  let result = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i+1]) {
      result -= arr[i];
    } else {
      result += arr[i];
    }
  }

  return result;
}

console.log(BasicRomanNumerals("XIX"));   // 19
console.log(BasicRomanNumerals("IV"));    // 4
console.log(BasicRomanNumerals("XLVI"));  // 46