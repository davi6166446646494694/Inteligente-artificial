<script>
  // 1️⃣ Seu banco de palavras (pode ser gigante)
  const banco = [
    { palavras: ["oi","opa"], respostas: ["Oi! Tudo bem?", "Opa! Como você tá?"] },
    { palavras: ["tudo bem","como você tá"], respostas: ["Tô bem 😎 e você?", "Estou ótimo!"] }
    // adicione mais categorias aqui
  ];

  const respostasPadrao = [
    "Hmm... me conta mais sobre isso 🤔",
    "Interessante! Fala mais.",
    "Não entendi muito bem, pode explicar melhor?",
    "Legal! Continue me contando."
  ];

  // 2️⃣ Função que analisa a mensagem e retorna a resposta
  function gerarResposta(texto) {
    texto = texto.toLowerCase();
    let respostasPossiveis = [];

    for (let item of banco) {
      for (let palavra of item.palavras) {
        if (texto.includes(palavra)) {
          respostasPossiveis.push(...item.respostas);
          break;
        }
      }
    }

    if (respostasPossiveis.length > 0) {
      return respostasPossiveis[Math.floor(Math.random() * respostasPossiveis.length)];
    }

    return respostasPadrao[Math.floor(Math.random() * respostasPadrao.length)];
  }

  // 3️⃣ Função que envia a mensagem do usuário e chama gerarResposta
  function enviarMensagem() {
    const entrada = document.getElementById("entrada");
    const texto = entrada.value.trim();
    if(!texto) return;

    const chat = document.getElementById("chat");
    chat.innerHTML += `<p class="mensagem-usuario">Você: ${texto}</p>`;
    chat.scrollTop = chat.scrollHeight;
    entrada.value = "";

    const resposta = gerarResposta(texto); // chama a função aqui
    chat.innerHTML += `<p class="mensagem-ia">IA: ${resposta}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }
</script>
