# Sesión 4: guía del instructor sobre datos y pandas

Esta guía te prepara para explicar los conceptos de la sesión 4 y el dataset del curso. Complementa el [plan de la sesión](../Sesion_04_Primeros_datos_pandas.md) y las [diapositivas](../presentaciones/sesion_04_primeros_datos_pandas/index.html). No las reemplaza.

**La idea que une todo:**

> El **dataset** es la información. El **CSV** es cómo está guardada. **pandas** es la herramienta que la lee. El **DataFrame** es la tabla ya cargada en Python.

| Término | Qué es | En esta clase |
|---|---|---|
| Dataset | Un conjunto de datos organizado | El IRCA 2025 por municipio |
| CSV | Un formato de archivo de texto | `agua_municipios_2025.csv` |
| pandas | Una librería de Python | `import pandas as pd` |
| DataFrame | Una tabla en la memoria de Python | La variable `df` |

## Mapa de la exposición

Los temas siguen el orden de las diapositivas.

| Momento | Tema | Diapositiva | Tiempo |
|---|---|---|---|
| 0:15 | 1. Qué es un dataset | De la lista a la tabla; Filas y columnas | 4 min |
| 0:19 | 2. Qué es un archivo CSV | ¿Qué es un archivo CSV? | 3 min |
| 0:22 | 3. De dónde viene el dataset | Nuestro dataset: el agua que tomamos | 3 min |
| 0:25 | 4. Contexto del dataset | Nuestro dataset: el agua que tomamos | 5 min |
| 0:30 | 5. Qué es pandas | Leer el archivo con pandas | 3 min |
| 0:33 | 6. Qué es un DataFrame | Leer el archivo con pandas; head() | 4 min |
| 1:52 | 7. Recursos de pandas | Sin lámina: comparte los enlaces por el chat durante «Tres ideas clave de hoy» | 1 min |

## Antes de clase

