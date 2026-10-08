import React from "react";

const projects = [
  ["Rascart", "A personalized e-commerce experience with user profiling, product filtering, and recommendations.", ["Recommendations", "Flask", "React"]],
  ["Real-time ride events pipeline", "A streaming pipeline moving ride events from PostgreSQL through Kafka and Spark into analytics-ready Parquet files.", ["Kafka", "Spark", "PostgreSQL"]],
  ["Fraud detection API", "A real-time fraud prediction service built with XGBoost and FastAPI, containerized with Docker and deployed to Cloud Run.", ["XGBoost", "FastAPI", "Cloud Run"]],
];

const skills = ["Python", "FastAPI", "LLM systems", "RAG", "PyTorch", "AWS", "Docker", "Kafka", "Spark", "SQL"];

export default function Portfolio() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Biruk Zenebe — home"><span className="brand-mark">BZ</span><span>Biruk Zenebe</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Machine learning &amp; GenAI engineer</p>
            <h1 id="intro-title">Building AI systems that make it out of the notebook.</h1>
            <p className="lede">I design practical ML products—from data pipelines and APIs to retrieval systems that people can actually use.</p>
            <div className="hero-actions"><a className="button button-primary" href="mailto:birukzenebe111@gmail.com">Let&apos;s work together <span>↗</span></a><a className="text-link" href="#work">See selected work <span>↓</span></a></div>
          </div>
          <div className="portrait-wrap"><div className="portrait-frame"><img src="/profile.jpg" alt="Biruk Zenebe" /></div><p>Based in Warsaw, Poland</p></div>
        </section>
        <section className="section about" id="about" aria-labelledby="about-title">
          <p className="section-label">01 / About</p>
          <div><h2 id="about-title">From an idea to a dependable system.</h2><p>Most of my work lives in the unglamorous but essential part of ML: turning a promising experiment into something reliable. I enjoy the whole arc of the problem—from deciding what is worth predicting to building a model that holds up in the real world.</p><p>I&apos;m currently studying Data Science at the University of Warsaw. My background includes a Computer Science degree from the University of Vizja, where I explored fine-tuning LLaMA 2 for a medical question-answering chatbot.</p></div>
        </section>
        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="section-heading"><p className="section-label">02 / Selected work</p><h2 id="work-title">A few things I&apos;ve built.</h2></div>
          <div className="project-grid">{projects.map(([title, description, tags], index) => <article className="project-card" key={title}><div className="project-number">0{index + 1}</div><h3>{title}</h3><p>{description}</p><ul className="tag-list" aria-label={`${title} technologies`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        </section>
        <section className="section capabilities" aria-labelledby="skills-title"><p className="section-label">03 / Toolbox</p><div><h2 id="skills-title">The tools behind the work.</h2><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>
        <section className="contact" id="contact" aria-labelledby="contact-title"><p className="section-label">04 / Contact</p><h2 id="contact-title">Have a problem worth solving?</h2><a className="contact-email" href="mailto:birukzenebe111@gmail.com">birukzenebe111@gmail.com <span>↗</span></a></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Biruk Zenebe</span><div><a href="https://github.com/BirukZenebe1" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/biruk-zenebe-916529246/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </>
  );
}
