import type { Metadata } from "next";

import ContactForm from "../components/contactForm";
import JsonLd from "../components/JsonLd";
import Navigation from "../components/navigation";
import styles from "./contactfreej.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/contact-freelance-jordan", siteUrl).href;
const shareImage = {
  url: new URL("/freelance-jordan.png", siteUrl).href,
  alt: "Freelance Jordan logo",
};

const title = "Contact Freelance Jordan | Project Inquiries";
const description =
  "Planning a website, brand identity, mobile app, or SEO project in Atlanta or Alpharetta? Tell Jordan Moureau about your business and what you want to build.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Freelance Jordan",
    locale: "en_US",
    url: pageUrl,
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [shareImage],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Freelance Jordan",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Project inquiries",
      url: `${pageUrl}#project-inquiry`,
    },
  },
};

export default function ContactFreelanceJordan() {
  return (
    <div className={styles.container}>
      <JsonLd data={contactSchema} />

      <div className={styles.page}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/grasshall-20mb.mp4" type="video/mp4" />
        </video>

        <div className={styles.inner}>
          <Navigation />

          <main id="project-inquiry" className={styles.form}>
            <ContactForm />
          </main>
        </div>
      </div>

      {/* <ChatBot /> */}
    </div>
  );
}
