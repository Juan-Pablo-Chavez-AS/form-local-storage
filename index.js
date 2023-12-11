const form = document.getElementById('arrivalForm');
const inputs = [...document.querySelectorAll('input')];
const validatedInputs = inputs.filter((input) => input.type !== "radio" && input.type !== "checkbox");
const errorMessages = [...document.getElementsByClassName("error-message")];

form.addEventListener('submit', function(event) {
    event.preventDefault();

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
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    console.log(submissions);
    if (submissions === undefined) {
        localStorage.setItem("submissions", "[]");
    }

    submissions.push({
        ...inputs.reduce((acc, input) => {
            acc[input.id] = { value: input.value, checked: input.checked};
            return acc;
        }, {}),
    })
    localStorage.setItem("submissions", JSON.stringify(submissions));
    console.log(submissions);
}
