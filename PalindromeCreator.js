function PalindromeCreator (str) {
  if (str.length > 2 && isPalindrome(str)) return 'palindrome';

  if (str.length > 3) {
    for (let i = 0; i < str.length; i++) {
      if (isPalindrome(str.slice(0, i) + str.slice(i + 1))) return str[i];
    }
  }

  if (str.length > 4) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str.length; j++) {
        const sliced = str.slice(0, i) + str.slice(i + 1, j) + str.slice(j + 1);
        if (isPalindrome(sliced)) return str[i] + str[j];
      }
    }
  }

  return 'not possible';
}

function isPalindrome (str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(PalindromeCreator("abjchba"));  // jc
console.log(PalindromeCreator("mmoc"));     // not possible
console.log(PalindromeCreator("kjjjhjjj")); // k