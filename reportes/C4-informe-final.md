# C4 — Informe de pruebas de rendimiento y SEO

## Objetivo
Evaluar el rendimiento, la estabilidad visual, el SEO y la interacción
del sitio Marin Industries conforme al plan de pruebas C4.

## Herramientas
- Lighthouse CI
- Playwright

## Alcance
Cinco páginas evaluadas en móvil y escritorio.
Tres ejecuciones por página y dispositivo, antes y después
de la optimización.

Total: 60 auditorías Lighthouse.

## Resultados de rendimiento

| Página | Móvil inicial | Móvil posterior | Escritorio inicial | Escritorio posterior |
|---|---:|---:|---:|---:|
| Inicio | 98 | 97 | 99 | 99 |
| Servicios | 99 | 98 | 100 | 99 |
| Tienda | 73 | 92 | 75 | 98 |
| Producto | 74 | 96 | 88 | 99 |
| Cotización | 98 | 97 | 100 | 99 |

## Resultados relevantes

### Tienda
- LCP móvil: 13.443 s → 2.626 s.
- LCP escritorio: 4.616 s → 0.818 s.
- Peso móvil: 4.348 MB → 0.638 MB.

### Producto
- LCP móvil: 10.243 s → 2.565 s.
- LCP escritorio: 2.279 s → 0.657 s.
- Peso móvil: 1.774 MB → 0.452 MB.

## Optimización aplicada
Se implementó next/image para las imágenes de productos,
configurando dimensiones, tamaños responsivos y prioridad
de carga para la imagen principal del detalle.

Commit: 0bd05e8.

## Incumplimientos y observaciones

### C4-D01 — LCP móvil superior al límite
- Tienda: 2.626 s.
- Producto: 2.565 s.
- Límite: 2.5 s.
- Estado: Pendiente de corrección.

### C4-D02 — Tiempo de interacción del carrito
- Tiempo observado con Playwright: 347.03 ms.
- Referencia: 200 ms.
- Observación: el tiempo medido no representa el INP real.
- Estado: Requiere evaluación conforme a la métrica correspondiente.

### C4-O01 — SEO en entorno Preview
- SEO inicial en producción: 100.
- SEO posterior en Preview: 63.
- Lighthouse detectó bloqueo de indexación (is-crawlable).
- No se ha demostrado una regresión SEO en producción.
- Estado: Observación del entorno de pruebas.

## Limitaciones
Las mediciones iniciales se realizaron en producción y las
posteriores en un despliegue Preview. La comparación permite
observar mejoras, pero no constituye una comparación bajo
condiciones de despliegue idénticas.

## Conclusión
La prueba C4 fue ejecutada y permitió identificar mejoras
significativas de rendimiento y reducción de peso de página.

Los resultados de escritorio cumplen los límites de rendimiento,
LCP y CLS evaluados. Persisten dos incumplimientos de LCP móvil
y una medición de interacción que requiere distinguirse del INP real.

Resultado final: EJECUTADA CON OBSERVACIONES.
No se declara aprobación completa de todos los criterios.
