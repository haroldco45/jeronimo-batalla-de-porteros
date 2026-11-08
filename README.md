# Jerónimo · Batalla de Porteros 2026

App recuerdo (PWA) de Jerónimo, ganador de la ronda clasificatoria de la Batalla de Porteros 2026 de la Academia de Porteros JuanP, en Caucasia, Antioquia.

**Netlify:** https://batalla-de-porteros.netlify.app/
**Repo:** haroldco45/jeronimo-batalla-de-porteros

## Qué tiene
- Portada con la atajada en cámara lenta de fondo y el nombre animado
- Ficha del día: resultado, fase, torneo, categoría, organizador y lugar
- Video completo con sonido y dos atajadas en cámara lenta
- Galería de atajadas con visor a pantalla completa
- El cuadro del torneo con brillo e inclinación al tocarlo
- Foto con su papá Luis y enlace a la app de su hermano Benjamín
- Carta "para leer cuando seas grande"
- Mensajes de felicitación (se guardan en el celular y se envían por WhatsApp a Luis, el papá de Jerónimo)
- Botón para felicitar a Luis directamente por WhatsApp
- Botones para compartir por WhatsApp, compartir y copiar enlace
- Español / inglés
- Instalable (manifest + service worker) y vista previa del enlace con foto real

## Archivos
```
index.html
manifest.json
sw.js
README.md
fonts/ (letras Barlow, para que funcione sin internet)
img/   (fotos, íconos, og-jeronimo.jpg 1200×630, posters)
video/ (jeronimo-ronda-clasificatoria.mp4, atajada-camara-lenta-1.mp4, atajada-camara-lenta-2.mp4)
```

## Publicar
1. Crear el repo `jeronimo-batalla-de-porteros` en GitHub (haroldco45) y subir todo respetando las carpetas `img/` y `video/`.
2. En Netlify: Add new site → Import from GitHub → elegir el repo → nombre del sitio `jeronimo-batalla-de-porteros`.
3. Si se cambia el nombre del sitio, cambiar la URL en `index.html` (etiquetas og/twitter y la constante `URL_APP`).

La página lleva `noindex` para que no aparezca en Google: es un recuerdo de un niño y se comparte solo por enlace.

---
Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados
