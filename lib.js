
  const calcAvg = function (prices) {
    var sum = 0;
    prices.arr.foreach((price) => {
      sum = sum + price;
      if (prices.arr.indexOf(price) == prices.arr.length) {
           // returns 'dirty' avg price of listing's members.
        return sum / prices.arr.length;
      }
    });
  }
  //calculates each price's deviation from avg, and priceArr's SD. 
  const calcDeviations =  function (prices,avg) {
    prices.arr.foreach((price) => {
      var sumOfDeviations;
      //calculate the absurdity of each price
      price.deviation = (price - avg) * (price - avg);
      sumOfDeviations += price.deviation;
    });
      //sets the Array's spread value to the price of Array's most devious member.
      prices.standardDeviation = sumOfDeviations / prices.arr.length;
      return prices;
    
  }
  //removes the most (mathematically) wacky prices
  const tossOutlier = function (prices) {
    //find the price with greatest deviation
    prices.arr.foreach((price) => {
      if (
        price.deviation ==
        Math.max.apply(
          Math,
          prices.arr.map((price) => price.deviation)
        )
      ) {
        //remove said price from Array
        prices.arr.splice(prices.indexOf(price), 1);
      }
      return prices;
    });
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