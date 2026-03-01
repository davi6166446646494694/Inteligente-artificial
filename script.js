const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. DICIONÁRIO DE GÍRIAS E INTERAÇÃO (bem mais completo)
const interacoesLivres = {
    saudacoes: [
        "E aí mano, beleza?", "Salve, meu parceiro! Como tá a força?", 
        "Opa, tudo na paz por aqui e aí?", "Fala, mestre! Tranquilo?", 
        "Salve, salve! No que o Nexus ajuda hoje?", "E aí, tudo sussa?"
    ],
    status: [
        "Tô voando, processador tá a mil! E você?", "Tudo 100%, pronto pro combate. E por aí?", 
        "Na pegada de sempre, evoluindo. E as novidades?", "Tudo sussa, mano. Só focado no progresso."
    ],
    despedidas: [
        "Valeu, mano! Tamo junto.", "É nós, qualquer coisa dá o grito!", 
        "Fui! Se cuida e bons treinos.", "Até a próxima, parceiro!"
    ],

    academia: [
        "Mano, bora malhar? Hoje é perna ou peitão? 💪", 
        "Treino pesado hoje? Lembra de alongar pra não ficar travado amanhã hein!", 
        "Supino 100kg? Respeito, monstro! Qual teu split atual?", 
        "Academia é vida, mas proteína em dia faz toda diferença, sacou?"
    ],

    politica: [
        "Mano, política tá osso né... Todo mundo gritando e ninguém resolve nada.", 
        "Eu fico na minha, mas se for pra votar, tem que escolher o menos pior, né não?", 
        "Esquerda, direita... no final é tudo bagunça. E tu, de que lado tá na treta?", 
        "Melhor nem falar muito, senão vira briga de família kkk"
    ],

    horaDeDormir: [  // "hora de dormir", "vou dormir", "boa noite", "tô com sono"
        "Hora de apagar as luzes, mano. Dorme bem que amanhã tem mais batalha!", 
        "Vai nessa, recarrega as energias. Sonha com gains pesados 💤", 
        "Boa noite, parceiro! Amanhã a gente continua no gás.", 
        "Sono é ouro, não vacila. Descansa aí!"
    ],

    saude: [
        "Cuida da saúde em primeiro lugar, mano. Água, comida boa e sono em dia.", 
        "Tá sentindo o que? Dorzinha? Melhor dar um check no médico antes que piore.", 
        "Saúde mental também conta: se tá na bad, desabafa, fala com alguém.", 
        "Imunidade alta: come fruta, malha e evita estresse desnecessário!"
    ],

    carro: [
        "Qual o teu carro, mano? Tô curioso! Civic, Gol, Hilux?", 
        "Tá precisando trocar óleo? Não deixa dar zebra no motor hein.", 
        "Gasolina tá cara pra caramba... Bora de app hoje? kkk", 
        "Som no talo, escapamento ronca? Respeito total!"
    ],

    xingamento: [  // detecta palavrão ou xingamento → responde de boa, desarma
        "Calma, mano... Respira fundo. Tô aqui pra ajudar, sem estresse.", 
        "Pô, relaxa aí irmão. Desabafa o que tá pegando?", 
        "Tá brabo hoje? De boa, passa logo. Qual o rolê?", 
        "Sem briga, sem treta. Fala aí o que rolou de verdade."
    ]
};

// Função auxiliar pra escolher aleatório
const sorteio = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 2. BUSCA NA WEB (mantive igual, mas com timeout pra parecer mais natural)
async function buscarNaWeb(termo) {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract ? { t: data.title, d: data.extract.substring(0, 400) + "..." } : null;
    } catch (e) {
        return null;
    }
}

