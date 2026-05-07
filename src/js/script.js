const matricula = document.getElementById('folhaDeMatricula')

matricula.addEventListener('submit', finalizarMatricula)

function finalizarMatricula(event) {
    event.preventDefault()

    const nomeAluno = document.getElementById('nomeAluno')
    const dataNascimento = document.getElementById('dataNascimento')
    const registroNascimento = document.getElementById('registroNascimento')

    const nomeAlunoValido = validarCampoObrigatorio(nomeAluno)
    const dataNascimentoValida = validarCampoObrigatorio(dataNascimento)
    const registroNascimento = validarCampoObrigatorio(registroNascimento)

    if (nomeAlunoValido && dataNascimentoValida && registroNascimento){
        console.log('matricula pode ser finalizada');
        
    }else{
        console.log('existe campos obrigatórios pendentes');        
    }
    
    
}


function validarCampoObrigatorio(campo){
    const campoValor = campo.value.trim();
    const campoGrupo = campo.closest('.form-group')
    

    if(campoValor === '') {
        campoGrupo.classList.add('is-invalid')
        campoGrupo.classList.remove('is-valid')
        return false
    } else {
        campoGrupo.classList.add('is-valid')
        campoGrupo.classList.remove('is-invalid')
        return true
    }

}