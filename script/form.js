const $contatoInputNome = document.getElementById(`contatoInputNome`)
const $contatoInputEmail = document.getElementById(`contatoInputEmail`)
const $contatoInputTelefone = document.getElementById(`contatoInputTelefone`)
const $contatoInputMessage = document.getElementById(`contatoInputMessage`)
const $btn = document.getElementById(`btn`)

//presta atençao quando tiver(evento) uma ação sobre vocë
//quando o usuario enviar o submit executa uma função
btn.addEventListener(`click`, function (event) {
    event.preventDefault()//previne que evento padrao ocorre

    if (
        //value e a propriedade do campo
        $contatoInputNome.value === undefined ||
        $contatoInputNome.value === null ||
        $contatoInputNome.value === `` ||
        $contatoInputNome.value === ` `){

        $contatoInputNome.focus()
        alert("Digite um nome válido");

        return false
    }

    else if (
        $contatoInputEmail.value === undefined ||
        $contatoInputEmail.value === null ||
        $contatoInputEmail.value.trim === `` ||
        $contatoInputEmail.value === ` ` ||
        $contatoInputEmail.value.indexOf("@")== -1 ||
        $contatoInputEmail.value.indexOf(".") == -1) {
        $contatoInputEmail.focus()
        alert("Digite um email válido")

        return false
    }

    else if (
        $contatoInputTelefone.value === undefined ||
        $contatoInputTelefone.value === null ||
        $contatoInputTelefone.value.trim === `` ||
        $contatoInputTelefone.value === ` ` ||
        isNaN($contatoInputTelefone.value) ||
        $contatoInputTelefone.value.length < 9) {

        $contatoInputTelefone.focus()
        alert("Digite um Telefone válido")

        return false
    }
    else if (
        $contatoInputMessage.value === undefined ||
        $contatoInputMessage.value === null ||
        $contatoInputMessage.value.trim === `` ||
        $contatoInputMessage.value === ` ` ||
        $contatoInputMessage.value.length < 10) {

        $contatoInputMessage.focus()
        alert("Digite uma mensagem no mínimo 10 caracteres")

        return false
    }
    document.querySelector('form').submit()
    alert(`Todos os dados foram inseridos corretamente!`)


})