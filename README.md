# Kanu Sport — Ropa Deportiva Artesanal
 
Landing page publicitaria de **Kanu Sport**, una marca que fusiona ropa deportiva de alto rendimiento con bordados hechos a mano por maestras artesanas de Oaxaca.
 
El sitio es un catálogo de exhibición: presenta la marca, sus modelos, la historia del taller y un formulario para que los interesados dejen sus datos y soliciten informes, cotizaciones o el catálogo completo. No incluye carrito ni compra en línea.
 
Proyecto desarrollado durante un hackatón en equipo.
 
---
 
## Equipo
 
| Integrante | Bloque a cargo |
|---|---|
| **Selene Kanagusico** | Header, Hero Section y Footer + ensamble final |
| **Abraham Ortiz** | Valor diferencial y galería visual de artesanías |
| **Daniel Rosas** | Showcase / catálogo de modelos |
| **Gonzalo Vargas** | Historia, proceso artesanal y visita al taller |
| **Hannia Victoria** | Formulario de contacto y captación de clientes |
 
---
 
## Tecnologías
 
- HTML5
- CSS3 (variables personalizadas para la paleta)
- Bootstrap 5.3 (grid y componentes)
- JavaScript (validación del formulario y scroll suave)
- Google Fonts: Bebas Neue y Montserrat
---
 
## Estructura del proyecto
 
```
TiendaDeportiva-HACKATON/
├── css/
│   └── styles.css      Paleta, estilos globales y estilos de cada bloque
├── js/
│   └── main.js         Interacciones y validación del formulario
├── imagenes/           Fotografías de productos y del taller
└── index.html          Ensamble final de todas las secciones
```
 
### Orden de las secciones en `index.html`
 
1. Header y Hero Section
2. Valor diferencial y beneficios
3. Catálogo de modelos
4. Historia y proceso artesanal
5. Formulario de contacto
6. Footer
---
 
## Paleta de colores
 
| Color | Hex | Uso |
|---|---|---|
| Turquesa activo | `#00A3A6` | Bloques destacados y botones principales (CTAs) |
| Rojo artesanal | `#D33F31` | Promociones y botones de acento |
| Negro deportivo | `#121212` | Bloques oscuros (Hero / Footer) y textos principales |
| Blanco | `#FFFFFF` | Tarjetas, contenedores y texto sobre fondos oscuros |
| Gris fondo | `#F4F5F7` | Fondo general de la página |
| Gris texto | `#555555` | Textos secundarios y descripciones |
| Turquesa hover | `#008285` | Hover de botones turquesa |
| Rojo hover | `#B32F23` | Hover de botones rojos |
 
Las variables están definidas en `:root` al inicio de `css/styles.css` y se usan así:
 
```css
background: var(--c-turquesa-activo);
```
 
---
 
## Cómo verlo
 
1. Clona el repositorio:
```bash
   git clone https://github.com/GonzaloVargas-12/TiendaDeportiva-HACKATON.git
```
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` en el navegador, o usa la extensión **Live Server** para recargar automáticamente al guardar.
No requiere instalación ni dependencias: Bootstrap y las fuentes se cargan por CDN.

```