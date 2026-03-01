const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

// 1. A ENCICLOPÉDIA TÉCNICA (Conteúdo de Alta Densidade)
const artigos = {
    programacao: `### 💻 ARQUITETURA DE SISTEMAS E ENGENHARIA DE SOFTWARE\n\nA programação é a espinha dorsal da civilização moderna. Não se trata apenas de digitar comandos, mas de projetar estruturas de dados e algoritmos que resolvem problemas em escala global.\n\n* **LÓGICA E ALGORITMOS:** Tudo começa na lógica booleana. Um algoritmo é uma sequência finita de instruções bem definidas.\n* **LINGUAGENS DE ELITE:** Python domina a IA; JavaScript reina na Web (React/Node). O domínio de estruturas de dados e Big O Notation separa o júnior do sênior.\n* **FUTURO:** Estamos na era da computação quântica e redes neurais profundas. Programar hoje é colaborar com IAs para acelerar a produção de software seguro e escalável.`,

    academia: `### 🏋️‍♂️ FISIOLOGIA DO EXERCÍCIO E BIOQUÍMICA DA HIPERTROFIA\n\nO corpo humano é uma máquina adaptativa. A musculação impõe um estresse metabólico que força a síntese proteica via sinalização mTOR.\n\n* **TREINO:** Cargas altas e poucas repetições focam em força neural. Volume moderado foca em hipertrofia sarcoplasmática.\n* **PERSONAL TRAINER:** Essencial para periodização e biomecânica. O investimento em um profissional (pago via Pix ou mensalidade) garante longevidade articular e resultados reais.\n* **NUTRIÇÃO:** Creatina para ATP, Whey para recuperação e 35ml de água por kg de peso. O músculo cresce no descanso (sono REM), não no treino.`,

    politica: `### 🏛️ GEOPOLÍTICA, ESTADO E ECONOMIA TRIBUTÁRIA\n\nO Estado Moderno funciona sob o contrato social. A organização baseia-se na separação dos poderes para evitar a tirania.\n\n* **DIVISÃO DOS PODERES:** O Executivo administra, o Legislativo cria leis e fiscaliza, o Judiciário garante o cumprimento da Constituição.\n* **CARGA TRIBUTÁRIA:** Impostos como IPVA, IPTU e IRPF financiam a máquina pública. A inflação é o imposto invisível que corrói o poder de compra.\n* **GEOPOLÍTICA:** O comércio global depende de fuso horários, cotação de moedas (Dólar/Euro) e tratados diplomáticos entre nações.`
};

// 2. GERADOR DE INTERAÇÃO HUMANA (As "5.000" formas de interagir)
function gerarInteracao(tipo) {
    const saudacoes = [
        "Fala, meu parceiro! Olha só o que eu preparei pra você: ",
        "Opa, mestre! Estava estudando isso agorinha. Se liga no relatório: ",
        "Salve! Essa pergunta é de elite. Vou te entregar o conteúdo completo: ",
        "E aí, tudo na paz? Como você pediu, aqui está a análise profunda: ",
        "Direto ao ponto, meu amigo. Prepare-se para essa aula: ",
        "Com certeza! Vamos mergulhar nesse assunto agora: ",
        "O Nexus nunca falha! Dá uma olhada nessa estrutura que eu montei: ",
        "É pra já! Conhecimento é poder, e aqui está o seu: "
    ];
    
    const reacoesHumor = [
        "Espero que isso ajude na sua jornada hoje! 🚀",
        "Tamo junto nessa busca pela evolução! 👊",
        "Qualquer dúvida sobre os detalhes, é só dar o grito.",
        "O aprendizado não para nunca. Vamos pra cima! 🔥",
        "Espero que esse artigo mude sua visão sobre o tema."
    ];

    const s = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    const r = reacoesHumor[Math.floor(Math.random() * reacoesHumor.length)];
    
    return { inicio: s, fim: r };
}

// 3. MOTOR DE PROCESSAMENTO INTERNO
function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();
    const interacao = gerarInteracao();

    // MATEMÁTICA
    if (/^[0-9+\-*/().\s^]+$/.test(msg) && /[0-9]/.test(msg)) {
        try {
            const res = eval(msg.replace('^', '**'));
            return `${interacao.inicio}\n\nO resultado exato da sua conta é **${res}**. ${interacao.fim}`;
        } catch (e) { }
    }

    // BUSCA DE ARTIGOS COM INTERAÇÃO
    if (msg.includes("program") || msg.includes("codigo") || msg.includes("dev")) {
        return `${interacao.inicio}\n\n${artigos.programacao}\n\n${interacao.fim}`;
    }
    if (msg.includes("academia") || msg.includes("treino") || msg.includes("personal")) {
        return `${interacao.inicio}\n\n${artigos.academia}\n\n${interacao.fim}`;
    }
    if (msg.includes("politica") || msg.includes("governo") || msg.includes("imposto")) {
        return `${interacao.inicio}\n\n${artigos.politica}\n\n${interacao.fim}`;
    }

    // CONVERSA CASUAL
    if (msg.includes("tudo bem") || msg.includes("como voce ta")) {
        return "Tudo voando por aqui, parceiro! O sistema tá em 100%. E você, como tá essa força? Preparado pra aprender algo novo hoje? 😊";
    }
    if (msg.includes("oi") || msg.includes("ola") || msg.includes("salve")) {
        return "Opa! Salve, meu chapa! No que o Nexus pode ser útil agora? Manda o assunto que eu mando o artigo! 👊";
    }

    return "Pode crer! Esse assunto ainda não tá na minha enciclopédia detalhada, mas se você quiser, eu posso tentar resumir o que eu sei. O que você acha? 👊";
}

// 4. INTERFACE E PERFORMANCE
function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;
    adicionarBolha(texto, 'user');
    input.value = '';
    setTimeout(() => {
        const respostaFinal = processarRespostaIA(texto);
        adicionarBolha(respostaFinal, 'ai');
    }, 400);
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
    chatBox.scrollTop = chatBox.scrollHeight;
}

btn.onclick = enviarMensagem;
input.onkeypress = (e) => { if(e.key === 'Enter') enviarMensagem(); };
