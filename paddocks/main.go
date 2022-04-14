package main

import "fmt"

func main() {

	type paddockTypeStruct struct {
		id   int
		name string
	}

	paddockType := []paddockTypeStruct{
		{id: 1, name: "PALTOS"},
		{id: 2, name: "AVELLANOS"},
		{id: 3, name: "CEREZAS"},
		{id: 4, name: "NOGALES"},
	}

	type paddockTypesStruct struct {
		paddockManagerId int
		farmId           int
		paddockTypeId    int
		harvestYear      int
		area             int
	}

	paddocks := []paddockTypesStruct{
		{
			paddockManagerId: 6,
			farmId:           1,
			paddockTypeId:    1,
			harvestYear:      2019,
			area:             1200,
		},
		{
			paddockManagerId: 1,
			farmId:           3,
			paddockTypeId:    4,
			harvestYear:      2019,
			area:             500,
		},
		{
			paddockManagerId: 5,
			farmId:           3,
			paddockTypeId:    2,
			harvestYear:      2020,
			area:             20000,
		},
		{
			paddockManagerId: 2,
			farmId:           2,
			paddockTypeId:    3,
			harvestYear:      2021,
			area:             8401,
		},
		{
			paddockManagerId: 3,
			farmId:           1,
			paddockTypeId:    1,
			harvestYear:      2020,
			area:             2877,
		},
		{
			paddockManagerId: 5,
			farmId:           2,
			paddockTypeId:    2,
			harvestYear:      2017,
			area:             15902,
		},
		{
			paddockManagerId: 3,
			farmId:           3,
			paddockTypeId:    2,
			harvestYear:      2018,
			area:             1736,
		},
		{
			paddockManagerId: 2,
			farmId:           3,
			paddockTypeId:    3,
			harvestYear:      2020,
			area:             2965,
		},
		{
			paddockManagerId: 4,
			farmId:           3,
			paddockTypeId:    4,
			harvestYear:      2018,
			area:             1651,
		},
		{
			paddockManagerId: 5,
			farmId:           1,
			paddockTypeId:    1,
			harvestYear:      2018,
			area:             700,
		},
		{
			paddockManagerId: 1,
			farmId:           2,
			paddockTypeId:    1,
			harvestYear:      2019,
			area:             7956,
		},
		{
			paddockManagerId: 5,
			farmId:           3,
			paddockTypeId:    2,
			harvestYear:      2020,
			area:             3745,
		},
		{
			paddockManagerId: 6,
			farmId:           1,
			paddockTypeId:    3,
			harvestYear:      2021,
			area:             11362,
		},
		{
			paddockManagerId: 2,
			farmId:           3,
			paddockTypeId:    3,
			harvestYear:      2021,
			area:             300,
		},
		{
			paddockManagerId: 3,
			farmId:           2,
			paddockTypeId:    2,
			harvestYear:      2020,
			area:             19188,
		},
		{
			paddockManagerId: 3,
			farmId:           1,
			paddockTypeId:    1,
			harvestYear:      2019,
			area:             17137,
		},
		{
			paddockManagerId: 4,
			farmId:           3,
			paddockTypeId:    2,
			harvestYear:      2020,
			area:             100,
		},
		{
			paddockManagerId: 2,
			farmId:           1,
			paddockTypeId:    3,
			harvestYear:      2019,
			area:             11845,
		},
		{
			paddockManagerId: 5,
			farmId:           2,
			paddockTypeId:    1,
			harvestYear:      2018,
			area:             15969,
		},
		{
			paddockManagerId: 1,
			farmId:           3,
			paddockTypeId:    1,
			harvestYear:      2029,
			area:             10420,
		},
		{
			paddockManagerId: 5,
			farmId:           2,
			paddockTypeId:    3,
			harvestYear:      2010,
			area:             3200,
		},

		{
			paddockManagerId: 6,
			farmId:           1,
			paddockTypeId:    2,
			harvestYear:      2012,
			area:             10587,
		},
		{
			paddockManagerId: 2,
			farmId:           2,
			paddockTypeId:    2,
			harvestYear:      2018,
			area:             16750,
		},
	}

	// const areOfPaddocks = {}

	fmt.Println(paddocks)
	fmt.Println(paddockType)
}
