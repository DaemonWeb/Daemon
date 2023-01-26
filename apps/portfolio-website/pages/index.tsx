import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { ContentWrapper } from '@/components/ContentView'


export default function Home() {
  return (
    <>
      <Head>
        <title>Daemon Web Tools</title>
        <meta name="description" content="Services, Projects and Portfolio for Daemon Web Tools" />
      </Head>
      <ContentWrapper title="Home">
          <h1>Daemon Web Tools marketing content</h1>
      </ContentWrapper>
    </>
  )
}
