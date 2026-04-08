const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));
const blockedKeywords = ['ponzi', 'mlm', 'double money', 'get rich quick'];
function isBlocked(input = '') {
  return blockedKeywords.some((keyword) => input.toLowerCase().includes(keyword));
}
function generateResponse(message = '', mode = '') {
  const msg = message.toLowerCase();
  if (mode === 'Investing') {
     if (msg.includes('ppf')) return 'PPF offers stable, government-backed returns with tax benefits.';
    if (msg.includes('mutual')) return 'Mutual funds are generally useful for long-term goals when matched to your risk level.';
    if (msg.includes('sip')) return 'SIP helps build disciplined investing habits through regular contributions.';
  }
  if (mode === 'Tax') {
     if (msg.includes('itr')) return 'ITR is generally filed once each financial year based on your income type.';
    if (msg.includes('80c')) return 'Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.';
    if (msg.includes('gst')) return 'GST return frequency depends on turnover and the filing scheme your business uses.';
  }
   if (mode === 'Startup') {
    if (msg.includes('mca')) return 'Most companies in India are incorporated through MCA filings with required compliance documents.';
    if (msg.includes('dpiit')) return 'DPIIT startup recognition can help with tax and compliance benefits for eligible startups.';
  }
  return 'Please ask a specific finance question (for example: PPF, SIP, ITR, 80C, GST, or startup registration).';
}
app.post('/api/chat', (req, res) => {
  const message = req.body?.message?.trim();
  const mode = req.body?.mode;
  if (!message) {
    return res.status(400).json({ reply: 'Please enter a message before sending.' });
  }
  if (isBlocked(message)) {
    return res.status(403).json({ reply: 'Your message was blocked due to safety policy.' });
  }
  return res.json({ reply: generateResponse(message, mode) });
});
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
