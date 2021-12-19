let button = document.getElementById('criar-tarefa')
let list  = document.getElementById("lista-tarefas")
let input = document.getElementById("texto-tarefa")
let tasks = document.getElementsByClassName('tasks')


function addOn() {
   let listItem = document.createElement('li');

   listItem.innerText = input.value;
   listItem.className = 'tasks'
   list.appendChild(listItem);
   input.value = ''
}

button.addEventListener('click', addOn)


function paintTask(event) {
   for (let index = 0; index < tasks.length; index += 1) {
      document.querySelectorAll('#lista-tarefas li')[index].className = 'tasks';
   } 

   event.target.className = 'selected tasks'
}

document.getElementById("lista-tarefas").addEventListener('click', paintTask);
