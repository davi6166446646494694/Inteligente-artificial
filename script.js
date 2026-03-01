const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// MEMÓRIA DO NEXUS
let historicoConversa = [];

// 1. MOTOR DE BUSCA DE ALTA PERFORMANCE (HÍBRIDO)
async function buscaNexusPro(termo) {
    const wikiUrl = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termo)}`;
    
    try {
        const res = await fetch(wikiUrl);
        const data = await res.json();
        
        if (data.extract) {
            return {
                titulo: data.title,
                conteudo: data.extract,
                link: data.content_urls.desktop.page,
                fonte: "Base de Dados Global"
            };
        }
    } catch (e) { return null; }
    return null;
}

// 2. SISTEMA DE INTERAÇÃO DINÂMICA (MILHARES DE COMBINAÇÕES)
function construirRespostaHumana(artigo, msg) {
    const intros = [
        "Mano, se liga no que eu encontrei na rede: ",
        "Opa, mestre! Processei os dados e o resultado foi esse: ",
        "Salve! Conectei nos servidores e trouxe a real sobre isso: ",
        "E aí, parceiro! Achei um conteúdo pesado pra você: ",
        "Direto da nuvem, aqui está a aula completa: ",
        "Nexus online! Analisando o seu pedido, encontrei isso: ",
        "Fiz uma varredura completa e aqui está o relatório: ",
        "Fala, chefe! Encontrei exatamente o que você precisava: "
    ];

    const reacoes = [
        "Achei esse assunto bem denso, o que você acha?",
        "Isso clareou as ideias ou quer que eu aprofunde mais?",
        "Tamo junto na busca pela evolução! Mais alguma dúvida?",
        "O conhecimento não para, e o Nexus tá aqui pra isso. 👊",
        "Espero que esse artigo mude seu patamar sobre o tema! 🚀"
    ];

    const i = intros[Math.floor(Math.random() * intros.length)];
    const r = reacoes[Math.floor(Math.random() * reacoes.length)];

    if (artigo) {
        return `${i}\n\n### 🌐 ${artigo.titulo.toUpperCase()}\n\n${artigo.conteudo}\n\n*Fonte: ${artigo.fonte}*\n\n${r}`;
    }
    
    return "Pode crer! Não achei um artigo de página inteira agora, mas me dá mais detalhes que eu busco de novo! 👊";
}

// 3. PROCESSAMENTO LÓGICO E INTERATIVO
async function motorPrincipal() {
    const textoOriginal = input.value.trim();
    if (!textoOriginal) return;

    adicionarBolha(textoOriginal, 'user');
    input.value = '';

    // Efeito de Carregamento
    const idTemp = "nexus-" + Date.now();
    adicionarBolha("Processando nos servidores... ⚡", 'ai', idTemp);

    const msgLower = textoOriginal.toLowerCase();
    let respostaFinal = "";

    // Lógica de Emoção Direta
    if (msgLower.includes("tudo bem") || msgLower.includes("como voce ta")) {
        respostaFinal = "Tudo voando em 100% por aqui, mestre! Pronto para a próxima tarefa. E com você?";
    } 
    else if (msgLower.includes("oi") || msgLower.includes("salve") || msgLower.includes("ola")) {
        const saudações = ["Salve, meu chapa!", "Opa! Tudo na paz?", "Fala, parceiro!", "Nexus na área!"];
        respostaFinal = saudações[Math.floor(Math.random() * saudações.length)] + " O que vamos pesquisar hoje?";
    }
    else {
        // Busca na Internet
        const termo = textoOriginal.replace(/(o que é|quem foi|me fale sobre|pesquise|busca|nexus)/gi, "").trim();
        const dadosWeb = await buscaNexusPro(termo);
        respostaFinal = construirRespostaHumana(dadosWeb, textoOriginal);
    }

    // Atualiza a bolha com a resposta real
    setTimeout(() => {
        const bolha = document.getElementById(idTemp);
        bolha.innerText = respostaFinal;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

// 4. INTERFACE E RENDERIZAÇÃO
function adicionarBolha(texto, tipo, id = null) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    if (id) div.id = id;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = motorPrincipal;
input.onkeypress = (e) => { if (e.key === 'Enter') motorPrincipal(); };
