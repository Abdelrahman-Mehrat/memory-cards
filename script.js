var main = document.querySelector(".main");
var btn = document.getElementById("btn");
var audioRight = new Audio("right.wav");
var myArray = [
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
//way to shuffle an array
(function shuffleFun() {
  var i = myArray.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = myArray[j];
    myArray[j] = myArray[i];
    myArray[i] = temp;
  }
})();

function setItemsFun() {
  // shuffleFun();
  let wrapperCards = "";
  let counter = 1;
  for (const img_src of myArray) {
    wrapperCards += `
      <div class="col-sm-3 p-2">
      <div class="wrap-card ">
      <img src="${img_src}" id="${img_src}" data-answer="${counter}" class="selected_img">
      </div>
      </div>`;
    counter++;
  }
  main.insertAdjacentHTML("beforeend", wrapperCards);
  let cardWrap_img = document.querySelectorAll(".wrap-card img");
  setTimeout(() => {
    cardWrap_img.forEach((el) => {
      el.classList.remove("selected_img");
    });
  }, 500);
}
setItemsFun();
//
// Add click event
let checkAns = [];
function clickCard() {
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
clickCard();
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
//restart btn
btn.onclick = function () {
  restart();
};
//run auto after removing all the cards
function done() {
  if (test == 6) {
    alert("Well player!!");
    restart();
  }
}
//used in restart btn or after finishing the game
function restart() {
  main.innerHTML = "";
  setItemsFun();
  test = 0;
  clickCard();
}
