 const libCalc = require("./lib.js");
module.exports.calculatePrice = function (prices,targetRange) {
var avg;
  do {
    avg = libCalc.calcAvg(prices);
    prices = libCalc.calcDeviations(prices, avg);
    prices = libCalc.tossOutliers(prices);
  } while (prices.standardDeviation > targetRange);
 return avg;
};

