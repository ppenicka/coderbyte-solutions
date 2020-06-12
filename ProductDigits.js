function ProductDigits(num) {
  let count = num.toString().length + 1;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      const divLen = (num / i).toString().length;
      const iLen = i.toString().length;
      if (divLen + iLen < count) count = divLen + iLen;
    }
  }

  return count;
}

console.log(ProductDigits(24));       // 2
console.log(ProductDigits(6));        // 2
console.log(ProductDigits(23));       // 3