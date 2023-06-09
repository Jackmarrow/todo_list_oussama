//^ LES VARIABLES POUR AJOUTER UN TITRE ET LE DIV
const inputTitle = document.getElementById("columnTitle");
const addColumnBtn = document.getElementById("addColumn");
const columnContainer = document.getElementById("columnContainer");
let dragged = null;
//!------------------------------------------------------------------

addColumnBtn.addEventListener("click", addDiv);
inputTitle.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addDiv();
  }
});

// an event listnener that listen to the click and add a task
document.addEventListener("click", (e) => {
  // check if the clicked button is an add task
  if (e.target.className.includes("add-task")) {
    addTask(e.target);
  }
  //delete the task from the column
  if (e.target.className.includes("delete")) {
    deleteTask(e.target);
  }
  //make the task on mode done
  if (e.target.className.includes("done")) {
    done(e.target);
  }
  //modifiy the task
  if (e.target.className.includes("modify")) {
    modify(e.target);
  }
  //take a task up
  if (e.target.className.includes("task-up")){
    goUp(e.target);
  }
  //take a task down
  if (e.target.className.includes("task-down")){
    goDown(e.target);
  }
});

//!------------------------------------------------------------------

function addDiv(e) {
  inputTitle.value = inputTitle.value.trim();
  // check if the input value is different than 0
  if (inputTitle.value.length != 0) {
    //create tags for the column
    let div = document.createElement("div");
    let button = document.createElement("button");
    let h1 = document.createElement("h1");
    //add class to tags
    div.setAttribute(
      "class",
      "bg-danger h-100 task-width rounded-3 d-flex flex-column align-items-center ms-4 me-4 p-4 dropzone"
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
    //call the drag event listener
    draggEvent();
  }
}

// addtask function
function addTask(btn) {
  let parentDiv = btn.parentElement;
  //create tags for the column
  let divTask = document.createElement("div");
  let p = document.createElement("p");
  let divButton = document.createElement("div");
  let btnModifie = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnDone = document.createElement("button");
  let btnUp = document.createElement("button");
  let btnDown = document.createElement("button");
  let modifieIcon = document.createElement("i");
  let deleteIcon = document.createElement("i");
  let doneIcon = document.createElement("i");
  let upIcon = document.createElement("i"); 
  let downIcon = document.createElement("i"); 
  //add class to tags
  divTask.setAttribute(
    "class",
    "d-flex align-items-center justify-content-between step rounded-3 p-2"
  );
  divTask.setAttribute("draggable", "true");
  divButton.setAttribute("class", "d-flex align-content-center");
  btnModifie.setAttribute("class", "mx-1 bg-transparent border-0 color-blue");
  btnDelete.setAttribute("class", "mx-1 bg-transparent border-0 color-red");
  btnDone.setAttribute(
    "class",
    "mx-1 px-1 rounded-2 border-0 bg-success text-white"
  );
  btnUp.setAttribute("class", "mx-1 bg-transparent border-0");
  btnDown.setAttribute("class", "mx-1 bg-transparent border-0");
  modifieIcon.setAttribute("class", "fa-solid fa-pencil fa-2x modify sizing");
  deleteIcon.setAttribute("class", "fa-solid fa-trash fa-2x delete sizing");
  doneIcon.setAttribute("class", "fa-solid fa-check text-white done sizing");
  downIcon.setAttribute("class", "fa-solid fa-arrow-down task-down sizing");
  upIcon.setAttribute("class", "fa-solid fa-arrow-up task-up sizing");
  p.setAttribute("class", "fs-5 mb-0");
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
  //^ add btn down for task
  divButton.appendChild(btnDown);
  btnDown.appendChild(downIcon);
  //^ add btn up for task
  divButton.appendChild(btnUp);
  btnUp.appendChild(upIcon);
  // create content of button
  let taskText = prompt("Saisir ton task ici:");
  while (taskText.length == 0) {
    taskText = prompt("Saisir ton task ici:");
  }
  p.textContent = taskText;
}

//delete task function
function deleteTask(deleteBtn) {
  let taskDiv = deleteBtn.parentElement.parentElement.parentElement;
  taskDiv.remove();
}

//task done function
function done(doneBtn) {
  let taskDiv = doneBtn.parentElement.parentElement.parentElement;
  taskDiv.classList.toggle("bg-green");
}

//task modify function
function modify(modifyBtn) {
  let newTask = prompt("Ajouter ton modification ici?");
  let p = modifyBtn.parentElement.parentElement.parentElement.firstChild;
  p.textContent = newTask;
}

// drag and drop event
function draggEvent() {
  let dropzone = document.querySelectorAll(".dropzone");
  console.log(dropzone);
  dropzone.forEach((zone) => {
    zone.addEventListener("dragstart", dragStart);
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", drop);
  });

  function dragStart(e) {
    dragged = e.target;
    e.dataTransfer.setData("text", "");
  }

  function dragOver(e) {
    if(e.target.className.includes("dropzone")){
      e.preventDefault()
    }
  }

  function drop(e) {
    e.target.appendChild(dragged);
  }
}

//go task up
function goUp(target){
  let parentDiv = target.parentElement.parentElement.parentElement.parentElement;
  let taskDiv = target.parentElement.parentElement.parentElement;
  if(taskDiv.previousElementSibling != null){
      if(taskDiv.previousElementSibling.className.includes("step")){
          parentDiv.insertBefore(taskDiv, taskDiv.previousElementSibling);
      }
  }
}

//go task down
function goDown(target){
  let parentDiv = target.parentElement.parentElement.parentElement.parentElement;
  let taskDiv = target.parentElement.parentElement.parentElement;
  if(taskDiv.nextElementSibling != null){
      if(taskDiv.nextElementSibling.className.includes("step")){
          console.log('Yes the next ele is target box');
          parentDiv.insertBefore(taskDiv, taskDiv.nextElementSibling.nextElementSibling);
      }
  } 
}