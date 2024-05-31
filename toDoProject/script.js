let toDoList = [];
let innerHTML = '';
let curTask = '';

document.querySelector('.yourTasks').innerHTML = innerHTML;


function input() {
  
  let inputElement = document.querySelector('.input');
  
  toDoList.push(inputElement.value)

  inputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  let toDoHTML = '';
  let currentTask;

  for (let i = 0; i < toDoList.length; i++) {
    currentTask = toDoList[i];
    toDoHTML += `<p>${currentTask}</p>`;
  }

  document.querySelector('.yourTasks').innerHTML = toDoHTML
}


function keyDown(key) {
  if (key == "Enter") {
    input();
  }
}