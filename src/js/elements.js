export const matricula = document.getElementById("folhaDeMatricula");
export const btnPrint = document.getElementById("btnPrint");
export const formFeedback = document.getElementById("formFeedback");

export const camposParaValidar = matricula.querySelectorAll(
  "[required], #idade, #cpf, #cep, #telefoneFiliacao1, #emailFiliacao1",
);

export const campoCpf = document.getElementById("cpf");
export const campoCep = document.getElementById("cep");
export const campoTelefoneFiliacao1 = document.getElementById("telefoneFiliacao1");