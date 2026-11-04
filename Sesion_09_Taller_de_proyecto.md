# Sesión 9 — Taller de proyecto

**Semana:** 5 · **Duración:** 2 horas · **Lenguaje:** Python y/o R (elección de cada grupo) · **Entorno:** Google Colab o Posit Cloud

## Objetivos de aprendizaje

Al finalizar la sesión, cada grupo podrá:

- Tener un análisis funcional que responda su pregunta, con al menos una gráfica.
- Aplicar de forma autónoma lo visto en el curso: leer, explorar, filtrar, resumir y graficar.
- Resolver errores por su cuenta (leyendo mensajes de error y buscando en la documentación).
- Tener un borrador de presentación para la sesión 10.

## Itinerario

| Hora | Bloque | Actividad |
|---|---|---|
| 0:00 – 0:10 | Apertura | Recordar la rúbrica y la estructura esperada del proyecto; cada grupo dice en qué punto está |
| 0:10 – 0:20 | Mini clase opcional | Tema de refuerzo según lo que más se necesite (ver abajo) |
| 0:20 – 1:05 | Trabajo en grupos — Fase 1 | Datos y análisis. Ronda de acompañamiento: ~7 minutos por grupo |
| 1:05 – 1:15 | Pausa | — |
| 1:15 – 1:45 | Trabajo en grupos — Fase 2 | Gráficas, conclusión y limpieza del código. Segunda ronda de acompañamiento |
| 1:45 – 1:55 | Revisión cruzada | Cada grupo intercambia su notebook con otro y verifica que se ejecute de principio a fin |
| 1:55 – 2:00 | Cierre | Recordar formato y tiempos de la presentación |

## Mini clase de refuerzo (elegir una según el grupo)

- **Limpieza básica de datos:** valores faltantes (`dropna()` en pandas / `drop_na()` en R), renombrar columnas.
- **Gráficas más claras:** títulos, etiquetas, ordenar barras, evitar demasiadas categorías.
- **Cómo buscar ayuda:** leer la documentación, buscar el mensaje de error, usar `help()` / `?funcion`.
- **Repaso de agrupar y resumir:** el tema que más suele costar.

## Estructura sugerida del notebook / script

1. **Título e integrantes**
2. **Pregunta:** una frase clara.
3. **Los datos:** de dónde vienen, cuántas filas y columnas, qué significan las columnas principales.
4. **Exploración:** primeras filas y algún resumen.
5. **Análisis:** filtros, transformaciones y resúmenes, cada paso con un comentario que explique por qué.
6. **Visualización:** al menos una gráfica con título y ejes claros.
7. **Conclusión:** qué respondieron, en lenguaje sencillo, y qué limitaciones tienen los datos.

## Lista de verificación para cada grupo

- [ ] La pregunta está escrita al inicio.
- [ ] El código se ejecuta completo, de arriba abajo, sin errores (usar "Reiniciar y ejecutar todo").
- [ ] Hay al menos una gráfica con título y ejes con nombre.
- [ ] Cada paso tiene un comentario o celda de texto que lo explica.
- [ ] Hay una conclusión escrita.
- [ ] Todos los integrantes pueden explicar cualquier parte del código.

## Guía de acompañamiento (para el docente)

En cada ronda por grupo, hacer estas preguntas en lugar de dar la solución:

- ¿Qué quieren responder exactamente?
- ¿Qué columna(s) necesitan para eso?
- ¿Qué dice el error? ¿En qué línea está?
- ¿Qué gráfica responde mejor su pregunta?
- Si tuvieran que explicarle esto a alguien de otra carrera, ¿qué le dirían?

## Para la próxima sesión

- Terminar el proyecto y preparar una presentación de **10 minutos** (más 5 de preguntas).
- Estructura sugerida de la presentación:
  1. Pregunta y por qué les interesa (1 min).
  2. Los datos (1–2 min).
  3. Cómo lo resolvieron: mostrar las partes clave del código (3 min).
  4. Resultados y gráfica (3 min).
  5. Conclusión y qué harían con más tiempo (1–2 min).
- Todos los integrantes deben hablar.
- Enviar el enlace al notebook/script antes de la sesión 10.

## Notas para el docente

- Esta sesión es también el **colchón** del curso: si alguna semana se atrasó, aquí se puede usar la mini clase para nivelar.
- Con 6 grupos, una ronda completa toma unos 40 minutos; conviene llevar una lista para no olvidar a ningún grupo.
- Vigilar grupos donde una sola persona escribe todo el código: pedir que roten el teclado.
- Las señales verde/rojo siguen funcionando aquí, ahora por grupo.
