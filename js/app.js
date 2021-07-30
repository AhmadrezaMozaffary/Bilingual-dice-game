const dice = document.querySelector("img");
const score = [0, 0];
const player0Title = document.querySelector(".player-title0");
const player1Title = document.querySelector(".player-title1");
const currentTitle0 = document.querySelector(".current-title0");
const currentTitle1 = document.querySelector(".current-title1");
const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");
const currentScore0 = document.querySelector(".current-score0");
const currentScore1 = document.querySelector(".current-score1");
const totalScore0El = document.querySelector(".total0");
const totalScore1El = document.querySelector(".total1");
const langMessage = document.querySelector(".langmsg");

let winMessage = "You win!";
let isInEnglishLanguage;
const langFA = " 🇮🇷 زبان به فارسی تغییر کرد ";
const langEN = "Language changed to EN 🇺🇸";

const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnReset = document.querySelector(".reset");
const btnLanguage = document.querySelector(".lang");
const btnHelp = document.querySelector(".help");
const btnX = document.querySelector(".x-button");

const switchPlayer = function () {
  player0El.classList.toggle("active-player");
  player1El.classList.toggle("active-player");
  player0El.classList.toggle("deactive-player");
  player1El.classList.toggle("deactive-player");
};

const changeModalDisplay = function (display) {
  document.querySelector(".modal-window").style.display = display;
};

let play = true;
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", () => {
  if (play) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `./images/dice${diceNumber}.png`;
    dice.classList.remove("hidden");
    if (score[0] <= 100 && score[1] <= 100) {
      if (activePlayer === 0) {
        currentScore += diceNumber;
        currentScore0.textContent = currentScore;
        if (diceNumber === 1) {
          currentScore = 0;
          activePlayer = 1;
          currentScore0.textContent = 0;
          switchPlayer();
        }
      } else {
        currentScore += diceNumber;
        currentScore1.textContent = currentScore;
        if (diceNumber === 1) {
          currentScore = 0;
          activePlayer = 0;
          currentScore1.textContent = 0;
          switchPlayer();
        }
      }
    } else {
      play = false;
      dice.classList.add("hidden");
      if (score[0] >= 99) {
        player0Title.textContent = winMessage;
        switchPlayer();
      } else if (score[1] >= 99) {
        player1Title.textContent = winMessage;
        switchPlayer();
      }
    }
  }
});

btnHold.addEventListener("click", () => {
  if (play) {
    if (score[0] <= 100 && score[1] <= 100) {
      if (activePlayer === 0) {
        score[0] += currentScore;
        totalScore0El.textContent = score[0];
        activePlayer = 1;
        currentScore0.textContent = 0;
        currentScore = 0;
        switchPlayer();
      } else {
        score[1] += currentScore;
        totalScore1El.textContent = score[1];
        activePlayer = 0;
        currentScore1.textContent = 0;
        currentScore = 0;
        switchPlayer();
      }
    }
  } else {
  }
});

btnReset.addEventListener("click", () => {
  play = true;
  activePlayer = 0;
  currentScore = 0;
  score[0] = score[1] = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  player0Title.textContent = isInEnglishLanguage ? "بازیکن ۱" : "Player 1";
  player1Title.textContent = isInEnglishLanguage ? "بازیکن ۲" : "Player 2";
  player0El.classList.add("active-player");
  player0El.classList.remove("deactive-player");
  player1El.classList.add("deactive-player");
  player1El.classList.remove("active-player");
  dice.classList.add("hidden");
});

btnLanguage.addEventListener("click", () => {
  isInEnglishLanguage = winMessage === "You win!";
  winMessage = winMessage === "You win!" ? "شما برنده شدید" : "You win!";
  const msg = isInEnglishLanguage ? langFA : langEN;
  langMessage.textContent = msg;
  player0Title.textContent = isInEnglishLanguage ? "بازیکن ۱" : "Player 1";
  player1Title.textContent = isInEnglishLanguage ? "بازیکن ۲" : "Player 2";
  currentTitle0.textContent = isInEnglishLanguage ? "امتیاز فعلی" : "Current";
  currentTitle1.textContent = isInEnglishLanguage ? "امتیاز فعلی" : "Current";
  btnRoll.textContent = isInEnglishLanguage ? "بریز 🖲" : "Roll 🖲";
  btnHold.textContent = isInEnglishLanguage ? "نگهداری 📥" : "Hold 📥";
  btnReset.textContent = isInEnglishLanguage ? "از اول ♻️" : "Reset ♻️";
  btnLanguage.textContent = isInEnglishLanguage ? "English" : "فارسی";
  btnHelp.textContent = isInEnglishLanguage ? "راهنما" : "Help";

  fadeOut(langMessage);
});

btnHelp.addEventListener("click", () => {
  changeModalDisplay("flex");
  if (btnHelp.textContent === "Help") {
    document.querySelector(".modal-content-en").style.display = "block";
    document.querySelector(".modal-content-fa").style.display = "none";
  } else {
    document.querySelector(".modal-content-en").style.display = "none";
    document.querySelector(".modal-content-fa").style.display = "block";
  }
});

btnX.addEventListener("click", () => {
  changeModalDisplay("none");
});
