import type { Metadata } from "next";
import Image from "next/image";

import Navigation from "../components/navigation";
import CloserBar from "../components/closerBar";
import ContactForm from "../components/contactForm";
import ImageSlider from "../components/imageSlider";
import Swiggle from "../components/svgSwiggle";
import JsonLd from "../components/JsonLd";
import BrandSlider from "../freelance-jordan-services/brands/brandsSlider";

import home from "../page.module.css";
import styles from "./portfolio.module.css";

const siteUrl = "https://freelancejordan.com/";
const pageUrl = new URL("/freej-portfolio", siteUrl).href;

const title = "Web Design, Branding & Mobile App Portfolio | Freelance Jordan";
const description =
  "Explore Jordan Moureau’s websites, brand identities, and mobile app concepts, from New Love Coffee’s Shopify store to COPPA’s butcher shop identity and Gather’s ordering app.";

const websites = [
  {
    id: "new-love-coffee",
    name: "New Love Coffee",
    discipline: "Shopify website & photography",
    note: "I put the café counter on the homepage so you get a feel for New Love before you walk in. The same bright blue carries into the Shopify store, where regulars can pick their roast and have a little of the café shipped home.",
    src: "/portfolio-07.png",
    alt: "New Love Coffee’s café homepage and online coffee shop, shown on desktop and mobile.",
    width: 1182,
    height: 985,
  },
  {
    id: "butter-burger-house",
    name: "Butter Burger House",
    discipline: "Restaurant website & menu design",
    note: "A burger called the Franken Butter deserves its own comic panel. I paired close-up food photography with speech bubbles and chunky lettering, then gave each burger an order button right beside its punchline.",
    src: "/portfolio-05.png",
    alt: "Butter Burger House’s illustrated burger menu with peach panels and comic lettering.",
    width: 1502,
    height: 983,
  },
  {
    id: "coppa",
    name: "Coppa",
    discipline: "Butcher shop brand identity",
    note: "I took the cue for COPPA’s identity from the butcher counter itself. A cleaver sits above the shop name in a frame that echoes the handwritten cut labels. Set in white over the deep red of the beef, it reads like a sign in the shop window.",
    src: "/portfolio-06.png",
    alt: "COPPA’s white cleaver emblem and framed wordmark over a butcher counter with handwritten labels.",
    width: 731,
    height: 982,
  },
  {
    id: "angelos-ristorante",
    name: "Angelo’s Ristorante",
    discipline: "Restaurant website & visual direction",
    note: "I wanted Angelo’s website to feel like the first page of its dinner menu. A red script wordmark and tall, narrow lettering sit over a table already set with pasta and wine. Reservations get the first line on the page.",
    src: "/portfolio-10.png",
    alt: "Angelo’s Ristorante homepage with a red script wordmark and red and green lettering over a table of Italian dishes.",
    width: 1027,
    height: 982,
  },
];

const heyday = {
  id: "heyday",
  name: "Heyday",
  discipline: "Brand identity & website",
  note: "The sun tucked into the wordmark sets the palette for the whole surf brand, right down to the warm yellow framing the ocean photography.",
  src: "/portfolio-08.png",
  alt: "Heyday’s sun-topped wordmark beside its surfboard website in butter yellow, coral, and cream.",
  width: 1694,
  height: 994,
};

const apps = [
  {
    id: "gather-coffee",
    name: "Gather Coffee Co.",
    discipline: "Coffee ordering app concept",
    note: "I designed Gather around the regular who already knows their order. The burgundy wordmark curves around a close-up of latte art, and the first button beneath the cup gets the next one started.",
    src: "/mobile-02.png",
    alt: "Gather Coffee Co. app with Order Ahead, Rewards, and Locations beneath a photograph of latte art.",
    width: 956,
    height: 1930,
  },
  {
    id: "evergreen-landscaping",
    name: "Evergreen Landscaping",
    discipline: "Landscaping client app concept",
    note: "The hydrangeas do the introductions. I set four translucent tiles over the blooms so a homeowner can go straight from admiring the work to requesting a quote. Once the project is underway, that same screen gives them a direct line to the crew.",
    src: "/mobile-03.png",
    alt: "Evergreen Landscaping app with four translucent tiles over a photograph of pink hydrangeas.",
    width: 999,
    height: 1966,
  },
  {
    id: "project-hub",
    name: "Project Hub",
    discipline: "Client portal concept",
    note: "“How’s my website coming along?” is the first question this dashboard answers. I gave the project’s progress bar the strongest color on the screen, with files, the progress board, and messages grouped beneath it for clients who want the details.",
    src: "/mobile-05.png",
    alt: "Project Hub’s lavender dashboard with website redesign progress, project files, and a progress board.",
    width: 1008,
    height: 1908,
  },
];

