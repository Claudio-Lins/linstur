import Head from 'next/head';
import Image from 'next/image';
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
          <meta
            name="description"
            content="Site destinado ao Turismo em Portugal"
          />
        </Head>
        <div className='bg-gray-50 opacity-90 rounded-md flex items-center justify-center mb-8 px-14 py-4 md:p-10 md:w-1/4'>
          <Hero />
        </div>
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

function Hero() {
  return (
    <>
    <div className="space-y-4">
    
      <div className='text-center text-4xl font-bold text-gray-700 block'>LinsTur</div>
      <div className=' text-center text-xl font-thin text-gray-700'>+351 910 344 904</div>
    
<div className='flex'>
      <Image
      src='/social-network/005-instagram.svg'
      alt='Instagram'
      height='20'
      width='20'
      />
    <div className='text-center text-base mx-auto font-thin text-gray-700'>linstur_Portugal</div>
    </div>
    </div>
  </>
  );
}
