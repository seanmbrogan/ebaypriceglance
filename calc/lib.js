  // returns 'dirty' avg price of listing's members.
  const calcAvg = function (prices) {
    var sum = 0;
    prices.forEach((price) => { 
      sum += price;
    });
    return sum / prices.length;
  }
  //calculates each price's deviation from avg, and priceArr's SD. 
  const calcDeviations =  function (prices,avg) {
    var sumOfDeviations= 0;
   prices.deviations =  [prices.length]
    
    prices.forEach((price) => {
      //calculate the absurdity of each price
      prices.deviations[prices.indexOf(price)] = (price - avg) * (price - avg);
    
      sumOfDeviations += prices.deviations[prices.indexOf(price)];
    });
      //sets the Array's spread value to the price of Array's most devious member.
      prices.standardDeviation =(Math.round(100*(Math.sqrt(sumOfDeviations / prices.length)))/100);
      
      prices.relativeStandardDeviation =(Math.round(100*(100*prices.standardDeviation/avg))/100);
      return prices;
  }
  //removes the most (mathematically) wacky prices
  const tossOutlier = function (prices) {
    //find the price with greatest deviation
    var greatestDeviation = 0;
    var outlierIndex;
    prices.deviations.forEach((deviation) => {
  if(deviation>=greatestDeviation){
    greatestDeviation = deviation;
  }
})
outlierIndex = (prices.deviations.indexOf(prices.deviations.find(deviation => deviation == greatestDeviation)));
stdout +=("\n Removed $"+prices[outlierIndex]+ ", with a deviation of "+ Math.sqrt(greatestDeviation));

prices.splice(outlierIndex,1)
prices.deviations.splice(outlierIndex,1)

return prices;
}
//copy&paste math
function getDiff(num1, num2) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
module.exports=  {calcAvg,calcDeviations,tossOutlier};