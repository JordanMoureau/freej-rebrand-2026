import type { Metadata } from "next";
import Image from "next/image";

import Navigation from "../../components/navigation";
import CloserBar from "../../components/closerBar";
import ContactForm from "../../components/contactForm";
import Swiggle from "../../components/svgSwiggle";
import JsonLd from "../../components/JsonLd";
import MobileSlider from "./mobileSlider";

import home from "../../page.module.css";
import styles from "./mobileApps.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freelance-jordan-services/mobile-apps", siteUrl).href;

const shareImage = new URL("/mobile-02.png", siteUrl).href;
const shareImageAlt =
  "Gather Coffee Co. mobile app concept with latte art and buttons for ordering ahead, rewards, and café locations.";

const title = "Mobile App Design in Alpharetta & Atlanta | Freelance Jordan";
const description =
  "Custom mobile app design for Alpharetta and Atlanta businesses. Work with Jordan to turn bookings, repeat orders, or client approvals into a clickable prototype.";

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
        width: 956,
        height: 1930,
        alt: shareImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [{ url: shareImage, alt: shareImageAlt }],
  },
};

const webpageId = `${pageUrl}#webpage`;
const serviceId = `${pageUrl}#service`;

const mobileAppsSchema = {
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
      publisher: { "@id": `${siteUrl}#organization` },
      mainEntity: { "@id": serviceId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      url: pageUrl,
      name: "Custom mobile app design",
      serviceType: [
        "Mobile app interface design",
        "User flow design",
        "Interactive prototyping",
      ],
      description:
        "Custom mobile app design for business tasks such as repeat ordering, booking, membership renewals, and client approvals. The design scope covers the user flow, interface screens, and a clickable prototype.",
      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Freelance Jordan",
        url: siteUrl,
      },
      areaServed: [
        { "@type": "City", name: "Alpharetta, Georgia" },
        { "@type": "City", name: "Atlanta, Georgia" },
      ],
      image: shareImage,
      mainEntityOfPage: { "@id": webpageId },
    },
  ],
};

export default function MobileAppsPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={mobileAppsSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.script}>Mobile app design for businesses</p>
            <h1>Put the next booking in your customer’s hands.</h1>

            <p className={styles.intro}>
              Book the next appointment. Check a project. Order the usual. The
              best place to start an app is with the thing your customer keeps
              coming back to do. I turn that task into a custom interface you
              can pick up, tap through, and test before development.
            </p>

            <a href="#app-designs" className={styles.jump}>
              Explore Custom Apps
              <Swiggle />
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

        <MobileSlider />

        <section
          id="app-designs"
          className={styles.feature}
          aria-labelledby="business-heading"
        >
          <div className={styles.featureInner}>
            <h2 id="business-heading">
              What could you sell between appointments?
            </h2>

            <div className={styles.featureCopy}>
              <p>
                Say you own a Pilates studio. You can fit twelve people in a
                class. But how many would pay to train with you on the days they
                can’t get there?
              </p>

              <p>
                With your own mobile app, you could sell a four-week program
                that clients follow at home. They open it, see today’s workout,
                and pick up where they left off. You create the program once and
                can sell it to the next client even when every class on your
                calendar is full.
              </p>

              <p>
                What do customers already come to your business for? We’ll work
                with you to turn that into an offer, design the experience
                around it, and build the app customers use to buy it.
              </p>

              <div className={styles.buttonRow}>
                <span>Program Sales</span>
                <span>Guided Workouts</span>
                <span>At-Home Training</span>
              </div>
            </div>
          </div>

          <section
            className={styles.featureInner}
            aria-labelledby="repeat-orders"
          >
            <h2 id="repeat-orders">
              How easy is it to place the second order?
            </h2>

            <div className={styles.featureCopy}>
              <p>
                Your best lunch customer orders the same sandwich every
                Thursday. She knows what she wants. The question is whether she
                has time to call, explain the substitutions, and wait on hold
                before her next meeting.
              </p>

              <p>
                We can build an ordering app that remembers her usual, right
                down to the extra pickles. She opens her last order, picks a
                time, and pays. Your kitchen gets a pickup ticket with the
                details already on it. That’s a lunch sale you can take while
                the line is out the door.
              </p>

              <div className={styles.buttonRow}>
                <span>Saved Favorites</span>
                <span>Custom Orders</span>
                <span>Pickup Scheduling</span>
              </div>
            </div>
          </section>

          <section
            className={styles.featureInner}
            aria-labelledby="member-renewals"
          >
            <h2 id="member-renewals">
              Will your members know what they’re renewing?
            </h2>

            <div className={styles.featureCopy}>
              <p>
                Say you run a local garden center with an annual growers’ club.
                Members get seasonal workshops, plant credits, and first pick of
                spring stock. By renewal time, how many remember which benefits
                they used or what’s coming up next?
              </p>

              <p>
                We can give each member a pass on their phone. They can redeem a
                credit at the register, reserve a seat at the pruning workshop,
                and see their early-access date for spring bulbs. When it’s time
                to renew, they know exactly what another year buys them.
              </p>

              <div className={styles.buttonRow}>
                <span>Reward Redemption</span>
                <span>Reservations</span>
                <span>Early Access</span>
              </div>
            </div>
          </section>

          <section
            className={styles.featureInner}
            aria-labelledby="client-approvals"
          >
            <h2 id="client-approvals">
              Is a two-minute decision holding up a two-week job?
            </h2>

            <div className={styles.featureCopy}>
              <p>
                Your cabinet shop is ready to order hardware. The client picked
                brushed brass in the showroom, texted a photo of bronze pulls
                that evening, and told the installer they were still deciding.
                Which finish is your shop supposed to buy?
              </p>

              <p>
                We can build a client app that puts the two options, the price
                difference, and the decision date on one screen. The client
                signs off on a finish. Your shop sees the approved part number
                and can place the order. Six weeks later, everyone can still
                find the same answer.
              </p>

              <div className={styles.buttonRow}>
                <span>Finish Comparisons</span>
                <span>Digital Sign-Off</span>
                <span>Approval History</span>
              </div>
            </div>
          </section>

          <section
            className={styles.featureInner}
            aria-labelledby="service-quotes"
          >
            <h2 id="service-quotes">
              Do you need to make the drive to give the quote?
            </h2>

            <div className={styles.featureCopy}>
              <p>
                A property manager asks your cleaning company for a move-out
                clean. “Two bedrooms” tells you very little about the oven, the
                carpet, or the three flights of stairs. Sending someone across
                town to look costs you money before you’ve won the job.
              </p>

              <p>
                We can build an app your property managers use for every
                turnover. They select the unit, photograph the rooms you need to
                see, and enter the handover date. Your estimator gets the
                details together, can flag anything that needs a visit, and can
                send the quote back for approval while the manager is still on
                site.
              </p>

              <div className={styles.buttonRow}>
                <span>Unit Selection</span>
                <span>Photo Uploads</span>
                <span>Turnover Dates</span>
                <span>Quote Approval</span>
              </div>
            </div>
          </section>
        </section>

        <Image
          className={styles.bannerTwo}
          src="/strapwhite.png"
          alt=""
          width={1200}
          height={400}
          sizes="100vw"
        />

        <CloserBar
          heading="Have an app in mind?"
          subheading="Tell me who would open it tomorrow."
          blurb="What are they trying to do, and how do they do it today? Send me that, along with any sketches or existing screens. I’ll put together a design scope for the first version, from the user flow to the prototype."
          bannerHref="#contact-jordan"
        />

        <div id="contact-jordan" className={home.contactFormHome}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
