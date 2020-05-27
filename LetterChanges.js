function LetterChanges (str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let cc = str.charCodeAt(i);

    if ((cc > 96 && cc < 123) || (cc > 64 && cc < 90)) { cc += 1 }
    if (cc === 123 || cc === 90) { cc -= 26 }
    if (cc === 97 || cc === 101 || cc === 105 || cc === 111 || cc === 117) { cc -= 32 }

    result += String.fromCharCode(cc);
  }

  return result;
}

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));