let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = 1;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function restrat(){
   turnO = 0;
   enableButtons();
   msgContainer.classList.add("hide");
}

function disableButtons(){
   for(let box of boxes){
      box.disabled = true;
   }
}
function enableButtons(){
   for(let box of boxes){
      box.disabled = false;
      box.innerHTML=" ";
   }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO===1) {
      box.innerText = "O";
      turnO = 0;
    } else {
      box.innerText = "X";
      turnO = 1;
    }
    box.disabled = true;

     checkWinner();
  });
});

function showWinner(winner){
   msg.innerText = `Congratulation Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableButtons();
  
}
function checkWinner (){
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener('click',restrat);

