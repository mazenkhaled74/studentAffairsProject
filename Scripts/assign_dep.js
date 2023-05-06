const students = JSON.parse(localStorage.getItem('students'));
const index = localStorage.getItem('index');

const student = students[index];
document.querySelector('.name').value = student.name;
document.querySelector('.id').value = student.id;

const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const l = document.querySelector('.department').value;
    if(l=="")
    {
        alert("Choose a department");
        return;
    }
    if(student.level == 3){
        student.department = l;
        localStorage.setItem('students', JSON.stringify(students));
        alert('Changes Saved');
    }
    else
    {
        alert('Student should be in the third level');
        return;
    }

});