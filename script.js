const chatBox = document.getElementById('chatBox');
function append(msg) {
  const div = document.createElement('div');
  div.innerText = msg;
  chatBox.appendChild(div);
}
async function sendMsg() {
  const input = document.getElementById('input');
  const message = input.value;
  const mode = document.getElementById('mode').value;
  append('You: ' + message);
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, mode })
  });
  const data = await res.json();
  append('AI: ' + data.reply);

  input.value = '';
}
// --- PPF Calculator ---
function calcPPF() {
  const P = parseFloat(document.getElementById('amount').value);
  const i = parseFloat(document.getElementById('rate').value) / 100;
  const n = parseInt(document.getElementById('years').value);
  const result = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  document.getElementById('ppfResult').innerText =
    "Maturity Amount: ₹" + result.toFixed(2);
}
