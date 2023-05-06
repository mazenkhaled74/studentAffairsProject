const students = JSON.parse(localStorage.getItem("students"));

//function to call when the checkbox is checked so it show active students only
function activeOnly(){
    const table = document.createElement("table");
    table.setAttribute("id","inTable");
    
    const headers = ["Name", "ID", "GPA", "Level", "Department", "Status"];
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    students.forEach(student => {
        if(student.status == "Active"){
            const row = document.createElement("tr");
            Object.keys(student).forEach(key => {
                if(key != "email" && key != "mobile" && key != "dob" && key != "gender")
                {
                    const td = document.createElement("td");
                    if(key == "status"){
                        const select = document.createElement("select");
                        const options = ["Active", "Inactive"];
                        options.forEach(option => {
                            const optionElement = document.createElement("option");
                            optionElement.value = option;
                            optionElement.text = option;
                            if(option == student[key]){
                                optionElement.selected = true;
                            }
                            select.appendChild(optionElement);
                        });
                        select.addEventListener("change", ()=>{
                            student[key] = select.value;
                        });
                        td.appendChild(select);
                    }
                    else if(key == "department"){
                        if(student[key] == "GN"){
                            td.textContent = "General";
                        }
                        else if(student[key] == "CS"){
                            td.textContent = "Computer Science";
                        }
                        else if(student[key] == "IS"){
                            td.textContent = "Information Systems";
                        }
                        else if(student[key] == "DS"){
                            td.textContent = "Decision Support";
                        }
                        else if(student[key] == "AI"){
                            td.textContent = "Artificial Intelligence";
                        }
                        else if(student[key] == "IT"){
                            td.textContent = "Information Technology";
                        }
                    }
                    else if(key == "level"){
                        if(student[key] == 1){
                            td.textContent = "First";
                        }
                        else if(student[key] == 2){
                            td.textContent = "Second";
                        }
                        else if(student[key] == 3){
                            td.textContent = "Third";
                        }
                        else if(student[key] == 4){
                            td.textContent = "Fourth";
                        }
                    }
                    else{
                        td.textContent = student[key];
                    }
                    row.appendChild(td);
                }
            });
            table.appendChild(row);    
        }
        else{
            return;
        }
});
    
    document.getElementById('tableContainer').appendChild(table);
    
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.addEventListener("click", () => {
        localStorage.setItem("students", JSON.stringify(students));
        alert("Changes saved");
    });
    document.getElementById("inTable").appendChild(saveButton);
}


//function to show all students called when the checkbox is unchecked
function creatTable(){
    const table = document.createElement("table");
    table.setAttribute("id","inTable");
    
    const headers = ["Name", "ID", "GPA", "Level", "Department", "Status"];
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    students.forEach(student => {
        const row = document.createElement("tr");
        Object.keys(student).forEach(key => {
            if(key != "email" && key != "mobile" && key != "dob" && key != "gender")
            {
                const td = document.createElement("td");
                if(key == "status"){
                    const select = document.createElement("select");
                    const options = ["Active", "Inactive"];
                    options.forEach(option => {
                        const optionElement = document.createElement("option");
                        optionElement.value = option;
                        optionElement.text = option;
                        if(option == student[key]){
                            optionElement.selected = true;
                        }
                        select.appendChild(optionElement);
                    });
                    select.addEventListener("change", ()=>{
                        student[key] = select.value;
                    });
                    td.appendChild(select);
                }
                else if(key == "department"){
                    if(student[key] == "GN"){
                        td.textContent = "General";
                    }
                    else if(student[key] == "CS"){
                        td.textContent = "Computer Science";
                    }
                    else if(student[key] == "IS"){
                        td.textContent = "Information Systems";
                    }
                    else if(student[key] == "DS"){
                        td.textContent = "Decision Support";
                    }
                    else if(student[key] == "AI"){
                        td.textContent = "Artifical Intelligence";
                    }
                    else if(student[key] == "IT"){
                        td.textContent = "Information Technology";
                    }
                }
                else if(key == "level"){
                    if(student[key] == 1){
                        td.textContent = "First";
                    }
                    else if(student[key] == 2){
                        td.textContent = "Second";
                    }
                    else if(student[key] == 3){
                        td.textContent = "Third";
                    }
                    else if(student[key] == 4){
                        td.textContent = "Fourth";
                    }
                }
                else{
                    td.textContent = student[key];
                }
                row.appendChild(td);
            }
        });
        table.appendChild(row);
    });
    
    document.getElementById('tableContainer').appendChild(table);
    
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";
    saveButton.addEventListener("click", () => {
        localStorage.setItem("students", JSON.stringify(students));
        alert("Changes saved");
    });
    document.getElementById("inTable").appendChild(saveButton);
}

window.onload = creatTable;

const filter = document.getElementById("filter");
filter.addEventListener("change", ()=>{
    const tableContainer = document.getElementById("tableContainer");
    if(filter.checked){
        if(tableContainer.firstChild){
            tableContainer.removeChild(tableContainer.firstChild);
        }
        activeOnly();
    }
    else{
        if(tableContainer.firstChild){
            tableContainer.removeChild(tableContainer.firstChild);
        }
        creatTable();
    }
});
