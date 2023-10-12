const scores = require("./scores.json");
const benchmark = require("../utils/benchmark");

const getResults = () => {
  scores
    .filter((s) => s.active)
    .map((s) => {
      return {
        name: s.name,
        score: s.wins * 5 + s.draws * 2,
      };
    })
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      const [afirstName, alastName] = a.name.split(" ");
      const [bfirstName, blastName] = b.name.split(" ");
      if (alastName < blastName) return -1;
      if (alastName > blastName) return 1;
      if (afirstName < bfirstName) return -1;
      if (afirstName > bfirstName) return 1;
      return 0;
    })

    .slice(0, 3);
};

benchmark(getResults, "getResults");

const getResultsFast = () => {
  const results = [];

  // a function to determine if the new result should push out the old
  // a represents the new result
  // b represents the existing result
  const isHigher = (a, b, result) => {
    if (!b) return true;

    if (result !== b.score) return b.score - result < 0;

    const [afirstName, alastName] = a.name.split(" ");
    const [bfirstName, blastName] = b.name.split(" ");

    if (alastName < blastName) return true;
    if (alastName > blastName) return false;
    if (afirstName < bfirstName) return true;
    if (afirstName > bfirstName) return false;
    return false;
  };

  for (const score of scores) {
    if (!score.active) continue;

    const result = score.wins * 5 + score.draws * 2;

    if (isHigher(score, results[0], result)) {
      results.unshift({ name: score.name, score: result });
      results.splice(3, 1);
      continue;
    }

    if (isHigher(score, results[1], result)) {
      results.splice(1, 0, { name: score.name, score: result });
      results.splice(3, 1);
      continue;
    }

    if (isHigher(score, results[2], result)) {
      results.splice(2, 0, { name: score.name, score: result });
      results.splice(3, 1);
    }
  }

  return results;
};

benchmark(getResultsFast, "getResultsFast");
