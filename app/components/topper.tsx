import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import styles from "./topper.module.css";

export default function Topper() {
  return (
    <div className={styles.topper}>
      <h3>Our sites are pretty & so is our code. Find out how fast we rank.</h3>
      <div className={styles.socials}>
        <a href="www.facebook.com/freelancejordan">
          <FacebookIcon />
        </a>
        <a href="www.instagram.com/freelancejordan">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
