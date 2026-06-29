let boxes = document.querySelectorAll(".boxes");

let message = document.querySelector("#message");

let computerC = document.querySelector("#compscr");
let userC = document.querySelector("#userscr");

let userInput = "";
let computerInput = "";

let userInputVal = true;

let userCount = 0;
let compCount= 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    userInputFun(box);
  });
});

const computerInputFun = () => {
  let option = ["rock", "paper", "scissor"];
  let val = Math.floor(Math.random() * 3);
  return option[val];
};

const draw = () => {
  message.innerText = "Game is Draw";
};

const findAnsFun = () => {
  if (userInput === computerInput) {
    draw();
  } else {
    if (userInput === "rock") {
      userInputVal = computerInput === "paper" ? false : true;
    } else if (userInput == "paper") {
      userInputVal = computerInput === "scissor" ? false : true;
    } else {
      userInputVal = computerInput === "rock" ? false : true;
    }

    if(userInputVal)
    {
        message.innerText = `you won computer has picked ${computerInput}`;
        userCount++;
        userC.innerText = userCount;
    }
    else{
        message.innerText = `you lost computer has picked ${computerInput}`;
        compCount++;
        computerC.innerText = compCount;
    }
  }
};

const userInputFun = (box) => {
  userInput = box.getAttribute("id");

  computerInput = computerInputFun();

  findAnsFun();
};
