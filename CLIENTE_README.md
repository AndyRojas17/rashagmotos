# Guía de actualización del sitio web

Bienvenido a la guía de tu sitio web. Aquí encontrarás cómo actualizar el contenido sin necesidad de conocimientos técnicos.

---

## ¿Qué puedes actualizar tú mismo?

Puedes actualizar los siguientes contenidos editando archivos en la carpeta `src/content/`:

### Motos destacadas (`src/content/motos/`)
Cada moto tiene su propio archivo (moto-01.md, moto-02.md, etc.). Puedes editar:
- `nombre` — nombre del modelo
- `precio` — ejemplo: `"S/ 4,500"`
- `cilindrada` — ejemplo: `"150cc"`
- `uso` — solo puede ser: `Trabajo`, `Ciudad`, `Campo` o `Carga`
- `foto` — ruta a la foto en `/public/images/motos/`
- `mensaje_wa` — mensaje pre-escrito que verá el cliente en WhatsApp
- `orden` — número del 1 al 6 para ordenar las cards
- `activa` — `true` para mostrar, `false` para ocultar

### Marcas representadas (`src/content/marcas/`)
Cada marca tiene su archivo. Puedes editar nombre y logo.

### Galería del local (`src/content/galeria/`)
Hasta 8 fotos. Agrega el archivo de imagen a `/public/images/local/` y actualiza la ruta en el archivo correspondiente.

### Información del local (`src/content/local/index.md`)
- `direccion` — dirección física
- `horario` — horario de atención
- `taller_foto` — foto del taller
- `servicios` — lista de servicios del taller
- `hero_imagen` — imagen principal del hero
- `hero_linea_confianza` — frase de confianza en el hero
- `hero_cobertura` — texto sobre envíos/cobertura

### Financiamiento (`src/content/financiamiento/index.md`)
- `desde` — monto referencial de cuotas
- `notas` — lista de puntos informativos

---

## ¿Qué NO debes modificar?

Los siguientes archivos son configuración técnica. Solo los toca el implementador:
- `src/config/site.ts` — colores, WhatsApp, RUC, razón social, RRSS
- `src/layouts/Layout.astro`
- `astro.config.mjs`, `tailwind.config.mjs`

---

## ¿Cómo agregar una foto?

1. Copia la foto a la carpeta correspondiente en `public/images/`
   - Motos: `public/images/motos/`
   - Local/Galería: `public/images/local/`
2. En el archivo .md correspondiente, escribe la ruta: `/images/motos/nombre-de-tu-foto.jpg`
3. Guarda el archivo y espera que el sitio se actualice (aprox. 1 minuto).

**Formatos recomendados:** JPG o WebP. Tamaño máximo recomendado: 500 KB por foto.

---

## Soporte técnico

Para cambios de colores, logo, WhatsApp, redes sociales u otros cambios técnicos, contacta a tu implementador.
