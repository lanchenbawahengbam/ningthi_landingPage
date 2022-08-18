import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ningthi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Favicon1.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Header />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
