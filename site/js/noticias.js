// Conteúdo do portal. Para publicar uma notícia nova, basta adicionar um
// objeto na categoria certa: a página monta o HTML sozinha (js/portal.js).
const NOTICIAS = {
  ultimaHora: [
    {
      titulo: "Furacão John deixa mortos no México e Acapulco segue alagada",
      resumo:
        "A passagem do furacão pela costa do Pacífico deixou ao menos 22 mortos e grande parte de Acapulco debaixo d'água.",
      fonte: "UOL",
      link: "https://noticias.uol.com.br/internacional/ultimas-noticias/2024/09/28/furacao-john-acapulco-mexico-mortos.htm",
      imagens: [{ src: "img/ultima-hora-1.jpg", alt: "Vista aérea de bairro alagado e moradores atravessando rua inundada em Acapulco" }],
    },
    {
      titulo: "Criador tailandês sacrifica mais de cem crocodilos após tufão danificar abrigo",
      resumo:
        "Sem encontrar outro local seguro para os animais, o dono de uma fazenda no norte da Tailândia decidiu sacrificá-los antes que o muro do recinto desabasse.",
      fonte: "CNN Brasil",
      link: "https://www.cnnbrasil.com.br/internacional/agricultor-tailandes-mata-mais-de-cem-crocodilos-apos-tufao-danificar-abrigo/",
      imagens: [{ src: "img/ultima-hora-2.jpg", alt: "Recinto de fazenda de crocodilos na Tailândia" }],
    },
  ],
  emAlta: [
    {
      titulo: "SpaceX lança a Crew-9 para trazer de volta astronautas da Starliner",
      resumo:
        "A missão vai buscar os astronautas da Nasa que ficaram na Estação Espacial Internacional muito além do previsto após problemas na nave da Boeing.",
      fonte: "CNN Brasil",
      link: "https://www.cnnbrasil.com.br/tecnologia/spacex-lanca-crew-9-missao-para-resgatar-astronautas-da-starliner-veja-fotos/",
      imagens: [
        { src: "img/em-alta-1a.jpg", alt: "Foguete Falcon 9 decolando na missão Crew-9" },
        { src: "img/em-alta-1b.jpg", alt: "Astronauta de traje espacial dentro da cápsula Dragon" },
      ],
    },
    {
      titulo: "Quem foi Hassan Nasrallah, líder do Hezbollah morto em ataque de Israel",
      resumo:
        "O grupo confirmou a morte do seu principal líder após um bombardeio israelense em Beirute, capital do Líbano.",
      fonte: "g1",
      link: "https://g1.globo.com/mundo/noticia/2024/09/28/quem-e-hassan-nasrallah.ghtml",
      imagens: [
        { src: "img/em-alta-2a.jpg", alt: "Jovens segurando um retrato de Hassan Nasrallah" },
        { src: "img/em-alta-2b.jpg", alt: "Hassan Nasrallah durante pronunciamento em vídeo" },
      ],
    },
  ],
};
