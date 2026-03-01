const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");

// 1. Configure sua chave aqui
const genAI = new GoogleGenerativeAI("SUA_CHAVE_AQUI");

// Configuração para ler o que você digita no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function iniciarIA() {
  // 2. Escolhendo o modelo
  const modelo = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  // Iniciando o chat com histórico vazio
  const chat = modelo.startChat({
    history: [],
  });

  console.log("🤖 IA iniciada! Digite algo ou 'sair' para encerrar.");
  console.log("--------------------------------------------------");

  const perguntar = () => {
    rl.question("Você: ", async (pergunta) => {
      if (pergunta.toLowerCase() === "sair") {
        console.log("🤖 IA: Tchau! Até a próxima.");
        rl.close();
        return;
      }

      try {
        // 3. Enviando a mensagem e esperando a resposta
        const resultado = await chat.sendMessage(pergunta);
        const resposta = resultado.response.text();
        
        console.log(`🤖 IA: ${resposta}`);
        console.log("--------------------------------------------------");
      } catch (erro) {
        console.error("Erro ao processar:", erro);
      }

      perguntar(); // Chama a função de novo para continuar o chat
    });
  };

  perguntar();
}

iniciarIA();
