import { Project, UpcomingProject, Experience, Education, SkillCategory, ReferenceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Hieu Le',
  branding: 'hieu.le',
  headline: 'Software Engineer & AI Systems Engineer',
  subheadline: '5+ years shipping high-reliability systems in fintech, identity verification & healthcare — now engineering next-generation machine learning and AI systems at RMIT University.',
  location: 'Melbourne, VIC, Australia',
  email: 'hieutongle@gmail.com',
  phone: '0481814979',
  phoneDisplay: '0481 814 979',
  phoneInternational: '+61 481 814 979',
  github: 'https://github.com/HieuTong',
  githubUsername: 'HieuTong',
  linkedin: 'https://linkedin.com/in/hieutongle',
  availability: 'Actively seeking Software Engineering, Machine Learning Engineering, or AI Engineering opportunities',
  relocation: 'Melbourne (On-site / Hybrid) or Remote (Australia / Global)',
  bio: `Software Engineer with 5 years of production experience designing, building, and deploying mission-critical software across fintech, healthcare, and identity verification. Currently completing a Master of Artificial Intelligence at RMIT University in Melbourne, specializing in machine learning, deep learning, computer vision, natural language processing, and production-grade ML systems. 

Possesses a proven track record of taking software from conception through automated CI/CD and cloud deployment, reducing crash rates by 40%, boosting appointment adherence by 30%, and delivering high-throughput SDKs trusted by 10+ tier-1 banking institutions. Driven by rigorous software engineering principles, clean modular architecture, and end-to-end ML lifecycle orchestration.`
};

