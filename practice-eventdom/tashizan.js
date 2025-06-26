function calculateSum() {
    let leftInput = document.querySelector('input[name="left"]');
    let rightInput = document.querySelector('input[name="right"]');
    
    let leftValue = parseInt(leftInput.value, 10);
    let rightValue = parseInt(rightInput.value, 10);
  
    let sum = leftValue + rightValue;
  
    let answerSpan = document.querySelector('span#answer');
    answerSpan.textContent = sum;
  }
  
  let button = document.querySelector('button#calc');
  button.addEventListener('click', calculateSum);
  