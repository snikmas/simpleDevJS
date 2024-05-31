let toDoList = [{
  name: 'de',
  date: 'de',
}];

let innerHTML = '';
let currentElement;
let currentDate;

let elementForHtml;
let dataForHtml;

function keyDown(key) {
  console.log('key functios is going')
  if (key == 'Enter'){
    addElementToList();
  } 
}

function addElementToList() {
  currentElement = document.querySelector('.input').value;
  currentDate = document.querySelector('.date').value;

  // toDoList.name.push(currentElement);
  // toDoList.date.push(currentDate);

  toDoList.push({
    element: currentElement,
    date: currentDate, // or just name, date, if the same names
  })

  currentElement = ''; // clear line
  renderToDoList();
}

function renderToDoList(){

  // 1. loop for render html text
  // 2. output this text

  for (let i = 0; i < toDoList.length; i++){

    // elementForHtml = toDoList[i].element;
    // dataForHtml = toDoList[i].data;

    // referenceToList = todolist[i] ???

    const {element, date} = toDoList[i];

    dataForHtml += `
    <p>${element} | ${date}</p>
    <button class="deleteButton" onclick="
      deleteElement(i) // or write here this function
    ">Delete</button>`;
  }

  innerHTML = dataForHtml;
  
}

function deleteElement(numOfElement){
  toDoList.splice({numOfElement}, 1);
}