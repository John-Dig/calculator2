// Business Logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate(num1, num2, operatorParam) {
  if (operatorParam === "add") {
    return add(num1, num2);
  } else if (operatorParam === "subtract") {
    return subtract(num1, num2);
  } else if (operatorParam === "multiply") {
    return multiply(num1, num2);
  } else if (operatorParam === "divide") {
    return divide(num1, num2);
  }
}

// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
  let result = calculate(number1, number2, operator);

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleSubmission);
});