import React from "react";

export default function Portfolio() {
  return (
    <main>
      <header>
        <h1>Biruk Zenebe</h1>
        <img src="/profile.jpg" alt="" width="48" height="48" />
      </header>

      <p>
        I'm a machine learning engineer, and most of my work is the unglamorous part of ML: getting a model out of a
        notebook and into something that runs. I've built a fraud-detection API with XGBoost and FastAPI on Cloud Run,
        a Kafka and Spark pipeline for streaming ride events, and the recommendation system behind{" "}
        <a href="https://rascart.com">Rascart</a>, an ecommerce app I wrote with Flask and React. Lately most of my
        time goes to LLM systems: retrieval, evaluation, and fine-tuning.
      </p>

      <hr />

      <p>
        I studied Computer Science at the University of Vizja in Warsaw, where my thesis was on fine-tuning LLaMA 2
        for a medical question-answering chatbot. Before that I started in Information Technology at Mekelle Institute
        of Technology in Ethiopia.
      </p>

      <hr />

      <p>
        The reason I do this is simple. Most machine learning never reaches a user. I want to be the person who
        carries it the last mile, into an API, a pipeline, a product, and then sticks around to find out whether it
        worked.
      </p>

      <footer>
        You can reach me at <a href="mailto:birukzenebe111@gmail.com">birukzenebe111@gmail.com</a>, or find me on{" "}
        <a href="https://github.com/BirukZenebe1">GitHub</a> and{" "}
        <a href="https://www.linkedin.com/in/biruk-zenebe-916529246/">LinkedIn</a>.
      </footer>
    </main>
  );
}
