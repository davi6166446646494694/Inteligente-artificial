const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Carregar histórico do localStorage
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
chatHistory.forEach(msg => addMessage(msg.text, msg.type));

input.addEventListener('keydown', function(e) {
  if(e.key === 'Enter' && input.value.trim() !== '') {
    const userText = input.value;
    addMessage(userText, 'user');
    saveMessage(userText, 'user');

    const response = getAIResponse(userText);
    addMessage(response, 'ai');
    saveMessage(response, 'ai');

    input.value = '';
  }
});

function addMessage(text, type) {
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function saveMessage(text, type) {
  chatHistory.push({text, type});
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function getAIResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  if(msg.includes('oi')) return 'Oi! Como você está?';
  if(msg.includes('tchau')) return 'Tchau! Até mais!';
  return 'Não entendi, pode repetir?';
}
