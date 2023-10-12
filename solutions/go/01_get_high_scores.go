package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"sort"
	"strings"
)

type Score struct {
	Name string `json:"name"`
	Wins int    `json:"wins"`
	Draws int   `json:"draws"`
	Active bool `json:"active"`
}

type HighScore struct {
	Name string
	Score int
}

type ByCombinedLogic []HighScore

func (a ByCombinedLogic) Len() int           { return len(a) }
func (a ByCombinedLogic) Less(i, j int) bool { 
	if (a[i].Score != a[j].Score) {
		return a[i].Score > a[j].Score
	}

	i_names := strings.Split(a[i].Name, " ")
	j_names := strings.Split(a[j].Name, " ")

	if (i_names[1] != j_names[1]) {
		return i_names[1] < j_names[1]
	}

	return i_names[0] < j_names[0]
}
func (a ByCombinedLogic) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

func Unmarshal(path string, data interface{}) error {
	jsonFile, err := os.Open(path)
	if err != nil {
		return err
	}

	defer jsonFile.Close()

	byteValue, _ := io.ReadAll(jsonFile)

	err = json.Unmarshal(byteValue, &data)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	var scores []Score

	if err := Unmarshal("./scores.json", &scores); err != nil {
		panic(err)
	}

	var highScores []HighScore

	for _, score := range scores {
		if !score.Active {
			continue
		}

		result := (score.Wins * 5) + (score.Draws * 2)

		highScores = append(highScores, HighScore{
			Name: score.Name,
			Score: result,
		})
	}

	sort.Sort(ByCombinedLogic(highScores))

	topThree := []HighScore{
		highScores[0],
		highScores[1],
		highScores[2],
	}

	// prettyPrint, _ := json.MarshalIndent(topThree, "" ,"  ")
	// fmt.Println(string(prettyPrint))
	fmt.Println(topThree)
}