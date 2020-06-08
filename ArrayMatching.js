function ArrayMatching(strArr) {
  let result = [];
  let arr1 = strArr[0].slice(1, -1).split(', ');
  let arr2 = strArr[1].slice(1, -1).split(', ');

  arr1.forEach((e, i) => {
    result[i] = result[i] ? parseInt(e) + result[i] : parseInt(e);
  });

  arr2.forEach((e, i) => {
    result[i] = result[i] ? parseInt(e) + result[i] : parseInt(e);
  });

  return result.join('-');
}

// keep this function call here
console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));  // 6-4-13-17
console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));  // 7-4-6-10-6
console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]));      // 3-3-6-2