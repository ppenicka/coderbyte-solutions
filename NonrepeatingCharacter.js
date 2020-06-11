function NonrepeatingCharacter(str) {
  let chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) === chars.lastIndexOf(chars[i])) return chars[i];
  }
}

console.log(NonrepeatingCharacter("agettkgaeee"));  // k
console.log(NonrepeatingCharacter("abcdef"));  // a
console.log(NonrepeatingCharacter("hello world hi hey"));  // w
