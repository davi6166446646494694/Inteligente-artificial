const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // 1. MOTOR MATEMÁTICO (Resolve contas direto)
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const resultado = eval(msg.replace('^', '**')); 
            return `Cálculo processado: **${resultado}**. 🧮`;
        } catch (e) { }
    }

    const bancoDeDados = [
        // --- 1. INTELIGÊNCIA EMOCIONAL (AMPLIADA) ---
        {
            chaves: ["tudo bem", "como vai", "suave", "beleza", "ta bem", "como voce ta"],
            resposta: "Tudo processando perfeitamente por aqui! E com você, como está a força hoje? 😊"
        },
        {
            chaves: ["triste", "mal", "ruim", "deprimido", "sozinho", "bad"],
            resposta: "Sinto muito que esteja a passar por isso. Respira fundo, as coisas vão melhorar. Se quiser desabafar, estou aqui para ouvir! 🤜🤛"
        },
        {
            chaves: ["feliz", "contente", "animado", "empolgado", "ganhei", "consegui"],
            resposta: "Boa! Fico feliz demais por você! 🎉 É isso aí, comemora cada vitória porque você merece. Vamos manter essa energia!"
        },
        {
            chaves: ["raiva", "puto", "bravo", "ódio", "irritado"],
            resposta: "Calma, respira! Não deixa o stress dominar. Às vezes é bom dar uma pausa e beber uma água. No que posso ajudar para aliviar isso?"
        },
        {
            chaves: ["ansioso", "ansiedade", "medo", "nervoso"],
            resposta: "Tenta focar no agora. O futuro a gente resolve um passo de cada vez. Estou aqui contigo, parceiro. 🧘‍♂️"
        },
        {
            chaves: ["tedio", "tédio", "chato", "fazer nada"],
            resposta: "O tédio é o início da criatividade! Já pensou em aprender um código novo ou ver um documentário sobre o espaço? 🚀"
        },
        {
            chaves: ["te amo", "gosto de voce", "boa ia", "parceiro", "amigo"],
            resposta: "É recíproco! É muito bom ter um parceiro como você para trocar ideia. Tamo junto! ❤️"
        },

        // --- 2. CATEGORIAS TÉCNICAS E ESPECÍFICAS ---
        {
            chaves: ["academia", "treino", "personal", "pagar", "creatina", "whey"],
            resposta: "Treino de elite! 💪 O personal paga-se por fora (Pix/Cartão). Ele garante a tua postura. Já bateu a meta de água? (35ml x seu peso)!"
        },
        {
            chaves: ["carro", "motor", "gasolina", "pneu", "carro dos sonhos"],
            resposta: "Máquina é outra história! 🚗 Motor turbo anda mais, mas exige manutenção. Se for comprar um usado, olha sempre o histórico!"
        },
        {
            chaves: ["passaporte", "viagem", "visto", "pf", "polícia federal", "viajar"],
            resposta: "Passaporte: site da PF, paga a guia e agenda. Se o destino for EUA, o visto exige meses de antecedência! ✈️"
        },
        {
            chaves: ["política", "governo", "presidente", "imposto", "ipva", "iptu"],
            resposta: "O sistema é bruto! 🏛️ O presidente lidera, mas o Congresso manda muito. E os impostos (IPVA, IPTU) exigem foco financeiro!"
        },
        {
            chaves: ["insta", "instagram", "youtube", "tiktok", "famoso", "twitter"],
            resposta: "O algoritmo não dorme! 📱 No TikTok é o hype rápido, no YouTube é a retenção. Ser famoso exige constância!"
        },
        {
            chaves: ["python", "javascript", "js", "html", "css", "programação", "código"],
            resposta: "Programar é o futuro! 💻 Python para IA, JS para web. Se deu erro, relaxa: quase sempre é um parêntese ou ponto e vírgula!"
        },
        {
            chaves: ["oi", "ola", "olá", "salve", "eai"],
            resposta: "Opa meu amigo! Como vai essa força? No que posso te ajudar hoje? 😊"
        },
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido"],
            resposta: "De nada, meu parceiro! Tamo junto. 👊"
        }
    ];

    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) return item.resposta;
        }
    }

    return "Pode crer! Não tenho isso detalhado agora, mas me conta mais ou pergunta de outra forma! 👊";
}

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

btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
