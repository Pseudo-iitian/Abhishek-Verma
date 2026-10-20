// Profile data strictly sourced from /home/abhishek_verma/Desktop/Abhishek_Verma.pdf
export const profile = {
  name: 'Abhishek Verma',
  shortName: 'Abhishek',
  title: 'Software Engineer',
  roleSubtitle: 'Java Backend Developer & Financial Systems Specialist',
  company: 'Rapipay Fintech Private Limited',
  location: 'Noida, India',
  email: 'abhishek.verma.6561@gmail.com',
  phone: '+91-6307801566',
  rawPhone: '6307801566',
  linkedin: 'https://linkedin.com/in/1-abhishek-verma',
  github: 'https://github.com/Pseudo-iitian',
  resume: 'resume.pdf',
  tagline:
    'Engineering high-concurrency financial microservices, event-driven ledger engines, and ultra-low latency lending systems with Java 17, Spring Boot, Kafka, and PostgreSQL.',
  summary:
    'Software Engineer with experience in building scalable financial microservices in the lending domain. Skilled in Java, Spring Boot, REST APIs, Kafka, and PostgreSQL, with hands-on experience in Loan Management Systems (Apache Fineract) across the end-to-end loan lifecycle. Worked on collection and settlement posting using Amazon SQS, UPI/NACH integration, and a rule-based NPA engine. Improved AWS database performance, reducing writer DB utilization from 99% to 5–20%. Strong in event-driven architecture, system design, and distributed systems.',
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Abdul Kalam Technical University (KIET Group of Institutions)',
      location: 'Delhi-NCR, India',
      period: '11/2021 – 06/2025',
      grade: 'CGPA: 8.2 / 10.0',
    },
  ],
}

export const stats = [
  {
    value: '99% → 5%',
    label: 'AWS Writer DB Utilization',
    highlight: 'Slashed from 99% to 5–20% via query optimization & B-tree indexing',
  },
  {
    value: '7s → 30ms',
    label: 'EMI Processing Latency',
    highlight: '99%+ faster with Kafka event-driven microservices',
  },
  {
    value: '100K+',
    label: 'Loan Records Evaluated',
    highlight: '100% accuracy on RBI-compliant NPA rules',
  },
  {
    value: '30K+',
    label: 'Daily UPI/NACH Transactions',
    highlight: '50% higher adoption via Digio automated presentation',
  },
]

export const experience = [
  {
    company: 'Rapipay Fintech Private Limited',
    role: 'Software Engineer',
    period: '08/2024 – Present',
    location: 'Noida, India',
    current: true,
    type: 'Full-time',
    techStack: [
      'Java 17',
      'Spring Boot',
      'Apache Kafka',
      'PostgreSQL',
      'AWS SQS',
      'Apache Fineract LMS',
      'Digio SDKs',
      'Docker',
      'Kubernetes',
      'REST APIs',
    ],
    points: [
      'Deployed a robust Java 17, Spring Boot, and AWS SQS engine that ensures instant REST API delivery of all collections and UTR-confirmed settlements to NBFC partners, processing over 50K records.',
      'Automated UPI/e-NACH due and overdue presentation through Digio and Engineered Kafka bulk-upload pipelines for recovery, scaling throughput to 30K+ daily transactions.',
      'Designed an RBI-compliant NPA engine on DPD rules: loans beyond 90 DPD are classified as NPA and later collections go straight to principal, running on 100K+ loan records with 100% accuracy.',
      'Integrated Apache Fineract LMS with the LOS for multiple NBFCs, covering restructuring, rescheduling, foreclosure, settlement, cancellation and write-off; lender fund-transfer workflows brought zero manual steps to early closure and EMI reconciliation.',
      'Brought AWS writer DB utilization down from 99% to 5–20% by rewriting slow PostgreSQL queries, fixing N+1 calls and adding B-tree indexes, which also trimmed query latency by 40% on 1M+ record tables.',
      'Led technical design talks with the payments team and 3+ financial partners to finalize API contracts, so each integration shipped with clear specs and fewer rework cycles.',
    ],
  },
]
