import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Send, Github, Linkedin, Sparkles, Radar, Bot, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./components/ui/ThemeToggle";

const projects = [
  {
    title: "Credit Card Fraud Detection API",
    description:
      "Real-time fraud prediction API built with XGBoost and FastAPI, containerized with Docker and deployed on Google Cloud Run with CI/CD.",
    link: "https://github.com/BirukZenebe1/ml-model-deployment",
    stack: ["XGBoost", "FastAPI", "Docker", "Cloud Run"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Rascart",
    description:
      "AI-powered ecommerce platform with style profiling, personalized recommendations, filtering, and a full user shopping flow.",
    link: "https://rascart.com",
    stack: ["Flask", "React", "Recommendations", "Product UX"],
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Real-Time Ride Events Pipeline",
    description:
      "Streams ride events from PostgreSQL to Kafka, processes them with Spark Structured Streaming, and writes Parquet outputs for analytics.",
    link: "https://github.com/BirukZenebe1/real_time_pipeline",
    stack: ["PostgreSQL", "Kafka", "Spark", "Parquet"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Wine Quality Prediction",
    description:
      "Wine quality prediction workflow using Random Forest, automated training logic, and cloud-oriented reporting for repeatable ML experiments.",
    link: "https://github.com/BirukZenebe1/Automated-Random-Forest-Pipeline-Lambda-function-",
    stack: ["Random Forest", "AWS", "Automation", "Reporting"],
    image:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2821&auto=format&fit=crop"
  }
];

const experiments = [
  {
    title: "Medical Chatbot UI",
    description:
      "Medical Q&A demo built around a fine-tuned LLaMA 2 model, packaged with Gradio for interactive testing and lightweight auth flows.",
    link: "https://huggingface.co/spaces/brkznb/Medicalchatbot",
    image:
      "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "A3C for Kung Fu Master",
    description:
      "Asynchronous Advantage Actor-Critic training setup for Atari gameplay with parallel environment sampling.",
    link: "https://github.com/BirukZenebe1/A3C",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "DQN for Pac-Man",
    description:
      "Deep Q-Learning agent with CNN state encoder for policy learning from visual observations.",
    link: "https://github.com/BirukZenebe1/Q-learning-PAC-MAN",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "PPO for CarRacing-v3",
    description:
      "Continuous-control PPO implementation using actor-critic networks and stable training loops.",
    link: "https://github.com/BirukZenebe1/PPO",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1974&auto=format&fit=crop"
  }
];

const skillsByCategory = {
  Programming: ["Python", "SQL / PostgreSQL"],
  Data: ["Kafka", "Spark", "Data Visualization"],
  "ML / AI": ["Scikit-learn", "PyTorch", "TensorFlow", "LLM Fine-Tuning", "XGBoost", "GBM", "Random Forest", "RAG", "LangChain"],
  "Cloud / MLOps": ["AWS", "SageMaker", "GCP", "CI/CD", "MLOps"]
};

const workflow = [
  {
    step: "01",
    title: "Scope & KPI Mapping",
    text: "Turn product goals into measurable ML metrics with clear constraints and success criteria."
  },
  {
    step: "02",
    title: "Baseline to Iteration",
    text: "Ship a baseline fast, validate with experiments, then improve with targeted model and data changes."
  },
  {
    step: "03",
    title: "Production Hardening",
    text: "Package pipelines, automate delivery, and monitor drift, latency, and quality in production."
  },
  {
    step: "04",
    title: "Business Feedback Loop",
    text: "Use usage signals and stakeholder feedback to prioritize the next model and UX improvements."
  }
];

const nowBuilding = [
  {
    icon: Bot,
    title: "Production-Ready GenAI Systems",
    text: "Building LLM-powered workflows that move past demos into usable assistants, structured retrieval, and production-minded interfaces."
  },
  {
    icon: Radar,
    title: "Deployment-Ready ML APIs",
    text: "Shipping ML inference services with FastAPI, containers, CI/CD, and cloud deployment as part of the product itself."
  },
  {
    icon: Sparkles,
    title: "RAG and Evaluation Workflows",
    text: "Improving retrieval quality, prompt behavior, and response reliability for practical GenAI applications."
  }
];

const otherKeyNotes = [
  {
    title: "Agentic Engineering",
    text: "I use tools like Codex to accelerate implementation, but I keep ownership of system design, review, debugging, testing, and integration.",
    link: "https://github.com/BirukZenebe1/Portfolio"
  },
  {
    title: "GitHub Profile",
    text: "My public repositories center on applied ML, GenAI experiments, deployment-ready APIs, and real product workflows.",
    link: "https://github.com/BirukZenebe1"
  },
  {
    title: "Production-Oriented Work",
    text: "Examples include Cloud Run deployment, ML APIs, recommendation systems, streaming pipelines, and shipped frontend/backend integrations.",
    link: "https://github.com/BirukZenebe1?tab=repositories"
  }
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="section-eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-slate-900 dark:bg-slate-100" />
      <ThemeToggle />

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-slate-300/30 dark:bg-slate-700/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gray-300/30 dark:bg-gray-700/30 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 space-y-24">
        <section>
          <motion.div
            className="hero-stage mx-auto max-w-5xl space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <div className="text-center">
              <motion.div
                className="hero-chip inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100 pulse-dot" />
                Open to AI / ML Engineering roles
              </motion.div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <motion.div
                className="relative mx-auto"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.12, duration: 0.45 }}
              >
                <div className="hero-portrait-shell">
                  <div className="hero-portrait-ring">
                    <img
                      src="https://i.postimg.cc/k4vK4q8m/IMG-8122.jpg"
                      alt="Biruk Zenebe"
                      className="h-56 w-56 rounded-[2rem] object-cover md:h-72 md:w-72"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  className="text-center text-5xl font-black tracking-tight text-slate-900 md:text-left md:text-6xl xl:text-7xl dark:text-slate-100"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Biruk Zenebe
                </motion.h1>

                <motion.p
                  className="max-w-3xl text-center text-lg leading-relaxed text-slate-700 md:text-left md:text-xl dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  AI/ML engineer building production-ready systems across ML APIs, streaming data pipelines, LLM demos, and AI-enabled products.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center gap-3 md:justify-start"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24 }}
                >
                  {["FastAPI APIs", "RAG + LangChain", "Kafka + Spark", "Cloud ML Deployment"].map((item) => (
                    <span key={item} className="hero-chip rounded-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hero-focus-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {nowBuilding.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="focus-card">
                    <div className="focus-icon">
                      <Icon className="h-4 w-4 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            <div className="section-rule" />
          </motion.div>
        </section>

        <section className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/70 py-4 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/55">
          <div className="marquee-track whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-300 md:text-base">
            <span className="mx-8">ML Engineering</span>
            <span className="mx-8">XGBoost Modeling</span>
            <span className="mx-8">Reinforcement Learning</span>
            <span className="mx-8">MLOps Automation</span>
            <span className="mx-8">Cloud Deployment</span>
            <span className="mx-8">LightGBM</span>
            <span className="mx-8">FastAPI Services</span>
            <span className="mx-8">Kafka + Spark</span>
            <span className="mx-8">ML Engineering</span>
            <span className="mx-8">XGBoost Modeling</span>
            <span className="mx-8">Reinforcement Learning</span>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["5+", "Applied AI / Data Projects"],
            ["2024", "Focused on ML, GenAI"]
          ].map(([value, label], idx) => (
            <motion.div
              key={label}
              className="metric-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <p className="text-4xl font-black text-slate-900 dark:text-slate-100">{value}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{label}</p>
            </motion.div>
          ))}
        </section>

        <section className="section-panel">
          <SectionHeader
            eyebrow="About"
            title="Engineering ML systems that are meant to be used, not just demoed"
            description="I focus on practical AI work that turns models into products, APIs, and user-facing experiences with clear engineering constraints."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              className="rounded-[24px] border border-slate-200/80 bg-white/78 p-8 text-lg leading-8 text-slate-700 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I am an aspiring AI/ML engineer focused on turning machine learning work into usable software systems. My recent projects cover production-style FastAPI inference APIs, Kafka and Spark streaming pipelines, LLaMA 2 chatbot demos, and AI-driven ecommerce experiences. I also use agentic engineering workflows with tools like Codex to move faster on implementation, but I treat them as engineering collaborators rather than autopilot by reviewing outputs carefully, validating behavior, and shipping with deployment and product concerns in mind.
            </motion.div>
            <motion.div
              className="rounded-[24px] border border-slate-200/80 bg-white/78 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">What that looks like</p>
              <div className="mt-5 space-y-4">
                {[
                  "Model deployment with FastAPI, Docker, and cloud runtimes",
                  "Applied recommendation, fraud detection, and chatbot systems",
                  "Streaming and data pipeline work with Kafka and Spark",
                  "Portfolio projects shaped around product usability, not only model scores"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="section-panel">
          <SectionHeader
            eyebrow="Workflow"
            title="How I build AI products"
            description="A practical delivery flow I use to ship ML systems from idea to production."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                className="workflow-card relative p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="workflow-step">STEP {item.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-panel">
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured projects"
            description="Selected projects that best represent my GitHub work across applied ML, data engineering, and production-facing AI systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <Tilt key={project.title} glareEnable scale={1.02} glareMaxOpacity={0.1}>
                <motion.article
                  className="project-card h-full flex flex-col overflow-hidden rounded-[26px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                    <div className="project-image-overlay" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 flex-grow">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View project <ArrowUpRight className="h-4 w-4" />
                  </a>
                  </div>
                </motion.article>
              </Tilt>
            ))}
          </div>
        </section>

        <section className="section-panel">
          <SectionHeader
            eyebrow="Experiments"
            title="Applied experiments and model work"
            description="Smaller builds, RL experiments, and hands-on systems that inform how I approach production work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {experiments.map((experiment, index) => (
              <motion.article
                key={experiment.title}
                className="project-card rounded-[26px] p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img src={experiment.image} alt={experiment.title} className="h-40 w-full rounded-[20px] object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{experiment.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{experiment.description}</p>
                <a
                  href={experiment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Explore repo <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-panel">
          <SectionHeader
            eyebrow="More"
            title="Other key notes"
            description="A few signals that round out how I work and what I’m optimizing for."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherKeyNotes.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card rounded-[26px] p-6 transition hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                <span className="project-link mt-4">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="section-panel">
          <SectionHeader
            eyebrow="Toolkit"
            title="Skills"
            description="Grouped around the core parts of my current AI/ML engineering workflow."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(skillsByCategory).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                className="rounded-[24px] border border-slate-200/80 bg-white/78 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.06 }}
              >
                <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="project-tag text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-panel text-center space-y-5">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something useful"
            description="I’m looking for AI/ML engineering opportunities where product quality, deployment, and practical model work all matter."
          />
          <p className="text-lg text-slate-700 dark:text-slate-300">birukzenebe111@gmail.com</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              <Send className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/biruk-zenebe-916529246/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-chip inline-flex items-center gap-2 rounded-full px-6 py-3"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-chip inline-flex items-center gap-2 rounded-full px-6 py-3"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
