let button = document.getElementById('criar-tarefa');
let list  = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let tasks = document.getElementsByClassName('tasks');


// Requisito 5
function addOn() {
   let listItem = document.createElement('li');

   listItem.innerText = input.value;
   listItem.className = 'tasks';
   list.appendChild(listItem);
   input.value = '';
}

button.addEventListener('click', addOn);


// Requisito 7
function paintTask(event) {
  for (let i = 0; i < tasks.length; i += 1) {
      document.getElementsByClassName('tasks')[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.getElementById("lista-tarefas").addEventListener('click', paintTask);


// Requisito 9
function completTask(event) {
   if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
   } else {
      event.target.classList.add('completed');
   }
}

document.getElementById("lista-tarefas").addEventListener('dblclick', completTask);


// Requisito 10
function eraser() {
   if (tasks.length > 0) {
      document.getElementById("lista-tarefas").innerHTML = '';
   }
}

document.getElementById('apaga-tudo').addEventListener('click', eraser);



// Requisito 11

// Requisitos 11 e 14 feitos com base na primeira resposta desse post no StackOverflow 
// https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom

function eraseCompleted() {
   let completed = document.getElementsByClassName('completed');

   while (completed[0]) {
      completed[0].parentElement.removeChild(completed[0]);
   }
}

document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);



// Requisito 12 - Bônus
function saver() {
   let saveList = document.getElementById('lista-tarefas').innerHTML;
   let stringfyed = JSON.stringify(saveList);

   localStorage.setItem('saveList', stringfyed);
}
                        
document.getElementById('salvar-tarefas').addEventListener('click', saver);


window.onload = function() {
   let storagedList = localStorage.getItem('saveList');
   let listParse = JSON.parse(storagedList);

   list.innerHTML = listParse;          
}





// Requisito 14
function eraseSelected() {
   let selected = document.getElementsByClassName('selected');

   while (selected[0]) {
      selected[0].parentElement.removeChild(selected[0]);
   }
}

document.getElementById('remover-selecionado').addEventListener('click', eraseSelected);