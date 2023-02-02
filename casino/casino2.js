const prompt = require('prompt-sync')();

let balance = 10

function coinFlip() {
    return Math.random() < 0.5 ? 'H' : 'T';
}
function addBet(bet) {
    balance = balance + bet;
}
function subtractBet(bet) {
    balance = balance - bet;
}

while (balance > 0) {
    let bet = +prompt("How much would you like to bet? ");
    while (bet > balance) {
        console.log("Insufficient funds.");
        bet = +prompt("How much would you like to bet? ");
    }
    let choose = prompt("H or T? ");
    let flippedCoin = coinFlip()
    if (choose === flippedCoin) {
    addBet(bet);

    } else {
        subtractBet(bet);
    }
    console.log(`Your current balance is ${balance}`);
    let retry = prompt("Would you like to bet again? [y/n] ");
    if (retry === "n") {
        break;
    }
}