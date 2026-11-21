import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../components/navigation";
import TrustBar from "../components/trustBar";
import CloserBar from "../components/closerBar";
import ContactForm from "../components/contactForm";
import Swiggle from "../components/svgSwiggle";
import JsonLd from "../components/JsonLd";

import home from "../page.module.css";
import styles from "./services.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freelance-jordan-services", siteUrl).href;
const shareImage = new URL("/freelance-jordan.png", siteUrl).href;

const title = "Web Design, Branding & SEO Services | Freelance Jordan";
const description =
  "Explore custom website design, brand identity, and SEO services for small businesses in Alpharetta, Atlanta, and beyond. Work directly with Jordan from strategy through launch.";

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
    images: [
      {
        url: shareImage,
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
        url: shareImage,
        alt: "Freelance Jordan logo",
      },
    ],
  },
};

const services = [
  {
    name: "Custom websites",
    headline: "Give people a good reason to get in touch.",
    description:
      "Someone lands on your site with a question. Do you offer what they need? Do you work in their area? Can they see an example? I design and build custom websites around those decisions, so the path from a first visit to an inquiry feels natural.",
    detail: "Website design · Custom development · Website redesign",
    href: "/freelance-jordan-services/websites",
    linkText: "Explore website design",
  },
  {
    name: "Brand identity",
    headline: "Make the business you’ve built recognizable.",
    description:
      "Your work has a point of view. Your logo, website, and printed materials should feel like they came from the same business. I bring the typography, colors, and visual details together into an identity you can use everywhere your customers see you.",
    detail: "Logo design · Typography & color · Brand direction",
    href: "/freelance-jordan-services/brands",
    linkText: "Explore branding",
  },
  {
    name: "Search engine optimization",
    headline: "Show up for the work you want more of.",
    description:
      "Tell me which service you’d like to book more often or which products you want customers to discover. I look at how people search for them, where your site appears today, and which pages need better content or technical work. Then I track the searches and clicks those changes bring in.",
    detail: "Local SEO · Technical SEO · Search content",
    href: "/freelance-jordan-services/seo-strategies",
    linkText: "Explore SEO strategy",
  },
];

const organizationId = `${siteUrl}#organization`;
const catalogId = `${pageUrl}#services`;

const serviceAreas = [
  { "@type": "City", name: "Alpharetta, Georgia" },
  { "@type": "City", name: "Atlanta, Georgia" },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
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
      publisher: { "@id": organizationId },
      mainEntity: { "@id": catalogId },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Freelance Jordan",
      url: siteUrl,
      logo: shareImage,
      areaServed: serviceAreas,
      hasOfferCatalog: { "@id": catalogId },
    },
    {
      "@type": "OfferCatalog",
      "@id": catalogId,
      name: "Web Design, Branding & SEO Services",
      numberOfItems: services.length,
      itemListElement: services.map((service) => {
        const url = new URL(service.href, siteUrl).href;

        return {
          "@type": "Offer",
          url,
          seller: { "@id": organizationId },
          itemOffered: {
            "@type": "Service",
            "@id": `${url}#service`,
            url,
            name: service.name,
            serviceType: service.detail.split(" · "),
            description: service.description,
            provider: { "@id": organizationId },
            areaServed: serviceAreas,
          },
        };
      }),
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={servicesSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>Freelance Jordan Services</p>

            <h1 className={styles.headline}>
              Web design, branding &amp; SEO
              <br className={styles.desktopBreak} /> for small businesses.
            </h1>

            <p className={styles.intro}>
              Maybe you’ve outgrown the website you built when you opened. Maybe
              you love your site, but the only people finding it already know
              your name. I work directly with business owners in Alpharetta,
              Atlanta, and beyond to figure out what needs attention and build
              from there.
            </p>

            <a className={styles.jump} href="#services">
              Explore Services
              <Swiggle />
            </a>
          </div>

          <div className={styles.foot}>
            <div className={styles.trust}>
              <TrustBar />
            </div>
          </div>
        </header>

        <section
          id="services"
          className={styles.services}
          aria-labelledby="services-heading"
        >
          <div className={styles.inner}>
            <h2 id="services-heading">What I can do for your business</h2>

            <p className={styles.note}>
              Your website, brand identity, and search visibility all influence
              how customers discover and experience your business. Whether you
              need a custom website, a cohesive visual identity, or an SEO
              strategy that brings in more qualified traffic, I approach each
              project with the same goal: making it easier for the right people
              to find you, understand what you offer, and take the next step.
            </p>

            {services.map((service) => (
              <article key={service.href} className={styles.service}>
                <div className={styles.story}>
                  <p className={styles.category}>{service.name}</p>
                  <h3>{service.headline}</h3>
                </div>

                <div className={styles.copy}>
                  <p className={styles.detail}>{service.detail}</p>
                  <p>{service.description}</p>

                  <Link className={styles.serviceLink} href={service.href}>
                    {service.linkText}
                    <Swiggle />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.banner} aria-hidden="true">
          <Image
            src="/bannerright.png"
            alt=""
            width={1200}
            height={400}
            sizes="100vw"
          />
        </div>

        <CloserBar
          heading="Where should we start?"
          subheading="Tell me what you want your next customer to do."
          blurb="Book a consultation? Request a quote? Find your shop for the first time? Send me your website, if you have one, and tell me what you want to happen next. I’ll use that to recommend where your budget will do the most good."
          bannerHref="#contact-jordan"
        />

        <div
          id="contact-jordan"
          className={`${home.contactFormHome} ${styles.contactArea}`}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
