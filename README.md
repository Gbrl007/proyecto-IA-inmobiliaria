# 🤖 Chatbot Inmobiliario con IA

**Automatiza la captación de leads, generación de descripciones y edición de fotos para inmobiliarias usando inteligencia artificial.**

[![Demo](https://img.shields.io/badge/Ver-Demo_Live-green?style=for-the-badge)](https://tu-demo.netlify.app)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)](LICENSE)

<div align="center">
  <img src="https://i.imgur.com/JQ8wzRn.png" width="600" alt="Captura del Chatbot">
</div>

## ✨ Características Principales

- **Chatbot 24/7** con GPT-4 para calificación automática de leads
- **Generador de descripciones** de propiedades con IA
- **Mejorador de fotos** con Stable Diffusion
- **CRM integrado** (Firebase)
- **WhatsApp/Telegram** (opcional)
- **100% personalizable** para tu marca

## 🛠️ Tecnologías Usadas

| Área           | Tecnologías                                                                                     |
|----------------|------------------------------------------------------------------------------------------------|
| Frontend       | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| Backend        | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) |
| IA             | ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white) ![Stability AI](https://img.shields.io/badge/Stability_AI-000000?style=flat&logo=stable-diffusion&logoColor=white) |
| Base de Datos  | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black) |

## 🚀 Cómo Empezar

### Requisitos Previos
- Node.js (v18+)
- Cuenta en [OpenAI](https://platform.openai.com/) (para API key)
- Cuenta en [Firebase](https://firebase.google.com/) (opcional para CRM)

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/chatbot-inmobiliario.git
   cd chatbot-inmobiliario
2.Instala dependencias:
	npm install
3.Configura tus variables de entorno:
	cp .env.example .env
  Edita .env con tus API keys:
	OPENAI_KEY=sk-tu_clave_aqui
	STABILITY_KEY=tu_clave_aqui
	FIREBASE_CONFIG=tus_credenciales
4.Inicia el servidor:
	npm start
5.Abre tu navegador en:
	http://localhost:3000