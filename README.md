# APA Soluciones Gastronómicas — Landing Page

> **Eficiencia profesional con sabor artesanal.**
> Landing page para APA Soluciones Gastronómicas: viandas para empresas, productos *ready-to-cook* para el hogar e insumos para restaurantes (HoReCa).

---

## 📁 Estructura del proyecto

```
.
├── APA Soluciones Gastronomicas.html   # Vista canvas con las 2 opciones lado a lado + panel Tweaks
├── Opcion A.html                       # Opción A — Corporativo Editorial (standalone)
├── Opcion B.html                       # Opción B — Mercado Cálido (standalone)
│
├── option-a.jsx                        # Componente OptionA
├── option-b.jsx                        # Componente OptionB
│
├── assets/
│   ├── data.js                         # Datos por defecto (textos, productos, contacto)
│   ├── logo.jsx                        # Logo APA en SVG
│   ├── placeholders.jsx                # Placeholders de imagen + iconografía
│   └── widgets.jsx                     # ChatWidget + ContactForm (manejan webhooks)
│
├── design-canvas.jsx                   # Canvas pan/zoom para comparar opciones
├── tweaks-panel.jsx                    # Panel de edición en vivo
└── uploads/                            # Referencias e imágenes subidas
```

---

## 🚀 Cómo correrlo localmente

No necesita build. Es HTML + React + Babel inline.

```bash
# Opción 1 — Python
python3 -m http.server 8000

# Opción 2 — Node
npx serve .

# Opción 3 — PHP
php -S localhost:8000
```

Después abrí `http://localhost:8000/Opcion%20A.html` (o B, o el archivo del canvas).

> ⚠️ **No abras los archivos con `file://`** — Babel necesita servirse por HTTP para cargar los `.jsx`.

---

## 🎨 Las 3 vistas

| Archivo | Para qué sirve |
|---|---|
| **APA Soluciones Gastronomicas.html** | Comparación lado a lado de ambas opciones + panel **Tweaks** (editás textos, productos, colores y webhooks en vivo, se guarda en disco). |
| **Opcion A.html** | Versión **Corporativo Editorial** — azul marino dominante, layout asimétrico, B2B-first. |
| **Opcion B.html** | Versión **Mercado Cálido** — naranja dominante, hero con plato circular, sensación de almacén gourmet. |

---

## 🔌 Webhooks configurados

Los webhooks están guardados en `APA Soluciones Gastronomicas.html` (bloque `EDITMODE-BEGIN`). En las versiones standalone (`Opcion A.html` / `Opcion B.html`) se leen de `assets/data.js`.

| Función | Variable | URL actual |
|---|---|---|
| Formulario de contacto | `formWebhook` | `https://n8n-prod-lucas.duckdns.org/webhook/lead-web` |
| Chat flotante | `chatWebhook` | `https://n8n-prod-lucas.duckdns.org/webhook/whatsapp-viandas` |

### Payloads esperados

**Formulario** (`POST` JSON al `formWebhook`):
```json
{
  "tipo": "empresa",            // "particular" | "empresa"
  "nombre": "Juan Pérez",
  "empresa": "ACME S.A.",       // o localidad si tipo=particular
  "email": "juan@acme.com",
  "telefono": "+54 11 5555 0000",
  "mensaje": "...",
  "empleados": "50-200",        // solo si tipo=empresa
  "source": "apa-landing"
}
```

**Chat** (`POST` JSON al `chatWebhook`, debe responder JSON):
```json
// Request
{
  "message": "Hola, quiero un presupuesto",
  "history": [{ "from": "bot", "text": "..." }, { "from": "user", "text": "..." }]
}

// Response esperado (cualquiera de estas claves funciona)
{ "reply": "Texto del asistente" }
// o { "message": "..." } o { "text": "..." }
```

> Si el webhook no devuelve JSON válido, el chat muestra "Recibido. Te respondemos en breve."

### Cómo cambiar los webhooks
1. Abrí `APA Soluciones Gastronomicas.html` en el preview.
2. Activá el botón **Tweaks** (esquina inferior derecha).
3. Editá **Webhook formulario** / **Webhook chat** — se guardan en disco automáticamente.

Para las versiones standalone, editá directamente `assets/data.js` (campos `formWebhook` y `chatWebhook` al final).

---

## ✏️ Cómo editar contenido

### Desde el panel Tweaks (recomendado)
Abrí `APA Soluciones Gastronomicas.html` y activá Tweaks. Podés editar:
- Textos del hero, servicios, diferenciales, HoReCa, cierre y contacto.
- Los 16 productos del catálogo (nombre, descripción, precio).
- Colores de marca (naranja y azul marino).
- Saludo del chat y URLs de webhooks.

Los cambios se persisten en el bloque `EDITMODE-BEGIN ... EDITMODE-END` del HTML.

### Desde código
- Textos por defecto y productos: `assets/data.js`.
- Layout, colores específicos, espaciados: `option-a.jsx` / `option-b.jsx`.
- Logo: `assets/logo.jsx` (SVG inline, recreación de la marca).

---

## 🖼️ Cómo agregar imágenes reales

Hoy las imágenes son **placeholders rayados con etiqueta** (componente `<FoodPlaceholder/>` en `assets/placeholders.jsx`). Cuando tengas las fotos:

