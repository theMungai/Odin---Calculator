const keys = document.querySelectorAll(".js-button");
const displayScreen = document.querySelector(".display-screen");


keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        const clickedKey = event.target
        const keyValue = clickedKey.textContent;
        const display = displayScreen.textContent;
        const displayValue = displayScreen.value;
        
        // Checking if the key value is a number
        if(key.dataset.type === "numbers"){
            if(displayValue === "0"){
                displayScreen.value = keyValue
            }
            else {
                displayScreen.value = displayValue + keyValue
            }
        }

        // Checking if the key value is an operator
        if(key.dataset.type === "operator"){
            console.log(key)
        }
    })
});