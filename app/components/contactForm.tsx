"use client";
import styles from "./contactForm.module.css";
import DoubleStar from "./doublestar";

export default function ContactForm() {
  return (
    <div className={styles.form}>
      <div className={styles.formhead}>
        <h2>
          Contact Freelance Jordan <DoubleStar /> For...
        </h2>

        <p>
          A website that looks good & works, more information about the services
          I offer, to schedule a call or zoom or in person meet up to talk about
          your goals & how to get there.
        </p>

        <form>
          <div className={styles.halfrow}>
            <input placeholder="Your Name" />
            <input placeholder="Your Phone Number" />
          </div>

          <input placeholder="An Email Address" />

          <textarea placeholder="What's this about?" />

          <button>
            {" "}
            <div className={styles.marquee}>
              <span>
                SEND · SEND · SEND · SEND · SEND · SEND · SEND · SEND · SEND ·
                SEND · SEND · SEND · SEND · SEND · SEND ·
              </span>
            </div>
          </button>
        </form>
      </div>

      <div className={styles.textblurb}>
        <p>
          Freelance Jordan, a digital agency for businesses that want to grow &
          look good doing it. Logos & branding ecosystems, Web design, SEO
          strategy & more.
        </p>
      </div>
    </div>
  );
}
