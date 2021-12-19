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
  for (let i = 0; i < tasks.length; i += 1) {
      document.getElementsByClassName('tasks')[i].style.backgroundColor = 'white'
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

document.getElementById("lista-tarefas").addEventListener('click', paintTask);

function completTask(event) {
   if (event.target.className === 'tasks') {
      event.target.className = 'completed tasks'
   } else {
      event.target.className = 'tasks'
   }
}

document.getElementById("lista-tarefas").addEventListener('dblclick', completTask);

