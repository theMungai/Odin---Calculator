document.addEventListener('DOMContentLoaded', () =>{
    const previousCalculations = document.querySelector(".previous-calculations");
    const currentAnswer = document.querySelector(".current-calculations");
    const currentCalculations = document.querySelector(".current-answer");
    const userInput = document.querySelector("#user-input");
    const Numbers = document.querySelector(".numbers");
    const mathOperrators = document.querySelector(".calculating-signs");

    Numbers.addEventListener('click', () => {
        userInput.textContent = Numbers
    });

});