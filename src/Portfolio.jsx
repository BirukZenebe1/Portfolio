import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
};

function Link({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-stone-900 underline decoration-stone-300 underline-offset-[5px] transition-colors hover:decoration-stone-900 dark:text-stone-100 dark:decoration-stone-600 dark:hover:decoration-stone-100"
    >
      {children}
    </a>
  );
}

function Rule() {
  return <motion.hr variants={fadeUp} className="border-0 border-t border-stone-200 dark:border-stone-800" />;
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-stone-50 text-stone-700 antialiased dark:bg-stone-950 dark:text-stone-300">
      <motion.img
        src="/profile.jpg"
        alt="Biruk Zenebe"
        className="absolute right-6 top-6 h-12 w-12 rounded-full object-cover ring-1 ring-stone-200 md:right-10 md:top-10 md:h-14 md:w-14 dark:ring-stone-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.main
        className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-6 py-24 md:py-32"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.header variants={fadeUp} className="mb-12">
          <h1 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Biruk Zenebe</h1>
          <p className="mt-1 text-sm text-stone-500">AI / ML engineer</p>
        </motion.header>

        <div className="space-y-8 text-[17px] leading-8 md:text-lg md:leading-9">
          <motion.p variants={fadeUp}>
            I build machine learning systems that actually ship. Fraud-detection APIs on Cloud Run, streaming pipelines
            with Kafka and Spark, recommendation engines, and LLM products like{" "}
            <Link href="https://rascart.com">Rascart</Link>. The part of ML that turns a model into software people use.
          </motion.p>

          <Rule />

          <motion.p variants={fadeUp}>
            I studied Computer Science at the University of Vizja in Warsaw, where my thesis was on fine-tuning LLaMA 2
            for a medical chatbot. Before that, I began a degree in Information Technology at Mekelle Institute of
            Technology in Ethiopia.
          </motion.p>

          <Rule />

          <motion.p variants={fadeUp}>
            My purpose is to close the gap between research and product. Fewer demos, more systems that run in
            production, get measured, and make someone's day a little easier.
          </motion.p>
        </div>

        <motion.footer variants={fadeUp} className="mt-16 text-sm text-stone-500">
          <Link href="mailto:birukzenebe111@gmail.com">birukzenebe111@gmail.com</Link>
          <span className="mx-2.5 text-stone-300 dark:text-stone-700">·</span>
          <Link href="https://github.com/BirukZenebe1">GitHub</Link>
          <span className="mx-2.5 text-stone-300 dark:text-stone-700">·</span>
          <Link href="https://www.linkedin.com/in/biruk-zenebe-916529246/">LinkedIn</Link>
        </motion.footer>
      </motion.main>
    </div>
  );
}