export const SHIPPED_PROJECTS: Project[] = [
  {
    id: 'ticket-ml-system',
    title: 'Ticket ML System',
    subtitle: 'End-to-End Production ML Text Classification Microservice',
    year: '2026',
    category: 'ml-systems',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'GitHub Actions', 'CI/CD', 'MLOps'],
    summary: 'A production-grade text classification microservice designed to categorize incoming enterprise support tickets in real-time with automated feedback collection, model versioning, and confidence-driven human-in-the-loop fallback routing.',
    problemStatement: 'Enterprise support desks receive thousands of unstructured tickets daily. Routing delays and manual triaging create SLA breaches, while naive ML models without fallback logic risk catastrophic misclassification on ambiguous tickets.',
    solution: 'Engineered a decoupled ML lifecycle separating offline hyperparameter training from online sub-15ms inference. Built confidence thresholding that routes uncertain tickets to human agents while logging feedback for automatic retraining triggers.',
    highlights: [
      'Designed and deployed production-style text classification API supporting single and batch prediction, live health monitoring, and feedback collection.',
      'Built an end-to-end ML lifecycle separating offline training from online inference, with model versioning and feedback-driven retraining.',
      'Implemented confidence-based fallback handling to guard SLA accuracy and automated CI pipelines for testing, linting, and Docker container builds.'
    ],
    metrics: [
      { label: 'Inference Latency', value: '< 15 ms' },
      { label: 'Fallback Threshold', value: '75% Conf.' },
      { label: 'CI/CD Automation', value: '100% Passing' },
      { label: 'API Architecture', value: 'FastAPI / Docker' }
    ],
    githubUrl: 'https://github.com/HieuTong/ticket_ml_system',
    architectureHighlights: [
      'Offline Model Pipeline: TF-IDF vectorization + calibrated MultinomialNB & Logistic Regression ensembles',
      'Online Inference Engine: High-throughput async FastAPI with Prometheus health metrics',
      'Confidence Guard: Dual-threshold evaluator directing low-confidence inputs to fallback queues',
      'Feedback Loop: Stores misclassifications and verified labels for continuous active retraining'
    ]
  },
  {
    id: 'colon-cell-classification',
    title: 'Colon Cell Histopathology Image Classification',
    subtitle: 'Deep Learning Cancer Diagnostics with Patient-Level Split Guard',
    year: '2026',
    category: 'computer-vision',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'Computer Vision', 'Medical AI', 'Deep Learning'],
    summary: 'Developed ML and deep learning models to classify colon cells as cancerous/non-cancerous and identify four distinct cell types using histopathology images from 99 patients with patient-level data leakage prevention.',
    problemStatement: 'Histopathology image classifiers often report inflated academic benchmarks due to image patches from the same biopsy or patient bleeding into both train and test splits, causing disastrous generalization failures in clinical validation.',
    solution: 'Designed a strict patient-level split protocol across 99 individual patients. Conducted systematic ablation of CNN backbones, unsupervised cluster analysis, and heavy data augmentation to maximize generalizeability to completely unseen donor tissues.',
    highlights: [
      'Developed ML and deep learning models to classify colon cells as cancerous/non-cancerous and identify four cell types using histopathology images from 99 patients.',
      'Designed patient-level train, validation, and test splits to strictly prevent data leakage and evaluate true generalization to completely unseen patients.',
      'Applied model comparison, unsupervised analysis, hyperparameter tuning, and advanced image-learning techniques, achieving 0.85 macro F1 for cancer classification and 0.90 for cell-type classification on unseen patients.'
    ],
    metrics: [
      { label: 'Cancer Class F1', value: '0.85 Macro' },
      { label: 'Cell Type F1', value: '0.90 Macro' },
      { label: 'Patient Cohort', value: '99 Patients' },
      { label: 'Data Leakage', value: '0.00% (Strict Split)' }
    ],
    githubUrl: 'https://github.com/HieuTong',
    architectureHighlights: [
      'Data Stratification: Patient-grouped k-fold cross-validation guarding against intra-patient bias',
      'Visual Feature Extraction: Transfer learning on PyTorch vision models with tailored classification heads',
      'Cell Phenotyping: Multi-class discriminator distinguishing epithelial, stromal, immune, and necrotic cells'
    ]
  },
  {
    id: 'wildfire-intensity-classification',
    title: 'Global Wildfire Intensity Classification',
    subtitle: 'Multimodal Satellite & Environmental Machine Learning',
    year: '2026',
    category: 'machine-learning',
    tags: ['Python', 'scikit-learn', 'SVM', 'Neural Networks', 'Geospatial ML', 'Environmental AI'],
    summary: 'Machine learning classification pipeline analyzing multi-spectral satellite imagery, weather telemetry, and geographic variables across 7 regions and 35 countries to classify wildfire events into four discrete hazard intensity tiers.',
    problemStatement: 'Wildfires pose escalating catastrophic ecological and human threats. Early-warning systems often fail when applied across different continents due to regional climate variance and disparate sensor calibrations.',
    solution: 'Built a robust tabular and satellite feature normalization pipeline encompassing 35 countries. Rigorously compared Decision Trees, Support Vector Machines (SVM), and Multi-Layer Perceptrons with grid hyperparameter tuning to select the optimal model.',
    highlights: [
      'Built ML models to classify wildfire events into four intensity levels using satellite, weather, geographic, and environmental data from 7 regions and 35 countries.',
      'Compared Decision Tree, Support Vector Machine, and Neural Network models with systematic hyperparameter analysis.',
      'Achieved 81% accuracy and 0.85 macro F1-score on strictly held-out global test data.'
    ],
    metrics: [
      { label: 'Test Accuracy', value: '81.0%' },
      { label: 'Macro F1-Score', value: '0.85' },
      { label: 'Global Coverage', value: '7 Regions, 35 Nations' },
      { label: 'Target Classes', value: '4 Intensity Tiers' }
    ],
    githubUrl: 'https://github.com/HieuTong',
    architectureHighlights: [
      'Cross-Regional Generalization: Normalized meteorological indices (humidity, wind vectors, drought indices)',
      'Ablation Study: Benchmark evaluation of linear vs kernel SVM vs multi-layer perceptron architectures',
      'Class Balancing: Strategic re-weighting to ensure severe wildfire tiers receive equal optimization gradient'
    ]
  },
  {
    id: 'melbourne-airbnb-prediction',
    title: 'Melbourne Airbnb Price Prediction',
    subtitle: 'Regularized Econometric & Housing Market Regression Modeling',
    year: '2026',
    category: 'machine-learning',
    tags: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Regression Analysis', 'Feature Engineering'],
    summary: 'Developed and validated regularized econometric regression models to forecast nightly accommodation rates across the Melbourne metropolitan market using location, host characteristics, and customer reviews.',
    problemStatement: 'Short-term rental rates are skewed by seasonal outliers, sparse neighborhood densities, and complex interaction terms between host ratings and property amenities.',
    solution: 'Engineered multidimensional geospatial and textual features from host descriptions. Compared Ordinary Least Squares (OLS), Ridge (L2), and Lasso (L1) regression models, penalizing multicollinearity and zeroing non-informative predictors.',
    highlights: [
      'Developed regression models to predict nightly Airbnb prices using property, location, host, and review features.',
      'Compared Linear Regression, Ridge, and Lasso models and investigated the impact of regularisation hyperparameters (alpha tuning).',
      'Evaluated models using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² to select the highest-performing predictive approach on held-out test data.'
    ],
    metrics: [
      { label: 'Evaluation Metrics', value: 'MAE, RMSE, R²' },
      { label: 'Model Variants', value: 'OLS, Ridge, Lasso' },
      { label: 'Feature Space', value: 'Geospatial + Host Meta' },
      { label: 'Target Variable', value: 'Nightly Rate (AUD)' }
    ],
    githubUrl: 'https://github.com/HieuTong',
    architectureHighlights: [
      'Regularization Sweep: Log-spaced alpha search identifying optimal sparse feature subset via Lasso',
      'Outlier Mitigation: Logarithmic target transformation resolving right-skewed pricing distributions',
      'Geospatial Proximity: Extracted distance vectors to Melbourne CBD, transit hubs, and beachfront corridors'
    ]
  }
];

