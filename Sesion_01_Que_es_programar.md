# Sesión 1 — ¿Qué es programar? Primeros pasos con Python

**Semana:** 1 · **Duración:** 2 horas · **Lenguaje:** Python · **Entorno:** Google Colab

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Explicar con sus palabras qué es un programa y cómo lo ejecuta el computador (línea por línea, de arriba hacia abajo).
- Abrir un notebook en Google Colab, escribir código y ejecutar celdas.
- Usar `print()` para mostrar información.
- Crear variables y reconocer los tipos de datos básicos: `int`, `float`, `str`, `bool`.
- Leer un mensaje de error sin miedo e identificar en qué línea está el problema.

## Antes de la sesión

- Enviar a los estudiantes el enlace al notebook de la clase y pedir que verifiquen que pueden entrar con su cuenta de Google.
- Preparar los papelitos verde/rojo para cada estudiante (18 juegos).
- Tener lista la lista de parejas de la semana 1 (mezclando carreras).

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Bienvenida | Presentación del curso, dinámica rápida: cada estudiante dice su carrera y algo que le gustaría automatizar o analizar |
| 0:15 – 0:30 | Concepto | ¿Qué es programar? Analogía de la receta de cocina: instrucciones precisas, en orden, para alguien que no improvisa |
| 0:30 – 0:50 | *Live coding* | Primer notebook en Colab: `print("Hola, mundo")`, celdas de código y de texto, ejecutar con Shift+Enter |
| 0:50 – 1:05 | Práctica guiada | En parejas: imprimir su nombre, su carrera y una frase favorita |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | Concepto + *live coding* | Variables, operaciones aritméticas, tipos de datos, `type()`; `=` como "guardar en", no como igualdad matemática |
| 1:35 – 1:50 | Práctica autónoma | Ejercicios en tres niveles (ver abajo) |
| 1:50 – 2:00 | Cierre | Las 3 ideas clave y adelanto de la sesión 2 |

## Contenido detallado

### 1. ¿Qué es programar?
- Un programa es una secuencia de instrucciones que el computador sigue **al pie de la letra**.
- El computador no adivina: si la instrucción está mal escrita, no la entiende.
- Python es un lenguaje diseñado para ser legible, por eso empezamos con él.

### 2. Google Colab
- Notebook = documento con celdas de código y celdas de texto.
- Ejecutar una celda, ver la salida, volver a ejecutar.
- Guardar una copia en su propio Drive.

### 3. Variables y tipos de datos
```python
nombre = "Ana"          # str (texto)
edad = 20               # int (entero)
estatura = 1.65         # float (decimal)
es_estudiante = True    # bool (verdadero/falso)

print(nombre, "tiene", edad, "años")
print(type(estatura))
```

### 4. Operaciones
```python
precio = 12000
cantidad = 3
total = precio * cantidad
print("Total a pagar:", total)
```

### 5. Leer errores (hacerlo a propósito en vivo)
```python
print(Hola)        # NameError: falta las comillas
print("Hola"       # SyntaxError: falta el paréntesis
edad = "20"
edad + 1           # TypeError: no se puede sumar texto con número
```
Mensaje clave: **un error no es un fracaso, es el computador diciéndote dónde mirar.** Mostrar cómo leer la última línea del error y el número de línea.

## Ejercicios

**Básico (todos)**
1. Crea variables con tu nombre, tu carrera y tu semestre, e imprímelas en una frase.
2. Calcula cuántos minutos tiene una semana.

**Intermedio**
3. Una compra tiene 3 productos con precios distintos. Calcula el total y el total con IVA del 19 %.
4. Usa `type()` para verificar el tipo de cada variable que creaste.

**Reto**
5. Convierte una temperatura de grados Celsius a Fahrenheit (`F = C * 9/5 + 32`) y muestra el resultado con un mensaje claro.
6. Usa `input()` para pedir el nombre del usuario y saludarlo. ¿Qué tipo de dato devuelve `input()`?

## Cierre: 3 ideas clave
1. Un programa es una lista de instrucciones que se ejecuta en orden.
2. Las variables guardan datos, y cada dato tiene un tipo.
3. Los errores son pistas: leerlos es parte de programar.

## Para la próxima sesión
- **Tarea corta (30 min):** completar los ejercicios básicos e intermedios que no alcanzaron en clase.
- **Nivelación:** notebook resuelto paso a paso con todos los ejemplos de hoy.

## Notas para el docente
- Esta sesión define el tono del curso. Prioriza que nadie salga con miedo, aunque se vea menos contenido.
- Si alguien no puede entrar a Colab, emparéjalo con un compañero mientras se resuelve.
- Observa quiénes avanzan muy rápido: serán buenos apoyos en las prácticas siguientes.
