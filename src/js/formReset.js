export function resetarFormulario(matricula, formFeedback) {
  matricula.reset();
  limparEstadosDosCampos(matricula);
  limparFeedbackFormulario(formFeedback);
}

function limparEstadosDosCampos(matricula) {
  const gruposDeCampos = matricula.querySelectorAll(".form-group");

  gruposDeCampos.forEach((grupo) => {
    grupo.classList.remove("is-valid");
    grupo.classList.remove("is-invalid");
  });
}

function limparFeedbackFormulario(formFeedback) {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}