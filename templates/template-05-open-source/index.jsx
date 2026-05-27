import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Github, Package, Star, Users } from "lucide-react";
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
import { openSourceTemplateData } from "./templateData";
import { openSourceStyles } from "./styles";

const OpenSourceTemplate = ({ data = openSourceTemplateData, className = "" }) => {
  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={openSourceStyles.section}
        >
          <motion.div variants={itemReveal} className="max-w-3xl space-y-4">
            <span className={sectionKicker}>
              <Github size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={openSourceStyles.layout}>
            <motion.div variants={itemReveal} className={`${openSourceStyles.panel} ${cardSurface}`}>
              <div className={openSourceStyles.statGrid}>
                {data.stats.map((stat) => (
                  <div key={stat.label} className={openSourceStyles.statCard}>
                    <div className={openSourceStyles.statValue}>{stat.value}</div>
                    <div className={openSourceStyles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={openSourceStyles.contributionList}>
                {data.contributions.map((item, index) => (
                  <div key={item.title} className={openSourceStyles.contributionCard}>
                    <div className="flex items-center gap-3 text-emerald-300">
                      <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-400/10 text-sm font-semibold">
                        0{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={itemReveal} className={`${openSourceStyles.panel} ${cardSurface}`}>
                <div className="flex items-center gap-3 text-teal-300">
                  <GitBranch size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">repo concepts</span>
                </div>
                <div className={openSourceStyles.repoGrid}>
                  {data.repositories.map((repo) => (
                    <div key={repo.name} className={openSourceStyles.repoCard}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                            {repo.language}
                          </p>
                        </div>
                        <Package className="text-emerald-300" size={18} />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{repo.note}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemReveal} className="rounded-[28px] border border-cyan-400/15 bg-cyan-400/8 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Star size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    ecosystem value
                  </span>
                </div>
                <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                  <p>Strong GitHub branding should show pinned repos, readable docs, and meaningful contribution history.</p>
                  <p>Open-source presence should support trust, collaboration, and technical maturity.</p>
                  <p>Use the repository surface as part of the portfolio, not as a separate afterthought.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceTemplate;
