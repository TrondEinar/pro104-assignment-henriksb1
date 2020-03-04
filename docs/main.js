
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
    taskOutputDiv.innerHTML += `<div class="output_card">${user_input_tasks}</div>`;
  }
}

// CLICK ON TASK TO ASSIGN MEMBER

// wtf



// CLEAR LOCAL STORAGE AND OUTPUT

const clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = function () {
  window.localStorage.clear();
  nameOutputDiv.innerHTML = "";
  taskOutputDiv.innerHTML = "";
};