const shareImage = {
  url: new URL(heyday.src, siteUrl).href,
  alt: heyday.alt,
  width: heyday.width,
  height: heyday.height,
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

const featuredProjects = [...websites, heyday, ...apps];
const creator = {
  "@type": "Person",
  "@id": `${siteUrl}about-freelance-jordan#person`,
  name: "Jordan Moureau",
  url: new URL("/about-freelance-jordan", siteUrl).href,
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  inLanguage: "en-US",
  image: shareImage.url,
  creator,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Freelance Jordan",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Featured portfolio projects",
    numberOfItems: featuredProjects.length,
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#${project.id}`,
        url: `${pageUrl}#${project.id}`,
        name: project.name,
        genre: project.discipline,
        description: project.note,
        image: new URL(project.src, siteUrl).href,
        creator: { "@id": creator["@id"] },
      },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={portfolioSchema} />

      <div className={styles.navigation}>
        <Navigation logoSrc="/logo-secondary-red.png" contactColor="#d9c8a0" />
      </div>

      <main id="main-content">
        <header className={styles.hero}>
          <div className={`${styles.inner} ${styles.heroInner}`}>
            <p className={styles.script}>Freelance Jordan</p>
            <h1>Project portfolio.</h1>

            <p className={styles.body}>
              A café storefront that doubles as a coffee shop online. A surf
              brand with a sunrise tucked into its lettering. A mobile app for
              ordering your usual. Explore the websites, brand identities, and
              app concepts behind these projects.
            </p>

            <a className={styles.jump} href="#web-projects">
              Explore the projects
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

        <div className={styles.imageSlider}>
          <ImageSlider />
        </div>

        <section
          id="web-projects"
          className={styles.collectionOne}
          aria-labelledby="web-heading"
        >
          <div className={styles.inner}>
            <h2 id="web-heading" className={styles.sectionTitle}>
              Website design
            </h2>

            <div className={styles.pair}>
              {websites.map((project) => (
                <article
                  id={project.id}
                  key={project.id}
                  className={styles.card}
                >
                  <div className={styles.webArt}>
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={project.width}
                      height={project.height}
                      sizes="(max-width: 760px) 92vw, (max-width: 1400px) 43vw, 590px"
                    />
                  </div>

                  <div className={styles.caption}>
                    <p className={styles.label}>{project.discipline}</p>
                    <h3>{project.name}</h3>
                    <p className={styles.note}>{project.note}</p>
                  </div>
                </article>
              ))}
            </div>

            <article id={heyday.id} className={styles.brandFeature}>
              <div className={styles.brandArt}>
                <Image
                  src={heyday.src}
                  alt={heyday.alt}
                  width={heyday.width}
                  height={heyday.height}
                  sizes="(max-width: 760px) 92vw, (max-width: 1400px) 55vw, 760px"
                />
              </div>

              <div className={styles.caption}>
                <p className={styles.label}>{heyday.discipline}</p>
                <h3>{heyday.name}</h3>
                <p className={styles.note}>{heyday.note}</p>
              </div>
            </article>
          </div>
        </section>

        <div className={styles.sliderEdge}>
          <BrandSlider />
        </div>

        <section
          id="mobile-projects"
          className={styles.collection}
          aria-label="Mobile app projects"
        >
          <div className={styles.inner}>
            <div className={styles.appGrid}>
              {apps.map((project, index) => (
                <article
                  id={project.id}
                  key={project.id}
                  className={styles.appCard}
                >
                  <div className={styles.phoneArt}>
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={project.width}
                      height={project.height}
                      sizes={
                        index === 0
                          ? "(max-width: 640px) 54vw, 260px"
                          : "(max-width: 480px) 48vw, 210px"
                      }
                    />
                  </div>

                  <div className={styles.caption}>
                    <p className={styles.label}>{project.discipline}</p>
                    <h3>{project.name}</h3>
                    <p className={styles.note}>{project.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CloserBar
          heading="Did one of these catch your eye?"
          subheading="Tell me which one. Then tell me about yours."
          blurb="Maybe it was the lettering on Angelo’s, the colors on Heyday, or how easily you could picture ordering from Butter Burger House. Send me the detail you keep coming back to, what your business does, and what you need designed. That gives us a place to start."
          bannerHref="#contact-jordan"
        />

        <div id="contact-jordan" className={home.contactFormHome}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
