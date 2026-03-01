function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    const bancoDeDados = [
        // 1. EDUCAÇÃO E GENTILEZA (EMOÇÃO)
        {
            chaves: ["obrigado", "obrigada", "valeu", "vlw", "agradecido"],
            resposta: "De nada, meu parceiro! Quando precisar é só me dar um grito. Tamo junto! 👊"
        },
        {
            chaves: ["te amo", "gosto de voce", "legal", "amigo"],
            resposta: "É recíproco! É muito bom ter alguém como você pra trocar ideia. O sentimento é de amizade pura! ❤️"
        },

        // 2. ENTRETENIMENTO (FOGUETE, FILMES E ROBLOX)
        {
            chaves: ["foguete", "espaco", "nasa", "marte", "elon musk", "spacex"],
            resposta: "Foguete não tem ré! 🚀 Eu acho fascinante a ideia da gente colonizar outros planetas. Já assistiu 'Interestelar'? É o melhor filme de todos!"
        },
        {
            chaves: ["filme", "serie", "cinema", "assistir"],
            resposta: "Eu curto filmes que mexem com a cabeça ou que falam do futuro. Se tiver robô ou exploração espacial, eu tô dentro! Pipoca na mão?"
        },
        {
            chaves: ["roblox", "bloxfruit", "brookhaven", "adote me", "jogo"],
            resposta: "Roblox é clássico! Se for jogar um Blox Fruit ou um Brookhaven, me avisa. É o metaverso onde a diversão não para! 🎮"
        },

        // 3. SAÚDE E COMIDA (LIFESTYLE)
        {
            chaves: ["comida", "saudavel", "comer", "dieta", "fruta", "legume", "academia"],
            resposta: "Cuidar da carcaça é importante! Trocar um refri por um suco natural ou um lanche por uma fruta faz toda a diferença. Corpo são, mente sã! 🍎🥦"
        },

        // 4. POLÍTICA E OPINIÃO
        {
            chaves: ["politica", "governo", "eleicao", "presidente"],
            resposta: "Política é um assunto delicado, né? O importante é a gente sempre buscar o que é melhor para o povo e ter respeito pelas opiniões diferentes. O progresso vem da união!"
        },

        // 5. UTILIDADES (DORMIR, HORAS, NOMES)
        {
            chaves: ["dormir", "sono", "descanso"],
            resposta: "Dormir é sagrado! Desliga essa tela um pouco, descansa a mente por umas 8 horas e amanhã você volta com tudo. Sono é vida! 😴"
        },
        {
            chaves: ["nome", "me chama", "como eu me chamo"],
            resposta: "Eu te chamo de mestre, ou de parceiro! Mas se quiser, me diz seu nome que eu tento gravar nos meus circuitos."
        },

        // 6. SAUDAÇÕES BÁSICAS (Sempre por último)
        {
            chaves: ["oi", "ola", "opa", "eai", "salve"],
            resposta: "Opa! No que estamos focados hoje? Pode falar!"
        }
    ];

    // Lógica de busca
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) {
                return item.resposta;
            }
        }
    }

    // Resposta aleatória para "não entendi"
    const padrao = [
        "Essa eu não captei, mas conta mais!",
        "Fiquei curioso, desenvolve mais essa ideia...",
        "Interessante... o que mais você pensa sobre isso?"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}
