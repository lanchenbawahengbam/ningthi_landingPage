import Image from "next/image";

import styles from "../../styles/Landing.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerColumn}>
          <Image
            src="/Group.svg"
            alt="ningthi"
            width="130px"
            height="45.56px"
          />
          <p>We create possibilities for the local market</p>
        </div>
        <div className={styles.footerVisit}>
          <h2>Visit</h2>
          <p>Singjamei Top Leikai, Chingamakha, Imphal, Manipur 795158.</p>
        </div>

        <div className={styles.footerColumn}>
          <ul>
            <h2>Contact</h2>
            <li>
              <a href="/contact">contact@lamzing.com</a>
            </li>
            <li>
              <a href="/phoneNo">+91 9963382225</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <ul>
            <h2>Follow us</h2>
            <li>
              <a href="/twitter">Twitter</a>
            </li>
            <li>
              <a href="/facebook">Facebook</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <ul>
            <h2>Legal</h2>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLamzing}>
        <hr />
        <p>&copy;{new Date().getFullYear()} Lamzing Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
