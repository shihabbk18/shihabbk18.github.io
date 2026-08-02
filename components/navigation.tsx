"use client";

import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { identity, navigationItems } from "@/data/portfolio";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -65%", threshold: [0.08, 0.25, 0.5] },
    );

    navigationItems.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled || menuOpen ? "site-nav--filled" : ""}`}>
      <div className="site-nav__inner shell">
        <a className="monogram" href="#top" aria-label="Shihab Bin Kader — home" onClick={closeMenu}>
          <span>SBK</span>
        </a>

        <nav
          id="primary-navigation"
          className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.section}
              href={item.href}
              onClick={closeMenu}
              aria-current={activeSection === item.section ? "location" : undefined}
            >
              <span>{item.label}</span>
            </a>
          ))}
          <a
            className="site-nav__github"
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Shihab Bin Kader’s GitHub profile"
            onClick={closeMenu}
          >
            <Github aria-hidden="true" size={18} strokeWidth={1.7} />
            <span className="mobile-only">GitHub</span>
          </a>
        </nav>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
