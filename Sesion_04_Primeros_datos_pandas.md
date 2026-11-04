# Sesión 4 — Primer contacto con datos reales: pandas

**Semana:** 2 · **Duración:** 2 horas · **Lenguaje:** Python · **Entorno:** Google Colab

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Explicar qué es una tabla de datos (filas = observaciones, columnas = variables).
- Leer un archivo CSV con `pandas`.
- Explorar un dataset con `head()`, `shape`, `columns` e `info()`.
- Seleccionar columnas y filtrar filas con una condición.
- Contar valores y calcular estadísticas simples (`mean()`, `value_counts()`).
- Hacer una gráfica sencilla.

## Antes de la sesión

- Elegir **el dataset del curso** (se usará también en las sesiones 6, 7 y 8). Recomendaciones: un CSV pequeño (menos de 5.000 filas, menos de 10 columnas), con columnas de texto y numéricas, y un tema cercano. Opciones: datos abiertos de Colombia (datos.gov.co), clima de Bogotá, resultados deportivos, películas o canciones.
- Subirlo a un enlace accesible (Drive o GitHub) y probar que se lee desde Colab.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Repaso activo | Ejercicio: función que cuenta cuántos valores de una lista superan un umbral |
| 0:15 – 0:30 | Concepto | ¿Qué es un dataset? Mostrar el CSV abierto como hoja de cálculo; de la lista a la tabla |
| 0:30 – 0:55 | *Live coding* | Importar pandas, leer el CSV, explorar con `head()`, `shape`, `info()` |
| 0:55 – 1:05 | Práctica guiada | En parejas: responder 3 preguntas de exploración sobre el dataset |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | *Live coding* | Seleccionar columnas, filtrar filas, `value_counts()`, `mean()`, una gráfica de barras |
| 1:35 – 1:52 | Práctica autónoma | Ejercicios en tres niveles sobre el dataset |
| 1:52 – 2:00 | Cierre | 3 ideas clave; adelanto: la próxima clase aprendemos R |

## Contenido detallado

### 1. Leer y explorar
```python
import pandas as pd

df = pd.read_csv("URL_DEL_DATASET.csv")
df.head()       # primeras 5 filas
df.shape        # (filas, columnas)
df.columns      # nombres de las columnas
df.info()       # tipos de datos y valores faltantes
```

### 2. Seleccionar columnas
```python
df["nombre_columna"]
df[["columna_1", "columna_2"]]
```

### 3. Filtrar filas
```python
df[df["edad"] > 18]
```
Relacionarlo con lo visto: es una condición (sesión 2) aplicada a cada fila, como un `for` + `if` (sesión 3) pero en una sola línea.

### 4. Resumir
```python
df["edad"].mean()
df["ciudad"].value_counts()
```

### 5. Una gráfica
```python
df["ciudad"].value_counts().plot(kind="bar")
```

## Ejercicios

**Básico (todos)**
1. ¿Cuántas filas y columnas tiene el dataset?
2. Muestra las primeras 10 filas (`head(10)`).
3. Calcula el promedio de una columna numérica.

**Intermedio**
4. Filtra las filas que cumplen una condición y cuenta cuántas son.
5. Usa `value_counts()` en una columna de texto e interpreta el resultado en una frase.

**Reto**
6. Filtra con dos condiciones a la vez (`&` en pandas) y haz una gráfica del resultado.
7. Formula tu propia pregunta sobre los datos y respóndela con código.

## Cierre: 3 ideas clave
1. Un dataset es una tabla: filas son casos, columnas son variables.
2. Con pocas líneas de pandas se puede leer, filtrar y resumir datos reales.
3. Filtrar es aplicar una condición a cada fila.

## Para la próxima sesión
- **Tarea corta:** escribir 3 preguntas que les gustaría responder con este dataset (se retomarán en R).
- **Obligatorio:** crear una cuenta gratuita en **Posit Cloud** antes de la sesión 5 y verificar que pueden abrir un proyecto.
- **Nivelación:** hoja resumen de una página con los comandos de pandas vistos.

## Notas para el docente
- La meta de esta sesión es **motivación**, no dominio de pandas. No entrar en `groupby`, `merge` ni limpieza de datos; esos temas se verán en R con dplyr.
- Entregar la **hoja resumen de la semana 1–2** con los comandos de Python vistos.
- Error frecuente: confundir `df["col"]` con `df[["col"]]`. Basta con mencionarlo.
