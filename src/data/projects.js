// Core Engineering Projects from Abhishek Verma's real fintech and backend track record

export const projects = [
  {
    id: 'settlement-engine',
    title: 'Configurable Settlement Engine',
    tagline: 'Multi-partner financial posting & clearing microservice',
    metric: '70% Lower Partner TAT',
    metricLabel: 'Turnaround Time',
    category: 'Fintech Microservices',
    featured: true,
    ghatName: 'Assi Ghat Platform',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'REST APIs'],
    summary:
      'Architected a dynamic, rule-driven financial settlement posting engine allowing rapid onboarding of partner institutions without code refactors.',
    problem:
      'Financial partner integrations previously suffered from rigid, hardcoded payout and posting logic, requiring weeks of custom developer overhead for every new partner.',
    architecture:
      'Config-driven workflow engine with strategy pattern dispatchers, idempotent database triggers, and Kafka event publishing for transaction reconciliation.',
    implementation: [
      'Engineered configurable transaction state machines in Spring Boot with transactional boundaries.',
      'Decoupled partner-specific settlement rules into dynamic database-driven rule templates.',
      'Integrated real-time Kafka event streams to notify partner webhooks with zero packet loss.',
    ],
    results: [
      '70% reduction in partner integration turnaround time (from weeks to days).',
      'Successfully on-boarded 3+ major financial partners on unified infrastructure.',
      'Achieved 99.99% ledger consistency under high concurrent load.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'npa-classification',
    title: 'RBI-Aligned NPA Classification',
    tagline: 'Automated Days Past Due (DPD) & SMA Stage Asset Tracking',
    metric: '100,000+ Records',
    metricLabel: '100% Rule Compliance',
    category: 'Regulatory Banking Engine',
    featured: true,
    ghatName: 'Dashashwamedh Ghat Platform',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL Optimization', 'Docker'],
    summary:
      'Engineered an automated asset classification engine strictly adhering to Reserve Bank of India (RBI) guidelines for Non-Performing Assets across retail loan portfolios.',
    problem:
      'Manual and semi-automated DPD calculation caused delays in identifying SMA-0, SMA-1, SMA-2 categories, risking regulatory non-compliance and delayed provisioning.',
    architecture:
      'High-throughput batch and event-driven classification pipelines with deterministic state validation against RBI guidelines.',
    implementation: [
      'Implemented Days-Past-Due (DPD) transition matrix handling principal/interest overdue tracking.',
      'Built automated daily batch evaluators with partition-based processing.',
      'Engineered full audit trails to provide regulatory inspectors with point-in-time loan status.',
    ],
    results: [
      'Processed over 100,000+ loan accounts seamlessly in daily evaluation windows.',
      'Achieved 100% audit-verified compliance with RBI guidelines.',
      'Cut classification execution cycle time by over 50%.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'db-optimization',
    title: 'Database Performance & Latency Tuning',
    tagline: 'Deep PostgreSQL execution plan tuning & Redis caching',
    metric: '40% Lower Latency',
    metricLabel: 'On 1M+ Records',
    category: 'Performance Engineering',
    featured: true,
    ghatName: 'Manikarnika Ghat Platform',
    stack: ['PostgreSQL', 'Redis', 'Spring Boot', 'Flyway', 'Query Profiling'],
    summary:
      'Executed systematic database profiling and indexing refactors on mission-critical financial transaction ledgers exceeding one million records.',
    problem:
      'Complex reporting joins and unindexed foreign keys caused severe query bottlenecks, transaction timeouts, and degraded p95 latency during peak settlement hours.',
    architecture:
      'Optimized B-tree and composite indexing strategies, stored procedure modernization, and multi-tier Redis read-through caching.',
    implementation: [
      'Analyzed EXPLAIN ANALYZE execution trees to eradicate expensive sequential table scans and N+1 queries.',
      'Re-architected stored procedures and materialized views for sub-second report generation.',
      'Introduced Redis distributed cache for frequently requested loan summaries and partner metadata.',
    ],
    results: [
      'Reduced p95 query response time by 40% on production databases exceeding 1,000,000 rows.',
      'Eliminated query timeout exceptions during end-of-day reconciliation bursts.',
      'Improved reporting pipeline throughput by 30-40%.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'event-upi-nach',
    title: 'Event-Driven UPI & e-NACH Recovery',
    tagline: 'Asynchronous event streaming for debt collection & clearing',
    metric: '50K+ Daily Events',
    metricLabel: 'Kafka Stream Processing',
    category: 'Distributed Systems',
    featured: false,
    ghatName: 'Panchganga Ghat Platform',
    stack: ['Apache Kafka', 'Amazon SQS', 'Java 17', 'Spring Boot', 'PostgreSQL'],
    summary:
      'Architected resilient, distributed message pipelines for asynchronous NACH clearing and real-time UPI collection webhooks.',
    problem:
      'Synchronous payment webhook processing created thread pool exhaustion during banking settlement spikes, leading to dropped callbacks and reconciliation gaps.',
    architecture:
      'Decoupled event pipeline using Kafka topic partitions with idempotent consumer groups and dead-letter queues (DLQ).',
    implementation: [
      'Built reactive Kafka consumer workers with deduplication checks using Redis distributed locks.',
      'Implemented dead-letter queue (DLQ) retry topologies with exponential backoff for banking partner downtime.',
      'Streamlined automated reconciliation logic, reaching 99.5% reconciliation precision.',
    ],
    results: [
      'Processes 50,000+ daily events without dropped packets or thread starvation.',
      'Saved 15+ manual operational hours weekly by automating payment mapping.',
      'Increased system fault tolerance and uptime by 40%.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'loan-management-lifecycle',
    title: 'Loan Management & Reducing-Balance Engine',
    tagline: 'End-to-end LMS microservice with Apache Fineract integration',
    metric: '40% Faster Processing',
    metricLabel: 'Automated Foreclosure',
    category: 'Core Lending Architecture',
    featured: false,
    ghatName: 'Kashi Vishwanath Platform',
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'Apache Fineract', 'PostgreSQL', 'Docker'],
    summary:
      'Developed a scalable Loan Management System featuring an exact reducing-balance EMI algorithm, automated foreclosure state engine, and JWT security.',
    problem:
      'Legacy loan calculations suffered from rounding discrepancies and manual interventions during premature loan foreclosures and partial prepayments.',
    architecture:
      'Domain-Driven microservice design with strict double-entry ledger postings, reducing-balance amortisation calculators, and scheduler-driven reconcilers.',
    implementation: [
      'Implemented high-precision mathematical reducing-balance EMI calculation models.',
      'Integrated Apache Fineract LMS contracts and RPS payload specifications for automated foreclosure.',
      'Secured APIs with Spring Security JWT and validated test suites using JUnit 5 and Mockito.',
    ],
    results: [
      'Boosted loan issuance and foreclosure turnaround by 40%.',
      'Eliminated mathematical rounding drift down to fractional paise accuracy.',
      'Full test coverage across interest recalculation edge cases.',
    ],
    github: 'https://github.com/Pseudo-iitian',
  },
]
