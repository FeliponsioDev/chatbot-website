# Minecraft Support Chatbot

## English

An interactive chatbot designed to provide support to players of a Minecraft server. This project is built with **Astro**, **React**, and **TailwindCSS**, offering a modern and customizable experience.

**Created by FeliponsioDev**

---

## Technologies Used

- **Astro**: Framework for building fast and modern websites.
- **React**: Library for building interactive user interfaces.
- **TailwindCSS**: CSS framework for fast and consistent styling.
- **TypeScript**: Typed language to improve code quality.
- **Vite**: Fast development tool for modern web applications.

---

## Features

- **Modern User Interface**: Responsive and attractive design with dark mode support.
- **Predefined Responses**: The chatbot answers common questions related to:
  - Server connection.
  - Performance issues.
  - Server rules.
  - Useful commands.
  - Economy and shops.
  - Events and minigames.
  - Technical issues.
- **Quick Action Buttons**: Frequently asked questions accessible with a single click.
- **Chat History**: Save and load previous conversations.
- **Discord Support**: Direct link to the Discord server for personalized assistance.
- **Customization**: Easily configure chatbot responses in the `chatbot.ts` file.

---

## Project Structure

```
chatbot-website/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── QuickActionButtons.tsx
│   │   └── ui/             # UI components
│   │       ├── Button.tsx
│   │       └── input.tsx
│   ├── layouts/            # Application layouts
│   │   └── Layout.astro
│   ├── lib/                # Logic and utilities
│   │   ├── chatbot.ts
│   │   └── utils.ts
│   ├── pages/              # Main pages
│   │   └── index.astro
│   └── env.d.ts            # Environment types
├── public/                 # Static files
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## Requirements

- **Node.js**: Version 18 or higher.
- **NPM**: Included with Node.js.
- **Astro**: Framework used for development.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/FeliponsioDev/chatbot-website.git
   cd chatbot-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`.

---

## Configuration

### Configure Chatbot Questions and Answers

The file `src/lib/chatbot.ts` contains the logic to process user questions and return responses. You can customize the responses by editing this file.

Example:
```typescript
// filepath: src/lib/chatbot.ts
export function processUserMessage(message: string): string {
  const input = message.toLowerCase();
  let response = "";

  if (input.includes("connect") || input.includes("ip")) {
    response = "To connect to the server, follow these steps...";
  }
  // Add more conditions to customize responses
  return response;
}
```

### Customize the Design

The design is based on **TailwindCSS**. You can modify global styles in the `src/layouts/Layout.astro` file or in the Tailwind configuration in `tailwind.config.mjs`.

### Configure the Environment

If you need environment variables, add them to a `.env` file in the root of the project.

Example:
```
PUBLIC_SITE_URL=https://your-site.com
```

---

## Usage

1. **Main Interface**: The main page displays the chatbot with a message area and an input field.
2. **Send Questions**: Type your question in the input field and press the send button.
3. **Quick Buttons**: Use quick action buttons for frequently asked questions.
4. **History**: Access chat history from the "History" button.

---

## Deployment

To build the project for production:
```bash
npm run build
```

The generated files will be in the `dist/` folder. You can deploy them to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

---

## Contribute

