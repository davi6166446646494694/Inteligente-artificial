const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // 1. MOTOR MATEMÁTICO (Contas Absurdas)
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const resultado = eval(msg.replace('^', '**')); 
            return `Cálculo processado! O resultado de "${msg}" é: **${resultado}**. A matemática não mente! 🧮`;
        } catch (e) { }
    }

    const bancoDeDados = [
        // CARROS E MECÂNICA
        {
            chaves: ["carro", "motor", "veículo", "automóvel", "gasolina", "pneu"],
            resposta: "Falar de máquina é outra história! 🚗 Se for comprar um usado, olha sempre a quilometragem e o histórico de revisão. Motor turbo anda mais, mas exige óleo de primeira. Qual sua barca dos sonhos?"
        },
        // PASSAPORTE E VIAGEM
        {
            chaves: ["passaporte", "visto", "viagem", "viajar", "pf", "polícia federal"],
            resposta: "Para tirar o passaporte, você precisa agendar no site da Polícia Federal, pagar a GRU e levar seus documentos. Se o destino for pros EUA, tem que correr atrás do visto cedo, a fila tá grande! ✈️"
        },
        // REDES SOCIAIS E FAMOSOS
        {
            chaves: ["instagram", "insta", "twitter", "tt", "youtube", "yt", "tiktok", "famoso", "influencer"],
            resposta: "O algoritmo não para! 📱 No TikTok e Reels o segredo é o 'hook' nos primeiros 3 segundos. Já no YouTube, o que manda é a retenção. Ser famoso hoje é constância e saber lidar com o hype!"
        },
        // IMPOSTOS E DINHEIRO
        {
            chaves: ["imposto", "leão", "receita federal", "ipva", "iptu", "irpf", "taxa"],
            resposta: "Imposto é o que mantém o Estado, mas dói no bolso! 💸 O IPVA é sobre o carro, IPTU sobre a casa e o Imposto de Renda é sobre o que você ganha. Organiza suas notas fiscais pra não cair na malha fina!"
        },
        // POLÍTICA E PRESIDENTES
        {
            chaves: ["presidente", "política", "eleição", "governo", "voto"],
            resposta: "O Presidente é o chefe do Executivo, mas ele não manda sozinho; precisa do Congresso. Conhecer a história dos presidentes ajuda a entender por que o país está assim hoje. Informação é poder! 🏛️"
        },
        // ACADEMIA E PERSONAL (O que já tínhamos, reforçado)
        {
            chaves: ["academia", "personal", "treino", "suplemento", "creatina", "whey"],
            resposta: "Treino de elite exige disciplina! 🏋️‍♂️ O personal monta sua estratégia, mas quem puxa o ferro é você. Creatina ajuda na força e o Whey na recuperação. Já bateu sua proteína hoje?"
        },
        // PROGRAMAÇÃO
        {
            chaves: ["python", "javascript", "js", "html", "css", "programação", "codigo"],
            resposta: "Programar é a linguagem do futuro! 💻 Python para dados e IA, JS para deixar tudo interativo na web. Se travar no código, respira e revisa a lógica. O erro é seu melhor professor!"
        },
        // PAÍSES E CURIOSIDADES
        {
            chaves: ["japão", "eua", "europa", "país", "fuso"],
            resposta: "Cada canto do mundo tem sua regra. No Japão a educação é extrema, nos EUA o consumo é gigante. O mundo é um tabuleiro e a gente tá aqui pra aprender com cada cultura! 🌍"
        },
        // AGRADECIMENTOS E GENTILEZA
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido", "obrigada"],
            resposta: "Tamo junto demais! 👊 Precisando de qualquer informação específica ou de um cálculo doido, é só gritar o Nexus!"
        }
    ];

    // Lógica de busca
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) return item.resposta;
        }
    }

    const padrao = [
        "Essa eu não tenho no meu banco ainda, mas soou interessante! Me explica melhor?",
        "Massa! Desenvolve essa ideia aí, o Nexus quer aprender mais sobre isso.",
        "Pode crer! Me dá mais detalhes específicos sobre o que você quer saber?"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}

// INTERFACE
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
