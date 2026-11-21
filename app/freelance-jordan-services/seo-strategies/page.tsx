import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../../components/navigation";
import TrustBar from "../../components/trustBar";
import ContactForm from "../../components/contactForm";
import CloserBar from "../../components/closerBar";
import Swiggle from "../../components/svgSwiggle";
import ImageSlider from "../../components/imageSlider";
import JsonLd from "../../components/JsonLd";

import home from "../../page.module.css";
import styles from "./seoStrategies.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freelance-jordan-services/seo-strategies", siteUrl)
  .href;
const shareImage = new URL("/freelance-jordan.png", siteUrl).href;

const title = "Local SEO Services in Alpharetta & Atlanta | Freelance Jordan";
const description =
  "Work directly with Jordan on local SEO, technical fixes, and service-page content for your Alpharetta or Atlanta business. Get a proposal built around what you want to sell.";

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
    images: [{ url: shareImage, alt: "Freelance Jordan logo" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [{ url: shareImage, alt: "Freelance Jordan logo" }],
  },
};

const serviceId = `${pageUrl}#service`;
const webpageId = `${pageUrl}#webpage`;
const organizationId = `${siteUrl}#organization`;

const seoStrategiesSchema = {
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
      name: "SEO strategy and local SEO services",
      serviceType: [
        "Local SEO",
        "Technical SEO",
        "Search content strategy",
        "SEO reporting",
      ],
      description:
        "SEO strategy for small businesses, including keyword research, technical site reviews, service-page content, Google Business Profile reviews, and search performance reporting.",
      provider: {
        "@type": "Organization",
        "@id": organizationId,
        name: "Freelance Jordan",
        url: siteUrl,
      },
      areaServed: [
        { "@type": "City", name: "Alpharetta, Georgia" },
        { "@type": "City", name: "Atlanta, Georgia" },
      ],
      mainEntityOfPage: { "@id": webpageId },
    },
  ],
};

const strategy = [
  {
    title: "Choose the searches worth showing up for.",
    copy: "We start with what you want to sell, who buys it, and where you can deliver it. A cleaning company that wants recurring clients has a different priority from one trying to fill move-out appointments. I look at the words customers use, the pages Google already shows them, and where your site fits.",
    deliverable:
      "A focused set of search terms matched to the pages that should answer them.",
  },
  {
    title: "Find out what’s holding your site back.",
    copy: "Sometimes the right page exists, but it’s buried three menus deep. Sometimes two pages compete for the same search. Sometimes Google can’t index the page at all. I review how your site is built and decide which fixes are worth making first.",
    deliverable:
      "A prioritized technical review covering indexing, site structure, internal links, and page performance.",
  },
  {
    title: "Build the page your customer hoped to find.",
    copy: "Someone searching for weekly house cleaning wants to know what’s included, whether you come to their neighborhood, and how to get on the schedule. I write and structure service pages around those questions. For local businesses, I also review the Google Business Profile alongside the website so customers get consistent information in both places.",
    deliverable:
      "New or revised service pages, clearer booking and inquiry paths, and local search updates where they apply.",
  },
  {
    title: "Use the results to choose the next move.",
    copy: "I use Search Console to see which searches showed your pages and which earned clicks. Where inquiry or purchase tracking is in place, I look at what happened after the visit, too. A page that rarely appears needs different work from one that gets steady traffic but few inquiries.",
    deliverable:
      "A report explaining what changed, what we learned, and where I’d put the next round of work.",
  },
];

export default function SeoStrategiesPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={seoStrategiesSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>SEO strategy</p>

            <h1 className={styles.headline}>
              What do you want your next customer to find you for?
            </h1>

            <p className={styles.intro}>
              If your most profitable service is the hardest one to find on
              Google, that’s where I want to start. I help small businesses
              figure out which searches matter, build pages that answer them,
              and measure whether those pages bring people through the door.
            </p>

            <a className={styles.jump} href="#strategy">
              Explore SEO Services
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
          id="strategy"
          className={styles.process}
          aria-labelledby="strategy-heading"
        >
          <div className={styles.inner}>
            <h2 id="strategy-heading">What the work looks like:</h2>

            <p className={styles.note}>
              Every business starts in a different place. Some websites need
              better content and stronger local visibility, while others have
              technical issues that prevent their pages from ranking
              effectively. My approach focuses on identifying the work that will
              make the biggest difference first, then using actual search
              performance data to guide what happens next. Here&apos;s how that
              process works.
            </p>

            <div className={styles.steps}>
              {strategy.map((step, index) => (
                <article className={styles.step} key={step.title}>
                  <div className={styles.stepContent}>
                    <p className={styles.category}>
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>

                  <div className={styles.deliverable}>
                    <p className={styles.category}>What you get</p>
                    <p>{step.deliverable}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ImageSlider />

        <section className={styles.rebuild} aria-labelledby="rebuild-heading">
          <div className={styles.innerWebsites}>
            <h2 id="rebuild-heading">Do you need a new website first?</h2>

            <h3>
              An outdated or badly built website might be what&apos;s holding
              you back from high rankings.
            </h3>

            <div className={styles.rebuildContent}>
              <p>
                Sometimes, the website you already have is perfectly capable of
                growing with the right SEO strategy. Other times, the site
                itself becomes the obstacle.
              </p>

              <p>
                Before you commit to either, I’ll look at what your current site
                lets us change and explain where I think your budget will go
                furthest.
              </p>

              <div className={styles.relatedLinks}>
                <Link href="/freelance-jordan-services/websites">
                  More About Websites
                  <Swiggle />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.banner} aria-hidden="true">
          <Image
            src="/strapwhite.png"
            alt=""
            width={1200}
            height={400}
            sizes="100vw"
          />
        </div>

        <CloserBar
          heading="Let’s look at your search results."
          subheading="Which service would you like to book more often?"
          blurb="Send me your website, the service or product you want more customers to find, and the area you serve. I’ll put together an SEO proposal showing where you appear today, which searches I’d prioritize, and what I’d work on first."
          bannerHref="#seo-inquiry"
        />

        <div
          id="seo-inquiry"
          className={`${home.contactFormHome} ${styles.contactArea}`}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
