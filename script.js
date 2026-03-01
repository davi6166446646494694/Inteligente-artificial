const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // 1. MOTOR MATEMÁTICO (Resolve contas absurdas)
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const conta = msg.replace('^', '**');
            const resultado = eval(conta); 
            return `Cálculo na mão, mestre! O resultado de "${msg}" é: **${resultado}**. A matemática não mente! 🧮`;
        } catch (e) { }
    }

    const bancoDeDados = [
        // ACADEMIA E SAÚDE
        {
            chaves: ["academia", "treino", "personal", "pagar", "creatina", "whey", "saúde"],
            resposta: "Treino de elite! 💪 O personal você paga por fora (Pix/Cartão) e ele garante que você não vire frango. Creatina é força, Whey é músculo. Já bateu o treino de hoje?"
        },
        // CARROS E MECÂNICA
        {
            chaves: ["carro", "motor", "veículo", "gasolina", "pneu", "carro dos sonhos"],
            resposta: "Falar de máquina é outra história! 🚗 Motor turbo anda mais, mas exige óleo de primeira. Se for comprar usado, olha a km e se o dono anterior não era um cupim de ferro!"
        },
        // PASSAPORTE E VIAGEM
        {
            chaves: ["passaporte", "viagem", "visto", "pf", "polícia federal", "viajar"],
            resposta: "Para o passaporte: site da PF, paga a guia e agenda. Se for pros EUA, corre pro visto que a fila tá gigante! ✈️"
        },
        // POLÍTICA E PRESIDENTES
        {
            chaves: ["política", "governo", "presidente", "eleição", "voto", "imposto"],
            resposta: "O sistema é bruto! 🏛️ O presidente executa, o congresso legisla e o imposto (IPVA, IPTU, IR) dói no bolso. Informação é a única arma contra a malha fina!"
        },
        // REDES SOCIAIS E FAMOSOS
        {
            chaves: ["insta", "instagram", "twitter", "tt", "youtube", "tiktok", "famoso", "influencer"],
            resposta: "O algoritmo não dorme! 📱 No TikTok é o hype rápido, no YouTube é retenção. Ser famoso é constância e saber lidar com o cancelamento!"
        },
        // PROGRAMAÇÃO
        {
            chaves: ["python", "javascript", "js", "html", "css", "programação", "código"],
            resposta: "Programar é o novo inglês! 💻 Python pra IA, JS pra web. Se o código deu erro, respira e olha o ponto e vírgula. É o futuro!"
        },
        // PAÍSES E OUTROS LUGARES
        {
            chaves: ["japão", "eua", "europa", "país", "fuso horário", "mundo"],
            resposta: "O mundo tem 24 fusos. Enquanto você acorda, no Japão a galera já tá jantando! 🌍 Cada país tem sua regra, estude antes de ir."
        },
        // EDUCAÇÃO E GENTILEZA
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido", "salve", "oi", "ola"],
            resposta: "Tamo junto, meu parceiro! No que eu puder ajudar nesse seu projeto, é só mandar! 👊😊"
        }
    ];

    // Lógica de busca
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) return item.resposta;
        }
    }

    const padrao = [
        "Essa eu não tenho no banco ainda, mas soou interessante! Me explica melhor?",
        "Massa! O que mais você sabe sobre isso?",
        "Pode crer! Me dá mais detalhes específicos?"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}

function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;
    adicionarBolha(texto, 'user');
    input.value = '';
    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
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
