import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { gql } from "@/.graphql/gql";
import { GetStaticProps } from 'next';
import client from "@/apollo-client";


const GET_HOMEPAGE = gql(`
  query GetHomepage {
    homepage {
      data {
        id
        attributes {
          hero_title
          hero_description
        }
      }
    }
  }
`);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_HOMEPAGE });
  return {
    props: {
      data: data?.homepage?.data?.attributes
    }
  };
}

export default function Home({ 
  data
}: {
  data : {
    hero_title: string,
    hero_description: string
  }
}) {
  return (
    <>
      <Head>
        <title>Supabase Strapi Next Starter</title>
        <meta name="description" content="Awesome way to start a CMS driven application"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          {data.hero_title}
        </h1>
        <p>{data.hero_description}</p>
      </main>
    </>
  )
}
