async function sendMsg() {
  const message = input.value.trim();
  const mode = document.getElementById('mode').value;

  if (!message) {
    append('AI', 'Please type a message first.');
    return;
  }

  append('You', message);

  // NEW LOGIC: Responding locally since GitHub Pages has no backend
  const msg = message.toLowerCase();
  let reply = "Please ask a specific finance question (for example: PPF, SIP, ITR, 80C, GST, or startup registration).";

  // Safety Filter
  const blocked = ['ponzi', 'mlm', 'double money', 'get rich quick'];
  if (blocked.some(keyword => msg.includes(keyword))) {
    reply = "Your message was blocked due to safety policy.";
  } else {
    // Finance Logic
    if (mode === 'Investing') {
      if (msg.includes('ppf')) reply = 'PPF offers stable, government-backed returns with tax benefits.';
      else if (msg.includes('mutual')) reply = 'Mutual funds are useful for long-term goals when matched to your risk level.';
      else if (msg.includes('sip')) reply = 'SIP helps build disciplined investing habits through regular contributions.';
    } else if (mode === 'Tax') {
      if (msg.includes('itr')) reply = 'ITR is generally filed once each financial year based on your income type.';
      else if (msg.includes('80c')) reply = 'Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.';
      else if (msg.includes('gst')) reply = 'GST return frequency depends on turnover and your filing scheme.';
    } else if (mode === 'Startup') {
      if (msg.includes('mca')) reply = 'Most companies in India are incorporated through MCA filings.';
      else if (msg.includes('dpiit')) reply = 'DPIIT startup recognition can help with tax and compliance benefits.';
    }
  }

  // Simulate a brief delay like a real AI
  setTimeout(() => {
    append('AI', reply);
  }, 500);

  input.value = '';
  input.focus();
}
