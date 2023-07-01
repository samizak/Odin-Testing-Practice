function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);
const getAverage = (arr) => arr.reduce((previous, current) => (current += previous)) / arr.length;

module.exports = { analyzeArray };
