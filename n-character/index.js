function main() {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];

  printKValues(inputArray, '', inputArray.length, inputArray.length);
}

function printKValues(input, prefix, n, arrayLenth) {
  if (arrayLenth === 0) {
    console.log(prefix);

    return;
  }

  for (let i = 0; i < n; i++) {
    const newPrefix = prefix + input[i];
    printKValues(input, newPrefix, n, arrayLenth - 1);
  }
}

function printValuesBasedOnLen(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        console.log(input[i], input[j], input[k]);
      }
    }
  }
}

main()