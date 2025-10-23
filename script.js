document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".caixa-introducao");
  const questionario = document.querySelector(".caixa-questionario");
  const botaoComecar = document.querySelector(".botao-comecar");

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

  // ===== INÍCIO DO QUIZ =====
  botaoComecar.addEventListener("click", () => {
    intro.style.display = "none";
    questionario.style.display = "block";
    mostraPergunta();
  });

  function atualizaProgresso() {
    const total = perguntas.length;
    textoProgresso.textContent = `Pergunta ${Math.min(atual + 1, total)} de ${total}`;
    const porcentagem = ((atual) / total) * 100;
    barraProgresso.style.width = `${porcentagem}%`;
  }

  function mostraPergunta() {
    caixaResultado.style.display = "none";

    const pergunta = perguntas[atual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {
      const botao = document.createElement("button");
      botao.textContent = alternativa;
      botao.classList.add("botao-alternativa");
      botao.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botao);
    });

    atualizaProgresso();
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
Obrigado por compartilhar sua visão sobre o futuro da IA! 🤖✨`;
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

  // ===== MODO CLARO/ESCURO AUTOMÁTICO =====
  function aplicaTemaAutomatico() {
    const hora = new Date().getHours();
    const body = document.body;
    if (hora >= 6 && hora < 18) {
      body.classList.remove("modo-escuro");
      body.classList.add("modo-claro");
    } else {
      body.classList.remove("modo-claro");
      body.classList.add("modo-escuro");
    }
  }

  aplicaTemaAutomatico();
  setInterval(aplicaTemaAutomatico, 60 * 60 * 1000);
});
// ===== GLITTER ANIMADO =====
const NUM_PARTICULAS = 60;

for (let i = 0; i < NUM_PARTICULAS; i++) {
  const glitter = document.createElement("div");
  glitter.classList.add("glitter");
  glitter.style.left = Math.random() * 100 + "vw";
  glitter.style.animationDuration = 3 + Math.random() * 5 + "s";
  glitter.style.animationDelay = Math.random() * 5 + "s";
  glitter.style.width = glitter.style.height = 2 + Math.random() * 4 + "px";
  document.body.appendChild(glitter);
}

