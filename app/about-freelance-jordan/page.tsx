import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../components/navigation";
import ContactForm from "../components/contactForm";
import CloserBar from "../components/closerBar";
import Swiggle from "../components/svgSwiggle";
import JsonLd from "../components/JsonLd";
import PersonalSlider from "./personalSlider";

import styles from "./about.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/about-freelance-jordan", siteUrl).href;
const webpageId = `${pageUrl}#webpage`;
const personId = `${pageUrl}#person`;
const organizationId = `${siteUrl}#organization`;

const title = "About Jordan Moureau | Web Designer & SEO Strategist";
const description =
  "Meet Jordan Moureau, the designer and developer behind Freelance Jordan. She builds custom websites, brand identities, and SEO strategies for Atlanta and Alpharetta businesses.";

const portraitPath = "/winterprincess.png";
const portrait = {
  url: new URL(portraitPath, siteUrl).href,
  alt: "Jordan Moureau standing outside in the snow",
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
    type: "profile",
    firstName: "Jordan",
    lastName: "Moureau",
    siteName: "Freelance Jordan",
    locale: "en_US",
    url: pageUrl,
    title,
    description,
    images: [portrait],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [portrait],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
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
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Jordan Moureau",
      url: pageUrl,
      image: portrait.url,
      jobTitle: "Web designer, developer, and SEO strategist",
      knowsAbout: [
        "Custom website design",
        "Web development",
        "Brand identity design",
        "Technical SEO",
        "Local SEO",
      ],
      worksFor: { "@id": organizationId },
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Freelance Jordan",
      url: siteUrl,
      founder: { "@id": personId },
      areaServed: [
        { "@type": "City", name: "Atlanta, Georgia" },
        { "@type": "City", name: "Alpharetta, Georgia" },
      ],
    },
  ],
};

export default function AboutFreelanceJordan() {
  return (
    <main className={styles.page}>
      <JsonLd data={aboutSchema} />

      <section className={styles.hero} aria-labelledby="about-heading">
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/treejordan-20mb.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroContent}>
          <Navigation />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 id="about-heading">
                <span>Hi, I’m Jordan.</span>
                A creative eye.
                <br />A technical mind.
              </h1>

              <p className={styles.heroDescription}>
                I’m a web designer, developer, and SEO strategist helping small
                businesses in Atlanta and Alpharetta build a stronger online
                presence. I design websites, write the code behind them, and
                figure out how to get them found.
              </p>

              <a href="#meet-jordan" className={styles.heroLink}>
                Get to know me{" "}
                <span className={styles.swiggle} aria-hidden="true">
                  <Swiggle />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="meet-jordan"
        className={styles.introduction}
        aria-labelledby="introduction-heading"
      >
        <div className={styles.introInner}>
          <div className={styles.introCopy}>
            <h2 id="introduction-heading">
              Web design &amp; SEO with a business owner’s perspective.
            </h2>

            <h3>
              The creative decisions and the technical details belong together.
            </h3>

            <p>
              I love being a business owner, but most of all I love helping
              other people become more successful business owners. That’s what
              connects the different parts of my work: brand design, custom
              website development, and search engine optimization.
            </p>

            <p>
              A website needs to introduce your business clearly, help people
              find what they need, and make the next step easy. I look at the
              design and the technical structure together, so those decisions
              support the same goal.
            </p>

            <p>
              I bring a background in web design, development, and SEO strategy
              to help small businesses in Atlanta and Alpharetta build a
              stronger online presence. I design websites, write the code behind
              them, and figure out how to get them found.
            </p>
          </div>

          <figure className={styles.portraitWrap}>
            <Image
              src={portraitPath}
              alt={portrait.alt}
              width={600}
              height={800}
              sizes="(max-width: 800px) 85vw, (max-width: 1200px) 38vw, 440px"
              className={styles.portrait}
            />
          </figure>
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

      <section className={styles.approach} aria-labelledby="story-heading">
        <div className={styles.storyInner}>
          <div className={styles.storyHeading}>
            <h2 id="story-heading">Your business is personal. Mine is, too.</h2>
            <p className={styles.storyLead}>
              I really shine when someone puts a high stakes problem in front of
              my face.
            </p>
          </div>

          <div className={styles.storyCopy}>
            <p>
              I want to understand what you’re building, what’s getting in the
              way, and what a good outcome would mean for you. Sometimes that
              starts with a new website. Sometimes it starts with figuring out
              why the one you already have isn’t doing its job.
            </p>

            <p>
              For businesses in Atlanta and Alpharetta, Freelance Jordan brings
              that personal attention to web design, branding, and SEO strategy.
              You can talk to me about the big picture and ask me about the
              little details.
            </p>

            <Link href="/seo-case-studies" className={styles.handwrittenLink}>
              Explore the SEO case studies
              {">"}
              <Swiggle />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.personal}>
        <PersonalSlider />
      </section>

      <CloserBar
        heading="Thinking about Working together?"
        subheading="Working with me is a personal experience."
        blurb="Your goals become my goals. I'm selective about the projects I take on, but each one of them gets careful attention and a hands on approach. Contact me to find out more about what it's like to have Freelance Jordan as your digital toolkit."
      />

      <div id="contact-jordan" className={styles.contactFormAbout}>
        <ContactForm />
      </div>
    </main>
  );
}
