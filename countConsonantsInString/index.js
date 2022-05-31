function isConsonant(character) {
  character = character.toUpperCase();

  return (
    !(
      character == 'A' ||
      character == 'E' ||
      character == 'I' ||
      character == 'O' ||
      character == 'U'
    ) &&
    character.charCodeAt(0) >= 65 &&
    character.charCodeAt(0) <= 90
  );
}

function countConsonants(str, n) {
  if (n == 1) return isConsonant(str[0]);
  return countConsonants(str, n - 1) + isConsonant(str[n - 1]);
}

function mainFunctionToCountConsonants(str) {
  //   const n = str.split(' ').join('').length;
  const n = str.length;
  return countConsonants(str, str.length);
}

console.log(mainFunctionToCountConsonants('abc de'));
