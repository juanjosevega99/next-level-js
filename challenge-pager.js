// what number is missing in the array

function main () {
    const input1 = [2, 1, 5, 4]
    const missing1 = missingNumber(input1)
    console.log('The missing number is', missing1)
  }
  
  function missingNumber(arrayNumber) {
    console.log(arrayNumber)
    const arrayLength = arrayNumber.length + 1
    const total = (arrayLength * (arrayLength + 1)) / 2
    let sum = 0
    
    for (let index = 0; index < arrayNumber.length; index++) {
      sum = sum + arrayNumber[index]
    }
    return total - sum
  }
  
  main()