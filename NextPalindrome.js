function NextPalindrome(num) {
  let next = num + 1;
  while (!isPalindrome(next.toString())) next++;
  return next;
}

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str.length === 1) return true;
  if (str[0] === str[str.length-1]) {
    let substr = str.slice(1, str.length - 1);
    console.log("isPalindrome -> substr", substr)
    return isPalindrome(substr);
  }
  return false;
}

// keep this function call here
console.log(NextPalindrome(24));    // 33
console.log(NextPalindrome(2));     // 3
console.log(NextPalindrome(180));   // 181