/* NOME DO ARQUIVO: interacao.js
   FUNÇÃO: Sistema de encorajamento e interação em tempo real para APK
*/

let encouragementTimer;

// Função que inicia a contagem para a IA interagir sozinha
function startEncouragement() {
    // Limpa qualquer contagem anterior para não acumular
    clearTimeout(encouragementTimer);
    
    // Define o tempo de 15 segundos (15000ms)
    encouragementTimer = setTimeout(() => {
        const frases = [
            "Ei, ainda está aí? Me conta o que está pensando!",
            "Estou aqui para te ouvir. Pode soltar o verbo!",
            "Sabia que você é capaz de resolver isso? Vamos tentar juntos?",
            "Tô sentindo uma ideia boa vindo aí... o que foi?",
            "Não se sinta pressionado, mas estou curioso para saber sua opinião."
        ];
        
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        
        // Exibe a mensagem na interface
        exibirMensagemIA(fraseAleatoria);
        
        // Faz o celular vibrar (essencial para APK)
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
    }, 15000); 
}

// Função para colocar a bolha de texto no chat-box
function exibirMensagemIA(texto) {
    const scrollZone = document.getElementById('scroll-zone');
    if (!scrollZone) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg ai'; // Usa o CSS que você já tem
    msgDiv.innerText = texto;
    
    scrollZone.appendChild(msgDiv);
    
    // Joga o scroll para baixo para a mensagem aparecer
    scrollZone.scrollTop = scrollZone.scrollHeight;
}

// Monitora o campo de texto para resetar o timer enquanto o usuário digita
const inputField = document.getElementById('chat-input');
if (inputField) {
    inputField.addEventListener('input', () => {
        clearTimeout(encouragementTimer);
        startEncouragement(); // Reinicia o cronômetro
    });
}

// Inicia o sistema assim que o app/página carregar
window.onload = () => {
    startEncouragement();
};

