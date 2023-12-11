const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
const table = document.getElementById('myTable').getElementsByTagName('tbody')[0]; // Get table body

submissions.forEach((submission, index) => {
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    cell1.textContent = submission.arrivalDate.value;

    const cell2 = newRow.insertCell(1);
    cell2.textContent = submission.nightsQuantity.value;

    const cell3 = newRow.insertCell(2);
    cell3.textContent = submission.adultsQuantity.value;

    const cell4 = newRow.insertCell(3);
    cell4.textContent = submission.childrenQuantity.value;

    const cell5 = newRow.insertCell(4);
    cell5.textContent = getRoomType(submission);

    const cell6 = newRow.insertCell(5);
    cell6.textContent = getBedType(submission);

    const cell7 = newRow.insertCell(6);
    cell7.textContent = submission.smokeCheck.checked ? "Yes" : "No"; // WIP: Use img

    const cell8 = newRow.insertCell(7);
    cell8.textContent = submission.nameField.value;

    const cell9 = newRow.insertCell(8);
    cell9.textContent = submission.emailField.value;

    const cell10 = newRow.insertCell(9);
    cell10.textContent = submission.phoneField.value;

    const cell11 = newRow.insertCell(10);

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = function() {
        table.deleteRow(index);
        submissions.splice(index, 1);
        localStorage.setItem("submissions", JSON.stringify(submissions));
    }
    cell11.appendChild(button);

    table.appendChild(newRow);

});

function getRoomType(submission) {
    if (submission.standardType.checked) {
        return "Standard";
    }
    if (submission.businessType.checked) {
        return "Business";
    }
    if (submission.suitetype.checked) {
        return "Suite";
    }

    return "Unkown";
}

function getBedType(submission) {
    if (submission.doubleType.checked) {
        return "Double";
    }
    if (submission.kingType.checked) {
        return "King";
    }

    return "Unkown";
}
