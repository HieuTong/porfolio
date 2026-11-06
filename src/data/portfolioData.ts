import { Project, UpcomingProject, Experience, Education, SkillCategory, ReferenceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Hugh (Hieu) Le',
  branding: 'hieu.le',
  headline: 'AI / Machine Learning Engineer · Software Engineer',
  subheadline: 'Engineer who ships AI to real devices and real customers – six years in banking identity verification, fintech and healthcare. Master of Artificial Intelligence, RMIT University.',
  location: 'Melbourne, VIC, Australia',
  email: 'hieutongle@gmail.com',
  phone: '0481814979',
  phoneDisplay: '0481 814 979',
  phoneInternational: '+61 481 814 979',
  github: 'https://github.com/HieuTong',
  githubUsername: 'HieuTong',
  linkedin: 'https://linkedin.com/in/hieutongle',
  availability: 'Available full-time from November 2026 for AI Engineer, Machine Learning Engineer and Forward Deployed Engineer roles',
  relocation: 'Melbourne first (on-site / hybrid); open to relocating within Australia',
  bio: `I'm an engineer who ships AI to real devices and real customers. At Trust IQ I built the on-device iOS pipeline behind face liveness detection: camera capture, flash-sequence control and choosing the best frame to send to the model, even on slow phones. Bank customers in Vietnam use it to pass eKYC and to approve transfers over 10 million VND, and I met the banks' teams to plan each rollout.

Before that I built KYC, 2FA and withdrawal flows for a Singapore crypto exchange, and later led the front-end team that built a US healthcare insurance app in Flutter, from scratch to the App Store.

Now, with a Master of Artificial Intelligence from RMIT, I build ML systems that are honest about how they are evaluated: test sets split by patient, by person and by time, so the number on the page is the number you'd get in production, even when that number is disappointing.`
};

