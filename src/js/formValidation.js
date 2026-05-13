import { validarCampoEspecifico } from "./validators.js";

export function configurarValidacaoEmTempoReal() {
  camposParaValidar.forEach((campo) => {
    campo.addEventListener("input", () => {
      validarCampoObrigatorio(campo);
      limparFeedback();
    });

    campo.addEventListener("change", () => {
      validarCampoObrigatorio(campo);
      limparFeedback();
    });
  });
}

export function validarFormulario() {
  let formularioValido = true;

  camposParaValidar.forEach((campo) => {
    const campoValido = validarCampoObrigatorio(campo);

    if (!campoValido) {
      formularioValido = false;
    }
  });

  return formularioValido;
}

export function validarCampo(campo) {
  const campoGrupo =
    campo.closest(".form-group") || campo.closest(".checkbox-option");

  if (!campoGrupo) {
    return true;
  }

  const campoObrigatorio = campo.hasAttribute("required");
  const campoVazio = verificarCampoVazio(campo);

  if (campoVazio && campoObrigatorio) {
    aplicarEstadoInvalido(campoGrupo);
    return false;
  }

  if (campoVazio && !campoObrigatorio) {
    limparEstadoValidacao(campoGrupo);
    return true;
  }

  const campoEspecificoValido = validarCampoEspecifico(campo);

  if (!campoEspecificoValido) {
    aplicarEstadoInvalido(campoGrupo);
    return false;
  }

  aplicarEstadoValido(campoGrupo);
  return true;
}

function verificarCampoVazio(campo) {
  if (campo.type === "checkbox") {
    return !campo.checked;
  }

  return campo.value.trim() === "";
}

function aplicarEstadoInvalido(campoGrupo) {
  campoGrupo.classList.add("is-invalid");
  campoGrupo.classList.remove("is-valid");
}

function aplicarEstadoValido(campoGrupo) {
  campoGrupo.classList.remove("is-valid");
  campoGrupo.classList.remove("is-invalid");
}

function limparEstadoValidacao(campoGrupo) {
  campoGrupo.classList.remove("is-valid");
  campoGrupo.classList.remove("is-invalid");
}