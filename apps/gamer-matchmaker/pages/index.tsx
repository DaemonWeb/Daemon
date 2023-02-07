import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '@/components/Accounts';


export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>Gamer Matchmaker</title>
        <meta name="description" content="A matchmaking platform for connecting like minded gamers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container' style={{padding: '50px 0 100px 0' }}>
        {!session ? (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa}} theme="dark"/>
        ) : (
          <Account session={session} />
        )}
      </main>
    </>
  )
}
