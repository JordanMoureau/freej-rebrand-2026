import styles from "./footer.module.css";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image
          src="/pink-logo.png"
          width={300}
          height={300}
          alt="Freelance Jordan"
        />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerContact}>
          <p>Located in Coeur d'Alene, ID</p>
          <p>Contact me @ jordan@freelancejordan.com</p>
          <p>Or call (206) 715-7980</p>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          <Link href="/resources">Resources</Link>
          <span>|</span>
          <Link href="/portfolio">Portfolio</Link>
          <span>|</span>
          <Link href="/seo-strategy">SEO Strategy</Link>
          <span>|</span>
          <Link href="/case-studies">Case Studies</Link>
          <span>|</span>
          <Link href="/contact">Contact Me</Link>
        </nav>

        <div className={styles.footerSocials}>
          <a
            href="YOUR_INSTAGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href="YOUR_FACEBOOK_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
