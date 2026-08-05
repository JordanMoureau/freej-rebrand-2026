import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/navigation";
import TrustBar from "./components/trustBar";

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
      </main>
    </div>
  );
}
