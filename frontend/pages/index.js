import Head from 'next/head';
import { fetchAPITempoLisbon } from '../lib/api-fetch';
import TempoLisbon from '../components/TempoLisbon';

export default function Home({ tempoLisbon }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-black bg-cover bg-center"
        style={{
          'background-image':
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(/home/rio-tejo.jpeg)',
        }}
      >
        <Head>
          <title>LinsTur - Viajar é preciso.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex items-center justify-center md:px-40 md:py-16 text-center rounded-lg">
          <div className="">
            <TempoLisbon tempoLisbon={tempoLisbon} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [tempoLisbon] = await Promise.all([fetchAPITempoLisbon()]);

  return {
    props: { tempoLisbon },
    revalidate: 1,
  };
}
