export function mostrarFeedbackSucesso() {
  formFeedback.textContent = "Matrícula finalizada com sucesso!";
  formFeedback.className = "form-feedback is-success";
}

export function mostrarFeedbackErro() {
  formFeedback.textContent = "Preencha todos os campos obrigatórios.";
  formFeedback.className = "form-feedback is-error";
}

export function limparFeedback() {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}