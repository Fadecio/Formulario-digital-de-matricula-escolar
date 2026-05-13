export function focarPrimeiroCampoInvalido(matricula) {
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