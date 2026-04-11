function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const mode = document.getElementById("mode").value;

  const message = input.value.trim();

  if (!message) return;

  // Show user message
  chatBox.innerHTML += `<div class="chat chat-user">You: ${message}</div>`;

  let reply = "";

  const msg = message.toLowerCase();

  // INVESTING
  if (mode === "Investing") {
    if (msg.includes("ppf")) {
      reply = "PPF offers stable, government-backed returns with tax benefits.";
    } 
    else if (msg.includes("mutual")) {
      reply = "Mutual funds are generally useful for long-term goals when matched to your risk level.";
    } 
    else if (msg.includes("sip")) {
      reply = "SIP helps build disciplined investing habits through regular contributions.";
    }
  }

  // TAX
  else if (mode === "Tax") {
    if (msg.includes("80c")) {
      reply = "Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.";
    } 
    else if (msg.includes("itr")) {
      reply = "ITR is generally filed once each financial year based on your income type.";
    } 
    else if (msg.includes("gst")) {
      reply = "GST return frequency depends on turnover and the filing scheme your business uses.";
    }
  }

  // STARTUP
  else if (mode === "Startup") {
    if (msg.includes("mca")) {
      reply = "Most companies in India are incorporated through MCA filings with required compliance documents.";
    } 
    else if (msg.includes("dpiit")) {
      reply = "DPIIT startup recognition can help with tax and compliance benefits for eligible startups.";
    }
  }

  // DEFAULT
  if (reply === "") {
    reply = "Please ask a valid finance question like PPF, SIP, 80C, GST, etc.";
  }

  // Show AI reply
  chatBox.innerHTML += `<div class="chat chat-ai">AI: ${reply}</div>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
