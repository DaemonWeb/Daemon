import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Daemon Web Tools</title>
        <meta name="description" content="Services, Projects and Portfolio for Daemon Web Tools" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Aye! This is my Home Page!</h1>
      </main>
    </>
  )
}
