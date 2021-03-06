import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Navbar from '../../components/navbar/Navbar.js';
import Banner from '../../components/banner/Banner.js';
import Footer from '../../components/footer/Footer.js';


export default function wifiAccess() {
    return (
      <div className={styles.container}>
        <Head>
          <title>CEDOC| Acceso a Wifi </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/cedoc.ico" />
          <link href="http://fonts.cdnfonts.com/css/butler" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar>
        </Navbar>
        <Banner>
        </Banner>
        <Footer>
        </Footer>
      </div>
    )
  }