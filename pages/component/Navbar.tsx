import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Landing.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/">
            <Image
              src="/Group.svg"
              alt="ningthi"
              width="130px"
              height="45.56px"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/deliveryAgent">
              <a>Delivery Agents</a>
            </Link>
          </li>
          <li>
            <Link href="/login">Seller Login</Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li> */}

          <li>
            <Link href="/signUp">
              <button className={styles.button}>Sign up</button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className={styles.content}>
        <a>Deliveries made possible for sellers</a>
        <p>
          We help small sellers to big retailers in growing their business at no
          extra cost.
        </p>
        <a>Deliveries made possible for sellers</a>
        <p>
          We help small sellers to big retailers in growing their business at no
          extra cost.
        </p>
      </div> */}
    </div>
  );
};

export default Navbar;
