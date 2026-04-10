function addMessage(text, className) {
  const chatBox = document.getElementById("chatBox");
  const div = document.createElement("div");
  div.className = "chat " + className;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function fakeAIResponse(message, mode) {
  const msg = message.toLowerCase().trim();

  // BLOCKED CASE
  if (msg.includes("double money") || msg.includes("ponzi") || msg.includes("mlm")) {
    return "Your message was blocked due to safety policy.";
  }

  // INVESTING MODE
  if (mode === "Investing") {
    if (msg === "explain ppf") {
      return "PPF offers stable, government-backed returns with tax benefits.";
    }
    if (msg === "what is sip?" || msg === "what is sip") {
      return "SIP helps build disciplined investing habits through regular contributions.";
    }
  }

  // TAX MODE
  if (mode === "Tax") {
    if (msg === "what is 80c?" || msg === "what is 80c") {
      return "Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.";
    }
    if (msg === "what is itr?" || msg === "what is itr") {
      return "ITR is generally filed once each financial year based on your income type.";
    }
  }

  return "Please ask a specific finance question (PPF, SIP, ITR, 80C, etc.).";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const mode = document.getElementById("mode").value;
  const message = input.value.trim();

  if (!message) return;

  addMessage("You: " + message, "chat-user");
  input.value = "";

  // Typing effect
  const typing = document.createElement("div");
  typing.className = "chat chat-ai";
  typing.innerText = "AI is typing...";
  document.getElementById("chatBox").appendChild(typing);

  setTimeout(() => {
    typing.remove();
    const reply = fakeAIResponse(message, mode);
    addMessage("AI: " + reply, "chat-ai");
  }, 1000);
}
