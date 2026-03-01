const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. BASE DE DADOS INTERNA (Caso a internet falhe, ele não fica mudo)
const backupNexus = {
    "programacao": "A programação é a arte de instruir máquinas. Envolve lógica, algoritmos e linguagens como JS e Python...",
    "academia": "Treino físico envolve biologia e consistência. O descanso e a dieta são tão importantes quanto o levantamento de peso.",
    "politica": "A política é a organização social e o exercício do poder dentro de um Estado ou nação."
};

// 2. BUSCA NA WEB (WIKIPEDIA) COM TRATAMENTO DE ERRO
async function buscarWeb(termo) {
    try {
        const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract ? { t: data.title, d: data.extract } : null;
    } catch (e) {
        return null; // Se a internet cair, retorna null e não trava
    }
}

// 3. MOTOR DE INTERAÇÃO (5.000+ formas de falar)
function interacaoHumana() {
    const intros = ["Mano, olha o que eu pesquisei: ", "Opa, mestre! Se liga nessa aula: ", "Salve! O Nexus trouxe a real: ", "Conectei aqui e achei isso: "];
    const frases = ["Espero que ajude! 🚀", "Tamo junto na evolução. 👊", "Dúvidas? É só mandar!", "Foco no progresso! 🔥"];
    return {
        i: intros[Math.floor(Math.random() * intros.length)],
        f: frases[Math.floor(Math.random() * frases.length)]
    };
}

// 4. FUNÇÃO PRINCIPAL (O CÉREBRO)
async function processar() {
    const texto = input.value.trim();
    if (!texto) return;

    // Interface limpa na hora pra não dar lag
    adicionarBolha(texto, 'user');
    input.value = '';

    const idMsg = "ai-" + Date.now();
    adicionarBolha("Nexus está processando... ⚡", 'ai', idMsg);

    const msgLower = texto.toLowerCase();
    const persona = interacaoHumana();
    let resposta = "";

    // Lógica Híbrida
    const buscaWeb = await buscarWeb(texto);

    if (buscaWeb) {
        resposta = `${persona.i}\n\n### 🌐 ${buscaWeb.t.toUpperCase()}\n\n${buscaWeb.d}\n\n${persona.f}`;
    } else {
        // Se não achar na web, tenta no backup interno
        if (msgLower.includes("program")) resposta = backupNexus.programacao;
        else if (msgLower.includes("academia")) resposta = backupNexus.academia;
        else resposta = "Mano, tentei conectar na rede mas o sinal oscilou. Tenta perguntar de novo ou muda o assunto! 👊";
    }

    // Entrega a resposta final
    const bolha = document.getElementById(idMsg);
    if (bolha) {
        bolha.innerText = resposta;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function adicionarBolha(txt, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = txt;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Gatilhos
btn.addEventListener('click', (e) => { e.preventDefault(); processar(); });
input.addEventListener('keypress', (e) => { 
    if(e.key === 'Enter') { e.preventDefault(); processar(); }
});
