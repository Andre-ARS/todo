let button = document.getElementById('criar-tarefa')
let list  = document.getElementById("lista-tarefas")
let input = document.getElementById("texto-tarefa")

function addOn() {
   let listItem = document.createElement('li');

   listItem.innerText = input.value;
   list.appendChild(listItem);
   input.value = ''
}