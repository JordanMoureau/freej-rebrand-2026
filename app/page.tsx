import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import Navigation from "./components/navigation";
import TrustBar from "./components/trustBar";
import ContactForm from "./components/contactForm";
import CrmButton from "./components/crmButton";
import ImageSlider from "./components/imageSlider";
import Swiggle from "./components/svgSwiggle";
import DoubleStar from "./components/doublestar.js";
import CloserBar from "./components/closerBar";
import JsonLd from "./components/JsonLd";

const siteUrl = "https://freelancejordan.com/";
const title = "Alpharetta & Atlanta Web Design and SEO | Freelance Jordan";
const description =
  "Custom web design, web development, branding, and technical SEO for small businesses in Alpharetta and Atlanta. Work directly with designer and developer Jordan Moureau.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: siteUrl },
};

const services = [
  {
    name: "Custom web design and development",
    path: "/freelance-jordan-services/websites",
  },
  {
    name: "Technical SEO and local SEO strategy",
    path: "/freelance-jordan-services/seo-strategies",
  },
  {
    name: "Branding and visual identity design",
    path: "/freelance-jordan-services/brands",
  },
];

const organizationId = `${siteUrl}#organization`;
const websiteId = `${siteUrl}#website`;
const jordanId = `${siteUrl}about-freelance-jordan#person`;

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Freelance Jordan",
      url: siteUrl,
      logo: `${siteUrl}freelance-jordan.png`,
      description:
        "Independent digital agency offering web design, web development, branding, and technical SEO to small businesses in Alpharetta and Atlanta, Georgia.",
      founder: { "@id": jordanId },
      areaServed: [
        { "@type": "City", name: "Alpharetta, Georgia" },
        { "@type": "City", name: "Atlanta, Georgia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Design and SEO services",
        itemListElement: services.map(({ name, path }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: new URL(path, siteUrl).href,
            provider: { "@id": organizationId },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": jordanId,
      name: "Jordan Moureau",
      jobTitle: "Web designer and developer",
      url: `${siteUrl}about-freelance-jordan`,
      worksFor: { "@id": organizationId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Freelance Jordan",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": organizationId },
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <JsonLd data={homeSchema} />

        <div className={styles.hero}>
          <video
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero-web-20mb.mp4" type="video/mp4" />
          </video>

          <div className={styles.heroContent}>
            <Navigation />
            <div className={styles.mainLogo}>
              <Image
                src="/freelance-jordan.png"
                alt="Freelance Jordan logo"
                width={600}
                height={300}
                priority
              />
            </div>
            <TrustBar />
          </div>
        </div>

        <div className={styles.homemain}>
          <CrmButton />

          <div className={styles.firstHome}>
            <h1>Web design &amp; SEO for Alpharetta and Atlanta businesses.</h1>
            <h3>Your website has a job. Let’s give it one worth doing.</h3>

            <p>
              Maybe you need more people booking estimates. Maybe your regulars
              keep asking if they can order online. That’s where I start. I’m
              Jordan, and I run an independent digital agency that brings web
              development, branding, and technical SEO into the same project.
              What your customers need to do shapes what I build.
            </p>

            <p>
              <em>Because nobody needs an expensive digital paperweight.</em>
            </p>
          </div>

          <div className={styles.banner}>
            <Image src="/bannerright.png" alt="" width={1200} height={400} />
          </div>

          <ImageSlider />

          <section className={styles.portfolioSection}>
            <div className={styles.workLinks}>
              <Link
                href="/freelance-jordan-services/brands"
                className={styles.workLink}
              >
                <div aria-hidden="true">{"{"}</div>
                Branding &amp; Identity
                <div aria-hidden="true">{"}"}</div>
              </Link>

              <Link href="/freej-portfolio" className={styles.workLink}>
                <div aria-hidden="true">{"{"}</div>
                Explore the Portfolio
                <div aria-hidden="true">{"}"}</div>
              </Link>

              <Link
                href="/freelance-jordan-services/websites"
                className={styles.workLink}
              >
                <div aria-hidden="true">{"{"}</div>
                Custom Website Design
                <div aria-hidden="true">{"}"}</div>
              </Link>
            </div>

            <div className={styles.seoIntro}>
              <div className={styles.seoCopy}>
                <div className={styles.column}>
                  <h2>What does six months of SEO actually look like?</h2>
                  <p>
                    <span className={styles.lead}>
                      For one restoration business, Google Search clicks grew
                      from 111 to 373 over six months.
                    </span>
                    <br />
                    <br />
                    In that same period, search impressions rose from 21,200 to
                    117,000. More people were seeing the business in search, and
                    more of them were clicking through. My SEO case studies put
                    those numbers in context so you can see where each project
                    started and what changed.
                  </p>

                  <Link
                    href="/seo-case-studies"
                    className={styles.caseStudyLink}
                  >
                    <span>See the SEO case studies</span>
                    <span aria-hidden="true">›</span>
                  </Link>
                  <Swiggle />
                </div>

                <Image
                  src="/deskprofile.png"
                  alt="Desk with laptop, coffee, notebook and phone"
                  width={600}
                  height={800}
                  className={styles.deskImage}
                />
              </div>

              <div className={styles.deskVisual}>
                <div className={styles.deskHeadline}>
                  <div className={styles.deskHeader}>
                    From My Desk To Your Bottom Line
                  </div>
                  <div className={styles.donuts}>
                    (donuts not included)
                    <div className={styles.stars} aria-hidden="true">
                      <DoubleStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.longGame}>
              <h2>
                SEO Is the Long Game
                <br />
                &amp; We Like to Play.
              </h2>

              <p>
                After launch, customers start telling us what they need in their
                own words. I look at the searches bringing people to your site,
                which pages they land on, and where the two don’t quite match.
                Sometimes the next move is a page for a service you want more
                of. Sometimes it’s answering the question you’ve already
                answered on the phone three times this week.
              </p>

              <Link
                href="/freelance-jordan-services/seo-strategies"
                className={styles.ctaLink}
              >
                <span>See how I approach SEO</span>
                <span aria-hidden="true">›</span>
                <Swiggle />
              </Link>
            </div>
          </section>

          <div className={styles.bannerContainer}>
            <div className={styles.banner}>
              <Image src="/strapwhite.png" alt="" width={2000} height={400} />
            </div>
          </div>

          <section className={styles.aboutFreej}>
            <div className={styles.freejContainer}>
              <h2>Hi, I’m Jordan</h2>
              <h3>Artist &amp; Techie</h3>

              <p>
                I built my first website at thirteen. I went on to study graphic
                design and taught myself to code, which explains how I ended up
                caring equally about the lettering on a coffee bag and what
                happens when someone taps “order.”
                <br />
                <br />
                When you hire Freelance Jordan, you work directly with me. I’m
                the one sketching the layout, writing the code, and asking which
                part of your business you’d like to do more of.
              </p>

              <Link href="/about-freelance-jordan" className={styles.aboutLink}>
                Find Out More About Me {">"}
                <Swiggle />
              </Link>
            </div>
          </section>

          <CloserBar
            heading="Are you thinking about a project?"
            subheading="Cause I am & It's Yours."
            blurb="Tell me what you do, who you want to reach, and what you wish your website did better. That gives us a good place to start."
          />

          <div className={styles.contactFormHome}>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
