const keys = document.querySelectorAll(".js-button");
const displayScreen = document.querySelector(".display-screen");


keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        const keyValue = event.target;
        const displayValue = keyValue.textContent
        console.log(displayValue)
        displayScreen.value = displayValue
    })
})