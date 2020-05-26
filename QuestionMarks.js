function QuestionsMarks (str) {
  let result = false;
  const numberIndexes = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 48 && str.charCodeAt(i) < 58) {
      numberIndexes.push(i);
    }
  }

  for (let i = 0; i < numberIndexes.length - 1; i++) {
    for (let j = i + 1; j < numberIndexes.length; j++) {
      if (parseInt(str[numberIndexes[i]]) + parseInt(str[numberIndexes[j]]) === 10) {
        let qCount = 0;
        for (let z = numberIndexes[i] + 1; z < numberIndexes[j]; z++) {
          if (str[z] === '?') qCount++
        }
        if (qCount === 3) {
          result = true;
          break;
        } else return false;
      }
    }
  }

  return result;
}

// TESTS
console.log(QuestionsMarks("aa6?9")); // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // true
console.log(QuestionsMarks("acc?7??sss?3rr1??????5????5")); // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5???5")); // true
console.log(QuestionsMarks("9???1???9??1???9")); // false
