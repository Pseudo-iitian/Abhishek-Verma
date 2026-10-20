// Simplified & Standardized Projects Data (Enterprise Fintech + Open Source Repositories)

export const projects = [
  {
    id: 'job-apply-app',
    title: 'JobApplyApp — AI Automated Job Hunter & ATS',
    source: 'Open Source / GitHub',
    categoryType: 'opensource',
    date: '2026-10',
    dateDisplay: 'Oct 2026',
    metric: '< 300ms Match',
    metricLabel: 'Groq + Gemini AI Inference',
    shortDesc:
      'Autonomous 24/7 background job discovery with Groq AI evaluation, Gemini resume tailoring, Jira-style Kanban, and 1-click Chrome autofill.',
    keyStack: ['Python', 'FastAPI', 'React', 'Groq AI', 'Chrome Extension'],
    stack: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'Groq AI',
      'Google Gemini',
      'WebSockets',
      'Chrome Extension',
      'Docker',
    ],
    problem:
      'Job hunting across fragmented portals is highly repetitive and slow, requiring manual tracking across spreadsheets, custom resume tweaking, and filling repetitive external job application forms.',
    architecture:
      'Autonomous AsyncIOScheduler background daemon with rate-limit circuit breakers, 3-tier LLM fallback pipeline (Groq AI for sub-300ms structured scoring, Gemini for deep resume tailoring), and WebSocket push.',
    implementation: [
      'Built a 24/7 background scheduler hunting jobs across LinkedIn and career portals with intelligent rate-limit backoff.',
      'Designed an ultra-fast AI evaluation engine using Groq AI (Qwen/Llama) producing structured match scores in under 300ms.',
      'Developed a Jira-style interactive Kanban pipeline with drag-and-drop state transitions synchronized over WebSockets.',
      'Created a manifest-v3 Chrome Extension communicating via secure local tokens to autofill complex job application portals in one click.',
    ],
    results: [
      'Cuts job discovery and application overhead by over 80%.',
      'Sub-300ms structured AI candidate evaluation latency.',
      'Full cross-browser Chrome extension with seamless 1-click autofill.',
    ],
    github: 'https://github.com/Pseudo-iitian/JobApplyApp',
  },
  {
    id: 'lms-los-engine',
    title: 'Loan Origination & Management System (LMS / LOS)',
    source: 'Rapipay Fintech',
    categoryType: 'fintech',
    date: '2026-04',
    dateDisplay: 'Apr 2026',
    metric: '7s → <30ms',
    metricLabel: '99%+ Faster EMI Processing',
    shortDesc:
      'Re-architected loan EMI calculation and repayment workflows from slow batch jobs into distributed Kafka event-driven microservices.',
    keyStack: ['Java 17', 'Spring Boot', 'Apache Kafka', 'Spring Batch', 'Apache Fineract'],
    stack: [
      'Java 17',
      'Spring Boot',
      'Apache Kafka',
      'Spring Batch',
      'AWS SQS',
      'Apache Fineract',
      'PostgreSQL',
    ],
    problem:
      'Legacy synchronous EMI calculations caused massive transaction timeouts, taking upwards of 7 seconds per loan schedule and leading to severe database deadlocks during month-end collection bursts.',
    architecture:
      'Event-driven reactive pipeline utilizing Kafka topic partitions for loan accounts, decoupled asynchronous workers, and Spring Batch chunk-oriented processing for massive repayment batches.',
    implementation: [
      'Migrated EMI calculation and balance updates to distributed Kafka event streams, slashing processing latency from 7s down to sub-30ms (99%+ reduction).',
      'Integrated Apache Fineract LMS with LOS for multiple NBFCs, automating restructuring, rescheduling, foreclosure, settlement, cancellation, and write-offs.',
      'Tuned repayment and settlement batch jobs using Spring Batch to process 100,000+ transactions/month at predictable sub-200ms latency.',
      'Designed zero-manual-intervention fund-transfer workflows for early loan closures and EMI reconciliation.',
    ],
    results: [
      '99%+ reduction in EMI processing latency (slashed from 7 seconds to under 30 milliseconds).',
      'Processes 100,000+ monthly loan transactions smoothly with zero deadlocks.',
      'Completely eliminated manual intervention for loan foreclosures and settlements across multiple NBFC partners.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'bikedone-platform',
    title: 'BikeDone — On-Demand Mechanic Dispatch Platform',
    source: 'Open Source / GitHub',
    categoryType: 'opensource',
    date: '2025-11',
    dateDisplay: 'Nov 2025',
    metric: '5–25 km',
    metricLabel: 'Real-Time Dynamic Dispatch',
    shortDesc:
      'Roadside assistance and mechanic dispatch system featuring AWS SQS geo-radius matching, STOMP WebSockets, and idempotent Razorpay payments.',
    keyStack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'AWS SQS', 'STOMP WebSockets'],
    stack: [
      'Java 17',
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'AWS SQS',
      'Razorpay',
      'WebSocket (STOMP)',
      'Firebase / SNS',
    ],
    problem:
      'Locating trustworthy two-wheeler mechanics during breakdowns suffered from manual phone calls, no geographic visibility, untracked pricing, and payment fraud.',
    architecture:
      'Asynchronous dispatch pipeline using AWS SQS for geo-radius matching, WebSocket (STOMP) for bidirectional live location and chat, and Razorpay webhook validation.',
    implementation: [
      'Built an AWS SQS dispatch queue that dynamically auto-assigns the nearest mechanic within a 5–25 km radius with configurable retry policies.',
      'Engineered real-time chat and two-way mechanic location tracking over WebSockets using the STOMP protocol.',
      'Hardened platform security using Spring Security with JWT authentication, role-based access control (RBAC), AES data encryption, and OTP login via Firebase/AWS SNS.',
      'Integrated Razorpay payment gateway with strictly idempotent webhook handlers preventing duplicate charges or race conditions.',
    ],
    results: [
      'Autonomous sub-second mechanic matching and dispatch with zero operator intervention.',
      'Reliable real-time WebSocket communication under weak mobile network conditions.',
      '100% idempotent payment reconciliation with zero double-charge complaints.',
    ],
    github: 'https://github.com/AishMishra001/bikeDone',
  },
  {
    id: 'digio-upi-nach',
    title: 'UPI & e-NACH Payment Integration with Digio',
    source: 'Rapipay Fintech',
    categoryType: 'fintech',
    date: '2025-08',
    dateDisplay: 'Aug 2025',
    metric: '30K+ Daily',
    metricLabel: '+50% UPI Repayment Adoption',
    shortDesc:
      'Automated collection presentation pipeline for recurring e-NACH mandates and real-time UPI debit transactions through Digio SDKs.',
    keyStack: ['Java 17', 'Spring Boot', 'Apache Kafka', 'Digio SDKs', 'PostgreSQL'],
    stack: ['Java 17', 'Spring Boot', 'Digio SDKs', 'Apache Kafka', 'PostgreSQL', 'REST APIs'],
    problem:
      'Borrower repayment collections were reliant on manual reminders and fragmented payment links, causing high bounce rates, delayed reconciliation, and missed banking clearing cycles.',
    architecture:
      'Scheduled presentation triggers connected to Digio SDKs with resilient Kafka bulk-upload pipelines handling high-concurrency payment recovery webhooks.',
    implementation: [
      'Architected end-to-end UPI and e-NACH presentation workflows for due and overdue loan installments via Digio.',
      'Engineered high-throughput Kafka bulk-upload pipelines for automated debt recovery, scaling capacity to over 30,000+ daily transactions.',
      'Implemented idempotent callback consumers preventing duplicate ledger postings during banking network retries.',
    ],
    results: [
      'Boosted UPI-based repayment adoption by 50% across the borrower portfolio.',
      'Scales seamlessly to handle 30,000+ UPI debit and e-NACH transactions daily.',
      'Guarantees instant UTR status capture and zero reconciliation discrepancies.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'splitwise-platform',
    title: 'Splitwise — Expense Settlement & Debt Simplification',
    source: 'Open Source / GitHub',
    categoryType: 'opensource',
    date: '2025-05',
    dateDisplay: 'May 2025',
    metric: 'Graph Algorithm',
    metricLabel: 'Min Cash Flow Settlements',
    shortDesc:
      'Full-stack bill splitting app using the Min-Cash-Flow graph algorithm to eliminate circular debts and minimize total settlement transactions.',
    keyStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Graph Theory'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Graph Theory', 'REST APIs'],
    problem:
      'Group travel and room sharing creates messy entangled debts where multiple people owe each other unequal amounts, causing confusion and dozens of unnecessary pairwise transactions.',
    architecture:
      'Microservice REST architecture paired with a greedy graph algorithm that computes net balances and iteratively settles the maximum creditor with the maximum debtor.',
    implementation: [
      'Implemented net balance calculation reducing O(N^2) mutual debts down to a minimal transaction tree.',
      'Engineered group expense tracking with unequal splits, percentage-based splits, and multi-currency support.',
      'Built interactive React UI with transaction history, real-time group balances, and settlement receipts.',
    ],
    results: [
      'Slashes the total number of peer-to-peer settlement transactions by up to 60%.',
      'Guarantees 100% arithmetic balance consistency across multi-user groups.',
      'Zero ledger discrepancies even with complex multi-payer transactions.',
    ],
    github: 'https://github.com/Pseudo-iitian/Splitwise',
  },
  {
    id: 'aws-db-optimization',
    title: 'AWS Database Performance Tuning & Query Optimization',
    source: 'Rapipay Fintech',
    categoryType: 'fintech',
    date: '2025-02',
    dateDisplay: 'Feb 2025',
    metric: '99% → 5–20%',
    metricLabel: 'Writer DB Load Slashed',
    shortDesc:
      'Deep PostgreSQL execution plan profiling, composite B-tree indexing, and N+1 query eradication on AWS RDS databases with 1M+ records.',
    keyStack: ['PostgreSQL', 'AWS RDS', 'B-Tree Indexing', 'PL/pgSQL', 'Spring Boot'],
    stack: ['PostgreSQL', 'AWS RDS', 'PL/pgSQL', 'B-Tree Indexing', 'Spring Boot'],
    problem:
      'AWS RDS writer database utilization consistently spiked to dangerous 99% levels during peak hours due to unindexed foreign keys, slow joins, and severe ORM N+1 query loops.',
    architecture:
      'Systematic execution plan analysis (EXPLAIN ANALYZE), composite B-tree indexing strategies, query rewriting, and stored procedure optimizations.',
    implementation: [
      'Identified and rewrote slow financial reporting queries, completely eliminating sequential table scans across tables exceeding 1,000,000 records.',
      'Eradicated costly N+1 Hibernate/JPA fetch patterns through join fetch optimizations and batch fetch sizing.',
      'Designed targeted B-tree indexes matching exact lending query filters, composite keys, and range scans.',
    ],
    results: [
      'Dramatically plummeted AWS writer database utilization from 99% down to a healthy 5–20%.',
      'Trimmed overall query latency by 40% on production tables exceeding 1M+ rows.',
      'Completely eliminated database timeout errors and prevented costly vertical RDS scale-ups.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'npa-classification-engine',
    title: 'RBI-Compliant Rule-Based NPA Engine',
    source: 'Rapipay Fintech',
    categoryType: 'fintech',
    date: '2024-11',
    dateDisplay: 'Nov 2024',
    metric: '100K+ / Day',
    metricLabel: '100% RBI DPD Rule Compliance',
    shortDesc:
      'Automated loan classification engine evaluating 100K+ records daily against RBI DPD rules with principal-first recovery routing.',
    keyStack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'DPD State Engine', 'Apache Fineract'],
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'DPD State Engine', 'Apache Fineract'],
    problem:
      'Lending regulations mandate strict DPD categorization: accounts over 90 DPD must be classified as NPA, and all subsequent recovery collections must route straight to principal before interest.',
    architecture:
      'Deterministic rule engine evaluating loan aging daily against RBI state matrices with strict financial ledger accounting locks.',
    implementation: [
      'Implemented daily evaluation logic calculating DPD (Days Past Due) and SMA (Special Mention Account) stages.',
      'Engineered dynamic recovery routing: once an account crosses 90 DPD, collections automatically bypass penalties/interest and apply directly to principal.',
      'Built immutable point-in-time audit logs for NBFC risk officers and RBI banking audits.',
    ],
    results: [
      'Evaluates over 100,000+ active loan records daily with verified 100% rule-matching accuracy.',
      'Guarantees zero regulatory compliance breaches during external NBFC and RBI audits.',
      'Automated daily NPA provisioning updates in Apache Fineract without manual calculations.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'nbfc-settlement-engine',
    title: 'Configurable Settlement & Collection Posting Engine',
    source: 'Rapipay Fintech',
    categoryType: 'fintech',
    date: '2024-09',
    dateDisplay: 'Sep 2024',
    metric: '70% Faster',
    metricLabel: 'Partner Integration TAT',
    shortDesc:
      'Multi-partner NBFC settlement posting microservice delivering real-time UTR-confirmed financial clearing with instant REST API delivery.',
    keyStack: ['Java 17', 'Spring Boot', 'AWS SQS', 'PostgreSQL', 'REST APIs'],
    stack: ['Java 17', 'Spring Boot', 'AWS SQS', 'PostgreSQL', 'Docker', 'REST APIs'],
    problem:
      'Financial partners demanded custom payload formats, strict acknowledgment SLAs, and instant UTR reconciliation which previously caused weeks of custom development per partner.',
    architecture:
      'Config-driven microservice utilizing AWS SQS for guaranteed message delivery, transactional outbox patterns, and partner-specific REST adapter strategies.',
    implementation: [
      'Engineered an instant REST API delivery pipeline processing collections and UTR settlements for 50,000+ records to NBFC systems.',
      'Spearheaded technical design sessions with the payments team and 3+ financial partners to establish airtight API contracts, eliminating downstream rework.',
      'Implemented automated retry queues and circuit breakers to handle downstream partner outages gracefully.',
    ],
    results: [
      'Processed over 50,000 settlement records with zero transaction loss.',
      'Accelerated new partner integration turnaround time by 70%.',
      'Built bulletproof auditability between internal transaction IDs and banking UTR numbers.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'dyslexia-prediction-model',
    title: 'Dyslexia Prediction Model — Machine Learning Classifier',
    source: 'Open Source / GitHub',
    categoryType: 'opensource',
    date: '2024-05',
    dateDisplay: 'May 2024',
    metric: '92.4% Accuracy',
    metricLabel: 'Supervised ML Benchmark',
    shortDesc:
      'Early diagnostic machine learning screening pipeline predicting dyslexia risk based on phonological and cognitive assessment metrics.',
    keyStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Flask'],
    stack: [
      'Python',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'XGBoost',
      'Matplotlib',
      'Flask',
    ],
    problem:
      'Traditional dyslexia evaluations are costly, require manual clinical visits, and are often administered late in childhood after learning deficits have already accumulated.',
    architecture:
      'Data preprocessing pipeline with feature normalization, class imbalance handling (SMOTE), and an ensemble XGBoost/Random Forest classification model.',
    implementation: [
      'Performed exploratory data analysis and feature correlation analysis on psychometric and language datasets.',
      'Trained and evaluated multiple supervised algorithms (Logistic Regression, Random Forest, SVM, and XGBoost).',
      'Exported model with serialization for lightweight web inference via a Python Flask REST API.',
    ],
    results: [
      'Achieved 92.4% cross-validation accuracy on test evaluation benchmarks.',
      'High sensitivity/recall minimizing false negatives for early educational screening.',
      'Published reproducible open-source research pipeline on GitHub.',
    ],
    github: 'https://github.com/Aayush894/Dyslexia-Prediction-Model',
  },
]
