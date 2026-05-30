#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 4: Mecanismos de Defensa
# Basado en: Apuntes de Seguridad de la Información 2022, UA 4
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

    # ── 1. Defensa en entorno doméstico ──────────────────────────────────────

    Pregunta(
        "Protección doméstica",
        "¿Cuál de estas medidas de seguridad en un router doméstico tiene nivel 'básico' según la tabla de la UA4?",
        "Cambiar la contraseña de acceso e impedir su configuración desde Internet",
        [
            "Emplear protocolos de autenticación 802.1x",
            "Ocultar el identificador de la red (SSID)",
            "Utilizar lista de control de acceso (ACL) por MAC",
        ],
        "Cambiar la contraseña del router y bloquear la configuración remota son medidas de nivel básico obligatorias.",
    ),
    Pregunta(
        "Protección doméstica",
        "¿Por qué es especialmente peligrosa la opción 'DMZ' o 'default workstation' en un router doméstico?",
        "Hace que el router entregue TODAS las conexiones entrantes a esa máquina, eliminando la protección del filtrado",
        [
            "Porque desactiva el protocolo WPA y deja la red Wifi abierta",
            "Porque permite que cualquier equipo de la red acceda a la configuración del router",
            "Porque aumenta el consumo de ancho de banda disponible para los demás equipos",
        ],
        "La DMZ doméstica expone una máquina interna a todo el tráfico entrante de Internet sin filtrado.",
    ),
    Pregunta(
        "Protección doméstica",
        "Las tres rangos de direcciones IP privadas válidos para una red doméstica son:",
        "192.168.X.X, 172.26.X.X y 10.X.X.X",
        [
            "192.168.X.X, 172.16.X.X y 127.0.0.X",
            "10.X.X.X, 172.16.X.X y 192.168.X.X",
            "169.254.X.X, 192.168.X.X y 10.X.X.X",
        ],
        "Los tres rangos de IPs privadas son: 192.168.X.X, 172.26.X.X (o 172.16-31.X.X) y 10.X.X.X. Cualquier otro rango es público.",
    ),
    Pregunta(
        "Protección doméstica",
        "El protocolo WPS (Wifi Protected Setup) debe estar siempre desactivado porque:",
        "Tiene problemas de seguridad que permiten que cualquier cliente con WPS activo obtenga la contraseña de la Wifi",
        [
            "Reduce significativamente la velocidad de transferencia de la red Wifi",
            "Es incompatible con los protocolos WPA2 y WPA3",
            "Solo funciona con routers de fabricantes específicos",
        ],
        "El WPS tiene vulnerabilidades conocidas que permiten obtener la contraseña Wifi. Debe desactivarse siempre.",
    ),
    Pregunta(
        "Protección doméstica",
        "Desactivar el DHCP en el router y usar IPs estáticas como medida de seguridad Wifi:",
        "Obliga a cualquier usuario malicioso a conocer el rango IP, máscara y gateway para poder conectarse",
        [
            "Impide absolutamente que usuarios no autorizados accedan a la red",
            "Elimina la necesidad de usar contraseña en la red Wifi",
            "Es una medida de nivel básico según la tabla de configuración de la UA4",
        ],
        "Sin DHCP, el atacante debe conocer y configurar manualmente los parámetros IP correctos para acceder a la red.",
    ),
    Pregunta(
        "Protección doméstica",
        "¿Por qué es peligroso usar software sin licencia o sistemas operativos obsoletos como Windows XP?",
        "Porque no se tiene acceso a actualizaciones de seguridad que corrijan vulnerabilidades conocidas",
        [
            "Porque el software sin licencia incluye malware por defecto en su instalación",
            "Porque los antivirus no son compatibles con software sin licencia",
            "Porque el sistema operativo obsoleto usa cifrado más débil para las contraseñas",
        ],
        "Sin actualizaciones de seguridad, las vulnerabilidades permanecen sin corregir y los exploits pueden explotarse indefinidamente.",
    ),
    Pregunta(
        "Copias de seguridad",
        "¿Por qué es imprescindible que al menos una copia de seguridad esté normalmente offline?",
        "Porque si el dispositivo de copia está permanentemente accesible, el ransomware cifrará también las copias",
        [
            "Porque las copias online tienen menor capacidad de almacenamiento",
            "Porque las copias en la nube no están cifradas y son accesibles por terceros",
            "Porque las copias online no permiten restaurar versiones anteriores de los archivos",
        ],
        "El ransomware cifra todos los sistemas accesibles, incluidas las copias de seguridad conectadas. La copia offline es la única garantía.",
    ),

    # ── 1.3. Antivirus y suites de seguridad ─────────────────────────────────

    Pregunta(
        "Antivirus",
        "¿Cuál es la diferencia entre detección de malware 'basada en firmas' y 'heurística'?",
        "La basada en firmas busca patrones conocidos de malware; la heurística identifica comportamientos sospechosos",
        [
            "La basada en firmas es más moderna y efectiva que la heurística",
            "La heurística solo detecta virus y la basada en firmas detecta todos los tipos de malware",
            "La basada en firmas funciona en tiempo real y la heurística solo en análisis programados",
        ],
        "Basada en firmas = patrones de malware conocidos. Heurística = detección por comportamiento. Los sistemas modernos combinan ambas.",
    ),
    Pregunta(
        "Antivirus",
        "El límite de la detección basada en firmas es que:",
        "Los nuevos virus que no estén en la base de datos de firmas no serán detectados",
        [
            "Solo puede analizar archivos ejecutables, no documentos de Office o PDF",
            "Requiere que el sistema esté conectado a Internet en todo momento",
            "Genera demasiados falsos positivos que bloquean el funcionamiento normal del equipo",
        ],
        "Como en medicina, la vacuna se obtiene después de conocer el virus. Los nuevos malwares no están en las firmas hasta ser analizados.",
    ),
    Pregunta(
        "Antivirus",
        "Un firewall de software tiene una debilidad evidente frente a uno de hardware:",
        "Si el sistema está comprometido, el firewall de software también lo estará",
        [
            "El firewall de software no puede filtrar el tráfico saliente, solo el entrante",
            "El firewall de software no puede detectar intrusiones en tiempo real",
            "El firewall de software no es compatible con conexiones Wifi",
        ],
        "Un firewall de software corre sobre el mismo sistema que protege. Si el sistema cae, el firewall también.",
    ),

    # ── 1.4. Dispositivos móviles ────────────────────────────────────────────

    Pregunta(
        "Dispositivos móviles",
        "Para proteger la información de un smartphone ante robo o pérdida, la mejor medida es:",
        "Cifrar el sistema de almacenamiento del dispositivo además de usar contraseñas o PINes seguros",
        [
            "Instalar un antivirus específico para móviles",
            "Desactivar el Bluetooth cuando no se use",
            "Usar solo redes Wifi conocidas y evitar las públicas",
        ],
        "El cifrado del almacenamiento protege los datos aunque el dispositivo caiga en manos ajenas.",
    ),
    Pregunta(
        "Dispositivos móviles",
        "¿Por qué es peligroso instalar Apps de fuentes no oficiales en un smartphone?",
        "Porque pueden contener malware (troyanos, rootkits, adware) no controlado por los mercados oficiales",
        [
            "Porque consumen más batería que las Apps de las tiendas oficiales",
            "Porque son incompatibles con las actualizaciones del sistema operativo",
            "Porque no pueden actualizarse automáticamente y quedan obsoletas rápidamente",
        ],
        "Las fuentes no oficiales no tienen los controles de seguridad de App Store o Play Store, siendo fuentes habituales de malware.",
    ),
    Pregunta(
        "Dispositivos móviles",
        "Revisar los permisos de las Apps instaladas es importante porque:",
        "Muchas Apps solicitan permisos innecesarios para capturar información del usuario (micrófono, cámara, GPS, contactos)",
        [
            "Los permisos innecesarios hacen que las Apps funcionen más lentamente",
            "Sin revisar los permisos no se puede actualizar el sistema operativo",
            "El exceso de permisos consume más batería del dispositivo",
        ],
        "Una App de linterna no necesita acceso a los contactos. Los permisos excesivos permiten capturar información sensible.",
    ),
    Pregunta(
        "Dispositivos móviles",
        "Con respecto al protocolo Bluetooth en dispositivos móviles, una recomendación básica es:",
        "Mantenerlo desactivado cuando no sea imprescindible y ocultar la identidad del dispositivo",
        [
            "Usar siempre el código por defecto para emparejar dispositivos ya que es el más seguro",
            "Activarlo permanentemente para facilitar la conexión con accesorios",
            "Cambiar el código de emparejamiento solo una vez al año",
        ],
        "El Bluetooth tiene problemas de seguridad conocidos. Se debe desactivar cuando no se use y nunca usar códigos por defecto.",
    ),

    # ── 2. Seguridad en correo electrónico ───────────────────────────────────

    Pregunta(
        "Correo electrónico",
        "¿Cuántas cuentas de correo recomienda como mínimo usar una guía básica de seguridad?",
        "Tres: corporativa, personal y una de uso desechable para registros y suscripciones",
        [
            "Una: concentrar toda la actividad en una sola cuenta para mayor control",
            "Dos: una profesional y una personal",
            "Cinco o más, una por cada tipo de actividad diferente",
        ],
        "Se recomiendan al menos 3 cuentas: corporativa, personal y una 'basura' para registros con datos inexactos.",
    ),
    Pregunta(
        "Correo electrónico",
        "Respecto a los correos spam recibidos, la recomendación correcta es:",
        "Eliminarlos sin leerlos y jamás abrir sus ficheros adjuntos ni responder a ellos",
        [
            "Responder al remitente para solicitar que nos elimine de su lista de envío",
            "Abrirlos solo para confirmar que son spam antes de eliminarlos",
            "Reenviarlos a nuestros contactos para alertarles del peligro",
        ],
        "Responder al spam confirma que la cuenta está activa y aumenta la cantidad de spam recibido. Hay que eliminarlos sin leerlos.",
    ),
    Pregunta(
        "Correo electrónico",
        "¿Por qué no se debe asumir que un mensaje es legítimo aunque el nombre del remitente sea conocido?",
        "Porque los spammers falsean las direcciones de origen, escogiéndolas de la misma lista de víctimas",
        [
            "Porque los amigos también pueden enviar spam sin saberlo si están infectados",
            "Porque el servidor de correo puede corromper la dirección del remitente",
            "Porque es imposible verificar la identidad del remitente sin certificado digital",
        ],
        "El spoofing de correo permite falsear el campo 'De:'. Incluso podemos recibir spam de nuestra propia dirección.",
    ),
    Pregunta(
        "Correo electrónico",
        "El uso de PGP o S/MIME en el correo electrónico proporciona:",
        "Autenticación, integridad y no repudio (firma digital) y confidencialidad (cifrado)",
        [
            "Solo confidencialidad mediante cifrado del mensaje",
            "Únicamente filtrado de spam y malware en los adjuntos",
            "Verificación de que el servidor de correo es legítimo",
        ],
        "PGP/S/MIME aplican firma digital (autenticación, integridad, no repudio) y cifrado (confidencialidad) al correo.",
    ),
    Pregunta(
        "Correo electrónico",
        "Para garantizar la INTEGRIDAD (no el secreto) de un mensaje de correo electrónico es necesario:",
        "Firmarlo digitalmente",
        [
            "Cifrarlo con la clave pública del destinatario",
            "Cifrarlo y firmarlo simultáneamente",
            "Enviarlo a través de un servidor de correo con conexión TLS",
        ],
        "La firma digital garantiza integridad (y autenticación). El cifrado garantiza confidencialidad. Son funciones distintas.",
    ),

    # ── 3. Navegación segura ─────────────────────────────────────────────────

    Pregunta(
        "Navegación segura",
        "La recomendación más importante relativa a la navegación web según la UA4 es:",
        "Mantener el navegador actualizado con los últimos parches de seguridad",
        [
            "Usar siempre conexiones Wifi privadas y nunca públicas",
            "Desactivar JavaScript en todos los sitios web",
            "Usar solo navegadores de código abierto",
        ],
        "El navegador es la principal vía de entrada de amenazas externas y la pieza más importante del equipo.",
    ),
    Pregunta(
        "Navegación segura",
        "¿Por qué se debe evitar 'recordar contraseñas' en el navegador en equipos compartidos?",
        "Porque las contraseñas se almacenan de forma poco segura en el navegador y el malware puede recopilarlas y enviarlas",
        [
            "Porque los navegadores modernos no cifran las contraseñas almacenadas",
            "Porque al guardar contraseñas, el navegador bloquea las actualizaciones automáticas",
            "Porque otras cuentas de usuario del mismo equipo pueden acceder a ellas fácilmente",
        ],
        "Las contraseñas guardadas en el navegador son accesibles para malware tipo PWStealers. Nunca en equipos compartidos.",
    ),
    Pregunta(
        "Navegación segura",
        "No se debe tener una red social en una pestaña y la cuenta bancaria en otra porque:",
        "Un enlace tóxico en la pestaña de la red social puede capturar credenciales o la sesión de la pestaña bancaria",
        [
            "Los navegadores modernos comparten cookies entre todas las pestañas abiertas automáticamente",
            "El ancho de banda se divide entre pestañas, haciendo las operaciones bancarias inseguras",
            "La red social puede leer los datos bancarios a través del DOM compartido",
        ],
        "La separación de seguridad entre pestañas del mismo navegador es relativa. Código tóxico en una pestaña puede afectar a otras.",
    ),
    Pregunta(
        "Navegación segura",
        "Antes de introducir datos sensibles en una web, debemos verificar que:",
        "La URL empieza por 'https:' y el servidor tiene un certificado digital válido",
        [
            "La dirección IP del servidor está en nuestra lista de favoritos",
            "El diseño gráfico de la página es exactamente igual al original",
            "El tiempo de carga de la página es inferior a 3 segundos",
        ],
        "HTTPS + certificado digital válido garantizan que el servidor es quien dice ser y la comunicación está cifrada.",
    ),
    Pregunta(
        "Navegación segura",
        "La autenticación de dos factores en operaciones bancarias online es considerada:",
        "Imprescindible cuando se pueden realizar transferencias de fondos",
        [
            "Opcional en todos los casos, a criterio del usuario",
            "Solo necesaria en dispositivos móviles, no en ordenadores de sobremesa",
            "Suficiente con el certificado FNMT sin necesidad de segundo factor",
        ],
        "El 2FA es imprescindible para transferencias de fondos y muy recomendable en cualquier otro caso.",
    ),

    # ── 3.2. Privacidad en redes sociales ────────────────────────────────────

    Pregunta(
        "Redes sociales",
        "Al crear una cuenta en una red social, ¿cuál debe ser el primer paso después de leer la política de privacidad?",
        "Configurar el nivel de privacidad, bloqueando inicialmente todos los permisos",
        [
            "Agregar el máximo número posible de contactos para ampliar la red",
            "Publicar información básica del perfil para que los conocidos puedan encontrarnos",
            "Instalar la App oficial en el smartphone para recibir notificaciones",
        ],
        "Comenzar con máxima privacidad y abrir gradualmente es mejor que empezar con todo público y restringir después.",
    ),
    Pregunta(
        "Redes sociales",
        "¿Por qué en Facebook es especialmente importante no compartir información con 'amigos de los amigos'?",
        "Porque implica compartir información con personas desconocidas que solo tienen un grado de separación con nosotros",
        [
            "Porque Facebook cobra por el servicio premium que incluye esta opción",
            "Porque los amigos de los amigos pueden acceder a nuestros datos bancarios",
            "Porque los algoritmos de Facebook usan esa información para publicidad dirigida",
        ],
        "Los 'amigos de amigos' son desconocidos. Compartir con ellos expone la información a personas no confiables.",
    ),

    # ── 4. Defensa perimetral y sistemas de detección ───────────────────────

    Pregunta(
        "Defensa perimetral",
        "Un firewall perimetral actúa como:",
        "Frontera entre la red interna de la organización e Internet, controlando el tráfico permitido en ambas direcciones",
        [
            "Un sistema que cifra todas las comunicaciones entre la red interna e Internet",
            "Un sistema que detecta y elimina malware en los equipos de la red interna",
            "Un servidor que gestiona la autenticación de todos los usuarios de la organización",
        ],
        "El firewall perimetral controla qué tráfico puede entrar y salir de la red, basándose en reglas definidas.",
    ),
    Pregunta(
        "Defensa perimetral",
        "Una DMZ (Zona Desmilitarizada) en una organización es:",
        "Una red intermedia entre Internet y la red interna donde se ubican los servidores públicos de la organización",
        [
            "Una zona de la red donde no se aplican reglas de firewall para mayor velocidad",
            "Un rango de direcciones IP reservado para los administradores del sistema",
            "Un protocolo de cifrado de comunicaciones entre redes corporativas",
        ],
        "La DMZ aloja servidores web, correo, etc. accesibles desde Internet, separados de la red interna sensible.",
    ),
    Pregunta(
        "Defensa perimetral",
        "Un IDS (Sistema de Detección de Intrusiones) se diferencia de un IPS (Sistema de Prevención) en que:",
        "El IDS detecta y alerta sobre amenazas; el IPS además puede bloquearlas activamente",
        [
            "El IDS trabaja en la red y el IPS solo en los equipos finales",
            "El IDS es más moderno y eficaz que el IPS",
            "El IDS es un producto de software y el IPS un dispositivo de hardware",
        ],
        "IDS = detección y alerta pasiva. IPS = detección activa con capacidad de bloqueo automático.",
    ),
    Pregunta(
        "Defensa perimetral",
        "Un SIEM (Security Information and Event Management) tiene como función principal:",
        "La correlación de eventos de seguridad procedentes de múltiples fuentes para detectar amenazas complejas",
        [
            "Cifrar las comunicaciones entre todos los dispositivos de la red corporativa",
            "Gestionar las contraseñas de todos los usuarios de la organización",
            "Proporcionar conexiones VPN seguras para el trabajo remoto",
        ],
        "El SIEM agrega y correlaciona logs/eventos de múltiples sistemas para detectar patrones de ataque complejos.",
    ),
    Pregunta(
        "Defensa perimetral",
        "Una VPN (Red Privada Virtual) es:",
        "Un sistema de interconexión o de acceso a redes privadas a través de Internet mediante comunicaciones cifradas",
        [
            "Un mecanismo de virtualización de redes físicas",
            "Una nueva tecnología de comunicaciones inalámbricas de quinta generación",
            "Un sistema de comunicaciones virtuales sin cifrado",
        ],
        "La VPN crea un túnel cifrado a través de Internet, permitiendo acceso seguro a redes privadas remotas.",
    ),

    # ── 5. Organismos de ciberseguridad ──────────────────────────────────────

    Pregunta(
        "Organismos",
        "El CCN-CERT es el CSIRT de referencia para:",
        "La Administración Pública, sistemas clasificados, infraestructuras críticas y coordinación de todos los CSIRTs nacionales",
        [
            "Solo los ciudadanos y empresas privadas del sector tecnológico",
            "Exclusivamente las Fuerzas Armadas y sistemas de Defensa",
            "Únicamente las pequeñas y medianas empresas",
        ],
        "El CCN-CERT atiende a la Administración, sistemas clasificados, infraestructuras críticas y coordina los demás CSIRTs.",
    ),
    Pregunta(
        "Organismos",
        "El INCIBE-CERT es el CSIRT de referencia para:",
        "Ciudadanos, entidades privadas y la red académica",
        [
            "Las Fuerzas Armadas y el Ministerio de Defensa",
            "La Administración General del Estado y organismos públicos",
            "Las infraestructuras críticas nacionales",
        ],
        "INCIBE-CERT atiende a ciudadanos, empresas privadas y la red académica; CCN-CERT atiende a la Administración.",
    ),
    Pregunta(
        "Organismos",
        "El primer CERT creado en España fue:",
        "IRIS-CERT, adscrito al Ministerio de Industria, para incidentes en la red académica RedIRIS",
        [
            "CCN-CERT, adscrito al Centro Criptológico Nacional",
            "INCIBE-CERT, para ciudadanos y empresas privadas",
            "ESP-DEF-CERT, del Ministerio de Defensa",
        ],
        "IRIS-CERT fue el primer CERT en España, gestionando la red académica RedIRIS de universidades y centros de investigación.",
    ),
    Pregunta(
        "Organismos",
        "El CCN (Centro Criptológico Nacional) está adscrito a:",
        "El Centro Nacional de Inteligencia (CNI)",
        [
            "El Ministerio de Industria, Turismo y Comercio",
            "La Agencia Española de Protección de Datos (AEPD)",
            "El Ministerio de Defensa",
        ],
        "El CCN fue creado en 2004 mediante el Real Decreto 421/2004 y está adscrito al CNI.",
    ),
    Pregunta(
        "Organismos",
        "La OSI (Oficina de Seguridad del Internauta) es una dependencia de:",
        "INCIBE (Instituto Nacional de Ciberseguridad)",
        [
            "CCN (Centro Criptológico Nacional)",
            "AEPD (Agencia Española de Protección de Datos)",
            "CNPIC (Centro Nacional de Protección de Infraestructuras Críticas)",
        ],
        "La OSI depende de INCIBE y su misión es reforzar la confianza del ciudadano en el ámbito digital.",
    ),
    Pregunta(
        "Organismos",
        "El CNPIC tiene como misión principal:",
        "El impulso, coordinación y supervisión de la protección de infraestructuras críticas españolas (12 sectores estratégicos)",
        [
            "La gestión de incidentes de seguridad para ciudadanos y empresas privadas",
            "La elaboración y difusión de guías y recomendaciones de seguridad para la Administración",
            "La certificación de productos y sistemas criptográficos",
        ],
        "El CNPIC protege los 12 sectores estratégicos: Administración, Alimentación, Nuclear, Química, Salud, Financiero, TIC, Transporte, Agua, Energía, Espacio e Investigación.",
    ),
    Pregunta(
        "Organismos",
        "La AEPD (Agencia Española de Protección de Datos) tiene como objetivo principal:",
        "Garantizar el cumplimiento de la legislación sobre protección de datos de carácter personal",
        [
            "Gestionar incidentes de seguridad en infraestructuras críticas",
            "Coordinar los CSIRTs nacionales ante ciberataques",
            "Certificar los productos criptográficos usados en la Administración",
        ],
        "La AEPD fue creada en 1993 y actúa con independencia de las Administraciones Públicas para proteger los datos personales.",
    ),
    Pregunta(
        "Organismos",
        "FIRST es el organismo internacional que:",
        "Relaciona los CERTs reconocidos de cada país mediante un proceso de adscripción con auditoría",
        [
            "Coordina exclusivamente los CERTs europeos",
            "Es el centro de respuesta ante incidentes de la OTAN",
            "Es el foro europeo de protección de infraestructuras críticas",
        ],
        "FIRST (Forum of Incident Response and Security Teams) es el foro global de CERTs; TF-CSIRT es el europeo.",
    ),
    Pregunta(
        "Organismos",
        "El SOC (Security Operation Center) es:",
        "Un centro que monitoriza continuamente los sistemas de una organización para detectar y responder ante amenazas de seguridad",
        [
            "Un organismo gubernamental de coordinación de CERTs nacionales",
            "Un sistema de detección de intrusiones basado en firmas",
            "Una metodología de análisis de riesgos equivalente a MAGERIT",
        ],
        "El SOC proporciona monitorización 24/7 de la seguridad de los sistemas. El CCN tiene el SOC AGE para la Administración.",
    ),

    # ── Trampa ───────────────────────────────────────────────────────────────

    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la configuración Wifi es INCORRECTA?",
        "Ocultar el SSID hace la red Wifi completamente segura e inaccesible para atacantes",
        [
            "WEP es un protocolo totalmente inseguro hoy en día",
            "WPS debe estar siempre desactivado por sus problemas de seguridad",
            "La contraseña Wifi debe ser diferente a la proporcionada por el instalador",
        ],
        "Ocultar el SSID dificulta la detección, pero no impide un ataque. Un hacker buscará primero las redes visibles, no las ocultas.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el firewall es FALSA?",
        "Un firewall correctamente configurado garantiza la seguridad completa de la red interna",
        [
            "Un firewall de hardware es más robusto que uno de software ante compromisos del sistema",
            "Un firewall controla el tráfico entrante y saliente según reglas predefinidas",
            "La DMZ perimetral aloja servidores accesibles desde Internet, separados de la red interna",
        ],
        "Ningún firewall garantiza seguridad completa. El factor humano, los ataques internos y las vulnerabilidades 0-day pueden sortearlos.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la VPN es CORRECTA?",
        "Una VPN crea un túnel cifrado a través de Internet para acceder de forma segura a redes privadas remotas",
        [
            "Una VPN es una nueva tecnología de comunicaciones inalámbricas",
            "Una VPN garantiza el anonimato completo en Internet",
            "Una VPN solo puede usarse entre dos dispositivos del mismo fabricante",
        ],
        "La VPN crea túneles cifrados. No garantiza anonimato completo ni se limita a fabricantes específicos.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estos rangos de direcciones IP pertenece a una red PÚBLICA (no privada)?",
        "152.126.X.X",
        [
            "192.168.1.1",
            "10.0.0.1",
            "172.26.0.1",
        ],
        "Los rangos privados son: 10.X.X.X, 172.16-31.X.X y 192.168.X.X. Cualquier otro rango (como 152.126.X.X) es público.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre los organismos de ciberseguridad es FALSA?",
        "El INCIBE-CERT es el CSIRT de referencia para la Administración Pública General del Estado",
        [
            "El CCN-CERT coordina todos los CSIRTs nacionales",
            "La AEPD actúa con independencia de las Administraciones Públicas",
            "El CNPIC supervisa la protección de infraestructuras críticas",
        ],
        "El CCN-CERT es el CSIRT de referencia para la Administración Pública. INCIBE-CERT atiende a ciudadanos y empresas privadas.",
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    Pregunta(
        "Organismos",
        "¿Cómo se denomina a los centros con la capacidad técnica y la estructura más adecuada para la lucha contra las ciberamenazas?",
        "Centro de Respuesta ante Incidentes (CERT)",
        [
            "Centro de Respuesta al Usuario (CRU)",
            "Centro de Atención a Usuarios (CAU)",
            "Centro de Atención a la Seguridad (CAS)",
        ],
        "Los CERT (Computer Emergency Response Team) son los centros especializados en respuesta a ciberamenazas.",
    ),
    Pregunta(
        "Copias de seguridad",
        "¿Qué política de la organización se ve especialmente afectada por la creciente amenaza de los criptovirus?",
        "Política de copias de seguridad",
        [
            "Política de uso de la nube",
            "Política de actualizaciones",
            "Política de cuentas de usuario y contraseñas",
        ],
        "El ransomware/criptovirus cifra los datos, haciendo crítica la política de copias de seguridad offline para recuperarse.",
    ),
    Pregunta(
        "Defensa perimetral",
        "¿Cómo se evita la inyección de SQL?",
        "En el código de la aplicación web, filtrando las URL maliciosas en los datos de entrada",
        [
            "En el firewall de la organización, filtrando las URL maliciosas en los datos de entrada",
            "En el código de la aplicación web, filtrando todo el tráfico de entrada",
            "En el firewall de la organización, filtrando todo el tráfico de entrada",
        ],
        "La inyección SQL se previene en el código de la aplicación, filtrando y sanitizando los datos de entrada.",
    ),
    Pregunta(
        "Protección doméstica",
        "Una medida básica de seguridad en el uso de redes WIFI es:",
        "Desactivar el protocolo WPS",
        [
            "Activar la lista de control de acceso (ACL) por MAC",
            "Ocultar el SSID",
            "Utilizar protocolos de cifrado seguros, como el WEP",
        ],
        "WPS tiene vulnerabilidades conocidas que permiten obtener la contraseña Wifi. Debe desactivarse siempre.",
    ),
    Pregunta(
        "Protección doméstica",
        "la letra A en las siglas ADSL representa en castellano la palabra",
        "Asíncrona",
        [
            "Automatica",
            "Avanzada",
            "Autónoma",
        ],
        "ADSL = Asymmetric Digital Subscriber Line = Línea de Abonado Digital Asíncrona.",
    ),
    Pregunta(
        "Protección doméstica",
        "Para cifrar las comunicaciones en una red Wifi, se puede usar el protocolo",
        "WPA",
        [
            "WPE",
            "WAP",
            "ninguno de los anteriores",
        ],
        "WPA (Wi-Fi Protected Access) es el protocolo de cifrado para redes Wifi. WEP es inseguro y WPE no existe.",
    ),
    Pregunta(
        "Protección doméstica",
        "Una buena práctica en la configuración de un router ADSL doméstico es:",
        "ninguna de las anteriores",
        [
            "permitir el acceso remoto a la pantalla de configuración",
            "desactivar la utilización de comunicaciones cifradas",
            "entregar todas las conexiones entrantes a una 'default workstation' o DMZ",
        ],
        "Ninguna de esas opciones es buena práctica: el acceso remoto debe desactivarse, el cifrado activarse, y la DMZ no usarse en doméstico.",
    ),
    Pregunta(
        "Correo electrónico",
        "Para garantizar la integridad de un mensaje de correo electrónico necesitaremos",
        "firmarlo",
        [
            "cifrarlo",
            "cifrarlo y firmarlo",
            "ninguna de las anteriores",
        ],
        "La firma digital garantiza la integridad (y autenticación). El cifrado garantiza confidencialidad. Son funciones distintas.",
    ),
    Pregunta(
        "Defensa perimetral",
        "una red privada virtual (VPN)",
        "es un sistema de interconexión o de acceso a redes privadas",
        [
            "es un mecanismo de virtualización de redes",
            "es un sistema de comunicaciones virtuales",
            "ninguna de las anteriores",
        ],
        "La VPN es un sistema de interconexión o acceso a redes privadas a través de Internet mediante túneles cifrados.",
    ),
    Pregunta(
        "Protección doméstica",
        "¿Qué protocolo se considera más seguro en redes WIFI?",
        "WPA2",
        [
            "WEP",
            "WEP2",
            "WPA",
        ],
        "WPA2 es más seguro que WPA y mucho más que WEP. WPA3 es más reciente pero WPA2 era la respuesta correcta en el temario.",
    ),
    Pregunta(
        "Protección doméstica",
        "¿Cuál de estas direcciones IP es pública?",
        "11.1.1.1",
        [
            "10.1.1.1",
            "172.26.0.1",
            "192.168.1.1",
        ],
        "Los rangos privados son: 10.X.X.X, 172.16-31.X.X y 192.168.X.X. La dirección 11.1.1.1 es pública.",
    ),
    Pregunta(
        "Defensa perimetral",
        "¿A qué se denomina DMZ?",
        "A la parte de la red interna de una organización en la que se colocan los servidores que ofrecen servicios al exterior de la empresa",
        [
            "A la intranet de una organización",
            "A la parte de la red interna de una organización donde habitualmente se conectan los PCs de usuario",
            "A la parte de Internet donde se colocan los servidores web",
        ],
        "La DMZ es una red intermedia donde se ubican los servidores accesibles desde Internet, separados de la red interna.",
    ),
]
