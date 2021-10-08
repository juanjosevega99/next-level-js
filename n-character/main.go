// Write a function that outputs n-character strings of all combinations of latin lowercase alphabet characters
package main

import "fmt"

func main() {
	inputArr := []string{"a", "b", "c", "d", "e"}

	printKValues(inputArr, "", len(inputArr), len(inputArr))
}

func printKValues(input []string, prefix string, n int, arrayLen int) {
	if arrayLen == 0 {
		fmt.Println(prefix)

		return
	}

	for i := 0; i < n; i++ {
		newPrefix := prefix + input[i]
		printKValues(input, newPrefix, n, arrayLen-1)
	}
}

func printValuesBasedOnLen(input []string) {
	for i := 0; i < len(input); i++ {
		for j := 0; j < len(input); j++ {
			for k := 0; k < len(input); k++ {
				fmt.Println(input[i], input[j], input[k])
			}
		}
	}
}
