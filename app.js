var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initialPriceString, stocksQuantityString, currentPriceString) {
    const initialPrice = Number(initialPriceString);
    const stocksQuantity = Number(stocksQuantityString);
    const currentPrice = Number(currentPriceString);
    if (initialPrice > currentPrice) {

        console.log(typeof (initialPrice), typeof (currentPrice))
        //loss
        const loss = (initialPrice - currentPrice) * stocksQuantity;
        console.log(loss);
        const lossPercentage = (loss / initialPrice) * 100;
        console.log(lossPercentage);
        outputBox.style.color = "red";
        outputBox.innerText = `Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`;

    } else if (initialPrice < currentPrice) {
        //profit

        const profit = (currentPrice - initialPrice) * stocksQuantity;
        console.log(profit)
        const profitPercentage = (profit / initialPrice) * 100;
        console.log(profitPercentage)
        outputBox.style.color = "green";

        outputBox.innerText = `Hey the profit is ${profit} and the profit percentage is ${profitPercentage}`;
    } else {
        //same
        outputBox.style.color = "black";
        outputBox.innerText = `No pain , no gain! No gain, no pain`;
    }
}

function submitHandler() {
    calculateProfitAndLoss(Number(initialPrice.value).toFixed(2), Number(stocksQuantity.value).toFixed(2), Number(currentPrice.value).toFixed(2));
}
submitBtn.addEventListener("click", submitHandler);