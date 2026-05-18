import {
  verificarDataFutura,
  verificarForaDaFaixaEtaria,
} from "./validators.js";

import {
  mostrarFeedbackDataFutura,
  mostrarFeedbackForaDaFaixaEtaria,
  limparFeedback,
} from "./feedback.js";

let ultimoErroDeIdade = null;

export function configurarIdadeAutomatica(
  campoDataNascimento,
  campoIdade,
  formFeedback,
  toastContainer,
) {
  campoDataNascimento.addEventListener("change", () => {
    atualizarIdade(
      campoDataNascimento,
      campoIdade,
      formFeedback,
      toastContainer,
    );
  });
}

function atualizarIdade(
  campoDataNascimento,
  campoIdade,
  formFeedback,
  toastContainer,
) {
  const dataNascimento = campoDataNascimento.value;

  if (!dataNascimento) {
    campoIdade.value = "";
    ultimoErroDeIdade = null;
    limparFeedback(formFeedback);
    return;
  }

  if (verificarDataFutura(dataNascimento)) {
    campoIdade.value = "";

    mostrarToastDeErroUmaVez("data-futura", () => {
      mostrarFeedbackDataFutura(formFeedback, toastContainer);
    });

    return;
  }

  campoIdade.value = calcularIdade(dataNascimento);

  if (verificarForaDaFaixaEtaria(dataNascimento)) {
    mostrarToastDeErroUmaVez("fora-faixa-etaria", () => {
      mostrarFeedbackForaDaFaixaEtaria(formFeedback, toastContainer);
    });

    return;
  }

  ultimoErroDeIdade = null;
  limparFeedback(formFeedback);
}

function mostrarToastDeErroUmaVez(tipoErro, callback) {
  if (ultimoErroDeIdade === tipoErro) {
    return;
  }

  ultimoErroDeIdade = tipoErro;
  callback();
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