window.onload = function () {
    const form = document.getElementById('chat-form');
    const chatBox = document.getElementById('chatBox');
    const input = document.getElementById('input');
    const mode = document.getElementById('mode');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const text = input.value.trim();
        if (!text) return;

        // Show user message
        chatBox.innerHTML += `<div class="user">You: ${text}</div>`;
        input.value = "";

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    message: text,
                    mode: mode.value
                })
            });

            const data = await res.json();

            // Show AI reply
            chatBox.innerHTML += `<div class="ai">AI: ${data.reply}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;

        } catch (err) {
            chatBox.innerHTML += `<div class="ai">Error connecting to server</div>`;
        }
    });
};

//  PPF CALCULATOR
function calcPPF() {
    const P = parseFloat(document.getElementById('amount').value);
    const r = parseFloat(document.getElementById('rate').value) / 100;
    const n = parseFloat(document.getElementById('years').value);

    if (!P || !r || !n) {
        document.getElementById('ppfResult').innerText = "Please fill all fields correctly.";
        return;
    }

    const maturity = P * ((Math.pow(1 + r, n) - 1) / r);
    const invested = P * n;
    const interest = maturity - invested;

    document.getElementById('ppfResult').innerText =
        `Maturity: ₹${maturity.toFixed(2)} | Invested: ₹${invested} | Interest: ₹${interest.toFixed(2)}`;
}
