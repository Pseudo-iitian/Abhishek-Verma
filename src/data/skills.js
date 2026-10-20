// Technical Skills strictly aligned with /home/abhishek_verma/Desktop/Abhishek_Verma.pdf

export const skillCategories = [
  {
    title: 'Core Java & Concurrency',
    icon: 'code',
    accent: '#f59e0b',
    summary:
      'Deep mastery of JVM internals, modern concurrency, multithreading primitives, and memory management.',
    skills: [
      { name: 'Java (17 / 21)', level: 'Advanced', highlight: true },
      { name: 'Multithreading & Concurrency', level: 'Advanced', highlight: true },
      { name: 'ExecutorService & Thread Pools', level: 'Advanced', highlight: true },
      { name: 'Locks & Synchronizers', level: 'Advanced' },
      { name: 'Collections Framework & Streams API', level: 'Advanced' },
      { name: 'JVM Memory & Garbage Collection', level: 'Proficient' },
      { name: 'OOP & SOLID Principles', level: 'Advanced' },
      { name: 'Design Patterns (Strategy, Factory, Singleton)', level: 'Advanced' },
    ],
  },
  {
    title: 'Spring Ecosystem & Distributed Systems',
    icon: 'arch',
    accent: '#22d3ee',
    summary:
      'Enterprise-grade microservices, distributed architectures, asynchronous batch jobs, and security protocols.',
    skills: [
      { name: 'Spring Boot 3.x', level: 'Advanced', highlight: true },
      { name: 'Spring Batch', level: 'Advanced', highlight: true },
      { name: 'Spring Security & JWT', level: 'Advanced' },
      { name: 'REST APIs & API Design', level: 'Advanced', highlight: true },
      { name: 'Microservices Architecture', level: 'Advanced', highlight: true },
      { name: 'Event-Driven Architecture', level: 'Advanced', highlight: true },
      { name: 'Distributed Systems & System Design', level: 'Advanced', highlight: true },
      { name: 'WebSocket (STOMP Protocol)', level: 'Proficient' },
    ],
  },
  {
    title: 'Messaging & Databases',
    icon: 'db',
    accent: '#fb923c',
    summary:
      'High-throughput message brokers, database performance tuning, and zero-loss transactional consistency.',
    skills: [
      { name: 'Apache Kafka (Streaming & Bulk Pipelines)', level: 'Advanced', highlight: true },
      { name: 'AWS SQS (Queueing & Asynchronous Dispatch)', level: 'Advanced', highlight: true },
      { name: 'PostgreSQL (Deep Query Tuning & B-Tree)', level: 'Advanced', highlight: true },
      { name: 'MySQL', level: 'Proficient' },
      { name: 'Redis (Distributed Caching & Locks)', level: 'Proficient' },
      { name: 'PL/pgSQL & Stored Procedures', level: 'Advanced' },
      { name: 'ACID Transactions & Isolation Levels', level: 'Advanced' },
      { name: 'Flyway DB Migration', level: 'Proficient' },
    ],
  },
  {
    title: 'Fintech Domain & Lending Engines',
    icon: 'fintech',
    accent: '#ec4899',
    summary:
      'Mission-critical financial infrastructure, NBFC integrations, automated clearing, and regulatory lending rules.',
    skills: [
      { name: 'Apache Fineract LMS Integration', level: 'Specialist', highlight: true },
      { name: 'End-to-End Loan Lifecycle (LOS / LMS)', level: 'Specialist', highlight: true },
      { name: 'Rule-Based NPA Engine & DPD Logic', level: 'Specialist', highlight: true },
      { name: 'UPI Integration (30K+ daily txns)', level: 'Specialist', highlight: true },
      { name: 'e-NACH Presentation & Digio SDKs', level: 'Specialist', highlight: true },
      { name: 'Collection & UTR Settlement Posting', level: 'Specialist', highlight: true },
      { name: 'Early Foreclosure, Restructuring & Write-offs', level: 'Specialist' },
      { name: 'Razorpay Idempotent Webhook Processing', level: 'Specialist' },
    ],
  },
  {
    title: 'Cloud, DevOps & Engineering Practices',
    icon: 'cloud',
    accent: '#38bdf8',
    summary:
      'Cloud deployment, container orchestration, CI/CD automation, and rigorous engineering methodologies.',
    skills: [
      { name: 'AWS (Lambda, RDS, SQS, CodePipeline, SNS)', level: 'Proficient', highlight: true },
      { name: 'Docker & Containerization', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Proficient' },
      { name: 'CI/CD Pipelines (Jenkins, CodePipeline)', level: 'Proficient' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Agile (Scrum), Sprint Planning & RCA', level: 'Advanced' },
      { name: 'Code Reviews & Strict API Contracts', level: 'Advanced' },
    ],
  },
]
