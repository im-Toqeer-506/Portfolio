import React from "react";
import { motion } from "framer-motion";
import { Bot, Brain, Cpu, Workflow } from "lucide-react";
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
import { aiFocusTemplateData } from "./templateData";
import { aiFocusStyles } from "./styles";

const aiIcons = [Brain, Bot, Cpu];

const AIFocusTemplate = ({ data = aiFocusTemplateData, className = "" }) => {
  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={aiFocusStyles.section}
        >
          <motion.div variants={itemReveal} className="max-w-3xl space-y-4">
            <span className={sectionKicker}>
              <Brain size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={aiFocusStyles.layout}>
            <motion.div variants={itemReveal} className={`${aiFocusStyles.panel} ${cardSurface}`}>
              <div className={aiFocusStyles.pillarGrid}>
                {data.pillars.map((pillar, index) => {
                  const Icon = aiIcons[index] || Brain;
                  return (
                    <div key={pillar.title} className={aiFocusStyles.pillarCard}>
                      <div className="flex items-center gap-3 text-emerald-300">
                        <div className="rounded-2xl bg-emerald-400/10 p-3">
                          <Icon size={18} />
                        </div>
                        <h3 className={aiFocusStyles.pillarTitle}>{pillar.title}</h3>
                      </div>
                      <p className={aiFocusStyles.pillarText}>{pillar.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className={aiFocusStyles.stackGrid}>
                {data.stack.map((item) => (
                  <span key={item} className={aiFocusStyles.stackTag}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemReveal} className="rounded-[32px] border border-cyan-400/15 bg-cyan-400/8 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 text-cyan-300">
                <Workflow size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                  agentic flow
                </span>
              </div>

              <div className={aiFocusStyles.workflowRail}>
                {data.workflow.map((step, index) => (
                  <div key={step} className={aiFocusStyles.workflowStep}>
                    <div className={aiFocusStyles.stepDot}>{index + 1}</div>
                    <div className={aiFocusStyles.stepText}>{step}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-emerald-400/15 bg-slate-950/35 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  brand direction
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Move from stack-based identity to a leverage-based identity that signals AI readiness, tooling fluency, and product acceleration.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFocusTemplate;
