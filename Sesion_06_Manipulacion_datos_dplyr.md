# Sesión 6 — Manipulación de datos con dplyr

**Semana:** 3 · **Duración:** 2 horas · **Lenguaje:** R · **Entorno:** Posit Cloud

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Cargar el paquete `tidyverse` y explicar qué es un paquete.
- Usar los verbos principales de dplyr: `select()`, `filter()`, `arrange()`, `mutate()`, `summarise()` y `group_by()`.
- Encadenar operaciones con el operador pipe `|>` (o `%>%`).
- Responder preguntas sobre el dataset del curso combinando varios verbos.

## Antes de la sesión

- Proyecto base en Posit Cloud con `tidyverse` instalado y el dataset cargado, para que cada estudiante lo copie.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Repaso activo | Mini quiz: ¿cómo se asigna en R? ¿Cuál es el primer índice? ¿Cómo se hace un vector? |
| 0:15 – 0:25 | Concepto | ¿Qué es un paquete? tidyverse como "caja de herramientas"; la idea de los verbos |
| 0:25 – 0:55 | *Live coding* | `select`, `filter`, `arrange`, `mutate` sobre el dataset del curso |
| 0:55 – 1:05 | Práctica guiada | En parejas: 3 filtros y una columna nueva |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | *Live coding* | El pipe `|>`; `group_by` + `summarise`; `count()` |
| 1:35 – 1:52 | Práctica autónoma | Responder sus propias preguntas de la sesión 4 |
| 1:52 – 2:00 | Cierre | 3 ideas clave y adelanto: gráficas con ggplot2 |

## Contenido detallado

### 1. Cargar el paquete
```r
library(tidyverse)
df <- read_csv("URL_DEL_DATASET.csv")
glimpse(df)
```

### 2. Los verbos de dplyr
Explicar cada verbo como una acción en español:

| Verbo | Qué hace | Ejemplo |
|---|---|---|
| `select()` | Elegir columnas | `select(df, ciudad, edad)` |
| `filter()` | Elegir filas que cumplen una condición | `filter(df, edad > 18)` |
| `arrange()` | Ordenar | `arrange(df, desc(edad))` |
| `mutate()` | Crear o modificar columnas | `mutate(df, edad_meses = edad * 12)` |
| `summarise()` | Resumir en un valor | `summarise(df, promedio = mean(edad))` |
| `group_by()` | Agrupar antes de resumir | `group_by(df, ciudad)` |

### 3. El pipe: leer el código como una receta
```r
df |>
  filter(edad > 18) |>
  group_by(ciudad) |>
  summarise(promedio_edad = mean(edad), total = n()) |>
  arrange(desc(total))
```
Leer en voz alta: "toma los datos, **luego** filtra, **luego** agrupa por ciudad, **luego** resume, **luego** ordena".

### 4. Contar rápido
```r
df |> count(ciudad, sort = TRUE)
```

### Ampliación de la tabla de equivalencias

| Operación | Python (pandas) | R (dplyr) |
|---|---|---|
| Elegir columnas | `df[["a", "b"]]` | `select(df, a, b)` |
| Filtrar | `df[df["a"] > 5]` | `filter(df, a > 5)` |
| Ordenar | `df.sort_values("a")` | `arrange(df, a)` |
| Nueva columna | `df["c"] = df["a"] * 2` | `mutate(df, c = a * 2)` |
| Contar | `df["a"].value_counts()` | `count(df, a)` |
| Agrupar y resumir | `df.groupby("a")["b"].mean()` | `df |> group_by(a) |> summarise(mean(b))` |

## Ejercicios

**Básico (todos)**
1. Selecciona solo 3 columnas del dataset.
2. Filtra las filas que cumplen una condición numérica.
3. Ordena el dataset de mayor a menor según una columna.

**Intermedio**
4. Crea una columna nueva con `mutate()` (por ejemplo, una conversión de unidades o una categoría con `if_else()`).
5. Usa `group_by()` y `summarise()` para obtener el promedio de una variable por categoría.

**Reto**
6. Responde con un solo bloque de pipes una de las 3 preguntas que escribiste en la sesión 4.
7. Encuentra la categoría con el valor promedio más alto y muestra solo esa fila (`slice_max()`).

## Cierre: 3 ideas clave
1. Un paquete agrega herramientas nuevas a R.
2. dplyr usa verbos que se leen casi como español.
3. El pipe permite encadenar pasos como una receta.

## Para la próxima sesión
- **Tarea corta:** responder con dplyr las 3 preguntas de la sesión 4 y guardar el código.
- **Nivelación:** hoja resumen de dplyr de una página (puede basarse en la *cheatsheet* oficial de Posit, traducida).

## Notas para el docente
- Si el grupo tiene dificultad, enfocarse en `filter`, `mutate` y `count`, y dejar `group_by` para el inicio de la sesión 7.
- Error frecuente: usar `=` en lugar de `==` dentro de `filter()`. R da un mensaje de error bastante claro: aprovecharlo para practicar lectura de errores.
- Entregar la **hoja resumen de la semana 3**.
