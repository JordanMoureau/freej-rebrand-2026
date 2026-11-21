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

        <form action="https://formspree.io/f/mjyweyqe" method="POST">
          <div className={styles.halfrow}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              autoComplete="name"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              aria-label="Your phone number"
              autoComplete="tel"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="An Email Address"
            aria-label="Your email address"
            autoComplete="email"
            required
          />

          <textarea
            name="message"
            placeholder="What's this about?"
            aria-label="What's this about?"
            required
          />

          <button type="submit" aria-label="Send your inquiry">
            <span className={styles.marquee} aria-hidden="true">
              <span>
                SEND · SEND · SEND · SEND · SEND · SEND · SEND · SEND · SEND ·
                SEND · SEND · SEND · SEND · SEND · SEND ·
              </span>
            </span>
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
