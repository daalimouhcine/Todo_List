//VARIABLES ...
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");


//EVENTS ...
document.addEventListener("DOMContentLoaded" , returnStorage);
todoButton.addEventListener("click", addTodoList);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click",filter)



//FUNCTIONS ...
function addTodoList(event) {
    event.preventDefault();

    if(todoInput.value === "") {
        alert("the input is empty plez enter samthing");
    } else {
        
    //ADD div ...
    const todo = document.createElement("div");
    todo.classList.add("todo");
    //append div to div-container ...
    todoList.appendChild(todo);

    //ADD li ...
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-list");
    newTodo.innerText = todoInput.value;
    //append li to div ...
    todo.appendChild(newTodo);

    //STORE the todo in LOCALSTORAGE ...
    todoStorage(todoInput.value);


    //ADD check button ...
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add("check-btn");
    
    //ADD trash button ...
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");

    //append buttons to div ...
    todo.appendChild(checkBtn);
    todo.appendChild(trashBtn);

    //Return the todoInput empty ...
    todoInput.value = "";

    }


}

function deleteCheck(e) {
    //wich one click on ...
    const item = e.target;
    const parent = item.parentNode;

    //check if the click is on check or delete button ...
    if(item.classList[0] === "check-btn") {
        parent.classList.toggle("completed"); 
    } else if(item.classList[0] === "trash-btn") {
        parent.classList.add("fall");
        deleteStorage(parent);
        parent.addEventListener("transitionend" , function(){
            parent.remove();
        })
    }
}


function filter(e) {
    const item = todoList.childNodes;
    item.forEach(todo => {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

function todoStorage(item) {
    // CHECK ---- ar i already have localstorage?
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(item);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function returnStorage() {
        // CHECK ---- ar i already have localstorage?
        let todos;

        if(localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"))
        }

        todos.forEach(function(item) {
            
                //ADD div ...
                const todo = document.createElement("div");
                todo.classList.add("todo");
                //append div to div-container ...
                todoList.appendChild(todo);

                //ADD li ...
                const newTodo = document.createElement("li");
                newTodo.classList.add("todo-list");
                newTodo.innerText = item;
                //append li to div ...
                todo.appendChild(newTodo);

                //ADD check button ...
                const checkBtn = document.createElement("button");
                checkBtn.innerHTML = '<i class="fas fa-check"></i>';
                checkBtn.classList.add("check-btn");
                
                //ADD trash button ...
                const trashBtn = document.createElement("button");
                trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
                trashBtn.classList.add("trash-btn");

                //append buttons to div ...
                todo.appendChild(checkBtn);
                todo.appendChild(trashBtn);

        })
}


function deleteStorage(item) {
    // CHECK ---- ar i already have localstorage?
    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    const removeItem = item.children[0].innerText;
    todos.splice(todos.indexOf(removeItem),1);

    localStorage.setItem("todos", JSON.stringify(todos));
}