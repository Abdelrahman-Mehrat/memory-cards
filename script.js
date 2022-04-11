var main = document.getElementsByTagName("main")[0],
  all_div = document.getElementsByTagName("div"), //html collection
  div,
  img;
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
//kind of different way to shuffle an array
Array.prototype.shuffleFun = function () {
  var i = this.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
};

function setItemsFun() {
  //call shuffle function then append each element to the screen
  //   myArray.shuffleFun();
  let wrapperCards = "";
  for (var i = 0; i <= myArray.length - 1; i++) {
    wrapperCards = `
      <div class="wrap-card">
      <img src="${myArray[i]}" id="${myArray[i]}">
      </div>`;
    // div = document.createElement("div");
    // main.appendChild(div);
    // img = document.createElement("img");
    // img.setAttribute("src", myArray[i]);
    // img.setAttribute("id", myArray[i]);
    // div.appendChild(img);
    main.insertAdjacentHTML("beforeend", wrapperCards);
  }
}
setItemsFun();
function clickCard() {
  let cardWrap = document.querySelectorAll(".wrap-card");
  let checkAns = [];
  cardWrap.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target.id);
      checkAns.push(e.target.id);
      console.log(checkAns);
      e.target.style.opacity = "1";
    });
  });
}
clickCard();
// var test = 0;
// var compare = [],
//   flag = true;
// var newTest = Array.from(all_div);
// function clk() {
//   for (var i = 0; i <= newTest.length - 1; i++) {
//     newTest[i].onclick = function () {
//       console.log(newTest);
//       if (!flag) return;
//       this.firstChild.style.opacity = "1";
//       if (compare.length == 0) {
//         compare[0] = this;
//         compare[0].style.pointerEvents = "none"; //make the first card not clickable to not make confusion in "check function"
//       } else if (compare.length == 1) {
//         compare[1] = this;
//       }
//       //check after setting two items together in an array
//       if (compare.length == 2) {
//         flag = false;
//         setTimeout(check, 700);
//       }
//     };
//   }
// }
// clk();
//function of getting match true or false
// function check() {
//   //same id means same img name as i set them

//   if (compare[0].firstChild.id === compare[1].firstChild.id) {
//     audioRight.play();
//     ++test;
//     compare[0].firstChild.remove();
//     compare[1].firstChild.remove();
//     //console.log(test);
//   } else {
//     compare[0].style.pointerEvents = "auto"; //get the default style for the first opened card
//     compare[0].firstChild.style.opacity = "0";
//     compare[1].firstChild.style.opacity = "0";
//   }
//   //reload the cards
//   done();
//   //reset the array to empty to start comparing two items in the next round
//   compare = [];
//   flag = true;
// }
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
  clk();
}
