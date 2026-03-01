/* NOME DO FICHEIRO: script.js
   FUNÇÃO: Cérebro do chat e lógica de reconhecimento de frases
*/

const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. Lógica para decidir o que a IA responde
function processarRespostaIA(mensagemUsuario) {
    // Limpa o texto e coloca em minúsculas
    const msg = mensagemUsuario.toLowerCase().trim();

    // Resposta para saudações
    if (msg === "opa" || msg === "oi" || msg === "eai" || msg === "tudo bem") {
        return "Opa meu amigo como vai";
    }

    // Resposta para quando o usuário diz que está bem
    if (msg === "bem" || msg === "vai bem" || msg === "tô bem" || msg === "tô bem ami") {
        return "Que bom! Fico feliz em saber. No que posso te ajudar hoje?";
    }

    // Resposta padrão caso ele não reconheça a frase
    return "Massa! Me conta mais sobre isso aí.";
}

// 2. Função para enviar a mensagem e mostrar na tela
function enviarMensagem() {
    const texto = input.value;
    if (!texto) return;

    // Adiciona a bolha do usuário
    adicionarBolha(texto, 'user');
    input.value = '';

    // IA pensa um pouco (600ms) e responde
    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
        
        // Reset do timer de encorajamento (do arquivo interacao.js)
        if (typeof startEncouragement === "function") {
            startEncouragement();
        }
    }, 600);
}

// 3. Função para criar as bolhas visualmente
function adicionarBolha(texto, tipo) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerText = texto;
    chatBox.appendChild(div);
    
    // Faz o scroll descer automaticamente
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 4. Atalhos de clique e tecla Enter
btn.onclick = enviarMensagem;
input.onkeypress = (e) => { 
    if(e.key === 'Enter') enviarMensagem(); 
};

