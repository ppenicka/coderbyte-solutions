function LetterCountI (str) {
  let words = str.split(/\W+/);
  let counts = [];
  let max = 1;
  let maxWordIndex = 0;

  for (let i = 0; i < words.length; i++) {
    counts[i] = {};
    for (let j = 0; j < words[i].length; j++) {
      if (counts[i].hasOwnProperty(words[i][j])) {
        counts[i][words[i][j]] += 1;
        if (max < counts[i][words[i][j]]) {
          max = counts[i][words[i][j]];
          maxWordIndex = i;
        }
      } else {
        counts[i][words[i][j]] = 1;
      }
    }
  }

  if (max > 1) return words[maxWordIndex];
  return -1;
}

// keep this function call here
console.log(LetterCountI("Hello apple pie"));
console.log(LetterCountI("No words"));