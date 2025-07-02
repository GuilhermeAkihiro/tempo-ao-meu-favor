const sugestoes = {
  5: [
    "Respire fundo por 1 minuto e feche os olhos.",
    "Alongue seus braços e pernas.",
    "Escreva 3 coisas boas do seu dia.",
    "Beba um copo d’água devagar, com atenção plena."
  ],
  15: [
    "Assista a um vídeo de curiosidades no YouTube.",
    "Organize sua mesa ou um canto do seu quarto.",
    "Leia um artigo interessante.",
    "Faça uma caminhada curta ouvindo uma música relaxante."
  ],
  30: [
    "Faça uma receita simples.",
    "Escreva um diário ou rascunhe algo criativo.",
    "Aprenda algo novo em um site como o Duolingo ou Khan Academy.",
    "Tome um banho relaxante ouvindo sua música favorita."
  ],
  60: [
    "Assista a um documentário curto ou filme leve.",
    "Faça uma atividade física (dança, exercício leve).",
    "Crie algo artístico (desenho, pintura, DIY).",
    "Aprenda algo novo com um curso gratuito."
  ]
};

function mostrarSugestao() {
  const tempo = document.getElementById("tempo").value;
  const lista = sugestoes[tempo];
  const sugestaoAleatoria = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("sugestao").innerText = sugestaoAleatoria;
}
