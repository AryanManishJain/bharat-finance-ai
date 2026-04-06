const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const blockedKeywords = ['ponzi', 'mlm', 'double money', 'get rich quick'];
function isBlocked(input) {
  return blockedKeywords.some(k => input.toLowerCase().includes(k));
}
function generateResponse(msg, mode) {
  msg = msg.toLowerCase();
  if (mode === 'Investing') {
    if (msg.includes('ppf')) return 'PPF gives safe returns with tax benefits.';
    if (msg.includes('mutual')) return 'Mutual funds are good for long-term investing.';
  }
  if (mode === 'Tax') {
    if (msg.includes('itr')) return 'ITR is filed yearly.';
    if (msg.includes('80c')) return '80C gives ₹1.5 lakh deduction.';
  }
  return 'Ask finance-related questions.';
}
app.post('/api/chat', (req, res) => {
  const { message, mode } = req.body;
  if (isBlocked(message)) {
    return res.json({ reply: 'Blocked due to policy.' });
  }
  res.json({ reply: generateResponse(message, mode) });
});
app.listen(3000, () => console.log('Running on http://localhost:3000'));
