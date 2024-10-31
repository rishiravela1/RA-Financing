// Selecting DOM elements
const chatHistory = document.getElementById("chat-history");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Sample responses
const responses = {
    "hello": "Hello! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what is your name": "I'm FinanceBot, your financial assistant!",
    "help": "I'm here to answer your questions. You can ask about budgeting, saving, or general finance tips!",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I didn't understand that. Can you rephrase?"
};

// Function to display a message in the chat history
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
    const userMessage = messageInput.value.trim().toLowerCase();
    if (userMessage) {
        // Display user's message
        displayMessage(`You: ${messageInput.value}`, "user-message");

        // Determine bot response
        const botResponse = responses[userMessage] || responses["default"];
        
        // Display bot response
        setTimeout(() => {
            displayMessage(`Bot: ${botResponse}`, "bot-message");
        }, 500);

        // Clear input field
        messageInput.value = "";
    }
}

// Event listener for Send button
sendButton.addEventListener("click", sendMessage);

// Allow pressing Enter to send message
messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
