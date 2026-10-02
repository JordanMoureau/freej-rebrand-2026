import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/navigation";
import TrustBar from "./components/trustBar";
import ContactForm from "./components/contactForm";
import CrmButton from "./components/crmButton";
import ImageSlider from "./components/imageSlider";
import Swiggle from "./components/svgSwiggle";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
          {" "}
          <CrmButton />
          <div className={styles.firstHome}>
            <h2>
              We build a technical & visual strategy for small businesses in an
              online space.
            </h2>
            <h3>
              A foundation that your business can go big (or bigger) with.
            </h3>
            <p>
              Freelance Jordan brings custom web design, technical SEO
              engineering, brand development, and media creation together under
              one roof so you can focus on running your business while we
              architect the online structure that gets you found.
            </p>
          </div>
          <div className={styles.banner}>
            <Image src="/bannerright.png" alt="" width={1200} height={400} />
          </div>
          <ImageSlider />
          <section className={styles.portfolioSection}>
            <div className={styles.workLinks}>
              <Link href="/branding" className={styles.workLink}>
                <div>{"{"}</div>
                See Our Branding Work
                <div> {"}"}</div>
              </Link>

              <Link href="/media" className={styles.workLink}>
                <div>{"{"}</div>
                Photography & Videography
                <div> {"}"}</div>
              </Link>

              <Link href="/websites" className={styles.workLink}>
                <div>{"{"}</div>
                Custom Site Designs
                <div> {"}"}</div>
              </Link>
            </div>
            <div className={styles.seoIntro}>
              <h2>
                Not Convinced We Can Do It All? Check Out Our Case Studies on
                SEO Rankings.
              </h2>
              <div className={styles.seoCopy}>
                <div className={styles.column}>
                  <p>
                    <span className={styles.lead}>
                      Engineering & design aren't usually skills that play
                      nicely together, but here we take a creative mindset
                      toward SEO engineering websites.
                    </span>{" "}
                    <br /> <br />
                    It's helped us develop systems and processes that rank
                    websites fast and show results that blow other SEO agencies
                    out of the water. Take a look at some of the case studies we
                    have on projects we've done over the years. From 200%
                    increases in visibility in one 30 day period. To 500%
                    increases in keyword visibility month-over-month. To
                    immediate visible increase in storefront foot traffic
                    directly after website launch. To top rankings in less than
                    four months.
                  </p>

                  <a href="/seo" className={styles.caseStudyLink}>
                    <span>See SEO Case Studies</span>
                    <span aria-hidden="true">›</span>
                  </a>
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
                <div className={styles.deskCaption}>
                  <div>From My Desk To Your Bottom Line</div>
                  <div className={styles.donuts}>(donuts not included)</div>
                </div>

                <div className={styles.stars} aria-hidden="true"></div>
              </div>
            </div>

            <div className={styles.longGame}>
              <h2>
                SEO Is the Long Game
                <br />& We Like to Play.
              </h2>

              <p>
                It's helped us develop systems and processes that rank websites
                fast and show results that blow other SEO agencies out of the
                water. Take a look at some of the case studies we have on
                projects we've done over the years. From 200% increases in
                visibility in one 30 day period. To 500% increases in keyword
                visibility month-over-month. To immediate visible increase in
                storefront foot traffic directly after website launch. To top
                rankings in less than four months.
              </p>

              <a href="/contact-me" className={styles.ctaLink}>
                <span>Get In the Game. Find Out More.</span>
                <span aria-hidden="true">›</span>
              </a>
            </div>
            <div className={styles.banner}>
              <Image src="/strapwhite.png" alt="" width={1200} height={400} />
            </div>
          </section>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
