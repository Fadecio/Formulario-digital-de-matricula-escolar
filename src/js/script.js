import {
  matricula,
  btnPrint,
  formFeedback,
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
  limparFeedback,
} from "./feedback.js";

import { focarPrimeiroCampoInvalido } from "./focus.js";

iniciarAplicacao();

function iniciarAplicacao() {
  configurarEventosDoFormulario();
  configurarMascaras(campoCpf, campoCep, campoTelefoneFiliacao1);
  configurarValidacaoEmTempoReal(camposParaValidar, () => {
    limparFeedback(formFeedback);
  });
}

function configurarEventosDoFormulario() {
  matricula.addEventListener("submit", finalizarMatricula);

  btnPrint.addEventListener("click", () => {
    window.print();
  });
}

function finalizarMatricula(event) {
  event.preventDefault();

  const formularioValido = validarFormulario(camposParaValidar);

  if (formularioValido) {
    mostrarFeedbackSucesso(formFeedback);
  } else {
    mostrarFeedbackErro(formFeedback);
    focarPrimeiroCampoInvalido(matricula);
  }
}
