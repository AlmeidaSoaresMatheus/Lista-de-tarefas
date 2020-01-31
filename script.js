let listElement = document.querySelector('#lista');

let inputEleemnt = document.querySelector('#input-txt');
inputEleemnt.focus(); 

let btnElement = document.querySelector('#btn-add');

let todos = JSON.parse(localStorage.getItem('list_todos'));
if (todos == null){
    todos == [];
} 

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){

        var todoElement = document.createElement('li');

          
        var todoText = document.createTextNode(todo);
        
        var divElement = document.createElement('div');
        var linkElement = document.createElement('a');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var iconElement = document.createElement('i');
               
        
        iconElement.classList = 'fas fa-trash';
        linkElement.appendChild(iconElement);
        divElement.appendChild(linkElement);

        todoElement.appendChild(todoText);
        todoElement.appendChild(divElement);
        listElement.appendChild(todoElement);
    }
}



renderTodos();

function addTodo(){
    var todoText = inputEleemnt.value;
    todos.push(todoText);

    inputEleemnt.value = '';
    inputEleemnt.focus();
 

    saveToStorage();
    renderTodos();
  
}

btnElement.addEventListener('click', () => addTodo());

function deleteTodo(pos) {
    todos.splice(pos, 1);
    saveToStorage();
    renderTodos();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

document.addEventListener('keypress', (e) => { 
    if(e.which === 13) addTodo();
    if(e.which === 9) inputEleemnt.focus(); 
}, false);

