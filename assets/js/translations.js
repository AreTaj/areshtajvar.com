const translations = {
    en: {
        // Nav
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Hero
        status: "Open to roles in the US & Spain",
        name: "Aresh Tajvar",
        tagline: 'Multilingual AI practitioner building data-driven solutions.<br><br><span class="hero-degree">Master of Science in Applied Artificial Intelligence</span><br><span class="hero-degree-sub">Bachelor of Science in Business Administration | Financial Management</span>',

        // About
        about_title: "About",
        about_p1: 'I am a graduate student in Applied Artificial Intelligence with professional experience in data analysis and program management. My background includes specialized experience in financial management and a Bachelor of Science in Business Administration with a focus on Financial Management from California Polytechnic State University.',
        about_p2: 'I am currently completing a Master of Science in Applied Artificial Intelligence at the University of San Diego Shiley-Marcos School of Engineering. My work sits at the intersection of AI and domain expertise, including retrieval pipelines for legal documents, predictive models for health analytics, image classification systems, and computational finance tools.',
        about_p3: 'I\'m trilingual in English, Spanish, and Persian. I am currently open to data, qualitative/quantitative analysis, or engineering roles in the United States or Spain that leverage my analytical skillset — from fundamental data modeling to building predictive ML systems.',

        // Education
        edu_title: "Education",
        edu_usd: "University of San Diego Shiley-Marcos School of Engineering",
        edu_ms: "Master of Science in Applied Artificial Intelligence",
        edu_ms_gpa: "GPA: 4.0",
        edu_calpoly: "California Polytechnic State University San Luis Obispo",
        edu_bs: "Bachelor of Science in Business Administration | Financial Management",
        edu_bs_gpa: "GPA: 3.5",
        desc_edu_ms: "Master's program focused on advanced ML architecture. Specialized coursework includes Neural Networks & Deep Learning, NLP & GenAI, Applied Computer Vision, and Machine Learning Operations (MLOps).",
        desc_edu_bs: "Technical degree with a focus on financial management. Key coursework includes Econometrics, Advanced Corporate Finance, Portfolio Management, Economics, and Statistics.",

        // Projects
        projects_title: "Featured Projects",
        project_sd_tag: "NLP · Information Retrieval",
        project_sd_title: "San Diego Land Use RAG",
        project_sd_desc: "Domain-adapted transformer pipeline for intelligent legal document retrieval and generation.",
        project_migraine_tag: "Health Tech · ML",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Predictive health analytics using Gradient Boosting and Hurdle Models with an accessible tracking interface.",
        project_eurosat_tag: "Computer Vision",
        project_eurosat_title: "EuroSat TensorFlow",
        project_eurosat_desc: "Land cover classification from satellite imagery using Convolutional Neural Networks.",
        project_option_tag: "Computational Finance",
        project_option_title: "Option Pricing",
        project_option_desc: "Black-Scholes option pricing model with interactive visualization.",
        project_arrow: "View case study →",

        // Skills
        skills_title: "Expertise",
        tech_skills: "Technical Stack",
        professional_skills: "Professional & Industry",
        skill_cost_mgmt: "Cost & Schedule Management",
        human_languages: "Languages",

        // Certs
        certs_title: "Certifications",
        cert_harvard: "Professional Certificate in Computer Science for Python Programming",
        cert_hf: "Fundamentals of Agents",
        cert_aws: "Machine Learning Foundations",
        cert_finra: "Securities Industry Essentials (SIE)",
        cert_factset: "FactSet Essentials: Portfolio Analysis",
        cert_scrum: "Certified ScrumMaster®",
        org_harvard: "Harvard University",
        org_hf: "Hugging Face",
        org_aws: "AWS Educate",
        org_finra: "FINRA",
        org_factset: "FactSet",
        org_scrum: "Scrum Alliance",

        // Contact
        contact_title: "Get in Touch",
        contact_text: "Looking for a data professional with finance domain knowledge and multilingual skills? I'd love to connect.",
        contact_cta: "Connect on LinkedIn",
        contact_email: "Email",
        contact_gh: "GitHub",
        contact_rg: "ResearchGate",

        // Tooltip Descriptions
        desc_python: "High-level programming language used extensively for data science, AI, and backend logic.",
        desc_sql: "Domain-specific language for managing and querying structured databases.",
        desc_r: "Programming language specific to statistical analysis and graphical data modeling.",
        desc_tf: "End-to-end open source platform by Google for building and deploying machine learning models.",
        desc_pytorch: "Deep learning framework by Meta, widely used for computer vision and NLP models.",
        desc_pandas: "Python library focused on data manipulation, cleaning, and tabular data analysis.",
        desc_aws: "Advanced cloud machine learning platform for building, training, and deploying models.",
        desc_quant: "Applying mathematical and statistical methods to financial and risk management problems.",
        desc_cost_mgmt: "Managing project budgets, forecasting, and timeline optimization to ensure efficient resource allocation and delivery.",
        desc_en: "Native proficiency in written and spoken English.",
        desc_es: "Native-level proficiency in written and spoken Spanish.",
        desc_fa: "Native verbal fluency in Persian (Farsi) with functional literacy.",
        desc_harvard: "Comprehensive introduction to computer science, algorithms, and Python programming.",
        desc_hf: "Practical application and architecture of open-source AI Agents and LLM workflows.",
        desc_aws_cert: "Core principles of machine learning operations and cloud deployment on AWS.",
        desc_finra: "Securities Industry Essentials — covers foundation of securities, risk, and market regulations.",
        desc_factset: "Advanced proficiency in financial data analytics, equity research, and portfolio modeling.",
        desc_scrum: "Certified agile project management focusing on iterative delivery and team coordination.",

        footer: "© 2026 Aresh Tajvar",

        // Subpages
        context_title: "Context & Problem",
        approach_title: "Architecture & Approach",
        results_title: "Key Results",
        view_github: "View Code on GitHub",
        view_live: "View Live Project",
        launch_demo: "Launch Demonstrator",
        rag_demo_note: '<strong style="color: var(--text-primary);">Note:</strong> This live demonstrator is hosted on a free Hugging Face server. If the app is "sleeping," please click <strong>Restart Space</strong> and allow 1-2 minutes for the database to boot.',
        project_migraine_tag_2: "Machine Learning",
        migraine_p1: "Standard pain reporting scales are highly subjective, making chronic condition tracking unreliable over the long term. A patient's self-reported \"5 out of 10\" pain level may not represent the same physiological experience from one year to the next.",
        migraine_p2: "Additionally, health tracking systems often ask for input when the user is actively experiencing symptoms (like a migraine), leading to high abandonment rates if the interface causes cognitive load or visual strain.",
        migraine_p3: "On the modeling side, I implemented a backend system utilizing <strong>Gradient Boosting Decision Trees (GBDT)</strong> and <strong>Hurdle Models</strong>. By separating the problem into two probabilistic stages — whether an event will occur, and if so, how severe it will be — the model mirrors true clinical outcomes.",
        migraine_p4: "On the frontend, I engineered an accessible, low-friction UI specifically designed for users experiencing neurological discomfort. The interface relies on tap-based inputs like symptom pill buttons and segmented controls, minimizing typing. I also implemented <em>usage-based smart sorting</em> to dynamically elevate the user's most frequent triggers and medications to the top of the interface.",
        migraine_r1: "Created an accessible, separation-of-concerns architecture for the frontend, passing 100% of UI threshold tests.",
        migraine_r2: "Reduced cognitive load for active users through intelligent, personalized sorting algorithms.",
        migraine_r3: "Developed an analytical model that systematically accounts for longitudinal data drift and the subjectivity inherent in self-reported pain scores."
    },
    es: {
        // Nav
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",

        // Hero
        status: "Abierto a roles en EE.UU. y España",
        name: "Aresh Tajvar",
        tagline: 'Profesional multilingüe en IA desarrollando soluciones impulsadas por datos.<br><br><span class="hero-degree">Maestría en Inteligencia Artificial Aplicada</span><br><span class="hero-degree-sub">Licenciatura en Administración de Empresas | Gestión Financiera</span>',

        // About
        about_title: "Trayectoria",
        about_p1: 'Soy postgraduado en Inteligencia Artificial Aplicada con trayectoria profesional en el análisis de datos y la gestión de programas. Mi formación incluye experiencia especializada en gestión financiera, habiendo cursado la Licenciatura en Administración de Empresas con mención en Gestión Financiera en California Polytechnic State University.',
        about_p2: 'Actualmente, estoy finalizando un Máster en Inteligencia Artificial Aplicada en la Escuela de Ingeniería Shiley-Marcos de la Universidad de San Diego. Mi enfoque profesional se sitúa en la intersección de la IA y la experiencia sectorial, lo que me ha permitido desarrollar sistemas de recuperación para documentos legales, modelos predictivos de salud, clasificación de imágenes y herramientas de finanzas computacionales.',
        about_p3: 'Poseo un dominio trilingüe en inglés, español y persa. Actualmente, me encuentro en búsqueda activa de posiciones en análisis de datos, ingeniería o roles cuantitativos en Estados Unidos o España, aportando un enfoque analítico integral que abarca desde el modelado fundamental hasta el desarrollo de sistemas complejos de ML.',

        // Education
        edu_title: "Educación",
        edu_usd: "Escuela de Ingeniería Shiley-Marcos de la Universidad de San Diego",
        edu_ms: "Maestría en Inteligencia Artificial Aplicada",
        edu_ms_gpa: "GPA: 4.0",
        edu_calpoly: "California Polytechnic State University San Luis Obispo",
        edu_bs: "Licenciatura en Administración de Empresas | Gestión Financiera",
        edu_bs_gpa: "GPA: 3.5",
        desc_edu_ms: "Programa avanzado enfocado en arquitectura de ML. Cursos especializados en Redes Neuronales, NLP y GenAI, Visión Artificial y Operaciones de Machine Learning (MLOps).",
        desc_edu_bs: "Titulación técnica especializada en gestión financiera. Cursos clave que incluyen Econometría, Finanzas Corporativas Avanzadas, Gestión de Portafolio, Economía y Estadística.",

        // Projects
        projects_title: "Proyectos Destacados",
        project_sd_tag: "NLP · Recuperación de Información",
        project_sd_title: "SD Land Use RAG",
        project_sd_desc: "Pipeline de transformers adaptado al dominio para la recuperación y generación inteligente de documentos legales.",
        project_migraine_tag: "Salud · ML",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Analítica predictiva de salud con Gradient Boosting y Modelos Hurdle con interfaz de seguimiento accesible.",
        project_eurosat_tag: "Visión Artificial",
        project_eurosat_title: "EuroSat TensorFlow",
        project_eurosat_desc: "Clasificación de cobertura terrestre mediante Redes Neuronales Convolucionales a partir de imágenes satelitales.",
        project_option_tag: "Finanzas Computacionales",
        project_option_title: "Valoración de Opciones",
        project_option_desc: "Modelo Black-Scholes con visualización interactiva para la valoración de activos financieros.",
        project_arrow: "Ver caso de estudio →",

        // Skills
        skills_title: "Especialización",
        tech_skills: "Conocimientos Técnicos",
        professional_skills: "Habilidades Profesionales",
        skill_cost_mgmt: "Gestión de Costes y Cronogramas",
        human_languages: "Idiomas",

        // Certs
        certs_title: "Certificaciones",
        cert_harvard: "Computer Science for Python",
        cert_hf: "Fundamentals of Agents",
        cert_aws: "Machine Learning Foundations",
        cert_finra: "Securities Industry Essentials (SIE)",
        cert_factset: "FactSet Essentials: Portfolio Analysis",
        cert_scrum: "Certified ScrumMaster®",
        org_harvard: "Universidad de Harvard",
        org_hf: "Hugging Face",
        org_aws: "AWS Educate",
        org_finra: "FINRA",
        org_factset: "FactSet",
        org_scrum: "Scrum Alliance",

        // Contact
        contact_title: "Contacto",
        contact_text: "¿Buscas un profesional de datos con conocimiento en finanzas y dominio trilingüe? Me encantaría conectar.",
        contact_cta: "Conectar en LinkedIn",
        contact_email: "Email",
        contact_gh: "GitHub",
        contact_rg: "ResearchGate",

        // Tooltip Descriptions
        desc_python: "Lenguaje versátil utilizado extensamente para ciencia de datos, IA avanzada y lógica de sistemas.",
        desc_sql: "Lenguaje especializado para la gestión y consulta eficiente de bases de datos estructuradas.",
        desc_r: "Lenguaje enfocado al análisis estadístico riguroso y la modelización gráfica de datos.",
        desc_tf: "Plataforma avanzada de código abierto de Google para construir e implementar modelos de aprendizaje automático.",
        desc_pytorch: "Framework de aprendizaje profundo flexible, estándar en visión artificial y modelos de NLP.",
        desc_pandas: "Librería de Python esencial para la manipulación avanzada y limpieza de estructuras de datos.",
        desc_aws: "Plataforma avanzada de aprendizaje automático en la nube para el entrenamiento y despliegue escalable de modelos de ML.",
        desc_quant: "Aplicación de métodos matemáticos y estadísticos avanzados a problemas de finanzas y gestión de riesgos.",
        desc_cost_mgmt: "Gestión de presupuestos, previsiones y optimización de plazos para asegurar una asignación eficiente de recursos y el cumplimiento de objetivos.",
        desc_en: "Competencia nativa en inglés escrito y hablado.",
        desc_es: "Dominio de nivel nativo en español escrito y hablado.",
        desc_fa: "Fluidez nativa verbal en persa (farsi) con dominio funcional de lectura y escritura.",
        desc_harvard: "Introducción exhaustiva a ciencias de la computación, algoritmos y programación avanzada en Python.",
        desc_hf: "Arquitectura y aplicación práctica de agentes de IA código abierto y flujos de trabajo con LLMs.",
        desc_aws_cert: "Principios fundamentales de operaciones de ML (MLOps) y despliegue en infraestructuras de nube.",
        desc_finra: "Fundamentos de activos financieros, gestión de riesgos y marcos regulatorios del mercado.",
        desc_factset: "Dominio avanzado de analítica de datos financieros, investigación de renta variable y modelización de carteras.",
        desc_scrum: "Gestión ágil certificada enfocada en la entrega iterativa de valor y coordinación técnica de equipos.",

        footer: "© 2026 Aresh Tajvar",

        // Subpages
        context_title: "Contexto y Problema",
        approach_title: "Arquitectura y Enfoque",
        results_title: "Resultados Clave",
        view_github: "Ver Código en GitHub",
        view_live: "Ver Proyecto en Vivo",
        launch_demo: "Lanzar Demostrador",
        rag_demo_note: '<strong style="color: var(--text-primary);">Aviso:</strong> Este demostrador en vivo está alojado en un servidor gratuito de Hugging Face. Si la aplicación entra en "reposo" (sleeping), haz clic en <strong>Restart Space</strong> y espera 1-2 minutos para que la base de datos se inicie.',
        project_migraine_tag_2: "Machine Learning",
        migraine_p1: "Las escalas estándar para reportar el dolor son altamente subjetivas, lo que hace que el seguimiento de condiciones crónicas sea poco fiable a largo plazo. El nivel de dolor autoinformado de '5 sobre 10' de un paciente puede no representar la misma experiencia fisiológica de un año para otro.",
        migraine_p2: "Además, los sistemas de seguimiento de salud a menudo solicitan información cuando el usuario está experimentando síntomas activamente (como una migraña), lo que conduce a altas tasas de abandono si la interfaz causa carga cognitiva o fatiga visual.",
        migraine_p3: "Desde el lado del modelado, implementé un sistema backend utilizando <strong>Gradient Boosting Decision Trees (GBDT)</strong> y <strong>Modelos Hurdle</strong>. Al separar el problema en dos etapas probabilísticas (si ocurrirá un evento y, de ser así, qué tan severo será), el modelo refleja resultados clínicos reales.",
        migraine_p4: "Desde el lado del frontend, diseñé una interfaz de usuario accesible y de baja fricción, creada específicamente para usuarios que experimentan malestar neurológico. La interfaz se basa en entradas táctiles, como botones tipo píldora para síntomas y controles segmentados, minimizando el uso del teclado. También implementé un <em>ordenamiento inteligente basado en el uso</em> para elevar dinámicamente los desencadenantes y medicamentos más frecuentes del usuario a la parte superior de la interfaz.",
        migraine_r1: "Se creó una arquitectura accesible con separación de responsabilidades para el frontend, superando el 100% de las pruebas de umbral de UI.",
        migraine_r2: "Se redujo la carga cognitiva para los usuarios activos mediante algoritmos inteligentes de ordenación personalizada.",
        migraine_r3: "Se desarrolló un modelo analítico que contabiliza sistemáticamente el desplazamiento longitudinal de datos y la subjetividad inherente a las puntuaciones de dolor autoinformadas."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    updateContent(savedLang);

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Tooltip logic
    const tooltip = document.getElementById('global-tooltip');
    let pinnedTrigger = null;

    if (tooltip) {
        document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                if (pinnedTrigger) return; // If one is pinned, don't show hover
                showTooltip(trigger);
            });

            trigger.addEventListener('mouseleave', () => {
                if (!pinnedTrigger) hideTooltip();
            });

            trigger.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent document click
                if (pinnedTrigger === trigger) {
                    // Clicked the already pinned one, unpin it
                    pinnedTrigger = null;
                    hideTooltip();
                } else {
                    // Pin new one
                    pinnedTrigger = trigger;
                    showTooltip(trigger);
                }
            });
        });

        document.addEventListener('click', () => {
            if (pinnedTrigger) {
                pinnedTrigger = null;
                hideTooltip();
            }
        });
    }

    function showTooltip(trigger) {
        const key = trigger.getAttribute('data-t-desc');
        const lang = localStorage.getItem('preferredLang') || 'en';

        if (translations[lang] && translations[lang][key]) {
            tooltip.innerHTML = translations[lang][key];
            tooltip.classList.add('visible');

            // Calculate Position
            const rect = trigger.getBoundingClientRect();

            // Default position above
            let topPosition = rect.top + window.scrollY - tooltip.offsetHeight - 12;
            let leftPosition = rect.left + window.scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2);

            // If it hits the top viewport edge, show below
            if (topPosition < window.scrollY + 10) {
                topPosition = rect.bottom + window.scrollY + 12;
            }

            // Screen edge padding
            const padding = 15;
            const maxLeft = window.innerWidth - tooltip.offsetWidth - padding;

            if (leftPosition < padding) leftPosition = padding;
            if (leftPosition > maxLeft) leftPosition = maxLeft;

            tooltip.style.top = topPosition + 'px';
            tooltip.style.left = leftPosition + 'px';
        }
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
    }
});
