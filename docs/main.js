// javascript
//
// For Arbeidskrav i Webprosjekt V2020
//
// Av Brage Svensli, Henrik Bråthen, Eirik Bjørøen, Torstein Ensrud, Knut Heggdal.
//



// --Elements-- 

// Input og knapp for "user"
var input_user_element = document.querySelector("[name='input_user']");
var input_user_submit_element = document.getElementById('input_user_submit');

// Input og knapp for "task"
var input_task_name_element = document.querySelector("[name='input_task_name']");
var input_task_description_element = document.querySelector("[name='input_task_description']");
var input_task_submit_element = document.getElementById('input_task_submit');

// --Functions--

// Funksjon for � legge til ny "user"
function input_user_submit_clicked() {
    // Henter alle de lagrede brukerene og legger de inn i et array(current_users)
    current_users = JSON.parse(window.localStorage.getItem('users')) || [];

    // Legger til den nye brukeren til array(curent_users)
    current_users.push(input_user_element.value);

    // Lagrer til localStorage som JSON
    window.localStorage.setItem('users', JSON.stringify(current_users));

    // Oppdater og lag nye diver
    update_view();
}

// Funksjon for � legge til ny "task"
function input_task_submit_clicked() { 
    // Henter alle lagrede "tasks" og legger de inn i et array(current_tasks)
    current_tasks = JSON.parse(window.localStorage.getItem('tasks')) || [];

    // Definer variabler for ny "task"
    task_name = input_task_name_element.value;
    task_description = input_task_description_element.value;
    new_task_object = { task_name, task_description };
    
    // Legg til nytt "task"-objekt i array(current_tasks)
    current_tasks.push(new_task_object);
    console.log("Adding task: " + new_task_object['task_name'] + new_task_object['task_description']);

    // Lagrer til localStorage
    window.localStorage.setItem('tasks', JSON.stringify(current_tasks));

    // Oppdater og lag nye diver
    update_view();
}

function update_view() { // Funksjon for � oppdatere det som syntes p� siden.
    const users_JSON = window.localStorage.getItem('users');
    const tasks_JSON = window.localStorage.getItem('tasks');

    const users_parsed = JSON.parse(users_JSON);
    const tasks_parsed = JSON.parse(tasks_JSON);

    console.log("Users: " + users_JSON);
    console.log("Tasks: " + tasks_JSON);

    // Her må det ligge kode for å generere nye diver

    // Alternativt kan denne funksjonen fjernes og funksjonliteten flyyttes til input_task_submit_clicked() og input_users_submit_clicked()
}


// Set onClick()
input_user_submit_element.onclick = input_user_submit_clicked;
input_task_submit_element.onclick = input_task_submit_clicked;

// Run on page load
update_view();
