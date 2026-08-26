let taskinput = document.getElementById("taskInput");
let dateinput = document.getElementById("taskdate");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
addButton.addEventListener("click", addTask);

function addTask() {

    let task = input.value;
    let date = dateInput.value;
    if (task === "") {
        alert("Veuillez écrire une tâche");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    if (date === ""){
   span.textContent= task;
    }else{
    span.textContent = task + " __" +date;
    }
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.className = "delete";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskinput.value = "";
    dateInput.value = "";
}