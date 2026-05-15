export const matricula = document.getElementById("folhaDeMatricula");
export const btnPrint = document.getElementById("btnPrint");
export const btnNovaMatricula = document.getElementById("btnNovaMatricula");
export const formFeedback = document.getElementById("formFeedback");
export const toastContainer = document.getElementById("toastContainer");

export const camposParaValidar = matricula.querySelectorAll(
  "[required], #cpf, #cep, input[type='email'], #telefoneFiliacao1, #telefoneFiliacao2",
);

export const campoCpf = document.getElementById("cpf");
export const campoCep = document.getElementById("cep");
export const campoDataNascimento = document.getElementById("dataNascimento");
export const campoIdade = document.getElementById("idade");

export const campoTelefoneFiliacao1 =
  document.getElementById("telefoneFiliacao1");
  
export const campoTelefoneFiliacao2 =
  document.getElementById("telefoneFiliacao2");
