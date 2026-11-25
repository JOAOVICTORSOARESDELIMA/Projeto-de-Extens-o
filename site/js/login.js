// Login de DEMONSTRAÇÃO. Num site real, a verificação de usuário e senha
// deve ser feita no servidor: tudo o que está no navegador pode ser lido
// por qualquer pessoa (inclusive estas credenciais).
const CREDENCIAIS_DEMO = { usuario: "admin", senha: "admin" };
const CHAVE_SESSAO = "pontoDeVista.logado";

const form = document.getElementById("form-login");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagem-erro");

// Quem já entrou nesta sessão vai direto para o portal.
if (sessionStorage.getItem(CHAVE_SESSAO) === "sim") {
  location.replace("portal.html");
}

function mostrarErro(texto) {
  mensagemErro.textContent = texto;
  form.classList.toggle("com-erro", Boolean(texto));
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const usuario = campoUsuario.value.trim();
  const senha = campoSenha.value;

  if (!usuario || !senha) {
    mostrarErro("Preencha usuário e senha.");
    (usuario ? campoSenha : campoUsuario).focus();
    return;
  }

  if (usuario === CREDENCIAIS_DEMO.usuario && senha === CREDENCIAIS_DEMO.senha) {
    sessionStorage.setItem(CHAVE_SESSAO, "sim");
    location.href = "portal.html";
  } else {
    mostrarErro("Usuário ou senha incorretos.");
    campoSenha.value = "";
    campoSenha.focus();
  }
});

// Some com a mensagem de erro assim que a pessoa volta a digitar.
[campoUsuario, campoSenha].forEach((campo) =>
  campo.addEventListener("input", () => mostrarErro(""))
);
