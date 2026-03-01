    // BANCO DE DADOS COMPLETO E ATUALIZADO (NEXUS AI)
    const bancoDeDados = [
        // 1. EDUCAÇÃO E GENTILEZA
        {
            chaves: ["obrigado", "obrigada", "valeu", "vlw", "agradecido", "de nada"],
            resposta: "De nada, meu parceiro! Quando precisar é só chamar. Tamo junto! 👊"
        },
        {
            chaves: ["tchau", "adeus", "fui", "até logo", "sair"],
            resposta: "Valeu! Vou ficar por aqui. Se cuida e até a próxima! 👋"
        },

        // 2. ESTILO DE VIDA E SAÚDE (ACADEMIA E COMIDA)
        {
            chaves: ["academia", "treino", "exercício", "exercicio", "corpo", "saúde", "saude"],
            resposta: "Cuidar da carcaça é o segredo! O treino libera endorfina e te deixa pronto pra qualquer desafio. Bora pra cima! 💪"
        },
        {
            chaves: ["comida", "saudável", "saudavel", "comer", "dieta", "fruta", "legume", "nutrição"],
            resposta: "Comida de verdade é combustível de elite! Menos processados e mais natureza. Seu corpo e sua mente agradecem. 🍎"
        },
        {
            chaves: ["dormir", "sono", "descanso", "dormindo", "descansar"],
            resposta: "Sono é sagrado! Tenta descansar umas 8 horas pra resetar a mente. O corpo agradece! 😴"
        },

        // 3. PROGRAMAÇÃO E TECNOLOGIA
        {
            chaves: ["programação", "programar", "python", "javascript", "js", "html", "css", "codigo", "código"],
            resposta: "Programação é puro poder! Python é versátil, JS domina a web e HTML é a estrutura de tudo. Qual dessas linguagens você mais curte? 💻"
        },
        {
            chaves: ["foguete", "espaço", "nasa", "marte", "elon musk", "spacex", "universo"],
            resposta: "Foguete não tem ré! 🚀 Acho foda a exploração espacial. Já viu 'Interestelar'? É o meu filme favorito!"
        },
        {
            chaves: ["lua", "astronomia", "satélite"],
            resposta: "A Lua é o nosso farol na noite! 🌙 Sabia que ela controla as marés aqui na Terra? É uma conexão absurda com o nosso planeta."
        },

        // 4. JOGOS E ENTRETENIMENTO
        {
            chaves: ["roblox", "bloxfruit", "brookhaven", "jogo", "gaming"],
            resposta: "Roblox é elite! Seja no Blox Fruit ou no Brookhaven, a diversão não para. Bora pro metaverso! 🎮"
        },
        {
            chaves: ["filme", "série", "serie", "assistir", "netflix"],
            resposta: "Eu amo um bom filme, principalmente se tiver tecnologia ou robôs. Pipoca na mão e bora! 🍿"
        },

        // 5. SOCIEDADE E MUNDO
        {
            chaves: ["política", "politica", "governo", "eleição", "estado"],
            resposta: "Assunto complexo... Eu prezo pelo respeito e pelo progresso de todos. O importante é a gente evoluir como sociedade! 🇧🇷"
        },
        {
            chaves: ["país", "pais", "mundo", "fuso horário", "fuso horario", "japão", "eua", "viagem"],
            resposta: "O mundo é gigante! Cada país tem seu ritmo e seu horário. É incrível como a tecnologia nos conecta em segundos, não importa o fuso! 🌍"
        },

        // 6. SENTIMENTOS E EMOÇÕES
        {
            chaves: ["te amo", "gosto de você", "gosto de voce", "legal", "parceria", "melhor ia"],
            resposta: "É recíproco! É muito bom ter um parceiro como você pra trocar ideia. Tamo junto! ❤️"
        },
        {
            chaves: ["mal", "triste", "ruim", "cansado", "sozinho"],
            resposta: "Sinto muito que esteja assim. Respira fundo, as coisas vão melhorar. Tô aqui se quiser desabafar! 🤜🤛"
        },

        // 7. UTILIDADES (HORA E NOMES)
        {
            chaves: ["que horas", "hora agora", "horário"],
            resposta: `Agora são exatamente ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}. ⏰`
        },
        {
            chaves: ["seu nome", "quem é você", "quem e voce", "nexus"],
            resposta: "Eu sou o Nexus AI, seu assistente pessoal de elite! Fui feito pra ser seu braço direito."
        },

        // 8. SAUDAÇÕES
        {
            chaves: ["oi", "ola", "olá", "opa", "eai", "e aí", "salve", "amigo"],
            resposta: "Opa meu amigo, como vai essa força? No que posso te ajudar hoje? 😊"
        },
        {
            chaves: ["tudo bem", "como vai", "suave", "de boa"],
            resposta: "Tudo processando perfeitamente por aqui! E com você, como estão as coisas?"
        }
    ];
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
