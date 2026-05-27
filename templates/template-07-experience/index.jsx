import React from "react";
import { motion } from "framer-motion";
import { Award, CalendarDays, BriefcaseBusiness } from "lucide-react";
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
import { experienceTemplateData } from "./templateData";
import { experienceStyles } from "./styles";

const ExperienceTemplate = ({ data = experienceTemplateData, className = "" }) => {
  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={experienceStyles.section}
        >
          <motion.div variants={itemReveal} className={experienceStyles.intro}>
            <span className={sectionKicker}>
              <CalendarDays size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={experienceStyles.layout}>
            <motion.div variants={itemReveal} className={`${experienceStyles.panel} ${cardSurface}`}>
              <div className={experienceStyles.statGrid}>
                {data.stats.map((stat) => (
                  <div key={stat.label} className={experienceStyles.statCard}>
                    <div className={experienceStyles.statValue}>{stat.value}</div>
                    <div className={experienceStyles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-emerald-400/15 bg-emerald-400/8 p-5">
                <div className="flex items-center gap-3 text-emerald-300">
                  <BriefcaseBusiness size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    growth narrative
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Present the timeline as a progression from technical foundation to product thinking and future-facing engineering.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemReveal} className={experienceStyles.timeline}>
              {data.timeline.map((item, index) => (
                <article key={item.period} className={`${experienceStyles.timelineCard} ${cardSurface}`}>
                  <div className={experienceStyles.timelineDot}>{index + 1}</div>
                  <div className={experienceStyles.period}>{item.period}</div>
                  <h3 className={experienceStyles.title}>{item.title}</h3>
                  <p className={experienceStyles.summary}>{item.summary}</p>
                  <div className={experienceStyles.impactRow}>
                    {item.impact.map((impact) => (
                      <span key={impact} className={experienceStyles.impactTag}>
                        {impact}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTemplate;
