const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnAdicionarTarefa = document.querySelector(".adicionar");
const listTarefas = document.querySelector(".tarefas");
let taskId = 0;

function criaLista(taskId) {
  const li = document.createElement('li');
  li.id = `task-${taskId}`;
  return li;
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaApagar(li) {
  const btnApagar = document.createElement("button");
  btnApagar.innerText = "Apagar";
  btnApagar.setAttribute('class', 'apagar');

  btnApagar.addEventListener('click', function() {
    li.remove();
  });

  return btnApagar;
}

function criaTarefa(userTextInput) {
  const li = criaLista(taskId);
  li.innerHTML = userTextInput;

  const btnApagar = criaApagar(li);
  li.appendChild(btnApagar);

  listTarefas.appendChild(li);

  limpaInput();
  taskId++;
}

btnAdicionarTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});