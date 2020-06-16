function FoodDistribution (arr) {
  let sandwichez = arr[0];
  let hungers = arr.slice(1);

  while (sandwichez > 0) {
    const diffs = [];

    for (let i = 0; i < hungers.length; i++) {
      diffs[i] = 0;
      if (i > 0) {
        diffs[i] += Math.abs(hungers[i] - hungers[i - 1]) - Math.abs(hungers[i] - 1 - hungers[i - 1]);
      }

      if (i < hungers.length - 1) {
        diffs[i] += Math.abs(hungers[i] - hungers[i + 1]) - Math.abs(hungers[i] - 1 - hungers[i + 1]);
      }
    }

    if (Math.max(...diffs) < 0) break;

    hungers[diffs.indexOf(Math.max(...diffs))]--;
    sandwichez--;
  }

  let result = 0;
  for (let i = 0; i < hungers.length - 1; i++) {
    result += Math.abs(hungers[i] - hungers[i + 1]);
  }

  return result;
}

// console.log(FoodDistribution([5, 3, 1, 2, 1]));                     // 0
// console.log(FoodDistribution([4, 5, 2, 3, 1, 0]));                  // 2
// console.log(FoodDistribution([5, 2, 3, 4, 5]));                     // 1
// console.log(FoodDistribution([3, 2, 1, 0, 4, 1, 0]));               // 4