export const featuredProjects = [
  {
    title: "Voice Assistant",
    type: "Agentic AI · Real-time",
    description:
      "A low-latency voice agent for real-estate lead qualification that listens, reasons, verifies users, books meetings, and follows up automatically.",
    impact:
      "Streams LLM output into smaller TTS chunks to keep conversations responsive instead of waiting for a complete answer.",
    technologies: ["FastAPI", "LangGraph", "WebSockets", "STT / TTS", "Google Calendar"],
    deployed: "https://voice-agent-frontend-tau.vercel.app/",
    accent: "lime",
  },
  {
    title: "AI Catalog Generator",
    type: "Generative AI · Full stack",
    description:
      "Turns raw product copy and uploaded documents into editable, single-page catalogs with structured content and print-ready exports.",
    impact:
      "Provider-agnostic LLM orchestration supports OpenAI, Gemini, Anthropic, and Ollama through typed structured outputs.",
    technologies: ["Python", "FastAPI", "React", "MongoDB", "Playwright"],
    deployed: "https://catalogue-frontend-one.vercel.app/",
    accent: "blue",
  },
  {
    title: "Support-AI",
    type: "RAG · Knowledge systems",
    description:
      "An end-to-end support agent that ingests websites and PDFs, builds a searchable knowledge base, and answers product questions with relevant context.",
    impact:
      "Combines query rewriting, semantic retrieval, reranking, and contextual synthesis over a local-first Qdrant knowledge store.",
    technologies: ["LangGraph", "Ollama", "Qdrant", "Firecrawl", "PyMuPDF"],
    github: "https://github.com/Psanjay-15/SupportAi",
    accent: "orange",
  },
];

export const additionalProjects = [
  {
    title: "CodePad",
    description:
      "A collaborative interview code editor with real-time sessions and Judge0 execution across 30+ programming languages.",
    image: "/codepad.png",
    github: "https://github.com/Hire-Rank/Code-Pad-Client",
    deployed: "https://code-pad-client.vercel.app/",
    technologies: ["MERN", "TypeScript", "Judge0"],
  },
  {
    title: "JobTrail",
    description:
      "A focused job application tracker for organizing roles, companies, stages, and every detail of an active search.",
    image: "/jobtrail.png",
    github: "https://github.com/Psanjay-15/JobTrail",
    deployed: "https://job-trail-omega.vercel.app/",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "TripEzz",
    description:
      "A responsive tour discovery experience with destination search, country filters, and simple trip planning flows.",
    image: "/tripezz.png",
    github: "https://github.com/Psanjay-15/ToursPlanner",
    deployed: "",
    technologies: ["React", "Node.js", "Responsive UI"],
  },
];
