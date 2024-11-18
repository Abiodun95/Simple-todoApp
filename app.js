const todoInput = document.getElementById('todo-input');

const addTodoButton = document.getElementById('add-todo-button');

const todoList = document.getElementById('todo-list');

let todos = [];

addTodoButton.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        addTodo();
    }
});


function addTodo(){
   const todoText  = todoInput.value.trim();
   if (todoText !==""){
    const todo = {
        text: todoText,
        comleted: false
    };
todos.push(todo);
todoInput.value = "",
renderTodoList();
   }
}

function renderTodoList(){
    todoList.innerHTML ="";
    todos.forEach((todo, index) =>{
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.textContent =todo.text;
        todoItem.addEventListener('click',() =>{
            todo.completed = !todo.completed;
            renderTodoList();
        });

if (todo.completed){
    todoItem.classList.add('completed')
}

const deleteButton = document.createElement('button')
deleteButton.textContent = 'Delete'
deleteButton.addEventListener('click', ()=>{
    todo.splice(index, 1);
    renderTodoList();
}); 

    });
 
}


