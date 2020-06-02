function SwapCase(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if ( charCode > 64 && charCode < 91) {
      charCode += 32;
    } else if ( charCode > 96 && charCode < 123) {
      charCode -= 32;
    }
    arr.push(String.fromCharCode(charCode));
  }

  return arr.join('');
}

console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));
