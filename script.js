document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (name && age && grade) {
        const studentList = document.getElementById('studentList');
        const listItem = document.createElement('li');

        listItem.textContent = `Name: ${name}, Age: ${age}, Grade: ${grade}`;
        studentList.appendChild(listItem);

        document.getElementById('studentForm').reset();
    } else {
        alert('Please fill out all fields');
    }
});
