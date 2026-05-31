#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 3: Amenazas a los Sistemas de Información
# Basado en: Apuntes de Seguridad de la Información 2022, UA 3
# Para ejecutar el test, usa main.py

from dataclasses import dataclass
from typing import List


@dataclass(frozen=True)
class Pregunta:
    tema: str
    pregunta: str
    correcta: str
    distractores: List[str]
    explicacion: str


BANCO: List[Pregunta] = [

    # ── 1. Tipos de amenazas ─────────────────────────────────────────────────

    Pregunta(
        "Tipos de amenazas",
        "¿Cuáles son los tres tipos básicos de amenazas a la seguridad de los sistemas de información?",
        "Ataques, accidentes y negligencias",
        [
            "Virus, gusanos y troyanos",
            "Phishing, pharming y spoofing",
            "Robo, destrucción y divulgación",
        ],
        "Las amenazas se clasifican en: ataques (intencionados), accidentes (fortuitos) y negligencias (inadvertidos).",
    ),
    Pregunta(
        "Tipos de amenazas",
        "Las negligencias como tipo de amenaza se caracterizan por ser:",
        "Daños no intencionados producidos por un mal uso de equipos o sistemas por el propio personal",
        [
            "Ataques planificados por organizaciones criminales externas",
            "Accidentes provocados por desastres naturales",
            "Intrusiones realizadas a través de vulnerabilidades del sistema operativo",
        ],
        "Las negligencias son daños no intencionados debidos al descuido, escasa formación o deficiencias en políticas de seguridad.",
    ),
    Pregunta(
        "Tipos de amenazas",
        "Una vulnerabilidad se define en la UA3 como:",
        "La debilidad o incapacidad de respuesta ante una determinada amenaza",
        [
            "Una acción intencionada de provocar un daño al sistema",
            "Un programa malicioso que se propaga automáticamente",
            "El resultado de un ataque exitoso sobre un activo",
        ],
        "La vulnerabilidad es una debilidad que puede ser explotada por ataques, accidentes o negligencias.",
    ),

    # ── 1.1. Efectos de un ataque ────────────────────────────────────────────

    Pregunta(
        "Efectos de un ataque",
        "¿Cuál de estos NO es un efecto típico de un ataque informático según la UA3?",
        "Mejora del rendimiento de los sistemas afectados",
        [
            "Destrucción de información",
            "Pérdida de disponibilidad de los servicios",
            "Daños a la reputación de la empresa",
        ],
        "Los efectos de un ataque son: destrucción de info, pérdida de disponibilidad, daños a la propiedad, violación de intimidad y daños reputacionales.",
    ),
    Pregunta(
        "Efectos de un ataque",
        "La violación de la intimidad como efecto de un ataque puede ocasionar:",
        "Graves consecuencias y cuantiosas sanciones, incluso si la revelación fue consecuencia de un ataque",
        [
            "Solo consecuencias morales sin implicaciones legales",
            "Responsabilidad exclusiva del atacante sin consecuencias para la organización",
            "Únicamente daños reputacionales sin sanciones económicas",
        ],
        "El hecho de que la revelación sea resultado de un ataque NO exime de las consecuencias legales en protección de datos.",
    ),

    # ── 1.2. Motivaciones de los atacantes (MICE) ────────────────────────────

    Pregunta(
        "Motivaciones MICE",
        "El acrónimo MICE resume las motivaciones de los atacantes. ¿Qué significa?",
        "Money, Ideology, Compromise, Ego",
        [
            "Malware, Intrusion, Cracking, Exploitation",
            "Monitoring, Interception, Control, Encryption",
            "Manipulation, Influence, Corruption, Espionage",
        ],
        "MICE = Money (económica), Ideology (política), Compromise (causar daño) y Ego (prestigio personal).",
    ),
    Pregunta(
        "Motivaciones MICE",
        "Según los apuntes, ¿cuál es la motivación predominante en la sociedad actual para los atacantes?",
        "La obtención de beneficio económico (Money)",
        [
            "El prestigio y la autoestima (Ego)",
            "La motivación política o hacktivismo (Ideology)",
            "La intención de causar daño personal (Compromise)",
        ],
        "El beneficio económico es la motivación principal: el cibercrimen supera al tráfico de drogas a nivel mundial.",
    ),
    Pregunta(
        "Motivaciones MICE",
        "El hacktivismo se corresponde con la motivación de tipo:",
        "Ideology (motivación política o social)",
        [
            "Money (beneficio económico)",
            "Ego (prestigio personal)",
            "Compromise (intención de causar daño)",
        ],
        "El hacktivismo es activismo en red por causas políticas/sociales, encuadrado en la motivación ideológica.",
    ),

    # ── 1.3. Perfiles del atacante ───────────────────────────────────────────

    Pregunta(
        "Perfiles de atacantes",
        "La definición correcta de 'hacker' según los apuntes es:",
        "Persona con alta cualificación técnica que compromete la seguridad como reto personal, sin mala fe ni intención de daño",
        [
            "Cualquier persona que accede ilegalmente a sistemas informáticos con fines delictivos",
            "Persona que utiliza kits de ataque sin especial cualificación técnica",
            "Especialista en desproteger software comercial eliminando sus sistemas de protección",
        ],
        "El hacker actúa por curiosidad o reto personal. El cracker actúa con mala fe (black hat).",
    ),
    Pregunta(
        "Perfiles de atacantes",
        "Un 'script kiddie' se caracteriza por:",
        "Atacar sistemas usando herramientas ya preparadas sin comprender sus consecuencias reales",
        [
            "Tener alta cualificación técnica y actuar con mala fe",
            "Ser un experto en tarjetas bancarias y sistemas criptográficos",
            "Especializarse en escuchas de redes telefónicas",
        ],
        "Los script kiddies usan 'kits de ataque' sin experiencia: son 'niños jugando con explosivos'.",
    ),
    Pregunta(
        "Perfiles de atacantes",
        "Un 'carder' es un atacante especializado en:",
        "Sistemas criptográficos y tarjetas inteligentes, especialmente tarjetas bancarias",
        [
            "Interceptar comunicaciones de voz en redes telefónicas",
            "Crear falsas réplicas de páginas web para robar credenciales",
            "Desarrollar ransomware y solicitar rescates",
        ],
        "El carder explota vulnerabilidades de tarjetas inteligentes y sistemas de pago.",
    ),
    Pregunta(
        "Perfiles de atacantes",
        "Los empleados descontentos o ex-empleados son especialmente peligrosos porque:",
        "Conocen la organización y sus políticas de seguridad (contraseñas, vulnerabilidades, etc.)",
        [
            "Disponen de recursos económicos ilimitados para financiar los ataques",
            "Tienen acceso a herramientas de hacking de última generación",
            "Actúan siempre en colaboración con organizaciones delictivas externas",
        ],
        "El conocimiento interno de la organización les confiere un nivel de peligrosidad muy difícil de igualar desde el exterior.",
    ),

    # ── 1.4. Vulnerabilidades y exploits ────────────────────────────────────

    Pregunta(
        "Vulnerabilidades y exploits",
        "Un 'exploit' es:",
        "El ataque específico diseñado para aprovechar una vulnerabilidad concreta de un programa",
        [
            "Un tipo de malware que se propaga automáticamente por la red",
            "Una herramienta de análisis de vulnerabilidades legítima",
            "Un parche de seguridad que corrige fallos en el software",
        ],
        "La vulnerabilidad es la debilidad; el exploit es el ataque que la aprovecha.",
    ),
    Pregunta(
        "Vulnerabilidades y exploits",
        "Un 'virus de día cero' es especialmente peligroso porque:",
        "Explota una vulnerabilidad desconocida por el fabricante, que no puede tomar medidas contra ella",
        [
            "Se activa exactamente a medianoche destruyendo todos los ficheros",
            "Solo afecta a sistemas recién instalados el mismo día de su lanzamiento",
            "Es indetectable para cualquier antivirus por diseño permanente",
        ],
        "El 'zero-day' explota vulnerabilidades no conocidas (ni publicadas) por el fabricante, por lo que no hay parche disponible.",
    ),
    Pregunta(
        "Vulnerabilidades y exploits",
        "¿Por qué es fundamental mantener actualizados los sistemas operativos y aplicaciones?",
        "Porque al publicarse la corrección de una vulnerabilidad, esta se hace pública y puede ser explotada por atacantes hasta que el usuario actualice",
        [
            "Porque las actualizaciones mejoran exclusivamente el rendimiento del sistema",
            "Porque los antivirus solo funcionan con las versiones más recientes",
            "Porque las versiones antiguas no son compatibles con Internet",
        ],
        "Una vez publicado el exploit, el tiempo de actualización de los usuarios es el factor crítico de exposición.",
    ),

    # ── 2. Amenazas en entorno doméstico ────────────────────────────────────

    Pregunta(
        "Entorno doméstico",
        "¿Por qué es especialmente peligroso usar el ordenador doméstico como administrador permanente?",
        "Cualquier pieza de software malicioso que se ejecute tomará control absoluto del sistema",
        [
            "Porque el modo administrador desactiva automáticamente el antivirus",
            "Porque impide recibir actualizaciones de seguridad del sistema operativo",
            "Porque el perfil de administrador no puede conectarse a Internet",
        ],
        "Con privilegios de administrador, el malware ejecutado adquiere control total del sistema, dificultando su eliminación.",
    ),
    Pregunta(
        "Entorno doméstico",
        "¿Cuándo es susceptible una contraseña de ser comprometida por fuerza bruta en cuestión de horas?",
        "Cuando tiene menos de ocho caracteres",
        [
            "Cuando contiene caracteres especiales y números",
            "Cuando se cambia cada seis meses",
            "Cuando se almacena en el gestor de contraseñas del navegador",
        ],
        "Contraseñas de menos de 8 caracteres pueden ser comprometidas en horas por ataques de fuerza bruta.",
    ),
    Pregunta(
        "Entorno doméstico",
        "El mecanismo NAT en un router doméstico proporciona seguridad porque:",
        "Solo permite el flujo de datos de las conexiones iniciadas desde el interior, bloqueando las entrantes",
        [
            "Cifra todo el tráfico entre el router y los equipos internos",
            "Filtra el malware antes de que llegue a los equipos internos",
            "Autentica a todos los usuarios de la red doméstica",
        ],
        "NAT actúa como membrana semipermeable: permite salida libre pero bloquea conexiones entrantes no solicitadas.",
    ),

    # ── 3. Software malicioso (malware) ──────────────────────────────────────

    Pregunta(
        "Malware general",
        "El término 'malware' designa:",
        "Cualquier pieza de software malicioso cuyo objetivo sea comprometer la seguridad de un sistema",
        [
            "Exclusivamente los virus informáticos de tipo destructivo",
            "Solo los programas que se propagan automáticamente por redes",
            "Los programas de gestión de licencias de software comercial",
        ],
        "Malware es el término genérico para todo software malicioso, independientemente de su tipo o mecanismo.",
    ),
    Pregunta(
        "Malware general",
        "El 'crimeware' es la variedad de malware que:",
        "Actúa con motivación económica, extendiéndose silenciosamente para desarrollar actividades maliciosas",
        [
            "Es usado exclusivamente por estados para el ciberespionaje",
            "Solo afecta a equipos con sistemas operativos Windows",
            "Se limita a destruir información del equipo infectado",
        ],
        "El crimeware se desarrolla para infectar el máximo de equipos sin ser detectado y obtener beneficio económico.",
    ),
    Pregunta(
        "Malware - propagación",
        "La característica principal que diferencia un VIRUS de un GUSANO es que:",
        "El virus requiere intervención humana para propagarse; el gusano se propaga automáticamente por la red",
        [
            "El virus es más peligroso que el gusano",
            "El gusano siempre va acompañado de un 'señuelo' para engañar al usuario",
            "El virus solo infecta sistemas operativos Windows y el gusano cualquier sistema",
        ],
        "El virus necesita que un humano ejecute un archivo infectado; el gusano se autopropaga explotando vulnerabilidades de red.",
    ),
    Pregunta(
        "Malware - propagación",
        "Un gusano accede al ordenador objetivo a través de:",
        "Alguna debilidad del sistema operativo o servicio de red defectuoso (exploit)",
        [
            "Un archivo ejecutable enviado por correo electrónico que el usuario abre",
            "Una App maliciosa descargada de una tienda de aplicaciones no oficial",
            "Un enlace de phishing que redirige a una página web maliciosa",
        ],
        "El gusano explota vulnerabilidades de red (exploits) para acceder y propagarse sin intervención humana.",
    ),
    Pregunta(
        "Malware - propagación",
        "Los troyanos son especialmente difíciles de combatir porque:",
        "Siempre van acompañados de un 'señuelo' que el usuario no reconoce como amenaza",
        [
            "Se propagan automáticamente como los gusanos sin necesidad de intervención humana",
            "Pueden modificar el sistema operativo para hacerse invisibles al antivirus",
            "Son imposibles de eliminar una vez que han accedido al sistema",
        ],
        "El troyano engaña al usuario haciéndose pasar por software legítimo; por eso el usuario lo instala voluntariamente.",
    ),
    Pregunta(
        "Malware - propagación",
        "El ransomware WannaCry (que afectó a Telefónica en 2017) es un ejemplo de combinación de mecanismos porque:",
        "Penetró como troyano, se replicaba como gusano e infectaba soportes como virus",
        [
            "Solo utilizó phishing para infectar los primeros equipos y luego se propagó manualmente",
            "Fue desarrollado por un estado y distribudo exclusivamente a través de correo electrónico",
            "Funcionaba exclusivamente como adware mostrando publicidad para obtener rescate",
        ],
        "WannaCry combinó los tres mecanismos de propagación: troyano (entrada), gusano (autoreplicación) y virus (soportes).",
    ),
    Pregunta(
        "Malware - tipos",
        "Un rootkit es especialmente peligroso porque:",
        "Sustituye programas del sistema operativo para ocultar todos sus componentes y acciones, engañando al antivirus local",
        [
            "Puede cifrar todos los archivos del sistema solicitando un rescate al usuario",
            "Se propaga automáticamente a otros equipos de la red infectada",
            "Muestra publicidad forzosa al usuario para obtener beneficio económico",
        ],
        "El rootkit oculta ficheros, procesos y conexiones. El antivirus local no puede detectarlo si el sistema está infectado.",
    ),
    Pregunta(
        "Malware - tipos",
        "Ante la sospecha de infección por rootkit, ¿cuál es la única forma de estar seguro de que el sistema está limpio?",
        "Escanear los discos con antivirus arrancando desde una fuente externa (pendrive), ya que el sistema infectado ocultará el malware",
        [
            "Instalar un antivirus actualizado y ejecutar un análisis completo desde el propio sistema",
            "Reiniciar el sistema en modo seguro y ejecutar el antivirus",
            "Desconectar el equipo de la red y esperar 24 horas antes de analizarlo",
        ],
        "Si el sistema está infectado por un rootkit, el análisis desde el propio sistema no puede detectarlo porque lo ocultará.",
    ),
    Pregunta(
        "Malware - tipos",
        "Un 'downloader' como tipo de malware:",
        "Es un pequeño código inicial que descarga silenciosamente el resto de componentes del malware usando los servicios de red",
        [
            "Es un programa que descarga archivos legítimos de Internet para el usuario",
            "Es un tipo de ransomware que cifra archivos y pide un rescate",
            "Es una variante de rootkit que sustituye los programas del sistema operativo",
        ],
        "El downloader es la primera fase: un código mínimo que luego descarga el malware completo.",
    ),
    Pregunta(
        "Malware - tipos",
        "Un 'backdoor' o puerta trasera consiste en:",
        "Cuentas de usuario con privilegios o servicios modificados que permiten al atacante acceder al sistema incluso después de detectado el ataque",
        [
            "Un tipo de virus que se autopropaga por la red atacando vulnerabilidades",
            "Un programa que muestra publicidad forzosa al usuario",
            "Un sistema de cifrado que bloquea los archivos del usuario",
        ],
        "La backdoor garantiza el acceso futuro al sistema, incluso después de corregidos los efectos del ataque inicial.",
    ),
    Pregunta(
        "Malware - tipos",
        "Los keyloggers de segunda generación son capaces de superar los teclados virtuales bancarios porque:",
        "Capturan y envían porciones de imagen de pantalla alrededor del puntero cuando el usuario usa el teclado virtual",
        [
            "Interceptan las comunicaciones cifradas entre el navegador y el banco",
            "Modifican el código del servidor bancario para capturar las contraseñas",
            "Bloquean el funcionamiento del teclado virtual y obligan a usar el teclado físico",
        ],
        "Los keyloggers evolucionaron para capturar screenshots de la zona del puntero, neutralizando los teclados virtuales.",
    ),
    Pregunta(
        "Malware - tipos",
        "Una botnet es:",
        "Una red de ordenadores infectados (zombies/bots) que obedecen remotamente las órdenes del atacante",
        [
            "Un sistema de cifrado distribuido para proteger comunicaciones privadas",
            "Una plataforma de análisis de vulnerabilidades utilizada por hackers éticos",
            "Un conjunto de servidores de actualizaciones automáticas de software",
        ],
        "La botnet permite al atacante usar miles de equipos zombies para spam, ataques DDoS, minería de criptomonedas, etc.",
    ),
    Pregunta(
        "Malware - tipos",
        "¿Cuál de estas NO es una tarea típica que puede ordenar una botnet?",
        "Aplicar parches de seguridad automáticamente en los equipos infectados",
        [
            "Envío masivo de spam aprovechando los servidores de correo de los zombies",
            "Ataques distribuidos de denegación de servicio (DDoS)",
            "Minería de criptomonedas con la potencia combinada de los procesadores infectados",
        ],
        "Las botnets se usan para actividades maliciosas: spam, DDoS, minería de criptomonedas, phishing, etc.",
    ),
    Pregunta(
        "Malware - tipos",
        "El ransomware (criptovirus) actúa:",
        "Cifrando el contenido de los ficheros del equipo y solicitando un rescate para recuperar la información",
        [
            "Robando contraseñas almacenadas en el navegador para enviarlas al atacante",
            "Instalando puertas traseras para garantizar el acceso futuro al sistema",
            "Mostrando publicidad forzosa mientras el usuario trabaja",
        ],
        "El ransomware cifra los archivos del usuario y exige un rescate (generalmente en criptomonedas) para descifrarlos.",
    ),
    Pregunta(
        "Malware - tipos",
        "El spyware es un software que:",
        "Se instala sin consentimiento para registrar la actividad del usuario y enviar los datos a un destino del atacante",
        [
            "Muestra publicidad forzosa al usuario para obtener beneficio económico",
            "Cifra los archivos del equipo para solicitar un rescate económico",
            "Descarga silenciosamente otros componentes de malware",
        ],
        "El spyware espía: registra navegación, contraseñas, horarios de actividad, etc., y los envía al atacante.",
    ),

    # ── 4. Amenazas en correo electrónico ────────────────────────────────────

    Pregunta(
        "Correo y spam",
        "El spam como herramienta de los atacantes es especialmente usado para:",
        "Distribución masiva de phishing, malware y publicidad no deseada",
        [
            "Ejecutar ataques de denegación de servicio distribuido",
            "Modificar el sistema DNS para redirigir a webs maliciosas",
            "Instalar rootkits en los servidores de correo",
        ],
        "Más del 50% del spam actual es producido por botnets para phishing, publicidad y distribución de malware.",
    ),

    # ── 5. Amenazas en navegación web ────────────────────────────────────────

    Pregunta(
        "Web hacking",
        "¿Cuál es la diferencia entre phishing y pharming?",
        "El phishing engaña al usuario con un enlace falso; el pharming falsea el DNS para que el enlace correcto lleve a la web maliciosa",
        [
            "El phishing es más peligroso que el pharming por ser más difícil de detectar",
            "El pharming solo afecta a equipos con Windows y el phishing a cualquier sistema",
            "El phishing usa malware y el pharming usa ingeniería social",
        ],
        "Phishing = enlace falso. Pharming = intoxicación DNS: incluso el enlace correcto lleva a la web falsa.",
    ),
    Pregunta(
        "Web hacking",
        "El spear phishing se diferencia del phishing ordinario en que:",
        "Va dirigido a víctimas específicas con el contenido del mensaje adaptado a sus características",
        [
            "Usa técnicas más simples que el phishing convencional",
            "Solo se realiza a través de redes sociales, no por correo electrónico",
            "Afecta solo a dispositivos móviles y no a ordenadores de sobremesa",
        ],
        "El spear phishing o 'phishing con arpón' es personalizado: el mensaje está adaptado a la víctima concreta.",
    ),
    Pregunta(
        "Web hacking",
        "La mejor defensa contra el phishing es:",
        "Formar a los usuarios para que nunca accedan a servicios sensibles a través de enlaces en correos, redes sociales o WhatsApp",
        [
            "Instalar un antivirus de última generación",
            "Usar exclusivamente conexiones cifradas HTTPS",
            "Cambiar las contraseñas cada 30 días",
        ],
        "Como el phishing se apoya en ingeniería social, la formación de los usuarios es su única defensa eficaz.",
    ),
    Pregunta(
        "Web hacking",
        "El pharming mediante 'intoxicación de la caché del servidor DNS' es especialmente peligroso porque:",
        "Intoxicando un solo servidor DNS se pueden redirigir muchos equipos diferentes a la web maliciosa",
        [
            "Requiere acceso físico al equipo de la víctima para modificar el fichero HOSTS",
            "Solo afecta a equipos sin antivirus instalado",
            "Es indetectable por los protocolos HTTPS y TLS",
        ],
        "La intoxicación del servidor DNS afecta a todos los equipos que consulten ese servidor, no solo a uno.",
    ),
    Pregunta(
        "Web hacking",
        "El pharming mediante modificación del fichero HOSTS del equipo local:",
        "Especifica directamente la IP maliciosa como asociada al nombre del servidor legítimo, requiriendo permisos de administrador",
        [
            "Es más peligroso que la intoxicación del servidor DNS porque afecta a más equipos",
            "Solo funciona en equipos con sistemas operativos Unix/Linux",
            "Es la técnica más compleja y raramente utilizada por el malware",
        ],
        "La modificación del HOSTS es simple (requiere ser administrador) y usada frecuentemente por malware.",
    ),
    Pregunta(
        "XSS y cookies",
        "El Cross-Site Scripting (XSS) no persistente consiste en:",
        "Inyectar código malicioso en un enlace URL para que sea ejecutado en el navegador de la víctima cuando accede al servidor",
        [
            "Insertar código malicioso directamente en la base de datos del servidor web",
            "Modificar el fichero HOSTS del equipo de la víctima para redirigir a una web maliciosa",
            "Enviar correos electrónicos masivos con enlaces a webs maliciosas",
        ],
        "El XSS no persistente inyecta código en el enlace (URL); la víctima al acceder ejecuta ese código en su navegador.",
    ),
    Pregunta(
        "XSS y cookies",
        "Las 'cookies espía' o cookies maliciosas son peligrosas porque:",
        "Permiten a sitios de terceros (banners, redes sociales) acceder a información de autenticación almacenada en el navegador",
        [
            "Cifran los archivos del usuario solicitando un rescate para recuperarlos",
            "Se propagan automáticamente a otros equipos de la red local",
            "Modifican el sistema DNS para redirigir las conexiones",
        ],
        "Las cookies espía aprovechan la inserción de elementos de terceros en páginas web para acceder a información restringida.",
    ),

    # ── 6. Redes sociales y cloud ────────────────────────────────────────────

    Pregunta(
        "Redes sociales",
        "El tabnabbing es una técnica que:",
        "Transforma una pestaña en segundo plano en una página falsa de acceso a servicios para robar credenciales cuando el usuario regresa",
        [
            "Redirige todos los clicks del usuario a páginas de spam o malware",
            "Captura la cámara y el micrófono del equipo sin conocimiento del usuario",
            "Cifra las comunicaciones de la red social para interceptarlas",
        ],
        "El tabnabbing aprovecha las pestañas del navegador: la pestaña olvidada se convierte en una página de login falsa.",
    ),
    Pregunta(
        "Redes sociales",
        "Las tres grandes amenazas del uso de plataformas de red social son:",
        "Amenazas técnicas (web hacking), incertidumbre sobre uso de datos y riesgos para la intimidad/privacidad",
        [
            "Spam, malware y ataques de denegación de servicio",
            "Phishing, pharming y XSS exclusivamente",
            "Robo de identidad, ransomware y botnets",
        ],
        "Las RRSS presentan tres tipos de amenazas: técnicas (web hacking), incertidumbre (uso de datos) e intimidad/privacidad.",
    ),
    Pregunta(
        "Cloud computing",
        "El principal riesgo de seguridad del cloud computing para las organizaciones es:",
        "La información (activo más importante) está fuera de la organización y su seguridad depende de terceros",
        [
            "La imposibilidad de cifrar los datos almacenados en la nube",
            "La falta de actualizaciones automáticas en los sistemas cloud",
            "El excesivo coste económico de los servicios de seguridad en la nube",
        ],
        "En la nube, la gestión de activos críticos de información está en manos de terceros, generando nuevos riesgos.",
    ),

    # ── 7. Ataques elaborados ────────────────────────────────────────────────

    Pregunta(
        "Ataques elaborados",
        "Las cuatro etapas básicas de un ataque elaborado a una organización son:",
        "Recopilación de información, identificación de vulnerabilidades, ataque y mantenimiento/continuación",
        [
            "Infección, propagación, ocultación y rescate",
            "Escaneo, explotación, instalación y comunicación",
            "Reconocimiento, armamento, entrega y explotación",
        ],
        "Las etapas son: recopilación de info → identificación de vulnerabilidades → ataque → mantenimiento (acceso, ocultación, aseguramiento, salto).",
    ),
    Pregunta(
        "Ataques elaborados",
        "El 'escaneo de puertos' (port scanning) permite al atacante:",
        "Detectar qué servicios ofrece la máquina objetivo y sus posibles vulnerabilidades según los puertos abiertos",
        [
            "Interceptar el tráfico de red de la organización objetivo",
            "Falsear las entradas del servidor DNS de la organización",
            "Enviar mensajes de correo masivos a empleados de la organización",
        ],
        "El escaneo de puertos identifica los servicios activos y sus versiones, buscando exploits conocidos.",
    ),
    Pregunta(
        "Ataques elaborados",
        "El 'sniffing' consiste en:",
        "Aprovechar la naturaleza promiscua de las redes para capturar y almacenar información relevante de los paquetes",
        [
            "Falsear las entradas del servidor DNS para redirigir conexiones",
            "Atacar servidores web mediante inyección de código SQL",
            "Capturar pulsaciones del teclado del usuario víctima",
        ],
        "Los sniffers de paquetes capturan el tráfico en redes Ethernet o Wifi, pudiendo interceptar comunicaciones no cifradas.",
    ),
    Pregunta(
        "Ataques elaborados",
        "El 'Google Hacking' hace referencia a:",
        "Usar opciones de búsqueda avanzada para localizar información sensible filtrada involuntariamente en buscadores",
        [
            "Atacar directamente los servidores de Google para obtener información de usuarios",
            "Crear páginas web falsas que imitan los resultados de Google para engañar a las víctimas",
            "Usar el buscador de Google para encontrar herramientas de hacking en foros",
        ],
        "Google Hacking explota las arañas/indexadores de Google para localizar versiones de software con exploits, mensajes de error, etc.",
    ),
    Pregunta(
        "Ataques elaborados",
        "La ingeniería social se basa en cuatro principios según Kevin Mitnick. ¿Cuál NO es uno de ellos?",
        "Todos queremos maximizar nuestro beneficio económico",
        [
            "Todos queremos ayudar",
            "El primer movimiento siempre es de confianza hacia el otro",
            "A todos nos gusta que nos halaguen",
        ],
        "Los 4 principios de Mitnick son: todos queremos ayudar, confiamos a priori, no nos gusta decir no, nos gusta que nos halaguen.",
    ),
    Pregunta(
        "Ataques elaborados",
        "La única forma eficaz de combatir la ingeniería social es:",
        "La organización de planes de formación específica de todo el personal de la organización",
        [
            "Instalar sistemas de detección de intrusos en la red perimetral",
            "Implementar autenticación de dos factores en todos los sistemas",
            "Cifrar todas las comunicaciones internas de la organización",
        ],
        "Como la ingeniería social ataca el factor humano (el más débil), solo la formación específica puede contrarrestarla.",
    ),
    Pregunta(
        "Ataques elaborados",
        "Un ataque de denegación de servicio distribuido (DDoS) mediante fuerza bruta consiste en:",
        "Usar miles de equipos infectados (botnet) para enviar peticiones simultáneas y saturar el servidor objetivo",
        [
            "Aprovechar exploits conocidos desde una sola máquina para saturar el servidor",
            "Modificar el código del servidor web para que rechace conexiones legítimas",
            "Interceptar y bloquear las comunicaciones entre el servidor y sus clientes legítimos",
        ],
        "El DDoS por fuerza bruta usa botnets para inundar el servidor con millones de peticiones simultáneas.",
    ),
    Pregunta(
        "Ataques elaborados",
        "La inyección SQL es una técnica de ataque que:",
        "Envía instrucciones SQL en lugar de datos al servidor web para comprometer la seguridad de su base de datos",
        [
            "Inyecta código malicioso en el enlace URL para ejecutarlo en el navegador de la víctima",
            "Modifica las consultas DNS para redirigir a páginas web maliciosas",
            "Intercepta el tráfico SSL/TLS entre el navegador y el servidor",
        ],
        "La inyección SQL altera los datos de entrada (usuario/contraseña) para enviar instrucciones SQL al servidor.",
    ),

    # ── APT ──────────────────────────────────────────────────────────────────

    Pregunta(
        "APT",
        "Una Amenaza Avanzada y Persistente (APT) se caracteriza principalmente por:",
        "El atacante se infiltra en la organización durante un largo período, adaptándose a las defensas para obtener información estratégica",
        [
            "Provocar la mayor destrucción posible de datos en el menor tiempo",
            "Usar exclusivamente ransomware para obtener beneficio económico rápido",
            "Atacar simultáneamente a miles de organizaciones de forma indiscriminada",
        ],
        "Las APT buscan acceso prolongado y sigiloso, generalmente para ciberespionaje. Son persistentes y adaptativas.",
    ),
    Pregunta(
        "APT",
        "¿Quiénes suelen estar detrás de los ataques APT?",
        "Estados u organizaciones delictivas/terroristas con elevados conocimientos y amplios recursos",
        [
            "Script kiddies que usan herramientas automatizadas disponibles en Internet",
            "Empleados descontentos que actúan de forma individual sin apoyo externo",
            "Empresas de ciberseguridad que realizan pruebas de penetración sin autorización",
        ],
        "Las APT requieren elevados conocimientos y recursos. Habitualmente están auspiciadas por estados o grandes organizaciones.",
    ),

    # ── Trampa ───────────────────────────────────────────────────────────────

    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el malware es FALSA?",
        "Los virus se propagan automáticamente por la red sin necesidad de intervención humana",
        [
            "Los gusanos no necesitan intervención humana para propagarse",
            "Los troyanos siempre van acompañados de un 'señuelo' para engañar al usuario",
            "Un mismo componente de malware puede combinar varios mecanismos de propagación",
        ],
        "Son los GUSANOS los que se propagan automáticamente; los VIRUS requieren intervención humana para su propagación.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el DDoS es CORRECTA?",
        "El DDoS mediante fuerza bruta usa botnets para saturar el servidor; el DoS mediante exploits puede realizarse desde una sola máquina",
        [
            "DoS y DDoS son términos sinónimos que describen el mismo tipo de ataque",
            "El DDoS solo puede realizarse contra servicios web, no contra otros protocolos",
            "El DoS distribuido es menos peligroso que el DoS desde una sola máquina",
        ],
        "DoS = una máquina, puede usar exploits para saturar. DDoS = muchas máquinas (botnet) para saturar por fuerza bruta.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la ingeniería social es FALSA?",
        "La ingeniería social puede neutralizarse completamente con herramientas técnicas como firewalls e IDS",
        [
            "La ingeniería social aprovecha las debilidades de la condición humana, no las técnicas",
            "Kevin Mitnick afirma que la ingeniería social se apoya en que todos queremos ayudar",
            "La formación del personal es la principal defensa contra la ingeniería social",
        ],
        "La ingeniería social ataca el factor humano; las herramientas técnicas (firewalls, IDS) no pueden prevenirla.",
    ),
    Pregunta(
        "Trampa",
        "Un ataque de tipo 'Man in the Middle' es susceptible cuando el sistema de comunicación:",
        "No tiene un mecanismo fuerte de autenticación (como criptografía de clave pública)",
        [
            "Usa cifrado simétrico con claves de más de 256 bits",
            "Implementa el protocolo HTTPS con certificados digitales válidos",
            "Usa autenticación de dos factores con tarjeta criptográfica",
        ],
        "El Man in the Middle requiere que el sistema no tenga autenticación fuerte. Los certificados digitales y la criptografía asimétrica lo previenen.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la vulnerabilidad es FALSA?",
        "Una vulnerabilidad y un simple fallo informático son exactamente lo mismo",
        [
            "Una vulnerabilidad puede ser explotada activamente para comprometer dimensiones de la seguridad",
            "Los virus de día cero explotan vulnerabilidades desconocidas por el fabricante",
            "Los parches, hotfixes y actualizaciones sirven para corregir vulnerabilidades conocidas",
        ],
        "Un fallo informático afecta a la disponibilidad; una vulnerabilidad, además, puede ser explotada para comprometer confidencialidad, integridad, etc.",
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    Pregunta(
        "Efectos de un ataque",
        "Algunos de los efectos más habituales de un ataque son:",
        "Todas las respuestas son correctas",
        [
            "Destrucción de la información",
            "Pérdida de disponibilidad de los servicios",
            "Daños de la propiedad",
        ],
        "Los efectos de un ataque incluyen destrucción de información, pérdida de disponibilidad, daños a la propiedad, y más.",
    ),
    Pregunta(
        "XSS y cookies",
        "¿Qué es una COOKIE?",
        "Un fragmento de información que se almacena en el disco duro del visitante de una página web, a petición del servidor que aloja la página web",
        [
            "Un fragmento de código publicitario que se descarga de algunas páginas web",
            "Un fragmento de código malicioso que se descarga de algunas páginas web",
            "Una página web almacenada en la caché del navegador",
        ],
        "Las cookies son pequeños archivos que los servidores web almacenan en el disco duro del visitante para mantener información de sesión y preferencias.",
    ),
    Pregunta(
        "Tipos de amenazas",
        "¿Qué se considera el activo más importante de las organizaciones?",
        "La información",
        [
            "Sus beneficios",
            "Su seguridad",
            "Sus empleados",
        ],
        "La información es el activo más importante de las organizaciones en la sociedad de la información.",
    ),
    Pregunta(
        "Perfiles de atacantes",
        "La persona que compromete la seguridad de un sistema informático haciendo uso de sus conocimientos técnicos, pero sin la intención de cometer daños, se llama:",
        "hacker",
        [
            "cracker",
            "lacker",
            "tracker",
        ],
        "El hacker actúa por curiosidad o reto personal sin intención de dañar; el cracker actúa con mala fe.",
    ),
    Pregunta(
        "Ataques elaborados",
        "Un ataque de denegación de servicio distribuido se caracteriza porque:",
        "se emplea a un conjunto de máquinas para saturar al sistema víctima",
        [
            "el intruso deniega el servicio distribuyendo contraseñas por la Red",
            "se distribuye el trabajo entre varios hackers",
            "todas las anteriores son ciertas",
        ],
        "El DDoS usa múltiples máquinas (botnet) para saturar el sistema víctima con peticiones simultáneas.",
    ),
    Pregunta(
        "Malware - propagación",
        "Una diferencia entre un gusano y un virus es que",
        "el gusano se propaga automáticamente, mientras que el virus necesita intervención humana",
        [
            "el virus es un software malicioso y el gusano no lo es",
            "son términos sinónimos, se refieren al mismo tipo de software",
            "el gusano puede ser un troyano y el virus no",
        ],
        "El gusano se autopropaga explotando vulnerabilidades de red; el virus requiere que el usuario ejecute un archivo infectado.",
    ),
    Pregunta(
        "Web hacking",
        "La intoxicación del DNS a fin de dirigir un equipo a una web maliciosa se denomina",
        "pharming",
        [
            "spoofing",
            "phising",
            "rootkit",
        ],
        "El pharming envenena el DNS para redirigir a los usuarios a webs maliciosas aunque escriban la URL correcta.",
    ),
    Pregunta(
        "Web hacking",
        "¿Cómo se evita la inyección de SQL?",
        "Filtrando todas las entradas a una aplicación web",
        [
            "Filtrando las URLs de salida de una aplicación web",
            "Filtrando los correos electrónicos para evitar URLs maliciosas",
            "Utilizando una buena suite antivirus",
        ],
        "La inyección SQL se evita filtrando y validando todas las entradas de usuario en la aplicación web.",
    ),
    Pregunta(
        "Malware - tipos",
        "¿A qué se conoce como ROOTKIT?",
        "A un software malicioso capaz de sustituir determinados componentes de un Sistema Operativo",
        [
            "A un tipo de virus",
            "A un gusano",
            "A un troyano",
        ],
        "El rootkit sustituye componentes del SO para ocultar su presencia y la de otros malwares.",
    ),
    Pregunta(
        "Malware - propagación",
        "¿De qué manera puede llegar un TROYANO hasta un sistema informático?",
        "Todas las respuestas son correctas",
        [
            "Descargado automáticamente por otro programa malicioso",
            "Como adjunto en un mensaje de correo electrónico",
            "Descargado al visitar una página web maliciosa",
        ],
        "Los troyanos pueden llegar por múltiples vías: descarga automática, adjuntos de correo o páginas web maliciosas.",
    ),
    Pregunta(
        "Amenazas - DNS",
        "¿Cuál de estas amenazas tiene relación directa con el servicio de nombres DNS?",
        "Pharming",
        [
            "Cross-site Scripting",
            "DDOS",
            "Phishing",
        ],
        "El pharming consiste en envenenar/intoxicar la caché DNS para redirigir las conexiones a servidores maliciosos (UA3/Tema 3).",
    ),
    Pregunta(
        "Amenazas - Rootkits",
        "Las luces de la tarjeta de red de mi ordenador de sobremesa muestran gran actividad, siendo yo el único usuario conectado en casa, pero el monitor del sistema indica que el tráfico de red es mínimo ¿Cuál es la causa más probable?",
        "Mi ordenador tiene un rootkit",
        [
            "Mi ordenador tiene un criptovirus",
            "Mi ordenador tiene un bot de spam",
            "Mi ordenador tiene un bot de minado de criptomonedas",
        ],
        "Un rootkit puede ocultar su propia actividad de red modificando las herramientas de monitorización del sistema operativo (que reportarán tráfico mínimo), mientras que la tarjeta física sigue transmitiendo a alta velocidad.",
    ),
]
