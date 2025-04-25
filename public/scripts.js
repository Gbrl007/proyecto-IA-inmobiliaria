// Chatbot
document.getElementById('sendBtn').addEventListener('click', async () => {
  const message = document.getElementById('userInput').value;
  if (!message) return;

  // Mostrar mensaje usuario
  addMessage(message, 'user');

  // Llamar al backend
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "Eres un asistente de inmobiliaria. Sé conciso y profesional."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });
    const data = await response.json();
    addMessage(data.choices[0].message.content, 'bot');
  } catch (error) {
    addMessage("Error al conectar con el servidor", 'error');
  }
});

// Generador de descripciones
document.getElementById('generateDescBtn').addEventListener('click', async () => {
  const features = document.getElementById('propertyFeatures').value;
  if (!features) return;

  const response = await fetch('/api/generate-description', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ features })
  });
  const data = await response.json();
  document.getElementById('descriptionResult').textContent = data.description;
});

// Función auxiliar
function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  document.getElementById('chatWindow').appendChild(msgDiv);
}
