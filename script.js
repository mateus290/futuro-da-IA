const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

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
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
  caixaResultado.style.display = "none";
  caixaPerguntas.textContent = perguntas[atual].enunciado;
  caixaAlternativas.innerHTML = "";

  for (const alternativa of perguntas[atual].alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.classList.add("botao-alternativa");
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  }
}

function respostaSelecionada(resposta) {
  respostas.push(resposta);
  atual++;

  if (atual < perguntas.length) {
    mostraPergunta();
  } else {
    mostraResultado();
  }
}

function mostraResultado() {
  caixaPerguntas.textContent = "Resultado Final";
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = `Suas respostas foram: ${respostas.join(", ")}. 
  Obrigado por compartilhar sua visão sobre o futuro da IA! 🤖`;

  caixaResultado.style.display = "block";
}

botaoReiniciar.addEventListener("click", () => {
  atual = 0;
  respostas = [];
  mostraPergunta();
});

mostraPergunta();
