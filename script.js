// script.js - versão com checagens e logs de debug
document.addEventListener("DOMContentLoaded", () => {
  try {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoReiniciar = document.querySelector(".botao-reiniciar");
    const textoProgresso = document.querySelector(".texto-progresso");
    const barraProgresso = document.querySelector(".progresso");

    // checagem básica de elementos
    const elementos = { caixaPerguntas, caixaAlternativas, caixaResultado, textoResultado, botaoReiniciar, textoProgresso, barraProgresso };
    for (const [nome, el] of Object.entries(elementos)) {
      if (!el) {
        const msg = `Elemento não encontrado no DOM: ${nome}. Verifique classes no HTML.`;
        console.error(msg);
        mostraErroNaTela(msg);
        return;
      }
    }

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
      textoProgresso.textContent = `Pergunta ${Math.min(atual + 1, total)} de ${total}`;
      const porcentagem = (total === 0) ? 0 : ((atual) / total) * 100;
      barraProgresso.style.width = `${porcentagem}%`;
    }

    function mostraPergunta() {
      caixaResultado.style.display = "none";
      // adicionar classes de transição
      caixaPerguntas.classList.remove("fade-in");
      caixaAlternativas.classList.remove("fade-in");
      caixaPerguntas.classList.add("fade-out");
      caixaAlternativas.classList.add("fade-out");

      setTimeout(() => {
        if (atual >= perguntas.length) {
          mostraResultado();
          return;
        }

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

        // animação de entrada
        caixaPerguntas.classList.remove("fade-out");
        caixaAlternativas.classList.remove("fade-out");
        caixaPerguntas.classList.add("fade-in");
        caixaAlternativas.classList.add("fade-in");
      }, 240);
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
Você ajudou a imaginar o futuro da IA! 💡🤖`;
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

    // inicia
    mostraPergunta();

    // função utilitária: mostra erro visível
    function mostraErroNaTela(mensagem) {
      const alerta = document.createElement("div");
      alerta.style.position = "fixed";
      alerta.style.left = "12px";
      alerta.style.bottom = "12px";
      alerta.style.padding = "12px 16px";
      alerta.style.background = "rgba(255,50,50,0.95)";
      alerta.style.color = "#fff";
      alerta.style.borderRadius = "8px";
      alerta.style.zIndex = "9999";
      alerta.style.fontFamily = "sans-serif";
      alerta.style.boxShadow = "0 6px 18px rgba(0,0,0,0.4)";
      alerta.textContent = mensagem;
      document.body.appendChild(alerta);
    }

  } catch (err) {
    console.error("Erro inesperado no script:", err);
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.left = "12px";
    div.style.bottom = "12px";
    div.style.padding = "12px 16px";
    div.style.background = "rgba(255,140,0,0.95)";
    div.style.color = "#000";
    div.style.borderRadius = "8px";
    div.style.zIndex = "9999";
    div.textContent = "Ocorreu um erro. Veja o console (F12) para detalhes.";
    document.body.appendChild(div);
  }
});
