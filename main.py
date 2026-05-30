#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
main.py — Punto de entrada único del test de Seguridad de la Información.

Estructura del proyecto:
    main.py      ← ejecuta esto
    tema1.py     ← banco de preguntas del Tema 1 (Visión Integral)
    tema2.py     ← banco de preguntas del Tema 2 (Criptografía)
    tema3.py     ← banco de preguntas del Tema 3 (Amenazas)
    tema4.py     ← banco de preguntas del Tema 4 (Mecanismos de Defensa)
    tema5.py     ← banco de preguntas del Tema 5 (Gestión de la Seguridad)
    tema6.py     ← banco de preguntas del Tema 6 (Legislación y Normativa)

Para añadir un nuevo tema:
    1. Crea temaN.py con un BANCO: List[Pregunta] = [...]
    2. Importa su BANCO aquí abajo y añádelo a TEMAS.
"""

import random
from dataclasses import dataclass
from typing import List

# ── Importar bancos de cada tema ──────────────────────────────────────────────
from tema1 import BANCO as BANCO_T1
from tema2 import BANCO as BANCO_T2
from tema3 import BANCO as BANCO_T3
from tema4 import BANCO as BANCO_T4
from tema5 import BANCO as BANCO_T5
from tema6 import BANCO as BANCO_T6

# ──────────────────────────────────────────────────────────────────────────────
# Definición de temas disponibles: (nombre para mostrar, banco de preguntas)
# ──────────────────────────────────────────────────────────────────────────────
TEMAS = [
    ("Tema 1: Visión Integral de la Seguridad",      BANCO_T1),
    ("Tema 2: Algoritmos y Criptografía",            BANCO_T2),
    ("Tema 3: Amenazas a los Sistemas de Información", BANCO_T3),
    ("Tema 4: Mecanismos de Defensa",                BANCO_T4),
    ("Tema 5: Instrumentos para la Gestión",         BANCO_T5),
    ("Tema 6: Legislación y Normativa",              BANCO_T6),
]


# ── Dataclass compartida (igual en todos los temas) ───────────────────────────
@dataclass(frozen=True)
class Pregunta:
    tema: str
    pregunta: str
    correcta: str
    distractores: List[str]
    explicacion: str


# ── Funciones de apoyo ────────────────────────────────────────────────────────

def crear_opciones(p) -> List[str]:
    """Devuelve 4 opciones mezcladas: 1 correcta + hasta 3 distractores."""
    distractores_unicos = []
    for d in p.distractores:
        if d != p.correcta and d not in distractores_unicos:
            distractores_unicos.append(d)

    comodines = [
        "Ninguna de las anteriores",
        "Todas las anteriores",
        "Solo confidencialidad",
        "Solo disponibilidad",
        "No tiene relación con la seguridad",
    ]
    for c in comodines:
        if len(distractores_unicos) >= 3:
            break
        if c != p.correcta and c not in distractores_unicos:
            distractores_unicos.append(c)

    opciones = [p.correcta] + distractores_unicos[:3]
    random.shuffle(opciones)
    return opciones


def pedir_numero_preguntas(total: int) -> int:
    entrada = input(f"¿Cuántas preguntas? ENTER = 20, máximo {total}: ").strip()
    if not entrada:
        return min(20, total)
    try:
        n = int(entrada)
        return max(1, min(n, total))
    except ValueError:
        print("Entrada no válida. Usaré 20.")
        return min(20, total)


# ── Motor del test ────────────────────────────────────────────────────────────

def ejecutar_test(nombre_tema: str, banco) -> None:
    print(f"\n{'='*55}")
    print(f"  TEST: {nombre_tema.upper()}")
    print(f"{'='*55}")
    print("4 opciones, 1 correcta. ENTER = respuesta en blanco.")
    print("Puntuación: aciertos − fallos/3\n")

    preguntas = banco.copy()
    random.shuffle(preguntas)
    n = pedir_numero_preguntas(len(preguntas))
    preguntas = preguntas[:n]

    aciertos = 0
    fallos = 0
    blancos = 0
    historial = []
    letras = ["A", "B", "C", "D"]

    for i, p in enumerate(preguntas, 1):
        opciones = crear_opciones(p)
        correcta_idx = opciones.index(p.correcta)

        print(f"\n{i}/{n}. [{p.tema}] {p.pregunta}")
        for letra, opcion in zip(letras, opciones):
            print(f"   {letra}) {opcion}")

        respuesta = input("Respuesta (A-D o ENTER): ").strip().upper()

        if respuesta == "":
            blancos += 1
            resultado = "BLANCO"
            print(f"  En blanco. Correcta: {letras[correcta_idx]}) {p.correcta}")
        elif respuesta in letras:
            elegida_idx = letras.index(respuesta)
            if elegida_idx == correcta_idx:
                aciertos += 1
                resultado = "OK"
                print("  ✓ Correcto.")
            else:
                fallos += 1
                resultado = "FALLO"
                print(f"  ✗ Incorrecto. Correcta: {letras[correcta_idx]}) {p.correcta}")
        else:
            fallos += 1
            resultado = "INVÁLIDA"
            print(f"  ✗ Respuesta inválida. Correcta: {letras[correcta_idx]}) {p.correcta}")

        print(f"  → {p.explicacion}")
        historial.append((i, resultado, p))

    # ── Resultados finales ────────────────────────────────────────────────────
    puntuacion = aciertos - fallos / 3
    nota_10 = (puntuacion / n) * 10 if n else 0

    print(f"\n{'='*55}")
    print("RESULTADO FINAL")
    print(f"{'='*55}")
    print(f"  Aciertos : {aciertos}")
    print(f"  Fallos   : {fallos}")
    print(f"  Blancos  : {blancos}")
    print(f"  Puntos   : {puntuacion:.2f} / {n}")
    print(f"  Nota     : {nota_10:.2f} / 10")

    pendientes = [h for h in historial if h[1] != "OK"]
    if pendientes:
        print(f"\nRepaso de fallos y blancos ({len(pendientes)}):")
        for i, resultado, p in pendientes:
            print(f"  - P{i} ({resultado}) [{p.tema}]: {p.correcta}")
            print(f"    → {p.explicacion}")
    else:
        print("\n¡Sin fallos ni blancos! Perfecto.")


# ── Menú principal ────────────────────────────────────────────────────────────

def mostrar_menu() -> str:
    total_preguntas = sum(len(b) for _, b in TEMAS)
    print(f"\n{'='*55}")
    print(f"  EXAMEN DE SEGURIDAD DE LA INFORMACIÓN")
    print(f"  {total_preguntas} preguntas en total")
    print(f"{'='*55}")
    for i, (nombre, banco) in enumerate(TEMAS, 1):
        print(f"  {i}. {nombre}  ({len(banco)} preguntas)")
    print(f"  {len(TEMAS)+1}. EXAMEN GLOBAL (todos los temas)")
    print("  0. Salir")
    return input(f"\nSelecciona (0-{len(TEMAS)+1}): ").strip()


def main() -> None:
    while True:
        opcion = mostrar_menu()

        if opcion == "0":
            print("\n¡Hasta luego! Mucho ánimo con el estudio.")
            break

        opciones_validas = [str(i) for i in range(1, len(TEMAS) + 2)]

        if opcion in opciones_validas:
            idx = int(opcion) - 1

            if idx < len(TEMAS):
                # Test de un tema concreto
                nombre, banco = TEMAS[idx]
                ejecutar_test(nombre, banco)
            else:
                # Examen global: mezcla todos los bancos
                banco_global = []
                for _, banco in TEMAS:
                    banco_global.extend(banco)
                ejecutar_test("Examen Global — Todos los temas", banco_global)
        else:
            print(f"  Opción no válida. Elige entre 0 y {len(TEMAS)+1}.")


if __name__ == "__main__":
    main()
