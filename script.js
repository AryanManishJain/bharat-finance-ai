// Ensure the script waits for the page to load
window.onload = function() {
    const chatForm = document.getElementById('chat-form');
    const messages = document.getElementById('messages');
    const input = document.getElementById('input');

    if (!chatForm) {
        console.error("Could not find chat-form! Check your HTML ID.");
        return;
    }

    chatForm.onsubmit = function(e) {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        // 1. Show User Message
        messages.innerHTML += `<div class="chat chat-user">You: ${text}</div>`;
        input.value = "";

        // 2. Local Logic
        let reply = "I can help with PPF, SIP, or Tax questions.";
        const msg = text.toLowerCase();
        
        if (msg.includes('ppf')) reply = "PPF offers 7.1% interest and tax benefits.";
        else if (msg.includes('80c')) reply = "Section 80C saves up to ₹1.5L in taxes.";
        else if (msg.includes('rich')) reply = "Message blocked: Safety Policy.";

        // 3. Show AI Message
        setTimeout(() => {
            messages.innerHTML += `<div class="chat chat-ai">AI: ${reply}</div>`;
            messages.scrollTop = messagesContainer.scrollHeight;
        }, 300);
    };
};
