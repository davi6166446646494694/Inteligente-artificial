const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. FUNÇÃO PRINCIPAL DA IA
function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // MOTOR MATEMÁTICO (Resolve na hora)
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const resultado = eval(msg.replace('^', '**')); 
            return `Cálculo feito: **${resultado}**. 🧮`;
        } catch (e) { }
    }

    const bancoDeDados = [
        {
            chaves: ["academia", "treino", "personal", "pagar", "creatina", "whey", "saúde"],
            resposta: "Treino de elite! 💪 O personal você paga por fora (Pix/Cartão). Ele garante a postura pra você não se lesionar. Já bateu a meta de água hoje? (35ml x seu peso)!"
        },
        {
            chaves: ["carro", "motor", "veículo", "gasolina", "pneu", "carro dos sonhos"],
            resposta: "Máquina é outra história! 🚗 Motor turbo anda mais, mas exige manutenção. Se for comprar usado, olha sempre o histórico de revisões e a quilometragem!"
        },
        {
            chaves: ["passaporte", "viagem", "visto", "pf", "polícia federal", "viajar"],
            resposta: "Passaporte: site da PF, paga a guia (GRU) e agenda. Se o destino for EUA, o visto é outra batalha, tem que agendar com meses de antecedência! ✈️"
        },
        {
            chaves: ["política", "governo", "presidente", "eleição", "voto", "imposto", "ipva", "iptu"],
            resposta: "O sistema é bruto! 🏛️ O presidente lidera, mas depende do Congresso. E os impostos (IPVA do carro, IPTU da casa) não dão trégua. O segredo é organização financeira!"
        },
        {
            chaves: ["insta", "instagram", "twitter", "tt", "youtube", "tiktok", "famoso", "influencer"],
            resposta: "O algoritmo não dorme! 📱 No TikTok é o hype, no YouTube é a retenção. Ser famoso hoje exige constância absurda e pele grossa pros haters!"
        },
        {
            chaves: ["python", "javascript", "js", "html", "css", "programação", "código"],
            resposta: "Programar é o novo inglês! 💻 Python pra IA, JS pra web. Se o código deu erro, relaxa: 90% das vezes é um ponto e vírgula ou um parêntese faltando!"
        },
        {
            chaves: ["japão", "eua", "europa", "país", "fuso horário", "mundo"],
            resposta: "O mundo tem 24 fusos. Enquanto você treina aqui, no Japão a galera já tá jantando! 🌍 Cada país tem sua cultura e suas regras de etiqueta."
        },
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido", "salve", "oi", "ola"],
            resposta: "Tamo junto, meu parceiro! No que eu puder ajudar no seu sistema, é só mandar! 👊😊"
        }
    ];

    // Busca a resposta certa
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) return item.resposta;
        }
    }

    // RESPOSTA PADRÃO CURTA (Para não ficar repetindo "me dá detalhes")
    return "Não entendi essa... tenta usar palavras como 'academia', 'carro', 'imposto' ou manda uma conta de matemática! 👊";
}

// 2. FUNÇÕES DE INTERFACE
function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
    }, 500);
}

function adicionarBolha(texto, tipo) {
    const div = document.createElement('div');
    div.className = `msg ${tipo}`;
    div.innerText = texto;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 3. CONTROLES
btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
