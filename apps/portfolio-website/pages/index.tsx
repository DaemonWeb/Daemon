import Head from 'next/head'
import { ContentWrapper } from '@/components/ContentView'
import HomeHero from '@/components/HomeHero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Daemon Web Tools</title>
        <meta name="description" content="Services, Projects and Portfolio for Daemon Web Tools" />
      </Head>

          <HomeHero />
      
    </>
  )
}
