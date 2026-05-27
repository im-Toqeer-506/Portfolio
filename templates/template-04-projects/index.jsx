import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Layers3 } from "lucide-react";
import {
  cardSurface,
  itemReveal,
  pageContainer,
  primaryButton,
  sectionCopy,
  sectionKicker,
  sectionReveal,
  sectionShell,
  sectionTitle,
  secondaryButton,
  softGrid,
} from "../_shared/brandingSystem";
import { projectsTemplateData } from "./templateData";
import { projectsStyles } from "./styles";

const ProjectsTemplate = ({ data = projectsTemplateData, className = "" }) => {
  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={projectsStyles.section}
        >
          <motion.div variants={itemReveal} className={projectsStyles.intro}>
            <span className={sectionKicker}>
              <Layers3 size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={projectsStyles.shell}>
            <motion.article variants={itemReveal} className={projectsStyles.featuredCard}>
              <div className="space-y-6">
                <div className={projectsStyles.featuredPreview}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_40%)]" />
                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/80">
                          Featured project
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {data.featuredProject.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                        priority case study
                      </span>
                    </div>

                    <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                      {data.featuredProject.summary}
                    </p>

                    <div className={projectsStyles.previewGrid}>
                      {data.featuredProject.metrics.map((metric) => (
                        <div key={metric.label} className={projectsStyles.previewMetric}>
                          <div className={projectsStyles.previewValue}>{metric.value}</div>
                          <div className={projectsStyles.previewLabel}>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {data.featuredProject.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-[22px] border border-emerald-400/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className={projectsStyles.actionRow}>
                  {data.featuredProject.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className={action.label === "Live demo" ? primaryButton : secondaryButton}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {action.label}
                      <ArrowRight size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className={projectsStyles.sideStack}>
              <motion.div variants={itemReveal} className={`${projectsStyles.smallCard} ${cardSurface}`}>
                <div className="flex items-center gap-3 text-emerald-300">
                  <Github size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    supporting builds
                  </span>
                </div>
                <div className={projectsStyles.projectList}>
                  {data.projects.map((project) => (
                    <div key={project.name} className={projectsStyles.projectCard}>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {project.role}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{project.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>

                      <div className={projectsStyles.tagRow}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={projectsStyles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                        target={project.link.startsWith("http") ? "_blank" : undefined}
                        rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                      >
                        View detail
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemReveal} className="rounded-[28px] border border-teal-400/15 bg-teal-400/8 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-teal-300">
                  <Layers3 size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">
                    success signals
                  </span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {data.results.map((result) => (
                    <div key={result.label} className="rounded-[22px] border border-teal-400/15 bg-slate-950/35 p-4 text-center">
                      <div className="text-2xl font-semibold text-white">{result.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{result.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsTemplate;
