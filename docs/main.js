
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

// CLICK ON TASK TO GET MODAL WITH NAMES

let modalContentOutput = document.getElementById("modal_content_output");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let modalQuestion = document.getElementById("modal-question");

function displayModal () {
  modal.style.display = "block";
  const nameListJSON = window.localStorage.getItem("nameList");
  const nameList = JSON.parse(nameListJSON) || [];
  modalContentOutput.innerHTML = "";
  if (nameList.length > 0) {
    for (const user_input_names of nameList) {
      modalContentOutput.innerHTML += `<div id="name_card" class="output_card" onclick="addToTask()">${user_input_names}</div>`;
    }
  } else {
    modalQuestion.style.display = "none";
    modalContentOutput.innerHTML = `<div>Add some names first, you silly little goose!</div>`;
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

// CLICK ON NAME IN MODAL TO ADD TO TASKS

function addToTask () {
  alert("En sen formiddag løper hunder fritt i Stensparken hundepark. Det er gjørmete, men det stopper ikke hundene fra å hoppe og leke i gjørmen. Hundeeierne i parken har fått med seg nyheten. Fra 1. april skal hundeparken stenges. Dermed kan ikke hundene lenger løpe fritt i et inngjerdet område. Bydelsutvalget har ikke funnet et alternativt sted for en hundepark. – Jeg blir flau på vegne av bydelen, sier Aurora Setsaas, mens hunden hennes Hugo leker med de andre hundene. Som mange andre bruker de hundeparken daglig. For henne er Stensparken hundepark et verdifullt sted for hundene og miljøet. – Det er mange i området med synsvansker som bruker parken for å la hundene få slappe av, fortsetter Setsaas.");
}

// CLEAR LOCAL STORAGE AND OUTPUT

const clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = function () {
  window.localStorage.clear();
  nameOutputDiv.innerHTML = "";
  taskOutputDiv.innerHTML = "";
};
