function SimpleSymbols(str) {
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i]) && (str[i-1] !== '+' || str[i+1] !== '+')) return false;
  }

  return true;
}

console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));