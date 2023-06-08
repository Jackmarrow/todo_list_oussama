//^ LES VARIABLES POUR AJOUTER UN TITRE ET LE DIV
const inputTitle = document.getElementById("columnTitle");
const addColumnBtn = document.getElementById("addColumn");
const columnContainer = document.getElementById("columnContainer");

//!------------------------------------------------------------------

addColumnBtn.addEventListener("click", addDiv);

// an event listnener that listen to the click and add a task
document.addEventListener("click", e =>{
  // check if the clicked button is an add task
  if(e.target.className.includes("add-task")){
      addTask(e.target);
  }
  //delete the task from the column
  if(e.target.className.includes("delete")){
    deleteTask(e.target);
  }
  //make the task on mode done
  if(e.target.className.includes("done")){
    done(e.target);
  }
  //modifiy the task
  if(e.target.className.includes("modify")){
    modify(e.target);
  }
}
)

//!------------------------------------------------------------------

function addDiv() {
  // check if the input value is different than 0
  if (inputTitle.value.length != 0) {
    //create tags for the column
    let div = document.createElement("div");
    let button = document.createElement("button");
    let h1 = document.createElement("h1");
    //add class to tags
    div.setAttribute(
      "class",
      "bg-danger h-100 task-width rounded-3 d-flex flex-column align-items-center ms-4 me-4 p-4 box-container"
    );
    button.setAttribute("class", "btn btn-primary mb-4 add-task");
    h1.setAttribute("class", "text-white mb-4");
    //add text to the button and title
    h1.innerHTML = inputTitle.value;
    button.innerHTML = "Ajouter un task";
    //appendChild to the column
    columnContainer.appendChild(div);
    div.appendChild(h1);
    div.appendChild(button);
    //reset the input value
    inputTitle.value = "";
    //call the add task event listener function

  }
}

// addtask function
function addTask(btn){
  let parentDiv = btn.parentElement;
  //create tags for the column
  let divTask = document.createElement("div");
  let p = document.createElement("p");
  let divButton = document.createElement("div");
  let btnModifie = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnDone = document.createElement("button");
  let modifieIcon = document.createElement("i");
  let deleteIcon = document.createElement("i");
  let doneIcon = document.createElement("i");
  //add class to tags
  divTask.setAttribute("class", "d-flex align-items-center justify-content-between task rounded-3 p-2");
  divButton.setAttribute("class", "d-flex align-content-center");
  btnModifie.setAttribute("class", "mx-1 bg-transparent border-0 color-blue");
  btnDelete.setAttribute("class", "mx-1 bg-transparent border-0 color-red");
  btnDone.setAttribute("class","mx-1 p-1 rounded-2 border-0 bg-success text-white");
  modifieIcon.setAttribute("class","fa-solid fa-pencil fa-2x modify");
  deleteIcon.setAttribute("class","fa-solid fa-trash fa-2x delete");
  doneIcon.setAttribute("class", "fa-solid fa-check text-white px-1 done");
  p.setAttribute("class","fs-5 mb-0")
  //append child to the column
  //^ add div task to the column
  parentDiv.appendChild(divTask);
  //^ add p to div task 
  divTask.appendChild(p);
  //^ add all div button to div task 
  divTask.appendChild(divButton);
  //^ add btn modifie to div buttons
  divButton.appendChild(btnModifie);
  btnModifie.appendChild(modifieIcon);
  //^ add btn delete to div buttons
  divButton.appendChild(btnDelete);
  btnDelete.appendChild(deleteIcon);
  //^ add btn done to div buttons
  divButton.appendChild(btnDone);
  btnDone.appendChild(doneIcon);
  // create content of button
  p.textContent = prompt("Saisir ton task ici:");
}


//delete task function 
function deleteTask(deleteBtn){
    let taskDiv = deleteBtn.parentElement.parentElement.parentElement;
    taskDiv.remove();
}

//task done function 
function done(doneBtn){
  let taskDiv = doneBtn.parentElement.parentElement.parentElement;
  taskDiv.classList.toggle("bg-green");
}

//task modify function
function modify(modifyBtn){
  let newTask = prompt("Ajouter ton modification?");
  let p = modifyBtn.parentElement.parentElement.parentElement.firstChild;
  p.textContent = newTask;
}