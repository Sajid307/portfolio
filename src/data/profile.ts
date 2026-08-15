export const profile = {
  name: "Sajid Ansari",
  role: "Software Engineer · Java Backend Developer",
  location: "India",
  email: "sajidansari307@gmail.com",
  phone: "+91 7981171017",
  github: "https://github.com/Sajid307",
  linkedin: "https://www.linkedin.com/in/sajidansari307/",
  leetcode: "https://leetcode.com/u/Sajid-307/",
  leetcodeRepo: "https://github.com/Sajid307/leetcode",
  leetcodeStats:
    "https://raw.githubusercontent.com/Sajid307/leetcode/main/profile/leetcode.svg",
  leetcodeHeatmap:
    "https://raw.githubusercontent.com/Sajid307/leetcode/main/profile/heatmap.svg",
  leetcodeMetrics:
    "https://raw.githubusercontent.com/Sajid307/leetcode/main/profile/metrics.svg",
  leetcodeRecent:
    "https://github.com/Sajid307/leetcode/blob/main/profile/recent-problems.md",
  summary:
    "Software Engineer with 4+ years of experience building scalable, event-driven backend systems using Java, Spring Boot, Spring WebFlux and Microservices. Experienced in high-throughput REST APIs, asynchronous messaging with Kafka and RabbitMQ, legacy modernization, database performance tuning, Docker, Kubernetes, AWS, observability and AI integration.",
  highlights: [
    { value: "4+", label: "Years experience" },
    { value: "80+", label: "REST endpoints built" },
    { value: "500+", label: "Events/min processed" },
    { value: "100+", label: "Pull requests reviewed" }
  ]
};

export const skills = [
  {
    category: "Languages",
    items: ["Java 8/17", "SQL"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring MVC", "Spring WebFlux", "Spring Data JPA", "Hibernate", "REST APIs"]
  },
  {
    category: "Architecture",
    items: ["Microservices", "Reactive Programming", "Event-Driven Architecture", "Distributed Systems", "System Design"]
  },
  {
    category: "Messaging",
    items: ["Apache Kafka", "RabbitMQ"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS S3", "Docker", "Kubernetes", "Git", "Maven", "CI/CD"]
  },
  {
    category: "Observability",
    items: ["Splunk", "Prometheus"]
  },
  {
    category: "AI",
    items: ["Google Gemini API"]
  },
  {
    category: "Practices",
    items: ["SOLID", "Design Patterns", "Unit Testing", "Code Reviews", "Agile Scrum", "Production Support"]
  }
];

export const experiences = [
  {
    period: "Jan 2025 — Present",
    title: "Software Engineer",
    company: "Cognizant Technology Solutions",
    product: "Sentinels — Enterprise Modernization",
    stack: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "Kubernetes", "Spring Security"],
    bullets: [
      "Architected and built a Spring Boot REST API layer from scratch with 80+ endpoints across 9 product domains.",
      "Backed the new API foundation with 400+ unit and integration tests and contributed across 100+ pull requests.",
      "Eliminated N+1 query patterns using bulk SQL, database-level ordering and aggregate queries.",
      "Integrated SSO with Spring Security and delivered configurable idle-session logout with an audit trail.",
      "Delivered asynchronous post-save flushing, cross-tab cache invalidation and cross-user real-time notifications.",
      "Designed a phased migration strategy allowing legacy Vaadin and the new Vue.js/Spring Boot architecture to coexist.",
      "Containerized new services on Kubernetes with CI/CD support and strengthened observability using Splunk and Prometheus."
    ]
  },
  {
    period: "Jun 2023 — Dec 2024",
    title: "Junior Software Engineer",
    company: "Cognizant Technology Solutions",
    product: "Intelligent Routing Application",
    stack: ["Java", "Spring WebFlux", "Kafka", "RabbitMQ", "MongoDB"],
    bullets: [
      "Designed an event consumer processing 500+ real-time events per minute from Genesys Dispatcher with zero data loss.",
      "Fixed a high-concurrency request cross-contamination bug by introducing a composite request-scoped key, reducing the failure rate from ~100% to 0% under concurrent same-resource load.",
      "Scoped cache cleanup to the originating request, reducing the blast radius of a cascade failure to a single request.",
      "Corrected reactive pipeline ordering by replacing an inappropriate doOnNext usage with flatMap.",
      "Replaced per-call WebSocket connections with a Kafka-based asynchronous request-response pattern.",
      "Added cache-first idempotency checks to prevent duplicate Kafka deliveries from causing redundant writes."
    ]
  },
  {
    period: "Aug 2022 — May 2023",
    title: "Program Analyst",
    company: "Cognizant Technology Solutions",
    product: "Media Manager — IVR Multimedia Platform",
    stack: ["Java", "Spring WebFlux", "PostgreSQL", "AWS S3", "Reactive Programming"],
    bullets: [
      "Built an audio chunking pipeline to work around third-party speech-recognition request-size limits while preserving transcript order.",
      "Resolved a blocking WebSocket and Reactor/Netty threading conflict using bounded elastic execution and timeout protection.",
      "Contributed to file distribution across 100+ downstream servers across multiple regions using pull-based delta delivery.",
      "Refactored blocking database access into a non-blocking reactive pipeline.",
      "Implemented parallel batch metadata validation using a CPU-aware fixed thread pool.",
      "Built multipart object-storage uploads with automatic parallel chunking above a 5MB threshold."
    ]
  }
];

export const projects = [
  {
    title: "AI Learning Assistant",
    type: "Personal Project",
    description:
      "AI-powered learning assistant that answers user queries using generative AI, backed by a Java service layer.",
    stack: ["Java", "Spring Boot", "Google Gemini API", "AWS S3"],
    bullets: [
      "Integrated Google Gemini API into a Spring Boot backend for context-aware AI responses.",
      "Used AWS S3 for application asset storage.",
      "Designed a clean REST API layer to decouple AI provider logic from core application services."
    ]
  },
  {
    title: "Media Management Platform",
    type: "Enterprise",
    description:
      "Enterprise platform for managing IVR multimedia assets and distributing media to downstream servers.",
    stack: ["Java", "Spring WebFlux", "PostgreSQL", "AWS S3"],
    bullets: [
      "Implemented concurrent audio processing and transcript reconstruction.",
      "Supported distribution across 100+ downstream servers.",
      "Implemented multipart object-storage uploads with parallel chunking."
    ]
  },
  {
    title: "Intelligent Routing Application",
    type: "Enterprise",
    description:
      "AI-assisted contact-center routing platform built around reactive services and event-driven messaging.",
    stack: ["Java", "Spring WebFlux", "Kafka", "RabbitMQ", "MongoDB"],
    bullets: [
      "Processed 500+ real-time events per minute.",
      "Implemented Kafka-based asynchronous request-response processing.",
      "Improved reliability through request-scoped correlation and idempotent event processing."
    ]
  }
];

export const learning = [
  "Data Structures & Algorithms",
  "System Design",
  "Distributed Systems",
  "Scalability",
  "Caching",
  "Database Scaling",
  "Message Queues",
  "Fault Tolerance",
  "High Availability",
  "API Design"
];
