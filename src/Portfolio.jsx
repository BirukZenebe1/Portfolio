import React from "react";

export default function Portfolio() {
  return (
    <main>
      <header>
        <h1>Biruk Zenebe</h1>
        <img src="/profile.jpg" alt="Biruk Zenebe" width="48" height="48" />
      </header>

      <p>
        I&apos;m a machine learning and GenAI engineer based in Warsaw. I build the unglamorous but essential part of ML:
        getting an idea out of a notebook and into a system that runs. My work spans data pipelines, APIs, retrieval,
        evaluation, and fine-tuning.
      </p>

      <hr />

      <p>
        I&apos;ve built a fraud-detection API with XGBoost and FastAPI on Cloud Run, a Kafka and Spark pipeline for
        streaming ride events, and the recommendation system behind Rascart, an e-commerce app built with Flask and
        React. Lately, I&apos;m focused on practical LLM systems: retrieval, evaluation, and developer-facing AI tools.
      </p>

      <section>
        <h2>Selected work</h2>
        <ul>
          <li><strong>Real-Time Ride Events Pipeline</strong> — PostgreSQL, Kafka, Spark Structured Streaming, and Parquet analytics outputs.</li>
          <li><strong>Fraud Detection API</strong> — real-time XGBoost predictions with FastAPI, Docker, and Google Cloud Run.</li>
        </ul>
      </section>

      <section>
        <h2>Tools I use</h2>
        <p>Python, FastAPI, SQL, Kafka, Spark, PyTorch, AWS, Docker, RAG, LangChain, and React.</p>
      </section>

      <hr />

      <p>
        I&apos;m studying Data Science at the University of Warsaw. I previously studied Computer Science at the University
        of Vizja, where my thesis explored fine-tuning LLaMA 2 for a medical question-answering chatbot. I care about
        the whole arc of a machine learning problem: what is worth predicting, what the data can tell us, and how to
        turn a model into a decision people can trust.
      </p>

      <footer>
        Reach me at <a href="mailto:birukzenebe111@gmail.com">birukzenebe111@gmail.com</a>, or find me on{" "}
        <a href="https://github.com/BirukZenebe1">GitHub</a> and{" "}
        <a href="https://www.linkedin.com/in/biruk-zenebe-916529246/">LinkedIn</a>.
      </footer>
    </main>
  );
}
