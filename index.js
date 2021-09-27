let InitialPrice = document.querySelector("#Initial-Price");
let Quantity = document.querySelector("#Quantity");
let CurrentPrice = document.querySelector("#Current-Price");

let Tellmebtn = document.querySelector("#Tell-me");

let outputdiv = document.querySelector(".output");

function calculateProfitAndLoss(initial, quant, current) {
  if (current > initial) {
    // profit

    let Profit = (current - initial) * quant;

    let ProfitPercentage = (Profit / initial) * 100;

    ProfitPercentage = ProfitPercentage.toFixed(2);

    console.log(
      "Your Profit is " +
        Profit +
        " and profit Percentage is " +
        ProfitPercentage +
        "%"
    );

    ShowOutput(
      "Your Profit is " +
        Profit +
        " and profit Percentage is " +
        ProfitPercentage +
        "%"
    );
  } else if (initial > current) {
    // loss
    let Loss = (initial - current) * quant;
    let LossPercentage = (Loss / initial) * 100;
    LossPercentage = LossPercentage.toFixed(2);

    console.log(
      "Your Loss is " + Loss + " and Loss Percentage is " + LossPercentage + "%"
    );

    ShowOutput(
      "Your Loss is " + Loss + " and Loss Percentage is " + LossPercentage + "%"
    );
  } else {
    // no pain no gain
    console.log(" no pain no gain and no gain no pain");
    ShowOutput(" no pain no gain and no gain no pain");
  }
}

Tellmebtn.addEventListener("click", clickhandler);

function clickhandler() {
  let linitialprice = Number(InitialPrice.value);
  console.log(linitialprice);
  let lquantity = Number(Quantity.value);
  console.log(lquantity);
  let lcurr = Number(CurrentPrice.value);
  console.log(lcurr);

  if (linitialprice === 0 || lquantity === 0 || lcurr === 0) {
    console.log("Please fill out all Fields");
    ShowOutput("Please fill out all Fields");
  } else {
    calculateProfitAndLoss(linitialprice, lquantity, lcurr);
  }
}

function ShowOutput(msg) {
  outputdiv.innerText = msg;
}