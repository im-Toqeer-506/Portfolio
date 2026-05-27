import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowRight } from "lucide-react";
import {
  chipBase,
  inputField,
  itemReveal,
  pageContainer,
  primaryButton,
  secondaryButton,
  sectionCopy,
  sectionKicker,
  sectionReveal,
  sectionShell,
  sectionTitle,
  softGrid,
} from "../_shared/brandingSystem";
import { contactTemplateData } from "./templateData";
import { contactStyles } from "./styles";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const ContactTemplate = ({ data = contactTemplateData, className = "" }) => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setFormState((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <section id={data.id} className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={contactStyles.section}
        >
          <motion.div variants={itemReveal} className="max-w-3xl space-y-4">
            <span className={sectionKicker}>
              <Mail size={14} />
              {data.kicker}
            </span>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              {data.eyebrow}
            </p>
            <h2 className={sectionTitle}>{data.title}</h2>
            <p className={sectionCopy}>{data.description}</p>
          </motion.div>

          <div className={contactStyles.layout}>
            <motion.div variants={itemReveal} className={`${contactStyles.panel} rounded-[32px] border border-emerald-400/15 bg-slate-900/45 p-6 backdrop-blur-xl sm:p-8`}>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Collaboration channels
              </p>
              <div className={contactStyles.channelList}>
                {data.channels.map((channel) => {
                  const Icon = iconMap[channel.label] || Mail;
                  return (
                    <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined} className={contactStyles.channelCard}>
                      <div className="flex items-center gap-3 text-emerald-300">
                        <Icon size={18} />
                        <span className={contactStyles.channelLabel}>{channel.label}</span>
                      </div>
                      <div className={contactStyles.channelValue}>{channel.value}</div>
                    </a>
                  );
                })}
              </div>

              <div className={contactStyles.socialRow}>
                <a href="https://github.com/im-Toqeer-506" className={contactStyles.socialButton} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/m-toqeer-zia-202845297/" className={contactStyles.socialButton} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <span className={chipBase}>{data.cta}</span>
              </div>
            </motion.div>

            <motion.div variants={itemReveal} className="rounded-[32px] border border-emerald-400/15 bg-slate-900/45 p-6 backdrop-blur-xl sm:p-8">
              <div className="rounded-[24px] border border-emerald-400/15 bg-emerald-400/8 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                  Start a conversation
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Use this form language for collaboration, freelance work, interviews, or product opportunities.
                </p>
              </div>

              <form className={contactStyles.formGrid}>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Your name</span>
                  <input name="name" value={formState.name} onChange={handleChange} placeholder="Enter your name" className={inputField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Email address</span>
                  <input name="email" value={formState.email} onChange={handleChange} placeholder="Enter your email" className={inputField} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-200">Message</span>
                  <textarea name="message" value={formState.message} onChange={handleChange} rows={5} placeholder="Tell me about the project, timeline, or role." className={inputField} />
                </label>

                <div className={contactStyles.formActions}>
                  <button type="submit" className={primaryButton}>
                    Send message
                    <Send size={18} />
                  </button>
                  <a href="mailto:muhammadtoqeerzia18@gmail.com" className={secondaryButton}>
                    Prefer email instead?
                    <ArrowRight size={18} />
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTemplate;
