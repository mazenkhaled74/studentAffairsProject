const students = JSON.parse(localStorage.getItem('students'));
const index = localStorage.getItem('index');

const student = students[index];
document.querySelector('.name').value = student.name;
document.querySelector('.id').value = student.id;
document.querySelector('.email').value = student.email;
document.querySelector('.mobile').value = student.mobile;
document.querySelector('.dob').value = student.dob;
document.querySelector('.gpa').value = student.gpa;
document.querySelector('.level').value = student.level;
document.querySelector('.department').value = student.department;
if(student.gender == "Male"){
    document.querySelector('input[name="Gender"][value="Male"]').checked = true;
}
else{
    document.querySelector('input[name="Gender"][value="Female"]').checked = true;
}

if(student.status == "Active"){
    document.querySelector('input[name="Status"][value="Active"]').checked = true;
}
else{
    document.querySelector('input[name="Status"][value="Inactive"]').checked = true;
}
const form = document.querySelector('form');


form.addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.querySelector('.name').value;
    const id = Number(document.querySelector('.id').value);
    const email = document.querySelector('.email').value;
    const mobile = document.querySelector('.mobile').value;
    const dob = document.querySelector('.dob').value;
    const gpa = document.querySelector('.gpa').value;
    const level = document.querySelector('.level').value;
    const department = document.querySelector('.department').value;
    const gender = Array.from(document.querySelectorAll('.gender')).find(input => input.checked).value;
    const status = Array.from(document.querySelectorAll('.status')).find(input => input.checked).value;

    const updatedStudent = {
        name,
        id,
        email,
        mobile,
        dob,
        gpa,
        level,
        department,
        gender,
        status
    };
    students[index] = updatedStudent;
    localStorage.setItem('students', JSON.stringify(students));
    alert('Changes Saved');
    window.location.href = 'studentinfo.html';
});

const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click',function(event){
    event.preventDefault();

    if(confirm("Do you want to delete this student ?") == true){
        students.splice(index,1);
        localStorage.setItem('students', JSON.stringify(students));
        alert("Student deleted successfully");
        window.location.href = 'studentinfo.html';
    }
    else{
        return;
    }
});