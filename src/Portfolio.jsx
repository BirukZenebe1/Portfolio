import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Send, Github, ExternalLink, Linkedin, Sparkles, Radar, Bot } from "lucide-react";
import ThemeToggle from "./components/ui/ThemeToggle";

const projects = [
  {
    title: "Rascart",
    description:
      "End-to-end personalized e-commerce recommendation experience with user profiling, filtering, and product flow.",
    link: "https://rascart.com",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Real-Time Ride Events Pipeline",
    description:
      "Streams ride events from PostgreSQL to Kafka, processes them with Spark Structured Streaming, and writes Parquet outputs for analytics.",
    link: "https://github.com/BirukZenebe1/real_time_pipeline",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Medical Chatbot UI",
    description:
      "LLaMA 2 medical assistant interface built with Gradio and structured prompts for safer clinical-style interactions.",
    link: "https://huggingface.co/spaces/brkznb/Medicalchatbot",
    image:
      "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Automated ML Pipeline",
    description:
      "AWS Lambda and S3-based workflow that trains and evaluates Random Forest models, then sends automated reports.",
    link: "https://github.com/BirukZenebe1/Automated-Random-Forest-Pipeline-Lambda-function-",
    image:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2821&auto=format&fit=crop"
  },
  {
    title: "Credit Card Fraud Detection API",
    description:
      "A machine learning API that predicts fraudulent credit card transactions in real time. Built with XGBoost and FastAPI, containerized with Docker, and deployed on Google Cloud Run.",
    link: "https://github.com/BirukZenebe1/ml-model-deployment",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop"
  }
];

const experiments = [
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
  "ML / AI": ["Scikit-learn", "PyTorch", "TensorFlow", "LLM Fine-Tuning", "XGBoost", "GBM", "Random Forest"],
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
    title: "RAG Evaluation Sandbox",
    text: "Comparing retrieval strategies, chunking styles, and citation reliability."
  },
  {
    icon: Radar,
    title: "Model Drift Signals",
    text: "Designing lightweight telemetry to catch quality degradation early."
  },
  {
    icon: Sparkles,
    title: "Portfolio AI Agent",
    text: "An assistant that can explain projects and link to relevant source code instantly."
  }
];

function SectionTitle({ children }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900 dark:text-slate-100">{children}</h2>;
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
        <section className="text-center space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-4 py-1 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100 pulse-dot" />
            Open to AI / ML / Data Engineering Roles
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Biruk Zenebe
          </motion.h1>

          <motion.div
            className="mx-auto h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg floaty"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <img
              src="https://i.postimg.cc/k4vK4q8m/IMG-8122.jpg"
              alt="Biruk Zenebe"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.p
            className="mx-auto max-w-3xl text-lg md:text-xl text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Machine Learning and GenAI Engineer building production-ready AI/ML systems.
          </motion.p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition"
            >
              <Send className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 py-3">
          <div className="marquee-track whitespace-nowrap text-sm md:text-base font-medium text-slate-600 dark:text-slate-300">
            <span className="mx-8">ML Engineering</span>
            <span className="mx-8">GenAI Product Development</span>
            <span className="mx-8">Reinforcement Learning</span>
            <span className="mx-8">MLOps Automation</span>
            <span className="mx-8">Cloud Deployment</span>
            <span className="mx-8">Prompt + Model Evaluation</span>
            <span className="mx-8">ML Engineering</span>
            <span className="mx-8">GenAI Product Development</span>
            <span className="mx-8">Reinforcement Learning</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["3+", "AI Projects Deployed"],
            ["2", "Degrees in Tech"],
            ["2024", "Focused on GenAI + RL"]
          ].map(([value, label], idx) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <p className="text-3xl font-black text-slate-900 dark:text-slate-100">{value}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{label}</p>
            </motion.div>
          ))}
        </section>

        <section>
          <SectionTitle>About Me</SectionTitle>
          <motion.div
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-8 leading-8 text-slate-700 dark:text-slate-300 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Data science enthusiast and lifelong learner specializing in AI, machine learning, and deep reinforcement learning. I design and deploy ML systems on cloud infrastructure, experiment with modern architectures, and turn technical ideas into usable products.
          </motion.div>
        </section>

        <section>
          <SectionTitle>How I Build AI Products</SectionTitle>
          <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600 dark:text-slate-300">
            A practical delivery flow I use to ship ML systems from idea to production.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">STEP {item.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <Tilt key={project.title} glareEnable scale={1.02} glareMaxOpacity={0.1}>
                <motion.article
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <img src={project.image} alt={project.title} className="h-40 w-full rounded-lg object-cover" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-grow">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium hover:underline"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.article>
              </Tilt>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Experiments</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {experiments.map((experiment, index) => (
              <motion.article
                key={experiment.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img src={experiment.image} alt={experiment.title} className="h-40 w-full rounded-lg object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{experiment.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{experiment.description}</p>
                <a
                  href={experiment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium hover:underline"
                >
                  Explore Repo <ExternalLink className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Now Building</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nowBuilding.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="h-6 w-6" />
                  <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(skillsByCategory).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
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
                      className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-sm text-slate-700 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center space-y-4">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-slate-700 dark:text-slate-300">birukzenebe111@gmail.com</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-slate-100 px-6 py-3 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white transition"
            >
              <Send className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/biruk-zenebe-916529246/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
