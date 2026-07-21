export const featuredProjects = [
  {
    title: "EstateAgent",
    type: "Agentic AI · Real-time",
    year: "2026",
    description:
      "A low-latency voice agent for real-estate lead qualification that listens, reasons, verifies users, books meetings, and follows up automatically.",
    impact:
      "Streams microphone audio over WebSockets and turns LLM output into smaller TTS chunks, keeping the first spoken response fast and conversations natural.",
    technologies: [
      "FastAPI",
      "LangGraph",
      "WebSockets",
      "STT / TTS",
      "Google Calendar",
    ],
    flow: ["Voice", "STT", "Agent", "TTS"],
    deployed: "https://voice-agent-frontend-tau.vercel.app/",
    github: "https://github.com/Psanjay-15/VoiceAgent-Backend",
    accent: "lime",
  },
  {
    title: "AI Catalog Generator",
    type: "Generative AI · Full stack",
    year: "2026",
    description:
      "Turns raw product copy and uploaded documents into editable, single-page catalogs with structured content and print-ready exports.",
    impact:
      "Runs an asynchronous, provider-agnostic generation pipeline with typed outputs, HTML sanitization, persistent jobs, and synchronized PDF re-rendering.",
    technologies: ["Python", "FastAPI", "React", "MongoDB", "Playwright"],
    flow: ["Upload", "LLM schema", "HTML", "PDF"],
    deployed: "https://catalogue-frontend-one.vercel.app/",
    github: "https://github.com/Psanjay-15/Catalogue-Backend",
    accent: "blue",
  },
  {
    title: "Waypoint",
    type: "Grounded AI · Product system",
    year: "2026",
    description:
      "An interstate relocation product that brings state comparisons, cost estimates, move planning, local discovery, and a grounded AI assistant into one cohesive experience.",
    impact:
      "Pairs MongoDB-backed state data with deterministic domain logic and context-aware AI answers, while frontend fallbacks keep critical product flows resilient.",
    technologies: ["FastAPI", "React 19", "MongoDB", "OpenAI", "Leaflet"],
    flow: ["State data", "Grounding", "AI answer", "Plan"],
    deployed: "https://waypoint-frontend-zeta.vercel.app/",
    github: "https://github.com/Psanjay-15/Waypoint-Backend",
    accent: "violet",
  },

  {
    title: "Support-AI",
    type: "RAG · Knowledge systems",
    year: "2026",
    description:
      "An end-to-end support agent that ingests websites and PDFs, builds a searchable knowledge base, and answers product questions with relevant context.",
    impact:
      "Combines query rewriting, semantic retrieval, reranking, and contextual synthesis over a local-first Qdrant knowledge store.",
    technologies: ["LangGraph", "Ollama", "Qdrant", "Firecrawl", "PyMuPDF"],
    flow: ["Sources", "Embeddings", "Qdrant", "Answer"],
    // deployed: "https://support-agent-eight.vercel.app/",
    github: "https://github.com/Psanjay-15/SupportAi",
    accent: "orange",
  },
  {
    title: "Slack Standup Bot",
    type: "Workflow automation · AI summaries",
    year: "2026",
    description:
      "A Slack bot that automates daily standups by messaging team members, collecting their updates, and publishing an AI-generated summary to a shared channel.",
    impact:
      "Connects scheduled Slack conversations, persistent PostgreSQL responses, and local Ollama summarization into one repeatable team workflow.",
    technologies: ["Python", "FastAPI", "Slack API", "PostgreSQL", "Ollama"],
    flow: ["DM prompt", "Replies", "AI summary", "Team channel"],
    github: "https://github.com/Psanjay-15/Slack_Bot",
    accent: "pink",
  },
];

export const githubProjects = [
  {
    title: "Semantic Audio Search",
    language: "Python",
    description:
      "Makes audio searchable with natural language by combining semantic embeddings with vector retrieval.",
    github: "https://github.com/Psanjay-15/Audio",
  },
  {
    title: "ToursPlanner",
    language: "TypeScript",
    description:
      "A complete tour-booking experience with secure authentication, itinerary discovery, and Razorpay payments.",
    github: "https://github.com/Psanjay-15/ToursPlanner",
  },
];
