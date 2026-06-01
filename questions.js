const QUESTIONS = [
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Sociedad de la información",
    "pregunta": "¿Cuáles son los dos impulsores del cambio tecnológico mencionados en la UA1?",
    "correcta": "Las tecnologías de bajo coste y los estándares",
    "distractores": [
      "El Big Data y la inteligencia artificial",
      "Internet y las redes sociales",
      "La globalización y la política internacional"
    ],
    "explicacion": "Los dos impulsores son: tecnologías de bajo coste (Ley de Moore) y los estándares (interoperabilidad)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Sociedad de la información",
    "pregunta": "La Ley de Moore establece que aproximadamente cada dos años:",
    "correcta": "La capacidad de los sistemas electrónicos se duplica a precio constante",
    "distractores": [
      "El precio de los sistemas electrónicos se duplica",
      "La velocidad de Internet se multiplica por diez",
      "Los estándares de seguridad se renuevan completamente"
    ],
    "explicacion": "La Ley de Moore describe el crecimiento de la capacidad de cómputo a coste constante."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Sociedad de la información",
    "pregunta": "En el ámbito económico y político, las cinco grandes tecnológicas estadounidenses se conocen como:",
    "correcta": "GAFAM (Google, Amazon, Facebook, Apple y Microsoft)",
    "distractores": [
      "BATX (Baidu, Alibaba, Tencent y Xiaomi)",
      "IEEE, ANSI, ISO, ITU y NIST",
      "ENISA, CCN, INCIBE, FNMT y AEPD"
    ],
    "explicacion": "GAFAM son las cinco grandes tecnológicas de EEUU; BATX son las cuatro chinas."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Sociedad de la información",
    "pregunta": "¿Qué representa el ciberespacio como dominio de la guerra?",
    "correcta": "El quinto dominio, después de tierra, mar, aire y espacio",
    "distractores": [
      "El primer dominio por encima de los demás",
      "Un dominio compartido únicamente con el espacio",
      "Un concepto exclusivamente civil sin uso militar"
    ],
    "explicacion": "El ciberespacio se configura como el quinto dominio de la guerra en la era actual."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Industria 4.0",
    "pregunta": "La cuarta revolución industrial fue acuñada por:",
    "correcta": "Klaus Schwab, fundador del Foro Económico Mundial",
    "distractores": [
      "Phil Zimmermann, creador del PGP",
      "Gordon Moore, autor de la Ley de Moore",
      "Bruce Schneier, experto en criptografía"
    ],
    "explicacion": "Klaus Schwab acuñó el término en su libro homónimo sobre la cuarta revolución industrial."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Industria 4.0",
    "pregunta": "La cuarta revolución industrial se caracteriza principalmente por:",
    "correcta": "Robótica, inteligencia artificial, IoT, blockchain, computación cuántica e impresión 3D",
    "distractores": [
      "La máquina de vapor y la industria textil",
      "La electricidad y la producción en masa",
      "La microelectrónica de bajo coste y los estándares"
    ],
    "explicacion": "La Industria 4.0 integra tecnologías emergentes como IA, IoT, blockchain y computación cuántica."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "¿Cómo define MAGERIT la Seguridad de la Información?",
    "correcta": "La capacidad de las redes o sistemas para resistir accidentes o acciones ilícitas que comprometan la disponibilidad, integridad y confidencialidad",
    "distractores": [
      "El conjunto de normas para proteger únicamente datos personales",
      "La disciplina que diseña procedimientos para el procesamiento de datos en sistemas informáticos",
      "El software destinado a detectar y eliminar malware en redes corporativas"
    ],
    "explicacion": "MAGERIT define la Seguridad de la Información en términos de disponibilidad, integridad y confidencialidad."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "La diferencia principal entre Seguridad Informática y Seguridad en TIs es que la segunda:",
    "correcta": "Incorpora también la transmisión de datos entre sistemas informáticos",
    "distractores": [
      "Solo se ocupa de la seguridad física de los equipos",
      "Excluye los dispositivos móviles",
      "Es sinónimo exacto de ciberseguridad"
    ],
    "explicacion": "La Seguridad en TIs añade el aspecto de la transmisión de datos a la Seguridad Informática."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "Según el CCN, la ciberseguridad es:",
    "correcta": "El conjunto de actuaciones orientadas a asegurar las redes y sistemas que constituyen el ciberespacio",
    "distractores": [
      "La disciplina exclusiva de la seguridad física de datos personales",
      "Un sistema de gestión de contraseñas de usuarios",
      "El análisis de vulnerabilidades de software propietario"
    ],
    "explicacion": "El CCN define ciberseguridad como las actuaciones para asegurar el ciberespacio (redes y sistemas TIC)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "La norma ISO 27000 amplía las dimensiones de la seguridad incluyendo además de disponibilidad, integridad y confidencialidad:",
    "correcta": "No repudio y autenticación",
    "distractores": [
      "Privacidad y anonimato",
      "Trazabilidad y rendimiento",
      "Cifrado y compresión"
    ],
    "explicacion": "ISO 27000 añade el no repudio y la autenticación a las tres dimensiones clásicas."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "¿Cuál es la característica de seguridad descrita como 'la más importante' en los apuntes?",
    "correcta": "La disponibilidad",
    "distractores": [
      "La confidencialidad",
      "La integridad",
      "El no repudio"
    ],
    "explicacion": "El texto indica que la disponibilidad es sin duda la característica más importante."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "La integridad en seguridad de la información se refiere a:",
    "correcta": "Evitar que la información sea alterada o modificada sin autorización",
    "distractores": [
      "Garantizar que la información esté disponible cuando se necesita",
      "Asegurar que solo las personas autorizadas accedan a la información",
      "Garantizar que el autor de la información sea quien dice ser"
    ],
    "explicacion": "La integridad protege la fiabilidad de la información, evitando alteraciones no autorizadas."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "La confidencialidad consiste en que la información:",
    "correcta": "Solo sea accesible por personas, programas o sistemas autorizados",
    "distractores": [
      "Esté siempre disponible sin restricciones",
      "No pueda ser alterada por terceros",
      "Esté firmada digitalmente por su autor"
    ],
    "explicacion": "La confidencialidad impide accesos no autorizados, ya sean casuales o intencionados."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "El no repudio de origen garantiza que:",
    "correcta": "El receptor tenga pruebas suficientes para que el emisor no pueda negar el envío",
    "distractores": [
      "El emisor tenga pruebas de que el mensaje ha sido entregado",
      "La información esté disponible en todo momento",
      "Los datos no sean accesibles a terceros no autorizados"
    ],
    "explicacion": "El no repudio de origen acredita el envío ante posibles negativas del emisor."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Conceptos básicos",
    "pregunta": "En seguridad de la información, una 'salvaguarda' es:",
    "correcta": "Un elemento de defensa contra una determinada amenaza",
    "distractores": [
      "Un fallo en el sistema susceptible de producir un daño",
      "Una acción intencionada de provocar un daño",
      "La relación entre la magnitud del daño y su probabilidad"
    ],
    "explicacion": "La salvaguarda es el control o medida que protege frente a una amenaza concreta."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Conceptos básicos",
    "pregunta": "Un 'activo' en el contexto de la seguridad de la información es:",
    "correcta": "Cualquier elemento de valor para la organización",
    "distractores": [
      "Solo los servidores y equipos informáticos",
      "Exclusivamente la información almacenada en bases de datos",
      "Los ataques intencionados contra un sistema"
    ],
    "explicacion": "Un activo puede ser físico, lógico o humano: todo elemento valioso para la organización."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Conceptos básicos",
    "pregunta": "La 'vulnerabilidad' en seguridad es:",
    "correcta": "Una deficiencia de un sistema susceptible de producir un fallo, fortuita o intencionadamente",
    "distractores": [
      "Una acción intencionada de provocar un daño",
      "Un elemento de defensa contra una amenaza",
      "Cualquier elemento de valor para la organización"
    ],
    "explicacion": "La vulnerabilidad es una debilidad del sistema que puede ser explotada para causar un daño."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Conceptos básicos",
    "pregunta": "El 'riesgo' en el ámbito de la seguridad se define como:",
    "correcta": "La relación entre la magnitud del daño y la probabilidad de que dicho daño ocurra",
    "distractores": [
      "Un fallo fortuito del sistema",
      "Un elemento de defensa ante amenazas",
      "Cualquier acción malintencionada contra el sistema"
    ],
    "explicacion": "Riesgo = magnitud del daño × probabilidad. Combinación de impacto y probabilidad."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "¿Cuál de estos enunciados resume mejor el primer principio básico de la seguridad?",
    "correcta": "La seguridad no es un producto, es un proceso",
    "distractores": [
      "La seguridad plena es alcanzable con suficiente inversión",
      "La seguridad depende exclusivamente de la tecnología empleada",
      "La seguridad es un estado fijo que se consigue de una vez"
    ],
    "explicacion": "La seguridad es un proceso continuo que abarca diseño, operación, actualización y mejora."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "El segundo principio básico afirma que 'la seguridad plena es una utopía'. Esto implica que:",
    "correcta": "El objetivo es minimizar el impacto de la falta de seguridad",
    "distractores": [
      "No tiene sentido invertir en seguridad",
      "Con tecnología suficiente se puede alcanzar la seguridad total",
      "Solo las organizaciones grandes necesitan preocuparse por la seguridad"
    ],
    "explicacion": "Todo sistema es inseguro por definición; el objetivo es minimizar el impacto de los fallos."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "El tercer principio ('la seguridad es una cadena') implica que:",
    "correcta": "La mejora de una parte del sistema no mejora la seguridad global si hay partes más vulnerables",
    "distractores": [
      "Con mejorar la seguridad técnica es suficiente",
      "El eslabón más fuerte determina la seguridad del conjunto",
      "Solo los elementos tecnológicos forman la cadena de seguridad"
    ],
    "explicacion": "La cadena rompe por el eslabón más débil: mejorar solo una parte no mejora el conjunto."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "Según los apuntes, ¿qué elemento resulta con frecuencia el eslabón más débil de la cadena de seguridad?",
    "correcta": "El factor humano",
    "distractores": [
      "La seguridad física",
      "La seguridad lógica",
      "Las comunicaciones de red"
    ],
    "explicacion": "Más del 70% de los incidentes de seguridad se originan dentro de la propia organización."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "En el diseño de sistemas seguros, la máxima 'todo lo que no está explícitamente permitido, está prohibido' corresponde a:",
    "correcta": "Minimizar la superficie de ataque",
    "distractores": [
      "Maximizar la disponibilidad del sistema",
      "Garantizar el no repudio de las comunicaciones",
      "Aplicar seguridad a través de la oscuridad"
    ],
    "explicacion": "Reducir la superficie de ataque minimiza la exposición de información y servicios."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Preguntas clave",
    "pregunta": "Las cuatro preguntas fundamentales en seguridad de la información son:",
    "correcta": "¿Qué proteger? ¿Contra quién? ¿Cómo? ¿Hasta dónde?",
    "distractores": [
      "¿Qué proteger? ¿De qué manera? ¿Hasta cuándo?",
      "¿Cuándo? ¿Cómo? ¿Dónde proteger?",
      "¿Qué? ¿Contra quién? ¿Cómo? ¿Cuándo?"
    ],
    "explicacion": "Las cuatro preguntas del texto son: qué proteger, contra quién, cómo y hasta dónde."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Preguntas clave",
    "pregunta": "El 'inventario de activos' responde a la pregunta:",
    "correcta": "¿Qué queremos proteger?",
    "distractores": [
      "¿Cómo vamos a protegerlo?",
      "¿Hasta dónde invertir en seguridad?",
      "¿Contra quién nos queremos proteger?"
    ],
    "explicacion": "El inventario de activos identifica los elementos críticos y sus relaciones, respondiendo a '¿qué proteger?'."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Preguntas clave",
    "pregunta": "La pregunta '¿hasta dónde?' en seguridad de la información se refiere principalmente a:",
    "correcta": "Cuánto invertir en la gestión de la seguridad",
    "distractores": [
      "Identificar los activos de la organización",
      "Analizar los perfiles de los posibles atacantes",
      "Decidir qué tecnologías de cifrado aplicar"
    ],
    "explicacion": "La pregunta '¿hasta dónde?' busca el equilibrio entre el valor de lo protegido y el coste de la protección."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Enfoques de seguridad",
    "pregunta": "¿Cuántos enfoques compatibles existen para estudiar la Seguridad de la Información según los apuntes?",
    "correcta": "Tres: normativa/legislación, amenazas tecnológicas y centrado en el negocio",
    "distractores": [
      "Uno: el enfoque centrado en las amenazas tecnológicas",
      "Dos: el técnico y el legal",
      "Cuatro: técnico, legal, físico y organizativo"
    ],
    "explicacion": "Los tres enfoques son: normativa, amenazas tecnológicas y continuidad del negocio."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad vs privacidad",
    "pregunta": "¿En qué artículo de la Constitución Española de 1978 se regula el uso de la informática para proteger la intimidad?",
    "correcta": "Artículo 18.4",
    "distractores": [
      "Artículo 20 (libertad de expresión)",
      "Artículo 12 de la Declaración Universal de DDHH",
      "Artículo 14 (igualdad ante la ley)"
    ],
    "explicacion": "El art. 18.4 CE establece que la ley limitará el uso de la informática para garantizar la intimidad."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad vs privacidad",
    "pregunta": "Phil Zimmermann desarrolló PGP principalmente para:",
    "correcta": "Permitir al público cifrar sus comunicaciones de forma robusta ante las presiones gubernamentales",
    "distractores": [
      "Crear el primer algoritmo de cifrado simétrico comercial",
      "Desarrollar el estándar TLS para la web segura",
      "Certificar digitalmente documentos con validez legal"
    ],
    "explicacion": "Zimmermann creó PGP como respuesta a la propuesta del chip Clipper y los intentos de limitar la criptografía civil."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad vs privacidad",
    "pregunta": "El chip Clipper, propuesto por el gobierno de EEUU en 1991, incorporaba:",
    "correcta": "Una técnica de cifrado con 'puerta trasera' accesible a agencias gubernamentales",
    "distractores": [
      "Un procesador seguro de firma electrónica reconocida",
      "Un módulo de autenticación biométrica con huella dactilar",
      "El primer estándar AES para cifrado de datos"
    ],
    "explicacion": "El Clipper usaba cifrado con backdoor para que agencias estatales pudiesen interceptar comunicaciones."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad vs privacidad",
    "pregunta": "En la actualidad, el empleo de criptografía fuerte para la protección de datos personales es:",
    "correcta": "Obligatorio por ley",
    "distractores": [
      "Voluntario y recomendado pero no obligatorio",
      "Prohibido para ciudadanos particulares",
      "Solo obligatorio en organismos militares"
    ],
    "explicacion": "El texto indica que hoy en día es obligatorio por ley el uso de criptografía fuerte en la protección de datos personales."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Oscuridad vs conocimiento",
    "pregunta": "La 'seguridad a través de la oscuridad' consiste en:",
    "correcta": "Considerar que una aplicación será segura si su código interno no es difundido",
    "distractores": [
      "Divulgar todas las vulnerabilidades del sistema para mejorar la seguridad",
      "Aplicar cifrado de extremo a extremo en todas las comunicaciones",
      "Usar contraseñas largas y complejas sin divulgarlas"
    ],
    "explicacion": "La oscuridad basa la seguridad en el secreto del funcionamiento del sistema, lo cual ha demostrado ser insuficiente."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Oscuridad vs conocimiento",
    "pregunta": "El principio de Kerckhoff (finales de 1880) establece que:",
    "correcta": "Un criptosistema debe ser seguro aunque todo su funcionamiento sea público, excepto la clave",
    "distractores": [
      "La clave secreta debe permanecer oculta junto al algoritmo",
      "Solo los algoritmos de código cerrado son seguros",
      "La seguridad depende del número de bits de la clave y del secreto del algoritmo"
    ],
    "explicacion": "Kerckhoff propuso que la seguridad del sistema no debe depender del secreto del algoritmo, solo de la clave."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Oscuridad vs conocimiento",
    "pregunta": "El algoritmo AES fue seleccionado en 2001 mediante:",
    "correcta": "Un concurso internacional y abierto, con código fuente público",
    "distractores": [
      "Un contrato secreto con la NSA bajo estricta confidencialidad",
      "La modificación del DES por el gobierno de EEUU",
      "La propuesta de un único fabricante con patente privada"
    ],
    "explicacion": "AES se eligió en concurso abierto, a diferencia del DES (propuesto en condiciones de oscuridad por la NSA)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Oscuridad vs conocimiento",
    "pregunta": "¿Qué algoritmo precedió al AES como estándar de cifrado simétrico de la NSA?",
    "correcta": "DES (Data Encryption Standard), propuesto en 1976",
    "distractores": [
      "RSA, propuesto en 1977",
      "SHA-1, propuesto en 1995",
      "PGP, propuesto en 1991"
    ],
    "explicacion": "El DES fue propuesto por la NSA en 1976 en condiciones de oscuridad y fue sustituido por el AES en 2001."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Visión integral",
    "pregunta": "¿Cuántos ámbitos componen la visión integral de la seguridad según la UA1?",
    "correcta": "Cuatro: seguridad en el personal, física, lógica y organizativa",
    "distractores": [
      "Tres: física, lógica y organizativa",
      "Dos: técnica y humana",
      "Cinco: personal, física, lógica, organizativa y legal"
    ],
    "explicacion": "La visión integral abarca: factor humano (personal), seguridad física, lógica y organizativa."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factor humano",
    "pregunta": "Según varias consultoras especializadas citadas en el texto, ¿qué porcentaje de incidentes de seguridad se origina dentro de la propia organización?",
    "correcta": "Más del 70%",
    "distractores": [
      "Menos del 30%",
      "Exactamente el 50%",
      "Más del 90%"
    ],
    "explicacion": "Más del 70% de los incidentes tienen origen interno, por accidente, descuido o intención."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factor humano",
    "pregunta": "Los tres objetivos principales del plan de trabajo relacionado con el factor humano son:",
    "correcta": "Difundir la política de seguridad, concienciar de amenazas y minimizar el impacto de incidencias",
    "distractores": [
      "Cifrar datos, instalar antivirus y monitorizar la red",
      "Contratar personal especializado, auditar sistemas y gestionar licencias",
      "Actualizar software, hacer copias de seguridad y revisar accesos"
    ],
    "explicacion": "Los tres objetivos son: formación/difusión, concienciación de amenazas y minimización del impacto."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad física",
    "pregunta": "Un principio básico de la seguridad física establece que:",
    "correcta": "Un atacante con acceso físico durante unos minutos puede tomar control absoluto sobre el equipo",
    "distractores": [
      "La seguridad física solo aplica a los servidores centrales, no a los equipos de sobremesa",
      "Los routers y switches no necesitan protección física especial",
      "El acceso físico es menos crítico que el acceso remoto vía red"
    ],
    "explicacion": "El texto advierte que cualquier equipo con acceso físico (incluyendo routers y switches) puede ser comprometido."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad física",
    "pregunta": "La seguridad física contempla aspectos como:",
    "correcta": "Control de acceso a instalaciones, protección ante fallos eléctricos y factores ambientales",
    "distractores": [
      "Políticas de contraseñas y autenticación de usuarios",
      "Cifrado de datos en tránsito y en reposo",
      "Análisis de vulnerabilidades y pentesting"
    ],
    "explicacion": "La seguridad física incluye: inventario de activos, controles de acceso, alimentación eléctrica y protección ambiental."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad lógica",
    "pregunta": "La seguridad lógica consiste en:",
    "correcta": "La aplicación de barreras y procedimientos que protejan el acceso a los datos de forma que solo sean accesibles por las personas autorizadas",
    "distractores": [
      "La protección física de los equipos mediante barreras tangibles",
      "El conjunto de normas que deben cumplir las personas con acceso a la organización",
      "El proceso de auditoría de cumplimiento normativo"
    ],
    "explicacion": "La seguridad lógica protege el acceso lógico a la información, complementando la seguridad física."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad organizativa",
    "pregunta": "La política de seguridad de una organización es definida por el IETF como:",
    "correcta": "Un conjunto de normas que deben cumplirse por todas las personas con acceso a la información o tecnología de la organización",
    "distractores": [
      "Un documento técnico de configuración de firewalls",
      "El manual de instalación de sistemas de detección de intrusos",
      "El contrato con el proveedor de servicios de seguridad gestionada"
    ],
    "explicacion": "El IETF Site Security Handbook define la política de seguridad como normas de obligado cumplimiento para todos."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad organizativa",
    "pregunta": "¿Cuál de estas NO es una característica de una buena política de seguridad según los apuntes?",
    "correcta": "Opcional: solo vinculante para el personal técnico",
    "distractores": [
      "Abarcable: implantable de forma efectiva",
      "Asequible: no debe entorpecer el trabajo",
      "Mejorable: con mecanismos de autoevaluación"
    ],
    "explicacion": "La política de seguridad debe ser de obligado cumplimiento para todos, no opcional."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factores de autenticación",
    "pregunta": "Los tres factores de autenticación clásicos son:",
    "correcta": "Algo que se sabe (conocimiento), algo que se tiene (posesión) y algo que se es (existencia/biometría)",
    "distractores": [
      "Contraseña, PIN y huella dactilar solamente",
      "Cifrado, firma digital y certificado",
      "Usuario, contraseña y correo electrónico"
    ],
    "explicacion": "Los tres factores son: conocimiento (saber), posesión (tener) e inherencia/existencia (ser)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factores de autenticación",
    "pregunta": "¿Cuál de estos es un ejemplo de factor de posesión?",
    "correcta": "Una tarjeta criptográfica o teléfono móvil",
    "distractores": [
      "La contraseña de acceso al sistema",
      "La huella dactilar del usuario",
      "El nombre de usuario en el sistema"
    ],
    "explicacion": "El factor de posesión es algo que se tiene: DNI, tarjeta, teléfono, clave criptográfica, etc."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factores de autenticación",
    "pregunta": "La autenticación de dos factores obligatoria en sistemas de nivel alto de seguridad de la administración pública española combina:",
    "correcta": "Conocimiento (usuario/contraseña) con posesión (dispositivo móvil o similar)",
    "distractores": [
      "Dos contraseñas distintas almacenadas en el mismo sistema",
      "Posesión (tarjeta) con posesión (teléfono)",
      "Biometría exclusivamente con factor de existencia"
    ],
    "explicacion": "El 2FA combina conocimiento y posesión (o existencia), siendo obligatorio en sistemas de nivel alto."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Identidad digital",
    "pregunta": "El rastro digital de una persona incluye:",
    "correcta": "Cuentas de correo, perfiles en RRSS, búsquedas, compras online, páginas visitadas e IPs de conexión",
    "distractores": [
      "Solo las publicaciones realizadas en redes sociales",
      "Únicamente los documentos firmados digitalmente",
      "Solo los datos almacenados en servidores públicos"
    ],
    "explicacion": "El rastro digital abarca todos los vestigios digitales: correos, RRSS, búsquedas, geolocalización, etc."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Identidad digital",
    "pregunta": "Los metadatos de un documento son:",
    "correcta": "Datos que describen al propio documento (autor, empresa, fecha, etc.) y pueden revelar información no deseada",
    "distractores": [
      "El contenido principal del documento cifrado",
      "La firma electrónica del autor",
      "Las contraseñas almacenadas en el documento"
    ],
    "explicacion": "Los metadatos (autor, empresa, versiones previas…) pueden revelar información sensible no controlada."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Firma electrónica",
    "pregunta": "Según la Ley 59/2003 de Firma Electrónica, la firma electrónica es:",
    "correcta": "El conjunto de datos en forma electrónica que pueden ser utilizados como medios de identificación del firmante",
    "distractores": [
      "Exclusivamente la huella dactilar digitalizada del firmante",
      "Una contraseña de un solo uso enviada por SMS",
      "El sello de tiempo de un documento digital"
    ],
    "explicacion": "La Ley 59/2003 define la firma electrónica como datos electrónicos que identifican al firmante."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Firma electrónica",
    "pregunta": "La firma electrónica reconocida se diferencia de la avanzada en que:",
    "correcta": "Está basada en un certificado digital reconocido y generada mediante un dispositivo seguro de creación de firma",
    "distractores": [
      "La reconocida se realiza con cualquier ordenador sin requisitos adicionales",
      "La avanzada requiere dispositivo seguro y la reconocida no",
      "La reconocida solo puede usarla la Administración Pública"
    ],
    "explicacion": "La firma reconocida = firma avanzada + certificado reconocido + dispositivo seguro de creación de firma."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Firma electrónica",
    "pregunta": "Los certificados de software emitidos por la FNMT tienen categoría de:",
    "correcta": "Firma electrónica avanzada (no reconocida)",
    "distractores": [
      "Firma electrónica reconocida con pleno valor legal",
      "Firma electrónica básica sin ningún valor legal",
      "Firma biométrica de existencia"
    ],
    "explicacion": "El ordenador en que se usa el certificado FNMT no es un 'dispositivo seguro de creación de firma', por eso solo es avanzada."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Certificados y DNIe",
    "pregunta": "El DNIe (DNI electrónico) comenzó su implantación en España en:",
    "correcta": "2006",
    "distractores": [
      "1999",
      "2015",
      "2010"
    ],
    "explicacion": "La implantación del DNIe comenzó en 2006, siendo España pionera en identidad digital nacional."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Certificados y DNIe",
    "pregunta": "¿Qué diferencia principal tiene el DNI 3.0 respecto al DNIe original?",
    "correcta": "El chip criptográfico dispone de interfaz dual que añade tecnología NFC",
    "distractores": [
      "El DNI 3.0 usa firma electrónica avanzada en lugar de reconocida",
      "El DNI 3.0 almacena la clave privada en el ordenador del usuario",
      "El DNI 3.0 elimina el chip criptográfico y usa solo datos biométricos"
    ],
    "explicacion": "El DNI 3.0, lanzado a partir de 2015, añade NFC al chip criptográfico del DNIe original."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Certificados y DNIe",
    "pregunta": "El DNIe ofrece firma electrónica reconocida porque:",
    "correcta": "Las operaciones de firma se realizan en el chip criptográfico, que es un dispositivo seguro de creación de firma",
    "distractores": [
      "El DNIe se conecta a servidores de la FNMT para cada firma",
      "El ordenador que usa el DNIe siempre está certificado como seguro",
      "La firma se realiza con la clave pública del titular"
    ],
    "explicacion": "La firma en el interior del chip (fuera del ordenador) cumple el requisito de 'dispositivo seguro de creación de firma'."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Certificados y DNIe",
    "pregunta": "Los tres objetivos fundamentales del diseño del DNIe son:",
    "correcta": "Identidad digital, firma electrónica avanzada y mejora del servicio al ciudadano",
    "distractores": [
      "Cifrado de documentos, autenticación biométrica y anonimato en la red",
      "Interoperabilidad europea, firma reconocida y control de acceso físico",
      "Almacenamiento seguro, no repudio y disponibilidad 24/7"
    ],
    "explicacion": "El diseño del DNIe responde a: identidad digital, firma avanzada y entrega inmediata (mejora del servicio)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Certificados y DNIe",
    "pregunta": "La autoridad responsable de emitir los certificados digitales incluidos en el DNIe es:",
    "correcta": "La Autoridad de Certificación del Ministerio del Interior",
    "distractores": [
      "La Fábrica Nacional de Moneda y Timbre (FNMT)",
      "El Centro Criptológico Nacional (CCN)",
      "El Instituto Nacional de Ciberseguridad (INCIBE)"
    ],
    "explicacion": "El chip criptográfico del DNIe incluye un certificado expedido por la AC del Ministerio del Interior."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Nuevos desafíos",
    "pregunta": "La desinformación se define en el texto como:",
    "correcta": "El empleo de información falsa con el objetivo de manipular la opinión pública",
    "distractores": [
      "El robo de datos personales mediante phishing",
      "La interceptación de comunicaciones cifradas",
      "La suplantación de identidad en redes sociales"
    ],
    "explicacion": "La desinformación usa fake news, cuentas falsas, etc., para alterar la opinión pública."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Nuevos desafíos",
    "pregunta": "El concepto de 'tú eres el producto' hace referencia a:",
    "correcta": "Los servicios digitales gratuitos que monetizan los datos personales de los usuarios",
    "distractores": [
      "El uso del DNIe como producto comercial",
      "La venta de licencias de software de seguridad",
      "Los sistemas de pago en línea basados en criptomonedas"
    ],
    "explicacion": "Servicios 'gratuitos' como Gmail, Google Maps o Facebook obtienen beneficio comercializando los datos de sus usuarios."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Nuevos desafíos",
    "pregunta": "El documento CCN-CERT BP/13 trata sobre:",
    "correcta": "Desinformación en el ciberespacio",
    "distractores": [
      "Gestión de incidentes de ciberseguridad en infraestructuras críticas",
      "Procedimientos de auditoría del ENS",
      "Guía de implantación de la ISO 27001"
    ],
    "explicacion": "CCN-CERT BP/13 'Desinformación en el ciberespacio' es el documento del CCN reseñado en la bibliografía."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es FALSA?",
    "correcta": "La Seguridad Informática y la Seguridad de la Información son términos completamente equivalentes",
    "distractores": [
      "La Seguridad de la Información amplía el ámbito de la Seguridad en TIs",
      "La ciberseguridad tiene carácter global y abarca infraestructuras críticas",
      "El factor humano es con frecuencia el eslabón más débil de la cadena de seguridad"
    ],
    "explicacion": "La Seguridad de la Información es más amplia que la Seguridad Informática: incluye el factor humano, organizativo, etc."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la firma electrónica es FALSA?",
    "correcta": "Los certificados FNMT de software generan firma electrónica reconocida",
    "distractores": [
      "El DNIe genera firma electrónica reconocida",
      "La firma avanzada permite identificar al firmante y detectar cambios",
      "La firma reconocida tiene el mismo valor que la manuscrita"
    ],
    "explicacion": "Los certificados FNMT de software solo generan firma avanzada, no reconocida, porque no usan dispositivo seguro."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre los principios de seguridad es FALSA?",
    "correcta": "Si se refuerza la parte tecnológica del sistema, la seguridad global mejora siempre",
    "distractores": [
      "La seguridad debe considerarse en todas las etapas del ciclo de vida del servicio",
      "La seguridad plena es una utopía: todo sistema es inseguro por definición",
      "El factor humano suele ser el eslabón más débil de la cadena"
    ],
    "explicacion": "Mejorar solo la tecnología no mejora la seguridad global si el factor humano u otro eslabón sigue siendo débil."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas NO es una dimensión de la seguridad según ISO 27000?",
    "correcta": "Rentabilidad",
    "distractores": [
      "Disponibilidad",
      "No repudio",
      "Autenticación"
    ],
    "explicacion": "ISO 27000 establece: disponibilidad, integridad, confidencialidad, no repudio y autenticación. La rentabilidad no es una dimensión."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el principio de Kerckhoff es CORRECTA?",
    "correcta": "Un criptosistema debe ser seguro aunque todo su funcionamiento sea público, excepto la clave",
    "distractores": [
      "Un criptosistema es seguro solo si su algoritmo es secreto",
      "La clave debe publicarse junto con el algoritmo para mayor seguridad",
      "La seguridad a través de la oscuridad es la aplicación práctica del principio de Kerckhoff"
    ],
    "explicacion": "Kerckhoff: la seguridad no depende del secreto del algoritmo, solo de la clave secreta."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Preguntas clave",
    "pregunta": "A la hora de analizar la seguridad de la información debemos plantearnos las siguientes preguntas básicas:",
    "correcta": "qué proteger, contra quién, cómo y hasta dónde",
    "distractores": [
      "qué proteger, de qué manera y hasta cuándo",
      "qué proteger, contra quién y cómo",
      "cuándo, cómo y dónde"
    ],
    "explicacion": "Las cuatro preguntas fundamentales son: qué proteger, contra quién, cómo y hasta dónde."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "La Disponibilidad supone...",
    "correcta": "que la información esté disponible cuando sea necesario y por quien esté autorizado a ello",
    "distractores": [
      "que la información sólo debe ser accesible por las personas autorizadas",
      "evitar que la información sea alterada o modificada sin autorización",
      "disponer de la información siempre que sea posible"
    ],
    "explicacion": "La Disponibilidad garantiza el acceso a la información en el momento y por quien corresponda."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "La diferencia entre datos e información radica en...",
    "correcta": "Los datos son la materia prima de la información mientras que ésta es el resultado de procesar los datos",
    "distractores": [
      "No hay diferencias",
      "Los datos son un tipo específico de información",
      "Los datos son la materia prima de la información mientras que ésta es un repositorio de datos global"
    ],
    "explicacion": "Los datos son materia prima; la información es el resultado de procesar y contextualizar esos datos."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "¿Qué aspectos trata de garantizar la Seguridad de la Información?",
    "correcta": "La disponibilidad, Integridad, confidencialidad, No repudio y Autenticación de la información con independencia del medio físico donde se almacene",
    "distractores": [
      "La Disponibilidad, Integridad, Confidencialidad y No repudio de la información",
      "La disponibilidad, Integridad, confidencialidad, No repudio y Autenticación de la información almacenada en los ordenadores",
      "La disponibilidad, Integridad, confidencialidad, No repudio y Clasificación de la información con independencia del medio físico donde se almacene"
    ],
    "explicacion": "La Seguridad de la Información protege disponibilidad, integridad, confidencialidad, no repudio y autenticación, sea cual sea el soporte."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Principios básicos",
    "pregunta": "La seguridad se considera un:",
    "correcta": "Proceso",
    "distractores": [
      "Producto",
      "Activo",
      "Elemento prescindible de la organización"
    ],
    "explicacion": "La seguridad es un proceso continuo, no un producto que se compra y se instala."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "La característica de la información asociada a la FIABILIDAD es la:",
    "correcta": "Integridad",
    "distractores": [
      "Autenticación",
      "No Repudio",
      "Confidencialidad"
    ],
    "explicacion": "La integridad garantiza que la información no ha sido alterada, lo que la hace fiable."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "La INTEGRIDAD es la característica de la información:",
    "correcta": "Relacionada con evitar que la información sea alterada o modificada sin autorización",
    "distractores": [
      "Relacionada con la no revelación de secretos",
      "Vinculada a la necesidad de que quien corresponda tenga acceso a dicha información cuando lo necesite",
      "Relacionada con evitar que la información sea accesible por personas no autorizadas"
    ],
    "explicacion": "La integridad protege la información frente a modificaciones no autorizadas."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad organizativa",
    "pregunta": "Algunas características que debe tener una Política de Seguridad son:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Mejorable e Inteligible",
      "Abarcable y de obligado cumplimiento",
      "Asequible"
    ],
    "explicacion": "Una buena política de seguridad debe ser mejorable, inteligible, abarcable, de obligado cumplimiento y asequible."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factor humano",
    "pregunta": "¿Cuáles son las principales medidas a considerar con el personal de una organización en relación a la seguridad?",
    "correcta": "Formación, Acuerdos de confidencialidad y Seguimiento",
    "distractores": [
      "Formación, Fiabilidad y Seguimiento",
      "Concienciación, Fiabilidad y Seguimiento",
      "Formación, Vigilancia y Aplicación de políticas de restricción de accesos"
    ],
    "explicacion": "Las tres medidas clave con el personal son: Formación, Acuerdos de confidencialidad y Seguimiento."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "La SEGURIDAD INFORMÁTICA es:",
    "correcta": "Una disciplina que se encarga de diseñar las normas, procedimientos, métodos y técnicas orientados a proveer condiciones seguras y confiables para el procesamiento de datos en sistemas informáticos",
    "distractores": [
      "Una disciplina que se encarga de diseñar las políticas de seguridad de las empresas",
      "Una metodología que se encarga de aplicar las normas, procedimientos, métodos y técnicas orientados a proveer condiciones seguras y confiables para el procesamiento de señales en sistemas informáticos",
      "Una disciplina que se encarga de diseñar las políticas de seguridad en las empresas y en la administración pública"
    ],
    "explicacion": "La Seguridad Informática es una disciplina de diseño de normas y técnicas para el procesamiento seguro de datos."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Factores de autenticación",
    "pregunta": "Los factores de autenticación son:",
    "correcta": "Conocimiento, posesión y existencia",
    "distractores": [
      "Identidad, posesión y existencia",
      "Identidad, conocimiento y existencia",
      "Identidad, posesión y conocimiento"
    ],
    "explicacion": "Los factores de autenticación según la UA1 de los apuntes son conocimiento (algo que se sabe), posesión (algo que se tiene) y existencia/identidad (algo que se es)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Oscuridad vs conocimiento",
    "pregunta": "¿En cuál de estas ciencias o técnicas no se aplica el principio de seguridad a través del conocimiento?",
    "correcta": "Esteganografía",
    "distractores": [
      "Criptología",
      "Biometría",
      "En ninguna de las indicadas"
    ],
    "explicacion": "La esteganografía basa su seguridad en ocultar la existencia del mensaje (oscuridad), no en el conocimiento de un secreto como la criptología o la biometría."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Dimensiones de seguridad",
    "pregunta": "Las dimensiones de la seguridad asociadas a la FIABILIDAD de la información son:",
    "correcta": "Autenticación e Integridad",
    "distractores": [
      "Confidencialidad e Integridad",
      "Autenticación y Confidencialidad",
      "No repudio e Integridad"
    ],
    "explicacion": "Las dimensiones de la seguridad asociadas a la fiabilidad son confidencialidad e integridad (UA1/Tema 1)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Seguridad lógica",
    "pregunta": "El control de soportes móviles de almacenamiento de datos corresponde a",
    "correcta": "La seguridad física y del entorno",
    "distractores": [
      "La seguridad en las comunicaciones",
      "La seguridad lógica",
      "La Seguridad organizativa"
    ],
    "explicacion": "El control de soportes móviles de almacenamiento de datos corresponde a la seguridad lógica (UA1/Tema 1)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Definiciones",
    "pregunta": "¿Qué se entiende por VULNERABILIDAD?",
    "correcta": "Una debilidad del sistema que puede ser utilizada accidental o intencionadamente",
    "distractores": [
      "Una debilidad del sistema ocasionada por un ataque informático",
      "Una debilidad del sistema que sólo puede ser utilizada accidentalmente",
      "Una debilidad del sistema que sólo puede ser utilizada intencionadamente"
    ],
    "explicacion": "Una vulnerabilidad es una debilidad del sistema que puede ser explotada de forma fortuita o intencionada (UA1/Tema 1)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Visión integral",
    "pregunta": "¿Qué vertientes es necesario considerar para lograr una concepción integral de la seguridad?",
    "correcta": "Negocio, normativa y amenazas tecnológicas",
    "distractores": [
      "Legislación, negocio y control de riesgos",
      "Amenazas tecnológicas, normativa y control de riesgos",
      "Normativa, legislación y control de riesgos"
    ],
    "explicacion": "Para lograr una concepción integral de la seguridad es necesario considerar tres vertientes: normativa, legislación y control de riesgos (UA1/Tema 1)."
  },
  {
    "temaNum": 1,
    "temaNombre": "Tema 1: Visión Integral de la Seguridad",
    "seccion": "Conceptos básicos",
    "pregunta": "¿Qué preguntas se deben considerar en una de las técnicas más habituales para analizar la seguridad de una organización?",
    "correcta": "Qué proteger, contra quién, cómo y hasta dónde",
    "distractores": [
      "Qué, cómo, y hasta dónde proteger",
      "Qué, cómo y contra quién proteger",
      "Qué, cómo, cuándo y dónde proteger"
    ],
    "explicacion": "Una de las técnicas habituales consiste en plantearse las cuatro preguntas fundamentales: qué proteger, contra quién, cómo y hasta dónde (UA1/Tema 1)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave simétrica",
    "pregunta": "La criptografía de clave simétrica asegura principalmente:",
    "correcta": "Confidencialidad",
    "distractores": [
      "No repudio",
      "Disponibilidad",
      "Trazabilidad"
    ],
    "explicacion": "La clave simétrica cifra y descifra con la misma clave. Su uso principal es la confidencialidad."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave simétrica",
    "pregunta": "El problema práctico principal de la clave simétrica en comunicaciones es:",
    "correcta": "Compartir la clave de forma segura",
    "distractores": [
      "Que no cifra mensajes largos",
      "Que no permite confidencialidad",
      "Que exige certificados X.509 siempre"
    ],
    "explicacion": "Funciona bien, pero emisor y receptor deben conocer la misma clave sin que un atacante la obtenga."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "La criptografía asimétrica utiliza:",
    "correcta": "Una pareja de claves: pública y privada",
    "distractores": [
      "Una única clave compartida",
      "Solo contraseñas",
      "Una clave pública para todos los usuarios del sistema"
    ],
    "explicacion": "La clave pública puede difundirse; la privada debe quedar protegida por su titular."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "Si alguien cifra un mensaje con la clave pública de Ana, ¿quién puede descifrarlo?",
    "correcta": "Ana, con su clave privada",
    "distractores": [
      "Cualquiera con la clave pública de Ana",
      "La autoridad certificadora siempre",
      "El emisor con su contraseña"
    ],
    "explicacion": "Cifrar con clave pública del receptor aporta confidencialidad: solo descifra su clave privada."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Firma digital",
    "pregunta": "La firma digital se basa normalmente en:",
    "correcta": "Cifrado asimétrico de un resumen/hash",
    "distractores": [
      "Cifrado simétrico del documento completo",
      "Cifrado simétrico de la clave pública",
      "Esteganografía de la contraseña"
    ],
    "explicacion": "Se calcula un hash del documento y se firma con la clave privada del firmante."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Firma digital",
    "pregunta": "Una firma digital aporta especialmente:",
    "correcta": "Autenticación y no repudio",
    "distractores": [
      "Confidencialidad y disponibilidad",
      "Disponibilidad y copia de seguridad",
      "Anonimato y esteganografía"
    ],
    "explicacion": "Permite comprobar quién firmó y que el firmante no pueda negarlo fácilmente."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Hash",
    "pregunta": "Una función resumen o hash sirve principalmente para:",
    "correcta": "Comprobar la integridad",
    "distractores": [
      "Recuperar el texto claro",
      "Cifrar con clave pública",
      "Ocultar que existe el mensaje"
    ],
    "explicacion": "Un hash es una huella. Si cambia el documento, debe cambiar el resumen."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Hash",
    "pregunta": "Si dos mensajes distintos generan el mismo hash, se llama:",
    "correcta": "Colisión",
    "distractores": [
      "No repudio",
      "Sal",
      "Confusión"
    ],
    "explicacion": "Una colisión es hash(A)=hash(B) con A distinto de B."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Hash",
    "pregunta": "Una propiedad deseable de un hash criptográfico es:",
    "correcta": "Que sea computacionalmente difícil encontrar colisiones",
    "distractores": [
      "Que permita recuperar siempre el mensaje original",
      "Que use la misma clave que AES",
      "Que tenga siempre salida de 64 bits"
    ],
    "explicacion": "Los hashes criptográficos deben ser unidireccionales y resistentes a colisiones."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Contraseñas",
    "pregunta": "La sal en el almacenamiento de contraseñas sirve para:",
    "correcta": "Evitar hashes iguales y dificultar diccionarios precalculados",
    "distractores": [
      "Cifrar el disco entero",
      "Sustituir al certificado digital",
      "Reducir la longitud de la contraseña"
    ],
    "explicacion": "La sal se combina con la contraseña antes del hash. No necesita ser secreta."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "DES",
    "pregunta": "DES trabaja con bloques de:",
    "correcta": "64 bits",
    "distractores": [
      "128 bits",
      "56 bits",
      "256 bits"
    ],
    "explicacion": "DES cifra bloques de 64 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "DES",
    "pregunta": "La clave efectiva de DES es:",
    "correcta": "56 bits",
    "distractores": [
      "64 bits efectivos",
      "128 bits",
      "168 bits efectivos"
    ],
    "explicacion": "DES suele expresarse con 64 bits, pero 8 son de paridad; efectivos son 56."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "DES",
    "pregunta": "El estado actual de DES es:",
    "correcta": "Obsoleto por su clave corta",
    "distractores": [
      "Recomendado para TLS moderno",
      "Más seguro que AES-256",
      "Algoritmo de firma digital"
    ],
    "explicacion": "Su espacio de claves de 56 bits permite ataques por fuerza bruta con medios actuales."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Triple DES",
    "pregunta": "Triple DES consiste, de forma general, en:",
    "correcta": "Aplicar DES tres veces",
    "distractores": [
      "Aplicar AES tres veces",
      "Usar bloques de 192 bits",
      "Firmar tres hashes"
    ],
    "explicacion": "TDES/3DES encadena operaciones DES para aumentar seguridad respecto a DES simple."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Triple DES",
    "pregunta": "El tamaño de bloque de Triple DES es:",
    "correcta": "64 bits",
    "distractores": [
      "128 bits",
      "192 bits",
      "256 bits"
    ],
    "explicacion": "Aunque use más operaciones y claves que DES, hereda el bloque de 64 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "AES",
    "pregunta": "AES, en el estándar habitual, trabaja con bloques de:",
    "correcta": "128 bits",
    "distractores": [
      "64 bits",
      "56 bits",
      "Variable entre 64 y 256 bits"
    ],
    "explicacion": "AES fija bloque de 128 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "AES",
    "pregunta": "AES permite claves de:",
    "correcta": "128, 192 o 256 bits",
    "distractores": [
      "56 o 64 bits",
      "Solo 128 bits",
      "1024 o 2048 bits"
    ],
    "explicacion": "Las tres longitudes típicas de AES son 128, 192 y 256 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "AES",
    "pregunta": "AES sustituyó principalmente a:",
    "correcta": "DES",
    "distractores": [
      "RSA",
      "SHA-2",
      "DSA"
    ],
    "explicacion": "AES fue adoptado como estándar moderno de cifrado simétrico frente a DES."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "IDEA",
    "pregunta": "IDEA es un algoritmo:",
    "correcta": "Simétrico de bloque",
    "distractores": [
      "Asimétrico de firma",
      "Función resumen",
      "Protocolo de certificados"
    ],
    "explicacion": "IDEA es un cifrador simétrico por bloques."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "IDEA",
    "pregunta": "IDEA usa una clave de:",
    "correcta": "128 bits",
    "distractores": [
      "56 bits",
      "2048 bits",
      "512 bits"
    ],
    "explicacion": "IDEA se asocia clásicamente a claves de 128 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "ECB se considera problemático porque:",
    "correcta": "Revela patrones si se repiten bloques de texto claro",
    "distractores": [
      "Necesita clave pública",
      "Solo funciona con RSA",
      "No puede cifrar bloques"
    ],
    "explicacion": "En ECB, bloques iguales producen bloques cifrados iguales con la misma clave."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "CBC necesita normalmente:",
    "correcta": "Un IV aleatorio o impredecible",
    "distractores": [
      "Una clave pública X.509",
      "Un certificado raíz",
      "Una firma manuscrita"
    ],
    "explicacion": "CBC encadena bloques y necesita IV para que mensajes iguales no empiecen igual."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "GCM es importante porque aporta:",
    "correcta": "Cifrado autenticado: confidencialidad e integridad/autenticación",
    "distractores": [
      "Solo compresión",
      "Solo esteganografía",
      "Solo no repudio legal"
    ],
    "explicacion": "AES-GCM es un modo AEAD: cifra y autentica datos."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "CTR convierte un cifrador de bloque en algo parecido a:",
    "correcta": "Un cifrador de flujo",
    "distractores": [
      "Una función hash",
      "Un certificado digital",
      "Una firma reconocida"
    ],
    "explicacion": "CTR genera un flujo a partir de contador + cifrador de bloque."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RC4",
    "pregunta": "RC4 es un algoritmo:",
    "correcta": "Simétrico de flujo",
    "distractores": [
      "Simétrico de bloque",
      "Asimétrico",
      "Función resumen"
    ],
    "explicacion": "RC4 genera un flujo pseudoaleatorio que se combina con el texto."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RC4",
    "pregunta": "El estado actual de RC4 es:",
    "correcta": "Inseguro/obsoleto",
    "distractores": [
      "Recomendado para TLS actual",
      "Equivalente a AES-GCM",
      "Firma digital reconocida"
    ],
    "explicacion": "RC4 tiene debilidades conocidas y no debe usarse en diseños modernos."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ChaCha20",
    "pregunta": "ChaCha20 es:",
    "correcta": "Un cifrador simétrico de flujo moderno",
    "distractores": [
      "Un algoritmo de firma",
      "Un certificado digital",
      "Una función resumen de la familia SHA"
    ],
    "explicacion": "ChaCha20 es un cifrador de flujo moderno; suele combinarse con Poly1305 para AEAD."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ChaCha20-Poly1305",
    "pregunta": "ChaCha20-Poly1305 aporta:",
    "correcta": "Cifrado autenticado",
    "distractores": [
      "Solo clave pública",
      "Solo compresión",
      "Solo firma manuscrita"
    ],
    "explicacion": "La combinación cifra y autentica el mensaje."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RSA",
    "pregunta": "RSA se basa en la dificultad de:",
    "correcta": "Factorizar números enteros grandes",
    "distractores": [
      "Encontrar colisiones SHA-1",
      "Romper bloques de 64 bits",
      "Ocultar mensajes en imágenes"
    ],
    "explicacion": "RSA usa operaciones relacionadas con números primos grandes y factorización."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RSA",
    "pregunta": "RSA puede utilizarse para:",
    "correcta": "Cifrado e identidad/firma, según el esquema",
    "distractores": [
      "Solo cifrado simétrico",
      "Solo esteganografía",
      "Solo calcular hashes sin clave"
    ],
    "explicacion": "RSA es un algoritmo asimétrico usado históricamente para cifrado, intercambio de claves y firma."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Diffie-Hellman",
    "pregunta": "Diffie-Hellman sirve principalmente para:",
    "correcta": "Intercambio/acuerdo de claves",
    "distractores": [
      "Firmar documentos",
      "Crear hashes",
      "Cifrar bloques de 64 bits"
    ],
    "explicacion": "DH permite que dos partes acuerden un secreto por un canal inseguro."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ECDH",
    "pregunta": "ECDH es:",
    "correcta": "Diffie-Hellman sobre curvas elípticas",
    "distractores": [
      "RSA sobre bloques de 64 bits",
      "Un modo de AES",
      "Una variante de MD5"
    ],
    "explicacion": "ECDH usa curvas elípticas para acuerdo de claves."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "DSA",
    "pregunta": "DSA se utiliza para:",
    "correcta": "Firma digital",
    "distractores": [
      "Cifrado de discos",
      "Cifrado simétrico por bloques",
      "Esteganografía en imágenes"
    ],
    "explicacion": "DSA significa Digital Signature Algorithm."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ECDSA",
    "pregunta": "ECDSA se utiliza para:",
    "correcta": "Firma digital con curvas elípticas",
    "distractores": [
      "Cifrado de flujo",
      "Hash de contraseñas con sal",
      "Modo de operación CBC"
    ],
    "explicacion": "ECDSA es la versión de firma digital basada en curvas elípticas."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ElGamal",
    "pregunta": "ElGamal es un algoritmo:",
    "correcta": "Asimétrico",
    "distractores": [
      "Simétrico de bloque",
      "Función resumen",
      "Modo de operación"
    ],
    "explicacion": "ElGamal pertenece a la familia de algoritmos de clave pública."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Certificado digital",
    "pregunta": "Un certificado digital contiene normalmente:",
    "correcta": "La clave pública del titular",
    "distractores": [
      "La clave privada del titular",
      "La contraseña del titular",
      "La clave privada de la autoridad certificadora"
    ],
    "explicacion": "El certificado vincula identidad y clave pública, firmado por una autoridad."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Certificado digital",
    "pregunta": "La clave privada del usuario debe:",
    "correcta": "Permanecer protegida y no difundirse",
    "distractores": [
      "Publicarse junto al certificado",
      "Guardarse en todos los servidores",
      "Enviarse a cada receptor"
    ],
    "explicacion": "La seguridad de la identidad digital depende de proteger la clave privada."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "PKI",
    "pregunta": "Un sistema vertical de confianza se basa en:",
    "correcta": "Autoridades de certificación y certificados digitales",
    "distractores": [
      "Usuarios que se firman mutuamente sin jerarquía",
      "Solo claves simétricas compartidas",
      "Ocultar el algoritmo"
    ],
    "explicacion": "La PKI usa entidades de confianza para certificar claves públicas."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "PGP",
    "pregunta": "PGP/GnuPG se asocia principalmente a un modelo:",
    "correcta": "Horizontal o anillo/red de confianza",
    "distractores": [
      "Vertical con una única autoridad obligatoria",
      "Solo biométrico",
      "Solo gubernamental"
    ],
    "explicacion": "PGP puede usar una red de confianza en la que usuarios firman claves de otros usuarios."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "TLS",
    "pregunta": "TLS combina típicamente:",
    "correcta": "Certificados, asimétrica para acordar secreto y simétrica para cifrar tráfico",
    "distractores": [
      "Solo DES sin certificados",
      "Solo hash sin cifrado",
      "Solo esteganografía"
    ],
    "explicacion": "TLS negocia algoritmos, autentica con certificados y cifra la sesión con clave simétrica."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "HTTPS",
    "pregunta": "HTTPS es, de forma simplificada:",
    "correcta": "HTTP sobre TLS",
    "distractores": [
      "HTTP sobre DES sin certificados",
      "Un hash de páginas web",
      "Una firma electrónica reconocida"
    ],
    "explicacion": "HTTPS añade TLS a HTTP para proteger la comunicación web."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "IPsec/VPN",
    "pregunta": "IPsec y VPN se relacionan con:",
    "correcta": "Cifrado de comunicaciones de red",
    "distractores": [
      "Hash de contraseñas",
      "Firma manuscrita",
      "Reconocimiento biométrico"
    ],
    "explicacion": "Sirven para proteger paquetes o túneles de comunicación."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Criptografía",
    "pregunta": "La criptografía busca principalmente:",
    "correcta": "Proteger el contenido de la información",
    "distractores": [
      "Ocultar siempre la existencia del mensaje",
      "Romper claves",
      "Eliminar la necesidad de autenticación"
    ],
    "explicacion": "La criptografía protege el contenido; la esteganografía oculta la existencia."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Criptoanálisis",
    "pregunta": "El criptoanálisis consiste en:",
    "correcta": "Intentar romper o comprometer un criptosistema",
    "distractores": [
      "Firmar documentos con DNIe",
      "Crear copias de seguridad",
      "Ocultar un mensaje en una imagen"
    ],
    "explicacion": "Criptoanálisis es el conjunto de técnicas de ataque contra sistemas criptográficos."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Criptología",
    "pregunta": "Criptología agrupa:",
    "correcta": "Criptografía y criptoanálisis",
    "distractores": [
      "Solo DES y AES",
      "Solo certificados X.509",
      "Solo biometría y esteganografía"
    ],
    "explicacion": "Criptología es el campo general que engloba defensa y análisis/ataque."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Esteganografía",
    "pregunta": "La esteganografía se diferencia de la criptografía porque:",
    "correcta": "Oculta la existencia del mensaje",
    "distractores": [
      "Siempre usa clave pública",
      "Siempre garantiza no repudio",
      "Solo sirve para contraseñas"
    ],
    "explicacion": "Un mensaje esteganografiado intenta pasar desapercibido dentro de otro soporte."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Biometría",
    "pregunta": "La biometría se relaciona principalmente con:",
    "correcta": "Autenticación",
    "distractores": [
      "Disponibilidad",
      "Compresión",
      "Cifrado por bloques"
    ],
    "explicacion": "La biometría identifica/autentica mediante rasgos físicos o conductuales."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Factores de autenticación",
    "pregunta": "Los tres tipos clásicos de factores de autenticación son:",
    "correcta": "Conocimiento, posesión e inherencia/existencia",
    "distractores": [
      "Hash, sal y cifrado",
      "DES, AES y RSA",
      "Confidencialidad, integridad y disponibilidad"
    ],
    "explicacion": "Algo que sabes, algo que tienes y algo que eres."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "WiFi",
    "pregunta": "WEP se considera:",
    "correcta": "Inseguro/obsoleto",
    "distractores": [
      "El estándar más moderno",
      "Un algoritmo asimétrico",
      "Una firma digital"
    ],
    "explicacion": "WEP fue superado por WPA/WPA2/WPA3 por sus debilidades."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "WiFi",
    "pregunta": "WPA2 se asocia normalmente con:",
    "correcta": "AES/CCMP",
    "distractores": [
      "DES/ECB",
      "RSA como cifrado de flujo",
      "MD5 como modo de operación"
    ],
    "explicacion": "WPA2 suele asociarse al uso de AES con CCMP."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "WiFi",
    "pregunta": "WPA3 mejora especialmente:",
    "correcta": "La protección del proceso de autenticación/acuerdo de claves",
    "distractores": [
      "El uso de DES",
      "La firma manuscrita",
      "La esteganografía en imágenes"
    ],
    "explicacion": "WPA3 introduce mejoras frente a WPA2, como SAE en redes personales."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Propiedades",
    "pregunta": "¿Qué mecanismo se asocia mejor a integridad?",
    "correcta": "Hash/función resumen",
    "distractores": [
      "DES",
      "Esteganografía",
      "DH sin autenticación"
    ],
    "explicacion": "La integridad se comprueba con funciones resumen y mecanismos de autenticación."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Propiedades",
    "pregunta": "¿Qué mecanismo se asocia mejor a confidencialidad?",
    "correcta": "Cifrado",
    "distractores": [
      "Hash sin clave",
      "Firma digital solamente",
      "Certificado sin usar"
    ],
    "explicacion": "La confidencialidad requiere que el contenido no sea accesible a no autorizados."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Propiedades",
    "pregunta": "¿Qué mecanismo se asocia mejor a no repudio?",
    "correcta": "Firma digital",
    "distractores": [
      "Cifrado simétrico compartido",
      "Compresión",
      "ECB"
    ],
    "explicacion": "El no repudio exige poder vincular el acto al firmante."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas frases es falsa?",
    "correcta": "Un hash permite reconstruir el mensaje original",
    "distractores": [
      "AES es simétrico",
      "RSA es asimétrico",
      "DES usa clave efectiva de 56 bits"
    ],
    "explicacion": "Un hash criptográfico es unidireccional."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas frases es falsa?",
    "correcta": "Un certificado digital contiene la clave privada del titular",
    "distractores": [
      "Un certificado contiene la clave pública del titular",
      "Una CA puede firmar certificados",
      "La clave privada debe protegerse"
    ],
    "explicacion": "El certificado no debe contener la clave privada."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas frases es falsa?",
    "correcta": "AES estándar usa bloques de 64 bits",
    "distractores": [
      "AES estándar usa bloques de 128 bits",
      "DES usa bloques de 64 bits",
      "AES permite claves de 128/192/256 bits"
    ],
    "explicacion": "AES estándar usa bloque de 128 bits."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas frases es falsa?",
    "correcta": "PGP se basa obligatoriamente en una autoridad certificadora central",
    "distractores": [
      "PGP se asocia a confianza horizontal",
      "PKI se asocia a confianza vertical",
      "TLS suele usar certificados"
    ],
    "explicacion": "PGP/GnuPG se asocia al modelo horizontal o web of trust."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Privacidad",
    "pregunta": "¿Cómo se define el concepto de PRIVACIDAD?",
    "correcta": "Cómo el ámbito de la vida privada que se debe proteger de cualquier intromisión",
    "distractores": [
      "Cómo el ámbito de la vida pública que se debe proteger de cualquier intromisión",
      "Cómo el ámbito de la vida privada que se debe proteger de la intromisión del estado",
      "Cómo el ámbito de la vida pública que se debe proteger de la intromisión de los medios de comunicación"
    ],
    "explicacion": "La privacidad es el ámbito de la vida privada que debe protegerse de cualquier intromisión."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Privacidad",
    "pregunta": "¿Cuáles son las tres dimensiones más importantes de la seguridad que configuran la privacidad?",
    "correcta": "Integridad, Confidencialidad y Autenticación",
    "distractores": [
      "Integridad, Confidencialidad y No repudio",
      "Autenticación, Trazabilidad y No repudio",
      "Confidencialidad, Temporalidad y No repudio"
    ],
    "explicacion": "Según el banco de preguntas oficial de la asignatura, las dimensiones de la seguridad que configuran la privacidad son integridad, confidencialidad y autenticación."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Privacidad",
    "pregunta": "¿Qué requisito básico de seguridad es necesario para garantizar la privacidad en los medios digitales?",
    "correcta": "el cifrado de la información",
    "distractores": [
      "enviar los mensajes a través de correo electrónico",
      "la securización de las redes digitales",
      "no enviar mensajes a través de Internet"
    ],
    "explicacion": "El cifrado es el requisito básico fundamental para garantizar la privacidad en medios digitales."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave simétrica",
    "pregunta": "¿Qué problema principal presentan los algoritmos de clave privada?",
    "correcta": "La transmisión de la clave al destinatario del mensaje de forma segura",
    "distractores": [
      "Su excesiva lentitud",
      "La debilidad de la clave",
      "La complejidad para su uso"
    ],
    "explicacion": "El problema principal de la clave simétrica es distribuir la clave de forma segura sin que un atacante la intercepte."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave simétrica",
    "pregunta": "¿Qué significa la SIMETRÍA en el concepto de clave simétrica?",
    "correcta": "Que se utiliza la misma clave tanto para cifrar como para descifrar",
    "distractores": [
      "Que se utiliza una pareja de claves: una para cifrar y otra para descifrar",
      "Que se utiliza una clave para cifrar pero no es necesario ninguna para descifrar",
      "Que no se requieren claves para el cifrado"
    ],
    "explicacion": "Simétrica = misma clave para cifrar y descifrar."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave simétrica",
    "pregunta": "¿Qué aspectos determinan la potencia de los sistemas de cifrado simétrico?",
    "correcta": "La potencia o calidad del algoritmo y el tamaño de la clave",
    "distractores": [
      "La calidad de la clave y la extensión del algoritmo",
      "La cantidad de veces que se puede utilizar el algoritmo y el tamaño de la clave",
      "El grado de desconocimiento que se tenga del algoritmo (secreto) y la longitud de la clave"
    ],
    "explicacion": "La potencia del cifrado simétrico depende de la calidad del algoritmo y del tamaño de la clave."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "DES",
    "pregunta": "¿Qué algoritmo de clave privada ha sustituido al algoritmo DES (Data Encryption Standard)?",
    "correcta": "Triple DES (TDES)",
    "distractores": [
      "Doble DES (DDES)",
      "Cuádruple DES (QDES)",
      "Séxtuple DES (SDES)"
    ],
    "explicacion": "El Triple DES (TDES/3DES) sustituyó al DES original para aumentar la seguridad."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "¿Qué posible problema se puede plantear en el uso de sistemas de clave pública?",
    "correcta": "El intercambio de las claves públicas entre los agentes que establecen la comunicación",
    "distractores": [
      "La dificultad para utilizar los algoritmos requeridos",
      "El coste computacional",
      "La pérdida o sustracción de la clave privada"
    ],
    "explicacion": "El intercambio seguro de claves públicas es uno de los problemas prácticos en los sistemas asimétricos, resuelto habitualmente mediante infraestructura de clave pública (PKI) y certificados."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "¿En qué se basa un algoritmo de clave asimétrica?",
    "correcta": "En el uso de dos claves apareadas: una para cifrar y otra para descifrar",
    "distractores": [
      "En el uso de claves de distinta longitud para cifrar cada mensaje",
      "En la aplicación del algoritmo de Diffie-John",
      "En el uso de tres claves: dos para cifrar y otra para descifrar"
    ],
    "explicacion": "La asimétrica usa una pareja de claves matemáticamente relacionadas: pública y privada."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RSA",
    "pregunta": "¿En qué se basa el funcionamiento del sistema RSA como algoritmo de cifrado de clave asimétrica?",
    "correcta": "En la imposibilidad computacional de factorizar números enteros muy grandes",
    "distractores": [
      "En la longitud de los números enteros",
      "En ocultar la clave pública para evitar el descifrado del mensaje",
      "En la imposibilidad de dividir números irracionales"
    ],
    "explicacion": "RSA se basa en la dificultad computacional de factorizar el producto de dos números primos grandes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RSA",
    "pregunta": "¿Qué es RSA?",
    "correcta": "Un algoritmo de cifrado asimétrico",
    "distractores": [
      "Un estándar de codificación",
      "Un algoritmo de cifrado en bloque",
      "Un algoritmo de cifrado en flujo"
    ],
    "explicacion": "RSA es el algoritmo de cifrado asimétrico más conocido, basado en factorización."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "¿Qué familia de algoritmos criptográficos limita el tamaño de los datos de entrada?",
    "correcta": "Los algoritmos de cifrado asimétrico",
    "distractores": [
      "Los algoritmos de resumen",
      "Ninguna de las familias indicadas",
      "Los algoritmos de cifrado simétrico"
    ],
    "explicacion": "Los algoritmos asimétricos como RSA limitan el tamaño máximo de los datos que pueden cifrar directamente."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "ElGamal",
    "pregunta": "¿Qué es ElGamal?",
    "correcta": "Un algoritmo de cifrado asimétrico basado en la dificultad de calcular logaritmos discretos",
    "distractores": [
      "Un algoritmo de cifrado simétrico basado en la dificultad de factorizar grandes números",
      "Un algoritmo de cifrado simétrico basado en la dificultad de calcular logaritmos discretos",
      "Un algoritmo de cifrado asimétrico basado en la dificultad de factorizar grandes números"
    ],
    "explicacion": "ElGamal es asimétrico y se basa en la dificultad del logaritmo discreto."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Clave asimétrica",
    "pregunta": "¿Qué dimensión de la seguridad hemos de reforzar si queremos evitar un ataque del tipo 'Man in the Middle'?",
    "correcta": "Autenticación",
    "distractores": [
      "Confidencialidad",
      "Disponibilidad",
      "Integridad"
    ],
    "explicacion": "El Man in the Middle se evita con autenticación fuerte (p.ej. criptografía de clave pública con certificados)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Firma digital",
    "pregunta": "El mecanismo de firma digital",
    "correcta": "Se realiza mediante el cifrado asimétrico de resúmenes",
    "distractores": [
      "Se realiza mediante el cifrado simétrico de resúmenes",
      "Se realiza mediante el cifrado de claves",
      "Ninguna de las anteriores"
    ],
    "explicacion": "La firma digital cifra el hash/resumen del mensaje con la clave privada del firmante (cifrado asimétrico)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Diffie-Hellman",
    "pregunta": "El algoritmo de Diffie-Hellman es:",
    "correcta": "Un algoritmo asimétrico para la negociación de claves simétricas",
    "distractores": [
      "Un algoritmo simétrico para la transmisión de claves asimétricas",
      "Un algoritmo simétrico para la negociación de claves asimétricas",
      "Un algoritmo asimétrico para la transmisión de claves simétricas"
    ],
    "explicacion": "Diffie-Hellman permite a dos partes negociar una clave simétrica compartida a través de un canal inseguro."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "PKI",
    "pregunta": "¿Qué caracteriza a los sistemas criptográficos HORIZONTALES?",
    "correcta": "Asumen que todos los agentes que intervienen en la comunicación poseen el mismo nivel de confianza",
    "distractores": [
      "Usan una clave pública lineal",
      "Asumen que todos los agentes que intervienen en la comunicación poseen distintos niveles de confianza",
      "Asumen que todos los agentes que intervienen en la comunicación utilizan la misma clave pública"
    ],
    "explicacion": "Los sistemas horizontales (como PGP/web of trust) asumen igualdad de confianza entre todos los agentes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "PGP",
    "pregunta": "El software PGP",
    "correcta": "Se basa en un modelo horizontal",
    "distractores": [
      "Se basa en un modelo vertical",
      "Se basa en el empleo de certificados digitales",
      "Todas las anteriores"
    ],
    "explicacion": "PGP se basa en el modelo horizontal de confianza (web of trust / telaraña de confianza)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "PKI",
    "pregunta": "Los sistemas criptográficos VERTICALES:",
    "correcta": "Utilizan Autoridades de Certificación para garantizar la validez y autenticidad de las claves públicas",
    "distractores": [
      "Se basan en el concepto de telaraña de confianza",
      "Necesitan que todos los certificados estén firmados por la misma autoridad",
      "Ninguna de las respuestas es correcta"
    ],
    "explicacion": "Los sistemas verticales usan una jerarquía de Autoridades de Certificación (CA)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Certificado digital",
    "pregunta": "Un certificado digital",
    "correcta": "Contiene la firma de la clave pública del usuario",
    "distractores": [
      "Contiene la firma de la clave privada del usuario",
      "Contiene la clave privada de la Autoridad Certificadora",
      "Ninguna de las anteriores es cierta"
    ],
    "explicacion": "El certificado digital contiene la clave pública del usuario firmada por la Autoridad Certificadora."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Certificado digital",
    "pregunta": "¿Cuáles son las partes más importantes de un certificado digital?",
    "correcta": "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, la firma digital realizada con privada de la Autoridad de Certificación",
    "distractores": [
      "Clave privada, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la de la Autoridad de Certificación",
      "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la del titular",
      "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la de la Autoridad de Certificación"
    ],
    "explicacion": "El certificado contiene: clave pública del titular, sus datos de identidad, operaciones permitidas y la firma de la CA con su clave privada."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Certificado digital",
    "pregunta": "¿Qué es una CRL?",
    "correcta": "Una lista de certificados revocados por una Autoridad",
    "distractores": [
      "Una lista de cifradores aceptada en una transacción SSL",
      "Una lista de direcciones MAC cuyo acceso se permite o prohibe explícitamente",
      "Una lista de direcciones de correo seguras"
    ],
    "explicacion": "CRL = Certificate Revocation List: lista de certificados que han sido revocados antes de su expiración."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "OpenSSL",
    "pregunta": "¿Cómo se deriva una clave de cifrado en OpenSSL a partir de la contraseña?",
    "correcta": "Ninguna de las respuestas indicadas es correcta",
    "distractores": [
      "Con un cifrador asimétrico",
      "Con un cifrador simétrico de flujo",
      "Con un cifrador simétrico de bloque"
    ],
    "explicacion": "En OpenSSL, la derivación de claves a partir de contraseña se realiza a través de funciones de derivación de claves (KDF) como PBKDF2, por lo que ninguna de las opciones anteriores (cifradores) es correcta."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "AES",
    "pregunta": "Si ciframos un documento utilizando OpenSSL con el algoritmo AES-256 y contraseña, ¿cómo será el tamaño del documento cifrado en relación con el original?",
    "correcta": "16 bytes mayor, más el padding hasta múltiplo de 16 bytes",
    "distractores": [
      "16 bytes mayor, más el padding hasta múltiplo de 32 bytes",
      "Idéntico",
      "16 bytes mayor"
    ],
    "explicacion": "AES-256 con contraseña añade 16 bytes de cabecera (salt) más el padding necesario hasta múltiplo de 16 bytes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "RC4",
    "pregunta": "Si ciframos un documento utilizando OpenSSL con clave y vector de inicialización con el algoritmo RC4, ¿cómo será el tamaño del documento cifrado en relación con el original?",
    "correcta": "Idéntico",
    "distractores": [
      "16 bytes mayor, más el padding hasta múltiplo de 32 bytes",
      "16 bytes mayor",
      "16 bytes mayor, más el padding hasta múltiplo de 16 bytes"
    ],
    "explicacion": "RC4 es un cifrador de flujo: el texto cifrado tiene el mismo tamaño que el original, sin padding."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "AES",
    "pregunta": "¿Cuál es el tamaño de bloque del cifrador AES?",
    "correcta": "128 bits",
    "distractores": [
      "256 bits",
      "194 bits",
      "64 bits"
    ],
    "explicacion": "AES siempre usa bloques de 128 bits, independientemente del tamaño de la clave (128, 192 o 256 bits)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "¿Qué modo de operación transforma un cifrador de bloque en un cifrador de flujo?",
    "correcta": "OFB",
    "distractores": [
      "CBC",
      "PCBC",
      "ECB"
    ],
    "explicacion": "OFB (Output Feedback) convierte un cifrador de bloque en cifrador de flujo generando un flujo de clave independiente."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "¿Cuál de estos modos de operación transforma un cifrador de bloque en un cifrador de flujo?",
    "correcta": "CTR",
    "distractores": [
      "PCBC",
      "CBC",
      "ECB"
    ],
    "explicacion": "CTR (Counter) también convierte un cifrador de bloque en cifrador de flujo usando un contador."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "¿Cuáles de estos modos de operación necesitan Vector de Inicialización (IV)?",
    "correcta": "CBC, PCBC y OFB",
    "distractores": [
      "CBC, OFB y ECB",
      "PCBC, OFB y ECB",
      "CBC, PCBC y ECB"
    ],
    "explicacion": "ECB no necesita IV. CBC, PCBC y OFB requieren un Vector de Inicialización."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "¿Qué modo de operación es especialmente peligroso en los sistemas de cifrado simétrico?",
    "correcta": "ECB (Electronic Codebook)",
    "distractores": [
      "PCBC (Propagating Cypher Block Chaining)",
      "OFB (Output Feedback)",
      "CBC (Cipher Block Chaining)"
    ],
    "explicacion": "ECB cifra cada bloque de forma independiente: bloques iguales producen el mismo texto cifrado, revelando patrones."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Modos de operación",
    "pregunta": "¿Cuál de estos es un cifrador de flujo?",
    "correcta": "RC4",
    "distractores": [
      "IDEA",
      "AES",
      "RC2"
    ],
    "explicacion": "RC4 es un cifrador de flujo; IDEA, AES y RC2 son cifradores de bloque."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Criptografía",
    "pregunta": "¿Qué aplicación principal tienen los algoritmos probabilísticos en criptografía?",
    "correcta": "Pruebas de primalidad",
    "distractores": [
      "Pruebas de aleatoriedad criptográfica",
      "Pruebas de entropía condicionada",
      "Pruebas de conocimiento cero"
    ],
    "explicacion": "Los algoritmos probabilísticos se usan principalmente en criptografía para las pruebas de primalidad (necesarias en RSA y similares)."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Hash",
    "pregunta": "¿Cuál de estos no es un algoritmo de resumen?",
    "correcta": "Camellia",
    "distractores": [
      "Whirlpool",
      "SHA-3",
      "MD5"
    ],
    "explicacion": "Camellia es un cifrador de bloque simétrico, no una función de resumen. Whirlpool, SHA-3 y MD5 son hashes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Hash",
    "pregunta": "Las funciones HMAC aseguran:",
    "correcta": "La integridad y la autenticación",
    "distractores": [
      "La autenticación y la confidencialidad",
      "La integridad y el no repudio",
      "La autenticación y el no repudio"
    ],
    "explicacion": "HMAC (Hash-based Message Authentication Code) combina un hash con una clave secreta para asegurar integridad y autenticación."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Criptografía",
    "pregunta": "En un criptosistema seguro de Shannon, si hablamos de tamaños:",
    "correcta": "El espacio de mensajes ha de ser menor o igual que el espacio de claves",
    "distractores": [
      "El espacio de mensajes y el de claves no tienen relación alguna",
      "El espacio de mensajes ha de ser mayor o igual que el espacio de claves",
      "El espacio de mensajes ha de ser igual que el espacio de claves"
    ],
    "explicacion": "Shannon demostró que para seguridad perfecta el espacio de claves debe ser al menos tan grande como el espacio de mensajes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Contraseñas",
    "pregunta": "La sal criptográfica se utiliza:",
    "correcta": "con algoritmos de resumen, para evitar ataques de diccionario",
    "distractores": [
      "con algoritmos de resumen, para evitar ataques de cumpleaños",
      "con algoritmos de cifrado simétrico, para evitar ataques de cumpleaños",
      "con algoritmos de cifrado simétrico, para evitar ataques de diccionario"
    ],
    "explicacion": "La sal se añade a los hashes de contraseñas para evitar que ataques de diccionario y tablas arcoíris sean eficaces."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "HTTPS",
    "pregunta": "El protocolo https de Web segura",
    "correcta": "Ninguna de las anteriores es cierta",
    "distractores": [
      "Emplea el sistema PGP",
      "Requiere el intercambio de contraseñas",
      "No precisa el empleo de certificados digitales"
    ],
    "explicacion": "HTTPS usa TLS con certificados digitales, no PGP, y no requiere intercambio de contraseñas entre partes."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "HTTPS",
    "pregunta": "El protocolo S-HTTP de Web segura se basa:",
    "correcta": "En un sistema vertical, ya que utiliza certificados digitales",
    "distractores": [
      "En un sistema horizontal, ya que utiliza certificados digitales",
      "En un sistema vertical, ya que no utiliza certificados digitales",
      "En un sistema horizontal, ya que no utiliza certificados digitales"
    ],
    "explicacion": "Según el banco de preguntas oficial de la asignatura, el protocolo S-HTTP se basa en un sistema vertical, ya que utiliza certificados digitales."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Cifrado - Erratas",
    "pregunta": "Si ciframos un documento utilizando OpenSSL con clave y vector de inicialización con el algoritmo RCA ¿cómo será el tamaño del documento en relación con el original?",
    "correcta": "Idéntico",
    "distractores": [
      "16 bytes mayor",
      "16 bytes mayor, más el padding hasta múltiplo de 16 bytes",
      "16 bytes mayor, más el padding hasta múltiplo de 32 bytes"
    ],
    "explicacion": "RCA es una errata por RC4 (cifrador de flujo). Al no tener tamaño de bloque ni padding, el tamaño del documento cifrado es idéntico al original."
  },
  {
    "temaNum": 2,
    "temaNombre": "Tema 2: Algoritmos y Criptografía",
    "seccion": "Cifrado asimétrico",
    "pregunta": "¿Qué dimensión de la seguridad hemos de reforzar si queremos evitar un ataque de intermediario?",
    "correcta": "Autenticación",
    "distractores": [
      "Privacidad",
      "Integridad",
      "Confidencialidad"
    ],
    "explicacion": "Un ataque de intermediario (Man in the Middle) se evita reforzando la autenticación para asegurar la identidad de los interlocutores (UA2/Tema 2)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Tipos de amenazas",
    "pregunta": "¿Cuáles son los tres tipos básicos de amenazas a la seguridad de los sistemas de información?",
    "correcta": "Ataques, accidentes y negligencias",
    "distractores": [
      "Virus, gusanos y troyanos",
      "Phishing, pharming y spoofing",
      "Robo, destrucción y divulgación"
    ],
    "explicacion": "Las amenazas se clasifican en: ataques (intencionados), accidentes (fortuitos) y negligencias (inadvertidos)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Tipos de amenazas",
    "pregunta": "Las negligencias como tipo de amenaza se caracterizan por ser:",
    "correcta": "Daños no intencionados producidos por un mal uso de equipos o sistemas por el propio personal",
    "distractores": [
      "Ataques planificados por organizaciones criminales externas",
      "Accidentes provocados por desastres naturales",
      "Intrusiones realizadas a través de vulnerabilidades del sistema operativo"
    ],
    "explicacion": "Las negligencias son daños no intencionados debidos al descuido, escasa formación o deficiencias en políticas de seguridad."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Tipos de amenazas",
    "pregunta": "Una vulnerabilidad se define en la UA3 como:",
    "correcta": "La debilidad o incapacidad de respuesta ante una determinada amenaza",
    "distractores": [
      "Una acción intencionada de provocar un daño al sistema",
      "Un programa malicioso que se propaga automáticamente",
      "El resultado de un ataque exitoso sobre un activo"
    ],
    "explicacion": "La vulnerabilidad es una debilidad que puede ser explotada por ataques, accidentes o negligencias."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Efectos de un ataque",
    "pregunta": "¿Cuál de estos NO es un efecto típico de un ataque informático según la UA3?",
    "correcta": "Mejora del rendimiento de los sistemas afectados",
    "distractores": [
      "Destrucción de información",
      "Pérdida de disponibilidad de los servicios",
      "Daños a la reputación de la empresa"
    ],
    "explicacion": "Los efectos de un ataque son: destrucción de info, pérdida de disponibilidad, daños a la propiedad, violación de intimidad y daños reputacionales."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Efectos de un ataque",
    "pregunta": "La violación de la intimidad como efecto de un ataque puede ocasionar:",
    "correcta": "Graves consecuencias y cuantiosas sanciones, incluso si la revelación fue consecuencia de un ataque",
    "distractores": [
      "Solo consecuencias morales sin implicaciones legales",
      "Responsabilidad exclusiva del atacante sin consecuencias para la organización",
      "Únicamente daños reputacionales sin sanciones económicas"
    ],
    "explicacion": "El hecho de que la revelación sea resultado de un ataque NO exime de las consecuencias legales en protección de datos."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Motivaciones MICE",
    "pregunta": "El acrónimo MICE resume las motivaciones de los atacantes. ¿Qué significa?",
    "correcta": "Money, Ideology, Compromise, Ego",
    "distractores": [
      "Malware, Intrusion, Cracking, Exploitation",
      "Monitoring, Interception, Control, Encryption",
      "Manipulation, Influence, Corruption, Espionage"
    ],
    "explicacion": "MICE = Money (económica), Ideology (política), Compromise (causar daño) y Ego (prestigio personal)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Motivaciones MICE",
    "pregunta": "Según los apuntes, ¿cuál es la motivación predominante en la sociedad actual para los atacantes?",
    "correcta": "La obtención de beneficio económico (Money)",
    "distractores": [
      "El prestigio y la autoestima (Ego)",
      "La motivación política o hacktivismo (Ideology)",
      "La intención de causar daño personal (Compromise)"
    ],
    "explicacion": "El beneficio económico es la motivación principal: el cibercrimen supera al tráfico de drogas a nivel mundial."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Motivaciones MICE",
    "pregunta": "El hacktivismo se corresponde con la motivación de tipo:",
    "correcta": "Ideology (motivación política o social)",
    "distractores": [
      "Money (beneficio económico)",
      "Ego (prestigio personal)",
      "Compromise (intención de causar daño)"
    ],
    "explicacion": "El hacktivismo es activismo en red por causas políticas/sociales, encuadrado en la motivación ideológica."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Perfiles de atacantes",
    "pregunta": "La definición correcta de 'hacker' según los apuntes es:",
    "correcta": "Persona con alta cualificación técnica que compromete la seguridad como reto personal, sin mala fe ni intención de daño",
    "distractores": [
      "Cualquier persona que accede ilegalmente a sistemas informáticos con fines delictivos",
      "Persona que utiliza kits de ataque sin especial cualificación técnica",
      "Especialista en desproteger software comercial eliminando sus sistemas de protección"
    ],
    "explicacion": "El hacker actúa por curiosidad o reto personal. El cracker actúa con mala fe (black hat)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Perfiles de atacantes",
    "pregunta": "Un 'script kiddie' se caracteriza por:",
    "correcta": "Atacar sistemas usando herramientas ya preparadas sin comprender sus consecuencias reales",
    "distractores": [
      "Tener alta cualificación técnica y actuar con mala fe",
      "Ser un experto en tarjetas bancarias y sistemas criptográficos",
      "Especializarse en escuchas de redes telefónicas"
    ],
    "explicacion": "Los script kiddies usan 'kits de ataque' sin experiencia: son 'niños jugando con explosivos'."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Perfiles de atacantes",
    "pregunta": "Un 'carder' es un atacante especializado en:",
    "correcta": "Sistemas criptográficos y tarjetas inteligentes, especialmente tarjetas bancarias",
    "distractores": [
      "Interceptar comunicaciones de voz en redes telefónicas",
      "Crear falsas réplicas de páginas web para robar credenciales",
      "Desarrollar ransomware y solicitar rescates"
    ],
    "explicacion": "El carder explota vulnerabilidades de tarjetas inteligentes y sistemas de pago."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Perfiles de atacantes",
    "pregunta": "Los empleados descontentos o ex-empleados son especialmente peligrosos porque:",
    "correcta": "Conocen la organización y sus políticas de seguridad (contraseñas, vulnerabilidades, etc.)",
    "distractores": [
      "Disponen de recursos económicos ilimitados para financiar los ataques",
      "Tienen acceso a herramientas de hacking de última generación",
      "Actúan siempre en colaboración con organizaciones delictivas externas"
    ],
    "explicacion": "El conocimiento interno de la organización les confiere un nivel de peligrosidad muy difícil de igualar desde el exterior."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Vulnerabilidades y exploits",
    "pregunta": "Un 'exploit' es:",
    "correcta": "El ataque específico diseñado para aprovechar una vulnerabilidad concreta de un programa",
    "distractores": [
      "Un tipo de malware que se propaga automáticamente por la red",
      "Una herramienta de análisis de vulnerabilidades legítima",
      "Un parche de seguridad que corrige fallos en el software"
    ],
    "explicacion": "La vulnerabilidad es la debilidad; el exploit es el ataque que la aprovecha."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Vulnerabilidades y exploits",
    "pregunta": "Un 'virus de día cero' es especialmente peligroso porque:",
    "correcta": "Explota una vulnerabilidad desconocida por el fabricante, que no puede tomar medidas contra ella",
    "distractores": [
      "Se activa exactamente a medianoche destruyendo todos los ficheros",
      "Solo afecta a sistemas recién instalados el mismo día de su lanzamiento",
      "Es indetectable para cualquier antivirus por diseño permanente"
    ],
    "explicacion": "El 'zero-day' explota vulnerabilidades no conocidas (ni publicadas) por el fabricante, por lo que no hay parche disponible."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Vulnerabilidades y exploits",
    "pregunta": "¿Por qué es fundamental mantener actualizados los sistemas operativos y aplicaciones?",
    "correcta": "Porque al publicarse la corrección de una vulnerabilidad, esta se hace pública y puede ser explotada por atacantes hasta que el usuario actualice",
    "distractores": [
      "Porque las actualizaciones mejoran exclusivamente el rendimiento del sistema",
      "Porque los antivirus solo funcionan con las versiones más recientes",
      "Porque las versiones antiguas no son compatibles con Internet"
    ],
    "explicacion": "Una vez publicado el exploit, el tiempo de actualización de los usuarios es el factor crítico de exposición."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Entorno doméstico",
    "pregunta": "¿Por qué es especialmente peligroso usar el ordenador doméstico como administrador permanente?",
    "correcta": "Cualquier pieza de software malicioso que se ejecute tomará control absoluto del sistema",
    "distractores": [
      "Porque el modo administrador desactiva automáticamente el antivirus",
      "Porque impide recibir actualizaciones de seguridad del sistema operativo",
      "Porque el perfil de administrador no puede conectarse a Internet"
    ],
    "explicacion": "Con privilegios de administrador, el malware ejecutado adquiere control total del sistema, dificultando su eliminación."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Entorno doméstico",
    "pregunta": "¿Cuándo es susceptible una contraseña de ser comprometida por fuerza bruta en cuestión de horas?",
    "correcta": "Cuando tiene menos de ocho caracteres",
    "distractores": [
      "Cuando contiene caracteres especiales y números",
      "Cuando se cambia cada seis meses",
      "Cuando se almacena en el gestor de contraseñas del navegador"
    ],
    "explicacion": "Contraseñas de menos de 8 caracteres pueden ser comprometidas en horas por ataques de fuerza bruta."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Entorno doméstico",
    "pregunta": "El mecanismo NAT en un router doméstico proporciona seguridad porque:",
    "correcta": "Solo permite el flujo de datos de las conexiones iniciadas desde el interior, bloqueando las entrantes",
    "distractores": [
      "Cifra todo el tráfico entre el router y los equipos internos",
      "Filtra el malware antes de que llegue a los equipos internos",
      "Autentica a todos los usuarios de la red doméstica"
    ],
    "explicacion": "NAT actúa como membrana semipermeable: permite salida libre pero bloquea conexiones entrantes no solicitadas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware general",
    "pregunta": "El término 'malware' designa:",
    "correcta": "Cualquier pieza de software malicioso cuyo objetivo sea comprometer la seguridad de un sistema",
    "distractores": [
      "Exclusivamente los virus informáticos de tipo destructivo",
      "Solo los programas que se propagan automáticamente por redes",
      "Los programas de gestión de licencias de software comercial"
    ],
    "explicacion": "Malware es el término genérico para todo software malicioso, independientemente de su tipo o mecanismo."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware general",
    "pregunta": "El 'crimeware' es la variedad de malware que:",
    "correcta": "Actúa con motivación económica, extendiéndose silenciosamente para desarrollar actividades maliciosas",
    "distractores": [
      "Es usado exclusivamente por estados para el ciberespionaje",
      "Solo afecta a equipos con sistemas operativos Windows",
      "Se limita a destruir información del equipo infectado"
    ],
    "explicacion": "El crimeware se desarrolla para infectar el máximo de equipos sin ser detectado y obtener beneficio económico."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "La característica principal que diferencia un VIRUS de un GUSANO es que:",
    "correcta": "El virus requiere intervención humana para propagarse; el gusano se propaga automáticamente por la red",
    "distractores": [
      "El virus es más peligroso que el gusano",
      "El gusano siempre va acompañado de un 'señuelo' para engañar al usuario",
      "El virus solo infecta sistemas operativos Windows y el gusano cualquier sistema"
    ],
    "explicacion": "El virus necesita que un humano ejecute un archivo infectado; el gusano se autopropaga explotando vulnerabilidades de red."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "Un gusano accede al ordenador objetivo a través de:",
    "correcta": "Alguna debilidad del sistema operativo o servicio de red defectuoso (exploit)",
    "distractores": [
      "Un archivo ejecutable enviado por correo electrónico que el usuario abre",
      "Una App maliciosa descargada de una tienda de aplicaciones no oficial",
      "Un enlace de phishing que redirige a una página web maliciosa"
    ],
    "explicacion": "El gusano explota vulnerabilidades de red (exploits) para acceder y propagarse sin intervención humana."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "Los troyanos son especialmente difíciles de combatir porque:",
    "correcta": "Siempre van acompañados de un 'señuelo' que el usuario no reconoce como amenaza",
    "distractores": [
      "Se propagan automáticamente como los gusanos sin necesidad de intervención humana",
      "Pueden modificar el sistema operativo para hacerse invisibles al antivirus",
      "Son imposibles de eliminar una vez que han accedido al sistema"
    ],
    "explicacion": "El troyano engaña al usuario haciéndose pasar por software legítimo; por eso el usuario lo instala voluntariamente."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "El ransomware WannaCry (que afectó a Telefónica en 2017) es un ejemplo de combinación de mecanismos porque:",
    "correcta": "Penetró como troyano, se replicaba como gusano e infectaba soportes como virus",
    "distractores": [
      "Solo utilizó phishing para infectar los primeros equipos y luego se propagó manualmente",
      "Fue desarrollado por un estado y distribudo exclusivamente a través de correo electrónico",
      "Funcionaba exclusivamente como adware mostrando publicidad para obtener rescate"
    ],
    "explicacion": "WannaCry combinó los tres mecanismos de propagación: troyano (entrada), gusano (autoreplicación) y virus (soportes)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Un rootkit es especialmente peligroso porque:",
    "correcta": "Sustituye programas del sistema operativo para ocultar todos sus componentes y acciones, engañando al antivirus local",
    "distractores": [
      "Puede cifrar todos los archivos del sistema solicitando un rescate al usuario",
      "Se propaga automáticamente a otros equipos de la red infectada",
      "Muestra publicidad forzosa al usuario para obtener beneficio económico"
    ],
    "explicacion": "El rootkit oculta ficheros, procesos y conexiones. El antivirus local no puede detectarlo si el sistema está infectado."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Ante la sospecha de infección por rootkit, ¿cuál es la única forma de estar seguro de que el sistema está limpio?",
    "correcta": "Escanear los discos con antivirus arrancando desde una fuente externa (pendrive), ya que el sistema infectado ocultará el malware",
    "distractores": [
      "Instalar un antivirus actualizado y ejecutar un análisis completo desde el propio sistema",
      "Reiniciar el sistema en modo seguro y ejecutar el antivirus",
      "Desconectar el equipo de la red y esperar 24 horas antes de analizarlo"
    ],
    "explicacion": "Si el sistema está infectado por un rootkit, el análisis desde el propio sistema no puede detectarlo porque lo ocultará."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Un 'downloader' como tipo de malware:",
    "correcta": "Es un pequeño código inicial que descarga silenciosamente el resto de componentes del malware usando los servicios de red",
    "distractores": [
      "Es un programa que descarga archivos legítimos de Internet para el usuario",
      "Es un tipo de ransomware que cifra archivos y pide un rescate",
      "Es una variante de rootkit que sustituye los programas del sistema operativo"
    ],
    "explicacion": "El downloader es la primera fase: un código mínimo que luego descarga el malware completo."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Un 'backdoor' o puerta trasera consiste en:",
    "correcta": "Cuentas de usuario con privilegios o servicios modificados que permiten al atacante acceder al sistema incluso después de detectado el ataque",
    "distractores": [
      "Un tipo de virus que se autopropaga por la red atacando vulnerabilidades",
      "Un programa que muestra publicidad forzosa al usuario",
      "Un sistema de cifrado que bloquea los archivos del usuario"
    ],
    "explicacion": "La backdoor garantiza el acceso futuro al sistema, incluso después de corregidos los efectos del ataque inicial."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Los keyloggers de segunda generación son capaces de superar los teclados virtuales bancarios porque:",
    "correcta": "Capturan y envían porciones de imagen de pantalla alrededor del puntero cuando el usuario usa el teclado virtual",
    "distractores": [
      "Interceptan las comunicaciones cifradas entre el navegador y el banco",
      "Modifican el código del servidor bancario para capturar las contraseñas",
      "Bloquean el funcionamiento del teclado virtual y obligan a usar el teclado físico"
    ],
    "explicacion": "Los keyloggers evolucionaron para capturar screenshots de la zona del puntero, neutralizando los teclados virtuales."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "Una botnet es:",
    "correcta": "Una red de ordenadores infectados (zombies/bots) que obedecen remotamente las órdenes del atacante",
    "distractores": [
      "Un sistema de cifrado distribuido para proteger comunicaciones privadas",
      "Una plataforma de análisis de vulnerabilidades utilizada por hackers éticos",
      "Un conjunto de servidores de actualizaciones automáticas de software"
    ],
    "explicacion": "La botnet permite al atacante usar miles de equipos zombies para spam, ataques DDoS, minería de criptomonedas, etc."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "¿Cuál de estas NO es una tarea típica que puede ordenar una botnet?",
    "correcta": "Aplicar parches de seguridad automáticamente en los equipos infectados",
    "distractores": [
      "Envío masivo de spam aprovechando los servidores de correo de los zombies",
      "Ataques distribuidos de denegación de servicio (DDoS)",
      "Minería de criptomonedas con la potencia combinada de los procesadores infectados"
    ],
    "explicacion": "Las botnets se usan para actividades maliciosas: spam, DDoS, minería de criptomonedas, phishing, etc."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "El ransomware (criptovirus) actúa:",
    "correcta": "Cifrando el contenido de los ficheros del equipo y solicitando un rescate para recuperar la información",
    "distractores": [
      "Robando contraseñas almacenadas en el navegador para enviarlas al atacante",
      "Instalando puertas traseras para garantizar el acceso futuro al sistema",
      "Mostrando publicidad forzosa mientras el usuario trabaja"
    ],
    "explicacion": "El ransomware cifra los archivos del usuario y exige un rescate (generalmente en criptomonedas) para descifrarlos."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "El spyware es un software que:",
    "correcta": "Se instala sin consentimiento para registrar la actividad del usuario y enviar los datos a un destino del atacante",
    "distractores": [
      "Muestra publicidad forzosa al usuario para obtener beneficio económico",
      "Cifra los archivos del equipo para solicitar un rescate económico",
      "Descarga silenciosamente otros componentes de malware"
    ],
    "explicacion": "El spyware espía: registra navegación, contraseñas, horarios de actividad, etc., y los envía al atacante."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Correo y spam",
    "pregunta": "El spam como herramienta de los atacantes es especialmente usado para:",
    "correcta": "Distribución masiva de phishing, malware y publicidad no deseada",
    "distractores": [
      "Ejecutar ataques de denegación de servicio distribuido",
      "Modificar el sistema DNS para redirigir a webs maliciosas",
      "Instalar rootkits en los servidores de correo"
    ],
    "explicacion": "Más del 50% del spam actual es producido por botnets para phishing, publicidad y distribución de malware."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "¿Cuál es la diferencia entre phishing y pharming?",
    "correcta": "El phishing engaña al usuario con un enlace falso; el pharming falsea el DNS para que el enlace correcto lleve a la web maliciosa",
    "distractores": [
      "El phishing es más peligroso que el pharming por ser más difícil de detectar",
      "El pharming solo afecta a equipos con Windows y el phishing a cualquier sistema",
      "El phishing usa malware y el pharming usa ingeniería social"
    ],
    "explicacion": "Phishing = enlace falso. Pharming = intoxicación DNS: incluso el enlace correcto lleva a la web falsa."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "El spear phishing se diferencia del phishing ordinario en que:",
    "correcta": "Va dirigido a víctimas específicas con el contenido del mensaje adaptado a sus características",
    "distractores": [
      "Usa técnicas más simples que el phishing convencional",
      "Solo se realiza a través de redes sociales, no por correo electrónico",
      "Afecta solo a dispositivos móviles y no a ordenadores de sobremesa"
    ],
    "explicacion": "El spear phishing o 'phishing con arpón' es personalizado: el mensaje está adaptado a la víctima concreta."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "La mejor defensa contra el phishing es:",
    "correcta": "Formar a los usuarios para que nunca accedan a servicios sensibles a través de enlaces en correos, redes sociales o WhatsApp",
    "distractores": [
      "Instalar un antivirus de última generación",
      "Usar exclusivamente conexiones cifradas HTTPS",
      "Cambiar las contraseñas cada 30 días"
    ],
    "explicacion": "Como el phishing se apoya en ingeniería social, la formación de los usuarios es su única defensa eficaz."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "El pharming mediante 'intoxicación de la caché del servidor DNS' es especialmente peligroso porque:",
    "correcta": "Intoxicando un solo servidor DNS se pueden redirigir muchos equipos diferentes a la web maliciosa",
    "distractores": [
      "Requiere acceso físico al equipo de la víctima para modificar el fichero HOSTS",
      "Solo afecta a equipos sin antivirus instalado",
      "Es indetectable por los protocolos HTTPS y TLS"
    ],
    "explicacion": "La intoxicación del servidor DNS afecta a todos los equipos que consulten ese servidor, no solo a uno."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "El pharming mediante modificación del fichero HOSTS del equipo local:",
    "correcta": "Especifica directamente la IP maliciosa como asociada al nombre del servidor legítimo, requiriendo permisos de administrador",
    "distractores": [
      "Es más peligroso que la intoxicación del servidor DNS porque afecta a más equipos",
      "Solo funciona en equipos con sistemas operativos Unix/Linux",
      "Es la técnica más compleja y raramente utilizada por el malware"
    ],
    "explicacion": "La modificación del HOSTS es simple (requiere ser administrador) y usada frecuentemente por malware."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "XSS y cookies",
    "pregunta": "El Cross-Site Scripting (XSS) no persistente consiste en:",
    "correcta": "Inyectar código malicioso en un enlace URL para que sea ejecutado en el navegador de la víctima cuando accede al servidor",
    "distractores": [
      "Insertar código malicioso directamente en la base de datos del servidor web",
      "Modificar el fichero HOSTS del equipo de la víctima para redirigir a una web maliciosa",
      "Enviar correos electrónicos masivos con enlaces a webs maliciosas"
    ],
    "explicacion": "El XSS no persistente inyecta código en el enlace (URL); la víctima al acceder ejecuta ese código en su navegador."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "XSS y cookies",
    "pregunta": "Las 'cookies espía' o cookies maliciosas son peligrosas porque:",
    "correcta": "Permiten a sitios de terceros (banners, redes sociales) acceder a información de autenticación almacenada en el navegador",
    "distractores": [
      "Cifran los archivos del usuario solicitando un rescate para recuperarlos",
      "Se propagan automáticamente a otros equipos de la red local",
      "Modifican el sistema DNS para redirigir las conexiones"
    ],
    "explicacion": "Las cookies espía aprovechan la inserción de elementos de terceros en páginas web para acceder a información restringida."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Redes sociales",
    "pregunta": "El tabnabbing es una técnica que:",
    "correcta": "Transforma una pestaña en segundo plano en una página falsa de acceso a servicios para robar credenciales cuando el usuario regresa",
    "distractores": [
      "Redirige todos los clicks del usuario a páginas de spam o malware",
      "Captura la cámara y el micrófono del equipo sin conocimiento del usuario",
      "Cifra las comunicaciones de la red social para interceptarlas"
    ],
    "explicacion": "El tabnabbing aprovecha las pestañas del navegador: la pestaña olvidada se convierte en una página de login falsa."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Redes sociales",
    "pregunta": "Las tres grandes amenazas del uso de plataformas de red social son:",
    "correcta": "Amenazas técnicas (web hacking), incertidumbre sobre uso de datos y riesgos para la intimidad/privacidad",
    "distractores": [
      "Spam, malware y ataques de denegación de servicio",
      "Phishing, pharming y XSS exclusivamente",
      "Robo de identidad, ransomware y botnets"
    ],
    "explicacion": "Las RRSS presentan tres tipos de amenazas: técnicas (web hacking), incertidumbre (uso de datos) e intimidad/privacidad."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Cloud computing",
    "pregunta": "El principal riesgo de seguridad del cloud computing para las organizaciones es:",
    "correcta": "La información (activo más importante) está fuera de la organización y su seguridad depende de terceros",
    "distractores": [
      "La imposibilidad de cifrar los datos almacenados en la nube",
      "La falta de actualizaciones automáticas en los sistemas cloud",
      "El excesivo coste económico de los servicios de seguridad en la nube"
    ],
    "explicacion": "En la nube, la gestión de activos críticos de información está en manos de terceros, generando nuevos riesgos."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "Las cuatro etapas básicas de un ataque elaborado a una organización son:",
    "correcta": "Recopilación de información, identificación de vulnerabilidades, ataque y mantenimiento/continuación",
    "distractores": [
      "Infección, propagación, ocultación y rescate",
      "Escaneo, explotación, instalación y comunicación",
      "Reconocimiento, armamento, entrega y explotación"
    ],
    "explicacion": "Las etapas son: recopilación de info → identificación de vulnerabilidades → ataque → mantenimiento (acceso, ocultación, aseguramiento, salto)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "El 'escaneo de puertos' (port scanning) permite al atacante:",
    "correcta": "Detectar qué servicios ofrece la máquina objetivo y sus posibles vulnerabilidades según los puertos abiertos",
    "distractores": [
      "Interceptar el tráfico de red de la organización objetivo",
      "Falsear las entradas del servidor DNS de la organización",
      "Enviar mensajes de correo masivos a empleados de la organización"
    ],
    "explicacion": "El escaneo de puertos identifica los servicios activos y sus versiones, buscando exploits conocidos."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "El 'sniffing' consiste en:",
    "correcta": "Aprovechar la naturaleza promiscua de las redes para capturar y almacenar información relevante de los paquetes",
    "distractores": [
      "Falsear las entradas del servidor DNS para redirigir conexiones",
      "Atacar servidores web mediante inyección de código SQL",
      "Capturar pulsaciones del teclado del usuario víctima"
    ],
    "explicacion": "Los sniffers de paquetes capturan el tráfico en redes Ethernet o Wifi, pudiendo interceptar comunicaciones no cifradas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "El 'Google Hacking' hace referencia a:",
    "correcta": "Usar opciones de búsqueda avanzada para localizar información sensible filtrada involuntariamente en buscadores",
    "distractores": [
      "Atacar directamente los servidores de Google para obtener información de usuarios",
      "Crear páginas web falsas que imitan los resultados de Google para engañar a las víctimas",
      "Usar el buscador de Google para encontrar herramientas de hacking en foros"
    ],
    "explicacion": "Google Hacking explota las arañas/indexadores de Google para localizar versiones de software con exploits, mensajes de error, etc."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "La ingeniería social se basa en cuatro principios según Kevin Mitnick. ¿Cuál NO es uno de ellos?",
    "correcta": "Todos queremos maximizar nuestro beneficio económico",
    "distractores": [
      "Todos queremos ayudar",
      "El primer movimiento siempre es de confianza hacia el otro",
      "A todos nos gusta que nos halaguen"
    ],
    "explicacion": "Los 4 principios de Mitnick son: todos queremos ayudar, confiamos a priori, no nos gusta decir no, nos gusta que nos halaguen."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "La única forma eficaz de combatir la ingeniería social es:",
    "correcta": "La organización de planes de formación específica de todo el personal de la organización",
    "distractores": [
      "Instalar sistemas de detección de intrusos en la red perimetral",
      "Implementar autenticación de dos factores en todos los sistemas",
      "Cifrar todas las comunicaciones internas de la organización"
    ],
    "explicacion": "Como la ingeniería social ataca el factor humano (el más débil), solo la formación específica puede contrarrestarla."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "Un ataque de denegación de servicio distribuido (DDoS) mediante fuerza bruta consiste en:",
    "correcta": "Usar miles de equipos infectados (botnet) para enviar peticiones simultáneas y saturar el servidor objetivo",
    "distractores": [
      "Aprovechar exploits conocidos desde una sola máquina para saturar el servidor",
      "Modificar el código del servidor web para que rechace conexiones legítimas",
      "Interceptar y bloquear las comunicaciones entre el servidor y sus clientes legítimos"
    ],
    "explicacion": "El DDoS por fuerza bruta usa botnets para inundar el servidor con millones de peticiones simultáneas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "La inyección SQL es una técnica de ataque que:",
    "correcta": "Envía instrucciones SQL en lugar de datos al servidor web para comprometer la seguridad de su base de datos",
    "distractores": [
      "Inyecta código malicioso en el enlace URL para ejecutarlo en el navegador de la víctima",
      "Modifica las consultas DNS para redirigir a páginas web maliciosas",
      "Intercepta el tráfico SSL/TLS entre el navegador y el servidor"
    ],
    "explicacion": "La inyección SQL altera los datos de entrada (usuario/contraseña) para enviar instrucciones SQL al servidor."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "APT",
    "pregunta": "Una Amenaza Avanzada y Persistente (APT) se caracteriza principalmente por:",
    "correcta": "El atacante se infiltra en la organización durante un largo período, adaptándose a las defensas para obtener información estratégica",
    "distractores": [
      "Provocar la mayor destrucción posible de datos en el menor tiempo",
      "Usar exclusivamente ransomware para obtener beneficio económico rápido",
      "Atacar simultáneamente a miles de organizaciones de forma indiscriminada"
    ],
    "explicacion": "Las APT buscan acceso prolongado y sigiloso, generalmente para ciberespionaje. Son persistentes y adaptativas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "APT",
    "pregunta": "¿Quiénes suelen estar detrás de los ataques APT?",
    "correcta": "Estados u organizaciones delictivas/terroristas con elevados conocimientos y amplios recursos",
    "distractores": [
      "Script kiddies que usan herramientas automatizadas disponibles en Internet",
      "Empleados descontentos que actúan de forma individual sin apoyo externo",
      "Empresas de ciberseguridad que realizan pruebas de penetración sin autorización"
    ],
    "explicacion": "Las APT requieren elevados conocimientos y recursos. Habitualmente están auspiciadas por estados o grandes organizaciones."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el malware es FALSA?",
    "correcta": "Los virus se propagan automáticamente por la red sin necesidad de intervención humana",
    "distractores": [
      "Los gusanos no necesitan intervención humana para propagarse",
      "Los troyanos siempre van acompañados de un 'señuelo' para engañar al usuario",
      "Un mismo componente de malware puede combinar varios mecanismos de propagación"
    ],
    "explicacion": "Son los GUSANOS los que se propagan automáticamente; los VIRUS requieren intervención humana para su propagación."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el DDoS es CORRECTA?",
    "correcta": "El DDoS mediante fuerza bruta usa botnets para saturar el servidor; el DoS mediante exploits puede realizarse desde una sola máquina",
    "distractores": [
      "DoS y DDoS son términos sinónimos que describen el mismo tipo de ataque",
      "El DDoS solo puede realizarse contra servicios web, no contra otros protocolos",
      "El DoS distribuido es menos peligroso que el DoS desde una sola máquina"
    ],
    "explicacion": "DoS = una máquina, puede usar exploits para saturar. DDoS = muchas máquinas (botnet) para saturar por fuerza bruta."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la ingeniería social es FALSA?",
    "correcta": "La ingeniería social puede neutralizarse completamente con herramientas técnicas como firewalls e IDS",
    "distractores": [
      "La ingeniería social aprovecha las debilidades de la condición humana, no las técnicas",
      "Kevin Mitnick afirma que la ingeniería social se apoya en que todos queremos ayudar",
      "La formación del personal es la principal defensa contra la ingeniería social"
    ],
    "explicacion": "La ingeniería social ataca el factor humano; las herramientas técnicas (firewalls, IDS) no pueden prevenirla."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Trampa",
    "pregunta": "Un ataque de tipo 'Man in the Middle' es susceptible cuando el sistema de comunicación:",
    "correcta": "No tiene un mecanismo fuerte de autenticación (como criptografía de clave pública)",
    "distractores": [
      "Usa cifrado simétrico con claves de más de 256 bits",
      "Implementa el protocolo HTTPS con certificados digitales válidos",
      "Usa autenticación de dos factores con tarjeta criptográfica"
    ],
    "explicacion": "El Man in the Middle requiere que el sistema no tenga autenticación fuerte. Los certificados digitales y la criptografía asimétrica lo previenen."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la vulnerabilidad es FALSA?",
    "correcta": "Una vulnerabilidad y un simple fallo informático son exactamente lo mismo",
    "distractores": [
      "Una vulnerabilidad puede ser explotada activamente para comprometer dimensiones de la seguridad",
      "Los virus de día cero explotan vulnerabilidades desconocidas por el fabricante",
      "Los parches, hotfixes y actualizaciones sirven para corregir vulnerabilidades conocidas"
    ],
    "explicacion": "Un fallo informático afecta a la disponibilidad; una vulnerabilidad, además, puede ser explotada para comprometer confidencialidad, integridad, etc."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Efectos de un ataque",
    "pregunta": "Algunos de los efectos más habituales de un ataque son:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Destrucción de la información",
      "Pérdida de disponibilidad de los servicios",
      "Daños de la propiedad"
    ],
    "explicacion": "Los efectos de un ataque incluyen destrucción de información, pérdida de disponibilidad, daños a la propiedad, y más."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "XSS y cookies",
    "pregunta": "¿Qué es una COOKIE?",
    "correcta": "Un fragmento de información que se almacena en el disco duro del visitante de una página web, a petición del servidor que aloja la página web",
    "distractores": [
      "Un fragmento de código publicitario que se descarga de algunas páginas web",
      "Un fragmento de código malicioso que se descarga de algunas páginas web",
      "Una página web almacenada en la caché del navegador"
    ],
    "explicacion": "Las cookies son pequeños archivos que los servidores web almacenan en el disco duro del visitante para mantener información de sesión y preferencias."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Tipos de amenazas",
    "pregunta": "¿Qué se considera el activo más importante de las organizaciones?",
    "correcta": "La información",
    "distractores": [
      "Sus beneficios",
      "Su seguridad",
      "Sus empleados"
    ],
    "explicacion": "La información es el activo más importante de las organizaciones en la sociedad de la información."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Perfiles de atacantes",
    "pregunta": "La persona que compromete la seguridad de un sistema informático haciendo uso de sus conocimientos técnicos, pero sin la intención de cometer daños, se llama:",
    "correcta": "hacker",
    "distractores": [
      "cracker",
      "lacker",
      "tracker"
    ],
    "explicacion": "El hacker actúa por curiosidad o reto personal sin intención de dañar; el cracker actúa con mala fe."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Ataques elaborados",
    "pregunta": "Un ataque de denegación de servicio distribuido se caracteriza porque:",
    "correcta": "se emplea a un conjunto de máquinas para saturar al sistema víctima",
    "distractores": [
      "el intruso deniega el servicio distribuyendo contraseñas por la Red",
      "se distribuye el trabajo entre varios hackers",
      "todas las anteriores son ciertas"
    ],
    "explicacion": "El DDoS usa múltiples máquinas (botnet) para saturar el sistema víctima con peticiones simultáneas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "Una diferencia entre un gusano y un virus es que",
    "correcta": "el gusano se propaga automáticamente, mientras que el virus necesita intervención humana",
    "distractores": [
      "el virus es un software malicioso y el gusano no lo es",
      "son términos sinónimos, se refieren al mismo tipo de software",
      "el gusano puede ser un troyano y el virus no"
    ],
    "explicacion": "El gusano se autopropaga explotando vulnerabilidades de red; el virus requiere que el usuario ejecute un archivo infectado."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "La intoxicación del DNS a fin de dirigir un equipo a una web maliciosa se denomina",
    "correcta": "pharming",
    "distractores": [
      "spoofing",
      "phising",
      "rootkit"
    ],
    "explicacion": "El pharming envenena el DNS para redirigir a los usuarios a webs maliciosas aunque escriban la URL correcta."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Web hacking",
    "pregunta": "¿Cómo se evita la inyección de SQL?",
    "correcta": "Filtrando todas las entradas a una aplicación web",
    "distractores": [
      "Filtrando las URLs de salida de una aplicación web",
      "Filtrando los correos electrónicos para evitar URLs maliciosas",
      "Utilizando una buena suite antivirus"
    ],
    "explicacion": "La inyección SQL se evita filtrando y validando todas las entradas de usuario en la aplicación web."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - tipos",
    "pregunta": "¿A qué se conoce como ROOTKIT?",
    "correcta": "A un software malicioso capaz de sustituir determinados componentes de un Sistema Operativo",
    "distractores": [
      "A un tipo de virus",
      "A un gusano",
      "A un troyano"
    ],
    "explicacion": "El rootkit sustituye componentes del SO para ocultar su presencia y la de otros malwares."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Malware - propagación",
    "pregunta": "¿De qué manera puede llegar un TROYANO hasta un sistema informático?",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Descargado automáticamente por otro programa malicioso",
      "Como adjunto en un mensaje de correo electrónico",
      "Descargado al visitar una página web maliciosa"
    ],
    "explicacion": "Los troyanos pueden llegar por múltiples vías: descarga automática, adjuntos de correo o páginas web maliciosas."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Amenazas - DNS",
    "pregunta": "¿Cuál de estas amenazas tiene relación directa con el servicio de nombres DNS?",
    "correcta": "Pharming",
    "distractores": [
      "Cross-site Scripting",
      "DDOS",
      "Phishing"
    ],
    "explicacion": "El pharming consiste en envenenar/intoxicar la caché DNS para redirigir las conexiones a servidores maliciosos (UA3/Tema 3)."
  },
  {
    "temaNum": 3,
    "temaNombre": "Tema 3: Amenazas a los Sistemas de Información",
    "seccion": "Amenazas - Rootkits",
    "pregunta": "Las luces de la tarjeta de red de mi ordenador de sobremesa muestran gran actividad, siendo yo el único usuario conectado en casa, pero el monitor del sistema indica que el tráfico de red es mínimo ¿Cuál es la causa más probable?",
    "correcta": "Mi ordenador tiene un rootkit",
    "distractores": [
      "Mi ordenador tiene un criptovirus",
      "Mi ordenador tiene un bot de spam",
      "Mi ordenador tiene un bot de minado de criptomonedas"
    ],
    "explicacion": "Un rootkit puede ocultar su propia actividad de red modificando las herramientas de monitorización del sistema operativo (que reportarán tráfico mínimo), mientras que la tarjeta física sigue transmitiendo a alta velocidad."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "¿Cuál de estas medidas de seguridad en un router doméstico tiene nivel 'básico' según la tabla de la UA4?",
    "correcta": "Cambiar la contraseña de acceso e impedir su configuración desde Internet",
    "distractores": [
      "Emplear protocolos de autenticación 802.1x",
      "Ocultar el identificador de la red (SSID)",
      "Utilizar lista de control de acceso (ACL) por MAC"
    ],
    "explicacion": "Cambiar la contraseña del router y bloquear la configuración remota son medidas de nivel básico obligatorias."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "¿Por qué es especialmente peligrosa la opción 'DMZ' o 'default workstation' en un router doméstico?",
    "correcta": "Hace que el router entregue TODAS las conexiones entrantes a esa máquina, eliminando la protección del filtrado",
    "distractores": [
      "Porque desactiva el protocolo WPA y deja la red Wifi abierta",
      "Porque permite que cualquier equipo de la red acceda a la configuración del router",
      "Porque aumenta el consumo de ancho de banda disponible para los demás equipos"
    ],
    "explicacion": "La DMZ doméstica expone una máquina interna a todo el tráfico entrante de Internet sin filtrado."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "Las tres rangos de direcciones IP privadas válidos para una red doméstica son:",
    "correcta": "192.168.X.X, 172.26.X.X y 10.X.X.X",
    "distractores": [
      "192.168.X.X, 172.16.X.X y 127.0.0.X",
      "10.X.X.X, 172.16.X.X y 192.168.X.X",
      "169.254.X.X, 192.168.X.X y 10.X.X.X"
    ],
    "explicacion": "Los tres rangos de IPs privadas son: 192.168.X.X, 172.26.X.X (o 172.16-31.X.X) y 10.X.X.X. Cualquier otro rango es público."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "El protocolo WPS (Wifi Protected Setup) debe estar siempre desactivado porque:",
    "correcta": "Tiene problemas de seguridad que permiten que cualquier cliente con WPS activo obtenga la contraseña de la Wifi",
    "distractores": [
      "Reduce significativamente la velocidad de transferencia de la red Wifi",
      "Es incompatible con los protocolos WPA2 y WPA3",
      "Solo funciona con routers de fabricantes específicos"
    ],
    "explicacion": "El WPS tiene vulnerabilidades conocidas que permiten obtener la contraseña Wifi. Debe desactivarse siempre."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "Desactivar el DHCP en el router y usar IPs estáticas como medida de seguridad Wifi:",
    "correcta": "Obliga a cualquier usuario malicioso a conocer el rango IP, máscara y gateway para poder conectarse",
    "distractores": [
      "Impide absolutamente que usuarios no autorizados accedan a la red",
      "Elimina la necesidad de usar contraseña en la red Wifi",
      "Es una medida de nivel básico según la tabla de configuración de la UA4"
    ],
    "explicacion": "Sin DHCP, el atacante debe conocer y configurar manualmente los parámetros IP correctos para acceder a la red."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "¿Por qué es peligroso usar software sin licencia o sistemas operativos obsoletos como Windows XP?",
    "correcta": "Porque no se tiene acceso a actualizaciones de seguridad que corrijan vulnerabilidades conocidas",
    "distractores": [
      "Porque el software sin licencia incluye malware por defecto en su instalación",
      "Porque los antivirus no son compatibles con software sin licencia",
      "Porque el sistema operativo obsoleto usa cifrado más débil para las contraseñas"
    ],
    "explicacion": "Sin actualizaciones de seguridad, las vulnerabilidades permanecen sin corregir y los exploits pueden explotarse indefinidamente."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Copias de seguridad",
    "pregunta": "¿Por qué es imprescindible que al menos una copia de seguridad esté normalmente offline?",
    "correcta": "Porque si el dispositivo de copia está permanentemente accesible, el ransomware cifrará también las copias",
    "distractores": [
      "Porque las copias online tienen menor capacidad de almacenamiento",
      "Porque las copias en la nube no están cifradas y son accesibles por terceros",
      "Porque las copias online no permiten restaurar versiones anteriores de los archivos"
    ],
    "explicacion": "El ransomware cifra todos los sistemas accesibles, incluidas las copias de seguridad conectadas. La copia offline es la única garantía."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Antivirus",
    "pregunta": "¿Cuál es la diferencia entre detección de malware 'basada en firmas' y 'heurística'?",
    "correcta": "La basada en firmas busca patrones conocidos de malware; la heurística identifica comportamientos sospechosos",
    "distractores": [
      "La basada en firmas es más moderna y efectiva que la heurística",
      "La heurística solo detecta virus y la basada en firmas detecta todos los tipos de malware",
      "La basada en firmas funciona en tiempo real y la heurística solo en análisis programados"
    ],
    "explicacion": "Basada en firmas = patrones de malware conocidos. Heurística = detección por comportamiento. Los sistemas modernos combinan ambas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Antivirus",
    "pregunta": "El límite de la detección basada en firmas es que:",
    "correcta": "Los nuevos virus que no estén en la base de datos de firmas no serán detectados",
    "distractores": [
      "Solo puede analizar archivos ejecutables, no documentos de Office o PDF",
      "Requiere que el sistema esté conectado a Internet en todo momento",
      "Genera demasiados falsos positivos que bloquean el funcionamiento normal del equipo"
    ],
    "explicacion": "Como en medicina, la vacuna se obtiene después de conocer el virus. Los nuevos malwares no están en las firmas hasta ser analizados."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Antivirus",
    "pregunta": "Un firewall de software tiene una debilidad evidente frente a uno de hardware:",
    "correcta": "Si el sistema está comprometido, el firewall de software también lo estará",
    "distractores": [
      "El firewall de software no puede filtrar el tráfico saliente, solo el entrante",
      "El firewall de software no puede detectar intrusiones en tiempo real",
      "El firewall de software no es compatible con conexiones Wifi"
    ],
    "explicacion": "Un firewall de software corre sobre el mismo sistema que protege. Si el sistema cae, el firewall también."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Dispositivos móviles",
    "pregunta": "Para proteger la información de un smartphone ante robo o pérdida, la mejor medida es:",
    "correcta": "Cifrar el sistema de almacenamiento del dispositivo además de usar contraseñas o PINes seguros",
    "distractores": [
      "Instalar un antivirus específico para móviles",
      "Desactivar el Bluetooth cuando no se use",
      "Usar solo redes Wifi conocidas y evitar las públicas"
    ],
    "explicacion": "El cifrado del almacenamiento protege los datos aunque el dispositivo caiga en manos ajenas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Dispositivos móviles",
    "pregunta": "¿Por qué es peligroso instalar Apps de fuentes no oficiales en un smartphone?",
    "correcta": "Porque pueden contener malware (troyanos, rootkits, adware) no controlado por los mercados oficiales",
    "distractores": [
      "Porque consumen más batería que las Apps de las tiendas oficiales",
      "Porque son incompatibles con las actualizaciones del sistema operativo",
      "Porque no pueden actualizarse automáticamente y quedan obsoletas rápidamente"
    ],
    "explicacion": "Las fuentes no oficiales no tienen los controles de seguridad de App Store o Play Store, siendo fuentes habituales de malware."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Dispositivos móviles",
    "pregunta": "Revisar los permisos de las Apps instaladas es importante porque:",
    "correcta": "Muchas Apps solicitan permisos innecesarios para capturar información del usuario (micrófono, cámara, GPS, contactos)",
    "distractores": [
      "Los permisos innecesarios hacen que las Apps funcionen más lentamente",
      "Sin revisar los permisos no se puede actualizar el sistema operativo",
      "El exceso de permisos consume más batería del dispositivo"
    ],
    "explicacion": "Una App de linterna no necesita acceso a los contactos. Los permisos excesivos permiten capturar información sensible."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Dispositivos móviles",
    "pregunta": "Con respecto al protocolo Bluetooth en dispositivos móviles, una recomendación básica es:",
    "correcta": "Mantenerlo desactivado cuando no sea imprescindible y ocultar la identidad del dispositivo",
    "distractores": [
      "Usar siempre el código por defecto para emparejar dispositivos ya que es el más seguro",
      "Activarlo permanentemente para facilitar la conexión con accesorios",
      "Cambiar el código de emparejamiento solo una vez al año"
    ],
    "explicacion": "El Bluetooth tiene problemas de seguridad conocidos. Se debe desactivar cuando no se use y nunca usar códigos por defecto."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "¿Cuántas cuentas de correo recomienda como mínimo usar una guía básica de seguridad?",
    "correcta": "Tres: corporativa, personal y una de uso desechable para registros y suscripciones",
    "distractores": [
      "Una: concentrar toda la actividad en una sola cuenta para mayor control",
      "Dos: una profesional y una personal",
      "Cinco o más, una por cada tipo de actividad diferente"
    ],
    "explicacion": "Se recomiendan al menos 3 cuentas: corporativa, personal y una 'basura' para registros con datos inexactos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "Respecto a los correos spam recibidos, la recomendación correcta es:",
    "correcta": "Eliminarlos sin leerlos y jamás abrir sus ficheros adjuntos ni responder a ellos",
    "distractores": [
      "Responder al remitente para solicitar que nos elimine de su lista de envío",
      "Abrirlos solo para confirmar que son spam antes de eliminarlos",
      "Reenviarlos a nuestros contactos para alertarles del peligro"
    ],
    "explicacion": "Responder al spam confirma que la cuenta está activa y aumenta la cantidad de spam recibido. Hay que eliminarlos sin leerlos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "¿Por qué no se debe asumir que un mensaje es legítimo aunque el nombre del remitente sea conocido?",
    "correcta": "Porque los spammers falsean las direcciones de origen, escogiéndolas de la misma lista de víctimas",
    "distractores": [
      "Porque los amigos también pueden enviar spam sin saberlo si están infectados",
      "Porque el servidor de correo puede corromper la dirección del remitente",
      "Porque es imposible verificar la identidad del remitente sin certificado digital"
    ],
    "explicacion": "El spoofing de correo permite falsear el campo 'De:'. Incluso podemos recibir spam de nuestra propia dirección."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "El uso de PGP o S/MIME en el correo electrónico proporciona:",
    "correcta": "Autenticación, integridad y no repudio (firma digital) y confidencialidad (cifrado)",
    "distractores": [
      "Solo confidencialidad mediante cifrado del mensaje",
      "Únicamente filtrado de spam y malware en los adjuntos",
      "Verificación de que el servidor de correo es legítimo"
    ],
    "explicacion": "PGP/S/MIME aplican firma digital (autenticación, integridad, no repudio) y cifrado (confidencialidad) al correo."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "Para garantizar la INTEGRIDAD (no el secreto) de un mensaje de correo electrónico es necesario:",
    "correcta": "Firmarlo digitalmente",
    "distractores": [
      "Cifrarlo con la clave pública del destinatario",
      "Cifrarlo y firmarlo simultáneamente",
      "Enviarlo a través de un servidor de correo con conexión TLS"
    ],
    "explicacion": "La firma digital garantiza integridad (y autenticación). El cifrado garantiza confidencialidad. Son funciones distintas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Navegación segura",
    "pregunta": "La recomendación más importante relativa a la navegación web según la UA4 es:",
    "correcta": "Mantener el navegador actualizado con los últimos parches de seguridad",
    "distractores": [
      "Usar siempre conexiones Wifi privadas y nunca públicas",
      "Desactivar JavaScript en todos los sitios web",
      "Usar solo navegadores de código abierto"
    ],
    "explicacion": "El navegador es la principal vía de entrada de amenazas externas y la pieza más importante del equipo."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Navegación segura",
    "pregunta": "¿Por qué se debe evitar 'recordar contraseñas' en el navegador en equipos compartidos?",
    "correcta": "Porque las contraseñas se almacenan de forma poco segura en el navegador y el malware puede recopilarlas y enviarlas",
    "distractores": [
      "Porque los navegadores modernos no cifran las contraseñas almacenadas",
      "Porque al guardar contraseñas, el navegador bloquea las actualizaciones automáticas",
      "Porque otras cuentas de usuario del mismo equipo pueden acceder a ellas fácilmente"
    ],
    "explicacion": "Las contraseñas guardadas en el navegador son accesibles para malware tipo PWStealers. Nunca en equipos compartidos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Navegación segura",
    "pregunta": "No se debe tener una red social en una pestaña y la cuenta bancaria en otra porque:",
    "correcta": "Un enlace tóxico en la pestaña de la red social puede capturar credenciales o la sesión de la pestaña bancaria",
    "distractores": [
      "Los navegadores modernos comparten cookies entre todas las pestañas abiertas automáticamente",
      "El ancho de banda se divide entre pestañas, haciendo las operaciones bancarias inseguras",
      "La red social puede leer los datos bancarios a través del DOM compartido"
    ],
    "explicacion": "La separación de seguridad entre pestañas del mismo navegador es relativa. Código tóxico en una pestaña puede afectar a otras."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Navegación segura",
    "pregunta": "Antes de introducir datos sensibles en una web, debemos verificar que:",
    "correcta": "La URL empieza por 'https:' y el servidor tiene un certificado digital válido",
    "distractores": [
      "La dirección IP del servidor está en nuestra lista de favoritos",
      "El diseño gráfico de la página es exactamente igual al original",
      "El tiempo de carga de la página es inferior a 3 segundos"
    ],
    "explicacion": "HTTPS + certificado digital válido garantizan que el servidor es quien dice ser y la comunicación está cifrada."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Navegación segura",
    "pregunta": "La autenticación de dos factores en operaciones bancarias online es considerada:",
    "correcta": "Imprescindible cuando se pueden realizar transferencias de fondos",
    "distractores": [
      "Opcional en todos los casos, a criterio del usuario",
      "Solo necesaria en dispositivos móviles, no en ordenadores de sobremesa",
      "Suficiente con el certificado FNMT sin necesidad de segundo factor"
    ],
    "explicacion": "El 2FA es imprescindible para transferencias de fondos y muy recomendable en cualquier otro caso."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Redes sociales",
    "pregunta": "Al crear una cuenta en una red social, ¿cuál debe ser el primer paso después de leer la política de privacidad?",
    "correcta": "Configurar el nivel de privacidad, bloqueando inicialmente todos los permisos",
    "distractores": [
      "Agregar el máximo número posible de contactos para ampliar la red",
      "Publicar información básica del perfil para que los conocidos puedan encontrarnos",
      "Instalar la App oficial en el smartphone para recibir notificaciones"
    ],
    "explicacion": "Comenzar con máxima privacidad y abrir gradualmente es mejor que empezar con todo público y restringir después."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Redes sociales",
    "pregunta": "¿Por qué en Facebook es especialmente importante no compartir información con 'amigos de los amigos'?",
    "correcta": "Porque implica compartir información con personas desconocidas que solo tienen un grado de separación con nosotros",
    "distractores": [
      "Porque Facebook cobra por el servicio premium que incluye esta opción",
      "Porque los amigos de los amigos pueden acceder a nuestros datos bancarios",
      "Porque los algoritmos de Facebook usan esa información para publicidad dirigida"
    ],
    "explicacion": "Los 'amigos de amigos' son desconocidos. Compartir con ellos expone la información a personas no confiables."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "Un firewall perimetral actúa como:",
    "correcta": "Frontera entre la red interna de la organización e Internet, controlando el tráfico permitido en ambas direcciones",
    "distractores": [
      "Un sistema que cifra todas las comunicaciones entre la red interna e Internet",
      "Un sistema que detecta y elimina malware en los equipos de la red interna",
      "Un servidor que gestiona la autenticación de todos los usuarios de la organización"
    ],
    "explicacion": "El firewall perimetral controla qué tráfico puede entrar y salir de la red, basándose en reglas definidas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "Una DMZ (Zona Desmilitarizada) en una organización es:",
    "correcta": "Una red intermedia entre Internet y la red interna donde se ubican los servidores públicos de la organización",
    "distractores": [
      "Una zona de la red donde no se aplican reglas de firewall para mayor velocidad",
      "Un rango de direcciones IP reservado para los administradores del sistema",
      "Un protocolo de cifrado de comunicaciones entre redes corporativas"
    ],
    "explicacion": "La DMZ aloja servidores web, correo, etc. accesibles desde Internet, separados de la red interna sensible."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "Un IDS (Sistema de Detección de Intrusiones) se diferencia de un IPS (Sistema de Prevención) en que:",
    "correcta": "El IDS detecta y alerta sobre amenazas; el IPS además puede bloquearlas activamente",
    "distractores": [
      "El IDS trabaja en la red y el IPS solo en los equipos finales",
      "El IDS es más moderno y eficaz que el IPS",
      "El IDS es un producto de software y el IPS un dispositivo de hardware"
    ],
    "explicacion": "IDS = detección y alerta pasiva. IPS = detección activa con capacidad de bloqueo automático."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "Un SIEM (Security Information and Event Management) tiene como función principal:",
    "correcta": "La correlación de eventos de seguridad procedentes de múltiples fuentes para detectar amenazas complejas",
    "distractores": [
      "Cifrar las comunicaciones entre todos los dispositivos de la red corporativa",
      "Gestionar las contraseñas de todos los usuarios de la organización",
      "Proporcionar conexiones VPN seguras para el trabajo remoto"
    ],
    "explicacion": "El SIEM agrega y correlaciona logs/eventos de múltiples sistemas para detectar patrones de ataque complejos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "Una VPN (Red Privada Virtual) es:",
    "correcta": "Un sistema de interconexión o de acceso a redes privadas a través de Internet mediante comunicaciones cifradas",
    "distractores": [
      "Un mecanismo de virtualización de redes físicas",
      "Una nueva tecnología de comunicaciones inalámbricas de quinta generación",
      "Un sistema de comunicaciones virtuales sin cifrado"
    ],
    "explicacion": "La VPN crea un túnel cifrado a través de Internet, permitiendo acceso seguro a redes privadas remotas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El CCN-CERT es el CSIRT de referencia para:",
    "correcta": "La Administración Pública, sistemas clasificados, infraestructuras críticas y coordinación de todos los CSIRTs nacionales",
    "distractores": [
      "Solo los ciudadanos y empresas privadas del sector tecnológico",
      "Exclusivamente las Fuerzas Armadas y sistemas de Defensa",
      "Únicamente las pequeñas y medianas empresas"
    ],
    "explicacion": "El CCN-CERT atiende a la Administración, sistemas clasificados, infraestructuras críticas y coordina los demás CSIRTs."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El INCIBE-CERT es el CSIRT de referencia para:",
    "correcta": "Ciudadanos, entidades privadas y la red académica",
    "distractores": [
      "Las Fuerzas Armadas y el Ministerio de Defensa",
      "La Administración General del Estado y organismos públicos",
      "Las infraestructuras críticas nacionales"
    ],
    "explicacion": "INCIBE-CERT atiende a ciudadanos, empresas privadas y la red académica; CCN-CERT atiende a la Administración."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El primer CERT creado en España fue:",
    "correcta": "IRIS-CERT, adscrito al Ministerio de Industria, para incidentes en la red académica RedIRIS",
    "distractores": [
      "CCN-CERT, adscrito al Centro Criptológico Nacional",
      "INCIBE-CERT, para ciudadanos y empresas privadas",
      "ESP-DEF-CERT, del Ministerio de Defensa"
    ],
    "explicacion": "IRIS-CERT fue el primer CERT en España, gestionando la red académica RedIRIS de universidades y centros de investigación."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El CCN (Centro Criptológico Nacional) está adscrito a:",
    "correcta": "El Centro Nacional de Inteligencia (CNI)",
    "distractores": [
      "El Ministerio de Industria, Turismo y Comercio",
      "La Agencia Española de Protección de Datos (AEPD)",
      "El Ministerio de Defensa"
    ],
    "explicacion": "El CCN fue creado en 2004 mediante el Real Decreto 421/2004 y está adscrito al CNI."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "La OSI (Oficina de Seguridad del Internauta) es una dependencia de:",
    "correcta": "INCIBE (Instituto Nacional de Ciberseguridad)",
    "distractores": [
      "CCN (Centro Criptológico Nacional)",
      "AEPD (Agencia Española de Protección de Datos)",
      "CNPIC (Centro Nacional de Protección de Infraestructuras Críticas)"
    ],
    "explicacion": "La OSI depende de INCIBE y su misión es reforzar la confianza del ciudadano en el ámbito digital."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El CNPIC tiene como misión principal:",
    "correcta": "El impulso, coordinación y supervisión de la protección de infraestructuras críticas españolas (12 sectores estratégicos)",
    "distractores": [
      "La gestión de incidentes de seguridad para ciudadanos y empresas privadas",
      "La elaboración y difusión de guías y recomendaciones de seguridad para la Administración",
      "La certificación de productos y sistemas criptográficos"
    ],
    "explicacion": "El CNPIC protege los 12 sectores estratégicos: Administración, Alimentación, Nuclear, Química, Salud, Financiero, TIC, Transporte, Agua, Energía, Espacio e Investigación."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "La AEPD (Agencia Española de Protección de Datos) tiene como objetivo principal:",
    "correcta": "Garantizar el cumplimiento de la legislación sobre protección de datos de carácter personal",
    "distractores": [
      "Gestionar incidentes de seguridad en infraestructuras críticas",
      "Coordinar los CSIRTs nacionales ante ciberataques",
      "Certificar los productos criptográficos usados en la Administración"
    ],
    "explicacion": "La AEPD fue creada en 1993 y actúa con independencia de las Administraciones Públicas para proteger los datos personales."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "FIRST es el organismo internacional que:",
    "correcta": "Relaciona los CERTs reconocidos de cada país mediante un proceso de adscripción con auditoría",
    "distractores": [
      "Coordina exclusivamente los CERTs europeos",
      "Es el centro de respuesta ante incidentes de la OTAN",
      "Es el foro europeo de protección de infraestructuras críticas"
    ],
    "explicacion": "FIRST (Forum of Incident Response and Security Teams) es el foro global de CERTs; TF-CSIRT es el europeo."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "El SOC (Security Operation Center) es:",
    "correcta": "Un centro que monitoriza continuamente los sistemas de una organización para detectar y responder ante amenazas de seguridad",
    "distractores": [
      "Un organismo gubernamental de coordinación de CERTs nacionales",
      "Un sistema de detección de intrusiones basado en firmas",
      "Una metodología de análisis de riesgos equivalente a MAGERIT"
    ],
    "explicacion": "El SOC proporciona monitorización 24/7 de la seguridad de los sistemas. El CCN tiene el SOC AGE para la Administración."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la configuración Wifi es INCORRECTA?",
    "correcta": "Ocultar el SSID hace la red Wifi completamente segura e inaccesible para atacantes",
    "distractores": [
      "WEP es un protocolo totalmente inseguro hoy en día",
      "WPS debe estar siempre desactivado por sus problemas de seguridad",
      "La contraseña Wifi debe ser diferente a la proporcionada por el instalador"
    ],
    "explicacion": "Ocultar el SSID dificulta la detección, pero no impide un ataque. Un hacker buscará primero las redes visibles, no las ocultas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el firewall es FALSA?",
    "correcta": "Un firewall correctamente configurado garantiza la seguridad completa de la red interna",
    "distractores": [
      "Un firewall de hardware es más robusto que uno de software ante compromisos del sistema",
      "Un firewall controla el tráfico entrante y saliente según reglas predefinidas",
      "La DMZ perimetral aloja servidores accesibles desde Internet, separados de la red interna"
    ],
    "explicacion": "Ningún firewall garantiza seguridad completa. El factor humano, los ataques internos y las vulnerabilidades 0-day pueden sortearlos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la VPN es CORRECTA?",
    "correcta": "Una VPN crea un túnel cifrado a través de Internet para acceder de forma segura a redes privadas remotas",
    "distractores": [
      "Una VPN es una nueva tecnología de comunicaciones inalámbricas",
      "Una VPN garantiza el anonimato completo en Internet",
      "Una VPN solo puede usarse entre dos dispositivos del mismo fabricante"
    ],
    "explicacion": "La VPN crea túneles cifrados. No garantiza anonimato completo ni se limita a fabricantes específicos."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estos rangos de direcciones IP pertenece a una red PÚBLICA (no privada)?",
    "correcta": "152.126.X.X",
    "distractores": [
      "192.168.1.1",
      "10.0.0.1",
      "172.26.0.1"
    ],
    "explicacion": "Los rangos privados son: 10.X.X.X, 172.16-31.X.X y 192.168.X.X. Cualquier otro rango (como 152.126.X.X) es público."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre los organismos de ciberseguridad es FALSA?",
    "correcta": "El INCIBE-CERT es el CSIRT de referencia para la Administración Pública General del Estado",
    "distractores": [
      "El CCN-CERT coordina todos los CSIRTs nacionales",
      "La AEPD actúa con independencia de las Administraciones Públicas",
      "El CNPIC supervisa la protección de infraestructuras críticas"
    ],
    "explicacion": "El CCN-CERT es el CSIRT de referencia para la Administración Pública. INCIBE-CERT atiende a ciudadanos y empresas privadas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Organismos",
    "pregunta": "¿Cómo se denomina a los centros con la capacidad técnica y la estructura más adecuada para la lucha contra las ciberamenazas?",
    "correcta": "Centro de Respuesta ante Incidentes (CERT)",
    "distractores": [
      "Centro de Respuesta al Usuario (CRU)",
      "Centro de Atención a Usuarios (CAU)",
      "Centro de Atención a la Seguridad (CAS)"
    ],
    "explicacion": "Los CERT (Computer Emergency Response Team) son los centros especializados en respuesta a ciberamenazas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Copias de seguridad",
    "pregunta": "¿Qué política de la organización se ve especialmente afectada por la creciente amenaza de los criptovirus?",
    "correcta": "Política de copias de seguridad",
    "distractores": [
      "Política de uso de la nube",
      "Política de actualizaciones",
      "Política de cuentas de usuario y contraseñas"
    ],
    "explicacion": "El ransomware/criptovirus cifra los datos, haciendo crítica la política de copias de seguridad offline para recuperarse."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "¿Cómo se evita la inyección de SQL?",
    "correcta": "En el código de la aplicación web, filtrando las URL maliciosas en los datos de entrada",
    "distractores": [
      "En el firewall de la organización, filtrando las URL maliciosas en los datos de entrada",
      "En el código de la aplicación web, filtrando todo el tráfico de entrada",
      "En el firewall de la organización, filtrando todo el tráfico de entrada"
    ],
    "explicacion": "La inyección SQL se previene en el código de la aplicación, filtrando y sanitizando los datos de entrada."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "Una medida básica de seguridad en el uso de redes WIFI es:",
    "correcta": "Desactivar el protocolo WPS",
    "distractores": [
      "Activar la lista de control de acceso (ACL) por MAC",
      "Ocultar el SSID",
      "Utilizar protocolos de cifrado seguros, como el WEP"
    ],
    "explicacion": "WPS tiene vulnerabilidades conocidas que permiten obtener la contraseña Wifi. Debe desactivarse siempre."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "la letra A en las siglas ADSL representa en castellano la palabra",
    "correcta": "Asíncrona",
    "distractores": [
      "Automatica",
      "Avanzada",
      "Autónoma"
    ],
    "explicacion": "ADSL = Asymmetric Digital Subscriber Line = Línea de Abonado Digital Asíncrona."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "Para cifrar las comunicaciones en una red Wifi, se puede usar el protocolo",
    "correcta": "WPA",
    "distractores": [
      "WPE",
      "WAP",
      "ninguno de los anteriores"
    ],
    "explicacion": "WPA (Wi-Fi Protected Access) es el protocolo de cifrado para redes Wifi. WEP es inseguro y WPE no existe."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "Una buena práctica en la configuración de un router ADSL doméstico es:",
    "correcta": "ninguna de las anteriores",
    "distractores": [
      "permitir el acceso remoto a la pantalla de configuración",
      "desactivar la utilización de comunicaciones cifradas",
      "entregar todas las conexiones entrantes a una 'default workstation' o DMZ"
    ],
    "explicacion": "Ninguna de esas opciones es buena práctica: el acceso remoto debe desactivarse, el cifrado activarse, y la DMZ no usarse en doméstico."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Correo electrónico",
    "pregunta": "Para garantizar la integridad de un mensaje de correo electrónico necesitaremos",
    "correcta": "firmarlo",
    "distractores": [
      "cifrarlo",
      "cifrarlo y firmarlo",
      "ninguna de las anteriores"
    ],
    "explicacion": "La firma digital garantiza la integridad (y autenticación). El cifrado garantiza confidencialidad. Son funciones distintas."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "una red privada virtual (VPN)",
    "correcta": "es un sistema de interconexión o de acceso a redes privadas",
    "distractores": [
      "es un mecanismo de virtualización de redes",
      "es un sistema de comunicaciones virtuales",
      "ninguna de las anteriores"
    ],
    "explicacion": "La VPN es un sistema de interconexión o acceso a redes privadas a través de Internet mediante túneles cifrados."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "¿Qué protocolo se considera más seguro en redes WIFI?",
    "correcta": "WPA2",
    "distractores": [
      "WEP",
      "WEP2",
      "WPA"
    ],
    "explicacion": "WPA2 es más seguro que WPA y mucho más que WEP. WPA3 es más reciente pero WPA2 era la respuesta correcta en el temario."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Protección doméstica",
    "pregunta": "¿Cuál de estas direcciones IP es pública?",
    "correcta": "11.1.1.1",
    "distractores": [
      "10.1.1.1",
      "172.26.0.1",
      "192.168.1.1"
    ],
    "explicacion": "Los rangos privados son: 10.X.X.X, 172.16-31.X.X y 192.168.X.X. La dirección 11.1.1.1 es pública."
  },
  {
    "temaNum": 4,
    "temaNombre": "Tema 4: Mecanismos de Defensa",
    "seccion": "Defensa perimetral",
    "pregunta": "¿A qué se denomina DMZ?",
    "correcta": "A la parte de la red interna de una organización en la que se colocan los servidores que ofrecen servicios al exterior de la empresa",
    "distractores": [
      "A la intranet de una organización",
      "A la parte de la red interna de una organización donde habitualmente se conectan los PCs de usuario",
      "A la parte de Internet donde se colocan los servidores web"
    ],
    "explicacion": "La DMZ es una red intermedia donde se ubican los servidores accesibles desde Internet, separados de la red interna."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "ITIL (Information Technologies Infrastructure Library) es:",
    "correcta": "Una biblioteca de buenas prácticas en la provisión y gestión de servicios TI",
    "distractores": [
      "Una normativa de obligado cumplimiento en seguridad de la información",
      "Una metodología específica para la realización de análisis de riesgos",
      "Una biblioteca de apoyo a la realización de auditorías de seguridad"
    ],
    "explicacion": "ITIL no tiene carácter obligatorio; es un conjunto de buenas prácticas de gestión de servicios TI."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "El origen de ITIL se sitúa en:",
    "correcta": "1986, como resultado de las investigaciones de la CCTA encargadas por el gobierno británico tras el fracaso del proyecto TAURUS",
    "distractores": [
      "1997, como iniciativa de la ONU para estandarizar la gestión de TI a nivel global",
      "2001, como respuesta al auge de las metodologías ágiles en desarrollo de software",
      "2008, publicado directamente en su versión 3 por el consorcio AXELOS"
    ],
    "explicacion": "ITIL nació en 1986 por encargo del gobierno británico a la CCTA, tras el fracaso del proyecto TAURUS (bolsa de Londres)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "La versión ITIL v3 organiza la gestión en torno al concepto de:",
    "correcta": "Ciclo de vida del servicio (cinco fases: Estrategia, Diseño, Transición, Operación y Mejora continua)",
    "distractores": [
      "Sistema de valor de servicio (SVS) con cuatro dimensiones críticas",
      "Análisis de riesgos en tres fases: activos, amenazas y salvaguardas",
      "Plan director de seguridad con alcance y objetivos definidos"
    ],
    "explicacion": "ITIL v3 centra la gestión en el ciclo de vida del servicio con cinco fases. ITIL v4 introduce el SVS."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "Las cuatro dimensiones críticas que define ITIL v4 son:",
    "correcta": "Organización y personas; Información y tecnología; Socios y proveedores; Flujos de valor y procesos",
    "distractores": [
      "Estrategia, Diseño, Transición, Operación y Mejora continua",
      "Activos, Amenazas, Vulnerabilidades y Salvaguardas",
      "Disponibilidad, Integridad, Confidencialidad y Autenticación"
    ],
    "explicacion": "ITIL v4 define 4 dimensiones para crear valor: Organización/personas, Información/tecnología, Socios/proveedores, Flujos/procesos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "El consorcio AXELOS, creado en 2014, es responsable de:",
    "correcta": "El desarrollo de ITIL y otras metodologías y buenas prácticas, como sucesor de la CCTA/OGC",
    "distractores": [
      "La certificación de productos de seguridad para la administración española",
      "La gestión del Esquema Nacional de Seguridad en España",
      "La coordinación de los CSIRTs a nivel europeo"
    ],
    "explicacion": "AXELOS es el consorcio entre el Gobierno del Reino Unido y Capita que desarrolla y posee ITIL desde 2014."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "En terminología ITIL, un 'proceso' es:",
    "correcta": "Un conjunto estructurado de actividades diseñado para cumplir con un objetivo concreto",
    "distractores": [
      "Un medio para entregar valor al cliente facilitando los resultados que desea",
      "Una subdivisión de la organización especializada en realizar un trabajo específico",
      "Un conjunto de capacidades organizativas para generar valor en forma de servicios"
    ],
    "explicacion": "Proceso = actividades estructuradas para un objetivo. Servicio = entregar valor. Función = unidad organizativa."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "La definición formal de 'riesgo' en el contexto de la UA5 es:",
    "correcta": "La probabilidad de que un evento adverso ocurra y que supone un impacto negativo si llegase a ocurrir",
    "distractores": [
      "La probabilidad de que ocurra un evento que puede tener impacto positivo o negativo",
      "La debilidad de un sistema que puede ser utilizada accidental o intencionadamente",
      "La posibilidad de que un evento adverso NO se produzca gracias a las salvaguardas"
    ],
    "explicacion": "Riesgo = probabilidad de evento adverso × impacto negativo. Solo considera eventos adversos, no positivos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "El análisis de riesgos es un proceso cíclico porque:",
    "correcta": "Los riesgos desconocidos pueden materializarse con el tiempo y los nuevos riesgos deben incorporarse al análisis",
    "distractores": [
      "Se debe repetir cada año por exigencia legal independientemente de los cambios",
      "Los activos de la organización cambian de valor cada mes",
      "Las salvaguardas pierden eficacia automáticamente a los seis meses"
    ],
    "explicacion": "El análisis de riesgos debe revisarse continuamente para incorporar nuevos riesgos que inicialmente eran desconocidos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "Las dos etapas principales de un análisis de riesgos son:",
    "correcta": "Identificar el nivel de riesgo existente y proponer mejoras en las defensas (plan de tratamiento de riesgos)",
    "distractores": [
      "Identificar activos y eliminar todas las vulnerabilidades detectadas",
      "Realizar una auditoría interna y contratar un seguro para los riesgos residuales",
      "Escanear vulnerabilidades técnicas y actualizar el software de los sistemas"
    ],
    "explicacion": "Fase 1: identificar riesgos sobre activos. Fase 2: proponer nuevas salvaguardas y elaborar plan de tratamiento."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "En la Fase 1 del análisis de riesgos (gestión de activos), ¿qué tipos de activos se pueden incluir?",
    "correcta": "Infraestructuras básicas, hardware, software, almacenamiento, bases de datos, informes, contratos y personal",
    "distractores": [
      "Solo los sistemas informáticos (hardware y software)",
      "Únicamente los activos con valor económico cuantificable en euros",
      "Exclusivamente los datos personales protegidos por la LOPD"
    ],
    "explicacion": "Los activos incluyen todo lo necesario para la disponibilidad de la información: infraestructuras, sistemas, documentos, personal, etc."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "La 'degradación' de un activo ante una amenaza mide:",
    "correcta": "Cuánto puede verse afectado el activo por esa amenaza (en tanto por ciento)",
    "distractores": [
      "La frecuencia con que se produce la amenaza (diaria, mensual, anual)",
      "El coste económico total de recuperar el activo tras el ataque",
      "El número de activos dependientes que se verían afectados en cascada"
    ],
    "explicacion": "En la valoración de amenazas se usan dos medibles: degradación (%) = cuánto afecta, y frecuencia = cada cuánto ocurre."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "En la Fase 4 (Gestión del riesgo), ¿cuántas acciones diferentes se pueden adoptar ante un riesgo identificado?",
    "correcta": "Cuatro: mitigar, asumir, transferir o eliminar",
    "distractores": [
      "Dos: aceptar o rechazar el riesgo",
      "Tres: mitigar, transferir o eliminar",
      "Cinco: mitigar, asumir, transferir, eliminar o ignorar"
    ],
    "explicacion": "Las 4 opciones de gestión del riesgo son: mitigar (reducir), asumir (aceptar), transferir (seguro/subcontratar) o eliminar."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "'Transferir el riesgo' como acción de gestión implica:",
    "correcta": "Subcontratar el servicio o contratar un seguro que cubra el impacto en caso de materialización",
    "distractores": [
      "Reducir el riesgo hasta un nivel aceptable mediante nuevas salvaguardas",
      "Eliminar completamente el riesgo para que no pueda materializarse",
      "Aceptar el riesgo cuando su mitigación es demasiado costosa"
    ],
    "explicacion": "Transferir = seguro o subcontratación. Mitigar = reducir. Asumir = aceptar. Eliminar = eliminar el activo/servicio."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - tipos",
    "pregunta": "La diferencia entre análisis de riesgos cualitativo y cuantitativo es:",
    "correcta": "El cualitativo usa escalas discretas (bajo/medio/alto); el cuantitativo usa estimaciones económicas reales en euros",
    "distractores": [
      "El cualitativo solo lo pueden realizar consultoras externas; el cuantitativo lo realiza el equipo interno",
      "El cualitativo analiza activos técnicos y el cuantitativo activos humanos",
      "El cualitativo se usa en grandes organizaciones y el cuantitativo en pequeñas empresas"
    ],
    "explicacion": "Cualitativo = escala de valores discretos, usado por la mayoría de organizaciones. Cuantitativo = euros reales, solo para grandes organizaciones."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - tipos",
    "pregunta": "La principal ventaja del análisis de riesgos cuantitativo es que permite:",
    "correcta": "Estimar el retorno de inversión en mejoras de salvaguardas y responder con precisión a '¿hasta dónde proteger?'",
    "distractores": [
      "Realizarse más rápidamente que el análisis cualitativo",
      "Ser comprensible por la dirección sin conocimientos técnicos",
      "Aplicarse a pequeñas organizaciones con pocos recursos"
    ],
    "explicacion": "El análisis cuantitativo estima los riesgos en euros, permitiendo calcular el ROI de las inversiones en seguridad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "MAGERIT es la metodología de análisis de riesgos desarrollada por:",
    "correcta": "El Consejo Superior de Administración Electrónica, de uso libre sin autorización previa",
    "distractores": [
      "La Central Agency of Data Processing del gobierno del Reino Unido",
      "El gobierno francés, con herramienta gratuita de código libre",
      "El organismo internacional ISO para la familia de normas 27000"
    ],
    "explicacion": "MAGERIT es española, del Consejo Superior de Administración Electrónica. Publicada en 1997, actualmente en versión 3."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "La metodología CRAMM es actualmente utilizada por:",
    "correcta": "La OTAN y el ejército holandés, entre otras organizaciones internacionales",
    "distractores": [
      "El gobierno español como metodología principal de análisis de riesgos",
      "Las pequeñas empresas por su sencillez de aplicación",
      "Exclusivamente el gobierno francés y sus organismos dependientes"
    ],
    "explicacion": "CRAMM es del gobierno británico, compleja (requiere herramienta específica) y usada por la OTAN, entre otros."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "MAGERIT V3 está estructurada en tres libros. ¿Cuál de estas descripciones corresponde al Libro 2?",
    "correcta": "Catálogo de Elementos: activos, tipología, valoración, amenazas habituales y salvaguardas",
    "distractores": [
      "El método: secuencia de acciones y tareas para el proceso de gestión de riesgos",
      "Guías técnicas: manual de referencia para técnicas usadas en análisis de riesgos",
      "Marco normativo: legislación y normativa aplicable al análisis de riesgos"
    ],
    "explicacion": "MAGERIT V3: Libro 1 = El método. Libro 2 = Catálogo de Elementos. Libro 3 = Guías técnicas."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "La norma ISO/IEC 27005 se basa en el modelo:",
    "correcta": "PDCA (Plan, Do, Check, Act), característico de la familia ISO 27000",
    "distractores": [
      "CRAMM de tres fases: objetivos, análisis y salvaguardas",
      "MAGERIT de cuatro fases: activos, amenazas, salvaguardas y riesgo",
      "EBIOS de cinco fases: contexto, requisitos, amenazas, objetivos y riesgos"
    ],
    "explicacion": "ISO 27005 usa el modelo PDCA (Plan-Do-Check-Act) para la gestión del riesgo, coherente con toda la familia ISO 27000."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "¿Cuál de estas NO es una metodología reconocida de análisis de riesgos?",
    "correcta": "ITIL",
    "distractores": [
      "MAGERIT",
      "CRAMM",
      "EBIOS"
    ],
    "explicacion": "ITIL es una biblioteca de buenas prácticas de gestión de servicios TI, no una metodología de análisis de riesgos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "La definición formal de auditoría de seguridad es:",
    "correcta": "El proceso de recoger, agrupar y evaluar evidencias para determinar si un sistema de información protege el activo empresarial y cumple sus fines eficientemente",
    "distractores": [
      "El proceso de identificar y explotar vulnerabilidades en los sistemas de información",
      "La elaboración de un plan director que define la estrategia de seguridad TIC",
      "La gestión de incidentes de seguridad con el objetivo de minimizar su impacto"
    ],
    "explicacion": "La auditoría recopila evidencias para evaluar si el sistema protege activos, mantiene integridad y cumple los fines organizativos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "La diferencia entre 'auditoría de seguridad' y 'análisis de seguridad' es que:",
    "correcta": "El análisis de seguridad identifica vulnerabilidades técnicas (hacking ético); la auditoría evalúa el cumplimiento integral (técnico, organizativo, legal)",
    "distractores": [
      "Son términos sinónimos que describen el mismo proceso",
      "La auditoría solo analiza aspectos técnicos y el análisis incluye el factor humano",
      "El análisis es realizado por externos y la auditoría solo por el equipo interno"
    ],
    "explicacion": "El análisis de seguridad = pentesting/vulnerabilidades. La auditoría evalúa el conjunto: sistemas, procesos, personas y normativa."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "Los objetivos de una auditoría de seguridad de la información incluyen verificar que:",
    "correcta": "La disponibilidad está razonablemente asegurada, los controles de integridad/confidencialidad/autenticación están implantados y se cumple la normativa",
    "distractores": [
      "Todos los sistemas están actualizados a la última versión de software",
      "El personal tiene la formación técnica adecuada para su puesto",
      "Los activos de la organización están correctamente valorados económicamente"
    ],
    "explicacion": "La auditoría verifica: disponibilidad, integridad, confidencialidad, autenticación, trazabilidad y cumplimiento normativo."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "En el proceso de ejecución de una auditoría, la fase de 'recogida de evidencias' se realiza:",
    "correcta": "Después de la planificación y como resultado de las revisiones y pruebas realizadas",
    "distractores": [
      "Como primer paso, antes de definir el alcance de la auditoría",
      "Simultáneamente a la emisión del dictamen final",
      "Solo si se detectan incidentes de seguridad durante la auditoría"
    ],
    "explicacion": "El orden es: alcance → equipo auditor → planificación → recogida de evidencias → hallazgos → informe → dictamen."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "¿Cuál de estas tareas NO corresponde a la realización de una auditoría de seguridad?",
    "correcta": "Identificar las amenazas y proponer salvaguardas para proteger a la organización",
    "distractores": [
      "Recoger, agrupar y evaluar evidencias sobre el sistema de información",
      "Verificar que se mantiene la integridad de los datos",
      "Verificar que el sistema realiza de forma eficaz los fines de la organización"
    ],
    "explicacion": "Identificar amenazas y proponer salvaguardas es la función del análisis de riesgos, no de la auditoría."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "Un Plan Director de Seguridad define:",
    "correcta": "La estrategia en seguridad TIC de la organización durante un período acotado, identificando actuaciones y alineando todas las áreas",
    "distractores": [
      "Los procedimientos de respuesta ante incidentes de seguridad en tiempo real",
      "El catálogo completo de activos de la organización con su valoración económica",
      "La política de contraseñas y autenticación de todos los sistemas corporativos"
    ],
    "explicacion": "El Plan Director es estratégico: define qué hacer en un período, alineando toda la organización con la estrategia de seguridad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "Los dominios de seguridad que debe cubrir un Plan Director de Seguridad son:",
    "correcta": "Seguridad física, control de accesos, gestión de redes, sistemas, legislación, organización, políticas, personal, continuidad e inventario",
    "distractores": [
      "Solo los aspectos técnicos: redes, sistemas y aplicaciones",
      "Exclusivamente los aspectos legales: RGPD, ENS y legislación sectorial",
      "Solo los aspectos organizativos: políticas, roles y procedimientos"
    ],
    "explicacion": "El Plan Director debe cubrir TODOS los dominios: físico, lógico, organizativo, legal, personal y continuidad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "¿Cuál NO es un factor clave para el éxito de un Plan Director de Seguridad?",
    "correcta": "Realizar un análisis de riesgos (es un resultado del plan, no un factor previo de éxito)",
    "distractores": [
      "Compromiso de la dirección",
      "Designar un responsable del plan",
      "Determinar un marco metodológico de referencia"
    ],
    "explicacion": "El análisis de riesgos es una FASE del plan director, no un factor previo de éxito. Los factores son: compromiso directivo, responsable y metodología."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "La norma de referencia para elaborar un Plan Director de Seguridad es:",
    "correcta": "ISO 27002",
    "distractores": [
      "ISO 27005",
      "MAGERIT V3",
      "CRAMM"
    ],
    "explicacion": "ISO 27002 es la norma de referencia para el Plan Director. ISO 27005 es para análisis de riesgos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "Un 'incidente' en el contexto de la gestión de la seguridad es:",
    "correcta": "Cualquier situación o evento que pueda ocasionar la pérdida o degradación de un servicio, o afectar a las dimensiones de la seguridad",
    "distractores": [
      "Exclusivamente los ciberataques externos planificados contra la organización",
      "Solo los fallos técnicos de hardware o software con impacto en la disponibilidad",
      "Los eventos de seguridad detectados por el IDS/IPS de la organización"
    ],
    "explicacion": "Un incidente puede ser fortuito o intencionado, y afectar a cualquier dimensión: disponibilidad, integridad, confidencialidad, etc."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "El CSIRT (Computer Security Incident Response Team) es:",
    "correcta": "El equipo de respuesta ante incidentes de seguridad, eje de control ante incidentes, formado por personal cualificado con responsabilidad en todas las áreas expuestas",
    "distractores": [
      "El organismo gubernamental de coordinación de incidentes de ciberseguridad",
      "Un sistema automatizado de respuesta ante ataques de ransomware",
      "El equipo auditor externo que revisa el cumplimiento del plan de seguridad"
    ],
    "explicacion": "El CSIRT interno de la organización es el equipo que gestiona y responde ante los incidentes de seguridad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "¿Por qué es especialmente importante el 'plan de comunicación' en el plan de respuesta ante incidentes?",
    "correcta": "Porque una mala gestión de la comunicación a terceros puede generar más daño que la propia pérdida de información",
    "distractores": [
      "Porque la comunicación rápida a los medios de comunicación evita sanciones legales",
      "Porque el plan de comunicación permite negociar con los atacantes el rescate de los datos",
      "Porque la comunicación al personal interno es suficiente sin notificar a clientes ni autoridades"
    ],
    "explicacion": "Una comunicación inadecuada (timing, destinatarios, mensaje) puede amplificar el impacto reputacional y legal del incidente."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "Durante la 'contención del daño' ante un incidente, es importante:",
    "correcta": "Minimizar el impacto y evitar destruir pruebas necesarias para identificar y rastrear al atacante",
    "distractores": [
      "Apagar inmediatamente todos los sistemas para detener el ataque",
      "Eliminar todos los ficheros sospechosos para limpiar el sistema lo antes posible",
      "Formatear los discos afectados para recuperar el servicio en el menor tiempo posible"
    ],
    "explicacion": "Hay tensión entre la velocidad de respuesta y la preservación de evidencias forenses. Se deben mantener ambas consideraciones."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "La 'resiliencia' de una organización se define en la UA5 como:",
    "correcta": "La capacidad de la organización de recuperarse frente a la adversidad y seguir proyectando el futuro",
    "distractores": [
      "La capacidad de detectar y responder a incidentes de seguridad en tiempo real",
      "La resistencia de los sistemas técnicos ante ataques de denegación de servicio",
      "El nivel mínimo de servicio que debe mantenerse durante un incidente"
    ],
    "explicacion": "Resiliencia = capacidad de recuperación y continuidad proyectada hacia el futuro. El PCN formaliza esta capacidad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "El parámetro RTO (Recovery Time Objective) mide:",
    "correcta": "El tiempo que transcurre desde la parada de un proceso hasta que se logra recuperar su funcionamiento",
    "distractores": [
      "El nivel mínimo de funcionamiento que debe tener un proceso para darlo por recuperado",
      "El tiempo máximo que un proceso puede permanecer inactivo antes de consecuencias dramáticas",
      "El grado de dependencia de la actualidad de los datos en el proceso de recuperación"
    ],
    "explicacion": "RTO = tiempo de recuperación. MTD = máximo tolerable de caída (MTD > RTO). RPO = pérdida de datos tolerada."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "El parámetro MTD (Maximum Tolerable Downtime) establece:",
    "correcta": "El tiempo máximo que un proceso puede permanecer inactivo antes de que las consecuencias sean dramáticas",
    "distractores": [
      "El tiempo de recuperación objetivo desde la parada hasta la reanudación",
      "El nivel mínimo de funcionamiento necesario para dar por recuperado el proceso",
      "El grado de dependencia de los datos actualizados en el proceso"
    ],
    "explicacion": "MTD es el tiempo máximo tolerable de caída. SIEMPRE debe ser mayor que el RTO (tiempo real de recuperación)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "El parámetro RPO (Recovery Point Objective) mide:",
    "correcta": "El grado de dependencia de la actualidad de los datos y condiciona la política de copias de seguridad",
    "distractores": [
      "El tiempo máximo que un proceso puede estar inactivo sin consecuencias graves",
      "El tiempo necesario para recuperar el funcionamiento del proceso",
      "El nivel mínimo de rendimiento del sistema durante la recuperación"
    ],
    "explicacion": "RPO define cuánta pérdida de datos es tolerable. Si el RPO es 4 horas, las copias deben hacerse al menos cada 4 horas."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "Las fases de desarrollo de un PCN (Plan de Continuidad del Negocio) son:",
    "correcta": "Definición del alcance, análisis de la organización, estrategia de continuidad, respuesta, pruebas/mantenimiento y concienciación",
    "distractores": [
      "Activos, amenazas, salvaguardas, riesgo y plan de tratamiento",
      "Alcance, equipo auditor, planificación, evidencias, hallazgos, informe y dictamen",
      "Estrategia, diseño, transición, operación y mejora continua"
    ],
    "explicacion": "Las 6 fases del PCN son: alcance → análisis (BIA+riesgos) → estrategia → respuesta → pruebas → concienciación."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "La norma internacional específica para la continuidad del negocio es:",
    "correcta": "ISO 22301",
    "distractores": [
      "ISO 27001",
      "ISO 27005",
      "ISO 27002"
    ],
    "explicacion": "ISO 22301 es la norma específica de continuidad del negocio. ISO 27001 es el SGSI. ISO 27002 son los controles de seguridad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "El objetivo principal de un PCN es:",
    "correcta": "La reanudación de las operaciones de la organización en el menor tiempo posible ante cualquier contingencia",
    "distractores": [
      "Eliminar completamente todos los riesgos que puedan afectar a la organización",
      "Identificar y valorar todos los activos de información de la organización",
      "Establecer los controles técnicos necesarios para prevenir ciberataques"
    ],
    "explicacion": "El PCN busca la continuidad y recuperación rápida, no la eliminación total del riesgo (que es imposible)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de continuidad del negocio",
    "pregunta": "La Fase 2 del PCN incluye el Análisis del Impacto sobre el Negocio (BIA). ¿Qué parámetros analiza?",
    "correcta": "RTO, recursos implicados, MTD, ROL (nivel mínimo de recuperación) y RPO",
    "distractores": [
      "Activos, amenazas, vulnerabilidades, salvaguardas y riesgo residual",
      "Alcance, equipo auditor, calendario y criterios de auditoría",
      "Estrategia, diseño, transición, operación y mejora del servicio"
    ],
    "explicacion": "El BIA analiza: RTO (recuperación), MTD (máximo tolerable), ROL (nivel mínimo), RPO (datos) y dependencias."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre ITIL es FALSA?",
    "correcta": "ITIL es una normativa de obligado cumplimiento para todas las organizaciones que presten servicios TI",
    "distractores": [
      "ITIL tiene su origen en la investigación encargada por el gobierno británico tras el fracaso del proyecto TAURUS",
      "ITIL v3 organiza la gestión en torno al ciclo de vida del servicio",
      "ITIL v4 define el Sistema de Valor de Servicio (SVS) como evolución del ciclo de vida"
    ],
    "explicacion": "ITIL NO es obligatorio; es un conjunto de buenas prácticas. Su adopción es voluntaria."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el análisis de riesgos es INCORRECTA?",
    "correcta": "El análisis de riesgos cuantitativo es el más utilizado por la mayoría de organizaciones por su sencillez",
    "distractores": [
      "El análisis de riesgos cualitativo usa escalas como 'bajo, medio, alto'",
      "El análisis de riesgos es un proceso cíclico que debe revisarse con el tiempo",
      "MAGERIT V3 es una metodología española de análisis de riesgos de uso libre"
    ],
    "explicacion": "La mayoría de organizaciones usa el análisis cualitativo. El cuantitativo requiere alta cualificación y recursos, solo accesible a grandes organizaciones."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el MTD y el RTO es CORRECTA?",
    "correcta": "El MTD (tiempo máximo tolerable de caída) siempre debe ser MAYOR que el RTO (tiempo de recuperación)",
    "distractores": [
      "El RTO debe ser siempre mayor que el MTD para garantizar la recuperación a tiempo",
      "MTD y RTO son parámetros equivalentes que miden lo mismo",
      "El RPO (nivel de recuperación de datos) siempre es mayor que el MTD"
    ],
    "explicacion": "MTD > RTO es una condición imprescindible: si el tiempo de recuperación supera el máximo tolerable, el impacto es dramático."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre la auditoría de seguridad es FALSA?",
    "correcta": "La auditoría de seguridad y el análisis de vulnerabilidades (pentesting) son términos sinónimos",
    "distractores": [
      "La auditoría evalúa evidencias sobre el cumplimiento de controles y normativa",
      "La auditoría puede realizarse por un equipo interno o externo",
      "El resultado de una auditoría incluye hallazgos, informe y dictamen final"
    ],
    "explicacion": "La auditoría evalúa el cumplimiento integral. El pentesting/análisis de vulnerabilidades es una técnica técnica específica (análisis de seguridad)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones sobre el Plan Director de Seguridad es CORRECTA?",
    "correcta": "El análisis de riesgos es una FASE del proceso de elaboración del Plan Director, no un factor previo de éxito",
    "distractores": [
      "El compromiso de la dirección no es necesario si se designa un responsable técnico del plan",
      "El Plan Director solo debe cubrir los aspectos técnicos de la seguridad",
      "La norma de referencia para el Plan Director es la ISO 27005"
    ],
    "explicacion": "El análisis de riesgos (fase 3) es parte del desarrollo del Plan Director. Los factores de éxito son: compromiso directivo, responsable, metodología y recursos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "¿Qué es ITIL?",
    "correcta": "Una biblioteca de buenas prácticas en la gestión de las Tecnologías de la Información",
    "distractores": [
      "Una norma europea de obligado cumplimiento en Tecnologías de la Información",
      "Un conjunto de estándares en Tecnologías de la Información",
      "Ninguna de las respuestas es correcta"
    ],
    "explicacion": "ITIL es una biblioteca de buenas prácticas, no una norma de obligado cumplimiento."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "ITIL es...",
    "correcta": "una recopilación de buenas prácticas en la gestión de servicios",
    "distractores": [
      "una metodología de trabajo",
      "un manual de acciones a realizar para hacer un análisis de riesgos",
      "una norma ISO de la familia ISO 27.000"
    ],
    "explicacion": "ITIL es una recopilación de buenas prácticas, no una metodología rígida ni una norma ISO."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "El objetivo de ITIL v2 es:",
    "correcta": "Alinear las Tecnologías de la Información con el negocio",
    "distractores": [
      "Mejorar las comunicaciones de la organización",
      "Separar las funciones de las Tecnologías de la Información",
      "Integrar las Tecnologías de la Información en el negocio"
    ],
    "explicacion": "El objetivo de ITIL v2 es alinear las TI con el negocio."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "ITIL",
    "pregunta": "¿Qué etapas conforman el Ciclo de Vida del Servicio?",
    "correcta": "Estrategia del Servicio, Diseño del Servicio, Transición del Servicio, Operación del Servicio y Mejora Continua",
    "distractores": [
      "Transición del servicio, Publicación, Difusión y Mejora continua",
      "Plan, Do, Check, Act",
      "Estrategia del Servicio, Implantación del Servicio y Mantenimiento del Servicio"
    ],
    "explicacion": "El Ciclo de Vida del Servicio de ITIL v3 tiene 5 etapas: Estrategia, Diseño, Transición, Operación y Mejora Continua."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "¿Qué opciones existen para tratar los riesgos?",
    "correcta": "Mitigar, asumir, transferir o eliminar el riesgo",
    "distractores": [
      "Ninguna de las respuestas es correcta",
      "Mitigar, asumir y eliminar el riesgo",
      "Transferir a un tercero y eliminar el riesgo"
    ],
    "explicacion": "Las cuatro opciones de tratamiento del riesgo son: mitigar, asumir, transferir o eliminar."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "¿En qué consiste un ANÁLISIS DE RIESGOS?",
    "correcta": "Las dos respuestas indicadas son correctas",
    "distractores": [
      "En identificar los riesgos a los que están expuestos los activos de la organización",
      "En identificar los problemas de seguridad que evidencian vulnerabilidades",
      "Ninguna de las dos respuestas indicadas es correcta"
    ],
    "explicacion": "El análisis de riesgos identifica tanto los riesgos sobre los activos como las vulnerabilidades existentes."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "En el ámbito del análisis de riesgos, se denomina incidente a:",
    "correcta": "Los hechos que deben evitarse en la organización pues causan un impacto en el negocio",
    "distractores": [
      "Las averías de los sistemas de Información",
      "Un fallo en el sistema eléctrico",
      "Los hechos que no deben evitarse en la organización pues aportan beneficio al negocio"
    ],
    "explicacion": "Un incidente es cualquier hecho que cause un impacto negativo en el negocio y que deba evitarse."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "Un activo es...",
    "correcta": "un recurso software, hardware, de personal, administrativo, o funcional que es necesario para el funcionamiento del servicio",
    "distractores": [
      "el hardware asociado a los servicios que estamos considerando",
      "una debilidad del sistema que puede ser utilizada de forma accidental o intencionada",
      "ninguna de las anteriores"
    ],
    "explicacion": "Los activos incluyen todo tipo de recursos necesarios: software, hardware, personal, procesos, etc."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "¿Qué se considera el activo más importante de las organizaciones?",
    "correcta": "La información",
    "distractores": [
      "Sus beneficios",
      "Su seguridad",
      "Sus empleados"
    ],
    "explicacion": "La información es el activo más valioso de las organizaciones en la sociedad de la información."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "El IMPACTO es:",
    "correcta": "Un medible del grado de daño que se ha producido sobre un activo",
    "distractores": [
      "Ninguna de las respuestas es correcta",
      "Un medible de la importancia de una vulnerabilidad",
      "Un medible sobre el número de activos de una organización"
    ],
    "explicacion": "El impacto mide el grado de daño producido en un activo cuando se materializa una amenaza."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "Denominamos RIESGO a:",
    "correcta": "La probabilidad de que ocurra un evento adverso",
    "distractores": [
      "La probabilidad de que ocurra un fallo de hardware",
      "Un medible de las posibles amenazas detectadas en una organización",
      "La probabilidad de que ocurra un fallo en el sistema"
    ],
    "explicacion": "El riesgo es la probabilidad de que ocurra un evento adverso multiplicado por el impacto que causaría."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "Definimos el riesgo como:",
    "correcta": "la probabilidad de que ocurra un evento adverso que supone un impacto negativo en caso de ocurrir",
    "distractores": [
      "la probabilidad de que ocurra un evento que puede tener un impacto positivo o negativo en la organización",
      "la probabilidad de que una amenaza nunca ocurra",
      "la posibilidad de que un evento adverso no se produzca"
    ],
    "explicacion": "El riesgo solo considera eventos adversos con impacto negativo, no eventos positivos."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "Un ATAQUE es:",
    "correcta": "Una amenaza que proviene de terceros que intencionadamente buscan comprometer la seguridad del sistema",
    "distractores": [
      "Un error intencionado en los sistemas de información",
      "Una vulnerabilidad que proviene de terceros con la intención de robar la información de la organización",
      "Una negligencia de terceros que compromete la seguridad de los sistemas"
    ],
    "explicacion": "Un ataque es una amenaza intencionada, a diferencia de los accidentes o negligencias."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos",
    "pregunta": "Una vulnerabilidad es un tipo de",
    "correcta": "debilidad",
    "distractores": [
      "amenaza",
      "incidente",
      "riesgo"
    ],
    "explicacion": "La vulnerabilidad es una debilidad del sistema que puede ser explotada por una amenaza."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - tipos",
    "pregunta": "¿Qué tipos de riesgo existen?",
    "correcta": "Conocidos y desconocidos",
    "distractores": [
      "Ninguna de las respuestas es correcta",
      "Mitigables y gestionables",
      "Previstos, imprevistos y mitigables"
    ],
    "explicacion": "Los riesgos se clasifican en conocidos (identificados) y desconocidos (aún no identificados)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "¿Cuál de los siguientes eventos se puede considerar un 'incidente de seguridad'?",
    "correcta": "todos los anteriores",
    "distractores": [
      "la pérdida de suministro eléctrico",
      "el robo de información confidencial",
      "el fallo en un disco de datos"
    ],
    "explicacion": "Cualquier evento que afecte a la disponibilidad, integridad o confidencialidad es un incidente de seguridad."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Análisis de riesgos - fases",
    "pregunta": "¿En qué consiste la Gestión del Riesgo?",
    "correcta": "En identificar y desplegar las medidas técnicas y organizativas requeridas para evitar, minimizar o controlar los riesgos identificados, de forma que se elimine o reduzca el daño que pueden ocasionar",
    "distractores": [
      "En identificar y desplegar las medidas técnicas y organizativas requeridas para eliminar los riesgos identificados, de forma que se evite totalmente el daño que pueden ocasionar",
      "En subcontratar a una empresa externa la seguridad de la organización",
      "En aplicar determinadas medidas destinadas a mitigar los riesgos detectados"
    ],
    "explicacion": "La gestión del riesgo busca evitar, minimizar o controlar los riesgos, no eliminarlos todos (lo cual es imposible)."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "¿Cuáles de las siguientes respuestas son metodologías reconocidas de análisis de riesgos?",
    "correcta": "todas las anteriores",
    "distractores": [
      "Magerit v3",
      "Ebios",
      "CRAMM"
    ],
    "explicacion": "MAGERIT, EBIOS y CRAMM son las tres metodologías reconocidas de análisis de riesgos más mencionadas en el temario."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "Entre las posibles metodologías que se pueden utilizar para realizar un análisis de riesgos están:",
    "correcta": "CRAMM, EBIOS y MAGERIT v3",
    "distractores": [
      "ITIL, ISO 27.001 y MAGERIT v3",
      "ITIL v3, CRAMM y MAGERIT v3",
      "Ninguna de las respuestas es correcta"
    ],
    "explicacion": "Las metodologías reconocidas de análisis de riesgos son CRAMM, EBIOS y MAGERIT III."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Metodologías de análisis de riesgos",
    "pregunta": "¿Qué es MAGERIT?",
    "correcta": "Una metodología de análisis y gestión de riesgos enfocada a las Administraciones Públicas",
    "distractores": [
      "Una metodología de análisis de la seguridad propuesta por el CNI",
      "Una metodología de análisis forense desarrollada por las administraciones públicas",
      "Una metodología de análisis de intrusiones"
    ],
    "explicacion": "MAGERIT es la metodología española de análisis y gestión de riesgos, orientada a las Administraciones Públicas."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "La auditoría informática consiste en:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información realiza de forma eficaz los fines de la organización y utiliza eficientemente los recursos",
      "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información mantiene la integridad de los datos",
      "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información protege el activo empresarial"
    ],
    "explicacion": "La auditoría informática evalúa todos esos aspectos: eficacia, integridad y protección del activo empresarial."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "¿Cuál de las siguientes tareas NO corresponde a la realización de una auditoría informática?",
    "correcta": "identificar las amenazas y proponer salvaguardas para proteger a la organización",
    "distractores": [
      "verificar que un sistema realiza de forma eficaz los fines de la organización y utiliza eficientemente los recursos",
      "recoger, agrupar y evaluar evidencias para determinar si un sistema de información protege el activo empresarial",
      "verificar que se mantiene la integridad de los datos"
    ],
    "explicacion": "Según el banco de preguntas oficial de la asignatura, verificar el uso eficaz y eficiente de los recursos no se considera una tarea directa en esta pregunta específica de auditoría."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "Algunos de los objetivos de la auditoría informática son:",
    "correcta": "Las dos respuestas indicadas son correctas",
    "distractores": [
      "Ninguna de las dos respuestas indicadas es correcta",
      "Eliminar o minimizar la probabilidad de pérdida de información",
      "Verificar el control interno de la función informática"
    ],
    "explicacion": "La auditoría busca tanto minimizar la pérdida de información como verificar el control interno de la función informática."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "Se consideran tipos de auditoría desde el punto de vista informático:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "La auditoría de datos",
      "La auditoría de las comunicaciones",
      "La auditoría legal de la LOPD"
    ],
    "explicacion": "Los tipos de auditoría informática incluyen la de datos, comunicaciones, legal de LOPD, entre otras."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "¿De qué forma podemos desarrollar una auditoría?",
    "correcta": "Auditoría alrededor del ordenador, a través del ordenador y con el ordenador",
    "distractores": [
      "Auditoría a través de la informática, a través de la seguridad y con el ordenador",
      "Auditoría a través de la seguridad",
      "Ninguna de las anteriores es correcta"
    ],
    "explicacion": "Las tres formas de auditoría informática son: alrededor del ordenador, a través del ordenador y con el ordenador."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Auditoría de seguridad",
    "pregunta": "¿Qué resultados obtenemos tras la realización de una auditoría informática?",
    "correcta": "Evidencias de los riesgos asociados a los sistemas que dan soporte a la información de la organización",
    "distractores": [
      "Identificación de las salvaguardas que minimizan los riesgos detectados",
      "Posibles adquisiciones a realizar para mejorar la infraestructura informática",
      "Ninguna de las respuestas es correcta"
    ],
    "explicacion": "El resultado principal de una auditoría son las evidencias sobre los riesgos que afectan a los sistemas de información."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "¿Qué define un Plan Director de Seguridad?",
    "correcta": "La estrategia en seguridad TIC de la organización",
    "distractores": [
      "La seguridad de la organización",
      "La estrategia en seguridad física y lógica de la organización",
      "La estrategia de negocio de la organización"
    ],
    "explicacion": "El Plan Director de Seguridad define la estrategia en seguridad TIC de la organización."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "Uno de los factores clave para el éxito de un Plan Director de Seguridad es:",
    "correcta": "Compromiso de la dirección",
    "distractores": [
      "Compromiso con los empleados",
      "Ninguna de las respuestas es correcta",
      "Compromiso con los proveedores"
    ],
    "explicacion": "El compromiso de la dirección es el factor clave más importante para el éxito de un Plan Director."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan Director de Seguridad",
    "pregunta": "Uno de los objetivos de un Plan Director de Seguridad es:",
    "correcta": "Aportar confianza sobre los servicios ofrecidos",
    "distractores": [
      "Ninguna de las respuestas es correcta",
      "Realizar un análisis de riesgos en la organización",
      "Cumplir los requisitos de la LSSIE"
    ],
    "explicacion": "Aportar confianza sobre los servicios ofrecidos es uno de los objetivos del Plan Director."
  },
  {
    "temaNum": 5,
    "temaNombre": "Tema 5: Instrumentos para la Gestión",
    "seccion": "Plan de respuesta ante incidentes",
    "pregunta": "Un Plan de Respuesta ante Incidentes implica:",
    "correcta": "Documentar una relación de actividades y tareas destinadas a dar respuesta a cualquier incidente genérico que afecte a la seguridad de la información",
    "distractores": [
      "Documentar la seguridad de la organización",
      "Cumplir un requisito legal",
      "Documentar una relación de actividades y tareas destinadas a dar respuesta a cualquier incidente de la organización"
    ],
    "explicacion": "El Plan de Respuesta ante Incidentes documenta actividades para responder a incidentes de seguridad de la información."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Bloques legislativos",
    "pregunta": "El marco legislativo del tema se agrupa principalmente en:",
    "correcta": "Infraestructuras críticas, protección de datos, ciberseguridad y comunicaciones/administración electrónica",
    "distractores": [
      "Criptografía, malware, redes inalámbricas y copias de seguridad",
      "Auditoría, pentesting, programación segura y bases de datos",
      "ISO 9001, ITIL, COBIT y Scrum"
    ],
    "explicacion": "El tema organiza la legislación en cuatro bloques: infraestructuras críticas, protección de datos personales, ciberseguridad y comunicaciones/administración electrónica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Infraestructuras críticas",
    "pregunta": "La Ley 8/2011 se relaciona principalmente con:",
    "correcta": "La protección de las infraestructuras críticas",
    "distractores": [
      "La firma electrónica avanzada",
      "La protección de datos personales",
      "La certificación ISO 27001"
    ],
    "explicacion": "La Ley 8/2011 establece medidas para la protección de las infraestructuras críticas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Infraestructuras críticas",
    "pregunta": "El Real Decreto 704/2011 aprueba:",
    "correcta": "El Reglamento de protección de las infraestructuras críticas",
    "distractores": [
      "El Reglamento General de Protección de Datos",
      "El Esquema Nacional de Interoperabilidad",
      "La norma ISO 27002"
    ],
    "explicacion": "El Real Decreto 704/2011 desarrolla reglamentariamente la protección de infraestructuras críticas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La antigua LORTAD fue:",
    "correcta": "La primera ley española que regulaba específicamente datos de carácter personal",
    "distractores": [
      "Una norma ISO certificable",
      "Una directiva europea sobre ciberseguridad",
      "Una guía CCN-STIC para el ENS"
    ],
    "explicacion": "La LORTAD fue sustituida posteriormente por la LOPD."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La LOPD 15/1999 fue sustituida actualmente por:",
    "correcta": "La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales",
    "distractores": [
      "La Ley 59/2003 de Firma Electrónica",
      "El Real Decreto 3/2010 del ENS",
      "La Ley 8/2011 de infraestructuras críticas"
    ],
    "explicacion": "La LOPDyGDD adapta el ordenamiento español al RGPD y sustituye a la antigua LOPD."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "El Reglamento General de Protección de Datos es:",
    "correcta": "Un reglamento europeo de aplicación directa",
    "distractores": [
      "Una norma ISO voluntaria y no certificable",
      "Una guía técnica del CCN-CERT",
      "Una ley española sobre firma electrónica"
    ],
    "explicacion": "El RGPD se aplica directamente en los Estados miembros de la Unión Europea."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "El RGPD empezó a ser de obligado cumplimiento el:",
    "correcta": "25 de mayo de 2018",
    "distractores": [
      "29 de enero de 2010",
      "7 de septiembre de 2018",
      "6 de julio de 2016"
    ],
    "explicacion": "Aunque fue aprobado en 2016, su aplicación obligatoria comenzó el 25 de mayo de 2018."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "Según el RGPD, un dato personal es:",
    "correcta": "Toda información sobre una persona física identificada o identificable",
    "distractores": [
      "Solo el DNI y el número de teléfono",
      "Solo datos almacenados en soporte informático",
      "Cualquier dato de una empresa, aunque no identifique a personas"
    ],
    "explicacion": "El concepto de dato personal es amplio: nombre, DNI, localización, IP, datos genéticos, etc."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "Según el RGPD, el tratamiento de datos incluye:",
    "correcta": "Operaciones como recogida, conservación, consulta, modificación, comunicación o supresión",
    "distractores": [
      "Solo el cifrado de bases de datos",
      "Solo el almacenamiento automatizado",
      "Solo la destrucción física de documentos"
    ],
    "explicacion": "El tratamiento incluye muchas operaciones sobre datos personales, automatizadas o no."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "Una novedad importante del RGPD es:",
    "correcta": "La figura del Delegado de Protección de Datos",
    "distractores": [
      "La eliminación de toda obligación de seguridad",
      "La sustitución de la ISO 27001",
      "La prohibición absoluta de tratar datos personales"
    ],
    "explicacion": "El RGPD crea la figura del DPO/DPD y regula cuándo debe designarse."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "El plazo general para notificar violaciones de datos personales a la autoridad de control es:",
    "correcta": "72 horas desde que se tenga conocimiento",
    "distractores": [
      "24 meses",
      "2 años",
      "10 días hábiles siempre"
    ],
    "explicacion": "El RGPD obliga a notificar determinadas violaciones de seguridad en un plazo máximo general de 72 horas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "El régimen sancionador del RGPD puede llegar hasta:",
    "correcta": "20 millones de euros o el 4 % del volumen de negocio anual global",
    "distractores": [
      "600 euros como máximo",
      "El 1 % del presupuesto mensual",
      "La retirada automática de la certificación ISO 27002"
    ],
    "explicacion": "Las sanciones máximas pueden alcanzar 20.000.000 € o el 4 % del volumen de negocio anual global."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "LOPDyGDD",
    "pregunta": "La LOPDyGDD española:",
    "correcta": "Adapta el ordenamiento español al RGPD y garantiza derechos digitales",
    "distractores": [
      "Sustituye a la Directiva NIS en toda Europa",
      "Es una norma ISO certificable",
      "Regula únicamente infraestructuras críticas"
    ],
    "explicacion": "La Ley Orgánica 3/2018 adapta el RGPD en España y añade la garantía de derechos digitales."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "LSSI-CE",
    "pregunta": "La Ley 34/2002 LSSI-CE regula principalmente:",
    "correcta": "Servicios de la sociedad de la información y comercio electrónico",
    "distractores": [
      "El ciclo PDCA",
      "La categorización ENS en básica, media y alta",
      "La certificación ISO 27001"
    ],
    "explicacion": "La LSSI-CE regula servicios de la sociedad de la información, contratación electrónica, comunicaciones comerciales y régimen sancionador."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Directiva NIS",
    "pregunta": "La Directiva NIS es la:",
    "correcta": "Directiva (UE) 2016/1148 sobre seguridad de redes y sistemas de información",
    "distractores": [
      "Ley Orgánica 3/2018 de protección de datos",
      "Norma ISO/IEC 27002",
      "Ley 59/2003 de firma electrónica"
    ],
    "explicacion": "La Directiva NIS busca un elevado nivel común de seguridad de redes y sistemas de información en la UE."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Directiva NIS",
    "pregunta": "Uno de los elementos clave de la Directiva NIS es:",
    "correcta": "La notificación obligatoria de incidentes",
    "distractores": [
      "La eliminación de los CSIRT",
      "La sustitución del RGPD",
      "La prohibición de servicios digitales"
    ],
    "explicacion": "La Directiva NIS regula seguridad de servicios esenciales y digitales, e incorpora obligaciones de notificación de incidentes."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Directiva NIS",
    "pregunta": "Los cuatro objetivos principales de la Directiva NIS son:",
    "correcta": "Gestionar riesgo, proteger, detectar y minimizar impacto",
    "distractores": [
      "Planificar, programar, compilar y desplegar",
      "Cifrar, firmar, comprimir y borrar",
      "Comprar, instalar, auditar y sancionar"
    ],
    "explicacion": "La Directiva NIS se orienta a gestionar el riesgo, proteger frente a ciberataques, detectar eventos y minimizar el impacto de incidentes."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Directiva NIS",
    "pregunta": "La Directiva NIS prevé la creación de:",
    "correcta": "Una red CSIRT",
    "distractores": [
      "Una red de autoridades ISO 27002",
      "Un sistema único de contraseñas europeas",
      "Un registro de ficheros personales como eje principal"
    ],
    "explicacion": "La Directiva NIS contempla una red CSIRT para respuesta a incidentes de seguridad informática."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Transposición NIS",
    "pregunta": "La Directiva NIS se traspuso en España mediante:",
    "correcta": "El Real Decreto-ley 12/2018, de seguridad de las redes y sistemas de información",
    "distractores": [
      "El Real Decreto 3/2010 del ENS",
      "La Ley 59/2003 de Firma Electrónica",
      "La Ley 30/1992 de procedimiento administrativo"
    ],
    "explicacion": "El Real Decreto-ley 12/2018 traspone la Directiva NIS al ordenamiento español."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "CSIRT",
    "pregunta": "Según el tema, el CSIRT de referencia para organismos públicos es:",
    "correcta": "CCN-CERT",
    "distractores": [
      "INCIBE-CERT",
      "ESPDEF-CERT",
      "ENAC"
    ],
    "explicacion": "El tema identifica CCN-CERT para organismos públicos, INCIBE-CERT para privados y red académica, y ESPDEF-CERT para defensa."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "CSIRT",
    "pregunta": "Según el tema, el CSIRT de referencia para privados y red académica es:",
    "correcta": "INCIBE-CERT",
    "distractores": [
      "CCN-CERT",
      "ESPDEF-CERT",
      "AENOR-CERT"
    ],
    "explicacion": "El Real Decreto-ley 12/2018 identifica INCIBE-CERT para operadores privados y red académica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "CSIRT",
    "pregunta": "Según el tema, el CSIRT de referencia para organismos de defensa es:",
    "correcta": "ESPDEF-CERT",
    "distractores": [
      "INCIBE-CERT",
      "CCN-CERT",
      "UNE-CERT"
    ],
    "explicacion": "El tema asigna ESPDEF-CERT a organismos de defensa."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Firma electrónica",
    "pregunta": "La Ley 59/2003 se relaciona con:",
    "correcta": "La firma electrónica",
    "distractores": [
      "El RGPD",
      "La Directiva NIS",
      "La norma ISO 27002"
    ],
    "explicacion": "La Ley 59/2003 regula la firma electrónica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Administración electrónica",
    "pregunta": "La Ley 11/2007 LAECSP impulsó:",
    "correcta": "El acceso electrónico de los ciudadanos a los servicios públicos",
    "distractores": [
      "La creación de AES",
      "La sustitución de la ISO 27001",
      "El régimen sancionador del RGPD"
    ],
    "explicacion": "La LAECSP fue relevante para la relación electrónica de ciudadanos con las Administraciones Públicas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "DEH",
    "pregunta": "La Dirección Electrónica Habilitada sirve para:",
    "correcta": "Recibir notificaciones administrativas con carácter legal",
    "distractores": [
      "Firmar certificados ISO 27001",
      "Cifrar discos duros obligatoriamente",
      "Categorizar sistemas ENS"
    ],
    "explicacion": "La DEH permite recibir notificaciones administrativas electrónicas con validez legal."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El Esquema Nacional de Seguridad está regulado originalmente por:",
    "correcta": "El Real Decreto 3/2010, de 8 de enero",
    "distractores": [
      "La Ley Orgánica 3/2018",
      "La Directiva 95/46/CE",
      "La norma ISO 27002"
    ],
    "explicacion": "El Real Decreto 3/2010 regula el ENS en el ámbito de la Administración Electrónica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El ENS define la política de seguridad aplicable a:",
    "correcta": "El uso de medios electrónicos",
    "distractores": [
      "Exclusivamente redes WiFi domésticas",
      "Solo empresas privadas sin relación con la Administración",
      "Únicamente certificados ISO"
    ],
    "explicacion": "El ENS define la política de seguridad en la utilización de medios electrónicos por la Administración."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El ENS busca garantizar, entre otros aspectos:",
    "correcta": "Acceso, integridad, disponibilidad, autenticidad, confidencialidad, trazabilidad y conservación",
    "distractores": [
      "Solo confidencialidad",
      "Solo disponibilidad y velocidad",
      "Compresión, rendimiento y usabilidad"
    ],
    "explicacion": "El ENS establece principios y requisitos mínimos para proteger adecuadamente la información."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El ENS es de obligada aplicación en:",
    "correcta": "Administraciones públicas y entidades vinculadas o dependientes",
    "distractores": [
      "Solo empresas privadas internacionales",
      "Solo usuarios particulares",
      "Cualquier blog personal sin excepción"
    ],
    "explicacion": "Aplica a AGE, comunidades autónomas, administración local y entidades de derecho público vinculadas o dependientes."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "Según el tema, las universidades se incluyen en el ámbito del ENS como:",
    "correcta": "Organismos autónomos vinculados a las Comunidades Autónomas",
    "distractores": [
      "Empresas privadas sin relación pública",
      "Operadores de servicios digitales extranjeros",
      "Entidades excluidas siempre"
    ],
    "explicacion": "El tema indica que las universidades se incluyen como organismos autónomos vinculados a las Comunidades Autónomas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "Quedan excluidos del ENS:",
    "correcta": "Los sistemas que tratan información clasificada regulada por la Ley de Secretos Oficiales",
    "distractores": [
      "Todos los sistemas de universidades",
      "Todos los servicios web públicos",
      "Los sistemas de categoría alta"
    ],
    "explicacion": "El tema indica que se excluyen los sistemas que tratan información clasificada."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS sector privado",
    "pregunta": "Una empresa privada puede necesitar adecuarse al ENS cuando:",
    "correcta": "Presta soluciones o servicios dentro del ámbito de aplicación del ENS para la Administración",
    "distractores": [
      "Usa cualquier ordenador personal",
      "Tiene página web corporativa aunque no trate con la Administración",
      "Obtiene una certificación ISO 9001"
    ],
    "explicacion": "El tema destaca que, en la práctica, empresas privadas que se relacionen con la Administración pueden necesitar adecuarse al ENS."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "Los sistemas en el ENS se categorizan como:",
    "correcta": "Básica, Media y Alta",
    "distractores": [
      "Baja, Media, Alta y Crítica",
      "Media, Alta y Muy Alta",
      "No se categorizan en el ENS"
    ],
    "explicacion": "El tema indica que los sistemas podrán categorizarse con clasificación Básica, Media o Alta."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS implantación",
    "pregunta": "En el ciclo de implantación del ENS, una etapa inicial es:",
    "correcta": "Preparar y aprobar la política de seguridad",
    "distractores": [
      "Eliminar todos los controles ISO",
      "Publicar la clave privada del sistema",
      "Evitar la categorización del sistema"
    ],
    "explicacion": "El ciclo del ENS comienza preparando y aprobando la política de seguridad, además de definir roles y personas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS implantación",
    "pregunta": "Para categorizar sistemas en el ENS se menciona como referencia:",
    "correcta": "Guía CCN-STIC 803",
    "distractores": [
      "Guía CCN-STIC 802",
      "Guía CCN-STIC 805",
      "Guía CCN-STIC 815"
    ],
    "explicacion": "La CCN-STIC 803 se asocia a la valoración/categorización de sistemas en el ENS."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS implantación",
    "pregunta": "Para el análisis de riesgos en el ENS se menciona:",
    "correcta": "MAGERIT V3 con apoyo de PILAR",
    "distractores": [
      "Solo Scrum",
      "Solo AES-GCM",
      "Solo ISO 9001"
    ],
    "explicacion": "El tema menciona MAGERIT V3 y la herramienta PILAR para el análisis de riesgos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS implantación",
    "pregunta": "La declaración de aplicabilidad del ENS se apoya en:",
    "correcta": "Guía CCN-STIC 804",
    "distractores": [
      "Ley 59/2003",
      "Directiva 2000/31/CE",
      "ISO 14001"
    ],
    "explicacion": "El tema asocia la Guía CCN-STIC 804 con medidas e implantación del ENS y declaración de aplicabilidad."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS conformidad",
    "pregunta": "Para sistemas de categoría Básica en el ENS se requiere:",
    "correcta": "Autoevaluación cada 2 años",
    "distractores": [
      "Certificación obligatoria mensual",
      "Auditoría formal semanal",
      "Ningún tipo de revisión"
    ],
    "explicacion": "La categoría básica requiere autoevaluación periódica cada 2 años."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS conformidad",
    "pregunta": "Para categorías Media y Alta en el ENS se requiere:",
    "correcta": "Auditoría formal al menos cada 2 años",
    "distractores": [
      "Solo una autoevaluación voluntaria",
      "Auditoría cada 10 años",
      "Ninguna evidencia documental"
    ],
    "explicacion": "Media y Alta requieren auditoría formal al menos cada dos años."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS conformidad",
    "pregunta": "El resultado de la auditoría en categorías Media y Alta se denomina:",
    "correcta": "Certificación de Conformidad",
    "distractores": [
      "Declaración de privacidad",
      "Certificado de firma electrónica",
      "Registro de tratamiento RGPD"
    ],
    "explicacion": "La auditoría formal da lugar a una Certificación de Conformidad con distintivo emitido por entidad acreditada."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS conformidad",
    "pregunta": "La entidad nacional mencionada para acreditar entidades de certificación del ENS es:",
    "correcta": "ENAC",
    "distractores": [
      "INCIBE",
      "AEPD",
      "ISO"
    ],
    "explicacion": "El tema indica que las entidades acreditadas lo están por la Entidad Nacional de Acreditación, ENAC."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27000",
    "pregunta": "La familia ISO 27000 se relaciona con:",
    "correcta": "Estándares internacionales de seguridad de la información",
    "distractores": [
      "Solo leyes españolas obligatorias",
      "Solo comercio electrónico",
      "Solo conservación de datos telefónicos"
    ],
    "explicacion": "ISO 27000 agrupa estándares internacionales para seguridad de la información y SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27001",
    "pregunta": "La ISO 27001 permite desarrollar:",
    "correcta": "Un Sistema de Gestión de Seguridad de la Información",
    "distractores": [
      "Un sistema de votación electrónica",
      "Un registro de nombres de dominio .es",
      "Un reglamento de infraestructuras críticas"
    ],
    "explicacion": "ISO 27001 es la norma de referencia para SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27001",
    "pregunta": "La ISO 27001 es:",
    "correcta": "Certificable",
    "distractores": [
      "No certificable nunca",
      "Una ley orgánica española",
      "Una guía CCN-STIC"
    ],
    "explicacion": "La ISO 27001 es la norma certificable de la familia ISO 27000."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27002",
    "pregunta": "La ISO 27002 es principalmente:",
    "correcta": "Un código de buenas prácticas y apoyo para implantar un SGSI",
    "distractores": [
      "Una ley obligatoria sobre comunicaciones electrónicas",
      "Una norma certificable por sí misma",
      "El decreto que regula el ENS"
    ],
    "explicacion": "ISO 27002 complementa a ISO 27001 con buenas prácticas y controles."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27001/27002",
    "pregunta": "Respecto a ISO 27001 e ISO 27002:",
    "correcta": "Ambas son voluntarias y solo ISO 27001 es certificable",
    "distractores": [
      "Ambas son obligatorias y certificables",
      "Ambas son voluntarias y ambas certificables",
      "ISO 27002 es obligatoria y el ENS voluntario"
    ],
    "explicacion": "El tema recalca que ISO 27001 es certificable y 27002 no; ambas son estándares voluntarios."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "SGSI",
    "pregunta": "Un SGSI se basa en:",
    "correcta": "Un enfoque de riesgo empresarial",
    "distractores": [
      "Eliminar toda documentación",
      "Evitar controles de seguridad",
      "Instalar únicamente un antivirus"
    ],
    "explicacion": "La ISO 27001 plantea el SGSI como parte del sistema de gestión general basada en riesgo empresarial."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "SGSI",
    "pregunta": "Un SGSI comprende elementos como:",
    "correcta": "Modelos organizativos, políticas, planificación, responsabilidades, procedimientos, procesos y recursos",
    "distractores": [
      "Solo firewalls y antivirus",
      "Solo certificados digitales",
      "Solo sanciones administrativas"
    ],
    "explicacion": "El SGSI no es solo tecnología: incluye organización, políticas, procesos, responsabilidades y recursos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "PDCA",
    "pregunta": "El ciclo PDCA significa:",
    "correcta": "Plan, Do, Check, Act",
    "distractores": [
      "Protect, Detect, Correct, Audit",
      "Privacy, Data, Control, Access",
      "Plan, Design, Compile, Attack"
    ],
    "explicacion": "PDCA o ciclo de Deming se usa para crear, implementar, supervisar y mejorar el SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "PDCA",
    "pregunta": "En el ciclo PDCA, la fase Check se corresponde con:",
    "correcta": "Supervisar/controlar el SGSI",
    "distractores": [
      "Definir controles sin medirlos",
      "Eliminar la documentación",
      "Firmar digitalmente todos los documentos"
    ],
    "explicacion": "Check implica recopilar datos de control, analizarlos y comprobar si se logra la mejora esperada."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Documentación SGSI",
    "pregunta": "Las políticas en un SGSI:",
    "correcta": "Marcan líneas generales de actuación y objetivos",
    "distractores": [
      "Son evidencias de acciones realizadas",
      "Son instrucciones técnicas paso a paso",
      "Son únicamente registros de incidentes"
    ],
    "explicacion": "Las políticas establecen objetivos y líneas generales que deben ser conocidas por el personal."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Documentación SGSI",
    "pregunta": "Los procedimientos en un SGSI:",
    "correcta": "Marcan instrucciones para realizar tareas programadas",
    "distractores": [
      "Son la evidencia de acciones ya realizadas",
      "Sustituyen a toda política de seguridad",
      "Son leyes orgánicas"
    ],
    "explicacion": "Los procedimientos desarrollan los objetivos de las políticas y contienen detalles técnicos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Documentación SGSI",
    "pregunta": "Las instrucciones en un SGSI:",
    "correcta": "Desarrollan a bajo nivel los procedimientos",
    "distractores": [
      "Son siempre leyes europeas",
      "Son exclusivamente certificados digitales",
      "Son el inventario de activos"
    ],
    "explicacion": "Las instrucciones concretan los pasos para realizar una tarea."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Documentación SGSI",
    "pregunta": "Los registros en un SGSI:",
    "correcta": "Evidencian que se han realizado las acciones previstas",
    "distractores": [
      "Son principios básicos del ENS",
      "Sustituyen a la política de seguridad",
      "Son amenazas externas"
    ],
    "explicacion": "Los registros sirven como evidencia documental de las acciones ejecutadas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Fases SGSI",
    "pregunta": "La primera fase para establecer un SGSI es:",
    "correcta": "Definir la política de seguridad",
    "distractores": [
      "Realizar la certificación final",
      "Eliminar todos los riesgos",
      "Publicar los registros"
    ],
    "explicacion": "La figura de fases del SGSI empieza por definir la política de seguridad."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Fases SGSI",
    "pregunta": "La segunda fase del SGSI es:",
    "correcta": "Definir el alcance del SGSI",
    "distractores": [
      "Declarar aplicabilidad",
      "Revisar el sistema",
      "Contratar un seguro"
    ],
    "explicacion": "Tras la política se define qué procesos o ámbito cubre el SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Fases SGSI",
    "pregunta": "En la fase de análisis de riesgos se debe:",
    "correcta": "Identificar activos, amenazas, vulnerabilidades y riesgos",
    "distractores": [
      "Evitar valorar activos",
      "Implantar controles sin conocer riesgos",
      "Sustituir el RGPD"
    ],
    "explicacion": "El análisis de riesgos identifica activos y peligros para priorizar recursos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Riesgos",
    "pregunta": "En el tema, las opciones de tratamiento del riesgo son:",
    "correcta": "Mitigar, asumir, transferir o eliminar",
    "distractores": [
      "Cifrar, firmar, comprimir o publicar",
      "Planificar, comprar, borrar o vender",
      "Aceptar, ignorar, ocultar o negar"
    ],
    "explicacion": "Las cuatro opciones clásicas indicadas son mitigar, asumir, transferir y eliminar el riesgo."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Riesgos",
    "pregunta": "Mitigar el riesgo significa:",
    "correcta": "Reducirlo mediante controles hasta niveles aceptables",
    "distractores": [
      "No hacer nada aunque sea crítico",
      "Pasarlo siempre a una aseguradora",
      "Eliminar el activo obligatoriamente"
    ],
    "explicacion": "Mitigar supone aplicar medidas o controles que bajan el riesgo."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Riesgos",
    "pregunta": "Transferir el riesgo puede hacerse mediante:",
    "correcta": "Outsourcing o contratación de un seguro",
    "distractores": [
      "Publicación de claves privadas",
      "Eliminación de toda auditoría",
      "Desactivación del SGSI"
    ],
    "explicacion": "Transferir implica desplazar parte del riesgo a un tercero, por ejemplo con outsourcing o seguros."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Declaración de Aplicabilidad",
    "pregunta": "La Declaración de Aplicabilidad también se conoce como:",
    "correcta": "SOA, Statement of Applicability",
    "distractores": [
      "DPO, Data Protection Officer",
      "CSIRT, Computer Security Incident Response Team",
      "DEH, Dirección Electrónica Habilitada"
    ],
    "explicacion": "La SOA resume controles seleccionados, implementados, justificados y excluidos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Declaración de Aplicabilidad",
    "pregunta": "La Declaración de Aplicabilidad debe contener:",
    "correcta": "Controles seleccionados, controles implementados y controles excluidos con justificación",
    "distractores": [
      "Solo la lista de empleados",
      "Solo el presupuesto anual",
      "Solo sanciones del RGPD"
    ],
    "explicacion": "La SOA documenta las decisiones tomadas en relación con el tratamiento del riesgo."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Implantación SGSI",
    "pregunta": "Durante la implementación del SGSI se asignan dos roles importantes:",
    "correcta": "Responsable de seguridad y comité de seguridad",
    "distractores": [
      "Juez y fiscal",
      "Cliente y proveedor DNS",
      "Usuario anónimo y auditor informal"
    ],
    "explicacion": "El responsable coordina la seguridad y el comité aprueba directrices y busca soluciones."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Seguimiento SGSI",
    "pregunta": "Las auditorías internas del SGSI sirven para:",
    "correcta": "Comprobar si controles, procesos y procedimientos siguen alineados con ISO 27001",
    "distractores": [
      "Sustituir el análisis de riesgos inicial",
      "Evitar toda mejora continua",
      "Cambiar la ley aplicable"
    ],
    "explicacion": "Las auditorías internas son periódicas, con procedimientos y requisitos medibles."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Mejora continua",
    "pregunta": "Las acciones correctivas en un SGSI buscan:",
    "correcta": "Solucionar no conformidades detectadas",
    "distractores": [
      "Evitar que se revise el SGSI",
      "Crear siempre nuevas amenazas",
      "Sustituir los registros"
    ],
    "explicacion": "Las acciones correctivas identifican no conformidades, causas, acciones, resultados y eficacia."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Mejora continua",
    "pregunta": "Las acciones preventivas en un SGSI buscan:",
    "correcta": "Evitar que se produzca una no conformidad",
    "distractores": [
      "Corregir exclusivamente errores ya ocurridos",
      "Eliminar el ciclo PDCA",
      "Sustituir al responsable de seguridad siempre"
    ],
    "explicacion": "Las acciones preventivas pretenden impedir que aparezcan no conformidades."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "La ISO 27000 se orienta principalmente a:",
    "correcta": "Establecer un SGSI",
    "distractores": [
      "Regular solo medios electrónicos de la Administración",
      "Imponer siempre controles concretos por categoría ENS",
      "Sustituir la legislación nacional"
    ],
    "explicacion": "La ISO 27000 se centra en el sistema de gestión de seguridad de la información."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "El ENS se orienta principalmente a:",
    "correcta": "Cumplir principios básicos e implantar medidas de seguridad concretas",
    "distractores": [
      "Crear una norma ISO certificable internacional",
      "Eliminar la categorización de sistemas",
      "Regular únicamente empresas extranjeras"
    ],
    "explicacion": "El ENS define principios básicos, requisitos mínimos y medidas según la categoría del sistema."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "Una diferencia importante es que ISO 27000:",
    "correcta": "No obliga a implantar medidas de seguridad concretas",
    "distractores": [
      "Solo aplica a la Administración Pública",
      "Exige auditoría ENS cada dos años",
      "Regula exclusivamente firma electrónica"
    ],
    "explicacion": "La ISO deja más margen a la organización; el ENS prescribe medidas concretas según categoría."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "Una diferencia importante es que el ENS:",
    "correcta": "Obliga a implantar medidas concretas según la categoría del sistema",
    "distractores": [
      "No tiene requisitos mínimos",
      "Es solo una buena práctica voluntaria ISO",
      "Nunca afecta a empresas privadas"
    ],
    "explicacion": "El ENS es más preciso y reduce la discrecionalidad al exigir medidas por categoría."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "El alcance del SGSI en ISO 27000:",
    "correcta": "Lo define la organización",
    "distractores": [
      "Lo define siempre el CCN-CERT",
      "Es siempre toda la Administración pública",
      "No puede limitarse a procesos concretos"
    ],
    "explicacion": "En ISO, la organización decide el alcance del SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "El ENS afecta específicamente a:",
    "correcta": "Medios electrónicos utilizados por la Administración para relacionarse con los ciudadanos",
    "distractores": [
      "Todo sistema doméstico sin excepción",
      "Solo sistemas de videojuegos",
      "Solo comercio electrónico privado"
    ],
    "explicacion": "El ENS se centra en medios electrónicos de las Administraciones Públicas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es falsa?",
    "correcta": "La ISO 27002 es certificable igual que ISO 27001",
    "distractores": [
      "La ISO 27001 es certificable",
      "La ISO 27002 sirve como buenas prácticas",
      "La ISO 27001 y la ISO 27002 son complementarias"
    ],
    "explicacion": "La ISO 27002 no es certificable por sí misma; ISO 27001 sí lo es."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es falsa?",
    "correcta": "El RGPD necesita transposición para aplicarse en España",
    "distractores": [
      "El RGPD es de aplicación directa",
      "La LOPDyGDD adapta la normativa española al RGPD",
      "El RGPD cambió el enfoque hacia tratamientos de datos"
    ],
    "explicacion": "Los reglamentos europeos son de aplicación directa; aun así, España actualizó su legislación con la LOPDyGDD."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es falsa?",
    "correcta": "En ENS, las categorías son Baja, Media, Alta y Muy Alta",
    "distractores": [
      "En ENS, las categorías son Básica, Media y Alta",
      "La categoría Básica requiere autoevaluación",
      "Media y Alta requieren auditoría formal"
    ],
    "explicacion": "El tema indica las categorías Básica, Media y Alta."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es falsa?",
    "correcta": "La Directiva NIS elimina la necesidad de CSIRT",
    "distractores": [
      "La Directiva NIS contempla una red CSIRT",
      "La Directiva NIS obliga a estrategia nacional",
      "La Directiva NIS incluye notificación de incidentes"
    ],
    "explicacion": "La Directiva NIS impulsa la creación de una red CSIRT, no su eliminación."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Trampa",
    "pregunta": "¿Cuál de estas afirmaciones es falsa?",
    "correcta": "El ENS nunca afecta a empresas privadas",
    "distractores": [
      "Una empresa privada que preste servicios a la Administración puede necesitar adecuarse al ENS",
      "El ENS aplica a Administraciones Públicas",
      "El ENS contiene requisitos mínimos y medidas de seguridad"
    ],
    "explicacion": "El tema señala que, en la práctica, proveedores privados de la Administración pueden verse obligados a adecuarse al ENS."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "¿Qué Ley ha asumido la mayoría de las funciones de la antigua LORTAD?",
    "correcta": "LOPD",
    "distractores": [
      "Ley de Firma Electrónica",
      "Ninguna de las respuestas es correcta",
      "LSSI-CE"
    ],
    "explicacion": "La LOPD (Ley Orgánica de Protección de Datos) sustituyó y asumió las funciones de la antigua LORTAD."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La LOPD afecta a los siguientes tipos de ficheros:",
    "correcta": "Ficheros digitales y en papel",
    "distractores": [
      "Sólo ficheros en papel",
      "Sólo ficheros digitales",
      "Ninguna de las respuestas es correcta"
    ],
    "explicacion": "La LOPD afecta tanto a ficheros en soporte digital como en papel."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La principal normativa que regula el acceso y tratamiento de datos de carácter personal es:",
    "correcta": "La LOPD",
    "distractores": [
      "La Ley de Firma Electrónica",
      "La Ley General de Telecomunicación",
      "La Ley de Servicio de la Sociedad de la Información y Comercio Electrónico"
    ],
    "explicacion": "La LOPD es la principal normativa española sobre protección de datos de carácter personal."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El Esquema Nacional de Seguridad es de obligado cumplimiento para:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Las Administraciones de las Comunidades Autónomas",
      "Las entidades de Derecho público con personalidad jurídica propia vinculadas o dependientes de las Administraciones Públicas",
      "Las Entidades que integran la Administración Local"
    ],
    "explicacion": "El ENS obliga a la AGE, CCAA, administración local y entidades de derecho público vinculadas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "¿Qué establece el Esquema Nacional de Seguridad?",
    "correcta": "Las condiciones de seguridad requeridas en el uso de los medios electrónicos en el ámbito de la Administración Pública",
    "distractores": [
      "Las condiciones de seguridad requeridas en el uso de los medios electrónicos en el ámbito de las organizaciones privadas",
      "El reglamento de requisitos técnicos de la LOPD",
      "Una relación de normas para la gestión de la seguridad en las empresas públicas"
    ],
    "explicacion": "El ENS establece las condiciones de seguridad para el uso de medios electrónicos en la Administración Pública."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "Uno de los objetivos principales del Esquema Nacional de Seguridad es:",
    "correcta": "Todas las respuestas son correctas",
    "distractores": [
      "Establecer la política de seguridad en la utilización de medios electrónicos en el ámbito de la Ley 11/2007",
      "Crear un marco común para la actuación de las Administraciones Públicas en materia de seguridad de las tecnologías",
      "Aportar confianza a los ciudadanos en el ejercicio de sus derechos y deberes con la Administración Pública por medios telemáticos"
    ],
    "explicacion": "El ENS tiene múltiples objetivos: política de seguridad, marco común y confianza ciudadana."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El Esquema Nacional de Seguridad está regulado por ...",
    "correcta": "El real Decreto 3/2010 de 8 de enero",
    "distractores": [
      "La Constitución Española",
      "La Ley General de Telecomunicación",
      "La Ley Orgánica de Protección de Datos"
    ],
    "explicacion": "El ENS está regulado por el Real Decreto 3/2010 de 8 de enero (modificado posteriormente por el RD 951/2015)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "SGSI",
    "pregunta": "¿Qué es un SGSI?",
    "correcta": "Un sistema de gestión de seguridad de la información",
    "distractores": [
      "Un sistema de monitorización de redes",
      "Un plan Director de Seguridad",
      "Un sistema general de seguridad interna"
    ],
    "explicacion": "SGSI = Sistema de Gestión de Seguridad de la Información (Information Security Management System)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "SGSI",
    "pregunta": "¿Qué dos requisitos son fundamentales para establecer un SGSI?",
    "correcta": "Compromiso por la dirección y planteamientos realistas",
    "distractores": [
      "Disponer de recursos económicos y de personal",
      "Disponer de recursos tecnológicos y financieros",
      "Acotar el trabajo y definir bien las funciones"
    ],
    "explicacion": "Los dos requisitos fundamentales para un SGSI son el compromiso de la dirección y plantear objetivos realistas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "SGSI",
    "pregunta": "¿Es necesario realizar un análisis de riesgos para implementar un SGSI?",
    "correcta": "Si, siempre",
    "distractores": [
      "No, nunca",
      "No, salvo que la organización lo decida así",
      "Si, pero sólo en la Administración Pública"
    ],
    "explicacion": "El análisis de riesgos es siempre obligatorio para establecer un SGSI según ISO 27001."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Fases SGSI",
    "pregunta": "Dentro de las etapas para el establecimiento de un SGSI, ¿Qué elementos de los siguientes es necesario definir?",
    "correcta": "La Política de Seguridad",
    "distractores": [
      "La Política de negocio de la organización",
      "La Estrategia de negocio",
      "La Política de buen gobierno"
    ],
    "explicacion": "La Política de Seguridad es el elemento fundamental que debe definirse al establecer un SGSI."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "PDCA",
    "pregunta": "¿Qué cuatro etapas de trabajo plantea el Ciclo PDCA o Ciclo de Deming?",
    "correcta": "Planificar, Hacer, Revisar y Actuar",
    "distractores": [
      "Pensar, Hacer, Recordar y Analizar",
      "Pensar, Hacer, Revisar y Actuar",
      "Planificar, Hacer, Revisar y Analizar"
    ],
    "explicacion": "El Ciclo PDCA = Plan (Planificar), Do (Hacer), Check (Revisar/Comprobar), Act (Actuar)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27000",
    "pregunta": "Dentro de los estándares ISO/IEC, ¿A qué ámbito se ha asignado el rango 27.000?",
    "correcta": "A la seguridad de la información",
    "distractores": [
      "A la gestión de las tecnologías de la información",
      "A la privacidad de la información",
      "A las metodologías de gestión de riesgos"
    ],
    "explicacion": "El rango ISO/IEC 27000 se dedica íntegramente a la seguridad de la información."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO 27001/27002",
    "pregunta": "Los estándares ISO/IEC 27.001 y 27.002 ¿A qué ámbito pertenecen?",
    "correcta": "A la seguridad de la información",
    "distractores": [
      "A la privacidad de la información",
      "A las metodologías de gestión de riesgos",
      "A ninguno de los anteriores"
    ],
    "explicacion": "Tanto ISO 27001 como ISO 27002 pertenecen al ámbito de la seguridad de la información."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "CSIRT",
    "pregunta": "El RD-Ley 12/2018 asigna como CSIRT de notificación de incidentes para la red académica española a:",
    "correcta": "IRIS-CERT",
    "distractores": [
      "INCIBE-CERT",
      "CCN-CERT",
      "ESP DEF"
    ],
    "explicacion": "Según el RD-Ley 12/2018, IRIS-CERT es el CSIRT asignado para la red académica española (RedIRIS)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Infraestructuras críticas",
    "pregunta": "¿Cuál es la denominación exacta de la Ley 8/2011, de 28 de abril?",
    "correcta": "Ley por la que se establecen medidas para la protección de las infraestructuras críticas",
    "distractores": [
      "Ley de Protección de Datos de Carácter Estratégico",
      "Ley de Seguridad Nacional y Protección de Activos",
      "Ley de Seguridad de las Redes y Sistemas de Información"
    ],
    "explicacion": "La Ley 8/2011, de 28 de abril, establece medidas para la protección de las infraestructuras críticas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "Identifique la ley que sustituyó a la antigua LOPD 15/1999 en el año 2018 para adaptarse al Reglamento Europeo.",
    "correcta": "Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales",
    "distractores": [
      "Ley Orgánica 5/2018, de Medidas Urgentes para la Adaptación al Derecho Europeo",
      "Ley Orgánica 1/2018, de Protección de la Privacidad en Internet",
      "Ley 34/2018, de Servicios de la Sociedad de la Información"
    ],
    "explicacion": "La Ley Orgánica 3/2018 (LOPDGDD) adapta el derecho español al RGPD europeo y añade derechos digitales, sustituyendo a la antigua LOPD 15/1999. El RDL 5/2018 fue provisional y la LSSI es de 2002."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "¿Qué disposición regula el Esquema Nacional de Seguridad (ENS) en España?",
    "correcta": "Real Decreto 3/2010, de 8 de enero",
    "distractores": [
      "Ley 11/2007, de Acceso Electrónico",
      "Real Decreto 4/2010, de 8 de enero",
      "Real Decreto 1720/2007, de 21 de diciembre"
    ],
    "explicacion": "El Esquema Nacional de Seguridad (ENS) está regulado por el Real Decreto 3/2010, de 8 de enero."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "LSSI-CE",
    "pregunta": "¿Cómo se denomina la Ley 34/2002 que regula, entre otros, el envío de comunicaciones comerciales electrónicas (Spam)?",
    "correcta": "Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico",
    "distractores": [
      "Ley General de Telecomunicaciones y Servicios Digitales",
      "Ley de Medidas de Impulso de la Sociedad de la Información",
      "Ley de Regulación del Comercio Minorista por Internet"
    ],
    "explicacion": "La Ley 34/2002, de 11 de julio, se denomina Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Transposición NIS",
    "pregunta": "¿Cuál es el título oficial del Real Decreto-Ley 12/2018, de 7 de septiembre?",
    "correcta": "Seguridad de las redes y sistemas de información",
    "distractores": [
      "Medidas urgentes para la ciberdefensa nacional",
      "Protección de datos en el ámbito de las comunicaciones electrónicas",
      "Regulación de los CSIRT y centros de respuesta a incidentes"
    ],
    "explicacion": "El Real Decreto-Ley 12/2018, de 7 de septiembre, tiene como título oficial 'de seguridad de las redes y sistemas de información', trasponiendo la Directiva NIS."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La primera ley española que reguló específicamente el tratamiento automatizado de datos personales fue:",
    "correcta": "Ley Orgánica 5/1992 (LORTAD)",
    "distractores": [
      "Ley 11/2007 de Acceso Electrónico",
      "Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas",
      "Ley Orgánica 15/1999 (LOPD)"
    ],
    "explicacion": "La Ley Orgánica 5/1992, de 29 de octubre, de Regulación del Tratamiento Automatizado de los Datos de Carácter Personal (LORTAD), fue la primera norma en España sobre la materia."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Conservación de datos",
    "pregunta": "¿Qué ley regula específicamente la conservación de datos relativos a las comunicaciones electrónicas y redes públicas?",
    "correcta": "Ley 25/2007, de 18 de octubre",
    "distractores": [
      "Ley 59/2003, de 19 de diciembre",
      "Ley 9/2014, de 9 de mayo",
      "Ley 56/2007, de 28 de diciembre"
    ],
    "explicacion": "La Ley 25/2007, de 18 de octubre, regula la conservación de datos relativos a las comunicaciones electrónicas y a las redes públicas de comunicaciones."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Firma electrónica",
    "pregunta": "¿Cuál es la norma que regula la firma electrónica en España y define conceptos como la 'firma avanzada'?",
    "correcta": "Ley 59/2003, de 19 de diciembre",
    "distractores": [
      "Ley 11/2007, de 22 de junio",
      "Real Decreto 209/2003",
      "Directiva 95/46/CE"
    ],
    "explicacion": "La Ley 59/2003, de 19 de diciembre, regulaba la firma electrónica en España y definía la firma avanzada y la firma reconocida."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Administración electrónica",
    "pregunta": "¿Qué ley se conoce comúnmente como LAECSP?",
    "correcta": "Ley 11/2007, de Acceso Electrónico de los ciudadanos a los Servicios Públicos",
    "distractores": [
      "Ley 30/1992, de Administraciones Electrónicas y Comunicación Sin Papel",
      "Ley Orgánica 11/2007, de Administración y Electrónica del Sector Público",
      "Ley de Administración Electrónica para Ciberseguridad y Servicios Públicos"
    ],
    "explicacion": "La Ley 11/2007, de 22 de junio, de Acceso Electrónico de los Ciudadanos a los Servicios Públicos se conoce como LAECSP."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Directiva NIS",
    "pregunta": "¿Cuál es la Directiva europea que se denomina 'Directiva NIS'?",
    "correcta": "Directiva (UE) 2016/1148",
    "distractores": [
      "Directiva (UE) 2016/679",
      "Directiva (UE) 2018/1972",
      "Directiva 1999/93/CE"
    ],
    "explicacion": "La Directiva (UE) 2016/1148 es la directiva sobre seguridad de las redes y sistemas de información, conocida popularmente como Directiva NIS."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "RGPD",
    "pregunta": "El Reglamento (UE) 2016/679 es conocido popularmente como:",
    "correcta": "Reglamento General de Protección de Datos (RGPD)",
    "distractores": [
      "Reglamento de Servicios Digitales",
      "Directiva de Privacidad Electrónica",
      "Reglamento Europeo de Ciberseguridad"
    ],
    "explicacion": "El Reglamento (UE) 2016/679 es el Reglamento General de Protección de Datos (RGPD) de la Unión Europea."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Administración electrónica",
    "pregunta": "¿Qué Real Decreto regula la utilización de técnicas electrónicas por la Administración General del Estado desarrollando la Ley 30/92?",
    "correcta": "Real Decreto 263/1996, de 16 de febrero",
    "distractores": [
      "Real Decreto 3/2010, de 8 de enero",
      "Real Decreto 1671/2009, de 6 de noviembre",
      "Real Decreto 209/2003, de 21 de febrero"
    ],
    "explicacion": "El Real Decreto 263/1996, de 16 de febrero, reguló el uso de técnicas electrónicas en la AGE, desarrollando el artículo 45 de la Ley 30/1992."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Factura electrónica",
    "pregunta": "¿Qué ley regula específicamente la factura electrónica en el marco de las medidas de impulso de la sociedad de la información?",
    "correcta": "Ley 56/2007, de 28 de diciembre",
    "distractores": [
      "Ley 34/2002, de 11 de julio",
      "Ley 25/2007, de 18 de octubre",
      "Ley 59/2003, de 19 de diciembre"
    ],
    "explicacion": "La Ley 56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Información, regula el uso de la factura electrónica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Estrategia Nacional",
    "pregunta": "¿Qué disposición aprobó la Estrategia Nacional de Ciberseguridad en el año 2019?",
    "correcta": "Orden PCI/487/2019, de 26 de abril",
    "distractores": [
      "Real Decreto 951/2019, de Modificación del ENS",
      "Resolución de 13 de octubre de 2019",
      "Ley 12/2019, de Ciberseguridad Nacional"
    ],
    "explicacion": "La Estrategia Nacional de Ciberseguridad de 2019 fue publicada mediante la Orden PCI/487/2019, de 26 de abril."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Notificaciones telemáticas",
    "pregunta": "¿Qué normativa regula las notificaciones telemáticas y la sustitución de certificados de papel por medios telemáticos?",
    "correcta": "Real Decreto 209/2003, de 21 de febrero",
    "distractores": [
      "Real Decreto 263/1996, de 16 de febrero",
      "Ley 11/2007, de 22 de junio",
      "Real Decreto 704/2011"
    ],
    "explicacion": "El Real Decreto 209/2003, de 21 de febrero, regula los registros, las notificaciones telemáticas y la sustitución de certificados en papel por medios telemáticos."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "El Real Decreto 951/2015 se caracteriza por:",
    "correcta": "Modificar el Real Decreto 3/2010 del Esquema Nacional de Seguridad",
    "distractores": [
      "Aprobar el Reglamento de la Ley de Infraestructuras Críticas",
      "Establecer las medidas contra el tráfico fraudulento de comunicaciones",
      "Aprobar los nuevos planes de seguridad del operador crítico"
    ],
    "explicacion": "El Real Decreto 951/2015 se caracteriza por modificar el Real Decreto 3/2010 por el que se regula el Esquema Nacional de Seguridad."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Administración electrónica",
    "pregunta": "¿Qué ley establece la validez de los documentos emitidos por medios electrónicos siempre que se asegure su autenticidad e integridad?",
    "correcta": "Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas",
    "distractores": [
      "Constitución Española de 1978",
      "Ley 34/2002 de Comercio Electrónico",
      "Ley 59/2003 de Firma Electrónica"
    ],
    "explicacion": "La Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas (en su artículo 45) sentó las bases para la validez de los documentos electrónicos en la Administración."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "DEH",
    "pregunta": "¿Qué norma define el Sistema de Dirección Electrónica Habilitada (DEH)?",
    "correcta": "Orden PRE/878/2010, de 5 de abril",
    "distractores": [
      "Real Decreto 3/2010 del ENS",
      "Real Decreto 1363/2010, de 29 de octubre",
      "Ley 11/2007 de Acceso Electrónico"
    ],
    "explicacion": "La Orden PRE/878/2010, de 5 de abril, regula y establece el régimen de la Dirección Electrónica Habilitada (DEH)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Tráfico fraudulento",
    "pregunta": "El Real Decreto 381/2015, de 14 de mayo, se dedica a:",
    "correcta": "Establecer medidas contra el tráfico no permitido y fraudulento en comunicaciones electrónicas",
    "distractores": [
      "Crear el Instituto Nacional de Ciberseguridad (INCIBE)",
      "Regular el Esquema Nacional de Interoperabilidad",
      "Actualizar las sanciones de la LSSI-CE"
    ],
    "explicacion": "El Real Decreto 381/2015, de 14 de mayo, se dedica a establecer medidas contra el tráfico no permitido y fraudulento en comunicaciones electrónicas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Comercio electrónico",
    "pregunta": "La Directiva 2000/31/CE tiene como objetivo principal:",
    "correcta": "Reforzar la seguridad jurídica del comercio electrónico en el mercado interior",
    "distractores": [
      "Establecer los estándares de cifrado para las transacciones bancarias",
      "Unificar las firmas electrónicas en toda la Unión",
      "Regular el derecho al olvido en buscadores de internet"
    ],
    "explicacion": "La Directiva 2000/31/CE tiene como objetivo principal reforzar la seguridad jurídica del comercio electrónico en el mercado interior."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Contratación pública",
    "pregunta": "¿Qué normativa regula la coordinación de los procedimientos de adjudicación de los contratos públicos e introduce la 'subasta electrónica'?",
    "correcta": "Directiva 2004/18/CE",
    "distractores": [
      "Directiva 2016/1148 (NIS)",
      "Real Decreto 3/2010",
      "Ley 11/2007 de Acceso Electrónico"
    ],
    "explicacion": "La Directiva 2004/18/CE coordina la adjudicación de contratos públicos e introduce el concepto de subasta electrónica."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Administración electrónica",
    "pregunta": "¿Qué norma modificó la estructura de los órganos colegiados responsables de la Administración Electrónica, creando el CSAE?",
    "correcta": "Real Decreto 589/2005",
    "distractores": [
      "Orden PRE/878/2010",
      "Ley 11/2007",
      "Real decreto 3/2010"
    ],
    "explicacion": "El Real Decreto 589/2005 reestructuró los órganos colegiados de administración electrónica y creó la Comisión de Estrategia para la Administración Electrónica (CSAE)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Telecomunicaciones",
    "pregunta": "Identifique la denominación de la Ley 9/2014, de 9 de mayo.",
    "correcta": "Ley General de Telecomunicaciones",
    "distractores": [
      "Ley de Infraestructuras Digitales Críticas",
      "Ley de Ciberseguridad Estratégica",
      "Ley de Protección de Datos y Garantía Digital"
    ],
    "explicacion": "La Ley 9/2014, de 9 de mayo, es la Ley General de Telecomunicaciones."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENS",
    "pregunta": "¿Qué disposición aprobó la 'Instrucción técnica de Seguridad de conformidad con el Esquema Nacional de Seguridad'?",
    "correcta": "Resolución de 13 de octubre de 2016",
    "distractores": [
      "Orden PRE/878/2010",
      "Ley 11/2007",
      "Real Decreto 951/2015"
    ],
    "explicacion": "La Instrucción Técnica de Seguridad de conformidad con el ENS fue aprobada mediante la Resolución de 13 de octubre de 2016."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ISO vs ENS",
    "pregunta": "¿Qué carácter tienen las normas de la familia ISO/IEC 27000 en comparación con el ENS?",
    "correcta": "Son de cumplimiento voluntario, mientras que el ENS es obligatorio para la Administración",
    "distractores": [
      "Ambas son leyes orgánicas aprobadas por el Parlamento Español",
      "El ENS es voluntario y la ISO 27001 es obligatoria para las PYMES",
      "Ambas son obligatorias por igual en el sector público y privado"
    ],
    "explicacion": "Las normas ISO 27000 son estándares voluntarios, mientras que el ENS es obligatorio para la Administración Pública."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "¿Qué ley orgánica derogó finalmente el Real Decreto-Ley 5/2018?",
    "correcta": "Ley Orgánica 3/2018",
    "distractores": [
      "Ley 34/2002",
      "Ley Orgánica 15/1999",
      "Ley Orgánica 5/1992"
    ],
    "explicacion": "La Ley Orgánica 3/2018 (LOPDGDD) derogó expresamente el Real Decreto-Ley 5/2018, que tenía carácter provisional."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "ENI",
    "pregunta": "Dentro del marco legal de Ciberseguridad, ¿qué norma regula el Esquema Nacional de Interoperabilidad?",
    "correcta": "Real Decreto 4/2010, de 8 de enero",
    "distractores": [
      "Real Decreto 263/1996",
      "Ley 56/2007",
      "Real Decreto 3/2010, de 8 de enero"
    ],
    "explicacion": "El Esquema Nacional de Interoperabilidad (ENI) está regulado por el Real Decreto 4/2010, de 8 de enero."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Infraestructuras críticas",
    "pregunta": "¿Cuál es la norma que aprobó el Reglamento de Protección de las Infraestructuras Críticas?",
    "correcta": "Real Decreto 704/2011, de 20 de mayo",
    "distractores": [
      "Real Decreto 951/2015",
      "Real Decreto 3/2010",
      "Ley 8/2011"
    ],
    "explicacion": "El Real Decreto 704/2011, de 20 de mayo, aprueba el Reglamento de protección de las infraestructuras críticas."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "¿Cuáles de estos tipos de ficheros requieren medidas de seguridad de nivel ALTO en la LOPD?",
    "correcta": "Los que contengan o se reflejen datos recabados para fines policiales sin consentimiento de las personas o afectados",
    "distractores": [
      "Aquellos de los que sean responsables las entidades financieras para finalidades relacionadas con la prestación de servicios financieros",
      "Los relativos a la comisión de infracciones administrativas o penales",
      "Aquellos de los que sean responsable Administraciones tributarias y se relacionen con el ejercicio de sus potestades tributarias"
    ],
    "explicacion": "El reglamento de la LOPD establece nivel alto para datos de ideología, religión, salud, etc., y datos policiales recabados sin consentimiento (UA6/Tema 6)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "Según la LOPD, las medidas de seguridad a aplicar a los ficheros de videovigilancia serán:",
    "correcta": "De nivel Básico",
    "distractores": [
      "De nivel ALTO, salvo que sólo recojan imágenes dentro de un recinto privado, en cuyo caso serán de nivel MEDIO",
      "De nivel BÁSICO, salvo que recojan imágenes de la vía pública en cuyo caso serán de nivel MEDIO",
      "De nivel MEDIO"
    ],
    "explicacion": "El reglamento de desarrollo de la LOPD estipula que a los ficheros con fines de videovigilancia se les aplican las medidas de nivel básico (UA6/Tema 6)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "¿En cuál de los siguientes tipos de ficheros SÍ es de aplicación lo indicado en la LOPD?",
    "correcta": "Los que contengan o se refieran a datos recabados para fines policiales",
    "distractores": [
      "Los realizados o mantenidos por personas físicas en el ejercicio de actividades exclusivamente personales o domésticas",
      "Los establecidos para la investigación del terrorismo y de formas graves de delincuencia organizada",
      "Los sometidos a la normativa sobre protección de materias clasificadas"
    ],
    "explicacion": "La LOPD es de aplicación a los ficheros policiales, mientras que excluye el ámbito doméstico, terrorismo/delincuencia grave y materias clasificadas (UA6/Tema 6)."
  },
  {
    "temaNum": 6,
    "temaNombre": "Tema 6: Legislación y Normativa",
    "seccion": "Protección de datos",
    "pregunta": "La auditoría de protección de datos se debe realizar:",
    "correcta": "A partir del nivel MEDIO, al menos cada DOS años",
    "distractores": [
      "A partir del nivel ALTO, al menos cada DOS años",
      "A partir del nivel BÁSICO, al menos cada DOS años",
      "A partir del nivel ALTO, al menos cada TRES años"
    ],
    "explicacion": "El reglamento de la LOPD establece la obligatoriedad de realizar una auditoría al menos cada dos años para los ficheros con nivel medio o alto (UA6/Tema 6)."
  }
];
