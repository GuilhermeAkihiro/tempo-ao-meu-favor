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

// Função para pegar o storage com as sugestões já mostradas, ou iniciar vazio
function getMostradas() {
  const data = localStorage.getItem('sugestoesMostradas');
  return data ? JSON.parse(data) : {5: [], 15: [], 30: [], 60: []};
}

// Função para salvar as sugestões mostradas no localStorage
function salvarMostradas(obj) {
  localStorage.setItem('sugestoesMostradas', JSON.stringify(obj));
}

function mostrarSugestao() {
  const tempo = document.getElementById("tempo").value;
  const lista = sugestoes[tempo];
  
  let mostradas = getMostradas();

  // Filtrar sugestões que ainda não foram mostradas
  const naoMostradas = lista.filter(sug => !mostradas[tempo].includes(sug));

  let sugestaoAleatoria;

  if (naoMostradas.length === 0) {
    // Se todas já foram mostradas, reinicia a lista para esse tempo
    mostradas[tempo] = [];
    salvarMostradas(mostradas);
    sugestaoAleatoria = lista[Math.floor(Math.random() * lista.length)];
  } else {
    // Pega uma aleatória entre as que não saíram ainda
    sugestaoAleatoria = naoMostradas[Math.floor(Math.random() * naoMostradas.length)];
    // Marca como mostrada
    mostradas[tempo].push(sugestaoAleatoria);
    salvarMostradas(mostradas);
  }

  document.getElementById("sugestao").innerText = sugestaoAleatoria;
}
