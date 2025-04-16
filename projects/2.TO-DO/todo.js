//Defining the To-Do List
let todoList = [
  {
    item:'buy milk',
    dueDate: '4/4/2025'
  },
  {
    item:'go to sleep',
    dueDate: '5/4/2025'
  }
];
displayItems();
//Function to Add a To-Do
function addTodo(){
  if (todoItem === '') {
    alert('Please enter a valid task.');
    return;
}
  let inputElement = document.querySelector('#todo-input');//Finds the input box where the user types the task.
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;//Gets the text typed by the user.
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  console.log(todoItem);
  todoList.push(todoItem);//Adds the new task to the todoList array.
  inputElement.value = '';
  dateElement.value = '';
  
 displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');


 let newHtml ='';
  for(let i=0;i < todoList.length;i++){
    // let todoItem = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let{item, dueDate} = todoList[i];
    newHtml += `
    
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class = "btn-delete" onclick="todoList.splice(${i}, 1);displayItems();">Delete</button>
    
  `;  
 }
   containerElement.innerHTML = newHtml;
}
  