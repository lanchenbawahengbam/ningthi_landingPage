import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Landing.module.css";
import Footer from "./Footer";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            Deliveries made possible for sellers
            <p>
              We help small sellers to big retailers in growing their business
              at no extra cost.
            </p>
            <button className={styles.btndelivering}> Start Delivering</button>
          </h1>
        </div>

        <div className={styles.imageEnterpreneur}>
          <Image
            src="/entrepreneur.svg"
            alt="entrepreneur"
            width="610px"
            height="466px"
          />
        </div>

        {/* Seller */}

        <div className={styles.rectangle}></div>

        <div className={styles.sellerCard}>
          <div className={styles.imageDesktop}>
            <Image
              src="/Desktop.svg"
              alt="desktop"
              width="110px"
              height="100px"
            />
            <h2>Easy Task Creation</h2>
            <p>
              Effortlessly create tasks for urgent deliveries or for deliveries
              to be made on a later date.
            </p>
          </div>
          <div className={styles.imageSubscription}>
            <Image
              src="/Subscription.svg"
              alt="Subscription"
              width="110px"
              height="100px"
            />
            <h2>Subscription-Free</h2>
            <p>
              Our service requires no subscriptions to be made. You only pay for
              the delivery to be made.
            </p>
          </div>
          <div className={styles.imageDelivery}>
            <Image
              src="/Delivery.svg"
              alt="Delivery"
              width="110px"
              height="100px"
            />
            <h2>On Time Delivery</h2>
            <p>
              We make sure all packages are delivered on time and reaches the
              right person.
            </p>

            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Image src="/Arrow.svg" alt="arrow" width="19px" height="6px" />
          </div>
        </div>
        {/* <div className={styles.imageTop}>
          <Image src="/Top.svg" alt="top" width="59" height="59" />
        </div> */}

        {/* Delivery Card */}

        <div className={styles.deliveryCard}>
          <div className={styles.imageAgent}>
            <Image
              src="/DeliveryAgent.jpg"
              alt="agent"
              width="658px"
              height="532px"
            />
          </div>
          <div className={styles.deliveryTitle}>
            <h2>
              First-class handling
              <p>
                Our professionals handle your packages with utmost care and
                caution in mind.
              </p>
              <button className={styles.deliveringButton}>
                <a>Start Delivering</a>
              </button>
            </h2>
          </div>
        </div>

        {/* How it works */}

        <div className={styles.deliveryWorking}>
          <div className={styles.imageWorking}>
            <h2>How it works</h2>
            <Image
              src="/Working.svg"
              alt="Working"
              width="980px"
              height="230px"
            />
          </div>
        </div>
        <div className={styles.workingTitle}>
          <div>
            <p>Set your delivery time</p>
          </div>
          <div>
            <p>Add package details</p>
          </div>
          <div>
            <p>Pay & request delivery</p>
          </div>
        </div>

        {/* Get Started in 2 steps */}

        <div className={styles.steps}>
          <div className={styles.stepsTitle}>
            <h2>Get started in 2 steps</h2>
            <p>Tell us about business</p>
            <p>Access your dashboard and start delivering!</p>
          </div>
          <div className={styles.imageTwo}>
            <Image src="/Two.svg" alt="Two" width="239px" height="353px" />
          </div>
        </div>

        {/* Let's Get Your stuffs delivered */}

        <div className={styles.stuffsDelivered}>
          <h2>Let’s get your stuffs delivered!</h2>
          <div className={styles.stuffsButton}>
            <button className={styles.signupButton}>Get me signed up!</button>
          </div>
          <div className={styles.imageNingthi}>
            <Image
              src="/Ningthi.svg"
              alt="Ningthi"
              width="1350px"
              height="359.49px"
            />
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Header;

{
  /* <div className={styles.rectangle1}></div>

      <div className={styles.subtract}></div> */
}
