const translations = {
    en: {
        name: "Aresh Tajvar",
        tagline: "MS in Applied Artificial Intelligence candidate at the <strong>University of San Diego</strong>. Trilingual AI practitioner building data-driven solutions with expertise in Machine Learning, Deep Learning, and Quantitative Analysis.",
        projects_title: "Featured Projects",
        skills_title: "Expertise & Certs",
        tech_skills: "Technical Stack",
        professional_skills: "Professional",
        human_languages: "Languages",
        certs_title: "Certifications",
        
        project_sd_title: "San Diego Land Use RAG",
        project_sd_desc: "MS degree capstone project. In-progress system for intelligent legal and land-use document retrieval.",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "AI/ML tracking and prediction using Gradient Boosting Decision Trees and Hurdle Models.",
        project_eurosat_title: "Eurosat TensorFlow",
        project_eurosat_desc: "Land cover classification using Convolutional Neural Networks.",
        project_option_title: "Option Pricing",
        project_option_desc: "Stock option pricing using the Black-Scholes model and Tkinter.",
        
        view_on_github: "View on GitHub",
        project_page: "Project Page",
        
        lang_en: "EN",
        lang_es: "ES",

        cert_harvard: "Computer Science for Python",
        cert_hf: "Fundamentals of Agents",
        cert_aws: "Machine Learning Foundations",
        cert_finra: "Securities Industry Essentials (SIE)",
        cert_factset: "Essentials - Portfolio Analysis",
        
        org_harvard: "Harvard University",
        org_hf: "Hugging Face",
        org_aws: "AWS Educate",
        org_finra: "FINRA",
        org_factset: "FactSet",

        footer: "© 2026 Aresh Tajvar. Built with Cloudflare Pages."
    },
    es: {
        name: "Aresh Tajvar",
        tagline: "Candidato a Máster en Inteligencia Artificial Aplicada por la <strong>Universidad de San Diego</strong>. Profesional trilingüe en IA enfocado en el desarrollo de soluciones basadas en datos, con experiencia en Machine Learning, Deep Learning y Análisis Cuantitativo.",
        projects_title: "Proyectos Destacados",
        skills_title: "Experiencia y Certificaciones",
        tech_skills: "Conocimientos Técnicos",
        professional_skills: "Experiencia Profesional",
        human_languages: "Idiomas",
        certs_title: "Certificaciones",
        
        project_sd_title: "SD Land Use RAG",
        project_sd_desc: "Proyecto final de maestría. Sistema en desarrollo para la recuperación inteligente de documentos legales y de uso de suelo.",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Seguimiento y predicción mediante IA/ML utilizando Árboles de Decisión de Potenciación de Gradiente y Modelos Hurdle.",
        project_eurosat_title: "Eurosat TensorFlow",
        project_eurosat_desc: "Clasificación de cobertura terrestre mediante Redes Neuronales Convolucionales (CNN).",
        project_option_title: "Valoración de Opciones",
        project_option_desc: "Modelado de precios de opciones de acciones utilizando el modelo Black-Scholes y Tkinter.",
        
        view_on_github: "Ver en GitHub",
        project_page: "Página del Proyecto",
        
        lang_en: "EN",
        lang_es: "ES",

        cert_harvard: "Ciencias de la Computación para Python",
        cert_hf: "Fundamentos de Agentes",
        cert_aws: "Fundamentos de Aprendizaje Automático",
        cert_finra: "Esenciales de la Industria de Valores (SIE)",
        cert_factset: "Esenciales - Análisis de Portafolios",
        
        org_harvard: "Universidad de Harvard",
        org_hf: "Hugging Face",
        org_aws: "AWS Educate",
        org_finra: "FINRA",
        org_factset: "FactSet",

        footer: "© 2026 Aresh Tajvar. Desarrollado con Cloudflare Pages."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    updateContent(savedLang);
});
