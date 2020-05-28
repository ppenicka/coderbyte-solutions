function LetterCapitalize(str) {
  const matches = str.replace(/\b(\w)/g, (match) => match.toUpperCase());
  return matches;
}

console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize("i ran there"));