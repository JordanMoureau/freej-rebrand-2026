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
import styles from "./projectJournal.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/project-journal", siteUrl).href;
const shareImage = new URL("/freelance-jordan.png", siteUrl).href;

const title = "Project Journal | Web Design & SEO Notes | Freelance Jordan";
const description =
  "Notes from Jordan’s web design and SEO projects. See how local service content, custom websites, and ecommerce SEO changed what customers found on Google.";

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

const posts = [
  {
    id: "local-seo-before-a-redesign",
    category: "Local SEO",
    date: "November 2026",
    caseStudyHref: "/seo-case-studies#local-cleaning-services",
    title: "What can you do for SEO while the new website is being built?",
    paragraphs: [
      "One cleaning company had a redesign in the works and an existing site that earned just 16 organic clicks in the earlier comparison period. That site was still the one customers found on Google, so that’s where I started.",
      "I worked on the service content and local search visibility before the redesign went live. In the three-month comparison, organic clicks rose from 16 to 130. If you’re planning a rebuild, your current service pages are worth a look. They may be able to bring people to your business while the new site takes shape.",
    ],
    image: "/portfolio-06.png",
    width: 731,
    height: 982,
  },
  {
    id: "more-clicks-lower-average-position",
    category: "Ecommerce SEO",
    date: "November 2026",
    caseStudyHref: "/seo-case-studies#fine-jewelry-retail",
    title:
      "Why a jewelry shop’s clicks went up while its average ranking slipped",
    paragraphs: [
      "A fine jewelry retailer wanted to reach shoppers beyond its local market. As the shop started appearing in more than 30 national keyword categories, its average Google position moved from 14.9 to 16.8.",
      "Taken alone, that looks like a setback. But the average now included a wider range of searches. Impressions climbed from 13,100 to 29,900, and the shop earned 210 more organic clicks. For a retailer trying to reach new shoppers, that broader picture matters.",
    ],
    image: "/portfolio-05.png",
    width: 1502,
    height: 983,
  },
  {
    id: "when-to-rebuild-a-website",
    category: "Website strategy",
    date: "November 2026",
    caseStudyHref: "/seo-case-studies#outdoor-playspace-design",
    title: "When is it time to stop tweaking the old website?",
    paragraphs: [
      "For an outdoor playspace designer, the first round of SEO on an existing WordPress site took organic clicks from 21 to 49. More people were clicking through, but the site was still appearing for the same set of keywords.",
      "When growth flattened and the range of searches stayed narrow, I recommended putting the next round of work into a rebuild. That was the decision the numbers helped us make: where the client’s next dollar would be better spent.",
    ],
    image: "/portfolio-08.png",
    width: 1694,
    height: 994,
  },
];

const author = {
  "@type": "Person",
  "@id": `${siteUrl}about-freelance-jordan#person`,
  name: "Jordan Moureau",
  url: new URL("/about-freelance-jordan", siteUrl).href,
};

const publisher = {
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: "Freelance Jordan",
  url: siteUrl,
};

const journalSchema = {
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
      mainEntity: { "@id": `${pageUrl}#journal-entries` },
    },
    {
      "@type": "Blog",
      "@id": `${pageUrl}#journal-entries`,
      name: "Project Journal",
      description,
      author,
      publisher,
      inLanguage: "en-US",
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${pageUrl}#${post.id}`,
        url: `${pageUrl}#${post.id}`,
        headline: post.title,
        articleSection: post.category,
        articleBody: post.paragraphs.join("\n\n"),
        author: { "@id": author["@id"] },
        publisher: { "@id": publisher["@id"] },
        isPartOf: { "@id": `${pageUrl}#journal-entries` },
      })),
    },
  ],
};

export default function ProjectJournal() {
  return (
    <div className={styles.page}>
      <JsonLd data={journalSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>From my desk</p>

            <h1 className={styles.headline}>Project Journal</h1>

            <p className={styles.intro}>
              A closer look at the decisions behind my web design and SEO work.
              Here’s what I found on client sites, what I changed, and what the
              numbers looked like afterward.
            </p>

            <a className={styles.jump} href="#journal-entries">
              Explore the Journal
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
          id="journal-entries"
          className={styles.journal}
          aria-labelledby="journal-heading"
        >
          <div className={styles.inner}>
            <div className={styles.sectionHeading}>
              <h2 id="journal-heading" className={styles.script}>
                Behind the work.
              </h2>

              <p className={styles.note}>
                Every project comes with its own challenges, discoveries, and
                decisions. Sometimes the biggest improvements come from refining
                what&apos;s already there. Other times, the data points toward a
                completely different approach. These are a few examples of how I
                use real search performance, business goals, and practical
                design decisions to guide my work.
              </p>
            </div>
          </div>

          <div className={styles.postList}>
            {posts.map((post, index) => (
              <article
                id={post.id}
                key={post.id}
                className={`${styles.post} ${
                  index % 2 !== 0 ? styles.postReverse : ""
                }`}
                aria-labelledby={`${post.id}-title`}
              >
                <div className={styles.imageSide}>
                  <Image
                    className={styles.image}
                    src={post.image}
                    alt=""
                    width={post.width}
                    height={post.height}
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>

                <div className={styles.copySide}>
                  <div className={styles.copyInner}>
                    <div className={styles.meta}>
                      <span className={styles.category}>{post.category}</span>
                      <span className={styles.date}>{post.date}</span>
                    </div>

                    <h3 id={`${post.id}-title`}>{post.title}</h3>

                    <div className={styles.bodyCopy}>
                      {post.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <Link
                      href={post.caseStudyHref}
                      className={styles.readMore}
                      aria-label={`See the case study results for “${post.title}”`}
                    >
                      See the case study results
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CloserBar
          heading="Let’s talk about your website."
          subheading="What would you like it to do better?"
          blurb="Send me your site and tell me where things feel stuck. Maybe a service you want to book more often barely shows up on Google, or you’re deciding whether your current site is worth another round of work. That’s a good place for us to start."
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
