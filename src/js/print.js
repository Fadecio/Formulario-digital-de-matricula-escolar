export function configurarImpressao(btnPrint, matricula) {
  btnPrint.addEventListener("click", () => {
    prepararTabelaParaImpressao(matricula);
    prepararDataParaImpressao(matricula);

    window.print();
  });

  window.addEventListener("afterprint", () => {
    restaurarTabelaDepoisDaImpressao(matricula);
    restaurarDataDepoisDaImpressao(matricula);
  });
}

function prepararTabelaParaImpressao(matricula) {
  const camposDaTabela = matricula.querySelectorAll(".school-history-table .table-input");

  camposDaTabela.forEach(campo => {
    const campoVazio = campo.value.trim() === "";

    if (campoVazio) {
      campo.dataset.printEmpty = "true";
    }
  });
}

function restaurarTabelaDepoisDaImpressao(matricula) {
  const camposVaziosDaTabela = matricula.querySelectorAll(
    ".school-history-table .table-input[data-print-empty='true']"
  );

  camposVaziosDaTabela.forEach((campo) => {
    delete campo.dataset.printEmpty;
  });
}

function prepararDataParaImpressao(matricula) {
  const camposDeData = matricula.querySelectorAll(
    ".school-history-table input[type='date'].table-input"
  );

  camposDeData.forEach(campo => {
    campo.dataset.originalType = "date";
    campo.dataset.originalValue = campo.value;

    if (campo.value){
      campo.value = formatarDataParaImpressao(campo.value);
    }

    campo.type = "text";
  });
}

function restaurarDataDepoisDaImpressao(matricula) {
  const camposDeData = matricula.querySelectorAll(
    ".school-history-table input[data-original-type='date']"
  );

  camposDeData.forEach(campo => {
    const valorOriginal = campo.dataset.originalValue;

    campo.type = "date";
    campo.value = valorOriginal;

    delete campo.dataset.originalType;
    delete campo.dataset.originalValue;
  });
}

function formatarDataParaImpressao(data) {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}