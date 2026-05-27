import React from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Quote, Users } from "lucide-react";
import {
  cardSurface,
  itemReveal,
  pageContainer,
  sectionCopy,
  sectionKicker,
  sectionReveal,
  sectionShell,
  sectionTitle,
  softGrid,
} from "../_shared/brandingSystem";
import { testimonialsTemplateData } from "./templateData";
import { testimonialsStyles } from "./styles";

const TestimonialsTemplate = ({ data = testimonialsTemplateData, className = "" }) => {
  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={testimonialsStyles.section}
        >
          <motion.div variants={itemReveal} className={testimonialsStyles.intro}>
            <span className={sectionKicker}>
              <Quote size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={testimonialsStyles.layout}>
            <motion.div variants={itemReveal} className={`${testimonialsStyles.proofPanel} ${cardSurface}`}>
              <div className="flex items-center gap-3 text-emerald-300">
                <Users size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                  trust indicators
                </span>
              </div>
              <div className={testimonialsStyles.proofGrid + " mt-6"}>
                {data.proof.map((item) => (
                  <div key={item.label} className={testimonialsStyles.proofCard}>
                    <div className={testimonialsStyles.proofValue}>{item.value}</div>
                    <div className={testimonialsStyles.proofLabel}>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className={testimonialsStyles.cardGrid}>
              {data.testimonials.map((testimonial) => (
                <motion.article key={testimonial.name} variants={itemReveal} className={testimonialsStyles.quoteCard}>
                  <MessageSquareQuote className="text-emerald-300" size={18} />
                  <p className={`${testimonialsStyles.quoteText} mt-4`}>
                    {testimonial.quote}
                  </p>
                  <div className={testimonialsStyles.meta}>
                    <div className={testimonialsStyles.name}>{testimonial.name}</div>
                    <div className={testimonialsStyles.role}>{testimonial.role}</div>
                    <div className={testimonialsStyles.detail}>{testimonial.detail}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsTemplate;
