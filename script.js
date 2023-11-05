let num_list = 0

function Adicionar() {
    let input = window.document.getElementById('textoinput');
    let tarefa = input.value;
    let ul = window.document.getElementById('todoul');
    ul.innerHTML +=
        `
    <li id="todo-${num_list}" class="todoli">
    <input type="checkbox" name="feito" id="feito-${num_list}" onchange="riscarTexto(this.id)">
    <div class="p-todo">
    <p id="p-${num_list}">${tarefa}</p>
    </div>
    <button type="button" class="btn" onclick="Editar(this.id)" id="${num_list}">Editar</button>
    <button type="button" class="btn" onclick="Excluir(this.id)" id="${num_list}">Excluir</button>
    </li>
    `;
    num_list++;
    input.value = "";
}

function Excluir(id) {
    let index = id;
    window.document.getElementById(`todo-${index}`).remove();
}

function Editar(id) {
    let index = id;
    let edição = window.prompt("Escreva a nova tarefa!!!");
    let p = window.document.getElementById(`p-${index}`);
    p.innerHTML = edição;
}

function riscarTexto(id) {
    let index = id.split('-')[1];
    let p = window.document.getElementById(`p-${index}`);
    let checkbox = window.document.getElementById(`feito-${index}`);
    if (checkbox.checked) {
        p.style.textDecoration = "line-through";
    } else {
        p.style.textDecoration = "none";
    }
}

function Pesquisar() {
    let termoDePesquisa = document.getElementById('pesquisarinput').value.toLowerCase();
    let input = document.getElementById('pesquisarinput');
    let tarefas = document.getElementsByClassName('todoli');

    for (let i = 0; i < tarefas.length; i++) {
        let tarefa = tarefas[i].getElementsByTagName('p')[0];
        if (tarefa) {
            let texto = tarefa.textContent || tarefa.innerText;
            if (texto.toLowerCase().indexOf(termoDePesquisa) > -1) {
                tarefas[i].style.display = "";
            } else {
                tarefas[i].style.display = "none";
            }
        }
    }
    input.value = "";
}

function FiltrarConcluidas() {
    let tarefas = document.getElementsByClassName('todoli');

    for (let i = 0; i < tarefas.length; i++) {
        let checkbox = tarefas[i].getElementsByTagName('input')[0];
        if (checkbox.checked) {
            tarefas[i].style.display = "";
        } else {
            tarefas[i].style.display = "none";
        }
    }
}

function FiltrarNaoConcluidas() {
    let tarefas = document.getElementsByClassName('todoli');

    for (let i = 0; i < tarefas.length; i++) {
        let checkbox = tarefas[i].getElementsByTagName('input')[0];
        if (!checkbox.checked) {
            tarefas[i].style.display = "";
        } else {
            tarefas[i].style.display = "none";
        }
    }
}

function MostrarTodas() {
    let tarefas = document.getElementsByClassName('todoli');

    for (let i = 0; i < tarefas.length; i++) {
        tarefas[i].style.display = "";
    }
}