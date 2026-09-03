const translations = {
    en: {
        // Nav
        nav_about: "About",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_experience: "Work",
        nav_skills: "Skills",
        nav_contact: "Contact",

        // Hero
        name: "Aresh Tajvar",
        tagline: 'Applying Artificial Intelligence.<br><br><span class="hero-degree">Master of Science in Applied Artificial Intelligence</span><br><span class="hero-degree-sub">Bachelor of Science in Business Administration | Financial Management</span>',

        // Experience
        exp_title: "Work History",
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
        about_p3: 'I am trilingual in English, Spanish, and Persian.',

        // Education
        edu_title: "Education",
        edu_usd: "University of San Diego",
        edu_usd_date: "2024 – 2026",
        edu_ms: "Master of Science in Applied Artificial Intelligence",
        edu_ms_meta: "Shiley-Marcos School of Engineering · GPA: 4.0",
        edu_ms_b1: "<strong>Machine Learning & Deep Learning:</strong> Machine Learning Fundamentals (AAI 510), Neural Networks & Learning (AAI 511), Machine Learning Operations / MLOps (AAI 540).",
        edu_ms_b2: "<strong>NLP & Computer Vision:</strong> Natural Language Processing (AAI 520), Applied Computer Vision for AI (AAI 521).",
        edu_ms_b3: "<strong>AI Foundations & Analytics:</strong> Probability & Stats for AI (AAI 500), Introduction to AI (AAI 501), Data Analytics & IoT (AAI 530), Ethics in AI (AAI 531).",
        edu_ms_b4: "<strong>Capstone Project:</strong> AAI 590 Capstone Project: domain-adapted RAG legal document retrieval system with faithfulness evaluation.",
        edu_calpoly: "California Polytechnic State University, San Luis Obispo",
        edu_calpoly_date: "2019 – 2023",
        edu_bs: "Bachelor of Science in Business Administration | Financial Management",
        edu_bs_meta: "Orfalea College of Business · GPA: 3.5",
        edu_bs_b1: "<strong>Financial Management & Valuation:</strong> Security Analysis & Portfolio Management (BUS 431), Fundamentals of Corporate Finance (BUS 342), Advanced Corporate Finance (BUS 438), Fixed Income Securities Market (BUS 439), Real Estate Finance (BUS 434), International Finance (BUS 433).",
        edu_bs_b2: "<strong>Econometrics & Statistics:</strong> Econometrics (ECON 339), Statistical Inference & Management I & II (STAT 251, STAT 252), Calculus for Business & Economics (MATH 221), Macroeconomics (ECON 222), Microeconomics (ECON 221).",
        edu_bs_b3: "<strong>Business Strategy & Accounting:</strong> General Management & Strategy (BUS 401), Financial Accounting (BUS 214), Managerial Accounting (BUS 215), Information Systems (BUS 391), Senior Project I & II (BUS 461, BUS 462).",

        // Projects
        projects_title: "Projects",
        project_sd_tag: "NLP · Information Retrieval",
        project_sd_title: "San Diego Land Use RAG",
        project_sd_desc: "Domain-adapted transformer pipeline for intelligent legal document retrieval and generation.",
        project_migraine_tag: "iOS · Health Tech",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Native iOS application for on-device migraine pattern recognition, environmental monitoring, and longitudinal tracking.",
        project_eurosat_tag: "Computer Vision",
        project_eurosat_title: "EuroSat TensorFlow",
        project_eurosat_desc: "Land cover classification from satellite imagery using Convolutional Neural Networks.",
        project_option_tag: "Computational Finance",
        project_option_title: "Option Pricing",
        project_option_desc: "Black-Scholes option pricing model with interactive visualization.",
        project_arrow: "View case study →",

        // Skills
        skills_title: "Skills",
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
        contact_text: "Feel free to reach out via LinkedIn or email.",
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
        desc_finra: "Securities Industry Essentials: covers foundation of securities, risk, and market regulations.",
        desc_ca_life: "California Life-Only Agent: authorized for life insurance policies and annuities.",
        desc_ca_health: "California Accident and Health Agent: authorized for health, disability, and long-term care products.",
        desc_factset: "Advanced proficiency in financial data analytics, equity research, and portfolio modeling.",
        desc_scrum: "Certified agile project management focusing on iterative delivery and team coordination.",
        desc_evm: "Earned Value Management: industry standard methodology integrating cost, schedule, and technical performance to measure project progress.",
        desc_ai_ethics: "AI Ethics & Governance: governance framework and ethical guidelines to ensure AI systems are fair, transparent, and value-aligned.",
        desc_powerbi: "Microsoft Power BI: interactive business intelligence and data visualization software for executive reporting.",
        desc_msproject: "Microsoft Project: project scheduling and management software used to track progress and manage budgets.",
        desc_excel: "Advanced Microsoft Excel spreadsheet calculations, forecasting, and financial data modeling.",

        footer: "© 2026 Aresh Tajvar",

        // Subpages
        back_portfolio: "← Back to Portfolio",
        context_title: "Context & Problem",
        approach_title: "Architecture & Approach",
        features_title: "Features & Functionality",
        results_title: "Key Results",
        highlights_title: "Key Highlights",
        takeaways_title: "Strategic & System Takeaways",
        view_github: "View Code on GitHub",
        view_live: "View Live Project",
        launch_demo: "Interactive Demo",
        launch_app: "Launch Interactive Demo ↗",
        rag_demo_note: "Experience the domain-adapted RAG pipeline in action through our dedicated interactive interface.",
        rag_demo_status: '<span style="color: var(--text-primary); font-weight: 600;">Note:</span> Hosted on Hugging Face Spaces. If app is sleeping, please click "Restart Space" and wait 1-2 minutes.',
        visit_product: "Visit Product Website ↗",
        migraine_tag1: "iOS",
        migraine_tag2: "Health Tech",
        migraine_tag3: "Swift",
        project_migraine_subtitle: "A native iOS application engineered for on-device migraine pattern recognition, environmental monitoring, and accessible symptom tracking.",
        migraine_p1: "Tracking chronic health conditions often creates significant cognitive friction. During acute migraine episodes, light sensitivity, cognitive fatigue, and physical discomfort make conventional mobile interfaces (filled with bright colors, fluid animations, and tedious multi-step inputs) difficult or painful to use.",
        migraine_p2: "Furthermore, migraine triggers are deeply individualized and heavily influenced by external shifts. Effectively identifying episode patterns requires synthesizing personal biometric indicators with localized environmental factors without compromising sensitive medical data.",
        migraine_p3: "I developed Migraine Navigator as a native iOS and iPadOS application using <strong>Swift</strong>, <strong>SwiftUI</strong>, and <strong>SwiftData</strong>. The system is architected with a strict on-device privacy model: all physiological records, location coordinates, database queries, and predictive computations execute locally without remote telemetry or cloud processing.",
        migraine_p4: "To capture real-time context, the application integrates natively with <strong>Apple WeatherKit</strong> for barometric pressure, temperature, and humidity tracking, alongside <strong>Apple HealthKit</strong> for resting heart rate, heart rate variability, and sleep metrics. Forward-looking analytical models evaluate historical episode data against these live streams to generate individualized risk forecasts.",
        migraine_p5: "The interface is engineered specifically for photophobia accessibility. It replaces bouncy physics, spring animations, and fluid transitions with calm, static, high-contrast controls and a single-tap discrete rating grid for effortless logging during active symptoms.",
        migraine_r1: "Built entirely on a zero-telemetry local architecture where all health analytics and biometric storage remain strictly on-device.",
        migraine_r2: "Engineered native Apple HealthKit and WeatherKit ingestion pipelines to correlate biometric strain with localized atmospheric pressure shifts.",
        migraine_r3: "Designed a photophobia-calibrated SwiftUI interface that eliminates motion triggers and visual glare for pain-free logging during acute episodes.",
        migraine_r4: "Implemented longitudinal analytics using native Swift Charts to visualize 24-hour risk curves, 7-day environmental outlooks, and episode trends with full CSV portability.",
        migraine_t1: "Prioritizing on-device computation ensures complete patient privacy and offline reliability for critical medical tracking without recurring cloud dependencies.",
        migraine_t2: "Accessibility-first product design in healthcare requires tailoring interface physics directly to symptom pathology, substituting conventional motion design with static, low-glare interactions.",
        migraine_t3: "Synthesizing ambient environmental data with passive biometrics delivers personalized risk insights without imposing manual data entry burdens on users.",
        rag_tag2: "Information Retrieval",
        rag_p1: "Municipal land-use documents and zoning laws are notoriously dense and challenging to parse. When citizens or paralegals interact with standard text-retrieval systems or generic LLMs, the models frequently hallucinate or fail to pull the exact municipal codes required for compliance.",
        rag_p2: "For my Master's capstone project, I engineered a domain-adapted AI retrieval system for San Diego municipal land-use regulations that guarantees high retrieval precision and factual grounding.",
        rag_p3: "To ensure the system retrieves accurate legal phrasing, I bypassed standard embedding models and rigorously benchmarked a domain-adapted <strong>Legal-BERT</strong> model against the baseline <strong>MiniLM</strong> architecture.",
        rag_p4: "Because real-world user queries for zoning laws are complex and multi-faceted, I engineered a synthetic 50-query \"Ground Truth\" dataset using Gemini 2.0 Flash, built directly from legal document chunks. This dataset anchors the evaluation pipeline.",
        rag_p5: "To validate the generation phase, the pipeline assesses outputs using a multi-metric approach: <strong>ROUGE-L</strong> for structural similarity, <strong>BERTScore</strong> for semantic similarity, and a strict <strong>LLM-as-a-judge faithfulness scoring</strong> mechanism to completely penalize hallucinations.",
        rag_r1: "Achieved a 140% increase in retrieval precision (72% Hit Rate @ 5) through systematic model fine-tuning and multi-architecture benchmarking across three distinct retrieval strategies.",
        rag_r2: "Quantifiably mitigated hallucination rates through the implementation of a strict faithfulness evaluation pipeline.",
        rag_r3: "Sole architect and developer of a fully deployed AI application, published to Hugging Face with a live public demo and open-source domain-adapted model, delivered as a solo capstone project.",
        eurosat_tag2: "Deep Learning",
        eurosat_p1: "Monitoring land cover changes (such as urban sprawl, deforestation, and agricultural health) is historically manual and expensive. The introduction of the EuroSat dataset (based on Sentinel-2 satellite images) established a benchmark for automating this process via machine learning.",
        eurosat_p2: "The core challenge is building a computer vision model that can accurately distinguish between visually similar terrain categories (e.g., permanent crops vs. pastures) across thousands of satellite tiles.",
        eurosat_p3: "I built an end-to-end computer vision pipeline using <strong>TensorFlow</strong> and <strong>Keras</strong> to ingest, process, and classify the image dataset into 10 distinct land-use categories.",
        eurosat_p4: "The architecture relies on custom <strong>Convolutional Neural Networks (CNNs)</strong>. To prevent the model from overfitting to specific geographic artifacts in the training data, I implemented robust regularization techniques, including aggressive dropout layers and dynamic learning rate adjustments.",
        eurosat_r1: "Successfully engineered a scalable multi-class image classification model.",
        eurosat_r2: "Utilized data augmentation to artificially expand the training set, improving the model's ability to generalize to novel satellite imagery.",
        eurosat_r3: "Evaluated multi-class performance with confusion matrix analysis to verify class boundary separation across visually similar terrain categories.",
        opt_tag1: "Computational Finance",
        opt_tag2: "Quantitative Analysis",
        opt_title: "Option Pricing Engine",
        opt_subtitle: "Black-Scholes option pricing model with an interactive graphical interface.",
        opt_p1: "Deriving the theoretical value of a stock option requires complex stochastic calculus. While the Black-Scholes-Merton model provides the mathematical standard, the non-linear variables (especially the impact of implied volatility and time decay) are difficult to visualize without dedicated quantitative tools.",
        opt_p2: "I developed a localized financial application using <strong>Python</strong> that executes the Black-Scholes formula natively. Because computational finance tools are only as useful as they are accessible, I built a lightweight graphical user interface (GUI) using <strong>Tkinter</strong> to wrap the quantitative logic.",
        opt_p3: "The application takes in real-time user parameters (underlying asset price, strike price, time to expiration, risk-free interest rate, and volatility) and immediately computes the theoretical price for both European Call and Put options.",
        opt_r1: "Programmed the foundational stochastic partial differential equation into an optimized Python pipeline.",
        opt_r2: "Bridged the gap between raw quantitative mathematics and actionable trading insights via an interactive local dashboard.",
        opt_r3: "Demonstrated the ability to translate complex financial logic (useful for my FactSet and FINRA background) into functional software.",
        // Strata Advisor
        project_strata_tag: "Quantitative Finance",
        project_strata_title: "Strata Advisor",
        project_strata_desc: "Tax-aware, evidence-based portfolio management system designed to operate as a Strategic Advisor.",
        project_strata_subtitle: "An evidence-based, tax-aware portfolio management system designed to operate strictly as a Strategic Advisor.",
        strata_tag1: "Quantitative Finance",
        strata_tag2: "Python",
        strata_p1: "Strata Advisor is an evidence-based, tax-aware portfolio management system written in Python and designed to operate strictly as a Strategic Advisor. It integrates historical backtesting, a volatility-governed emergent allocation framework, and quantitative machine-learning models to balance long-term asset selection with tactical alpha.",
        strata_p2: "Portfolio exposure ceilings scale dynamically through a volatility governor (<code>MetaAllocator</code>) that compares trailing realized market volatility against target volatility thresholds. Asset selection and position sizing across the universe are handled by a unified strategic engine (<code>DynamicAllocator</code>) combining relative momentum rankings with inverse volatility risk parity.",
        strata_p3: "Tactical machine-learning models (<code>EnsembleModel</code>) receive an emergent residual budget consisting of unallocated cash from the strategic engine to trade intraday mean reversion. Proposed rebalancing orders pass through a tax-aware optimization filter that evaluates lot-level cost basis and holding periods, suppressing sales when tax friction exceeds marginal expected alpha while enforcing hard safeguards during steep drawdowns.",
        strata_p4: "In compliance with Schwab API non-discretionary requirements, Strata Advisor does not automatically execute live trades. It stages generated targets and trade intents to a local terminal user interface (TUI) dashboard for explicit human review and approval prior to broker execution.",
        strata_r1: "Volatility-governed exposure scaling that deleverages the portfolio during elevated market volatility.",
        strata_r2: "Unified strategic asset allocation using Top-N relative momentum and inverse volatility position sizing.",
        strata_r3: "Emergent residual budgeting for tactical machine-learning models using unallocated strategic capital.",
        strata_r4: "Tax-aware rebalance optimization that evaluates capital gains friction with conviction-weighted exit hurdles.",
        strata_r5: "Non-discretionary advisor mode featuring a local TUI staging dashboard, unified CLI, and a 120+ test suite.",
        strata_t1: "Accounting for lot-level tax friction allows high-conviction winning assets to compound undisturbed as core positions, preventing marginal rebalancing from triggering unnecessary capital gains liabilities.",
        strata_t2: "Capital efficiency is preserved across market regimes by channeling unallocated strategic cash into tactical ML models when volatility scaling reduces strategic exposure.",
        strata_t3: "Structuring the platform as a non-discretionary advisor with TUI staging ensures strict broker API compliance and human-in-the-loop validation before live order execution.",
        // ADS-B Anomaly Detector
        project_adsb_tag: "SIGINT · ML",
        project_adsb_title: "ADS-B Anomaly Detector",
        project_adsb_desc: "Real-time aerospace telemetry ingestion and unsupervised anomaly detection pipeline.",
        adsb_tag1: "SIGINT",
        adsb_tag2: "Machine Learning",
        adsb_title: "ADS-B Telemetry Anomaly Detector",
        adsb_subtitle: "Real-time aerospace telemetry ingestion and unsupervised anomaly detection pipeline.",
        adsb_p1: "Aircraft constantly broadcast their GPS position and velocity via Automatic Dependent Surveillance-Broadcast (ADS-B). However, in high-conflict regions like the Baltic Sea and Eastern Mediterranean, telemetry data is frequently jammed or spoofed, resulting in impossible trajectories and altitude readings.",
        adsb_p2: "I engineered a localized Python pipeline to ingest live flight telemetry from the OpenSky Network API. To calculate ground speed dynamically across sequential API queries, I built a stateful tracking system backed by a local SQLite database.",
        adsb_p3: "To identify anomalous behavior, the pipeline filters out physical impossibilities (e.g., ground speed exceeding Mach 1) and applies an unsupervised machine learning model. Specifically, it fits an Isolation Forest model to detect statistical outliers in barometric versus geometric altitude discrepancies and normalized velocity vectors.",
        adsb_r1: "Built a robust, real-time data ingestion pipeline with local state management.",
        adsb_r2: "Applied unsupervised Isolation Forest modeling to untagged, real-world geospatial data.",
        adsb_r3: "Generated interactive, dark-themed geographic visualizations using Folium to map valid vs. anomalous trajectories.",
        // Swarm Simulator
        project_swarm_tag: "Defense Tech · Swarm Intelligence",
        project_swarm_title: "Adversarial Swarm Simulator",
        project_swarm_desc: "Simulation framework for studying emergent stigmergic swarm dynamics under localized electromagnetic interference (EMI).",
        swarm_tag1: "Defense Tech",
        swarm_tag2: "Swarm Intelligence",
        swarm_tag3: "Autonomous Systems",
        swarm_title: "Adversarial Swarm Simulator",
        swarm_subtitle: "Simulation framework for studying emergent stigmergic swarm dynamics under localized electromagnetic interference (EMI).",
        swarm_p1: "Coordinating autonomous multi-drone swarms in environments without GPS and without external communications (such as ground station or operator links) requires decentralization. Centralized command-and-control (C2) architectures create single points of failure when subjected to directional jamming or electronic warfare (EW).",
        swarm_p2: "Biological stigmergy (decentralized indirect coordination via spatial environmental signals) provides a decentralized alternative. Continuous low-power RF telemetry broadcasts fade over time as information becomes stale, functioning as virtual pheromones. Evaluating how signal decay rates, sensor radii, and active EW jamming fields interact across parameter spaces requires empirical simulation and sensitivity analysis.",
        swarm_p3: "To model decentralized coordination, I developed a 2D spatial simulation engine in Python built on dual-team signal grids (<code>PheromoneGrid</code>). When drones discover objective nodes, they deposit directional recruitment trails that fade exponentially over step iterations to model telemetry signal staleness. Inside active jamming sectors, localized EMI fields reduce perceived trail intensity (<em>I</em><sub>perceived</sub> = <em>I</em><sub>true</sub> × (1 - jamming_intensity)) and attenuate exploration entropy.",
        swarm_p4: "Individual drone navigation is governed by a 5-tier decision tree evaluated at every step: <strong>Attack</strong> nearby enemy units within combat range, <strong>Defend</strong> threatened friendly nodes, <strong>Capture</strong> locked objective nodes, <strong>Follow Trails</strong> by climbing ascending recruitment gradients (<em>I</em><sub>cand</sub> > <em>I</em><sub>curr</sub> + 0.1), and <strong>Patrol & Explore</strong> unvisited grid sectors. Objective control is managed by an <em>N</em>-drone <em>T</em>-step uncontested state machine with instant reset logic if an opposing drone enters the capture radius.",
        swarm_p5: "For parameter analysis, I built a multi-process experiment runner that executes headless sweeps in parallel, logging run metrics directly to CSV files. The analytical pipeline includes an automated movement stagnation detector (<code>is_jitter_clustering</code>) that tracks early-game spawn displacement, alongside a Matplotlib plotting module that generates sensitivity curves with confidence bands and match outcome distributions.",
        swarm_r1: "Signal decay rates below 0.2 trigger movement stagnation and clustering around spawn points, whereas rates above 0.5 accelerate match resolution from 500 down to 150–300 steps.",
        swarm_r2: "Directional jamming fields alter tactical micro-trajectories without degrading macro win rates or territorial outcomes, confirming strategic swarm resilience under intense EMI.",
        swarm_r3: "Increasing node capture thresholds from 1 to 10 drones reduces average team control from 4.5 to 1.4 nodes as dispersion limits multi-objective coverage.",
        swarm_r4: "Expanding sensor detection radii from 8 to 20 grid cells yields the fastest territory acquisition across all symmetric parameter sweeps.",
        swarm_t1: "Indirect spatial stigmergy eliminates the vulnerability of single-point centralized command networks in denied communications environments.",
        swarm_t2: "Macro electronic warfare resilience emerges naturally because swarms bypass local trajectory jamming through decentralized continuous trail recruitment across uncontested sectors.",
        swarm_t3: "Batch parallel simulation over 1,600+ runs revealed that signal decay rate acts as the primary phase-transition governor between swarm stagnation and dynamic capture.",
    },
    es: {
        // Nav
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_education: "Educación",
        nav_experience: "Trabajo",
        nav_skills: "Habilidades",
        nav_contact: "Contacto",

        // Hero
        name: "Aresh Tajvar",
        tagline: 'Aplicando Inteligencia Artificial.<br><br><span class="hero-degree">Maestría en Inteligencia Artificial Aplicada</span><br><span class="hero-degree-sub">Licenciatura en Administración de Empresas | Gestión Financiera</span>',

        // Experience
        exp_title: "Historial Laboral",
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
        about_title: "Sobre mí",
        about_p1: 'Soy graduado de la Maestría en Inteligencia Artificial Aplicada con experiencia profesional en gestión de programas, análisis financiero e informes corporativos. Combino una rigurosa base técnica en IA/ML con visión estratégica de negocio para impulsar la transformación en la intersección de la tecnología y las operaciones.',
        about_p2: 'Tengo una Maestría en Inteligencia Artificial Aplicada de la Universidad de San Diego y una Licenciatura en Administración de Empresas de California Polytechnic State University, San Luis Obispo. Mi trabajo se centra en la aplicación práctica de la IA, incluyendo pipelines de recuperación para documentos legales, modelos predictivos para analítica de salud, sistemas de clasificación de imágenes y herramientas de finanzas computacionales.',
        about_p3: 'Soy trilingüe en inglés, español y persa.',

        // Education
        edu_title: "Educación",
        edu_usd: "Universidad de San Diego",
        edu_usd_date: "2024 – 2026",
        edu_ms: "Maestría en Inteligencia Artificial Aplicada",
        edu_ms_meta: "Escuela de Ingeniería Shiley-Marcos · GPA: 4.0",
        edu_ms_b1: "<strong>Aprendizaje Automático y Profundo:</strong> Fundamentos de Machine Learning (AAI 510), Redes Neuronales y Aprendizaje (AAI 511), Operaciones de Machine Learning / MLOps (AAI 540).",
        edu_ms_b2: "<strong>PNL y Visión por Computadora:</strong> Procesamiento del Lenguaje Natural (AAI 520), Visión por Computadora Aplicada a la IA (AAI 521).",
        edu_ms_b3: "<strong>Fundamentos de IA y Analítica:</strong> Probabilidad y Estadística para IA (AAI 500), Introducción a la IA (AAI 501), Analítica de Datos e IoT (AAI 530), Ética en IA (AAI 531).",
        edu_ms_b4: "<strong>Proyecto Capstone:</strong> Proyecto Capstone AAI 590: sistema RAG adaptado al dominio para recuperación de documentos legales con evaluación de fidelidad.",
        edu_calpoly: "California Polytechnic State University, San Luis Obispo",
        edu_calpoly_date: "2019 – 2023",
        edu_bs: "Licenciatura en Administración de Empresas | Gestión Financiera",
        edu_bs_meta: "Orfalea College of Business · GPA: 3.5",
        edu_bs_b1: "<strong>Gestión Financiera y Valoración:</strong> Análisis de Valores y Gestión de Portafolios (BUS 431), Fundamentos de Finanzas Corporativas (BUS 342), Finanzas Corporativas Avanzadas (BUS 438), Mercado de Valores de Renta Fija (BUS 439), Finanzas Inmobiliarias (BUS 434), Finanzas Internacionales (BUS 433).",
        edu_bs_b2: "<strong>Econometría y Estadística:</strong> Econometría (ECON 339), Inferencia Estadística y Gestión I y II (STAT 251, STAT 252), Cálculo para Negocios y Economía (MATH 221), Macroeconomía (ECON 222), Microeconomía (ECON 221).",
        edu_bs_b3: "<strong>Estrategia Empresarial y Contabilidad:</strong> Estrategia y Gestión General (BUS 401), Contabilidad Financiera (BUS 214), Contabilidad de Gestión (BUS 215), Sistemas de Información (BUS 391), Proyecto Final I y II (BUS 461, BUS 462).",

        // Projects
        projects_title: "Proyectos",
        project_sd_tag: "NLP · Recuperación de Información",
        project_sd_title: "SD Land Use RAG",
        project_sd_desc: "Pipeline de transformers adaptado al dominio para la recuperación y generación de información en documentos legales.",
        project_migraine_tag: "iOS · Salud Digital",
        project_migraine_title: "Migraine Navigator",
        project_migraine_desc: "Aplicación nativa de iOS para el reconocimiento de patrones de migraña en el dispositivo, monitoreo ambiental y seguimiento longitudinal.",
        project_eurosat_tag: "Visión Artificial",
        project_eurosat_title: "EuroSat TensorFlow",
        project_eurosat_desc: "Clasificación de cobertura terrestre mediante Redes Neuronales Convolucionales a partir de imágenes satelitales.",
        project_option_tag: "Finanzas Computacionales",
        project_option_title: "Valoración de Opciones",
        project_option_desc: "Modelo Black-Scholes con visualización interactiva para la valoración de opciones financieras.",
        project_arrow: "Ver caso de estudio →",

        // Skills
        skills_title: "Habilidades",
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
        contact_text: "No dudes en ponerte en contacto a través de LinkedIn o correo electrónico.",
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
        features_title: "Funcionalidades y Capacidades",
        results_title: "Resultados Clave",
        highlights_title: "Aspectos Destacados",
        takeaways_title: "Conclusiones Estratégicas y del Sistema",
        view_github: "Ver Código en GitHub",
        view_live: "Ver Proyecto en Vivo",
        launch_demo: "Demo Interactiva",
        launch_app: "Lanzar Demo Interactiva ↗",
        rag_demo_note: "Experimenta el pipeline RAG adaptado al dominio en acción a través de nuestra interfaz interactiva dedicada.",
        rag_demo_status: '<span style="color: var(--text-primary); font-weight: 600;">Aviso:</span> Alojado en Hugging Face Spaces. Si la aplicación está en reposo, haz clic en "Restart Space" y espera 1-2 minutos.',
        visit_product: "Visitar Sitio Web del Producto ↗",
        migraine_tag1: "iOS",
        migraine_tag2: "Salud Digital",
        migraine_tag3: "Swift",
        project_migraine_subtitle: "Una aplicación nativa de iOS diseñada para el reconocimiento de patrones de migraña en el dispositivo, monitoreo ambiental y registro accesible de síntomas.",
        migraine_p1: "El seguimiento de condiciones crónicas suele generar una notable fricción cognitiva. Durante episodios agudos de migraña, la sensibilidad a la luz, la fatiga cognitiva y el malestar físico hacen que las interfaces móviles convencionales (cargadas de colores brillantes, animaciones fluidas y formularios complejos) resulten difíciles o dolorosas de usar.",
        migraine_p2: "Además, los desencadenantes de la migraña son altamente individuales y están influenciados por cambios externos. Identificar patrones de episodios requiere sintetizar indicadores biométricos personales con factores ambientales locales sin comprometer la privacidad de datos médicos sensibles.",
        migraine_p3: "Desarrollé Migraine Navigator como una aplicación nativa para iOS y iPadOS utilizando <strong>Swift</strong>, <strong>SwiftUI</strong> y <strong>SwiftData</strong>. El sistema está diseñado bajo un estricto modelo de privacidad en el dispositivo: todos los registros fisiológicos, coordenadas de ubicación y cómputos analíticos se ejecutan localmente sin telemetría remota ni procesamiento en la nube.",
        migraine_p4: "Para capturar el contexto en tiempo real, la aplicación se integra de forma nativa con <strong>Apple WeatherKit</strong> para monitorear presión barométrica, temperatura y humedad, y con <strong>Apple HealthKit</strong> para frecuencia cardíaca en reposo, variabilidad de la frecuencia cardíaca (HRV) y métricas de sueño. Modelos analíticos evalúan el historial de episodios junto a estos flujos para generar pronósticos de riesgo individualizados.",
        migraine_p5: "La interfaz está diseñada específicamente para la accesibilidad ante la fotofobia. Sustituye animaciones y transiciones fluidas por controles estáticos de alto contraste y una cuadrícula de registro de un solo toque para facilitar el registro durante episodios activos de dolor.",
        migraine_r1: "Desarrollo basado completamente en una arquitectura local sin telemetría donde todo el almacenamiento y análisis biométrico permanece estrictamente en el dispositivo.",
        migraine_r2: "Implementación de flujos de integración nativos con Apple HealthKit y WeatherKit para correlacionar el esfuerzo biométrico con variaciones de presión atmosférica.",
        migraine_r3: "Diseño de interfaz en SwiftUI calibrada para fotofobia, eliminando transiciones con movimiento y destellos visuales para permitir un registro sin esfuerzo durante crisis de dolor.",
        migraine_r4: "Visualización analítica longitudinal con Swift Charts para proyectar curvas de riesgo de 24 horas, previsiones ambientales de 7 días y tendencias históricas con exportación CSV.",
        migraine_t1: "Priorizar el cómputo local en el dispositivo garantiza total privacidad de los datos de salud y confiabilidad offline sin depender de infraestructura en la nube.",
        migraine_t2: "El diseño accesible en salud digital exige adaptar la física de la interfaz a la patología del síntoma, reemplazando el diseño de movimiento convencional por interacciones estáticas de bajo brillo.",
        migraine_t3: "Sintetizar variables ambientales con biometría pasiva genera estimaciones de riesgo personalizadas sin imponer una carga de entrada manual continua al usuario.",
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
        eurosat_r3: "Evaluación del desempeño multiclase mediante matrices de confusión para verificar la separación de fronteras en categorías de terreno visualmente similares.",
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
        // Strata Advisor
        project_strata_tag: "Finanzas Cuantitativas",
        project_strata_title: "Strata Advisor",
        project_strata_desc: "Sistema de gestión de carteras basado en evidencia que considera los impuestos, diseñado para operar como Asesor Estratégico.",
        project_strata_subtitle: "Un sistema de gestión de carteras basado en evidencia que considera los impuestos, diseñado para operar estrictamente como Asesor Estratégico.",
        strata_tag1: "Finanzas Cuantitativas",
        strata_tag2: "Python",
        strata_p1: "Strata Advisor es un sistema de gestión de carteras basado en evidencia y consciente de los impuestos, desarrollado en Python y diseñado para operar estrictamente como Asesor Estratégico. Integra backtesting histórico, un marco de asignación emergente gobernado por volatilidad y modelos cuantitativos de machine learning para equilibrar la selección de activos a largo plazo con alfa táctico.",
        strata_p2: "El límite de exposición del portafolio se modula dinámicamente mediante un gobernador de volatilidad (<code>MetaAllocator</code>) que compara la volatilidad realizada del mercado frente a la volatilidad objetivo. La selección y dimensionamiento de posiciones están a cargo de un motor estratégico unificado (<code>DynamicAllocator</code>) que combina momentum relativo con paridad de riesgo por volatilidad inversa.",
        strata_p3: "Los modelos tácticos de machine learning (<code>EnsembleModel</code>) reciben un presupuesto residual emergente compuesto por el efectivo no asignado del motor estratégico para operar reversión a la media intradía. Las órdenes de rebalanceo propuestas pasan por un filtro fiscal que evalúa el costo base por lotes, suprimiendo ventas cuando la carga impositiva supera el alfa marginal esperado, con salvaguardas directas ante caídas severas.",
        strata_p4: "En cumplimiento de los requisitos no discrecionales de la API de Schwab, Strata Advisor no ejecuta órdenes en vivo automáticamente. Envía los objetivos generados y las intenciones de operación a un panel TUI local para su revisión y aprobación humana explícita antes de la ejecución.",
        strata_r1: "Escalamiento de exposición gobernado por volatilidad que desapalanca el portafolio durante periodos de alta volatilidad de mercado.",
        strata_r2: "Asignación estratégica unificada mediante momentum relativo Top-N y dimensionamiento por volatilidad inversa.",
        strata_r3: "Presupuesto residual emergente para modelos tácticos de machine learning a partir de capital estratégico no asignado.",
        strata_r4: "Optimización de rebalanceo con conciencia fiscal que evalúa la fricción impositiva con umbrales de salida ponderados por convicción.",
        strata_r5: "Modo asesor no discrecional con panel TUI para procesar órdenes, CLI unificada y una suite de más de 120 pruebas automatizadas.",
        strata_t1: "Evaluar la fricción fiscal a nivel de lote permite que los activos ganadores de alta convicción continúen componiendo capital como tenencias principales, evitando que el rebalanceo marginal genere obligaciones tributarias innecesarias.",
        strata_t2: "La eficiencia del capital se mantiene a través de distintos regímenes de mercado al canalizar el efectivo estratégico no asignado hacia modelos tácticos cuando la volatilidad reduce la exposición estratégica.",
        strata_t3: "Diseñar la plataforma como un asesor no discrecional con un panel TUI garantiza el cumplimiento de las normativas de APIs de corretaje y mantiene la validación humana antes de la ejecución de órdenes.",
        // ADS-B Anomaly Detector
        project_adsb_tag: "SIGINT · ML",
        project_adsb_title: "Detector de Anomalías ADS-B",
        project_adsb_desc: "Pipeline de ingesta de telemetría aeroespacial en tiempo real y detección no supervisada de anomalías.",
        adsb_tag1: "SIGINT",
        adsb_tag2: "Machine Learning",
        adsb_title: "Detector de Anomalías de Telemetría ADS-B",
        adsb_subtitle: "Pipeline de ingesta de telemetría aeroespacial en tiempo real y detección no supervisada de anomalías.",
        adsb_r1: "Desarrollo de un pipeline robusto para la ingesta de datos en tiempo real con gestión de estado local.",
        adsb_r2: "Aplicación de modelos no supervisados (Isolation Forest) sobre datos geoespaciales reales no etiquetados.",
        adsb_r3: "Generación de visualizaciones geográficas interactivas utilizando Folium para mapear las trayectorias válidas frente a las anómalas.",
        // Swarm Simulator
        project_swarm_tag: "Tecnología de Defensa · Inteligencia de Enjambre",
        project_swarm_title: "Simulador de Enjambre Adversario",
        project_swarm_desc: "Framework de simulación para estudiar la dinámica de enjambres estigmérgicos bajo interferencia electromagnética (EMI) localizada.",
        swarm_tag1: "Tecnología de Defensa",
        swarm_tag2: "Inteligencia de Enjambre",
        swarm_tag3: "Sistemas Autónomos",
        swarm_title: "Simulador de Enjambre Adversario",
        swarm_subtitle: "Framework de simulación para estudiar la dinámica de enjambres estigmérgicos bajo interferencia electromagnética (EMI) localizada.",
        swarm_p1: "Coordinar enjambres multi-dron autónomos en entornos sin GPS y sin comunicaciones externas (como enlaces con estaciones de tierra u operadores) requiere descentralización. Las arquitecturas tradicionales de mando y control (C2) centralizadas representan puntos únicos de fallo ante interferencias direccionales o guerra electrónica (EW).",
        swarm_p2: "La estigmergia biológica (coordinación indirecta descentralizada mediante señales ambientales espaciales) ofrece una alternativa descentralizada. Las transmisiones de telemetría RF de baja potencia se atenúan con el tiempo al quedar obsoletas, actuando como feromonas virtuales. Evaluar cómo interactúan las tasas de decaimiento de señal, los radios de sensor y los campos de interferencia EW requiere simulación empírica y análisis de sensibilidad.",
        swarm_p3: "Para modelar la coordinación descentralizada, desarrollé un motor de simulación espacial 2D en Python basado en mallas de señales de doble equipo (<code>PheromoneGrid</code>). Al descubrir nodos de objetivos, los drones depositan rastros de reclutamiento direccionales que se atenúan exponencialmente a lo largo de las iteraciones para modelar la caducidad de la telemetría. Dentro de sectores con interferencia activa, los campos EMI locales reducen la intensidad percibida del rastro (<em>I</em><sub>percibida</sub> = <em>I</em><sub>real</sub> × (1 - intensidad_interferencia)) y atenúan la entropía de exploración.",
        swarm_p4: "La navegación individual del dron se rige por un árbol de decisión de 5 niveles evaluado en cada paso: <strong>Ataque</strong> a unidades enemigas dentro del rango de combate, <strong>Defensa</strong> de nodos aliados amenazados, <strong>Captura</strong> de objetivos bloqueados, <strong>Seguimiento de rastro</strong> ascendiendo gradientes de reclutamiento (<em>I</em><sub>cand</sub> > <em>I</em><sub>actual</sub> + 0,1), y <strong>Patrulla y exploración</strong> de sectores no visitados. El control de objetivos se gestiona mediante una máquina de estados no disputada de <em>N</em> drones y <em>T</em> pasos con reinicio instantáneo si un dron enemigo entra en el radio de captura.",
        swarm_p5: "Para el análisis de parámetros, construí un ejecutor de experimentos multi-proceso para barridos headless en paralelo, registrando métricas directamente en archivos CSV. El pipeline analítico incluye un detector automatizado de estancamiento de movimiento (<code>is_jitter_clustering</code>) que rastrea el desplazamiento inicial en el origen, junto con un módulo de gráficos en Matplotlib que genera curvas de sensibilidad con bandas de confianza y distribuciones de resultados.",
        swarm_r1: "Tasas de decaimiento de señal inferiores a 0.2 provocan estancamiento de movimiento cerca del punto de origen, mientras que valores superiores a 0.5 aceleran la resolución de partidas de 500 a 150–300 pasos.",
        swarm_r2: "Los campos de interferencia direccional alteran microtrayectorias tácticas sin degradar las tasas de victoria macro ni el control territorial, confirmando la resiliencia estratégica del enjambre bajo fuerte interferencia electromagnética.",
        swarm_r3: "Aumentar el umbral de captura de 1 a 10 drones reduce el control promedio por equipo de 4.5 a 1.4 nodos debido a las restricciones de dispersión sobre múltiples objetivos.",
        swarm_r4: "Ampliar el radio de detección de sensores de 8 a 20 celdas genera la captura territorial más rápida en todas las pruebas paramétricas simétricas.",
        swarm_t1: "La estigmergia espacial indirecta elimina la vulnerabilidad de redes de mando centralizadas con puntos únicos de fallo en entornos de comunicaciones denegadas.",
        swarm_t2: "La resiliencia macro ante guerra electrónica surge orgánicamente porque los enjambres evaden la interferencia de trayectorias locales mediante reclutamiento descentralizado continuo en sectores no disputados.",
        swarm_t3: "La simulación paralela por lotes en más de 1.600 partidas demostró que la tasa de decaimiento de la señal actúa como el gobernador principal de transición de fase entre el estancamiento y la captura dinámica.",
    },
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
