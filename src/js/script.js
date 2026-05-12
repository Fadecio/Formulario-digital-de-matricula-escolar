const matricula = document.getElementById("folhaDeMatricula");
const btnPrint = document.getElementById("btnPrint");
const formFeedback = document.getElementById("formFeedback");

const camposParaValidar = matricula.querySelectorAll(
  "[required], #idade, #cpf, #cep, #telefoneFiliacao1, #emailFiliacao1"
);

const campoCpf = document.getElementById("cpf");
const campoCep = document.getElementById("cep");
const campoTelefoneFiliacao1 = document.getElementById("telefoneFiliacao1");

matricula.addEventListener("submit", finalizarMatricula);

btnPrint.addEventListener("click", () => {
  window.print();
});

camposParaValidar.forEach(campo => {
  campo.addEventListener("input", () => {
    validarCampoObrigatorio(campo);
    limparFeedback();
  });

  campo.addEventListener("change", () => {
    validarCampoObrigatorio(campo);
    limparFeedback();
  });  
});

campoCpf.addEventListener("input", () => {
    campoCpf.value = formatarCpf(campoCpf.value);
  });

  campoCep.addEventListener("input", () => {
    campoCep.value = formatarCep(campoCep.value);
  });

  campoTelefoneFiliacao1.addEventListener("input", () => {
    campoTelefoneFiliacao1.value = formatarTelefone(campoTelefoneFiliacao1.value);
  });

function finalizarMatricula(event) {
  event.preventDefault();

  let formularioValido = true;

  camposParaValidar.forEach(campo => {
    const campoValido = validarCampoObrigatorio(campo);

    if (!campoValido) {
      formularioValido = false;
    }
  });

  if (formularioValido) {
    formFeedback.textContent = "Matrícula finalizada com sucesso!";
    formFeedback.className = "form-feedback is-success";
  } else {
    formFeedback.textContent = "Preencha todos os campos obrigatórios.";
    formFeedback.className = "form-feedback is-error";

    focarPrimeiroCampoInvalido();
  }
}

function validarCampoObrigatorio(campo) {
  const campoGrupo =
    campo.closest(".form-group") || campo.closest(".checkbox-option");

  if (!campoGrupo) {
    return true;
  }

  const campoObrigatorio = campo.hasAttribute("required");

  let campoVazio = false;

  if (campo.type === "checkbox") {
    campoVazio = !campo.checked;
  } else {
    campoVazio = campo.value.trim() === "";
  }

  if (campoVazio && campoObrigatorio) {
    campoGrupo.classList.add("is-invalid");
    campoGrupo.classList.remove("is-valid");
    return false;
  }

  if (campoVazio && !campoObrigatorio) {
    campoGrupo.classList.remove("is-invalid");
    campoGrupo.classList.remove("is-valid");
    return true;
  }

  const campoEspecificoValido = validarCampoEspecifico(campo);

  if (!campoEspecificoValido) {
    campoGrupo.classList.add("is-invalid");
    campoGrupo.classList.remove("is-valid");
    return false;
  }

  campoGrupo.classList.add("is-valid");
  campoGrupo.classList.remove("is-invalid");
  return true;
}

function limparFeedback() {
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}

function focarPrimeiroCampoInvalido() {
  const primeiroCampoInvalido = matricula.querySelector(
    ".is-invalid .input-control, .is-invalid input, .is-invalid select",
  );

  if (primeiroCampoInvalido) {
    primeiroCampoInvalido.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    primeiroCampoInvalido.focus();
  }
}

function validarCampoEspecifico(campo) {
  const valor = campo.value.trim();

  if (valor === "") {
    return true;
  }

  if (campo.type === "email") {
    return validarEmail(valor);
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

  if (campo.id === "telefoneFiliacao1" || campo.id === "telefoneFiliacao2") {
    return validarTelefone(valor);
  }

  return true;
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validarIdade(idade) {
  const idadeNumero = Number(idade);

  return idadeNumero > 1 && idadeNumero <= 14;
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

function formatarCpf(valor) {
  return valor
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatarCep(valor) {
  return valor
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function formatarTelefone(valor) {
  const telefoneLimpo = valor.replace(/\D/g, "").slice(0, 11);

  if (telefoneLimpo.length <= 10) {
    return telefoneLimpo.replace(
      /(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    );
  }

  return telefoneLimpo.replace(
    /(\d{2})(\d{5})(\d{0,4})/,
    "($1) $2-$3"
  );
}