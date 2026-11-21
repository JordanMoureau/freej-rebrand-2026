import styles from "./footer.module.css";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

import Image from "next/image";

const footerLinks = [
  {
    label: "SEO Strategy / ",
    href: "/freelance-jordan-services/seo-strategies",
  },

  { label: "Case Studies / ", href: "/seo-case-studies" },
  { label: "Project Journal / ", href: "/project-journal" },
  { label: "Portfolio / ", href: "/freej-portfolio" },
  { label: "Client Space", href: "/the-client-space" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image
          src="/dark-logo.png"
          width={300}
          height={300}
          alt="Freelance Jordan"
        />
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerContact}>
          <p>
            Located in{" "}
            <em>
              <Link href={"/"} className="underline">
                Alpharetta, Georgia,
              </Link>
            </em>{" "}
            Freelance Jordan is a<br></br>
            boutique digital agency specializing in visibility strategies
            <br></br> for small businesses
          </p>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
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
