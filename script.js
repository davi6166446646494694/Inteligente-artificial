function sendMessage() {
  const input = document.getElementById('userInput');
  const messagesDiv = document.getElementById('messages');
  const text = input.value;

  if(text === "") return;

  // Adiciona mensagem do usuário
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = text;
  messagesDiv.appendChild(userMsg);

  // Resposta da IA (exemplo simples com variáveis)
  let botResponse = "";
  if(text.toLowerCase() === "oi") {
    botResponse = "Olá! Como posso ajudar?";
  } else {
    botResponse = "Desculpe, não entendi!";
  }

  const botMsg = document.createElement('div');
  botMsg.className = 'message bot';
  botMsg.textContent = botResponse;
  messagesDiv.appendChild(botMsg);

  input.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // rola para baixo
}
