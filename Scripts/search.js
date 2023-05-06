const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const name = form.elements['Name'].value;
    const id = form.elements['ID'].value;

    const students = JSON.parse(localStorage.getItem('students'));
    const studentIndex = students.findIndex(student => student.id == id && student.name == name);
    if(studentIndex != -1){
        localStorage.setItem("index", studentIndex);
        window.location.href = "update.html";
    }
    else{
        alert('Student does not exist');
    }
});