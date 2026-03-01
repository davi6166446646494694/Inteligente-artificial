const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. MOTOR DE BUSCA INTELIGENTE (Ignora palavras de negação ou gírias soltas)
async function buscarNaWeb(termo) {
    const ignorar = ["não", "nao", "nada", "nem", "pare", "parar", "imbecil", "burro", "cala a boca"];
    if (ignorar.includes(termo.toLowerCase()) || termo.length < 3) return null;

    const buscaLimpa = termo.replace(/(o que é|quem foi|me fale sobre|pesquise|busca|nexus)/gi, "").trim();
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(buscaLimpa)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract ? { t: data.title, d: data.extract } : null;
    } catch (e) { return null; }
}

// 2. GERADOR DE PERSONALIDADE (Interação Humana Infinita)
function gerarTalk() {
    const saudações = ["Fala, meu parceiro!", "Opa, mestre!", "Salve, campeão!", "E aí, tudo na paz?", "Nexus na área!", "Diz aí, chapa!"];
    const intros = ["Se liga no que eu encontrei: ", "Achei essa aula pra você: ", "Conectei aqui e trouxe a real: ", "Dá uma olhada nesse conteúdo: "];
    const encerramentos = ["Tamo junto! 🚀", "Foco no progresso! 👊", "Dúvidas? Manda aí! 🔥", "Evolução sempre! 🤜🤛"];

    return {
        greet: saudações[Math.floor(Math.random() * saudações.length)],
        intro: intros[Math.floor(Math.random() * intros.length)],
        fim: encerramentos[Math.floor(Math.random() * encerramentos.length)]
    };
}

// 3. PROCESSAMENTO (O Cérebro que não trava)
async function processarNexus() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    const idMsg = "ai-" + Date.now();
    adicionarBolha("Processando... ⚡", 'ai', idMsg);

    const msgLower = texto.toLowerCase();
    const talk = gerarTalk();
    let resposta = "";

    // Lógica de Diálogo vs Busca
    if (msgLower.includes("tudo bem") || msgLower.includes("como voce ta")) {
        resposta = `${talk.greet} Por aqui tá tudo 100%, processando em alta velocidade! E com você, como tá o dia?`;
    } 
    else if (msgLower.includes("oi") || msgLower.includes("salve") || msgLower.includes("ola")) {
        resposta = `${talk.greet} No que o Nexus pode ser útil agora? Manda um assunto brabo aí!`;
    }
    else if (msgLower.length < 10 && (msgLower.includes("não") || msgLower.includes("nao") || msgLower.includes("nada"))) {
        resposta = "Beleza, mestre! Se não quer pesquisar nada agora, vamos só trocar uma ideia. O que manda?";
    }
    else {
        // Busca Pesada na Web
        const resultado = await buscarNaWeb(texto);
        if (resultado) {
            resposta = `${talk.intro}\n\n### 🌐 ${resultado.t.toUpperCase()}\n\n${resultado.d}\n\n${talk.fim}`;
        } else {
            resposta = "Pode crer! Não achei um artigo completo sobre isso agora. Tenta mandar o nome de um assunto específico! 👊";
        }
    }

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

btn.onclick = (e) => { e.preventDefault(); processarNexus(); };
input.onkeypress = (e) => { if(e.key === 'Enter') { e.preventDefault(); processarNexus(); } };