export const SHIPPED_PROJECTS: Project[] = [
  {
    id: 'budgetbasket-ai',
    title: 'BudgetBasket AI',
    subtitle: 'Budget-Constrained Grocery Optimiser: Calibrated ML, Integer Programming & LLM Explanations',
    year: '2026',
    category: 'ml-systems',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'scikit-learn', 'PuLP', 'FAISS', 'Gemini', 'Docker'],
    summary: 'A live web app that helps households save time and money by rebuilding the weekly grocery basket around past buying habits while staying inside a hard budget.',
    problemStatement: 'An LLM cannot be trusted to guarantee a budget, and a rule engine cannot tell which cheaper product is a fair substitute. Groceries need both.',
    solution: 'Each part does what it is reliable at: a calibrated classifier judges substitutes, a PuLP integer program makes the purchase decision, and Gemini explains that decision using FAISS-retrieved context. The LLM explains decisions; it never makes them.',
    highlights: [
      'Improved product classification accuracy from 68.0% to 74.7% and calibrated the classifier so its probabilities can be trusted downstream.',
      'Formulated basket selection as an integer program in PuLP, so every basket provably fits the budget.',
      'Used Gemini to explain each decision in plain language, grounded with FAISS retrieval rather than letting the model choose products.',
      'Containerised with Docker and deployed live at budgetbasket.tech.'
    ],
    metrics: [
      { label: 'Classifier Accuracy', value: '68.0% → 74.7%' },
      { label: 'Budget Guarantee', value: 'PuLP Integer Program' },
      { label: 'LLM Role', value: 'Explains, never decides' },
      { label: 'Status', value: 'Live · budgetbasket.tech' }
    ],
    demoUrl: 'https://budgetbasket.tech',
    liveUrl: 'https://budgetbasket.tech',
    githubUrl: 'https://github.com/HieuTong/budgetbasket-ai',
    architectureHighlights: [
      'Deterministic core: money decisions come from the solver, so they are testable and explainable.',
      'Calibrated ML: substitute confidence is a real probability, not just a score.',
      'Grounded explanations: Gemini only explains what the solver chose, using retrieved product context.'
    ]
  },
  {
    id: 'comps-gnn',
    title: 'Learned Comparables: Property Valuation with a GNN',
    subtitle: 'Graph Attention over Earlier Nearby Sales, Tested Against Strong Baselines',
    year: '2026',
    category: 'machine-learning',
    tags: ['Python', 'PyTorch', 'Graph Neural Networks', 'LightGBM', 'Conformal Prediction', 'Streamlit', 'pytest'],
    summary: 'Estimates a home\'s price from nearby earlier sales and shows which sales it trusted, like a valuer\'s report. Runs end to end on a simulated Melbourne-style market; real sales data is next.',
    problemStatement: 'Valuation models that treat each house on its own ignore the strongest signal, nearby recent sales. Models that do use neighbours often leak the future by learning from sales that happened after the one being valued.',
    solution: 'Each sale links only to nearby sales strictly before it, and a graph attention network learns how much to trust each one. Time-based train, validation and test periods; LightGBM baselines; split conformal intervals.',
    highlights: [
      'Median absolute error of 6.77% on the latest 2,250 sales, against 7.0% for LightGBM and 24.5% for a comparables median.',
      'Reported the result honestly: a narrow win on data I simulated shows the pipeline works, not that GNNs beat LightGBM on real property.',
      '19 tests guard against future leakage; deliberately breaking the rule made 4 of them fail, proving they work.',
      '90% conformal intervals covered 87.3% of test sales, slightly under target because the market kept moving after validation.'
    ],
    metrics: [
      { label: 'Median Abs. Error', value: '6.77% (LightGBM 7.0%)' },
      { label: 'Within 10%', value: '68.2% of sales' },
      { label: 'Leakage Tests', value: '19 passing' },
      { label: 'Data', value: 'Simulated · real next' }
    ],
    githubUrl: 'https://github.com/HieuTong/comps-gnn',
    architectureHighlights: [
      'Time-respecting edges: the graph cannot see the future.',
      'Explainable by construction: attention weights show which comparables drove each estimate.'
    ]
  },
  {
    id: 'drone-hand-signal-recognition',
    title: 'Drone Hand-Signal Recognition',
    subtitle: 'Video Classification on an Embedded Compute Budget, Tested on an Unseen Person',
    year: '2026',
    category: 'computer-vision',
    tags: ['Python', 'PyTorch', 'EfficientNet', 'ResNet', 'Computer Vision', 'Video'],
    summary: 'Recognises 13 marshalling hand signals from short video clips so a delivery drone can follow a ground operator, using one small 2D CNN that fits on the drone\'s onboard computer.',
    problemStatement: 'Some signals are mirror images in motion, so one frame cannot separate them. Only 11 people were filmed, so a random split would let the model memorise people instead of learning gestures.',
    solution: 'Stacked 5 frames into a 15-channel input for EfficientNet-B0 (early fusion) and fine-tuned in two phases. Split by person: 9 for training, 1 for validation, 1 for testing.',
    highlights: [
      'Early fusion raised validation accuracy from 61.7% (single frame) to 71.3%; late fusion with ResNet-18 overfitted the 845 training clips.',
      'On a person the model had never seen, accuracy fell to 53.5% (macro F1 0.42), and three signals failed completely.',
      'Recommended against shipping: confusing NotClear ("please repeat") with other signals removes the operator\'s way to ask for a repeat. Proposed pose keypoints, more signallers and per-class confidence thresholds.',
      'Small and fast: 4.67M parameters and 7.6 ms per clip on a T4 GPU.'
    ],
    metrics: [
      { label: 'Validation Accuracy', value: '71.3%' },
      { label: 'Unseen Person', value: '53.5%' },
      { label: 'Model Size', value: '4.67M params' },
      { label: 'Latency', value: '7.6 ms / clip (T4)' }
    ],
    githubUrl: 'https://github.com/HieuTong/drone-hand-signal-recognition',
    architectureHighlights: [
      'Early fusion: 5 frames × 3 colour channels = 15 input channels into a 2D backbone.',
      'A shipping decision, not just a score: per-class failures judged by their real-world cost.'
    ]
  },
  {
    id: 'colon-cell-classification',
    title: 'Colon Cell Histopathology Classification',
    subtitle: 'How a Patient-Level Split Changed the Answer',
    year: '2026',
    category: 'computer-vision',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'CNN', 'Medical Imaging'],
    summary: 'Classifies colorectal cells as cancerous or not, and into four cell types, from small histopathology images, evaluated on patients the model never saw.',
    problemStatement: 'Cells from the same patient share staining and appearance quirks. If one patient\'s cells appear in both training and testing, the score measures memory, not generalisation.',
    solution: 'Split 98 patients into training, validation and test sets with no patient in two sets. Compared logistic regression, a decision tree, an MLP, CNNs and an ensemble, and used the test set exactly once.',
    highlights: [
      'Cancer detection reached 0.876 macro F1 on unseen patients, within 0.002 of validation, confirming the validation score was honest.',
      'Cell-type classification fell from 0.646 on validation to 0.475 on unseen patients. Traced the collapse to rare cell types that appear in very few patients, a gap a random split would have hidden.',
      'Found that the cancerous cells are exactly the epithelial cells (4,079 each), linking the two tasks.',
      'Trained on 20,280 cells; selected an augmented CNN as the final model.'
    ],
    metrics: [
      { label: 'Cancer F1 (unseen patients)', value: '0.876' },
      { label: 'Cell-Type F1', value: '0.646 → 0.475' },
      { label: 'Patients', value: '98' },
      { label: 'Split', value: 'Patient-level' }
    ],
    githubUrl: 'https://github.com/HieuTong/image_NN_classification'
  },
  {
    id: 'ticket-ml-system',
    title: 'TicketML: Text-Classification Service with Retraining',
    subtitle: 'Train/Inference Separation, Model Versioning & Feedback-Driven Weekly Retraining',
    year: '2026',
    category: 'ml-systems',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'GitHub Actions', 'Docker', 'pytest', 'ruff'],
    summary: 'An MLOps-style support-ticket classifier: a stateless FastAPI inference service, a separate training pipeline, versioned model artifacts, a user feedback loop and scheduled retraining in CI.',
    problemStatement: 'Real classifiers drift, need corrected labels fed back in, and must be retrained and redeployed without breaking the API that depends on them.',
    solution: 'Separated training from serving, versioned every model with metadata and history, collected corrections through a /feedback endpoint, and automated retraining on a weekly GitHub Actions schedule.',
    highlights: [
      'Separated training from a stateless inference API that loads the model once at startup.',
      'Versioned every model with metadata, an append-only history log and snapshot folders.',
      'Built a feedback loop: corrected labels from a /feedback endpoint are merged into training data on the next retrain.',
      'Scheduled weekly retraining with GitHub Actions, gated by ruff, pytest and a Docker build in CI.'
    ],
    metrics: [
      { label: 'Retraining', value: 'Weekly (GitHub Actions)' },
      { label: 'Model Versioning', value: 'Metadata + History Log' },
      { label: 'CI Gates', value: 'ruff · pytest · Docker' }
    ],
    githubUrl: 'https://github.com/HieuTong/ticket_ml_system'
  }
];

