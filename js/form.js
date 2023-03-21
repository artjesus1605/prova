let botaoAdicionar = document.querySelector('#adicionar-tarefa')
botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let tarefa = obterValoresDoForm(form)

    let erros = validaTarefa(tarefa)

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }
    

    adicionaTarefaNaTabela(tarefa)

    let mensagemErro = document.querySelector("#mensagens-erro")
    mensagemErro = ''

    let contador = document.querySelectorAll('.tarefa').length

    document.querySelector('.total').textContent = contador
    let num = []

    Number(num)

    let total = 0

    Number(total)

    for (let i = 1; i <= contador; i++) {

        num.push = Number(document.querySelector('.total').textContent)

        total = total + num[i]

        console.log(total)

       
    }


    //-------------------

})

function validaTarefa(tarefa) {
    let erros = []

    if (tarefa.tarefa.length == 0) {
        erros.push('O nome não pode estar em branco')
    }
    if (tarefa.data_in.length == 0) {
        erros.push('A data de início não pode estar em branco')
    }
    if (tarefa.data_cl.length == 0) {
        erros.push('O data de conclusão não pode estar em branco')
    }
    if (tarefa.responsavel.length == 0) {
        erros.push('O nome do responsável não pode estar em branco')
    }
    return erros
}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaTarefaNaTabela(tarefa) {
    let tarefaTr = montarTr(tarefa)
    let tabela = document.querySelector('#tabela-tarefas')

    tabela.appendChild(tarefaTr)
}

function montarTr(tarefa) {
    let tarefaTr = document.createElement('tr')
    tarefaTr.classList.add('tarefa')

    tarefaTr.appendChild(montarTd(tarefa.tarefa, 'info-tarefa'))
    tarefaTr.appendChild(montarTd(tarefa.data_in, 'info-inicio'))
    tarefaTr.appendChild(montarTd(tarefa.data_cl, 'info-conclusão'))
    tarefaTr.appendChild(montarTd(tarefa.responsavel, 'info-responsavel'))
    tarefaTr.appendChild(montarTd(tarefa.status, 'status'))
    tarefaTr.appendChild(apagarTr(tarefa.apagar))
  

    return tarefaTr
}

function montarTd(dado, classe) {
    //criando um elemeto td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let tarefa = {
        tarefa: form.tarefa.value,
        data_in: form.data_in.value,
        data_cl: form.data_cl.value,
        responsavel: form.responsavel.value,
        status:form.status.value
        
    }
    return tarefa
}