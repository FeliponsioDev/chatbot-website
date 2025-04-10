/// <reference types="astro/client" />

// Definiciones de tipos para el proyecto
interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string
    // Añade aquí otras variables de entorno si las necesitas
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
  