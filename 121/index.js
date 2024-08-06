/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let diff = 0;
    for (let i = 0; i <= prices.length - 1; i++) {
        const currentVal = prices[i];
        const localDiff = currentVal - min;
        if (currentVal < min) {
            min = currentVal;
        }
        if (localDiff > diff) {
            diff = localDiff;
        }
    }

    return diff;
};