1. Fork the repository.
2. Create a branch for your feature:
   ```bash
   git checkout -b new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push your changes:
   ```bash
   git push origin new-feature
   ```
5. Open a Pull Request.

---

## Security

Refer to the [SECURITY.md](./SECURITY.md) file for more details on how to report vulnerabilities.

---

## License

This project is licensed under the MIT license. Refer to the [LICENSE](./LICENSE) file for more details.

---

## 📞 Contact

If you have questions, feel free to contact me:

- **Creator's discord**: feliponsio_2.0
- **Discord**: [Revers Studio](https://discord.gg/CAmec6cBv9)
- **GitHub**: [FeliponsioDev](https://github.com/FeliponsioDev)



---


# Minecraft Support Chatbot

## Español

Un chatbot interactivo diseñado para proporcionar soporte a los jugadores de un servidor de Minecraft. Este proyecto está construido con **Astro**, **React** y **TailwindCSS**, ofreciendo una experiencia moderna y personalizable.

**Creado por FeliponsioDev**

---

## Tecnologías Usadas

- **Astro**: Framework para construir sitios web rápidos y modernos.
- **React**: Biblioteca para construir interfaces de usuario interactivas.
- **TailwindCSS**: Framework de CSS para estilos rápidos y consistentes.
- **TypeScript**: Lenguaje tipado para mejorar la calidad del código.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones web modernas.

---

## Características

- **Interfaz de usuario moderna**: Diseño responsivo y atractivo con soporte para modo oscuro.
- **Respuestas predefinidas**: El chatbot responde a preguntas comunes relacionadas con:
  - Conexión al servidor.
  - Problemas de rendimiento.
  - Reglas del servidor.
  - Comandos útiles.
  - Economía y tiendas.
  - Eventos y minijuegos.
  - Problemas técnicos.
- **Botones de acceso rápido**: Preguntas frecuentes accesibles con un solo clic.
- **Historial de chat**: Guarda y carga conversaciones previas.
- **Soporte en Discord**: Enlace directo al servidor de Discord para asistencia personalizada.
- **Personalización**: Configura fácilmente las respuestas del chatbot en el archivo `chatbot.ts`.

---

## Estructura del Proyecto

```
chatbot-website/
├── src/
│   ├── components/         # Componentes reutilizables de React
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── QuickActionButtons.tsx
│   │   └── ui/             # Componentes de interfaz de usuario
│   │       ├── Button.tsx
│   │       └── input.tsx
│   ├── layouts/            # Layouts de la aplicación
│   │   └── Layout.astro
│   ├── lib/                # Lógica y utilidades
│   │   ├── chatbot.ts
│   │   └── utils.ts
│   ├── pages/              # Páginas principales
│   │   └── index.astro
│   └── env.d.ts            # Tipos de entorno
├── public/                 # Archivos estáticos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de TailwindCSS
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

---

## Requisitos

- **Node.js**: Versión 18 o superior.
- **NPM**: Incluido con Node.js.
- **Astro**: Framework utilizado para el desarrollo.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FeliponsioDev/chatbot-website.git
   cd chatbot-website
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:3000`.

---

## Configuración

### Configurar las preguntas y respuestas del chatbot

El archivo `src/lib/chatbot.ts` contiene la lógica para procesar las preguntas del usuario y devolver respuestas. Puedes personalizar las respuestas editando este archivo.

Ejemplo:
```typescript
// filepath: src/lib/chatbot.ts
export function processUserMessage(message: string): string {
  const input = message.toLowerCase();
  let response = "";

  if (input.includes("conect") || input.includes("ip")) {
    response = "Para conectarte al servidor, sigue estos pasos...";
  }
  // Añade más condiciones para personalizar las respuestas
  return response;
}
```

### Personalizar el diseño

El diseño está basado en **TailwindCSS**. Puedes modificar los estilos globales en el archivo `src/layouts/Layout.astro` o en la configuración de Tailwind en `tailwind.config.mjs`.

### Configurar el entorno

Si necesitas variables de entorno, agrégalas en un archivo `.env` en la raíz del proyecto.

Ejemplo:
```
PUBLIC_SITE_URL=https://tu-sitio.com
```

---

## Uso

1. **Interfaz principal**: La página principal muestra el chatbot con un área de mensajes y un campo de entrada.
2. **Enviar preguntas**: Escribe tu pregunta en el campo de entrada y presiona el botón de enviar.
3. **Botones rápidos**: Usa los botones de acceso rápido para preguntas frecuentes.
4. **Historial**: Accede al historial de conversaciones desde el botón "Historial".

---

## Despliegue

Para construir el proyecto para producción:
```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`. Puedes desplegarlos en cualquier servicio de hosting estático como **Vercel**, **Netlify** o **GitHub Pages**.

---

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin nueva-funcionalidad
   ```
5. Abre un Pull Request.

---

## Seguridad

Consulta el archivo [SECURITY.md](./SECURITY.md) para más detalles sobre cómo reportar vulnerabilidades.

---

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

## 📞 Contacto

Si tienes preguntas, no dudes en contactarme:

- **Discord del creador**: feliponsio_2.0
- **Discord**: [Revers Studio](https://discord.gg/CAmec6cBv9)
- **GitHub**: [FeliponsioDev](https://github.com/FeliponsioDev)

---
