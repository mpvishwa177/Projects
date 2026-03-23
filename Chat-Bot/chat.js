const chatBox = document.getElementById("chat-box");

// Load chat history on page load
window.onload = loadChat;

// Send message
function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();

  if (userText === "") return;

  addMessage(userText, "user");

  const botReply = getBotResponse(userText);

  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 500);

  input.value = "";
}

// Add message to chat
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  saveChat(); // Save after every message
}

// Bot logic (rule-based)
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you?";
  } 
  else if (input.includes("name")) {
    return "I am your chatbot 🤖";
  } 
  else if (input.includes("how are you")) {
    return "I'm just code, but I'm doing great!";
  } 
  else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } 
  else {
    return "Sorry, I didn't understand that.";
  }
}

// Save chat to LocalStorage
function saveChat() {
  localStorage.setItem("chat", chatBox.innerHTML);
}

// Load chat from LocalStorage
function loadChat() {
  chatBox.innerHTML = localStorage.getItem("chat") || "";
}

// Press Enter to send message
document.getElementById("user-input")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
});