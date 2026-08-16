export const featuredProjects = [
  {
    title: "EstateVoice",
    type: "Agentic AI · Real-time",
    year: "2026",
    description:
      "A low-latency voice agent for real-estate lead qualification that listens, reasons, verifies users, books meetings, and follows up automatically.",
    impact:
      "Streams microphone audio over WebSockets and converts LLM output into smaller TTS chunks so spoken responses begin before the full answer is ready.",
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
  },
  {
    title: "ActionGate",
    type: "AI governance · Platform",
    year: "2026",
    description:
      "A policy enforcement and human-approval layer that controls sensitive AI-agent actions before they create real-world side effects.",
    impact:
      "Separates AI reasoning from authorization through deterministic Allow, Block, and Require Approval decisions, immutable policy versions, durable resume checkpoints, and auditable traces.",
    technologies: [
      "Python SDK",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "Docker",
    ],
    flow: ["Intercept", "Evaluate", "Approve", "Resume"],
    demo: "https://drive.google.com/file/d/1IzqSWS8qUEXPuWgyUFwbI3Pnbpltjqi5/view",
    github: "https://github.com/Psanjay-15/ActionGate-Backend",
  },

  {
    title: "AI Catalog Generator",
    type: "Generative AI · Full stack",
    year: "2026",
    description:
      "Turns product copy and uploaded PDF, DOCX, or TXT files into editable catalogs with structured content and print-ready exports.",
    impact:
      "Uses asynchronous jobs, provider-agnostic LLM integration, validated structured outputs, persistent data, and synchronized PDF rendering.",
    technologies: ["Python", "FastAPI", "React", "MongoDB", "Playwright"],
    flow: ["Upload", "LLM schema", "HTML", "PDF"],
    deployed: "https://catalogue-frontend-one.vercel.app/",
    github: "https://github.com/Psanjay-15/Catalogue-Backend",
  },
  {
    title: "Waypoint",
    type: "Grounded AI · Product system",
    year: "2026",
    description:
      "An interstate relocation product combining state comparisons, cost estimates, planning, local discovery, and a grounded AI assistant.",
    impact:
      "Pairs MongoDB-backed state data with deterministic domain logic and context-aware answers, with frontend fallbacks for critical flows.",
    technologies: ["FastAPI", "React", "MongoDB", "OpenAI", "Leaflet"],
    flow: ["State data", "Grounding", "Answer", "Plan"],
    deployed: "https://waypoint-frontend-zeta.vercel.app/",
    github: "https://github.com/Psanjay-15/Waypoint-Backend",
  },
  {
    title: "Support-AI",
    type: "RAG · Knowledge systems",
    year: "2026",
    description:
      "A support agent that ingests websites and PDFs, builds a searchable knowledge base, and answers product questions with relevant context.",
    impact:
      "Combines query rewriting, semantic retrieval, reranking, and contextual synthesis over a local-first Qdrant knowledge store.",
    technologies: ["LangGraph", "Ollama", "Qdrant", "Firecrawl", "PyMuPDF"],
    flow: ["Sources", "Embeddings", "Qdrant", "Answer"],
    github: "https://github.com/Psanjay-15/SupportAi",
  },
  {
    title: "Slack Standup Bot",
    type: "Workflow automation · AI",
    year: "2026",
    description:
      "A Slack bot that messages team members, collects daily updates, and publishes an AI-generated summary to a shared channel.",
    impact:
      "Connects scheduled Slack conversations, persistent PostgreSQL responses, and local Ollama summarization into one repeatable workflow.",
    technologies: ["Python", "FastAPI", "Slack API", "PostgreSQL", "Ollama"],
    flow: ["Prompt", "Replies", "Summary", "Channel"],
    github: "https://github.com/Psanjay-15/Slack_Bot",
  },
];
