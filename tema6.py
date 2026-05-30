#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 6: Legislación y Normativa
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
    # Bloques generales de legislación
    Pregunta(
        "Bloques legislativos",
        "El marco legislativo del tema se agrupa principalmente en:",
        "Infraestructuras críticas, protección de datos, ciberseguridad y comunicaciones/administración electrónica",
        [
            "Criptografía, malware, redes inalámbricas y copias de seguridad",
            "Auditoría, pentesting, programación segura y bases de datos",
            "ISO 9001, ITIL, COBIT y Scrum"
        ],
        "El tema organiza la legislación en cuatro bloques: infraestructuras críticas, protección de datos personales, ciberseguridad y comunicaciones/administración electrónica."
    ),
    Pregunta(
        "Infraestructuras críticas",
        "La Ley 8/2011 se relaciona principalmente con:",
        "La protección de las infraestructuras críticas",
        [
            "La firma electrónica avanzada",
            "La protección de datos personales",
            "La certificación ISO 27001"
        ],
        "La Ley 8/2011 establece medidas para la protección de las infraestructuras críticas."
    ),
    Pregunta(
        "Infraestructuras críticas",
        "El Real Decreto 704/2011 aprueba:",
        "El Reglamento de protección de las infraestructuras críticas",
        [
            "El Reglamento General de Protección de Datos",
            "El Esquema Nacional de Interoperabilidad",
            "La norma ISO 27002"
        ],
        "El Real Decreto 704/2011 desarrolla reglamentariamente la protección de infraestructuras críticas."
    ),

    # Protección de datos
    Pregunta(
        "Protección de datos",
        "La antigua LORTAD fue:",
        "La primera ley española que regulaba específicamente datos de carácter personal",
        [
            "Una norma ISO certificable",
            "Una directiva europea sobre ciberseguridad",
            "Una guía CCN-STIC para el ENS"
        ],
        "La LORTAD fue sustituida posteriormente por la LOPD."
    ),
    Pregunta(
        "Protección de datos",
        "La LOPD 15/1999 fue sustituida actualmente por:",
        "La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales",
        [
            "La Ley 59/2003 de Firma Electrónica",
            "El Real Decreto 3/2010 del ENS",
            "La Ley 8/2011 de infraestructuras críticas"
        ],
        "La LOPDyGDD adapta el ordenamiento español al RGPD y sustituye a la antigua LOPD."
    ),
    Pregunta(
        "RGPD",
        "El Reglamento General de Protección de Datos es:",
        "Un reglamento europeo de aplicación directa",
        [
            "Una norma ISO voluntaria y no certificable",
            "Una guía técnica del CCN-CERT",
            "Una ley española sobre firma electrónica"
        ],
        "El RGPD se aplica directamente en los Estados miembros de la Unión Europea."
    ),
    Pregunta(
        "RGPD",
        "El RGPD empezó a ser de obligado cumplimiento el:",
        "25 de mayo de 2018",
        [
            "29 de enero de 2010",
            "7 de septiembre de 2018",
            "6 de julio de 2016"
        ],
        "Aunque fue aprobado en 2016, su aplicación obligatoria comenzó el 25 de mayo de 2018."
    ),
    Pregunta(
        "RGPD",
        "Según el RGPD, un dato personal es:",
        "Toda información sobre una persona física identificada o identificable",
        [
            "Solo el DNI y el número de teléfono",
            "Solo datos almacenados en soporte informático",
            "Cualquier dato de una empresa, aunque no identifique a personas"
        ],
        "El concepto de dato personal es amplio: nombre, DNI, localización, IP, datos genéticos, etc."
    ),
    Pregunta(
        "RGPD",
        "Según el RGPD, el tratamiento de datos incluye:",
        "Operaciones como recogida, conservación, consulta, modificación, comunicación o supresión",
        [
            "Solo el cifrado de bases de datos",
            "Solo el almacenamiento automatizado",
            "Solo la destrucción física de documentos"
        ],
        "El tratamiento incluye muchas operaciones sobre datos personales, automatizadas o no."
    ),
    Pregunta(
        "RGPD",
        "Una novedad importante del RGPD es:",
        "La figura del Delegado de Protección de Datos",
        [
            "La eliminación de toda obligación de seguridad",
            "La sustitución de la ISO 27001",
            "La prohibición absoluta de tratar datos personales"
        ],
        "El RGPD crea la figura del DPO/DPD y regula cuándo debe designarse."
    ),
    Pregunta(
        "RGPD",
        "El plazo general para notificar violaciones de datos personales a la autoridad de control es:",
        "72 horas desde que se tenga conocimiento",
        [
            "24 meses",
            "2 años",
            "10 días hábiles siempre"
        ],
        "El RGPD obliga a notificar determinadas violaciones de seguridad en un plazo máximo general de 72 horas."
    ),
    Pregunta(
        "RGPD",
        "El régimen sancionador del RGPD puede llegar hasta:",
        "20 millones de euros o el 4 % del volumen de negocio anual global",
        [
            "600 euros como máximo",
            "El 1 % del presupuesto mensual",
            "La retirada automática de la certificación ISO 27002"
        ],
        "Las sanciones máximas pueden alcanzar 20.000.000 € o el 4 % del volumen de negocio anual global."
    ),
    Pregunta(
        "LOPDyGDD",
        "La LOPDyGDD española:",
        "Adapta el ordenamiento español al RGPD y garantiza derechos digitales",
        [
            "Sustituye a la Directiva NIS en toda Europa",
            "Es una norma ISO certificable",
            "Regula únicamente infraestructuras críticas"
        ],
        "La Ley Orgánica 3/2018 adapta el RGPD en España y añade la garantía de derechos digitales."
    ),

    # Ciberseguridad y Directiva NIS
    Pregunta(
        "LSSI-CE",
        "La Ley 34/2002 LSSI-CE regula principalmente:",
        "Servicios de la sociedad de la información y comercio electrónico",
        [
            "El ciclo PDCA",
            "La categorización ENS en básica, media y alta",
            "La certificación ISO 27001"
        ],
        "La LSSI-CE regula servicios de la sociedad de la información, contratación electrónica, comunicaciones comerciales y régimen sancionador."
    ),
    Pregunta(
        "Directiva NIS",
        "La Directiva NIS es la:",
        "Directiva (UE) 2016/1148 sobre seguridad de redes y sistemas de información",
        [
            "Ley Orgánica 3/2018 de protección de datos",
            "Norma ISO/IEC 27002",
            "Ley 59/2003 de firma electrónica"
        ],
        "La Directiva NIS busca un elevado nivel común de seguridad de redes y sistemas de información en la UE."
    ),
    Pregunta(
        "Directiva NIS",
        "Uno de los elementos clave de la Directiva NIS es:",
        "La notificación obligatoria de incidentes",
        [
            "La eliminación de los CSIRT",
            "La sustitución del RGPD",
            "La prohibición de servicios digitales"
        ],
        "La Directiva NIS regula seguridad de servicios esenciales y digitales, e incorpora obligaciones de notificación de incidentes."
    ),
    Pregunta(
        "Directiva NIS",
        "Los cuatro objetivos principales de la Directiva NIS son:",
        "Gestionar riesgo, proteger, detectar y minimizar impacto",
        [
            "Planificar, programar, compilar y desplegar",
            "Cifrar, firmar, comprimir y borrar",
            "Comprar, instalar, auditar y sancionar"
        ],
        "La Directiva NIS se orienta a gestionar el riesgo, proteger frente a ciberataques, detectar eventos y minimizar el impacto de incidentes."
    ),
    Pregunta(
        "Directiva NIS",
        "La Directiva NIS prevé la creación de:",
        "Una red CSIRT",
        [
            "Una red de autoridades ISO 27002",
            "Un sistema único de contraseñas europeas",
            "Un registro de ficheros personales como eje principal"
        ],
        "La Directiva NIS contempla una red CSIRT para respuesta a incidentes de seguridad informática."
    ),
    Pregunta(
        "Transposición NIS",
        "La Directiva NIS se traspuso en España mediante:",
        "El Real Decreto-ley 12/2018, de seguridad de las redes y sistemas de información",
        [
            "El Real Decreto 3/2010 del ENS",
            "La Ley 59/2003 de Firma Electrónica",
            "La Ley 30/1992 de procedimiento administrativo"
        ],
        "El Real Decreto-ley 12/2018 traspone la Directiva NIS al ordenamiento español."
    ),
    Pregunta(
        "CSIRT",
        "Según el tema, el CSIRT de referencia para organismos públicos es:",
        "CCN-CERT",
        [
            "INCIBE-CERT",
            "ESPDEF-CERT",
            "ENAC"
        ],
        "El tema identifica CCN-CERT para organismos públicos, INCIBE-CERT para privados y red académica, y ESPDEF-CERT para defensa."
    ),
    Pregunta(
        "CSIRT",
        "Según el tema, el CSIRT de referencia para privados y red académica es:",
        "INCIBE-CERT",
        [
            "CCN-CERT",
            "ESPDEF-CERT",
            "AENOR-CERT"
        ],
        "El Real Decreto-ley 12/2018 identifica INCIBE-CERT para operadores privados y red académica."
    ),
    Pregunta(
        "CSIRT",
        "Según el tema, el CSIRT de referencia para organismos de defensa es:",
        "ESPDEF-CERT",
        [
            "INCIBE-CERT",
            "CCN-CERT",
            "UNE-CERT"
        ],
        "El tema asigna ESPDEF-CERT a organismos de defensa."
    ),

    # Administración electrónica
    Pregunta(
        "Firma electrónica",
        "La Ley 59/2003 se relaciona con:",
        "La firma electrónica",
        [
            "El RGPD",
            "La Directiva NIS",
            "La norma ISO 27002"
        ],
        "La Ley 59/2003 regula la firma electrónica."
    ),
    Pregunta(
        "Administración electrónica",
        "La Ley 11/2007 LAECSP impulsó:",
        "El acceso electrónico de los ciudadanos a los servicios públicos",
        [
            "La creación de AES",
            "La sustitución de la ISO 27001",
            "El régimen sancionador del RGPD"
        ],
        "La LAECSP fue relevante para la relación electrónica de ciudadanos con las Administraciones Públicas."
    ),
    Pregunta(
        "DEH",
        "La Dirección Electrónica Habilitada sirve para:",
        "Recibir notificaciones administrativas con carácter legal",
        [
            "Firmar certificados ISO 27001",
            "Cifrar discos duros obligatoriamente",
            "Categorizar sistemas ENS"
        ],
        "La DEH permite recibir notificaciones administrativas electrónicas con validez legal."
    ),

    # ENS
    Pregunta(
        "ENS",
        "El Esquema Nacional de Seguridad está regulado originalmente por:",
        "El Real Decreto 3/2010, de 8 de enero",
        [
            "La Ley Orgánica 3/2018",
            "La Directiva 95/46/CE",
            "La norma ISO 27002"
        ],
        "El Real Decreto 3/2010 regula el ENS en el ámbito de la Administración Electrónica."
    ),
    Pregunta(
        "ENS",
        "El ENS define la política de seguridad aplicable a:",
        "El uso de medios electrónicos",
        [
            "Exclusivamente redes WiFi domésticas",
            "Solo empresas privadas sin relación con la Administración",
            "Únicamente certificados ISO"
        ],
        "El ENS define la política de seguridad en la utilización de medios electrónicos por la Administración."
    ),
    Pregunta(
        "ENS",
        "El ENS busca garantizar, entre otros aspectos:",
        "Acceso, integridad, disponibilidad, autenticidad, confidencialidad, trazabilidad y conservación",
        [
            "Solo confidencialidad",
            "Solo disponibilidad y velocidad",
            "Compresión, rendimiento y usabilidad"
        ],
        "El ENS establece principios y requisitos mínimos para proteger adecuadamente la información."
    ),
    Pregunta(
        "ENS",
        "El ENS es de obligada aplicación en:",
        "Administraciones públicas y entidades vinculadas o dependientes",
        [
            "Solo empresas privadas internacionales",
            "Solo usuarios particulares",
            "Cualquier blog personal sin excepción"
        ],
        "Aplica a AGE, comunidades autónomas, administración local y entidades de derecho público vinculadas o dependientes."
    ),
    Pregunta(
        "ENS",
        "Según el tema, las universidades se incluyen en el ámbito del ENS como:",
        "Organismos autónomos vinculados a las Comunidades Autónomas",
        [
            "Empresas privadas sin relación pública",
            "Operadores de servicios digitales extranjeros",
            "Entidades excluidas siempre"
        ],
        "El tema indica que las universidades se incluyen como organismos autónomos vinculados a las Comunidades Autónomas."
    ),
    Pregunta(
        "ENS",
        "Quedan excluidos del ENS:",
        "Los sistemas que tratan información clasificada regulada por la Ley de Secretos Oficiales",
        [
            "Todos los sistemas de universidades",
            "Todos los servicios web públicos",
            "Los sistemas de categoría alta"
        ],
        "El tema indica que se excluyen los sistemas que tratan información clasificada."
    ),
    Pregunta(
        "ENS sector privado",
        "Una empresa privada puede necesitar adecuarse al ENS cuando:",
        "Presta soluciones o servicios dentro del ámbito de aplicación del ENS para la Administración",
        [
            "Usa cualquier ordenador personal",
            "Tiene página web corporativa aunque no trate con la Administración",
            "Obtiene una certificación ISO 9001"
        ],
        "El tema destaca que, en la práctica, empresas privadas que se relacionen con la Administración pueden necesitar adecuarse al ENS."
    ),
    Pregunta(
        "ENS",
        "Los sistemas en el ENS se categorizan como:",
        "Básica, Media y Alta",
        [
            "Baja, Media, Alta y Crítica",
            "Media, Alta y Muy Alta",
            "No se categorizan en el ENS"
        ],
        "El tema indica que los sistemas podrán categorizarse con clasificación Básica, Media o Alta."
    ),
    Pregunta(
        "ENS implantación",
        "En el ciclo de implantación del ENS, una etapa inicial es:",
        "Preparar y aprobar la política de seguridad",
        [
            "Eliminar todos los controles ISO",
            "Publicar la clave privada del sistema",
            "Evitar la categorización del sistema"
        ],
        "El ciclo del ENS comienza preparando y aprobando la política de seguridad, además de definir roles y personas."
    ),
    Pregunta(
        "ENS implantación",
        "Para categorizar sistemas en el ENS se menciona como referencia:",
        "Guía CCN-STIC 803",
        [
            "Guía CCN-STIC 802",
            "Guía CCN-STIC 805",
            "Guía CCN-STIC 815"
        ],
        "La CCN-STIC 803 se asocia a la valoración/categorización de sistemas en el ENS."
    ),
    Pregunta(
        "ENS implantación",
        "Para el análisis de riesgos en el ENS se menciona:",
        "MAGERIT V3 con apoyo de PILAR",
        [
            "Solo Scrum",
            "Solo AES-GCM",
            "Solo ISO 9001"
        ],
        "El tema menciona MAGERIT V3 y la herramienta PILAR para el análisis de riesgos."
    ),
    Pregunta(
        "ENS implantación",
        "La declaración de aplicabilidad del ENS se apoya en:",
        "Guía CCN-STIC 804",
        [
            "Ley 59/2003",
            "Directiva 2000/31/CE",
            "ISO 14001"
        ],
        "El tema asocia la Guía CCN-STIC 804 con medidas e implantación del ENS y declaración de aplicabilidad."
    ),
    Pregunta(
        "ENS conformidad",
        "Para sistemas de categoría Básica en el ENS se requiere:",
        "Autoevaluación cada 2 años",
        [
            "Certificación obligatoria mensual",
            "Auditoría formal semanal",
            "Ningún tipo de revisión"
        ],
        "La categoría básica requiere autoevaluación periódica cada 2 años."
    ),
    Pregunta(
        "ENS conformidad",
        "Para categorías Media y Alta en el ENS se requiere:",
        "Auditoría formal al menos cada 2 años",
        [
            "Solo una autoevaluación voluntaria",
            "Auditoría cada 10 años",
            "Ninguna evidencia documental"
        ],
        "Media y Alta requieren auditoría formal al menos cada dos años."
    ),
    Pregunta(
        "ENS conformidad",
        "El resultado de la auditoría en categorías Media y Alta se denomina:",
        "Certificación de Conformidad",
        [
            "Declaración de privacidad",
            "Certificado de firma electrónica",
            "Registro de tratamiento RGPD"
        ],
        "La auditoría formal da lugar a una Certificación de Conformidad con distintivo emitido por entidad acreditada."
    ),
    Pregunta(
        "ENS conformidad",
        "La entidad nacional mencionada para acreditar entidades de certificación del ENS es:",
        "ENAC",
        [
            "INCIBE",
            "AEPD",
            "ISO"
        ],
        "El tema indica que las entidades acreditadas lo están por la Entidad Nacional de Acreditación, ENAC."
    ),

    # ISO 27000 / 27001 / 27002
    Pregunta(
        "ISO 27000",
        "La familia ISO 27000 se relaciona con:",
        "Estándares internacionales de seguridad de la información",
        [
            "Solo leyes españolas obligatorias",
            "Solo comercio electrónico",
            "Solo conservación de datos telefónicos"
        ],
        "ISO 27000 agrupa estándares internacionales para seguridad de la información y SGSI."
    ),
    Pregunta(
        "ISO 27001",
        "La ISO 27001 permite desarrollar:",
        "Un Sistema de Gestión de Seguridad de la Información",
        [
            "Un sistema de votación electrónica",
            "Un registro de nombres de dominio .es",
            "Un reglamento de infraestructuras críticas"
        ],
        "ISO 27001 es la norma de referencia para SGSI."
    ),
    Pregunta(
        "ISO 27001",
        "La ISO 27001 es:",
        "Certificable",
        [
            "No certificable nunca",
            "Una ley orgánica española",
            "Una guía CCN-STIC"
        ],
        "La ISO 27001 es la norma certificable de la familia ISO 27000."
    ),
    Pregunta(
        "ISO 27002",
        "La ISO 27002 es principalmente:",
        "Un código de buenas prácticas y apoyo para implantar un SGSI",
        [
            "Una ley obligatoria sobre comunicaciones electrónicas",
            "Una norma certificable por sí misma",
            "El decreto que regula el ENS"
        ],
        "ISO 27002 complementa a ISO 27001 con buenas prácticas y controles."
    ),
    Pregunta(
        "ISO 27001/27002",
        "Respecto a ISO 27001 e ISO 27002:",
        "Ambas son voluntarias y solo ISO 27001 es certificable",
        [
            "Ambas son obligatorias y certificables",
            "Ambas son voluntarias y ambas certificables",
            "ISO 27002 es obligatoria y el ENS voluntario"
        ],
        "El tema recalca que ISO 27001 es certificable y 27002 no; ambas son estándares voluntarios."
    ),
    Pregunta(
        "SGSI",
        "Un SGSI se basa en:",
        "Un enfoque de riesgo empresarial",
        [
            "Eliminar toda documentación",
            "Evitar controles de seguridad",
            "Instalar únicamente un antivirus"
        ],
        "La ISO 27001 plantea el SGSI como parte del sistema de gestión general basada en riesgo empresarial."
    ),
    Pregunta(
        "SGSI",
        "Un SGSI comprende elementos como:",
        "Modelos organizativos, políticas, planificación, responsabilidades, procedimientos, procesos y recursos",
        [
            "Solo firewalls y antivirus",
            "Solo certificados digitales",
            "Solo sanciones administrativas"
        ],
        "El SGSI no es solo tecnología: incluye organización, políticas, procesos, responsabilidades y recursos."
    ),
    Pregunta(
        "PDCA",
        "El ciclo PDCA significa:",
        "Plan, Do, Check, Act",
        [
            "Protect, Detect, Correct, Audit",
            "Privacy, Data, Control, Access",
            "Plan, Design, Compile, Attack"
        ],
        "PDCA o ciclo de Deming se usa para crear, implementar, supervisar y mejorar el SGSI."
    ),
    Pregunta(
        "PDCA",
        "En el ciclo PDCA, la fase Check se corresponde con:",
        "Supervisar/controlar el SGSI",
        [
            "Definir controles sin medirlos",
            "Eliminar la documentación",
            "Firmar digitalmente todos los documentos"
        ],
        "Check implica recopilar datos de control, analizarlos y comprobar si se logra la mejora esperada."
    ),
    Pregunta(
        "Documentación SGSI",
        "Las políticas en un SGSI:",
        "Marcan líneas generales de actuación y objetivos",
        [
            "Son evidencias de acciones realizadas",
            "Son instrucciones técnicas paso a paso",
            "Son únicamente registros de incidentes"
        ],
        "Las políticas establecen objetivos y líneas generales que deben ser conocidas por el personal."
    ),
    Pregunta(
        "Documentación SGSI",
        "Los procedimientos en un SGSI:",
        "Marcan instrucciones para realizar tareas programadas",
        [
            "Son la evidencia de acciones ya realizadas",
            "Sustituyen a toda política de seguridad",
            "Son leyes orgánicas"
        ],
        "Los procedimientos desarrollan los objetivos de las políticas y contienen detalles técnicos."
    ),
    Pregunta(
        "Documentación SGSI",
        "Las instrucciones en un SGSI:",
        "Desarrollan a bajo nivel los procedimientos",
        [
            "Son siempre leyes europeas",
            "Son exclusivamente certificados digitales",
            "Son el inventario de activos"
        ],
        "Las instrucciones concretan los pasos para realizar una tarea."
    ),
    Pregunta(
        "Documentación SGSI",
        "Los registros en un SGSI:",
        "Evidencian que se han realizado las acciones previstas",
        [
            "Son principios básicos del ENS",
            "Sustituyen a la política de seguridad",
            "Son amenazas externas"
        ],
        "Los registros sirven como evidencia documental de las acciones ejecutadas."
    ),

    # Fases SGSI
    Pregunta(
        "Fases SGSI",
        "La primera fase para establecer un SGSI es:",
        "Definir la política de seguridad",
        [
            "Realizar la certificación final",
            "Eliminar todos los riesgos",
            "Publicar los registros"
        ],
        "La figura de fases del SGSI empieza por definir la política de seguridad."
    ),
    Pregunta(
        "Fases SGSI",
        "La segunda fase del SGSI es:",
        "Definir el alcance del SGSI",
        [
            "Declarar aplicabilidad",
            "Revisar el sistema",
            "Contratar un seguro"
        ],
        "Tras la política se define qué procesos o ámbito cubre el SGSI."
    ),
    Pregunta(
        "Fases SGSI",
        "En la fase de análisis de riesgos se debe:",
        "Identificar activos, amenazas, vulnerabilidades y riesgos",
        [
            "Evitar valorar activos",
            "Implantar controles sin conocer riesgos",
            "Sustituir el RGPD"
        ],
        "El análisis de riesgos identifica activos y peligros para priorizar recursos."
    ),
    Pregunta(
        "Riesgos",
        "En el tema, las opciones de tratamiento del riesgo son:",
        "Mitigar, asumir, transferir o eliminar",
        [
            "Cifrar, firmar, comprimir o publicar",
            "Planificar, comprar, borrar o vender",
            "Aceptar, ignorar, ocultar o negar"
        ],
        "Las cuatro opciones clásicas indicadas son mitigar, asumir, transferir y eliminar el riesgo."
    ),
    Pregunta(
        "Riesgos",
        "Mitigar el riesgo significa:",
        "Reducirlo mediante controles hasta niveles aceptables",
        [
            "No hacer nada aunque sea crítico",
            "Pasarlo siempre a una aseguradora",
            "Eliminar el activo obligatoriamente"
        ],
        "Mitigar supone aplicar medidas o controles que bajan el riesgo."
    ),
    Pregunta(
        "Riesgos",
        "Transferir el riesgo puede hacerse mediante:",
        "Outsourcing o contratación de un seguro",
        [
            "Publicación de claves privadas",
            "Eliminación de toda auditoría",
            "Desactivación del SGSI"
        ],
        "Transferir implica desplazar parte del riesgo a un tercero, por ejemplo con outsourcing o seguros."
    ),
    Pregunta(
        "Declaración de Aplicabilidad",
        "La Declaración de Aplicabilidad también se conoce como:",
        "SOA, Statement of Applicability",
        [
            "DPO, Data Protection Officer",
            "CSIRT, Computer Security Incident Response Team",
            "DEH, Dirección Electrónica Habilitada"
        ],
        "La SOA resume controles seleccionados, implementados, justificados y excluidos."
    ),
    Pregunta(
        "Declaración de Aplicabilidad",
        "La Declaración de Aplicabilidad debe contener:",
        "Controles seleccionados, controles implementados y controles excluidos con justificación",
        [
            "Solo la lista de empleados",
            "Solo el presupuesto anual",
            "Solo sanciones del RGPD"
        ],
        "La SOA documenta las decisiones tomadas en relación con el tratamiento del riesgo."
    ),
    Pregunta(
        "Implantación SGSI",
        "Durante la implementación del SGSI se asignan dos roles importantes:",
        "Responsable de seguridad y comité de seguridad",
        [
            "Juez y fiscal",
            "Cliente y proveedor DNS",
            "Usuario anónimo y auditor informal"
        ],
        "El responsable coordina la seguridad y el comité aprueba directrices y busca soluciones."
    ),
    Pregunta(
        "Seguimiento SGSI",
        "Las auditorías internas del SGSI sirven para:",
        "Comprobar si controles, procesos y procedimientos siguen alineados con ISO 27001",
        [
            "Sustituir el análisis de riesgos inicial",
            "Evitar toda mejora continua",
            "Cambiar la ley aplicable"
        ],
        "Las auditorías internas son periódicas, con procedimientos y requisitos medibles."
    ),
    Pregunta(
        "Mejora continua",
        "Las acciones correctivas en un SGSI buscan:",
        "Solucionar no conformidades detectadas",
        [
            "Evitar que se revise el SGSI",
            "Crear siempre nuevas amenazas",
            "Sustituir los registros"
        ],
        "Las acciones correctivas identifican no conformidades, causas, acciones, resultados y eficacia."
    ),
    Pregunta(
        "Mejora continua",
        "Las acciones preventivas en un SGSI buscan:",
        "Evitar que se produzca una no conformidad",
        [
            "Corregir exclusivamente errores ya ocurridos",
            "Eliminar el ciclo PDCA",
            "Sustituir al responsable de seguridad siempre"
        ],
        "Las acciones preventivas pretenden impedir que aparezcan no conformidades."
    ),

    # ISO vs ENS
    Pregunta(
        "ISO vs ENS",
        "La ISO 27000 se orienta principalmente a:",
        "Establecer un SGSI",
        [
            "Regular solo medios electrónicos de la Administración",
            "Imponer siempre controles concretos por categoría ENS",
            "Sustituir la legislación nacional"
        ],
        "La ISO 27000 se centra en el sistema de gestión de seguridad de la información."
    ),
    Pregunta(
        "ISO vs ENS",
        "El ENS se orienta principalmente a:",
        "Cumplir principios básicos e implantar medidas de seguridad concretas",
        [
            "Crear una norma ISO certificable internacional",
            "Eliminar la categorización de sistemas",
            "Regular únicamente empresas extranjeras"
        ],
        "El ENS define principios básicos, requisitos mínimos y medidas según la categoría del sistema."
    ),
    Pregunta(
        "ISO vs ENS",
        "Una diferencia importante es que ISO 27000:",
        "No obliga a implantar medidas de seguridad concretas",
        [
            "Solo aplica a la Administración Pública",
            "Exige auditoría ENS cada dos años",
            "Regula exclusivamente firma electrónica"
        ],
        "La ISO deja más margen a la organización; el ENS prescribe medidas concretas según categoría."
    ),
    Pregunta(
        "ISO vs ENS",
        "Una diferencia importante es que el ENS:",
        "Obliga a implantar medidas concretas según la categoría del sistema",
        [
            "No tiene requisitos mínimos",
            "Es solo una buena práctica voluntaria ISO",
            "Nunca afecta a empresas privadas"
        ],
        "El ENS es más preciso y reduce la discrecionalidad al exigir medidas por categoría."
    ),
    Pregunta(
        "ISO vs ENS",
        "El alcance del SGSI en ISO 27000:",
        "Lo define la organización",
        [
            "Lo define siempre el CCN-CERT",
            "Es siempre toda la Administración pública",
            "No puede limitarse a procesos concretos"
        ],
        "En ISO, la organización decide el alcance del SGSI."
    ),
    Pregunta(
        "ISO vs ENS",
        "El ENS afecta específicamente a:",
        "Medios electrónicos utilizados por la Administración para relacionarse con los ciudadanos",
        [
            "Todo sistema doméstico sin excepción",
            "Solo sistemas de videojuegos",
            "Solo comercio electrónico privado"
        ],
        "El ENS se centra en medios electrónicos de las Administraciones Públicas."
    ),

    # Trampas de examen
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es falsa?",
        "La ISO 27002 es certificable igual que ISO 27001",
        [
            "La ISO 27001 es certificable",
            "La ISO 27002 sirve como buenas prácticas",
            "La ISO 27001 y la ISO 27002 son complementarias"
        ],
        "La ISO 27002 no es certificable por sí misma; ISO 27001 sí lo es."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es falsa?",
        "El RGPD necesita transposición para aplicarse en España",
        [
            "El RGPD es de aplicación directa",
            "La LOPDyGDD adapta la normativa española al RGPD",
            "El RGPD cambió el enfoque hacia tratamientos de datos"
        ],
        "Los reglamentos europeos son de aplicación directa; aun así, España actualizó su legislación con la LOPDyGDD."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es falsa?",
        "En ENS, las categorías son Baja, Media, Alta y Muy Alta",
        [
            "En ENS, las categorías son Básica, Media y Alta",
            "La categoría Básica requiere autoevaluación",
            "Media y Alta requieren auditoría formal"
        ],
        "El tema indica las categorías Básica, Media y Alta."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es falsa?",
        "La Directiva NIS elimina la necesidad de CSIRT",
        [
            "La Directiva NIS contempla una red CSIRT",
            "La Directiva NIS obliga a estrategia nacional",
            "La Directiva NIS incluye notificación de incidentes"
        ],
        "La Directiva NIS impulsa la creación de una red CSIRT, no su eliminación."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas afirmaciones es falsa?",
        "El ENS nunca afecta a empresas privadas",
        [
            "Una empresa privada que preste servicios a la Administración puede necesitar adecuarse al ENS",
            "El ENS aplica a Administraciones Públicas",
            "El ENS contiene requisitos mínimos y medidas de seguridad"
        ],
        "El tema señala que, en la práctica, proveedores privados de la Administración pueden verse obligados a adecuarse al ENS."
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    Pregunta(
        "Protección de datos",
        "¿Qué Ley ha asumido la mayoría de las funciones de la antigua LORTAD?",
        "LOPD",
        [
            "Ley de Firma Electrónica",
            "Ninguna de las respuestas es correcta",
            "LSSI-CE",
        ],
        "La LOPD (Ley Orgánica de Protección de Datos) sustituyó y asumió las funciones de la antigua LORTAD.",
    ),
    Pregunta(
        "Protección de datos",
        "La LOPD afecta a los siguientes tipos de ficheros:",
        "Ficheros digitales y en papel",
        [
            "Sólo ficheros en papel",
            "Sólo ficheros digitales",
            "Ninguna de las respuestas es correcta",
        ],
        "La LOPD afecta tanto a ficheros en soporte digital como en papel.",
    ),
    Pregunta(
        "Protección de datos",
        "La principal normativa que regula el acceso y tratamiento de datos de carácter personal es:",
        "La LOPD",
        [
            "La Ley de Firma Electrónica",
            "La Ley General de Telecomunicación",
            "La Ley de Servicio de la Sociedad de la Información y Comercio Electrónico",
        ],
        "La LOPD es la principal normativa española sobre protección de datos de carácter personal.",
    ),
    Pregunta(
        "ENS",
        "El Esquema Nacional de Seguridad es de obligado cumplimiento para:",
        "Todas las respuestas son correctas",
        [
            "Las Administraciones de las Comunidades Autónomas",
            "Las entidades de Derecho público con personalidad jurídica propia vinculadas o dependientes de las Administraciones Públicas",
            "Las Entidades que integran la Administración Local",
        ],
        "El ENS obliga a la AGE, CCAA, administración local y entidades de derecho público vinculadas.",
    ),
    Pregunta(
        "ENS",
        "¿Qué establece el Esquema Nacional de Seguridad?",
        "Las condiciones de seguridad requeridas en el uso de los medios electrónicos en el ámbito de la Administración Pública",
        [
            "Las condiciones de seguridad requeridas en el uso de los medios electrónicos en el ámbito de las organizaciones privadas",
            "El reglamento de requisitos técnicos de la LOPD",
            "Una relación de normas para la gestión de la seguridad en las empresas públicas",
        ],
        "El ENS establece las condiciones de seguridad para el uso de medios electrónicos en la Administración Pública.",
    ),
    Pregunta(
        "ENS",
        "Uno de los objetivos principales del Esquema Nacional de Seguridad es:",
        "Todas las respuestas son correctas",
        [
            "Establecer la política de seguridad en la utilización de medios electrónicos en el ámbito de la Ley 11/2007",
            "Crear un marco común para la actuación de las Administraciones Públicas en materia de seguridad de las tecnologías",
            "Aportar confianza a los ciudadanos en el ejercicio de sus derechos y deberes con la Administración Pública por medios telemáticos",
        ],
        "El ENS tiene múltiples objetivos: política de seguridad, marco común y confianza ciudadana.",
    ),
    Pregunta(
        "ENS",
        "El Esquema Nacional de Seguridad está regulado por ...",
        "El real Decreto 3/2010 de 8 de enero",
        [
            "La Constitución Española",
            "La Ley General de Telecomunicación",
            "La Ley Orgánica de Protección de Datos",
        ],
        "El ENS está regulado por el Real Decreto 3/2010 de 8 de enero (modificado posteriormente por el RD 951/2015).",
    ),
    Pregunta(
        "SGSI",
        "¿Qué es un SGSI?",
        "Un sistema de gestión de seguridad de la información",
        [
            "Un sistema de monitorización de redes",
            "Un plan Director de Seguridad",
            "Un sistema general de seguridad interna",
        ],
        "SGSI = Sistema de Gestión de Seguridad de la Información (Information Security Management System).",
    ),
    Pregunta(
        "SGSI",
        "¿Qué dos requisitos son fundamentales para establecer un SGSI?",
        "Compromiso por la dirección y planteamientos realistas",
        [
            "Disponer de recursos económicos y de personal",
            "Disponer de recursos tecnológicos y financieros",
            "Acotar el trabajo y definir bien las funciones",
        ],
        "Los dos requisitos fundamentales para un SGSI son el compromiso de la dirección y plantear objetivos realistas.",
    ),
    Pregunta(
        "SGSI",
        "¿Es necesario realizar un análisis de riesgos para implementar un SGSI?",
        "Si, siempre",
        [
            "No, nunca",
            "No, salvo que la organización lo decida así",
            "Si, pero sólo en la Administración Pública",
        ],
        "El análisis de riesgos es siempre obligatorio para establecer un SGSI según ISO 27001.",
    ),
    Pregunta(
        "Fases SGSI",
        "Dentro de las etapas para el establecimiento de un SGSI, ¿Qué elementos de los siguientes es necesario definir?",
        "La Política de Seguridad",
        [
            "La Política de negocio de la organización",
            "La Estrategia de negocio",
            "La Política de buen gobierno",
        ],
        "La Política de Seguridad es el elemento fundamental que debe definirse al establecer un SGSI.",
    ),
    Pregunta(
        "PDCA",
        "¿Qué cuatro etapas de trabajo plantea el Ciclo PDCA o Ciclo de Deming?",
        "Planificar, Hacer, Revisar y Actuar",
        [
            "Pensar, Hacer, Recordar y Analizar",
            "Pensar, Hacer, Revisar y Actuar",
            "Planificar, Hacer, Revisar y Analizar",
        ],
        "El Ciclo PDCA = Plan (Planificar), Do (Hacer), Check (Revisar/Comprobar), Act (Actuar).",
    ),
    Pregunta(
        "ISO 27000",
        "Dentro de los estándares ISO/IEC, ¿A qué ámbito se ha asignado el rango 27.000?",
        "A la seguridad de la información",
        [
            "A la gestión de las tecnologías de la información",
            "A la privacidad de la información",
            "A las metodologías de gestión de riesgos",
        ],
        "El rango ISO/IEC 27000 se dedica íntegramente a la seguridad de la información.",
    ),
    Pregunta(
        "ISO 27001/27002",
        "Los estándares ISO/IEC 27.001 y 27.002 ¿A qué ámbito pertenecen?",
        "A la seguridad de la información",
        [
            "A la privacidad de la información",
            "A las metodologías de gestión de riesgos",
            "A ninguno de los anteriores",
        ],
        "Tanto ISO 27001 como ISO 27002 pertenecen al ámbito de la seguridad de la información.",
    ),
    Pregunta(
        "CSIRT",
        "El RD-Ley 12/2018 asigna como CSIRT de notificación de incidentes para la red académica española a:",
        "IRIS-CERT",
        [
            "INCIBE-CERT",
            "CCN-CERT",
            "ESP DEF",
        ],
        "Según el RD-Ley 12/2018, IRIS-CERT es el CSIRT asignado para la red académica española (RedIRIS).",
    ),
    Pregunta(
        "Infraestructuras críticas",
        "¿Cuál es la denominación exacta de la Ley 8/2011, de 28 de abril?",
        "Ley por la que se establecen medidas para la protección de las infraestructuras críticas",
        [
            "Ley de Protección de Datos de Carácter Estratégico",
            "Ley de Seguridad Nacional y Protección de Activos",
            "Ley de Seguridad de las Redes y Sistemas de Información"
        ],
        "La Ley 8/2011, de 28 de abril, establece medidas para la protección de las infraestructuras críticas."
    ),
    Pregunta(
        "Protección de datos",
        "Identifique la ley que sustituyó a la antigua LOPD 15/1999 en el año 2018 para adaptarse al Reglamento Europeo.",
        "Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales",
        [
            "Ley Orgánica 5/2018, de Medidas Urgentes para la Adaptación al Derecho Europeo",
            "Ley Orgánica 1/2018, de Protección de la Privacidad en Internet",
            "Ley 34/2018, de Servicios de la Sociedad de la Información"
        ],
        "La Ley Orgánica 3/2018 (LOPDGDD) adapta el derecho español al RGPD europeo y añade derechos digitales, sustituyendo a la antigua LOPD 15/1999. El RDL 5/2018 fue provisional y la LSSI es de 2002."
    ),
    Pregunta(
        "ENS",
        "¿Qué disposición regula el Esquema Nacional de Seguridad (ENS) en España?",
        "Real Decreto 3/2010, de 8 de enero",
        [
            "Ley 11/2007, de Acceso Electrónico",
            "Real Decreto 4/2010, de 8 de enero",
            "Real Decreto 1720/2007, de 21 de diciembre"
        ],
        "El Esquema Nacional de Seguridad (ENS) está regulado por el Real Decreto 3/2010, de 8 de enero."
    ),
    Pregunta(
        "LSSI-CE",
        "¿Cómo se denomina la Ley 34/2002 que regula, entre otros, el envío de comunicaciones comerciales electrónicas (Spam)?",
        "Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico",
        [
            "Ley General de Telecomunicaciones y Servicios Digitales",
            "Ley de Medidas de Impulso de la Sociedad de la Información",
            "Ley de Regulación del Comercio Minorista por Internet"
        ],
        "La Ley 34/2002, de 11 de julio, se denomina Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)."
    ),
    Pregunta(
        "Transposición NIS",
        "¿Cuál es el título oficial del Real Decreto-Ley 12/2018, de 7 de septiembre?",
        "Seguridad de las redes y sistemas de información",
        [
            "Medidas urgentes para la ciberdefensa nacional",
            "Protección de datos en el ámbito de las comunicaciones electrónicas",
            "Regulación de los CSIRT y centros de respuesta a incidentes"
        ],
        "El Real Decreto-Ley 12/2018, de 7 de septiembre, tiene como título oficial 'de seguridad de las redes y sistemas de información', trasponiendo la Directiva NIS."
    ),
    Pregunta(
        "Protección de datos",
        "La primera ley española que reguló específicamente el tratamiento automatizado de datos personales fue:",
        "Ley Orgánica 5/1992 (LORTAD)",
        [
            "Ley 11/2007 de Acceso Electrónico",
            "Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas",
            "Ley Orgánica 15/1999 (LOPD)"
        ],
        "La Ley Orgánica 5/1992, de 29 de octubre, de Regulación del Tratamiento Automatizado de los Datos de Carácter Personal (LORTAD), fue la primera norma en España sobre la materia."
    ),
    Pregunta(
        "Conservación de datos",
        "¿Qué ley regula específicamente la conservación de datos relativos a las comunicaciones electrónicas y redes públicas?",
        "Ley 25/2007, de 18 de octubre",
        [
            "Ley 59/2003, de 19 de diciembre",
            "Ley 9/2014, de 9 de mayo",
            "Ley 56/2007, de 28 de diciembre"
        ],
        "La Ley 25/2007, de 18 de octubre, regula la conservación de datos relativos a las comunicaciones electrónicas y a las redes públicas de comunicaciones."
    ),
    Pregunta(
        "Firma electrónica",
        "¿Cuál es la norma que regula la firma electrónica en España y define conceptos como la 'firma avanzada'?",
        "Ley 59/2003, de 19 de diciembre",
        [
            "Ley 11/2007, de 22 de junio",
            "Real Decreto 209/2003",
            "Directiva 95/46/CE"
        ],
        "La Ley 59/2003, de 19 de diciembre, regulaba la firma electrónica en España y definía la firma avanzada y la firma reconocida."
    ),
    Pregunta(
        "Administración electrónica",
        "¿Qué ley se conoce comúnmente como LAECSP?",
        "Ley 11/2007, de Acceso Electrónico de los ciudadanos a los Servicios Públicos",
        [
            "Ley 30/1992, de Administraciones Electrónicas y Comunicación Sin Papel",
            "Ley Orgánica 11/2007, de Administración y Electrónica del Sector Público",
            "Ley de Administración Electrónica para Ciberseguridad y Servicios Públicos"
        ],
        "La Ley 11/2007, de 22 de junio, de Acceso Electrónico de los Ciudadanos a los Servicios Públicos se conoce como LAECSP."
    ),
    Pregunta(
        "Directiva NIS",
        "¿Cuál es la Directiva europea que se denomina 'Directiva NIS'?",
        "Directiva (UE) 2016/1148",
        [
            "Directiva (UE) 2016/679",
            "Directiva (UE) 2018/1972",
            "Directiva 1999/93/CE"
        ],
        "La Directiva (UE) 2016/1148 es la directiva sobre seguridad de las redes y sistemas de información, conocida popularmente como Directiva NIS."
    ),
    Pregunta(
        "RGPD",
        "El Reglamento (UE) 2016/679 es conocido popularmente como:",
        "Reglamento General de Protección de Datos (RGPD)",
        [
            "Reglamento de Servicios Digitales",
            "Directiva de Privacidad Electrónica",
            "Reglamento Europeo de Ciberseguridad"
        ],
        "El Reglamento (UE) 2016/679 es el Reglamento General de Protección de Datos (RGPD) de la Unión Europea."
    ),
    Pregunta(
        "Administración electrónica",
        "¿Qué Real Decreto regula la utilización de técnicas electrónicas por la Administración General del Estado desarrollando la Ley 30/92?",
        "Real Decreto 263/1996, de 16 de febrero",
        [
            "Real Decreto 3/2010, de 8 de enero",
            "Real Decreto 1671/2009, de 6 de noviembre",
            "Real Decreto 209/2003, de 21 de febrero"
        ],
        "El Real Decreto 263/1996, de 16 de febrero, reguló el uso de técnicas electrónicas en la AGE, desarrollando el artículo 45 de la Ley 30/1992."
    ),
    Pregunta(
        "Factura electrónica",
        "¿Qué ley regula específicamente la factura electrónica en el marco de las medidas de impulso de la sociedad de la información?",
        "Ley 56/2007, de 28 de diciembre",
        [
            "Ley 34/2002, de 11 de julio",
            "Ley 25/2007, de 18 de octubre",
            "Ley 59/2003, de 19 de diciembre"
        ],
        "La Ley 56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Información, regula el uso de la factura electrónica."
    ),
    Pregunta(
        "Estrategia Nacional",
        "¿Qué disposición aprobó la Estrategia Nacional de Ciberseguridad en el año 2019?",
        "Orden PCI/487/2019, de 26 de abril",
        [
            "Real Decreto 951/2019, de Modificación del ENS",
            "Resolución de 13 de octubre de 2019",
            "Ley 12/2019, de Ciberseguridad Nacional"
        ],
        "La Estrategia Nacional de Ciberseguridad de 2019 fue publicada mediante la Orden PCI/487/2019, de 26 de abril."
    ),
    Pregunta(
        "Notificaciones telemáticas",
        "¿Qué normativa regula las notificaciones telemáticas y la sustitución de certificados de papel por medios telemáticos?",
        "Real Decreto 209/2003, de 21 de febrero",
        [
            "Real Decreto 263/1996, de 16 de febrero",
            "Ley 11/2007, de 22 de junio",
            "Real Decreto 704/2011"
        ],
        "El Real Decreto 209/2003, de 21 de febrero, regula los registros, las notificaciones telemáticas y la sustitución de certificados en papel por medios telemáticos."
    ),
    Pregunta(
        "ENS",
        "El Real Decreto 951/2015 se caracteriza por:",
        "Modificar el Real Decreto 3/2010 del Esquema Nacional de Seguridad",
        [
            "Aprobar el Reglamento de la Ley de Infraestructuras Críticas",
            "Establecer las medidas contra el tráfico fraudulento de comunicaciones",
            "Aprobar los nuevos planes de seguridad del operador crítico"
        ],
        "El Real Decreto 951/2015 se caracteriza por modificar el Real Decreto 3/2010 por el que se regula el Esquema Nacional de Seguridad."
    ),
    Pregunta(
        "Administración electrónica",
        "¿Qué ley establece la validez de los documentos emitidos por medios electrónicos siempre que se asegure su autenticidad e integridad?",
        "Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas",
        [
            "Constitución Española de 1978",
            "Ley 34/2002 de Comercio Electrónico",
            "Ley 59/2003 de Firma Electrónica"
        ],
        "La Ley 30/1992 de Régimen Jurídico de las Administraciones Públicas (en su artículo 45) sentó las bases para la validez de los documentos electrónicos en la Administración."
    ),
    Pregunta(
        "DEH",
        "¿Qué norma define el Sistema de Dirección Electrónica Habilitada (DEH)?",
        "Orden PRE/878/2010, de 5 de abril",
        [
            "Real Decreto 3/2010 del ENS",
            "Real Decreto 1363/2010, de 29 de octubre",
            "Ley 11/2007 de Acceso Electrónico"
        ],
        "La Orden PRE/878/2010, de 5 de abril, regula y establece el régimen de la Dirección Electrónica Habilitada (DEH)."
    ),
    Pregunta(
        "Tráfico fraudulento",
        "El Real Decreto 381/2015, de 14 de mayo, se dedica a:",
        "Establecer medidas contra el tráfico no permitido y fraudulento en comunicaciones electrónicas",
        [
            "Crear el Instituto Nacional de Ciberseguridad (INCIBE)",
            "Regular el Esquema Nacional de Interoperabilidad",
            "Actualizar las sanciones de la LSSI-CE"
        ],
        "El Real Decreto 381/2015, de 14 de mayo, se dedica a establecer medidas contra el tráfico no permitido y fraudulento en comunicaciones electrónicas."
    ),
    Pregunta(
        "Comercio electrónico",
        "La Directiva 2000/31/CE tiene como objetivo principal:",
        "Reforzar la seguridad jurídica del comercio electrónico en el mercado interior",
        [
            "Establecer los estándares de cifrado para las transacciones bancarias",
            "Unificar las firmas electrónicas en toda la Unión",
            "Regular el derecho al olvido en buscadores de internet"
        ],
        "La Directiva 2000/31/CE tiene como objetivo principal reforzar la seguridad jurídica del comercio electrónico en el mercado interior."
    ),
    Pregunta(
        "Contratación pública",
        "¿Qué normativa regula la coordinación de los procedimientos de adjudicación de los contratos públicos e introduce la 'subasta electrónica'?",
        "Directiva 2004/18/CE",
        [
            "Directiva 2016/1148 (NIS)",
            "Real Decreto 3/2010",
            "Ley 11/2007 de Acceso Electrónico"
        ],
        "La Directiva 2004/18/CE coordina la adjudicación de contratos públicos e introduce el concepto de subasta electrónica."
    ),
    Pregunta(
        "Administración electrónica",
        "¿Qué norma modificó la estructura de los órganos colegiados responsables de la Administración Electrónica, creando el CSAE?",
        "Real Decreto 589/2005",
        [
            "Orden PRE/878/2010",
            "Ley 11/2007",
            "Real decreto 3/2010"
        ],
        "El Real Decreto 589/2005 reestructuró los órganos colegiados de administración electrónica y creó la Comisión de Estrategia para la Administración Electrónica (CSAE)."
    ),
    Pregunta(
        "Telecomunicaciones",
        "Identifique la denominación de la Ley 9/2014, de 9 de mayo.",
        "Ley General de Telecomunicaciones",
        [
            "Ley de Infraestructuras Digitales Críticas",
            "Ley de Ciberseguridad Estratégica",
            "Ley de Protección de Datos y Garantía Digital"
        ],
        "La Ley 9/2014, de 9 de mayo, es la Ley General de Telecomunicaciones."
    ),
    Pregunta(
        "ENS",
        "¿Qué disposición aprobó la 'Instrucción técnica de Seguridad de conformidad con el Esquema Nacional de Seguridad'?",
        "Resolución de 13 de octubre de 2016",
        [
            "Orden PRE/878/2010",
            "Ley 11/2007",
            "Real Decreto 951/2015"
        ],
        "La Instrucción Técnica de Seguridad de conformidad con el ENS fue aprobada mediante la Resolución de 13 de octubre de 2016."
    ),
    Pregunta(
        "ISO vs ENS",
        "¿Qué carácter tienen las normas de la familia ISO/IEC 27000 en comparación con el ENS?",
        "Son de cumplimiento voluntario, mientras que el ENS es obligatorio para la Administración",
        [
            "Ambas son leyes orgánicas aprobadas por el Parlamento Español",
            "El ENS es voluntario y la ISO 27001 es obligatoria para las PYMES",
            "Ambas son obligatorias por igual en el sector público y privado"
        ],
        "Las normas ISO 27000 son estándares voluntarios, mientras que el ENS es obligatorio para la Administración Pública."
    ),
    Pregunta(
        "Protección de datos",
        "¿Qué ley orgánica derogó finalmente el Real Decreto-Ley 5/2018?",
        "Ley Orgánica 3/2018",
        [
            "Ley 34/2002",
            "Ley Orgánica 15/1999",
            "Ley Orgánica 5/1992"
        ],
        "La Ley Orgánica 3/2018 (LOPDGDD) derogó expresamente el Real Decreto-Ley 5/2018, que tenía carácter provisional."
    ),
    Pregunta(
        "ENI",
        "Dentro del marco legal de Ciberseguridad, ¿qué norma regula el Esquema Nacional de Interoperabilidad?",
        "Real Decreto 4/2010, de 8 de enero",
        [
            "Real Decreto 263/1996",
            "Ley 56/2007",
            "Real Decreto 3/2010, de 8 de enero"
        ],
        "El Esquema Nacional de Interoperabilidad (ENI) está regulado por el Real Decreto 4/2010, de 8 de enero."
    ),
    Pregunta(
        "Infraestructuras críticas",
        "¿Cuál es la norma que aprobó el Reglamento de Protección de las Infraestructuras Críticas?",
        "Real Decreto 704/2011, de 20 de mayo",
        [
            "Real Decreto 951/2015",
            "Real Decreto 3/2010",
            "Ley 8/2011"
        ],
        "El Real Decreto 704/2011, de 20 de mayo, aprueba el Reglamento de protección de las infraestructuras críticas."
    ),
]
# Este fichero solo contiene el banco de preguntas del Tema 6.
# Para ejecutar el test, usa main.py

