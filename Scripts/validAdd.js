const form = document.querySelector('form');
const nameInput = document.querySelector('.name');
const idInput = document.querySelector('.id');
const emailInput = document.querySelector('.email');
const mobileInput = document.querySelector('.mobile');
const dobInput = document.querySelector('.dob');
const gpaInput = document.querySelector('.gpa');
const levelInput = document.querySelector('.level');
const departmentInput = document.querySelector('.department');
const genderInputs = document.querySelectorAll('.gender');
const statusInputs = document.querySelectorAll('.status');

let students = [];

function isUniqueID(id) {
  return !students.find(student => student.id === id);
}

function handleSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const id = Number(idInput.value);
  const email = emailInput.value;
  const mobile = mobileInput.value;
  const dob = dobInput.value;
  const gpa = Number(gpaInput.value);
  const level = levelInput.value;
  const department = departmentInput.value;
  const gender = Array.from(genderInputs).find(input => input.checked).value;
  const status = Array.from(statusInputs).find(input => input.checked).value;
  
  if(department == ""){
    alert("Choose a department");
    return;
  }

  if(level == ""){
    alert("Choose a level");
    return;
  }

  if(level<3 && department!='GN'){
    alert('student cannot have a department before the third level');
    return;
  }

  if (!isUniqueID(id)) {
    alert('A student with this ID already exists. Please enter a unique ID.');
    return;
  }

  const newStudent = {
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
  students.push(newStudent);

  localStorage.setItem('students', JSON.stringify(students));

  form.reset();

  alert('Student added successfully!');
}

form.addEventListener('submit', handleSubmit);

const storedStudents = JSON.parse(localStorage.getItem('students'));
if (storedStudents) {
  students = storedStudents;
}