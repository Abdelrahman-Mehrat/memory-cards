let boxContainer = document.querySelector(".main");
let restartBtn = document.getElementById("btn");
let checkAns = [];
let audioRight = new Audio("right.wav");
let cardsArr = [
  "imgs/html5.png",
  "imgs/css3.png",
  "imgs/js.png",
  "imgs/vue.png",
  "imgs/react.png",
  "imgs/scrat.jfif",
  "imgs/html5.png",
  "imgs/css3.png",
  "imgs/js.png",
  "imgs/vue.png",
  "imgs/react.png",
  "imgs/scrat.jfif",
];
//
renderCards();
cardEvent();
restartBtn.onclick = function () {
  restart();
};
//
function shuffleCards() {
  for (let i = cardsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
  }
}

function renderCards() {
  let wrapperCards = "";
  let counter = 1;
  shuffleCards();
  for (const img_src of cardsArr) {
    wrapperCards += `
      <div class="col-sm-3 p-2">
      <div class="wrap-card ">
      <img src="${img_src}" id="${img_src}" data-answer="${counter}" class="selected_img">
      </div>
      </div>`;
    counter++;
  }
  boxContainer.insertAdjacentHTML("beforeend", wrapperCards);
  // hide images after 0.5s to start the game
  setTimeout(() => {
    let cardWrap_img = document.querySelectorAll(".wrap-card img");
    cardWrap_img.forEach((el) => {
      el.classList.remove("selected_img");
    });
  }, 500);
}
//
// Add click event
function cardEvent() {
  let cardWrap = document.querySelectorAll(".wrap-card");
  cardWrap.forEach((el) => {
    el.addEventListener("click", (e) => {
      const isFlipped = document.querySelectorAll(".selected_img").length;
      if (isFlipped == 2) return false;
      checkAnswer(e);
      // check answer True
      if (checkAns[0] == checkAns[1] && checkAns) {
        trueAnswer();
      }
      // check wrong ans
      else if (checkAns[0] != checkAns[1] && checkAns.length == 2) {
        wrongAnswer();
      }
    });
  });
}
function checkAnswer(e) {
  e.target.classList.add("selected_img");
  e.target.parentElement.classList.add("selected");
  checkAns.push(e.target.id);
}
function trueAnswer() {
  let correctAns = document.querySelectorAll(".selected_img");
  console.log(correctAns);
  setTimeout(() => {
    correctAns.forEach((e) => {
      e.parentElement.classList.remove("selected");
      e.parentElement.remove();
      checkAns = [];
    });
  }, 1000);
}
function wrongAnswer() {
  let cardWrap_img = document.querySelectorAll(".wrap-card img");
  console.log(checkAns);
  setTimeout(() => {
    checkAns = [];
    cardWrap_img.forEach((element) => {
      element.parentElement.classList.remove("selected");
      element.classList.remove("selected_img");
    });
  }, 1000);
}

//run auto after removing all the cards
function done() {
  if (test == 6) {
    alert("Well player!!");
    restart();
  }
}
//used in restart restartBtn or after finishing the game
function restart() {
  boxContainer.innerHTML = "";
  renderCards();
  test = 0;
  cardEvent();
}
arr2 = [1, 2, 3];
arr2.forEach((e) => {
  e + 1;
});
let arr3 = arr2.map((e) => e + 2);
console.log(arr3);
