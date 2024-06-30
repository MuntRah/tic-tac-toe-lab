const elems = document.querySelectorAll(".sqr");
let turn = true;
const arr = [];
let count = 0;
let thereAwinner = false;
const reset = document.querySelector(".reset");

const message = document.querySelector("#message");
elems.forEach((elem, index) => {
  elem.addEventListener("click", (event) => {
    if (event.target.innerText === "") {
      if (turn) {
        event.target.innerText = "x";
        turn = false;
        count++;
      } else if (turn === false) {
        event.target.innerText = "o";
        turn = true;
        count++;
      }
    }
    const val = event.target.innerText;
    arr[index] = val;
    if (arr[0] === "x" && arr[1] === "x" && arr[2] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[3] === "x" && arr[4] === "x" && arr[5] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[6] === "x" && arr[7] === "x" && arr[8] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[0] === "x" && arr[3] === "x" && arr[6] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[1] === "x" && arr[4] === "x" && arr[7] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[2] === "x" && arr[5] === "x" && arr[8] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[0] === "x" && arr[4] === "x" && arr[8] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[2] === "x" && arr[4] === "x" && arr[6] === "x") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    }

    if (arr[0] === "o" && arr[1] === "o" && arr[2] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[3] === "o" && arr[4] === "v" && arr[5] === "o") {
      message.innerHTML = "X winner";
      thereAwinner = true;
    } else if (arr[6] === "o" && arr[7] === "o" && arr[8] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[0] === "o" && arr[3] === "x" && arr[6] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[1] === "o" && arr[4] === "o" && arr[7] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[2] === "o" && arr[5] === "o" && arr[8] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[0] === "o" && arr[4] === "o" && arr[8] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    } else if (arr[2] === "o" && arr[4] === "o" && arr[6] === "o") {
      message.innerHTML = "o winner";
      thereAwinner = true;
    }
    if (count === 9 && thereAwinner === false) {
      message.innerHTML = "draw!";
    }
  });
});
reset.addEventListener("click", (event) => {
  elems.forEach((elem) => {
    elem.innerHTML = "";
    let count = 0;
    let thereAwinner = false;
    
  });
});
