const CHAVE_SESSAO = "pontoDeVista.logado";

// ---- Notícias: gera os cards a partir de js/noticias.js -------------------

function criarCard(noticia) {
  const card = document.createElement("article");
  card.className = "noticia";

  // textContent (e não innerHTML) evita que um texto da notícia vire código na página.
  const titulo = document.createElement("h3");
  const link = document.createElement("a");
  link.href = noticia.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = noticia.titulo;
  titulo.append(link);

  const resumo = document.createElement("p");
  resumo.textContent = noticia.resumo;

  const fonte = document.createElement("p");
  fonte.className = "fonte";
  fonte.textContent = `Fonte: ${noticia.fonte}`;

  const galeria = document.createElement("div");
  galeria.className = `galeria galeria-${noticia.imagens.length}`;
  noticia.imagens.forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    galeria.append(img);
  });

  card.append(titulo, resumo, fonte, galeria);
  return card;
}

document.querySelectorAll(".lista-noticias").forEach((lista) => {
  const noticias = NOTICIAS[lista.dataset.categoria] || [];
  lista.append(...noticias.map(criarCard));
});

// ---- Menu no celular -------------------------------------------------------

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.getElementById("menu");

function alternarMenu(abrir) {
  menu.classList.toggle("aberto", abrir);
  botaoMenu.setAttribute("aria-expanded", String(abrir));
  botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
}

botaoMenu.addEventListener("click", () => alternarMenu(!menu.classList.contains("aberto")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => alternarMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && alternarMenu(false));

// ---- Sair ------------------------------------------------------------------

document.getElementById("sair").addEventListener("click", () => {
  sessionStorage.removeItem(CHAVE_SESSAO);
  location.href = "index.html";
});
