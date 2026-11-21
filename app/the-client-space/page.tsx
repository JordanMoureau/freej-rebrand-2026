import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import Navigation from "../components/navigation";
import ProjectCodeForm from "./ProjectCodeForm";
import styles from "./clientSpace.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/the-client-space", siteUrl).href;
const logoUrl = new URL("/freelance-jordan.png", siteUrl).href;

const title = "Client Space | Freelance Jordan";
const description =
  "Access your Freelance Jordan project with your six-digit project code.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    siteName: "Freelance Jordan",
    locale: "en_US",
    url: pageUrl,
    title,
    description,
    images: [
      {
        url: logoUrl,
        alt: "Freelance Jordan logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [
      {
        url: logoUrl,
        alt: "Freelance Jordan logo",
      },
    ],
  },
};

const clientSpaceSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "The Client Space",
  description,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Freelance Jordan",
    url: siteUrl,
    logo: logoUrl,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Freelance Jordan clients",
  },
};

export default function ClientSpace() {
  return (
    <div className={styles.page}>
      <JsonLd data={clientSpaceSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main className={styles.main}>
        <header className={styles.introduction}>
          <h1>The Client Space</h1>
        </header>

        <section className={styles.panel} aria-labelledby="project-heading">
          <div className={styles.panelHeader}>
            <span>Freelance Jordan / Client access</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect x="4" y="8" width="16" height="12" rx="2" />
              <path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M4 13h16M10 13v3h4v-3" />
            </svg>
          </div>

          <div className={styles.panelBody}>
            <h2 id="project-heading">Let’s open your project.</h2>
            <p className={styles.description}>
              Enter the six-digit code provided for your project.
            </p>
            <ProjectCodeForm />
          </div>
        </section>

        <p className={styles.support}>
          Need your code?{" "}
          <a href="/contact-freelance-jordan">
            Get in touch <span aria-hidden="true">›</span>
          </a>
        </p>
      </main>
    </div>
  );
}
