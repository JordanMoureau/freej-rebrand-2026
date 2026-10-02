"use client";

import { useState } from "react";
import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const links = [
  { label: "brands", href: "/brands" },
  { label: "websites", href: "/websites" },
  { label: "SEO", href: "/seo" },
  { label: "media", href: "/media" },
  { label: "about freej", href: "/about" },
];

const otherlinks = [
  { label: "Resources / ", href: "/resources" },
  { label: "Portfolio / ", href: "/portfolio" },
  { label: "Strategy / ", href: "/strategy" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const MotionLink = motion.create(Link);

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
          <div className={styles.pinklinks}>
            {links.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={styles.navLink}
                whileHover={{ width: "20%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div>{"{"}</div>
                {link.label}
                <div>{"}"}</div>
              </MotionLink>
            ))}
          </div>

          <MotionLink
            href={"/contact-me"}
            className={styles.otherLink}
            whileHover={{ width: "30%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div> {"{"} </div>Contact Me<div> {"}"}</div>
          </MotionLink>
        </div>

        {/* mobile nav */}

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
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.crmbutton}>
            {" "}
            <svg
              id="uuid-e259ebee-c2d8-4363-b47a-f742ec7f971e"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.98 24.94"
            >
              <path
                d="M16.39,6.72h0c-.35,0-.36.41-.53,1.04-.21.79-.39,1.61-.58,2.41-1.72,1.99-4.17,3.38-6.56,4.21-.46.16-1.77.33-2.19.39-.42.06-.69-.16-.6-.5.03-.1.1-.19.2-.24,2.24-1.15,4.89-2.69,5.52-5.32.36-1.48.36-4.24.23-5.77-.09-1.07-.55-1.72-1-2-.25-.15-.74-.4-1.33-.31-.81.12-2.63,1.74-3.21,2.37-2.39,2.59-3.75,5.24-4.88,8.56-.14.33-.51,1.76-.68,2.39-.17.62-.32,1.16-.41,1.53-.13.54-.2,1.04-.28,1.65-.25,2.04-.02,5.22,1.66,6.63.74.62,1.55.78,2.49.41.97-.39,1.54-2.1,1.81-3.05.39-1.38.48-2.86.38-4.3,0-.14-.07-.41-.05-.58.02-.14,1.02-.14,1.52-.2.95-.1,2.79-.66,3.65-1.12.61-.33,2.15-1.14,2.76-1.69.09-.08.19-.18.29-.28-.63,2.53-1.28,5.12-2.04,7.56-.23.73-.49,1.61-1.53,1.33-.71-.2-.62-2.22-.59-2.83.02-.56.26-1.37.19-1.64-.07-.27-.63-.6-1.02-.43-.49.21-1.02,1.53-1.13,2.29-.18,1.26-.13,2.52.47,3.66.26.49,1.36,1.98,1.87,2.06,1.88.3,3.44-2.76,4.05-4.08,1.81-3.9,2.64-8.64,2.92-12.92.09-1.42-1.04-1.2-1.39-1.2ZM3.76,20.78h0c-.25.33-.79.45-1.14.22-.26-.17-.48-1-.54-1.33-.17-.93-.06-3.1.55-3.85.15-.19.72-.58.95-.6.56-.04.81.85.85,1.28.1,1.01.09,3.29-.67,4.28ZM3.56,13.33h0c-.18-.2-.09-.89-.03-1.17.13-.64,1.15-2.48,1.51-3.15.69-1.25,1.61-2.71,2.5-3.81.33-.4,1.13-1.37,1.62-1.48,1.08-.25,1.02,1.2.97,1.9-.24,3.21-2.48,5.27-4.86,7.04-.41.31-1.16,1.28-1.71.66Z"
                fill="#f5f1e6"
                fill-rule="evenodd"
              />
              <path
                d="M17.27,3.66c1.12.51,2.04-.82,2.07-1.85.02-.73-.66-1.94-1.49-1.8h0c-.23.04-.9.71-1.05.92-.57.82-.52,2.28.47,2.73Z"
                fill="#f5f1e6"
                fill-rule="evenodd"
              />
              <path
                d="M19.64,21.79c-.18-.28-.32-.52-.31-.55,0-.02.15-.23.32-.46.24-.33.3-.44.29-.54-.04-.28-.26-.3-.83-.08-.19.07-.35.12-.37.11-.02-.02-.17-.34-.35-.71-.17-.38-.35-.71-.4-.75-.1-.08-.31-.07-.36.02-.06.1-.1.49-.11,1.22,0,.36-.03.69-.05.72s-.34.16-.7.28c-.67.24-.84.34-.82.52.02.18.17.23.81.29.35.03.65.05.68.06.03,0,.05.18.04.56,0,.3.01.66.04.81.04.22.06.26.16.29.06.02.15.02.2,0s.24-.32.43-.65c.19-.33.36-.63.39-.66.05-.06.26.03.7.31.36.22.63.15.59-.15,0-.07-.16-.34-.34-.62Z"
                fill="#f5f1e6"
                fillRule="evenodd"
              />
            </svg>
            <div className={styles.label}>Client Login</div>
          </div>{" "}
        </motion.div>
      </nav>
    </>
  );
}
