# Sesión 2 — Tomar decisiones: condicionales y lógica

**Semana:** 1 · **Duración:** 2 horas · **Lenguaje:** Python · **Entorno:** Google Colab

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Usar operadores de comparación (`==`, `!=`, `>`, `<`, `>=`, `<=`).
- Escribir decisiones con `if`, `elif` y `else`.
- Combinar condiciones con `and`, `or` y `not`.
- Entender la importancia de la indentación en Python.
- Convertir texto a número con `int()` y `float()`.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Repaso activo | 3 preguntas rápidas: ¿qué tipo de dato es `"25"`? ¿Qué hace `=`? ¿Qué error da `print(Hola)`? |
| 0:15 – 0:45 | Concepto + *live coding* | Comparaciones y valores `True`/`False`; primer `if`; indentación |
| 0:45 – 1:05 | Práctica guiada | En parejas: programa que dice si una nota aprueba (≥ 3.0) o reprueba |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:30 | Concepto + *live coding* | `elif`, condiciones combinadas con `and` / `or` |
| 1:30 – 1:50 | Práctica autónoma | Ejercicios en tres niveles |
| 1:50 – 2:00 | Cierre | 3 ideas clave y adelanto de la sesión 3 |

## Contenido detallado

### 1. Comparaciones
```python
nota = 3.5
print(nota >= 3.0)   # True
print(nota == 5)     # False
```
Aclarar la diferencia: `=` guarda, `==` compara.

### 2. `if` / `else`
```python
nota = 2.8
if nota >= 3.0:
    print("Aprobó")
else:
    print("Reprobó")
```
La indentación (4 espacios) indica qué instrucciones pertenecen al `if`. Mostrar en vivo el `IndentationError`.

### 3. `elif`: varias opciones
```python
nota = 4.6
if nota >= 4.5:
    print("Excelente")
elif nota >= 3.0:
    print("Aprobó")
else:
    print("Reprobó")
```
Python revisa las condiciones en orden y se detiene en la primera verdadera.

### 4. Condiciones combinadas
```python
edad = 20
tiene_documento = True
if edad >= 18 and tiene_documento:
    print("Puede votar")
```

### 5. Entrada del usuario
```python
edad = int(input("¿Cuántos años tienes? "))
if edad >= 18:
    print("Eres mayor de edad")
```

## Ejercicios

**Básico (todos)**
1. Pide un número y di si es positivo, negativo o cero.
2. Pide la nota de un estudiante y muestra "Aprobó" o "Reprobó".

**Intermedio**
3. Clasificador de IMC: pide peso y estatura, calcula `peso / estatura**2` y muestra la categoría.
4. Una tienda da 10 % de descuento si la compra supera $100.000 y 20 % si supera $200.000. Calcula el valor final.

**Reto**
5. Pide un año y di si es bisiesto (divisible entre 4, excepto los divisibles entre 100 que no lo sean entre 400). Pista: el operador `%` da el residuo.
6. Mini "piedra, papel o tijera" entre dos jugadores que escriben su elección.

## Cierre: 3 ideas clave
1. Una condición siempre se evalúa como `True` o `False`.
2. `if` / `elif` / `else` permite que el programa tome caminos distintos.
3. En Python la indentación no es decoración: define la estructura.

## Para la próxima sesión
- **Tarea corta:** ejercicios 1 a 4.
- **Nivelación:** notebook con los ejemplos resueltos y un diagrama de flujo de cada condicional.

## Notas para el docente
- Dibujar diagramas de flujo en el tablero ayuda mucho a quienes vienen de carreras no técnicas.
- Error frecuente: olvidar los dos puntos `:` al final del `if`. Mostrarlo antes de que ocurra.
- Rotar las parejas respecto a la sesión 1 solo si la dinámica no funcionó; la rotación principal es semanal.
