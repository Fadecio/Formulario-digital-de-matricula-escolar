export function configurarMascaras() {
  campoCpf.addEventListener("input", () => {
    campoCpf.value = formatarCpf(campoCpf.value);
  });

  campoCep.addEventListener("input", () => {
    campoCep.value = formatarCep(campoCep.value);
  });

  campoTelefoneFiliacao1.addEventListener("input", () => {
    campoTelefoneFiliacao1.value = formatarTelefone(
      campoTelefoneFiliacao1.value,
    );
  });
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
    return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }

  return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}