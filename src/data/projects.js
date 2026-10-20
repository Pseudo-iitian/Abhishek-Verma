// Core Projects directly sourced from /home/abhishek_verma/Desktop/Abhishek_Verma.pdf

export const projects = [
  {
    id: 'lms-los-engine',
    title: 'Loan Origination & Management System (LMS / LOS)',
    tagline: 'High-throughput event-driven lending microservices & Apache Fineract integration',
    metric: '7s → <30ms',
    metricLabel: '99%+ Faster EMI Processing',
    category: 'Core Lending Architecture',
    featured: true,
    ghatName: 'Assi Ghat Platform',
    stack: [
      'Java 17',
      'Spring Boot',
      'Apache Kafka',
      'Spring Batch',
      'AWS SQS',
      'Apache Fineract',
      'PostgreSQL',
    ],
    summary:
      'Re-architected EMI processing and repayment workflows from slow synchronous batch jobs into an asynchronous event-driven microservice system powered by Apache Kafka and Spring Batch.',
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
    id: 'digio-upi-nach',
    title: 'UPI & e-NACH Collection Integration with Digio',
    tagline: 'Automated due/overdue presentation & high-throughput Kafka recovery pipelines',
    metric: '30K+ Daily Txns',
    metricLabel: '+50% UPI Repayment Adoption',
    category: 'Payments & Collections Infrastructure',
    featured: true,
    ghatName: 'Dashashwamedh Ghat Platform',
    stack: ['Java', 'Spring Boot', 'Digio SDKs', 'Apache Kafka', 'PostgreSQL', 'REST APIs'],
    summary:
      'Designed and engineered the end-to-end automated collection and presentation pipeline for recurring e-NACH mandates and real-time UPI debit transactions through Digio.',
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
    id: 'aws-db-optimization',
    title: 'AWS Database Performance Tuning & Query Optimization',
    tagline: 'PostgreSQL execution plan refactoring, B-tree indexing & N+1 eradication',
    metric: '99% → 5–20%',
    metricLabel: 'Writer DB Utilization Slashed',
    category: 'Database & Systems Engineering',
    featured: true,
    ghatName: 'Manikarnika Ghat Platform',
    stack: ['PostgreSQL', 'AWS RDS', 'PL/pgSQL', 'B-Tree Indexing', 'Spring Boot'],
    summary:
      'Conducted deep PostgreSQL query profiling and indexing refactoring on mission-critical AWS RDS financial databases containing over 1 million records.',
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
    tagline: 'Automated Days Past Due (DPD) evaluation & principal-first recovery routing',
    metric: '100,000+ Records',
    metricLabel: '100% Rule Compliance Accuracy',
    category: 'Regulatory Banking Engine',
    featured: false,
    ghatName: 'Panchganga Ghat Platform',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'DPD State Engine', 'Apache Fineract'],
    summary:
      'Engineered an automated asset classification engine strictly adhering to Reserve Bank of India (RBI) guidelines for Non-Performing Assets across retail loan portfolios.',
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
    id: 'bikedone-platform',
    title: 'BikeDone: Mechanic at Your Doorstep',
    tagline: 'On-demand dispatch engine, STOMP WebSockets & idempotent Razorpay payments',
    metric: '5–25 km Dispatch',
    metricLabel: 'Real-Time STOMP Tracking',
    category: 'Full-Stack Distributed System',
    featured: true,
    ghatName: 'Harishchandra Ghat Platform',
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'AWS SQS',
      'Razorpay',
      'WebSocket (STOMP)',
      'Firebase / SNS',
    ],
    summary:
      'Engineered an on-demand roadside assistance and vehicle service dispatch system featuring real-time mechanic assignment, live tracking, and secure digital payments.',
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
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'nbfc-settlement-engine',
    title: 'Configurable Settlement & Collection Posting Engine',
    tagline: 'Multi-partner NBFC financial clearing with instant REST API delivery',
    metric: '50K+ Records',
    metricLabel: 'Instant NBFC Delivery',
    category: 'Fintech Microservices',
    featured: false,
    ghatName: 'Kashi Vishwanath Platform',
    stack: ['Java 17', 'Spring Boot', 'AWS SQS', 'PostgreSQL', 'Docker', 'REST APIs'],
    summary:
      'Engineered a robust collection and settlement posting microservice delivering real-time UTR-confirmed financial records to external NBFC partners.',
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
]
