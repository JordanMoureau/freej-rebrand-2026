import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../../components/navigation";
import CloserBar from "../../components/closerBar";
import ContactForm from "../../components/contactForm";
import Swiggle from "../../components/svgSwiggle";
import JsonLd from "../../components/JsonLd";
import WebsitesSlider from "./websitesSlider";

import home from "../../page.module.css";
import styles from "./websites.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freelance-jordan-services/websites", siteUrl).href;
const shareImage = new URL("/Angelosdesign.png", siteUrl).href;
const shareImageAlt =
  "Custom restaurant website design for Angelo’s Ristorante.";

const title =
  "Atlanta & Alpharetta Web Design and Development | Freelance Jordan";
const description =
  "Custom websites for Atlanta and Alpharetta businesses. Work directly with Jordan on design, development, and SEO. Request a proposal for your website.";

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
    images: [{ url: shareImage, alt: shareImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: shareImage, alt: shareImageAlt }],
  },
};

const organizationId = `${siteUrl}#organization`;
const serviceId = `${pageUrl}#service`;

const websitesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
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
      mainEntity: { "@id": serviceId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      url: pageUrl,
      name: "Custom website design and development",
      serviceType: ["Website design", "Custom development", "Website redesign"],
      description:
        "Custom website design and development for small businesses in Atlanta and Alpharetta. Projects bring design, copy, technical SEO, and inquiry tracking into the same build.",
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
      image: shareImage,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    },
  ],
};

export default function WebsitesPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={websitesSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={`${styles.inner} ${styles.heroInner}`}>
            <p className={styles.script}>
              Custom website design &amp; development
            </p>
            <h1>Sell as well online as you do in person.</h1>

            <p className={styles.body}>
              You know which questions customers ask before they buy and what
              usually wins the job. I turn those conversations into custom
              websites for small businesses in Atlanta and Alpharetta. You work
              directly with me on the design, the copy, and the path from a
              Google search to a booking, order, or quote request.
            </p>

            <a className={styles.jump} href="#website-inquiry">
              Request a website proposal
              <span aria-hidden="true">
                <Swiggle />
              </span>
            </a>
          </div>
        </header>

        <Image
          className={styles.banner}
          src="/bannerright.png"
          alt=""
          width={1200}
          height={400}
          sizes="100vw"
        />

        <WebsitesSlider />

        <div className={styles.feature}>
          <div className={styles.inner}>
            <div className={styles.textBlock}>
              <h2>Our Custom Sites are Different</h2>

              <h3 className={styles.lead}>
                We help customers find you, see why you’re worth hiring, and
                take the next step while they’re ready to buy.
              </h3>

              <p>
                We start with the work you want more of. If kitchen renovations
                are your best jobs, we build a page around what local homeowners
                search for, show the details that set your work apart, and give
                them a way to send their plans, budget, and timeline. When that
                inquiry lands in your inbox, you can start talking about the
                project.
                <br />
                <br />
                We also build in tracking so you can see which searches bring
                people to your site and which pages lead to inquiries. For one
                home-services business, a custom site we built moved from an
                average Google search position of 26.4 to 9.5 in about three and
                a half months.
              </p>

              <Link
                href="/seo-case-studies#home-services"
                className={styles.caseStudyLink}
              >
                See the SEO case studies{">"}
                <Swiggle />
              </Link>
            </div>

            <div className={styles.featureImage}>
              <Image
                src="/Angelosdesign.png"
                alt={shareImageAlt}
                width={600}
                height={800}
                sizes="(max-width: 800px) 85vw, (max-width: 1200px) 38vw, 440px"
                className={styles.portrait}
              />
            </div>
          </div>

          <div className={styles.webfeature}>
            <div className={styles.featureImage}>
              <Image
                src="/natureplaymain.png"
                alt="N is for Nature Play website for an outdoor playspace designer."
                width={600}
                height={800}
                sizes="(max-width: 800px) 85vw, (max-width: 1200px) 38vw, 440px"
              />
            </div>

            <div className={styles.webbody}>
              <h2>
                Tell Us What You Want to Sell.
                <br />
                We’ll Build the Site Around It.
              </h2>

              <p>
                Which part of your business would you grow if you could? That’s
                where we start. We bring design, development, and technical SEO
                into the same build, so the page a customer finds on Google is
                the page that answers their questions, shows what makes your
                work worth the price, and lets them book, buy, or request a
                quote. You work directly with the person designing and building
                it, from the first conversation through launch.
              </p>

              <a href="#website-inquiry" className={styles.ctaLink}>
                Get a Custom Website Proposal {">"}
                <Swiggle />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bannerTwo}>
          <Image
            className={styles.strap}
            src="/strapwhite.png"
            alt="Freelance Jordan services, including custom websites and branding."
            width={2000}
            height={400}
            sizes="100vw"
          />
        </div>

        <section className={styles.approach} aria-labelledby="story-heading">
          <div className={styles.storyInner}>
            <div className={styles.storyHeading}>
              <h2 id="story-heading">
                A website’s whole job is to bring in revenue.
              </h2>
              <p className={styles.storyLead}>
                If it’s not doing that reliably, the work isn’t done yet.
              </p>
            </div>

            <div className={styles.storyCopy}>
              <p>
                For a shop, that might mean a sale at checkout. For a
                contractor, it might mean an estimate request that turns into a
                signed job. Before I design a page, I want to know how a visit
                becomes revenue for your business. That answer shapes what we
                build.
              </p>

              <p>
                Once the site is live, we can see where people drop off. If a
                service page gets clicks but the phone stays quiet, I look at
                what customers searched for, what the page tells them, and how
                easy it is to call. Then we can make a specific change and see
                whether it brings in more of the work you want.
              </p>

              <Link href="/freej-portfolio" className={styles.handwrittenLink}>
                Explore project portfolio {">"}
                <Swiggle />
              </Link>
            </div>
          </div>
        </section>

        <CloserBar
          heading="Get a custom website proposal."
          subheading="Tell me what it needs to do for your business."
          blurb="What do you want to sell more of, and how do customers buy it today? Send me that and your current URL if you have one. I’ll lay out the pages, features, and price for the build, with any ongoing SEO or advertising quoted separately."
          bannerHref="#website-inquiry"
        />

        <div id="website-inquiry" className={home.contactFormHome}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
