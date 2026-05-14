import {
  matricula,
  btnPrint,
  btnNovaMatricula,
  formFeedback,
  toastContainer,
  camposParaValidar,
  campoCpf,
  campoCep,
  campoTelefoneFiliacao1,
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
  mostrarFeedbackNovaMatricula,
  limparFeedback,
} from "./feedback.js";

import { verificarForaDaFaixaEtaria } from "./validators.js";
import { focarPrimeiroCampoInvalido } from "./focus.js";
import { resetarFormulario } from "./formReset.js";
import { configurarImpressao } from "./print.js";

iniciarAplicacao();

function iniciarAplicacao() {
  configurarEventosDoFormulario();
  configurarMascaras(campoCpf, campoCep, campoTelefoneFiliacao1);
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

  if (criancaEstaForaDaFaixaEtaria()) {
    mostrarFeedbackForaDaFaixaEtaria(formFeedback, toastContainer);
  } else {
    mostrarFeedbackErro(formFeedback, toastContainer);
  }

  focarPrimeiroCampoInvalido(matricula);
}

function criancaEstaForaDaFaixaEtaria() {
  const campoDataNascimento = matricula.querySelector("#dataNascimento");

  return verificarForaDaFaixaEtaria(campoDataNascimento.value);
}

function iniciarNovaMatricula() {
  resetarFormulario(matricula, formFeedback);
  mostrarFeedbackNovaMatricula(formFeedback, toastContainer);
}