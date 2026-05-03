import type { ProjectItem } from "@/types/portfolio";

export const projectItems: ProjectItem[] = [
    {
        title: "Sistema de análisis financiero con IA",
        shortDescription:
            "Sistema basado en arquitectura RAG para analizar documentos financieros y generar recomendaciones apoyadas en inteligencia artificial.",
        detailedDescription:
            "Proyecto orientado al análisis automatizado de documentos empresariales del sector financiero. La solución integró Langflow, DataStax Astra, OpenAI y Python para procesar información, vectorizar contenido relevante y generar respuestas alineadas con criterios de inversión previamente definidos.",
        image: "/images/projects/rag-financiero.jpg",
        technologies: ["Python", "Langflow", "DataStax Astra", "OpenAI", "RAG"],
    },
    {
        title: "Análisis de sentimientos de reseñas",
        shortDescription:
            "Modelo de procesamiento de lenguaje natural para clasificar reseñas de productos como positivas, negativas o neutrales.",
        detailedDescription:
            "Proyecto de ciencia de datos enfocado en el preprocesamiento de textos, limpieza de información, vectorización y entrenamiento de modelos de machine learning para clasificar sentimientos en reseñas de productos.",
        image: "/images/projects/sentiment-analysis.jpg",
        technologies: ["Python", "NLP", "Scikit-learn", "Pandas", "Machine Learning"],
    },
    {
        title: "Clasificación de celulares rotos",
        shortDescription:
            "Sistema de visión por computadora para clasificar imágenes de celulares según su estado físico.",
        detailedDescription:
            "Proyecto desarrollado para clasificar imágenes de celulares en las categorías roto y no roto. Se trabajó con procesamiento de imágenes, preparación de datos, aumento de datos y entrenamiento de modelos de clasificación.",
        image: "/images/projects/broken-phone-classifier.jpg",
        technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
    },
    {
        title: "MedicusCare",
        shortDescription:
            "Backend para una aplicación web de gestión de medicación diaria, recordatorios y monitoreo de usuarios.",
        detailedDescription:
            "Proyecto enfocado en el diseño y desarrollo del backend de una aplicación para gestionar medicamentos, usuarios, recordatorios y operaciones CRUD. La solución permitió estructurar servicios, endpoints y documentación para facilitar la integración con el frontend.",
        image: "/images/projects/medicus-care.jpg",
        technologies: ["Java", "Spring Boot", "SQL", "APIs REST"],
    },
    {
        title: "Ethereo Contable",
        shortDescription:
            "Aplicación de escritorio para gestión de inventarios, ventas, compras, reportes y roles administrativos.",
        detailedDescription:
            "Sistema desarrollado en C# con base de datos SQL para apoyar procesos contables y administrativos. Incluyó gestión de inventarios, reportes de ingresos y egresos, operaciones de venta y compra, y control de roles.",
        image: "/images/projects/ethereo-contable.jpg",
        technologies: ["C#", ".NET", "SQL", "Windows Forms"],
    },
    {
        title: "Daily Word App",
        shortDescription:
            "App movíl para aprender palabras nuevas en español",
        detailedDescription:
            "Aplicación Android desarrollada en Kotlin que muestra una palabra nueva en español cada día, junto con su significado, tipo gramatical y ejemplo. Permite guardar palabras en favoritos, consultar el historial y utiliza Firebase Firestore para almacenar los datos.",
        image: "/images/projects/daily-word.jpg",
        technologies: ["Kotlin", "Firebase", "Firebase auth"],
    },
    {
        title: "Unisubastas UdeA",
        shortDescription:
            "App movíl para la subasta de articulos de segunda mano dentro de la comunidad de la UdeA",
        detailedDescription:
            "Aplicación Android desarrollada en Flutter que facilita la venta de artículos de segunda mano mediante la implementación de subastas para cada producto. Además, permite contactar al comprador o vendedor directamente desde la aplicación. Solo los usuarios con correo institucional de la UdeA pueden acceder a ella.",
        image: "/images/projects/unisubasta.jpg",
        technologies: ["Flutter", "Spring-boot", "Postgresql", "Firebase auth", "Gemini API LLM"],
    },
];