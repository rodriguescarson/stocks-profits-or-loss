var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initialPrice,stocksQuantity,currentPrice) {
    console.log(initialPrice, stocksQuantity, currentPrice);
    if (initialPrice > currentPrice) {
        //loss
        var loss = (initialPrice - currentPrice) * stocksQuantity;
        var lossPercentage = (loss / initialPrice) * 100;
        outputBox.style.color = "red";
        outputBox.innerText = `Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`;
        
    } else if (initialPrice < currentPrice) {
        //profit
        var profit = (currentPrice-initialPrice) * stocksQuantity;
        var profitPercentage = (profit / initialPrice) * 100;
        outputBox.style.color = "green";
        outputBox.innerText = `Hey the profit is ${profit} and the profit percentage is ${profitPercentage}`;       
    } else {
        //same
        outputBox.innerText = `No pain , no gain! No gain, no pain`;       
    }
}

function submitHandler() {
    calculateProfitAndLoss(Number(initialPrice.value).toFixed(2), Number(stocksQuantity.value).toFixed(2), Number(currentPrice.value).toFixed(2));
}
submitBtn.addEventListener("click", submitHandler);