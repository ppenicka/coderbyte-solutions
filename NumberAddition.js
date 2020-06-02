function NumberAddition(str) {
  let sum = 0;
  let numbers = str.match(/\d+/g);

  if (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]);
    }
  }

  return sum;
}

console.log(NumberAddition("75Number9"));
console.log(NumberAddition("10 2One Number*1*"));
console.log(NumberAddition("no numbers sorry**"));
