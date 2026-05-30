#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 1: Seguridad de la Información — Visión Integral
# Basado en: Apuntes de Seguridad de la Información 2022, UA 1
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

    # ── 1. Sociedad de la Información y factores de cambio ───────────────────

    Pregunta(
        "Sociedad de la información",
        "¿Cuáles son los dos impulsores del cambio tecnológico mencionados en la UA1?",
        "Las tecnologías de bajo coste y los estándares",
        [
            "El Big Data y la inteligencia artificial",
            "Internet y las redes sociales",
            "La globalización y la política internacional",
        ],
        "Los dos impulsores son: tecnologías de bajo coste (Ley de Moore) y los estándares (interoperabilidad).",
    ),
    Pregunta(
        "Sociedad de la información",
        "La Ley de Moore establece que aproximadamente cada dos años:",
        "La capacidad de los sistemas electrónicos se duplica a precio constante",
        [
            "El precio de los sistemas electrónicos se duplica",
            "La velocidad de Internet se multiplica por diez",
            "Los estándares de seguridad se renuevan completamente",
        ],
        "La Ley de Moore describe el crecimiento de la capacidad de cómputo a coste constante.",
    ),
    Pregunta(
        "Sociedad de la información",
        "En el ámbito económico y político, las cinco grandes tecnológicas estadounidenses se conocen como:",
        "GAFAM (Google, Amazon, Facebook, Apple y Microsoft)",
        [
            "BATX (Baidu, Alibaba, Tencent y Xiaomi)",
            "IEEE, ANSI, ISO, ITU y NIST",
            "ENISA, CCN, INCIBE, FNMT y AEPD",
        ],
        "GAFAM son las cinco grandes tecnológicas de EEUU; BATX son las cuatro chinas.",
    ),
    Pregunta(
        "Sociedad de la información",
        "¿Qué representa el ciberespacio como dominio de la guerra?",
        "El quinto dominio, después de tierra, mar, aire y espacio",
        [
            "El primer dominio por encima de los demás",
            "Un dominio compartido únicamente con el espacio",
            "Un concepto exclusivamente civil sin uso militar",
        ],
        "El ciberespacio se configura como el quinto dominio de la guerra en la era actual.",
    ),
    Pregunta(
        "Industria 4.0",
        "La cuarta revolución industrial fue acuñada por:",
        "Klaus Schwab, fundador del Foro Económico Mundial",
        [
            "Phil Zimmermann, creador del PGP",
            "Gordon Moore, autor de la Ley de Moore",
            "Bruce Schneier, experto en criptografía",
        ],
        "Klaus Schwab acuñó el término en su libro homónimo sobre la cuarta revolución industrial.",
    ),
    Pregunta(
        "Industria 4.0",
        "La cuarta revolución industrial se caracteriza principalmente por:",
        "Robótica, inteligencia artificial, IoT, blockchain, computación cuántica e impresión 3D",
        [
            "La máquina de vapor y la industria textil",
            "La electricidad y la producción en masa",
            "La microelectrónica de bajo coste y los estándares",
        ],
        "La Industria 4.0 integra tecnologías emergentes como IA, IoT, blockchain y computación cuántica.",
    ),

    # ── 2. Definiciones y conceptos básicos de seguridad ────────────────────

    Pregunta(
        "Definiciones",
        "¿Cómo define MAGERIT la Seguridad de la Información?",
        "La capacidad de las redes o sistemas para resistir accidentes o acciones ilícitas que comprometan la disponibilidad, integridad y confidencialidad",
        [
            "El conjunto de normas para proteger únicamente datos personales",
            "La disciplina que diseña procedimientos para el procesamiento de datos en sistemas informáticos",
            "El software destinado a detectar y eliminar malware en redes corporativas",
        ],
        "MAGERIT define la Seguridad de la Información en términos de disponibilidad, integridad y confidencialidad.",
    ),
    Pregunta(
        "Definiciones",
        "La diferencia principal entre Seguridad Informática y Seguridad en TIs es que la segunda:",
        "Incorpora también la transmisión de datos entre sistemas informáticos",
        [
            "Solo se ocupa de la seguridad física de los equipos",
            "Excluye los dispositivos móviles",
            "Es sinónimo exacto de ciberseguridad",
        ],
        "La Seguridad en TIs añade el aspecto de la transmisión de datos a la Seguridad Informática.",
    ),
    Pregunta(
        "Definiciones",
        "Según el CCN, la ciberseguridad es:",
        "El conjunto de actuaciones orientadas a asegurar las redes y sistemas que constituyen el ciberespacio",
        [
            "La disciplina exclusiva de la seguridad física de datos personales",
            "Un sistema de gestión de contraseñas de usuarios",
            "El análisis de vulnerabilidades de software propietario",
        ],
        "El CCN define ciberseguridad como las actuaciones para asegurar el ciberespacio (redes y sistemas TIC).",
    ),
    Pregunta(
        "Definiciones",
        "La norma ISO 27000 amplía las dimensiones de la seguridad incluyendo además de disponibilidad, integridad y confidencialidad:",
        "No repudio y autenticación",
        [
            "Privacidad y anonimato",
            "Trazabilidad y rendimiento",
            "Cifrado y compresión",
        ],
        "ISO 27000 añade el no repudio y la autenticación a las tres dimensiones clásicas.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "¿Cuál es la característica de seguridad descrita como 'la más importante' en los apuntes?",
        "La disponibilidad",
        [
            "La confidencialidad",
            "La integridad",
            "El no repudio",
        ],
        "El texto indica que la disponibilidad es sin duda la característica más importante.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "La integridad en seguridad de la información se refiere a:",
        "Evitar que la información sea alterada o modificada sin autorización",
        [
            "Garantizar que la información esté disponible cuando se necesita",
            "Asegurar que solo las personas autorizadas accedan a la información",
            "Garantizar que el autor de la información sea quien dice ser",
        ],
        "La integridad protege la fiabilidad de la información, evitando alteraciones no autorizadas.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "La confidencialidad consiste en que la información:",
        "Solo sea accesible por personas, programas o sistemas autorizados",
        [
            "Esté siempre disponible sin restricciones",
            "No pueda ser alterada por terceros",
            "Esté firmada digitalmente por su autor",
        ],
        "La confidencialidad impide accesos no autorizados, ya sean casuales o intencionados.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "El no repudio de origen garantiza que:",
        "El receptor tenga pruebas suficientes para que el emisor no pueda negar el envío",
        [
            "El emisor tenga pruebas de que el mensaje ha sido entregado",
            "La información esté disponible en todo momento",
            "Los datos no sean accesibles a terceros no autorizados",
        ],
        "El no repudio de origen acredita el envío ante posibles negativas del emisor.",
    ),
    Pregunta(
        "Conceptos básicos",
        "En seguridad de la información, una 'salvaguarda' es:",
        "Un elemento de defensa contra una determinada amenaza",
        [
            "Un fallo en el sistema susceptible de producir un daño",
            "Una acción intencionada de provocar un daño",
            "La relación entre la magnitud del daño y su probabilidad",
        ],
        "La salvaguarda es el control o medida que protege frente a una amenaza concreta.",
    ),
    Pregunta(
        "Conceptos básicos",
        "Un 'activo' en el contexto de la seguridad de la información es:",
        "Cualquier elemento de valor para la organización",
        [
            "Solo los servidores y equipos informáticos",
            "Exclusivamente la información almacenada en bases de datos",
            "Los ataques intencionados contra un sistema",
        ],
        "Un activo puede ser físico, lógico o humano: todo elemento valioso para la organización.",
    ),
    Pregunta(
        "Conceptos básicos",
        "La 'vulnerabilidad' en seguridad es:",
        "Una deficiencia de un sistema susceptible de producir un fallo, fortuita o intencionadamente",
        [
            "Una acción intencionada de provocar un daño",
            "Un elemento de defensa contra una amenaza",
            "Cualquier elemento de valor para la organización",
        ],
        "La vulnerabilidad es una debilidad del sistema que puede ser explotada para causar un daño.",
    ),
    Pregunta(
        "Conceptos básicos",
        "El 'riesgo' en el ámbito de la seguridad se define como:",
        "La relación entre la magnitud del daño y la probabilidad de que dicho daño ocurra",
        [
            "Un fallo fortuito del sistema",
            "Un elemento de defensa ante amenazas",
            "Cualquier acción malintencionada contra el sistema",
        ],
        "Riesgo = magnitud del daño × probabilidad. Combinación de impacto y probabilidad.",
    ),

    # ── 2.2. Principios básicos de la seguridad ──────────────────────────────

    Pregunta(
        "Principios básicos",
        "¿Cuál de estos enunciados resume mejor el primer principio básico de la seguridad?",
        "La seguridad no es un producto, es un proceso",
        [
            "La seguridad plena es alcanzable con suficiente inversión",
            "La seguridad depende exclusivamente de la tecnología empleada",
            "La seguridad es un estado fijo que se consigue de una vez",
        ],
        "La seguridad es un proceso continuo que abarca diseño, operación, actualización y mejora.",
    ),
    Pregunta(
        "Principios básicos",
        "El segundo principio básico afirma que 'la seguridad plena es una utopía'. Esto implica que:",
        "El objetivo es minimizar el impacto de la falta de seguridad",
        [
            "No tiene sentido invertir en seguridad",
            "Con tecnología suficiente se puede alcanzar la seguridad total",
            "Solo las organizaciones grandes necesitan preocuparse por la seguridad",
        ],
        "Todo sistema es inseguro por definición; el objetivo es minimizar el impacto de los fallos.",
    ),
    Pregunta(
        "Principios básicos",
        "El tercer principio ('la seguridad es una cadena') implica que:",
        "La mejora de una parte del sistema no mejora la seguridad global si hay partes más vulnerables",
        [
            "Con mejorar la seguridad técnica es suficiente",
            "El eslabón más fuerte determina la seguridad del conjunto",
            "Solo los elementos tecnológicos forman la cadena de seguridad",
        ],
        "La cadena rompe por el eslabón más débil: mejorar solo una parte no mejora el conjunto.",
    ),
    Pregunta(
        "Principios básicos",
        "Según los apuntes, ¿qué elemento resulta con frecuencia el eslabón más débil de la cadena de seguridad?",
        "El factor humano",
        [
            "La seguridad física",
            "La seguridad lógica",
            "Las comunicaciones de red",
        ],
        "Más del 70% de los incidentes de seguridad se originan dentro de la propia organización.",
    ),
    Pregunta(
        "Principios básicos",
        "En el diseño de sistemas seguros, la máxima 'todo lo que no está explícitamente permitido, está prohibido' corresponde a:",
        "Minimizar la superficie de ataque",
        [
            "Maximizar la disponibilidad del sistema",
            "Garantizar el no repudio de las comunicaciones",
            "Aplicar seguridad a través de la oscuridad",
        ],
        "Reducir la superficie de ataque minimiza la exposición de información y servicios.",
    ),

    # ── 2.3. Preguntas clave ──────────────────────────────────────────────────

    Pregunta(
        "Preguntas clave",
        "Las cuatro preguntas fundamentales en seguridad de la información son:",
        "¿Qué proteger? ¿Contra quién? ¿Cómo? ¿Hasta dónde?",
        [
            "¿Qué proteger? ¿De qué manera? ¿Hasta cuándo?",
            "¿Cuándo? ¿Cómo? ¿Dónde proteger?",
            "¿Qué? ¿Contra quién? ¿Cómo? ¿Cuándo?",
        ],
        "Las cuatro preguntas del texto son: qué proteger, contra quién, cómo y hasta dónde.",
    ),
    Pregunta(
        "Preguntas clave",
        "El 'inventario de activos' responde a la pregunta:",
        "¿Qué queremos proteger?",
        [
            "¿Cómo vamos a protegerlo?",
            "¿Hasta dónde invertir en seguridad?",
            "¿Contra quién nos queremos proteger?",
        ],
        "El inventario de activos identifica los elementos críticos y sus relaciones, respondiendo a '¿qué proteger?'.",
    ),
    Pregunta(
        "Preguntas clave",
        "La pregunta '¿hasta dónde?' en seguridad de la información se refiere principalmente a:",
        "Cuánto invertir en la gestión de la seguridad",
        [
            "Identificar los activos de la organización",
            "Analizar los perfiles de los posibles atacantes",
            "Decidir qué tecnologías de cifrado aplicar",
        ],
        "La pregunta '¿hasta dónde?' busca el equilibrio entre el valor de lo protegido y el coste de la protección.",
    ),

    # ── 2.4. Enfoques de la seguridad ────────────────────────────────────────

    Pregunta(
        "Enfoques de seguridad",
        "¿Cuántos enfoques compatibles existen para estudiar la Seguridad de la Información según los apuntes?",
        "Tres: normativa/legislación, amenazas tecnológicas y centrado en el negocio",
        [
            "Uno: el enfoque centrado en las amenazas tecnológicas",
            "Dos: el técnico y el legal",
            "Cuatro: técnico, legal, físico y organizativo",
        ],
        "Los tres enfoques son: normativa, amenazas tecnológicas y continuidad del negocio.",
    ),

    # ── 2.5. Seguridad vs privacidad ─────────────────────────────────────────

    Pregunta(
        "Seguridad vs privacidad",
        "¿En qué artículo de la Constitución Española de 1978 se regula el uso de la informática para proteger la intimidad?",
        "Artículo 18.4",
        [
            "Artículo 20 (libertad de expresión)",
            "Artículo 12 de la Declaración Universal de DDHH",
            "Artículo 14 (igualdad ante la ley)",
        ],
        "El art. 18.4 CE establece que la ley limitará el uso de la informática para garantizar la intimidad.",
    ),
    Pregunta(
        "Seguridad vs privacidad",
        "Phil Zimmermann desarrolló PGP principalmente para:",
        "Permitir al público cifrar sus comunicaciones de forma robusta ante las presiones gubernamentales",
        [
            "Crear el primer algoritmo de cifrado simétrico comercial",
            "Desarrollar el estándar TLS para la web segura",
            "Certificar digitalmente documentos con validez legal",
        ],
        "Zimmermann creó PGP como respuesta a la propuesta del chip Clipper y los intentos de limitar la criptografía civil.",
    ),
    Pregunta(
        "Seguridad vs privacidad",
        "El chip Clipper, propuesto por el gobierno de EEUU en 1991, incorporaba:",
        "Una técnica de cifrado con 'puerta trasera' accesible a agencias gubernamentales",
        [
            "Un procesador seguro de firma electrónica reconocida",
            "Un módulo de autenticación biométrica con huella dactilar",
            "El primer estándar AES para cifrado de datos",
        ],
        "El Clipper usaba cifrado con backdoor para que agencias estatales pudiesen interceptar comunicaciones.",
    ),
    Pregunta(
        "Seguridad vs privacidad",
        "En la actualidad, el empleo de criptografía fuerte para la protección de datos personales es:",
        "Obligatorio por ley",
        [
            "Voluntario y recomendado pero no obligatorio",
            "Prohibido para ciudadanos particulares",
            "Solo obligatorio en organismos militares",
        ],
        "El texto indica que hoy en día es obligatorio por ley el uso de criptografía fuerte en la protección de datos personales.",
    ),

    # ── 2.6. Seguridad a través de la oscuridad vs del conocimiento ──────────

    Pregunta(
        "Oscuridad vs conocimiento",
        "La 'seguridad a través de la oscuridad' consiste en:",
        "Considerar que una aplicación será segura si su código interno no es difundido",
        [
            "Divulgar todas las vulnerabilidades del sistema para mejorar la seguridad",
            "Aplicar cifrado de extremo a extremo en todas las comunicaciones",
            "Usar contraseñas largas y complejas sin divulgarlas",
        ],
        "La oscuridad basa la seguridad en el secreto del funcionamiento del sistema, lo cual ha demostrado ser insuficiente.",
    ),
    Pregunta(
        "Oscuridad vs conocimiento",
        "El principio de Kerckhoff (finales de 1880) establece que:",
        "Un criptosistema debe ser seguro aunque todo su funcionamiento sea público, excepto la clave",
        [
            "La clave secreta debe permanecer oculta junto al algoritmo",
            "Solo los algoritmos de código cerrado son seguros",
            "La seguridad depende del número de bits de la clave y del secreto del algoritmo",
        ],
        "Kerckhoff propuso que la seguridad del sistema no debe depender del secreto del algoritmo, solo de la clave.",
    ),
    Pregunta(
        "Oscuridad vs conocimiento",
        "El algoritmo AES fue seleccionado en 2001 mediante:",
        "Un concurso internacional y abierto, con código fuente público",
        [
            "Un contrato secreto con la NSA bajo estricta confidencialidad",
            "La modificación del DES por el gobierno de EEUU",
            "La propuesta de un único fabricante con patente privada",
        ],
        "AES se eligió en concurso abierto, a diferencia del DES (propuesto en condiciones de oscuridad por la NSA).",
    ),
    Pregunta(
        "Oscuridad vs conocimiento",
        "¿Qué algoritmo precedió al AES como estándar de cifrado simétrico de la NSA?",
        "DES (Data Encryption Standard), propuesto en 1976",
        [
            "RSA, propuesto en 1977",
            "SHA-1, propuesto en 1995",
            "PGP, propuesto en 1991",
        ],
        "El DES fue propuesto por la NSA en 1976 en condiciones de oscuridad y fue sustituido por el AES en 2001.",
    ),

    # ── 3. Visión integral de la seguridad ───────────────────────────────────

    Pregunta(
        "Visión integral",
        "¿Cuántos ámbitos componen la visión integral de la seguridad según la UA1?",
        "Cuatro: seguridad en el personal, física, lógica y organizativa",
        [
            "Tres: física, lógica y organizativa",
            "Dos: técnica y humana",
            "Cinco: personal, física, lógica, organizativa y legal",
        ],
        "La visión integral abarca: factor humano (personal), seguridad física, lógica y organizativa.",
    ),
    Pregunta(
        "Factor humano",
        "Según varias consultoras especializadas citadas en el texto, ¿qué porcentaje de incidentes de seguridad se origina dentro de la propia organización?",
        "Más del 70%",
        [
            "Menos del 30%",
            "Exactamente el 50%",
            "Más del 90%",
        ],
        "Más del 70% de los incidentes tienen origen interno, por accidente, descuido o intención.",
    ),
    Pregunta(
        "Factor humano",
        "Los tres objetivos principales del plan de trabajo relacionado con el factor humano son:",
        "Difundir la política de seguridad, concienciar de amenazas y minimizar el impacto de incidencias",
        [
            "Cifrar datos, instalar antivirus y monitorizar la red",
            "Contratar personal especializado, auditar sistemas y gestionar licencias",
            "Actualizar software, hacer copias de seguridad y revisar accesos",
        ],
        "Los tres objetivos son: formación/difusión, concienciación de amenazas y minimización del impacto.",
    ),
    Pregunta(
        "Seguridad física",
        "Un principio básico de la seguridad física establece que:",
        "Un atacante con acceso físico durante unos minutos puede tomar control absoluto sobre el equipo",
        [
            "La seguridad física solo aplica a los servidores centrales, no a los equipos de sobremesa",
            "Los routers y switches no necesitan protección física especial",
            "El acceso físico es menos crítico que el acceso remoto vía red",
        ],
        "El texto advierte que cualquier equipo con acceso físico (incluyendo routers y switches) puede ser comprometido.",
    ),
    Pregunta(
        "Seguridad física",
        "La seguridad física contempla aspectos como:",
        "Control de acceso a instalaciones, protección ante fallos eléctricos y factores ambientales",
        [
            "Políticas de contraseñas y autenticación de usuarios",
            "Cifrado de datos en tránsito y en reposo",
            "Análisis de vulnerabilidades y pentesting",
        ],
        "La seguridad física incluye: inventario de activos, controles de acceso, alimentación eléctrica y protección ambiental.",
    ),
    Pregunta(
        "Seguridad lógica",
        "La seguridad lógica consiste en:",
        "La aplicación de barreras y procedimientos que protejan el acceso a los datos de forma que solo sean accesibles por las personas autorizadas",
        [
            "La protección física de los equipos mediante barreras tangibles",
            "El conjunto de normas que deben cumplir las personas con acceso a la organización",
            "El proceso de auditoría de cumplimiento normativo",
        ],
        "La seguridad lógica protege el acceso lógico a la información, complementando la seguridad física.",
    ),
    Pregunta(
        "Seguridad organizativa",
        "La política de seguridad de una organización es definida por el IETF como:",
        "Un conjunto de normas que deben cumplirse por todas las personas con acceso a la información o tecnología de la organización",
        [
            "Un documento técnico de configuración de firewalls",
            "El manual de instalación de sistemas de detección de intrusos",
            "El contrato con el proveedor de servicios de seguridad gestionada",
        ],
        "El IETF Site Security Handbook define la política de seguridad como normas de obligado cumplimiento para todos.",
    ),
    Pregunta(
        "Seguridad organizativa",
        "¿Cuál de estas NO es una característica de una buena política de seguridad según los apuntes?",
        "Opcional: solo vinculante para el personal técnico",
        [
            "Abarcable: implantable de forma efectiva",
            "Asequible: no debe entorpecer el trabajo",
            "Mejorable: con mecanismos de autoevaluación",
        ],
        "La política de seguridad debe ser de obligado cumplimiento para todos, no opcional.",
    ),

    # ── 4. Identidad digital, firma electrónica y certificados ───────────────

    Pregunta(
        "Factores de autenticación",
        "Los tres factores de autenticación clásicos son:",
        "Algo que se sabe (conocimiento), algo que se tiene (posesión) y algo que se es (existencia/biometría)",
        [
            "Contraseña, PIN y huella dactilar solamente",
            "Cifrado, firma digital y certificado",
            "Usuario, contraseña y correo electrónico",
        ],
        "Los tres factores son: conocimiento (saber), posesión (tener) e inherencia/existencia (ser).",
    ),
    Pregunta(
        "Factores de autenticación",
        "¿Cuál de estos es un ejemplo de factor de posesión?",
        "Una tarjeta criptográfica o teléfono móvil",
        [
            "La contraseña de acceso al sistema",
            "La huella dactilar del usuario",
            "El nombre de usuario en el sistema",
        ],
        "El factor de posesión es algo que se tiene: DNI, tarjeta, teléfono, clave criptográfica, etc.",
    ),
    Pregunta(
        "Factores de autenticación",
        "La autenticación de dos factores obligatoria en sistemas de nivel alto de seguridad de la administración pública española combina:",
        "Conocimiento (usuario/contraseña) con posesión (dispositivo móvil o similar)",
        [
            "Dos contraseñas distintas almacenadas en el mismo sistema",
            "Posesión (tarjeta) con posesión (teléfono)",
            "Biometría exclusivamente con factor de existencia",
        ],
        "El 2FA combina conocimiento y posesión (o existencia), siendo obligatorio en sistemas de nivel alto.",
    ),
    Pregunta(
        "Identidad digital",
        "El rastro digital de una persona incluye:",
        "Cuentas de correo, perfiles en RRSS, búsquedas, compras online, páginas visitadas e IPs de conexión",
        [
            "Solo las publicaciones realizadas en redes sociales",
            "Únicamente los documentos firmados digitalmente",
            "Solo los datos almacenados en servidores públicos",
        ],
        "El rastro digital abarca todos los vestigios digitales: correos, RRSS, búsquedas, geolocalización, etc.",
    ),
    Pregunta(
        "Identidad digital",
        "Los metadatos de un documento son:",
        "Datos que describen al propio documento (autor, empresa, fecha, etc.) y pueden revelar información no deseada",
        [
            "El contenido principal del documento cifrado",
            "La firma electrónica del autor",
            "Las contraseñas almacenadas en el documento",
        ],
        "Los metadatos (autor, empresa, versiones previas…) pueden revelar información sensible no controlada.",
    ),
    Pregunta(
        "Firma electrónica",
        "Según la Ley 59/2003 de Firma Electrónica, la firma electrónica es:",
        "El conjunto de datos en forma electrónica que pueden ser utilizados como medios de identificación del firmante",
        [
            "Exclusivamente la huella dactilar digitalizada del firmante",
            "Una contraseña de un solo uso enviada por SMS",
            "El sello de tiempo de un documento digital",
        ],
        "La Ley 59/2003 define la firma electrónica como datos electrónicos que identifican al firmante.",
    ),
    Pregunta(
        "Firma electrónica",
        "La firma electrónica reconocida se diferencia de la avanzada en que:",
        "Está basada en un certificado digital reconocido y generada mediante un dispositivo seguro de creación de firma",
        [
            "La reconocida se realiza con cualquier ordenador sin requisitos adicionales",
            "La avanzada requiere dispositivo seguro y la reconocida no",
            "La reconocida solo puede usarla la Administración Pública",
        ],
        "La firma reconocida = firma avanzada + certificado reconocido + dispositivo seguro de creación de firma.",
    ),
    Pregunta(
        "Firma electrónica",
        "Los certificados de software emitidos por la FNMT tienen categoría de:",
        "Firma electrónica avanzada (no reconocida)",
        [
            "Firma electrónica reconocida con pleno valor legal",
            "Firma electrónica básica sin ningún valor legal",
            "Firma biométrica de existencia",
        ],
        "El ordenador en que se usa el certificado FNMT no es un 'dispositivo seguro de creación de firma', por eso solo es avanzada.",
    ),
    Pregunta(
        "Certificados y DNIe",
        "El DNIe (DNI electrónico) comenzó su implantación en España en:",
        "2006",
        [
            "1999",
            "2015",
            "2010",
        ],
        "La implantación del DNIe comenzó en 2006, siendo España pionera en identidad digital nacional.",
    ),
    Pregunta(
        "Certificados y DNIe",
        "¿Qué diferencia principal tiene el DNI 3.0 respecto al DNIe original?",
        "El chip criptográfico dispone de interfaz dual que añade tecnología NFC",
        [
            "El DNI 3.0 usa firma electrónica avanzada en lugar de reconocida",
            "El DNI 3.0 almacena la clave privada en el ordenador del usuario",
            "El DNI 3.0 elimina el chip criptográfico y usa solo datos biométricos",
        ],
        "El DNI 3.0, lanzado a partir de 2015, añade NFC al chip criptográfico del DNIe original.",
    ),
    Pregunta(
        "Certificados y DNIe",
        "El DNIe ofrece firma electrónica reconocida porque:",
        "Las operaciones de firma se realizan en el chip criptográfico, que es un dispositivo seguro de creación de firma",
        [
            "El DNIe se conecta a servidores de la FNMT para cada firma",
            "El ordenador que usa el DNIe siempre está certificado como seguro",
            "La firma se realiza con la clave pública del titular",
        ],
        "La firma en el interior del chip (fuera del ordenador) cumple el requisito de 'dispositivo seguro de creación de firma'.",
    ),
    Pregunta(
        "Certificados y DNIe",
        "Los tres objetivos fundamentales del diseño del DNIe son:",
        "Identidad digital, firma electrónica avanzada y mejora del servicio al ciudadano",
        [
            "Cifrado de documentos, autenticación biométrica y anonimato en la red",
            "Interoperabilidad europea, firma reconocida y control de acceso físico",
            "Almacenamiento seguro, no repudio y disponibilidad 24/7",
        ],
        "El diseño del DNIe responde a: identidad digital, firma avanzada y entrega inmediata (mejora del servicio).",
    ),
    Pregunta(
        "Certificados y DNIe",
        "La autoridad responsable de emitir los certificados digitales incluidos en el DNIe es:",
        "La Autoridad de Certificación del Ministerio del Interior",
        [
            "La Fábrica Nacional de Moneda y Timbre (FNMT)",
            "El Centro Criptológico Nacional (CCN)",
            "El Instituto Nacional de Ciberseguridad (INCIBE)",
        ],
        "El chip criptográfico del DNIe incluye un certificado expedido por la AC del Ministerio del Interior.",
    ),

    # ── 5. Nuevos desafíos y desinformación ──────────────────────────────────

    Pregunta(
        "Nuevos desafíos",
        "La desinformación se define en el texto como:",
        "El empleo de información falsa con el objetivo de manipular la opinión pública",
        [
            "El robo de datos personales mediante phishing",
            "La interceptación de comunicaciones cifradas",
            "La suplantación de identidad en redes sociales",
        ],
        "La desinformación usa fake news, cuentas falsas, etc., para alterar la opinión pública.",
    ),
    Pregunta(
        "Nuevos desafíos",
        "El concepto de 'tú eres el producto' hace referencia a:",
        "Los servicios digitales gratuitos que monetizan los datos personales de los usuarios",
        [
            "El uso del DNIe como producto comercial",
            "La venta de licencias de software de seguridad",
            "Los sistemas de pago en línea basados en criptomonedas",
        ],
        "Servicios 'gratuitos' como Gmail, Google Maps o Facebook obtienen beneficio comercializando los datos de sus usuarios.",
    ),
    Pregunta(
        "Nuevos desafíos",
        "El documento CCN-CERT BP/13 trata sobre:",
        "Desinformación en el ciberespacio",
        [
            "Gestión de incidentes de ciberseguridad en infraestructuras críticas",
            "Procedimientos de auditoría del ENS",
            "Guía de implantación de la ISO 27001",
        ],
        "CCN-CERT BP/13 'Desinformación en el ciberespacio' es el documento del CCN reseñado en la bibliografía.",
    ),

    # ── Trampas y preguntas de discriminación ────────────────────────────────

    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es FALSA?",
        "La Seguridad Informática y la Seguridad de la Información son términos completamente equivalentes",
        [
            "La Seguridad de la Información amplía el ámbito de la Seguridad en TIs",
            "La ciberseguridad tiene carácter global y abarca infraestructuras críticas",
            "El factor humano es con frecuencia el eslabón más débil de la cadena de seguridad",
        ],
        "La Seguridad de la Información es más amplia que la Seguridad Informática: incluye el factor humano, organizativo, etc.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la firma electrónica es FALSA?",
        "Los certificados FNMT de software generan firma electrónica reconocida",
        [
            "El DNIe genera firma electrónica reconocida",
            "La firma avanzada permite identificar al firmante y detectar cambios",
            "La firma reconocida tiene el mismo valor que la manuscrita",
        ],
        "Los certificados FNMT de software solo generan firma avanzada, no reconocida, porque no usan dispositivo seguro.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre los principios de seguridad es FALSA?",
        "Si se refuerza la parte tecnológica del sistema, la seguridad global mejora siempre",
        [
            "La seguridad debe considerarse en todas las etapas del ciclo de vida del servicio",
            "La seguridad plena es una utopía: todo sistema es inseguro por definición",
            "El factor humano suele ser el eslabón más débil de la cadena",
        ],
        "Mejorar solo la tecnología no mejora la seguridad global si el factor humano u otro eslabón sigue siendo débil.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas NO es una dimensión de la seguridad según ISO 27000?",
        "Rentabilidad",
        [
            "Disponibilidad",
            "No repudio",
            "Autenticación",
        ],
        "ISO 27000 establece: disponibilidad, integridad, confidencialidad, no repudio y autenticación. La rentabilidad no es una dimensión.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el principio de Kerckhoff es CORRECTA?",
        "Un criptosistema debe ser seguro aunque todo su funcionamiento sea público, excepto la clave",
        [
            "Un criptosistema es seguro solo si su algoritmo es secreto",
            "La clave debe publicarse junto con el algoritmo para mayor seguridad",
            "La seguridad a través de la oscuridad es la aplicación práctica del principio de Kerckhoff",
        ],
        "Kerckhoff: la seguridad no depende del secreto del algoritmo, solo de la clave secreta.",
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    Pregunta(
        "Preguntas clave",
        "A la hora de analizar la seguridad de la información debemos plantearnos las siguientes preguntas básicas:",
        "qué proteger, contra quién, cómo y hasta dónde",
        [
            "qué proteger, de qué manera y hasta cuándo",
            "qué proteger, contra quién y cómo",
            "cuándo, cómo y dónde",
        ],
        "Las cuatro preguntas fundamentales son: qué proteger, contra quién, cómo y hasta dónde.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "La Disponibilidad supone...",
        "que la información esté disponible cuando sea necesario y por quien esté autorizado a ello",
        [
            "que la información sólo debe ser accesible por las personas autorizadas",
            "evitar que la información sea alterada o modificada sin autorización",
            "disponer de la información siempre que sea posible",
        ],
        "La Disponibilidad garantiza el acceso a la información en el momento y por quien corresponda.",
    ),
    Pregunta(
        "Definiciones",
        "La diferencia entre datos e información radica en...",
        "Los datos son la materia prima de la información mientras que ésta es el resultado de procesar los datos",
        [
            "No hay diferencias",
            "Los datos son un tipo específico de información",
            "Los datos son la materia prima de la información mientras que ésta es un repositorio de datos global",
        ],
        "Los datos son materia prima; la información es el resultado de procesar y contextualizar esos datos.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "¿Qué aspectos trata de garantizar la Seguridad de la Información?",
        "La disponibilidad, Integridad, confidencialidad, No repudio y Autenticación de la información con independencia del medio físico donde se almacene",
        [
            "La Disponibilidad, Integridad, Confidencialidad y No repudio de la información",
            "La disponibilidad, Integridad, confidencialidad, No repudio y Autenticación de la información almacenada en los ordenadores",
            "La disponibilidad, Integridad, confidencialidad, No repudio y Clasificación de la información con independencia del medio físico donde se almacene",
        ],
        "La Seguridad de la Información protege disponibilidad, integridad, confidencialidad, no repudio y autenticación, sea cual sea el soporte.",
    ),
    Pregunta(
        "Principios básicos",
        "La seguridad se considera un:",
        "Proceso",
        [
            "Producto",
            "Activo",
            "Elemento prescindible de la organización",
        ],
        "La seguridad es un proceso continuo, no un producto que se compra y se instala.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "La característica de la información asociada a la FIABILIDAD es la:",
        "Integridad",
        [
            "Autenticación",
            "No Repudio",
            "Confidencialidad",
        ],
        "La integridad garantiza que la información no ha sido alterada, lo que la hace fiable.",
    ),
    Pregunta(
        "Dimensiones de seguridad",
        "La INTEGRIDAD es la característica de la información:",
        "Relacionada con evitar que la información sea alterada o modificada sin autorización",
        [
            "Relacionada con la no revelación de secretos",
            "Vinculada a la necesidad de que quien corresponda tenga acceso a dicha información cuando lo necesite",
            "Relacionada con evitar que la información sea accesible por personas no autorizadas",
        ],
        "La integridad protege la información frente a modificaciones no autorizadas.",
    ),
    Pregunta(
        "Seguridad organizativa",
        "Algunas características que debe tener una Política de Seguridad son:",
        "Todas las respuestas son correctas",
        [
            "Mejorable e Inteligible",
            "Abarcable y de obligado cumplimiento",
            "Asequible",
        ],
        "Una buena política de seguridad debe ser mejorable, inteligible, abarcable, de obligado cumplimiento y asequible.",
    ),
    Pregunta(
        "Factor humano",
        "¿Cuáles son las principales medidas a considerar con el personal de una organización en relación a la seguridad?",
        "Formación, Acuerdos de confidencialidad y Seguimiento",
        [
            "Formación, Fiabilidad y Seguimiento",
            "Concienciación, Fiabilidad y Seguimiento",
            "Formación, Vigilancia y Aplicación de políticas de restricción de accesos",
        ],
        "Las tres medidas clave con el personal son: Formación, Acuerdos de confidencialidad y Seguimiento.",
    ),
    Pregunta(
        "Definiciones",
        "La SEGURIDAD INFORMÁTICA es:",
        "Una disciplina que se encarga de diseñar las normas, procedimientos, métodos y técnicas orientados a proveer condiciones seguras y confiables para el procesamiento de datos en sistemas informáticos",
        [
            "Una disciplina que se encarga de diseñar las políticas de seguridad de las empresas",
            "Una metodología que se encarga de aplicar las normas, procedimientos, métodos y técnicas orientados a proveer condiciones seguras y confiables para el procesamiento de señales en sistemas informáticos",
            "Una disciplina que se encarga de diseñar las políticas de seguridad en las empresas y en la administración pública",
        ],
        "La Seguridad Informática es una disciplina de diseño de normas y técnicas para el procesamiento seguro de datos.",
    ),
    Pregunta(
        "Factores de autenticación",
        "Los factores de autenticación son:",
        "Conocimiento, posesión y existencia",
        [
            "Identidad, posesión y existencia",
            "Identidad, conocimiento y existencia",
            "Identidad, posesión y conocimiento",
        ],
        "Los factores de autenticación según la UA1 de los apuntes son conocimiento (algo que se sabe), posesión (algo que se tiene) y existencia/identidad (algo que se es).",
    ),
    Pregunta(
        "Oscuridad vs conocimiento",
        "¿En cuál de estas ciencias o técnicas no se aplica el principio de seguridad a través del conocimiento?",
        "Esteganografía",
        [
            "Criptología",
            "Biometría",
            "En ninguna de las indicadas",
        ],
        "La esteganografía basa su seguridad en ocultar la existencia del mensaje (oscuridad), no en el conocimiento de un secreto como la criptología o la biometría.",
    ),
]
