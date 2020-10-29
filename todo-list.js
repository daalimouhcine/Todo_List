const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");



//EVENTS ...
todoButton.addEventListener("click",addTodoList);
todoList.addEventListener("click",deleteCheck);






//FUNCTIONS ...
function addTodoList(event) {
    //STOP the refresh..
    event.preventDefault();

    //Create todo div ...
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create todo list ...
    const todo = document.createElement("li");
    todo.classList.add("todo-item");

    if(todoInput.value !== "") {
        todo.innerText = todoInput.value;
        
        //Append todo list to todo div ...
        todoDiv.appendChild(todo);

        //Creat check button ...
        const checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add("check-button");
        todoDiv.appendChild(checkButton);

        //Creat delete button ...
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-button");
        todoDiv.appendChild(trashButton);
        
        //Append all to todo-list ...
        todoList.appendChild(todoDiv);

        //Delete the input value ...
        todoInput.value = "";
    } else {
        alert("pleez inter in the input");
    }
}

function deleteCheck(e) {
    const item = e.target
    if(item.classList[0] === "trash-button") {
        const par = item.parentElement;
        par.classList.add("fall");
        par.addEventListener("transitionend" , function(){
            par.remove();
        })
    } else if (item.classList[0] === "check-button") {
        const par = item.parentElement;
        par.classList.toggle("checked")
    }
}
