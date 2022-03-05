"use strict"

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = (message) =>{
    document.querySelector(".text-gusseing").textContent = message
}


document.querySelector(".check").addEventListener('click', () => {
    const guess = Number(document.querySelector(".input-value").value)
    // When no input
    if (!guess) {
        displayMessage("📛 No number!") 
    }
    // no match
    else if (guess === secrateNumber) {
        document.querySelector(".message").textContent = '🥳🥳 Correct Number';
        displayMessage(  "🥳🥳 Correct Number");
        document.querySelector(".tex-question").textContent = secrateNumber
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.tex-question').style.width = "30rem"
        if (score > highScore) {
            highScore = score
            document.querySelector(".h-score").textContent = highScore
        }
    }
    // // When guss in wrong
    else if (guess !== secrateNumber) {
        if (score > 1) {
            displayMessage(  guess>secrateNumber? "📈 Value is too high":'📉 value is too low')
            score--;
            document.querySelector(".t-score").textContent = score;
        }
        else {
            document.querySelector(".total-score").textContent = "Game over !!"
            score = 0
        }
    }
    // guss is high
    /*
    else if (guess > secrateNumber) {
        if (score > 1) {
            document.querySelector(".text-gusseing").textContent = "📈 Value is too high"
            score--;
            document.querySelector(".t-score").textContent = score;
        }
        else {
            document.querySelector(".total-score").textContent = "Game over !!"
            score = 0
        }
    }
    // guess is low
    else if (guess < secrateNumber) {
        if (score > 1) {
            document.querySelector(".text-gusseing").textContent = "📉 value is too low"
            score--;
            document.querySelector(".t-score").textContent = score;
        }
        else {
            document.querySelector(".total-score").textContent = "Game over !!"
            score = 0
        }
    }
    */

})
document.querySelector('.again-start').addEventListener('click', () => {
    score = 20;
    secrateNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.t-score').textContent = score
    document.querySelector(".message").textContent = "Guess my number!";
    displayMessage("Start guessing...")
    document.querySelector('.tex-question').textContent = "?"
    document.querySelector('body').style.backgroundColor = "#111"
    document.querySelector('.input-value').value = ''
    document.querySelector('.tex-question').style.width = "13rem"

})