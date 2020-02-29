// javascript


// Dummy localStorage




// Elements 

var input_user_element = document.querySelector("[name='input_user']");
var input_user_submit_element = document.getElementById('input_user_submit');

var input_task_name_element = document.querySelector("[name='input_task_name']");
var input_task_description_element = document.querySelector("[name='input_task_description']");
var input_task_submit_element = document.getElementById('input_task_submit');

// Functions

function input_user_submit_clicked() { // Funksjon for å legge til ny "user"
    current_users = JSON.parse(window.localStorage.getItem('users')) || []; // Henter alle de lagrede brukerene og legger de inn i et array(current_users)
    current_users.push(input_user_element.value); // Legger til den nye brukeren til array(curent_users)
    window.localStorage.setItem('users', JSON.stringify(current_users)); // Lagrer til localStorage
    update_view();
}

function input_task_submit_clicked() { // Funksjon for å legge til ny "task"
    current_tasks = JSON.parse(window.localStorage.getItem('tasks')) || []; // Henter alle lagrede "tasks" og legger de inn i et array(current_tasks)
    current_tasks.name.push(input_task_name_element.value);
    current_tasks.description.push(input_task_description_element.value);
    
    window.localStorage.setItem('tasks', JSON.stringify(current_tasks)); // Lagrer til localStorage
    update_view();
}

function update_view() { // Funksjon for å oppdatere det som syntes på siden.
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