export function mostrarToast(toastContainer, mensagem, tipo = "success") {
  if (!toastContainer) {
    return;
  }

  const toast = document.createElement("div");

  toast.className = `toast toast--${tipo}`;
  toast.setAttribute("role", tipo === "error" ? "alert" : "status");

  toast.innerHTML = `
    <span class="toast__icon">${tipo === "success" ? "✓" : "!"}</span>
    <span class="toast__message">${mensagem}</span>
    <button class="toast__close" type="button" aria-label="Fechar mensagem">
      ×
    </button>
  `;

  const btnClose = toast.querySelector(".toast__close");

  btnClose.addEventListener("click", () => {
    removerToast(toast);
  });

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("is-visible");
  }, 10);

  setTimeout(() => {
    removerToast(toast);
  }, 4000);
}

function removerToast(toast) {
  toast.classList.remove("is-visible");

  setTimeout(() => {
    toast.remove();
  }, 250);
}