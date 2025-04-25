require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Configuración
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 1. Chatbot con OpenAI
app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4",
      messages: req.body.messages
    }, {
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error en OpenAI" });
  }
});

// 2. Generador de imágenes (Stable Diffusion)
app.post('/api/generate-image', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      { text_prompts: [{ text: req.body.prompt }] },
      { headers: { 'Authorization': `Bearer ${process.env.STABILITY_KEY}` } }
    );
    res.json({ image: response.data.artifacts[0].base64 });
  } catch (error) {
    res.status(500).json({ error: "Error en Stability AI" });
  }
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor listo en http://localhost:${process.env.PORT}`);
});
