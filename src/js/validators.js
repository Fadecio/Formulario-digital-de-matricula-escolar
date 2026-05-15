export function validarCampoEspecifico(campo) {
  const valor = campo.value.trim();

  if (valor === "") {
    return true;
  }

  if (campo.type === "email") {
    return validarEmail(valor);
  }

  if (campo.id === "dataNascimento") {
    return validarDataNascimento(valor);
  }

  if (campo.id === "cpf") {
    return validarCpf(valor);
  }

  if (campo.id === "cep") {
    return validarCep(valor);
  }

  if (campo.id.startsWith("telefoneFiliacao")) {
    return validarTelefone(valor);
  }

  return true;
}

export function verificarForaDaFaixaEtaria(dataNascimento) {
  if (!dataNascimento) {
    return false;
  }

  const dataInformada = criarDataLocal(dataNascimento);
  const hoje = new Date();

  hoje.setHours(0, 0, 0, 0);

  if (dataInformada > hoje) {
    return false;
  }

  const idade = calcularIdade(dataNascimento);

  if (idade > 14) {
    return true;
  }

  const anoLetivo = hoje.getFullYear();
  const dataLimiteParaCompletarDoisAnos = new Date(anoLetivo - 2, 11, 31);

  return dataInformada > dataLimiteParaCompletarDoisAnos;
}

export function verificarDataFutura(dataNascimento) {
  if (!dataNascimento) {
    return false;
  }

  const dataInformada = criarDataLocal(dataNascimento);
  const hoje = new Date();

  hoje.setHours(0, 0, 0, 0);

  return dataInformada > hoje;
}

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarDataNascimento(dataNascimento) {
  const dataInformada = criarDataLocal(dataNascimento);
  const hoje = new Date();

  hoje.setHours(0, 0, 0, 0);

  if (dataInformada > hoje) {
    return false;
  }

  return !verificarForaDaFaixaEtaria(dataNascimento);
}

function validarCpf(cpf) {
  const cpfLimpo = cpf.replace(/\D/g, "");

  return cpfLimpo.length === 11;
}

function validarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");

  return cepLimpo.length === 8;
}

function validarTelefone(telefone) {
  const telefoneLimpo = telefone.replace(/\D/g, "");

  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}

function calcularIdade(dataNascimento) {
  const nascimento = criarDataLocal(dataNascimento);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  const mesNascimento = nascimento.getMonth();
  const diaNascimento = nascimento.getDate();

  const aindaNaoFezAniversario =
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && diaAtual < diaNascimento);

  if (aindaNaoFezAniversario) {
    idade--;
  }

  return idade;
}

function criarDataLocal(data) {
  return new Date(`${data}T00:00:00`);
}