// Technical Skills categorised according to Abhishek Verma's engineering background

export const skillCategories = [
  {
    title: 'Languages & Core',
    icon: 'code',
    accent: '#f59e0b',
    summary: 'Core foundational programming with robust concurrency, multithreading, and algorithmic efficiency.',
    skills: [
      { name: 'Java (17 / 21)', level: 'Advanced', highlight: true },
      { name: 'SQL & PL/pgSQL', level: 'Advanced', highlight: true },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'Object-Oriented Design', level: 'Advanced' },
      { name: 'Data Structures & Algorithms', level: 'Advanced' },
    ],
  },
  {
    title: 'Frameworks & Architecture',
    icon: 'arch',
    accent: '#22d3ee',
    summary: 'Production-tested microservice frameworks and enterprise distributed design patterns.',
    skills: [
      { name: 'Spring Boot 3.x', level: 'Advanced', highlight: true },
      { name: 'Spring Security & JWT', level: 'Advanced' },
      { name: 'Spring Data JPA & Hibernate', level: 'Advanced' },
      { name: 'Microservices & REST APIs', level: 'Advanced', highlight: true },
      { name: 'Distributed Systems & CQRS', level: 'Proficient' },
    ],
  },
  {
    title: 'Messaging & Databases',
    icon: 'db',
    accent: '#fb923c',
    summary: 'High-throughput event streaming, distributed caching, and zero-data-loss databases.',
    skills: [
      { name: 'Apache Kafka', level: 'Advanced', highlight: true },
      { name: 'Amazon SQS', level: 'Proficient' },
      { name: 'PostgreSQL (Query Tuning, Indexing)', level: 'Advanced', highlight: true },
      { name: 'Redis (Caching & Pub/Sub)', level: 'Proficient' },
      { name: 'Flyway DB Migration', level: 'Proficient' },
    ],
  },
  {
    title: 'DevOps, Cloud & Tooling',
    icon: 'cloud',
    accent: '#38bdf8',
    summary: 'Containerization, orchestration, continuous delivery pipelines, and observability.',
    skills: [
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Proficient' },
      { name: 'Jenkins & CI/CD Pipelines', level: 'Proficient' },
      { name: 'Git & GitHub Actions', level: 'Advanced' },
      { name: 'JUnit 5, Mockito & Testcontainers', level: 'Advanced' },
      { name: 'Zipkin, Postman & Swagger', level: 'Advanced' },
    ],
  },
  {
    title: 'Fintech Domain Expertise',
    icon: 'fintech',
    accent: '#ec4899',
    summary: 'Regulated financial operations, risk classification, loan lifecycle, and payment recovery.',
    skills: [
      { name: 'Settlement & Clearing Systems', level: 'Specialist', highlight: true },
      { name: 'NPA & DPD Classification Rules', level: 'Specialist', highlight: true },
      { name: 'NACH & UPI Payment Lifecycles', level: 'Specialist' },
      { name: 'Reducing-Balance EMI Calculation', level: 'Specialist' },
      { name: 'Double-Entry Ledger Reconciliation', level: 'Specialist' },
    ],
  },
]
