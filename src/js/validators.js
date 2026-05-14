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

  if (campo.id === "idade") {
    return validarIdade(valor);
  }

  if (campo.id === "cpf") {
    return validarCpf(valor);
  }

  if (campo.id === "cep") {
    return validarCep(valor);
  }

  if (campo.id === "telefoneFiliacao1") {
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

  const anoLetivo = hoje.getFullYear();
  const dataLimiteParaCompletarDoisAnos = new Date(anoLetivo - 2, 11, 31);

  return dataInformada > dataLimiteParaCompletarDoisAnos;
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
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

function validarIdade(idade) {
  const idadeNumero = Number(idade);

  return idadeNumero >= 1 && idadeNumero <= 14;
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

function criarDataLocal(data) {
  return new Date(`${data}T00:00:00`);
}