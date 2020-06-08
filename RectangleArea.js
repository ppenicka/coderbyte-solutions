function RectangleArea(strArr) {

  let pointsx = [];
  let pointsy = [];

  strArr.forEach(element => {
    let match = element.match(/\((.{1,2})\s(.{1,2})\)/);
    if (pointsx.indexOf(match[1]) === -1) pointsx.push(match[1]);
    if (pointsy.indexOf(match[2]) === -1) pointsy.push(match[2]);
  });

  if (pointsx.length === 1 || pointsy.length === 1) return 0;

  pointsx = pointsx.map(item => parseInt(item)).sort();
  pointsy = pointsy.map(item => parseInt(item)).sort();

  const x = pointsx[1] - pointsx[0];
  const y = pointsy[1] - pointsy[0];

  return x * y;

}

console.log(RectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));   // 6
console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"]));      // 4
console.log(RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"]));      // 1
console.log(RectangleArea(["(-2 -2)","(0 0)","(-2 0)","(0 -2)"]));  // 4
console.log(RectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"]));      // 0