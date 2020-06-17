function CorrectPath(str) {
  let x = 0;  // left/rigth axis
  let y = 0;  // up/down axis
  let q = str.match(/\?/g).length;
  const fills = [];
  let result = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'r') x++;
    if (str[i] === 'l') x--;
    if (str[i] === 'd') y++;
    if (str[i] === 'u') y--;
  }

  function moveToRightBorder () {
    while (x !== 4) {
      if (x < 4) {
        fills.push('r');
        x++;
      } else {
        fills.push('l');
        x--;
      }
    }
  }

  function moveToBottomBorder () {
    while (y !== 4) {
      if (y < 4) {
        fills.push('d');
        y++;
      } else {
        fills.push('u');
        y--;
      }
    }
  }

  if (x > y) {
    moveToRightBorder();
    moveToBottomBorder();
  } else {
    moveToBottomBorder();
    moveToRightBorder();
  }

  while(fills.length < q) {
    if (fills[fills.length - 1] === 'r') {
      fills.push('r');
      x++;
      moveToRightBorder();
    }
    if (fills[fills.length - 1] === 'l') {
      fills.push('l');
      x--;
      moveToRightBorder();
    }
    if (fills[fills.length - 1] === 'd') {
      fills.push('d');
      y++;
      moveToBottomBorder();
    }
    if (fills[fills.length - 1] === 'u') {
      fills.push('u');
      y--;
      moveToBottomBorder();
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = (result[i] === '?') ? fills.shift() : result[i];
  }

  return result.join('');
}

console.log(CorrectPath("r?d?drdd"));           // rrdrdrdd
console.log(CorrectPath("???rrurdr?"));         // dddrrurdrd
console.log(CorrectPath("drdr??rrddd?"));       // drdruurrdddd
console.log(CorrectPath("dddd?uuuurrr????"));   // ddddruuuurrrdddd