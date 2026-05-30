#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Banco de preguntas del Tema 2: Algoritmos y Criptografía
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
    # Simétrica / asimétrica / resumen
    Pregunta(
        "Clave simétrica",
        "La criptografía de clave simétrica asegura principalmente:",
        "Confidencialidad",
        ["No repudio", "Disponibilidad", "Trazabilidad"],
        "La clave simétrica cifra y descifra con la misma clave. Su uso principal es la confidencialidad."
    ),
    Pregunta(
        "Clave simétrica",
        "El problema práctico principal de la clave simétrica en comunicaciones es:",
        "Compartir la clave de forma segura",
        ["Que no cifra mensajes largos", "Que no permite confidencialidad", "Que exige certificados X.509 siempre"],
        "Funciona bien, pero emisor y receptor deben conocer la misma clave sin que un atacante la obtenga."
    ),
    Pregunta(
        "Clave asimétrica",
        "La criptografía asimétrica utiliza:",
        "Una pareja de claves: pública y privada",
        ["Una única clave compartida", "Solo contraseñas", "Una clave pública para todos los usuarios del sistema"],
        "La clave pública puede difundirse; la privada debe quedar protegida por su titular."
    ),
    Pregunta(
        "Clave asimétrica",
        "Si alguien cifra un mensaje con la clave pública de Ana, ¿quién puede descifrarlo?",
        "Ana, con su clave privada",
        ["Cualquiera con la clave pública de Ana", "La autoridad certificadora siempre", "El emisor con su contraseña"],
        "Cifrar con clave pública del receptor aporta confidencialidad: solo descifra su clave privada."
    ),
    Pregunta(
        "Firma digital",
        "La firma digital se basa normalmente en:",
        "Cifrado asimétrico de un resumen/hash",
        ["Cifrado simétrico del documento completo", "Cifrado simétrico de la clave pública", "Esteganografía de la contraseña"],
        "Se calcula un hash del documento y se firma con la clave privada del firmante."
    ),
    Pregunta(
        "Firma digital",
        "Una firma digital aporta especialmente:",
        "Autenticación y no repudio",
        ["Confidencialidad y disponibilidad", "Disponibilidad y copia de seguridad", "Anonimato y esteganografía"],
        "Permite comprobar quién firmó y que el firmante no pueda negarlo fácilmente."
    ),
    Pregunta(
        "Hash",
        "Una función resumen o hash sirve principalmente para:",
        "Comprobar la integridad",
        ["Recuperar el texto claro", "Cifrar con clave pública", "Ocultar que existe el mensaje"],
        "Un hash es una huella. Si cambia el documento, debe cambiar el resumen."
    ),
    Pregunta(
        "Hash",
        "Si dos mensajes distintos generan el mismo hash, se llama:",
        "Colisión",
        ["No repudio", "Sal", "Confusión"],
        "Una colisión es hash(A)=hash(B) con A distinto de B."
    ),
    Pregunta(
        "Hash",
        "Una propiedad deseable de un hash criptográfico es:",
        "Que sea computacionalmente difícil encontrar colisiones",
        ["Que permita recuperar siempre el mensaje original", "Que use la misma clave que AES", "Que tenga siempre salida de 64 bits"],
        "Los hashes criptográficos deben ser unidireccionales y resistentes a colisiones."
    ),
    Pregunta(
        "Contraseñas",
        "La sal en el almacenamiento de contraseñas sirve para:",
        "Evitar hashes iguales y dificultar diccionarios precalculados",
        ["Cifrar el disco entero", "Sustituir al certificado digital", "Reducir la longitud de la contraseña"],
        "La sal se combina con la contraseña antes del hash. No necesita ser secreta."
    ),

    # Algoritmos simétricos por bloques
    Pregunta(
        "DES",
        "DES trabaja con bloques de:",
        "64 bits",
        ["128 bits", "56 bits", "256 bits"],
        "DES cifra bloques de 64 bits."
    ),
    Pregunta(
        "DES",
        "La clave efectiva de DES es:",
        "56 bits",
        ["64 bits efectivos", "128 bits", "168 bits efectivos"],
        "DES suele expresarse con 64 bits, pero 8 son de paridad; efectivos son 56."
    ),
    Pregunta(
        "DES",
        "El estado actual de DES es:",
        "Obsoleto por su clave corta",
        ["Recomendado para TLS moderno", "Más seguro que AES-256", "Algoritmo de firma digital"],
        "Su espacio de claves de 56 bits permite ataques por fuerza bruta con medios actuales."
    ),
    Pregunta(
        "Triple DES",
        "Triple DES consiste, de forma general, en:",
        "Aplicar DES tres veces",
        ["Aplicar AES tres veces", "Usar bloques de 192 bits", "Firmar tres hashes"],
        "TDES/3DES encadena operaciones DES para aumentar seguridad respecto a DES simple."
    ),
    Pregunta(
        "Triple DES",
        "El tamaño de bloque de Triple DES es:",
        "64 bits",
        ["128 bits", "192 bits", "256 bits"],
        "Aunque use más operaciones y claves que DES, hereda el bloque de 64 bits."
    ),
    Pregunta(
        "AES",
        "AES, en el estándar habitual, trabaja con bloques de:",
        "128 bits",
        ["64 bits", "56 bits", "Variable entre 64 y 256 bits"],
        "AES fija bloque de 128 bits."
    ),
    Pregunta(
        "AES",
        "AES permite claves de:",
        "128, 192 o 256 bits",
        ["56 o 64 bits", "Solo 128 bits", "1024 o 2048 bits"],
        "Las tres longitudes típicas de AES son 128, 192 y 256 bits."
    ),
    Pregunta(
        "AES",
        "AES sustituyó principalmente a:",
        "DES",
        ["RSA", "SHA-2", "DSA"],
        "AES fue adoptado como estándar moderno de cifrado simétrico frente a DES."
    ),
    Pregunta(
        "IDEA",
        "IDEA es un algoritmo:",
        "Simétrico de bloque",
        ["Asimétrico de firma", "Función resumen", "Protocolo de certificados"],
        "IDEA es un cifrador simétrico por bloques."
    ),
    Pregunta(
        "IDEA",
        "IDEA usa una clave de:",
        "128 bits",
        ["56 bits", "2048 bits", "512 bits"],
        "IDEA se asocia clásicamente a claves de 128 bits."
    ),

    # Modos de operación
    Pregunta(
        "Modos de operación",
        "ECB se considera problemático porque:",
        "Revela patrones si se repiten bloques de texto claro",
        ["Necesita clave pública", "Solo funciona con RSA", "No puede cifrar bloques"],
        "En ECB, bloques iguales producen bloques cifrados iguales con la misma clave."
    ),
    Pregunta(
        "Modos de operación",
        "CBC necesita normalmente:",
        "Un IV aleatorio o impredecible",
        ["Una clave pública X.509", "Un certificado raíz", "Una firma manuscrita"],
        "CBC encadena bloques y necesita IV para que mensajes iguales no empiecen igual."
    ),
    Pregunta(
        "Modos de operación",
        "GCM es importante porque aporta:",
        "Cifrado autenticado: confidencialidad e integridad/autenticación",
        ["Solo compresión", "Solo esteganografía", "Solo no repudio legal"],
        "AES-GCM es un modo AEAD: cifra y autentica datos."
    ),
    Pregunta(
        "Modos de operación",
        "CTR convierte un cifrador de bloque en algo parecido a:",
        "Un cifrador de flujo",
        ["Una función hash", "Un certificado digital", "Una firma reconocida"],
        "CTR genera un flujo a partir de contador + cifrador de bloque."
    ),

    # Cifrados de flujo
    Pregunta(
        "RC4",
        "RC4 es un algoritmo:",
        "Simétrico de flujo",
        ["Simétrico de bloque", "Asimétrico", "Función resumen"],
        "RC4 genera un flujo pseudoaleatorio que se combina con el texto."
    ),
    Pregunta(
        "RC4",
        "El estado actual de RC4 es:",
        "Inseguro/obsoleto",
        ["Recomendado para TLS actual", "Equivalente a AES-GCM", "Firma digital reconocida"],
        "RC4 tiene debilidades conocidas y no debe usarse en diseños modernos."
    ),
    Pregunta(
        "ChaCha20",
        "ChaCha20 es:",
        "Un cifrador simétrico de flujo moderno",
        ["Un algoritmo de firma", "Un certificado digital", "Una función resumen de la familia SHA"],
        "ChaCha20 es un cifrador de flujo moderno; suele combinarse con Poly1305 para AEAD."
    ),
    Pregunta(
        "ChaCha20-Poly1305",
        "ChaCha20-Poly1305 aporta:",
        "Cifrado autenticado",
        ["Solo clave pública", "Solo compresión", "Solo firma manuscrita"],
        "La combinación cifra y autentica el mensaje."
    ),

    # Asimétricos
    Pregunta(
        "RSA",
        "RSA se basa en la dificultad de:",
        "Factorizar números enteros grandes",
        ["Encontrar colisiones SHA-1", "Romper bloques de 64 bits", "Ocultar mensajes en imágenes"],
        "RSA usa operaciones relacionadas con números primos grandes y factorización."
    ),
    Pregunta(
        "RSA",
        "RSA puede utilizarse para:",
        "Cifrado e identidad/firma, según el esquema",
        ["Solo cifrado simétrico", "Solo esteganografía", "Solo calcular hashes sin clave"],
        "RSA es un algoritmo asimétrico usado históricamente para cifrado, intercambio de claves y firma."
    ),
    Pregunta(
        "Diffie-Hellman",
        "Diffie-Hellman sirve principalmente para:",
        "Intercambio/acuerdo de claves",
        ["Firmar documentos", "Crear hashes", "Cifrar bloques de 64 bits"],
        "DH permite que dos partes acuerden un secreto por un canal inseguro."
    ),
    Pregunta(
        "ECDH",
        "ECDH es:",
        "Diffie-Hellman sobre curvas elípticas",
        ["RSA sobre bloques de 64 bits", "Un modo de AES", "Una variante de MD5"],
        "ECDH usa curvas elípticas para acuerdo de claves."
    ),
    Pregunta(
        "DSA",
        "DSA se utiliza para:",
        "Firma digital",
        ["Cifrado de discos", "Cifrado simétrico por bloques", "Esteganografía en imágenes"],
        "DSA significa Digital Signature Algorithm."
    ),
    Pregunta(
        "ECDSA",
        "ECDSA se utiliza para:",
        "Firma digital con curvas elípticas",
        ["Cifrado de flujo", "Hash de contraseñas con sal", "Modo de operación CBC"],
        "ECDSA es la versión de firma digital basada en curvas elípticas."
    ),
    Pregunta(
        "ElGamal",
        "ElGamal es un algoritmo:",
        "Asimétrico",
        ["Simétrico de bloque", "Función resumen", "Modo de operación"],
        "ElGamal pertenece a la familia de algoritmos de clave pública."
    ),

    # Certificados y modelos
    Pregunta(
        "Certificado digital",
        "Un certificado digital contiene normalmente:",
        "La clave pública del titular",
        ["La clave privada del titular", "La contraseña del titular", "La clave privada de la autoridad certificadora"],
        "El certificado vincula identidad y clave pública, firmado por una autoridad."
    ),
    Pregunta(
        "Certificado digital",
        "La clave privada del usuario debe:",
        "Permanecer protegida y no difundirse",
        ["Publicarse junto al certificado", "Guardarse en todos los servidores", "Enviarse a cada receptor"],
        "La seguridad de la identidad digital depende de proteger la clave privada."
    ),
    Pregunta(
        "PKI",
        "Un sistema vertical de confianza se basa en:",
        "Autoridades de certificación y certificados digitales",
        ["Usuarios que se firman mutuamente sin jerarquía", "Solo claves simétricas compartidas", "Ocultar el algoritmo"],
        "La PKI usa entidades de confianza para certificar claves públicas."
    ),
    Pregunta(
        "PGP",
        "PGP/GnuPG se asocia principalmente a un modelo:",
        "Horizontal o anillo/red de confianza",
        ["Vertical con una única autoridad obligatoria", "Solo biométrico", "Solo gubernamental"],
        "PGP puede usar una red de confianza en la que usuarios firman claves de otros usuarios."
    ),
    Pregunta(
        "TLS",
        "TLS combina típicamente:",
        "Certificados, asimétrica para acordar secreto y simétrica para cifrar tráfico",
        ["Solo DES sin certificados", "Solo hash sin cifrado", "Solo esteganografía"],
        "TLS negocia algoritmos, autentica con certificados y cifra la sesión con clave simétrica."
    ),
    Pregunta(
        "HTTPS",
        "HTTPS es, de forma simplificada:",
        "HTTP sobre TLS",
        ["HTTP sobre DES sin certificados", "Un hash de páginas web", "Una firma electrónica reconocida"],
        "HTTPS añade TLS a HTTP para proteger la comunicación web."
    ),
    Pregunta(
        "IPsec/VPN",
        "IPsec y VPN se relacionan con:",
        "Cifrado de comunicaciones de red",
        ["Hash de contraseñas", "Firma manuscrita", "Reconocimiento biométrico"],
        "Sirven para proteger paquetes o túneles de comunicación."
    ),

    # Conceptos básicos y complementarios
    Pregunta(
        "Criptografía",
        "La criptografía busca principalmente:",
        "Proteger el contenido de la información",
        ["Ocultar siempre la existencia del mensaje", "Romper claves", "Eliminar la necesidad de autenticación"],
        "La criptografía protege el contenido; la esteganografía oculta la existencia."
    ),
    Pregunta(
        "Criptoanálisis",
        "El criptoanálisis consiste en:",
        "Intentar romper o comprometer un criptosistema",
        ["Firmar documentos con DNIe", "Crear copias de seguridad", "Ocultar un mensaje en una imagen"],
        "Criptoanálisis es el conjunto de técnicas de ataque contra sistemas criptográficos."
    ),
    Pregunta(
        "Criptología",
        "Criptología agrupa:",
        "Criptografía y criptoanálisis",
        ["Solo DES y AES", "Solo certificados X.509", "Solo biometría y esteganografía"],
        "Criptología es el campo general que engloba defensa y análisis/ataque."
    ),
    Pregunta(
        "Esteganografía",
        "La esteganografía se diferencia de la criptografía porque:",
        "Oculta la existencia del mensaje",
        ["Siempre usa clave pública", "Siempre garantiza no repudio", "Solo sirve para contraseñas"],
        "Un mensaje esteganografiado intenta pasar desapercibido dentro de otro soporte."
    ),
    Pregunta(
        "Biometría",
        "La biometría se relaciona principalmente con:",
        "Autenticación",
        ["Disponibilidad", "Compresión", "Cifrado por bloques"],
        "La biometría identifica/autentica mediante rasgos físicos o conductuales."
    ),
    Pregunta(
        "Factores de autenticación",
        "Los tres tipos clásicos de factores de autenticación son:",
        "Conocimiento, posesión e inherencia/existencia",
        ["Hash, sal y cifrado", "DES, AES y RSA", "Confidencialidad, integridad y disponibilidad"],
        "Algo que sabes, algo que tienes y algo que eres."
    ),

    # WiFi / redes Tema 2
    Pregunta(
        "WiFi",
        "WEP se considera:",
        "Inseguro/obsoleto",
        ["El estándar más moderno", "Un algoritmo asimétrico", "Una firma digital"],
        "WEP fue superado por WPA/WPA2/WPA3 por sus debilidades."
    ),
    Pregunta(
        "WiFi",
        "WPA2 se asocia normalmente con:",
        "AES/CCMP",
        ["DES/ECB", "RSA como cifrado de flujo", "MD5 como modo de operación"],
        "WPA2 suele asociarse al uso de AES con CCMP."
    ),
    Pregunta(
        "WiFi",
        "WPA3 mejora especialmente:",
        "La protección del proceso de autenticación/acuerdo de claves",
        ["El uso de DES", "La firma manuscrita", "La esteganografía en imágenes"],
        "WPA3 introduce mejoras frente a WPA2, como SAE en redes personales."
    ),

    # Trampas típicas
    Pregunta(
        "Propiedades",
        "¿Qué mecanismo se asocia mejor a integridad?",
        "Hash/función resumen",
        ["DES", "Esteganografía", "DH sin autenticación"],
        "La integridad se comprueba con funciones resumen y mecanismos de autenticación."
    ),
    Pregunta(
        "Propiedades",
        "¿Qué mecanismo se asocia mejor a confidencialidad?",
        "Cifrado",
        ["Hash sin clave", "Firma digital solamente", "Certificado sin usar"],
        "La confidencialidad requiere que el contenido no sea accesible a no autorizados."
    ),
    Pregunta(
        "Propiedades",
        "¿Qué mecanismo se asocia mejor a no repudio?",
        "Firma digital",
        ["Cifrado simétrico compartido", "Compresión", "ECB"],
        "El no repudio exige poder vincular el acto al firmante."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas frases es falsa?",
        "Un hash permite reconstruir el mensaje original",
        ["AES es simétrico", "RSA es asimétrico", "DES usa clave efectiva de 56 bits"],
        "Un hash criptográfico es unidireccional."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas frases es falsa?",
        "Un certificado digital contiene la clave privada del titular",
        ["Un certificado contiene la clave pública del titular", "Una CA puede firmar certificados", "La clave privada debe protegerse"],
        "El certificado no debe contener la clave privada."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas frases es falsa?",
        "AES estándar usa bloques de 64 bits",
        ["AES estándar usa bloques de 128 bits", "DES usa bloques de 64 bits", "AES permite claves de 128/192/256 bits"],
        "AES estándar usa bloque de 128 bits."
    ),
    Pregunta(
        "Trampa",
        "¿Cuál de estas frases es falsa?",
        "PGP se basa obligatoriamente en una autoridad certificadora central",
        ["PGP se asocia a confianza horizontal", "PKI se asocia a confianza vertical", "TLS suele usar certificados"],
        "PGP/GnuPG se asocia al modelo horizontal o web of trust."
    ),

    # ── Preguntas del examen (PDF Todas-las-preguntas) ───────────────────────

    # Privacidad
    Pregunta(
        "Privacidad",
        "¿Cómo se define el concepto de PRIVACIDAD?",
        "Cómo el ámbito de la vida privada que se debe proteger de cualquier intromisión",
        [
            "Cómo el ámbito de la vida pública que se debe proteger de cualquier intromisión",
            "Cómo el ámbito de la vida privada que se debe proteger de la intromisión del estado",
            "Cómo el ámbito de la vida pública que se debe proteger de la intromisión de los medios de comunicación",
        ],
        "La privacidad es el ámbito de la vida privada que debe protegerse de cualquier intromisión.",
    ),
    Pregunta(
        "Privacidad",
        "¿Cuáles son las tres dimensiones más importantes de la seguridad que configuran la privacidad?",
        "Integridad, Confidencialidad y Autenticación",
        [
            "Integridad, Confidencialidad y No repudio",
            "Autenticación, Trazabilidad y No repudio",
            "Confidencialidad, Temporalidad y No repudio",
        ],
        "Según el banco de preguntas oficial de la asignatura, las dimensiones de la seguridad que configuran la privacidad son integridad, confidencialidad y autenticación.",
    ),
    Pregunta(
        "Privacidad",
        "¿Qué requisito básico de seguridad es necesario para garantizar la privacidad en los medios digitales?",
        "el cifrado de la información",
        [
            "enviar los mensajes a través de correo electrónico",
            "la securización de las redes digitales",
            "no enviar mensajes a través de Internet",
        ],
        "El cifrado es el requisito básico fundamental para garantizar la privacidad en medios digitales.",
    ),

    # Claves simétricas
    Pregunta(
        "Clave simétrica",
        "¿Qué problema principal presentan los algoritmos de clave privada?",
        "La transmisión de la clave al destinatario del mensaje de forma segura",
        [
            "Su excesiva lentitud",
            "La debilidad de la clave",
            "La complejidad para su uso",
        ],
        "El problema principal de la clave simétrica es distribuir la clave de forma segura sin que un atacante la intercepte.",
    ),
    Pregunta(
        "Clave simétrica",
        "¿Qué significa la SIMETRÍA en el concepto de clave simétrica?",
        "Que se utiliza la misma clave tanto para cifrar como para descifrar",
        [
            "Que se utiliza una pareja de claves: una para cifrar y otra para descifrar",
            "Que se utiliza una clave para cifrar pero no es necesario ninguna para descifrar",
            "Que no se requieren claves para el cifrado",
        ],
        "Simétrica = misma clave para cifrar y descifrar.",
    ),
    Pregunta(
        "Clave simétrica",
        "¿Qué aspectos determinan la potencia de los sistemas de cifrado simétrico?",
        "La potencia o calidad del algoritmo y el tamaño de la clave",
        [
            "La calidad de la clave y la extensión del algoritmo",
            "La cantidad de veces que se puede utilizar el algoritmo y el tamaño de la clave",
            "El grado de desconocimiento que se tenga del algoritmo (secreto) y la longitud de la clave",
        ],
        "La potencia del cifrado simétrico depende de la calidad del algoritmo y del tamaño de la clave.",
    ),
    Pregunta(
        "DES",
        "¿Qué algoritmo de clave privada ha sustituido al algoritmo DES (Data Encryption Standard)?",
        "Triple DES (TDES)",
        [
            "Doble DES (DDES)",
            "Cuádruple DES (QDES)",
            "Séxtuple DES (SDES)",
        ],
        "El Triple DES (TDES/3DES) sustituyó al DES original para aumentar la seguridad.",
    ),

    # Claves asimétricas
    Pregunta(
        "Clave asimétrica",
        "¿Qué posible problema se puede plantear en el uso de sistemas de clave pública?",
        "El intercambio de las claves públicas entre los agentes que establecen la comunicación",
        [
            "La dificultad para utilizar los algoritmos requeridos",
            "El coste computacional",
            "La pérdida o sustracción de la clave privada",
        ],
        "El intercambio seguro de claves públicas es uno de los problemas prácticos en los sistemas asimétricos, resuelto habitualmente mediante infraestructura de clave pública (PKI) y certificados.",
    ),
    Pregunta(
        "Clave asimétrica",
        "¿En qué se basa un algoritmo de clave asimétrica?",
        "En el uso de dos claves apareadas: una para cifrar y otra para descifrar",
        [
            "En el uso de claves de distinta longitud para cifrar cada mensaje",
            "En la aplicación del algoritmo de Diffie-John",
            "En el uso de tres claves: dos para cifrar y otra para descifrar",
        ],
        "La asimétrica usa una pareja de claves matemáticamente relacionadas: pública y privada.",
    ),
    Pregunta(
        "RSA",
        "¿En qué se basa el funcionamiento del sistema RSA como algoritmo de cifrado de clave asimétrica?",
        "En la imposibilidad computacional de factorizar números enteros muy grandes",
        [
            "En la longitud de los números enteros",
            "En ocultar la clave pública para evitar el descifrado del mensaje",
            "En la imposibilidad de dividir números irracionales",
        ],
        "RSA se basa en la dificultad computacional de factorizar el producto de dos números primos grandes.",
    ),
    Pregunta(
        "RSA",
        "¿Qué es RSA?",
        "Un algoritmo de cifrado asimétrico",
        [
            "Un estándar de codificación",
            "Un algoritmo de cifrado en bloque",
            "Un algoritmo de cifrado en flujo",
        ],
        "RSA es el algoritmo de cifrado asimétrico más conocido, basado en factorización.",
    ),
    Pregunta(
        "Clave asimétrica",
        "¿Qué familia de algoritmos criptográficos limita el tamaño de los datos de entrada?",
        "Los algoritmos de cifrado asimétrico",
        [
            "Los algoritmos de resumen",
            "Ninguna de las familias indicadas",
            "Los algoritmos de cifrado simétrico",
        ],
        "Los algoritmos asimétricos como RSA limitan el tamaño máximo de los datos que pueden cifrar directamente.",
    ),
    Pregunta(
        "ElGamal",
        "¿Qué es ElGamal?",
        "Un algoritmo de cifrado asimétrico basado en la dificultad de calcular logaritmos discretos",
        [
            "Un algoritmo de cifrado simétrico basado en la dificultad de factorizar grandes números",
            "Un algoritmo de cifrado simétrico basado en la dificultad de calcular logaritmos discretos",
            "Un algoritmo de cifrado asimétrico basado en la dificultad de factorizar grandes números",
        ],
        "ElGamal es asimétrico y se basa en la dificultad del logaritmo discreto.",
    ),
    Pregunta(
        "Clave asimétrica",
        "¿Qué dimensión de la seguridad hemos de reforzar si queremos evitar un ataque del tipo 'Man in the Middle'?",
        "Autenticación",
        [
            "Confidencialidad",
            "Disponibilidad",
            "Integridad",
        ],
        "El Man in the Middle se evita con autenticación fuerte (p.ej. criptografía de clave pública con certificados).",
    ),
    Pregunta(
        "Firma digital",
        "El mecanismo de firma digital",
        "Se realiza mediante el cifrado asimétrico de resúmenes",
        [
            "Se realiza mediante el cifrado simétrico de resúmenes",
            "Se realiza mediante el cifrado de claves",
            "Ninguna de las anteriores",
        ],
        "La firma digital cifra el hash/resumen del mensaje con la clave privada del firmante (cifrado asimétrico).",
    ),
    Pregunta(
        "Diffie-Hellman",
        "El algoritmo de Diffie-Hellman es:",
        "Un algoritmo asimétrico para la negociación de claves simétricas",
        [
            "Un algoritmo simétrico para la transmisión de claves asimétricas",
            "Un algoritmo simétrico para la negociación de claves asimétricas",
            "Un algoritmo asimétrico para la transmisión de claves simétricas",
        ],
        "Diffie-Hellman permite a dos partes negociar una clave simétrica compartida a través de un canal inseguro.",
    ),

    # Sistemas criptográficos
    Pregunta(
        "PKI",
        "¿Qué caracteriza a los sistemas criptográficos HORIZONTALES?",
        "Asumen que todos los agentes que intervienen en la comunicación poseen el mismo nivel de confianza",
        [
            "Usan una clave pública lineal",
            "Asumen que todos los agentes que intervienen en la comunicación poseen distintos niveles de confianza",
            "Asumen que todos los agentes que intervienen en la comunicación utilizan la misma clave pública",
        ],
        "Los sistemas horizontales (como PGP/web of trust) asumen igualdad de confianza entre todos los agentes.",
    ),
    Pregunta(
        "PGP",
        "El software PGP",
        "Se basa en un modelo horizontal",
        [
            "Se basa en un modelo vertical",
            "Se basa en el empleo de certificados digitales",
            "Todas las anteriores",
        ],
        "PGP se basa en el modelo horizontal de confianza (web of trust / telaraña de confianza).",
    ),
    Pregunta(
        "PKI",
        "Los sistemas criptográficos VERTICALES:",
        "Utilizan Autoridades de Certificación para garantizar la validez y autenticidad de las claves públicas",
        [
            "Se basan en el concepto de telaraña de confianza",
            "Necesitan que todos los certificados estén firmados por la misma autoridad",
            "Ninguna de las respuestas es correcta",
        ],
        "Los sistemas verticales usan una jerarquía de Autoridades de Certificación (CA).",
    ),

    # Certificado digital
    Pregunta(
        "Certificado digital",
        "Un certificado digital",
        "Contiene la firma de la clave pública del usuario",
        [
            "Contiene la firma de la clave privada del usuario",
            "Contiene la clave privada de la Autoridad Certificadora",
            "Ninguna de las anteriores es cierta",
        ],
        "El certificado digital contiene la clave pública del usuario firmada por la Autoridad Certificadora.",
    ),
    Pregunta(
        "Certificado digital",
        "¿Cuáles son las partes más importantes de un certificado digital?",
        "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, la firma digital realizada con privada de la Autoridad de Certificación",
        [
            "Clave privada, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la de la Autoridad de Certificación",
            "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la del titular",
            "Clave pública, datos de identidad del titular, operaciones permitidas por el titular, firma digital realizada con la de la Autoridad de Certificación",
        ],
        "El certificado contiene: clave pública del titular, sus datos de identidad, operaciones permitidas y la firma de la CA con su clave privada.",
    ),
    Pregunta(
        "Certificado digital",
        "¿Qué es una CRL?",
        "Una lista de certificados revocados por una Autoridad",
        [
            "Una lista de cifradores aceptada en una transacción SSL",
            "Una lista de direcciones MAC cuyo acceso se permite o prohibe explícitamente",
            "Una lista de direcciones de correo seguras",
        ],
        "CRL = Certificate Revocation List: lista de certificados que han sido revocados antes de su expiración.",
    ),

    # OpenSSL
    Pregunta(
        "OpenSSL",
        "¿Cómo se deriva una clave de cifrado en OpenSSL a partir de la contraseña?",
        "Ninguna de las respuestas indicadas es correcta",
        [
            "Con un cifrador asimétrico",
            "Con un cifrador simétrico de flujo",
            "Con un cifrador simétrico de bloque",
        ],
        "En OpenSSL, la derivación de claves a partir de contraseña se realiza a través de funciones de derivación de claves (KDF) como PBKDF2, por lo que ninguna de las opciones anteriores (cifradores) es correcta.",
    ),
    Pregunta(
        "AES",
        "Si ciframos un documento utilizando OpenSSL con el algoritmo AES-256 y contraseña, ¿cómo será el tamaño del documento cifrado en relación con el original?",
        "16 bytes mayor, más el padding hasta múltiplo de 16 bytes",
        [
            "16 bytes mayor, más el padding hasta múltiplo de 32 bytes",
            "Idéntico",
            "16 bytes mayor",
        ],
        "AES-256 con contraseña añade 16 bytes de cabecera (salt) más el padding necesario hasta múltiplo de 16 bytes.",
    ),
    Pregunta(
        "RC4",
        "Si ciframos un documento utilizando OpenSSL con clave y vector de inicialización con el algoritmo RC4, ¿cómo será el tamaño del documento cifrado en relación con el original?",
        "Idéntico",
        [
            "16 bytes mayor, más el padding hasta múltiplo de 32 bytes",
            "16 bytes mayor",
            "16 bytes mayor, más el padding hasta múltiplo de 16 bytes",
        ],
        "RC4 es un cifrador de flujo: el texto cifrado tiene el mismo tamaño que el original, sin padding.",
    ),
    Pregunta(
        "AES",
        "¿Cuál es el tamaño de bloque del cifrador AES?",
        "128 bits",
        [
            "256 bits",
            "194 bits",
            "64 bits",
        ],
        "AES siempre usa bloques de 128 bits, independientemente del tamaño de la clave (128, 192 o 256 bits).",
    ),

    # Modos de operación
    Pregunta(
        "Modos de operación",
        "¿Qué modo de operación transforma un cifrador de bloque en un cifrador de flujo?",
        "OFB",
        [
            "CBC",
            "PCBC",
            "ECB",
        ],
        "OFB (Output Feedback) convierte un cifrador de bloque en cifrador de flujo generando un flujo de clave independiente.",
    ),
    Pregunta(
        "Modos de operación",
        "¿Cuál de estos modos de operación transforma un cifrador de bloque en un cifrador de flujo?",
        "CTR",
        [
            "PCBC",
            "CBC",
            "ECB",
        ],
        "CTR (Counter) también convierte un cifrador de bloque en cifrador de flujo usando un contador.",
    ),
    Pregunta(
        "Modos de operación",
        "¿Cuáles de estos modos de operación necesitan Vector de Inicialización (IV)?",
        "CBC, PCBC y OFB",
        [
            "CBC, OFB y ECB",
            "PCBC, OFB y ECB",
            "CBC, PCBC y ECB",
        ],
        "ECB no necesita IV. CBC, PCBC y OFB requieren un Vector de Inicialización.",
    ),
    Pregunta(
        "Modos de operación",
        "¿Qué modo de operación es especialmente peligroso en los sistemas de cifrado simétrico?",
        "ECB (Electronic Codebook)",
        [
            "PCBC (Propagating Cypher Block Chaining)",
            "OFB (Output Feedback)",
            "CBC (Cipher Block Chaining)",
        ],
        "ECB cifra cada bloque de forma independiente: bloques iguales producen el mismo texto cifrado, revelando patrones.",
    ),
    Pregunta(
        "Modos de operación",
        "¿Cuál de estos es un cifrador de flujo?",
        "RC4",
        [
            "IDEA",
            "AES",
            "RC2",
        ],
        "RC4 es un cifrador de flujo; IDEA, AES y RC2 son cifradores de bloque.",
    ),
    Pregunta(
        "Criptografía",
        "¿Qué aplicación principal tienen los algoritmos probabilísticos en criptografía?",
        "Pruebas de primalidad",
        [
            "Pruebas de aleatoriedad criptográfica",
            "Pruebas de entropía condicionada",
            "Pruebas de conocimiento cero",
        ],
        "Los algoritmos probabilísticos se usan principalmente en criptografía para las pruebas de primalidad (necesarias en RSA y similares).",
    ),
    Pregunta(
        "Hash",
        "¿Cuál de estos no es un algoritmo de resumen?",
        "Camellia",
        [
            "Whirlpool",
            "SHA-3",
            "MD5",
        ],
        "Camellia es un cifrador de bloque simétrico, no una función de resumen. Whirlpool, SHA-3 y MD5 son hashes.",
    ),

    # HMAC y otros
    Pregunta(
        "Hash",
        "Las funciones HMAC aseguran:",
        "La integridad y la autenticación",
        [
            "La autenticación y la confidencialidad",
            "La integridad y el no repudio",
            "La autenticación y el no repudio",
        ],
        "HMAC (Hash-based Message Authentication Code) combina un hash con una clave secreta para asegurar integridad y autenticación.",
    ),
    Pregunta(
        "Criptografía",
        "En un criptosistema seguro de Shannon, si hablamos de tamaños:",
        "El espacio de mensajes ha de ser menor o igual que el espacio de claves",
        [
            "El espacio de mensajes y el de claves no tienen relación alguna",
            "El espacio de mensajes ha de ser mayor o igual que el espacio de claves",
            "El espacio de mensajes ha de ser igual que el espacio de claves",
        ],
        "Shannon demostró que para seguridad perfecta el espacio de claves debe ser al menos tan grande como el espacio de mensajes.",
    ),
    Pregunta(
        "Contraseñas",
        "La sal criptográfica se utiliza:",
        "con algoritmos de resumen, para evitar ataques de diccionario",
        [
            "con algoritmos de resumen, para evitar ataques de cumpleaños",
            "con algoritmos de cifrado simétrico, para evitar ataques de cumpleaños",
            "con algoritmos de cifrado simétrico, para evitar ataques de diccionario",
        ],
        "La sal se añade a los hashes de contraseñas para evitar que ataques de diccionario y tablas arcoíris sean eficaces.",
    ),
    Pregunta(
        "HTTPS",
        "El protocolo https de Web segura",
        "Ninguna de las anteriores es cierta",
        [
            "Emplea el sistema PGP",
            "Requiere el intercambio de contraseñas",
            "No precisa el empleo de certificados digitales",
        ],
        "HTTPS usa TLS con certificados digitales, no PGP, y no requiere intercambio de contraseñas entre partes.",
    ),
    Pregunta(
        "HTTPS",
        "El protocolo S-HTTP de Web segura se basa:",
        "En un sistema vertical, ya que utiliza certificados digitales",
        [
            "En un sistema horizontal, ya que utiliza certificados digitales",
            "En un sistema vertical, ya que no utiliza certificados digitales",
            "En un sistema horizontal, ya que no utiliza certificados digitales",
        ],
        "Según el banco de preguntas oficial de la asignatura, el protocolo S-HTTP se basa en un sistema vertical, ya que utiliza certificados digitales.",
    ),
]


# Este fichero solo contiene el banco de preguntas del Tema 2.
# Para ejecutar el test, usa main.py
