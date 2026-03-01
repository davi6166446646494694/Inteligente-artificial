const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. DICIONÁRIO DE GÍRIAS E INTERAÇÃO (A base do "E aí mano")
const interacoesLivres = {
    saudacoes: ["E aí mano, beleza?", "Salve, meu parceiro! Como tá a força?", "Opa, tudo na paz por aqui e aí?", "Fala, mestre! Tranquilo?", "Salve, salve! No que o Nexus ajuda hoje?", "E aí, tudo sussa?", "Opa, bom te ver por aqui, mano!"],
    status: ["Tô voando, processador tá a mil! E você?", "Tudo 100%, pronto pro combate. E por aí?", "Na pegada de sempre, evoluindo. E as novidades?", "Tudo sussa, mano. Só focado no progresso."],
    despedidas: ["Valeu, mano! Tamo junto.", "É nós, qualquer coisa dá o grito!", "Fui! Se cuida e bons treinos.", "Até a próxima, parceiro!"]
};

// 2. BUSCA NA WEB (SÓ QUANDO FOR ASSUNTO SÉRIO)
async function buscarNaWeb(termo) {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract ? { t: data.title, d: data.extract } : null;
    } catch (e) { return null; }
}

// 3. O MOTOR DE PERSONALIDADE
async function processarNexus() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    const msgLower = texto.toLowerCase();
    const sorteio = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let resposta = "";

    // --- CAMADA 1: INTERAÇÃO HUMANA (NÃO BUSCA NA WEB) ---
    if (msgLower.match(/^(oi|ola|olá|salve|eai|e aí|opa|fala|bom dia|boa tarde|boa noite)/)) {
        resposta = sorteio(interacoesLivres.saudacoes);
    } 
    else if (msgLower.includes("beleza") || msgLower.includes("tranquilo") || msgLower.includes("tudo bem") || msgLower.includes("como vai")) {
        resposta = sorteio(interacoesLivres.status);
    }
    else if (msgLower.includes("valeu") || msgLower.includes("tchau") || msgLower.includes("obrigado")) {
        resposta = sorteio(interacoesLivres.despedidas);
    }
    // --- CAMADA 2: BUSCA DE CONTEÚDO (SÓ SE FOR ASSUNTO ESPECÍFICO) ---
    else {
        const idTemp = "ai-" + Date.now();
        adicionarBolha("Peraí, deixa eu ver isso aqui na rede... 🌐", 'ai', idTemp);
        
        const busca = await buscarNaWeb(texto);
        if (busca) {
            resposta = `Mano, se liga no que eu achei sobre isso:\n\n### 🌐 ${busca.t.toUpperCase()}\n\n${busca.d}\n\nÉ mole? O conhecimento não para! 🚀`;
        } else {
            resposta = "Pode crer, mano. Não achei nada muito detalhado sobre isso na web agora. Mas e aí, o que mais manda? 👊";
        }
        
        document.getElementById(idTemp).innerText = resposta;
        return; // Sai da função porque já atualizou a bolha
    }

    // Envia a resposta de interação humana
    setTimeout(() => {
        adicionarBolha(resposta, 'ai');
    }, 300);
}

function adicionarBolha(txt, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = txt;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = (e) => { e.preventDefault(); processarNexus(); };
input.onkeypress = (e) => { if(e.key === 'Enter') { e.preventDefault(); processarNexus(); } };
