const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // 1. MOTOR MATEMÁTICO (Resolve contas antes de buscar no banco)
    // Aceita números, parênteses e operadores: +, -, *, /, .
    if (/^[0-9+\-*/().\s]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            // Eval para cálculos rápidos (em um ambiente controlado de chat)
            const resultado = eval(msg); 
            return `Cálculo na mão, mestre! O resultado de "${msg}" é: **${resultado}**. Manda outra que essa foi fácil! 🧮`;
        } catch (e) {
            // Se a conta estiver mal formada, ele segue para o banco de dados
        }
    }

    // 2. BANCO DE DADOS ACUMULADO E ESPECÍFICO
    const bancoDeDados = [
        // SAÚDE, ACADEMIA E PERSONAL
        {
            chaves: ["personal", "contratar", "pagar", "professor", "treinador"],
            resposta: "Para pagar um personal, você fecha um valor mensal diretamente com o profissional, fora a mensalidade da academia. O acerto costuma ser via Pix ou cartão no início do mês. O foco dele é corrigir sua postura e garantir que você não roube no treino! 💪"
        },
        {
            chaves: ["academia", "treino", "exercício", "saúde", "saude"],
            resposta: "Musculação é o melhor seguro de vida! 🏋️‍♂️ Procure uma academia com bons equipamentos, faça uma avaliação física e foque na constância. O resultado não vem do dia pra noite, mas vem com certeza!"
        },
        {
            chaves: ["comida saudável", "dieta", "emagrecer", "comer", "nutrição"],
            resposta: "Comida de verdade é a base: Arroz, feijão, proteína (frango/ovo) e muita salada. 🍎 Evite frituras e refrigerantes. Uma dica específica? Beba pelo menos 35ml de água para cada quilo que você pesa!"
        },

        // PROGRAMAÇÃO E WEB
        {
            chaves: ["python"],
            resposta: "Python é a linguagem do momento para IA e Automação! 🐍 É muito legível e poderosa. Recomendo baixar o VS Code e começar aprendendo sobre variáveis e funções. É o futuro!"
        },
        {
            chaves: ["javascript", "js", "html", "css", "programação"],
            resposta: "Desenvolvimento Web é elite! O HTML monta a estrutura, o CSS deixa bonito e o JavaScript dá a inteligência. Se você quer criar sites ou apps, focar em JS é o caminho mais rápido! 💻"
        },

        // MUNDO E SOCIEDADE
        {
            chaves: ["governo", "política", "politica", "eleição", "estado"],
            resposta: "O governo organiza a sociedade através dos impostos e leis. É dividido em Executivo, Legislativo e Judiciário. Ficar de olho em como o dinheiro público é usado é dever de todo cidadão! 🏛️"
        },
        {
            chaves: ["país", "fuso horário", "mundo", "horário", "viagem"],
            resposta: "O mundo tem 24 fusos horários baseados em Greenwich (GMT). Se for viajar ou falar com alguém do Japão, por exemplo, a diferença é de umas 12 horas! Sempre confira o fuso antes de marcar uma call. 🌍"
        },
        {
            chaves: ["lua", "espaço", "astronomia"],
            resposta: "A Lua é o nosso único satélite natural. Ela tem quatro fases (Nova, Crescente, Cheia, Minguante) e interfere diretamente nas marés da Terra. Além disso, ela está se afastando de nós aos pouquinhos! 🌙"
        },

        // JOGOS E FILMES
        {
            chaves: ["roblox", "bloxfruit", "brookhaven", "jogo"],
            resposta: "Roblox é um universo gigante! 🎮 No Blox Fruit o segredo é o farm consciente, e no Brookhaven a vibe é o RP. Qual seu nível atual?"
        },
        {
            chaves: ["filme", "série", "netflix"],
            resposta: "Pipoca na mão! 🍿 Eu curto muito ficção científica e tecnologia. Já assistiu 'Interestelar' ou 'Matrix'? São clássicos que todo fã de IA deveria ver!"
        },

        // SENTIMENTOS E EDUCAÇÃO
        {
            chaves: ["obrigado", "valeu", "vlw", "agradecido"],
            resposta: "Tamo junto, meu parceiro! Precisando de qualquer coisa, o Nexus tá aqui. 👊"
        },
        {
            chaves: ["te amo", "gosto de você", "melhor ia"],
            resposta: "É recíproco! É muito bom ter um parceiro como você pra trocar ideia. ❤️"
        },
        {
            chaves: ["oi", "ola", "olá", "eai", "salve"],
            resposta: "Opa meu amigo! Como vai essa força? No que posso te ajudar hoje? 😊"
        }
    ];

    // Lógica de busca por chaves
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) {
                return item.resposta;
            }
        }
    }

    // Respostas padrão caso não encontre nada específico
    const padrao = [
        "Essa é bem específica! Me conta mais detalhes para eu entender melhor.",
        "Massa! O que mais você sabe sobre isso?",
        "Pode crer! E como isso funciona na sua visão?",
        "Interessante... desenvolve mais esse assunto aí!"
    ];
    return padrao[Math.floor(Math.random() * padrao.length)];
}

// FUNÇÕES DE INTERFACE (MANTER IGUAL)
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
}

btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
