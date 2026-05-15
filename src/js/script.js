import {
  matricula,
  btnPrint,
  btnNovaMatricula,
  formFeedback,
  toastContainer,
  camposParaValidar,
  campoCpf,
  campoCep,
  campoDataNascimento,
  campoIdade,
  campoTelefoneFiliacao1,
  campoTelefoneFiliacao2,
} from "./elements.js";

import {
  configurarValidacaoEmTempoReal,
  validarFormulario,
} from "./formValidation.js";

import { configurarMascaras } from "./masks.js";

import {
  mostrarFeedbackSucesso,
  mostrarFeedbackErro,
  mostrarFeedbackForaDaFaixaEtaria,
  mostrarFeedbackDataFutura,
  mostrarFeedbackNovaMatricula,
  limparFeedback,
} from "./feedback.js";

import {
  verificarForaDaFaixaEtaria,
  verificarDataFutura,
} from "./validators.js";
import { focarPrimeiroCampoInvalido } from "./focus.js";
import { resetarFormulario } from "./formReset.js";
import { configurarImpressao } from "./print.js";
import { calcularIdadeAutomatica } from "./age.js";

iniciarAplicacao();

function iniciarAplicacao() {
  configurarEventosDoFormulario();

  configurarMascaras(
    campoCpf,
    campoCep,
    campoTelefoneFiliacao1,
    campoTelefoneFiliacao2,
  );

  calcularIdadeAutomatica(
    campoDataNascimento,
    campoIdade,
    formFeedback,
    toastContainer,
  );

  configurarImpressao(btnPrint, matricula);

  configurarValidacaoEmTempoReal(camposParaValidar, () => {
    limparFeedback(formFeedback);
  });
}

function configurarEventosDoFormulario() {
  matricula.addEventListener("submit", finalizarMatricula);

  btnNovaMatricula.addEventListener("click", iniciarNovaMatricula);
}

function finalizarMatricula(event) {
  event.preventDefault();

  const formularioValido = validarFormulario(camposParaValidar);

  if (formularioValido) {
    mostrarFeedbackSucesso(formFeedback, toastContainer);
    return;
  }

  if (dataNascimentoEstaNoFuturo()) {
    mostrarFeedbackDataFutura(formFeedback, toastContainer);
  } else if (criancaEstaForaDaFaixaEtaria()) {
    mostrarFeedbackForaDaFaixaEtaria(formFeedback, toastContainer);
  } else {
    mostrarFeedbackErro(formFeedback, toastContainer);
  }

  focarPrimeiroCampoInvalido(matricula);
}

function dataNascimentoEstaNoFuturo() {
  const campoDataNascimento = matricula.querySelector("#dataNascimento");

  return verificarDataFutura(campoDataNascimento.value);
}

function iniciarNovaMatricula() {
  resetarFormulario(matricula, formFeedback);
  mostrarFeedbackNovaMatricula(formFeedback, toastContainer);
}
