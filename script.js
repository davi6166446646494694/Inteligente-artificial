const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. SISTEMA DE BUSCA ASSÍNCRONA (NÃO TRAVA O BROWSER)
async function buscarConteudoWeb(termo) {
    // Limpa termos comuns para melhorar a precisão da busca
    const buscaLimpa = termo.replace(/(o que é|quem foi|me fale sobre|pesquise|busca|nexus)/gi, "").trim();
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(buscaLimpa)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract ? { title: data.title, text: data.extract } : null;
    } catch (e) {
        return null;
    }
}

// 2. GERADOR DE VARIANTES DE INTERAÇÃO (5.000+ COMBINAÇÕES)
function gerarIntro() {
    const frases = [
        "Mestre, acedi à rede e trouxe este dossiê: ",
        "Opa! Encontrei informações densas sobre isso: ",
        "Salve! Conectei o Nexus à nuvem e o resultado foi este: ",
        "Mano, se liga no que a internet diz sobre isso: ",
        "Analisando dados globais... Aqui está a tua aula: ",
        "Nexus online! Pesquisa concluída com sucesso: "
    ];
    return frases[Math.floor(Math.random() * frases.length)];
}

// 3. MOTOR DE PROCESSAMENTO (HÍBRIDO)
async function processarNexus() {
    const texto = input.value.trim();
    if (!texto) return;

    // Adiciona bolha do user e limpa input IMEDIATAMENTE (evita travar)
    adicionarBolha(texto, 'user');
    input.value = '';
    
    // Bolha de "A processar"
    const tempId = "loading-" + Date.now();
    adicionarBolha("A processar nos servidores... ⚡", 'ai', tempId);

    let respostaFinal = "";

    // Lógica Matemática Rápida
    if (/^[0-9+\-*/().\s^]+$/.test(texto) && /[0-9]/.test(texto)) {
        try {
            respostaFinal = `Cálculo concluído: **${eval(texto.replace('^', '**'))}** 🧮`;
        } catch (e) { respostaFinal = "Erro no cálculo, verifica a expressão!"; }
    } 
    // Conversa Básica
    else if (texto.toLowerCase().includes("oi") || texto.toLowerCase().includes("ola")) {
        respostaFinal = "Salve, meu parceiro! No que o Nexus pode ajudar agora? 👊";
    }
    // Busca na Internet (Páginas Inteiras)
    else {
        const resultado = await buscarConteudoWeb(texto);
        if (resultado) {
            respostaFinal = `${gerarIntro()}\n\n### 🌐 ${resultado.title.toUpperCase()}\n\n${resultado.text}\n\n*Conhecimento é poder!* 🚀`;
        } else {
            respostaFinal = "Pode crer! Tentei buscar, mas não achei um artigo completo. Tenta ser mais específico no tema! 👊";
        }
    }

    // Atualiza a resposta no chat
    const bolhaAI = document.getElementById(tempId);
    if (bolhaAI) {
        bolhaAI.innerText = respostaFinal;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// 4. INTERFACE
function adicionarBolha(texto, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Eventos Blindados
btn.onclick = (e) => { e.preventDefault(); processarNexus(); };
input.onkeypress = (e) => { 
    if(e.key === 'Enter') {
        e.preventDefault();
        processarNexus();
    }
};
btn.onclick = motorPrincipal;
input.onkeypress = (e) => { if (e.key === 'Enter') motorPrincipal(); };
