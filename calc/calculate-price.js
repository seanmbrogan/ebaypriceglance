 const libCalc = require("./lib.js");
const calculatePrice = function (prices,targetRange) {
  var avg;
  stdout = "";
  do {
    avg = libCalc.calcAvg(prices);

    prices = libCalc.calcDeviations(prices, avg);
    
    prices = libCalc.tossOutlier(prices);
    stdout +=("\n New Avg Price: $"+avg);
    stdout +=("\n New SD: $"+prices.standardDeviation);
    stdout +=("\n New RSD: "+prices.relativeStandardDeviation+"%");
    
  } while (prices.relativeStandardDeviation > targetRange);
 return (Math.round(100*avg))/100;
};
module.exports = calculatePrice;