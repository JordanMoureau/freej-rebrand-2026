import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/navigation";
import TrustBar from "./components/trustBar";
import ContactForm from "./components/contactForm";

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
          >
            <source src="/hero.mp4" type="video/mp4" />
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

        <div className={styles.firstHome}>
          <h2>
            We build a technical & visual strategy for small businesses in an
            online space.
          </h2>
          <h3>
            A foundation that your business can stand on for the long run.
          </h3>
          <p>
            Freelance Jordan brings custom web design, technical SEO
            engineering, brand development, and media creation together under
            one roof so you can focus on running your business while we
            architect the online structure that gets you found.
          </p>
        </div>

        <ContactForm />
      </main>
    </div>
  );
}
