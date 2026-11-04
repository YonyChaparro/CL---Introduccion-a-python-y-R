# Sesión 7 — Visualización de datos con ggplot2

**Semana:** 4 · **Duración:** 2 horas · **Lenguaje:** R · **Entorno:** Posit Cloud

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Explicar la estructura de una gráfica en ggplot2: datos + estética (`aes`) + geometría (`geom_`).
- Hacer gráficas de barras, histogramas, dispersión y cajas.
- Agregar títulos, etiquetas de ejes y colores.
- Elegir el tipo de gráfica adecuado según la pregunta.
- Calcular estadística descriptiva básica (media, mediana, mínimo, máximo, desviación estándar).

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:15 | Repaso activo | Ejercicio: con dplyr, calcular un promedio por categoría |
| 0:15 – 0:30 | Concepto | ¿Por qué graficar? Qué gráfica usar según la pregunta; la "gramática" de ggplot2 por capas |
| 0:30 – 0:55 | *Live coding* | Barras, histograma, dispersión con el dataset del curso |
| 0:55 – 1:05 | Práctica guiada | En parejas: reproducir una gráfica y cambiarle colores y títulos |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | *Live coding* | Combinar dplyr + ggplot2; `labs()`, `fill`, `facet_wrap()`; estadística descriptiva |
| 1:35 – 1:52 | Práctica autónoma | Ejercicios en tres niveles |
| 1:52 – 2:00 | Cierre | 3 ideas clave y adelanto: Python vs. R lado a lado |

## Contenido detallado

### 1. ¿Qué gráfica uso?

| Pregunta | Gráfica | Geometría |
|---|---|---|
| ¿Cuántos hay de cada categoría? | Barras | `geom_bar()` / `geom_col()` |
| ¿Cómo se distribuye un número? | Histograma | `geom_histogram()` |
| ¿Hay relación entre dos números? | Dispersión | `geom_point()` |
| ¿Cómo cambia la distribución entre grupos? | Cajas | `geom_boxplot()` |
| ¿Cómo cambia algo en el tiempo? | Líneas | `geom_line()` |

### 2. La estructura de ggplot2
```r
ggplot(data = df, aes(x = ciudad)) +
  geom_bar()
```
Datos → qué va en cada eje (`aes`) → cómo se dibuja (`geom_`). Cada `+` agrega una capa.

### 3. Más ejemplos
```r
ggplot(df, aes(x = edad)) +
  geom_histogram(bins = 20, fill = "steelblue")

ggplot(df, aes(x = variable_1, y = variable_2, color = categoria)) +
  geom_point() +
  labs(title = "Relación entre variable 1 y variable 2",
       x = "Variable 1", y = "Variable 2", color = "Categoría")
```

### 4. dplyr + ggplot2
```r
df |>
  group_by(ciudad) |>
  summarise(promedio = mean(edad)) |>
  ggplot(aes(x = reorder(ciudad, promedio), y = promedio)) +
  geom_col() +
  coord_flip()
```

### 5. Estadística descriptiva
```r
summary(df$edad)
df |> summarise(media = mean(edad), mediana = median(edad),
                sd = sd(edad), min = min(edad), max = max(edad))
```
Explicar sin fórmulas: la media puede engañar si hay valores extremos; la mediana es más robusta.

## Ejercicios

**Básico (todos)**
1. Haz una gráfica de barras de una columna de texto del dataset.
2. Haz un histograma de una columna numérica y ponle título.

**Intermedio**
3. Haz una gráfica de dispersión coloreando los puntos por una categoría.
4. Calcula media y mediana de una variable y explica en una frase por qué son distintas (o parecidas).

**Reto**
5. Combina `group_by` + `summarise` + `ggplot` para responder una de tus preguntas de la sesión 4.
6. Usa `facet_wrap()` para dividir una gráfica por categorías y guárdala con `ggsave()`.

## Cierre: 3 ideas clave
1. Toda gráfica de ggplot2 tiene datos, estética y geometría.
2. El tipo de gráfica depende de la pregunta, no del gusto.
3. Una buena gráfica tiene título y ejes con nombres claros.

## Para la próxima sesión
- **Tarea corta:** hacer 2 gráficas que respondan preguntas propias sobre el dataset y escribir una frase de conclusión para cada una.
- Pensar en un tema de su carrera que les gustaría analizar para el proyecto final.

## Notas para el docente
- **Rotar parejas** (inicio de semana 4).
- Error frecuente: poner el `+` al inicio de la línea siguiente en vez de al final. Mostrarlo.
- Mostrar un par de gráficas "malas" (ejes sin nombre, colores confusos, gráfica de torta con 15 categorías) y pedir al grupo que las critique: funciona muy bien con grupos de carreras diversas.
