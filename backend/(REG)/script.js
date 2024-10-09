document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const pass = document.getElementById('pass').value;
    const local = document.getElementById('local').value;
    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value;
    const comment = document.getElementById('comment').value;

    if (name && email && number && pass && local && date && hours && comment) {
        addAppointment(name, email, number, pass, local, date, hours, comment);
        document.getElementById('forms').reset();
    }
});

function addAppointment(name, email, number, pass, local, date, hours, comment) {
    const addAppointmentsList = document.getElementById('appoitments-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span>${name} - ${email} - ${number} - ${pass} - ${local} - ${new date(date).toLocaleString()} - ${new hours(hours).toLocaleString()} - ${comment}</span>
    <div>
        <button class="edit-button">Edit</button>
        <button class="complete-button">Conclue</button>
    </div>
    `;
    addAppointmentsList.appendChild(listItem);

    const editButton = listItem.querySelector('.edit-button');
    const completetButton = listItem.querySelector('.complete-button');

    editButton.addEventListener('click', () => editAppointment(listItem, name, email, number, pass, local, date, hours, comment));
    completetButton.addEventListener('click', () => completeAppointment(listItem));
}

function editAppointment(listItem, name, email, number, pass, local, date, hours, comment) {
    const newName = prompt("Edit name:", name);
    const newEmail = prompt("Edit email:", email);
    const newNumber = prompt("Edit number:", number);
    const newPass = prompt("Edit passwork:", pass);
    const newLocal = prompt("Edit local", local);
    const newDate = prompt("Edit date:", date);
    const newHours = prompt("Edit Hours", hours);
    const newComment = prompt("Edit comments:", comment);

    if (newName) {
        listItem.querySelector('span').textContent = ` ${newName} - ${newEmail} - ${newNumber} - ${newPass} - ${newLocal} - ${new newDate(date).toLocaleString()} - ${new newHours(hours).toLocaleString()} - ${newComment} `;
    }
}

function completeAppointment(listItem) {
    const confirmRemoval = confirm("REMOVE IS LIST??");
    if (confirmRemoval) {
        listItem.remove();
    }
}