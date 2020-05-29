function ArithGeo(arr) {
  let diffs = [];
  let divs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    diffs[i] = arr[i+1] - arr[i];
    divs[i] = arr[i+1] / arr[i];
  }

  let arithmetic = true;
  for (let i = 0; i < diffs.length - 1; i++) {
    if (diffs[i] !== diffs[i+1]) {
      arithmetic = false;
      break;
    }
  }

  let geometric = true;
  for (let i = 0; i < divs.length - 1; i++) {
    if (divs[i] !== divs[i+1]) {
      geometric = false;
      break;
    }
  }


  if (arithmetic) return 'Arithmetic';
  if (geometric) return 'Geometric';
  return -1;
}


console.log(ArithGeo([5,10,15]));  // Arithmetic
console.log(ArithGeo([2, 6, 18, 54])); // Geometric
console.log(ArithGeo([2,4,16,24])); // -1