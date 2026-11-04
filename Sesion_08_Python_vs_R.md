# Sesión 8 — Python y R lado a lado + formación de grupos de proyecto

**Semana:** 4 · **Duración:** 2 horas · **Lenguaje:** Python y R · **Entorno:** Google Colab y Posit Cloud

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Resolver el mismo análisis en Python y en R, identificando qué es igual (el concepto) y qué cambia (la sintaxis).
- Argumentar cuándo conviene usar cada lenguaje.
- Formular una pregunta de investigación que se pueda responder con datos.
- Conocer la rúbrica y el plan del proyecto final.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:10 | Repaso activo | Mostrar 2 gráficas de la tarea y comentarlas en grupo |
| 0:10 – 0:45 | *Live coding* comparativo | Un mismo análisis completo, paso a paso, en Python y en R (pantalla dividida) |
| 0:45 – 1:05 | Práctica guiada | En parejas: completar en un lenguaje un análisis que se dio resuelto en el otro |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:30 | Discusión | ¿Cuál usar y cuándo? Ecosistemas, comunidades y usos en distintas carreras |
| 1:30 – 1:55 | Proyecto final | Presentación de la rúbrica, formación de 6 grupos de 3, elección de dataset y pregunta |
| 1:55 – 2:00 | Cierre | Cada grupo dice en voz alta su pregunta |

## Contenido detallado

### 1. El mismo análisis en ambos lenguajes

**Pregunta de ejemplo:** ¿qué categoría tiene el mayor promedio de la variable X?

| Paso | Python (pandas) | R (tidyverse) |
|---|---|---|
| Cargar | `import pandas as pd` | `library(tidyverse)` |
| Leer | `df = pd.read_csv("datos.csv")` | `df <- read_csv("datos.csv")` |
| Explorar | `df.head()` | `head(df)` / `glimpse(df)` |
| Filtrar | `df[df["x"] > 0]` | `filter(df, x > 0)` |
| Agrupar y resumir | `df.groupby("cat")["x"].mean()` | `df |> group_by(cat) |> summarise(m = mean(x))` |
| Ordenar | `.sort_values(ascending=False)` | `arrange(desc(m))` |
| Graficar | `.plot(kind="bar")` | `ggplot(aes(cat, m)) + geom_col()` |

Python completo:
```python
import pandas as pd
df = pd.read_csv("URL_DEL_DATASET.csv")
resultado = (df[df["x"] > 0]
             .groupby("cat")["x"].mean()
             .sort_values(ascending=False))
resultado.plot(kind="bar")
```

R completo:
```r
library(tidyverse)
df <- read_csv("URL_DEL_DATASET.csv")
df |>
  filter(x > 0) |>
  group_by(cat) |>
  summarise(m = mean(x)) |>
  arrange(desc(m)) |>
  ggplot(aes(x = reorder(cat, -m), y = m)) +
  geom_col()
```

Pregunta al grupo: **¿qué es igual en los dos?** (la lógica: leer → filtrar → agrupar → resumir → ordenar → graficar). **¿Qué cambia?** (solo la escritura).

### 2. ¿Cuándo usar cada uno?

| | Python | R |
|---|---|---|
| Fortalezas | Propósito general, automatización, web, inteligencia artificial y *machine learning* | Estadística, investigación académica, visualización, reportes reproducibles |
| Comunidad típica | Ingeniería, desarrollo de software, ciencia de datos en la industria | Estadística, biología, salud, economía, ciencias sociales |
| Herramientas clave | pandas, matplotlib, scikit-learn | tidyverse, ggplot2, R Markdown / Quarto |

Mensaje: no hay un ganador; saber los dos permite elegir según el problema y el equipo de trabajo.

### 3. Proyecto final

**Formato:** grupos de 3 (6 grupos), mezclando carreras.

**Entregable:** un notebook (Colab) o script/Quarto (Posit Cloud), en el lenguaje que prefieran (o en ambos), que:

1. Plantee una pregunta clara sobre un dataset.
2. Lea y explore los datos.
3. Filtre, transforme o resuma para responder la pregunta.
4. Incluya al menos una gráfica.
5. Termine con una conclusión en lenguaje sencillo.

**Rúbrica**

| Criterio | Peso | Qué se evalúa |
|---|---|---|
| El código funciona | 25 % | Se ejecuta de principio a fin sin errores |
| Pregunta y respuesta | 25 % | La pregunta es clara y el análisis realmente la responde |
| Visualización | 20 % | Gráfica adecuada a la pregunta, con título y ejes claros |
| Organización | 15 % | Código ordenado, con comentarios o celdas de texto que explican los pasos |
| Presentación | 15 % | Explican qué descubrieron, no solo qué código escribieron |

**Criterios para elegir dataset:** pequeño (menos de 10.000 filas), en formato CSV, con al menos una columna numérica y una de categorías, y relacionado con alguna de las carreras del grupo. Fuentes sugeridas: datos.gov.co, DANE, Kaggle (datasets pequeños), o el dataset del curso si no encuentran otro.

## Ejercicios (práctica guiada)

**Básico (todos)**
1. Se da resuelto en Python un análisis de 4 pasos; tradúcelo a R.

**Intermedio**
2. Se da resuelto en R un análisis con `group_by` + `summarise`; tradúcelo a Python.

**Reto**
3. Resuelve una pregunta nueva en los dos lenguajes y compara cuántas líneas necesitaste en cada uno.

## Cierre: 3 ideas clave
1. El análisis de datos sigue la misma lógica en cualquier lenguaje.
2. Python y R se complementan; cada uno brilla en contextos distintos.
3. Un buen proyecto empieza con una buena pregunta.

## Para la próxima sesión
- **Cada grupo** debe llegar a la sesión 9 con: el dataset descargado o con enlace, la pregunta escrita y una primera exploración (`head`, dimensiones).
- **Nivelación:** la tabla de equivalencias completa (versión final) en digital e impresa.

## Notas para el docente
- Revisar las preguntas de los grupos al final de la clase o por mensaje antes de la sesión 9: una pregunta demasiado amplia ("¿cómo es la educación en Colombia?") es el riesgo más común. Ayudar a concretarla ("¿qué departamento tiene el mayor puntaje promedio en matemáticas?").
- Entregar la **hoja resumen de la semana 4**.
