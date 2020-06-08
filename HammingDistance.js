function HammingDistance(strArr) {
  let result = 0;

  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) result++;
  }

  return result;
}

console.log(HammingDistance(["coder", "codec"]));           // 1
console.log(HammingDistance(["10011", "10100"]));           // 3
console.log(HammingDistance(["helloworld", "worldhello"])); // 8