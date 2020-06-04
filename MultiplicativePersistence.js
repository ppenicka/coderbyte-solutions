function MultiplicativePersistence(num) {
  let counter = 0;
  let number = num;

  while (number > 9) {
    let product = 1;

    while (number > 0) {
      product *= number % 10;
      number = Math.floor(number / 10);
    }

    number = product;
    counter++;
  }

  return counter;
}

// keep this function call here
console.log(MultiplicativePersistence(39)); // 3
console.log(MultiplicativePersistence(25)); // 2
console.log(MultiplicativePersistence(4));  // 0