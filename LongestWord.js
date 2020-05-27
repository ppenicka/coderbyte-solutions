function LongestWord(sen) {
  const words = sen.split(/\W+/);
  let max = 0;
  let maxIndex;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
      maxIndex = i;
    }
  }

  return words[maxIndex];
}

// TESTS
console.log(LongestWord("fun&!! time")); // time
console.log(LongestWord("I love dogs")); // love