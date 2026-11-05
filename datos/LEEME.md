# Dataset del curso

`agua_municipios_2025.csv`: Índice de Riesgo de la Calidad del Agua para consumo humano (IRCA) por municipio, año 2025. Tiene 1.019 filas y 8 columnas.

- **Fuente:** Instituto Nacional de Salud (SIVICAP), [Calidad del Agua para Consumo Humano en Colombia](https://www.datos.gov.co/d/nxt2-39c3), datos.gov.co. Descargado el 5 de noviembre de 2026.
- **Licencia:** Creative Commons Atribución-CompartirIgual 4.0 (CC BY-SA 4.0). Esta versión adaptada se comparte bajo la misma licencia.

## Cambios frente al original

1. Solo se conserva el año 2025.
2. Se eliminan las filas `#TODOS`, que son los totales por departamento.
3. Se eliminan las columnas de códigos y la columna de año.
4. Se renombran las columnas: `nivel_de_riesgo` → `nivel`, `ircaurbano` → `irca_urbano`, `nivel_de_riesgo_urbano` → `nivel_urbano`, `ircarural` → `irca_rural`, `nivel_de_riesgo_rural` → `nivel_rural`.
5. El valor `ND` (sin dato) queda como celda vacía, para que pandas y R lo lean como dato faltante.

## Columnas

| Columna | Tipo | Descripción |
|---|---|---|
| `departamento` | texto | Departamento |
| `municipio` | texto | Municipio |
| `irca` | decimal | IRCA promedio anual del municipio (0 a 100) |
| `nivel` | texto | Nivel de riesgo: Sin riesgo, Riesgo bajo, Riesgo medio, Riesgo alto o Inviable sanitariamente |
| `irca_urbano` | decimal | IRCA del área urbana (9 faltantes) |
| `nivel_urbano` | texto | Nivel de riesgo del área urbana (9 faltantes) |
| `irca_rural` | decimal | IRCA del área rural (587 faltantes) |
| `nivel_rural` | texto | Nivel de riesgo del área rural (587 faltantes) |

El archivo solo incluye los municipios con dato en 2025, así que no están todos los del país.
