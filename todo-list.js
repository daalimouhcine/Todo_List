//VARIABLES ...
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const listContainer = document.getElementById("todo-list");


//EVENTS ...
todoButton.addEventListener("click", addTodoList);



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
    listContainer.appendChild(todo);

    //ADD li ...
    const todoList = document.createElement("li");
    todoList.classList.add("todo-list");
    todoList.innerText = todoInput.value;
    //append li to div ...
    todo.appendChild(todoList);

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

        //Buttons events ...
        todo.addEventListener("click", deleteCheck);
    }


}

function deleteCheck(e) {
    //wich one click on ...
    const item = e.target;
    const parent = item.parentNode;

    //check if the click is on check or delete button ...
    if(item.classList[0] === "check-btn") {
        parent.classList.toggle("checked"); 
    } else if(item.classList[0] === "trash-btn") {
        parent.classList.add("ani-remo");
        parent.addEventListener("transitionend" , function(){
            parent.remove();
        })
    }

}