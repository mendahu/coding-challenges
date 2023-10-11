const benchmark = (fn, name, count = 100) => {
  const benchmarks = [];
  let result;

  for (let i = 0; i < count; i++) {
    const start = new Date();
    const output = fn();
    const end = new Date();
    if (!result) result = output;
    benchmarks.push(end - start);
  }
  console.log(result);
  const average = benchmarks.reduce((a, b) => a + b, 0) / benchmarks.length;
  console.log(`${name} average time: ${average}ms`);
};

module.exports = benchmark;
