let listnum = 0

function Adicionar() {
    let tarefa = document.getElementById('input-adicionar').value;
    let tarefas = window.document.getElementById('tarefas-ul');
    tarefas.innerHTML += `
    <div class="tarefa" id="div-tarefa">
    <div class="tarefa-texto">
    <p>${tarefa}</p>
    </div>
    <div class="tarefa-acoes">
    <button class="button" onclick="excluirlista${listnum}">Editar</button>
    <button class="button" onclick="excluirlista${listnum}">Excluir</button>
    </div>
    </div>`;
    listnum++;
}

