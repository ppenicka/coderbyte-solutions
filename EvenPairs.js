function EvenPairs (str) {
  let numbers = str.match(/\d{2,}/g);

  if (!numbers) return false;

  for (let i = 0; i < numbers.length; i++) {
    if (twoOdd(numbers[i])) {
      return true;
    }
  }

  return false;
}

function twoOdd (number) {
  for (let i = 1; i < number.length; i++) {
    const n1 = parseInt(number.slice(0, i));
    const n2 = parseInt(number.slice(i));
    if (n1 % 2 === 0 && n2 % 2 === 0) return true;
  }

  return false;
}

console.log(EvenPairs("f178svg3k19k46")); // true
console.log(EvenPairs("3gy41d216"));      // true
console.log(EvenPairs("f09r27i8e67"));    // false
console.log(EvenPairs("abc"));            // false