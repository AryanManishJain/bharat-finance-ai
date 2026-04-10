function generateResponse(message = '', mode = '') {
  const msg = message.toLowerCase().trim();
  // 🔒 EXACT MATCH LOGIC (no random replies)
  // INVESTING MODE
  if (mode === 'Investing') {
    if (msg === 'explain ppf' || msg.includes('ppf')) {
      return 'PPF offers stable, government-backed returns with tax benefits.';
    }
    if (msg.includes('mutual')) {
      return 'Mutual funds are generally useful for long-term goals when matched to your risk level.';
    }
    if (msg.includes('sip')) {
      return 'SIP helps build disciplined investing habits through regular contributions.';
    }
  }
  // TAX MODE
  if (mode === 'Tax') {
    if (msg === 'what is 80c' || msg.includes('80c')) {
      return 'Section 80C currently allows deductions up to ₹1.5 lakh under the old regime.';
    }
    if (msg.includes('itr')) {
      return 'ITR is generally filed once each financial year based on your income type.';
    }
    if (msg.includes('gst')) {
      return 'GST return frequency depends on turnover and the filing scheme your business uses.';
    }
  }
  // STARTUP MODE
  if (mode === 'Startup') {
    if (msg.includes('mca')) {
      return 'Most companies in India are incorporated through MCA filings with required compliance documents.';
    }
    if (msg.includes('dpiit')) {
      return 'DPIIT startup recognition can help with tax and compliance benefits for eligible startups.';
    }
  }
  return 'Please ask a specific finance question (for example: PPF, SIP, ITR, 80C, GST, or startup registration).';
}
