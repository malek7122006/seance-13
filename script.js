let taskinput = document.getElementById("taskInput"); 
let dateinput = document.getElementById("taskdate"); 
let addButton = document.getElementById("addButton"); 
let taskList = document.getElementById("taskList"); 

// ✅ Les éléments HTML nécessaires sont bien récupérés au début du script.
// 💡 Attention à garder exactement les mêmes noms de variables partout dans le code.

addButton.addEventListener("click", addTask); 
 
function addTask() { 
 
    let task = input.value; 
    let date = dateInput.value; 

    
    /*
    ❌ PROBLÈME IMPORTANT :

    Lorsque vous cliquez sur "Ajouter", rien ne se passe car les variables
    "input" et "dateInput" n'ont jamais été déclarées.

    Au début du code, vous avez déclaré :
        let taskinput = document.getElementById("taskInput");
        let dateinput = document.getElementById("taskdate");

    Mais ici vous utilisez :
        input
        dateInput

    ⚠️ JavaScript fait la différence entre les noms et les majuscules/minuscules.

    Cette erreur provoque une erreur JavaScript et empêche donc la fonction
    addTask() de continuer.

    💡 Conseil : utilisez exactement les mêmes noms de variables que ceux
    déclarés au début du fichier.
    */
    if (task === "") { 
        alert("Veuillez écrire une tâche"); 
        return; 
    } 

    // ✅ Bonne vérification : vous empêchez l'ajout d'une tâche vide.
 
    let li = document.createElement("li"); 
    let span = document.createElement("span"); 

    if (date === ""){ 
   span.textContent= task; 
    }else{ 
    span.textContent = task + " __" +date; 
    } 

    // ✅ Bonne idée d'afficher la date uniquement lorsqu'elle a été renseignée.
 
    let deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Supprimer"; 
    deleteButton.className = "delete"; 
 
    deleteButton.addEventListener("click", function() { 
        li.remove(); 
    }); 

    // ⭐ Bonne utilisation de addEventListener pour gérer la suppression.
 
    li.appendChild(span); 
    li.appendChild(deleteButton); 
 
    taskList.appendChild(li); 
 
    taskinput.value = ""; 
    dateInput.value = ""; 

    /*
    ❌ ATTENTION : le même problème se trouve ici avec "dateInput".
    La variable déclarée au début est "dateinput".

    Cette différence de majuscule/minuscule peut également provoquer
    une erreur JavaScript.

    🔎 Pensez toujours à vérifier la console du navigateur (F12 → Console)
    lorsqu'un bouton JavaScript ne fonctionne pas.
    */ 

}