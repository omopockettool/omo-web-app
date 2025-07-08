# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere al [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Sin publicar]

### Agregado
- Funcionalidad para tooltips informativos en hover
- Efectos de hover mejorados para mejor UX
- Mapeo completo de colores de chakras
- Migración de imágenes a carpeta `assets/` para mejor organización
- Actualización de nombres de archivos eliminando espacios (usando guiones bajos)
- Tooltips mejorados con descripciones de cada app
- Tooltip informativo en el círculo central con descripción de OMO
- Preparación para redirección a App Store (placeholder en alerts)
- Sistema de estado de apps (live/disabled) en lugar de progreso
- Badges "LIVE" animados para apps activas
- Footer minimalista con enlaces de navegación
- Diseño de una sola pantalla sin scroll
- Footer simplificado sin fondo ni bordes
- Sistema de estado de apps simplificado sin badges LIVE
- Layout de círculos corregido para mostrar todos los 7 círculos correctamente

### Cambiado
- Corregida la asociación de apps con chakras según especificaciones
- Actualizados los colores específicos para cada chakra:
  * OMO Money - Rojo (#F44336) - Chakra Raíz
  * OMO Crea - Naranja (#FF9800) - Chakra Sacro
  * OMO Control - Amarillo (#FFEB3B) - Chakra Ombligo
  * OMO Genius Bridge - Verde (#4CAF50) - Chakra Corazón
  * OMO Express - Azul (#03A9F4) - Chakra Garganta
  * OMO Totem - Índigo (#3F51B5) - Chakra Tercer Ojo
  * OMO Dreams - Violeta (#991fff) - Chakra Corona
- Rediseño minimalista y plano:
  * Fondo cambiado a #fbeee6
  * Texto en negro (#000)
  * Eliminados todos los gradientes
  * Eliminadas sombras y efectos
  * Bordes simples en negro
  * Animaciones simplificadas
- Sistema de apps simplificado:
  * Apps bloqueadas en gris (#9E9E9E)
  * Apps activas con colores de chakra
  * Eliminado sistema de progreso
  * Tooltips actualizados con estado de disponibilidad

### Deprecated
- N/A

### Removido
- N/A

### Arreglado
- N/A

### Seguridad
- N/A

## [1.0.0] - 2024-01-20

### Agregado
- Página landing inicial para la suite OMO
- Diseño circular con 7 aplicaciones alrededor del centro
- Progress bars que se llenan desde abajo hacia arriba
- Sistema interactivo de progreso para cada aplicación
- Sección hero con descripción de OMO
- Leyenda de estado de desarrollo
- Diseño responsive para móviles y desktop
- Animaciones CSS para carga inicial
- Funcionalidad JavaScript para interactividad
- Tooltip system para mostrar información de progreso
- API JavaScript para actualización dinámica de progreso

### Características Técnicas
- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript Vanilla (sin dependencias)
- Google Fonts (Inter) para tipografía elegante
- Gradientes y efectos visuales modernos
- Arquitectura modular y escalable

### Apps Incluidas
- **OMO Money** (90% completado) - Chakra Raíz - Gestión financiera personal
- **OMO Crea** (10% completado) - Chakra Sacro - Herramienta de creatividad  
- **OMO Control** (75% completado) - Chakra Ombligo - Gestión de control personal
- **OMO Genius Bridge** (45% completado) - Chakra Corazón - Desarrollo intelectual
- **OMO Express** (80% completado) - Chakra Garganta - Plataforma de expresión personal
- **OMO Totem** (25% completado) - Chakra Tercer Ojo - Centro espiritual
- **OMO Dreams** (0% completado) - Chakra Corona - Seguimiento de sueños y metas

### Documentación
- README.md completo con instrucciones de uso
- .gitignore configurado para desarrollo web
- Estructura de proyecto organizada
- Ejemplos de personalización y extensión

---

## Tipos de cambios

- `Agregado` para nuevas características.
- `Cambiado` para cambios en funcionalidad existente.
- `Deprecated` para características que se removerán pronto.
- `Removido` para características removidas.
- `Arreglado` para cualquier bug fix.
- `Seguridad` en caso de vulnerabilidades. 