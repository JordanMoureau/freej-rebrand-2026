import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "./trustBar";

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

        <div className={styles.mobileNav}>
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
        </div>
      </nav>
    </>
  );
}