### Paso 1 — Subir las fotos
Creá la carpeta `assets/img/` y poné los archivos ahí. Recomendado:
```
assets/img/
├── hero-a.jpg            # Hero opción A (4:5, ~1200×1500)
├── hero-b.jpg            # Hero opción B (1:1, cuadrada, ~1400×1400)
├── servicio-empresas.jpg # Servicios (16:9 o 1:1)
├── servicio-hogar.jpg
├── carnes-1.jpg ... carnes-4.jpg
├── aves-1.jpg ... aves-4.jpg
├── pastas-1.jpg ... pastas-4.jpg
└── salud-1.jpg ... salud-4.jpg
```

**Tamaños sugeridos:**
- Hero principal: **1600×2000 px** (4:5)
- Productos del catálogo: **800×800 px** (1:1) o **800×1000 px** (4:5)
- Servicios: **1200×900 px** (4:3)
- Formato: JPG (calidad 80) o WebP. Idealmente <300 KB cada una.

### Paso 2 — Reemplazar `<FoodPlaceholder>` por `<img>`
En `option-a.jsx` y `option-b.jsx`, buscá usos como:
```jsx
<FoodPlaceholder label="Plato terminado · hero" aspect="4/5" rounded={16}/>
```
Y reemplazalos por:
```jsx
<img src="assets/img/hero-a.jpg" alt="Plato terminado"
     style={{ width:'100%', aspectRatio:'4/5', objectFit:'cover', borderRadius:16 }}/>
```

> **Tip:** si querés mantener la edición fácil de imágenes, mové las URLs a `assets/data.js` (campo `images: { heroA: '...', carnes1: '...' }`) y leelas desde los componentes — así las podés cambiar desde un solo lugar.

---

## 🎠 Sobre el carrusel — ¿es funcional?

**Hoy:** muestra los **4 productos visibles a la vez en grid**. Las flechas (←/→) están dibujadas pero **no navegan todavía** — es una decisión de diseño: con solo 4 productos por categoría, el grid se entiende mejor que un slider.

**Cuando lo activemos como carrusel real**, hay 3 caminos posibles:

1. **Slider horizontal con scroll-snap** *(simple, recomendado si vas a tener 6-12 productos por categoría).*
   - Flechas funcionales + arrastre con mouse/touch.
   - CSS: `scroll-snap-type: x mandatory`.

2. **Carrusel con paginación tipo Embla / Swiper** *(si querés autoplay, indicadores de página, transiciones suaves).*
   - Necesita una lib chica (`embla-carousel ~10KB`).

3. **Tabs con grid** *(lo de la Opción A).*
   - Si vas a tener categorías con muchos productos, conviene combinar tabs + paginación numerada.

**Para activarlo necesito que me digas:**
- ¿Cuántos productos vas a tener por categoría? (4 / 8 / +12)
- ¿Querés que avance solo (autoplay) o solo manual?
- ¿Mostrar indicadores de página (puntos) o solo flechas?

---

## 🧰 Stack técnico

- **React 18.3** + **Babel Standalone** (sin build, sin Vite, todo inline).
- **HTML + JSX** servidos como `text/babel` para edición rápida.
- **Tipografías:** Plus Jakarta Sans + Inter (Google Fonts).
- **Iconografía:** SVG inline propio (sin librería externa).
- **Sin dependencias de runtime** más allá de React y Babel desde unpkg.

---

## 📦 Subir a Git

```bash
# 1. Inicializar repo
git init
git add .
git commit -m "feat: landing inicial APA con 2 opciones + chat + form"

# 2. Crear repo remoto en GitHub/GitLab y conectarlo
git remote add origin git@github.com:TU_USUARIO/apa-landing.git
git branch -M main
git push -u origin main
```

### `.gitignore` recomendado
```
.DS_Store
node_modules/
.vscode/
*.log
uploads/.thumbnails/
```

> Los webhooks están **hardcoded** en el HTML porque el sitio es estático y los expone igual al cliente. Si querés ocultarlos, hay que agregar un proxy intermedio (Cloudflare Worker / Vercel Function / un backend propio).

---

## 🚢 Deploy rápido

| Plataforma | Comando |
|---|---|
| **Vercel** | `vercel` (autodetecta como estático) |
| **Netlify** | Arrastrar la carpeta a `app.netlify.com/drop` |
| **Cloudflare Pages** | Conectar repo → build command vacío → output `/` |
| **GitHub Pages** | Push a rama `gh-pages` o activar Pages desde Settings |

No necesita configuración de build — son archivos estáticos.

---

## 📝 Pendientes

- [ ] Reemplazar placeholders por fotos reales de food styling.
- [ ] Reemplazar logo SVG por la versión vectorial original (si existe).
- [ ] Decidir si el carrusel del catálogo debe ser funcional + cuántos productos por categoría.
- [ ] Agregar páginas internas: `/viandas-empresas`, `/market-hogar`, `/nosotros` (hoy es one-page).
- [ ] SEO: meta tags, OpenGraph, sitemap.xml, robots.txt.
- [ ] Probar webhooks de n8n end-to-end.

---

## 📞 Contacto

**APA Soluciones Gastronómicas** — Buenos Aires, Argentina
- Email: hola@apa-gastronomicas.com.ar
- Teléfono: +54 11 5555 0123

---

*Eficiencia profesional con sabor artesanal.* 🍽️
