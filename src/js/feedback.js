import { mostrarToast } from "./toast.js";

export function mostrarFeedbackSucesso(formFeedback, toastContainer) {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";

  mostrarToast(
    toastContainer, 
    "Matrícula realizada com sucesso!", 
    "success"
  );
}

export function mostrarFeedbackErro(formFeedback, toastContainer) {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";

  mostrarToast(
    toastContainer,
    "Preencha todos os campos obrigatórios.",
    "error"
  );
}

export function limparFeedback(formFeedback) {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}
