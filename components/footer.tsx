import { ArrowUp } from "lucide-react";
import { identity } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div>
          <a className="monogram" href="#top" aria-label="Back to the top"><span>SBK</span></a>
          <p><strong>{identity.name}</strong><br />{identity.title}</p>
        </div>
        <p>Designed and built with curiosity, research, and careful iteration.</p>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} {identity.name}</span>
        <a href={identity.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#top">Back to top <ArrowUp aria-hidden="true" size={14} /></a>
      </div>
    </footer>
  );
}
