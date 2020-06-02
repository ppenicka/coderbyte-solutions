function ThirdGreatest(strArr) {
  return strArr.sort((a,b) => (a.length <= b.length) ? 1 : -1 )[2];
}

// keep this function call here
console.log(ThirdGreatest(["hello", "world", "before", "all"]));
console.log(ThirdGreatest(["coder","byte","code"]));
console.log(ThirdGreatest(["abc","defg","z","hijk"]));