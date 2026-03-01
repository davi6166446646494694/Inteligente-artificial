const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    if (msg === "opa" || msg === "oi" || msg === "eai" || msg === "tudo bem") {
        return "Opa meu amigo como vai";
    }

    if (msg === "bem" || msg === "vai bem" || msg === "tô bem" || msg === "tô bem ami") {
        return "Que bom! Fico feliz em saber. No que posso te ajudar hoje?";
    }

    return "Massa! Me conta mais sobre isso aí.";
}

function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
        if (typeof startEncouragement === "function") startEncouragement();
    }, 600);
}

function adicionarBolha(texto, tipo) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
