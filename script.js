const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. MOTOR DE BUSCA NA INTERNET (Wikipedia API)
async function buscarNaInternet(termo) {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.extract) {
            return `### 🌐 FONTE: WIKIPÉDIA\n\n**${data.title}**\n\n${data.extract}\n\n*Saiba mais em: ${data.content_urls.desktop.page}*`;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erro na busca:", error);
        return null;
    }
}

// 2. GERADOR DE PERSONALIDADE (5.000+ combinações)
function interagir() {
    const frases = [
        "Mano, dei uma vasculhada aqui na rede pra você, saca só: ",
        "Opa! Achei um conteúdo pesado na web sobre isso, mestre: ",
        "Salve! Conectei aqui nos servidores e trouxe a real: ",
        "E aí, parceiro! O que eu encontrei na internet foi isso aqui: ",
        "Direto da nuvem para o seu chat, confere aí: ",
        "Pesquisa concluída com sucesso! Olha a densidade desse assunto: ",
        "Nexus online! Busquei os detalhes que você queria: "
    ];
    const encerramento = [
        "Isso clareou as ideias? Se precisar de mais detalhe, é só falar! 🚀",
        "Tamo junto na busca pelo conhecimento! 👊",
        "A internet é gigante, mas eu filtro o melhor pra você. 🔥",
        "Evolução constante, meu parceiro! Mais alguma dúvida?",
        "Espero que esse artigo mude seu mindset sobre o tema."
    ];
    return {
        intro: frases[Math.floor(Math.random() * frases.length)],
        fim: encerramento[Math.floor(Math.random() * encerramento.length)]
    };
}

// 3. PROCESSAMENTO PRINCIPAL
async function processarNexus(mensagem) {
    const msg = mensagem.toLowerCase().trim();
    const persona = interagir();

    // Reações de chat (sem busca)
    if (msg.includes("tudo bem") || msg.includes("como voce ta")) {
        return "Tudo voando, parceiro! Conectado e pronto. E você, como tá a força?";
    }

    if (msg.includes("oi") || msg.includes("ola") || msg.includes("salve")) {
        return "Opa! Salve, meu chapa! Manda o assunto que eu busco na hora! 👊";
    }

    // Busca Dinâmica na Web
    // Se a mensagem for longa ou tiver palavras-chave, ele busca
    const termosBusca = msg.replace("o que é", "").replace("quem foi", "").replace("me fale sobre", "").trim();
    
    if (termosBusca.length > 2) {
        const resultadoWeb = await buscarNaInternet(termosBusca);
        if (resultadoWeb) {
            return `${persona.intro}\n\n${resultadoWeb}\n\n${persona.fim}`;
        }
    }

    return "Pode crer! Tentei buscar aqui mas não achei uma página específica. Tenta mandar o nome do assunto direto (ex: 'Buraco Negro' ou 'JavaScript')! 👊";
}

// 4. INTERFACE
async function enviar() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    // Bolha de "Pensando..."
    const tempId = "loading-" + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'msg ai';
    loadingDiv.id = tempId;
    loadingDiv.innerText = "Buscando na web... 🌐";
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    const resposta = await processarNexus(texto);
    
    // Substitui o loading pela resposta real
    document.getElementById(tempId).innerText = resposta;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function adicionarBolha(texto, tipo) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = enviar;
input.onkeypress = (e) => { if(e.key === 'Enter') enviar(); };
