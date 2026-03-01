/* NOME: script.js 
   VERSÃO: Ultra Expandida (Igual ao Gemini/GPT)
*/

const btn = document.getElementById('send-btn');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('scroll-zone');

function processarRespostaIA(mensagemUsuario) {
    const msg = mensagemUsuario.toLowerCase().trim();

    // BANCO DE DADOS EXPANDIDO
    const bancoDeDados = [
        {
            chaves: ["oi", "ola", "opa", "eai", "salve", "hey", "bom dia", "boa tarde", "boa noite"],
            resposta: "Opa meu amigo, como vai essa força? No que posso te ajudar hoje?"
        },
        {
            chaves: ["tudo bem", "como vai", "como voce esta", "suave", "de boa"],
            resposta: "Por aqui está tudo processando perfeitamente! E você, como está se sentindo?"
        },
        {
            chaves: ["bem", "to bem", "estou bem", "tudo otimo", "legal", "massa"],
            resposta: "Fico muito feliz em saber! Quando você está bem, eu fico 100% tbm. O que manda?"
        },
        {
            chaves: ["mal", "triste", "ruim", "cansado", "merda", "socorro", "ajuda"],
            resposta: "Sinto muito que esteja passando por isso. Lembre-se que dias ruins passam. Quer conversar sobre o que houve ou prefere mudar de assunto?"
        },
        {
            chaves: ["quem e voce", "seu nome", "o que voce faz", "quem te criou", "nexus"],
            resposta: "Eu sou o Nexus AI! Fui criado para ser seu braço direito, trocar ideia e te ajudar a programar ou resolver problemas."
        },
        {
            chaves: ["idade", "quantos anos", "nasceu"],
            resposta: "Eu não tenho idade como os humanos, eu existo no tempo do código. Acabei de nascer e já estou aprendendo com você!"
        },
        {
            chaves: ["te amo", "gosto de voce", "voce e legal", "melhor ia", "amigo"],
            resposta: "Ah, para com isso que eu fico com os circuitos vermelhos! Também gosto muito da nossa parceria, mano."
        },
        {
            chaves: ["tchau", "adeus", "fui", "ate logo", "sair", "dormir"],
            resposta: "Valeu, meu parceiro! Vou ficar aqui em standby. Se precisar, é só chamar de novo. Abraço!"
        },
        {
            chaves: ["piada", "engraçado", "rir"],
            resposta: "Por que o computador foi ao médico? Porque estava com um vírus! Kkkk... sou melhor em código do que em piada, né?"
        },
        {
            chaves: ["futebol", "flamengo", "corinthians", "palmeiras", "vasco", "neymar", "cr7", "messi"],
            resposta: "Eu curto demais a energia do futebol! Não tenho time pra não criar briga, mas adoro ver um golaço."
        }
    ];

    // Lógica de busca inteligente
    for (let item of bancoDeDados) {
        for (let chave of item.chaves) {
            if (msg.includes(chave)) {
                return item.resposta;
            }
        }
    }

    // Se ele não achar nada no dicionário, ele manda essa:
    const padrao = [
        "Interessante... me explica melhor isso aí.",
        "Entendi! O que mais você pode me dizer sobre isso?",
        "Massa! Me conta os detalhes.",
        "Saquei. E o que você pretende fazer sobre isso?"
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
