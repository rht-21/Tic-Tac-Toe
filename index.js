let turn = "X";
let isgameover = false;
var music = new Audio('crackers.mp3');
music.volume = 0.5;
document.getElementsByClassName("player")[0].innerText  = turn;

function changeTurn() {
  return turn === "X"?"O":"X";
}

function checkWin() {
  let boxtext = document.querySelectorAll('.boxinfo');
  let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]
  wins.forEach(function(e){
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
          document.querySelector("h1").innerText = boxtext[e[0]].innerText + " Won!";
          document.querySelector("h3").classList.add("hide");

          isgameover = true;
          boxtext[e[0]].classList.add(boxtext[e[0]].innerText);
          boxtext[e[1]].classList.add(boxtext[e[0]].innerText);
          boxtext[e[2]].classList.add(boxtext[e[0]].innerText);
          music.play();
      }
  })
}

let boxes = document.querySelectorAll("td");
Array.from(boxes).forEach(function(element) {
  let boxtext = element.querySelector(".boxinfo");
  element.addEventListener("click", function() {
    if(boxtext.innerText === ""){
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover){
          document.getElementsByClassName("player")[0].innerText  = turn;
      }
    }
  })
})

document.querySelector("#reset").addEventListener('click', function(){
    let boxtext = document.querySelectorAll('.boxinfo');
    Array.from(boxtext).forEach(function(element){
        element.innerText = ""
        element.classList.remove("X");
        element.classList.remove("O");
    });
    turn = "X";
    isgameover = false;
    document.querySelector("h3").classList.remove("hide");
    document.getElementsByClassName("player")[0].innerText  = turn;
    document.querySelector("h1").innerText = "Tic Tac Toe";
    music.pause();
    music.currentTime = 0;
})