export const UPCOMING_PROJECTS: UpcomingProject[] = [
  {
    id: 'edge-slm-agent-orchestrator',
    title: 'Edge-Local SLM & Multimodal Agent Orchestrator',
    codename: 'Project HelixEdge',
    domain: 'Agentic AI',
    timeline: 'Q3–Q4 2026',
    status: 'In Prototyping',
    progress: 65,
    executiveSummary: 'A hybrid agentic runtime combining cloud foundational LLMs with local quantized Small Language Models (SLMs via WebGPU / ONNX Runtime) to execute deterministic tool calling, structured JSON output, and offline privacy-critical tasks.',
    problemStatement: 'Modern agent frameworks depend entirely on remote cloud APIs, causing high per-token latency (800ms+), prohibitive API costs at scale, and total failure when network connectivity drops or enterprise data cannot leave on-premise memory.',
    architectureDetails: [
      'Client-Side Edge Engine: Quantized 1B-3B parameter SLM running locally in-browser/device via WebGPU & ONNX',
      'Cloud Semantic Arbiter: Asynchronous delegation to deep reasoning models for complex synthetic reasoning',
      'Tool-Calling Router: Zero-shot schema compliance validation with speculative decoding for sub-50ms tool selection',
      'Offline-First Memory Layer: Local IndexedDB / Vector cache with hierarchical semantic indexing'
    ],
    keyInnovations: [
      'Speculative execution: local SLM drafts preliminary function arguments while remote LLM validates intent in parallel.',
      'Deterministic fallback protocol: guarantees zero hallucinated JSON responses for API payloads.',
      'Drastic cost reduction: offloads up to 70% of standard intent-classification queries from paid cloud APIs to client hardware.'
    ],
    techStack: ['Python', 'PyTorch', 'ONNX Runtime', 'WebGPU', 'FastAPI', 'Rust', 'Docker'],
    hiringTeamTakeaway: 'Demonstrates deep expertise in cutting-edge SLM quantization, agentic orchestration, cost-latency optimization, and bridging client-side software engineering with production ML systems.',
    milestones: [
      { title: 'Local WebGPU inference engine benchmarked (<35ms token latency)', completed: true },
      { title: 'FastAPI orchestration server & tool router implementation', completed: true },
      { title: 'Speculative decoding pipeline between local SLM & cloud model', completed: false },
      { title: 'End-to-end benchmark comparison vs pure cloud agents', completed: false }
    ]
  },
  {
    id: 'streaming-gnn-fraud-detection',
    title: 'Streaming Graph Neural Network Anti-Fraud Engine',
    codename: 'Project GraphSentry',
    domain: 'Graph ML & Fintech',
    timeline: 'Q4 2026',
    status: 'Architecture Design',
    progress: 40,
    executiveSummary: 'A real-time fraud and anomaly detection system merging 5 years of production fintech experience with dynamic Graph Neural Networks (GNNs) on streaming Apache Kafka transaction streams to expose coordinated sybil rings.',
    problemStatement: 'Traditional tabular ML models evaluate transactions in isolation, blind to multi-hop collusive rings, rapid fund-layering hops, and circular laundering topologies typical in modern decentralized and instant payment rails.',
    architectureDetails: [
      'Ingestion Fabric: High-throughput Apache Kafka streaming transaction events with schema registry',
      'Temporal Graph Store: In-memory dynamic graph topology maintaining multi-hop account relationships',
      'GNN Inference Pipeline: PyTorch Geometric (PyG) inductive node/edge classification evaluating subgraphs in <20ms',
      'Explainability Engine: Subgraph extraction highlighting high-risk connection paths for compliance officers'
    ],
    keyInnovations: [
      'Temporal edge decay: transaction weights automatically decay over time to prioritize recent anomalous velocity spikes.',
      'Inductive inference: accurately scores newly created accounts without requiring full graph retraining.',
      'Designed directly on top of real-world fintech requirements (2FA, withdrawal velocity, compliance limits).'
    ],
    techStack: ['PyTorch Geometric', 'Apache Kafka', 'Apache Spark', 'Python', 'FastAPI', 'Redis', 'Docker'],
    hiringTeamTakeaway: 'Showcases how 5+ years of fintech domain knowledge translates directly into advanced Graph Machine Learning systems capable of operating under ultra-strict sub-20ms SLAs.',
    milestones: [
      { title: 'Synthetic banking & crypto transaction graph generator built', completed: true },
      { title: 'PyTorch Geometric GNN architecture baseline validated (AUC 0.93)', completed: true },
      { title: 'Kafka streaming ingestion & real-time feature extraction pipeline', completed: false },
      { title: 'Load testing for 10,000+ events/sec throughput with Redis cache', completed: false }
    ]
  },
  {
    id: 'robotics-vla-semantic-nav',
    title: 'Autonomous Robotics 3D Semantic SLAM & VLA Policy',
    codename: 'Project SpatialMind',
    domain: 'Robotics & Vision',
    timeline: 'Q4 2026 – Q1 2027',
    status: 'Active Research',
    progress: 50,
    executiveSummary: 'Vision-Language-Action (VLA) navigation policy coupled with 3D open-vocabulary semantic mapping, allowing mobile robots to comprehend natural language commands and navigate dynamic indoor obstacles.',
    problemStatement: 'Standard robotic navigation creates geometric occupancy grids without semantic meaning ("chair", "emergency exit", "spilled liquid"). When instructions require semantic reasoning, traditional path planners stall.',
    architectureDetails: [
      'Perception Backbone: RGB-D sensor fusion generating colored 3D point clouds with PointNet++ and CLIP embeddings',
      'Open-Vocabulary Mapping: Dynamic voxel grid tagged with semantic feature vectors queryable via natural language',
      'VLA Motion Planner: Diffusion-based action policy translating language goals into continuous velocity vectors',
      'Simulation Rig: High-fidelity physics validation in Isaac Sim and ROS2 navigation stack'
    ],
    keyInnovations: [
      'Open-vocabulary 3D scene understanding: finds objects based on natural descriptions (e.g. "locate the empty fire extinguisher stand").',
      'Directly links RMIT University Master of AI Autonomous Robotics coursework to production robotics stacks.',
      'Hierarchical planner: combines global semantic guidance with real-time local collision avoidance.'
    ],
    techStack: ['ROS2', 'PyTorch', 'CLIP / Open-Vocabulary Vision', 'Python', 'C++', 'Isaac Sim', 'PointNet++'],
    hiringTeamTakeaway: 'Highlights mastery over advanced multimodal perception, spatial point cloud processing, robotics simulation, and modern continuous action policies.',
    milestones: [
      { title: 'ROS2 camera sensor bridge & point cloud filtering pipeline', completed: true },
      { title: '3D semantic voxel grid with CLIP feature projections', completed: true },
      { title: 'Diffusion-based motion policy training on synthetic indoor scenes', completed: false },
      { title: 'Real-time obstacle avoidance benchmark under dynamic agent interference', completed: false }
    ]
  },
  {
    id: 'observability-ai-triage-agent',
    title: 'Self-Healing Microservice AI Triage & Post-Mortem Agent',
    codename: 'Project SentinelOps',
    domain: 'MLOps & Systems',
    timeline: 'Q1 2027',
    status: 'Benchmarking',
    progress: 30,
    executiveSummary: 'An autonomous engineering copilot that ingests OpenTelemetry distributed traces and eBPF system metrics to detect cascading microservice failures, localize root cause services, and generate pull requests for remediation.',
    problemStatement: 'In complex microservice meshes, a single database connection bottleneck cascades into hundreds of downstream 504 timeouts. Engineers spend hours sifting through thousands of traces to pinpoint the exact failure culprit.',
    architectureDetails: [
      'Telemetry Stream Ingestion: OpenTelemetry collector streaming latency percentiles, error rates, and traces',
      'Causal Graph Inference: Builds dependency trees of running services to trace anomaly propagation back to root source',
      'Synthesizer Agent: Feeds compressed trace context and git history to generate clear root-cause incident reports',
      'Remediation PR Bot: Automatically generates configuration fixes (e.g., connection pool sizing, circuit-breaker rules)'
    ],
    keyInnovations: [
      'Causal trace pruning: eliminates 95% of irrelevant log noise before passing to LLM context window.',
      'Grounding in git history: correlates incident onset times with recent service deployment SHAs.',
      'Actionable patch generation: produces production-ready Terraform/Kubernetes manifest adjustments.'
    ],
    techStack: ['Go', 'Python', 'OpenTelemetry', 'FastAPI', 'Docker', 'GitHub API', 'Vector Database'],
    hiringTeamTakeaway: 'Bridges deep software engineering systems intuition with pragmatic AI automation, showing high-value enterprise problem solving for cloud-native infrastructure teams.',
    milestones: [
      { title: 'OpenTelemetry synthetic microservice failure testbed deployed', completed: true },
      { title: 'Causal dependency tree builder for distributed trace correlation', completed: false },
      { title: 'Automated post-mortem report synthesizer with root-cause ranking', completed: false },
      { title: 'GitHub pull-request auto-remediation integration', completed: false }
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: 'covet-health',
    role: 'Software Engineer',
    company: 'Covet Health',
    location: 'Remote, U.S.',
    period: 'Feb 2025 – Oct 2025',
    type: 'Remote',
    summary: 'Owned core engineering initiatives for a cross-platform healthcare insurance product, leading security, appointment workflows, and high-reliability cloud messaging systems.',
    bullets: [
      'Built a cross-platform healthcare insurance application independently, including secure authentication and appointment scheduling features.',
      'Increased appointment adherence by 30% by integrating Firebase Cloud Messaging reminders.',
      'Achieved 100% successful token registration by managing platform-specific push notification channels for iOS.'
    ],
    skills: ['Cross-Platform Development', 'Firebase Cloud Messaging', 'iOS Push Notifications', 'Authentication', 'REST APIs', 'HealthTech']
  },
  {
    id: 'trust-iq',
    role: 'Software Engineer',
    company: 'Trust IQ',
    location: 'Singapore',
    period: 'Dec 2022 – Feb 2025',
    type: 'On-site',
    summary: 'Engineered high-security identity verification and biometric authentication SDKs deployed across leading digital banks and financial institutions in Southeast Asia.',
    bullets: [
      'Built biometric authentication and flash liveness detection workflows, achieving 99% verification accuracy.',
      'Increased onboarding completion by 25% by improving onboarding flows and permission handling.',
      'Reduced application crashes by 40% through memory leak debugging and stabilisation of ID verification flows.',
      'Delivered reusable XCFramework SDK modules adopted by 10+ banking clients.'
    ],
    skills: ['Biometrics & Computer Vision', 'Liveness Detection', 'Swift / XCFramework', 'Performance Optimization', 'Security', 'Fintech SDKs']
  },
  {
    id: 'coinhako',
    role: 'Software Engineer',
    company: 'Coinhako',
    location: 'Singapore',
    period: 'Sep 2019 – Dec 2022',
    type: 'On-site',
    summary: 'Engineered mission-critical trading workflows, real-time market data streaming, and scalable mobile architecture for Singapore’s premier cryptocurrency exchange.',
    bullets: [
      'Developed secure cryptocurrency trading workflows including onboarding, 2FA withdrawals, and trading features.',
      'Built push notification capabilities for real-time market updates, achieving 95% on-time price alert delivery.',
      'Implemented silent push notifications and background fetch for transaction synchronisation.',
      'Refactored legacy modules toward Clean MVVM architecture, reducing future bug-fix effort by 50%.'
    ],
    skills: ['Clean MVVM Architecture', 'Crypto Trading Workflows', 'Real-Time Streaming', '2FA Security', 'Background Fetch', 'System Design']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Artificial Intelligence',
    institution: 'RMIT University',
    location: 'Melbourne, VIC, Australia',
    period: '2025 – 2026',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Intelligent Decision Making',
      'Cloud Computing',
      'Big Data Processing',
      'Data Mining',
      'Autonomous Robotics',
      'Data Structures and Algorithms'
    ]
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'University of Science, VNU-HCM',
    location: 'Ho Chi Minh City, Vietnam',
    period: '2016 – 2020',
    coursework: [
      'Software Architecture',
      'Object-Oriented Design',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Algorithms & Complexity'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    description: 'Foundations and production implementations of ML, deep learning, computer vision, and NLP',
    skills: [
      { name: 'Machine Learning', level: 'Advanced', years: '3+ yrs' },
      { name: 'Deep Learning', level: 'Advanced', years: '2+ yrs' },
      { name: 'Computer Vision', level: 'Advanced', years: '3+ yrs' },
      { name: 'Natural Language Processing (NLP)', level: 'Proficient', years: '2+ yrs' },
      { name: 'PyTorch', level: 'Advanced', years: '2+ yrs' },
      { name: 'scikit-learn', level: 'Advanced', years: '3+ yrs' },
      { name: 'TensorFlow', level: 'Proficient', years: '2+ yrs' },
      { name: 'MLOps & Model Lifecycle', level: 'Proficient', years: '2+ yrs' }
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Polyglot systems programming across ML, backend, and native mobile environments',
    skills: [
      { name: 'Python', level: 'Advanced', years: '5+ yrs' },
      { name: 'SQL', level: 'Advanced', years: '5+ yrs' },
      { name: 'Swift', level: 'Advanced', years: '4+ yrs' },
      { name: 'Dart', level: 'Proficient', years: '2+ yrs' },
      { name: 'C++', level: 'Proficient', years: '2+ yrs' },
      { name: 'Scala', level: 'Familiar', years: '1+ yrs' }
    ]
  },
  {
    title: 'Data & Backend Systems',
    description: 'High-throughput APIs, data pipelines, streaming architectures, and distributed computation',
    skills: [
      { name: 'FastAPI', level: 'Advanced', years: '3+ yrs' },
      { name: 'Pandas & NumPy', level: 'Advanced', years: '4+ yrs' },
      { name: 'Apache Spark', level: 'Proficient', years: '2+ yrs' },
      { name: 'Apache Kafka', level: 'Proficient', years: '2+ yrs' },
      { name: 'REST APIs & WebSockets', level: 'Advanced', years: '5+ yrs' },
      { name: 'Relational & NoSQL DBs', level: 'Advanced', years: '5+ yrs' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerization, continuous integration/deployment, and cloud infrastructure management',
    skills: [
      { name: 'Docker', level: 'Advanced', years: '4+ yrs' },
      { name: 'GitHub Actions & CI/CD', level: 'Advanced', years: '4+ yrs' },
      { name: 'AWS (Cloud Computing)', level: 'Proficient', years: '3+ yrs' },
      { name: 'Git & Version Control', level: 'Advanced', years: '5+ yrs' },
      { name: 'Automated Testing & Linting', level: 'Advanced', years: '5+ yrs' }
    ]
  },
  {
    title: 'Software Engineering & Architecture',
    description: 'Proven architectural patterns ensuring low technical debt, crash resilience, and modularity',
    skills: [
      { name: 'System Design', level: 'Advanced', years: '5+ yrs' },
      { name: 'Clean MVVM Architecture', level: 'Advanced', years: '4+ yrs' },
      { name: 'Design Patterns', level: 'Advanced', years: '5+ yrs' },
      { name: 'Modular SDK Architecture', level: 'Advanced', years: '3+ yrs' },
      { name: 'API Design & Versioning', level: 'Advanced', years: '5+ yrs' }
    ]
  }
];

export const REFERENCE: ReferenceItem = {
  name: 'Huy Nguyen',
  title: 'Senior Software Engineer',
  company: 'Atlassian',
  email: 'hnguyen15@gmail.com',
  quote: 'Worked closely with Hieu on the Covet Health project and can speak to his technical ownership, collaboration, system-level thinking, and contributions to shipping the initial product release.'
};

export const LEADERSHIP_ACTIVITIES = [
  {
    organization: 'IO Scholarship Community',
    role: 'Member',
    location: 'Melbourne, VIC',
    period: 'Mar 2025 – Present',
    description: 'Participate in technical workshops and knowledge-sharing activities focused on Data Science and Artificial Intelligence.'
  }
];
