# Sesión 5 — El puente a R: lo mismo, en otro idioma

**Semana:** 3 · **Duración:** 2 horas · **Lenguaje:** R · **Entorno:** Posit Cloud (RStudio en el navegador)

## Objetivos de aprendizaje

Al finalizar la sesión, cada estudiante podrá:

- Ubicarse en RStudio: consola, script, entorno y panel de archivos/gráficas.
- Traducir a R los conceptos vistos en Python: variables, tipos, condicionales, bucles y funciones.
- Crear y operar con vectores, y entender que R trabaja de forma vectorizada.
- Recordar las diferencias clave: asignación con `<-` e **indexación desde 1**.
- Leer el dataset del curso en R.

## Por qué esta sesión es clave

Los estudiantes **no aprenden a programar de nuevo**: ya saben qué es una variable, un `if` o un bucle. Aquí solo aprenden cómo se escriben esas ideas en R. La clase se plantea como una traducción, con una tabla de equivalencias como eje.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:10 | Repaso activo | Pregunta abierta: ¿qué hicimos con pandas? ¿Qué preguntas escribieron sobre el dataset? |
| 0:10 – 0:25 | Concepto | ¿Qué es R y para qué se usa? Recorrido por RStudio en Posit Cloud |
| 0:25 – 0:55 | *Live coding* | Traducción en vivo: variables, tipos, `print`, condicionales, funciones (usando la tabla de equivalencias) |
| 0:55 – 1:05 | Práctica guiada | En parejas: traducir a R 3 ejercicios de la semana 1 |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:35 | *Live coding* | Vectores, vectorización (sin `for`), indexación desde 1; leer el CSV del curso |
| 1:35 – 1:52 | Práctica autónoma | Ejercicios en tres niveles |
| 1:52 – 2:00 | Cierre | 3 ideas clave; entrega de la tabla de equivalencias impresa |

## Tabla de equivalencias Python → R (entregar impresa)

| Concepto | Python | R |
|---|---|---|
| Asignación | `x = 5` | `x <- 5` |
| Imprimir | `print(x)` | `print(x)` |
| Comentario | `# texto` | `# texto` |
| Texto | `"hola"` | `"hola"` |
| Verdadero / falso | `True` / `False` | `TRUE` / `FALSE` |
| Tipo de dato | `type(x)` | `class(x)` |
| Lista / vector | `[1, 2, 3]` | `c(1, 2, 3)` |
| Primer elemento | `lista[0]` | `vector[1]` |
| Longitud | `len(x)` | `length(x)` |
| Condicional | `if x > 0:` + indentación | `if (x > 0) { ... }` |
| Si no | `else:` | `else { ... }` |
| Bucle | `for v in lista:` | `for (v in vector) { ... }` |
| Función | `def f(x): return x*2` | `f <- function(x) { x * 2 }` |
| Leer CSV | `pd.read_csv("a.csv")` | `read.csv("a.csv")` / `read_csv("a.csv")` |
| Primeras filas | `df.head()` | `head(df)` |
| Dimensiones | `df.shape` | `dim(df)` |

> Esta tabla crecerá en las sesiones 6, 7 y 8.

## Contenido detallado

### 1. Variables y condicionales en R
```r
nota <- 3.5
if (nota >= 3.0) {
  print("Aprobó")
} else {
  print("Reprobó")
}
```
En R las llaves `{ }` marcan los bloques; la indentación es solo para leer mejor.

### 2. Funciones
```r
aplicar_iva <- function(precio) {
  precio * 1.19
}
aplicar_iva(10000)
```

### 3. Vectores y vectorización
```r
notas <- c(3.5, 4.2, 2.8, 4.9)
notas[1]          # 3.5 — ¡en R se empieza en 1!
mean(notas)
notas * 2         # multiplica todos los elementos sin bucle
notas >= 3.0      # compara todos a la vez
sum(notas >= 3.0) # cuántos aprobaron
```
Comparar con la sesión 3: lo que en Python requería un `for` con acumulador, en R es una línea.

### 4. Leer el dataset del curso
```r
df <- read.csv("URL_DEL_DATASET.csv")
head(df)
dim(df)
str(df)
```

## Ejercicios

**Básico (todos)**
1. Traduce a R: crea variables con tu nombre y carrera e imprímelas.
2. Traduce a R el programa de "Aprobó / Reprobó".

**Intermedio**
3. Crea un vector de precios y calcula el total y el total con IVA, sin usar bucles.
4. Escribe en R la función `calcular_promedio()` de la sesión 3 con un `for`, y luego compárala con `mean()`.

**Reto**
5. Lee el dataset del curso y calcula el promedio de una columna numérica (`mean(df$columna)`).
6. ¿Qué pasa si escribes `notas[0]` en R? Investiga y explica la diferencia con Python.

## Cierre: 3 ideas clave
1. Las ideas de programación son las mismas; cambia la forma de escribirlas.
2. En R se asigna con `<-` y se cuenta desde 1.
3. R opera sobre vectores completos: muchas veces no necesitas bucles.

## Para la próxima sesión
- **Tarea corta:** traducir a R los ejercicios 1 a 4 de la sesión 2.
- **Nivelación:** la tabla de equivalencias en formato digital.

## Notas para el docente
- **Rotar parejas** (inicio de semana 3).
- Errores más frecuentes de hoy: usar `=` o `:` como en Python, olvidar las llaves, indexar desde 0. Nombrarlos explícitamente al inicio.
- Instalar `tidyverse` en el proyecto de Posit Cloud **antes** de la sesión 6 (o hacer un proyecto base para copiar), porque la instalación tarda varios minutos.