// Progress on the site is computed from ticked milestones (see RoadmapSection),
// so `progress` here is only a fallback and cannot overstate anything.
export const UPCOMING_PROJECTS: UpcomingProject[] = [
  {
    id: 'budgetbasket-agent',
    title: 'BudgetBasket Agent & Real-World Savings',
    codename: 'BudgetBasket v2',
    domain: 'Agentic AI',
    timeline: 'Nov 2026 – Jan 2027',
    status: 'Architecture Design',
    progress: 0,
    executiveSummary: 'A Gemini function-calling agent that lets users plan the week\'s shopping in conversation ("hosting dinner Friday", "skip dairy"), while the PuLP solver stays the only thing allowed to make budget decisions. Then measure real savings on real supermarket prices.',
    problemStatement: 'Today the basket is optimised weekly with no conversation, and savings have not yet been measured on real prices. Letting an LLM decide spend directly would break the budget guarantee that makes the app trustworthy.',
    architectureDetails: [
      'Refactor the optimisation service into plain, testable functions.',
      'Expose those functions to Gemini as tools: optimise, find substitutes, look up prices.',
      'The agent proposes; the solver decides and verifies every final basket.'
    ],
    keyInnovations: [
      'Measured, not demoed: share of agent baskets within budget, and money saved on real price data.'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini Function Calling', 'PuLP', 'PostgreSQL'],
    hiringTeamTakeaway: 'How to put an LLM agent in front of a system with hard constraints without trusting the LLM with those constraints.',
    milestones: [
      { title: 'Refactor optimisation logic into plain functions', completed: false },
      { title: 'Gemini function-calling agent over the solver tools', completed: false },
      { title: 'Measure savings on real supermarket prices', completed: false },
      { title: 'Evaluation: % of agent baskets within budget', completed: false }
    ]
  },
  {
    id: 'kyc-deepfake-detection',
    title: 'Deepfake Detection for KYC Selfies',
    codename: 'Liveness 2.0',
    domain: 'Computer Vision',
    timeline: 'Dec 2026 – Feb 2027',
    status: 'Planned',
    progress: 0,
    executiveSummary: 'Detects face-swapped and AI-generated selfies used to get past liveness checks during bank onboarding.',
    problemStatement: 'Liveness checks were built to stop printed photos and replayed screens. Face swaps and generated faces are a newer attack, and detectors that only work on the generators they were trained on fail in production.',
    architectureDetails: [
      'Binary classifier: real selfie vs swapped or generated face.',
      'Evaluation on generators held out from training, the honest test for this problem.'
    ],
    keyInnovations: [
      'Built from production experience: I shipped the on-device liveness pipeline used by bank customers in Vietnam.'
    ],
    techStack: ['Python', 'PyTorch', 'Computer Vision'],
    hiringTeamTakeaway: 'Applies hands-on identity verification experience to a current fraud problem in bank onboarding.',
    milestones: [
      { title: 'Dataset with held-out generators', completed: false },
      { title: 'Baseline detector', completed: false },
      { title: 'Cross-generator evaluation and write-up', completed: false }
    ]
  },
  {
    id: 'ticketml-distributed',
    title: 'TicketML as a Distributed Service',
    codename: 'TicketML v2',
    domain: 'ML Systems',
    timeline: 'Early 2027',
    status: 'Planned',
    progress: 0,
    executiveSummary: 'Rebuilds TicketML\'s serving and retraining as a distributed system, applying my distributed systems study (MIT 6.824).',
    problemStatement: 'A single service is a single point of failure, and retraining competes with serving for the same machine.',
    architectureDetails: [
      'Separate, replicated inference and training services.',
      'Failure and load testing before calling it done.'
    ],
    keyInnovations: [
      'Measured under failure, not only on the happy path.'
    ],
    techStack: ['Python', 'FastAPI', 'Docker'],
    hiringTeamTakeaway: 'Production ML is a distributed systems problem as much as a modelling one.',
    milestones: [
      { title: 'Design', completed: false },
      { title: 'Implementation', completed: false },
      { title: 'Load and failure testing', completed: false }
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: 'covet-health',
    role: 'Software Engineer',
    company: 'Covet Health',
    location: 'Remote, U.S.',
    period: 'Mar 2025 – Aug 2026',
    type: 'Remote',
    summary: 'Led the front-end team that built a healthcare insurance app in Flutter, from scratch to App Store release.',
    bullets: [
      'Led the front-end team building a Flutter healthcare insurance app from scratch to App Store release.',
      'Built appointment reminders with Firebase Cloud Messaging.'
    ],
    skills: ['Flutter', 'Front-End Leadership', 'Firebase Cloud Messaging', 'App Store Release', 'HealthTech']
  },
  {
    id: 'trust-iq',
    role: 'Software Engineer, Identity Verification',
    company: 'Trust IQ',
    location: 'Singapore',
    period: 'Dec 2022 – Feb 2025',
    type: 'On-site',
    summary: 'Built the on-device iOS pipeline for face liveness detection used by banks in Vietnam, and worked directly with bank clients on each rollout.',
    bullets: [
      'Built the on-device iOS pipeline for face liveness detection: camera capture, flash-sequence control and best-frame selection against a quality threshold, so even slow phones send their best frame (models built by another team).',
      'Used by 1M+ bank customers in Vietnam to pass eKYC and to approve money transfers over 10 million VND, at 99% verification accuracy in production.',
      'Packaged the pipeline as reusable iOS frameworks used by 10+ banks, and met bank clients to gather requirements and plan each rollout.',
      'Uploaded liveness frames concurrently and combined the uploads with RxSwift\'s zip, so verification started only after every frame had uploaded, fixing failures caused by verifying with missing frames.',
      'Redesigned eKYC onboarding (ID capture and liveness), increasing sign-up completion by 25%.',
      'Cut production crashes by 40% by fixing memory leaks and stability bugs.'
    ],
    skills: ['On-Device Computer Vision', 'Camera & Frame Pipelines', 'Swift / iOS Frameworks', 'eKYC', 'Client Rollouts', 'RxSwift & Concurrency']
  },
  {
    id: 'coinhako',
    role: 'Software Engineer',
    company: 'Coinhako',
    location: 'Singapore',
    period: 'Sep 2019 – Dec 2022',
    type: 'On-site',
    summary: 'Built security-critical flows for a Singapore crypto exchange that grew to 380,000+ registered users.',
    bullets: [
      'Built KYC, 2FA, withdrawal and checkout flows for a crypto exchange that grew to 380,000+ registered users.',
      'Led a Clean MVVM migration that halved later bug-fix effort.'
    ],
    skills: ['KYC & 2FA', 'Withdrawals & Checkout', 'Clean MVVM Architecture', 'Fintech Security']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Artificial Intelligence',
    institution: 'RMIT University',
    location: 'Melbourne, VIC, Australia',
    period: '2025 – Nov 2026',
    coursework: [
      'Machine Learning',
      'Deep Learning',
      'Intelligent Decision Making',
      'AI Planning',
      'Cloud Computing (AWS)',
      'Distributed Systems',
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
    description: 'Classical ML, deep learning, computer vision, graph ML and LLM systems',
    skills: [
      { name: 'Machine Learning (scikit-learn)', level: 'Advanced', years: '2+ yrs' },
      { name: 'Deep Learning (PyTorch)', level: 'Proficient', years: '2 yrs' },
      { name: 'Computer Vision', level: 'Proficient' },
      { name: 'Leakage-Aware Evaluation', level: 'Advanced' },
      { name: 'Graph Neural Networks', level: 'Familiar' },
      { name: 'LLMs, RAG & Tool Calling', level: 'Proficient', years: '1+ yr' },
      { name: 'Optimisation (PuLP / Integer Programming)', level: 'Proficient', years: '1 yr' }
    ]
  },
  {
    title: 'Languages',
    description: 'Python for ML and backend; Swift and Dart for on-device and mobile',
    skills: [
      { name: 'Python', level: 'Advanced', years: '2+ yrs' },
      { name: 'Swift', level: 'Advanced', years: '5+ yrs' },
      { name: 'Dart (Flutter)', level: 'Proficient' },
      { name: 'SQL', level: 'Proficient' },
      { name: 'TypeScript', level: 'Familiar' }
    ]
  },
  {
    title: 'Mobile & On-Device',
    description: 'Shipping to real phones in real customers\' hands',
    skills: [
      { name: 'iOS (Camera, Frame Pipelines)', level: 'Advanced', years: '5+ yrs' },
      { name: 'Reusable iOS Frameworks / SDKs', level: 'Advanced', years: '2+ yrs' },
      { name: 'Flutter', level: 'Proficient' },
      { name: 'Clean MVVM Architecture', level: 'Advanced', years: '4+ yrs' }
    ]
  },
  {
    title: 'Backend, Cloud & DevOps',
    description: 'APIs, containers, CI/CD and cloud deployment',
    skills: [
      { name: 'FastAPI', level: 'Advanced', years: '2+ yrs' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Docker', level: 'Advanced', years: '2+ yrs' },
      { name: 'GitHub Actions & CI/CD', level: 'Advanced' },
      { name: 'AWS', level: 'Proficient' }
    ]
  }
];

export const REFERENCE: ReferenceItem = {
  name: 'Huy Q Nguyen',
  title: 'Senior Software Engineer',
  company: 'Atlassian',
  email: '', // Shared on request, with Huy's permission each time
  quote: 'Back-end lead on my Covet Health team. Reference available on request.'
};

export const LEADERSHIP_ACTIVITIES = [
  {
    organization: 'RMIT University Hackathon',
    role: 'Second Prize · LLM Security Challenge',
    location: 'Melbourne, VIC',
    period: '2026',
    description: 'Our team built a multilingual spam-email classifier using deep learning and LLMs.'
  }
];
