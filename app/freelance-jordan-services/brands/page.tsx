import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../../components/navigation";
import CloserBar from "../../components/closerBar";
import ContactForm from "../../components/contactForm";
import Swiggle from "../../components/svgSwiggle";
import JsonLd from "../../components/JsonLd";
import BrandSlider from "./brandsSlider";

import home from "../../page.module.css";
import styles from "./brands.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freelance-jordan-services/brands", siteUrl).href;
const webpageId = `${pageUrl}#webpage`;
const serviceId = `${pageUrl}#service`;
const organizationId = `${siteUrl}#organization`;

const title =
  "Logo & Brand Identity Design in Atlanta and Alpharetta | Freelance Jordan";
const description =
  "Custom logo and brand identity design for Atlanta and Alpharetta businesses. Get a logo, color palette, typography, and a practical guide for using them.";

const heydayAlt =
  "Heyday’s coral wordmark with a rising sun, shown beside its surf website.";
const shareImage = {
  url: new URL("/portfolio-08.png", siteUrl).href,
  width: 1694,
  height: 994,
  alt: heydayAlt,
};

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
    card: "summary_large_image",
    title,
    description,
    images: [{ url: shareImage.url, alt: shareImage.alt }],
  },
};

const brandsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": webpageId,
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
      mainEntity: { "@id": serviceId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      url: pageUrl,
      name: "Custom logo and brand identity design",
      serviceType: [
        "Logo design",
        "Visual identity design",
        "Brand guidelines",
      ],
      description:
        "Custom logos, color palettes, typography, and brand guidelines for small businesses. Clients receive design files and guidance for applying their identity to signage, websites, print materials, and social posts.",
      provider: {
        "@type": "Organization",
        "@id": organizationId,
        name: "Freelance Jordan",
        url: siteUrl,
      },
      areaServed: [
        { "@type": "City", name: "Atlanta, Georgia" },
        { "@type": "City", name: "Alpharetta, Georgia" },
      ],
      image: shareImage.url,
      mainEntityOfPage: { "@id": webpageId },
    },
  ],
};

export default function BrandsPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={brandsSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={`${styles.inner} ${styles.heroInner}`}>
            <p className={styles.script}>Logo &amp; brand identity design</p>
            <h1>Be the business they recognize the second time.</h1>

            <p className={styles.body}>
              Someone spots your sign on the drive home. A week later, a friend
              sends them your Instagram. Will they realize it’s you? I design
              logos and visual identities for Atlanta and Alpharetta businesses
              so the recognition you earn in one place carries over to the next.
            </p>

            <a className={styles.jump} href="#brand-inquiry">
              Request a branding proposal
              <span aria-hidden="true">
                <Swiggle />
              </span>
            </a>
          </div>
        </header>

        <div className={styles.banner}>
          <Image
            src="/bannerright.png"
            alt=""
            width={1200}
            height={400}
            sizes="100vw"
          />
        </div>

        <BrandSlider />

        <div className={styles.feature}>
          <section className={styles.inner} aria-labelledby="identity-heading">
            <div className={styles.textBlock}>
              <h2 id="identity-heading">
                Help customers remember your business
              </h2>
              <h3>
                A good brand gives people a way to recognize you the next time
                they see you.
              </h3>
              <p>
                Someone walks past your shop on Saturday. A week later, a friend
                shares one of your posts. The name, the colors, the lettering
                all feel familiar. Now that person can put a place to the name,
                and when they’re ready to buy, they know who to look for.
              </p>
              <p>
                I design your logo, colors, and typography to give your business
                a distinct look you can use everywhere. You get the files and a
                practical guide so your sign maker, web designer, and whoever
                handles your social posts can all make your business look like
                you.
              </p>

              <Link href="/freej-portfolio" className={styles.caseStudyLink}>
                Explore the project portfolio ›
                <Swiggle />
              </Link>
            </div>

            <div className={styles.featureImage}>
              <Image
                src="/portfolio-08.png"
                alt={heydayAlt}
                width={1694}
                height={994}
              />
              <Image
                src="/portfolio-09.png"
                alt="Floral website design with pink bouquet photography on desktop and mobile screens."
                width={1075}
                height={986}
              />
            </div>
          </section>

          <section className={styles.webfeature} aria-labelledby="brand-tools">
            <div className={styles.featureImage} aria-hidden="true" />

            <div className={styles.webbody}>
              <h2 id="brand-tools">Does branding matter?</h2>
              <p>
                Long before a customer hires you, they’re trying to decide if
                you’re the right fit. Your branding helps them see what sets you
                apart. A custom cabinetmaker might build every piece by hand,
                but if their website and estimates look like any contractor’s, a
                homeowner may compare quotes on price alone. A brand that
                reflects the care behind the work gives that homeowner a reason
                to look closer and understand what they’re paying for.
              </p>

              <a href="#brand-inquiry" className={styles.ctaLink}>
                Get a branding proposal ›
                <Swiggle />
              </a>
            </div>
          </section>
        </div>

        <div className={styles.bannerTwo}>
          <Image
            src="/strapwhite.png"
            alt=""
            width={2000}
            height={400}
            sizes="100vw"
          />
        </div>

        <section className={styles.approach} aria-labelledby="refresh-heading">
          <div className={styles.storyInner}>
            <div className={styles.storyHeading}>
              <h2 id="refresh-heading">
                Is a brand package right for your business?
              </h2>
              <p className={styles.storyLead}>
                If you have to explain what makes your business worth choosing,
                let’s talk about how your brand could do some of that work.
              </p>
            </div>

            <div className={styles.storyCopy}>
              <p>
                I design brands and build the websites they live on. When we
                talk, I’ll look at what your customers see before they ever
                speak to you. What do they come to you for? Would someone
                landing on your website for the first time know that’s your
                specialty?
              </p>
              <p>
                Bring me what you’re using now, even if it’s just a logo. I’ll
                walk you through what I’d keep, what I’d change, and why. You’ll
                know exactly what I’d include in your brand package and where
                you’d use it before you decide to move forward.
              </p>

              <Link href="/freej-portfolio" className={styles.handwrittenLink}>
                Explore the project portfolio ›
                <Swiggle />
              </Link>
            </div>
          </div>
        </section>

        <CloserBar
          heading="Get a custom branding proposal."
          subheading="Where does your brand need to show up first?"
          blurb="Tell me what you sell, who buys it, and the first place you need the design to work. Send your current logo if you have one. I’ll put together a proposal covering the identity, the files and applications you need, and the price."
          bannerHref="#brand-inquiry"
        />

        <div id="brand-inquiry" className={home.contactFormHome}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
