function CountingMinutesI(str) {
  let [time1, time2] = str.split('-');
  let diff = 0;

  let min1 = getMinutes(time1);
  let min2 = getMinutes(time2);

  return (min1 < min2) ? min2 - min1 : (24 * 60) - min1 + min2;
}

function getMinutes(time) {
  let [hh, rest] = time.split(':');
  let mm = rest.slice(0, 2);
  let ap = rest.slice(2,3);

  if (hh === '12') {
    hh = (ap === 'a') ? 24 : 12;
  } else {
    hh = (ap === 'a') ? parseInt(hh) : parseInt(hh) + 12;
  }

  return parseInt(mm) + parseInt(hh) * 60;
}

// keep this function call here
console.log(CountingMinutesI("12:30pm-12:00am")); // 690
console.log(CountingMinutesI("1:23am-1:08am"));   // 1425