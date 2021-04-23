import {calcAvg, calcDeviations,tossOutliers} from "./lib.js";
const calculatePrice = function (prices,targetRange) {
var avg;
  do {
    avg = calcAvg(prices);
    prices = calcDeviations(prices, avg);
    prices = tossOutliers(prices);
  } while (prices.standardDeviation > targetRange);
 return avg; 
};
module.exports = calculatePrice();
