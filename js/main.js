let userInput = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");
let outputDiv = document.getElementById("outputDiv");

submitBtn.onclick = function () {
  outputDiv.innerHTML = userInput.value;
};
/* ADDITION SECTION */
let numberInput = document.getElementById("numberInput");
let addBtn = document.getElementById("addBtn");
let addOutputDiv = document.getElementById("addOutputDiv");

addBtn.onclick = function () {
  addOutputDiv.innerHTML = fb(numberInput.value);
};

function fb(num) {
  num = parseInt(num);
  if (num <= 1) {
    return num;
  } else {
    return num + fb(num - 1);
  }
}

/* ADD MACHINE SECTION */
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let plusBtn = document.getElementById("plusBtn");
let addMachineOutputDiv = document.getElementById("addMachineOutputDiv");

plusBtn.onclick = function () {
  addMachineOutputDiv.innerHTML =
    parseInt(firstNumber.value) + parseInt(secondNumber.value);
};
