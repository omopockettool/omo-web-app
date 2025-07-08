# OMO - Landing Page

**On My Own** - Suite de Apps Móviles

![OMO Preview](preview.png)

## 🌟 Descripción

OMO (On My Own) es una suite de apps móviles diseñada como herramientas de bolsillo o "pocket tools" que ayudan al individuo en su día a día a encontrarse consigo mismo, a ordenarse, a expandirse y a vivir mejor.

Esta landing page presenta el progreso de desarrollo de cada una de las 7 aplicaciones que conforman la suite OMO, cada una asociada a un chakra específico con su color correspondiente y funcionalidad única.

### 🌈 Mapeo de Chakras y Colores
- **Chakra Raíz (Muladhara)**: Rojo `#F44336` - OMO Money
- **Chakra Sacro (Svadhisthana)**: Naranja `#FF9800` - OMO Crea  
- **Chakra Ombligo (Manipura)**: Amarillo `#FFEB3B` - OMO Control
- **Chakra Corazón (Anahata)**: Verde `#4CAF50` - OMO Genius Bridge
- **Chakra Garganta (Vishuddha)**: Azul `#03A9F4` - OMO Express
- **Chakra Tercer Ojo (Ajna)**: Índigo `#3F51B5` - OMO Totem
- **Chakra Corona (Sahasrara)**: Violeta `#991fff` - OMO Dreams

## 🎯 Aplicaciones de la Suite

### 🔴 OMO Money - Chakra Raíz (Muladhara)
Aplicación para la gestión financiera personal y estabilidad económica.

### 🟠 OMO Crea - Chakra Sacro (Svadhisthana)
Herramienta para potenciar la creatividad y la expresión artística.

### 🟡 OMO Control - Chakra Ombligo (Manipura)
Aplicación para el manejo del control personal, disciplina y poder personal.

### 🟢 OMO Genius Bridge - Chakra Corazón (Anahata)
Herramienta para el desarrollo intelectual, aprendizaje y conexión emocional.

### 🔵 OMO Express - Chakra Garganta (Vishuddha)
Plataforma para la expresión personal, comunicación y verdad interior.

### 🟣 OMO Totem - Chakra Tercer Ojo (Ajna)
Centro espiritual, intuición y conexión con la sabiduría interior.

### 🟣 OMO Dreams - Chakra Corona (Sahasrara)
Aplicación para el seguimiento de sueños, metas y conexión espiritual superior.

## 🚀 Características

- **Diseño Circular**: Visualización intuitiva con un círculo central y 7 aplicaciones alrededor
- **Progress Bars**: Cada aplicación muestra su progreso de desarrollo de 0% a 100%
- **Interactivo**: Hover y click para mostrar información detallada
- **Responsive**: Adaptado para dispositivos móviles y desktop
- **Animaciones**: Transiciones suaves y efectos visuales elegantes
- **Actualizable**: Sistema dinámico para actualizar el progreso de desarrollo

## 💻 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con Flexbox, Grid y animaciones
- **JavaScript Vanilla**: Interactividad sin dependencias externas
- **Google Fonts**: Tipografía Inter para un diseño elegante

## 📁 Estructura del Proyecto

```
omo-landing/
├── index.html              # Página principal
├── styles.css              # Estilos y diseño
├── script.js               # Funcionalidad interactiva
├── assets/                 # Iconos de las aplicaciones
│   ├── OMO_Control.png
│   ├── OMO_Crea.png
│   ├── OMO_Dreams.png
│   ├── OMO_Express.png
│   ├── OMO_Genius.png
│   ├── OMO_Money.png
│   └── OMO_Totem.png
├── README.md               # Este archivo
├── .gitignore              # Archivos a ignorar en Git
└── CHANGELOG.md            # Historial de cambios
```

## 🛠️ Instalación y Uso

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/omo-landing.git
cd omo-landing
```

### Ejecutar localmente
Simplemente abre `index.html` en tu navegador web favorito, o utiliza un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

### Personalizar el progreso
Para actualizar el progreso de una aplicación:

```javascript
// En la consola del navegador
OMO.updateProgress('control', 85);  // Actualiza OMO Control al 85%
OMO.updateProgress('dreams', 50);   // Actualiza OMO Dreams al 50%

// Ver progreso actual
OMO.getProgress();
```

## 🎨 Personalización

### Cambiar el logo central
En `index.html`, línea 32, descomenta y ajusta:
```html
<img src="tu-logo.png" alt="OMO Logo" class="central-image">
```

### Modificar colores
En `styles.css`, ajusta las variables de color en el gradiente principal:
```css
background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
```

### Actualizar iconos
Reemplaza las imágenes en la carpeta `assets/` manteniendo los nombres actuales.

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: Experiencia completa con hover effects
- **Tablet**: Diseño adaptado para pantallas medianas
- **Mobile**: Layout compacto y táctil

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Dennis** - Creador de OMO

Proyecto Link: [https://github.com/tu-usuario/omo-landing](https://github.com/tu-usuario/omo-landing)

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!

---

*"On My Own - Herramientas para encontrarte contigo mismo"* 