- [ ] Lee el CSV en Colab con el [enlace del curso](https://raw.githubusercontent.com/YonyChaparro/CL---Introduccion-a-python-y-R/main/datos/agua_municipios_2025.csv) y confirma que `df.shape` da `(1019, 8)`.
- [ ] Abre el archivo en Google Sheets para mostrarlo como hoja de cálculo.
- [ ] Ten abierta la [página original en datos.gov.co](https://www.datos.gov.co/d/nxt2-39c3).
- [ ] Ten el CSV descargado por si falla el enlace: lo subes al panel de archivos de Colab y usas `pd.read_csv("agua_municipios_2025.csv")`.
- [ ] Ejecuta `pd.__version__` para saber qué salidas verás (ver [tema 6](#6-qué-es-un-dataframe)).

---

## 1. Qué es un dataset

**Idea central:** un dataset es un conjunto de datos organizado para responder preguntas. En este curso siempre tendrá forma de tabla.

**Cómo exponerlo:**

1. Parte de lo que ya conocen, la sesión 3:
   - Una **lista** guarda muchos valores de una sola cosa: `[1.7, 0.3, 5.0]`.
   - Un **diccionario** guarda varias cosas de un solo caso: `{"municipio": "Medellín", "irca": 1.7}`.
   - Una **tabla** guarda varias cosas de muchos casos.
2. Define las partes con la fila de Amagá:
   - **Fila = observación:** un caso. Aquí, un municipio.
   - **Columna = variable:** lo que sabemos de cada caso. Aquí, su IRCA o su nivel de riesgo.
3. Aclara que cada columna tiene un solo tipo de dato: `irca` es número y `nivel` es texto.

**Pregunta al grupo:** en un dataset de ventas de una tienda, ¿qué sería una fila? ¿Y qué columnas tendría?

**Si preguntan: ¿dataset y base de datos son lo mismo?** No exactamente. Un dataset es el conjunto de datos, que puede ser una sola tabla. Una base de datos es un sistema que guarda y administra datos, normalmente en varias tablas relacionadas. En el día a día mucha gente los usa como sinónimos.

---

## 2. Qué es un archivo CSV

**Idea central:** CSV significa *Comma-Separated Values*, valores separados por comas. Es un archivo de texto plano que casi cualquier programa puede abrir.

**Cómo exponerlo:** muestra el texto real al lado de la vista en hoja de cálculo.

```text
departamento,municipio,irca,nivel,irca_urbano,nivel_urbano,irca_rural,nivel_rural
Antioquia,Medellín,1.7,Sin riesgo,0.8,Sin riesgo,4.8,Sin riesgo
Antioquia,Abejorral,0.3,Sin riesgo,0.3,Sin riesgo,,
```

Señala tres cosas:

- **Encabezado:** la primera línea trae los nombres de las columnas.
- **Filas y columnas:** cada línea es una fila y las comas separan las columnas.
- **Dato faltante:** Abejorral termina en `,,`. Esas celdas vacías aparecerán como `NaN` en pandas.

**Dato curioso para mostrar:** Bogotá se guarda como `"Bogotá, D.C."`, entre comillas, porque su nombre tiene una coma. Sin comillas, esa coma separaría dos columnas. Lo mismo pasa con el Archipiélago de San Andrés, Providencia y Santa Catalina.

**Si preguntan:**

- **¿En qué se diferencia de un Excel?** Un CSV guarda solo el texto de una tabla. No tiene fórmulas, colores ni varias hojas.
- **¿Por qué en mi Excel sale todo en una columna?** Depende de la configuración regional: algunos equipos esperan `;` como separador. Por eso conviene mostrarlo en Google Sheets.
- **¿Y si otro CSV viene separado con punto y coma?** Se lee con `pd.read_csv(ruta, sep=";")`. No hace falta para este archivo.

---

## 3. De dónde viene el dataset

**Idea central:** son datos públicos y oficiales de Colombia. Nuestro archivo es una versión adaptada del original.

**Cómo llegan los datos hasta nosotros:**

1. **Muestras:** las autoridades sanitarias toman muestras de agua en la red de distribución y las analizan.
2. **Cálculo y reporte:** con esos resultados se calcula el IRCA, que llega al SIVICAP, el Subsistema de Vigilancia de la Calidad del Agua del Instituto Nacional de Salud (INS).
3. **Publicación:** el INS publica el promedio anual en datos.gov.co, el portal de datos abiertos de Colombia.
4. **Adaptación:** para el curso se dejó solo 2025 y se simplificó la tabla.

| Ficha de la fuente | |
|---|---|
| **Nombre** | [Calidad del Agua para Consumo Humano en Colombia](https://www.datos.gov.co/d/nxt2-39c3) |
| **Publica** | Instituto Nacional de Salud (INS) |
| **Categoría** | Salud y Protección Social |
| **Cobertura** | Desde 2007, por departamento, municipio y área urbana o rural |
| **Licencia** | Creative Commons Atribución-CompartirIgual 4.0 (CC BY-SA 4.0) |
| **Última actualización vista** | 4 de noviembre de 2026 |
| **Descarga para el curso** | 5 de noviembre de 2026 |

**Qué cambió frente al original** (detalle en [`datos/LEEME.md`](../datos/LEEME.md)):

1. Solo se conserva el año 2025.
2. Se eliminan las filas `#TODOS`, que son los totales por departamento.
3. Se eliminan las columnas de códigos y la de año, así que quedan 8 de las 11 columnas.
4. Se renombran columnas, por ejemplo `ircaurbano` → `irca_urbano`.
5. El valor `ND` (sin dato) queda como celda vacía, para que pandas y R lo lean como dato faltante.

**Vale la pena decirlo en clase:**

- Abre la página original durante un minuto. Ver la fuente real enseña a desconfiar de una tabla sin origen.
- Quien comparta una versión adaptada de estos datos debe citar la fuente y usar la misma licencia. Por eso las diapositivas dicen «Versión adaptada para el curso».
- Los datos del portal pueden cambiar. Nuestro CSV es una foto tomada en la fecha de descarga, así que una consulta nueva podría dar otras cifras.

---

## 4. Contexto del dataset

**Idea central:** el IRCA (Índice de Riesgo de la Calidad del Agua para consumo humano) resume en un puntaje de 0 a 100 qué tan lejos está el agua de cumplir las características físicas, químicas y microbiológicas exigidas. Entre más alto, mayor es el riesgo de enfermedades relacionadas con el agua.

**Por qué existe:** el Decreto 1575 de 2007 estableció el índice y la Resolución 2115 de 2007 reglamentó cómo se calcula y se clasifica. Sirve para vigilar el agua y decidir qué acciones tomar.

**Cómo se calcula, en una frase:** se compara lo que incumple con lo que se analizó.

```text
IRCA por muestra (%) = puntaje de las características no aceptables
                       ÷ puntaje de todas las características analizadas × 100
```

Con números inventados: si las características analizadas suman 50 puntos y las que incumplen suman 15, el IRCA es 30, es decir, riesgo medio. El IRCA mensual promedia las muestras del mes, y este dataset trae el promedio anual.

**Los niveles, con lo que se ve en nuestros datos:**

| Nivel | Rango del IRCA | Municipios en 2025 | % |
|---|---|---:|---:|
| Sin riesgo | 0 a 5 | 485 | 47.6 |
| Riesgo bajo | 5.1 a 14 | 286 | 28.1 |
| Riesgo medio | 14.1 a 35 | 184 | 18.1 |
| Riesgo alto | 35.1 a 80 | 60 | 5.9 |
| Inviable sanitariamente | 80.1 a 100 | 4 | 0.4 |

Los porcentajes están redondeados. El dataset tiene 1.019 municipios de 33 departamentos, contando a Bogotá, D.C., y al Archipiélago de San Andrés.

**Tres historias para contar:**

- **Más de la mitad no queda en «sin riesgo»:** 534 de 1.019 municipios (52.4 %) superan ese nivel.
- **La brecha entre campo y ciudad:** el IRCA rural promedio es 21.8 y el urbano, 8.6. De los 423 municipios con ambos datos, en 279 el rural es más alto.
- **Un mismo municipio, dos realidades:** en Amagá (Antioquia), el área urbana tiene 0.6 (sin riesgo) y la rural, 55.9 (riesgo alto).

**Pregunta al grupo:** ¿creen que el agua de su municipio sale sin riesgo? Déjala abierta y respóndanla con código en el bloque de filtros.

**Cuidados al interpretar:**

| Tentación | Lo correcto |
|---|---|
| «El IRCA dice cuánta gente se enfermó» | Mide el incumplimiento de las características del agua. Indica riesgo, no casos de enfermedad. |
| «Sin riesgo significa que siempre fue segura» | Es un promedio anual: puede esconder meses malos. |
| «Sin dato rural significa que no hay riesgo» | Un faltante no es un cero. A 587 municipios les falta el dato rural, y el dataset no explica por qué. |
| «`irca` es el promedio de urbano y rural» | No es un promedio simple. En Amagá, ese promedio daría 28.3 y `irca` es 31.3. |
| «El promedio rural y el urbano son comparables sin más» | Salen de grupos distintos: 432 municipios con dato rural y 1.010 con dato urbano. |
| «Están todos los municipios» | Solo están los que tienen dato en 2025. |

**Si un filtro no da lo esperado:**

- **El nombre puede ser distinto:** Cali aparece como `Santiago de Cali` y Cartagena, como `Cartagena de Indias`.
- **El nombre puede repetirse:** 53 nombres aparecen en más de un departamento y suman 122 filas. Por ejemplo, hay una Armenia en Antioquia (IRCA 0.0) y otra en Quindío (IRCA 1.0).
- **El caso más alto tiene letra pequeña:** Urrao (Antioquia) tiene el IRCA más alto, 97, pero no tiene dato urbano. Es un buen ejemplo de revisar los faltantes antes de concluir.

---

## 5. Qué es pandas

**Idea central:** pandas es una librería de Python para trabajar con tablas. Permite leer, explorar, filtrar y resumir datos con pocas líneas de código.

**Cómo exponerlo:**

1. **Qué es una librería:** código ya escrito por otras personas que podemos reutilizar. Python no trae pandas de fábrica, pero Colab ya lo tiene instalado.
2. **Qué hace cada parte de la línea:**

   ```python
   import pandas as pd
   ```

   `import` carga la librería y `pd` es su apodo, una convención que verán en casi todos los ejemplos en internet.

3. **Por qué usarla y no una hoja de cálculo:** los pasos quedan escritos. Se pueden repetir, revisar y compartir, y con otro archivo basta volver a ejecutarlos.

**Dato para motivar:** Wes McKinney empezó a construir pandas a inicios de 2008, trabajando en la firma de inversiones AQR Capital Management, y se liberó como código abierto a finales de 2009. El nombre viene de *panel data*, un término de econometría, y es también un juego de palabras con *Python data analysis*. No tiene que ver con los osos panda. Hoy es gratuita, con licencia BSD, y NumFOCUS la patrocina desde 2015.

**Hasta dónde llegar hoy:** `read_csv`, `head()`, `shape`, `columns`, `info()`, selección, filtros, `value_counts()`, `mean()` y una gráfica. El plan deja por fuera `groupby`, `merge` y la limpieza de datos, que se verán en R con dplyr. La meta es motivar, no dominar la librería.

---

## 6. Qué es un DataFrame

**Idea central:** un DataFrame es la tabla ya cargada en Python. Es una estructura de dos dimensiones, con filas y columnas, en la que cada columna puede tener un tipo de dato distinto. La documentación oficial lo compara con una hoja de cálculo, una tabla SQL o el `data.frame` de R, el lenguaje que empiezan en la sesión 5.

> Las diapositivas no tienen una lámina dedicada al DataFrame. Explícalo en vivo después de ejecutar `read_csv` y `head()`.

**Cómo exponerlo:**

```python
import pandas as pd

url = "https://raw.githubusercontent.com/YonyChaparro/CL---Introduccion-a-python-y-R/main/datos/agua_municipios_2025.csv"
df = pd.read_csv(url)

type(df)            # DataFrame: la tabla completa
type(df["irca"])    # Series: una sola columna
type(df[["irca"]])  # DataFrame: una tabla de una columna
```

Sobre la salida de `df.head()`, señala:

- **Índice:** los números de la izquierda (0, 1, 2…) identifican cada fila. Empiezan en 0, como en las listas, y no son una columna del CSV.
- **Columnas:** cada una tiene un nombre. Por eso `df["irca"]` funciona, y un nombre mal escrito produce `KeyError`.
- **Series:** cada columna de un DataFrame es una Series.
- **`NaN`:** así se muestra un dato faltante.

**Tres aclaraciones que evitan confusiones:**

- **`df` es solo un nombre de variable.** Es una convención y podría llamarse de otra forma.
- **El DataFrame no es el archivo.** Vive en la memoria de la sesión de Colab. Lo que hagamos con `df` no cambia el CSV, y al reiniciar la sesión hay que volver a leerlo.
- **`df["col"]` y `df[["col"]]` no son iguales.** Corchetes simples dan una Series; dobles, un DataFrame. Basta con mencionarlo.

**Si la salida de Colab se ve distinta:** depende de la versión de pandas. Estas salidas se probaron con pandas 3.1.1.

| Dónde | pandas 3.1.1 | Versiones anteriores |
|---|---|---|
| `type(df)` | `pandas.DataFrame` | `pandas.core.frame.DataFrame` |
| `df.info()` en columnas de texto | `str` | `object` |

Para esta sesión, ambas formas significan lo mismo.

---

## 7. Dónde encontrar recursos de pandas

**Si solo vas a recomendar tres a tus estudiantes:**

1. [Tutoriales de introducción](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html): los tres primeros cubren cómo leer, explorar y filtrar una tabla.
2. [Hoja de referencia (*cheat sheet*)](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf): un resumen en PDF para tener a mano.
3. [Tutorial en español de DataCamp](https://www.datacamp.com/es/tutorial/pandas-tutorial-dataframe-python): se lee sin pagar, aunque la página promociona cursos de pago y va más allá de esta sesión.

**Documentación oficial** (en inglés):

| Recurso | Para qué sirve |
|---|---|
| [Primeros pasos](https://pandas.pydata.org/docs/getting_started/index.html) | La puerta de entrada a todo lo demás |
| [¿Qué tipo de datos maneja pandas?](https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html) | Explicar DataFrame y Series |
| [Leer y escribir datos](https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html) | Profundizar en `read_csv` e `info()` |
| [Seleccionar datos](https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html) | Reforzar selección y filtros |
| [10 minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html) | Un recorrido rápido, mejor para ti que para principiantes |
| [Guía de usuario](https://pandas.pydata.org/docs/user_guide/index.html) | Estudiar un tema a fondo |
| [Referencia de `read_csv`](https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html) | Consultar sus parámetros |
| [Referencia de DataFrame](https://pandas.pydata.org/docs/reference/frame.html) | Buscar un método concreto |

**Para conectar con lo que ya saben:**

| Recurso | Para qué sirve |
|---|---|
| [pandas frente a hojas de cálculo](https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_spreadsheets.html) | Quienes vienen de Excel o Sheets |
| [pandas frente a R](https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_r.html) | Preparar las sesiones 5 a 8 |

**Para seguir aprendiendo:**

| Recurso | Para qué sirve |
|---|---|
| [*Python for Data Analysis*, 3.ª edición](https://wesmckinney.com/book/) | El libro del creador de pandas, con versión web de acceso abierto |
| [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas) | Tutoriales prácticos |
| [Tutoriales y libros de la comunidad](https://pandas.pydata.org/docs/getting_started/tutorials.html) | Una lista más amplia, recopilada por pandas |
| [Preguntas sobre pandas en Stack Overflow](https://stackoverflow.com/questions/tagged/pandas) | Buscar un error concreto |
| [datos.gov.co](https://www.datos.gov.co/) | Encontrar otros datos para practicar |

**Consejo para clase:** muestra cómo buscar. Por ejemplo, escribe `pandas read_csv` en un buscador y abre el resultado de `pandas.pydata.org`. También puedes mostrar `df.head?` en Colab, que abre la ayuda del método.

---

## Fuentes

Consultadas el 5 de noviembre de 2026. Las cifras del dataset se calcularon directamente con `datos/agua_municipios_2025.csv`.

- Instituto Nacional de Salud, [Calidad del Agua para Consumo Humano en Colombia](https://www.datos.gov.co/d/nxt2-39c3), datos.gov.co ([metadatos](https://www.datos.gov.co/api/views/nxt2-39c3)).
- Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial, [Resolución 2115 de 2007](https://normas.cra.gov.co/gestor/docs/resolucion_minproteccion_2115_2007.htm), artículos 13 a 16.
- Instituto Nacional de Salud, [boletín de la semana epidemiológica 39 de 2017](https://www.saludcapital.gov.co/CTDLab/Publicaciones/2017/Proteccion_y_Control_del_Agua_para_Consumo_Humano_INS.pdf), sobre vigilancia de la calidad del agua y clasificación del IRCA.
- pandas, [Acerca del proyecto](https://pandas.pydata.org/about/) y [licencia](https://github.com/pandas-dev/pandas/blob/main/LICENSE).
- Wes McKinney, [*Python for Data Analysis*, 3.ª edición, capítulo 1](https://wesmckinney.com/book/preliminaries).
- Y. Shafranovich, [RFC 4180: formato de los archivos CSV](https://www.rfc-editor.org/rfc/rfc4180), 2005.
