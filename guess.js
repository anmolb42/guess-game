"use strict";

let guessNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "NO number!! ⛔";
  }

  //When guess is correct
  else if (guess === guessNumber) {
    document.querySelector(".message").textContent = "Correct Number!🎊";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = guessNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when the guess is wrong
  else if (guess !== guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > guessNumber ? "Too High!!📉" : "Too Low!!📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose!! Try Again";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Coding Challenge 1

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

//AGAIN BUTTON

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
