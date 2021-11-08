package main

import (
	"fmt"
)

func main () {
  input1 := []uint{2, 1, 5, 4}
  missing1 := missingNumber(input1)
  fmt.Println("The missing number is", missing1)
  
  input2 := []uint{7, 8, 10, 2, 3, 4 , 5, 9}
  missing2 := missingNumber(input2)
  fmt.Println("The missing number is", missing2)
}

func missingNumber(array []uint) uint {
  arrayLength := len(array) + 1
  total := (arrayLength * (arrayLength + 1)) / 2
  var sum uint = 0
  
  for i := 0; i < len(array); i++ {
    sum += array[i]
  }
  return uint(total) - sum
}