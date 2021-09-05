"use strict";

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🤷‍♂️ No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "✔ Jogue novamente e bata seu recorde!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("h1").textContent = "Acertou mizeravi!";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When player lost with low guess
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "😓 Errou, meu número é mais alto!";
      //score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💩 Você perdeu.";
      document.querySelector(".score").textContent = 0;
    }

    // When player lost with high guess
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "😒 Errou, meu número é mais baixo!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💩 Você perdeu.";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "— Escolha um número";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "30rem";
});
