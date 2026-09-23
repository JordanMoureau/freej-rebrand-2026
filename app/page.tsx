import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/navigation";
import TrustBar from "./components/trustBar";
import ContactForm from "./components/contactForm";
import CrmButton from "./components/crmButton";

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
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
