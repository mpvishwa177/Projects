let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // gets the previously saved task from browser, the value will be in string and parse will convert it into js object, [] returns if no value is present

// Save tasks
function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks)); // converts js object into string, saves the string into storage
}

// Add task
function addTask(){ // this runs when user adds a task

const input = document.getElementById("taskInput"); // finds HTML element with id taskinput
const text = input.value.trim(); // gets user text and trims whitespaces

if(!text){ // if tex is empty shows the alert and stops the function
alert("Enter a task");
return;
}

//creating task object
const task = {
id: Date.now(),
text: text,
completed: false // default
};

tasks.push(task);

saveTasks(); // stores the updated tasks
renderTasks(); // UI to show the task

input.value=""; //resets input box
}

// Toggle completed
function toggleTask(id){ // runs when checkbox is clicked

tasks = tasks.map(task => { //creates new object

if(task.id === id){
task.completed = !task.completed;
}

return task; //returned to new array

});

saveTasks();
renderTasks();

}

// Delete task
function deleteTask(id){

tasks = tasks.filter(task => task.id !== id);

saveTasks();
renderTasks();

}

// Update statistics
function updateStats(){ // calculates completed, pending and progress bar

let completed = tasks.filter(t => t.completed).length; //filters the tasks
let pending = tasks.length - completed;

document.getElementById("completedCount").textContent = completed; //Displays completed tasks
document.getElementById("pendingCount").textContent = pending; // Displays pending tasks

let progress = tasks.length ? (completed / tasks.length) * 100 : 0; //calculation

document.getElementById("progressBar").style.width = progress + "%"; //progress bar fills

}

// Render tasks
function renderTasks(){ //draws task on screen

const list = document.getElementById("taskList"); //lists the tasks

list.innerHTML=""; //clears previous tasks before rendering again

tasks.forEach(task => { // runs for each task

const li = document.createElement("li"); //creating list element

// adding HTML inside list
li.innerHTML = `
<div style="display:flex;align-items:center;gap:10px;">
<input type="checkbox"
${task.completed ? "checked" : ""} 
onclick="toggleTask(${task.id})">

<span class="${task.completed ? 'completed':''}">
${task.text}
</span>
</div>

<button class="delete-btn"
onclick="deleteTask(${task.id})">
Delete
</button>
`;

//adds list to ul
list.appendChild(li);

});

//counts and progress
updateStats();

}

// Load tasks
renderTasks(); //loads automatically