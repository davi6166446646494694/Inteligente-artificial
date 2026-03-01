const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");
const say = require("say"); // Importa a biblioteca de voz

const genAI = new GoogleGenerativeAI("SUA_CHAVE_AQUI");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function iniciarIA() {
  const modelo = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = modelo.startChat({ history: [] });

  console.log("🤖 IA com Voz Ativa! Digite algo...");
  console.log("--------------------------------------------------");

  const perguntar = () => {
    rl.question("Você: ", async (pergunta) => {
      if (pergunta.toLowerCase() === "sair") {
        say.speak("Até logo!", 'Microsoft Maria'); // Despedida por voz
        rl.close();
        return;
      }

      try {
        const resultado = await chat.sendMessage(pergunta);
        const resposta = resultado.response.text();
        
        console.log(`🤖 IA: ${resposta}`);
        
        // --- A MÁGICA ACONTECE AQUI ---
        // O segundo parâmetro é a voz. No Windows, use 'Microsoft Maria' para Português.
        // No macOS, você pode deixar null ou escolher uma voz do sistema.
        say.speak(resposta, 'Microsoft Maria', 1.0); 
        // ------------------------------

        perguntar(); 
      } catch (erro) {
        console.error("Erro:", erro);
        perguntar();
      }
    });
  };

  perguntar();
}

iniciarIA();
