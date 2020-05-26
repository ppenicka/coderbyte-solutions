function FindIntersection(strArr) {
  let intersection = [];
  let firstArr = strArr[0].split(', ').map(item =>parseInt(item));
  let secondArr = strArr[1].split(', ').map(item =>parseInt(item));

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (secondArr[j] > firstArr[i]) break;
      if (firstArr[i] === secondArr[j]) {
        intersection.push(firstArr[i]);
        break;
      }
    }
  }

  return intersection.join(',');
}

// TESTS
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));