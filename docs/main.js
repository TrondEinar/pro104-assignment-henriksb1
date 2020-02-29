// javascript

// Hei hei, #test

// Elements 

var input_user_element = document.querySelector("[name='input_user']");
var input_user_submit_element = document.getElementById('input_user_submit');

var input_task_name_element = document.querySelector("[name='input_task_name']");
var input_task_description_element = document.querySelector("[name='input_task_description']");
var input_task_submit_element = document.getElementById('input_task_submit');

// Functions

function input_user_submit_clicked() { // Funksjon for � legge til ny "user"
    current_users = JSON.parse(window.localStorage.getItem('users')) || []; // Henter alle de lagrede brukerene og legger de inn i et array(current_users)
    current_users.push(input_user_element.value); // Legger til den nye brukeren til array(curent_users)
    window.localStorage.setItem('users', JSON.stringify(current_users)); // Lagrer til localStorage
    update_view();
}

function input_task_submit_clicked() { // Funksjon for � legge til ny "task"
    current_tasks = JSON.parse(window.localStorage.getItem('tasks')) || []; // Henter alle lagrede "tasks" og legger de inn i et array(current_tasks)

    new_task_name = input_task_name_element.value;
    new_task_description = input_task_description_element.value;
    new_task_object = { new_task_name, new_task_description };

    current_tasks.push(new_task_object);

    window.localStorage.setItem('tasks', JSON.stringify(current_tasks)); // Lagrer til localStorage
    update_view();
}

function update_view() { // Funksjon for � oppdatere det som syntes p� siden.
    const users_JSON = window.localStorage.getItem('users');
    const tasks_JSON = window.localStorage.getItem('tasks');

    const users_parsed = JSON.parse(users_JSON);
    const tasks_parsed = JSON.parse(tasks_JSON);

    console.log("Users: " + users_JSON);
    console.log("Tasks: " + tasks_JSON);
}


// Set onClick()

input_user_submit_element.onclick = input_user_submit_clicked;
input_task_submit_element.onclick = input_task_submit_clicked;

update_view(); // Run on page load


// WEeeeenda en test fra Visual