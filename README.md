# Portafolio profesional - Brayan Stiven Gómez Villa

Proyecto evaluativo desarrollado para la asignatura Ingeniería Web. El objetivo principal es construir una hoja de vida interactiva y responsive basada en un diseño de referencia en Figma, utilizando tecnologías modernas del ecosistema frontend.

## Descripción del proyecto

Este proyecto corresponde a un portafolio profesional desarrollado con Next.js, React, TypeScript y Tailwind CSS. La aplicación presenta información personal, datos de contacto, habilidades técnicas, conocimientos, formación académica y proyectos destacados de Brayan Stiven Gómez Villa.

El diseño está inspirado en la estructura propuesta por el docente, pero fue personalizado con una paleta verde, modo oscuro, carrusel de proyectos, modales informativos y paneles laterales adaptados para pantallas móviles.

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons
- Vercel

## Funcionalidades principales

- Menú lateral izquierdo con información personal, contacto, idiomas, lenguajes de programación y habilidades extra.
- Contenido central con secciones de perfil, conocimientos, educación, portafolio y footer.
- Menú lateral derecho con accesos a GitHub, LinkedIn, Instagram y botón de modo oscuro.
- Modal de perfil profesional.
- Carrusel automático y manual para la sección de proyectos.
- Modal detallado para cada proyecto del portafolio.
- Modo claro y modo oscuro.
- Diseño responsive para diferentes tamaños de pantalla.
- Paneles laterales móviles que se despliegan mediante gestos desde los bordes izquierdo y derecho de la pantalla.
- Componentes reutilizables siguiendo una estructura basada en componentes.

## Estructura del proyecto

```txt
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── cards/
│   │   ├── EducationCard.tsx
│   │   ├── KnowledgeCard.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── layout/
│   │   ├── LeftSidebar.tsx
│   │   ├── MobileSidebarController.tsx
│   │   ├── PortfolioLayout.tsx
│   │   └── RightSidebar.tsx
│   │
│   ├── sections/
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── KnowledgeSection.tsx
│   │   └── PortfolioSection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── ProgressBar.tsx
│       ├── SectionHeader.tsx
│       ├── SocialIconLink.tsx
│       └── ThemeToggle.tsx
│
├── data/
│   ├── education.ts
│   ├── knowledge.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── socialLinks.ts
│
└── types/
    └── portfolio.ts
```

## Componentes reutilizables

El proyecto utiliza componentes reutilizables para mantener una estructura clara y organizada. Algunos de los componentes principales son:

- `Button`: botón reutilizable para acciones y enlaces.
- `Modal`: componente reutilizable para mostrar información detallada.
- `ProgressBar`: barra de progreso para idiomas y lenguajes de programación.
- `SectionHeader`: encabezado reutilizable para las secciones principales.
- `KnowledgeCard`: tarjeta para mostrar conocimientos.
- `EducationCard`: tarjeta para mostrar formación académica.
- `ProjectCard`: tarjeta para mostrar proyectos del portafolio.
- `SocialIconLink`: enlace visual para redes sociales.
- `ThemeToggle`: botón para alternar entre modo claro y modo oscuro.

## Instalación y ejecución

Para ejecutar el proyecto de forma local, primero se debe clonar el repositorio:

```bash
git clone https://github.com/202601-Ingenieria-Web/BrayanStiven-GomezVilla-Portafolio.git
```

Luego, ingresar a la carpeta del proyecto:

```bash
cd brayan-gomez-portafolio
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir el proyecto en el navegador:

```txt
http://localhost:3000
```

## Comandos disponibles

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Generar la versión de producción:

```bash
npm run build
```

Ejecutar la versión de producción:

```bash
npm run start
```

Revisar errores de código con ESLint:

```bash
npm run lint
```

## Despliegue

El proyecto debe ser desplegado en Vercel.

Enlace del despliegue:
[![Deploy en Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://brayan-gomez-portafolio.vercel.app/)

## Información del autor

**Nombre:** Brayan Stiven Gómez Villa  
**Rol:** Desarrollador de software | Ciencia de datos e IA  
**Ciudad:** Medellín, Antioquia  
**GitHub:** https://github.com/brayan6264  
**LinkedIn:** https://linkedin.com/in/brayan-gomez-backend  
**Instagram:** https://www.instagram.com/brayang6264  

## Notas del desarrollo

Durante el desarrollo se priorizó una estructura simple, clara y basada en componentes. El proyecto evita una arquitectura innecesariamente compleja, pero mantiene una separación organizada entre datos, tipos, componentes visuales, secciones y layout principal.

También se cuidó la responsividad, la reutilización de componentes, la ortografía de los textos visibles y la documentación interna en las partes del código donde existe lógica relevante, como el carrusel, los modales, el modo oscuro y los paneles laterales móviles.
