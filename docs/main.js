
// SAVE NAMES

const saveNameBtn = document.getElementById("saveNameBtn");
const nameOutputDiv = document.getElementById("name_output_div");

saveNameBtn.onclick = function () {
  const user_input_names = document.getElementById("user_input_names").value;
  const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
  nameList.push(user_input_names);
  window.localStorage.setItem("nameList", JSON.stringify(nameList));
  renderNames();
};

function renderNames () {
  const nameListJSON = window.localStorage.getItem("nameList");
  const nameList = JSON.parse(nameListJSON) || [];
  nameOutputDiv.innerHTML = "";
  for (const user_input_names of nameList) {
    nameOutputDiv.innerHTML += `<div class="output_card">${user_input_names}</div>`;
  }
}

// SAVE TASKS

const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskOutputDiv = document.getElementById("task_output_div");

saveTaskBtn.onclick = function () {
  const user_input_tasks = document.getElementById("user_input_tasks").value;
  const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
  taskList.push(user_input_tasks);
  window.localStorage.setItem("taskList", JSON.stringify(taskList));
  renderTasks();
};

function renderTasks () {
  const taskListJSON = window.localStorage.getItem("taskList");
  const taskList = JSON.parse(taskListJSON) || [];
  taskOutputDiv.innerHTML = "";
  for (const user_input_tasks of taskList) {
    taskOutputDiv.innerHTML += `<div id="task_card" class="output_card" onclick="displayModal()">${user_input_tasks}</div>`;
  }
}

// CLICK ON TASK TO ASSIGN MEMBER

// let taskCard = document.getElementById("task_card");
let modalContentBox = document.getElementById("modal-content");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function displayModal () {
  modal.style.display = "block";
  const nameListJSON = window.localStorage.getItem("nameList");
  const nameList = JSON.parse(nameListJSON) || [];
  modalContentBox.innerHTML = "";
  for (const user_input_names of nameList) {
    modalContentBox.innerHTML += `<div class="output_card">${user_input_names}</div>`;
  }
}

/* span.onclick = function() {
  modal.style.display = "none";
}; */

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// CLEAR LOCAL STORAGE AND OUTPUT

const clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = function () {
  window.localStorage.clear();
  nameOutputDiv.innerHTML = "";
  taskOutputDiv.innerHTML = "";
};
