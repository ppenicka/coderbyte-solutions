function DivisionStringified(num1,num2) {
  const divided = Math.round(num1 / num2).toString();
  let str = '';

  for (let i = divided.length - 1; i >= 0; i--) {
    if ((i < divided.length - 1) && (divided.length - i - 1) % 3 === 0 ) str = ',' + str;
    str = divided[i] + str;
  }

  return str;
}

// keep this function call here
console.log(DivisionStringified(5, 2)); // 3
console.log(DivisionStringified(6874, 67)); // 103
console.log(DivisionStringified(123456789, 10000)); // 103
console.log(DivisionStringified(503394930, 43)); // 11,706,859
console.log(DivisionStringified(9112, 2)); // 4,556
console.log(DivisionStringified(101077282, 21123)); // 4,785
