async function sendMsg() {
  const chatBox = document.getElementById('chatBox');
  const input = document.getElementById('input');
  const message = input.value.trim();
  const mode = document.getElementById('mode').value;
  if (!message) return;
  // 1. Show your message
  const userDiv = document.createElement('div');
  userDiv.className = 'chat chat-user';
  userDiv.innerText = `You: ${message}`;
  chatBox.appendChild(userDiv);
  // 2. Local Logic (Replaces the broken Server Fetch)
  const msg = message.toLowerCase();
  let reply = "Please ask a specific finance question about PPF, SIP, ITR, 80C, or GST.";
  // Safety Check
  if (['ponzi', 'mlm', 'get rich quick'].some(k => msg.includes(k))) {
    reply = "Your message was blocked due to safety policy.";
  } else {
    // Mode-based responses
    if (mode === 'Investing') {
      if (msg.includes('ppf')) reply = 'PPF offers stable, government-backed returns with tax benefits.';
      if (msg.includes('sip')) reply = 'SIP helps build disciplined investing habits through regular contributions.';
    } else if (mode === 'Tax') {
      if (msg.includes('itr')) reply = 'ITR is generally filed once each financial year based on your income type.';
      if (msg.includes('80c')) reply = 'Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.';
    }
  }
  // 3. Show AI message after a small delay
  setTimeout(() => {
    const aiDiv = document.createElement('div');
    aiDiv.className = 'chat chat-ai';
    aiDiv.innerText = `AI: ${reply}`;
    chatBox.appendChild(aiDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
  input.value = '';
}
