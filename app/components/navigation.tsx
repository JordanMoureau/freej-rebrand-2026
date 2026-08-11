"use client";

import { useState } from "react";
import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "./trustBar";

import { motion } from "motion/react";

const links = [
  { label: "brands", href: "/brands" },
  { label: "websites", href: "/websites" },
  { label: "SEO", href: "/seo" },
  { label: "media", href: "/media" },
  { label: "about freej", href: "/about" },
];

const otherlinks = [
  { label: "Resources", href: "/resources" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Strategy", href: "/strategy" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logoSide}>
          <Link href="/" aria-label="Freelance Jordan home">
            <Image
              src="/logo-secondary.png"
              alt="Freelance Jordan secondary logo"
              width={200}
              height={90}
              priority
              className={styles.logo}
            />
          </Link>

          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            className={`${styles.hamburger} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>

        <div className={styles.linkSide}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {"{"} {link.label} {"}"}
            </Link>
          ))}

          <Link href={"/contact-me"} className={styles.otherLink}>
            {"{"} Contact Me {"}"}{" "}
          </Link>
        </div>

        <motion.div
          className={`${styles.mobileNav} ${open ? styles.openNav : ""}`}
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: {
              x: "20%",
              opacity: 1,
              scale: 0.98,
              pointerEvents: "none",
            },
            open: {
              x: 0,
              opacity: 1,
              scale: 1,
              pointerEvents: "auto",
            },
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 11,
            mass: 0.9,
          }}
        >
          <div className={styles.mainLinks}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLinkMain}
              >
                <div className={styles.bracket}> {"{ "}</div> {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.secondaryLinks}>
            {otherlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLinkSecondary}
              >
                {link.label} {" / "}
              </Link>
            ))}
          </div>
          <TrustBar />
        </motion.div>
      </nav>
    </>
  );
}
