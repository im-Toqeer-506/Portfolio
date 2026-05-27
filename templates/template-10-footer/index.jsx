import React from "react";
import { motion } from "framer-motion";
import { Heart, Terminal } from "lucide-react";
import {
  itemReveal,
  pageContainer,
  sectionReveal,
  sectionShell,
  softGrid,
} from "../_shared/brandingSystem";
import { footerTemplateData } from "./templateData";
import { footerStyles } from "./styles";

const FooterTemplate = ({ data = footerTemplateData, className = "" }) => {
  return (
    <footer className={`${sectionShell} ${className}`}>
      <div className={softGrid} />
      <div className={pageContainer}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={footerStyles.section}
        >
          <motion.div variants={itemReveal} className={footerStyles.panel}>
            <div className={footerStyles.layout}>
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950">
                    <Terminal size={18} />
                  </div>
                  <div className={footerStyles.brand}>{data.brand}</div>
                </div>
                <p className={footerStyles.signature}>{data.signature}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Navigate
                </p>
                <div className={`${footerStyles.navRow} mt-4`}>
                  {data.nav.map((item) => (
                    <a key={item} href={`#${item}`} className={footerStyles.navChip}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Social
                </p>
                <div className={`${footerStyles.socialRow} mt-4`}>
                  {data.socials.map((item) => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className={footerStyles.socialChip}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={footerStyles.copyright}>
              <span className="inline-flex items-center gap-2">
                Made with <Heart size={12} className="text-red-400" fill="currentColor" />
                by Toqeer
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterTemplate;
