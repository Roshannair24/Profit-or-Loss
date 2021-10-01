let InitialPrice = document.querySelector("#Initial-Price");
let Quantity = document.querySelector("#Quantity");
let CurrentPrice = document.querySelector("#Current-Price");

let Tellmebtn = document.querySelector("#Tell-me");

let outputpara = document.querySelector(".output");
let outputpercentagepara = document.querySelector(".output-percentage");

function calculateProfitAndLoss(initial, quant, current) {
  if (current > initial) {
    // profit

    let Profit = (current - initial) * quant;

    let ProfitPercentage = ((Profit/quant) / initial) * 100;

    ProfitPercentage = ProfitPercentage.toFixed(2);

    console.log(
      "Your Profit is " +
        Profit +
        " and profit Percentage is " +
        ProfitPercentage +
        "%"
    );

    ShowOutput(
      "Your Profit is " + Profit + "₹",
      "Profit Percentage is " + ProfitPercentage + "%"
    );

    applyProfitstyle();
  } else if (initial > current) {
    // loss
    let Loss = (initial - current) * quant;
    let LossPercentage = ((Loss/quant) / initial) * 100;
    LossPercentage = LossPercentage.toFixed(2);

    console.log(
      "Your Loss is " + Loss + " and Loss Percentage is " + LossPercentage + "%"
    );

    ShowOutput(
      "Your Loss is " + Loss + "₹",
      "Loss Percentage is " + LossPercentage + "%"
    );

    applyLossStyle();
  } else {
    // no pain no gain
    console.log(" no pain no gain and no gain no pain");
    ShowOutput(" no pain no gain and no gain no pain");

    ShowOutput("No pain no gain ", "No gain no pain");

    applyNonestyle();
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
    ShowOutput("Please fill out all fields with valid numerals", "");
    document.querySelector(".outputholder").classList.add("outputholder-error");
  } else if (linitialprice < 0 || lquantity < 0 || lcurr < 0) {
    console.log("Please fill out all Fields");
    ShowOutput("Please fill out all fields with valid numerals", "");
    document.querySelector(".outputholder").classList.add("outputholder-error");
  } else {
    calculateProfitAndLoss(linitialprice, lquantity, lcurr);
  }
}

function ShowOutput(msg, msgpercentage) {
  outputpara.innerText = msg;
  outputpercentagepara.innerText = msgpercentage;
}

function applyProfitstyle() {
  document.querySelector(".bxs-up-arrow").style.display = "block";

  document.querySelector(".bxs-down-arrow").style.display = "none";

  document
    .querySelector(".outputholder")
    .classList.remove("outputholder-error");

  document.querySelector(".outputholder").classList.remove("outputholder-loss");

  document.querySelector(".outputholder").classList.remove("outputholder-none");

  document.querySelector(".outputholder").classList.add("outputholder-profit");
}

function applyLossStyle() {
  document.querySelector(".bxs-down-arrow").style.display = "block";

  document.querySelector(".bxs-up-arrow").style.display = "none";

  document
    .querySelector(".outputholder")
    .classList.remove("outputholder-error");

  document
    .querySelector(".outputholder")
    .classList.remove("outputholder-profit");
  document.querySelector(".outputholder").classList.remove("outputholder-none");

  document.querySelector(".outputholder").classList.add("outputholder-loss");
}

function applyNonestyle() {
  document
    .querySelector(".outputholder")
    .classList.remove("outputholder-error");

  document
    .querySelector(".outputholder")
    .classList.remove("outputholder-profit");

  document.querySelector(".outputholder").classList.remove("outputholder-loss");

  document.querySelector(".outputholder").classList.add("outputholder-none");
}
