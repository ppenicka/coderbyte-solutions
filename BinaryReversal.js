function BinaryReversal (str) {
  let binary = parseInt(str, 10).toString(2);

  binary = binary.padStart(Math.ceil(binary.length / 8) * 8, '0')
           .split('').reverse().join('');

  return parseInt(binary, 2);
}

// keep this function call here
console.log(BinaryReversal("213"));
console.log(BinaryReversal("4567"));