// Función para procesar el mensaje del usuario y devolver una respuesta
// En este archivo podras configurar las respuestas del chatbot
export function processUserMessage(message: string): string {
    // Convertir el mensaje a minúsculas para facilitar la comparación
    const input = message.toLowerCase()
    let response = ""
  
    // ===== CONEXIÓN =====
    if (
      input.includes("conect") ||
      input.includes("unir") ||
      input.includes("entrar") ||
      input.includes("ip") ||
      input.includes("dirección") ||
      input.includes("direccion") ||
      input.includes("como entro")
    ) {
      response =
        "Para conectarte al servidor de Minecraft, sigue estos pasos:\n\n" +
        "1. Abre Minecraft (versión 1.20.1)\n" +
        '2. Ve a "Multijugador" y luego "Añadir servidor"\n' +
        '3. Nombre del servidor: "Nuestro Servidor"\n' +
        "4. Dirección IP: mc.ejemplo.com\n" +
        '5. Haz clic en "Listo" y luego conecta\n\n' +
        "Si tienes problemas para conectarte, verifica:\n" +
        "• Que estés usando la versión correcta (1.20.1)\n" +
        "• Que no tengas mods incompatibles instalados\n" +
        "• Que tu firewall no esté bloqueando Minecraft\n" +
        "• Que tu conexión a internet sea estable"
    }
  
    // ===== RENDIMIENTO =====
    else if (
      input.includes("lag") ||
      input.includes("lento") ||
      input.includes("fps") ||
      input.includes("rendimiento") ||
      input.includes("tps") ||
      input.includes("congelado") ||
      input.includes("freeze") ||
      input.includes("lentitud")
    ) {
      response =
        "Si estás experimentando lag o bajo rendimiento, prueba estas soluciones:\n\n" +
        "1. **Optimiza tu configuración gráfica**:\n" +
        "   • Reduce la distancia de renderizado a 8-12 chunks\n" +
        "   • Desactiva las partículas y efectos visuales avanzados\n" +
        "   • Baja la calidad de los gráficos\n" +
        "   • Limita los FPS a un valor estable (60-120)\n\n" +
        "2. **Mejora el rendimiento de tu PC**:\n" +
        "   • Cierra aplicaciones en segundo plano\n" +
        "   • Asigna más RAM a Minecraft (recomendado: 4-6GB)\n" +
        "   • Actualiza tus controladores gráficos\n" +
        "   • Verifica que tu PC no esté sobrecalentándose\n\n" +
        "3. **Verifica tu conexión**:\n" +
        "   • Usa una conexión por cable en lugar de WiFi si es posible\n" +
        "   • Reinicia tu router\n" +
        "   • Verifica que nadie esté usando mucho ancho de banda en tu red\n" +
        "   • Ejecuta un test de velocidad para comprobar tu ping y velocidad\n\n" +
        "4. **Optimización con mods**:\n" +
        "   • Instala OptiFine o Sodium para mejorar el rendimiento\n" +
        "   • Considera usar un pack de recursos de baja resolución"
    }
  
    // ===== MODS Y PLUGINS =====
    else if (
      input.includes("mod") ||
      input.includes("plugin") ||
      input.includes("textura") ||
      input.includes("shader") ||
      input.includes("pack") ||
      input.includes("resource") ||
      input.includes("optifine") ||
      input.includes("forge")
    ) {
      response =
        "Información sobre mods y recursos para nuestro servidor:\n\n" +
        "**Mods**: Nuestro servidor es vanilla, por lo que no necesitas mods para jugar. Sin embargo, estos mods cliente son compatibles y recomendados:\n" +
        "• Optifine/Sodium - Para mejorar el rendimiento\n" +
        "• JourneyMap/Xaero's Minimap - Para navegación\n" +
        "• Replay Mod - Para grabar tus aventuras\n" +
        "• AppleSkin - Para información detallada de hambre/saturación\n" +
        "• Litematica - Para planificar construcciones\n\n" +
        "**Packs de texturas**: Puedes usar cualquier pack de texturas de tu elección.\n\n" +
        "**Shaders**: Compatibles con Optifine o Iris Shaders. Recomendamos:\n" +
        "• BSL Shaders - Buen equilibrio entre calidad y rendimiento\n" +
        "• Complementary Shaders - Muy personalizables\n" +
        "• Sildur's Vibrant Shaders - Para PCs menos potentes\n\n" +
        "Recuerda que los mods que dan ventajas injustas (como X-ray, fly hacks, auto-clickers, etc.) están prohibidos y pueden resultar en un baneo permanente."
    }
  
    // ===== COMANDOS =====
    else if (
      input.includes("comand") ||
      input.includes("orden") ||
      input.includes("/") ||
      input.includes("instruccion") ||
      input.includes("instrucción")
    ) {
      response =
        "Comandos útiles en nuestro servidor:\n\n" +
        "**Comandos básicos**:\n" +
        "• `/spawn` - Vuelve al punto de inicio\n" +
        "• `/tpa [jugador]` - Solicita teletransportarte a otro jugador\n" +
        "• `/tpaccept` - Acepta una solicitud de teletransporte\n" +
        "• `/home` - Vuelve a tu casa establecida\n" +
        "• `/sethome` - Establece tu ubicación actual como casa\n" +
        "• `/msg [jugador] [mensaje]` - Envía un mensaje privado\n" +
        "• `/list` - Muestra los jugadores conectados\n\n" +
        "**Economía y tiendas**:\n" +
        "• `/balance` o `/bal` - Muestra tu saldo actual\n" +
        "• `/pay [jugador] [cantidad]` - Envía dinero a otro jugador\n" +
        "• `/shop` - Abre el menú de la tienda del servidor\n" +
        "• `/sell hand` - Vende el ítem que tienes en la mano\n" +
        "• `/ah` - Abre la casa de subastas\n\n" +
        "**Protección de terrenos**:\n" +
        "• `/claim` - Reclama el terreno donde estás parado\n" +
        "• `/trust [jugador]` - Da acceso a un jugador a tu terreno\n" +
        "• `/abandonclaim` - Abandona un terreno reclamado\n" +
        "• `/claimlist` - Muestra tus terrenos reclamados\n\n" +
        "**Otros comandos**:\n" +
        "• `/afk` - Indica que estás ausente\n" +
        "• `/kit` - Muestra los kits disponibles\n" +
        "• `/vote` - Muestra enlaces para votar por el servidor\n" +
        "• `/rules` - Muestra las reglas del servidor"
    }
  
    // ===== REGLAS =====
    else if (
      input.includes("regla") ||
      input.includes("norma") ||
      input.includes("prohibido") ||
      input.includes("permitido") ||
      input.includes("baneo") ||
      input.includes("sancion")
    ) {
      response =
        "Reglas principales del servidor:\n\n" +
        "1. **Respeto mutuo**: No insultes, acoses o discrimines a otros jugadores.\n" +
        "2. **No griefing**: No destruyas construcciones de otros jugadores sin permiso.\n" +
        "3. **No robo**: Respetar las propiedades y cofres de otros jugadores.\n" +
        "4. **No trampas**: No uses hacks, mods de ventaja injusta o exploits.\n" +
        "5. **No spam**: Evita el spam en el chat o construcciones que causen lag.\n" +
        "6. **Construcciones apropiadas**: No construyas estructuras ofensivas o inapropiadas.\n" +
        "7. **No publicidad**: No promociones otros servidores o servicios no relacionados.\n" +
        "8. **Reporta problemas**: Usa /report para informar sobre jugadores que rompen las reglas.\n\n" +
        "**Sistema de sanciones**:\n" +
        "• Primera infracción: Advertencia\n" +
        "• Segunda infracción: Expulsión temporal (1-3 días)\n" +
        "• Tercera infracción: Baneo permanente\n\n" +
        "Infracciones graves como hacking o acoso pueden resultar en un baneo inmediato sin advertencia previa.\n\n" +
        "Si crees que has sido sancionado injustamente, puedes apelar en nuestro Discord."
    }
  
    // ===== EVENTOS =====
    else if (
      input.includes("evento") ||
      input.includes("torneo") ||
      input.includes("concurso") ||
      input.includes("competicion") ||
      input.includes("competición") ||
      input.includes("premio")
    ) {
      response =
        "Próximos eventos en el servidor:\n\n" +
        "• **Torneo PvP** - Este sábado a las 20:00 (hora del servidor)\n" +
        "   Premio: Kit especial + 50,000 monedas del servidor\n\n" +
        '• **Concurso de construcción** - Tema: "Ciudades futuristas"\n' +
        "   Fecha: Inicia el próximo lunes y dura 7 días\n" +
        "   Premio: Rango VIP por 1 mes + Showcase en nuestras redes sociales\n\n" +
        "• **Evento de supervivencia extrema** - Nuevo mapa con dificultad extrema\n" +
        "   Fecha: Próximamente (sigue nuestro Discord para anuncios)\n\n" +
        "• **Carrera de Elytra** - Circuito especial con obstáculos\n" +
        "   Fecha: Domingo próximo a las 18:00 (hora del servidor)\n" +
        "   Premio: Items exclusivos + 25,000 monedas del servidor\n\n" +
        "• **Noche de Minijuegos** - Varios minijuegos con premios\n" +
        "   Fecha: Todos los viernes a las 19:00 (hora del servidor)\n\n" +
        "Para más detalles sobre los eventos y cómo participar, visita nuestro Discord o consulta los anuncios en el spawn del servidor."
    }
  
    // ===== INFORMACIÓN DEL SERVIDOR =====
    else if (
      input.includes("servidor") ||
      input.includes("info") ||
      input.includes("versión") ||
      input.includes("version") ||
      input.includes("acerca") ||
      input.includes("sobre")
    ) {
      response =
        "Información del servidor:\n\n" +
        "• **Nombre**: Nuestro Servidor de Minecraft\n" +
        "• **Versión**: Minecraft Java 1.20.1\n" +
        "• **Dirección IP**: mc.ejemplo.com\n" +
        "• **Tipo**: Survival semi-vanilla\n" +
        "• **Dificultad**: Normal\n" +
        "• **PvP**: Activado en zonas de combate, desactivado en áreas seguras\n" +
        "• **Keepinventory**: Desactivado (pierdes items al morir)\n" +
        "• **Mapa dinámico**: map.ejemplo.com\n" +
        "• **Slots**: 100 jugadores máximo\n" +
        "• **Tiempo de actividad**: 24/7 con reinicios programados los lunes a las 4:00 AM\n" +
        "• **Edad del mundo**: 6 meses (sin planes de reset)\n" +
        "• **Plugins principales**: Essentials, GriefPrevention, Dynmap, mcMMO\n" +
        "• **Economía**: Basada en monedas del servidor, con tiendas de jugadores y del servidor\n" +
        "• **Comunidad**: +5000 jugadores registrados, promedio de 50-70 jugadores online"
    }
  
    // ===== RANGOS Y PERMISOS =====
    else if (
      input.includes("rango") ||
      input.includes("permiso") ||
      input.includes("vip") ||
      input.includes("admin") ||
      input.includes("moderador") ||
      input.includes("staff")
    ) {
      response = "Información sobre rangos y permisos en el servidor:\n\n" +
        "**Rangos de jugadores**:\n" +
        "• **Novato** - Rango inicial para todos los jugadores\n" +
        "Permisos: Básicos"
        + "• **Novato** - Rango inicial para todos los jugadores\n"
        + "   Permisos: Básicos (3 homes, 1 claim de terreno)\n\n"
        + 
      "• **Miembro** - Después de 5 horas de juego\n"
        + "   Permisos: 5 homes, 2 claims de terreno, acceso a /kit miembro\n\n"
        + "• **Veterano** - Después de 50 horas de juego\n"
        + "   Permisos: 10 homes, 4 claims de terreno, acceso a /fly en áreas seguras\n\n"
        + "**Rangos de donador**:\n"
        + "• **VIP** - Donación de $5/mes\n"
        + "   Permisos: 15 homes, 6 claims, /fly, /enderchest, colores en chat\n\n"
        + "• **VIP+** - Donación de $10/mes\n"
        + "   Permisos: Todo lo de VIP + /hat, /nick, /repair, kits exclusivos\n\n"
        + "• **MVP** - Donación de $20/mes\n"
        + "   Permisos: Todo lo anterior + /ptime, /pweather, partículas personalizadas\n\n"
        + "**Rangos de staff**:\n"
        + "• **Ayudante** - Asiste a jugadores con dudas básicas\n"
        + "• **Moderador** - Gestiona el chat y resuelve disputas entre jugadores\n"
        + "• **Admin** - Gestiona el servidor y sus funcionalidades\n"
        + "• **Owner** - Propietario del servidor\n\n"
        + "Para solicitar un puesto en el staff, debes tener al menos 100 horas de juego y completar un formulario en nuestro Discord."
    }
  
    // ===== ECONOMÍA =====
    else if (
      input.includes("econom") ||
      input.includes("dinero") ||
      input.includes("tienda") ||
      input.includes("comprar") ||
      input.includes("vender") ||
      input.includes("precio") ||
      input.includes("moneda") ||
      input.includes("shop")
    ) {
      response =
        "Información sobre la economía del servidor:\n\n" +
        '**Moneda**: Utilizamos "Coins" como moneda virtual del servidor.\n\n' +
        "**Cómo ganar dinero**:\n" +
        "• Vender recursos a la tienda del servidor (/shop)\n" +
        "• Vender items a otros jugadores en el mercado (/market)\n" +
        "• Completar misiones diarias (/quests)\n" +
        "• Participar y ganar eventos\n" +
        "• Votar por el servidor (/vote) - 100 Coins por voto\n" +
        "• Matar mobs y jefes (algunos drops valen mucho)\n\n" +
        "**Tiendas**:\n" +
        "• **Tienda del servidor** (/shop) - Precios fijos establecidos por los administradores\n" +
        "• **Mercado de jugadores** (/market) - Los jugadores establecen sus propios precios\n" +
        "• **Tiendas físicas** - Puedes crear tu propia tienda en el mundo usando carteles\n" +
        "• **Subastas** (/ah) - Subasta tus items al mejor postor\n\n" +
        "**Comandos útiles**:\n" +
        "• `/bal` - Ver tu saldo actual\n" +
        "• `/pay [jugador] [cantidad]` - Transferir dinero\n" +
        "• `/baltop` - Ver ranking de jugadores más ricos\n" +
        "• `/sell hand [cantidad]` - Vender el item en tu mano\n" +
        "• `/sell all` - Vender todos los items vendibles en tu inventario\n\n" +
        "**Consejos**:\n" +
        "• Los diamantes y netherite son los recursos más valiosos\n" +
        "• Las granjas automáticas son una buena inversión a largo plazo\n" +
        "• Revisa regularmente los precios del mercado para maximizar ganancias"
    }
  
    // ===== PROBLEMAS TÉCNICOS =====
    else if (
      input.includes("error") ||
      input.includes("problema") ||
      input.includes("crash") ||
      input.includes("bug") ||
      input.includes("fallo") ||
      input.includes("pantalla") ||
      input.includes("java") ||
      input.includes("launcher")
    ) {
      response =
        "Soluciones para problemas técnicos comunes:\n\n" +
        "**Minecraft se cierra inesperadamente (crash)**:\n" +
        "1. Actualiza Java a la última versión\n" +
        "2. Asigna más RAM a Minecraft (2-4GB recomendado)\n" +
        "3. Actualiza tus controladores gráficos\n" +
        "4. Verifica si hay conflictos entre mods\n" +
        "5. Reinstala Minecraft como último recurso\n\n" +
        '**Error "Can\'t connect to server"**:\n' +
        "1. Verifica que la IP sea correcta: mc.ejemplo.com\n" +
        "2. Asegúrate de estar usando la versión 1.20.1\n" +
        "3. Comprueba tu conexión a internet\n" +
        "4. Desactiva el firewall temporalmente para probar\n" +
        "5. Intenta con una conexión diferente (datos móviles)\n\n" +
        '**Pantalla "Invalid session"**:\n' +
        "1. Cierra sesión y vuelve a iniciar sesión en el launcher\n" +
        "2. Reinicia el juego y el launcher\n" +
        "3. Espera unos minutos (a veces es un problema temporal)\n\n" +
        "**Problemas de renderizado o gráficos**:\n" +
        "1. Reduce la configuración gráfica\n" +
        "2. Desactiva shaders o packs de recursos pesados\n" +
        "3. Actualiza o reinstala tus controladores gráficos\n" +
        "4. Cambia entre OpenGL y DirectX en la configuración\n\n" +
        "**Problemas con el launcher**:\n" +
        "1. Usa el launcher oficial de Minecraft\n" +
        "2. Intenta launchers alternativos como MultiMC o Prism\n" +
        "3. Ejecuta el launcher como administrador\n\n" +
        "Si ninguna de estas soluciones funciona, por favor proporciona detalles específicos de tu problema en nuestro Discord para recibir ayuda personalizada."
    }
  
    // ===== MINIJUEGOS =====
    else if (
      input.includes("minijuego") ||
      input.includes("juego") ||
      input.includes("parkour") ||
      input.includes("pvp") ||
      input.includes("arena") ||
      input.includes("competir")
    ) {
      response =
        "Información sobre minijuegos en el servidor:\n\n" +
        "**Áreas de minijuegos**:\n" +
        "• **Arena PvP** - Combate todos contra todos con kit básico (/warp arena)\n" +
        "• **Parkour Challenge** - 5 niveles de dificultad creciente (/warp parkour)\n" +
        "• **Mob Arena** - Sobrevive oleadas de monstruos (/warp mobarena)\n" +
        "• **Spleef** - Rompe bloques bajo tus oponentes (/warp spleef)\n" +
        "• **Carreras de Elytra** - Circuito aéreo cronometrado (/warp elytra)\n" +
        "• **Laberinto** - Encuentra la salida antes que los demás (/warp maze)\n\n" +
        "**Eventos especiales** (solo en fechas programadas):\n" +
        "• **Hunger Games** - Supervivencia y PvP estilo Battle Royale\n" +
        "• **Build Battle** - Competición de construcción por temas\n" +
        "• **UHC** - Ultra Hardcore sin regeneración natural\n\n" +
        "**Recompensas**:\n" +
        "• Todos los minijuegos otorgan Coins según tu desempeño\n" +
        "• Los mejores jugadores reciben recompensas exclusivas\n" +
        "• Hay un ranking global accesible con /top\n\n" +
        "**Comandos útiles**:\n" +
        "• `/minigames` - Menú principal de minijuegos\n" +
        "• `/join [minijuego]` - Unirse a un minijuego específico\n" +
        "• `/leave` - Salir del minijuego actual\n" +
        "• `/stats` - Ver tus estadísticas en minijuegos\n\n" +
        "Visita /warp games para acceder al hub central de minijuegos donde encontrarás todos los portales."
    }
  
    // ===== DONACIONES =====
    else if (
      input.includes("dona") ||
      input.includes("comprar rango") ||
      input.includes("pagar") ||
      input.includes("premium") ||
      input.includes("beneficio") ||
      input.includes("ventaja") ||
      input.includes("apoyar")
    ) {
      response =
        "Información sobre donaciones y beneficios:\n\n" +
        "**¿Por qué donar?**\n" +
        "Las donaciones nos ayudan a mantener el servidor online, mejorar el hardware, desarrollar nuevas características y garantizar una experiencia de juego óptima para todos.\n\n" +
        "**Rangos de donador**:\n" +
        "• **VIP** - $5/mes o $25/6 meses\n" +
        "   Beneficios: 15 homes, 6 claims, /fly en áreas seguras, /enderchest, colores en chat\n\n" +
        "• **VIP+** - $10/mes o $50/6 meses\n" +
        "   Beneficios: Todo lo de VIP + /hat, /nick, /repair, kits exclusivos\n\n" +
        "• **MVP** - $20/mes o $100/6 meses\n" +
        "   Beneficios: Todo lo anterior + /ptime, /pweather, partículas personalizadas, prioridad en cola\n\n" +
        "**Cómo donar**:\n" +
        "1. Visita nuestra tienda: https://ejemplo.com/tienda\n" +
        "2. Selecciona el rango que deseas\n" +
        "3. Completa el pago (aceptamos PayPal, tarjetas de crédito y criptomonedas)\n" +
        "4. Los beneficios se activan automáticamente en 5-10 minutos\n\n" +
        "**Política de reembolso**:\n" +
        "Ofrecemos reembolsos dentro de los primeros 3 días si no estás satisfecho con tu compra. Contacta a un administrador en Discord para procesar tu solicitud.\n\n" +
        "**Nota importante**:\n" +
        "Todas las donaciones son voluntarias. Los beneficios de donador están diseñados para no romper el balance del juego ni dar ventajas excesivas en PvP o economía."
    }
  
    // ===== COMUNIDAD =====
    else if (
      input.includes("comunidad") ||
      input.includes("discord") ||
      input.includes("foro") ||
      input.includes("social") ||
      input.includes("youtube") ||
      input.includes("twitch") ||
      input.includes("twitter") ||
      input.includes("contacto")
    ) {
      response =
        "Información sobre nuestra comunidad y redes sociales:\n\n" +
        "**Discord**:\n" +
        "• Enlace: https://discord.gg/tuservidordeminecraft\n" +
        "• Canales para soporte, sugerencias, reportes y chat general\n" +
        "• Anuncios de eventos y actualizaciones\n" +
        "• Comunidad activa de +3000 miembros\n\n" +
        "**Redes sociales**:\n" +
        "• Twitter/X: @TuServidorMC - Anuncios y novedades\n" +
        "• Instagram: @TuServidorMC - Capturas y momentos destacados\n" +
        "• YouTube: TuServidorMC - Tutoriales y eventos grabados\n" +
        "• TikTok: @TuServidorMC - Clips cortos y momentos divertidos\n\n" +
        "**Foro**:\n" +
        "• Web: https://ejemplo.com/foro\n" +
        "• Secciones para sugerencias, guías y discusiones\n\n" +
        "**Streamers oficiales**:\n" +
        "• Transmisiones semanales en Twitch: twitch.tv/tuservidormc\n" +
        "• Programa de afiliados para creadores de contenido\n\n" +
        "**Contacto con el staff**:\n" +
        "• Email: contacto@ejemplo.com\n" +
        "• Ticket de soporte en Discord (#crear-ticket)\n\n" +
        "Te invitamos a unirte a nuestro Discord para estar al día con todas las novedades y formar parte activa de nuestra comunidad."
    }
  
    // ===== ACTUALIZACIONES =====
    else if (
      input.includes("actualiza") ||
      input.includes("nuevo") ||
      input.includes("cambio") ||
      input.includes("feature") ||
      input.includes("futuro") ||
      input.includes("próximo") ||
      input.includes("proximo") ||
      input.includes("plan")
    ) {
      response =
        "Información sobre actualizaciones y planes futuros:\n\n" +
        "**Última actualización** (v3.5 - 15/03/2025):\n" +
        "• Actualización a Minecraft 1.20.1\n" +
        "• Nuevo sistema de economía con inflación controlada\n" +
        "• 3 nuevos minijuegos: Elytra Race, Build Battle y Spleef\n" +
        "• Mejoras en el sistema anti-cheat\n" +
        "• Optimizaciones de rendimiento del servidor\n\n" +
        "**Próximas actualizaciones**:\n" +
        "• **Abril 2025**: Nuevo mundo End con estructuras personalizadas\n" +
        "• **Mayo 2025**: Sistema de misiones y logros con recompensas\n" +
        "• **Junio 2025**: Evento de verano con mapa especial temporal\n" +
        "• **Julio 2025**: Actualización a la próxima versión de Minecraft (cuando esté disponible)\n\n" +
        "**En desarrollo**:\n" +
        "• Sistema de clanes/facciones mejorado\n" +
        "• Nuevos rangos y progresión de jugador\n" +
        "• Expansión del mapa del mundo con biomas personalizados\n" +
        "• Aplicación móvil para chat y estadísticas\n\n" +
        "**Sugerencias**:\n" +
        "Valoramos las ideas de la comunidad. Puedes enviar tus sugerencias en nuestro Discord en el canal #sugerencias o en el foro oficial.\n\n" +
        "Para más detalles sobre las actualizaciones, consulta nuestro Discord o el canal de anuncios en el juego."
    }
  
    // ===== AYUDA GENERAL =====
    else if (
      input.includes("ayuda") ||
      input.includes("help") ||
      input.includes("guía") ||
      input.includes("guia") ||
      input.includes("tutorial") ||
      input.includes("como")
    ) {
      response =
        "Guía general para nuevos jugadores:\n\n" +
        "**Primeros pasos**:\n" +
        "1. Conéctate al servidor usando la IP: mc.ejemplo.com (versión 1.20.1)\n" +
        "2. Lee las reglas con el comando /rules\n" +
        "3. Visita el spawn para encontrar información importante\n" +
        "4. Usa /rtp para teletransportarte a un lugar aleatorio y comenzar a jugar\n" +
        "5. Protege tu terreno con /claim para evitar griefing\n\n" +
        "**Comandos esenciales**:\n" +
        "• `/spawn` - Volver al punto de inicio\n" +
        "• `/sethome` - Establecer tu casa\n" +
        "• `/home` - Teletransportarte a tu casa\n" +
        "• `/tpa [jugador]` - Solicitar teletransporte a otro jugador\n" +
        "• `/msg [jugador] [mensaje]` - Enviar mensaje privado\n\n" +
        "**Economía**:\n" +
        "• Gana dinero vendiendo recursos con /shop\n" +
        "• Compra y vende en el mercado de jugadores con /market\n" +
        "• Revisa tu saldo con /balance\n\n" +
        "**Protección**:\n" +
        "• Protege tu terreno con /claim\n" +
        "• Añade amigos a tu terreno con /trust [jugador]\n" +
        "• Expande tu terreno con más bloques de claim\n\n" +
        "**Comunidad**:\n" +
        "• Únete a nuestro Discord para obtener ayuda de otros jugadores\n" +
        "• Participa en eventos para ganar premios\n" +
        "• Sigue las reglas y respeta a los demás jugadores\n\n" +
        "Si necesitas ayuda específica, no dudes en preguntar sobre un tema concreto o contactar con un miembro del staff en el juego o Discord."
    }
  
    // ===== RESPUESTA POR DEFECTO =====
    else {
      response =
        "Gracias por tu pregunta. No tengo una respuesta específica para eso, pero puedo ayudarte con:\n\n" +
        "• Cómo conectarte al servidor\n" +
        "• Solucionar problemas de lag\n" +
        "• Información sobre mods y texturas compatibles\n" +
        "• Comandos útiles del servidor\n" +
        "• Reglas del servidor\n" +
        "• Eventos próximos\n" +
        "• Información general del servidor\n" +
        "• Rangos y permisos\n" +
        "• Economía y tiendas\n" +
        "• Minijuegos disponibles\n" +
        "• Donaciones y beneficios\n" +
        "• Comunidad y redes sociales\n" +
        "• Actualizaciones y planes futuros\n\n" +
        "Para asistencia más específica, te recomiendo unirte a nuestro servidor de Discord donde nuestro equipo de soporte podrá ayudarte de manera más detallada."
    }
  
    return response
  }
  
  