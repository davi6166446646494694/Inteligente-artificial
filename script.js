const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. O Cérebro: Aqui é onde ele decide o que falar
function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // Se você disser Oi, Opa, etc.
    if (msg === "opa" || msg === "oi" || msg === "eai" || msg === "tudo bem") {
        return "Opa meu amigo como vai";
    }

    // Se você disser que está bem
    if (msg === "bem" || msg === "vai bem" || msg === "tô bem" || msg === "tô bem ami") {
        return "Que bom! Fico feliz em saber. No que posso te ajudar hoje?";
    }

    // Resposta padrão para qualquer outra coisa
    return "Massa! Me conta mais sobre isso aí.";
}

// 2. A Ação: Envia a mensagem e limpa o campo
function enviarMensagem() {
    const texto = input.value;
    if (!texto) return;

    // Coloca sua mensagem na tela
    adicionarBolha(texto, 'user');
    input.value = '';

    // IA responde depois de meio segundo
    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
        
        // Avisa o interacao.js para resetar o tempo de 15 segundos
        if (typeof startEncouragement === "function") {
            startEncouragement();
        }
    }, 600);
}

// 3. O Visual: Cria as bolhas de chat
function adicionarBolha(texto, tipo) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerText = texto;
    chatBox.appendChild(div);
    
    // Scroll automático para o final
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Configura o botão e a tecla Enter
btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
