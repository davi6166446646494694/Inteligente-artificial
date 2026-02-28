const input = document.getElementById('input');
const messages = document.getElementById('messages');

input.addEventListener('keydown', function(e) {
  if(e.key === 'Enter' && input.value.trim() !== '') {
    addMessage(input.value, 'user');
    const response = getAIResponse(input.value);
    addMessage(response, 'ai');
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

function getAIResponse(userMessage) {
  // Lógica simples da IA
  const msg = userMessage.toLowerCase();
  if(msg.includes('oi')) return 'Oi! Como você está?';
  if(msg.includes('tchau')) return 'Tchau! Até mais!';
  return 'Não entendi, pode repetir?';
}
