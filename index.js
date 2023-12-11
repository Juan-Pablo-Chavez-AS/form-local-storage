const form = document.getElementById('arrivalForm');
const inputs = [...document.querySelectorAll('input')];
const validatedInputs = inputs.filter((input) => input.type !== "radio" && input.type !== "checkbox");
const errorMessages = [...document.getElementsByClassName("error-message")];

console.log(errorMessages);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(validatedInputs);

    let error = false;
    validatedInputs.forEach((input) => {
        const inputErrorMessage = document.getElementById(input.id + "Error");
        if (!input.checkValidity()) {
            inputErrorMessage.textContent = input.validationMessage;
            inputErrorMessage.style.display = 'inline';
            error = true
        } else {
            inputErrorMessage.style.display = 'none';
        }
    });
    if (!error) {
        saveToLocalStorage();
    }
});

form.addEventListener('reset', (event) => {
    errorMessages.forEach((message) => {
        message.style.display = 'none';
    })
});

function saveToLocalStorage() {
    // WIP: TODO
}
