function sendMessage() {
  const input = document.getElementById("userInput");
  const mode = document.getElementById("mode").value;
  const message = input.value.toLowerCase();

  let reply = "";

  // BLOCKED
  if (message.includes("double money")) {
    reply = "Your message was blocked due to safety policy.";
  }

  // INVESTING
  else if (mode === "Investing") {
    if (message.includes("ppf")) {
      reply = "PPF offers stable, government-backed returns with tax benefits.";
    } else if (message.includes("sip")) {
      reply = "SIP helps build disciplined investing habits through regular contributions.";
    } else {
      reply = "Please ask a specific finance question (PPF, SIP, etc.).";
    }
  }

  // TAX
  else if (mode === "Tax") {
    if (message.includes("80c")) {
      reply = "Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.";
    } else if (message.includes("itr")) {
      reply = "ITR is generally filed once each financial year based on your income type.";
    } else {
      reply = "Please ask a specific tax question.";
    }
  }

  addMessage("You: " + input.value, "chat-user");
  addMessage("AI: " + reply, "chat-ai");

  input.value = "";
}
