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
      botao.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botao);
    }

    atualizaProgresso();

    caixaPerguntas.classList.remove("fade-out");
    caixaAlternativas.classList.remove("fade-out");
    caixaPerguntas.classList.add("fade-in");
    caixaAlternativas.classList.add("fade-in");
  }, 300);
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
  barraProgresso.style.width = "100%";
  textoProgresso.textContent = "Concluído 🎉";
}

botaoReiniciar.addEventListener("click", () => {
  atual = 0;
  respostas = [];
  barraProgresso.style.width = "0%";
  mostraPergunta();
});

/* ====== MODO CLARO/ESCURO AUTOMÁTICO ====== */
function aplicaTemaAutomatico() {
  const hora = new Date().getHours();
  const body = document.body;

  // Entre 6h e 18h → modo claro
  if (hora >= 6 && hora < 18) {
    body.classList.remove("modo-escuro");
    body.classList.add("modo-claro");
  } else {
    body.classList.remove("modo-claro");
    body.classList.add("modo-escuro");
  }
}

// Aplica o tema inicial e atualiza automaticamente a cada hora
aplicaTemaAutomatico();
setInterval(aplicaTemaAutomatico, 60 * 60 * 1000);

mostraPergunta();
