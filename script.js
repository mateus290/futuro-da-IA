const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");
const textoProgresso = document.querySelector(".texto-progresso");
const barraProgresso = document.querySelector(".progresso");

const perguntas = [
  {
    enunciado: "A inteligência artificial será capaz de superar a inteligência humana em todas as áreas até 2050?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "A IA terá um impacto positivo no mercado de trabalho, criando mais empregos do que os que elimina?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "A IA será capaz de desenvolver emoções genuínas no futuro?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "Você confiaria em uma IA para tomar decisões médicas importantes?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "As escolas deveriam ensinar o uso ético e técnico da IA desde o ensino fundamental?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "Você acredita que a IA poderá um dia ter consciência própria?",
    alternativas: ["Sim", "Não"],
  },
];

let atual = 0;
let respostas = [];

function atualizaProgresso() {
  const total = perguntas.length;
  textoProgresso.textContent = `Pergunta ${atual + 1} de ${total}`;
  const porcentagem = ((atual) / total) * 100;
  barraProgresso.style.width = `${porcentagem}%`;
}

function mostraPergunta() {
  caixaResultado.style.display = "none";
  caixaPerguntas.classList.add("fade-out");
  caixaAlternativas.classList.add("fade-out");

  setTimeout(() => {
    const pergunta = perguntas[atual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    for (const alternativa of pergunta.alternativas) {
      const botao = document.createElement("button");
      botao.textContent = alternativa;
      botao.classList.add("botao-alternativa");
      botao.addEventListen
