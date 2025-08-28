const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciando: "A inteligência artificial será capaz de superar a inteligência humana em todas as áreas até 2050?"
        alternativas: [
            "sim",
            "não"
        ]
    },
    {
    enunciado: "A IA terá um impacto positivo no mercado de trabalho, criando mais empregos do que os que elimina?"
    alternativas: [
        "sim",
        "não"
        ]
    },
    {
        enunciado: "A IA será capaz de desenvolver emoções genuínas no futuro?",
        alternativas: [
            "sim",
            "não"
        ]
    }
