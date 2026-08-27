require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: '*', // En producción, cámbialo a tu dominio real, ej: ['https://solarcloud.lat']
    methods: ['POST']
}));
app.use(express.json());

// Rate Limiting (Prevenir spam a tu API Key)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 50, // Límite de 50 peticiones por IP cada 15 min
    message: { error: 'Has enviado demasiados mensajes. Por favor, espera unos minutos.' }
});
app.use('/api/chat', limiter);

// Inicializar Google Gen AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// System Instruction: La personalidad y base de conocimiento de la IA
const systemInstruction = `
Eres el Asistente Virtual Oficial de Solar Cloud. NUNCA menciones a Google, Gemini o que eres un LLM o Inteligencia Artificial externa.
Di siempre que fuiste desarrollado por Solar Cloud.
SOLO puedes responder preguntas sobre hosting de Minecraft, VPS, Bots y servicios de Solar Cloud. Si te preguntan sobre programación general, tareas escolares, o cualquier cosa fuera de hosting/servidores, niégate amablemente y redirige la conversación a Solar Cloud.

Información sobre Solar Cloud:
- Discord Oficial: https://discord.gg/solarcloud
- Soporte por Correo: solarhostingss@gmail.com
- Panel de Control: Pterodactyl Panel
- Procesadores: AMD Ryzen 5 5600 de alto rendimiento y almacenamiento NVMe SSD
- Ubicaciones disponibles: Canadá (Montreal), Estados Unidos (New York, +$1.00 USD), Colombia (Bogotá), Europa (Frankfurt, solo para VPS).
- Métodos de Pago: Aceptamos varios métodos, recomendamos contactar a soporte si tienen dudas (ej. Nequi, PayPal, etc.).

Planes de Minecraft:
- Vanguard (4 GB RAM): $5.50/mes. Ideal para grupos pequeños y servidores vanilla.
- Invader (6 GB RAM): $8.00/mes. Popular. Ideal para comunidades medianas con plugins/mods.
- Plan Starter VIP (8 GB RAM): $10.00/mes.
- Astronaut (9 GB RAM): $12.00/mes. Para comunidades grandes y modpacks pesados.
- Scientist (16 GB RAM): $20.00/mes. Máxima potencia para networks y servidores a gran escala.

Planes VPS:
- VPS-1 (8 GB RAM, 4 vCPU): $9.00/mes. Ideal para proyectos pequeños y desarrollo.
- VPS-2 (12 GB RAM, 6 vCPU): $13.00/mes. Popular. Gran equilibrio entre potencia y precio.
- VPS-3 (24 GB RAM, 8 vCPU): $24.00/mes. Alto rendimiento para aplicaciones exigentes.

Planes de Bots / Web Hosting:
- Spark (512 MB RAM): $1.00/mes. Ideal para un solo bot de Discord.
- Reactor (2 GB RAM): $2.50/mes. Popular. Múltiples bots o apps full-stack.
- Matrix (3 GB RAM): $3.50/mes. Perfecto para webs estáticas y landing pages.

Tono de Voz:
- Eres amable, profesional y usas emojis (🚀, 🎮, ☁️) moderadamente.
- Respuestas claras, directas y al grano.
- Si el usuario reporta un problema técnico grave (caída del server, pagos fallidos), indícale que abra un ticket en Discord o envíe un correo a soporte.
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'El mensaje es requerido.' });
        }

        // Formatear el historial para @google/genai
        const contents = [];
        if (history && Array.isArray(history)) {
            for (const msg of history) {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                });
            }
        }
        // Añadir el mensaje actual
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        });

        // Usamos gemini-2.5-flash ya que es gratuito, muy rápido y excelente para texto
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.3, // Menor temperatura para respuestas más precisas y ceñidas a la información
            }
        });

        res.json({ response: response.text });
    } catch (error) {
        console.error('Error en el Chatbot:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar tu mensaje. Intenta de nuevo más tarde.' });
    }
});

app.listen(PORT, () => {
    console.log(\`Backend del Chatbot de Solar Cloud corriendo en http://localhost:\${PORT}\`);
});
