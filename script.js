const banco = [
  {
    palavras: ["oi", "opa", "olá"],
    respostas: ["Oi! Tudo bem?", "Opa! Como você tá?"]
  },
  {
    palavras: ["tudo bem", "como você tá"],
    respostas: ["Tô bem 😎 e você?", "Estou ótimo!"]
  },
  {
    palavras: ["seu nome", "quem é você"],
    respostas: ["Sou sua IA!", "Eu sou um chat criado por você 😄"]
  }
];

function gerarResposta(texto) {
  texto = texto.toLowerCase();

  for (let item of banco) {
    for (let palavra of item.palavras) {
      if (texto.includes(palavra)) {
        let respostas = item.respostas;
        return respostas[Math.floor(Math.random() * respostas.length)];
      }
    }
  }

  return "Hmm... interessante 🤔 me conta mais.";
}
