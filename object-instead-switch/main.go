package main

import (
	"fmt"
)

func main () {
  budget := 8000
  bikes := map[int]string{
    8000:  "flamma",
		10000: "specialized",
		12000: "scoot",
		1400:  "trek",
  }

  budgetBike, ok := BIKES[budget]
	if !ok {
		budgetBike = defaultBike
	}

  budgetBike
  fmt.Println("The option to this bike is: ", budgetBike)
}
