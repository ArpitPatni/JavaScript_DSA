/*
Imgaine you are buying and selling stocks throughout the year
Your job is to find the maximum profit you could make by buying low and selling at high only once

Here what you have given
A list of stock prices for each day [7,1,5,3,6,4]
*/


const maxProfit=(prices)=>{
    let minPrice=prices[0];
    let maxProfit=0;

    for(let i=1;i<prices.length;i++){
        const currentPrice=prices[i];
        minPrice=Math.min(currentPrice,minPrice);
        const potentialProfit=currentPrice-minPrice;
        maxProfit=Math.max(potentialProfit,maxProfit);
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))