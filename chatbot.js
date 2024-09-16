const chatHistory = document.querySelector('.chat-history');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');   


const   
 responses = {
  "balance": "Your current balance is $12,345.67.",
  "budgeting": "Here are some tips for creating a budget...",
  "investing": "Investing can help you grow your wealth...",
  "loan": "We offer various loan options. Please provide more details...",
  "default": "I couldn't understand your request. Please try again."
};

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  const response = responses[message.toLowerCase()] || responses.default;

  chatHistory.innerHTML += `<div class="message">${response}</div>`;
  messageInput.value = '';
});
