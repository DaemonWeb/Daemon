import Head from 'next/head'
import HomeHero from '@/components/Home/HomeHero'
import FeatureSection from '@/components/Home/FeatureSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Daemon Tech Tools</title>
        <meta name="description" content="Services, Projects and Portfolio for Daemon Tech Tools" />
      </Head>
      <HomeHero />
      <FeatureSection />
    </>
  )
}
