let todoList = [];
displayItems();


function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item: todoItem, duDate: tododate});
    inputElement.value = '';
    dateElement.value = '';
    
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';


    
 
    for(let i = 0; i < todoList.length; i++){
        // let item = todoList[i].item;
        // let duDate = todoList[i].duDate;

        let {item, duDate} = todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${duDate}</span>
        <button onclick="todoList.splice(${i}, 1); displayItems();" class="btn-delete">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}