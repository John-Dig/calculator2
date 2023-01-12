function handleSelect(event){
  event.preventDefault();
  const operatorChoice= document.getElementById("operator").value;
  const firstNum = parseInt(document.getElementById("input1").value);
  const secondNum = parseInt(document.getElementById("input2").value);
  let returnValue = calculateResult(firstNum, secondNum, operatorChoice);
  printResult(returnValue);
}

function calculateResult(firstNumber, secondNumber, userOperatorChoice){
  if (userOperatorChoice == "Add"){
    return firstNumber + secondNumber;
  } else if (userOperatorChoice == "Subtract"){
    return firstNumber - secondNumber;
  } else if (userOperatorChoice == "Multiply"){
    return firstNumber * secondNumber;
  } else if (userOperatorChoice == "Divide"){
    return firstNumber / secondNumber;
  }
}

function printResult(result){
  document.getElementById("resultArea").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("calc").addEventListener("submit", handleSelect);
});
