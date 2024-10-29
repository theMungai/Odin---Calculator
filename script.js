const previousCalculations = document.querySelector(".previous-calculations");
const currentCalculations = document.querySelector(".current-calculations");
const currentAnswer = document.querySelector(".current-answer");
const userInput = document.querySelector("#user-input");
const clearAll = document.querySelector("#clear");
const equalSign = document.querySelector("#calculate");
const multiplyOperator = document.querySelector("#multiply-operator");
const divideOperator = document.querySelector("#divide-operator");
const addOperator = document.querySelector("#add-operator");
const substractOperator = document.querySelector("#substract-operator");
const deleteLeft = document.querySelector("#delete");

function appendToDisplay(input){
    userInput.value += input;
}

// clearing the display
clearAll.addEventListener('click', () => {
    userInput.value = "";

});

deleteLeft.addEventListener('click', () => {
    
})

// Calculating any calculations from the user

equalSign.addEventListener('click', () => {
    if(divideOperator){
        // currentAnswer.textContent = `${(userInput.value )/ (userInput.value)}`
        userInput.textContent = (userInput.value )/ (userInput.value)
    }
})