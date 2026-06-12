const translations = {
    en: {
        // Nav
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Hero
        status: "Open to roles in the US & Spain",
        name: "Aresh Tajvar",
        tagline: 'Applying Artificial Intelligence.<br><br><span class="hero-degree">Master of Science in Applied Artificial Intelligence</span><br><span class="hero-degree-sub">Bachelor of Science in Business Administration | Financial Management</span>',

        // Experience
        exp_title: "Professional Experience",
        exp_ng: "Northrop Grumman Corporation",
        exp_ng_date: "June 2021 – Sept 2023",
        exp_role1_title: "Associate Program Planning & Scheduling Analyst",
        exp_role1_b1: "Applied Earned Value Management (EVM) methodology to track program performance against government contract requirements, producing weekly and monthly executive reporting via Power BI and MS Project.",
        exp_role1_b2: "Coordinated across internal business management, engineering, and senior engineering leadership, as well as direct communication with government customers, to ensure contract performance and variance reporting.",
        exp_role2_title: "Business Management Intern",
        exp_role2_b1: "Supported enterprise-wide transition to standardized Smartsheet workflows for cost and schedule management across the Global Surveillance division.",
        exp_role2_b2: "Coordinated with Control Account Managers across engineering and business functions as Labor Planner for the Global Hawk Sustainment program.",
        exp_role3_title: "Schedule Management Intern",
        exp_role3_b1: "Produced weekly and monthly enterprise schedule reports, sector metrics, and performance briefs for senior leadership using Microsoft Project and MS Excel.",

        // About
        about_title: "About",
        about_p1: 'I am an MS Applied Artificial Intelligence graduate with professional experience in program management, financial analysis, and enterprise reporting. I combine rigorous AI/ML technical foundations with business strategy acumen to drive transformation at the intersection of technology and operations.',
        about_p2: 'I hold a Master of Science in Applied Artificial Intelligence from the University of San Diego and a Bachelor of Science in Business Administration from California Polytechnic State University, San Luis Obispo. My work focuses on the practical application of AI, including retrieval pipelines for legal documents, predictive models for health analytics, image classification systems, and computational finance tools.',
        about_p3: 'I am trilingual in English, Spanish, and Persian, and I am currently open to data analysis, quantitative finance, or engineering roles in the United States or Spain that leverage my hybrid analytical skillset.',

        // Education
        edu_title: "Education",
        edu_usd: "University of San Diego Shiley-Marcos School of Engineering",
        edu_ms: "Master of Science in Applied Artificial Intelligence",
        edu_ms_gpa: "GPA: 4.0",
        edu_calpoly: "California Polytechnic State University San Luis Obispo",
        edu_bs: "Bachelor of Science in Business Administration | Financial Management",
        edu_bs_gpa: "GPA: 3.5 / 4.0",
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
        cert_hf: "Certificate of Achievement in Fundamentals of Agents",
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
        desc_evm: "Earned Value Management — industry standard methodology integrating cost, schedule, and technical performance to measure project progress.",
        desc_ai_ethics: "AI Ethics & Governance — governance framework and ethical guidelines to ensure AI systems are fair, transparent, and value-aligned.",
        desc_powerbi: "Microsoft Power BI — interactive business intelligence and data visualization software for executive reporting.",
        desc_msproject: "Microsoft Project — project scheduling and management software used to track progress and manage budgets.",
        desc_excel: "Advanced Microsoft Excel spreadsheet calculations, forecasting, and financial data modeling.",

        footer: "© 2026 Aresh Tajvar",

        // Subpages
        back_portfolio: "← Back to Portfolio",
        context_title: "Context & Problem",
        approach_title: "Architecture & Approach",
        results_title: "Key Results",
        view_github: "View Code on GitHub",
        view_live: "View Live Project",
        launch_demo: "Interactive Demo",
        launch_app: "Launch Interactive Demo ↗",
        rag_demo_note: "Experience the domain-adapted RAG pipeline in action through our dedicated interactive interface.",
        rag_demo_status: '<span style="color: var(--text-primary); font-weight: 600;">Note:</span> Hosted on Hugging Face Spaces. If app is sleeping, please click "Restart Space" and wait 1-2 minutes.',
        back_project: "← Back to Project",
        project_migraine_tag_2: "Machine Learning",
        migraine_p1: "Standard pain reporting scales are highly subjective, making chronic condition tracking unreliable over the long term. A patient's self-reported \"5 out of 10\" pain level may not represent the same physiological experience from one year to the next.",
        migraine_p2: "Additionally, health tracking systems often ask for input when the user is actively experiencing symptoms (like a migraine), leading to high abandonment rates if the interface causes cognitive load or visual strain.",
        migraine_p3: "On the modeling side, I implemented a backend system utilizing <strong>Gradient Boosting Decision Trees (GBDT)</strong> and <strong>Hurdle Models</strong>. By separating the problem into two probabilistic stages — whether an event will occur, and if so, how severe it will be — the model mirrors true clinical outcomes.",
        migraine_p4: "On the frontend, I engineered an accessible, low-friction UI specifically designed for users experiencing neurological discomfort. The interface relies on tap-based inputs like symptom pill buttons and segmented controls, minimizing typing. I also implemented <em>usage-based smart sorting</em> to dynamically elevate the user's most frequent triggers and medications to the top of the interface.",
        migraine_r1: "Architected and shipped a full-stack AI-powered desktop application with versioned public releases, a 61-test automated suite, and a hybrid ML prediction engine combining Gradient Boosting and heuristic reasoning.",
        migraine_r2: "Designed a calibration technique to align multi-scale predictions, validated across 80,640 simulations in a model optimization study.",
        migraine_r3: "Sole developer across the full product lifecycle, from requirements and architecture through testing, packaging, and public release, functioning as a one-person product organization with privacy-first local inference.",
        rag_tag2: "Information Retrieval",
        rag_p1: "Municipal land-use documents and zoning laws are notoriously dense and challenging to parse. When citizens or paralegals interact with standard text-retrieval systems or generic LLMs, the models frequently hallucinate or fail to pull the exact municipal codes required for compliance.",
        rag_p2: "I designed and evaluated a multi-stage AI retrieval system for legal document analysis, applying iterative experimentation to assess feasibility, scalability, and output quality.",
        rag_p3: "To ensure the system retrieves accurate legal phrasing, I bypassed standard embedding models and rigorously benchmarked a domain-adapted <strong>Legal-BERT</strong> model against the baseline <strong>MiniLM</strong> architecture.",
        rag_p4: "Because real-world user queries for zoning laws are complex and multi-faceted, I engineered a synthetic 50-query \"Ground Truth\" dataset using Gemini 2.0 Flash, built directly from legal document chunks. This dataset anchors the evaluation pipeline.",
        rag_p5: "To validate the generation phase, the pipeline assesses outputs using a multi-metric approach: <strong>ROUGE-L</strong> for structural similarity, <strong>BERTScore</strong> for semantic similarity, and a strict <strong>LLM-as-a-judge faithfulness scoring</strong> mechanism to completely penalize hallucinations.",
        rag_r1: "Achieved a 140% increase in retrieval precision (72% Hit Rate @ 5) through systematic model fine-tuning and multi-architecture benchmarking across three distinct retrieval strategies.",
        rag_r2: "Quantifiably mitigated hallucination rates through the implementation of a strict faithfulness evaluation pipeline.",
        rag_r3: "Sole architect and developer of a fully deployed AI application, published to Hugging Face with a live public demo and open-source domain-adapted model, delivered as a solo capstone project.",
        eurosat_tag2: "Deep Learning",
        eurosat_p1: "Monitoring land cover changes — such as urban sprawl, deforestation, and agricultural health — is historically manual and expensive. The introduction of the EuroSat dataset (based on Sentinel-2 satellite images) established a benchmark for automating this process via machine learning.",
        eurosat_p2: "The core challenge is building a computer vision model that can accurately distinguish between visually similar terrain categories (e.g., permanent crops vs. pastures) across thousands of satellite tiles.",
        eurosat_p3: "I built an end-to-end computer vision pipeline using <strong>TensorFlow</strong> and <strong>Keras</strong> to ingest, process, and classify the image dataset into 10 distinct land-use categories.",
        eurosat_p4: "The architecture relies on custom <strong>Convolutional Neural Networks (CNNs)</strong>. To prevent the model from overfitting to specific geographic artifacts in the training data, I implemented robust regularization techniques, including aggressive dropout layers and dynamic learning rate adjustments.",
        eurosat_r1: "Successfully engineered a scalable multi-class image classification model.",
        eurosat_r2: "Utilized data augmentation to artificially expand the training set, improving the model's ability to generalize to novel satellite imagery.",
        eurosat_r3: "Demonstrated proficiency in deep learning lifecycle management, from tensor preprocessing to model evaluation.",
        opt_tag1: "Computational Finance",
        opt_tag2: "Quantitative Analysis",
        opt_title: "Option Pricing Engine",
        opt_subtitle: "Black-Scholes option pricing model with an interactive graphical interface.",
        opt_p1: "Deriving the theoretical value of a stock option requires complex stochastic calculus. While the Black-Scholes-Merton model provides the mathematical standard, the non-linear variables—especially the impact of implied volatility (Vega) and time decay (Theta)—are difficult to visualize without dedicated quantitative tools.",
        opt_p2: "I developed a localized financial application using <strong>Python</strong> that executes the Black-Scholes formula natively. Because computational finance tools are only as useful as they are accessible, I built a lightweight graphical user interface (GUI) using <strong>Tkinter</strong> to wrap the quantitative logic.",
        opt_p3: "The application takes in real-time user parameters (underlying asset price, strike price, time to expiration, risk-free interest rate, and volatility) and immediately computes the theoretical price for both European Call and Put options.",
        opt_r1: "Programmed the foundational stochastic partial differential equation into an optimized Python pipeline.",
        opt_r2: "Bridged the gap between raw quantitative mathematics and actionable trading insights via an interactive local dashboard.",
        opt_r3: "Demonstrated the ability to translate complex financial logic (useful for my FactSet and FINRA background) into functional software.",
        // Momentum System
        project_momentum_tag: "Quantitative Finance",
        project_momentum_title: "Multi-Asset Momentum System",
        project_momentum_desc: "Quantitative, long-only momentum trading system across crypto and equity markets.",
        project_momentum_subtitle: "A quantitative, long-only momentum trading system designed for multi-asset momentum trading across cryptocurrency and equity markets.",
        momentum_tag1: "Quantitative Finance",
        momentum_tag2: "Python",
        momentum_dashboard_title: "Backtest Dashboard",
        momentum_dashboard_p: "An interactive dashboard visualizing the strategy's historical backtest trades, portfolio allocation, and performance metrics.",
        momentum_dashboard_btn: "Open Full Dashboard",
        momentum_arch_title: "System Architecture",
        momentum_arch_p: "The project is structured into modular components to support historical backtesting and live execution environments without altering the core signal logic:",
        momentum_arch_l1: "<strong>Data Pipeline:</strong> Historical data ingestion via the CCXT library, incorporating pagination, rate limit handling, and alignment with asset listing dates.",
        momentum_arch_l2: "<strong>Signal Generator:</strong> The primary signal model. Requires concurrent validation across three indicators (ROC, MACD, RSI) for entry generation. Implements a long-only constraint for compatibility with standard spot execution.",
        momentum_arch_l3: "<strong>Risk Management:</strong> Volatility-adjusted position sizing model utilizing z-scores of signal strength. Controls portfolio-level constraints including maximum open positions, stop-loss thresholds, and global drawdown limits.",
        momentum_arch_l4: "<strong>Backtesting Engine:</strong> Event-driven simulator modeling slippage, trading fees, and execution constraints over historical datasets.",
        momentum_arch_l5: "<strong>Validation Framework:</strong> Implementation of strict out-of-sample holdout validation to discover robust parameters without hindsight bias.",
        momentum_strat_title: "Strategy Logic",
        momentum_strat_p: "The system implements a trend-following heuristic based on the following rules:",
        momentum_strat_l1: "<strong>Primary Trigger:</strong> The daily Rate of Change (ROC) must exceed a specified threshold.",
        momentum_strat_l2: "<strong>Confirmation:</strong> The MACD must align with the directional vector of the trend.",
        momentum_strat_l3: "<strong>Veto Filter:</strong> The RSI must remain below the defined overbought threshold to restrict entries at upper range extremes.",
        momentum_strat_l4: "<strong>Execution & Exit:</strong> If all conditions are met, a LONG signal is generated. The position is closed dynamically upon MACD divergence, RSI overbought crossover, or execution of the dynamic stop-loss. During periods of negative momentum, the system maintains a 100% cash allocation.",
        momentum_eval_title: "Strategy Theory & Evaluation Framework",
        momentum_eval_p1: "The system's value proposition is built on risk-adjusted efficiency, survivability, and the mathematical capacity for safe leverage.",
        momentum_eval_subtitle1: "3-Step Institutional Framework",
        momentum_eval_l1: "By strictly enforcing dynamic trailing stops and momentum filters, the system's Max Drawdown is artificially constrained, ensuring structural survivability across any market regime.",
        momentum_eval_l2: "The strategy operates at a massively higher Calmar ratio than major equity indices, aggressively limiting downside drops while allowing profitable breakouts to run.",
        momentum_eval_l3: "Because of the compressed drawdown, capital can be safely scaled with mathematical leverage to achieve return targets without breaching drawdown pain thresholds.",
        momentum_eval_subtitle2: "Agnostic Yield & Dispersion",
        momentum_eval_p2: "The strategy generates <strong>Agnostic Yield</strong>. It makes no structural bet on any specific asset class. By defining a broad, uncorrelated universe (Equities, Crypto, Bonds), the system relies on <strong>dispersion</strong>, ensuring that while one asset is chopping sideways, capital is automatically deployed into a productive trend elsewhere.",
        momentum_results_title: "Backtest Results (Out-of-Sample)",
        momentum_results_p1: "The strategy was evaluated over a 6-year historical period (2019-2024), encompassing multiple market regimes including high-volatility expansions and contraction phases.",
        momentum_results_p2: "<strong>Configuration:</strong> Modeled on a Long-Only setup on a 1-Day timeframe for assets including <code>BTC/USD</code>, <code>ETH/USD</code>, <code>SOL/USD</code>, <code>SPY</code>, <code>QQQ</code>, and <code>TLT</code>, incorporating 0.04% Fee + 0.05% Slippage assumption per execution.",
        momentum_results_subtitle: "Performance Metrics (2019-2024)",
        momentum_results_l1: "<strong>Total Return:</strong> +326.72%",
        momentum_results_l2: "<strong>Annualized Return:</strong> +28.66%",
        momentum_results_l3: "<strong>Max Drawdown:</strong> -6.56%",
        momentum_results_l4: "<strong>Sharpe Ratio:</strong> 1.12",
        momentum_results_l5: "<strong>Sortino Ratio:</strong> 1.19",
        momentum_results_l6: "<strong>Win Rate:</strong> 48.90% (319 Total Trades)",
        momentum_results_p3: "<em>Note: The system limits downside exposure through the use of 5.0x ATR trailing stops and MACD exits.</em>",
        momentum_results_p4: "<strong>Holdout Validation (2023-2024, unseen data):</strong> Annualized Return: 39.04% | Sharpe: 1.21 | Max Drawdown: -6.15%"
    },
    es: {
        // Nav
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",

        // Hero
        status: "Disponible para oportunidades profesionales en EE. UU. y España",
        name: "Aresh Tajvar",
        tagline: 'Aplicando Inteligencia Artificial.<br><br><span class="hero-degree">Maestría en Inteligencia Artificial Aplicada</span><br><span class="hero-degree-sub">Licenciatura en Administración de Empresas | Gestión Financiera</span>',

        // Experience
        exp_title: "Experiencia Profesional",
        exp_ng: "Northrop Grumman Corporation",
        exp_ng_date: "Junio 2021 – Septiembre 2023",
        exp_role1_title: "Analista de Planificación y Control de Proyectos",
        exp_role1_b1: "Aplicación de la metodología de Gestión del Valor Ganado (EVM) para monitorear el desempeño del programa de acuerdo con los requisitos del contrato gubernamental, elaborando informes ejecutivos semanales y mensuales con Power BI y MS Project.",
        exp_role1_b2: "Coordinación entre la gestión comercial interna, la ingeniería y el liderazgo de ingeniería sénior, además de comunicación directa con clientes gubernamentales, para asegurar el cumplimiento del contrato y la presentación de informes de desviaciones.",
        exp_role2_title: "Prácticas en Gestión Empresarial",
        exp_role2_b1: "Soporte en la transición corporativa hacia flujos de trabajo estandarizados en Smartsheet para la gestión de costes y plazos en la división de Vigilancia Global.",
        exp_role2_b2: "Coordinación con los Responsables de Cuentas de Control (CAMs) en áreas de ingeniería y finanzas como Planificador de Mano de Obra para el programa de Sostenimiento de Global Hawk.",
        exp_role3_title: "Prácticas en Gestión de Cronogramas",
        exp_role3_b1: "Elaboración de informes de planificación y cronogramas semanales y mensuales, métricas del sector y resúmenes de desempeño para la alta dirección utilizando Microsoft Project y MS Excel.",

        // About
        about_title: "Trayectoria",
        about_p1: 'Soy graduado en Inteligencia Artificial Aplicada con experiencia profesional en gestión de programas, análisis financiero e informes corporativos. Combino una rigurosa base técnica en IA/ML con perspicacia en estrategia empresarial para impulsar la transformación en la intersección de la tecnología y las operaciones.',
        about_p2: 'Tengo una Maestría en Inteligencia Artificial Aplicada de la Universidad de San Diego y una Licenciatura en Administración de Empresas de la California Polytechnic State University, San Luis Obispo. Mi trabajo se centra en la aplicación práctica de la IA, incluyendo sistemas de búsqueda para documentos legales, modelos predictivos de salud, clasificación de imágenes satelitales y herramientas cuantitativas de finanzas computacionales.',
        about_p3: 'Cuento con un dominio trilingüe en inglés, español y persa, y actualmente me encuentro en búsqueda activa de posiciones en análisis de datos, finanzas cuantitativas o roles de ingeniería en Estados Unidos o España.',

        // Education
        edu_title: "Educación",
        edu_usd: "Escuela de Ingeniería Shiley-Marcos de la Universidad de San Diego",
        edu_ms: "Maestría en Inteligencia Artificial Aplicada",
        edu_ms_gpa: "GPA: 4.0",
        edu_calpoly: "California Polytechnic State University San Luis Obispo",
        edu_bs: "Licenciatura en Administración de Empresas con especialización en Finanzas",
        edu_bs_gpa: "GPA: 3.5 / 4.0",
        desc_edu_ms: "Programa avanzado enfocado en la arquitectura de ML. Cursos especializados en Redes Neuronales, Procesamiento del Lenguaje Natural (NLP) e IA Generativa, Visión Artificial y Operaciones de Aprendizaje Automático (MLOps).",
        desc_edu_bs: "Titulación cuantitativa enfocada en gestión financiera. Cursos clave que incluyen Econometría, Finanzas Corporativas Avanzadas, Gestión de Portafolios, Economía y Estadística.",

        // Projects
        projects_title: "Proyectos Destacados",
        project_sd_tag: "NLP · Recuperación de Información",
        project_sd_title: "SD Land Use RAG",
        project_sd_desc: "Pipeline de transformers adaptado al dominio para la recuperación y generación de información en documentos legales.",
        project_migraine_tag: "Salud · ML",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Analítica predictiva de salud con Gradient Boosting y Modelos Hurdle con interfaz de seguimiento accesible.",
        project_eurosat_tag: "Visión Artificial",
        project_eurosat_title: "EuroSat TensorFlow",
        project_eurosat_desc: "Clasificación de cobertura terrestre mediante Redes Neuronales Convolucionales a partir de imágenes satelitales.",
        project_option_tag: "Finanzas Computacionales",
        project_option_title: "Valoración de Opciones",
        project_option_desc: "Modelo Black-Scholes con visualización interactiva para la valoración de opciones financieras.",
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
        cert_hf: "Certificate of Achievement in Fundamentals of Agents",
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
        desc_python: "Lenguaje versátil utilizado extensamente en ciencia de datos, inteligencia artificial avanzada y lógica de sistemas.",
        desc_sql: "Lenguaje especializado para la gestión y consulta de bases de datos relacionales estructuradas.",
        desc_r: "Lenguaje enfocado en el análisis estadístico riguroso y la modelización gráfica de datos.",
        desc_tf: "Plataforma de código abierto desarrollada por Google para la construcción y despliegue de modelos de aprendizaje automático.",
        desc_pytorch: "Framework de aprendizaje profundo flexible, estándar de la industria en visión artificial y procesamiento de lenguaje natural.",
        desc_pandas: "Librería esencial de Python para la manipulación y limpieza de datos.",
        desc_aws: "Servicio en la nube para el entrenamiento y despliegue escalable de modelos de aprendizaje automático.",
        desc_quant: "Aplicación de métodos matemáticos y estadísticos avanzados a finanzas cuantitativas y gestión de riesgos.",
        desc_cost_mgmt: "Gestión de presupuestos, proyecciones y plazos para asegurar la asignación eficiente de recursos y el cumplimiento de hitos.",
        desc_en: "Competencia nativa en inglés escrito y hablado.",
        desc_es: "Dominio de nivel nativo en español escrito y hablado.",
        desc_fa: "Fluidez nativa verbal en persa (farsi) con dominio funcional de lectura y escritura.",
        desc_harvard: "Introducción exhaustiva a las ciencias de la computación, algoritmos y programación con Python.",
        desc_hf: "Arquitectura y aplicación práctica de agentes de IA de código abierto y flujos de trabajo con LLMs.",
        desc_aws_cert: "Principios fundamentales de operaciones de ML (MLOps) y despliegue en infraestructura de la nube.",
        desc_finra: "Fundamentos de mercados financieros, gestión de riesgos y marcos regulatorios (FINRA).",
        desc_factset: "Dominio avanzado de análisis de datos financieros, investigación de renta variable y modelado de portafolios.",
        desc_scrum: "Certificación en metodologías ágiles enfocada en la entrega iterativa de valor y coordinación de equipos técnicos.",
        desc_evm: "Gestión del Valor Ganado (EVM): metodología estándar de la industria para integrar costes, plazos y alcance con el fin de evaluar el desempeño de proyectos.",
        desc_ai_ethics: "Ética y Gobernanza de IA: marco para asegurar que los sistemas de inteligencia artificial sean justos, transparentes y alineados éticamente.",
        desc_powerbi: "Microsoft Power BI: plataforma de inteligencia de negocios (BI) y visualización de datos para informes directivos.",
        desc_msproject: "Microsoft Project: software de gestión de proyectos para el desarrollo de cronogramas y control de presupuestos.",
        desc_excel: "Microsoft Excel: cálculos complejos, proyecciones financieras y análisis de datos en hojas de cálculo.",

        footer: "© 2026 Aresh Tajvar",

        // Subpages
        back_portfolio: "← Volver al Portafolio",
        context_title: "Contexto y Problema",
        approach_title: "Arquitectura y Enfoque",
        results_title: "Resultados Clave",
        view_github: "Ver Código en GitHub",
        view_live: "Ver Proyecto en Vivo",
        launch_demo: "Demo Interactiva",
        launch_app: "Lanzar Demo Interactiva ↗",
        rag_demo_note: "Experimenta el pipeline RAG adaptado al dominio en acción a través de nuestra interfaz interactiva dedicada.",
        rag_demo_status: '<span style="color: var(--text-primary); font-weight: 600;">Aviso:</span> Alojado en Hugging Face Spaces. Si la aplicación está en reposo, haz clic en "Restart Space" y espera 1-2 minutos.',
        back_project: "← Volver al Proyecto",
        project_migraine_tag_2: "Machine Learning",
        migraine_p1: "Las escalas estándar para reportar el dolor son altamente subjetivas, lo que hace que el seguimiento de condiciones crónicas sea poco fiable a largo plazo. El dolor autoinformado de '5 sobre 10' por un paciente puede no representar la misma experiencia fisiológica de un año a otro.",
        migraine_p2: "Además, los sistemas de seguimiento de salud suelen solicitar información cuando el usuario experimenta síntomas activos (como una migraña), lo que resulta en altas tasas de abandono si la interfaz genera carga cognitiva o fatiga visual.",
        migraine_p3: "En cuanto al desarrollo del modelo, implementé un sistema backend utilizando <strong>Gradient Boosting Decision Trees (GBDT)</strong> y <strong>Modelos Hurdle</strong>. Al dividir el problema en dos etapas probabilísticas (la ocurrencia del evento y su severidad posterior), el modelo refleja mejor los escenarios clínicos reales.",
        migraine_p4: "Para el frontend, diseñé una interfaz de usuario accesible y de baja fricción, creada específicamente para usuarios en momentos de malestar neurológico. La interfaz prioriza controles táctiles sencillos (como botones interactivos y selectores segmentados) para minimizar el uso del teclado. También implementé un <em>ordenamiento inteligente basado en la frecuencia de uso</em> para posicionar dinámicamente los desencadenantes y medicamentos más habituales en la parte superior.",
        migraine_r1: "Diseño y despliegue de una aplicación de escritorio full-stack con IA, incluyendo versiones públicas, un suite automatizado de 61 pruebas y un motor de predicción híbrido de ML que combina Gradient Boosting con razonamiento heurístico.",
        migraine_r2: "Diseño de una técnica de calibración para alinear predicciones multiescala, validada en 80.640 simulaciones en un estudio de optimización de modelos.",
        migraine_r3: "Desarrollador único a lo largo de todo el ciclo de vida del producto, desde los requisitos y la arquitectura hasta las pruebas, el empaquetado y la publicación, funcionando como una organización de producto unipersonal con inferencia local y prioridad a la privacidad.",
        rag_tag2: "Recuperación de Información",
        rag_p1: "Los reglamentos municipales de uso de suelo y las leyes de zonificación son sumamente densos y difíciles de analizar. Al interactuar con sistemas de búsqueda de texto convencionales o LLMs genéricos, es común que los modelos alucinen o no logren extraer los códigos municipales exactos necesarios para el cumplimiento normativo.",
        rag_p2: "Como parte de mi proyecto final de maestría, desarrollé un sistema de recuperación inteligente adaptado a las regulaciones de uso de suelo de San Diego, garantizando alta precisión y sustento factual.",
        rag_p3: "Para garantizar una recuperación precisa de la terminología legal, descarté los modelos de embedding estándar y evalué un modelo <strong>Legal-BERT</strong> adaptado al dominio en comparación con la arquitectura base <strong>MiniLM</strong>.",
        rag_p4: "Dado que las consultas de usuarios reales sobre zonificación son complejas, generé un conjunto de datos sintético de prueba ('Ground Truth') con 50 consultas mediante Gemini 2.0 Flash a partir de fragmentos de documentos reales, sirviendo como base principal para el flujo de evaluación.",
        rag_p5: "Para validar la generación de respuestas, el sistema implementa un enfoque de evaluación múltiple: <strong>ROUGE-L</strong> para similitud estructural, <strong>BERTScore</strong> para similitud semántica y un mecanismo de <strong>evaluación con LLM (LLM-as-a-judge)</strong> para detectar y penalizar alucinaciones.",
        rag_r1: "Incremento del 140% en la precisión de recuperación (72% Hit Rate @ 5) mediante ajuste sistemático de modelos y benchmarking multiarquitectura a través de tres estrategias de recuperación distintas.",
        rag_r2: "Mitigación cuantificable de las tasas de alucinación mediante la implementación de un estricto pipeline de evaluación de fidelidad.",
        rag_r3: "Arquitecto y desarrollador único de una aplicación de IA completamente desplegada, publicada en Hugging Face con una demo pública en vivo y un modelo adaptado al dominio de código abierto, entregada como proyecto final individual.",
        eurosat_tag2: "Aprendizaje Profundo",
        eurosat_p1: "El monitoreo de los cambios en la cobertura terrestre (como la expansión urbana, la deforestación o la salud agrícola) ha sido históricamente costoso y manual. El conjunto de datos EuroSat (satélite Sentinel-2) estableció un estándar para automatizar este análisis mediante aprendizaje automático.",
        eurosat_p2: "El desafío principal consiste en desarrollar un modelo de visión artificial capaz de distinguir con precisión categorías de terreno visualmente similares (como cultivos permanentes frente a pastos) a lo largo de miles de imágenes satelitales.",
        eurosat_p3: "Desarrollé un pipeline completo de visión artificial utilizando <strong>TensorFlow</strong> y <strong>Keras</strong> para procesar y clasificar las imágenes en 10 categorías distintas de cobertura terrestre.",
        eurosat_p4: "El modelo se basa en una arquitectura de <strong>Redes Neuronales Convolucionales (CNN)</strong> personalizada. Para evitar el sobreajuste a patrones geográficos específicos de los datos de entrenamiento, implementé técnicas de regularización avanzadas, incluyendo capas de dropout y ajustes dinámicos de la tasa de aprendizaje (learning rate scheduler).",
        eurosat_r1: "Diseño exitoso de un modelo escalable de clasificación de imágenes multiclase.",
        eurosat_r2: "Aplicación de técnicas de aumento de datos (data augmentation) para mejorar la generalización del modelo ante imágenes satelitales no vistas previamente.",
        eurosat_r3: "Demostración de competencia técnica en el ciclo de vida completo de Deep Learning, desde el preprocesamiento de tensores hasta la evaluación de la red.",
        opt_tag1: "Finanzas Computacionales",
        opt_tag2: "Análisis Cuantitativo",
        opt_title: "Motor de Valoración de Opciones",
        opt_subtitle: "Modelo de valoración de opciones Black-Scholes con interfaz gráfica interactiva.",
        opt_p1: "Calcular el valor teórico de una opción financiera requiere herramientas de cálculo estocástico complejo. Aunque el modelo Black-Scholes-Merton es el estándar matemático de referencia, la sensibilidad de las variables no lineales (como el impacto de la volatilidad implícita o el paso del tiempo) resulta difícil de analizar sin herramientas cuantitativas dedicadas.",
        opt_p2: "Desarrollé una aplicación financiera local en <strong>Python</strong> que ejecuta la fórmula de Black-Scholes de forma nativa. Con el fin de hacer accesible el cálculo cuantitativo, diseñé una interfaz gráfica de usuario (GUI) ligera utilizando <strong>Tkinter</strong> para encapsular la lógica matemática de fondo.",
        opt_p3: "La aplicación recibe parámetros del usuario en tiempo real (precio del activo subyacente, precio de ejercicio, tiempo al vencimiento, tasa de interés libre de riesgo y volatilidad implícita) para calcular de forma inmediata el precio teórico de opciones europeas de tipo Call y Put.",
        opt_r1: "Implementación de la ecuación diferencial estocástica subyacente en un flujo de ejecución optimizado en Python.",
        opt_r2: "Conexión directa entre la matemática cuantitativa y la toma de decisiones prácticas de inversión a través de un panel interactivo.",
        opt_r3: "Demostración de capacidad técnica para traducir lógica financiera compleja (relevante para mi perfil en FactSet y FINRA) en una aplicación funcional.",
        // Momentum System
        project_momentum_tag: "Finanzas Cuantitativas",
        project_momentum_title: "Sistema de Momentum Multiactivos",
        project_momentum_desc: "Sistema de trading cuantitativo de momentum (solo largos) en mercados de criptomonedas y acciones.",
        project_momentum_subtitle: "Sistema cuantitativo de momentum diseñado para operar posiciones largas en mercados de criptomonedas y renta variable.",
        momentum_tag1: "Finanzas Cuantitativas",
        momentum_tag2: "Python",
        momentum_dashboard_title: "Panel de Backtest",
        momentum_dashboard_p: "Un panel interactivo que visualiza las operaciones históricas de backtest, la asignación del portafolio y las métricas de rendimiento de la estrategia.",
        momentum_dashboard_btn: "Abrir Panel Completo",
        momentum_arch_title: "Arquitectura del Sistema",
        momentum_arch_p: "El proyecto se estructura en componentes modulares para facilitar el backtesting histórico y los entornos de ejecución en vivo sin alterar la lógica central de las señales:",
        momentum_arch_l1: "<strong>Pipeline de Datos:</strong> Ingesta de datos históricos mediante la librería CCXT, incorporando paginación, gestión de límites de tasa y alineación con fechas de listado de activos.",
        momentum_arch_l2: "<strong>Generador de Señales:</strong> El modelo principal de señales. Requiere validación concurrente a través de tres indicadores (ROC, MACD, RSI) para generar entradas. Implementa una restricción de posiciones solo largas (long-only).",
        momentum_arch_l3: "<strong>Gestión de Riesgos:</strong> Modelo de tamaño de posiciones ajustado por volatilidad que utiliza puntajes Z (z-scores) de fuerza de la señal. Controla restricciones a nivel de portafolio, incluyendo límites de posiciones, stop-loss y drawdown global.",
        momentum_arch_l4: "<strong>Motor de Backtesting:</strong> Simulador impulsado por eventos que modela el deslizamiento (slippage), comisiones de operación y restricciones de ejecución sobre conjuntos de datos históricos.",
        momentum_arch_l5: "<strong>Marco de Validación:</strong> Implementación estricta de validación con muestras excluidas (holdout) para descubrir parámetros robustos sin sesgo retrospectivo.",
        momentum_strat_title: "Lógica de la Estrategia",
        momentum_strat_p: "El sistema implementa un modelo de seguimiento de tendencias basado en las siguientes reglas:",
        momentum_strat_l1: "<strong>Activador Principal:</strong> La Tasa de Cambio (ROC) diaria debe superar un umbral específico.",
        momentum_strat_l2: "<strong>Confirmación:</strong> El MACD debe alinearse con el vector direccional de la tendencia.",
        momentum_strat_l3: "<strong>Filtro de Veto:</strong> El RSI debe permanecer por debajo del umbral de sobrecompra definido para restringir entradas en extremos del rango superior.",
        momentum_strat_l4: "<strong>Ejecución y Salida:</strong> Si se cumplen todas las condiciones, se genera una señal Larga (LONG). La posición se cierra dinámicamente ante divergencia de MACD, cruce de RSI a sobrecompra, o ejecución de stop-loss dinámico. Durante períodos de momentum negativo, el sistema mantiene el 100% de la asignación en efectivo.",
        momentum_eval_title: "Teoría de la Estrategia y Marco de Evaluación",
        momentum_eval_p1: "La propuesta de valor del sistema se basa en la eficiencia ajustada al riesgo, la supervivencia y la capacidad matemática para el apalancamiento seguro.",
        momentum_eval_subtitle1: "Marco Institucional de 3 Pasos",
        momentum_eval_l1: "Al aplicar estrictamente trailing stops dinámicos y filtros de momentum, el Drawdown Máximo del sistema se restringe artificialmente, garantizando la supervivencia estructural en cualquier régimen de mercado.",
        momentum_eval_l2: "La estrategia opera con un ratio Calmar enormemente superior al de los principales índices de renta variable, limitando agresivamente las caídas mientras permite que las rupturas rentables sigan su curso.",
        momentum_eval_l3: "Debido a las bajas caídas de capital (drawdown comprimido), el capital puede escalarse de manera segura con apalancamiento matemático para alcanzar objetivos de rentabilidad sin superar los umbrales de riesgo.",
        momentum_eval_subtitle2: "Rendimiento Agnóstico y Dispersión",
        momentum_eval_p2: "La estrategia genera <strong>Rendimiento Agnóstico</strong>. No realiza apuestas estructurales en ninguna clase de activo específica. Al definir un universo amplio y no correlacionado (Acciones, Criptomonedas, Bonos), el sistema depende de la <strong>dispersión</strong>, asegurando que mientras un activo se mueve lateralmente, el capital se despliega automáticamente hacia una tendencia productiva en otro lugar.",
        momentum_results_title: "Resultados del Backtest (Datos Fuera de Muestra)",
        momentum_results_p1: "La estrategia se evaluó durante un período histórico de 6 años (2019-2024), abarcando múltiples regímenes de mercado, incluyendo fases de expansión de alta volatilidad y contracciones.",
        momentum_results_p2: "<strong>Configuración:</strong> Modelado para posiciones largas únicamente en intervalos de 1 día para activos como <code>BTC/USD</code>, <code>ETH/USD</code>, <code>SOL/USD</code>, <code>SPY</code>, <code>QQQ</code>, y <code>TLT</code>, asumiendo 0.04% de comisión + 0.05% de deslizamiento por ejecución.",
        momentum_results_subtitle: "Métricas de Rendimiento (2019-2024)",
        momentum_results_l1: "<strong>Retorno Total:</strong> +326.72%",
        momentum_results_l2: "<strong>Retorno Anualizado:</strong> +28.66%",
        momentum_results_l3: "<strong>Drawdown Máximo:</strong> -6.56%",
        momentum_results_l4: "<strong>Ratio Sharpe:</strong> 1.12",
        momentum_results_l5: "<strong>Ratio Sortino:</strong> 1.19",
        momentum_results_l6: "<strong>Tasa de Aciertos:</strong> 48.90% (319 Operaciones Totales)",
        momentum_results_p3: "<em>Nota: El sistema limita la exposición a la baja mediante el uso de stop-loss dinámicos de 5.0x ATR y salidas de MACD.</em>",
        momentum_results_p4: "<strong>Validación Fuera de Muestra (Holdout) (2023-2024, datos no vistos):</strong> Retorno Anualizado: 39.04% | Sharpe: 1.21 | Drawdown Máximo: -6.15%"
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
