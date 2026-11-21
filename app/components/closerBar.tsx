import styles from "./closerBar.module.css";

type CloserBarProps = {
  heading: string;
  subheading: string;
  blurb: string;
  bannerHref?: string;
};

export default function CloserBar({
  heading,
  subheading,
  blurb,
  bannerHref,
}: CloserBarProps) {
  return (
    <>
      <section className={styles.projectBar}>
        <div className={styles.projectContainer}>
          <h2>{heading}</h2>
          <h3>{subheading}</h3>
          <p>{blurb}</p>
        </div>
      </section>

      <div className={styles.notConvincedBar}>
        <h2>
          It's a New Era of Technology & Search Engine Optimization Has Never
          Been More Important
        </h2>
      </div>
    </>
  );
}
