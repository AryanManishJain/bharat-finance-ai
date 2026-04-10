const chatBox = document.getElementById('chatBox');
const input = document.getElementById('input');

function append(sender, message) {
  const div = document.createElement('div');
  div.className = sender === 'You' ? 'chat chat-user' : 'chat chat-ai';
  div.innerText = `${sender}: ${message}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMsg() {
  const message = input.value.trim();
  const mode = document.getElementById('mode').value;

  if (!message) {
    append('AI', 'Please type a message first.');
    return;
  }

  append('You', message);

  try {
    // FIX: Use the full URL to reach your local server
    const res = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, mode })
    });

    const data = await res.json();
    append('AI', data.reply);
  } catch (error) {
    append('AI', 'Something went wrong while contacting the server. Please try again.');
  }

  input.value = '';
  input.focus();
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMsg();
  }
});

// --- PPF Calculator ---
function calcPPF() {
  const principal = Number.parseFloat(document.getElementById('amount').value);
  const rate = Number.parseFloat(document.getElementById('rate').value) / 100;
  const years = Number.parseInt(document.getElementById('years').value, 10);
  const resultNode = document.getElementById('ppfResult');

  const invalid = !Number.isFinite(principal)
    || !Number.isFinite(rate)
    || !Number.isInteger(years)
    || principal <= 0
    || rate <= 0
    || years <= 0;

  if (invalid) {
    resultNode.innerText = 'Please enter valid positive values for amount, rate, and years.';
    return;
  }
  const maturityAmount = principal * (((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate));
  resultNode.innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
}
