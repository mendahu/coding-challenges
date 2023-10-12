The test data is a list of scores in a game by different people. It's an array of objects with the following shape:

```json
{
  "name": "Bruno Farrell",
  "wins": 322,
  "draws": 651,
  "active": true
}
```

# Part 1

Your task is to process this data and produce a result that looks like this:

```json
[
  { name: "Jim  Jimson", score: 6234 },
  { name: "Joe Joeson", score: 6234 },
  { name: "Jake Jakeson", score: 6231 }
}
```

This result is the top 3 scorers in the test data, using the following logic:

- Wins are worth 5 points
- Draws are worth 2 points
- Score is the total points from wins and draws together
- Only active players can be counted
- Ties are resolved alphabetically by last name and then first name

# Part 2

After implementing the above, create a benchmarking function to measure how fast your function performs on the test data. A good benchmarking software will measure a number of runs and average out the time for a more accurate result.

# Part 3

Reimplement Part 1, and using your benchmark software, see how much you can improve your performance.
