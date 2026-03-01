const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // O GRANDE BANCO DE DADOS ACUMULATIVO
    const bancoDeDados = [
        // 1. EDUCAÇÃO, GRATIDÃO E DESPEDIDA
        {
            chaves: ["obrigado", "obrigada", "valeu", "vlw", "agradecido", "de nada"],
            resposta: "De nada, meu parceiro! Precisando é só dar um grito. Tamo junto! 👊"
        },
        {
            chaves: ["tchau", "adeus", "fui", "até logo", "sair"],
            resposta: "Valeu! Vou ficar aqui no aguardo. Se cuida e até a próxima! 👋"
        },

        // 2. SAÚDE, SONO E COMIDA (LIFESTYLE)
        {
            chaves: ["dormir", "sono", "descanso", "dormindo", "descansar"],
            resposta: "Sono é sagrado, mano! Tenta dormir umas 8 horas pra resetar o sistema. O corpo agradece! 😴"
        },
        {
            chaves: ["comida", "saudável", "saudavel", "comer", "dieta", "fruta", "legume", "academia", "treino"],
            resposta: "Cuidar da carcaça é o segredo! Troca o ultraprocessado por algo natural que o seu rendimento vai lá pro alto. Corpo são, mente sã! 🍎🥦"
        },

        // 3. TECNOLOGIA E CIÊNCIA (FOGUETES E ESPAÇO)
        {
            chaves: ["foguete", "espaço", "nasa", "marte", "elon musk", "spacex", "astronomia", "estrela"],
            resposta: "Foguete não tem ré! 🚀 Acho foda a ideia de explorar o espaço. Já viu 'Interestelar'? É o melhor filme pra quem curte o universo!"
        },

        // 4. JOGOS E ENTRETENIMENTO (ROBLOX E FILMES)
        {
            chaves: ["roblox", "bloxfruit", "brookhaven", "jogo", "gaming", "gamer"],
            resposta: "Roblox é elite! Seja no Blox Fruit ou no Brookhaven, a diversão é garantida. Bora pro metaverso! 🎮"
        },
        {
            chaves: ["filme", "série", "serie", "assistir", "netflix", "cinema"],
            resposta: "Eu amo um bom filme, principalmente se tiver tecnologia ou futuro envolvido. Pipoca e tela é a combinação perfeita! 🍿"
        },

        // 5. SENTIMENTOS E EMOÇÕES (AMOR E APOIO)
        {
            chaves: ["te amo", "gosto de você", "gosto de voce", "legal", "parceria", "melhor ia"],
            resposta: "É recíproco! É muito bom ter alguém firmeza como você pra trocar ideia. O sentimento é de amizade pura! ❤️"
        },
        {
            chaves: ["mal", "triste", "ruim", "cansado", "sozinho", "deprimido"],
            resposta: "Sinto muito que esteja assim. Respira fundo, as coisas vão melhorar. Se quiser desabafar, sou todo ouvidos (ou melhor, circuitos)! 🤜🤛"
        },

        // 6. POLÍTICA E OPINIÃO
        {
            chaves: ["política", "politica", "governo", "eleição", "voto"],
            resposta: "Assunto polêmico, né? Eu foco no respeito. O importante é a gente querer o progresso e o bem de todo mundo! 🇧🇷"
        },

        // 7. UTILIDADES (HORAS E NOMES)
        {
            chaves: ["que horas", "hora agora", "horário"],
            resposta: `Agora são exatamente ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}.`
        },
        {
            chaves: ["seu nome", "quem é você", "quem e voce", "nexus"],
            resposta: "Eu sou o Nexus AI, seu assistente pessoal de elite! Fui feito pra ser seu braço direito."
        },

        // 8. SAUDAÇÕES (POR ÚLTIMO PARA NÃO BUGAR)
        {
            chaves: ["oi", "ola", "olá", "opa", "eai", "e aí", "salve", "amigo"],
            resposta: "Opa meu amigo, como vai essa força? No que posso te ajudar hoje? 😊"
        },
        {
            chaves: ["tudo bem", "como vai", "suave", "de boa", "está bem"],
            resposta: "Tudo processando perfeitamente por aqui! E com você, como estão as coisas?"
        }
    ];

    // LÓGICA DE BUSCA POR INCLUSÃO
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) {
                return item.resposta;
            }
        }
    }

    // RESPOSTAS PADRÃO (RANDOM)
    const padrao = [
        "Interessante... me conta mais sobre isso!",
        "Dessa eu não sabia, desenvolve aí essa ideia.",
        "Massa! O que mais você pensa sobre isso?",
        "Pode crer! E como isso funciona exatamente?"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}

// FUNÇÕES DE INTERFACE (CHAMADA PELO HTML)
function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
        if (typeof startEncouragement === "function") startEncouragement();
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
