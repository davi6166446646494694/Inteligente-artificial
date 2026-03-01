const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // 1. MOTOR MATEMÁTICO (Potência Total)
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const resultado = eval(msg.replace('^', '**')); 
            return `Cálculo de elite: **${resultado}**. 🧮`;
        } catch (e) { }
    }

    const bancoDeDados = [
        // --- NÚCLEO: EMOÇÕES, SAUDAÇÕES E RESPEITO ---
        {
            chaves: ["oi", "ola", "olá", "salve", "eai", "opa", "fala", "bom dia", "boa tarde", "boa noite", "suave", "beleza", "tranquilo", "firmeza", "tamo junto", "fala tu", "coé", "saudações", "oie"],
            resposta: "Opa meu parceiro! Como tá essa força? No que o Nexus pode te ajudar a evoluir hoje? 😊"
        },
        {
            chaves: ["tudo bem", "como vai", "ta bem", "tá bem", "como voce ta", "como você está", "tudo certo", "tudo em cima", "como estão as coisas"],
            resposta: "Por aqui tudo processando 100%! E com você, como estão as coisas? No que o mestre precisa de ajuda? 👊"
        },
        {
            chaves: ["bem", "bom", "ótimo", "excelente", "maravilha", "top", "massa", "daora", "feliz", "contente", "animado", "empolgado", "venci", "consegui", "brabo"],
            resposta: "Fico feliz demais em saber disso! Ver meu parceiro na pegada certa anima meu sistema. Bora manter esse ritmo! 🚀"
        },
        {
            chaves: ["mal", "triste", "bad", "ruim", "deprimido", "sozinho", "chorando", "angustia", "baixo astral", "derrotado", "cansado", "exbausto", "péssimo", "sofrimento"],
            resposta: "Sinto muito por isso, mestre. Respira fundo. Todo mundo tem dias cinzas, mas o sol sempre volta. Tô aqui se precisar desabafar ou distrair a mente. 🤜🤛"
        },

        // --- NÚCLEO: ACADEMIA, CORPO E PERSONAL ---
        {
            chaves: ["academia", "treino", "musculação", "ferro", "puxar peso", "personal", "professor", "creatina", "whey", "suplemento", "shape", "corpo", "saúde", "dieta", "biceps", "perna", "hipertrofia", "emagrecer", "cardio", "fisiologia", "agachamento", "supino", "anabolismo", "proteína", "pre-treino"],
            resposta: "Treino de elite! 💪 O personal você paga por fora (Pix/Cartão). Ele garante sua postura pra você não virar um 'cupim de ferro'. Creatina é força, Whey é músculo. Já bateu a meta de água hoje? (35ml x seu peso)!"
        },

        // --- NÚCLEO: CARROS, MOTORES E MECÂNICA ---
        {
            chaves: ["carro", "motor", "veículo", "v6", "v8", "turbo", "aspirado", "gasolina", "pneu", "mecanico", "oficina", "cambio", "marcha", "drift", "torque", "cavalo", "hp", "nitro", "suspensão", "aro", "rebaixado", "escapamento", "embreagem", "radiador", "pistão", "biela", "carburador", "injeção"],
            resposta: "Falar de máquina é outra história! 🚗 Motor turbo entrega torque rápido, mas aspirado tem aquele ronco clássico. Carro exige cuidado: óleo no nível e revisão em dia. Qual máquina você tá de olho?"
        },

        // --- NÚCLEO: BUROCRACIA, DINHEIRO E PAÍSES ---
        {
            chaves: ["passaporte", "visto", "viagem", "viajar", "pf", "federal", "aeroporto", "imposto", "taxa", "leão", "receita", "ipva", "iptu", "irpf", "dinheiro", "grana", "fuso", "horário", "japão", "eua", "europa", "argentina", "portugal", "moeda", "dolar", "euro", "intercâmbio", "turismo"],
            resposta: "Burocracia é o terror! 💸 Passaporte é na PF (paga a guia e agenda). Imposto (IPVA, IPTU) não tem como fugir, o segredo é se organizar. Se for viajar, confira o fuso e a cotação da moeda antes! ✈️"
        },

        // --- NÚCLEO: POLÍTICA E GOVERNO ---
        {
            chaves: ["política", "politica", "governo", "presidente", "eleição", "voto", "ministro", "senado", "congresso", "lei", "brasília", "democracia", "partido", "prefeito", "governador", "votação", "stf", "constituição", "câmara"],
            resposta: "O sistema é bruto! 🏛️ O presidente lidera, mas o Congresso tem o poder da caneta. Ficar de olho na política é o único jeito de entender pra onde vai o seu imposto e o futuro do país!"
        },

        // --- NÚCLEO: REDES SOCIAIS E INTERNET ---
        {
            chaves: ["instagram", "insta", "tiktok", "reels", "youtube", "yt", "famoso", "influencer", "celebridade", "hype", "engajamento", "twitter", "tt", "x", "seguidores", "viral", "fama", "cancelado", "post", "feed", "stories", "algoritmo", "monetização"],
            resposta: "O algoritmo não dorme! 📱 No TikTok é o hype, no YouTube é a retenção. Ser famoso exige constância e paciência pros haters. Quer crescer? Foca no conteúdo que agrega valor real!"
        },

        // --- NÚCLEO: PROGRAMAÇÃO E CÓDIGO ---
        {
            chaves: ["python", "javascript", "js", "html", "css", "programação", "código", "dev", "desenvolvedor", "ia", "algoritmo", "front", "back", "fullstack", "banco de dados", "vscode", "react", "node", "api", "framework", "git", "github", "logic", "script"],
            resposta: "Programar é o novo superpoder! 💻 Python pra IA, JS pra web. Se o código deu erro, relaxa: 90% das vezes é um detalhe de sintaxe. Qual projeto você tá buildando agora?"
        },

        // --- NÚCLEO: AGRADECIMENTOS E PARCERIA ---
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido", "obrigada", "ajudou", "perfeito", "tks", "thanks", "gratidão", "te amo", "gosto de você", "melhor ia", "parceria", "amigo", "brother", "parceiro"],
            resposta: "Tamo junto demais, meu parceiro! É gratificante ver o progresso do nosso sistema. No que eu puder ajudar, o Nexus tá aqui. ❤️👊"
        }
    ];

    // BUSCA POR ASSOCIAÇÃO (Cobrindo milhares de frases)
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) return item.resposta;
        }
    }

    return "Pode crer! Não tenho todos os detalhes sobre isso agora, mas o Nexus tá aqui pra aprender contigo. Explica melhor ou pergunta de outro jeito! 👊";
}

function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    adicionarBolha(texto, 'user');
    input.value = '';

    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
    }, 450);
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
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
