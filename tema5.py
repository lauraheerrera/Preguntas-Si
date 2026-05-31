#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 5: Instrumentos para la Gestión de la Seguridad
# Basado en: Apuntes de Seguridad de la Información 2022, UA 5
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

    # ── 1. ITIL ──────────────────────────────────────────────────────────────

    Pregunta(
        "ITIL",
        "ITIL (Information Technologies Infrastructure Library) es:",
        "Una biblioteca de buenas prácticas en la provisión y gestión de servicios TI",
        [
            "Una normativa de obligado cumplimiento en seguridad de la información",
            "Una metodología específica para la realización de análisis de riesgos",
            "Una biblioteca de apoyo a la realización de auditorías de seguridad",
        ],
        "ITIL no tiene carácter obligatorio; es un conjunto de buenas prácticas de gestión de servicios TI.",
    ),
    Pregunta(
        "ITIL",
        "El origen de ITIL se sitúa en:",
        "1986, como resultado de las investigaciones de la CCTA encargadas por el gobierno británico tras el fracaso del proyecto TAURUS",
        [
            "1997, como iniciativa de la ONU para estandarizar la gestión de TI a nivel global",
            "2001, como respuesta al auge de las metodologías ágiles en desarrollo de software",
            "2008, publicado directamente en su versión 3 por el consorcio AXELOS",
        ],
        "ITIL nació en 1986 por encargo del gobierno británico a la CCTA, tras el fracaso del proyecto TAURUS (bolsa de Londres).",
    ),
    Pregunta(
        "ITIL",
        "La versión ITIL v3 organiza la gestión en torno al concepto de:",
        "Ciclo de vida del servicio (cinco fases: Estrategia, Diseño, Transición, Operación y Mejora continua)",
        [
            "Sistema de valor de servicio (SVS) con cuatro dimensiones críticas",
            "Análisis de riesgos en tres fases: activos, amenazas y salvaguardas",
            "Plan director de seguridad con alcance y objetivos definidos",
        ],
        "ITIL v3 centra la gestión en el ciclo de vida del servicio con cinco fases. ITIL v4 introduce el SVS.",
    ),
    Pregunta(
        "ITIL",
        "Las cuatro dimensiones críticas que define ITIL v4 son:",
        "Organización y personas; Información y tecnología; Socios y proveedores; Flujos de valor y procesos",
        [
            "Estrategia, Diseño, Transición, Operación y Mejora continua",
            "Activos, Amenazas, Vulnerabilidades y Salvaguardas",
            "Disponibilidad, Integridad, Confidencialidad y Autenticación",
        ],
        "ITIL v4 define 4 dimensiones para crear valor: Organización/personas, Información/tecnología, Socios/proveedores, Flujos/procesos.",
    ),
    Pregunta(
        "ITIL",
        "El consorcio AXELOS, creado en 2014, es responsable de:",
        "El desarrollo de ITIL y otras metodologías y buenas prácticas, como sucesor de la CCTA/OGC",
        [
            "La certificación de productos de seguridad para la administración española",
            "La gestión del Esquema Nacional de Seguridad en España",
            "La coordinación de los CSIRTs a nivel europeo",
        ],
        "AXELOS es el consorcio entre el Gobierno del Reino Unido y Capita que desarrolla y posee ITIL desde 2014.",
    ),
    Pregunta(
        "ITIL",
        "En terminología ITIL, un 'proceso' es:",
        "Un conjunto estructurado de actividades diseñado para cumplir con un objetivo concreto",
        [
            "Un medio para entregar valor al cliente facilitando los resultados que desea",
            "Una subdivisión de la organización especializada en realizar un trabajo específico",
            "Un conjunto de capacidades organizativas para generar valor en forma de servicios",
        ],
        "Proceso = actividades estructuradas para un objetivo. Servicio = entregar valor. Función = unidad organizativa.",
    ),

    # ── 2. Análisis de riesgos ───────────────────────────────────────────────

    Pregunta(
        "Análisis de riesgos",
        "La definición formal de 'riesgo' en el contexto de la UA5 es:",
        "La probabilidad de que un evento adverso ocurra y que supone un impacto negativo si llegase a ocurrir",
        [
            "La probabilidad de que ocurra un evento que puede tener impacto positivo o negativo",
            "La debilidad de un sistema que puede ser utilizada accidental o intencionadamente",
            "La posibilidad de que un evento adverso NO se produzca gracias a las salvaguardas",
        ],
        "Riesgo = probabilidad de evento adverso × impacto negativo. Solo considera eventos adversos, no positivos.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "El análisis de riesgos es un proceso cíclico porque:",
        "Los riesgos desconocidos pueden materializarse con el tiempo y los nuevos riesgos deben incorporarse al análisis",
        [
            "Se debe repetir cada año por exigencia legal independientemente de los cambios",
            "Los activos de la organización cambian de valor cada mes",
            "Las salvaguardas pierden eficacia automáticamente a los seis meses",
        ],
        "El análisis de riesgos debe revisarse continuamente para incorporar nuevos riesgos que inicialmente eran desconocidos.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "Las dos etapas principales de un análisis de riesgos son:",
        "Identificar el nivel de riesgo existente y proponer mejoras en las defensas (plan de tratamiento de riesgos)",
        [
            "Identificar activos y eliminar todas las vulnerabilidades detectadas",
            "Realizar una auditoría interna y contratar un seguro para los riesgos residuales",
            "Escanear vulnerabilidades técnicas y actualizar el software de los sistemas",
        ],
        "Fase 1: identificar riesgos sobre activos. Fase 2: proponer nuevas salvaguardas y elaborar plan de tratamiento.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "En la Fase 1 del análisis de riesgos (gestión de activos), ¿qué tipos de activos se pueden incluir?",
        "Infraestructuras básicas, hardware, software, almacenamiento, bases de datos, informes, contratos y personal",
        [
            "Solo los sistemas informáticos (hardware y software)",
            "Únicamente los activos con valor económico cuantificable en euros",
            "Exclusivamente los datos personales protegidos por la LOPD",
        ],
        "Los activos incluyen todo lo necesario para la disponibilidad de la información: infraestructuras, sistemas, documentos, personal, etc.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "La 'degradación' de un activo ante una amenaza mide:",
        "Cuánto puede verse afectado el activo por esa amenaza (en tanto por ciento)",
        [
            "La frecuencia con que se produce la amenaza (diaria, mensual, anual)",
            "El coste económico total de recuperar el activo tras el ataque",
            "El número de activos dependientes que se verían afectados en cascada",
        ],
        "En la valoración de amenazas se usan dos medibles: degradación (%) = cuánto afecta, y frecuencia = cada cuánto ocurre.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "En la Fase 4 (Gestión del riesgo), ¿cuántas acciones diferentes se pueden adoptar ante un riesgo identificado?",
        "Cuatro: mitigar, asumir, transferir o eliminar",
        [
            "Dos: aceptar o rechazar el riesgo",
            "Tres: mitigar, transferir o eliminar",
            "Cinco: mitigar, asumir, transferir, eliminar o ignorar",
        ],
        "Las 4 opciones de gestión del riesgo son: mitigar (reducir), asumir (aceptar), transferir (seguro/subcontratar) o eliminar.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "'Transferir el riesgo' como acción de gestión implica:",
        "Subcontratar el servicio o contratar un seguro que cubra el impacto en caso de materialización",
        [
            "Reducir el riesgo hasta un nivel aceptable mediante nuevas salvaguardas",
            "Eliminar completamente el riesgo para que no pueda materializarse",
            "Aceptar el riesgo cuando su mitigación es demasiado costosa",
        ],
        "Transferir = seguro o subcontratación. Mitigar = reducir. Asumir = aceptar. Eliminar = eliminar el activo/servicio.",
    ),
    Pregunta(
        "Análisis de riesgos - tipos",
        "La diferencia entre análisis de riesgos cualitativo y cuantitativo es:",
        "El cualitativo usa escalas discretas (bajo/medio/alto); el cuantitativo usa estimaciones económicas reales en euros",
        [
            "El cualitativo solo lo pueden realizar consultoras externas; el cuantitativo lo realiza el equipo interno",
            "El cualitativo analiza activos técnicos y el cuantitativo activos humanos",
            "El cualitativo se usa en grandes organizaciones y el cuantitativo en pequeñas empresas",
        ],
        "Cualitativo = escala de valores discretos, usado por la mayoría de organizaciones. Cuantitativo = euros reales, solo para grandes organizaciones.",
    ),
    Pregunta(
        "Análisis de riesgos - tipos",
        "La principal ventaja del análisis de riesgos cuantitativo es que permite:",
        "Estimar el retorno de inversión en mejoras de salvaguardas y responder con precisión a '¿hasta dónde proteger?'",
        [
            "Realizarse más rápidamente que el análisis cualitativo",
            "Ser comprensible por la dirección sin conocimientos técnicos",
            "Aplicarse a pequeñas organizaciones con pocos recursos",
        ],
        "El análisis cuantitativo estima los riesgos en euros, permitiendo calcular el ROI de las inversiones en seguridad.",
    ),

    # ── 2.6. Metodologías de análisis de riesgos ────────────────────────────

    Pregunta(
        "Metodologías de análisis de riesgos",
        "MAGERIT es la metodología de análisis de riesgos desarrollada por:",
        "El Consejo Superior de Administración Electrónica, de uso libre sin autorización previa",
        [
            "La Central Agency of Data Processing del gobierno del Reino Unido",
            "El gobierno francés, con herramienta gratuita de código libre",
            "El organismo internacional ISO para la familia de normas 27000",
        ],
        "MAGERIT es española, del Consejo Superior de Administración Electrónica. Publicada en 1997, actualmente en versión 3.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "La metodología CRAMM es actualmente utilizada por:",
        "La OTAN y el ejército holandés, entre otras organizaciones internacionales",
        [
            "El gobierno español como metodología principal de análisis de riesgos",
            "Las pequeñas empresas por su sencillez de aplicación",
            "Exclusivamente el gobierno francés y sus organismos dependientes",
        ],
        "CRAMM es del gobierno británico, compleja (requiere herramienta específica) y usada por la OTAN, entre otros.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "MAGERIT V3 está estructurada en tres libros. ¿Cuál de estas descripciones corresponde al Libro 2?",
        "Catálogo de Elementos: activos, tipología, valoración, amenazas habituales y salvaguardas",
        [
            "El método: secuencia de acciones y tareas para el proceso de gestión de riesgos",
            "Guías técnicas: manual de referencia para técnicas usadas en análisis de riesgos",
            "Marco normativo: legislación y normativa aplicable al análisis de riesgos",
        ],
        "MAGERIT V3: Libro 1 = El método. Libro 2 = Catálogo de Elementos. Libro 3 = Guías técnicas.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "La norma ISO/IEC 27005 se basa en el modelo:",
        "PDCA (Plan, Do, Check, Act), característico de la familia ISO 27000",
        [
            "CRAMM de tres fases: objetivos, análisis y salvaguardas",
            "MAGERIT de cuatro fases: activos, amenazas, salvaguardas y riesgo",
            "EBIOS de cinco fases: contexto, requisitos, amenazas, objetivos y riesgos",
        ],
        "ISO 27005 usa el modelo PDCA (Plan-Do-Check-Act) para la gestión del riesgo, coherente con toda la familia ISO 27000.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "¿Cuál de estas NO es una metodología reconocida de análisis de riesgos?",
        "ITIL",
        [
            "MAGERIT",
            "CRAMM",
            "EBIOS",
        ],
        "ITIL es una biblioteca de buenas prácticas de gestión de servicios TI, no una metodología de análisis de riesgos.",
    ),

    # ── 3. Auditoría de seguridad ────────────────────────────────────────────

    Pregunta(
        "Auditoría de seguridad",
        "La definición formal de auditoría de seguridad es:",
        "El proceso de recoger, agrupar y evaluar evidencias para determinar si un sistema de información protege el activo empresarial y cumple sus fines eficientemente",
        [
            "El proceso de identificar y explotar vulnerabilidades en los sistemas de información",
            "La elaboración de un plan director que define la estrategia de seguridad TIC",
            "La gestión de incidentes de seguridad con el objetivo de minimizar su impacto",
        ],
        "La auditoría recopila evidencias para evaluar si el sistema protege activos, mantiene integridad y cumple los fines organizativos.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "La diferencia entre 'auditoría de seguridad' y 'análisis de seguridad' es que:",
        "El análisis de seguridad identifica vulnerabilidades técnicas (hacking ético); la auditoría evalúa el cumplimiento integral (técnico, organizativo, legal)",
        [
            "Son términos sinónimos que describen el mismo proceso",
            "La auditoría solo analiza aspectos técnicos y el análisis incluye el factor humano",
            "El análisis es realizado por externos y la auditoría solo por el equipo interno",
        ],
        "El análisis de seguridad = pentesting/vulnerabilidades. La auditoría evalúa el conjunto: sistemas, procesos, personas y normativa.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "Los objetivos de una auditoría de seguridad de la información incluyen verificar que:",
        "La disponibilidad está razonablemente asegurada, los controles de integridad/confidencialidad/autenticación están implantados y se cumple la normativa",
        [
            "Todos los sistemas están actualizados a la última versión de software",
            "El personal tiene la formación técnica adecuada para su puesto",
            "Los activos de la organización están correctamente valorados económicamente",
        ],
        "La auditoría verifica: disponibilidad, integridad, confidencialidad, autenticación, trazabilidad y cumplimiento normativo.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "En el proceso de ejecución de una auditoría, la fase de 'recogida de evidencias' se realiza:",
        "Después de la planificación y como resultado de las revisiones y pruebas realizadas",
        [
            "Como primer paso, antes de definir el alcance de la auditoría",
            "Simultáneamente a la emisión del dictamen final",
            "Solo si se detectan incidentes de seguridad durante la auditoría",
        ],
        "El orden es: alcance → equipo auditor → planificación → recogida de evidencias → hallazgos → informe → dictamen.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "¿Cuál de estas tareas NO corresponde a la realización de una auditoría de seguridad?",
        "Identificar las amenazas y proponer salvaguardas para proteger a la organización",
        [
            "Recoger, agrupar y evaluar evidencias sobre el sistema de información",
            "Verificar que se mantiene la integridad de los datos",
            "Verificar que el sistema realiza de forma eficaz los fines de la organización",
        ],
        "Identificar amenazas y proponer salvaguardas es la función del análisis de riesgos, no de la auditoría.",
    ),

    # ── 4. Plan Director de Seguridad ────────────────────────────────────────

    Pregunta(
        "Plan Director de Seguridad",
        "Un Plan Director de Seguridad define:",
        "La estrategia en seguridad TIC de la organización durante un período acotado, identificando actuaciones y alineando todas las áreas",
        [
            "Los procedimientos de respuesta ante incidentes de seguridad en tiempo real",
            "El catálogo completo de activos de la organización con su valoración económica",
            "La política de contraseñas y autenticación de todos los sistemas corporativos",
        ],
        "El Plan Director es estratégico: define qué hacer en un período, alineando toda la organización con la estrategia de seguridad.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "Los dominios de seguridad que debe cubrir un Plan Director de Seguridad son:",
        "Seguridad física, control de accesos, gestión de redes, sistemas, legislación, organización, políticas, personal, continuidad e inventario",
        [
            "Solo los aspectos técnicos: redes, sistemas y aplicaciones",
            "Exclusivamente los aspectos legales: RGPD, ENS y legislación sectorial",
            "Solo los aspectos organizativos: políticas, roles y procedimientos",
        ],
        "El Plan Director debe cubrir TODOS los dominios: físico, lógico, organizativo, legal, personal y continuidad.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "¿Cuál NO es un factor clave para el éxito de un Plan Director de Seguridad?",
        "Realizar un análisis de riesgos (es un resultado del plan, no un factor previo de éxito)",
        [
            "Compromiso de la dirección",
            "Designar un responsable del plan",
            "Determinar un marco metodológico de referencia",
        ],
        "El análisis de riesgos es una FASE del plan director, no un factor previo de éxito. Los factores son: compromiso directivo, responsable y metodología.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "La norma de referencia para elaborar un Plan Director de Seguridad es:",
        "ISO 27002",
        [
            "ISO 27005",
            "MAGERIT V3",
            "CRAMM",
        ],
        "ISO 27002 es la norma de referencia para el Plan Director. ISO 27005 es para análisis de riesgos.",
    ),

    # ── 5. Plan de Respuesta ante Incidentes ─────────────────────────────────

    Pregunta(
        "Plan de respuesta ante incidentes",
        "Un 'incidente' en el contexto de la gestión de la seguridad es:",
        "Cualquier situación o evento que pueda ocasionar la pérdida o degradación de un servicio, o afectar a las dimensiones de la seguridad",
        [
            "Exclusivamente los ciberataques externos planificados contra la organización",
            "Solo los fallos técnicos de hardware o software con impacto en la disponibilidad",
            "Los eventos de seguridad detectados por el IDS/IPS de la organización",
        ],
        "Un incidente puede ser fortuito o intencionado, y afectar a cualquier dimensión: disponibilidad, integridad, confidencialidad, etc.",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "El CSIRT (Computer Security Incident Response Team) es:",
        "El equipo de respuesta ante incidentes de seguridad, eje de control ante incidentes, formado por personal cualificado con responsabilidad en todas las áreas expuestas",
        [
            "El organismo gubernamental de coordinación de incidentes de ciberseguridad",
            "Un sistema automatizado de respuesta ante ataques de ransomware",
            "El equipo auditor externo que revisa el cumplimiento del plan de seguridad",
        ],
        "El CSIRT interno de la organización es el equipo que gestiona y responde ante los incidentes de seguridad.",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "¿Por qué es especialmente importante el 'plan de comunicación' en el plan de respuesta ante incidentes?",
        "Porque una mala gestión de la comunicación a terceros puede generar más daño que la propia pérdida de información",
        [
            "Porque la comunicación rápida a los medios de comunicación evita sanciones legales",
            "Porque el plan de comunicación permite negociar con los atacantes el rescate de los datos",
            "Porque la comunicación al personal interno es suficiente sin notificar a clientes ni autoridades",
        ],
        "Una comunicación inadecuada (timing, destinatarios, mensaje) puede amplificar el impacto reputacional y legal del incidente.",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "Durante la 'contención del daño' ante un incidente, es importante:",
        "Minimizar el impacto y evitar destruir pruebas necesarias para identificar y rastrear al atacante",
        [
            "Apagar inmediatamente todos los sistemas para detener el ataque",
            "Eliminar todos los ficheros sospechosos para limpiar el sistema lo antes posible",
            "Formatear los discos afectados para recuperar el servicio en el menor tiempo posible",
        ],
        "Hay tensión entre la velocidad de respuesta y la preservación de evidencias forenses. Se deben mantener ambas consideraciones.",
    ),

    # ── 6. Plan de Continuidad del Negocio ───────────────────────────────────

    Pregunta(
        "Plan de continuidad del negocio",
        "La 'resiliencia' de una organización se define en la UA5 como:",
        "La capacidad de la organización de recuperarse frente a la adversidad y seguir proyectando el futuro",
        [
            "La capacidad de detectar y responder a incidentes de seguridad en tiempo real",
            "La resistencia de los sistemas técnicos ante ataques de denegación de servicio",
            "El nivel mínimo de servicio que debe mantenerse durante un incidente",
        ],
        "Resiliencia = capacidad de recuperación y continuidad proyectada hacia el futuro. El PCN formaliza esta capacidad.",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "El parámetro RTO (Recovery Time Objective) mide:",
        "El tiempo que transcurre desde la parada de un proceso hasta que se logra recuperar su funcionamiento",
        [
            "El nivel mínimo de funcionamiento que debe tener un proceso para darlo por recuperado",
            "El tiempo máximo que un proceso puede permanecer inactivo antes de consecuencias dramáticas",
            "El grado de dependencia de la actualidad de los datos en el proceso de recuperación",
        ],
        "RTO = tiempo de recuperación. MTD = máximo tolerable de caída (MTD > RTO). RPO = pérdida de datos tolerada.",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "El parámetro MTD (Maximum Tolerable Downtime) establece:",
        "El tiempo máximo que un proceso puede permanecer inactivo antes de que las consecuencias sean dramáticas",
        [
            "El tiempo de recuperación objetivo desde la parada hasta la reanudación",
            "El nivel mínimo de funcionamiento necesario para dar por recuperado el proceso",
            "El grado de dependencia de los datos actualizados en el proceso",
        ],
        "MTD es el tiempo máximo tolerable de caída. SIEMPRE debe ser mayor que el RTO (tiempo real de recuperación).",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "El parámetro RPO (Recovery Point Objective) mide:",
        "El grado de dependencia de la actualidad de los datos y condiciona la política de copias de seguridad",
        [
            "El tiempo máximo que un proceso puede estar inactivo sin consecuencias graves",
            "El tiempo necesario para recuperar el funcionamiento del proceso",
            "El nivel mínimo de rendimiento del sistema durante la recuperación",
        ],
        "RPO define cuánta pérdida de datos es tolerable. Si el RPO es 4 horas, las copias deben hacerse al menos cada 4 horas.",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "Las fases de desarrollo de un PCN (Plan de Continuidad del Negocio) son:",
        "Definición del alcance, análisis de la organización, estrategia de continuidad, respuesta, pruebas/mantenimiento y concienciación",
        [
            "Activos, amenazas, salvaguardas, riesgo y plan de tratamiento",
            "Alcance, equipo auditor, planificación, evidencias, hallazgos, informe y dictamen",
            "Estrategia, diseño, transición, operación y mejora continua",
        ],
        "Las 6 fases del PCN son: alcance → análisis (BIA+riesgos) → estrategia → respuesta → pruebas → concienciación.",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "La norma internacional específica para la continuidad del negocio es:",
        "ISO 22301",
        [
            "ISO 27001",
            "ISO 27005",
            "ISO 27002",
        ],
        "ISO 22301 es la norma específica de continuidad del negocio. ISO 27001 es el SGSI. ISO 27002 son los controles de seguridad.",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "El objetivo principal de un PCN es:",
        "La reanudación de las operaciones de la organización en el menor tiempo posible ante cualquier contingencia",
        [
            "Eliminar completamente todos los riesgos que puedan afectar a la organización",
            "Identificar y valorar todos los activos de información de la organización",
            "Establecer los controles técnicos necesarios para prevenir ciberataques",
        ],
        "El PCN busca la continuidad y recuperación rápida, no la eliminación total del riesgo (que es imposible).",
    ),
    Pregunta(
        "Plan de continuidad del negocio",
        "La Fase 2 del PCN incluye el Análisis del Impacto sobre el Negocio (BIA). ¿Qué parámetros analiza?",
        "RTO, recursos implicados, MTD, ROL (nivel mínimo de recuperación) y RPO",
        [
            "Activos, amenazas, vulnerabilidades, salvaguardas y riesgo residual",
            "Alcance, equipo auditor, calendario y criterios de auditoría",
            "Estrategia, diseño, transición, operación y mejora del servicio",
        ],
        "El BIA analiza: RTO (recuperación), MTD (máximo tolerable), ROL (nivel mínimo), RPO (datos) y dependencias.",
    ),

    # ── Trampa ───────────────────────────────────────────────────────────────

    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre ITIL es FALSA?",
        "ITIL es una normativa de obligado cumplimiento para todas las organizaciones que presten servicios TI",
        [
            "ITIL tiene su origen en la investigación encargada por el gobierno británico tras el fracaso del proyecto TAURUS",
            "ITIL v3 organiza la gestión en torno al ciclo de vida del servicio",
            "ITIL v4 define el Sistema de Valor de Servicio (SVS) como evolución del ciclo de vida",
        ],
        "ITIL NO es obligatorio; es un conjunto de buenas prácticas. Su adopción es voluntaria.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el análisis de riesgos es INCORRECTA?",
        "El análisis de riesgos cuantitativo es el más utilizado por la mayoría de organizaciones por su sencillez",
        [
            "El análisis de riesgos cualitativo usa escalas como 'bajo, medio, alto'",
            "El análisis de riesgos es un proceso cíclico que debe revisarse con el tiempo",
            "MAGERIT V3 es una metodología española de análisis de riesgos de uso libre",
        ],
        "La mayoría de organizaciones usa el análisis cualitativo. El cuantitativo requiere alta cualificación y recursos, solo accesible a grandes organizaciones.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el MTD y el RTO es CORRECTA?",
        "El MTD (tiempo máximo tolerable de caída) siempre debe ser MAYOR que el RTO (tiempo de recuperación)",
        [
            "El RTO debe ser siempre mayor que el MTD para garantizar la recuperación a tiempo",
            "MTD y RTO son parámetros equivalentes que miden lo mismo",
            "El RPO (nivel de recuperación de datos) siempre es mayor que el MTD",
        ],
        "MTD > RTO es una condición imprescindible: si el tiempo de recuperación supera el máximo tolerable, el impacto es dramático.",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre la auditoría de seguridad es FALSA?",
        "La auditoría de seguridad y el análisis de vulnerabilidades (pentesting) son términos sinónimos",
        [
            "La auditoría evalúa evidencias sobre el cumplimiento de controles y normativa",
            "La auditoría puede realizarse por un equipo interno o externo",
            "El resultado de una auditoría incluye hallazgos, informe y dictamen final",
        ],
        "La auditoría evalúa el cumplimiento integral. El pentesting/análisis de vulnerabilidades es una técnica técnica específica (análisis de seguridad).",
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones sobre el Plan Director de Seguridad es CORRECTA?",
        "El análisis de riesgos es una FASE del proceso de elaboración del Plan Director, no un factor previo de éxito",
        [
            "El compromiso de la dirección no es necesario si se designa un responsable técnico del plan",
            "El Plan Director solo debe cubrir los aspectos técnicos de la seguridad",
            "La norma de referencia para el Plan Director es la ISO 27005",
        ],
        "El análisis de riesgos (fase 3) es parte del desarrollo del Plan Director. Los factores de éxito son: compromiso directivo, responsable, metodología y recursos.",
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    Pregunta(
        "ITIL",
        "¿Qué es ITIL?",
        "Una biblioteca de buenas prácticas en la gestión de las Tecnologías de la Información",
        [
            "Una norma europea de obligado cumplimiento en Tecnologías de la Información",
            "Un conjunto de estándares en Tecnologías de la Información",
            "Ninguna de las respuestas es correcta",
        ],
        "ITIL es una biblioteca de buenas prácticas, no una norma de obligado cumplimiento.",
    ),
    Pregunta(
        "ITIL",
        "ITIL es...",
        "una recopilación de buenas prácticas en la gestión de servicios",
        [
            "una metodología de trabajo",
            "un manual de acciones a realizar para hacer un análisis de riesgos",
            "una norma ISO de la familia ISO 27.000",
        ],
        "ITIL es una recopilación de buenas prácticas, no una metodología rígida ni una norma ISO.",
    ),
    Pregunta(
        "ITIL",
        "El objetivo de ITIL v2 es:",
        "Alinear las Tecnologías de la Información con el negocio",
        [
            "Mejorar las comunicaciones de la organización",
            "Separar las funciones de las Tecnologías de la Información",
            "Integrar las Tecnologías de la Información en el negocio",
        ],
        "El objetivo de ITIL v2 es alinear (no integrar) las TI con el negocio.",
    ),
    Pregunta(
        "ITIL",
        "¿Qué etapas conforman el Ciclo de Vida del Servicio?",
        "Estrategia del Servicio, Diseño del Servicio, Transición del Servicio, Operación del Servicio y Mejora Continua",
        [
            "Transición del servicio, Publicación, Difusión y Mejora continua",
            "Plan, Do, Check, Act",
            "Estrategia del Servicio, Implantación del Servicio y Mantenimiento del Servicio",
        ],
        "El Ciclo de Vida del Servicio de ITIL v3 tiene 5 etapas: Estrategia, Diseño, Transición, Operación y Mejora Continua.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "¿Qué opciones existen para tratar los riesgos?",
        "Mitigar, asumir, transferir o eliminar el riesgo",
        [
            "Ninguna de las respuestas es correcta",
            "Mitigar, asumir y eliminar el riesgo",
            "Transferir a un tercero y eliminar el riesgo",
        ],
        "Las cuatro opciones de tratamiento del riesgo son: mitigar, asumir, transferir o eliminar.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "¿En qué consiste un ANÁLISIS DE RIESGOS?",
        "Las dos respuestas indicadas son correctas",
        [
            "En identificar los riesgos a los que están expuestos los activos de la organización",
            "En identificar los problemas de seguridad que evidencian vulnerabilidades",
            "Ninguna de las dos respuestas indicadas es correcta",
        ],
        "El análisis de riesgos identifica tanto los riesgos sobre los activos como las vulnerabilidades existentes.",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "En el ámbito del análisis de riesgos, se denomina incidente a:",
        "Los hechos que deben evitarse en la organización pues causan un impacto en el negocio",
        [
            "Las averías de los sistemas de Información",
            "Un fallo en el sistema eléctrico",
            "Los hechos que no deben evitarse en la organización pues aportan beneficio al negocio",
        ],
        "Un incidente es cualquier hecho que cause un impacto negativo en el negocio y que deba evitarse.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "Un activo es...",
        "un recurso software, hardware, de personal, administrativo, o funcional que es necesario para el funcionamiento del servicio",
        [
            "el hardware asociado a los servicios que estamos considerando",
            "una debilidad del sistema que puede ser utilizada de forma accidental o intencionada",
            "ninguna de las anteriores",
        ],
        "Los activos incluyen todo tipo de recursos necesarios: software, hardware, personal, procesos, etc.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "¿Qué se considera el activo más importante de las organizaciones?",
        "La información",
        [
            "Sus beneficios",
            "Su seguridad",
            "Sus empleados",
        ],
        "La información es el activo más valioso de las organizaciones en la sociedad de la información.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "El IMPACTO es:",
        "Un medible del grado de daño que se ha producido sobre un activo",
        [
            "Ninguna de las respuestas es correcta",
            "Un medible de la importancia de una vulnerabilidad",
            "Un medible sobre el número de activos de una organización",
        ],
        "El impacto mide el grado de daño producido en un activo cuando se materializa una amenaza.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "Denominamos RIESGO a:",
        "La probabilidad de que ocurra un evento adverso",
        [
            "La probabilidad de que ocurra un fallo de hardware",
            "Un medible de las posibles amenazas detectadas en una organización",
            "La probabilidad de que ocurra un fallo en el sistema",
        ],
        "El riesgo es la probabilidad de que ocurra un evento adverso multiplicado por el impacto que causaría.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "Definimos el riesgo como:",
        "la probabilidad de que ocurra un evento adverso que supone un impacto negativo en caso de ocurrir",
        [
            "la probabilidad de que ocurra un evento que puede tener un impacto positivo o negativo en la organización",
            "la probabilidad de que una amenaza nunca ocurra",
            "la posibilidad de que un evento adverso no se produzca",
        ],
        "El riesgo solo considera eventos adversos con impacto negativo, no eventos positivos.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "Un ATAQUE es:",
        "Una amenaza que proviene de terceros que intencionadamente buscan comprometer la seguridad del sistema",
        [
            "Un error intencionado en los sistemas de información",
            "Una vulnerabilidad que proviene de terceros con la intención de robar la información de la organización",
            "Una negligencia de terceros que compromete la seguridad de los sistemas",
        ],
        "Un ataque es una amenaza intencionada, a diferencia de los accidentes o negligencias.",
    ),
    Pregunta(
        "Análisis de riesgos",
        "Una vulnerabilidad es un tipo de",
        "debilidad",
        [
            "amenaza",
            "incidente",
            "riesgo",
        ],
        "La vulnerabilidad es una debilidad del sistema que puede ser explotada por una amenaza.",
    ),
    Pregunta(
        "Análisis de riesgos - tipos",
        "¿Qué tipos de riesgo existen?",
        "Conocidos y desconocidos",
        [
            "Ninguna de las respuestas es correcta",
            "Mitigables y gestionables",
            "Previstos, imprevistos y mitigables",
        ],
        "Los riesgos se clasifican en conocidos (identificados) y desconocidos (aún no identificados).",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "¿Cuál de los siguientes eventos se puede considerar un 'incidente de seguridad'?",
        "todos los anteriores",
        [
            "la pérdida de suministro eléctrico",
            "el robo de información confidencial",
            "el fallo en un disco de datos",
        ],
        "Cualquier evento que afecte a la disponibilidad, integridad o confidencialidad es un incidente de seguridad.",
    ),
    Pregunta(
        "Análisis de riesgos - fases",
        "¿En qué consiste la Gestión del Riesgo?",
        "En identificar y desplegar las medidas técnicas y organizativas requeridas para evitar, minimizar o controlar los riesgos identificados, de forma que se elimine o reduzca el daño que pueden ocasionar",
        [
            "En identificar y desplegar las medidas técnicas y organizativas requeridas para eliminar los riesgos identificados, de forma que se evite totalmente el daño que pueden ocasionar",
            "En subcontratar a una empresa externa la seguridad de la organización",
            "En aplicar determinadas medidas destinadas a mitigar los riesgos detectados",
        ],
        "La gestión del riesgo busca evitar, minimizar o controlar los riesgos, no eliminarlos todos (lo cual es imposible).",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "¿Cuáles de las siguientes respuestas son metodologías reconocidas de análisis de riesgos?",
        "todas las anteriores",
        [
            "Magerit III",
            "Ebios",
            "CRAMM",
        ],
        "MAGERIT, EBIOS y CRAMM son las tres metodologías reconocidas de análisis de riesgos más mencionadas en el temario.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "Entre las posibles metodologías que se pueden utilizar para realizar un análisis de riesgos están:",
        "CRAMM, EBIOS y MAGERIT III",
        [
            "ITIL, ISO 27.001 y MAGERIT III",
            "ITIL v3, CRAMM y MAGERIT III",
            "Ninguna de las respuestas es correcta",
        ],
        "Las metodologías reconocidas de análisis de riesgos son CRAMM, EBIOS y MAGERIT III.",
    ),
    Pregunta(
        "Metodologías de análisis de riesgos",
        "¿Qué es MAGERIT?",
        "Una metodología de análisis y gestión de riesgos enfocada a las Administraciones Públicas",
        [
            "Una metodología de análisis de la seguridad propuesta por el CNI",
            "Una metodología de análisis forense desarrollada por las administraciones públicas",
            "Una metodología de análisis de intrusiones",
        ],
        "MAGERIT es la metodología española de análisis y gestión de riesgos, orientada a las Administraciones Públicas.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "La auditoría informática consiste en:",
        "Todas las respuestas son correctas",
        [
            "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información realiza de forma eficaz los fines de la organización y utiliza eficientemente los recursos",
            "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información mantiene la integridad de los datos",
            "Recoger, agrupar y evaluar las evidencias para determinar si un sistema de información protege el activo empresarial",
        ],
        "La auditoría informática evalúa todos esos aspectos: eficacia, integridad y protección del activo empresarial.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "¿Cuál de las siguientes tareas NO corresponde a la realización de una auditoría informática?",
        "identificar las amenazas y proponer salvaguardas para proteger a la organización",
        [
            "verificar que un sistema realiza de forma eficaz los fines de la organización y utiliza eficientemente los recursos",
            "recoger, agrupar y evaluar evidencias para determinar si un sistema de información protege el activo empresarial",
            "verificar que se mantiene la integridad de los datos",
        ],
        "Según el banco de preguntas oficial de la asignatura, verificar el uso eficaz y eficiente de los recursos no se considera una tarea directa en esta pregunta específica de auditoría.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "Algunos de los objetivos de la auditoría informática son:",
        "Las dos respuestas indicadas son correctas",
        [
            "Ninguna de las dos respuestas indicadas es correcta",
            "Eliminar o minimizar la probabilidad de pérdida de información",
            "Verificar el control interno de la función informática",
        ],
        "La auditoría busca tanto minimizar la pérdida de información como verificar el control interno de la función informática.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "Se consideran tipos de auditoría desde el punto de vista informático:",
        "Todas las respuestas son correctas",
        [
            "La auditoría de datos",
            "La auditoría de las comunicaciones",
            "La auditoría legal de la LOPD",
        ],
        "Los tipos de auditoría informática incluyen la de datos, comunicaciones, legal de LOPD, entre otras.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "¿De qué forma podemos desarrollar una auditoría?",
        "Auditoría alrededor del ordenador, a través del ordenador y con el ordenador",
        [
            "Auditoría a través de la informática, a través de la seguridad y con el ordenador",
            "Auditoría a través de la seguridad",
            "Ninguna de las anteriores es correcta",
        ],
        "Las tres formas de auditoría informática son: alrededor del ordenador, a través del ordenador y con el ordenador.",
    ),
    Pregunta(
        "Auditoría de seguridad",
        "¿Qué resultados obtenemos tras la realización de una auditoría informática?",
        "Evidencias de los riesgos asociados a los sistemas que dan soporte a la información de la organización",
        [
            "Identificación de las salvaguardas que minimizan los riesgos detectados",
            "Posibles adquisiciones a realizar para mejorar la infraestructura informática",
            "Ninguna de las respuestas es correcta",
        ],
        "El resultado principal de una auditoría son las evidencias sobre los riesgos que afectan a los sistemas de información.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "¿Qué define un Plan Director de Seguridad?",
        "La estrategia en seguridad TIC de la organización",
        [
            "La seguridad de la organización",
            "La estrategia en seguridad física y lógica de la organización",
            "La estrategia de negocio de la organización",
        ],
        "El Plan Director de Seguridad define la estrategia en seguridad TIC de la organización.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "Uno de los factores clave para el éxito de un Plan Director de Seguridad es:",
        "Compromiso de la dirección",
        [
            "Compromiso con los empleados",
            "Ninguna de las respuestas es correcta",
            "Compromiso con los proveedores",
        ],
        "El compromiso de la dirección es el factor clave más importante para el éxito de un Plan Director.",
    ),
    Pregunta(
        "Plan Director de Seguridad",
        "Uno de los objetivos de un Plan Director de Seguridad es:",
        "Aportar confianza sobre los servicios ofrecidos",
        [
            "Ninguna de las respuestas es correcta",
            "Realizar un análisis de riesgos en la organización",
            "Cumplir los requisitos de la LSSIE",
        ],
        "Aportar confianza sobre los servicios ofrecidos es uno de los objetivos del Plan Director.",
    ),
    Pregunta(
        "Plan de respuesta ante incidentes",
        "Un Plan de Respuesta ante Incidentes implica:",
        "Documentar una relación de actividades y tareas destinadas a dar respuesta a cualquier incidente genérico que afecte a la seguridad de la información",
        [
            "Documentar la seguridad de la organización",
            "Cumplir un requisito legal",
            "Documentar una relación de actividades y tareas destinadas a dar respuesta a cualquier incidente de la organización",
        ],
        "El Plan de Respuesta ante Incidentes documenta actividades para responder a incidentes de seguridad de la información.",
    ),
]
