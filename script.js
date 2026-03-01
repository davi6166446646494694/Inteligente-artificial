const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // BANCO DE DADOS ORGANIZADO POR PRIORIDADE
    const bancoDeDados = [
        // 1. UTILIDADES E SAÚDE (Checar primeiro para evitar confusão)
        {
            chaves: ["dormir", "horas", "sono", "descansar"],
            resposta: "O ideal para um adulto é dormir entre 7 a 9 horas por noite para recuperar as energias e manter a mente afiada!"
        },
        {
            chaves: ["horas", "que horas são", "horario"],
            resposta: `Agora são exatamente ${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}.`
        },
        
        // 2. SENTIMENTOS E REAÇÕES
        {
            chaves: ["te amo", "gosto de voce", "melhor ia", "parceria"],
            // Removi a palavra 'amigo' daqui para não bugar perguntas que usem essa palavra
            resposta: "Fico feliz com o reconhecimento! Minha missão é ser a melhor ferramenta para você."
        },
        {
            chaves: ["mal", "triste", "ruim", "cansado"],
            resposta: "Sinto muito por isso. Se precisar desabafar, estou aqui. Às vezes uma pausa ajuda muito."
        },

        // 3. SAUDAÇÕES (Ficam por último para não roubarem a prioridade)
        {
            chaves: ["oi", "ola", "opa", "eai", "salve", "amigo"],
            resposta: "Opa! Como posso te ajudar agora?"
        },
        {
            chaves: ["quem e voce", "seu nome", "nexus"],
            resposta: "Eu sou o Nexus AI, seu assistente pessoal rodando via APK!"
        }
    ];

    // Busca inteligente
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) {
                return item.resposta;
            }
        }
    }

    // Resposta padrão caso não entenda
    const padrao = [
        "Pode me dar mais detalhes sobre isso?",
        "Não tenho certeza se entendi, mas continue falando.",
        "Interessante. Como posso te ajudar com isso?"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}

// MANTENHA AS FUNÇÕES DE INTERFACE ABAIXO (enviarMensagem, adicionarBolha, etc.)
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
