//^ LES VARIABLES POUR AJOUTER UN TITRE ET LE DIV
const inputTitle = document.getElementById("columnTitle");
const addColumnBtn = document.getElementById("addColumn");
const columnContainer = document.getElementById("columnContainer");

//!------------------------------------------------------------------

addColumnBtn.addEventListener("click", addDiv);

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

// an event listnener that listen to the click and add a task
document.addEventListener("click", e =>{
  // check if the clicked button is an add task
  if(e.target.className.includes("add-task")){
      addTask(e.target);
  }

}
)

// addtask function
function addTask(btn){
  let parentDiv = btn.parentElement;
  //create tags for the column
  let divTask = document.createElement("div");
  let h5 = document.createElement("h5");
  let divButton = document.createElement("div");
  let btnModifie = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnDone = document.createElement("button");
  let modifieIcon = document.createElement("i");
  let deleteIcon = document.createElement("i");
  let doneIcon = document.createElement("i");
  //add class to tags
  divTask.setAttribute("class", "d-flex align-items-center justify-content-between task rounded-3 px-2");
  divButton.setAttribute("class", "d-flex align-content-center");
  btnModifie.setAttribute("class", "mx-1 bg-transparent border-0 color-blue modify");
  btnDelete.setAttribute("class", "mx-1 bg-transparent border-0 color-red delete");
  btnDone.setAttribute("class","mx-1 p-1 rounded-2 border-0 bg-success text-white done");
  modifieIcon.setAttribute("class","fa-solid fa-pencil fa-2x");
  deleteIcon.setAttribute("class","fa-solid fa-trash fa-2x");
  doneIcon.setAttribute("class", "fa-solid fa-check text-white px-2");
  //append child to the column
  //^ add div task to the column
  parentDiv.appendChild(divTask);
  //^ add h5 to div task 
  divTask.appendChild(h5);
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
  h5.textContent = prompt("Saisir ton task ici:");
}
