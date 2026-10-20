// Profile data sourced from Abhishek Verma's official resume
export const profile = {
  name: 'Abhishek Verma',
  shortName: 'Abhishek',
  title: 'Software Engineer',
  roleSubtitle: 'Backend Engineer & Java Spring Boot Developer',
  company: 'Rapipay Fintech Private Limited',
  location: 'Noida, India',
  email: 'abhishek.verma.6561@gmail.com',
  phone: '+91-6307801566',
  linkedin: 'https://linkedin.com/in/1-abhishek-verma',
  github: 'https://github.com/Pseudo-iitian',
  resume: 'resume.pdf',
  tagline: 'Engineering high-throughput, fault-tolerant financial backends and distributed ledger engines with Java & Spring Boot.',
  summary:
    'Software Engineer with deep experience building scalable backend systems and high-volume fintech platforms using Java 17, Spring Boot, PostgreSQL, Kafka, and Redis. Specializing in financial settlement pipelines, RBI-aligned NPA classification, reducing-balance loan engines, and distributed event-driven architectures.',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Dr. A.P.J. Abdul Kalam Technical University',
      location: 'Ghaziabad, UP',
      period: '2021 – 2025',
      grade: 'CGPA: 8.2 / 10.0',
    },
  ],
}

export const stats = [
  { value: '70%', label: 'Lower Partner TAT', highlight: 'Settlement Engine' },
  { value: '100K+', label: 'Loan Records Processed', highlight: 'NPA Classification' },
  { value: '40%', label: 'Query Latency Reduction', highlight: 'PostgreSQL 1M+ rows' },
  { value: '50K+', label: 'Daily Kafka Events', highlight: 'Event-Driven Pipelines' },
]

export const experience = [
  {
    company: 'Rapipay Fintech Private Limited',
    role: 'Software Engineer - Backend & Fintech Systems',
    period: '08/2025 – Present',
    location: 'Noida, India',
    current: true,
    type: 'Full-time',
    techStack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'Jenkins'],
    points: [
      'Architected a configurable settlement posting engine using Spring Boot microservices and REST APIs, accelerating partner integration Turnaround Time (TAT) by 70% for 3+ partner institutions.',
      'Integrated Amazon SQS and Apache Kafka for asynchronous communication, processing 50K+ daily events and boosting system fault tolerance by 40%.',
      'Engineered an RBI-compliant NPA (Non-Performing Asset) classification engine using DPD (Days Past Due) logic, processing 100K+ records with verifiable 100% rule-matching accuracy.',
      'Streamlined transaction-level collection mapping and improved reconciliation accuracy to 99.5%, eliminating 15+ hours of manual intervention weekly.',
      'Scaled Kafka-based event pipelines for NACH and UPI collection processing to 30K+ daily transactions with end-to-end auditability and idempotent processing.',
      'Optimized PostgreSQL query execution plans, B-tree indexes, and stored procedures, reducing p95 latency by 40% on datasets exceeding 1M records.',
    ],
  },
  {
    company: 'Rapipay Fintech Private Limited',
    role: 'Product Engineering Intern',
    period: '08/2024 – 08/2025',
    location: 'Noida, India',
    current: false,
    type: 'Internship',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL', 'REST APIs', 'Git'],
    points: [
      'Refined PostgreSQL query performance on large-scale financial datasets (500K+ records), achieving a 30% speedup in daily reporting execution time.',
      'Facilitated backend lending microservices for UPI collections supporting 20K+ daily transactions with precision DPD tracking and ledger consistency.',
      'Automated Daily Collection and Loan Summary Reports by aggregating multi-service events, saving 60% of stakeholder reporting turnaround.',
      'Resolved 15+ critical production issues via thorough Root Cause Analysis (RCA), cutting data inconsistencies by 20%.',
    ],
  },
]
