function OffLineMinimum(strArr) {
  let result = [];
  let ints = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      result.push(ints.shift());
    } else {
      ints.push(strArr[i]);
      ints.sort();
    }
  }

  return result.join(',');
}

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));
console.log(OffLineMinimum(["1","2","E","E","3"]));
console.log(OffLineMinimum(["4","E","1","E","2","E","3","E"]));