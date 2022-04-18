import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function About() {
    return (
      <div className={styles.container}>
        <Head>
          <title>CEDOC</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <h1>NOSOTROS</h1>
        </Head>
      </div>
    )
  }