# Sesión 3 — Listas, bucles y funciones

**Semana:** 2 · **Duración:** 2 horas · **Lenguaje:** Python · **Entorno:** Google Colab

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Crear listas, acceder a sus elementos por posición (empezando en 0) y agregar elementos.
- Recorrer una lista con un bucle `for`.
- Usar `range()` para repetir una acción un número de veces.
- Definir y llamar funciones sencillas con `def` y `return`.
- Combinar listas, bucles y condicionales para resolver un problema pequeño.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Repaso activo | Ejercicio corto: clasificar una nota en "Excelente / Aprobó / Reprobó" |
| 0:15 – 0:40 | Concepto + *live coding* | Listas: crear, indexar (desde 0), `len()`, `append()` |
| 0:40 – 0:55 | Concepto + *live coding* | Bucle `for` sobre listas y con `range()`; acumuladores |
| 0:55 – 1:05 | Práctica guiada | En parejas: calcular el promedio de una lista de notas |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | Concepto + *live coding* | Funciones: `def`, parámetros, `return`; por qué reutilizar código |
| 1:35 – 1:52 | Práctica autónoma | Ejercicios en tres niveles |
| 1:52 – 2:00 | Cierre | 3 ideas clave y adelanto: ¡la próxima clase trabajamos con datos reales! |

## Contenido detallado

### 1. Listas
```python
notas = [3.5, 4.2, 2.8, 4.9]
print(notas[0])      # 3.5 — el primer elemento está en la posición 0
print(len(notas))    # 4
notas.append(3.0)
print(notas)
```
Énfasis: **en Python se cuenta desde 0.** Esto será importante en la sesión 5, porque R cuenta desde 1.

### 2. Bucle `for`
```python
for nota in notas:
    print("Nota:", nota)
```

### 3. Acumuladores
```python
suma = 0
for nota in notas:
    suma = suma + nota
promedio = suma / len(notas)
print("Promedio:", promedio)
```

### 4. Bucle + condicional
```python
aprobados = 0
for nota in notas:
    if nota >= 3.0:
        aprobados = aprobados + 1
print("Aprobaron:", aprobados)
```

### 5. `range()`
```python
for i in range(5):
    print("Repetición", i)
```

### 6. Funciones
```python
def calcular_promedio(lista):
    suma = 0
    for valor in lista:
        suma = suma + valor
    return suma / len(lista)

print(calcular_promedio([3.5, 4.0, 4.5]))
```
Una función es como una "receta con nombre": se escribe una vez y se usa muchas veces.

### Mención breve (opcional)
Diccionarios (`{"nombre": "Ana", "edad": 20}`) solo como adelanto: es la idea de una "fila" con nombres de columna, que veremos con tablas de datos.

## Ejercicios

**Básico (todos)**
1. Crea una lista con 5 ciudades de Colombia e imprime cada una con un bucle.
2. Dada una lista de precios, calcula el total de la compra.

**Intermedio**
3. Cuenta cuántas notas de una lista son mayores o iguales a 3.0.
4. Escribe una función `aplicar_iva(precio)` que devuelva el precio con IVA del 19 %, y úsala sobre una lista de precios.

**Reto**
5. Encuentra la nota más alta de una lista **sin** usar `max()`.
6. Escribe una función que reciba una frase y devuelva cuántas palabras tiene (pista: `frase.split()`).

## Cierre: 3 ideas clave
1. Las listas guardan varios datos en orden; en Python la primera posición es 0.
2. El `for` repite una acción para cada elemento.
3. Las funciones empaquetan una solución para reutilizarla.

## Para la próxima sesión
- **Tarea corta:** ejercicios 1 a 4.
- **Nivelación:** video corto o notebook resuelto sobre bucles y acumuladores (es el tema que más cuesta).
- Avisar que la próxima clase se usará un archivo CSV que se compartirá por enlace.

## Notas para el docente
- Hacer "ejecución a mano" en el tablero: una tabla con el valor de `suma` en cada vuelta del bucle. Es la forma más efectiva de que los principiantes entiendan los acumuladores.
- **Rotar parejas** (inicio de semana 2).
- Si el grupo va lento, dejar las funciones para el inicio de la sesión 4 y reducir la parte de pandas.
