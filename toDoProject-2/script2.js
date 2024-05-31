// 1. input -> click -> the line will appear; 
// 2. the name in the input should dissappear
// 3. the name should be entered by enterer
// 

let tasks = [];
let nameTask;
let dateTask;
let outputHTML = '';

function keyEvent(key){
  if (key == 'Enter'){
    addTask();
  }
}


// clear input
// remember this task
// add to the array
function addTask() {
  nameTask = document.querySelector('.input').value;
  dateTask = document.querySelector('.date').value;

  tasks.push({
    nameTask,
    dateTask,
  });

  console.log(tasks);
  document.querySelector('.input').value = '';

  outputTask();
}

function outputTask(){

  outputHTML = '';
  for (let i = 0; i < tasks.length; i++){

    outputHTML += `<p class="task">${tasks[i].nameTask} ${tasks[i].dateTask}<button class='delete'>Delete</button></p>`;
  }
  
  document.querySelector('.existingTask').innerHTML = outputHTML;
}