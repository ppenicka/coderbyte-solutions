function LargestPair(num) {
  const str = num.toString();
  let max = parseInt(str.slice(0,2));

  for (let i = 1; i < str.length - 2; i++) {
    let pair = parseInt(str.slice(i, i+2));
    if (pair > max) max = pair;
  }


  return max;
}

console.log(LargestPair(4759472));    // 94
console.log(LargestPair(453857));     // 85
console.log(LargestPair(363223311));  // 63