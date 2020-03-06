













// h2 - Used for Users(name) and Tasks(name)
// h3 - Used for "Members(name) in the member select window for each task"





// SAVE NAMES

const saveNameBtn = document.getElementById("saveNameBtn");
const nameOutputDiv = document.getElementById("name_output_div");

saveNameBtn.onclick = function () {
  var user_input_names = document.getElementById("user_input_names");
  var nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
  if ( nameList[nameList.length-1] == undefined) {
    var name_id = 0;
  } else {
    var name_id = parseInt(nameList[nameList.length-1]['name_id']) +1;
  }
  var name_text = user_input_names.value;
  var user = { name_id, name_text };
  console.log(user);
  nameList.push(user);
  window.localStorage.setItem("nameList", JSON.stringify(nameList));
  renderNames();
  renderTasks();
};

function renderNames () {
  const nameListJSON = window.localStorage.getItem("nameList");
  const nameList = JSON.parse(nameListJSON) || [];
  nameOutputDiv.innerHTML = "";
  for (var user_input_names in nameList) {
    // nameOutputDiv.innerHTML += `<div class="output_card_name">${user_input_names}</div>`;
    // Create main wrapper
    var new_name_div = document.createElement('div');
    new_name_div.className = 'output_card_name';
    // Create text element and fill from localStorage + Append to main wrapper
    var new_name_text = document.createElement('h2');
    new_name_text.innerHTML = nameList[user_input_names]['name_text'];
    new_name_div.appendChild(new_name_text);
    // Create delete button + Append to main wrapper
    var new_name_delete_box = document.createElement('div');
    new_name_delete_box.className = 'card_delete_box';

    var new_name_delete = document.createElement('div');
    new_name_delete.className = 'card_delete';
    new_name_delete.onclick = function() {
      var name_list = JSON.parse(window.localStorage.getItem('nameList')) || []; // Read
      if (this.style.backgroundColor == 'red') { // Delete from localStorage
        for (var x in name_list) {
          if (name_list[x]['name_text'] == this.parentNode.parentNode.firstElementChild.innerHTML) {
            name_list.splice(x, 1);
            window.localStorage.setItem('nameList', JSON.stringify(name_list)); // Save
            renderTasks();
          }
        }
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
      } else { // Change color if not yet changed.
        this.style.backgroundColor = 'red';
        this.innerHTML = '<p>Sikker?</p>'
        window.localStorage.setItem('nameList', JSON.stringify(name_list)); // Save
      }
      
    };
    new_name_delete_box.appendChild(new_name_delete);
    new_name_div.appendChild(new_name_delete_box);

    // Append to name_output, before current names.
    nameOutputDiv.insertBefore(new_name_div, nameOutputDiv.childNodes[0])
  }
}

// SAVE TASKS

const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskOutputDiv = document.getElementById("task_output_div");
const nameListJSON = window.localStorage.getItem("nameList");
const nameList = JSON.parse(nameListJSON) || [];

saveTaskBtn.onclick = function () {
  var task_input_tasks = document.getElementById("user_input_tasks");
  var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
  if ( taskList[taskList.length-1] == undefined) {
    var task_id = 0;
  } else {
    var task_id = parseInt(taskList[taskList.length-1]['task_id']) +1;
  }
  var task_text = task_input_tasks.value;
  var task_members = [];
  var task = { task_id, task_text, task_members };
  taskList.push(task);
  window.localStorage.setItem("taskList", JSON.stringify(taskList));
  renderTasks();
};

function renderTasks () {
  const nameList = JSON.parse(window.localStorage.getItem('nameList')) || []; 
  const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
  taskOutputDiv.innerHTML = "";
  for (const i in taskList) {
    /*taskOutputDiv.innerHTML += `<div class="output_card_task">${user_input_tasks}</div>`;*/

    // Create main wrapper
    var new_task_div = document.createElement('div');
    new_task_div.className = 'output_card_task';
    new_task_div.onclick = function() {
      console.log(this.style.height);
      if (this.style.height == '') {
        this.style.height = '200px';
      } else {
        this.style.height = '';
      }
    }
    // Create text element and fill from localStorage + Append to main wrapper
    var new_task_text = document.createElement('h2');
    new_task_text.innerHTML = taskList[i]['task_text'];
    new_task_div.appendChild(new_task_text);
    // Create dummy fill description
    var new_task_dummy_fill = document.createElement('p');
    new_task_dummy_fill.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do< eiusmod tempor incididunt ut labore et dolore magna aliqua. <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    new_task_div.appendChild(new_task_dummy_fill);
    // Create delete button + Append to main wrapper
    var new_task_delete_box = document.createElement('div');
    new_task_delete_box.className = 'card_delete_box';
    var new_task_delete = document.createElement('div');
    new_task_delete.className = 'card_delete';
    new_task_delete.onclick = function() {
      var task_list = JSON.parse(window.localStorage.getItem('taskList')) || []; // Read
      if (this.style.backgroundColor == 'red') { // Delete from localStorage
        for (var x in task_list) {
          if (task_list[x]['task_text'] == this.parentNode.parentNode.firstElementChild.innerHTML) {
            task_list.splice(x, 1);
          }
        }
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
      } else { // Change color if not yet changed.
        this.style.backgroundColor = 'red';
        this.innerHTML = '<p>SLETT?</p>'
      }
      window.localStorage.setItem('taskList', JSON.stringify(task_list)); // Save
    };
    new_task_delete_box.appendChild(new_task_delete);
    new_task_div.appendChild(new_task_delete_box);
    // Create member select wrapper
    new_task_member_select = document.createElement('div');
    new_task_member_select.className = 'output_card_task_members';
    // Append all members to select wrapper
    for (var x in nameList) {
      var new_member = document.createElement('div');
      new_member.className = 'card_task_member';
      var new_member_name = document.createElement('h3');
      new_member_name.innerHTML = nameList[x]['name_text'];
      new_member.appendChild(new_member_name);
      new_member.onclick = function() { // onlick for adding members to the parent task
        var name_list = JSON.parse(window.localStorage.getItem('nameList')) || []; 
        var task_list = JSON.parse(window.localStorage.getItem("taskList")) || [];
        for (var i in task_list) {
          console.log(this.parentNode.parentNode.firstElementChild.innerHTML);
          console.log(task_list[i]['task_text']);
          if (task_list[i]['task_text'] == this.parentNode.parentNode.firstElementChild.innerHTML) {
            task_list[i]['task_members'].push(this.firstElementChild.innerHTML);
          }
        }
        window.localStorage.setItem('taskList', JSON.stringify(task_list));
        console.log(task_list);
        alert(this.childNodes[0].innerHTML + " er lagt til oppgaven: " +  this.parentNode.parentNode.firstElementChild.innerHTML);
      }
      new_task_member_select.appendChild(new_member);
    }
    new_task_div.appendChild(new_task_member_select);
    // Append to task_output, before current tasks.
    taskOutputDiv.insertBefore(new_task_div, taskOutputDiv.childNodes[0])

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


// RUN ON LOAD
renderNames();
renderTasks();
