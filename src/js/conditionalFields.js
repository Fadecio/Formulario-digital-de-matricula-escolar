export function configurarCamposCondicionais(
  radiosTransporteEscolar,
  campoTipoTransporte,
) {
  atualizarCamposCondicionais(radiosTransporteEscolar, campoTipoTransporte);

  radiosTransporteEscolar.forEach((radio) => {
    radio.addEventListener("change", () => {
      atualizarCamposCondicionais(
        radiosTransporteEscolar,
        campoTipoTransporte,
      );
    });
  });
}

export function atualizarCamposCondicionais(
  radiosTransporteEscolar,
  campoTipoTransporte,
) {
  const transporteSelecionado = obterValorSelecionado(radiosTransporteEscolar);

  if (transporteSelecionado === "sim") {
    ativarCampoTipoTransporte(campoTipoTransporte);
    return;
  }

  desativarCampoTipoTransporte(campoTipoTransporte);
}

function obterValorSelecionado(radios) {
  const radioSelecionado = Array.from(radios).find(radio => radio.checked);
  return radioSelecionado ? radioSelecionado.value : "";
}

function ativarCampoTipoTransporte(campoTipoTransporte) {
  campoTipoTransporte.required = true;
  campoTipoTransporte.disabled = false;
  campoTipoTransporte.placeholder = "Informe o tipo de transporte";
}

function desativarCampoTipoTransporte(campoTipoTransporte) {
    campoTipoTransporte.value = "";
    campoTipoTransporte.required = false;
    campoTipoTransporte.disabled = true;
    campoTipoTransporte.placeholder = "Disponível apenas se marcar sim";

    limparEstadoVisualDoCampo(campoTipoTransporte);
}

function limparEstadoVisualDoCampo(campo) {
    const grupoCampo = campo.closest(".form-group");

    if (!grupoCampo){
        return;
    }

    grupoCampo.classList.remove("is-valid");
    grupoCampo.classList.remove("is-invalid");
}