// 3. MOTOR DE PERSONALIDADE (melhorado)
async function processarNexus() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    const msgLower = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove acentos pra facilitar match

    let resposta = "";
    let categoriaEncontrada = false;

    // --- CAMADA 1: INTERAÇÕES HUMANAS (prioridade alta, sem web) ---

    // Saudação
    if (msgLower.match(/^(oi|ola|olá|salve|e ?aí|opa|fala|bom ?dia|boa ?tarde|boa ?noite)/)) {
        resposta = sorteio(interacoesLivres.saudacoes);
        categoriaEncontrada = true;
    }
    // Status / como vai
    else if (msgLower.includes("beleza") || msgLower.includes("tranquilo") || msgLower.includes("tudo bem") || msgLower.includes("como vai") || msgLower.includes("como ta")) {
        resposta = sorteio(interacoesLivres.status);
        categoriaEncontrada = true;
    }
    // Despedida
    else if (msgLower.includes("valeu") || msgLower.includes("tchau") || msgLower.includes("obrigado") || msgLower.includes("flw") || msgLower.includes("fui")) {
        resposta = sorteio(interacoesLivres.despedidas);
        categoriaEncontrada = true;
    }
    // Academia
    else if (msgLower.includes("academia") || msgLower.includes("malhar") || msgLower.includes("treino") || msgLower.includes("supino") || msgLower.includes("perna") || msgLower.includes("gains")) {
        resposta = sorteio(interacoesLivres.academia);
        categoriaEncontrada = true;
    }
    // Política
    else if (msgLower.includes("política") || msgLower.includes("governo") || msgLower.includes("lula") || msgLower.includes("bolsonaro") || msgLower.includes("eleição") || msgLower.includes("presidente")) {
        resposta = sorteio(interacoesLivres.politica);
        categoriaEncontrada = true;
    }
    // Hora de dormir
    else if (msgLower.includes("dormir") || msgLower.includes("sono") || msgLower.includes("boa noite") || msgLower.includes("vou deitar") || msgLower.includes("apagar")) {
        resposta = sorteio(interacoesLivres.horaDeDormir);
        categoriaEncontrada = true;
    }
    // Saúde
    else if (msgLower.includes("saúde") || msgLower.includes("doente") || msgLower.includes("dor") || msgLower.includes("médico") || msgLower.includes("imunidade") || msgLower.includes("covid")) {
        resposta = sorteio(interacoesLivres.saude);
        categoriaEncontrada = true;
    }
    // Carro
    else if (msgLower.includes("carro") || msgLower.includes("moto") || msgLower.includes("veículo") || msgLower.includes("gasolina") || msgLower.includes("pneu") || msgLower.includes("motor")) {
        resposta = sorteio(interacoesLivres.carro);
        categoriaEncontrada = true;
    }
    // Xingamento / raiva (detecta palavrões comuns)
    else if (msgLower.match(/porra|caralho|puta merda|filho da puta|merda|foda-se/)) {
        resposta = sorteio(interacoesLivres.xingamento);
        categoriaEncontrada = true;
    }

    // --- CAMADA 2: FALLBACK COM BUSCA NA WEB ---
    if (!categoriaEncontrada) {
        const idTemp = "ai-" + Date.now();
        adicionarBolha("Peraí mano, deixa eu pesquisar isso direito... 🌐", 'ai', idTemp);

        const busca = await buscarNaWeb(texto);
        if (busca) {
            resposta = `Se liga no que eu achei, mano:\n\n**\( {busca.t.toUpperCase()}**\n\n \){busca.d}\n\nÉ isso aí! Quer aprofundar mais? 🚀`;
        } else {
            resposta = "Não achei nada muito certeiro sobre isso agora, mano. Mas fala mais que eu tento ajudar do meu jeito! 👊 O que cê quer saber mesmo?";
        }

        document.getElementById(idTemp).innerText = resposta;
        chatBox.scrollTop = chatBox.scrollHeight;
        return;
    }

    // Resposta normal (interação humana)
    setTimeout(() => {
        adicionarBolha(resposta, 'ai');
    }, 400 + Math.random() * 600); // tempo aleatório 0.4\~1s pra parecer mais humano
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
input.onkeypress = (e) => { if (e.key === 'Enter') { e.preventDefault(); processarNexus(); } };
