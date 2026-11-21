import type { Metadata } from "next";
import Image from "next/image";

import Navigation from "../components/navigation";
import TrustBar from "../components/trustBar";
import ContactForm from "../components/contactForm";
import CloserBar from "../components/closerBar";
import Swiggle from "../components/svgSwiggle";
import JsonLd from "../components/JsonLd";

import home from "../page.module.css";
import styles from "./caseStudies.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/seo-case-studies", siteUrl).href;
const shareImage = new URL("/freelance-jordan.png", siteUrl).href;

const title = "SEO Case Studies & Organic Search Results | Freelance Jordan";
const description =
  "See how a cleaning company grew from 16 to 130 organic clicks in three months. Compare clicks, impressions, and rankings across five SEO case studies.";

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

const studies = [
  {
    id: "local-cleaning-services",
    category: "Local cleaning services",
    title: "The cleaning company appeared in 37,000 Google search results.",
    story:
      "I worked on the cleaning company’s service content and local SEO while its new site was still in development. The existing site went from 16 organic clicks to 130 in the three-month comparison.",
    period: "Three-month comparison",
    before: ["16", "2.79K", "43.8"],
    after: ["130", "37K", "26.5"],
  },
  {
    id: "emergency-restoration",
    category: "Emergency restoration",
    title: "Emergency restoration searches brought in 138 organic clicks.",
    story:
      "Within about three months of the rebuild, several emergency service terms ranked at or near the top of Google. By month four, the client reported roughly four times its investment across SEO, Google Ads, and Local Services Ads combined.",
    period: "Compared with the prior period",
    before: ["29", "5.26K", "26.8"],
    after: ["138", "44K", "17"],
  },
  {
    id: "home-services",
    category: "Home services",
    title: "A new site reached an average Google position of 9.5.",
    story:
      "I built this site from the ground up. In about three and a half months, its average position moved up from 26.4 to 9.5. Organic clicks doubled in the three-month traffic comparison.",
    period: "Three-month traffic comparison",
    before: ["14", "295", "26.4"],
    after: ["28", "1.34K", "9.5"],
  },
  {
    id: "fine-jewelry-retail",
    category: "Fine jewelry retail",
    title: "A local retailer started showing up in national jewelry searches.",
    story:
      "The shop gained visibility across more than 30 national keyword categories. Its average position slipped as the range of searches widened, but those results brought the shop 210 additional organic clicks.",
    period: "Three-month comparison",
    before: ["359", "13.1K", "14.9"],
    after: ["569", "29.9K", "16.8"],
  },
  {
    id: "outdoor-playspace-design",
    category: "Outdoor playspace design",
    title: "Clicks more than doubled. Then the numbers pointed to a rebuild.",
    story:
      "The existing WordPress site picked up more clicks for the searches it already appeared in. When growth leveled off and the site still wasn’t reaching new keyword categories, I recommended putting the next round of work into a new build.",
    period: "Initial three-month comparison",
    before: ["21", "1.23K", "11.8"],
    after: ["49", "5.2K", "10.2"],
  },
];

const metricNames = [
  "Organic clicks",
  "Search impressions",
  "Average position",
];

const caseStudiesSchema = {
  "@context": "https://schema.org",
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
  author: {
    "@type": "Person",
    "@id": `${siteUrl}about-freelance-jordan#person`,
    name: "Jordan Moureau",
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    "@id": `${pageUrl}#results`,
    name: "The results, project by project",
    numberOfItems: studies.length,
    itemListElement: studies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#${study.id}`,
        url: `${pageUrl}#${study.id}`,
        name: study.title,
        description: study.story,
        genre: "SEO case study",
        about: study.category,
        isPartOf: { "@id": `${pageUrl}#webpage` },
      },
    })),
  },
};

export default function SeoCaseStudies() {
  return (
    <div className={styles.page}>
      <JsonLd data={caseStudiesSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>SEO case studies</p>
            <h1 className={styles.headline}>
              From 5k to 44k.
              <br />
              On the same website.
            </h1>

            <p className={styles.intro}>
              Across projects, our clients have earned between 58% and 713% more
              clicks from Google’s organic search results. For a business owner,
              that means more chances to reach someone at the moment they’re
              looking for what you sell, whether they need a local service they
              can book today or a product they can order from across the
              country.
            </p>

            <a className={styles.jump} href="#results">
              Explore Case Studies
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
          id="results"
          className={styles.results}
          aria-labelledby="results-title"
        >
          <div className={styles.inner}>
            <h2 id="results-title">The results, project by project</h2>
            <p className={styles.note}>
              Impressions show how often the site appeared in Google searches.
              Organic clicks show how often someone followed one of those
              results to the site. Average position tells you where the site
              ranked, with 1 at the top. Look at impressions and clicks together
              to see whether greater visibility also brought more people to the
              website.
            </p>

            {studies.map((study) => (
              <article id={study.id} key={study.id} className={styles.study}>
                <div className={styles.story}>
                  <p className={styles.category}>{study.category}</p>
                  <h3>{study.title}</h3>
                  <p>{study.story}</p>
                </div>

                <table
                  className={styles.table}
                  aria-label={`${study.category} search performance`}
                >
                  <caption>{study.period}</caption>
                  <thead>
                    <tr>
                      <th scope="col">Search metric</th>
                      <th scope="col">Before</th>
                      <th scope="col">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metricNames.map((label, i) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        <td>{study.before[i]}</td>
                        <td>{study.after[i]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          heading="What it all means"
          subheading="Which searches should be bringing customers to you?"
          blurb="Send me your website and the service or product you want to sell more of. I’ll put together an SEO proposal showing where you rank today, which searches I’d target first, and what I’d change on your site."
          bannerHref="#contact-jordan"
        />

        <div
          id="contact-jordan"
          className={[home.contactFormHome, styles.contactArea]
            .filter(Boolean)
            .join(" ")}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
