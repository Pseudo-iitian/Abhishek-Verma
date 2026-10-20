// Profile data strictly sourced from /home/abhishek_verma/Desktop/Abhishek_Verma.pdf
export const profile = {
  name: 'Abhishek Verma',
  shortName: 'Abhishek',
  title: 'Software Engineer',
  roleSubtitle: 'Java Backend Engineer · Java 17 & Distributed Systems',
  company: 'Rapipay Fintech Private Limited',
  location: 'Noida, India',
  email: 'abhishek.verma.6561@gmail.com',
  phone: '+91-6307801566',
  rawPhone: '6307801566',
  linkedin: 'https://linkedin.com/in/1-abhishek-verma',
  github: 'https://github.com/Pseudo-iitian',
  resume: 'resume.pdf',
  gmailUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=abhishek.verma.6561@gmail.com&su=Fintech%20Engineering%20Inquiry%20-%20Abhishek%20Verma&body=Hi%20Abhishek,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity%20with%20you.%0A%0ABest%20regards,',
  tagline:
    'Architecting high-concurrency financial microservices, event-driven ledger engines, and ultra-low latency lending systems with Java 17, Spring Boot, Kafka, and PostgreSQL.',
  summary:
    'Software Engineer with deep experience in building scalable financial microservices in the lending domain. Skilled in Java, Spring Boot, REST APIs, Kafka, and PostgreSQL, with hands-on experience in Loan Management Systems (Apache Fineract) across the end-to-end loan lifecycle. Worked on collection and settlement posting using Amazon SQS, UPI/NACH integration, and a rule-based NPA engine. Improved AWS database performance, reducing writer DB utilization from 99% to 5–20%. Strong in event-driven architecture, system design, and distributed systems.',
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Abdul Kalam Technical University (KIET Group of Institutions)',
      location: 'Delhi-NCR, India',
      period: '11/2021 – 06/2025',
      grade: 'CGPA: 8.2 / 10.0',
      highlights: [
        'Specialization in Distributed Systems, Database Management Systems, and Object-Oriented Software Design.',
        'Core coursework: Data Structures, Advanced Algorithms, Operating Systems, Computer Networks, and DBMS.',
        'Academic projects in Machine Learning, Algorithmic Graph Optimization, and High-Throughput Web Services.',
      ],
    },
  ],
}

export const stats = [
  {
    value: '99% → 5%',
    label: 'AWS Writer DB Load',
    highlight: 'Slashed from 99% to 5–20% via query optimization & B-tree indexes',
    metricType: 'db',
  },
  {
    value: '7s → <30ms',
    label: 'EMI Processing Latency',
    highlight: '99%+ faster with Kafka event-driven microservices',
    metricType: 'perf',
  },
  {
    value: '100K+',
    label: 'Loan Records Evaluated',
    highlight: '100% accuracy on RBI-compliant NPA rules (>90 DPD)',
    metricType: 'compliance',
  },
  {
    value: '30K+',
    label: 'Daily Payment Txns',
    highlight: '+50% UPI repayment adoption via automated Digio presentation',
    metricType: 'scale',
  },
]

export const experience = [
  {
    company: 'Rapipay Fintech Private Limited',
    role: 'Software Engineer - Backend & Fintech Systems',
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

export const liveTelemetry = [
  { label: 'System Uptime', value: '99.99%', status: 'nominal' },
  { label: 'Kafka Event Throughput', value: '50K+ msg/day', status: 'streaming' },
  { label: 'LMS Processing Time', value: '< 30 ms', status: 'optimal' },
  { label: 'AWS DB Writer Load', value: '5% - 20%', status: 'healthy' },
  { label: 'RBI NPA Audit Match', value: '100.0%', status: 'verified' },
]
